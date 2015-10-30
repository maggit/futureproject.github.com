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
