
if (typeof gdjs.evtsExt__ColorConversion__RgbToHsv !== "undefined") {
  gdjs.evtsExt__ColorConversion__RgbToHsv.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__RgbToHsv = {};


gdjs.evtsExt__ColorConversion__RgbToHsv.userFunc0x188da68 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
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

    r /= 255;
    g /= 255;
    b /= 255;

    let v = Math.max(r, g, b), 
        c = v - Math.min(r, g, b);

    let h = c && ((v == r) ? (g - b) / c: ((v == g) ? 2 + (b - r) / c: 4 + (r - g) / c)); 

    eventsFunctionContext.returnValue = Math.round(60 * (h < 0 ? h + 6: h)) + ';' + Math.round((v && c / v) * 100) + ';' + Math.round(v * 100);
} catch (e) {
    console.error("Unable to convert a color: ", e);
    eventsFunctionContext.returnValue = "0;0;0";
}
};
gdjs.evtsExt__ColorConversion__RgbToHsv.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__RgbToHsv.userFunc0x188da68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__RgbToHsv.func = function(runtimeScene, n, parentEventsFunctionContext) {
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


gdjs.evtsExt__ColorConversion__RgbToHsv.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__RgbToHsv.registeredGdjsCallbacks = [];