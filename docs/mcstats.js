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
		document.open();
		document.write("<h1>-=EricRao SMP服务器状态=-</h1>");
		document.write("<a>状态：</a>");
		document.write(status);
		document.write("<br><a>在线玩家：</a>");
		document.write(players_online);
		document.write("<a>/</a>");
		document.write(players_max);
		document.write("<br><a>游戏版本：</a>");
		document.write(version);
		document.write("<br><ul><li>聊天室：<span id=\"ping-chat\"><\/span><\/li><li>官网：<span id=\"ping-web\"><\/span><\/li><li>文档：<span id=\"ping-doc\"><\/span><\/li><li>Dynmap地图：<span id=\"ping-map\"><\/span><\/li><\/ul>");
		document.close();

		

	})
	.catch(error => {
		console.log(error)
	});
	
}

fetchData();
var p = new Ping();
 

p.ping("http://chat.ericrao.icu", function(err, data) {
  // Also display error if err is returned.
  if (err) {
    console.log("error loading resource")
    data = data + " " + err;
  }
  document.getElementById("ping-chat").innerHTML = data;
});

p.ping("http://smp.ericrao.icu", function(err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " " + err;
  }
  document.getElementById("ping-web").innerHTML = data;
});

p.ping("https://docs.ericrao.icu", function(err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " " + err;
  }
  document.getElementById("ping-doc").innerHTML = data;
});


p.ping("http://map.ericrao.icu", function(err, data) {
  if (err) {
    console.log("error loading resource")
    data = data + " " + err;
  }
  document.getElementById("ping-map").innerHTML = data;
});
