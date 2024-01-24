
if (typeof gdjs.evtsExt__ColorConversion__HexToRgb !== "undefined") {
  gdjs.evtsExt__ColorConversion__HexToRgb.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__HexToRgb = {};


gdjs.evtsExt__ColorConversion__HexToRgb.userFunc0x2c0b398 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    let n = eventsFunctionContext.getArgument("n");

    //input validation
    let v = parseInt(n, 16);
    if (v.toString(16) === n.toUpperCase()) throw 'input is not hexadecimal'; 

    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    n = n.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);

    let r = parseInt(result[1], 16),
        g = parseInt(result[2], 16),
        b = parseInt(result[3], 16);

    eventsFunctionContext.returnValue = r + ';' + g + ';' + b;
} catch(e) {
    console.error("Unable to convert a color: ", e);
    eventsFunctionContext.returnValue = "0;0;0";
}
};
gdjs.evtsExt__ColorConversion__HexToRgb.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__HexToRgb.userFunc0x2c0b398(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__HexToRgb.func = function(runtimeScene, n, parentEventsFunctionContext) {
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


gdjs.evtsExt__ColorConversion__HexToRgb.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__HexToRgb.registeredGdjsCallbacks = [];