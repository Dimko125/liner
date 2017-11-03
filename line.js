// Dous studio ©. All right reserved.

function Line()
{
	this.IsVisible = true;	
	this.From = new Vector2(0, 0);
	this.To = new Vector2(0, 0);
	this.Thickness = 1;
	this.Color = new ColorRGB(255, 0, 0);
	
	this.PrevLine = undefined;
	this.PrevLines = [];
	
	this.IsIntersect = false;
	this.IntersectLines = [];
	
	this.ID = 0;
	
	this.Copy = () =>
	{
		var l = new Line();
		l.IsVisible = this.IsVisible;
		l.From = this.From.Copy();
		l.To = this.To.Copy();
		l.Thickness = this.Thickness;
		l.Color = this.Color.Copy();
		
		l.PrevLine = this.PrevLine;
		l.PrevLines = this.PrevLines;
		
		/*if(this.PrevLine != undefined)
			l.PrevLine = this.PrevLine.Copy();
		
		for(i = 0; i < this.PrevLines.length; i++)
		{
			l.PrevLines.push(this.PrevLines[i].Copy());
		}*/
		
		l.IsIntersect = this.IsIntersect;
		l.IntersectLines = this.IntersectLines;
		
		l.ID = this.ID;
		
		return l;
	}
	
	this.Draw = (CanvasCtx) =>
	{
		if(this.IsVisible)
		{
			CanvasCtx.beginPath();
			CanvasCtx.strokeStyle = this.Color.ToHexString();
			CanvasCtx.lineWidth = this.Thickness;
			
			CanvasCtx.moveTo(this.From.X, this.From.Y);
			CanvasCtx.lineTo(this.To.X, this.To.Y);
			
			CanvasCtx.stroke();
			CanvasCtx.closePath();
		}
	}
	
	this.Length = () =>
	{
		return Math.sqrt(Math.pow(this.From.X - this.To.X, 2) + Math.pow(this.From.Y - this.To.Y, 2) );
	}
	
	this.Angle = () =>
	{
		var radiusVector = this.To.Minus(this.From);
		return radiusVector.Angle();
		
	}
	
	this.Tg = () => 
	{
		return (this.To.Y - this.From.Y) / (this.To.X - this.From.X);
	}
	
	this.Intersect = (L2, CheckPointContain) =>
	{
		var k1 = this.Tg();
		var a1 = -this.From.X;
		var b1 = this.From.Y;
		
		var k2 = L2.Tg();
		var a2 = -L2.From.X;
		var b2 = L2.From.Y;
		
		var x = (k2*a2 + b2 - k1*a1 - b1) / (k1 - k2);
		var y = k1*(x + a1) + b1;
		
		this.IntersectLines = [];
		if(CheckPointContain == false)
		{
			this.IntersectLines.push(L2);
			this.IsIntersect = true;
			return new Vector2(x, y);
		}
		else
			if(this.ContainPoint(new Vector2(x, y), 1));
			{
				this.IntersectLines.push(L2);
				this.IsIntersect = true;
				return new Vector2(x, y);
			}
		if (this.IntersectLines.length == 0)
			this.IsIntersect = false;
		return undefined;
	}
	
	this.ContainPoint = (Point, HighRange) =>
	{
		var point = Point.Minus(this.From);
		var pointLen = point.Length();
		var pointAngle = point.Angle();
		
		var lineLen = this.Length();
		var lineAngle = this.Angle();
		
		var point_lineAngle = pointAngle - lineAngle;
		
		point = new Vector2(
			Math.cos(point_lineAngle) * pointLen,
			Math.sin(point_lineAngle) * pointLen);
		
		if (point.X >= 0 && point.X <= lineLen &&
			point.Y <= HighRange && point.Y >= -HighRange)
			return true;
		
		return false;
	}
	
	this.Show = () =>
	{
		this.IsVisible = true;
	}
	this.Hide = () =>
	{
		this.IsVisible = false;
	}
	
	
	
}



