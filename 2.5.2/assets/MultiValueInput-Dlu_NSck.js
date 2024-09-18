import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{r as I}from"./index-CTjT7uj6.js";import{s as h,A as _}from"./styled-components.browser.esm-xOyuSOjK.js";import{u as rn,i as mn}from"./index-DuIFLBUG.js";import{c as dn}from"./index-C7IrpltL.js";import{r as An,m as fn,a3 as pn,G as O,_ as E,R as D,U as P,X as Cn,q as yn,F as bn,a4 as R,t as s,x as F,g as V,S as M,f as B,h as hn,p as gn,E as vn,w as _n,a7 as En,v as xn}from"./index-DT7C7tog.js";import"./index-DR5XHNKF.js";import"./index-CECIl5yl.js";import"./index-DCTvgOp1.js";import{S as In}from"./index-uyLpYamY.js";import"./index-D3MmMaIe.js";import{a as Vn,i as w}from"./isNonEmptyArray-C7jxCePI.js";import{P as Bn}from"./Pill-DnpINHG-.js";import{b as wn}from"./isNotEmpty-DtQp8gvm.js";import{I as Sn}from"./Icon-B9Y_mYIL.js";import{n as b}from"./noop-XW1TVrX5.js";import{i as S}from"./isNonEmptyString-DdXKNJGj.js";import{i as Dn}from"./isNotNull-lH5ks6fm.js";import{i as q}from"./useLogger-BRbW6gx4.js";import{t as Fn}from"./trim-CESW8YKz.js";import{t as Mn}from"./take--bNN_mdr.js";import{I as qn}from"./Inline.enums-DB1XHHNB.js";import{P as Gn}from"./Padbox-DcClumXL.js";var jn=An(function(t){return fn(t.length,function(){var l=0,o=arguments[0],c=arguments[arguments.length-1],u=Array.prototype.slice.call(arguments,0);return u[0]=function(){var a=o.apply(this,pn(arguments,[l,c]));return l+=1,a},t.apply(this,u)})}),H=function(){function e(){this._nativeSet=typeof Set=="function"?new Set:null,this._items={}}return e.prototype.add=function(t){return!L(t,!0,this)},e.prototype.has=function(t){return L(t,!1,this)},e}();function L(e,t,l){var o=typeof e,c,u;switch(o){case"string":case"number":return e===0&&1/e===-1/0?l._items["-0"]?!0:(t&&(l._items["-0"]=!0),!1):l._nativeSet!==null?t?(c=l._nativeSet.size,l._nativeSet.add(e),u=l._nativeSet.size,u===c):l._nativeSet.has(e):o in l._items?e in l._items[o]?!0:(t&&(l._items[o][e]=!0),!1):(t&&(l._items[o]={},l._items[o][e]=!0),!1);case"boolean":if(o in l._items){var a=e?1:0;return l._items[o][a]?!0:(t&&(l._items[o][a]=!0),!1)}else return t&&(l._items[o]=e?[!1,!0]:[!0,!1]),!1;case"function":return l._nativeSet!==null?t?(c=l._nativeSet.size,l._nativeSet.add(e),u=l._nativeSet.size,u===c):l._nativeSet.has(e):o in l._items?O(e,l._items[o])?!0:(t&&l._items[o].push(e),!1):(t&&(l._items[o]=[e]),!1);case"undefined":return l._items[o]?!0:(t&&(l._items[o]=!0),!1);case"object":if(e===null)return l._items.null?!0:(t&&(l._items.null=!0),!1);default:return o=Object.prototype.toString.call(e),o in l._items?O(e,l._items[o])?!0:(t&&l._items[o].push(e),!1):(t&&(l._items[o]=[e]),!1)}}function kn(e,t){return Mn(e<t.length?t.length-e:0,t)}var Nn=function(){function e(t,l){this.xf=l,this.pos=0,this.full=!1,this.acc=new Array(t)}return e.prototype["@@transducer/init"]=D.init,e.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},e.prototype["@@transducer/step"]=function(t,l){return this.full&&(t=this.xf["@@transducer/step"](t,this.acc[this.pos])),this.store(l),t},e.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},e}(),zn=E(function(t,l){return new Nn(t,l)}),On=E(P([],zn,kn)),Ln=function(){function e(t,l){this.xf=l,this.f=t,this.set=new H}return e.prototype["@@transducer/init"]=D.init,e.prototype["@@transducer/result"]=D.result,e.prototype["@@transducer/step"]=function(t,l){return this.set.add(this.f(l))?this.xf["@@transducer/step"](t,l):t},e}(),Pn=E(function(t,l){return new Ln(t,l)}),Rn=E(P([],Pn,function(e,t){for(var l=new H,o=[],c=0,u,a;c<t.length;)a=t[c],u=e(a),l.add(u)&&o.push(a),c+=1;return o})),Hn=Rn(Cn),Kn=wn(Vn,yn),Un=jn(bn),Xn=R(function(e,t,l){return q(l,e)}),Tn=R(function(e,t){return Un(Xn(e),t)});function n(){var e="/home/runner/work/design-system/design-system/src/components/forms/MultiValueInput/MultiValueInput.tsx",t="db15e92cfaadd2cd80cc67cd38fb66adfb8358ce",l=window,o="__coverage__",c={path:"/home/runner/work/design-system/design-system/src/components/forms/MultiValueInput/MultiValueInput.tsx",statementMap:{0:{start:{line:15,column:23},end:{line:15,column:125}},1:{start:{line:15,column:41},end:{line:15,column:125}},2:{start:{line:16,column:16},end:{line:23,column:154}},3:{start:{line:21,column:6},end:{line:21,column:138}},4:{start:{line:23,column:6},end:{line:23,column:153}},5:{start:{line:24,column:23},end:{line:32,column:4}},6:{start:{line:30,column:6},end:{line:32,column:3}},7:{start:{line:33,column:23},end:{line:36,column:268}},8:{start:{line:37,column:19},end:{line:40,column:306}},9:{start:{line:41,column:20},end:{line:44,column:470}},10:{start:{line:45,column:24},end:{line:183,column:1}},11:{start:{line:65,column:30},end:{line:65,column:45}},12:{start:{line:66,column:38},end:{line:66,column:65}},13:{start:{line:67,column:34},end:{line:67,column:48}},14:{start:{line:68,column:19},end:{line:91,column:3}},15:{start:{line:69,column:20},end:{line:69,column:45}},16:{start:{line:70,column:4},end:{line:72,column:5}},17:{start:{line:71,column:6},end:{line:71,column:13}},18:{start:{line:73,column:29},end:{line:73,column:55}},19:{start:{line:74,column:4},end:{line:76,column:5}},20:{start:{line:75,column:6},end:{line:75,column:13}},21:{start:{line:77,column:35},end:{line:77,column:70}},22:{start:{line:78,column:4},end:{line:89,column:5}},23:{start:{line:79,column:27},end:{line:79,column:102}},24:{start:{line:80,column:24},end:{line:80,column:52}},25:{start:{line:81,column:6},end:{line:81,column:33}},26:{start:{line:82,column:6},end:{line:82,column:42}},27:{start:{line:83,column:6},end:{line:83,column:32}},28:{start:{line:85,column:24},end:{line:85,column:45}},29:{start:{line:86,column:6},end:{line:86,column:27}},30:{start:{line:87,column:6},end:{line:87,column:40}},31:{start:{line:88,column:6},end:{line:88,column:32}},32:{start:{line:90,column:4},end:{line:90,column:22}},33:{start:{line:92,column:22},end:{line:99,column:3}},34:{start:{line:93,column:4},end:{line:98,column:7}},35:{start:{line:94,column:24},end:{line:94,column:106}},36:{start:{line:95,column:6},end:{line:95,column:31}},37:{start:{line:96,column:6},end:{line:96,column:32}},38:{start:{line:97,column:6},end:{line:97,column:23}},39:{start:{line:100,column:2},end:{line:102,column:25}},40:{start:{line:101,column:4},end:{line:101,column:21}},41:{start:{line:103,column:31},end:{line:123,column:3}},42:{start:{line:104,column:4},end:{line:122,column:5}},43:{start:{line:107,column:8},end:{line:107,column:27}},44:{start:{line:108,column:8},end:{line:110,column:9}},45:{start:{line:109,column:10},end:{line:109,column:17}},46:{start:{line:111,column:8},end:{line:113,column:9}},47:{start:{line:112,column:10},end:{line:112,column:35}},48:{start:{line:114,column:8},end:{line:114,column:14}},49:{start:{line:117,column:8},end:{line:119,column:9}},50:{start:{line:118,column:10},end:{line:118,column:24}},51:{start:{line:120,column:8},end:{line:120,column:14}},52:{start:{line:124,column:29},end:{line:132,column:3}},53:{start:{line:125,column:4},end:{line:125,column:23}},54:{start:{line:126,column:24},end:{line:126,column:34}},55:{start:{line:127,column:4},end:{line:131,column:5}},56:{start:{line:128,column:6},end:{line:128,column:28}},57:{start:{line:130,column:6},end:{line:130,column:74}},58:{start:{line:133,column:30},end:{line:136,column:3}},59:{start:{line:134,column:4},end:{line:134,column:21}},60:{start:{line:135,column:4},end:{line:135,column:34}},61:{start:{line:137,column:28},end:{line:145,column:3}},62:{start:{line:138,column:4},end:{line:138,column:23}},63:{start:{line:139,column:4},end:{line:141,column:5}},64:{start:{line:140,column:6},end:{line:140,column:13}},65:{start:{line:142,column:4},end:{line:144,column:5}},66:{start:{line:143,column:6},end:{line:143,column:31}},67:{start:{line:146,column:33},end:{line:151,column:3}},68:{start:{line:147,column:4},end:{line:147,column:23}},69:{start:{line:148,column:4},end:{line:150,column:5}},70:{start:{line:149,column:6},end:{line:149,column:23}},71:{start:{line:152,column:32},end:{line:156,column:3}},72:{start:{line:153,column:4},end:{line:153,column:18}},73:{start:{line:154,column:4},end:{line:154,column:22}},74:{start:{line:155,column:4},end:{line:155,column:23}},75:{start:{line:157,column:34},end:{line:169,column:3}},76:{start:{line:158,column:4},end:{line:168,column:5}},77:{start:{line:161,column:8},end:{line:161,column:27}},78:{start:{line:162,column:8},end:{line:162,column:22}},79:{start:{line:163,column:8},end:{line:163,column:26}},80:{start:{line:164,column:8},end:{line:164,column:27}},81:{start:{line:165,column:8},end:{line:165,column:25}},82:{start:{line:166,column:8},end:{line:166,column:14}},83:{start:{line:170,column:24},end:{line:173,column:3}},84:{start:{line:170,column:35},end:{line:173,column:3}},85:{start:{line:171,column:4},end:{line:171,column:23}},86:{start:{line:172,column:4},end:{line:172,column:21}},87:{start:{line:174,column:2},end:{line:182,column:10}},88:{start:{line:178,column:51},end:{line:178,column:169}},89:{start:{line:179,column:422},end:{line:179,column:444}},90:{start:{line:185,column:0},end:{line:191,column:50}},91:{start:{line:187,column:4},end:{line:187,column:52}},92:{start:{line:189,column:4},end:{line:189,column:2329}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:15,column:23},end:{line:15,column:24}},loc:{start:{line:15,column:41},end:{line:15,column:125}},line:15},1:{name:"(anonymous_1)",decl:{start:{line:19,column:411},end:{line:19,column:412}},loc:{start:{line:21,column:6},end:{line:21,column:138}},line:21},2:{name:"(anonymous_2)",decl:{start:{line:21,column:140},end:{line:21,column:141}},loc:{start:{line:23,column:6},end:{line:23,column:153}},line:23},3:{name:"(anonymous_3)",decl:{start:{line:27,column:138},end:{line:27,column:139}},loc:{start:{line:30,column:6},end:{line:32,column:3}},line:30},4:{name:"(anonymous_4)",decl:{start:{line:45,column:24},end:{line:45,column:25}},loc:{start:{line:64,column:6},end:{line:183,column:1}},line:64},5:{name:"(anonymous_5)",decl:{start:{line:68,column:19},end:{line:68,column:20}},loc:{start:{line:68,column:33},end:{line:91,column:3}},line:68},6:{name:"(anonymous_6)",decl:{start:{line:92,column:22},end:{line:92,column:23}},loc:{start:{line:92,column:33},end:{line:99,column:3}},line:92},7:{name:"(anonymous_7)",decl:{start:{line:93,column:14},end:{line:93,column:15}},loc:{start:{line:93,column:30},end:{line:98,column:5}},line:93},8:{name:"(anonymous_8)",decl:{start:{line:100,column:23},end:{line:100,column:24}},loc:{start:{line:100,column:29},end:{line:102,column:3}},line:100},9:{name:"(anonymous_9)",decl:{start:{line:103,column:31},end:{line:103,column:32}},loc:{start:{line:103,column:38},end:{line:123,column:3}},line:103},10:{name:"(anonymous_10)",decl:{start:{line:124,column:29},end:{line:124,column:30}},loc:{start:{line:124,column:36},end:{line:132,column:3}},line:124},11:{name:"(anonymous_11)",decl:{start:{line:133,column:30},end:{line:133,column:31}},loc:{start:{line:133,column:37},end:{line:136,column:3}},line:133},12:{name:"(anonymous_12)",decl:{start:{line:137,column:28},end:{line:137,column:29}},loc:{start:{line:137,column:35},end:{line:145,column:3}},line:137},13:{name:"(anonymous_13)",decl:{start:{line:146,column:33},end:{line:146,column:34}},loc:{start:{line:146,column:40},end:{line:151,column:3}},line:146},14:{name:"(anonymous_14)",decl:{start:{line:152,column:32},end:{line:152,column:33}},loc:{start:{line:152,column:38},end:{line:156,column:3}},line:152},15:{name:"(anonymous_15)",decl:{start:{line:157,column:34},end:{line:157,column:35}},loc:{start:{line:157,column:41},end:{line:169,column:3}},line:157},16:{name:"(anonymous_16)",decl:{start:{line:170,column:24},end:{line:170,column:25}},loc:{start:{line:170,column:35},end:{line:173,column:3}},line:170},17:{name:"(anonymous_17)",decl:{start:{line:170,column:35},end:{line:170,column:36}},loc:{start:{line:170,column:41},end:{line:173,column:3}},line:170},18:{name:"(anonymous_18)",decl:{start:{line:178,column:17},end:{line:178,column:18}},loc:{start:{line:178,column:51},end:{line:178,column:169}},line:178},19:{name:"(anonymous_19)",decl:{start:{line:179,column:415},end:{line:179,column:416}},loc:{start:{line:179,column:422},end:{line:179,column:444}},line:179}},branchMap:{0:{loc:{start:{line:21,column:6},end:{line:21,column:138}},type:"binary-expr",locations:[{start:{line:21,column:6},end:{line:21,column:17}},{start:{line:21,column:21},end:{line:21,column:138}}],line:21},1:{loc:{start:{line:23,column:6},end:{line:23,column:153}},type:"binary-expr",locations:[{start:{line:23,column:6},end:{line:23,column:16}},{start:{line:23,column:20},end:{line:23,column:153}}],line:23},2:{loc:{start:{line:30,column:6},end:{line:32,column:3}},type:"binary-expr",locations:[{start:{line:30,column:6},end:{line:30,column:15}},{start:{line:30,column:19},end:{line:32,column:3}}],line:30},3:{loc:{start:{line:46,column:2},end:{line:46,column:12}},type:"default-arg",locations:[{start:{line:46,column:10},end:{line:46,column:12}}],line:46},4:{loc:{start:{line:47,column:2},end:{line:47,column:19}},type:"default-arg",locations:[{start:{line:47,column:14},end:{line:47,column:19}}],line:47},5:{loc:{start:{line:48,column:2},end:{line:48,column:20}},type:"default-arg",locations:[{start:{line:48,column:15},end:{line:48,column:20}}],line:48},6:{loc:{start:{line:49,column:2},end:{line:49,column:20}},type:"default-arg",locations:[{start:{line:49,column:16},end:{line:49,column:20}}],line:49},7:{loc:{start:{line:50,column:2},end:{line:50,column:19}},type:"default-arg",locations:[{start:{line:50,column:15},end:{line:50,column:19}}],line:50},8:{loc:{start:{line:51,column:2},end:{line:51,column:22}},type:"default-arg",locations:[{start:{line:51,column:18},end:{line:51,column:22}}],line:51},9:{loc:{start:{line:52,column:2},end:{line:52,column:23}},type:"default-arg",locations:[{start:{line:52,column:19},end:{line:52,column:23}}],line:52},10:{loc:{start:{line:53,column:2},end:{line:53,column:22}},type:"default-arg",locations:[{start:{line:53,column:18},end:{line:53,column:22}}],line:53},11:{loc:{start:{line:54,column:2},end:{line:54,column:16}},type:"default-arg",locations:[{start:{line:54,column:12},end:{line:54,column:16}}],line:54},12:{loc:{start:{line:56,column:2},end:{line:56,column:23}},type:"default-arg",locations:[{start:{line:56,column:20},end:{line:56,column:23}}],line:56},13:{loc:{start:{line:60,column:14},end:{line:60,column:36}},type:"default-arg",locations:[{start:{line:60,column:34},end:{line:60,column:36}}],line:60},14:{loc:{start:{line:61,column:2},end:{line:61,column:25}},type:"default-arg",locations:[{start:{line:61,column:23},end:{line:61,column:25}}],line:61},15:{loc:{start:{line:70,column:4},end:{line:72,column:5}},type:"if",locations:[{start:{line:70,column:4},end:{line:72,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:70},16:{loc:{start:{line:74,column:4},end:{line:76,column:5}},type:"if",locations:[{start:{line:74,column:4},end:{line:76,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:74},17:{loc:{start:{line:78,column:4},end:{line:89,column:5}},type:"if",locations:[{start:{line:78,column:4},end:{line:89,column:5}},{start:{line:84,column:11},end:{line:89,column:5}}],line:78},18:{loc:{start:{line:94,column:24},end:{line:94,column:106}},type:"cond-expr",locations:[{start:{line:94,column:48},end:{line:94,column:80}},{start:{line:94,column:83},end:{line:94,column:106}}],line:94},19:{loc:{start:{line:104,column:4},end:{line:122,column:5}},type:"switch",locations:[{start:{line:105,column:6},end:{line:105,column:15}},{start:{line:106,column:6},end:{line:114,column:14}},{start:{line:115,column:6},end:{line:115,column:23}},{start:{line:116,column:6},end:{line:120,column:14}},{start:{line:121,column:6},end:{line:121,column:14}}],line:104},20:{loc:{start:{line:108,column:8},end:{line:110,column:9}},type:"if",locations:[{start:{line:108,column:8},end:{line:110,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:108},21:{loc:{start:{line:111,column:8},end:{line:113,column:9}},type:"if",locations:[{start:{line:111,column:8},end:{line:113,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:111},22:{loc:{start:{line:117,column:8},end:{line:119,column:9}},type:"if",locations:[{start:{line:117,column:8},end:{line:119,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:117},23:{loc:{start:{line:117,column:12},end:{line:117,column:64}},type:"binary-expr",locations:[{start:{line:117,column:12},end:{line:117,column:37}},{start:{line:117,column:41},end:{line:117,column:64}}],line:117},24:{loc:{start:{line:127,column:4},end:{line:131,column:5}},type:"if",locations:[{start:{line:127,column:4},end:{line:131,column:5}},{start:{line:129,column:11},end:{line:131,column:5}}],line:127},25:{loc:{start:{line:130,column:16},end:{line:130,column:55}},type:"binary-expr",locations:[{start:{line:130,column:16},end:{line:130,column:31}},{start:{line:130,column:35},end:{line:130,column:55}}],line:130},26:{loc:{start:{line:139,column:4},end:{line:141,column:5}},type:"if",locations:[{start:{line:139,column:4},end:{line:141,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:139},27:{loc:{start:{line:142,column:4},end:{line:144,column:5}},type:"if",locations:[{start:{line:142,column:4},end:{line:144,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:142},28:{loc:{start:{line:148,column:4},end:{line:150,column:5}},type:"if",locations:[{start:{line:148,column:4},end:{line:150,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:148},29:{loc:{start:{line:158,column:4},end:{line:168,column:5}},type:"switch",locations:[{start:{line:159,column:6},end:{line:159,column:15}},{start:{line:160,column:6},end:{line:166,column:14}},{start:{line:167,column:6},end:{line:167,column:14}}],line:158},30:{loc:{start:{line:178,column:116},end:{line:178,column:159}},type:"cond-expr",locations:[{start:{line:178,column:130},end:{line:178,column:150}},{start:{line:178,column:153},end:{line:178,column:159}}],line:178},31:{loc:{start:{line:179,column:58},end:{line:179,column:83}},type:"binary-expr",locations:[{start:{line:179,column:58},end:{line:179,column:68}},{start:{line:179,column:72},end:{line:179,column:83}}],line:179},32:{loc:{start:{line:179,column:279},end:{line:179,column:322}},type:"cond-expr",locations:[{start:{line:179,column:302},end:{line:179,column:313}},{start:{line:179,column:316},end:{line:179,column:322}}],line:179},33:{loc:{start:{line:181,column:4},end:{line:181,column:281}},type:"binary-expr",locations:[{start:{line:181,column:4},end:{line:181,column:15}},{start:{line:181,column:19},end:{line:181,column:30}},{start:{line:181,column:34},end:{line:181,column:57}},{start:{line:181,column:77},end:{line:181,column:281}}],line:181}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0,91:0,92:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0],9:[0],10:[0],11:[0],12:[0],13:[0],14:[0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0,0,0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0],26:[0,0],27:[0,0],28:[0,0],29:[0,0,0],30:[0,0],31:[0,0],32:[0,0],33:[0,0,0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/forms/MultiValueInput/MultiValueInput.tsx"],names:["$hasValue","noop","placeholder","pattern","id","inputId","className","setValues","onValueAdd","onValuesChange","setInputValue","onValueRemove","newValues","useDeepCompareEffect","e","addValue","removeValue","onInputChange","inputRef","values"],mappings:"AAyTQ;AAzTR;AACA;AACA;AAUA;AAUA;AACA;AAEA;AACA;AACA;AACA;AACA;AACA;AAKA;AAEA;AAIA;AAA0B;AAAA;AAAA;AAgBrB;AAAc;AAOd;AAAa;AAUlB;AAAqC;AAAA;AAAA;AAOhC;AAAEA;AAAiB;AAGsB;AAAQ;AAItD;AAAiC;AAAA;AAAA;AAgBjC;AAA+B;AAAA;AAAA;AAgB/B;AAAiC;AAAA;AAAA;AAqBjC;AAAyB;AACb;AACE;AACC;AACC;AACDC;AACGA;AACCA;AACDA;AACNA;AACVC;AACkB;AAClBC;AACAC;AACAC;AACgC;AACX;AACrBC;AAEoB;AACpB;AACA;AACA;AAEA;AACE;AACA;AACE;AAAA;AAGF;AAEA;AACE;AAAA;AAGF;AAEA;AACE;AAKA;AACAC;AACAC;AACAC;AAAwB;AAExB;AACAF;AACAC;AACAC;AAAwB;AAE1BC;AAAgB;AAGlB;AACEH;AACE;AAGAI;AACAF;AAEA;AAAOG;AACR;AAGHC;AACEN;AAAe;AAGjB;AAGE;AAAa;AACN;AAEHO;AACA;AACE;AAAA;AAEF;AACEC;AAA6C;AAE/C;AAAA;AACG;AAEH;AACEC;AAAY;AAEd;AAAA;AACF;AACF;AAGF;AAGEF;AACA;AAEA;AACEC;AAAoB;AAEpBA;AAAkE;AACpE;AAGF;AAGEE;AACAP;AAA4B;AAG9B;AACEI;AACA;AACE;AAAA;AAEF;AACEC;AAA6C;AAC/C;AAGF;AAGED;AACA;AACEI;AAAe;AACjB;AAGF;AACEX;AACAI;AACAF;AAAiB;AAEnB;AAGE;AAAa;AACN;AAEHK;AACAP;AACAI;AACAF;AACAS;AACA;AAAA;AACF;AACF;AAGF;AACEF;AACAE;AAAe;AAGjB;AAUM;AAGS;AAAY;AAElBC;AAOA;AAoBD;AACF;AASE;AAKV;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"db15e92cfaadd2cd80cc67cd38fb66adfb8358ce"},u=l[o]||(l[o]={});(!u[e]||u[e].hash!==t)&&(u[e]=c);var a=u[e];return n=function(){return a},a}n();n().s[0]++;const v=(e,t)=>(n().f[0]++,n().s[1]++,_(["box-shadow:inset 0 0 0 "," ",";"],s(e),s(t))),$n=(n().s[2]++,h.div.withConfig({displayName:"MultiValueInput__Control",componentId:"sc-vz7dlm-0"})(["display:flex;flex-direction:column;justify-content:center;min-height:",";background:",";border-radius:",";",";&:focus-within,&.focus-within{outline:0;border-color:",";",";}",";",";"],s("fieldHeight"),s("bgColor"),F("default"),v("borderWidth","borderColor"),s("focusBorderColor"),v("statefulBorderWidth","focusBorderColor"),({$isDisabled:e})=>(n().f[1]++,n().s[3]++,n().b[0][0]++,e&&(n().b[0][1]++,_(["background:",";",";"],s("disabledBgColor"),v("borderWidth","disabledBorderColor")))),({$isInvalid:e})=>(n().f[2]++,n().s[4]++,n().b[1][0]++,e&&(n().b[1][1]++,_(["&&{border-color:",";",";}"],s("invalidBorderColor"),v("statefulBorderWidth","invalidBorderColor")))))),Wn=(n().s[5]++,h(Gn).withConfig({displayName:"MultiValueInput__ValueContainer",componentId:"sc-vz7dlm-1"})(["display:flex;flex-wrap:wrap;gap:",";padding-left:",";overflow:hidden;flex:1 1 0%;",";"],V("xs"),V(M.md),({$hasValue:e,theme:t})=>(n().f[3]++,n().s[6]++,n().b[2][0]++,e&&(n().b[2][1]++,_(["padding-left:",";"],V(M.xs,{theme:t})))))),Qn=(n().s[7]++,h.div.withConfig({displayName:"MultiValueInput__InputContainer",componentId:"sc-vz7dlm-2"})(["display:inline-grid;grid-area:1 / 1 / 2 / 3;grid-template-columns:0 min-content;line-height:var(--sscds-font-lineheight-body-md);flex:1 1 auto;&::after{content:attr(data-value) ' ';visibility:hidden;white-space:pre;grid-area:1 / 2 / auto / auto;min-width:2px;}"])),Yn=(n().s[8]++,h.input.withConfig({displayName:"MultiValueInput__InputField",componentId:"sc-vz7dlm-3"})(["grid-area:1 / 2 / auto / auto;background:transparent;border:0 none;color:",";font-family:var(--sscds-font-family-body);font-size:var(--sscds-font-size-body-md);line-height:var(--sscds-font-lineheight-body-md);outline:none;min-width:2px;width:100%;&::-ms-clear{display:none;}"],s("color"))),Jn=(n().s[9]++,h.button.withConfig({displayName:"MultiValueInput__ClearButton",componentId:"sc-vz7dlm-4"})(["display:flex;justify-content:center;align-items:center;color:",";background:transparent none;border:0 none;cursor:pointer;font-size:var(--sscds-font-size-elementlabel-md);padding:",";height:",";margin:",";outline-offset:0;border-top-right-radius:",";border-bottom-right-radius:",";&:hover{color:",";}"],s("indicatorColor"),B(0,18),B(34),B(1,0),F("default"),F("default"),s("hoverIndicatorColor")));n().s[10]++;const G=({value:e=(n().b[3][0]++,[]),isInvalid:t=(n().b[4][0]++,!1),isDisabled:l=(n().b[5][0]++,!1),isClearable:o=(n().b[6][0]++,!0),onValueAdd:c=(n().b[7][0]++,b),onValueRemove:u=(n().b[8][0]++,b),onValuesChange:a=(n().b[9][0]++,b),onInputChange:K=(n().b[10][0]++,b),onPaste:U=(n().b[11][0]++,b),placeholder:j,valuesDelimiter:k=(n().b[12][0]++,";"),pattern:X,id:T,inputId:$,inputValue:W=(n().b[13][0]++,""),maxPillLabelLength:Q=(n().b[14][0]++,16),className:Y,...J})=>{n().f[4]++;const[m,A]=(n().s[11]++,I.useState(e)),[C,N]=(n().s[12]++,I.useState(W)),[f,Z]=(n().s[13]++,I.useState(null));n().s[14]++;const g=i=>{n().f[5]++;const r=(n().s[15]++,f==null?void 0:f.checkValidity());if(n().s[16]++,r)n().b[15][1]++;else{n().b[15][0]++,n().s[17]++;return}const y=(n().s[18]++,q(i,m));if(n().s[19]++,y){n().b[16][0]++,n().s[20]++;return}else n().b[16][1]++;const sn=(n().s[21]++,q(k,i));if(n().s[22]++,sn){n().b[17][0]++;const p=(n().s[23]++,gn(En(k),_n(Fn),vn(S))(i)),x=(n().s[24]++,[...m,...p]);n().s[25]++,A(Hn(x)),n().s[26]++,c(p,x),n().s[27]++,a(x)}else{n().b[17][1]++;const p=(n().s[28]++,[...m,i]);n().s[29]++,A(p),n().s[30]++,c([i],p),n().s[31]++,a(p)}n().s[32]++,N("")};n().s[33]++;const z=i=>{n().f[6]++,n().s[34]++,A(r=>{n().f[7]++;const y=(n().s[35]++,xn(i)?(n().b[18][0]++,Tn([i],r)):(n().b[18][1]++,On(1,r)));return n().s[36]++,u(y),n().s[37]++,a(y),n().s[38]++,y})};n().s[39]++,rn(()=>{n().f[8]++,n().s[40]++,A(e)},[e,A]),n().s[41]++;const nn=i=>{switch(n().f[9]++,n().s[42]++,i.key){case";":n().b[19][0]++;case"Enter":if(n().b[19][1]++,n().s[43]++,i.preventDefault(),n().s[44]++,t){n().b[20][0]++,n().s[45]++;return}else n().b[20][1]++;n().s[46]++,S(C)?(n().b[21][0]++,n().s[47]++,g(i.target.value)):n().b[21][1]++,n().s[48]++;break;case"Backspace":n().b[19][2]++;case"Delete":n().b[19][3]++,n().s[49]++,n().b[23][0]++,mn(C)&&(n().b[23][1]++,w(m))?(n().b[22][0]++,n().s[50]++,z()):n().b[22][1]++,n().s[51]++;break;default:n().b[19][4]++}};n().s[52]++;const en=i=>{n().f[10]++,n().s[53]++,i.preventDefault();const r=(n().s[54]++,U(i));n().s[55]++,typeof r=="string"?(n().b[24][0]++,n().s[56]++,g(r)):(n().b[24][1]++,n().s[57]++,g((n().b[25][0]++,i.clipboardData||(n().b[25][1]++,window.clipboardData)).getData("text")))};n().s[58]++;const ln=i=>{n().f[11]++,n().s[59]++,K(i),n().s[60]++,N(i.target.value)};n().s[61]++;const tn=i=>{if(n().f[12]++,n().s[62]++,i.preventDefault(),n().s[63]++,t){n().b[26][0]++,n().s[64]++;return}else n().b[26][1]++;n().s[65]++,S(C)?(n().b[27][0]++,n().s[66]++,g(i.target.value)):n().b[27][1]++};n().s[67]++;const on=i=>{n().f[13]++,n().s[68]++,i.preventDefault(),n().s[69]++,Dn(f)?(n().b[28][0]++,n().s[70]++,f.focus()):n().b[28][1]++};n().s[71]++;const un=()=>{n().f[14]++,n().s[72]++,A([]),n().s[73]++,u([]),n().s[74]++,a([])};n().s[75]++;const an=i=>{switch(n().f[15]++,n().s[76]++,i.key){case" ":n().b[29][0]++;case"Enter":n().b[29][1]++,n().s[77]++,i.preventDefault(),n().s[78]++,A([]),n().s[79]++,u([]),n().s[80]++,a([]),n().s[81]++,f.focus(),n().s[82]++;break;default:n().b[29][2]++}};n().s[83]++;const cn=i=>(n().f[16]++,n().s[84]++,()=>{n().f[17]++,n().s[85]++,z(i),n().s[86]++,f.focus()});return n().s[87]++,d.jsx($n,{$isDisabled:l,$isInvalid:t,className:dn(hn,Y),"data-testid":"multivalueinputContainer",id:T,onClick:on,children:d.jsxs(qn,{align:"center",justify:"space-between",children:[d.jsxs(Wn,{$hasValue:w(m),paddingSize:M.xs,style:{overflow:"hidden"},children:[m.map((i,r)=>(n().f[18]++,n().s[88]++,d.jsx(Bn,{label:i,maxLabelLength:Q,onRemove:l?(n().b[30][1]++,void 0):(n().b[30][0]++,cn(r))},i))),d.jsx(Qn,{"data-value":(n().b[31][0]++,C||(n().b[31][1]++,j)),children:d.jsx(Yn,{...J,ref:Z,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",disabled:l,id:$,pattern:X,placeholder:Kn(m)?(n().b[32][0]++,j):(n().b[32][1]++,void 0),spellCheck:"false",type:"text",value:C,onBlur:tn,onChange:i=>(n().f[19]++,n().s[89]++,ln(i)),onKeyDown:nn,onPaste:en})})]}),(n().b[33][0]++,o&&(n().b[33][1]++,!l)&&(n().b[33][2]++,w(m))&&(n().b[33][3]++,d.jsx(Jn,{"aria-label":"Clear all values",type:"reset",onClick:un,onKeyDown:an,children:d.jsx(Sn,{name:In.times})})))]})})},_e=G;n().s[90]++;try{n().s[91]++,G.displayName="MultiValueInput",n().s[92]++,G.__docgenInfo={description:"",displayName:"MultiValueInput",props:{value:{defaultValue:{value:"[]"},description:"",name:"value",required:!1,type:{name:"string[]"}},isInvalid:{defaultValue:{value:"false"},description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isClearable:{defaultValue:{value:"true"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},valuesDelimiter:{defaultValue:{value:";"},description:"",name:"valuesDelimiter",required:!1,type:{name:"string"}},maxPillLabelLength:{defaultValue:{value:"16"},description:"",name:"maxPillLabelLength",required:!1,type:{name:"number"}},onValueAdd:{defaultValue:null,description:"",name:"onValueAdd",required:!1,type:{name:"(addedValues: string[], nextValues: string[]) => void"}},onValueRemove:{defaultValue:null,description:"",name:"onValueRemove",required:!1,type:{name:"(nextValues: string[]) => void"}},onValuesChange:{defaultValue:null,description:"",name:"onValuesChange",required:!1,type:{name:"(nextValues: string[]) => void"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"(event: ClipboardEvent<HTMLInputElement>) => string | void"}}}}}catch{}export{_e as M,Kn as i};
//# sourceMappingURL=MultiValueInput-Dlu_NSck.js.map
