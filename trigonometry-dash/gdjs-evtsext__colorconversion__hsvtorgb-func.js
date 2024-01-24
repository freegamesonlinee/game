
if (typeof gdjs.evtsExt__ColorConversion__HsvToRgb !== "undefined") {
  gdjs.evtsExt__ColorConversion__HsvToRgb.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__HsvToRgb = {};


gdjs.evtsExt__ColorConversion__HsvToRgb.userFunc0x188da68 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {

    let h = parseFloat(eventsFunctionContext.getArgument("h")),
        s = parseFloat(eventsFunctionContext.getArgument("s")),
        v = parseFloat(eventsFunctionContext.getArgument("v"));
    
    s = gdjs.evtTools.common.clamp(s, 0, 100);
    v = gdjs.evtTools.common.clamp(v, 0, 100);

    h %= 360;
    if (h < 0) {
        h += 360;
    }

    s /= 100;
    v /= 100;

    let f = (n , k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);

    eventsFunctionContext.returnValue = Math.round(f(5) * 255) + ';' + Math.round(f(3) * 255) + ';' + Math.round(f(1) * 255);
} catch(e) {
    console.error("Unable to convert a color: ", e);
    eventsFunctionContext.returnValue = "0;0;0";
}
};
gdjs.evtsExt__ColorConversion__HsvToRgb.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__HsvToRgb.userFunc0x188da68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__HsvToRgb.func = function(runtimeScene, h, s, v, parentEventsFunctionContext) {
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
if (argName === "h") return h;
if (argName === "s") return s;
if (argName === "v") return v;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ColorConversion__HsvToRgb.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__HsvToRgb.registeredGdjsCallbacks = [];