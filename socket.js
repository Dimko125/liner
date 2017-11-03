function Socket()
{
	this.WebSocket;
	
	this.Connect = (url) =>
	{
		this.WebSocket = new WebSocket(url);
		
		
	}
}