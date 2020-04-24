$(document).ready(function(){

    var oiltemp = new RadialGauge({
        renderTo: 'oiltemp',
        width: 300,
        height: 300,
        minValue: 0,
        value: 0,
        ticksStartPosition: "right",
        barStartPosition: "right",
        startAngle: 170,
        ticksAngle: 200,
        valueBox: false,
        maxValue: 150,
        majorTicks: ["150","120","90","60","30","0"],
        minorTicks: 1,
        strokeTicks: true,
        highlights: [{"from": 0, "to": 30,"color": "darkRed"}],
        colorPlate:"transparent",
        colorMajorTicks:"#0088ff",
        colorMinorTicks:"#0088ff",
        colorNumbers:"#0088ff",
        colorNeedle:"rgba(240, 128, 128, 1)",
        needleCircleOuter:true,
        needleCircleInner:false,
        colorNeedleShadowUp:"red",
        colorNeedleShadowDown:"red",
        colorNeedleCircleOuter:"black",
        colorNeedleCircleOuterEnd:"black",
        animationRule:"linear",
        animationDuration: 500,
        fontNumbers:"Aldrich",
        animatedValue:true,
        needleType:"arrow",
        needleShadow:true,
        borderShadowWidth: 0,
        borders: true,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 500,
        animationRule: "linear",
        colorBorderOuter:"transparent",
        colorBorderOuterEnd:"transparent",
        colorBorderMiddle:"transparent",
        colorBorderMiddleEnd:"transparent",
        colorBorderInner:"#0088ff",
        colorBorderInnerEnd:"transparent",
        colorBarProgress: "white",
        colorBarProgressEnd: "green",
        colorBar: "transparent",
        barWidth: 2,
        barShadow: 0
    }).draw();

    var oilpressure = new RadialGauge({
        renderTo: 'oilpressure',
        width: 300,
        height: 300,
        minValue: 0,
        value: 0,
        startAngle: 350,
        ticksAngle: 200,
        valueBox: false,
        maxValue: 8,
        majorTicks: ["0","1","2","3","4","5","6","7","8"],
        minorTicks: 1,
        strokeTicks: true,
        highlights: [{"from": 6, "to": 8,"color": "darkRed"}],
        colorPlate:"transparent",
        colorMajorTicks:"#0088ff",
        colorMinorTicks:"#0088ff",
        colorNumbers:"#0088ff",
        colorNeedle:"rgba(240, 128, 128, 1)",
        needleCircleOuter:true,
        needleCircleInner:false,
        colorNeedleShadowUp:"red",
        colorNeedleShadowDown:"red",
        colorNeedleCircleOuter:"black",
        colorNeedleCircleOuterEnd:"black",
        animationRule:"linear",
        animationDuration: 500,
        fontNumbers:"Aldrich",
        animatedValue:true,
        needleType:"arrow",
        needleShadow:true,
        borderShadowWidth: 0,
        borders: true,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 500,
        animationRule: "linear",
        colorBorderOuter:"transparent",
        colorBorderOuterEnd:"transparent",
        colorBorderMiddle:"transparent",
        colorBorderMiddleEnd:"transparent",
        colorBorderInner:"#0088ff",
        colorBorderInnerEnd:"transparent",
        colorBarProgress: "white",
        colorBarProgressEnd: "green",
        colorBar: "transparent",
        barWidth: 2,
        barShadow: 0
    }).draw();

    var fuellevel = new LinearGauge({
        renderTo: 'fuellevel',
        minValue: 0,
        maxValue: 100,
        borders: false,
        colorPlate: "transparent",
        needle: false,
        exactTicks: false,
        majorTicks: [0,50,100],
        minorTicks: 2,
        highlights: 0,
        width: 150,
        height: 80,
        value: 0,
        colorNumbers: "white",
        tickSide: "left",
        numberSide: "left",
        colorBarProgress: "white",
        colorBar: "black",
        barBeginCircle: false,
        animationDuration: "1500",
        animationRule: "linear"
    }).draw();

    var speedometer = new RadialGauge({
        renderTo: 'speedometer',
        width: 400,
        height: 400,
        title: false,
        value: 0,
        minValue: 0 ,
        maxValue: 180,
        majorTicks:[0,20,40,60,80,100,120,140,160,180],
        minorTicks:"2",
        strokeTicks: true,
        highlights:[{ "from": 160, "to": 180, "color": "darkRed" }],
        colorPlate:"transparent",
        colorMajorTicks:"#0088ff",
        colorMinorTicks:"#0088ff",
        colorNumbers:"#0088ff",
        colorNeedle:"rgba(240, 128, 128, 1)",
        needleCircleSize:"9",
        needleCircleOuter:true,
        needleCircleInner:false,
        colorNeedleShadowUp:"red",
        colorNeedleShadowDown:"red",
        colorNeedleCircleOuter:"black",
        colorNeedleCircleOuterEnd:"black",
        valueBox:false,
        animationRule:"linear",
        animationDuration: 500,
        fontNumbers:"Aldrich",
        animatedValue:true,
        needleType:"arrow",
        needleShadow:true,
        startAngle: 55,
        ticksAngle: 250,
        borders:true,
        colorBorderOuter:"transparent",
        colorBorderOuterEnd:"transparent",
        colorBorderMiddle:"transparent",
        colorBorderMiddleEnd:"transparent",
        colorBorderInner:"#0088ff",
        colorBorderInnerEnd:"transparent",
        colorBarProgress: "white",
        colorBarProgressEnd: "green",
        colorBar: "transparent",
        barWidth: "2",
        barShadow: "0"
    }).draw();

    speedometer.value = 180;
    speedometer.draw();

    fuellevel.value = 100;
    fuellevel.draw();

    oilpressure.value = 8;
    oilpressure.draw();

    oiltemp.value = 150;
    oiltemp.draw();
    
});