jQuery.fn.random = function(lowerLimit, upperLimit) {
  var lowerLimit = lowerLimit || 0
  var upperLimit = upperLimit || this.length
  var randomIndex = Math.floor(lowerLimit + Math.random() * (upperLimit-lowerLimit));
  return jQuery(this[randomIndex]);
}

$(function(){
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
      var $target = $images.not(":nth-child(3)").random(0, 9)
      swap($bullet, $target)
    }, 1000)
  }
})
