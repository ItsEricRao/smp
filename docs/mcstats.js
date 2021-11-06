function fetchData() {
	fetch("https://api.imlazy.ink/mcapi/?&host=mc.ericrao.icu&type=json").then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data.status);
		console.log(data.players_max);
		console.log(data.players_online);
		console.log(data.version);
		const status = data.status
		const players_max = data.players_max
		const players_online = data.players_online
		const version = data.version
		document.write("<h1>-=EricRao SMP服务器状态=-</h1>");
		document.write("<a>状态：</a>");
		document.write(status);
		document.write("<br><a>在线玩家：</a>");
		document.write(players_online);
		document.write("<a>/</a>");
		document.write(players_max);
		document.write("<br><a>游戏版本：</a>");
		document.write(version);

		

	})
	.catch(error => {
		console.log(error)
	});
	
}

fetchData();