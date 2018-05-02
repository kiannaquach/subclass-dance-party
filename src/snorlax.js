var SnorlaxDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('snorlax');
  // we plan to overwrite the step function below
  // but we still want the superclass step behavior to work,
  // (ie we still want to preserve the setTimeout functionality)
  // so we must keep a copy of the old version of this function
};

SnorlaxDancer.prototype = Object.create(Dancer.prototype);
SnorlaxDancer.prototype.constructor = SnorlaxDancer;

// console.log('this.node is ', this.node);

SnorlaxDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle('bounce');
};
