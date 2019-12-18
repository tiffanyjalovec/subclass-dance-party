var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img width="150" height="150" src="https://png2.cleanpng.com/sh/8c2f24b080e55145e3fd5e5279280dbb/L0KzQYm3VME1N6Vpj5H0aYP2gLBuTfFqeqFxedDuLXnmf7A0gcUua5DyiOd9ZYKwebT2jwMubp1uf9p9LXHsgsHzgf5mNWZmfKQ9Y3HpQoWBUcM1NmEASKY8OUe3QYa5U8c0OWc4SaM9OUWxgLBu/kisspng-airplane-icon-a5-computer-icons-flight-airplane-5ad24caf248134.0904397415237316311495.png" class="defaultDancer blinkyDancer">');
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
  this.$node.toggle();
  // console.log($node2);
};

// makeBlinkyDancer.prototype.lineUp = function() {
//   var styleSettings = {
//     right: 0
//   }
//   this.$node.css(styleSettings);
// }

//change styling of this.$node border = 10px solid pink
