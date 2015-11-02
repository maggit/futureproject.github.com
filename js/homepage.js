jQuery.fn.random = function() {
  var randomIndex = Math.floor(Math.random() * this.length);
  return jQuery(this[randomIndex]);
}

$(function(){
  //rotate Imagine If... quotes on the homepage
  $('.page--index #imagine').each(function(){
    $list = $(this).find('ul')
    dreamTimer = window.setInterval(function(){
      $dream = $list.children().first().nextAll().random()
      $list.prepend($dream.clone())
      $dream.remove()
    }, 2000)
  })
  //rotate press quotes
  if (window.matchMedia("min-width: 780px")) {
    $('.page--index #press').each(function(){
      $t = $(this)
      $t.addClass('rotating')
      $quotes = $t.find('ul')
      pressTimer = window.setInterval(function(){
        $quote = $quotes.children().first().nextAll().random()
        $quotes.prepend($quote.clone())
        $quote.remove()
      }, 6000)
    })
  }
})
