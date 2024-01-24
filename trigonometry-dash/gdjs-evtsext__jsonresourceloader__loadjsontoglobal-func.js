
if (typeof gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal !== "undefined") {
  gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal = {};


gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.userFunc0x1af6f98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext
    .getArgument("Variable")
    .fromJSObject(
        runtimeScene
            .getGame()
            .getJsonManager()
            .getLoadedJson(eventsFunctionContext.getArgument("Resource"))
    );

};
gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.userFunc0x1af6f98(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.func = function(runtimeScene, Resource, Variable, parentEventsFunctionContext) {
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
if (argName === "Resource") return Resource;
if (argName === "Variable") return Variable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.registeredGdjsCallbacks = [];