import{j as b}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import"./index-BVsc1NiC.js";import{P as tn}from"./index-_M9_Hem9.js";import{a as W,C as rn,D as un}from"./ControlledDropdown-QQhVOnls.js";import{C as cn}from"./constants-l-41uwkI.js";import{_ as an}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{_ as G}from"./react-router-dom-CfjGzTlJ.js";import{r as z}from"./index-_KdZNTQd.js";import{S as sn}from"./space.enums-DGrZwzIk.js";import{n as U}from"./noop-CGDyLuY9.js";var H={exports:{}},l={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=typeof Symbol=="function"&&Symbol.for,$=c?Symbol.for("react.element"):60103,k=c?Symbol.for("react.portal"):60106,g=c?Symbol.for("react.fragment"):60107,E=c?Symbol.for("react.strict_mode"):60108,w=c?Symbol.for("react.profiler"):60114,x=c?Symbol.for("react.provider"):60109,D=c?Symbol.for("react.context"):60110,I=c?Symbol.for("react.async_mode"):60111,S=c?Symbol.for("react.concurrent_mode"):60111,P=c?Symbol.for("react.forward_ref"):60112,_=c?Symbol.for("react.suspense"):60113,dn=c?Symbol.for("react.suspense_list"):60120,F=c?Symbol.for("react.memo"):60115,R=c?Symbol.for("react.lazy"):60116,mn=c?Symbol.for("react.block"):60121,An=c?Symbol.for("react.fundamental"):60117,fn=c?Symbol.for("react.responder"):60118,pn=c?Symbol.for("react.scope"):60119;function d(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case $:switch(e=e.type,e){case I:case S:case g:case w:case E:case _:return e;default:switch(e=e&&e.$$typeof,e){case D:case P:case R:case F:case x:return e;default:return o}}case k:return o}}}function K(e){return d(e)===S}l.AsyncMode=I;l.ConcurrentMode=S;l.ContextConsumer=D;l.ContextProvider=x;l.Element=$;l.ForwardRef=P;l.Fragment=g;l.Lazy=R;l.Memo=F;l.Portal=k;l.Profiler=w;l.StrictMode=E;l.Suspense=_;l.isAsyncMode=function(e){return K(e)||d(e)===I};l.isConcurrentMode=K;l.isContextConsumer=function(e){return d(e)===D};l.isContextProvider=function(e){return d(e)===x};l.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$};l.isForwardRef=function(e){return d(e)===P};l.isFragment=function(e){return d(e)===g};l.isLazy=function(e){return d(e)===R};l.isMemo=function(e){return d(e)===F};l.isPortal=function(e){return d(e)===k};l.isProfiler=function(e){return d(e)===w};l.isStrictMode=function(e){return d(e)===E};l.isSuspense=function(e){return d(e)===_};l.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===g||e===S||e===w||e===E||e===_||e===dn||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===F||e.$$typeof===x||e.$$typeof===D||e.$$typeof===P||e.$$typeof===An||e.$$typeof===fn||e.$$typeof===pn||e.$$typeof===mn)};l.typeOf=d;H.exports=l;var yn=H.exports,A=function(o,t){if(typeof o=="function"){o(t);return}o!==null&&typeof o=="object"&&(o.current=t)},hn=function(e){G(o,e);function o(){for(var i,r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return i=e.call.apply(e,[this].concat(u))||this,i.prevNode=void 0,i}var t=o.prototype;return t.componentDidMount=function(){var r=z.findDOMNode(this);this.prevNode=r,A(this.props.innerRef,r)},t.componentDidUpdate=function(r){var u=z.findDOMNode(this);this.prevNode!==u&&(this.prevNode=u,A(this.props.innerRef,u)),r.innerRef!==this.props.innerRef&&A(this.props.innerRef,u)},t.componentWillUnmount=function(){A(this.props.innerRef,null),delete this.prevNode},t.render=function(){var r=this.props.children;return r},o}(s.Component),vn=function(e){G(o,e);function o(){for(var i,r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return i=e.call.apply(e,[this].concat(u))||this,i.currentNode=void 0,i.handleRefOverride=function(m){var y=i.props,T=y.children,O=y.innerRef;A(T.ref,m),A(O,m),i.currentNode=m},i}var t=o.prototype;return t.componentDidUpdate=function(r){r.innerRef!==this.props.innerRef&&A(this.props.innerRef,this.currentNode)},t.componentWillUnmount=function(){delete this.currentNode},t.render=function(){var r=this.props.children;return s.cloneElement(r,{ref:this.handleRefOverride})},o}(s.Component),Cn=["children","innerRef"],bn=function(o){var t=o.children,i=o.innerRef,r=an(o,Cn),u=s.Children.only(t),a=yn.isForwardRef(u)?vn:hn,m=u&&r&&Object.keys(r).length>0?s.cloneElement(u,r):u;return s.createElement(a,{innerRef:i},m)};function n(){var e="/home/runner/work/design-system/design-system/src/components/Dropdown/Dropdown.tsx",o="8d62d0686a19b3669cdd8e555fa58b41e46cec4c",t=window,i="__coverage__",r={path:"/home/runner/work/design-system/design-system/src/components/Dropdown/Dropdown.tsx",statementMap:{0:{start:{line:10,column:17},end:{line:122,column:2}},1:{start:{line:25,column:36},end:{line:25,column:59}},2:{start:{line:26,column:36},end:{line:26,column:50}},3:{start:{line:27,column:20},end:{line:27,column:32}},4:{start:{line:28,column:19},end:{line:31,column:3}},5:{start:{line:29,column:4},end:{line:29,column:13}},6:{start:{line:30,column:4},end:{line:30,column:23}},7:{start:{line:32,column:19},end:{line:35,column:3}},8:{start:{line:33,column:4},end:{line:33,column:14}},9:{start:{line:34,column:4},end:{line:34,column:24}},10:{start:{line:36,column:21},end:{line:38,column:3}},11:{start:{line:37,column:4},end:{line:37,column:49}},12:{start:{line:39,column:2},end:{line:43,column:6}},13:{start:{line:39,column:34},end:{line:43,column:3}},14:{start:{line:44,column:2},end:{line:61,column:18}},15:{start:{line:45,column:26},end:{line:56,column:5}},16:{start:{line:46,column:6},end:{line:48,column:7}},17:{start:{line:47,column:8},end:{line:47,column:15}},18:{start:{line:49,column:6},end:{line:55,column:7}},19:{start:{line:51,column:10},end:{line:51,column:29}},20:{start:{line:52,column:10},end:{line:52,column:21}},21:{start:{line:53,column:10},end:{line:53,column:16}},22:{start:{line:57,column:4},end:{line:60,column:5}},23:{start:{line:58,column:6},end:{line:58,column:58}},24:{start:{line:59,column:6},end:{line:59,column:74}},25:{start:{line:59,column:19},end:{line:59,column:73}},26:{start:{line:62,column:31},end:{line:67,column:3}},27:{start:{line:63,column:4},end:{line:65,column:5}},28:{start:{line:64,column:6},end:{line:64,column:13}},29:{start:{line:66,column:4},end:{line:66,column:17}},30:{start:{line:68,column:33},end:{line:80,column:3}},31:{start:{line:69,column:4},end:{line:71,column:5}},32:{start:{line:70,column:6},end:{line:70,column:13}},33:{start:{line:72,column:4},end:{line:79,column:5}},34:{start:{line:75,column:8},end:{line:75,column:27}},35:{start:{line:76,column:8},end:{line:76,column:21}},36:{start:{line:77,column:8},end:{line:77,column:14}},37:{start:{line:81,column:36},end:{line:90,column:3}},38:{start:{line:82,column:4},end:{line:84,column:5}},39:{start:{line:83,column:6},end:{line:83,column:13}},40:{start:{line:85,column:4},end:{line:88,column:5}},41:{start:{line:86,column:6},end:{line:86,column:38}},42:{start:{line:87,column:6},end:{line:87,column:31}},43:{start:{line:89,column:4},end:{line:89,column:15}},44:{start:{line:91,column:36},end:{line:96,column:3}},45:{start:{line:92,column:4},end:{line:94,column:5}},46:{start:{line:93,column:6},end:{line:93,column:13}},47:{start:{line:95,column:4},end:{line:95,column:61}},48:{start:{line:97,column:31},end:{line:102,column:3}},49:{start:{line:98,column:4},end:{line:100,column:5}},50:{start:{line:99,column:6},end:{line:99,column:13}},51:{start:{line:101,column:4},end:{line:101,column:15}},52:{start:{line:103,column:30},end:{line:108,column:3}},53:{start:{line:104,column:4},end:{line:106,column:5}},54:{start:{line:105,column:6},end:{line:105,column:13}},55:{start:{line:107,column:4},end:{line:107,column:15}},56:{start:{line:109,column:29},end:{line:109,column:80}},57:{start:{line:110,column:2},end:{line:121,column:7}},58:{start:{line:123,column:0},end:{line:123,column:34}},59:{start:{line:125,column:0},end:{line:131,column:50}},60:{start:{line:127,column:4},end:{line:127,column:38}},61:{start:{line:129,column:4},end:{line:129,column:3621}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:28},end:{line:10,column:29}},loc:{start:{line:24,column:11},end:{line:122,column:1}},line:24},1:{name:"(anonymous_1)",decl:{start:{line:28,column:19},end:{line:28,column:20}},loc:{start:{line:28,column:25},end:{line:31,column:3}},line:28},2:{name:"(anonymous_2)",decl:{start:{line:32,column:19},end:{line:32,column:20}},loc:{start:{line:32,column:25},end:{line:35,column:3}},line:32},3:{name:"(anonymous_3)",decl:{start:{line:36,column:21},end:{line:36,column:22}},loc:{start:{line:36,column:27},end:{line:38,column:3}},line:36},4:{name:"(anonymous_4)",decl:{start:{line:39,column:27},end:{line:39,column:28}},loc:{start:{line:39,column:34},end:{line:43,column:3}},line:39},5:{name:"(anonymous_5)",decl:{start:{line:44,column:12},end:{line:44,column:13}},loc:{start:{line:44,column:18},end:{line:61,column:3}},line:44},6:{name:"(anonymous_6)",decl:{start:{line:45,column:26},end:{line:45,column:27}},loc:{start:{line:45,column:33},end:{line:56,column:5}},line:45},7:{name:"(anonymous_7)",decl:{start:{line:59,column:13},end:{line:59,column:14}},loc:{start:{line:59,column:19},end:{line:59,column:73}},line:59},8:{name:"(anonymous_8)",decl:{start:{line:62,column:31},end:{line:62,column:32}},loc:{start:{line:62,column:37},end:{line:67,column:3}},line:62},9:{name:"(anonymous_9)",decl:{start:{line:68,column:33},end:{line:68,column:34}},loc:{start:{line:68,column:40},end:{line:80,column:3}},line:68},10:{name:"(anonymous_10)",decl:{start:{line:81,column:36},end:{line:81,column:37}},loc:{start:{line:81,column:42},end:{line:90,column:3}},line:81},11:{name:"(anonymous_11)",decl:{start:{line:91,column:36},end:{line:91,column:37}},loc:{start:{line:91,column:42},end:{line:96,column:3}},line:91},12:{name:"(anonymous_12)",decl:{start:{line:97,column:31},end:{line:97,column:32}},loc:{start:{line:97,column:37},end:{line:102,column:3}},line:97},13:{name:"(anonymous_13)",decl:{start:{line:103,column:30},end:{line:103,column:31}},loc:{start:{line:103,column:36},end:{line:108,column:3}},line:103}},branchMap:{0:{loc:{start:{line:13,column:2},end:{line:13,column:47}},type:"default-arg",locations:[{start:{line:13,column:18},end:{line:13,column:47}}],line:13},1:{loc:{start:{line:14,column:2},end:{line:14,column:44}},type:"default-arg",locations:[{start:{line:14,column:14},end:{line:14,column:44}}],line:14},2:{loc:{start:{line:15,column:2},end:{line:15,column:34}},type:"default-arg",locations:[{start:{line:15,column:21},end:{line:15,column:34}}],line:15},3:{loc:{start:{line:16,column:2},end:{line:16,column:40}},type:"default-arg",locations:[{start:{line:16,column:21},end:{line:16,column:40}}],line:16},4:{loc:{start:{line:17,column:2},end:{line:17,column:20}},type:"default-arg",locations:[{start:{line:17,column:17},end:{line:17,column:20}}],line:17},5:{loc:{start:{line:18,column:2},end:{line:18,column:24}},type:"default-arg",locations:[{start:{line:18,column:19},end:{line:18,column:24}}],line:18},6:{loc:{start:{line:19,column:2},end:{line:19,column:22}},type:"default-arg",locations:[{start:{line:19,column:17},end:{line:19,column:22}}],line:19},7:{loc:{start:{line:20,column:2},end:{line:20,column:22}},type:"default-arg",locations:[{start:{line:20,column:19},end:{line:20,column:22}}],line:20},8:{loc:{start:{line:21,column:2},end:{line:21,column:23}},type:"default-arg",locations:[{start:{line:21,column:18},end:{line:21,column:23}}],line:21},9:{loc:{start:{line:22,column:2},end:{line:22,column:16}},type:"default-arg",locations:[{start:{line:22,column:12},end:{line:22,column:16}}],line:22},10:{loc:{start:{line:23,column:2},end:{line:23,column:15}},type:"default-arg",locations:[{start:{line:23,column:11},end:{line:23,column:15}}],line:23},11:{loc:{start:{line:37,column:4},end:{line:37,column:48}},type:"cond-expr",locations:[{start:{line:37,column:25},end:{line:37,column:35}},{start:{line:37,column:38},end:{line:37,column:48}}],line:37},12:{loc:{start:{line:46,column:6},end:{line:48,column:7}},type:"if",locations:[{start:{line:46,column:6},end:{line:48,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:46},13:{loc:{start:{line:49,column:6},end:{line:55,column:7}},type:"switch",locations:[{start:{line:50,column:8},end:{line:53,column:16}},{start:{line:54,column:8},end:{line:54,column:16}}],line:49},14:{loc:{start:{line:57,column:4},end:{line:60,column:5}},type:"if",locations:[{start:{line:57,column:4},end:{line:60,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:57},15:{loc:{start:{line:63,column:4},end:{line:65,column:5}},type:"if",locations:[{start:{line:63,column:4},end:{line:65,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:63},16:{loc:{start:{line:69,column:4},end:{line:71,column:5}},type:"if",locations:[{start:{line:69,column:4},end:{line:71,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:69},17:{loc:{start:{line:72,column:4},end:{line:79,column:5}},type:"switch",locations:[{start:{line:73,column:6},end:{line:73,column:15}},{start:{line:74,column:6},end:{line:77,column:14}},{start:{line:78,column:6},end:{line:78,column:14}}],line:72},18:{loc:{start:{line:82,column:4},end:{line:84,column:5}},type:"if",locations:[{start:{line:82,column:4},end:{line:84,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:82},19:{loc:{start:{line:85,column:4},end:{line:88,column:5}},type:"if",locations:[{start:{line:85,column:4},end:{line:88,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:85},20:{loc:{start:{line:92,column:4},end:{line:94,column:5}},type:"if",locations:[{start:{line:92,column:4},end:{line:94,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:92},21:{loc:{start:{line:98,column:4},end:{line:100,column:5}},type:"if",locations:[{start:{line:98,column:4},end:{line:100,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:98},22:{loc:{start:{line:104,column:4},end:{line:106,column:5}},type:"if",locations:[{start:{line:104,column:4},end:{line:106,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:104}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0],9:[0],10:[0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Dropdown/Dropdown.tsx"],names:["children","trigger","bottomStart","md","square","noop","onOpen","setIsVisible","onClose","isVisible","useImperativeHandle","togglePane","hidePane","showPane","useEffect","e","document","clearTimeout","timeoutId","handleTriggerOnClick","handleTriggerOnKeyDown","handleTriggerOnMouseEnter","handleTriggerOnMouseLeave","handleTriggerOnFocus","handleTriggerOnBlur","Dropdown"],mappings:"AAgJM;AAhJN;AASA;AACA;AAEA;AACA;AAEA;AACA;AACA;AAQA;AAEI;AACEA;AACAC;AAC4C;AACbC;AACDC;AACEC;AACjB;AACE;AACF;AACE;AACD;AACNC;AAEZ;AAGA;AACA;AACA;AAEA;AACEC;AACAC;AAAiB;AAGnB;AACEC;AACAD;AAAkB;AAEpB;AACEE;AAA2C;AAG7CC;AAAgC;AAC9BC;AACAC;AACAC;AAIFC;AACE;AACE;AACE;AAAA;AAEF;AAAa;AAETC;AACAH;AACA;AAAA;AACF;AACF;AAEF;AACEI;AACA;AAAkE;AACpE;AAIF;AACE;AACE;AAAA;AAEFL;AAAW;AAGb;AACE;AACE;AAAA;AAGF;AAAa;AACN;AAEHI;AACAJ;AACA;AAAA;AACF;AACF;AAGF;AACE;AACE;AAAA;AAEF;AACEM;AACAC;AAAoB;AAEtBL;AAAS;AAEX;AACE;AACE;AAAA;AAEFK;AAAuD;AAEzD;AACE;AACE;AAAA;AAEFL;AAAS;AAEX;AACE;AACE;AAAA;AAEFD;AAAS;AAGX;AAIA;AAEI;AACyB;AACZO;AACKA;AACHC;AACKC;AACAC;AACPC;AACDC;AAEZ;AAiBA;AAGN;AACAC;AAEF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8d62d0686a19b3669cdd8e555fa58b41e46cec4c"},u=t[i]||(t[i]={});(!u[e]||u[e].hash!==o)&&(u[e]=r);var a=u[e];return n=function(){return a},a}n();const N=(n().s[0]++,s.forwardRef(({children:e,trigger:o,triggerEvents:t=(n().b[0][0]++,[W.click]),placement:i=(n().b[1][0]++,un.bottomStart),innerPaddingSize:r=(n().b[2][0]++,sn.md),innerPaddingType:u=(n().b[3][0]++,tn.square),maxPaneWidth:a=(n().b[4][0]++,270),isPaneElevated:m=(n().b[5][0]++,!1),hasPaneArrow:y=(n().b[6][0]++,!1),hoverHideDelay:T=(n().b[7][0]++,250),defaultIsOpen:O=(n().b[8][0]++,!1),onClose:X=(n().b[9][0]++,U),onOpen:J=(n().b[10][0]++,U)},Z)=>{n().f[0]++;const[h,q]=(n().s[1]++,s.useState(O)),[Q,Y]=(n().s[2]++,s.useState(null)),v=(n().s[3]++,s.useRef(null));n().s[4]++;const C=()=>{n().f[1]++,n().s[5]++,J(),n().s[6]++,q(!0)};n().s[7]++;const f=()=>{n().f[2]++,n().s[8]++,X(),n().s[9]++,q(!1)};n().s[10]++;const M=()=>{n().f[3]++,n().s[11]++,h===!0?(n().b[11][0]++,f()):(n().b[11][1]++,C())};n().s[12]++,s.useImperativeHandle(Z,()=>(n().f[4]++,n().s[13]++,{togglePane:M,hidePane:f,showPane:C})),n().s[14]++,s.useEffect(()=>{n().f[5]++,n().s[15]++;const p=B=>{if(n().f[6]++,n().s[16]++,t.includes("click"))n().b[12][1]++;else{n().b[12][0]++,n().s[17]++;return}switch(n().s[18]++,B.key){case"Escape":n().b[13][0]++,n().s[19]++,B.preventDefault(),n().s[20]++,f(),n().s[21]++;break;default:n().b[13][1]++}};if(n().s[22]++,h)return n().b[14][0]++,n().s[23]++,document.addEventListener("keydown",p),n().s[24]++,()=>(n().f[7]++,n().s[25]++,document.removeEventListener("keydown",p));n().b[14][1]++},[h]),n().s[26]++;const V=()=>{if(n().f[8]++,n().s[27]++,t.includes("click"))n().b[15][1]++;else{n().b[15][0]++,n().s[28]++;return}n().s[29]++,M()};n().s[30]++;const nn=p=>{if(n().f[9]++,n().s[31]++,t.includes("click"))n().b[16][1]++;else{n().b[16][0]++,n().s[32]++;return}switch(n().s[33]++,p.key){case" ":n().b[17][0]++;case"Enter":n().b[17][1]++,n().s[34]++,p.preventDefault(),n().s[35]++,M(),n().s[36]++;break;default:n().b[17][2]++}};n().s[37]++;const L=()=>{if(n().f[10]++,n().s[38]++,t.includes("hover"))n().b[18][1]++;else{n().b[18][0]++,n().s[39]++;return}n().s[40]++,v.current!==null?(n().b[19][0]++,n().s[41]++,clearTimeout(v.current),n().s[42]++,v.current=null):n().b[19][1]++,n().s[43]++,C()};n().s[44]++;const j=()=>{if(n().f[11]++,n().s[45]++,t.includes("hover"))n().b[20][1]++;else{n().b[20][0]++,n().s[46]++;return}n().s[47]++,v.current=setTimeout(f,T)};n().s[48]++;const en=()=>{if(n().f[12]++,n().s[49]++,t.includes("focus"))n().b[21][1]++;else{n().b[21][0]++,n().s[50]++;return}n().s[51]++,C()};n().s[52]++;const ln=()=>{if(n().f[13]++,n().s[53]++,t.includes("focus"))n().b[22][1]++;else{n().b[22][0]++,n().s[54]++;return}n().s[55]++,f()},on=(n().s[56]++,t.includes(W.click));return n().s[57]++,b.jsxs(b.Fragment,{children:[b.jsx(bn,{innerRef:Y,children:s.cloneElement(o,{onClick:V,onTouchStart:V,onKeyDown:nn,onPointerEnter:L,onPointerLeave:j,onFocus:en,onBlur:ln})}),b.jsx(rn,{className:cn,focusTrap:on,hasPaneArrow:y,innerPaddingSize:r,innerPaddingType:u,isOpen:h,isPaneElevated:m,maxPaneWidth:a,placement:i,triggerEl:Q,onClickOut:f,onMouseEnter:L,onMouseLeave:j,children:e})]})}));n().s[58]++;N.displayName="Dropdown";n().s[59]++;try{n().s[60]++,N.displayName="Dropdown",n().s[61]++,N.__docgenInfo={description:"",displayName:"Dropdown",props:{trigger:{defaultValue:null,description:"React element used to trigger the dropdown pane.",name:"trigger",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},triggerEvents:{defaultValue:{value:"[DropdownTriggerEvents.click]"},description:"Array of events which triggers the dropdown pane visibility change.",name:"triggerEvents",required:!1,type:{name:"TriggerEvents[]"}},hoverHideDelay:{defaultValue:{value:"250"},description:"Delay until the dropdown pane is closed. Used only for `hover` triggerEvent, in ms.",name:"hoverHideDelay",required:!1,type:{name:"number"}},defaultIsOpen:{defaultValue:{value:"false"},description:"Default visibility state.",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback called when the dropdown pane is closed.",name:"onClose",required:!1,type:{name:"() => void"}},onOpen:{defaultValue:null,description:"Callback called when the dropdown pane is opened.",name:"onOpen",required:!1,type:{name:"() => void"}},placement:{defaultValue:{value:"bottom-start"},description:"Alignement of the dropdown pane.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},innerPaddingSize:{defaultValue:{value:"md"},description:"Size of padding in the dropdown pane.",name:"innerPaddingSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'},{value:'"xxs"'},{value:'"xs"'},{value:'"mdPlus"'},{value:'"lgPlus"'},{value:'"xlPlus"'},{value:'"xxl"'},{value:'"half-x"'},{value:'"1x"'},{value:'"2x"'},{value:'"3x"'},{value:'"4x"'},{value:'"6x"'},{value:'"8x"'},{value:'"12x"'},{value:'"16x"'},{value:'"24x"'},{value:'"32x"'}]}},innerPaddingType:{defaultValue:{value:"square"},description:"Type of padding in the dropdown pane.",name:"innerPaddingType",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"stretch"'},{value:'"squish"'}]}},maxPaneWidth:{defaultValue:{value:"270"},description:`Maximal width of the dropdown pane. When set to 'auto',
the pane width is controlled by it's content.`,name:"maxPaneWidth",required:!1,type:{name:'number | "auto"'}},isPaneElevated:{defaultValue:{value:"false"},description:"Should have the dropdown pane box shadow.",name:"isPaneElevated",required:!1,type:{name:"boolean"}},hasPaneArrow:{defaultValue:{value:"false"},description:"Should show arrow tip pointing to the center of trigger element.",name:"hasPaneArrow",required:!1,type:{name:"boolean"}}}}}catch{}export{N as D};
//# sourceMappingURL=Dropdown-BmmuVOH1.js.map
