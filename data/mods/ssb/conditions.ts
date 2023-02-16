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
};
