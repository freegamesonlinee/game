
if (typeof gdjs.evtsExt__UDTFwTGD__DownloadTextFile !== "undefined") {
  gdjs.evtsExt__UDTFwTGD__DownloadTextFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UDTFwTGD__DownloadTextFile = {};


gdjs.evtsExt__UDTFwTGD__DownloadTextFile.userFunc0xe0ea90 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function DownloadTextContent(filename, mimeType,content) {
    var link = document.createElement('a')
    var blob = new Blob([content], {type: mimeType})
    var url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.click();
    link.remove();
}

const FileName = eventsFunctionContext.getArgument("FileName");
const TextContent = eventsFunctionContext.getArgument("TextContent");

DownloadTextContent(FileName, "text/plain", TextContent);
};
gdjs.evtsExt__UDTFwTGD__DownloadTextFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__UDTFwTGD__DownloadTextFile.userFunc0xe0ea90(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__UDTFwTGD__DownloadTextFile.func = function(runtimeScene, FileName, TextContent, parentEventsFunctionContext) {
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
if (argName === "FileName") return FileName;
if (argName === "TextContent") return TextContent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__UDTFwTGD__DownloadTextFile.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__UDTFwTGD__DownloadTextFile.registeredGdjsCallbacks = [];