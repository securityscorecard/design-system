import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{r as x}from"./index-BwDkhjyp.js";import{q as h,A as B}from"./styled-components.browser.esm-Dp0SDG1F.js";import{u as rn,i as mn}from"./index-04esSdTO.js";import{c as dn}from"./index-CVyJwDg7.js";import{_ as N,t as An,j as pn,r as fn,D as L,e as E,d as s,p as I,b as z,n as Cn,C as yn}from"./index-DseqSOhp.js";import"./index-CJ1jFOY0.js";import"./index-D6mk1gl9.js";import"./index-CodEEOgp.js";import{S as bn}from"./index-CajKmcpa.js";import"./index-BwQkA-7b.js";import{a as hn}from"./constants-C4Oh6sKJ.js";import{c as vn,o as gn,g as S,h as P,S as q,p as _n,m as xn,i as En}from"./space.enums-FzolKu9U.js";import{I as In}from"./Inline.enums-BAfT2b1A.js";import{a as Vn,i as V}from"./isNonEmptyArray-MbpxZfxF.js";import{P as wn}from"./Pill-CmUf-Iiu.js";import{b as Bn}from"./isNotEmpty-2CrqG7_E.js";import{I as Sn}from"./Icon-CCnW0-hW.js";import{n as b}from"./noop-BL97hhQA.js";import{P as qn}from"./Padbox-D7p1agbO.js";import{i as w}from"./isNonEmptyString-CjPVs0zm.js";import{i as Dn}from"./isNotNull-Bi0ik2MG.js";import{i as D}from"./useLogger-CeNh0Atc.js";import{t as kn}from"./trim-EFCMhnPq.js";import{b as Fn,_ as g}from"./_isObject-BZZHHNGj.js";import{t as Mn}from"./take-CM7vhqB7.js";var jn=Fn(function(t){return vn(t.length,function(){var l=0,o=arguments[0],c=arguments[arguments.length-1],u=Array.prototype.slice.call(arguments,0);return u[0]=function(){var a=o.apply(this,gn(arguments,[l,c]));return l+=1,a},t.apply(this,u)})}),R=function(){function e(){this._nativeSet=typeof Set=="function"?new Set:null,this._items={}}return e.prototype.add=function(t){return!G(t,!0,this)},e.prototype.has=function(t){return G(t,!1,this)},e}();function G(e,t,l){var o=typeof e,c,u;switch(o){case"string":case"number":return e===0&&1/e===-1/0?l._items["-0"]?!0:(t&&(l._items["-0"]=!0),!1):l._nativeSet!==null?t?(c=l._nativeSet.size,l._nativeSet.add(e),u=l._nativeSet.size,u===c):l._nativeSet.has(e):o in l._items?e in l._items[o]?!0:(t&&(l._items[o][e]=!0),!1):(t&&(l._items[o]={},l._items[o][e]=!0),!1);case"boolean":if(o in l._items){var a=e?1:0;return l._items[o][a]?!0:(t&&(l._items[o][a]=!0),!1)}else return t&&(l._items[o]=e?[!1,!0]:[!0,!1]),!1;case"function":return l._nativeSet!==null?t?(c=l._nativeSet.size,l._nativeSet.add(e),u=l._nativeSet.size,u===c):l._nativeSet.has(e):o in l._items?N(e,l._items[o])?!0:(t&&l._items[o].push(e),!1):(t&&(l._items[o]=[e]),!1);case"undefined":return l._items[o]?!0:(t&&(l._items[o]=!0),!1);case"object":if(e===null)return l._items.null?!0:(t&&(l._items.null=!0),!1);default:return o=Object.prototype.toString.call(e),o in l._items?N(e,l._items[o])?!0:(t&&l._items[o].push(e),!1):(t&&(l._items[o]=[e]),!1)}}function Nn(e,t){return Mn(e<t.length?t.length-e:0,t)}var zn=function(){function e(t,l){this.xf=l,this.pos=0,this.full=!1,this.acc=new Array(t)}return e.prototype["@@transducer/init"]=S.init,e.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},e.prototype["@@transducer/step"]=function(t,l){return this.full&&(t=this.xf["@@transducer/step"](t,this.acc[this.pos])),this.store(l),t},e.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},e}(),Gn=g(function(t,l){return new zn(t,l)}),On=g(P([],Gn,Nn)),Ln=function(){function e(t,l){this.xf=l,this.f=t,this.set=new R}return e.prototype["@@transducer/init"]=S.init,e.prototype["@@transducer/result"]=S.result,e.prototype["@@transducer/step"]=function(t,l){return this.set.add(this.f(l))?this.xf["@@transducer/step"](t,l):t},e}(),Pn=g(function(t,l){return new Ln(t,l)}),Rn=g(P([],Pn,function(e,t){for(var l=new R,o=[],c=0,u,a;c<t.length;)a=t[c],u=e(a),l.add(u)&&o.push(a),c+=1;return o})),Hn=Rn(An),Kn=Bn(Vn,pn),Un=jn(fn),Xn=L(function(e,t,l){return D(l,e)}),$n=L(function(e,t){return Un(Xn(e),t)});function n(){var e="/home/runner/work/design-system/design-system/src/components/forms/MultiValueInput/MultiValueInput.tsx",t="4eb42ccb7ac62db531c15663675699ae47672503",l=window,o="__coverage__",c={path:"/home/runner/work/design-system/design-system/src/components/forms/MultiValueInput/MultiValueInput.tsx",statementMap:{0:{start:{line:15,column:23},end:{line:23,column:4}},1:{start:{line:21,column:6},end:{line:23,column:3}},2:{start:{line:24,column:16},end:{line:31,column:102}},3:{start:{line:29,column:6},end:{line:29,column:214}},4:{start:{line:31,column:6},end:{line:31,column:101}},5:{start:{line:32,column:23},end:{line:35,column:268}},6:{start:{line:36,column:19},end:{line:39,column:463}},7:{start:{line:40,column:20},end:{line:43,column:470}},8:{start:{line:44,column:24},end:{line:182,column:1}},9:{start:{line:64,column:30},end:{line:64,column:45}},10:{start:{line:65,column:38},end:{line:65,column:65}},11:{start:{line:66,column:34},end:{line:66,column:48}},12:{start:{line:67,column:19},end:{line:90,column:3}},13:{start:{line:68,column:20},end:{line:68,column:45}},14:{start:{line:69,column:4},end:{line:71,column:5}},15:{start:{line:70,column:6},end:{line:70,column:13}},16:{start:{line:72,column:29},end:{line:72,column:55}},17:{start:{line:73,column:4},end:{line:75,column:5}},18:{start:{line:74,column:6},end:{line:74,column:13}},19:{start:{line:76,column:35},end:{line:76,column:70}},20:{start:{line:77,column:4},end:{line:88,column:5}},21:{start:{line:78,column:27},end:{line:78,column:102}},22:{start:{line:79,column:24},end:{line:79,column:52}},23:{start:{line:80,column:6},end:{line:80,column:33}},24:{start:{line:81,column:6},end:{line:81,column:42}},25:{start:{line:82,column:6},end:{line:82,column:32}},26:{start:{line:84,column:24},end:{line:84,column:45}},27:{start:{line:85,column:6},end:{line:85,column:27}},28:{start:{line:86,column:6},end:{line:86,column:40}},29:{start:{line:87,column:6},end:{line:87,column:32}},30:{start:{line:89,column:4},end:{line:89,column:22}},31:{start:{line:91,column:22},end:{line:98,column:3}},32:{start:{line:92,column:4},end:{line:97,column:7}},33:{start:{line:93,column:24},end:{line:93,column:106}},34:{start:{line:94,column:6},end:{line:94,column:31}},35:{start:{line:95,column:6},end:{line:95,column:32}},36:{start:{line:96,column:6},end:{line:96,column:23}},37:{start:{line:99,column:2},end:{line:101,column:25}},38:{start:{line:100,column:4},end:{line:100,column:21}},39:{start:{line:102,column:31},end:{line:122,column:3}},40:{start:{line:103,column:4},end:{line:121,column:5}},41:{start:{line:106,column:8},end:{line:106,column:27}},42:{start:{line:107,column:8},end:{line:109,column:9}},43:{start:{line:108,column:10},end:{line:108,column:17}},44:{start:{line:110,column:8},end:{line:112,column:9}},45:{start:{line:111,column:10},end:{line:111,column:35}},46:{start:{line:113,column:8},end:{line:113,column:14}},47:{start:{line:116,column:8},end:{line:118,column:9}},48:{start:{line:117,column:10},end:{line:117,column:24}},49:{start:{line:119,column:8},end:{line:119,column:14}},50:{start:{line:123,column:29},end:{line:131,column:3}},51:{start:{line:124,column:4},end:{line:124,column:23}},52:{start:{line:125,column:24},end:{line:125,column:34}},53:{start:{line:126,column:4},end:{line:130,column:5}},54:{start:{line:127,column:6},end:{line:127,column:28}},55:{start:{line:129,column:6},end:{line:129,column:74}},56:{start:{line:132,column:30},end:{line:135,column:3}},57:{start:{line:133,column:4},end:{line:133,column:21}},58:{start:{line:134,column:4},end:{line:134,column:34}},59:{start:{line:136,column:28},end:{line:144,column:3}},60:{start:{line:137,column:4},end:{line:137,column:23}},61:{start:{line:138,column:4},end:{line:140,column:5}},62:{start:{line:139,column:6},end:{line:139,column:13}},63:{start:{line:141,column:4},end:{line:143,column:5}},64:{start:{line:142,column:6},end:{line:142,column:31}},65:{start:{line:145,column:33},end:{line:150,column:3}},66:{start:{line:146,column:4},end:{line:146,column:23}},67:{start:{line:147,column:4},end:{line:149,column:5}},68:{start:{line:148,column:6},end:{line:148,column:23}},69:{start:{line:151,column:32},end:{line:155,column:3}},70:{start:{line:152,column:4},end:{line:152,column:18}},71:{start:{line:153,column:4},end:{line:153,column:22}},72:{start:{line:154,column:4},end:{line:154,column:23}},73:{start:{line:156,column:34},end:{line:168,column:3}},74:{start:{line:157,column:4},end:{line:167,column:5}},75:{start:{line:160,column:8},end:{line:160,column:27}},76:{start:{line:161,column:8},end:{line:161,column:22}},77:{start:{line:162,column:8},end:{line:162,column:26}},78:{start:{line:163,column:8},end:{line:163,column:27}},79:{start:{line:164,column:8},end:{line:164,column:25}},80:{start:{line:165,column:8},end:{line:165,column:14}},81:{start:{line:169,column:24},end:{line:172,column:3}},82:{start:{line:169,column:35},end:{line:172,column:3}},83:{start:{line:170,column:4},end:{line:170,column:23}},84:{start:{line:171,column:4},end:{line:171,column:21}},85:{start:{line:173,column:2},end:{line:181,column:10}},86:{start:{line:177,column:51},end:{line:177,column:169}},87:{start:{line:178,column:422},end:{line:178,column:444}},88:{start:{line:184,column:0},end:{line:190,column:50}},89:{start:{line:186,column:4},end:{line:186,column:52}},90:{start:{line:188,column:4},end:{line:188,column:2329}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:18,column:138},end:{line:18,column:139}},loc:{start:{line:21,column:6},end:{line:23,column:3}},line:21},1:{name:"(anonymous_1)",decl:{start:{line:27,column:515},end:{line:27,column:516}},loc:{start:{line:29,column:6},end:{line:29,column:214}},line:29},2:{name:"(anonymous_2)",decl:{start:{line:29,column:216},end:{line:29,column:217}},loc:{start:{line:31,column:6},end:{line:31,column:101}},line:31},3:{name:"(anonymous_3)",decl:{start:{line:44,column:24},end:{line:44,column:25}},loc:{start:{line:63,column:6},end:{line:182,column:1}},line:63},4:{name:"(anonymous_4)",decl:{start:{line:67,column:19},end:{line:67,column:20}},loc:{start:{line:67,column:33},end:{line:90,column:3}},line:67},5:{name:"(anonymous_5)",decl:{start:{line:91,column:22},end:{line:91,column:23}},loc:{start:{line:91,column:33},end:{line:98,column:3}},line:91},6:{name:"(anonymous_6)",decl:{start:{line:92,column:14},end:{line:92,column:15}},loc:{start:{line:92,column:30},end:{line:97,column:5}},line:92},7:{name:"(anonymous_7)",decl:{start:{line:99,column:23},end:{line:99,column:24}},loc:{start:{line:99,column:29},end:{line:101,column:3}},line:99},8:{name:"(anonymous_8)",decl:{start:{line:102,column:31},end:{line:102,column:32}},loc:{start:{line:102,column:38},end:{line:122,column:3}},line:102},9:{name:"(anonymous_9)",decl:{start:{line:123,column:29},end:{line:123,column:30}},loc:{start:{line:123,column:36},end:{line:131,column:3}},line:123},10:{name:"(anonymous_10)",decl:{start:{line:132,column:30},end:{line:132,column:31}},loc:{start:{line:132,column:37},end:{line:135,column:3}},line:132},11:{name:"(anonymous_11)",decl:{start:{line:136,column:28},end:{line:136,column:29}},loc:{start:{line:136,column:35},end:{line:144,column:3}},line:136},12:{name:"(anonymous_12)",decl:{start:{line:145,column:33},end:{line:145,column:34}},loc:{start:{line:145,column:40},end:{line:150,column:3}},line:145},13:{name:"(anonymous_13)",decl:{start:{line:151,column:32},end:{line:151,column:33}},loc:{start:{line:151,column:38},end:{line:155,column:3}},line:151},14:{name:"(anonymous_14)",decl:{start:{line:156,column:34},end:{line:156,column:35}},loc:{start:{line:156,column:41},end:{line:168,column:3}},line:156},15:{name:"(anonymous_15)",decl:{start:{line:169,column:24},end:{line:169,column:25}},loc:{start:{line:169,column:35},end:{line:172,column:3}},line:169},16:{name:"(anonymous_16)",decl:{start:{line:169,column:35},end:{line:169,column:36}},loc:{start:{line:169,column:41},end:{line:172,column:3}},line:169},17:{name:"(anonymous_17)",decl:{start:{line:177,column:17},end:{line:177,column:18}},loc:{start:{line:177,column:51},end:{line:177,column:169}},line:177},18:{name:"(anonymous_18)",decl:{start:{line:178,column:415},end:{line:178,column:416}},loc:{start:{line:178,column:422},end:{line:178,column:444}},line:178}},branchMap:{0:{loc:{start:{line:21,column:6},end:{line:23,column:3}},type:"binary-expr",locations:[{start:{line:21,column:6},end:{line:21,column:15}},{start:{line:21,column:19},end:{line:23,column:3}}],line:21},1:{loc:{start:{line:29,column:6},end:{line:29,column:214}},type:"binary-expr",locations:[{start:{line:29,column:6},end:{line:29,column:17}},{start:{line:29,column:21},end:{line:29,column:214}}],line:29},2:{loc:{start:{line:31,column:6},end:{line:31,column:101}},type:"binary-expr",locations:[{start:{line:31,column:6},end:{line:31,column:16}},{start:{line:31,column:20},end:{line:31,column:101}}],line:31},3:{loc:{start:{line:45,column:2},end:{line:45,column:12}},type:"default-arg",locations:[{start:{line:45,column:10},end:{line:45,column:12}}],line:45},4:{loc:{start:{line:46,column:2},end:{line:46,column:19}},type:"default-arg",locations:[{start:{line:46,column:14},end:{line:46,column:19}}],line:46},5:{loc:{start:{line:47,column:2},end:{line:47,column:20}},type:"default-arg",locations:[{start:{line:47,column:15},end:{line:47,column:20}}],line:47},6:{loc:{start:{line:48,column:2},end:{line:48,column:20}},type:"default-arg",locations:[{start:{line:48,column:16},end:{line:48,column:20}}],line:48},7:{loc:{start:{line:49,column:2},end:{line:49,column:19}},type:"default-arg",locations:[{start:{line:49,column:15},end:{line:49,column:19}}],line:49},8:{loc:{start:{line:50,column:2},end:{line:50,column:22}},type:"default-arg",locations:[{start:{line:50,column:18},end:{line:50,column:22}}],line:50},9:{loc:{start:{line:51,column:2},end:{line:51,column:23}},type:"default-arg",locations:[{start:{line:51,column:19},end:{line:51,column:23}}],line:51},10:{loc:{start:{line:52,column:2},end:{line:52,column:22}},type:"default-arg",locations:[{start:{line:52,column:18},end:{line:52,column:22}}],line:52},11:{loc:{start:{line:53,column:2},end:{line:53,column:16}},type:"default-arg",locations:[{start:{line:53,column:12},end:{line:53,column:16}}],line:53},12:{loc:{start:{line:55,column:2},end:{line:55,column:23}},type:"default-arg",locations:[{start:{line:55,column:20},end:{line:55,column:23}}],line:55},13:{loc:{start:{line:59,column:14},end:{line:59,column:36}},type:"default-arg",locations:[{start:{line:59,column:34},end:{line:59,column:36}}],line:59},14:{loc:{start:{line:60,column:2},end:{line:60,column:25}},type:"default-arg",locations:[{start:{line:60,column:23},end:{line:60,column:25}}],line:60},15:{loc:{start:{line:69,column:4},end:{line:71,column:5}},type:"if",locations:[{start:{line:69,column:4},end:{line:71,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:69},16:{loc:{start:{line:73,column:4},end:{line:75,column:5}},type:"if",locations:[{start:{line:73,column:4},end:{line:75,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:73},17:{loc:{start:{line:77,column:4},end:{line:88,column:5}},type:"if",locations:[{start:{line:77,column:4},end:{line:88,column:5}},{start:{line:83,column:11},end:{line:88,column:5}}],line:77},18:{loc:{start:{line:93,column:24},end:{line:93,column:106}},type:"cond-expr",locations:[{start:{line:93,column:48},end:{line:93,column:80}},{start:{line:93,column:83},end:{line:93,column:106}}],line:93},19:{loc:{start:{line:103,column:4},end:{line:121,column:5}},type:"switch",locations:[{start:{line:104,column:6},end:{line:104,column:15}},{start:{line:105,column:6},end:{line:113,column:14}},{start:{line:114,column:6},end:{line:114,column:23}},{start:{line:115,column:6},end:{line:119,column:14}},{start:{line:120,column:6},end:{line:120,column:14}}],line:103},20:{loc:{start:{line:107,column:8},end:{line:109,column:9}},type:"if",locations:[{start:{line:107,column:8},end:{line:109,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:107},21:{loc:{start:{line:110,column:8},end:{line:112,column:9}},type:"if",locations:[{start:{line:110,column:8},end:{line:112,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:110},22:{loc:{start:{line:116,column:8},end:{line:118,column:9}},type:"if",locations:[{start:{line:116,column:8},end:{line:118,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:116},23:{loc:{start:{line:116,column:12},end:{line:116,column:64}},type:"binary-expr",locations:[{start:{line:116,column:12},end:{line:116,column:37}},{start:{line:116,column:41},end:{line:116,column:64}}],line:116},24:{loc:{start:{line:126,column:4},end:{line:130,column:5}},type:"if",locations:[{start:{line:126,column:4},end:{line:130,column:5}},{start:{line:128,column:11},end:{line:130,column:5}}],line:126},25:{loc:{start:{line:129,column:16},end:{line:129,column:55}},type:"binary-expr",locations:[{start:{line:129,column:16},end:{line:129,column:31}},{start:{line:129,column:35},end:{line:129,column:55}}],line:129},26:{loc:{start:{line:138,column:4},end:{line:140,column:5}},type:"if",locations:[{start:{line:138,column:4},end:{line:140,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:138},27:{loc:{start:{line:141,column:4},end:{line:143,column:5}},type:"if",locations:[{start:{line:141,column:4},end:{line:143,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:141},28:{loc:{start:{line:147,column:4},end:{line:149,column:5}},type:"if",locations:[{start:{line:147,column:4},end:{line:149,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:147},29:{loc:{start:{line:157,column:4},end:{line:167,column:5}},type:"switch",locations:[{start:{line:158,column:6},end:{line:158,column:15}},{start:{line:159,column:6},end:{line:165,column:14}},{start:{line:166,column:6},end:{line:166,column:14}}],line:157},30:{loc:{start:{line:177,column:116},end:{line:177,column:159}},type:"cond-expr",locations:[{start:{line:177,column:130},end:{line:177,column:150}},{start:{line:177,column:153},end:{line:177,column:159}}],line:177},31:{loc:{start:{line:178,column:58},end:{line:178,column:83}},type:"binary-expr",locations:[{start:{line:178,column:58},end:{line:178,column:68}},{start:{line:178,column:72},end:{line:178,column:83}}],line:178},32:{loc:{start:{line:178,column:279},end:{line:178,column:322}},type:"cond-expr",locations:[{start:{line:178,column:302},end:{line:178,column:313}},{start:{line:178,column:316},end:{line:178,column:322}}],line:178},33:{loc:{start:{line:180,column:4},end:{line:180,column:281}},type:"binary-expr",locations:[{start:{line:180,column:4},end:{line:180,column:15}},{start:{line:180,column:19},end:{line:180,column:30}},{start:{line:180,column:34},end:{line:180,column:57}},{start:{line:180,column:77},end:{line:180,column:281}}],line:180}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0],9:[0],10:[0],11:[0],12:[0],13:[0],14:[0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0,0,0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0],26:[0,0],27:[0,0],28:[0,0],29:[0,0,0],30:[0,0],31:[0,0],32:[0,0],33:[0,0,0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/forms/MultiValueInput/MultiValueInput.tsx"],names:["$hasValue","noop","placeholder","pattern","id","inputId","className","setValues","onValueAdd","onValuesChange","setInputValue","onValueRemove","newValues","useDeepCompareEffect","e","addValue","removeValue","onInputChange","inputRef","values"],mappings:"AAsUQ;AAtUR;AAQA;AACA;AAUA;AAUA;AACA;AAEA;AACA;AACA;AACA;AACA;AACA;AAKA;AAEA;AAAqC;AAAA;AAAA;AAOhC;AAAEA;AAAiB;AAGsB;AAAQ;AAItD;AAA0B;AAAA;AAAA;AAqBrB;AAAc;AAcd;AAAa;AASlB;AAAiC;AAAA;AAAA;AAgBjC;AAA+B;AAAA;AAAA;AAuB/B;AAAiC;AAAA;AAAA;AAqBjC;AAAyB;AACb;AACE;AACC;AACC;AACDC;AACGA;AACCA;AACDA;AACNA;AACVC;AACkB;AAClBC;AACAC;AACAC;AACgC;AACX;AACrBC;AAEoB;AACpB;AACA;AACA;AAEA;AACE;AACA;AACE;AAAA;AAGF;AAEA;AACE;AAAA;AAGF;AAEA;AACE;AAKA;AACAC;AACAC;AACAC;AAAwB;AAExB;AACAF;AACAC;AACAC;AAAwB;AAE1BC;AAAgB;AAGlB;AACEH;AACE;AAGAI;AACAF;AAEA;AAAOG;AACR;AAGHC;AACEN;AAAe;AAGjB;AACE;AAAa;AACN;AAEHO;AACA;AACE;AAAA;AAEF;AACEC;AAA6C;AAE/C;AAAA;AACG;AAEH;AACEC;AAAY;AAEd;AAAA;AACF;AACF;AAGF;AACEF;AACA;AAEA;AACEC;AAAoB;AAEpBA;AAAkE;AACpE;AAGF;AACEE;AACAP;AAA4B;AAG9B;AACEI;AACA;AACE;AAAA;AAEF;AACEC;AAA6C;AAC/C;AAGF;AACED;AACA;AACEI;AAAe;AACjB;AAGF;AACEX;AACAI;AACAF;AAAiB;AAEnB;AAGE;AAAa;AACN;AAEHK;AACAP;AACAI;AACAF;AACAS;AACA;AAAA;AACF;AACF;AAGF;AACEF;AACAE;AAAe;AAGjB;AAUM;AAGS;AAAY;AAElBC;AAOA;AAoBD;AACF;AASE;AAKV;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4eb42ccb7ac62db531c15663675699ae47672503"},u=l[o]||(l[o]={});(!u[e]||u[e].hash!==t)&&(u[e]=c);var a=u[e];return n=function(){return a},a}n();const H=(n().s[0]++,h(qn).withConfig({displayName:"MultiValueInput__ValueContainer",componentId:"sc-vz7dlm-0"})(["display:flex;flex-wrap:wrap;gap:",";padding-left:",";overflow:hidden;flex:1 1 0%;",";"],E("xs"),E(q.md),({$hasValue:e,theme:t})=>(n().f[0]++,n().s[1]++,n().b[0][0]++,e&&(n().b[0][1]++,B(["padding-left:",";"],E(q.xs,{theme:t})))))),Tn=(n().s[2]++,h.div.withConfig({displayName:"MultiValueInput__Control",componentId:"sc-vz7dlm-1"})(["display:flex;flex-direction:column;justify-content:center;min-height:",";background:",";border-radius:var(--sscds-radii-input);box-shadow:inset 0 0 0 1px ",";cursor:text;&:hover{box-shadow:inset 0px 0px 0px 1px var(--sscds-color-border-input-hover);background:var(--sscds-color-background-input-hover);}&:focus-within,&.focus-within{outline:0;box-shadow:inset 0 0 0 2px ",";}",";",";"],s("fieldHeight"),s("bgColor"),s("borderColor"),s("focusBorderColor"),({$isDisabled:e})=>(n().f[1]++,n().s[3]++,n().b[1][0]++,e&&(n().b[1][1]++,B(["&,&:hover{background:",";box-shadow:inset 0 0 0 1px ",";cursor:not-allowed;}& ","{opacity:0.5;}"],s("disabledBgColor"),s("disabledBorderColor"),H))),({$isInvalid:e})=>(n().f[2]++,n().s[4]++,n().b[2][0]++,e&&(n().b[2][1]++,B(["&&{box-shadow:inset 0 0 0 2px ",";}"],s("invalidBorderColor")))))),Qn=(n().s[5]++,h.div.withConfig({displayName:"MultiValueInput__InputContainer",componentId:"sc-vz7dlm-2"})(["display:inline-grid;grid-area:1 / 1 / 2 / 3;grid-template-columns:0 min-content;line-height:var(--sscds-font-lineheight-body-md);flex:1 1 auto;&::after{content:attr(data-value) ' ';visibility:hidden;white-space:pre;grid-area:1 / 2 / auto / auto;min-width:2px;}"])),Yn=(n().s[6]++,h.input.withConfig({displayName:"MultiValueInput__InputField",componentId:"sc-vz7dlm-3"})(["grid-area:1 / 2 / auto / auto;background:transparent;border:0 none;color:",";font-family:var(--sscds-font-family-body);font-size:var(--sscds-font-size-body-md);line-height:var(--sscds-font-lineheight-body-md);outline:none;min-width:2px;width:100%;&::-ms-clear{display:none;}::placeholder,::-webkit-input-placeholder{color:",";}:-ms-input-placeholder{color:",";}"],s("color"),s("placeholderColor"),s("placeholderColor"))),Jn=(n().s[7]++,h.button.withConfig({displayName:"MultiValueInput__ClearButton",componentId:"sc-vz7dlm-4"})(["display:flex;justify-content:center;align-items:center;color:",";background:transparent none;border:0 none;cursor:pointer;font-size:var(--sscds-font-size-elementlabel-md);padding:",";height:",";margin:",";outline-offset:0;border-top-right-radius:",";border-bottom-right-radius:",";&:hover{color:",";}"],s("indicatorColor"),I(0,18),I(34),I(1,0),z("default"),z("default"),s("hoverIndicatorColor")));n().s[8]++;const O=({value:e=(n().b[3][0]++,[]),isInvalid:t=(n().b[4][0]++,!1),isDisabled:l=(n().b[5][0]++,!1),isClearable:o=(n().b[6][0]++,!0),onValueAdd:c=(n().b[7][0]++,b),onValueRemove:u=(n().b[8][0]++,b),onValuesChange:a=(n().b[9][0]++,b),onInputChange:K=(n().b[10][0]++,b),onPaste:U=(n().b[11][0]++,b),placeholder:k,valuesDelimiter:F=(n().b[12][0]++,";"),pattern:X,id:$,inputId:T,inputValue:Q=(n().b[13][0]++,""),maxPillLabelLength:Y=(n().b[14][0]++,16),className:J,...W})=>{n().f[3]++;const[m,A]=(n().s[9]++,x.useState(e)),[C,M]=(n().s[10]++,x.useState(Q)),[p,Z]=(n().s[11]++,x.useState(null));n().s[12]++;const v=i=>{n().f[4]++;const r=(n().s[13]++,p==null?void 0:p.checkValidity());if(n().s[14]++,r)n().b[15][1]++;else{n().b[15][0]++,n().s[15]++;return}const y=(n().s[16]++,D(i,m));if(n().s[17]++,y){n().b[16][0]++,n().s[18]++;return}else n().b[16][1]++;const sn=(n().s[19]++,D(F,i));if(n().s[20]++,sn){n().b[17][0]++;const f=(n().s[21]++,_n(yn(F),xn(kn),Cn(w))(i)),_=(n().s[22]++,[...m,...f]);n().s[23]++,A(Hn(_)),n().s[24]++,c(f,_),n().s[25]++,a(_)}else{n().b[17][1]++;const f=(n().s[26]++,[...m,i]);n().s[27]++,A(f),n().s[28]++,c([i],f),n().s[29]++,a(f)}n().s[30]++,M("")};n().s[31]++;const j=i=>{n().f[5]++,n().s[32]++,A(r=>{n().f[6]++;const y=(n().s[33]++,En(i)?(n().b[18][0]++,$n([i],r)):(n().b[18][1]++,On(1,r)));return n().s[34]++,u(y),n().s[35]++,a(y),n().s[36]++,y})};n().s[37]++,rn(()=>{n().f[7]++,n().s[38]++,A(e)},[e,A]),n().s[39]++;const nn=i=>{switch(n().f[8]++,n().s[40]++,i.key){case";":n().b[19][0]++;case"Enter":if(n().b[19][1]++,n().s[41]++,i.preventDefault(),n().s[42]++,t){n().b[20][0]++,n().s[43]++;return}else n().b[20][1]++;n().s[44]++,w(C)?(n().b[21][0]++,n().s[45]++,v(i.target.value)):n().b[21][1]++,n().s[46]++;break;case"Backspace":n().b[19][2]++;case"Delete":n().b[19][3]++,n().s[47]++,n().b[23][0]++,mn(C)&&(n().b[23][1]++,V(m))?(n().b[22][0]++,n().s[48]++,j()):n().b[22][1]++,n().s[49]++;break;default:n().b[19][4]++}};n().s[50]++;const en=i=>{n().f[9]++,n().s[51]++,i.preventDefault();const r=(n().s[52]++,U(i));n().s[53]++,typeof r=="string"?(n().b[24][0]++,n().s[54]++,v(r)):(n().b[24][1]++,n().s[55]++,v((n().b[25][0]++,i.clipboardData||(n().b[25][1]++,window.clipboardData)).getData("text")))};n().s[56]++;const ln=i=>{n().f[10]++,n().s[57]++,K(i),n().s[58]++,M(i.target.value)};n().s[59]++;const tn=i=>{if(n().f[11]++,n().s[60]++,i.preventDefault(),n().s[61]++,t){n().b[26][0]++,n().s[62]++;return}else n().b[26][1]++;n().s[63]++,w(C)?(n().b[27][0]++,n().s[64]++,v(i.target.value)):n().b[27][1]++};n().s[65]++;const on=i=>{n().f[12]++,n().s[66]++,i.preventDefault(),n().s[67]++,Dn(p)?(n().b[28][0]++,n().s[68]++,p.focus()):n().b[28][1]++};n().s[69]++;const un=()=>{n().f[13]++,n().s[70]++,A([]),n().s[71]++,u([]),n().s[72]++,a([])};n().s[73]++;const an=i=>{switch(n().f[14]++,n().s[74]++,i.key){case" ":n().b[29][0]++;case"Enter":n().b[29][1]++,n().s[75]++,i.preventDefault(),n().s[76]++,A([]),n().s[77]++,u([]),n().s[78]++,a([]),n().s[79]++,p.focus(),n().s[80]++;break;default:n().b[29][2]++}};n().s[81]++;const cn=i=>(n().f[15]++,n().s[82]++,()=>{n().f[16]++,n().s[83]++,j(i),n().s[84]++,p.focus()});return n().s[85]++,d.jsx(Tn,{$isDisabled:l,$isInvalid:t,className:dn(hn,J),"data-testid":"multivalueinputContainer",id:$,onClick:on,children:d.jsxs(In,{align:"center",justify:"space-between",children:[d.jsxs(H,{$hasValue:V(m),paddingSize:q.xs,style:{overflow:"hidden"},children:[m.map((i,r)=>(n().f[17]++,n().s[86]++,d.jsx(wn,{label:i,maxLabelLength:Y,onRemove:l?(n().b[30][1]++,void 0):(n().b[30][0]++,cn(r))},i))),d.jsx(Qn,{"data-value":(n().b[31][0]++,C||(n().b[31][1]++,k)),children:d.jsx(Yn,{...W,ref:Z,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",disabled:l,id:T,pattern:X,placeholder:Kn(m)?(n().b[32][0]++,k):(n().b[32][1]++,void 0),spellCheck:"false",type:"text",value:C,onBlur:tn,onChange:i=>(n().f[18]++,n().s[87]++,ln(i)),onKeyDown:nn,onPaste:en})})]}),(n().b[33][0]++,o&&(n().b[33][1]++,!l)&&(n().b[33][2]++,V(m))&&(n().b[33][3]++,d.jsx(Jn,{"aria-label":"Clear all values",type:"reset",onClick:un,onKeyDown:an,children:d.jsx(Sn,{name:bn.times})})))]})})};n().s[88]++;try{n().s[89]++,O.displayName="MultiValueInput",n().s[90]++,O.__docgenInfo={description:"",displayName:"MultiValueInput",props:{value:{defaultValue:{value:"[]"},description:"",name:"value",required:!1,type:{name:"string[]"}},isInvalid:{defaultValue:{value:"false"},description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isClearable:{defaultValue:{value:"true"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},valuesDelimiter:{defaultValue:{value:";"},description:"",name:"valuesDelimiter",required:!1,type:{name:"string"}},maxPillLabelLength:{defaultValue:{value:"16"},description:"",name:"maxPillLabelLength",required:!1,type:{name:"number"}},onValueAdd:{defaultValue:null,description:"",name:"onValueAdd",required:!1,type:{name:"(addedValues: string[], nextValues: string[]) => void"}},onValueRemove:{defaultValue:null,description:"",name:"onValueRemove",required:!1,type:{name:"(nextValues: string[]) => void"}},onValuesChange:{defaultValue:null,description:"",name:"onValuesChange",required:!1,type:{name:"(nextValues: string[]) => void"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"(event: ClipboardEvent<HTMLInputElement>) => string | void"}}}}}catch{}export{O as M,Kn as i};
//# sourceMappingURL=MultiValueInput-CGV3sq8p.js.map
