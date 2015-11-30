// TFP lightboxes for the whole family
(function($) {
  $.fn.futurebox = function(args){
    args = args || {}
    // boxer will store variables shared across all futurebox instances
    var boxer = this
    boxer.selector = args.selector || 'a[rel=futurebox]'
    boxer.$container = $('body')
    boxer.$doc = $(document)

    // futurebox is a self-contained view
    var futurebox = function(settings){
      var self = this
      self.settings = settings || {}

      self.$el = $("<div class='futurebox' />")

      // make a CLOSE button
      self.$el.append($("<div class='futurebox-close' />"))
      self.close = function(){
        self.$el.remove()
      }

      // make a PREV button
      if (self.settings.prev) {
        self.$el.append($("<div class='futurebox-prev' />"))
      }

      // make a NEXT button
      if (self.settings.next) {
        self.$el.append($("<div class='futurebox-next' />"))
      }

      // Announce that the box is open
      boxer.$doc.trigger('futurebox:opened')

      // Close on future such announcements
      boxer.$doc.on('futurebox:opened', function(){
        self.close()
      })

      // Close when someone clicks the close button
      self.$el.on('click', '.futurebox-close', self.close)

      // Go forward (next) on click
      self.$el.on('click', '.futurebox-next', function(){ $(self.settings.next).trigger('click') })
      // Go backward (prev) on click
      self.$el.on('click', '.futurebox-prev', function(){ $(self.settings.prev).trigger('click') })

      return self
    }
    // Spawn a futurebox every time a passed element is clicked
    boxer.$doc.on('click.futurebox', boxer.selector, function(event) {
      event.preventDefault()
      var target = this
      var nextElem, prevElem = null
      var $boxes = $(boxer.selector)
      $boxes.each(function(index){
        if(target == this) {
          nextElem = $boxes[index+1]
          prevElem = $boxes[index-1]
        }
      })
      box = new futurebox({
        next: nextElem,
        prev: prevElem
      })
      frame = document.createElement('iframe')
      frame.src = this.href
      box.$el.append(frame).appendTo(boxer.$container)
    })
    return this
  }
})(jQuery)
