
if (typeof gdjs.evtsExt__ColorConversion__HslToRgb !== "undefined") {
  gdjs.evtsExt__ColorConversion__HslToRgb.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__HslToRgb = {};


gdjs.evtsExt__ColorConversion__HslToRgb.userFunc0x188da68 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    let h = parseFloat(eventsFunctionContext.getArgument("Hue")),
        s = parseFloat(eventsFunctionContext.getArgument("Saturation")),
        l = parseFloat(eventsFunctionContext.getArgument("Lightness"));

    s = gdjs.evtTools.common.clamp(s, 0, 100);
    l = gdjs.evtTools.common.clamp(l, 0, 100);

    h %= 360;
    if (h < 0) {
        h += 360;
    }

    s /= 100;
    l /= 100;

    let a = s * Math.min(l, 1 - l);
    let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k , 1), - 1);                 

    eventsFunctionContext.returnValue = Math.round(f(0) * 255) + ';' + Math.round(f(8) * 255) + ';' + Math.round(f(4) * 255);
} catch(e) {
    console.error("Unable to convert a color: ", e);
    eventsFunctionContext.returnValue = "0;0;0";
}
};
gdjs.evtsExt__ColorConversion__HslToRgb.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__HslToRgb.userFunc0x188da68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__HslToRgb.func = function(runtimeScene, Hue, Saturation, Lightness, parentEventsFunctionContext) {
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
if (argName === "Hue") return Hue;
if (argName === "Saturation") return Saturation;
if (argName === "Lightness") return Lightness;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ColorConversion__HslToRgb.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__HslToRgb.registeredGdjsCallbacks = [];