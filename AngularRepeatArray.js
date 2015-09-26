function NgArrayRepeat() {}

//Private
NgArrayRepeat.getRowCount = function(items,numberPerRow){
	if (!items){
		return null;
	}
	if (!numberPerRow){
		return null;
	}
	return Math.ceil(items.length/numberPerRow);
};

NgArrayRepeat.getViewModelItems = function(items,numberPerRow){
	if (!items){
		return null;
	}

	var itemsCopy = NgArrayRepeat.deepCopyArray(items);
	var rowCount = NgArrayRepeat.getRowCount(items,numberPerRow);
	if (items.length > rowCount){
		var numItemToAdd = Math.abs(items.length - numberPerRow);
		for (var i = 0; i < numItemToAdd; i++) {
			itemsCopy.push(null);
		}
	}
	return itemsCopy;
};

NgArrayRepeat.deepCopyArray = function(array){
	var newArray=[];

	for(var i=0;i<array.length;i++){
		newArray.push(array[i]);
	}
	return newArray;
};

NgArrayRepeat.createEmptyArray = function(num) {
	if (!num){
		return null;
	}

	if(typeof num === 'string'){
		num = parseInt(num);
	}
	var data = [];
	for(var i = 0; i < num; i++) {
		data.push(0);
	}
	return data;
};

//Public
NgArrayRepeat.getNgRepeatArray = function(items,numberPerRow){
	if (!items){
		return null;
	}

	if (!numberPerRow){
		return null;
	}

    var rowCount = NgArrayRepeat.getRowCount(items,numberPerRow);
    return NgArrayRepeat.createEmptyArray(rowCount);
};

// TODO: Need to test this, also test if property is no on viewModelArray at index
NgArrayRepeat.getNgRepeatArrayObjectProperty = function(items,index,columnTotal,currentColumn,property){
	if (!items){
		return "";
	}

	if (!columnTotal){
		return "";
	}

	if (!currentColumn){
		return "";
	}

	if (!property){
		return "";
	}

	// Subtracting one to makes things easier of UI, row/columns start at 1 not 0
    var viewModelIndex = index * columnTotal + (currentColumn - 1);
    var viewModelArray = NgArrayRepeat.getViewModelItems(items,columnTotal);
    if (viewModelArray[viewModelIndex] == null){
      return "";
    }
    if (!viewModelArray[viewModelIndex][property]){
    	return "";
    }
    return viewModelArray[viewModelIndex][property];
};