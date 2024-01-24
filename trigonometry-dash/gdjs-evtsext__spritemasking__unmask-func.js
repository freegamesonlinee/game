
if (typeof gdjs.evtsExt__SpriteMasking__Unmask !== "undefined") {
  gdjs.evtsExt__SpriteMasking__Unmask.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMasking__Unmask = {};
gdjs.evtsExt__SpriteMasking__Unmask.GDMaskedObjects1= [];


gdjs.evtsExt__SpriteMasking__Unmask.userFunc0x1a48c28 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const maskedObjects = eventsFunctionContext.getObjects("Masked");

for (const maskedObject of maskedObjects) {
    const maskedRenderer = maskedObject.getRendererObject(); 
    maskedRenderer.mask = null;
}

};
gdjs.evtsExt__SpriteMasking__Unmask.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SpriteMasking__Unmask.userFunc0x1a48c28(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SpriteMasking__Unmask.func = function(runtimeScene, Masked, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Masked": Masked
},
  _objectArraysMap: {
"Masked": gdjs.objectsListsToArray(Masked)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SpriteMasking__Unmask.GDMaskedObjects1.length = 0;

gdjs.evtsExt__SpriteMasking__Unmask.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SpriteMasking__Unmask.registeredGdjsCallbacks = [];