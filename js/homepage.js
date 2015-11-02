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
