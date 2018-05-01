var TogapeiBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('togapei');

  // we plan to overwrite the step function below
  // but we still want the superclass step behavior to work,
  // (ie we still want to preserve the setTimeout functionality)
  // so we must keep a copy of the old version of this function
};

TogapeiBlinkyDancer.prototype = Object.create(Dancer.prototype);
TogapeiBlinkyDancer.prototype.constructor = TogapeiBlinkyDancer;

TogapeiBlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
