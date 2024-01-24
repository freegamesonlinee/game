
if (typeof gdjs.evtsExt__ColorConversion__RgbToHsl !== "undefined") {
  gdjs.evtsExt__ColorConversion__RgbToHsl.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__RgbToHsl = {};


gdjs.evtsExt__ColorConversion__RgbToHsl.userFunc0x2dca4b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const n = eventsFunctionContext.getArgument("n");
const col = n.split(";");

let r = parseFloat(col[0]),
    g = parseFloat(col[1]),
    b = parseFloat(col[2]);

    r = gdjs.evtTools.common.clamp(r, 0, 255);
    g = gdjs.evtTools.common.clamp(g, 0, 255);
    b = gdjs.evtTools.common.clamp(b, 0, 255);

r /= 255;
g /= 255;
b /= 255;

let v = Math.max(r, g, b), c = v - Math.min(r, g, b), f = (1 - Math.abs(v + v - c - 1));
let h = c && ((v === r) ? (g - b) / c: ((v === g) ? 2 + (b - r) / c: 4 + (r - g) / c)); 

eventsFunctionContext.returnValue = Math.round(60 * (h < 0 ? h + 6: h)) + ';' + Math.round((f ? c / f: 0) * 100) + ';' + Math.round(((v + v - c) / 2) * 100);

};
gdjs.evtsExt__ColorConversion__RgbToHsl.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__RgbToHsl.userFunc0x2dca4b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__RgbToHsl.func = function(runtimeScene, n, parentEventsFunctionContext) {
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


gdjs.evtsExt__ColorConversion__RgbToHsl.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__RgbToHsl.registeredGdjsCallbacks = [];