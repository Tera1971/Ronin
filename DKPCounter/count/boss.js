const Boss = {

    /** DL bosses **/
    DL_155: {
        aliases: ["155", "spider", "spidey", "ulrob"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 0,
        }
    },
    DL_160: {
        aliases: ["160", "priest"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 10,
        }
    },
    DL_165: {
        aliases: ["165", "king"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 10,
        }
    },
    DL_170: {
        aliases: ["170", "sreng", "bolg"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 50,
        }
    },
    DL_180: {
        aliases: ["180", "snorri", "snor", "snorr", "troll"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 50,
        }
    },

    /** EDL bosses **/
    EDL_185: {
        aliases: ["185", "dog", "doggy", "dogg", "ifryn"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 25,
        }
    },
    EDL_190: {
        aliases: ["190", "skath", "magister"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 25,
        }
    },
    EDL_195: {
        aliases: ["195", "gron", "general"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 25,
        }
    },
    EDL_200: {
        aliases: ["200", "krother", "imp"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 25,
        }
    },
    EDL_205: {
        aliases: ["205", "cragskor", "dragon"],
        points: {
            camp: 0,
            kill4: 10,
            kill5: 30,
            kill6: 60,
        }
    },
    EDL_210: {
        aliases: ["210", "revenant", "anguish"],
        points: {
            camp: 0,
            kill4: 10,
            kill5: 30,
            kill6: 60,
        }
    },
    EDL_215: {
        aliases: ["215", "unox", "eye"],
        points: {
            camp: 0,
            kill4: 10,
            kill5: 30,
            kill6: 60,
        }
    },

    /** Raids **/
    AGGRAGOTH: {
        aliases: ["aggragoth", "aggy", "agg"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 0,
        }
    },
    HRUNGNIR: {
        aliases: ["hrungnir", "hrung", "hippo"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 40,
        }
    },
    MORDRIS: {
        aliases: ["mordris", "mordy", "mord", "mordi"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 60,
        }
    },
    EFNISIEN: {
        aliases: ["efnisien", "efni", "necromancer", "necro"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 60,
        }
    },

    PROTEUS_BASE: {
        aliases: ["proteusbase", "proteus_base", "protb", "base"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 100,
        }
    },
    PROTEUS_PRIME: {
        aliases: ["proteusprime", "proteus_prime", "protp", "prime"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 300,
        }
    },
    GELEBRON: {
        aliases: ["gelebron", "gele", "gel"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 200,
        }
    },
    BLOODTHORN: {
        aliases: ["bloodthorn", "bt", "blood", "thorn"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 250,
        }
    },
    DHIOTHU: {
        aliases: ["dhiothu", "dhio", "dino"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 300,
        }
    },
    /** Arcane and Garden extra **/
    RING_BOSS: {
        aliases: ["ringboss", "ring_boss", "rb", "rbs", "ring"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 20,
            kill6: 30,
        }
    },
    FACTIONS: {
        aliases: ["factions", "faction", "lich", "reaver"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 20,
        }
    },
    BLOODTHORN_ROOT: {
        aliases: ["bloodthornroot", "bloodthorn_root", "btroot", "bt_root", "root"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 20,
            kill6: 0,
        }
    },

    /** Legacies **/
    LEGACY_150: {
        aliases: ["legacy150", "legacy_150", "witchfinder", "hopkins", "comrack", "akais", "hurricanes", "typhoons", "garyn", "devestator", "jalan", "paradai", "blizzardgore", "synak", "mono"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 0,
        }
    },
    LEGACY_180: {
        aliases: ["legacy180", "legacy_180", "natan", "athatch", "garanak", "gara", "urchaid", "maelstrom", "whirlwinds", "whirlwind", "smolach", "annihilator", "skain", "osan", "blight", "tomb", "mono"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 20,
            kill6: 30,
        }
    },
};
const PointType = {
    KILL: ["kill", "killl", "kil", "kkil", "ki", "k", "kll", "kl"],
    CAMP: [],
    CAMP_KILL: [],
};

//points here are per hour camped or per level
const BonusType = {
    LEVEL: {
        aliases: ["leveled", "level", "levelled"],
        points: 1,
    },
    CAMP: {
        aliases: [],
        points: 0,
    },
};

