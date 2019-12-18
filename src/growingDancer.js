var growingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://files.softicons.com/download/tv-movie-icons/planes-movie-icons-by-design-bolts/png/128x128/dusty-Plane-Pose-Icon.png">');
};

growingDancer.prototype = Object.create(makeDancer.prototype);

growingDancer.prototype.constructor = growingDancer;

growingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('growingDancer');
};

