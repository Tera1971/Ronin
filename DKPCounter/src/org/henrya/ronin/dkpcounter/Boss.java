package org.henrya.ronin.dkpcounter;

/**
 * A class representative of each boss that points are awarded for
 * @author Henry Anderson
 *
 */
public enum Boss {
	/*meteoric */
	MET_Copp(new String[] {"95", "copp", "coppinger"}, 0, new int[]{0, 5, 10}),

	/* frozen */
	Froz_110(new String[] {"110", "eye"}, 0, new int[]{0, 5, 10}),
	Froz_115(new String[] {"115", "swampy", "swampie", "swamplord"}, 0, new int[]{0, 5, 10}),
	Froz_120(new String[] {"120", "woody", "woodcrown", "woodie"}, 0, new int[]{0, 5, 10}),
	Froz_125(new String[] {"125", "The Chained king", "chained", "chained king"}, 0, new int[]{0, 5, 10}),
	Froz_130(new String[] {"130", "grommak", "grom", "stonelord"}, 0, new int[]{0, 5, 15}),
	Froz_135(new String[] {"135", "pyrus", "lavalord"}, 0, new int[]{0, 5, 15}),

	/* DL bosses */
	DL_155(new String[] {"155", "spider", "spidey", "ulrob"}, 0, new int[]{5, 10, 25}),
	DL_160(new String[] {"160", "priest"}, 0, new int[] {5, 10, 25}),
	DL_165(new String[] {"165", "king"}, 0, new int[] {5, 10, 25}),
	DL_170(new String[] {"170", "sreng", "bolg"}, 10, new int[] {10, 20, 40}),
	DL_180(new String[] {"180", "snorri", "snor", "snorr", "troll"}, 5, new int[] {5, 20, 40}),

	/* EDL bosses */
	EDL_185(new String[] {"185", "dog", "doggy", "dogg", "ifryn"}, 0, new int[] {5, 15, 30}),
	EDL_190(new String[] {"190", "skath", "magister"}, 0, new int[] {5, 15, 30}),
	EDL_195(new String[] {"195", "gron", "general"}, 0, new int[] {5, 10, 30}),
	EDL_200(new String[] {"200", "krother", "imp"}, 0, new int[] {5, 15, 30}),
	EDL_205(new String[] {"205", "cragskor", "dragon"}, 5, new int[] {5, 30, 50}),
	EDL_210(new String[] {"210", "revenant", "anguish"}, 5, new int[] {5, 30, 50}),
	EDL_215(new String[] {"215", "unox", "eye"}, 5, new int[] {5, 30, 50}),
	
	/* Raids */
	AGGRAGOTH(new String[] {"aggragoth", "aggy", "agg"}, 0, new int[] {0, 0, 30}),
	HRUNGNIR(new String[] {"hrungnir", "hrung", "hippo"}, 0, new int[] {0, 0, 100}),
	MORDRIS(new String[] {"mordris", "mordy", "mord"}, 0, new int[] {0, 0, 150}),
	EFNISIEN(new String[] {"efnisien", "efni", "necromancer", "necro"}, 0, new int[] {0, 0, 150}),
	
	PROTEUS_BASE(new String[] {"proteusbase", "proteus_base", "protb", "base"}, 0, new int[] {0, 0, 150}),
	PROTEUS_PRIME(new String[] {"proteusprime", "proteus_prime", "protp", "prime"}, 0, new int[] {0, 0, 200}),
	GELEBRON(new String[] {"gelebron", "gele", "gel"}, 0, new int[] {0, 0, 200}),
	BLOODTHORN(new String[] {"bloodthorn", "bt", "blood", "thorn"}, 0, new int[] {0, 0, 200}),
	Dhiothu(new String[] {"Dino", "dt"}, 0, new int[] {0, 0, 250}),

	/* Arcane and Gardens extra */
	RING_BOSS(new String[] {"ringboss", "ring_boss", "rb", "rbs", "ring"}, 0, new int[] {0, 20, 40}),
	FACTIONS(new String[] {"factions", "faction", "lich", "reaver"}, 0, new int[] {0, 0, 40}),
	BLOODTHORN_ROOT(new String[] {"bloodthornroot", "bloodthorn_root", "btroot", "bt_root", "root"}, 0, new int[] {0, 50, 0});

	private String[] aliases;
	private int campPoints;
	private int[] killPoints;

	/** 
	 * Constructs a new Boss instance
	 * @param aliases The names it can be referred to as
	 * @param campPoints The amount of camp points to award
	 * @param killPoints The amount of kill points to award
	 */
	Boss(final String[] aliases, final int campPoints, final int[] killPoints) {
		this.aliases = aliases;
		this.campPoints = campPoints;
		this.killPoints = killPoints;
	}
	
	/**
	 * Returns the aliases of the boss
	 * @return An array of aliases
	 */
	public String[] getAliases() {
		return this.aliases;
	}
	
	/**
	 * Returns the camp points to award
	 * @return The camp points
	 */
	public int getCampPoints() {
		return this.campPoints;
	}
	
	/**
	 * Returns the kill points to award in an array
	 * @return The kill points
	 */
	public int[] getKillPoints() {
		return this.getKillPoints();
	}
	
	/**
	 * Returns the kill points to award based on the amount of stars
	 * @param stars The stars
	 * @return The kill points
	 */
	public int getKillPoints(final int stars) {
		if(stars == 4) {
			return this.killPoints[0];
		}
		else if(stars == 5) {
			return this.killPoints[1];
		}
		else if(stars == 6) { 
			return this.killPoints[2];
		}
		return 0;
	}
	
	/**
	 * Returns a Boss instance based on its name
	 * @param name The name of the boss
	 * @return The boss
	 */
	public static Boss getBoss(final String name) {
		for(final Boss boss : Boss.values()) {
			for(final String alias : boss.getAliases()) {
				if(name.equalsIgnoreCase(alias)) {
					return boss;
				}
			}
		}
		return null;
	}
}