const LevelBonusType = {
    LEVEL_150_155: {
        name: "150-155",
        points: 25,
    },
    LEVEL_155_160: {
        name: "155-160",
        points: 30,
    },
    LEVEL_160_165: {
        name: "160-165",
        points: 35,
    },
    LEVEL_165_170: {
        name: "165-170",
        points: 50,
    },
    LEVEL_170_175: {
        name: "170-175",
        points: 50,
    },
    LEVEL_175_180: {
        name: "175-180",
        points: 50,
    },
    LEVEL_180_185: {
        name: "180-185",
        points: 50,
    },
    LEVEL_185_190: {
        name: "185-190",
        points: 50,
    },
    LEVEL_190_195: {
        name: "190-195",
        points: 50,
    },
    LEVEL_195_200: {
        name: "195-200",
        points: 75,
    },
    LEVEL_200_205: {
        name: "200-205",
        points: 75,
    },
    LEVEL_205_210: {
        name: "205-210",
        points: 75,
    },
    LEVEL_210_215: {
        name: "210-215",
        points: 100,
    },
    LEVEL_215_220: {
        name: "215-220",
        points: 150,
    },
    LEVEL_220_225: {
        name: "220-225",
        points: 200,
    },
    LEVEL_225_230: {
        name: "225-230",
        points: 250,
    },
    LEVEL_230_235: {
        name: "230-235",
        points: 350,
    },
    LEVEL_235_240: {
        name: "235-240",
        points: 500,
    },
};

function getKillPoints(boss, stars) {
    if(stars === 4) {
        return boss.points.kill4;
    }
    else if(stars === 5) {
        return boss.points.kill5;
    }
    else if(stars === 6) {
        return boss.points.kill6;
    }
}
function getBosses() {
    return [Boss.DL_155, Boss.DL_160, Boss.DL_165, Boss.DL_170, Boss.DL_180, Boss.EDL_185, Boss.EDL_190, Boss.EDL_195, Boss.EDL_200, Boss.EDL_205, Boss.EDL_210, Boss.EDL_215, Boss.AGGRAGOTH, Boss.HRUNGNIR, Boss.MORDRIS, Boss.EFNISIEN, Boss.PROTEUS_BASE, Boss.PROTEUS_PRIME, Boss.GELEBRON, Boss.BLOODTHORN, Boss.DHIOTHU, Boss.RING_BOSS, Boss.FACTIONS, Boss.BLOODTHORN_ROOT, Boss.LEGACY_150, Boss.LEGACY_180];
}

function getBoss(name) {
    for(let i = 0; i < getBosses().length; i++) {
        let boss = getBosses()[i];
        for(let j = 0; j < boss.aliases.length; j++) {
            if(boss.aliases[j] === name) {
                return boss;
            }
        }
    }
    return null;
}

function getPointTypes() {
    return [PointType.CAMP, PointType.KILL, PointType.CAMP_KILL];
}

function getBonusTypes() {
    return [BonusType.LEVEL, BonusType.CAMP];
}

function getPointType(type) {
    for(let i = 0; i < getPointTypes().length; i++) {
        let pointType = getPointTypes()[i];
        for(let j = 0; j < pointType.length; j++) {
            if(pointType[j] === type) {
                return pointType;
            }
        }
    }
    return null;
}

function getBonusType(name) {
    for(let i = 0; i < getBonusTypes().length; i++) {
        let bonus = getBonusTypes()[i];
        for(let j = 0; j < bonus.aliases.length; j++) {
            if(bonus.aliases[j] === name) {
                return bonus;
            }
        }
    }
    return null;
}
function getLevelBonusTypes() {
    return [LevelBonusType.LEVEL_150_155, LevelBonusType.LEVEL_155_160, LevelBonusType.LEVEL_160_165, LevelBonusType.LEVEL_165_170, LevelBonusType.LEVEL_170_175, LevelBonusType.LEVEL_180_185, LevelBonusType.LEVEL_185_190, LevelBonusType.LEVEL_190_195, LevelBonusType.LEVEL_195_200, LevelBonusType.LEVEL_200_205, LevelBonusType.LEVEL_205_210, LevelBonusType.LEVEL_210_215, LevelBonusType.LEVEL_215_220, LevelBonusType.LEVEL_220_225, LevelBonusType.LEVEL_225_230, LevelBonusType.LEVEL_230_235, LevelBonusType.LEVEL_235_240];
}
//where levels is a string such as "150-155"
function getLevelBonusType(levels) {
    for(let i = 0; i < getLevelBonusTypes().length; i++) {
        let levelBonusType = getLevelBonusTypes()[i];
        if(levels == levelBonusType.name) {
            return levelBonusType
        }
    }
    return null;
}

function isValidLevelBonus(levels) {
    if(getLevelBonusType(levels) != null) {
        return true;
    }
    return false;
}

function getLevelBonusPoints(levels) {
    let levelBonusType = getLevelBonusType(levels);
    return levelBonusType.points;
}
