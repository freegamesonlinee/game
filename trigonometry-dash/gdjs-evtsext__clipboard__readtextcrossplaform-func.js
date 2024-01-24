
if (typeof gdjs.evtsExt__Clipboard__ReadTextCrossPlaform !== "undefined") {
  gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Clipboard__ReadTextCrossPlaform = {};


gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.userFunc0x1a9c170 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const electron = runtimeScene.getGame().getRenderer().getElectron();
const callback =
    runtimeScene
        .getVariables()
        .get(eventsFunctionContext.getArgument("callback"));

if (electron !== null && electron.clipboard)
    callback.setString(electron.clipboard.readText());
else if (
    typeof cordova !== "undefined" &&
    cordova.plugins &&
    cordova.plugins.clipboard
) cordova.plugins.clipboard.paste(text => callback.setString(text));
else if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    navigator.clipboard.readText
) {
    navigator.clipboard.readText()
        .then(text => callback.setString(text))
        .catch(err =>
            console.error("Error occured while getting clipboard content: ", err.message)
        );
} else console.error("Unable to read from the clipboard: no method found for this platform.")

};
gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.userFunc0x1a9c170(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.func = function(runtimeScene, callback, parentEventsFunctionContext) {
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
if (argName === "callback") return callback;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.registeredGdjsCallbacks = [];