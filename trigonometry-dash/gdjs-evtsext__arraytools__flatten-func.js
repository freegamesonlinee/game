
if (typeof gdjs.evtsExt__ArrayTools__Flatten !== "undefined") {
  gdjs.evtsExt__ArrayTools__Flatten.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__Flatten = {};


gdjs.evtsExt__ArrayTools__Flatten.userFunc0x2c059e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");

// Cast to array to ensure getAllChildrenArray returns the real array
array.castTo("array");

const internalArray = array.getAllChildrenArray();
const deep = eventsFunctionContext.getArgument("Deep");

for (let i = 0; i < internalArray.length; i++) {
    if (internalArray[i].getType() === "array") {
        const childArray = internalArray[i].getAllChildrenArray();
        // At the position of the array (i), remove 1 element (the array), 
        // and insert elements of b (the contents of the array) in-place of the array.
        internalArray.splice(i, 1, ...childArray);
        // Skip over the elements that were just added as we are flattening only 1 level deep 
        if (!deep) i += childArray.length;
        // If deep, the current element has been replaced with another, we need to recheck it on next iteration.
        // If not deep, the current element is now the one after the array elements and needs to be checked too.
        // In both case, decreasing by 1 is necessary.
        i--;
    }
}

};
gdjs.evtsExt__ArrayTools__Flatten.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__Flatten.userFunc0x2c059e8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__Flatten.func = function(runtimeScene, Array, Deep, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Array") return Array;
if (argName === "Deep") return Deep;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Flatten.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ArrayTools__Flatten.registeredGdjsCallbacks = [];