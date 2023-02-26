import RandomTeams from '../../random-teams';

export interface SSBSet {
	species: string;
	ability: string | string[];
	item: string | string[];
	gender: GenderName;
	moves: (string | string[])[];
	signatureMove: string;
	evs?: {hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number};
	ivs?: {hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number};
	nature?: string | string[];
	shiny?: number | boolean;
	level?: number;
	happiness?: number;
	skip?: string;
	teraType?: string | string[];
}
interface SSBSets {[k: string]: SSBSet}

export const ssbSets: SSBSets = {
	/*
	// Example:
	Username: {
		species: 'Species', ability: 'Ability', item: 'Item', gender: '',
		moves: ['Move Name', ['Move Name', 'Move Name']],
		signatureMove: 'Move Name',
		evs: {stat: number}, ivs: {stat: number}, nature: 'Nature', teraType: 'Type', level: 100, shiny: false,
	},
	// Species, ability, and item need to be captialized properly ex: Ludicolo, Swift Swim, Life Orb
	// Gender can be M, F, N, or left as an empty string
	// each slot in moves needs to be a string (the move name, captialized properly ex: Hydro Pump), or an array of strings (also move names)
	// signatureMove also needs to be capitalized properly ex: Scripting
	// You can skip Evs (defaults to 84 all) and/or Ivs (defaults to 31 all), or just skip part of the Evs (skipped evs are 0) and/or Ivs (skipped Ivs are 31)
	// You can also skip shiny, defaults to false. Level can be skipped (defaults to 100).
	// Nature needs to be a valid nature with the first letter capitalized ex: Modest
	*/
	// Please keep sets organized alphabetically based on staff member name!
	Aeonic: {
		species: 'Nosepass', ability: 'Change Tempo', item: 'Fossilized Fish', gender: 'M',
		moves: ['Ice Burn', 'Electro Drift', 'Milk Drink'],
		signatureMove: 'Memes That Burn The Sky',
		evs: {hp: 252, spa: 252, spd: 4}, ivs: {spe: 0}, nature: 'Quiet', teraType: 'Rock',
	},
	'A Quag To The Past': {
		species: 'Quagsire', ability: 'Quag of Ruin', item: 'Leftovers', gender: 'M',
		moves: ['Surging Strikes', 'Precipice Blades', 'Gunk Shot'],
		signatureMove: 'Sire Switch',
		evs: {hp: 252, def: 4, spd: 252}, nature: 'Careful', teraType: 'Water',
	},
	'A Quag To The Past-Clodsire': {
		species: 'Clodsire', ability: 'Clod of Ruin', item: 'Leftovers', gender: 'M',
		moves: ['Coil', 'Strength Sap', 'Toxic'],
		signatureMove: 'Sire Switch',
		evs: {hp: 252, def: 4, spd: 252}, nature: 'Careful', teraType: 'Poison', skip: 'A Quag To The Past',
	},
	Blitz: {
		species: 'Chi-Yu', ability: 'Blitz of Ruin', item: 'Life Orb', gender: 'N',
		moves: ['Fiery Wrath', 'Lava Plume', 'Nasty Plot'],
		signatureMove: 'Geyser Blast',
		evs: {def: 4, spa: 252, spe: 252}, nature: 'Modest', teraType: 'Water', shiny: true,
	},
	BreadLoeuf: {
		species: 'Dachsbun', ability: 'Painful Exit', item: 'Leftovers', gender: '',
		moves: ['Wish', 'Rest', 'Play Rough'],
		signatureMove: 'Baker\'s Douze Off',
		evs: {hp: 252, def: 252, spd: 4}, nature: 'Impish', teraType: 'Fairy',
	},
	Cake: {
		species: 'Dudunsparce-Three-Segment', ability: 'Not Enough Removal', item: 'Leftovers', gender: 'N',
		moves: [
			['Silk Trap', 'Obstruct', 'Max Guard', 'Spiky Shield', 'King\'s Shield', 'Protect', 'Detect', 'Baneful Bunker'],
			['Rapid Spin', 'Mortal Spin'],
			[
				'Rest', 'Lunar Blessing', 'Healing Wish', 'Aromatherapy',
				'Heal Bell', 'Copycat', 'Grass Whistle', 'Tearful Look', 'Transform',
			],
		],
		signatureMove: 'Shawn',
		evs: {hp: 252, def: 252, spd: 4}, nature: 'Impish', teraType: 'Ghost', shiny: 957,
	},
	Coolcodename: {
		species: 'Victini', ability: 'Firewall', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Searing Shot', 'Psychic', 'Dazzling Gleam'],
		signatureMove: 'Haxer\'s Will',
		evs: {spa: 252, spd: 4, spe: 252}, nature: 'Timid', teraType: 'Fairy', shiny: 1024,
	},
	deftinwolf: {
		species: 'Yveltal', ability: 'Sharpness', item: 'Dread Plate', gender: '',
		moves: ['Aerial Ace', 'Ceaseless Edge', 'Cross Poison'],
		signatureMove: 'Trivial Pursuit',
		evs: {atk: 252, spd: 4, spe: 252}, nature: 'Adamant', teraType: 'Poison',
	},
	Eli: {
		species: 'Thundurus', ability: 'Storm Surge', item: 'Heavy-Duty Boots', gender: 'F',
		moves: ['Wildbolt Storm', 'Sandsear Storm', 'Volt Switch'],
		signatureMove: 'Sustained Winds',
		evs: {spa: 252, spd: 4, spe: 252}, nature: 'Timid', teraType: 'Ground',
	},
	havi: {
		species: 'Gastly', ability: 'Mensis Cage', item: 'Leftovers', gender: 'F',
		moves: ['Astral Barrage', 'Moonblast', 'Substitute'],
		signatureMove: 'Augur of Ebrietas',
		evs: {spa: 252, spd: 4, spe: 252}, nature: 'Timid', teraType: 'Ghost',
	},
	hsy: {
		species: 'Ursaluna', ability: 'Hustle', item: 'Blunder Policy', gender: 'M',
		moves: ['Drill Peck', 'Egg Bomb', 'Metronome'],
		signatureMove: 'Wonder Wing',
		evs: {hp: 252, atk: 252, spe: 4}, nature: 'Adamant', teraType: 'Flying',
	},
	'in the hills': {
		species: 'Gligar', ability: 'Illiterit', item: 'Eviolite', gender: 'M',
		moves: ['Roost', 'Knock Off', 'Tidy Up'],
		signatureMove: '10-20-40',
		evs: {hp: 252, def: 4, spd: 252}, nature: 'Careful', teraType: 'Water',
	},
	ironwater: {
		species: 'Jirachi', ability: 'Good as Gold', item: 'Leftovers', gender: 'N',
		moves: ['Swords Dance', 'Zen Headbutt', 'Hammer Arm'],
		signatureMove: 'Jirachi Ban Hammer',
		evs: {atk: 252, spd: 4, spe: 252}, nature: 'Jolly', teraType: 'Steel',
	},
	'Irpachuza!': {
		species: 'Mr. Mime', ability: 'Mime knows best', item: 'Irpatuzinium Z', gender: 'M',
		moves: [['Destiny Bond', 'Lunar Dance'], 'Parting Shot', 'Taunt'],
		signatureMove: 'Fleur Cannon',
		evs: {hp: 252, spa: 4, spd: 252}, ivs: {atk: 0}, nature: 'Modest',
	},
	Kennedy: {
		species: 'Cinderace', ability: 'Anfield', item: 'Berserk Gene', gender: 'M',
		moves: ['Blaze Kick', ['Triple Kick', 'Trop Kick'], 'U-turn'],
		signatureMove: 'Hat-Trick',
		evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly', teraType: 'Any',
	},
	kolochu: {
		species: 'Pikachu', ability: 'Soul Surfer', item: 'Light Ball', gender: '',
		moves: ['Thunder', 'Volt Switch', 'Bouncy Bubble'],
		signatureMove: 'Hang Ten',
		evs: {hp: 4, spa: 252, spe: 252}, nature: 'Timid', teraType: 'Water',
	},
	Kris: {
		species: 'Nymble', ability: 'Cacophony', item: 'Heavy-Duty Boots', gender: 'N',
		moves: ['Boomburst', 'Bug Buzz', 'Torch Song'],
		signatureMove: 'ok',
		evs: {hp: 252, def: 4, spa: 252}, nature: 'Quiet', teraType: 'Normal',
	},
	Krytocon: {
		species: 'Mawile', ability: 'Curse of Dexit', item: 'Mawilite', gender: 'M',
		moves: ['Sucker Punch', 'Fire Lash', 'Play Rough'],
		signatureMove: 'Attack of Opportunity',
		evs: {hp: 252, atk: 252, spd: 4}, nature: 'Adamant', teraType: 'Any', shiny: 1024,
	},
	Lumari: {
		species: 'Ponyta-Galar', ability: 'Pyrotechnic', item: 'Eviolite', gender: 'F',
		moves: ['Substitute', ['Sappy Seed', 'Sizzly Slide'], 'Magical Torque'],
		signatureMove: 'Mystical Bonfire',
		evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly', teraType: 'Fairy',
	},
	'Mad Monty': {
		species: 'Castform', ability: 'Climate Change', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Weather Ball', 'Defog', ['Solar Beam', 'Thunder', 'Aurora Veil']],
		signatureMove: 'Storm Shelter',
		evs: {hp: 4, spa: 252, spe: 252}, nature: 'Modest', teraType: 'Rock',
	},
	Mathy: {
		species: 'Furret', ability: 'Dynamic Typing', item: 'Big Root', gender: 'M',
		moves: ['Bitter Blade', 'Swords Dance', 'Taunt'],
		signatureMove: 'Breaking Change',
		evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly', teraType: 'Ghost',
	},
	Mex: {
		species: 'Dialga', ability: 'Time Dilation', item: 'Adamant Orb', gender: 'N',
		moves: ['Dragon Pulse', 'Flash Cannon', ['Aura Sphere', 'Volt Switch', 'Meteor Beam']],
		signatureMove: 'Time Skip',
		evs: {hp: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid', teraType: 'Steel', shiny: true,
	},
	Mia: {
		species: 'Mewtwo', ability: 'Hacking', item: 'Mewtwonite X', gender: 'F',
		moves: ['Photon Geyser', 'Drain Punch', 'Iron Head'],
		signatureMove: 'Testing in Production',
		evs: {atk: 252, spa: 4, spe: 252}, nature: 'Jolly',
	},
	Peary: {
		species: 'Klinklang', ability: 'Levitate', item: 'Pearyum Z', gender: '',
		moves: ['Lock On', 'Sheer Cold', 'Substitute'],
		signatureMove: 'Gear Grind',
		evs: {hp: 252, def: 4, spe: 252}, nature: 'Jolly',
	},
	phoopes: {
		species: 'Jynx', ability: 'I Did It Again', item: 'Red Card', gender: 'F',
		moves: ['Lovely Kiss', 'Psychic', 'Toxic'],
		signatureMove: 'Gen 1 Blizzard',
		evs: {hp: 4, spa: 252, spe: 252}, nature: 'Timid', teraType: 'Ice',
	},
	ReturnToMonkey: {
		species: 'Oranguru', ability: 'Monke See Monke Do', item: 'Twisted Spoon', gender: 'M',
		moves: ['Hyper Voice', 'Psyshock', 'Focus Blast'],
		signatureMove: 'Monke Magic',
		evs: {hp: 252, def: 4, spa: 252}, ivs: {spe: 0}, nature: 'Quiet', teraType: 'Fighting',
	},
	Rumia: {
		species: 'Duskull', ability: 'Youkai of the Dusk', item: 'Eviolite', gender: 'F',
		moves: ['Infernal Parade', 'Strength Sap', 'Mortal Spin'],
		signatureMove: 'Midnight Bird',
		evs: {hp: 252, def: 252, spa: 4}, nature: 'Bold', teraType: 'Dark',
	},
	Scotteh: {
		species: 'Suicune', ability: 'Water Absorb', item: 'Leftovers', gender: '',
		moves: ['Calm Mind', 'Scald', 'Ice Beam'],
		signatureMove: 'Purification',
		evs: {hp: 252, def: 252, spd: 4}, nature: 'Bold', teraType: 'Water',
	},
	'sharp_claw': {
		species: 'Sneasel', ability: 'Rough and Tumble', item: 'Heavy-Duty Boots', gender: 'F',
		moves: ['Knock Off', 'Ice Spinner', 'Ice Shard'],
		signatureMove: 'Treacherous Traversal',
		evs: {atk: 252, spd: 4, spe: 252}, nature: 'Jolly', teraType: 'Poison',
	},
	'sharp_claw-Rough': {
		species: 'Sneasel-Hisui', ability: 'Rough and Tumble', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Combat Torque', 'Noxious Torque', 'Mach Punch'],
		signatureMove: 'Treacherous Traversal',
		evs: {atk: 252, spd: 4, spe: 252}, nature: 'Jolly', teraType: 'Poison', skip: 'sharp_claw',
	},
	'smely socks': {
		species: 'Mimikyu', ability: 'Masquerade', item: 'Ghostium Z', gender: 'F',
		moves: ['Protect', 'Substitute', 'Phantom Force'],
		signatureMove: 'Stockholm Syndrome',
		evs: {atk: 252, spd: 4, spe: 252}, nature: 'Jolly',
	},
	'snake_rattler': {
		species: 'Fidgit', ability: 'Persistent', item: ['Mental Herb', 'Covert Cloak'], gender: 'M',
		moves: ['Tailwind', 'Healing Wish', 'Taunt'],
		signatureMove: 'Concept Relevant',
		evs: {hp: 252, def: 4, spe: 252}, nature: 'Jolly', teraType: 'Water',
	},
	spoo: {
		species: 'Mumbao', ability: 'Dazzling', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Will-O-Wisp', 'Strength Sap', 'Parting Shot'],
		signatureMove: 'spoo',
		evs: {hp: 252, spa: 4, spe: 252}, nature: 'Timid', teraType: 'Steel',
	},
	'spoo-Jumbao': {
		species: 'Jumbao', ability: 'Drought', item: 'Heavy-Duty Boots', gender: 'M',
		moves: ['Moonblast', 'Giga Drain', 'Fiery Dance'],
		signatureMove: 'spoo',
		evs: {hp: 252, spa: 252, spd: 4}, nature: 'Modest', teraType: 'Fire', skip: 'spoo',
	},
	Theia: {
		species: 'Litwick', ability: 'Power Abuse', item: 'Eviolite', gender: 'F',
		moves: ['Shadow Ball', 'Flamethrower', 'Giga Drain'],
		signatureMove: 'Body Count',
		evs: {hp: 252, spa: 252, spd: 4}, ivs: {atk: 0}, nature: 'Modest', teraType: 'Ghost',
	},
	TheJesucristoOsAma: {
		species: 'Arceus', ability: 'The Grace Of Jesus Christ', gender: 'N',
		item: [
			'Draco Plate', 'Dread Plate', 'Earth Plate', 'Fist Plate', 'Flame Plate', 'Icicle Plate', 'Insect Plate', 'Iron Plate', 'Meadow Plate',
			'Mind Plate', 'Pixie Plate', 'Sky Plate', 'Splash Plate', 'Spooky Plate', 'Stone Plate', 'Toxic Plate', 'Zap Plate',
		],
		moves: ['Earthquake', 'Surf', 'Judgment'],
		signatureMove: 'The Love Of Christ',
		evs: {hp: 4, spa: 252, spe: 252}, nature: 'Timid',
	},
	trace: {
		species: 'Delphox', ability: 'Eyes of Eternity', item: 'Life Orb', gender: 'F',
		moves: ['Calm Mind', 'Inferno', 'Recover'],
		signatureMove: 'Chronostasis',
		evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Modest', teraType: 'Psychic',
	},
	UT: {
		species: 'Talonflame', ability: 'Gale Guard', item: 'Life Orb', gender: 'M',
		moves: ['Brave Bird', 'Roost', ['Swords Dance', 'Flare Blitz', 'Will-O-Wisp']],
		signatureMove: 'Wingover',
		evs: {hp: 4, atk: 252, spe: 252}, nature: 'Adamant', teraType: 'Flying',
	},
	'Vio͜͡let': {
		species: 'Iron Valiant', ability: 'Scarlet Aeonia', item: 'Auspicious Armor', gender: 'F',
		moves: ['Bitter Blade', 'Cross Poison', 'No Retreat'],
		signatureMove: 'Waterfowl Dance',
		evs: {atk: 252, spd: 4, spe: 252}, nature: 'Adamant', teraType: 'Fairy', shiny: true,
	},
	'Yellow Paint': {
		species: 'Rotom-Frost', ability: 'Yellow Magic', item: 'Chilan Berry', gender: 'N',
		moves: ['Thunderbolt', 'Blizzard', 'Ion Deluge'],
		signatureMove: 'Whiteout',
		evs: {hp: 252, spa: 252, spe: 4}, nature: 'Modest', teraType: 'Steel', shiny: 2,
	},
	Zalm: {
		species: 'Weedle', ability: 'Water Bubble', item: 'Clear Amulet', gender: '',
		moves: ['Surging Strikes', 'Attack Order', 'Dire Claw'],
		signatureMove: 'Dud ur a fish',
		evs: {hp: 4, atk: 252, spe: 252}, nature: 'Adamant', teraType: 'Water',
	},
	zee: {
		species: 'Lilligant-Hisui', ability: 'Chlorophyll', item: 'Heat Rock', gender: 'F',
		moves: [['Close Combat', 'Axe Kick'], ['Solar Blade', 'Seed Bomb'], 'Victory Dance'],
		signatureMove: 'Solar Summon',
		evs: {hp: 80, atk: 176, spe: 252}, nature: 'Adamant', teraType: 'Fire',
	},
};

export class RandomStaffBrosTeams extends RandomTeams {
	randomStaffBrosTeam(options: {inBattle?: boolean} = {}) {
		this.enforceNoDirectCustomBanlistChanges();

		const team: PokemonSet[] = [];
		const debug: string[] = []; // Set this to a list of SSB sets to override the normal pool for debugging.
		const ruleTable = this.dex.formats.getRuleTable(this.format);
		const monotype = ruleTable.has('sametypeclause') ? this.sample([...this.dex.types.names()]) : false;

		let pool = debug.length ? debug : Object.keys(ssbSets);
		if (monotype && !debug.length) {
			pool = pool.filter(x => this.dex.species.get(ssbSets[x].species).types.includes(monotype));
		}
		const typePool: {[k: string]: number} = {};
		let depth = 0;
		while (pool.length && team.length < this.maxTeamSize) {
			if (depth >= 200) throw new Error(`Infinite loop in Super Staff Bros team generation.`);
			depth++;
			const name = this.sampleNoReplace(pool);
			const ssbSet: SSBSet = this.dex.deepClone(ssbSets[name]);
			if (ssbSet.skip) continue;

			// Enforce typing limits
			if (!(debug.length || monotype)) { // Type limits are ignored for debugging, monotype, or memes.
				const species = this.dex.species.get(ssbSet.species);
				if (this.forceMonotype && !species.types.includes(this.forceMonotype)) continue;

				const weaknesses = [];
				for (const type of this.dex.types.names()) {
					const typeMod = this.dex.getEffectiveness(type, species.types);
					if (typeMod > 0) weaknesses.push(type);
				}
				let rejected = false;
				for (const type of weaknesses) {
					if (typePool[type] === undefined) typePool[type] = 0;
					if (typePool[type] >= 3) {
						// Reject
						rejected = true;
						break;
					}
				}
				if (ssbSet.ability === 'Wonder Guard') {
					if (!typePool['wonderguard']) {
						typePool['wonderguard'] = 1;
					} else {
						rejected = true;
					}
				}
				if (rejected) continue;
				// Update type counts
				for (const type of weaknesses) {
					typePool[type]++;
				}
			}

			let teraType: string | undefined;
			if (ssbSet.teraType) {
				teraType = ssbSet.teraType === 'Any' ?
					this.sample(this.dex.types.all().map(x => x.name)) :
					this.sampleIfArray(ssbSet.teraType);
			}

			const set: PokemonSet = {
				name: name,
				species: ssbSet.species,
				item: Array.isArray(ssbSet.item) ? this.sampleNoReplace(ssbSet.item) : ssbSet.item,
				ability: Array.isArray(ssbSet.ability) ? this.sampleNoReplace(ssbSet.ability) : ssbSet.ability,
				moves: [],
				nature: ssbSet.nature ? Array.isArray(ssbSet.nature) ? this.sampleNoReplace(ssbSet.nature) : ssbSet.nature : 'Serious',
				gender: ssbSet.gender ? this.sampleIfArray(ssbSet.gender) : this.sample(['M', 'F', 'N']),
				evs: ssbSet.evs ? {...{hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0}, ...ssbSet.evs} :
				{hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84},
				ivs: {...{hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31}, ...ssbSet.ivs},
				level: this.adjustLevel || ssbSet.level || 100,
				happiness: typeof ssbSet.happiness === 'number' ? ssbSet.happiness : 255,
				shiny: typeof ssbSet.shiny === 'number' ? this.randomChance(1, ssbSet.shiny) : !!ssbSet.shiny,
			};
			while (set.moves.length < 3 && ssbSet.moves.length > 0) {
				let move = this.sampleNoReplace(ssbSet.moves);
				if (Array.isArray(move)) move = this.sampleNoReplace(move);
				set.moves.push(move);
			}
			set.moves.push(ssbSet.signatureMove);
			if (teraType) set.teraType = teraType;

			// Any set specific tweaks occur here.

			team.push(set);

			// Team specific tweaks occur here
			// Swap last and second to last sets if last set has Illusion
			if (team.length === this.maxTeamSize && set.ability === 'Illusion') {
				team[this.maxTeamSize - 1] = team[this.maxTeamSize - 2];
				team[this.maxTeamSize - 2] = set;
			}
		}
		return team;
	}
}

export default RandomStaffBrosTeams;
