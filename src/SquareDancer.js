var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('square');
  //this.$node.removeClass('dancer');
  // we plan to overwrite the step function below
  // but we still want the superclass step behavior to work,
  // (ie we still want to preserve the setTimeout functionality)
  // so we must keep a copy of the old version of this function
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

// console.log('this.node is ', this.node);

SquareDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
