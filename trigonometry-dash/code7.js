gdjs.creditsCode = {};
gdjs.creditsCode.GDcreditsObjects1= [];
gdjs.creditsCode.GDcreditsObjects2= [];
gdjs.creditsCode.GDcreditsObjects3= [];
gdjs.creditsCode.GDcreditsObjects4= [];
gdjs.creditsCode.GDnerdviewObjects1= [];
gdjs.creditsCode.GDnerdviewObjects2= [];
gdjs.creditsCode.GDnerdviewObjects3= [];
gdjs.creditsCode.GDnerdviewObjects4= [];
gdjs.creditsCode.GDmlsBgBorderObjects1= [];
gdjs.creditsCode.GDmlsBgBorderObjects2= [];
gdjs.creditsCode.GDmlsBgBorderObjects3= [];
gdjs.creditsCode.GDmlsBgBorderObjects4= [];
gdjs.creditsCode.GDbgObjects1= [];
gdjs.creditsCode.GDbgObjects2= [];
gdjs.creditsCode.GDbgObjects3= [];
gdjs.creditsCode.GDbgObjects4= [];
gdjs.creditsCode.GDtransitionObjects1= [];
gdjs.creditsCode.GDtransitionObjects2= [];
gdjs.creditsCode.GDtransitionObjects3= [];
gdjs.creditsCode.GDtransitionObjects4= [];
gdjs.creditsCode.GDbackbuttonObjects1= [];
gdjs.creditsCode.GDbackbuttonObjects2= [];
gdjs.creditsCode.GDbackbuttonObjects3= [];
gdjs.creditsCode.GDbackbuttonObjects4= [];
gdjs.creditsCode.GDtitlesObjects1= [];
gdjs.creditsCode.GDtitlesObjects2= [];
gdjs.creditsCode.GDtitlesObjects3= [];
gdjs.creditsCode.GDtitlesObjects4= [];
gdjs.creditsCode.GDcreditLogoObjects1= [];
gdjs.creditsCode.GDcreditLogoObjects2= [];
gdjs.creditsCode.GDcreditLogoObjects3= [];
gdjs.creditsCode.GDcreditLogoObjects4= [];


gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDcreditsObjects2Objects = Hashtable.newFrom({"credits": gdjs.creditsCode.GDcreditsObjects2});
gdjs.creditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("creditsVar"), "color");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.creditsCode.GDcreditsObjects2, gdjs.creditsCode.GDcreditsObjects3);

