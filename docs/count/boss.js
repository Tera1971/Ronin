const Boss = {

    /** DL bosses **/
    DL_155: {
        aliases: ["155", "spider", "spidey", "ulrob"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 10,
            kill6: 20,
        }
    },
    DL_160: {
        aliases: ["160", "priest"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 10,
            kill6: 20,
        }
    },
    DL_165: {
        aliases: ["165", "king"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 10,
            kill6: 20,
        }
    },
    DL_170: {
        aliases: ["170", "sreng", "bolg"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 45,
        }
    },
    DL_180: {
        aliases: ["180", "snorri", "snor", "snorr", "troll"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 45,
        }
    },

    /** EDL bosses **/
    EDL_185: {
        aliases: ["185", "dog", "doggy", "dogg", "ifryn"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 10,
            kill6: 20,
        }
    },
    EDL_190: {
        aliases: ["190", "skath", "magister"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 10,
            kill6: 20,
        }
    },
    EDL_195: {
        aliases: ["195", "gron", "general"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 10,
            kill6: 20,
        }
    },
    EDL_200: {
        aliases: ["200", "krother", "imp"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 10,
            kill6: 20,
        }
    },
    EDL_205: {
        aliases: ["205", "cragskor", "dragon"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 45,
        }
    },
    EDL_210: {
        aliases: ["210", "revenant", "anguish"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 45,
        }
    },
    EDL_215: {
        aliases: ["215", "unox", "eye"],
        points: {
            camp: 0,
            kill4: 5,
            kill5: 15,
            kill6: 45,
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
            kill6: 30,
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
        aliases: ["proteusbase", "proteus_base", "protb", "base", "prot", "proteus"],
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
            kill6: 100,
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
            kill6: 200,
        }
    },
    DHIOTHU: {
        aliases: ["dhiothu", "dhio", "dino"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 200,
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
            kill5: 0,
            kill6: 0,
        }
    },

    /** Legacies **/
    LEGACY_150: {
        aliases: ["legacy150", "legacy_150", "witchfinder", "hopkins", "comrack", "akais", "hurricanes", "typhoons", "garyn", "devestator", "jalan", "paradai", "blizzardgore", "synak"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 0,
            kill6: 0,
        }
    },
    LEGACY_180: {
        aliases: ["legacy180", "legacy_180", "natan", "athatch", "garanak", "gara", "urchaid", "maelstrom", "whirlwinds", "whirlwind", "smolach", "annihilator", "skain", "osan", "blight", "tomb"],
        points: {
            camp: 0,
            kill4: 0,
            kill5: 30,
            kill6: 30,
        }
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
