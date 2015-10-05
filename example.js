
var app = angular.module("repeat", []);

app.controller('Controller', function() {

  var repeater = this;

  repeater.ngArrLoop = function(items,numberPerRow){
    return NgArrRepeat.ngArrLoop(items,numberPerRow);
  };

  repeater.ngArrProp = function(images,index,columnTotal,column,property){
    return NgArrRepeat.ngArrProp(images,index,columnTotal,column,property);
  };

  repeater.getFourItems = [{'id':1},{'id':2},{'id':3},{'id':4}];

});