{for(var i = 0, len = gdjs.creditsCode.GDcreditsObjects3.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditsObjects3[i].setTint(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("creditsVar").getChild("color")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("creditsVar"), "size");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.creditsCode.GDcreditsObjects2, gdjs.creditsCode.GDcreditsObjects3);

{for(var i = 0, len = gdjs.creditsCode.GDcreditsObjects3.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditsObjects3[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("creditsVar").getChild("size")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.creditsCode.GDcreditsObjects2, gdjs.creditsCode.GDcreditsObjects3);

{for(var i = 0, len = gdjs.creditsCode.GDcreditsObjects3.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditsObjects3[i].setX(216 - (gdjs.creditsCode.GDcreditsObjects3[i].getWidth()) / 2);
}
}}

}


};gdjs.creditsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sounds\\music\\blazuliteMenuTheme.ogg", 2, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("titles"), gdjs.creditsCode.GDtitlesObjects2);
{for(var i = 0, len = gdjs.creditsCode.GDtitlesObjects2.length ;i < len;++i) {
    gdjs.creditsCode.GDtitlesObjects2[i].setXOffset(0);
}
}{for(var i = 0, len = gdjs.creditsCode.GDtitlesObjects2.length ;i < len;++i) {
    gdjs.creditsCode.GDtitlesObjects2[i].setYOffset(40);
}
}{for(var i = 0, len = gdjs.creditsCode.GDtitlesObjects2.length ;i < len;++i) {
    gdjs.creditsCode.GDtitlesObjects2[i].getBehavior("Resizable").setWidth(82);
}
}{for(var i = 0, len = gdjs.creditsCode.GDtitlesObjects2.length ;i < len;++i) {
    gdjs.creditsCode.GDtitlesObjects2[i].getBehavior("Resizable").setHeight(20);
}
}{for(var i = 0, len = gdjs.creditsCode.GDtitlesObjects2.length ;i < len;++i) {
    gdjs.creditsCode.GDtitlesObjects2[i].setX(216 - (82 / 2));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.creditsCode.GDtransitionObjects2);
{for(var i = 0, len = gdjs.creditsCode.GDtransitionObjects2.length ;i < len;++i) {
    gdjs.creditsCode.GDtransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.2, "Circular", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("creditsX");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("creditsVar");
const iterableReference2 = runtimeScene.getScene().getVariables().get("credits");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.creditsCode.GDcreditsObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDcreditsObjects2Objects, 0, 240 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("spacing")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("creditsX")) * 11, "");
}{for(var i = 0, len = gdjs.creditsCode.GDcreditsObjects2.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditsObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("creditsVar").getChild("content")));
}
}{runtimeScene.getScene().getVariables().get("spacing").add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("creditsVar").getChild("space")) * 11);
}
{ //Subevents: 
gdjs.creditsCode.eventsList0(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDbackbuttonObjects1Objects = Hashtable.newFrom({"backbutton": gdjs.creditsCode.GDbackbuttonObjects1});
gdjs.creditsCode.asyncCallback35318412 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainmenu", true);
}}
gdjs.creditsCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.creditsCode.asyncCallback35318412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.creditsCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.creditsCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.creditsCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.2, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.creditsCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDbackbuttonObjects1Objects = Hashtable.newFrom({"backbutton": gdjs.creditsCode.GDbackbuttonObjects1});
gdjs.creditsCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("creditLogo"), gdjs.creditsCode.GDcreditLogoObjects1);
{gdjs.evtTools.window.setWindowSize(runtimeScene, 432 * 3, 240 * 3, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtsExt__JSONResourceLoader__LoadJSONToScene.func(runtimeScene, "credits.json", runtimeScene.getScene().getVariables().get("credits"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.creditsCode.GDcreditLogoObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditLogoObjects1[i].setX(216 - (gdjs.creditsCode.GDcreditLogoObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.creditsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("titles"), gdjs.creditsCode.GDtitlesObjects1);
{for(var i = 0, len = gdjs.creditsCode.GDtitlesObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDtitlesObjects1[i].returnVariable(gdjs.creditsCode.GDtitlesObjects1[i].getVariables().get("phase")).add(1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 60);
}
}{for(var i = 0, len = gdjs.creditsCode.GDtitlesObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDtitlesObjects1[i].setAngle(Math.cos(gdjs.toRad((gdjs.RuntimeObject.getVariableNumber(gdjs.creditsCode.GDtitlesObjects1[i].getVariables().get("phase"))))) * 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.creditsCode.GDbackbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDbackbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.creditsCode.GDbackbuttonObjects1 */
{for(var i = 0, len = gdjs.creditsCode.GDbackbuttonObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDbackbuttonObjects1[i].getBehavior("Scale").setScale(1.2);
}
}
{ //Subevents
gdjs.creditsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.creditsCode.GDbackbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.creditsCode.mapOfGDgdjs_9546creditsCode_9546GDbackbuttonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.creditsCode.GDbackbuttonObjects1 */
{for(var i = 0, len = gdjs.creditsCode.GDbackbuttonObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDbackbuttonObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("creditLogo"), gdjs.creditsCode.GDcreditLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.creditsCode.GDcreditsObjects1);
{for(var i = 0, len = gdjs.creditsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditsObjects1[i].setY(gdjs.creditsCode.GDcreditsObjects1[i].getY() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 30));
}
}{for(var i = 0, len = gdjs.creditsCode.GDcreditLogoObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditLogoObjects1[i].setY(gdjs.creditsCode.GDcreditLogoObjects1[i].getY() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 30));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("creditLogo"), gdjs.creditsCode.GDcreditLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.creditsCode.GDcreditsObjects1);
{for(var i = 0, len = gdjs.creditsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditsObjects1[i].setY(gdjs.creditsCode.GDcreditsObjects1[i].getY() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 140 * 2));
}
}{for(var i = 0, len = gdjs.creditsCode.GDcreditLogoObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditLogoObjects1[i].setY(gdjs.creditsCode.GDcreditLogoObjects1[i].getY() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 140 * 2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("creditLogo"), gdjs.creditsCode.GDcreditLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.creditsCode.GDcreditsObjects1);
{for(var i = 0, len = gdjs.creditsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditsObjects1[i].setY(gdjs.creditsCode.GDcreditsObjects1[i].getY() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 140 * 2));
}
}{for(var i = 0, len = gdjs.creditsCode.GDcreditLogoObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcreditLogoObjects1[i].setY(gdjs.creditsCode.GDcreditLogoObjects1[i].getY() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 140 * 2));
}
}}

}


};

gdjs.creditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.creditsCode.GDcreditsObjects1.length = 0;
gdjs.creditsCode.GDcreditsObjects2.length = 0;
gdjs.creditsCode.GDcreditsObjects3.length = 0;
gdjs.creditsCode.GDcreditsObjects4.length = 0;
gdjs.creditsCode.GDnerdviewObjects1.length = 0;
gdjs.creditsCode.GDnerdviewObjects2.length = 0;
gdjs.creditsCode.GDnerdviewObjects3.length = 0;
gdjs.creditsCode.GDnerdviewObjects4.length = 0;
gdjs.creditsCode.GDmlsBgBorderObjects1.length = 0;
gdjs.creditsCode.GDmlsBgBorderObjects2.length = 0;
gdjs.creditsCode.GDmlsBgBorderObjects3.length = 0;
gdjs.creditsCode.GDmlsBgBorderObjects4.length = 0;
gdjs.creditsCode.GDbgObjects1.length = 0;
gdjs.creditsCode.GDbgObjects2.length = 0;
gdjs.creditsCode.GDbgObjects3.length = 0;
gdjs.creditsCode.GDbgObjects4.length = 0;
gdjs.creditsCode.GDtransitionObjects1.length = 0;
gdjs.creditsCode.GDtransitionObjects2.length = 0;
gdjs.creditsCode.GDtransitionObjects3.length = 0;
gdjs.creditsCode.GDtransitionObjects4.length = 0;
gdjs.creditsCode.GDbackbuttonObjects1.length = 0;
gdjs.creditsCode.GDbackbuttonObjects2.length = 0;
gdjs.creditsCode.GDbackbuttonObjects3.length = 0;
gdjs.creditsCode.GDbackbuttonObjects4.length = 0;
gdjs.creditsCode.GDtitlesObjects1.length = 0;
gdjs.creditsCode.GDtitlesObjects2.length = 0;
gdjs.creditsCode.GDtitlesObjects3.length = 0;
gdjs.creditsCode.GDtitlesObjects4.length = 0;
gdjs.creditsCode.GDcreditLogoObjects1.length = 0;
gdjs.creditsCode.GDcreditLogoObjects2.length = 0;
gdjs.creditsCode.GDcreditLogoObjects3.length = 0;
gdjs.creditsCode.GDcreditLogoObjects4.length = 0;

gdjs.creditsCode.eventsList4(runtimeScene);

return;

}

gdjs['creditsCode'] = gdjs.creditsCode;
