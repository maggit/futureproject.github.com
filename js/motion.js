$(function(){
  if (Modernizr.video && Modernizr.video.h264 && window.matchMedia("(min-width: 1025px)").matches) {
    $('*[data-motion]').each(function(){
      $(this).append('<video autoplay loop><source src="/img/homepage-video-loop-web.mp4" type="video/mp4"></video>')
    })
  }
})
