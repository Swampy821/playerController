(function() {

	"use strict"


	function playerController(playerName){
		this.player = this.getDefaults();
		this.setName(playerName);
	}

	playerController.prototype.getDefaults = function() {
		var playerObj = {
			"name":"",
			"nickName":"",
			"class":"",
			"action":{},
			"stats" : {
				"healthMax":0,
				"health":0,
				"str":0,
				"strMax":0,
				"dex":0,
				"dexMax":0,
				"agi":0,
				"agiMax":0,
				"luck":0,
				"luckMax":0,
				"endurance":0,
				"enduranceMax":0,
				"ac":0,
				"acMax":0,
				"weaponsMax":2,
				"armorMax":2,
				"itemMax":2
			},
			"weapons":[],
			"armor":[],
			"items":[]
		};
		return playerObj;
	};

	playerController.prototype.getName = function() {
		return this.player.name;
	};

	playerController.prototype.setName = function(playerName) {
		if(playerName === undefined) { return false; }
		this.player.name = playerName;
		return true
	};

	playerController.prototype.setNickName = function(playerNickName) {
		if(playerNickName === undefined) { return false; }
		this.player.nickName = playerNickName;
		return true;
	};

	playerController.prototype.getNickName = function() {
		return this.player.nickName;
	};

	playerController.prototype.getHealth = function() {
		return this.player.stats.health;
	};
	playerController.prototype.setHealth = function(health) {
		if(health===undefined) { return false; }
		var maxHealth = this.player.stats.healthMax;
		if(health>maxHealth) { health=maxHealth; }
		this.player.stats.health = health;
		return health;
	};

	playerController.prototype.addHealth = function(health) {
		health = this.player.stats.health + health;
		if(health>this.player.stats.healthMax) { health = this.player.stats.healthMax;}
		this.player.stats.health = health;
		return health;
	};

	playerController.prototype.removeHealth = function(health) {
		health = this.player.stats.health - health;
		if(health < 0) { health=0; }
		this.player.stats.health = health;
		return health;
	}

	playerController.prototype.setMaxHealth = function(maxHealth) {
		if(maxHealth===undefined) { return false; }
		this.player.stats.healthMax = maxHealth;
		return true;
	};

	playerController.prototype.getStr = function() {
		return this.player.stats.str;
	};

	playerController.prototype.setStr = function(str) {
		if(str === undefined) { return false; }
		var maxStr = this.player.stats.strMax;
		if(str>maxStr) {
			str = maxStr;
		}
		this.player.stats.str = str;
		return str;
	};
	playerController.prototype.setMaxStr = function(str) {
		if(str === undefined) { return false; }
		this.player.stats.strMax = str;
		return true;
	};

	playerController.prototype.getDex = function() {
		return this.player.stats.dex;
	};

	playerController.prototype.setDex = function(dex) {
		if(dex === undefined) { return false; }
		var maxDex = this.player.stats.dexMax;
		if(dex > maxDex) { dex=maxDex; }
		this.player.stats.dex = dex;
		return dex;
	};
	playerController.prototype.setMaxDex = function(dex) {
		if(dex === undefined) { return false; }
		this.player.stats.dexMax = dex;
		return true;
	};
	playerController.prototype.getAgi = function() {
		return this.player.stats.agi;
	};
	playerController.prototype.setMaxAgi = function(agi) {
		if(agi === undefined) { return false; }
		this.player.stats.agiMax = agi;
		return true;
	};
	playerController.prototype.setAgi = function(agi) {
		if(agi === undefined) { return false; }
		var maxAgi = this.player.stats.agiMax;
		if(agi > maxAgi) { agi = maxAgi; }
		this.player.stats.agi = agi;
		return agi;
	};
	playerController.prototype.setLuck = function(luck) {
		if(luck === undefined) { return false; }
		var maxLuck = this.player.stats.luckMax;
		if(luck > maxLuck) { luck = maxLuck; }
		this.player.stats.luck = luck;
		return luck;
	};
	playerController.prototype.getLuck = function() {
		return this.player.stats.luck;
	};
	playerController.prototype.setMaxLuck = function(luck) {
		if(luck === undefined) { return false; }
		this.player.stats.luckMax = luck;
		return true;
	};

	playerController.prototype.getEnd = function() {
		return this.player.stats.endurance; 
	};

	playerController.prototype.setEnd = function(end) {
		if(end === undefined) { return false; }
		var maxEnd = this.player.stats.enduranceMax;
		if(end>maxEnd) { end = maxEnd; }
		this.player.stats.endurance = end;
		return end;
	};
	playerController.prototype.setMaxEnd = function(end) {
		if(end === undefined) { return false; }
		this.player.stats.enduranceMax = end;
		return true;
	};

	playerController.prototype.getAc = function() {
		return this.player.stats.ac;
	};

	playerController.prototype.setAc = function(ac) {
		if(ac === undefined) { return false; }
		var maxAc = this.player.stats.acMax;
		if(ac > maxAc) { ac = maxAc; }
		this.player.stats.ac = ac;
		return ac;
	};

	playerController.prototype.setMaxAc = function(ac) {
		if(ac === undefined) { return false; }
		this.player.stats.acMax = ac;
		return true;
	};

	playerController.prototype.setMaxWeapons = function(max) {
		if(max === undefined) { return false; }
		this.player.stats.weaponsMax = max;
		return true;
	};
	playerController.prototype.getMaxWeapons = function() {
		return this.player.stats.weaponsMax;
	};
	playerController.prototype.setMaxItems = function(max) {
		if(max === undefined) { return false; }
		this.player.stats.ItemMax = max;
		return true;
	};
	playerController.prototype.getMaxItems = function() {
		return this.player.stats.ItemMax;
	};

	playerController.prototype.setMaxArmor = function(max) {
		if(max === undefined) { return false; }
		this.player.stats.armorMax = max;
		return true;
	};

	playerController.prototype.getMaxArmor = function() {
		return this.player.stats.armorMax;
	};

	playerController.prototype.addArmor = function(armorObj) {
		if(typeof armorObj !== "object") { return false; }
		max = this.getMaxArmor();
		if(this.player.armor.length===max) { return false; }
		this.player.armor.push(armorObj);
		return this.player.armor.length-1;
	};

	playerController.prototype.getArmor = function() {
		return this.player.armor;
	};

	playerController.prototype.removeArmor = function(armorIndex) {
		if(this.player.armor[armorIndex] === undefined) { return false; }
		this.player.armor.splice(armorIndex, 1);
		return true;
	};

	playerController.prototype.setClass = function(className) {
		this.player.class = className;
	};
	playerController.prototype.getClass = function() {
		return this.player.class;
	};

	playerController.prototype.setActions = function(actionObj) {
		if(typeof actionObj !== 'Object') { return false; }
		this.player.action = actionObj;
		return true;
	};
	window.playerController = playerController;
})();