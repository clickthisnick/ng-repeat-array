
var app = angular.module("repeat", []);

app.controller('Controller', function() {

  var repeater = this;

  repeater.getNgRepeatArray = function(items,numberPerRow){
    return NgArrayRepeat.getNgRepeatArray(items,numberPerRow);
  };

  repeater.getNgRepeatArrayObjectProperty = function(images,index,columnTotal,column,property){
    return NgArrayRepeat.getNgRepeatArrayObjectProperty(images,index,columnTotal,column,property);
  };

  repeater.getFourItems = [{'id':1},{'id':2},{'id':3},{'id':4}];

});



