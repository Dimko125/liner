function Triangle()
{
	
	this.A = new Vector2();
	this.B = new Vector2();
	this.C = new Vector2();
	
	this.FillColor = new ColorRGB(0,0,0);
	this.StrokeColor = new ColorRGB(0,0,0);
	
	this.DrawFill = (ctx) =>
	{
		ctx.beginPath();
		ctx.fillStyle = this.FillColor.ToHexString();
		
		ctx.moveTo(this.A.X, this.A.Y);
		ctx.lineTo(this.B.X, this.B.Y);
		ctx.lineTo(this.C.X, this.C.Y);
		ctx.lineTo(this.A.X, this.A.Y);
		
		ctx.fill();
		ctx.closePath();
	}
	this.DrawStroke = (ctx) =>
	{
		ctx.beginPath();
		
		ctx.strokeStyle = this.StrokeColor.ToHexString();
		
		ctx.moveTo(this.A.X, this.A.Y);
		ctx.lineTo(this.B.X, this.B.Y);
		ctx.lineTo(this.C.X, this.C.Y);
		ctx.lineTo(this.A.X, this.A.Y);
		
		ctx.stroke();
		ctx.closePath();
	}
	
}