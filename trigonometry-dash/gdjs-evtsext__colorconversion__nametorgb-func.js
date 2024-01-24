
if (typeof gdjs.evtsExt__ColorConversion__NameToRgb !== "undefined") {
  gdjs.evtsExt__ColorConversion__NameToRgb.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ColorConversion__NameToRgb = {};


gdjs.evtsExt__ColorConversion__NameToRgb.userFunc0x188da68 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let n = eventsFunctionContext.getArgument("n");

n = n.toLowerCase();

switch (n) {
    case 'black':
        eventsFunctionContext.returnValue = '0;0;0';
        break;
    case 'silver':
        eventsFunctionContext.returnValue = '192;192;192';
        break;
    case 'gray':
        eventsFunctionContext.returnValue = '128;128;128';
        break;
    case 'white':
        eventsFunctionContext.returnValue = '255;255;255';
        break;
    case 'maroon':
        eventsFunctionContext.returnValue = '128;0;0';
        break;
    case 'red':
        eventsFunctionContext.returnValue = '255;0;0';
        break;
    case 'purple':
        eventsFunctionContext.returnValue = '128;0;128';
        break;
    case 'fuchsia':
        eventsFunctionContext.returnValue = '255;0;255';
        break;
    case 'green':
        eventsFunctionContext.returnValue = '0;128;0';
        break;
    case 'lime':
        eventsFunctionContext.returnValue = '0;255;0';
        break;
    case 'olive':
        eventsFunctionContext.returnValue = '128;128;0';
        break;
    case 'yellow':
        eventsFunctionContext.returnValue = '255;255;0';
        break;
    case 'navy':
        eventsFunctionContext.returnValue = '0;0;128';
        break;
    case 'blue':
        eventsFunctionContext.returnValue = '0;0;255';
        break;
    case 'teal':
        eventsFunctionContext.returnValue = '0;128;128';
        break;
    case 'aqua':
        eventsFunctionContext.returnValue = '0;255;255';
        break;
    case 'orange':
        eventsFunctionContext.returnValue = '255;165;0';
        break;
    case 'aliceblue':
        eventsFunctionContext.returnValue = '240;248;255';
        break;
    case 'antiquewhite':
        eventsFunctionContext.returnValue = '250;235;215';
        break;
    case 'aquamarine':
        eventsFunctionContext.returnValue = '127;255;212';
        break;
    case 'azure':
        eventsFunctionContext.returnValue = '240;255;255';
        break;
    case 'beige':
        eventsFunctionContext.returnValue = '245;245;220';
        break;
    case 'bisque':
        eventsFunctionContext.returnValue = '255;228;196';
        break;
    case 'blanchedalmond':
        eventsFunctionContext.returnValue = '255;235;205';
        break;
    case 'blueviolet':
        eventsFunctionContext.returnValue = '128;43;226';
        break;
    case 'brown':
        eventsFunctionContext.returnValue = '165;42;42';
        break;
    case 'burlywood':
        eventsFunctionContext.returnValue = '222;184;135';
        break;
    case 'cadetblue':
        eventsFunctionContext.returnValue = '95;158;160';
        break;
    case 'chartreuse':
        eventsFunctionContext.returnValue = '127;255;0';
        break;
    case 'chocolate':
        eventsFunctionContext.returnValue = '210;105;30';
        break;
    case 'coral':
        eventsFunctionContext.returnValue = '255;127;80';
        break;
    case 'cornflowerblue':
        eventsFunctionContext.returnValue = '100;149;237';
        break;
    case 'cornsilk':
        eventsFunctionContext.returnValue = '255;248;220';
        break;
    case 'crimson':
        eventsFunctionContext.returnValue = '220;20;60';
        break;
    case 'cyan':
        eventsFunctionContext.returnValue = '220;20;60';
        break;
    case 'darkblue':
        eventsFunctionContext.returnValue = '0;0;139';
        break;
    case 'darkcyan':
        eventsFunctionContext.returnValue = '0;139;139';
        break;
    case 'darkgoldenrod':
        eventsFunctionContext.returnValue = '184;134;11';
        break;
    case 'darkgray':
    case 'darkgrey':
        eventsFunctionContext.returnValue = '169;169;169';
        break;
    case 'darkgreen':
        eventsFunctionContext.returnValue = '0;100;0';
        break;
    case 'darkkhaki':
        eventsFunctionContext.returnValue = '189;183;107';
        break;
    case 'darkmagenta':
        eventsFunctionContext.returnValue = '139;0;139';
        break;
    case 'darkolivegreen':
        eventsFunctionContext.returnValue = '85;107;47';
        break;
    case 'darkorange':
        eventsFunctionContext.returnValue = '255;140;0';
        break;
    case 'darkorchid':
        eventsFunctionContext.returnValue = '153;50;204';
        break;
    case 'darkred':
        eventsFunctionContext.returnValue = '139;0;0';
        break;
    case 'darksalmon':
        eventsFunctionContext.returnValue = '233;150;122';
        break;
    case 'darkseagreen':
        eventsFunctionContext.returnValue = '143;188;143';
        break;
    case 'darkslateblue':
        eventsFunctionContext.returnValue = '72;61;139';
        break;
    case 'darkslategray':
    case 'darkslategrey':
        eventsFunctionContext.returnValue = '47;79;79';
        break;
    case 'darkturquoise':
        eventsFunctionContext.returnValue = '0;206;209';
        break;
    case 'darkviolet':
        eventsFunctionContext.returnValue = '148;0;211';
        break;
    case 'deeppink':
        eventsFunctionContext.returnValue = '255;20;147';
        break;
    case 'deepskyblue':
        eventsFunctionContext.returnValue = '0;191;255';
        break;
    case 'dimgray':
    case 'dimgrey':
        eventsFunctionContext.returnValue = '105;105;105';
        break;
    case 'dodgerblue':
        eventsFunctionContext.returnValue = '30;144;255';
        break;
    case 'firebrick':
        eventsFunctionContext.returnValue = '178;34;34';
        break;
    case 'floralwhite':
        eventsFunctionContext.returnValue = '255;250;240';
        break;
    case 'forestgreen':
        eventsFunctionContext.returnValue = '32;139;34';
        break;
    case 'gainsboro':
        eventsFunctionContext.returnValue = '220;220;220';
        break;
    case 'ghostwhite':
        eventsFunctionContext.returnValue = '248;248;255';
        break;
    case 'gold':
        eventsFunctionContext.returnValue = '255;215;0';
        break;
    case 'goldenrod':
        eventsFunctionContext.returnValue = '218;165;32';
        break;
    case 'greenyellow':
        eventsFunctionContext.returnValue = '173;255;47';
        break;
    case 'grey':
        eventsFunctionContext.returnValue = '128;128;128';
        break;
    case 'honeydew':
        eventsFunctionContext.returnValue = '240;255;240';
        break;
    case 'hotpink':
        eventsFunctionContext.returnValue = '255;105;180';
        break;
    case 'indianred':
        eventsFunctionContext.returnValue = '205;92;92';
        break;
    case 'indigo':
        eventsFunctionContext.returnValue = '75;0;130';
        break;
    case 'ivory':
        eventsFunctionContext.returnValue = '255;255;240';
        break;
    case 'khaki':
        eventsFunctionContext.returnValue = '240;230;140';
        break;
    case 'lavender':
        eventsFunctionContext.returnValue = '230;230;250';
        break;
    case 'lavenderblush':
        eventsFunctionContext.returnValue = '255;240;245';
        break;
    case 'lawngreen':
        eventsFunctionContext.returnValue = '124;252;0';
        break;
    case 'lemonchiffon':
        eventsFunctionContext.returnValue = '255;250;205';
        break;
    case 'lightblue':
        eventsFunctionContext.returnValue = '173;216;230';
        break;
    case 'lightcoral':
        eventsFunctionContext.returnValue = '240;128;128';
        break;
    case 'lightcyan':
        eventsFunctionContext.returnValue = '224;255;255';
        break;
    case 'lightgoldenrodyellow':
        eventsFunctionContext.returnValue = '250;250;210';
        break;
    case 'lightgray':
    case 'lightgrey':
        eventsFunctionContext.returnValue = '211;211;211';
        break;
    case 'lightgreen':
        eventsFunctionContext.returnValue = '144;238;144';
        break;
    case 'lightpink':
        eventsFunctionContext.returnValue = '255;182;193';
        break;
    case 'lightsalmon':
        eventsFunctionContext.returnValue = '255;160;122';
        break;
    case 'lightseagreen':
        eventsFunctionContext.returnValue = '32;178;170';
        break;
    case 'lightskyblue':
        eventsFunctionContext.returnValue = '135;206;250';
        break;
    case 'lightslategray':
    case 'lightslategrey':
        eventsFunctionContext.returnValue = '119;136;153';
        break;
    case 'lightsteelblue':
        eventsFunctionContext.returnValue = '176;196;222';
        break;
    case 'lightyellow':
        eventsFunctionContext.returnValue = '255;255;224';
        break;
    case 'limegreen':
        eventsFunctionContext.returnValue = '50;205;50';
        break;
    case 'linen':
        eventsFunctionContext.returnValue = '250;240;230';
        break;
    case 'magenta':
        eventsFunctionContext.returnValue = '255;0;255';
        break;
    case 'mediumaquamarine':
        eventsFunctionContext.returnValue = '102;205;170';
        break;
    case 'mediumblue':
        eventsFunctionContext.returnValue = '0;0;205';
        break;
    case 'mediumorchid':
        eventsFunctionContext.returnValue = '186;85;211';
        break;
    case 'mediumpurple':
        eventsFunctionContext.returnValue = '147;112;219';
        break;
    case 'mediumseagreen':
        eventsFunctionContext.returnValue = '60;179;113';
        break;
    case 'mediumslateblue':
        eventsFunctionContext.returnValue = '123;104;238';
        break;
    case 'mediumspringgreen':
        eventsFunctionContext.returnValue = '0;250;154';
        break;
    case 'mediumturquoise':
        eventsFunctionContext.returnValue = '72;209;204';
        break;
    case 'mediumvioletred':
        eventsFunctionContext.returnValue = '199;21;133';
        break;
    case 'midnightblue':
        eventsFunctionContext.returnValue = '25;25;112';
        break;
    case 'mintcream':
        eventsFunctionContext.returnValue = '245;255;250';
        break;
    case 'mistyrose':
        eventsFunctionContext.returnValue = '255;228;225';
        break;
    case 'moccasin':
        eventsFunctionContext.returnValue = '255;228;181';
        break;
    case 'navajowhite':
        eventsFunctionContext.returnValue = '255;222;173';
        break;
    case 'oldlace':
        eventsFunctionContext.returnValue = '253;245;230';
        break;
    case 'olivedrab':
        eventsFunctionContext.returnValue = '107;142;35';
        break;
    case 'orangered':
        eventsFunctionContext.returnValue = '255;69;0';
        break;
    case 'orchid':
        eventsFunctionContext.returnValue = '218;112;214';
        break;
    case 'palegoldenrod':
        eventsFunctionContext.returnValue = '238;232;170';
        break;
    case 'palegreen':
        eventsFunctionContext.returnValue = '152;251;152';
        break;
    case 'paleturquoise':
        eventsFunctionContext.returnValue = '175;238;238';
        break;
    case 'palevioletred':
        eventsFunctionContext.returnValue = '219;112;147';
        break;
    case 'papayawhip':
        eventsFunctionContext.returnValue = '255;239;213';
        break;
    case 'peachpuff':
        eventsFunctionContext.returnValue = '255;218;185';
        break;
    case 'peru':
        eventsFunctionContext.returnValue = '205;133;63';
        break;
    case 'pink':
        eventsFunctionContext.returnValue = '255;192;203';
        break;
    case 'plum':
        eventsFunctionContext.returnValue = '221;160;221';
        break;
    case 'powderblue':
        eventsFunctionContext.returnValue = '176;224;230';
        break;
    case 'rosybrown':
        eventsFunctionContext.returnValue = '188;143;143';
        break;
    case 'royalblue':
        eventsFunctionContext.returnValue = '65;105;225';
        break;
    case 'saddlebrown':
        eventsFunctionContext.returnValue = '139;69;19';
        break;
    case 'salmon':
        eventsFunctionContext.returnValue = '150;128;114';
        break;
    case 'sandybrown':
        eventsFunctionContext.returnValue = '244;164;96';
        break;
    case 'seagreen':
        eventsFunctionContext.returnValue = '46;139;87';
        break;
    case 'seashell':
        eventsFunctionContext.returnValue = '255;245;238';
        break;
    case 'sienna':
        eventsFunctionContext.returnValue = '160;82;45';
        break;
    case 'skyblue':
        eventsFunctionContext.returnValue = '135;206;235';
        break;
    case 'slateblue':
        eventsFunctionContext.returnValue = '106;90;205';
        break;
    case 'slategray':
    case 'slategrey':
        eventsFunctionContext.returnValue = '112;128;144';
        break;
    case 'snow':
        eventsFunctionContext.returnValue = '255;250;250';
        break;
    case 'springgreen':
        eventsFunctionContext.returnValue = '0;255;127';
        break;
    case 'steelblue':
        eventsFunctionContext.returnValue = '70;130;180';
        break;
    case 'tan':
        eventsFunctionContext.returnValue = '210;180;140';
        break;
    case 'thistle':
        eventsFunctionContext.returnValue = '216;191;216';
        break;
    case 'tomato':
        eventsFunctionContext.returnValue = '255;99;71';
        break;
    case 'turquoise':
        eventsFunctionContext.returnValue = '64;224;208';
        break;
    case 'violet':
        eventsFunctionContext.returnValue = '238;130;238';
        break;
    case 'wheat':
        eventsFunctionContext.returnValue = '245;222;179';
        break;
    case 'whitesmoke':
        eventsFunctionContext.returnValue = '245;245;245';
        break;
    case 'yellowgreen':
        eventsFunctionContext.returnValue = '154;205;50';
        break;
    case 'rebeccapurple':
        eventsFunctionContext.returnValue = '102;51;153';
        break;
    default:
        eventsFunctionContext.returnValue = '0;0;0';
        console.error("Not a vaild color name");        
}
};
gdjs.evtsExt__ColorConversion__NameToRgb.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ColorConversion__NameToRgb.userFunc0x188da68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ColorConversion__NameToRgb.func = function(runtimeScene, n, parentEventsFunctionContext) {
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


gdjs.evtsExt__ColorConversion__NameToRgb.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ColorConversion__NameToRgb.registeredGdjsCallbacks = [];