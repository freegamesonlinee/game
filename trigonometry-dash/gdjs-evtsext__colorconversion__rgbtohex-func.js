
if (typeof gdjs.evtsExt__ColorConversion__RgbToHex !== "undefined") {
  gdjs.evtsExt__ColorConversion__RgbToHex.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__RgbToHex = {};


gdjs.evtsExt__ColorConversion__RgbToHex.userFunc0x2dca4b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    const n = eventsFunctionContext.getArgument("n");
    const col = n.split(";");
    
    let r = parseFloat(col[0]),
        g = parseFloat(col[1]),
        b = parseFloat(col[2]);

    r = gdjs.evtTools.common.clamp(r, 0, 255);
    g = gdjs.evtTools.common.clamp(g, 0, 255);
    b = gdjs.evtTools.common.clamp(b, 0, 255);

    eventsFunctionContext.returnValue = "#" + gdjs.rgbToHex(r, g, b).toUpperCase();
} catch (e) {
    console.error("Unable to convert a color: ", e);
    eventsFunctionContext.returnValue = "#000000";
}
};
gdjs.evtsExt__ColorConversion__RgbToHex.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__RgbToHex.userFunc0x2dca4b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__RgbToHex.func = function(runtimeScene, n, parentEventsFunctionContext) {
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
if (argName === "n") return n;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ColorConversion__RgbToHex.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__RgbToHex.registeredGdjsCallbacks = [];