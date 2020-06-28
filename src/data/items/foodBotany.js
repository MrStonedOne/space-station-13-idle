export default {
	plantSeed: { // Not food, but it makes sense to put this here
		name: "Plant Seeds",
		sellPrice: 25,
		icon: require("@/assets/art/botany/seed.png"),
	},
	potato: {
		name: "Potato",
		sellPrice: 5,
		icon: require("@/assets/art/botany/PlantPotato.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 0,
			power: 5,
		},
	},
	tomato: {
		name: "Tomato",
		sellPrice: 5,
		icon: require("@/assets/art/botany/PlantTomato.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 5,
			power: -5,
		},
	},
	banana: {
		name: "Banana",
		sellPrice: 14,
		icon: require("@/assets/art/botany/PlantBanana.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 5,
			precision: -5,
			power: 0,
		},
	},
	flowerSun: {
		name: "Sunflower",
		sellPrice: 14,
		icon: require("@/assets/art/botany/PlantFlowersun.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 5,
			precision: 0,
			power: -5,
		},
	},
	mushroom: {
		name: "Glowshroom",
		sellPrice: 25,
		icon: require("@/assets/art/botany/PlantShroomglow.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 5,
			power: 0,
		},
	},
	pepper: {
		name: "Hot Pepper",
		sellPrice: 25,
		icon: require("@/assets/art/botany/PlantPepperhot.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: -5,
			power: 5,
		},
	},
	potatoBattery: {
		name: "Potato Battery",
		sellPrice: 37,
		icon: require("@/assets/art/botany/PlantPotatobattery.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 0,
			power: 10,
		},
	},
	tomatoBlue: {
		name: "Blue Tomato",
		sellPrice: 37,
		icon: require("@/assets/art/botany/PlantTomatoblue.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 10,
			power: -5,
		},
	},
	bananamime: {
		name: "...",
		sellPrice: 45,
		icon: require("@/assets/art/botany/PlantBananamime.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: -5,
			power: 0,
		},
	},
	flowermoon: {
		name: "Moonflower",
		sellPrice: 45,
		icon: require("@/assets/art/botany/PlantFlowermoon.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: 0,
			power: -5,
		},
	},
	mushroomred: {
		name: "Glowcap",
		sellPrice: 52,
		icon: require("@/assets/art/botany/PlantShroomred.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 10,
			power: 0,
		},
	},
	peppercold: {
		name: "Ice Pepper",
		sellPrice: 52,
		icon: require("@/assets/art/botany/PlantPeppercold.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: -5,
			power: 10,
		},
	},
	orange: {
		name: "Orange",
		sellPrice: 61,
		icon: require("@/assets/art/botany/PlantOrange.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 0,
			power: 10,
		},
	},
	tomatoBluespace: {
		name: "Bluespace Tomato",
		sellPrice: 61,
		icon: require("@/assets/art/botany/PlantTomatobluespace_anim.gif"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: 0,
			precision: 10,
			power: -5,
		},
	},
	bananablue: {
		name: "Blue Banana",
		sellPrice: 27,
		icon: require("@/assets/art/botany/PlantBananablue.png"),
		healAmount: 66,
		stats: {
			maxHealth: 5,
			evasion: 10,
			precision: -5,
			power: 0,
		},
	},
	flowernova: {
		name: "Novaflower",
		sellPrice: 66,
		icon: require("@/assets/art/botany/PlantFlowernova.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: 10,
			precision: 0,
			power: -5,
		},
	},
	mushroomshadow: {
		name: "Shadowshroom",
		sellPrice: 71,
		icon: require("@/assets/art/botany/PlantShroomshadow.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 10,
			power: 0,
		},
	},
	pepperghost: {
		name: "Ghost Pepper",
		sellPrice: 71,
		icon: require("@/assets/art/botany/PlantPepperghost.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: 0,
			precision: -5,
			power: 10,
		},
	},
	orange3d: {
		name: "Multidimensional Orange",
		sellPrice: 83,
		icon: require("@/assets/art/botany/PlantOrange3d_anim.gif"),
		healAmount: 20,
		stats: {
			maxHealth: -5,
			evasion: 5,
			precision: 5,
			power: 5,
		},
	}
}