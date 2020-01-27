## DKPCounter
* <a href="syntax.md">Syntax</a>
* <a href="examples.md">Example Syntax</a>
* <a href="points.md">Points Awarded</a>
## Syntax

The syntax is the most important aspect to the software. If it is incorrect DKP will not be counted.

### Bosses
<pre>[boss] [stars] kill on [player1, player2, player3...]</pre>

* **[boss]** Represents the name of the boss. See the list below for aliases.
* **[stars]** The number of stars. Using the word "main" is not sufficient
  - Must be either 4, 5, or 6.
  - It is important to note that even for raids such as Mordris and Gelebron the stars must be specified.
* **[players]** This is a list of all the players that were in the group separated by a comma and space
  - Case insensitive but the names must be spelt correctly
  
  The characters "/" and "\\" are replaced with a space. "*" and "'" are removed from the string all together. This creates  some leniency on the syntax such as using "215/5 kill on..." or "snorri 6* kill on..."
  
  
#### Examples
<pre>Sreng 4 kill on Thallen, Pathetic Healz, Alvain, Cat Balou</pre>
<pre>Spider 5 kill on Thallen, Crawlin, Sugar Kane</pre>
<pre>215 6 kill on Thallen, Kilzalot, Eban, Valla Rees, Kiara Evangelin</pre>
<pre>mordi 6 kill on Thallen, Unpleased, dragon shade</pre>

### Leveling
<pre>level [start]-[finish] on [player]</pre>
* **[start]** An integer representing the level the player started at
  - This must be an integer greater or equal to 150
* **[end]** An integer representing the level the player ended at
  - This must be an integer less than or equal to 240
* **[player]** The name of the player.

Level bonuses are done in increments of 5 starting at level 150. They must be posted only in increments of 5 or they will not be counted. For example if you go from level 150-160 you will need to post both "level 150-155" and "level 155-160" instead of just posting "level 150-160" as this will not work.

#### Examples
<pre>level 210-215 on cogs</pre>
<pre>level 180-185 on swish</pre>
<pre>level 215-220 on thallen</pre>
___

### Player Aliases
Player aliases are aliases that can be used instead of entering the players entire name. This is mainly used to fix simple errors, but can also be used to simplify the process. The current list of player aliases being used can be found <a href="../../docs/count/aliases.txt">here</a>. If you would like to request an alias submit a pull request with the desired changes.

<pre>mordi 5 kill on sasuke</pre>

This example would award the points to "sasuke579" instead of "sasuke" since it is on the list of aliases.

### Boss Names and Aliases
* **160**: 160, priest
* **165**: 165, king
* **170**: 170, sreng, bolg
* **180**: 180, snorri, snor, snorr, troll
* **185**: 185, dog, doggy, dogg, ifryn
* **190**: 190, skath, magister
* **195**: 195, gron, general
* **200**: 200, krother, imp
* **205**: 205, cragskor, dragon
* **210**: 210, revenant, anguish
* **215**: 215, unox, eye
* **Hrungnir**: hrungnir, hrung, hippo
* **Mordris**: mordris, mordy, mordi
* **Efnisien**: efnisien, efni, necromancer, necro
* **Proteus Base**: proteusbase, proteus_base, protb, base
* **Proteus Prime**: proteusprime, proteus_prime, protp, prime
* **Gelebron**: gelebron, gele, gel
* **Bloodthorn**: bloodthorn, bt, blood, thorn
* **Dhiothu**: dhiothu, dhio, dino
* **Factions**: factions, faction, lich, reaver
* **Ring Boss**: ringboss, ring_boss, rb, rbs, ring
* **Bloodthorn Root (5)**: bloodthornroot, bloodthorn_root, btroot, root
* **Legacy 180+**: legacy180, legacy_180, natan, athatch, garanak, gara, urchaid, maelstrom, whirlwinds, whirlwind, smolach, annihilator, skain, osan, blight, tomb
