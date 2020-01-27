playerMap = new Map();

function loadAliases(text) {
	playerMap.clear();
	let split = text.split("\n");
    for(let i = 0; i < split.length; i++) {
        let line = split[i];
		let commaSplit = line.split(",");
		let player = commaSplit[0].trim();
		console.log("." + player + ".")
		let aliases = line.replace(player + ",", "").split(",");
		aliases = aliases.map(function (el) {
			return el.trim().toLowerCase();
		});
		playerMap.set(player, aliases);
	}
}

function getPlayerFromAlias(aliasInput) {
	for (let [player, aliases] of playerMap) {
		if(player.toLowerCase() == aliasInput.toLowerCase()) {
			return player
		}
		for(let i = 0; i < aliases.length; i++) {
			let alias = aliases[i];
			console.log("." + alias + ".");
			if(aliasInput.toLowerCase() == alias.toLowerCase()) {
				return player;
			}
		}
	}
	return aliasInput
}

function getAliases(name) {
	return playerMap.get(name);
}
