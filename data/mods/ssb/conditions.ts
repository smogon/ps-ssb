import {getName} from './scripts';

export const Conditions: {[k: string]: ModdedConditionData & {innateName?: string}} = {
	/*
	// Example:
	userid: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Username')}|Switch In Message`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Username')}|Switch Out Message`);
		},
		onFaint() {
			this.add(`c:|${getName('Username')}|Faint Message`);
		},
		// Innate effects go here
	},
	IMPORTANT: Obtain the username from getName
	*/
	// Please keep statuses organized alphabetically based on staff member name!
	aeonic: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Kris')}|aeo you need to submit your switch in and out messages`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Kris')}|aeo forgot to fill out his switch messages so I'm here instead.`);
		},
		onFaint() {
			this.add(`c:|${getName('Aeonic')}|i guess they never miss huh`);
		},
	},
	aquagtothepast: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('A Quag To The Past')}|I'm coming out of my cage and I've been doing just fine`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('A Quag To The Past')}|so true`);
		},
		onFoeSwitchIn(pokemon) {
			if (pokemon.name === 'Aeonic') {
				this.add(`c:|${getName('A Quag To The Past')}|!randpoke natdex`);
				this.add(`c:|${getName('Aeonic')}|!randpoke natdex`);
			}
		},
		onFaint() {
			const lines = [
				'Anger he felt',
				'Before Showderp he knelt',
				'A moderator so quiet',
				'Inventing his riot',
				'[[]]',
				'Onward he gazed',
				'As his cattle had grazed',
				'Wolves on the hills',
				'Mom paying his bills',
				'[[]]',
				'His keyboard he used',
				'His power: abused',
				'"Silent as me"',
				'"You must be"',
				'[[]]',
				'The chatroom is dead',
				'Yet quickly he fled',
				'Before retaliation, he made fast',
				'A Quag To The Past',
			];
			for (const line of lines) {
				this.add(`c:|${getName('A Quag To The Past')}|${line}`);
			}
		},
	},
	breadloeuf: {
		noCopy: true,
		onStart(pokemon) {
			if (pokemon.foes()[0].name === "Mad Monty") {
				this.add(`c:|${getName('BreadLoeuf')}|Ope, sorry`);
			} else {
				this.add(`c:|${getName('BreadLoeuf')}|I loeuf you <3`);
			}
		},
		// onSwitchOut implemented in ability instead
		onFoeSwitchIn(pokemon) {
			if (pokemon.name === "Mad Monty") {
				this.add(`c:|${getName('BreadLoeuf')}|Ope, sorry`);
			}
		},
		onFaint() {
			this.add(`c:|${getName('BreadLoeuf')}|Oh, ma vie... c'est 'pitable'...`);
		},
		onFoeFaint(target, source, effect) {
			if (source === this.effectState.target && effect?.name === 'Painful Exit') {
				this.add(`c:|${getName('BreadLoeuf')}|Ashes to ashes, crust to crust.`);
			} else if (target.name === "Mad Monty") {
				this.add(`c:|${getName('BreadLoeuf')}|G.G, weather you like it or not`);
			} else {
				this.add(`c:|${getName('BreadLoeuf')}|Ope, someone's swallowing fishes.`);
			}
		},
	},
	coolcodename: {
		onStart(pokemon) {
			this.add(`c:|${getName('Coolcodename')}|LFGI ${pokemon.side.name}`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Coolcodename')}|right, i forgot i have a skill issue`);
		},
		onFaint() {
			this.add(`c:|${getName('Coolcodename')}|mb LOL`);
		},
	},
	deftinwolf: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('deftinwolf')}|Run, little rabbit.`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('deftinwolf')}|I'll give you a moment to say your prayers.`);
		},
		onFaint() {
			this.add(`c:|${getName('deftinwolf')}|Death is only the beginning.`);
		},
	},
	eli: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Eli')}|any`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Eli')}|ok bye`);
		},
		onFaint(pokemon) {
			const foePokemon = (pokemon.foes()[0].illusion || pokemon.foes()[0]).name;
			this.add(`c:|${getName('Eli')}|that wasn't very nice, ${foePokemon}.`);
		},
	},
	havi: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('havi')}|kos, or some say kosm`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('havi')}|grant us eyes, grant us eyes`);
		},
		onFaint() {
			this.add(`c:|${getName('havi')}|the nightmare swirls and churns unending n_n`);
		},
	},
	hsy: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('hsy')}|BANJO!`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('hsy')}|LEMME SCRAP COWARD`);
		},
		onFaint() {
			this.add(`c:|${getName('hsy')}|https://www.youtube.com/watch?v=g104OJIh9hs`);
		},
	},
	ironwater: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('ironwater')}|Jirachi Ban Hammer!`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('ironwater')}|Let me grab a bigger hammer`);
		},
		onFaint() {
			this.add(`c:|${getName('ironwater')}|I'll ban you in the next game...`);
		},
	},
	irpachuza: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Irpachuza!')}|Hf. I never say gl because I sincerely don't want my oppo to have better luck than me in rands n.n`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Irpachuza!')}|bye and HOOP HOOP n.n`);
		},
		onFaint(pokemon) {
			this.add(`c:|${getName('Irpachuza!')}|how DARE YOU ${pokemon.side.foe.name} ;-; n.n`);
		},
		innateName: "Prankster",
		desc: "This Pokemon's non-damaging moves have their priority increased by 1. Opposing Dark-type Pokemon are immune to these moves, and any move called by these moves, if the resulting user of the move has this Ability.",
		shortDesc: "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
	},
	kennedy: {
		noCopy: true,
		innateName: "Battle Bond",
		shortDesc: "After KOing a Pokemon: becomes Cinderace-Gmax.",
		onStart(target, source, effect) {
			const message = this.sample(['Justice for the 97', 'up the reds']);
			this.add(`c:|${getName('Kennedy')}|${message}`);
			if (source && source.name === 'Clementine') {
				if (source.volatiles['flipped']) {
					source.removeVolatile('flipped');
					this.add(`c:|${getName('Kennedy')}|┬──┬◡ﾉ(° -°ﾉ)`);
				} else {
					source.addVolatile('flipped', target, this.effect);
					this.add(`c:|${getName('Kennedy')}|(╯°o°）╯︵ ┻━┻`);
				}
			}
			if (target.species.id === 'cinderacegmax' && !target.terastallized) {
				this.add('-start', target, 'typechange', target.getTypes(true, true).join('/'), '[silent]');
			}
		},
		onSwitchOut() {
			this.add(`c:|${getName('Kennedy')}|!lastfm`); // TODO replace
			this.add(`c:|${getName('Kennedy')}|Whilst I'm gone, stream this ^`);
		},
		onFoeSwitchIn(pokemon) {
			switch ((pokemon.illusion || pokemon).name) {
			case 'Links':
				this.add(`c:|${getName('Kennedy')}|Blue and white shite, blue and white shite, hello, hello.`);
				this.add(`c:|${getName('Kennedy')}|Blue and white shite, blue and white shite, hello, hello.`);
				break;
			case 'Clementine':
				this.add(`c:|${getName('Kennedy')}|Not the Fr*nch....`);
				break;
			case 'Kris':
				this.add(`c:|${getName('Kennedy')}|fuck that`);
				this.effectState.target.faint();
				this.add('message', 'Kennedy fainted mysteriously.....');
				break;
			}
		},
		onFaint() {
			this.add(`c:|${getName('Kennedy')}|FUCK OFF, REALLY?????`);
		},
		onSourceAfterFaint(length, target, source, effect) {
			const message = this.sample(['ALLEZZZZZ', 'VAMOSSSSS', 'FORZAAAAA', 'LET\'S GOOOOO']);
			this.add(`c:|${getName('Kennedy')}|${message}`);
			if (source.species.id === 'cinderace' && this.field.pseudoWeather['anfieldatmosphere'] &&
				!source.transformed && effect?.effectType === 'Move' && source.hp && source.side.foePokemonLeft()) {
				this.add('-activate', source, 'ability: Battle Bond');
				source.formeChange('Cinderace-Gmax', this.effect, true);
				source.baseMaxhp = Math.floor(Math.floor(
					2 * source.species.baseStats['hp'] + source.set.ivs['hp'] + Math.floor(source.set.evs['hp'] / 4) + 100
				) * source.level / 100 + 10);
				const newMaxHP = source.volatiles['dynamax'] ? (2 * source.baseMaxhp) : source.baseMaxhp;
				source.hp = newMaxHP - (source.maxhp - source.hp);
				source.maxhp = newMaxHP;
				this.add('-heal', source, source.getHealth, '[silent]');
			}
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add(`c:|${getName('Kennedy')}|NAAA FUCK OFF, I'd rather be dead`);
				pokemon.faint();
				this.add('message', 'Kennedy would have been infatuated but fainted mysteriously');
			}
		},
		onSourceCriticalHit(pokemon, source, move) {
			this.add(`c:|${getName('Kennedy')}|LOOOOOOL ffs`);
		},
		onFlinch(pokemon) {
			if (pokemon.illusion) return;
			this.add(`c:|${getName('Kennedy')}|LOOOOOOL ffs`);
		},
	},
	kolochu: {
		noCopy: true,
		onStart(pokemon) {
			const foe = pokemon.foes()[0];
			if (foe?.name === 'Rumia') {
				this.add(`c:|${getName('kolochu ✮彡')}|You come around here often?`);
			} else if (foe?.name === 'spoo') {
				this.add(`c:|${getName('kolochu ✮彡')}|Big bald head spotted...`);
			} else if (foe?.name === 'ausma') {
				this.add(`c:|${getName('kolochu ✮彡')}|The weekly Smogon furry convention starts NOW`);
			} else if (foe?.name === 'Peary') {
				this.add(`c:|${getName('kolochu ✮彡')}|Any arters or culturers?`);
			} else {
				this.add(`c:|${getName('kolochu ✮彡')}|Hey, howzit!`);
			}
		},
		onSwitchOut() {
			const gif = "https://cdn.discordapp.com/emojis/659987060794327051.gif?size=160&quality=lossless";
			this.add(`c:|${getName('kolochu ✮彡')}|/html <img src="${gif}" width="50" height="50" />`);
		},
		onFaint() {
			this.add(`c:|${getName('kolochu ✮彡')}|Tell.. My wife... She STINKS!!`);
		},
	},
	kris: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Kris')}|ok`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Kris')}|ok`);
		},
		onFaint() {
			this.add(`c:|${getName('Kris')}|ok`);
		},
	},
	krytocon: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Krytocon')}|:3`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Krytocon')}|PartMan is a nerd`);
		},
		onFaint() {
			this.add(`c:|${getName('Krytocon')}|D:`);
		},
	},
	lumari: {
		noCopy: true,
		// quotes added later
		onSwitchOut(pokemon) {
			pokemon.heal(pokemon.baseMaxhp / 3);
		},
		innateName: "Regenerator",
		shortDesc: "User will heal 33% of their max HP on switch-out.",
	},
	madmonty: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Mad Monty')}|I'm here to make sure you don't get eaten by llamas!`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Mad Monty')}|Ope! The Library's on fire. Gotta tend to that for a sec...`);
		},
		onFaint() {
			this.add(`c:|${getName('Mad Monty')}|Well great. Now the llamas are gonna come back. Is that what you wanted?`);
		},
	},
	mathy: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Mathy')}|Nooooo i broke tera again`);
		},
		onSwitchOut(pokemon) {
			this.add(`c:|${getName('Mathy')}|whatever i'll make ${pokemon.foes()[0].name} fix it`);
		},
		onFaint() {
			this.add(`c:|${getName('Mathy')}|thanks for making my job harder :/`);
		},
	},
	mex: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Mex')}|Time to make the donuts.`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Mex')}|Brb, there's a Dialga raid.`);
		},
		onFaint() {
			this.add(`c:|${getName('Mex')}|pain.`);
		},
	},
	mia: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Mia')}|git pull ps mia`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Mia')}|git switch`);
		},
		onFaint() {
			this.add(`c:|${getName('Mia')}|git checkout --detach HEAD && git commit -m "war crimes"`);
		},
	},
	phoopes: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('phoopes')}|phoopes! (There It Is)`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('phoopes')}|phoopes! (There He Goes)`);
		},
		onFaint() {
			this.add(`c:|${getName('phoopes')}|Jynx! Knock on wood`);
		},
	},
	rumia: {
		noCopy: true,
		onStart(pokemon) {
			const foe = pokemon.foes()[0];
			if (foe?.name === 'Kolochu') {
				this.add(`c:|${getName('Rumia')}|OMG who could that be (⁠●⁠♡⁠∀⁠♡⁠)`);
			} else {
				this.add(`c:|${getName('Rumia')}|is the mon in front of me the edible kind?`);
			}
		},
		onSwitchOut(pokemon) {
			const foe = pokemon.foes()[0];
			if (foe?.name === 'Kolochu') {
				this.add(`c:|${getName('Rumia')}|i cant bring myself to do this...`);
			} else {
				this.add(`c:|${getName('Rumia')}|brb ^_^`);
			}
		},
		onFaint(pokemon) {
			const foe = pokemon.foes()[0];
			if (foe?.name === 'Kolochu') {
				this.add(`c:|${getName('Rumia')}|this is the best way to go out...`);
			} else {
				this.add(`c:|${getName('Rumia')}|is that sooooo...`);
			}
		},
	},
	scotteh: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Scotteh')}|\`\`Compilation completed successfully. Executing...\`\``);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Scotteh')}|\`\`Execution temporarily paused.\`\``);
		},
		onFaint() {
			this.add(`c:|${getName('Scotteh')}|\`\`Segmentation fault (core dumped)\`\``);
		},
	},
	sharpclaw: {
		noCopy: true,
		onStart(pokemon) {
			if (pokemon.species.name === 'Sneasel') {
				this.add(`c:|${getName('sharp_claw')}|Hi, I'm Tumble! hf :D`);
			} else {
				this.add(`c:|${getName('sharp_claw')}|Hi, I'm Rough! gl >:)`);
			}
		},
		onSwitchOut(pokemon) {
			if (pokemon.species.name === 'Sneasel') {
				this.add(`c:|${getName('sharp_claw')}|brb, getting my brother :3`);
			} else {
				this.add(`c:|${getName('sharp_claw')}|brb, getting my sister C:`);
			}
		},
		onFaint(pokemon) {
			if (pokemon.species.name === 'Sneasel') {
				this.add(`c:|${getName('sharp_claw')}|ur no fun ;~;`);
			} else {
				this.add(`c:|${getName('sharp_claw')}|ur no fun T_T`);
			}
		},
	},
	snakerattler: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('snake_rattler')}|CAP Concept: Pure Utility Pokemon`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('snake_rattler')}|CAP is a community focused project that creates singular Pokemon through structured Smogon based discussion threads. We define a concept to build around and proceed through various stages to determine typing, ability, stats, and movepool to complement that concept. We also run stages to determine a CAP's art, name, Pokedex entry, and sprite, so even if you're not a competitive Pokemon person you can get involved. At the end of each process we implement each CAP here on Pokemon Showdown!, where they are made available with the rest of our creations in the CAP metagame, found under 'S/V Singles'.`);
		},
		onFaint() {
			this.add(`c:|${getName('snake_rattler')}|CAP does not accept personal creations. This refers to any idea for a Pokemon that already has predefined typing, stats, abilities, movepool, name, art, pokedex entries, weight, height, or even generic themes such as "rabbit" or "angry". These facets of a Pokemon are all decided through community discussion in CAP during the CAP process. If you think you have an idea for a Pokemon that does not define these features, you may have a concept. CAP bases our Pokemon around concepts that look to explore the mechanics behind Pokemon and we take open submissions whenever we start a new project. Examples of past concepts include Perfect Sketch User, Momentum, Trapping mechanics, delayed move user, and weather enabler.`);
		},
	},
	spoouser: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('spoo')}|heyy girlypop`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('spoo')}|oh nah`);
		},
		onFaint() {
			this.add(`c:|${getName('spoo')}|dies`);
		},
	},
	thejesucristoosama: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('TheJesucristoOsAma')}|In the name of the Father, the Son and the Holy Spirit. I bless you, Amen.`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('TheJesucristoOsAma')}|Oh well, I think it's time to call my apostles.`);
		},
		onFaint() {
			this.add(`c:|${getName('TheJesucristoOsAma')}|And that's how I've died for the third time, I'll go to host a game at eventos.`);
		},
	},
	traceuser: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('trace')}|I'm both the beginning and the end.`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('trace')}|Why does the violence never end?`);
		},
		onFaint() {
			this.add(`c:|${getName('trace')}|How disappointingly short a dream lasts.`);
		},
	},
	ut: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('UT')}|I just hope both teams have fun!`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('UT')}|this path is reckless`);
		},
		onFaint() {
			this.add(`c:|${getName('UT')}|screaming, crying, perfect storm`);
		},
	},
	violet: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Vio͜͡let')}|...Heed my words. I am Malenia, Blade of Miquella. And I have never known defeat.`);
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				if (source?.m.phaseChange) {
					this.add(`c:|${getName('Vio͜͡let')}|Let your flesh be consumed. By the scarlet rot.`);
				} else {
					this.add(`c:|${getName('Vio͜͡let')}|I am Malenia, Blade of Miquella.`);
				}
			}
		},
		onFaint() {
			this.add(`c:|${getName('Vio͜͡let')}|Your strength, extraordinary… The mark... of a true Lord…`);
		},
	},
	yellowpaint: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Yellow Paint')}|cheers`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Yellow Paint')}|luckynbad`);
		},
		onFaint() {
			this.add(`c:|${getName('Yellow Paint')}|The canvas is filled with different screams.`);
		},
	},
	zalm: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('Zalm')}|<(:O)00000>`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('Zalm')}|brb gonna check if my lasagne didn't explode e-e`);
		},
		onFaint() {
			this.add(`c:|${getName('Zalm')}|I should have picked an actual fish pokémon like veluza instead...`);
		},
	},
	zee: {
		noCopy: true,
		onStart() {
			this.add(`c:|${getName('zee')}|So is this your first VGC tournament?`);
		},
		onSwitchOut() {
			this.add(`c:|${getName('zee')}|Sorry, I've got a plane to catch!`);
		},
		onFaint() {
			this.add(`c:|${getName('zee')}|Hey everyone it's been a great time working with you all in this Super Staff Bros battle but I think it's the right time for me to step down. Thank you all and see you around.`);
		},
	},

	// Custom effects
	stormsurge: {
		name: 'StormSurge',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('damprock')) {
				return 8;
			}
			return 5;
		},
		onEffectivenessPriority: -1,
		onEffectiveness(typeMod, target, type, move) {
			if (move?.effectType === 'Move' && move.category !== 'Status' && type === 'Flying' && typeMod > 0) {
				this.add('-fieldactivate', 'Storm Surge');
				return 0;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.flags['wind']) {
				this.debug('Storm Surge wind boost');
				return this.chainModify(1.2);
			}
			if (move.type === 'Water') {
				this.debug('Storm Surge water boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Fire') {
				this.debug('Storm Surge fire suppress');
				return this.chainModify(0.5);
			}
		},
		onAccuracy(accuracy, attacker, defender, move) {
			if (move?.flags['wind'] && !attacker.hasItem('utilityumbrella')) return true;
			return accuracy;
		},
		onFieldStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'StormSurge', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'StormSurge');
			}
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'StormSurge', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},

	// Effects needed to be overriden for things to happen
	attract: {
		onStart(pokemon, source, effect) {
			if (!(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
				if (effect.name !== 'The Love Of Christ') {
					this.debug('incompatible gender');
					return false;
				}
			}
			if (!this.runEvent('Attract', pokemon, source)) {
				this.debug('Attract event failed');
				return false;
			}

			if (effect.name === 'Cute Charm') {
				this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
			} else if (effect.name === 'Destiny Knot') {
				this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
			} else {
				this.add('-start', pokemon, 'Attract');
			}
		},
		onUpdate(pokemon) {
			if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['attract']) {
				this.debug('Removing Attract volatile on ' + pokemon);
				pokemon.removeVolatile('attract');
			}
		},
		onBeforeMovePriority: 2,
		onBeforeMove(pokemon, target, move) {
			this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectState.source);
			if (this.randomChance(1, 2)) {
				this.add('cant', pokemon, 'Attract');
				return false;
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Attract', '[silent]');
		},
	},
};
