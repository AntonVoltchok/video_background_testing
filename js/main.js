
// MENU

$(function() {
	
$("#nav").addClass("js").before('<div id="menu" class="fa fa-bars faa-horizontal"></div>');
$("#menu").click(function(){
	$("#nav").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 1005) {
		$("#nav").removeAttr("style");
		$("#nav .menu-li a").unbind('click');
	} else {
	$('#nav li a').on("click", function(){
	$('#nav').hide();
	});	
	} 
});	
 
});
  


// VIDEOS SECTION: TAB MENU
$(function() {

  $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

});



/*

$(function(){
  $("#switch-view").click(function(){
    $(this).find("button").toggleClass("active");
    $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
  });
});
*/










/* 
$(function() {
	$('.blog-box').click(function(e) {
		e.preventDefault();
	});
});	
*/







// ------------------------
//  NOTES , IDEA , MISC...
// ------------------------


//First time trying to animate jquery

/*
  $('#navvvv-button').click(function(){
    $('.skype').fadeIn(2000);
	$('.practiceeee-fade').fadeIn(1000);
  });
*/








