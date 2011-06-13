
jQuery(function($) {
  $('body').ajaxSuccess(function() {
    setTimeout(function() {
      $("p > img").each(function() { $(this).parent("p").css("text-align", "center"); });

      $("div.slide .wal .broken").each(function() {
        var self = $(this);
        var text = self.text().split("");
        self.empty()
        text.each(function(i) {
          var transform = "rotate(" + parseInt((Math.random() * 960)) + "deg)";
          $("<span>").
            text(i).
            css("-moz-transform", transform).
            css("-webkit-transform", transform).
            appendTo(self);
        });
      });

    }, 100);
  });

  $("body").delegate(".slide", "showoff:show", function() {
    var hl = $(".slide:visible .highlight");
    if(hl.get(0)) {
      hl.removeClass("visible")
      setTimeout(function() { hl.addClass("visible"); }, 1000);
    }
  });


  $("body").delegate(".show-image-delayed", "showoff:show", function() {
    $(".show-image-delayed img").removeClass("visible");

    var self = $(this);
    console.log(this);
    setTimeout(function() { self.find("img").addClass("visible"); }, 500);
  })

});
