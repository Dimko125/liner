function LineGroup()
{
	this.Lines = [];
	this.Tris = [];
	this.Color = new ColorRGB(0, 0, 0);
	
	this.IsVisible = true;
	
	this.Push = (L) =>
	{
		this.Lines.push(L);
		//console.log("Push order: " + L.ID);
	}
	this.Remove = (L) =>
	{
		for(i = 0; i < this.Lines.length; i++)
			if(this.Lines[i] == L)
			{
				this.Lines.splice(i, 1);
				break;
			}
	}
	
	this.Draw = (ctx) =>
	{
		if(this.IsVisible && this.Lines.length >= 3) // this.IsVisible
		{
			
			for(var i = 0; i < this.Lines.length; i++)
			{
				var l = this.Lines[i];
				l.Draw(ctx);
			}
			
			ctx.beginPath();
			ctx.fillStyle = this.Color.ToHexString();
			
			var l = this.Lines[0];
			ctx.moveTo(l.From.X, l.From.Y);
			for(var i = 0; i < this.Lines.length; i++)
			{
				l = this.Lines[i];
				ctx.lineTo(l.From.X, l.From.Y);
			}
			
			ctx.fill();
			ctx.closePath();
		}
	}
	
}