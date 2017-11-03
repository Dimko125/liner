// Dous studio ©. All right reserved.

function Main()
{
	var mainCanvas;

	var posingLine = new Line();
	var lines = [];
	var lineGroups = [];

	var ips = [];

	this.Init = () =>
	{
		{ // Setting up canvas props
			mainCanvas = document.getElementById("mainCanvas");
			mainCanvas.width = window.screen.availWidth;
			mainCanvas.height = window.screen.availHeight;
			mainCanvas.style.width = mainCanvas.width;
			mainCanvas.style.height = mainCanvas.height;
			var mainctx = mainCanvas.getContext("2d");
		}
		
		{// Set up update timer
			var updateTimer = new Timer();
			updateTimer.Interval = 10;
			updateTimer.AddOnTick(this.Update);
			updateTimer.Start();
		}
		
		{ // Setting up draw update
			var drawTimer = new Timer();
			drawTimer.Interval = 20;
			drawTimer.AddOnTick(()=>
			{
				this.Draw(mainctx);
			});
			drawTimer.Start();
		}
		
		{// Set up mouse events
			Mouse.AddOnLMB(this.OnLMB);
			//Mouse.AddOnRMB(OnRMB);
			//Mouse.AddOnMove(OnMouseMove);
		}
		
	}

	var lmbCount = 0;
	this.OnLMB = (x, y) =>
	{
		{ // All old
		/* console.log("Clicked LMB " + x + " : " + y);
		
		ips.push(new Vector2(x, y));
		
		// Firstest click posing
		if (lmbCount == 0)
		{
			posingLine.To.Set(x, y);
			posingLine.From.Set(x, y);
			lmbCount = 1;
		}
		
		// Every next click posing
		if(lmbCount == 1)
		{
			{ // Creating copy of posing line and add this COPY to lines list
			var copy = posingLine.Copy();
			copy.PrevLines = [];
			copy.ID = lines.length;
			for(i = 0; i < lines.length; i++)
				copy.PrevLines.push(lines[i]);
			lines.push(copy);
			console.log("Copy ID: " + copy.ID);
			}
			
			{ // Old chain forming
			var chainLines = [];
			var interPairs = [];
			
			// Checking every line with each other on intersection
			for(i = 0; i < lines.length; i++)
			{
				for(j = 0; j < lines.length; j++)
				{
					if(j != i && i > j + 1)
					{
						var ip = lines[j].Intersect(lines[i], false);
						if(ip) if(lines[i].ContainPoint(ip, 2) && lines[j].ContainPoint(ip, 2))
						{
							{ // Forming Pairs of intersected lines
							var inp = new IntersectPair();
							inp.Line1 = lines[i];
							inp.Line2 = lines[j];
							inp.IntersectPoint = ip;
							interPairs.push(inp);
							}
						}
					}
				}
			}
			
			if(interPairs.length != 0)
			{
				var firstInPair = interPairs[0];
				var lastInPair = interPairs[interPairs.length - 1];
				var l = firstInPair.Line1.PrevLines.length;
				for(i = 0; i < firstInPair.Line1.PrevLines.length; i++)
				{
					if(firstInPair.Line1.PrevLines[l - 1 - i] == lastInPair.Line2)
						break;
					firstInPair.Line1.PrevLines[l - 1 - i].Color.R = 255;
					chainLines.push(firstInPair.Line1.PrevLines[l - 1 - i]);
					
				}
			}
			
			if(chainLines.length != 0)
			{
				var firstInPair = interPairs[0];
				var lastInPair = interPairs[interPairs.length - 1];
				
				var l1 = new Line();
				l1.From = chainLines[0].To;
				l1.To = lastInPair.IntersectPoint;
				
				var l2 = new Line();
				l2.From = lastInPair.IntersectPoint;
				l2.To = chainLines[chainLines.length - 1].From;
				
				chainLines.push(l1);
				chainLines.push(l2);
				
				lines = [];
				interPairs = [];
				
				var lg = new LineGroup();
				for(i = 0; i < chainLines.length; i++)
					lg.Push(chainLines[i]);
				lineGroups.push(lg);
				
				lmbCount = 0;
			}
			posingLine.From.Set(posingLine.To.X, posingLine.To.Y);
		}
		}
	
			ips = [];
			var lastl = lines[0];
			for(var i = 0; i < lastl.PrevLines.length; i++)
			{
				var l = lastl.PrevLines[i];
				var ip = lastl.Intersect(l, false);
				if(ip != undefined)
					if(lastl.ContainPoint(ip, 2) && l.ContainPoint(ip, 2))
					{
						ips.push(ip);
					}
			}
			
			lmbCount = 0;
		} */
		}
		
		ips = []
		if(lmbCount == 1)
		{
			var copy = posingLine.Copy();
			copy.PrevLines = [];
			copy.ID = lines.length;
			for(var i = 0; i < lines.length; i++)
				copy.PrevLines.push(lines[i]);
			lines.push(copy);
			lmbCount = 0;
			
			var il1 = undefined;
			var il2 = undefined;
			var ip = undefined;
			
			var lastl = lines[lines.length - 1];
			for(var i = lastl.PrevLines.length-1; i >= 0; i--)
			{
				var l = lastl.PrevLines[i];
				if(Math.abs(lastl.ID - l.ID) > 1)
				{
					ip = lastl.Intersect(l, false);
					if(ip != undefined)
						if(lastl.ContainPoint(ip, 2) && l.ContainPoint(ip, 2))
						{
							il1 = lastl;
							il2 = l;
							break;
						}
				}
			}
			
			if(il1 != undefined && il2 != undefined)
			{
				il2.From = ip; // 
				il1.To = ip; // the last line
				
				var lg = new LineGroup();
				lg.Push(il1);
				for(var i = il1.PrevLines.length - 1; i >= 0 ; i--)
					if(il1.PrevLines[i] != il2)
						lg.Push(il1.PrevLines[i]);
					else break;
					
				lg.Push(il2);
				
				console.log(lg.Lines[0]);
				console.log(lg.Lines[lg.Lines.length - 1]);
				
				for(var i = 0; i < lg.Lines.length; i++)
					console.log(lg.Lines[i].ID);
				
				lineGroups.push(lg);
				lines = [];
				
				lmbCount = 2;
			}
		}
		
		if(lmbCount == 0)
		{
			if(lines.length == 0)
				posingLine.From.Set(x, y);
			else
				posingLine.From.Set(lines[lines.length-1].To.X, lines[lines.length-1].To.Y);
			posingLine.To.Set(x, y);
			lmbCount = 1;
		}
		if(lmbCount == 2)
		{
			posingLine.From.Set(x, y);
			posingLine.To.Set(x, y);
			lmbCount = 0;
		}
	}

	this.Update = () =>
	{
		if (lmbCount == 1)
			posingLine.To.Set(Mouse.X, Mouse.Y);
	}
	
	this.Draw = (ctx) =>
	{
		//console.log("drawing 1");
		// Clear
		ctx.clearRect(0,0, mainCanvas.width, mainCanvas.height);
		
		for(var i = 0; i < ips.length; i++)
			ctx.fillRect(ips[i].X, ips[i].Y, 5, 5);
		
		
		if(posingLine) posingLine.Draw(ctx);
		for(var i = 0; i < lines.length; i++)
			lines[i].Draw(ctx);
		
		for(var i = 0; i < lineGroups.length; i++)
			lineGroups[i].Draw(ctx);
		
	}
}