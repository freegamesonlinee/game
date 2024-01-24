
if (typeof gdjs.evtsExt__Clipboard__WriteText !== "undefined") {
  gdjs.evtsExt__Clipboard__WriteText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Clipboard__WriteText = {};


gdjs.evtsExt__Clipboard__WriteText.userFunc0x1a9c170 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const electron = runtimeScene.getGame().getRenderer().getElectron();
const text = eventsFunctionContext.getArgument("text");

if (electron !== null && electron.clipboard)
  electron.clipboard.writeText(text);
else if (
  typeof cordova !== "undefined" &&
  cordova.plugins &&
  cordova.plugins.clipboard
) cordova.plugins.clipboard.copy(text);
else if (
  typeof navigator !== "undefined" &&
  navigator.clipboard &&
  navigator.clipboard.writeText
) navigator.clipboard
  .writeText(text)
  .catch(e => console.error("Error while writing clipboard: ", e));
else console.error("Unable to write to the clipboard: no method found for this platform."); 

};
gdjs.evtsExt__Clipboard__WriteText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Clipboard__WriteText.userFunc0x1a9c170(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Clipboard__WriteText.func = function(runtimeScene, text, parentEventsFunctionContext) {
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
if (argName === "text") return text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Clipboard__WriteText.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Clipboard__WriteText.registeredGdjsCallbacks = [];