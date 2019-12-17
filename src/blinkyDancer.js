var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer2"></span>');
  //this.oldStep = this.step;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

//var oldStep = blinkyDancer.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('blinkyDancer');
  // console.log($node2);
};

//change styling of this.$node border = 10px solid pink
