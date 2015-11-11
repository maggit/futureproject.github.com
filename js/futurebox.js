// TFP lightboxes for the whole family
(function($) {
  $.fn.futurebox = function(args){
    // boxer will store variables shared across all futurebox instances
    var boxer = this
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
      self.$prev = $(boxer[settings.galleryIndex-1])
      if (self.$prev.length > 0 ) {
        self.$el.append($("<div class='futurebox-prev' />"))
      }

      // make a NEXT button
      self.$next = $(boxer[settings.galleryIndex+1])
      if (self.$next.length > 0 ) {
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
      self.$el.on('click', '.futurebox-next', function(){ self.$next.trigger('click') })
      // Go backward (prev) on click
      self.$el.on('click', '.futurebox-prev', function(){ self.$prev.trigger('click') })

      return self
    }
    // Spawn a futurebox every time a passed element is clicked
    return this.each(function(index){
      $(this).on('click', function(event) {
        event.preventDefault()
        box = new futurebox({ galleryIndex: index })
        frame = document.createElement('iframe')
        frame.src = this.href
        box.$el.append(frame).appendTo(boxer.$container)
      })
    })
  }
})(jQuery)
