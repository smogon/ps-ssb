export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	pokemon: {
		// Modified for Change Tempo
		getMoveTargets(move, target) {
			let targets: Pokemon[] = [];

			switch (move.target) {
			case 'all':
			case 'foeSide':
			case 'allySide':
			case 'allyTeam':
				if (!move.target.startsWith('foe')) {
					targets.push(...this.alliesAndSelf());
				}
				if (!move.target.startsWith('ally')) {
					targets.push(...this.foes(true));
				}
				if (targets.length && !targets.includes(target)) {
					this.battle.retargetLastMove(targets[targets.length - 1]);
				}
				break;
			case 'allAdjacent':
				targets.push(...this.adjacentAllies());
				// falls through
			case 'allAdjacentFoes':
				targets.push(...this.adjacentFoes());
				if (targets.length && !targets.includes(target)) {
					this.battle.retargetLastMove(targets[targets.length - 1]);
				}
				break;
			case 'allies':
				targets = this.alliesAndSelf();
				break;
			default:
				const selectedTarget = target;
				if (!target || (target.fainted && !target.isAlly(this)) && this.battle.gameType !== 'freeforall') {
					// If a targeted foe faints, the move is retargeted
					const possibleTarget = this.battle.getRandomTarget(this, move);
					if (!possibleTarget) return {targets: [], pressureTargets: []};
					target = possibleTarget;
				}
				if (this.battle.activePerHalf > 1 && !move.tracksTarget) {
					const isCharging = move.flags['charge'] && !this.volatiles['twoturnmove'] &&
						!(move.id.startsWith('solarb') && this.battle.field.isWeather(['sunnyday', 'desolateland'])) &&
						!((this.hasItem('powerherb') || this.hasAbility('changetempo')) && move.id !== 'skydrop');
					if (!isCharging) {
						target = this.battle.priorityEvent('RedirectTarget', this, this, move, target);
					}
				}
				if (move.smartTarget) {
					targets = this.getSmartTargets(target, move);
					target = targets[0];
				} else {
					targets.push(target);
				}
				if (target.fainted && !move.isFutureMove) {
					return {targets: [], pressureTargets: []};
				}
				if (selectedTarget !== target) {
					this.battle.retargetLastMove(target);
				}
			}

			// Resolve apparent targets for Pressure.
			let pressureTargets = targets;
			switch (move.pressureTarget) {
			case 'foeSide':
				pressureTargets = this.foes();
				break;
			case 'self':
				pressureTargets = [];
				break;
			// At the moment, there are no other supported targets.
			}

			return {targets, pressureTargets};
		},
	},
	actions: {
		// 1 mega per pokemon
		runMegaEvo(pokemon) {
			const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
			if (!speciesid) return false;

			pokemon.formeChange(speciesid, pokemon.getItem(), true);
			if (pokemon.canMegaEvo) {
				pokemon.canMegaEvo = null;
			} else {
				pokemon.canUltraBurst = null;
			}

			this.battle.runEvent('AfterMega', pokemon);

			// Visual mega type changes here
			if ([''].includes(pokemon.name) && !pokemon.illusion) {
				this.battle.add('-start', pokemon, 'typechange', pokemon.types.join('/'));
			}

			this.battle.add('-ability', pokemon, `${pokemon.getAbility().name}`);

			return true;
		},

		// Modded for Mega Rayquaza
		canMegaEvo(pokemon) {
			const species = pokemon.baseSpecies;
			const altForme = species.otherFormes && this.dex.species.get(species.otherFormes[0]);
			const item = pokemon.getItem();
			// Mega Rayquaza
			if (altForme?.isMega && altForme?.requiredMove &&
				pokemon.baseMoves.includes(this.battle.toID(altForme.requiredMove)) && !item.zMove) {
				return altForme.name;
			}
			// a hacked-in Megazard X can mega evolve into Megazard Y, but not into Megazard X
			if (item.megaEvolves === species.baseSpecies && item.megaStone !== species.name) {
				return item.megaStone;
			}
			return null;
		},

		// 1 Z per pokemon
		canZMove(pokemon) {
			if (pokemon.m.zMoveUsed ||
				(pokemon.transformed &&
					(pokemon.species.isMega || pokemon.species.isPrimal || pokemon.species.forme === "Ultra"))
			) return;
			const item = pokemon.getItem();
			if (!item.zMove) return;
			if (item.itemUser && !item.itemUser.includes(pokemon.species.name)) return;
			let atLeastOne = false;
			let mustStruggle = true;
			const zMoves: ZMoveOptions = [];
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.pp <= 0) {
					zMoves.push(null);
					continue;
				}
				if (!moveSlot.disabled) {
					mustStruggle = false;
				}
				const move = this.dex.moves.get(moveSlot.move);
				let zMoveName = this.getZMove(move, pokemon, true) || '';
				if (zMoveName) {
					const zMove = this.dex.moves.get(zMoveName);
					if (!zMove.isZ && zMove.category === 'Status') zMoveName = "Z-" + zMoveName;
					zMoves.push({move: zMoveName, target: zMove.target});
				} else {
					zMoves.push(null);
				}
				if (zMoveName) atLeastOne = true;
			}
			if (atLeastOne && !mustStruggle) return zMoves;
		},

		getZMove(move, pokemon, skipChecks) {
			const item = pokemon.getItem();
			if (!skipChecks) {
				if (pokemon.m.zMoveUsed) return;
				if (!item.zMove) return;
				if (item.itemUser && !item.itemUser.includes(pokemon.species.name)) return;
				const moveData = pokemon.getMoveData(move);
				// Draining the PP of the base move prevents the corresponding Z-move from being used.
				if (!moveData?.pp) return;
			}

			if (move.name === item.zMoveFrom) {
				return item.zMove as string;
			} else if (item.zMove === true && move.type === item.zMoveType) {
				if (move.category === "Status") {
					return move.name;
				} else if (move.zMove?.basePower) {
					return this.Z_MOVES[move.type];
				}
			}
		},
	},
};
