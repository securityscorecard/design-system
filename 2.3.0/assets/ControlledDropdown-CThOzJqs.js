import{j as v}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{P as i}from"./index-BRV0Se7Z.js";import"./index-beAa1auE.js";import{u as K}from"./usePopper-B6Vq3Q19.js";import{X as F,y as N,s as w,g as p,S as m,j as B,B as W,aa as x,A as G,f as V,P as O}from"./index-DzoB_gWM.js";import{u as L,a as H}from"./useOuterCallback-CyPC4-G8.js";import{a as X}from"./DSProvider-DOkUOQoq.js";import{n as P}from"./noop-zq4Ga5XN.js";import{m as _}from"./mergeRefs-B_qfXDGV.js";import"./index-CoMEwqFC.js";import{u as Z}from"./FloatingContext-CyxsIqHp.js";import{P as J}from"./Padbox-DIe3-S_j.js";function g(){var A="/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/Dropdown.enums.ts",s="78fe15f90bd1c5e1ff89232e2bcc1671e13e26f4",o=window,t="__coverage__",r={path:"/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/Dropdown.enums.ts",statementMap:{0:{start:{line:1,column:37},end:{line:5,column:1}},1:{start:{line:6,column:34},end:{line:22,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/Dropdown.enums.ts"],names:["DropdownTriggerEvents","click","hover","focus","DropdownPlacements","auto","autoStart","autoEnd","top","bottom","right","left","topStart","topEnd","bottomStart","bottomEnd","rightStart","rightEnd","leftStart","leftEnd"],mappings:"AAAO,aAAMA,wBAAwB;AAAA,EACnCC,OAAO;AAAA,EACPC,OAAO;AAAA,EACPC,OAAO;AACT;AAEO,aAAMC,qBAAqB;AAAA,EAChCC,MAAM;AAAA,EACNC,WAAW;AAAA,EACXC,SAAS;AAAA,EACTC,KAAK;AAAA,EACLC,QAAQ;AAAA,EACRC,OAAO;AAAA,EACPC,MAAM;AAAA,EACNC,UAAU;AAAA,EACVC,QAAQ;AAAA,EACRC,aAAa;AAAA,EACbC,WAAW;AAAA,EACXC,YAAY;AAAA,EACZC,UAAU;AAAA,EACVC,WAAW;AAAA,EACXC,SAAS;AACX;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"78fe15f90bd1c5e1ff89232e2bcc1671e13e26f4"},e=o[t]||(o[t]={});(!e[A]||e[A].hash!==s)&&(e[A]=r);var c=e[A];return g=function(){return c},c}g();const EA=(g().s[0]++,{click:"click",hover:"hover",focus:"focus"}),Q=(g().s[1]++,{auto:"auto",autoStart:"auto-start",autoEnd:"auto-end",top:"top",bottom:"bottom",right:"right",left:"left",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end",rightStart:"right-start",rightEnd:"right-end",leftStart:"left-start",leftEnd:"left-end"});function d(){var A="/Users/radekpodrazky/Projects/design-system/src/hooks/usePopup.ts",s="62aff1f25c2a1abec1f5d54160b77971d644c615",o=window,t="__coverage__",r={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/usePopup.ts",statementMap:{0:{start:{line:4,column:24},end:{line:33,column:1}},1:{start:{line:12,column:6},end:{line:12,column:16}},2:{start:{line:13,column:19},end:{line:18,column:9}},3:{start:{line:19,column:2},end:{line:32,column:5}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:24},end:{line:4,column:25}},loc:{start:{line:9,column:6},end:{line:33,column:1}},line:9}},branchMap:{0:{loc:{start:{line:8,column:2},end:{line:8,column:28}},type:"default-arg",locations:[{start:{line:8,column:14},end:{line:8,column:28}}],line:8},1:{loc:{start:{line:13,column:19},end:{line:18,column:9}},type:"cond-expr",locations:[{start:{line:13,column:45},end:{line:18,column:4}},{start:{line:18,column:7},end:{line:18,column:9}}],line:13}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/usePopup.ts"],names:["isNotUndefined","usePopper","useTheme","usePopup","triggerEl","paneEl","arrowEl","placement","space","arrowMod","name","options","element","modifiers","offset","sm","padding"],mappings:"AAAA,SAASA,sBAAsB;AAC/B,SAAsBC,iBAAiB;AAGvC,SAASC,gBAAgB;AAalB,aAAMC,WAAqBA,CAAC;AAAA,EACjCC;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC,YAAY;AACd,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAM,IAAIN,SAAS;AAC3B,QAAMO,WAAWT,eAAeM,OAAO,IACnC,CAAC;AAAA,IAAEI,MAAM;AAAA,IAASC,SAAS;AAAA,MAAEC,SAASN;AAAAA,IAAQ;AAAA,EAAE,CAAC,IACjD,CAAE;AACN,SAAOL,UAAUG,WAAWC,QAAQ;AAAA,IAClCE;AAAAA,IACAM,WAAW,CACT,GAAGJ,UACH;AAAA,MACEC,MAAM;AAAA,MACNC,SAAS;AAAA,QACPG,QAAQ,CAAC,GAAGN,MAAMO,EAAE;AAAA,MACtB;AAAA,IACF,GACA;AAAA,MACEL,MAAM;AAAA,MACNC,SAAS;AAAA,QACPK,SAASR,MAAMO;AAAAA,MACjB;AAAA,IACF,CAAC;AAAA,EAEL,CAAC;AACH;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"62aff1f25c2a1abec1f5d54160b77971d644c615"},e=o[t]||(o[t]={});(!e[A]||e[A].hash!==s)&&(e[A]=r);var c=e[A];return d=function(){return c},c}d();d().s[0]++;const $=({triggerEl:A,paneEl:s,arrowEl:o,placement:t=(d().b[0][0]++,"bottom-start")})=>{d().f[0]++;const{space:r}=(d().s[1]++,F()),e=(d().s[2]++,N(o)?(d().b[1][0]++,[{name:"arrow",options:{element:o}}]):(d().b[1][1]++,[]));return d().s[3]++,K(A,s,{placement:t,modifiers:[...e,{name:"offset",options:{offset:[0,r.sm]}},{name:"flip",options:{padding:r.sm}}]})};function u(){var A="/Users/radekpodrazky/Projects/design-system/src/hooks/usePortal.ts",s="dc141001df8a45413fd67b1cd91ad5b01ddc40cb",o=window,t="__coverage__",r={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/usePortal.ts",statementMap:{0:{start:{line:5,column:25},end:{line:35,column:1}},1:{start:{line:13,column:6},end:{line:13,column:27}},2:{start:{line:20,column:6},end:{line:27,column:4}},3:{start:{line:28,column:2},end:{line:34,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:25},end:{line:5,column:26}},loc:{start:{line:10,column:11},end:{line:35,column:1}},line:10}},branchMap:{0:{loc:{start:{line:5,column:26},end:{line:10,column:6}},type:"default-arg",locations:[{start:{line:10,column:4},end:{line:10,column:6}}],line:5},1:{loc:{start:{line:6,column:2},end:{line:6,column:15}},type:"default-arg",locations:[{start:{line:6,column:11},end:{line:6,column:15}}],line:6},2:{loc:{start:{line:7,column:2},end:{line:7,column:15}},type:"default-arg",locations:[{start:{line:7,column:11},end:{line:7,column:15}}],line:7},3:{loc:{start:{line:8,column:2},end:{line:8,column:29}},type:"default-arg",locations:[{start:{line:8,column:24},end:{line:8,column:29}}],line:8},4:{loc:{start:{line:9,column:2},end:{line:9,column:32}},type:"default-arg",locations:[{start:{line:9,column:27},end:{line:9,column:32}}],line:9}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/usePortal.ts"],names:["useContext","noop","useCoolPortal","DSContext","usePortal","onShow","onHide","hasInternalShowHide","defaultIsPortalVisible","portalsContainerId","Portal","isShow","show","hide","toggle","containerId","autoRemoveContainer","defaultShow","internalShowHide","togglePortal","showPortal","hidePortal","isPortalVisible"],mappings:"AAAA,SAAwBA,kBAAkB;AAC1C,SAASC,YAAY;AACrB,OAAOC,mBAA6C;AAEpD,SAASC,iBAAiB;AAenB,aAAMC,YAAuBA,CAAC;AAAA,EACnCC,SAASJ;AAAAA,EACTK,SAASL;AAAAA,EACTM,sBAAsB;AAAA,EACtBC,yBAAyB;AAC3B,IAAI,CAAC,MAAM;AACT,QAAM;AAAA,IAAEC;AAAAA,EAAmB,IAAIT,WAAWG,SAAS;AACnD,QAAM;AAAA,IAAEO;AAAAA,IAAQC;AAAAA,IAAQC;AAAAA,IAAMC;AAAAA,IAAMC;AAAAA,EAAO,IAAIZ,cAAc;AAAA,IAC3Da,aAAaN;AAAAA,IACbO,qBAAqB;AAAA,IACrBC,aAAaT;AAAAA,IACbU,kBAAkBX;AAAAA,IAClBF;AAAAA,IACAC;AAAAA,EACF,CAAC;AAED,SAAO;AAAA,IACLa,cAAcL;AAAAA,IACdM,YAAYR;AAAAA,IACZS,YAAYR;AAAAA,IACZS,iBAAiBX;AAAAA,IACjBD;AAAAA,EACF;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dc141001df8a45413fd67b1cd91ad5b01ddc40cb"},e=o[t]||(o[t]={});(!e[A]||e[A].hash!==s)&&(e[A]=r);var c=e[A];return u=function(){return c},c}u();u().s[0]++;const AA=({onShow:A=(u().b[1][0]++,P),onHide:s=(u().b[2][0]++,P),hasInternalShowHide:o=(u().b[3][0]++,!1),defaultIsPortalVisible:t=(u().b[4][0]++,!1)}=(u().b[0][0]++,{}))=>{u().f[0]++;const{portalsContainerId:r}=(u().s[1]++,f.useContext(X)),{Portal:e,isShow:c,show:E,hide:S,toggle:b}=(u().s[2]++,L({containerId:r,autoRemoveContainer:!1,defaultShow:t,internalShowHide:o,onShow:A,onHide:s}));return u().s[3]++,{togglePortal:b,showPortal:E,hidePortal:S,isPortalVisible:c,Portal:e}};function n(){var A="/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/DropdownPane.tsx",s="65f6c985c1b9f48c3cda22ed5b2cc439419021f5",o=window,t="__coverage__",r={path:"/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/DropdownPane.tsx",statementMap:{0:{start:{line:13,column:21},end:{line:16,column:342}},1:{start:{line:17,column:34},end:{line:71,column:1}},2:{start:{line:28,column:8},end:{line:32,column:4}},3:{start:{line:35,column:8},end:{line:35,column:135}},4:{start:{line:40,column:8},end:{line:42,column:12}},5:{start:{line:47,column:8},end:{line:49,column:12}},6:{start:{line:54,column:8},end:{line:56,column:12}},7:{start:{line:61,column:8},end:{line:63,column:12}},8:{start:{line:66,column:8},end:{line:70,column:3}},9:{start:{line:72,column:20},end:{line:75,column:115}},10:{start:{line:76,column:21},end:{line:94,column:2}},11:{start:{line:88,column:26},end:{line:88,column:51}},12:{start:{line:89,column:30},end:{line:89,column:59}},13:{start:{line:90,column:2},end:{line:93,column:7}},14:{start:{line:95,column:0},end:{line:95,column:42}},15:{start:{line:96,column:0},end:{line:105,column:2}},16:{start:{line:108,column:0},end:{line:228,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:25,column:2},end:{line:25,column:3}},loc:{start:{line:28,column:8},end:{line:32,column:4}},line:28},1:{name:"(anonymous_1)",decl:{start:{line:33,column:2},end:{line:33,column:3}},loc:{start:{line:35,column:8},end:{line:35,column:135}},line:35},2:{name:"(anonymous_2)",decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:40,column:8},end:{line:42,column:12}},line:40},3:{name:"(anonymous_3)",decl:{start:{line:45,column:2},end:{line:45,column:3}},loc:{start:{line:47,column:8},end:{line:49,column:12}},line:47},4:{name:"(anonymous_4)",decl:{start:{line:52,column:2},end:{line:52,column:3}},loc:{start:{line:54,column:8},end:{line:56,column:12}},line:54},5:{name:"(anonymous_5)",decl:{start:{line:59,column:2},end:{line:59,column:3}},loc:{start:{line:61,column:8},end:{line:63,column:12}},line:61},6:{name:"(anonymous_6)",decl:{start:{line:64,column:2},end:{line:64,column:3}},loc:{start:{line:66,column:8},end:{line:70,column:3}},line:66},7:{name:"(anonymous_7)",decl:{start:{line:76,column:32},end:{line:76,column:33}},loc:{start:{line:87,column:11},end:{line:94,column:1}},line:87}},branchMap:{0:{loc:{start:{line:28,column:8},end:{line:32,column:4}},type:"cond-expr",locations:[{start:{line:28,column:31},end:{line:30,column:8}},{start:{line:30,column:11},end:{line:32,column:4}}],line:28},1:{loc:{start:{line:35,column:44},end:{line:35,column:82}},type:"cond-expr",locations:[{start:{line:35,column:67},end:{line:35,column:73}},{start:{line:35,column:76},end:{line:35,column:82}}],line:35},2:{loc:{start:{line:35,column:84},end:{line:35,column:134}},type:"cond-expr",locations:[{start:{line:35,column:107},end:{line:35,column:113}},{start:{line:35,column:116},end:{line:35,column:134}}],line:35},3:{loc:{start:{line:66,column:8},end:{line:70,column:3}},type:"binary-expr",locations:[{start:{line:66,column:8},end:{line:66,column:19}},{start:{line:66,column:23},end:{line:70,column:3}}],line:66},4:{loc:{start:{line:78,column:2},end:{line:78,column:19}},type:"default-arg",locations:[{start:{line:78,column:15},end:{line:78,column:19}}],line:78},5:{loc:{start:{line:89,column:30},end:{line:89,column:59}},type:"binary-expr",locations:[{start:{line:89,column:30},end:{line:89,column:50}},{start:{line:89,column:54},end:{line:89,column:59}}],line:89},6:{loc:{start:{line:92,column:4},end:{line:92,column:81}},type:"binary-expr",locations:[{start:{line:92,column:4},end:{line:92,column:12}},{start:{line:92,column:32},end:{line:92,column:81}}],line:92}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0],5:[0,0],6:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/DropdownPane.tsx"],names:["forwardRef","PropTypes","styled","css","noop","getColor","getDepth","getRadii","getSpace","pxToRem","mergeRefs","SpaceSizes","useOuterClick","Padbox","PaddingTypes","useFloatingContext","Arrow","div","withConfig","displayName","componentId","sm","StyledDropdownPane","$isInFloatingElement","theme","$maxWidth","$isElevated","PaneContent","DropdownPane","children","onClickOut","isElevated","hasArrow","arrowRef","arrowStyles","contentPaddingSize","contentPaddingType","maxWidth","props","ref","dropdownPaneRef","isInFloatingElement","propTypes","bool","isRequired","oneOfType","number","oneOf","func","shape","Object","values"],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"65f6c985c1b9f48c3cda22ed5b2cc439419021f5"},e=o[t]||(o[t]={});(!e[A]||e[A].hash!==s)&&(e[A]=r);var c=e[A];return n=function(){return c},c}n();const C=(n().s[0]++,w.div.withConfig({displayName:"DropdownPane__Arrow",componentId:"sc-15bzzh5-0"})(["visibility:hidden;&,&::before{position:absolute;width:",";height:",";background:inherit;z-index:0;}&::before{visibility:visible;content:'';background:",";border-left:1px solid ",";border-top:1px solid ",";}"],p(m.sm),p(m.sm),B("neutral.0"),B("neutral.300"),B("neutral.300"))),eA=(n().s[1]++,w.div.withConfig({displayName:"DropdownPane__StyledDropdownPane",componentId:"sc-15bzzh5-1"})(["position:absolute;color:",";font-family:var(--sscds-font-family-body);font-size:var(--sscds-font-size-body-md);line-height:var(--sscds-font-lineheight-body-md);border-radius:",";border:1px solid ",";z-index:",";"," &[data-popper-placement^='top'] > ","{bottom:",";&:before{transform:rotate(225deg);}}&[data-popper-placement^='bottom'] > ","{top:",";&:before{transform:rotate(45deg);}}&[data-popper-placement^='left'] > ","{right:",";&:before{transform:rotate(135deg);}}&[data-popper-placement^='right'] > ","{left:",";&:before{transform:rotate(315deg);}}",";"],B("neutral.900"),W("default"),B("neutral.300"),({$isInFloatingElement:A,theme:s})=>(n().f[0]++,n().s[2]++,A?(n().b[0][0]++,x("modal",{theme:s})+1):(n().b[0][1]++,x("dropdown",{theme:s}))),({$maxWidth:A})=>(n().f[1]++,n().s[3]++,G(["width:",";max-width:",";"],A==="auto"?(n().b[1][0]++,"auto"):(n().b[1][1]++,"100%"),A==="auto"?(n().b[2][0]++,"auto"):(n().b[2][1]++,V(A)))),C,({theme:A})=>(n().f[2]++,n().s[4]++,`calc(${p(m.sm,{theme:A})} / -2)`),C,({theme:A})=>(n().f[3]++,n().s[5]++,`calc(${p(m.sm,{theme:A})} / -2)`),C,({theme:A})=>(n().f[4]++,n().s[6]++,`calc(${p(m.sm,{theme:A})} / -2)`),C,({theme:A})=>(n().f[5]++,n().s[7]++,`calc(${p(m.sm,{theme:A})} / -2)`),({$isElevated:A})=>(n().f[6]++,n().s[8]++,n().b[3][0]++,A&&(n().b[3][1]++,G(["border-color:transparent;filter:drop-shadow(0px 0px 8px rgba(0,0,0,0.25));& > ",":before{border-color:transparent;}"],C))))),nA=(n().s[9]++,w(J).withConfig({displayName:"DropdownPane__PaneContent",componentId:"sc-15bzzh5-2"})(["border-radius:",";position:relative;z-index:1;background:",";"],W("default"),B("neutral.0"))),y=(n().s[10]++,f.forwardRef(({children:A,onClickOut:s=(n().b[4][0]++,P),isElevated:o,hasArrow:t,arrowRef:r,arrowStyles:e,contentPaddingSize:c,contentPaddingType:E,maxWidth:S,...b},M)=>{n().f[7]++;const U=(n().s[11]++,H(s)),I=(n().s[12]++,n().b[5][0]++,Z()??(n().b[5][1]++,!1));return n().s[13]++,v.jsxs(eA,{ref:_(U,M),$isElevated:o,$isInFloatingElement:I,$maxWidth:S,...b,"data-testid":"dropdown-pane",children:[v.jsx(nA,{paddingSize:c,paddingType:E,children:A}),(n().b[6][0]++,t&&(n().b[6][1]++,v.jsx(C,{ref:r,style:e})))]})}));n().s[14]++;y.displayName="DropdownPane";n().s[15]++;y.propTypes={isElevated:i.bool.isRequired,maxWidth:i.oneOfType([i.number,i.oneOf(["auto"])]).isRequired,hasArrow:i.bool.isRequired,arrowRef:i.func.isRequired,arrowStyles:i.shape({}),contentPaddingSize:i.oneOf(Object.values(m)),contentPaddingType:i.oneOf(Object.values(O)),onClickOut:i.func};n().s[16]++;y.__docgenInfo={description:"",methods:[],displayName:"DropdownPane",props:{onClickOut:{defaultValue:{value:"noop",computed:!0},description:"",type:{name:"func"},required:!1},isElevated:{description:"",type:{name:"bool"},required:!0},maxWidth:{description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:"'auto'",computed:!1}]}]},required:!0},hasArrow:{description:"",type:{name:"bool"},required:!0},arrowRef:{description:"",type:{name:"func"},required:!0},arrowStyles:{description:"",type:{name:"shape",value:{}},required:!1},contentPaddingSize:{description:"",type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"mdPlus"',computed:!1},{value:'"lg"',computed:!1},{value:'"lgPlus"',computed:!1},{value:'"xl"',computed:!1},{value:'"xlPlus"',computed:!1},{value:'"xxl"',computed:!1}]},required:!1},contentPaddingType:{description:"",type:{name:"enum",value:[{value:'"squish"',computed:!1},{value:'"stretch"',computed:!1},{value:'"square"',computed:!1}]},required:!1}}};function l(){var A="/Users/radekpodrazky/Projects/design-system/src/hooks/useFocusTrap.ts",s="609166c6fa9ccb2c05dc936dc0aa3509ba6eb09a",o=window,t="__coverage__",r={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/useFocusTrap.ts",statementMap:{0:{start:{line:2,column:30},end:{line:9,column:1}},1:{start:{line:10,column:28},end:{line:33,column:1}},2:{start:{line:14,column:2},end:{line:32,column:20}},3:{start:{line:15,column:4},end:{line:16,column:13}},4:{start:{line:16,column:6},end:{line:16,column:13}},5:{start:{line:17,column:19},end:{line:17,column:41}},6:{start:{line:18,column:26},end:{line:26,column:5}},7:{start:{line:19,column:6},end:{line:25,column:12}},8:{start:{line:20,column:8},end:{line:24,column:9}},9:{start:{line:21,column:10},end:{line:21,column:29}},10:{start:{line:22,column:33},end:{line:22,column:73}},11:{start:{line:23,column:10},end:{line:23,column:34}},12:{start:{line:27,column:4},end:{line:27,column:56}},13:{start:{line:28,column:4},end:{line:31,column:6}},14:{start:{line:29,column:6},end:{line:29,column:61}},15:{start:{line:30,column:6},end:{line:30,column:22}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:28},end:{line:10,column:29}},loc:{start:{line:13,column:6},end:{line:33,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:14,column:12},end:{line:14,column:13}},loc:{start:{line:14,column:18},end:{line:32,column:3}},line:14},2:{name:"(anonymous_2)",decl:{start:{line:18,column:26},end:{line:18,column:27}},loc:{start:{line:18,column:33},end:{line:26,column:5}},line:18},3:{name:"(anonymous_3)",decl:{start:{line:19,column:17},end:{line:19,column:18}},loc:{start:{line:19,column:23},end:{line:25,column:7}},line:19},4:{name:"(anonymous_4)",decl:{start:{line:28,column:11},end:{line:28,column:12}},loc:{start:{line:28,column:17},end:{line:31,column:5}},line:28}},branchMap:{0:{loc:{start:{line:15,column:4},end:{line:16,column:13}},type:"if",locations:[{start:{line:15,column:4},end:{line:16,column:13}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:15},1:{loc:{start:{line:15,column:8},end:{line:15,column:23}},type:"binary-expr",locations:[{start:{line:15,column:8},end:{line:15,column:11}},{start:{line:15,column:15},end:{line:15,column:23}}],line:15},2:{loc:{start:{line:20,column:8},end:{line:24,column:9}},type:"if",locations:[{start:{line:20,column:8},end:{line:24,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20},3:{loc:{start:{line:20,column:12},end:{line:20,column:67}},type:"binary-expr",locations:[{start:{line:20,column:12},end:{line:20,column:27}},{start:{line:20,column:31},end:{line:20,column:67}}],line:20}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/useFocusTrap.ts"],names:["useEffect","interactiveElSelector","useFocusTrap","el","enabled","active","document","activeElement","handleKeydown","e","setTimeout","key","contains","preventDefault","focusableChild","querySelector","focus","addEventListener","removeEventListener"],mappings:"AAAA,SAASA,iBAAiB;AAI1B,MAAMC,wBAAyB;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AASxB,aAAMC,eAAeA,CAAC;AAAA,EAC3BC;AAAAA,EACAC;AAIF,MAAM;AACJJ,YAAU,MAAM;AACd,QAAI,CAACG,MAAM,CAACC;AAAS;AACrB,UAAMC,SAASC,SAASC;AACxB,UAAMC,gBAAiBC,OAAM;AAC3BC,iBAAW,MAAM;AACf,YAAID,EAAEE,QAAQ,SAAS,CAACR,GAAGS,SAASN,SAASC,aAAa,GAAG;AAC3DE,YAAEI,eAAe;AACjB,gBAAMC,iBAAiBX,IAAIY,cACzBd,qBACF;AACAa,0BAAgBE,MAAM;AAAA,QACxB;AAAA,MACF,GAAG,CAAC;AAAA,IACN;AACAV,aAASW,iBAAiB,WAAWT,aAAa;AAElD,WAAO,MAAM;AACXF,eAASY,oBAAoB,WAAWV,aAAa;AACrD,MAACH,QAA+BW,MAAM;AAAA,IACxC;AAAA,EACF,GAAG,CAACb,IAAIC,OAAO,CAAC;AAClB;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"609166c6fa9ccb2c05dc936dc0aa3509ba6eb09a"},e=o[t]||(o[t]={});(!e[A]||e[A].hash!==s)&&(e[A]=r);var c=e[A];return l=function(){return c},c}l();const oA=(l().s[0]++,`
    a[href],
    button,
    input,
    textarea,
    select,
    details
`);l().s[1]++;const lA=({el:A,enabled:s})=>{l().f[0]++,l().s[2]++,f.useEffect(()=>{if(l().f[1]++,l().s[3]++,l().b[1][0]++,!A||(l().b[1][1]++,!s)){l().b[0][0]++,l().s[4]++;return}else l().b[0][1]++;const o=(l().s[5]++,document.activeElement);l().s[6]++;const t=r=>{l().f[2]++,l().s[7]++,setTimeout(()=>{if(l().f[3]++,l().s[8]++,l().b[3][0]++,r.key==="Tab"&&(l().b[3][1]++,!A.contains(document.activeElement))){l().b[2][0]++,l().s[9]++,r.preventDefault();const e=(l().s[10]++,A==null?void 0:A.querySelector(oA));l().s[11]++,e==null||e.focus()}else l().b[2][1]++},0)};return l().s[12]++,document.addEventListener("keydown",t),l().s[13]++,()=>{l().f[4]++,l().s[14]++,document.removeEventListener("keydown",t),l().s[15]++,o==null||o.focus()}},[A,s])};function a(){var A="/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/ControlledDropdown.tsx",s="c11f84fb4c3b2081c6fbb731711a6025bf0cd2e7",o=window,t="__coverage__",r={path:"/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/ControlledDropdown.tsx",statementMap:{0:{start:{line:12,column:27},end:{line:49,column:2}},1:{start:{line:27,column:30},end:{line:27,column:44}},2:{start:{line:28,column:32},end:{line:28,column:46}},3:{start:{line:32,column:6},end:{line:37,column:4}},4:{start:{line:38,column:2},end:{line:41,column:5}},5:{start:{line:44,column:6},end:{line:44,column:17}},6:{start:{line:45,column:2},end:{line:48,column:71}},7:{start:{line:50,column:0},end:{line:50,column:54}},8:{start:{line:51,column:0},end:{line:61,column:2}},9:{start:{line:64,column:0},end:{line:271,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:38},end:{line:12,column:39}},loc:{start:{line:26,column:11},end:{line:49,column:1}},line:26}},branchMap:{0:{loc:{start:{line:16,column:2},end:{line:16,column:44}},type:"default-arg",locations:[{start:{line:16,column:14},end:{line:16,column:44}}],line:16},1:{loc:{start:{line:17,column:2},end:{line:17,column:34}},type:"default-arg",locations:[{start:{line:17,column:21},end:{line:17,column:34}}],line:17},2:{loc:{start:{line:18,column:2},end:{line:18,column:40}},type:"default-arg",locations:[{start:{line:18,column:21},end:{line:18,column:40}}],line:18},3:{loc:{start:{line:19,column:2},end:{line:19,column:20}},type:"default-arg",locations:[{start:{line:19,column:17},end:{line:19,column:20}}],line:19},4:{loc:{start:{line:20,column:2},end:{line:20,column:24}},type:"default-arg",locations:[{start:{line:20,column:19},end:{line:20,column:24}}],line:20},5:{loc:{start:{line:21,column:2},end:{line:21,column:22}},type:"default-arg",locations:[{start:{line:21,column:17},end:{line:21,column:22}}],line:21},6:{loc:{start:{line:22,column:2},end:{line:22,column:18}},type:"default-arg",locations:[{start:{line:22,column:14},end:{line:22,column:18}}],line:22},7:{loc:{start:{line:24,column:2},end:{line:24,column:12}},type:"default-arg",locations:[{start:{line:24,column:10},end:{line:24,column:12}}],line:24},8:{loc:{start:{line:40,column:13},end:{line:40,column:32}},type:"binary-expr",locations:[{start:{line:40,column:13},end:{line:40,column:19}},{start:{line:40,column:23},end:{line:40,column:32}}],line:40},9:{loc:{start:{line:45,column:9},end:{line:48,column:70}},type:"cond-expr",locations:[{start:{line:45,column:34},end:{line:48,column:63}},{start:{line:48,column:66},end:{line:48,column:70}}],line:45},10:{loc:{start:{line:53,column:13},end:{line:53,column:95}},type:"cond-expr",locations:[{start:{line:53,column:46},end:{line:53,column:59}},{start:{line:53,column:62},end:{line:53,column:95}}],line:53}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0,0],9:[0,0],10:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/ControlledDropdown.tsx"],names:["forwardRef","useState","PropTypes","SpaceSizes","usePopup","usePortal","PaddingTypes","DropdownPane","DropdownPlacements","mergeRefs","useFocusTrap","ControlledDropdown","children","triggerEl","isOpen","placement","bottomStart","innerPaddingSize","md","innerPaddingType","square","maxPaneWidth","isPaneElevated","hasPaneArrow","focusTrap","onClickOut","style","props","ref","paneEl","setPaneEl","arrowEl","setArrowEl","styles","attributes","el","enabled","Portal","arrow","popper","displayName","propTypes","bool","isRequired","Element","any","instanceOf","HTMLElement","oneOf","Object","values","oneOfType","number","func"],mappings:"AAiDQ;AAjDR,SAAgBA,YAAYC,gBAAgB;AAC5C,OAAOC,eAAe;AAEtB,SAASC,kBAAkB;AAC3B,SAASC,gBAAgB;AACzB,SAASC,iBAAiB;AAC1B,SAASC,oBAAoB;AAE7B,OAAOC,kBAAkB;AACzB,SAASC,0BAA0B;AACnC,SAASC,iBAAiB;AAC1B,SAASC,oBAAoB;AAE7B,MAAMC,qBAAqBX,WAIzB,CACE;AAAA,EACEY;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC,YAAYP,mBAAmBQ;AAAAA,EAC/BC,mBAAmBd,WAAWe;AAAAA,EAC9BC,mBAAmBb,aAAac;AAAAA,EAChCC,eAAe;AAAA,EACfC,iBAAiB;AAAA,EACjBC,eAAe;AAAA,EACfC,YAAY;AAAA,EACZC;AAAAA,EACAC,QAAQ,CAAC;AAAA,EACT,GAAGC;AACL,GACAC,QACG;AACH,QAAM,CAACC,QAAQC,SAAS,IAAI7B,SAAS,IAAI;AACzC,QAAM,CAAC8B,SAASC,UAAU,IAAI/B,SAAS,IAAI;AAC3C,QAAM;AAAA,IAAEgC;AAAAA,IAAQC;AAAAA,EAAW,IAAI9B,SAAS;AAAA,IACtCS;AAAAA,IACAgB;AAAAA,IACAE;AAAAA,IACAhB;AAAAA,EACF,CAAC;AAEDL,eAAa;AAAA,IAAEyB,IAAIN;AAAAA,IAAQO,SAAStB,UAAUU;AAAAA,EAAU,CAAC;AACzD,QAAM;AAAA,IAAEa;AAAAA,EAAO,IAAIhC,UAAU;AAE7B,SAAOS,SACL,oBAAC,UACC,8BAAC,gBACC,KAAKL,UAAUmB,KAAKE,SAAS,GAC7B,UAAUE,YACV,aAAaC,OAAOK,OACpB,oBAAoBrB,kBACpB,oBAAoBE,kBACpB,UAAUI,cACV,YAAYD,gBACZ,UAAUD,cACV,OAAO;AAAA,IAAE,GAAGY,OAAOM;AAAAA,IAAQ,GAAGb;AAAAA,EAAM,GACpC,YACIC,GAAAA,OACJ,GAAIO,WAAWK,QAEd3B,UACH,GACF,IACE;AACN,CACF;AAAED,mBAAA6B,cAAA;AAEF7B,mBAAmB8B,YAAY;AAAA,EAC7B3B,QAAQZ,UAAUwC,KAAKC;AAAAA,EACvB9B,WACE,OAAO+B,YAAY,cACf1C,UAAU2C,MACV3C,UAAU4C,WAAWC,WAAW;AAAA,EACtChC,WAAWb,UAAU8C,MAAMC,OAAOC,OAAO1C,kBAAkB,CAAC;AAAA,EAC5DS,kBAAkBf,UAAU8C,MAAMC,OAAOC,OAAO/C,UAAU,CAAC;AAAA,EAC3DgB,kBAAkBjB,UAAU8C,MAAMC,OAAOC,OAAO5C,YAAY,CAAC;AAAA,EAC7De,cAAcnB,UAAUiD,UAAU,CAChCjD,UAAUkD,QACVlD,UAAU8C,MAAc,CAAC,MAAM,CAAC,CAAC,CAClC;AAAA,EACD1B,gBAAgBpB,UAAUwC;AAAAA,EAC1BnB,cAAcrB,UAAUwC;AAAAA,EACxBjB,YAAYvB,UAAUmD;AACxB;AAEA,eAAe1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c11f84fb4c3b2081c6fbb731711a6025bf0cd2e7"},e=o[t]||(o[t]={});(!e[A]||e[A].hash!==s)&&(e[A]=r);var c=e[A];return a=function(){return c},c}a();const h=(a().s[0]++,f.forwardRef(({children:A,triggerEl:s,isOpen:o,placement:t=(a().b[0][0]++,Q.bottomStart),innerPaddingSize:r=(a().b[1][0]++,m.md),innerPaddingType:e=(a().b[2][0]++,O.square),maxPaneWidth:c=(a().b[3][0]++,270),isPaneElevated:E=(a().b[4][0]++,!1),hasPaneArrow:S=(a().b[5][0]++,!1),focusTrap:b=(a().b[6][0]++,!0),onClickOut:M,style:U=(a().b[7][0]++,{}),...I},T)=>{a().f[0]++;const[k,Y]=(a().s[1]++,f.useState(null)),[q,z]=(a().s[2]++,f.useState(null)),{styles:D,attributes:j}=(a().s[3]++,$({triggerEl:s,paneEl:k,arrowEl:q,placement:t}));a().s[4]++,lA({el:k,enabled:(a().b[8][0]++,o&&(a().b[8][1]++,b))});const{Portal:R}=(a().s[5]++,AA());return a().s[6]++,o?(a().b[9][0]++,v.jsx(R,{children:v.jsx(y,{ref:_(T,Y),arrowRef:z,arrowStyles:D.arrow,contentPaddingSize:r,contentPaddingType:e,hasArrow:S,isElevated:E,maxWidth:c,style:{...D.popper,...U},onClickOut:M,...I,...j.popper,children:A})})):(a().b[9][1]++,null)}));a().s[7]++;h.displayName="ControlledDropdown";a().s[8]++;h.propTypes={isOpen:i.bool.isRequired,triggerEl:typeof Element>"u"?(a().b[10][0]++,i.any):(a().b[10][1]++,i.instanceOf(HTMLElement)),placement:i.oneOf(Object.values(Q)),innerPaddingSize:i.oneOf(Object.values(m)),innerPaddingType:i.oneOf(Object.values(O)),maxPaneWidth:i.oneOfType([i.number,i.oneOf(["auto"])]),isPaneElevated:i.bool,hasPaneArrow:i.bool,onClickOut:i.func};const SA=h;a().s[9]++;h.__docgenInfo={description:"",methods:[],displayName:"ControlledDropdown",props:{placement:{defaultValue:{value:"'bottom-start'",computed:!1},description:"",type:{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"auto-start"',computed:!1},{value:'"auto-end"',computed:!1},{value:'"top"',computed:!1},{value:'"bottom"',computed:!1},{value:'"right"',computed:!1},{value:'"left"',computed:!1},{value:'"top-start"',computed:!1},{value:'"top-end"',computed:!1},{value:'"bottom-start"',computed:!1},{value:'"bottom-end"',computed:!1},{value:'"right-start"',computed:!1},{value:'"right-end"',computed:!1},{value:'"left-start"',computed:!1},{value:'"left-end"',computed:!1}]},required:!1},innerPaddingSize:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"xxs"',computed:!1},{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"mdPlus"',computed:!1},{value:'"lg"',computed:!1},{value:'"lgPlus"',computed:!1},{value:'"xl"',computed:!1},{value:'"xlPlus"',computed:!1},{value:'"xxl"',computed:!1}]},required:!1},innerPaddingType:{defaultValue:{value:"'square'",computed:!1},description:"",type:{name:"enum",value:[{value:'"squish"',computed:!1},{value:'"stretch"',computed:!1},{value:'"square"',computed:!1}]},required:!1},maxPaneWidth:{defaultValue:{value:"270",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:"'auto'",computed:!1}]}]},required:!1},isPaneElevated:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},hasPaneArrow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},focusTrap:{defaultValue:{value:"true",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1},isOpen:{description:"",type:{name:"bool"},required:!0},triggerEl:{description:"",type:{name:"custom",raw:`typeof Element === 'undefined'
? PropTypes.any
: PropTypes.instanceOf(HTMLElement)`},required:!1},onClickOut:{description:"",type:{name:"func"},required:!1}}};export{SA as C,Q as D,EA as a};
//# sourceMappingURL=ControlledDropdown-CThOzJqs.js.map
