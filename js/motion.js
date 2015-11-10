$(function(){
  if (Modernizr.video && Modernizr.video.h264 && window.matchMedia("(min-width: 1025px)").matches) {
    $('*[data-motion]').each(function(){
      $(this).append('<video autoplay loop><source src="/img/homepage-video-loop-web.mp4" type="video/mp4"></video>')
    })
  }
  $('a[rel=player]').on('click', function(event) {
    $post = $(this).closest('.post')
    if ($post.length > 0) {
      event.preventDefault()
      frame = document.createElement('iframe')
      frame.src = this.href
      frame.className = "inline-video-player"
      $post.addClass('video-added').append(frame)
    }
  })
})
