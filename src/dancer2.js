var dancer2 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$dancerTypeNode = $('<span class="dancer"></span>');

};

dancer2.prototype = Object.create(makeDancer.prototype);

dancer2.prototype.constructor = dancer2;

dancer2.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

