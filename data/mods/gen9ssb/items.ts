export const Items: {[k: string]: ModdedItemData} = {
	// Aeonic
	fossilizedfish: {
		inherit: true,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 16);
		},
		desc: "At the end of every turn, holder restores 1/16 of its max HP.",
	},
	// Archas
	lilligantiumz: {
		name: "Lilligantium Z",
		onTakeItem: false,
		zMove: "Aura Rain",
		zMoveFrom: "Quiver Dance",
		itemUser: ["Lilligant"],
		desc: "If held by a Lilligant with Quiver Dance, it can use Aura Rain.",
	},
	// Irpachuza
	irpatuziniumz: {
		name: "Irpatuzinium Z",
		onTakeItem: false,
		zMove: "Bibbidi-Bobbidi-Rands",
		zMoveFrom: "Fleur Cannon",
		itemUser: ["Mr. Mime"],
		desc: "If held by a Mr. Mime with Fleur Cannon, it can use Bibbidi-Bobbidi-Rands.",
	},
	// Peary
	pearyumz: {
		name: "Pearyum Z",
		onTakeItem: false,
		zMove: "1000 Gears",
		zMoveFrom: "Gear Grind",
		itemUser: ["Klinklang"],
		desc: "If held by a Klinklang with Gear Grind, it can use 1000 Gears.",
	},

	// modified for Bidoof Princess' ability
	focusband: {
		inherit: true,
		onDamage(damage, target, source, effect) {
			const chance = target.hasAbility('adorablegrace') ? 2 : 1;
			if (this.randomChance(chance, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Focus Band");
				return target.hp - 1;
			}
		},
	},
	quickclaw: {
		inherit: true,
		onFractionalPriority(priority, pokemon) {
			const chance = pokemon.hasAbility('adorablegrace') ? 2 : 1;
			if (priority <= 0 && this.randomChance(chance, 5)) {
				this.add('-activate', pokemon, 'item: Quick Claw');
				return 0.1;
			}
		},
	},
};
