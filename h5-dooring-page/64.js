(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{"5/Ku":function(e,t,a){"use strict";a.r(t);var i=a("k1fw"),r=a("4ASp"),n=a("q1tI"),o=a.n(n),c=a("cQSq"),l=a.n(c),s=a("HVOD"),u=a.n(s);function d(e){return r["Util"].mix({},{fillOpacity:e.opacity,fontSize:e.origin._origin.size,rotate:e.origin._origin.rotate*Math.PI/180,text:e.origin._origin.text,textAlign:"center",fontFamily:e.origin._origin.font,fill:e.color,textBaseline:"Alphabetic"},e.style)}var p=e=>{var t=e.data,a=e.color,c=e.bgColor,s=e.size,p=e.paddingTop,f=e.title,v=Object(n["useRef"])(null);return Object(n["useEffect"])(()=>{r["Shape"].registerShape("point","cloud",{draw:function(e,t){var a=d(e),i=e.x,n=this._coord.y.start-e.y;return t.addShape("text",{attrs:r["Util"].mix(a,{x:i,y:n})})}});var e=["#1890FF","#13C2C2","#2FC25B","#FACC14","#00CC99","#CC3366","#CC6600","#CC66CC","#FF3366","#0066CC"],a=t.map(t=>Object(i["a"])(Object(i["a"])({},t),{},{value:Number(t.value),cate:e[Math.ceil(10*Math.random())]})),n=(new l.a.View).source(a),o=n.range("value"),c=o[0],s=o[1],u=36,p=12;n.transform({type:"tag-cloud",fields:["name","value"],size:[375,260],font:"Verdana",padding:0,timeInterval:5e3,rotate:function(){var e=~~(4*Math.random())%4;return 2===e&&(e=0),90*e},fontSize:function(e){return e.value?(e.value-c)/(s-c)*(u-p)+p:0}});var f=new r["Chart"]({padding:0,el:v.current||void 0,pixelRatio:window.devicePixelRatio});f.source(n.rows,{x:{nice:!1},y:{nice:!1}}),f.legend(!1),f.axis(!1),f.tooltip(!1),f.point().position("x*y").color("cate").shape("cloud"),f.render()},[t]),o.a.createElement("div",{className:u.a.chartWrap,style:{backgroundColor:c}},o.a.createElement("div",{className:u.a.chartTitle,style:{color:a,fontSize:s,paddingTop:p}},f),o.a.createElement("canvas",{ref:v}))};t["default"]=Object(n["memo"])(p)},HVOD:function(e,t,a){e.exports={chartWrap:"chartWrap___1hw8i",chartTitle:"chartTitle___3vkqf"}}}]);