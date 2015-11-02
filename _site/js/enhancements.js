jQuery.fn.random = function() {
  var randomIndex = Math.floor(Math.random() * this.length);
  return jQuery(this[randomIndex]);
}

$(function(){
  $('.page--index #imagine').each(function(){
    $list = $(this).find('ul')
    window.setInterval(function(){
      $quote = $list.children().first().nextAll().random()
      $list.prepend($quote.clone())
      $quote.remove()
    }, 2000)
  })
})

$(function(){
  // make listicles interactive, instead of long lists
  $('.listicle').each(function(){
    $t = $(this)
    $t.addClass('interactive')
    $nav = $("<nav />")
    $list = $t.find('ol')
    $items = $list.children()
    $items.each(function(index){
      $nav.append("<div class='nav-item'>" + (index+1).toString() + "</div>")
    })
    $nav.insertBefore($list)
    $nav.children().on('click', function(event) {
      itemNumber = $(this).prevAll().length
      $(this).addClass('active').siblings().removeClass('active')
      $items.each(function(index){
        $(this).toggleClass("active", itemNumber == $(this).prevAll().length)
      })
    })
    $nav.children().first().trigger('click')
  })
})

// show videos instead of bios where applicable
$(function(){

  function activateVideo(elem){
    if (elem && !!elem.getAttribute('data-vimeo-id')) {
      id = elem.getAttribute('data-vimeo-id')
      player = '<div class="person-video-player"><iframe seamless src="//player.vimeo.com/video/' + id + '?autoplay=1"></iframe></div>'
      $(elem).find('.person-more-content').html(player)
      $(elem).addClass('active').siblings().removeClass('active')
    }
  }
  function setVideoFromHash() {
    hash = location.hash
    elem = document.querySelector(hash)
    $('.person-video-player').remove()
    activateVideo(elem)
  }
  $people = $(".person[data-vimeo-id]")
  if ($people.length > 0) {
    $(window).on('hashchange', setVideoFromHash)
    setVideoFromHash()
  }
})

