// Dous studio ©. All right reserved.

function Mouse()
{
	
}
Mouse.X = 0;
Mouse.Y = 0;

var undef = undefined;

Mouse.onMoves = [];
Mouse.AddOnMove = (Call) =>
{
	Mouse.onMoves.push(Call);
}

Mouse.onLMBs = [];
Mouse.AddOnLMB = (Call) =>
{
	Mouse.onLMBs.push(Call);
}

Mouse.onRMBs = [];
Mouse.AddOnRMB = (Call) =>
{
	Mouse.onRMBs.push(Call);
}

document.addEventListener("mousedown", (e) =>
{
	if(e.which == 1) // LMB
		for(i = 0; i < Mouse.onLMBs.length; i++)
			if(Mouse.onLMBs[i] != undef)
				Mouse.onLMBs[i](Mouse.X, Mouse.Y);
	
	if(e.which == 3) // RMB
		for(i = 0; i < Mouse.onRMBs.length; i++)
			if(Mouse.onRMBs[i] != undef)
				Mouse.onRMBs[i](Mouse.X, Mouse.Y);
});

document.addEventListener("mousemove", (e) =>
{
	Mouse.X = e.clientX;
	Mouse.Y = e.clientY;
	for(i = 0; i < Mouse.onMoves.length; i++)
		if(Mouse.onMoves[i] != undef)
			Mouse.onMoves[i](Mouse.X, Mouse.Y);
});

