app.controller('LoginController',function($state) {
	var self=this

	self.join=function()
	{
		//sanitize the nickname
		var nickname=$sanitize(self.nickname)
		if(nickname)
		{
			$state.go('chat',{nickname:nickname})
		}
	}
	  
	
});
