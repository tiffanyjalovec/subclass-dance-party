var planeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="defaultDancer planeDancer" src="http://www.pngall.com/wp-content/uploads/2016/05/Plane-Download-PNG.png">');
};

planeDancer.prototype = Object.create(makeDancer.prototype);

planeDancer.prototype.constructor = planeDancer;

planeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.toggleClass('planeDancer');
};

// planeDancer.prototype.lineUp = function() {
//   var styleSettings = {
//     right: 0
//   }
//   this.$node.css(styleSettings);
// }


