// Dous studio ©. All right reserved.

function Timer()
{
	var THIS = this;
	Timer.prototype.Start = () =>
	{
		this.IsWorking = true;
		Update();
	}
	Timer.prototype.Stop = ()=>
	{
		this.IsWorking = false;
		this.Ticks = 0;
	}
	this.tickEvents = [];
	Timer.prototype.AddOnTick = function(TickEvent)
	{
		this.tickEvents.push(TickEvent);
	}
	Timer.prototype.SetOnTick = function(TickEvent)
	{
		this.tickEvent = TickEvent;
	}
	
	this.Interval = 1000;
	this.IsWorking = false;
	this.Ticks = 0;
	
	function Update()
	{
		setTimeout(() => 
		{
			if(THIS.IsWorking)
			{
				for(i = 0; i < THIS.tickEvents.length; i++)
					THIS.tickEvents[i](THIS.Ticks);
				if(THIS.tickEvent != undefined) THIS.tickEvent(THIS.Ticks);
				THIS.Ticks++;
				Update();
			}
		}, THIS.Interval);
	}
	
	
}