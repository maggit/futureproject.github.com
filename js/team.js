$(function(){
	$(".team-link").click(function(e) {
		e.preventDefault();

   	if (!$(this).hasClass("active")) {
    	$(".team-link.active").removeClass("active");
    	$(this).addClass("active");
  	}

  	var url = $(this).attr('href').replace('#', '').replace('team', 'teams');

  	$.get(url, function(data){
 			$('#main-team-content').html(data);
    })
	});
});