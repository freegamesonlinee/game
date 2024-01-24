
if (typeof gdjs.evtsExt__ColorConversion__RgbMean !== "undefined") {
  gdjs.evtsExt__ColorConversion__RgbMean.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__RgbMean = {};


gdjs.evtsExt__ColorConversion__RgbMean.userFunc0x2dca4b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    // split do allocations, but the code a lot simpler this way.
    const components1 = eventsFunctionContext.getArgument("Color1").split(";");
    const r1 = gdjs.evtTools.common.clamp(parseFloat(components1[0]), 0, 255);
    const g1 = gdjs.evtTools.common.clamp(parseFloat(components1[1]), 0, 255);
    const b1 = gdjs.evtTools.common.clamp(parseFloat(components1[2]), 0, 255);

    const components2 = eventsFunctionContext.getArgument("Color2").split(";");
    const r2 = gdjs.evtTools.common.clamp(parseFloat(components2[0]), 0, 255);
    const g2 = gdjs.evtTools.common.clamp(parseFloat(components2[1]), 0, 255);
    const b2 = gdjs.evtTools.common.clamp(parseFloat(components2[2]), 0, 255);

    const ratio = eventsFunctionContext.getArgument("Ratio");
    const r = gdjs.evtTools.common.clamp(Math.round((1 - ratio) * r1 + ratio * r2), 0, 255);
    const g = gdjs.evtTools.common.clamp(Math.round((1 - ratio) * g1 + ratio * g2), 0, 255);
    const b = gdjs.evtTools.common.clamp(Math.round((1 - ratio) * b1 + ratio * b2), 0, 255);

    eventsFunctionContext.returnValue = r + ";" + g + ";" + b;
} catch (e) {
    console.error("Unable to convert a color: ", e);
    eventsFunctionContext.returnValue = "0;0;0";
}
};
gdjs.evtsExt__ColorConversion__RgbMean.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__RgbMean.userFunc0x2dca4b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__RgbMean.func = function(runtimeScene, Color1, Color2, Ratio, parentEventsFunctionContext) {
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
if (argName === "Color1") return Color1;
if (argName === "Color2") return Color2;
if (argName === "Ratio") return Ratio;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ColorConversion__RgbMean.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__RgbMean.registeredGdjsCallbacks = [];