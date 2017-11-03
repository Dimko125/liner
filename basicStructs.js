// Dous studio ©. All right reserved.

function Vector2(NewX, NewY)
{
	if(NewX != undefined) this.X = NewX;
	else this.X = 0;
	
	if(NewY != undefined) this.Y = NewY;
	else this.Y = 0;
	
	this.Copy = () =>
	{
		return new Vector2(this.X, this.Y);
	}
	
	this.toString = function()
	{
		return "{X:" + this.X + "; Y:" + this.Y + "}";
	}
	
	this.Minus = (V2) =>
	{
		return new Vector2(this.X - V2.X, this.Y - V2.Y);
	}
	this.Plus = function(V2)
	{
		return new Vector2(this.X + V2.X, this.Y + V2.Y);
	}
	this.Distance = function(V2)
	{
		var x = V2.X - this.X;
		var y = V2.Y - this.Y;
		return Math.abs(Math.sqrt(x*x + y*y));
	}
	
	this.Mult = function(K)
	{
		return new Vector2(this.X * K, this.Y * K);
	}

	this.Length = () =>
	{
		return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2));
	}
	
	this.Set = (X, Y) =>
	{
		this.X = X; this.Y = Y;
	}
	
	this.Angle = () =>
	{
		return Math.atan2(this.Y, this.X);
	}
}

// Class of RGB color
function ColorRGB(NewR, NewG, NewB)
{
	this.R = NewR == undefined ? 0 : NewR;
	this.G = NewG == undefined ? 0 : NewG;
	this.B = NewB == undefined ? 0 : NewB;
	
	this.Copy = () =>
	{
		return new ColorRGB(this.R, this.G, this.B);
	}
	
	this.ToHexString = function ()
	{
		return "#" + ToHex(this.R) + ToHex(this.G) + ToHex(this.B);
	}
	this.Hex = function ()
	{
		return "#" + ToHex(this.R) + ToHex(this.G) + ToHex(this.B);
	}
	this.ToHex = function ()
	{
		return "#" + ToHex(this.R) + ToHex(this.G) + ToHex(this.B);
	}
}

