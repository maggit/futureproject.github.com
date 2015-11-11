jQuery.fn.random = function(lowerLimit, upperLimit) {
  var lowerLimit = lowerLimit || 0
  var upperLimit = upperLimit || this.length
  var randomIndex = Math.floor(lowerLimit + Math.random() * (upperLimit-lowerLimit));
  return jQuery(this[randomIndex]);
}

$(function(){
  //rotate Imagine If... quotes on the homepage
  $('.page--index #imagine').each(function(){
    var $list = $(this).find('ul')
    var dreamTimer = window.setInterval(function(){
      var $dream = $list.children().first().nextAll().random()
      colorClass = "color-" + Math.floor(Math.random()*3).toString()
      $list.prepend($dream.clone().attr('class', colorClass))
      $dream.remove()
    }, 2000)
  })
  //rotate press quotes
  if (window.matchMedia("(min-width: 780px)").matches) {
    $('.page--index #press').each(function(){
      var $t = $(this)
      $t.addClass('rotating')
      var $quotes = $t.find('ul')
      var pressTimer = window.setInterval(function(){
        var $quote = $quotes.children().first().nextAll().random()
        $quotes.prepend($quote.clone())
        $quote.remove()
      }, 6000)
    })
  }
  // rotate partner logos
  var $partnerImages = $('.partner-images')
  if ($partnerImages.length > 0) {
    function swap(a, b) {
        a = $(a); b = $(b);
        var tmp = $('<span>').hide();
        a.before(tmp);
        b.before(a);
        tmp.replaceWith(b);
    }
    var timer = window.setInterval(function(){
      var $images = $partnerImages.find('li')
      var $bullet = $images.random(10, $images.length)
      var $target = $images.random(0, 10)
      swap($bullet, $target)
    }, 1000)
  }
})
