import {getName} from "./scripts";

export const Abilities: {[k: string]: ModdedAbilityData} = {
	/*
	// Example
	abilityid: {
		desc: "", // long description
		shortDesc: "", // short description, shows up in /dt
		name: "Ability Name",
		// The bulk of an ability is not easily shown in an example since it varies
		// For more examples, see https://github.com/smogon/pokemon-showdown/blob/master/data/abilities.ts
	},
	*/
	// Please keep abilites organized alphabetically based on staff member name!
	// Aeonic
	changetempo: {
		shortDesc: "Summons Trick Room on switch-in and negates the user's charge/recharge.",
		name: "Change Tempo",
		onStart(target) {
			if (!this.field.getPseudoWeather('trickroom')) {
				this.add('-ability', target, 'Change Tempo');
				this.field.addPseudoWeather('trickroom', target, target.getAbility());
			}
		},
		onChargeMove(pokemon, target, move) {
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false;
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['mustrecharge']) pokemon.removeVolatile('mustrecharge');
		},
	},

	// A Quag To The Past
	quagofruin: {
		shortDesc: "Active Pokemon without this Ability have their Def multiplied by 0.85. Ignores abilities.",
		name: "Quag of Ruin",
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Quag of Ruin');
		},
		onAnyModifyDef(def, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Quag of Ruin')) return;
			if (!move.ruinedDef?.hasAbility('Quag of Ruin')) move.ruinedDef = abilityHolder;
			if (move.ruinedDef !== abilityHolder) return;
			this.debug('Quag of Ruin Def drop');
			return this.chainModify(0.85);
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
	},
	clodofruin: {
		shortDesc: "Active Pokemon without this Ability have their Atk multiplied by 0.85. Ignores stat changes.",
		name: "Quag of Ruin",
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Clod of Ruin');
		},
		onAnyModifyAtk(atk, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Clod of Ruin')) return;
			if (!move.ruinedAtk?.hasAbility('Clod of Ruin')) move.ruinedAtk = abilityHolder;
			if (move.ruinedAtk !== abilityHolder) return;
			this.debug('Clod of Ruin Atk drop');
			return this.chainModify(0.85);
		},
		onAnyModifyBoost(boosts, pokemon) {
			const unawareUser = this.effectState.target;
			if (unawareUser === pokemon) return;
			if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['def'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		isBreakable: true,
	},

	// BreadLoeuf
	painfulexit: {
		desc: "When this Pokemon switches out, foes lose 25% HP.",
		name: "Painful Exit",
		onSwitchOut(pokemon) {
			this.add(`c:|${getName('BreadLoeuf')}|Just kidding!! Take this KNUCKLE SANDWICH`);
			for (const foe of pokemon.foes()) {
				if (!foe || foe.fainted || !foe.hp) continue;
				this.add(`-anim`, pokemon, "Tackle", foe);
				this.damage(foe.hp / 4, foe, pokemon);
			}
		},
	},

	// Mad Monty
	climatechange: {
		shortDesc: "1.5 SpA in sun, 1.5 Def/SpD in snow, 50% HP in rain. Changes forme/weather.",
		name: "Climate Change",
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
				this.field.setWeather('raindance');
				break;
			case 'raindance':
				this.field.setWeather('snow');
				break;
			default:
				this.field.setWeather('sunnyday');
				break;
			}
		},
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null;
			let relevantMove = null;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.species.id !== 'castformsunny') {
					forme = 'Castform-Sunny';
					relevantMove = 'Solar Beam';
				}
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.species.id !== 'castformrainy') {
					forme = 'Castform-Rainy';
					relevantMove = 'Thunder';
					this.heal(pokemon.baseMaxhp / 2);
				}
				break;
			case 'hail':
			case 'snow':
				if (pokemon.species.id !== 'castformsnowy') {
					forme = 'Castform-Snowy';
					relevantMove = 'Aurora Veil';
				}
				break;
			default:
				if (pokemon.species.id !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');

				if (!relevantMove) return;
				const move = this.dex.moves.get(relevantMove);

				const sketchIndex = Math.max(
					pokemon.moves.indexOf("solarbeam"), pokemon.moves.indexOf("thunder"), pokemon.moves.indexOf("auroraveil")
				);
				if (sketchIndex < 0) return;
				const carryOver = pokemon.moveSlots[sketchIndex].pp / pokemon.moveSlots[sketchIndex].maxpp;
				const sketchedMove = {
					move: move.name,
					id: move.id,
					pp: Math.floor((move.pp * 8 / 5) * carryOver),
					maxpp: (move.pp * 8 / 5),
					target: move.target,
					disabled: false,
					used: false,
				};
				pokemon.moveSlots[sketchIndex] = sketchedMove;
				pokemon.baseMoveSlots[sketchIndex] = sketchedMove;
			}
		},
		onModifySpA(spa, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifyDef(def, pokemon) {
			if (['hail', 'snow'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifySpD(spd, pokemon) {
			if (['hail', 'snow'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
	},

	// Mia
	hacking: {
		name: "Hacking",
		desc: "Hacks into PS and finds out if the enemy has any super effective moves.",
		onStart(pokemon) {
			this.add(`c:|${getName('Mia')}|One moment, please. One does not simply go into battle blind.`);
			const side = pokemon.side.id === 'p1' ? 'p2' : 'p1';
			this.add(
				`message`,
				(
					`ssh sim@pokemonshowdown.com && nc -U logs/repl/sim <<< ` +
					`"Users.get('mia').popup(battle.sides.get('${side}').pokemon.map(m => Teams.exportSet(m)))"`
				)
			);
			let warnMoves: (Move | Pokemon)[][] = [];
			let warnBp = 1;
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 150;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (bp === 1) bp = 80;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) {
						warnMoves = [[move, target]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move, target]);
					}
				}
			}
			if (!warnMoves.length) {
				this.add(`c:|${getName('Mia')}|Fascinating. None of your sets have any moves of interest.`);
				return;
			}
			const [warnMoveName, warnTarget] = this.sample(warnMoves);
			this.add(
				'message',
				`Mia hacked into PS and looked at her opponent's sets. ` +
					`${warnTarget.name}'s move ${warnMoveName} drew her eye.`
			);
			this.add(`c:|${getName('Mia')}|Interesting. With that in mind, bring it!`);
		},
	},

	// trace
	eyesofeternity: {
		shortDesc: "Moves used by/against this Pokemon always hit; only damaged by attacks.",
		name: "Eyes of Eternity",
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) {
				return true;
			}
			return accuracy;
		},
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
	},
};
