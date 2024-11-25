import{j as S}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import"./index-0K9MvtJv.js";import{P as on}from"./index-CeGY6Ei3.js";import{a as K,C as tn,D as cn}from"./ControlledDropdown-DCvookw1.js";import{a as rn}from"./constants-CHqWh-7J.js";import{_ as un}from"./objectWithoutPropertiesLoose-CAYKN5F1.js";import{_ as q}from"./react-router-dom-CPhVUpqL.js";import{r as Y}from"./index-_KdZNTQd.js";import{S as sn}from"./space.enums-BIVz6JhH.js";import{n as j}from"./noop-CdhuOQYG.js";var $={exports:{}},l={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=typeof Symbol=="function"&&Symbol.for,R=r?Symbol.for("react.element"):60103,U=r?Symbol.for("react.portal"):60106,g=r?Symbol.for("react.fragment"):60107,E=r?Symbol.for("react.strict_mode"):60108,b=r?Symbol.for("react.profiler"):60114,v=r?Symbol.for("react.provider"):60109,M=r?Symbol.for("react.context"):60110,Q=r?Symbol.for("react.async_mode"):60111,O=r?Symbol.for("react.concurrent_mode"):60111,D=r?Symbol.for("react.forward_ref"):60112,w=r?Symbol.for("react.suspense"):60113,an=r?Symbol.for("react.suspense_list"):60120,I=r?Symbol.for("react.memo"):60115,P=r?Symbol.for("react.lazy"):60116,dn=r?Symbol.for("react.block"):60121,mn=r?Symbol.for("react.fundamental"):60117,fn=r?Symbol.for("react.responder"):60118,Cn=r?Symbol.for("react.scope"):60119;function a(e){if(typeof e=="object"&&e!==null){var A=e.$$typeof;switch(A){case R:switch(e=e.type,e){case Q:case O:case g:case b:case E:case w:return e;default:switch(e=e&&e.$$typeof,e){case M:case D:case P:case I:case v:return e;default:return A}}case U:return A}}}function V(e){return a(e)===O}l.AsyncMode=Q;l.ConcurrentMode=O;l.ContextConsumer=M;l.ContextProvider=v;l.Element=R;l.ForwardRef=D;l.Fragment=g;l.Lazy=P;l.Memo=I;l.Portal=U;l.Profiler=b;l.StrictMode=E;l.Suspense=w;l.isAsyncMode=function(e){return V(e)||a(e)===Q};l.isConcurrentMode=V;l.isContextConsumer=function(e){return a(e)===M};l.isContextProvider=function(e){return a(e)===v};l.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===R};l.isForwardRef=function(e){return a(e)===D};l.isFragment=function(e){return a(e)===g};l.isLazy=function(e){return a(e)===P};l.isMemo=function(e){return a(e)===I};l.isPortal=function(e){return a(e)===U};l.isProfiler=function(e){return a(e)===b};l.isStrictMode=function(e){return a(e)===E};l.isSuspense=function(e){return a(e)===w};l.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===g||e===O||e===b||e===E||e===w||e===an||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===I||e.$$typeof===v||e.$$typeof===M||e.$$typeof===D||e.$$typeof===mn||e.$$typeof===fn||e.$$typeof===Cn||e.$$typeof===dn)};l.typeOf=a;$.exports=l;var pn=$.exports,m=function(A,o){if(typeof A=="function"){A(o);return}A!==null&&typeof A=="object"&&(A.current=o)},Bn=function(e){q(A,e);function A(){for(var t,i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return t=e.call.apply(e,[this].concat(c))||this,t.prevNode=void 0,t}var o=A.prototype;return o.componentDidMount=function(){var i=Y.findDOMNode(this);this.prevNode=i,m(this.props.innerRef,i)},o.componentDidUpdate=function(i){var c=Y.findDOMNode(this);this.prevNode!==c&&(this.prevNode=c,m(this.props.innerRef,c)),i.innerRef!==this.props.innerRef&&m(this.props.innerRef,c)},o.componentWillUnmount=function(){m(this.props.innerRef,null),delete this.prevNode},o.render=function(){var i=this.props.children;return i},A}(s.Component),yn=function(e){q(A,e);function A(){for(var t,i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return t=e.call.apply(e,[this].concat(c))||this,t.currentNode=void 0,t.handleRefOverride=function(d){var p=t.props,W=p.children,T=p.innerRef;m(W.ref,d),m(T,d),t.currentNode=d},t}var o=A.prototype;return o.componentDidUpdate=function(i){i.innerRef!==this.props.innerRef&&m(this.props.innerRef,this.currentNode)},o.componentWillUnmount=function(){delete this.currentNode},o.render=function(){var i=this.props.children;return s.cloneElement(i,{ref:this.handleRefOverride})},A}(s.Component),hn=["children","innerRef"],Sn=function(A){var o=A.children,t=A.innerRef,i=un(A,hn),c=s.Children.only(o),u=pn.isForwardRef(c)?yn:Bn,d=c&&i&&Object.keys(i).length>0?s.cloneElement(c,i):c;return s.createElement(u,{innerRef:t},d)};function n(){var e="/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/Dropdown.tsx",A="91363ec95377ad0dcb928b0579764d71d892324d",o=window,t="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/Dropdown.tsx",statementMap:{0:{start:{line:10,column:17},end:{line:122,column:2}},1:{start:{line:25,column:36},end:{line:25,column:59}},2:{start:{line:26,column:36},end:{line:26,column:50}},3:{start:{line:27,column:20},end:{line:27,column:32}},4:{start:{line:28,column:19},end:{line:31,column:3}},5:{start:{line:29,column:4},end:{line:29,column:13}},6:{start:{line:30,column:4},end:{line:30,column:23}},7:{start:{line:32,column:19},end:{line:35,column:3}},8:{start:{line:33,column:4},end:{line:33,column:14}},9:{start:{line:34,column:4},end:{line:34,column:24}},10:{start:{line:36,column:21},end:{line:38,column:3}},11:{start:{line:37,column:4},end:{line:37,column:49}},12:{start:{line:39,column:2},end:{line:43,column:6}},13:{start:{line:39,column:34},end:{line:43,column:3}},14:{start:{line:44,column:2},end:{line:61,column:18}},15:{start:{line:45,column:26},end:{line:56,column:5}},16:{start:{line:46,column:6},end:{line:48,column:7}},17:{start:{line:47,column:8},end:{line:47,column:15}},18:{start:{line:49,column:6},end:{line:55,column:7}},19:{start:{line:51,column:10},end:{line:51,column:29}},20:{start:{line:52,column:10},end:{line:52,column:21}},21:{start:{line:53,column:10},end:{line:53,column:16}},22:{start:{line:57,column:4},end:{line:60,column:5}},23:{start:{line:58,column:6},end:{line:58,column:58}},24:{start:{line:59,column:6},end:{line:59,column:74}},25:{start:{line:59,column:19},end:{line:59,column:73}},26:{start:{line:62,column:31},end:{line:67,column:3}},27:{start:{line:63,column:4},end:{line:65,column:5}},28:{start:{line:64,column:6},end:{line:64,column:13}},29:{start:{line:66,column:4},end:{line:66,column:17}},30:{start:{line:68,column:33},end:{line:80,column:3}},31:{start:{line:69,column:4},end:{line:71,column:5}},32:{start:{line:70,column:6},end:{line:70,column:13}},33:{start:{line:72,column:4},end:{line:79,column:5}},34:{start:{line:75,column:8},end:{line:75,column:27}},35:{start:{line:76,column:8},end:{line:76,column:21}},36:{start:{line:77,column:8},end:{line:77,column:14}},37:{start:{line:81,column:36},end:{line:90,column:3}},38:{start:{line:82,column:4},end:{line:84,column:5}},39:{start:{line:83,column:6},end:{line:83,column:13}},40:{start:{line:85,column:4},end:{line:88,column:5}},41:{start:{line:86,column:6},end:{line:86,column:38}},42:{start:{line:87,column:6},end:{line:87,column:31}},43:{start:{line:89,column:4},end:{line:89,column:15}},44:{start:{line:91,column:36},end:{line:96,column:3}},45:{start:{line:92,column:4},end:{line:94,column:5}},46:{start:{line:93,column:6},end:{line:93,column:13}},47:{start:{line:95,column:4},end:{line:95,column:61}},48:{start:{line:97,column:31},end:{line:102,column:3}},49:{start:{line:98,column:4},end:{line:100,column:5}},50:{start:{line:99,column:6},end:{line:99,column:13}},51:{start:{line:101,column:4},end:{line:101,column:15}},52:{start:{line:103,column:30},end:{line:108,column:3}},53:{start:{line:104,column:4},end:{line:106,column:5}},54:{start:{line:105,column:6},end:{line:105,column:13}},55:{start:{line:107,column:4},end:{line:107,column:15}},56:{start:{line:109,column:29},end:{line:109,column:80}},57:{start:{line:110,column:2},end:{line:121,column:7}},58:{start:{line:123,column:0},end:{line:123,column:34}},59:{start:{line:126,column:0},end:{line:227,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:28},end:{line:10,column:29}},loc:{start:{line:24,column:11},end:{line:122,column:1}},line:24},1:{name:"(anonymous_1)",decl:{start:{line:28,column:19},end:{line:28,column:20}},loc:{start:{line:28,column:25},end:{line:31,column:3}},line:28},2:{name:"(anonymous_2)",decl:{start:{line:32,column:19},end:{line:32,column:20}},loc:{start:{line:32,column:25},end:{line:35,column:3}},line:32},3:{name:"(anonymous_3)",decl:{start:{line:36,column:21},end:{line:36,column:22}},loc:{start:{line:36,column:27},end:{line:38,column:3}},line:36},4:{name:"(anonymous_4)",decl:{start:{line:39,column:27},end:{line:39,column:28}},loc:{start:{line:39,column:34},end:{line:43,column:3}},line:39},5:{name:"(anonymous_5)",decl:{start:{line:44,column:12},end:{line:44,column:13}},loc:{start:{line:44,column:18},end:{line:61,column:3}},line:44},6:{name:"(anonymous_6)",decl:{start:{line:45,column:26},end:{line:45,column:27}},loc:{start:{line:45,column:33},end:{line:56,column:5}},line:45},7:{name:"(anonymous_7)",decl:{start:{line:59,column:13},end:{line:59,column:14}},loc:{start:{line:59,column:19},end:{line:59,column:73}},line:59},8:{name:"(anonymous_8)",decl:{start:{line:62,column:31},end:{line:62,column:32}},loc:{start:{line:62,column:37},end:{line:67,column:3}},line:62},9:{name:"(anonymous_9)",decl:{start:{line:68,column:33},end:{line:68,column:34}},loc:{start:{line:68,column:40},end:{line:80,column:3}},line:68},10:{name:"(anonymous_10)",decl:{start:{line:81,column:36},end:{line:81,column:37}},loc:{start:{line:81,column:42},end:{line:90,column:3}},line:81},11:{name:"(anonymous_11)",decl:{start:{line:91,column:36},end:{line:91,column:37}},loc:{start:{line:91,column:42},end:{line:96,column:3}},line:91},12:{name:"(anonymous_12)",decl:{start:{line:97,column:31},end:{line:97,column:32}},loc:{start:{line:97,column:37},end:{line:102,column:3}},line:97},13:{name:"(anonymous_13)",decl:{start:{line:103,column:30},end:{line:103,column:31}},loc:{start:{line:103,column:36},end:{line:108,column:3}},line:103}},branchMap:{0:{loc:{start:{line:13,column:2},end:{line:13,column:47}},type:"default-arg",locations:[{start:{line:13,column:18},end:{line:13,column:47}}],line:13},1:{loc:{start:{line:14,column:2},end:{line:14,column:44}},type:"default-arg",locations:[{start:{line:14,column:14},end:{line:14,column:44}}],line:14},2:{loc:{start:{line:15,column:2},end:{line:15,column:34}},type:"default-arg",locations:[{start:{line:15,column:21},end:{line:15,column:34}}],line:15},3:{loc:{start:{line:16,column:2},end:{line:16,column:40}},type:"default-arg",locations:[{start:{line:16,column:21},end:{line:16,column:40}}],line:16},4:{loc:{start:{line:17,column:2},end:{line:17,column:20}},type:"default-arg",locations:[{start:{line:17,column:17},end:{line:17,column:20}}],line:17},5:{loc:{start:{line:18,column:2},end:{line:18,column:24}},type:"default-arg",locations:[{start:{line:18,column:19},end:{line:18,column:24}}],line:18},6:{loc:{start:{line:19,column:2},end:{line:19,column:22}},type:"default-arg",locations:[{start:{line:19,column:17},end:{line:19,column:22}}],line:19},7:{loc:{start:{line:20,column:2},end:{line:20,column:22}},type:"default-arg",locations:[{start:{line:20,column:19},end:{line:20,column:22}}],line:20},8:{loc:{start:{line:21,column:2},end:{line:21,column:23}},type:"default-arg",locations:[{start:{line:21,column:18},end:{line:21,column:23}}],line:21},9:{loc:{start:{line:22,column:2},end:{line:22,column:16}},type:"default-arg",locations:[{start:{line:22,column:12},end:{line:22,column:16}}],line:22},10:{loc:{start:{line:23,column:2},end:{line:23,column:15}},type:"default-arg",locations:[{start:{line:23,column:11},end:{line:23,column:15}}],line:23},11:{loc:{start:{line:37,column:4},end:{line:37,column:48}},type:"cond-expr",locations:[{start:{line:37,column:25},end:{line:37,column:35}},{start:{line:37,column:38},end:{line:37,column:48}}],line:37},12:{loc:{start:{line:46,column:6},end:{line:48,column:7}},type:"if",locations:[{start:{line:46,column:6},end:{line:48,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:46},13:{loc:{start:{line:49,column:6},end:{line:55,column:7}},type:"switch",locations:[{start:{line:50,column:8},end:{line:53,column:16}},{start:{line:54,column:8},end:{line:54,column:16}}],line:49},14:{loc:{start:{line:57,column:4},end:{line:60,column:5}},type:"if",locations:[{start:{line:57,column:4},end:{line:60,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:57},15:{loc:{start:{line:63,column:4},end:{line:65,column:5}},type:"if",locations:[{start:{line:63,column:4},end:{line:65,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:63},16:{loc:{start:{line:69,column:4},end:{line:71,column:5}},type:"if",locations:[{start:{line:69,column:4},end:{line:71,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:69},17:{loc:{start:{line:72,column:4},end:{line:79,column:5}},type:"switch",locations:[{start:{line:73,column:6},end:{line:73,column:15}},{start:{line:74,column:6},end:{line:77,column:14}},{start:{line:78,column:6},end:{line:78,column:14}}],line:72},18:{loc:{start:{line:82,column:4},end:{line:84,column:5}},type:"if",locations:[{start:{line:82,column:4},end:{line:84,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:82},19:{loc:{start:{line:85,column:4},end:{line:88,column:5}},type:"if",locations:[{start:{line:85,column:4},end:{line:88,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:85},20:{loc:{start:{line:92,column:4},end:{line:94,column:5}},type:"if",locations:[{start:{line:92,column:4},end:{line:94,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:92},21:{loc:{start:{line:98,column:4},end:{line:100,column:5}},type:"if",locations:[{start:{line:98,column:4},end:{line:100,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:98},22:{loc:{start:{line:104,column:4},end:{line:106,column:5}},type:"if",locations:[{start:{line:104,column:4},end:{line:106,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:104}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0],9:[0],10:[0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Dropdown/Dropdown.tsx"],names:["cloneElement","forwardRef","useEffect","useImperativeHandle","useRef","useState","noop","Ref","SpaceSizes","PaddingTypes","DropdownPlacements","DropdownTriggerEvents","ControlledDropdown","CLX_COMPONENT","Dropdown","children","trigger","triggerEvents","click","placement","bottomStart","innerPaddingSize","md","innerPaddingType","square","maxPaneWidth","isPaneElevated","hasPaneArrow","hoverHideDelay","defaultIsOpen","onClose","onOpen","ref","isVisible","setIsVisible","triggerEl","setTriggerEl","timeoutId","showPane","hidePane","togglePane","handleKeyDown","e","includes","key","preventDefault","document","addEventListener","removeEventListener","handleTriggerOnClick","handleTriggerOnKeyDown","handleTriggerOnMouseEnter","current","clearTimeout","handleTriggerOnMouseLeave","setTimeout","handleTriggerOnFocus","handleTriggerOnBlur","isFocusTrapEnabled","onClick","onTouchStart","onKeyDown","onPointerEnter","onPointerLeave","onFocus","onBlur","displayName"],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"91363ec95377ad0dcb928b0579764d71d892324d"},c=o[t]||(o[t]={});(!c[e]||c[e].hash!==A)&&(c[e]=i);var u=c[e];return n=function(){return u},u}n();const z=(n().s[0]++,s.forwardRef(({children:e,trigger:A,triggerEvents:o=(n().b[0][0]++,[K.click]),placement:t=(n().b[1][0]++,cn.bottomStart),innerPaddingSize:i=(n().b[2][0]++,sn.md),innerPaddingType:c=(n().b[3][0]++,on.square),maxPaneWidth:u=(n().b[4][0]++,270),isPaneElevated:d=(n().b[5][0]++,!1),hasPaneArrow:p=(n().b[6][0]++,!1),hoverHideDelay:W=(n().b[7][0]++,250),defaultIsOpen:T=(n().b[8][0]++,!1),onClose:L=(n().b[9][0]++,j),onOpen:X=(n().b[10][0]++,j)},H)=>{n().f[0]++;const[B,k]=(n().s[1]++,s.useState(T)),[J,Z]=(n().s[2]++,s.useState(null)),y=(n().s[3]++,s.useRef(null));n().s[4]++;const h=()=>{n().f[1]++,n().s[5]++,X(),n().s[6]++,k(!0)};n().s[7]++;const f=()=>{n().f[2]++,n().s[8]++,L(),n().s[9]++,k(!1)};n().s[10]++;const F=()=>{n().f[3]++,n().s[11]++,B===!0?(n().b[11][0]++,f()):(n().b[11][1]++,h())};n().s[12]++,s.useImperativeHandle(H,()=>(n().f[4]++,n().s[13]++,{togglePane:F,hidePane:f,showPane:h})),n().s[14]++,s.useEffect(()=>{n().f[5]++,n().s[15]++;const C=G=>{if(n().f[6]++,n().s[16]++,o.includes("click"))n().b[12][1]++;else{n().b[12][0]++,n().s[17]++;return}switch(n().s[18]++,G.key){case"Escape":n().b[13][0]++,n().s[19]++,G.preventDefault(),n().s[20]++,f(),n().s[21]++;break;default:n().b[13][1]++}};if(n().s[22]++,B)return n().b[14][0]++,n().s[23]++,document.addEventListener("keydown",C),n().s[24]++,()=>(n().f[7]++,n().s[25]++,document.removeEventListener("keydown",C));n().b[14][1]++},[B]),n().s[26]++;const N=()=>{if(n().f[8]++,n().s[27]++,o.includes("click"))n().b[15][1]++;else{n().b[15][0]++,n().s[28]++;return}n().s[29]++,F()};n().s[30]++;const nn=C=>{if(n().f[9]++,n().s[31]++,o.includes("click"))n().b[16][1]++;else{n().b[16][0]++,n().s[32]++;return}switch(n().s[33]++,C.key){case" ":n().b[17][0]++;case"Enter":n().b[17][1]++,n().s[34]++,C.preventDefault(),n().s[35]++,F(),n().s[36]++;break;default:n().b[17][2]++}};n().s[37]++;const x=()=>{if(n().f[10]++,n().s[38]++,o.includes("hover"))n().b[18][1]++;else{n().b[18][0]++,n().s[39]++;return}n().s[40]++,y.current!==null?(n().b[19][0]++,n().s[41]++,clearTimeout(y.current),n().s[42]++,y.current=null):n().b[19][1]++,n().s[43]++,h()};n().s[44]++;const _=()=>{if(n().f[11]++,n().s[45]++,o.includes("hover"))n().b[20][1]++;else{n().b[20][0]++,n().s[46]++;return}n().s[47]++,y.current=setTimeout(f,W)};n().s[48]++;const en=()=>{if(n().f[12]++,n().s[49]++,o.includes("focus"))n().b[21][1]++;else{n().b[21][0]++,n().s[50]++;return}n().s[51]++,h()};n().s[52]++;const ln=()=>{if(n().f[13]++,n().s[53]++,o.includes("focus"))n().b[22][1]++;else{n().b[22][0]++,n().s[54]++;return}n().s[55]++,f()},An=(n().s[56]++,o.includes(K.click));return n().s[57]++,S.jsxs(S.Fragment,{children:[S.jsx(Sn,{innerRef:Z,children:s.cloneElement(A,{onClick:N,onTouchStart:N,onKeyDown:nn,onPointerEnter:x,onPointerLeave:_,onFocus:en,onBlur:ln})}),S.jsx(tn,{className:rn,focusTrap:An,hasPaneArrow:p,innerPaddingSize:i,innerPaddingType:c,isOpen:B,isPaneElevated:d,maxPaneWidth:u,placement:t,triggerEl:J,onClickOut:f,onMouseEnter:x,onMouseLeave:_,children:e})]})}));n().s[58]++;z.displayName="Dropdown";n().s[59]++;z.__docgenInfo={description:"",methods:[{name:"togglePane",docblock:null,modifiers:[],params:[],returns:null},{name:"hidePane",docblock:null,modifiers:[],params:[],returns:null},{name:"showPane",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Dropdown",props:{triggerEvents:{defaultValue:{value:"[DropdownTriggerEvents.click]",computed:!1},required:!1},placement:{defaultValue:{value:"'bottom-start'",computed:!1},required:!1},innerPaddingSize:{defaultValue:{value:"'md'",computed:!1},required:!1},innerPaddingType:{defaultValue:{value:"'square'",computed:!1},required:!1},maxPaneWidth:{defaultValue:{value:"270",computed:!1},required:!1},isPaneElevated:{defaultValue:{value:"false",computed:!1},required:!1},hasPaneArrow:{defaultValue:{value:"false",computed:!1},required:!1},hoverHideDelay:{defaultValue:{value:"250",computed:!1},required:!1},defaultIsOpen:{defaultValue:{value:"false",computed:!1},required:!1},onClose:{defaultValue:{value:"noop",computed:!0},required:!1},onOpen:{defaultValue:{value:"noop",computed:!0},required:!1}}};export{z as D};
//# sourceMappingURL=Dropdown-CENT_3b_.js.map
