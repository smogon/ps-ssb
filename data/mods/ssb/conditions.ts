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
		onStart() {
			this.add(`c:|${getName('BreadLoeuf')}|I loeuf you <3`);
		},
		// onSwitchOut implemented in ability instead
		onFaint() {
			this.add(`c:|${getName('BreadLoeuf')}|Oh, ma vie... c'est 'pitable'...`);
		},
		onFoeFaint(target, source, effect) {
			if (source === this.effectState.target && effect?.name === 'Painful Exit') {
				this.add(`c:|${getName('BreadLoeuf')}|Ashes to ashes, crust to crust.`);
			} else {
				this.add(`c:|${getName('BreadLoeuf')}|Ope, someone's swallowing fishes.`);
			}
		},
	},
	kennedy: {
		noCopy: true,
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
		},
		onSwitchOut() {
			this.add(`c:|${getName('Kennedy')}|!lastfm`);
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
			this.add(`c:|${getName('A Quag To The Past')}|FUCK OFF, REALLY?????`);
		},
		onSourceAfterFaint(length, target, source, effect) {
			const message = this.sample(['ALLEZZZZZ', 'VAMOSSSSS', 'FORZAAAAA', 'LET\'S GOOOOO']);
			this.add(`c:|${getName('Kennedy')}|${message}`);
			if (source.species.id === 'Cinderace' && this.field.pseudoWeather['anfieldatmosphere'] &&
				!source.transformed && effect?.effectType === 'Move' && source.hp && source.side.foePokemonLeft()) {
				this.add('-activate', source, 'ability: Battle Bond');
				source.formeChange('Cinderace-Gmax', this.effect, true);
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

	// Existing effects
	flinch: {
		inherit: true,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'flinch');
			this.runEvent('Flinch', pokemon);
			if (pokemon.name === 'Kennedy') {
				this.add(`c:|${getName('Kennedy')}|LOOOOOOL ffs`);
			}
			return false;
		},
	},
	stealthrock: {
		// this is a side condition
		onSideStart(side) {
			this.add('-sidestart', side, 'move: Stealth Rock');
		},
		onEntryHazard(pokemon) {
			if (pokemon.hasItem('heavydutyboots')) return;
			const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
			const damage = (pokemon.maxhp * Math.pow(2, typeMod) / 8) /
				(this.field.pseudoWeather['anfieldatmosphere'] ? 2 : 1);
			this.damage(damage);
		},
	},
	spikes: {
		// this is a side condition
		onSideStart(side) {
			this.add('-sidestart', side, 'Spikes');
			this.effectState.layers = 1;
		},
		onSideRestart(side) {
			if (this.effectState.layers >= 3) return false;
			this.add('-sidestart', side, 'Spikes');
			this.effectState.layers++;
		},
		onEntryHazard(pokemon) {
			if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
			const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
			const damage = (damageAmounts[this.effectState.layers] * pokemon.maxhp / 24) /
				(this.field.pseudoWeather['anfieldatmosphere'] ? 2 : 1);
			this.damage(damage);
		},
	},
	gmaxsteelsurge: {
		onSideStart(side) {
			this.add('-sidestart', side, 'move: G-Max Steelsurge');
		},
		onEntryHazard(pokemon) {
			if (pokemon.hasItem('heavydutyboots')) return;
			// Ice Face and Disguise correctly get typed damage from Stealth Rock
			// because Stealth Rock bypasses Substitute.
			// They don't get typed damage from Steelsurge because Steelsurge doesn't,
			// so we're going to test the damage of a Steel-type Stealth Rock instead.
			const steelHazard = this.dex.getActiveMove('Stealth Rock');
			steelHazard.type = 'Steel';
			const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
			const damage = (pokemon.maxhp * Math.pow(2, typeMod) / 8) /
				(this.field.pseudoWeather['anfieldatmosphere'] ? 2 : 1);
			this.damage(damage);
		},
	},
};
