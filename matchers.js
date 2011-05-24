beforeEach(function() {
  this.addMatchers({
    toBeACalendar: function() {
      return this.actual.hasClass("hasDatepicker");             
    },

    toBeClosed: function() {
      return !this.actual.dialog("isOpen");
    },

    toBeADialog: function() {
      return this.actual.parent().hasClass("ui-dialog");             
    },

    toBeASlider: function() {
      return this.actual.hasClass("ui-slider");             
    },

    toBeATextInput: function() {
      return this.actual.is(":text");
    },

    toBeDefaultPrevented: function() {
      return this.actual.isDefaultPrevented();                    
    },

    toNotBeShown: function() {
      var val = this.actual.is(":hidden") ||
              jasmine.JQuery.matchersClass["toHaveAttr"]('display', 'none');
      return val;
    },

    toBeShown: function() {
      var val = this.actual.is(":visible") ||
                    !jasmine.JQuery.matchersClass["toHaveAttr"]('display', 'none');
      return val;
    }

  });
});
