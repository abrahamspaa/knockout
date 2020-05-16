var ViewModel = function() {
  this.greeting = ko.observable("Hello");
  this.name = ko.observable("World");

  this.appHeading = ko.pureComputed(function() {
    return this.greeting() + ", " + this.name() + "!";
  }, this);
};

var appVM = new ViewModel();

ko.applyBindings(appVM);