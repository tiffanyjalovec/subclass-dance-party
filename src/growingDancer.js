var growingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

growingDancer.prototype = Object.create(makeDancer.prototype);

growingDancer.prototype.constructor = growingDancer;

growingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('growingDancer');
};

