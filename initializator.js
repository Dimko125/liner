// Dous studio ©. All right reserved.

var head = document.getElementsByTagName("head");

{ // Including
var includes = [ 
"timer.js",
"mouse.js",
"functions.js",
"basicStructs.js",
"triangle.js",
"line.js",
"lineGroup.js",
"intersectPair.js",
"socket.js",
"player.js",
"main.js"
];
for(i = 0; i < includes.length; i++)
{
	var scr = document.createElement("script");
	scr.type = "text/javascript";
	scr.src = includes[i];
	head[0].appendChild(scr);
}
}

var main1;

function _init()
{
	main1 = new Main();
	main1.Init();
	console.log("main inited");
	//Init();
}