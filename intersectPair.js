function IntersectPair()
{
	this.Line1;
	this.Line2;
	
	this.IntersectPoint = new Vector2(0,0);
	
	this.IsVisible = true;
	
	this.Draw = (Ctx) =>
	{
		this.Line1.IsVisible = this.IsVisible; this.Lines1.Draw(Ctx);
		this.Line2.IsVisible = this.IsVisible; this.Lines2.Draw(Ctx);
	}
	
}