$(function(){
  // activate the nav menu
  $(document).on('click', '.primary-nav .menu-trigger', function(event) {
    event.preventDefault()
    $('.primary-nav').toggleClass('expanded')
  })
})
