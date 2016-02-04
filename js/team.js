$(function(){
	$(".team-link").click(function(e) {
   if (!$(this).hasClass("active")) {
    	$(".team-link.active").removeClass("active");
    	$(this).addClass("active");
  	}
  	var team = $(this).attr('href').replace('#', '');
  	$(".post-team").hide();
  	$(".post-team." + team).fadeIn( "slow" );
	});
});