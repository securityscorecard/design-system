import{j as p}from"./jsx-runtime-CfatFE5O.js";import{r as f}from"./index-ClcD9ViR.js";import{q as j}from"./styled-components.browser.esm-6IU7b-y2.js";import{a as S}from"./index-CyZxMOeP.js";import"./index-PbvpDTpi.js";import{D as d,d as L}from"./Datatable.store-q-GLONPa.js";import{p as R}from"./pick-DLB1qMU0.js";import{w as V}from"./when-CJuuD2H4.js";import{p as W}from"./propEq-C3eOMXNr.js";import{m as Y,b as H}from"./defaultConfigs-D3F7WP6w.js";import{C as N}from"./ControlsModule-DDrR-fLk.js";import{B as Q}from"./BatchModule-idV759tG.js";import{T as U}from"./Table-Cr2AKN0D.js";import{u as J}from"./useColumnsControls-BxlxnIPO.js";import{C as z}from"./constants-l-41uwkI.js";import{u as X}from"./useLocalStorageState-UxkHlwiN.js";import{b as $,c as Z}from"./Filters-BleqGiiO.js";import{i as ee,p as ne,m as le}from"./space.enums-DGrZwzIk.js";import{n as E}from"./noop-CGDyLuY9.js";import{P as ae}from"./Padbox-D0nj4Q3C.js";import{a as oe}from"./_isObject-dmcfxmtS.js";var te=oe(function(t){for(var o={},a=0;a<t.length;)o[t[a][0]]=t[a][1],a+=1;return o});function u(){var n="/home/runner/work/design-system/design-system/src/components/Datatable/hooks/useDataFetch.ts",t="ba237f69ab73ae92e2b340c54134fb35cdae3c10",o=window,a="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/Datatable/hooks/useDataFetch.ts",statementMap:{0:{start:{line:4,column:28},end:{line:11,column:1}},1:{start:{line:5,column:2},end:{line:10,column:20}},2:{start:{line:6,column:24},end:{line:6,column:173}},3:{start:{line:7,column:4},end:{line:9,column:6}},4:{start:{line:8,column:6},end:{line:8,column:20}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:28},end:{line:4,column:29}},loc:{start:{line:4,column:45},end:{line:11,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:5,column:12},end:{line:5,column:13}},loc:{start:{line:5,column:18},end:{line:10,column:3}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:7,column:11},end:{line:7,column:12}},loc:{start:{line:7,column:17},end:{line:9,column:5}},line:7}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Datatable/hooks/useDataFetch.ts"],names:["useEffect","pick","propEq","when","DatatableStore","useDataFetch","onDataFetch","unsubscribe","subscribe"],mappings:"AAAA,SAASA,iBAAiB;AAC1B,SAASC,MAAMC,QAAQC,YAAY;AAEnC,SAASC,sBAAsB;AAGxB,aAAMC,eAAe,CAAIC,gBAAwC;AACtEN,YAAU,MAAM;AACd,UAAMO,cAAcH,eAAeI,UACjCP,KAAK,CACH,aACA,YACA,UACA,WACA,SACA,YAAY,CACb,GACDE,KAAKD,OAAO,cAAc,KAAK,GAAGI,WAAW,CAC/C;AAEA,WAAO,MAAM;AACXC,kBAAY;AAAA,IACd;AAAA,EACF,GAAG,CAACD,WAAW,CAAC;AAClB;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ba237f69ab73ae92e2b340c54134fb35cdae3c10"},l=o[a]||(o[a]={});(!l[n]||l[n].hash!==t)&&(l[n]=i);var s=l[n];return u=function(){return s},s}u();u().s[0]++;const se=n=>{u().f[0]++,u().s[1]++,f.useEffect(()=>{u().f[1]++;const t=(u().s[2]++,d.subscribe(R(["pageIndex","pageSize","sortBy","filters","query","isCanceled"]),V(W("isCanceled",!1),n)));return u().s[3]++,()=>{u().f[2]++,u().s[4]++,t()}},[n])};function c(){var n="/home/runner/work/design-system/design-system/src/components/Datatable/hooks/useTableRowSelect.ts",t="9564b7a88ca3cd74bc4db78732a2c0c8dc92a910",o=window,a="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/Datatable/hooks/useTableRowSelect.ts",statementMap:{0:{start:{line:3,column:33},end:{line:21,column:1}},1:{start:{line:4,column:2},end:{line:6,column:31}},2:{start:{line:4,column:18},end:{line:6,column:4}},3:{start:{line:5,column:4},end:{line:5,column:42}},4:{start:{line:7,column:2},end:{line:20,column:17}},5:{start:{line:8,column:24},end:{line:16,column:6}},6:{start:{line:8,column:57},end:{line:11,column:5}},7:{start:{line:15,column:6},end:{line:15,column:43}},8:{start:{line:17,column:4},end:{line:19,column:6}},9:{start:{line:18,column:6},end:{line:18,column:20}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:33},end:{line:3,column:34}},loc:{start:{line:3,column:70},end:{line:21,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:4,column:12},end:{line:4,column:13}},loc:{start:{line:4,column:18},end:{line:6,column:4}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:4,column:40},end:{line:4,column:41}},loc:{start:{line:4,column:47},end:{line:6,column:3}},line:4},3:{name:"(anonymous_3)",decl:{start:{line:7,column:12},end:{line:7,column:13}},loc:{start:{line:7,column:18},end:{line:20,column:3}},line:7},4:{name:"(anonymous_4)",decl:{start:{line:8,column:49},end:{line:8,column:50}},loc:{start:{line:8,column:57},end:{line:11,column:5}},line:8},5:{name:"(anonymous_5)",decl:{start:{line:11,column:8},end:{line:11,column:9}},loc:{start:{line:14,column:10},end:{line:16,column:5}},line:14},6:{name:"(anonymous_6)",decl:{start:{line:17,column:11},end:{line:17,column:12}},loc:{start:{line:17,column:17},end:{line:19,column:5}},line:17}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Datatable/hooks/useTableRowSelect.ts"],names:["useEffect","DatatableStore","useTableRowSelect","onSelect","defaultSelectedRowIds","update","s","selectedIds","unsubscribe","subscribe","ids","hasExclusiveSelection"],mappings:"AAAA,SAASA,iBAAiB;AAG1B,SAASC,sBAAsB;AAGxB,aAAMC,oBAAoB,CAC/BC,UACAC,0BACS;AACTJ,YACE,MACEC,eAAeI,OAAQC,OAAM;AAC3BA,MAAEC,cAAcH;AAAAA,EAClB,CAAC,GACH,CAACA,qBAAqB,CACxB;AACAJ,YAAU,MAAM;AACd,UAAMQ,cAAcP,eAAeQ,UAChCH,QAAO;AAAA,MACNI,KAAKJ,EAAEC;AAAAA,MACPI,uBAAuBL,EAAEK;AAAAA,IAC3B,IACA,CAAC;AAAA,MAAED;AAAAA,MAAKC;AAAAA,IAAsB,MAAM;AAClCR,eAASO,KAAKC,qBAAqB;AAAA,IACrC,CACF;AAEA,WAAO,MAAM;AACXH,kBAAY;AAAA,IACd;AAAA,EACF,GAAG,CAACL,QAAQ,CAAC;AACf;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9564b7a88ca3cd74bc4db78732a2c0c8dc92a910"},l=o[a]||(o[a]={});(!l[n]||l[n].hash!==t)&&(l[n]=i);var s=l[n];return c=function(){return s},s}c();c().s[0]++;const ce=(n,t)=>{c().f[0]++,c().s[1]++,f.useEffect(()=>(c().f[1]++,c().s[2]++,d.update(o=>{c().f[2]++,c().s[3]++,o.selectedIds=t})),[t]),c().s[4]++,f.useEffect(()=>{c().f[3]++;const o=(c().s[5]++,d.subscribe(a=>(c().f[4]++,c().s[6]++,{ids:a.selectedIds,hasExclusiveSelection:a.hasExclusiveSelection}),({ids:a,hasExclusiveSelection:i})=>{c().f[5]++,c().s[7]++,n(a,i)}));return c().s[8]++,()=>{c().f[6]++,c().s[9]++,o()}},[n])};function w(){var n="/home/runner/work/design-system/design-system/src/components/Datatable/ControlsModule/index.ts",t="43c0ee0599b007bb80e54910856ef5883d8fe638",o=window,a="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/Datatable/ControlsModule/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Datatable/ControlsModule/index.ts"],names:["default","ControlsModule"],mappings:"AAAA,SAASA,WAAWC,sBAAsB;AAC1C,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"43c0ee0599b007bb80e54910856ef5883d8fe638"},l=o[a]||(o[a]={});(!l[n]||l[n].hash!==t)&&(l[n]=i);var s=l[n];return w=function(){return s},s}w();function x(){var n="/home/runner/work/design-system/design-system/src/components/Datatable/BatchModule/index.ts",t="a4e8a7669785bd6e076f92f0a19376a22e7fd0d6",o=window,a="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/Datatable/BatchModule/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Datatable/BatchModule/index.ts"],names:["default","BatchModule"],mappings:"AAAA,SAASA,WAAWC,mBAAmB;AACvC,cAAc;AACd,cAAc;AACd,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a4e8a7669785bd6e076f92f0a19376a22e7fd0d6"},l=o[a]||(o[a]={});(!l[n]||l[n].hash!==t)&&(l[n]=i);var s=l[n];return x=function(){return s},s}x();function k(){var n="/home/runner/work/design-system/design-system/src/components/Datatable/Table/index.ts",t="1ce386f8830dd0e2ec08da2b4b41c4676ba0e6a6",o=window,a="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/Datatable/Table/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Datatable/Table/index.ts"],names:["default","Table"],mappings:"AAAA,SAASA,WAAWC,aAAa;AACjC,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1ce386f8830dd0e2ec08da2b4b41c4676ba0e6a6"},l=o[a]||(o[a]={});(!l[n]||l[n].hash!==t)&&(l[n]=i);var s=l[n];return k=function(){return s},s}k();function e(){var n="/home/runner/work/design-system/design-system/src/components/Datatable/Datatable.tsx",t="a0e600c419584352ab0dc527a213f4896f669f77",o=window,a="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/Datatable/Datatable.tsx",statementMap:{0:{start:{line:18,column:24},end:{line:21,column:213}},1:{start:{line:22,column:24},end:{line:22,column:114}},2:{start:{line:22,column:51},end:{line:22,column:114}},3:{start:{line:22,column:68},end:{line:22,column:78}},4:{start:{line:39,column:46},end:{line:39,column:85}},5:{start:{line:40,column:2},end:{line:53,column:9}},6:{start:{line:41,column:4},end:{line:43,column:5}},7:{start:{line:42,column:6},end:{line:42,column:13}},8:{start:{line:44,column:24},end:{line:51,column:6}},9:{start:{line:45,column:6},end:{line:48,column:8}},10:{start:{line:50,column:6},end:{line:50,column:33}},11:{start:{line:52,column:4},end:{line:52,column:23}},12:{start:{line:54,column:2},end:{line:54,column:102}},13:{start:{line:54,column:18},end:{line:54,column:96}},14:{start:{line:54,column:24},end:{line:54,column:96}},15:{start:{line:55,column:26},end:{line:55,column:57}},16:{start:{line:60,column:6},end:{line:60,column:153}},17:{start:{line:60,column:31},end:{line:60,column:134}},18:{start:{line:66,column:6},end:{line:66,column:76}},19:{start:{line:66,column:31},end:{line:66,column:60}},20:{start:{line:67,column:2},end:{line:67,column:28}},21:{start:{line:68,column:2},end:{line:68,column:53}},22:{start:{line:69,column:2},end:{line:69,column:215}},23:{start:{line:70,column:30},end:{line:81,column:10}},24:{start:{line:71,column:4},end:{line:80,column:7}},25:{start:{line:72,column:6},end:{line:72,column:26}},26:{start:{line:73,column:6},end:{line:78,column:10}},27:{start:{line:73,column:45},end:{line:78,column:7}},28:{start:{line:79,column:6},end:{line:79,column:24}},29:{start:{line:82,column:2},end:{line:86,column:5}},30:{start:{line:83,column:4},end:{line:85,column:7}},31:{start:{line:84,column:6},end:{line:84,column:39}},32:{start:{line:87,column:2},end:{line:95,column:7}},33:{start:{line:97,column:0},end:{line:97,column:36}},34:{start:{line:99,column:0},end:{line:105,column:50}},35:{start:{line:101,column:4},end:{line:101,column:40}},36:{start:{line:103,column:4},end:{line:103,column:3273}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:22,column:24},end:{line:22,column:25}},loc:{start:{line:22,column:51},end:{line:22,column:114}},line:22},1:{name:"(anonymous_1)",decl:{start:{line:22,column:60},end:{line:22,column:61}},loc:{start:{line:22,column:68},end:{line:22,column:78}},line:22},2:{name:"Datatable",decl:{start:{line:23,column:9},end:{line:23,column:18}},loc:{start:{line:38,column:3},end:{line:96,column:1}},line:38},3:{name:"(anonymous_3)",decl:{start:{line:40,column:12},end:{line:40,column:13}},loc:{start:{line:40,column:18},end:{line:53,column:3}},line:40},4:{name:"(anonymous_4)",decl:{start:{line:44,column:49},end:{line:44,column:50}},loc:{start:{line:44,column:56},end:{line:49,column:5}},line:44},5:{name:"(anonymous_5)",decl:{start:{line:49,column:7},end:{line:49,column:8}},loc:{start:{line:49,column:20},end:{line:51,column:5}},line:49},6:{name:"(anonymous_6)",decl:{start:{line:54,column:12},end:{line:54,column:13}},loc:{start:{line:54,column:18},end:{line:54,column:96}},line:54},7:{name:"(anonymous_7)",decl:{start:{line:54,column:18},end:{line:54,column:19}},loc:{start:{line:54,column:24},end:{line:54,column:96}},line:54},8:{name:"(anonymous_8)",decl:{start:{line:60,column:25},end:{line:60,column:26}},loc:{start:{line:60,column:31},end:{line:60,column:134}},line:60},9:{name:"(anonymous_9)",decl:{start:{line:66,column:25},end:{line:66,column:26}},loc:{start:{line:66,column:31},end:{line:66,column:60}},line:66},10:{name:"(anonymous_10)",decl:{start:{line:70,column:48},end:{line:70,column:49}},loc:{start:{line:70,column:54},end:{line:81,column:3}},line:70},11:{name:"(anonymous_11)",decl:{start:{line:71,column:26},end:{line:71,column:27}},loc:{start:{line:71,column:33},end:{line:80,column:5}},line:71},12:{name:"(anonymous_12)",decl:{start:{line:73,column:32},end:{line:73,column:33}},loc:{start:{line:73,column:45},end:{line:78,column:7}},line:73},13:{name:"(anonymous_13)",decl:{start:{line:82,column:21},end:{line:82,column:22}},loc:{start:{line:82,column:27},end:{line:86,column:3}},line:82},14:{name:"(anonymous_14)",decl:{start:{line:83,column:26},end:{line:83,column:27}},loc:{start:{line:83,column:33},end:{line:85,column:5}},line:83}},branchMap:{0:{loc:{start:{line:30,column:2},end:{line:30,column:23}},type:"default-arg",locations:[{start:{line:30,column:18},end:{line:30,column:23}}],line:30},1:{loc:{start:{line:31,column:2},end:{line:31,column:20}},type:"default-arg",locations:[{start:{line:31,column:16},end:{line:31,column:20}}],line:31},2:{loc:{start:{line:32,column:2},end:{line:32,column:19}},type:"default-arg",locations:[{start:{line:32,column:17},end:{line:32,column:19}}],line:32},3:{loc:{start:{line:33,column:2},end:{line:33,column:26}},type:"default-arg",locations:[{start:{line:33,column:22},end:{line:33,column:26}}],line:33},4:{loc:{start:{line:34,column:2},end:{line:34,column:29}},type:"default-arg",locations:[{start:{line:34,column:25},end:{line:34,column:29}}],line:34},5:{loc:{start:{line:35,column:2},end:{line:35,column:21}},type:"default-arg",locations:[{start:{line:35,column:19},end:{line:35,column:21}}],line:35},6:{loc:{start:{line:36,column:2},end:{line:36,column:18}},type:"default-arg",locations:[{start:{line:36,column:16},end:{line:36,column:18}}],line:36},7:{loc:{start:{line:41,column:4},end:{line:43,column:5}},type:"if",locations:[{start:{line:41,column:4},end:{line:43,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:41},8:{loc:{start:{line:69,column:77},end:{line:69,column:142}},type:"binary-expr",locations:[{start:{line:69,column:77},end:{line:69,column:104}},{start:{line:69,column:108},end:{line:69,column:142}}],line:69},9:{loc:{start:{line:69,column:144},end:{line:69,column:213}},type:"binary-expr",locations:[{start:{line:69,column:144},end:{line:69,column:173}},{start:{line:69,column:177},end:{line:69,column:213}}],line:69},10:{loc:{start:{line:70,column:30},end:{line:81,column:10}},type:"cond-expr",locations:[{start:{line:70,column:48},end:{line:81,column:3}},{start:{line:81,column:6},end:{line:81,column:10}}],line:70},11:{loc:{start:{line:88,column:4},end:{line:88,column:140}},type:"binary-expr",locations:[{start:{line:88,column:4},end:{line:88,column:21}},{start:{line:88,column:41},end:{line:88,column:140}}],line:88},12:{loc:{start:{line:89,column:4},end:{line:93,column:87}},type:"binary-expr",locations:[{start:{line:89,column:4},end:{line:89,column:24}},{start:{line:89,column:44},end:{line:93,column:87}}],line:89},13:{loc:{start:{line:90,column:25},end:{line:90,column:84}},type:"binary-expr",locations:[{start:{line:90,column:25},end:{line:90,column:43}},{start:{line:90,column:47},end:{line:90,column:84}}],line:90},14:{loc:{start:{line:94,column:175},end:{line:94,column:240}},type:"binary-expr",locations:[{start:{line:94,column:175},end:{line:94,column:202}},{start:{line:94,column:206},end:{line:94,column:240}}],line:94},15:{loc:{start:{line:94,column:264},end:{line:94,column:333}},type:"binary-expr",locations:[{start:{line:94,column:264},end:{line:94,column:293}},{start:{line:94,column:297},end:{line:94,column:333}}],line:94}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Datatable/Datatable.tsx"],names:["id","data","dataSize","columns","dataPrimaryKey","onCancelLoading","noop","useEffect","hiddenColumns","columnOrder","setPersistedState","unsubscribe","onColumnOrderChange","onColumnVisibilityChange","restControlsConfig","onSelect","defaultSelectedRowIds","hasOnlyPerPageSelection","restTableConfig","useDataFetch","useTableRowSelect","useColumnsControls","DatatableStore","s","filter","isLoading","resetSelectionFn","isControlsEnabled","hasColumnsControls","defaultIsColumnsControlsOpen","defaultIsColumnsControlsApplied","Datatable"],mappings:"AA4II;AA5IJ;AACA;AACA;AACA;AACA;AAGA;AACA;AACA;AACA;AACA;AACA;AACA;AAGA;AACA;AACA;AACA;AAEA;AAAsC;AAAA;AAAA;AAStC;AAMA;AAAsD;AACpDA;AACAC;AACAC;AACAC;AACAC;AACAC;AACgB;AACFC;AACG;AACG;AACG;AACL;AACH;AAEE;AACjB;AAKAC;AACE;AACE;AAAA;AAEF;AAEI;AAAO;AAAmBC;AAA8BC;AAAY;AAGpEC;AAAyB;AAI7B;AAAOC;AAITJ;AAMA;AAEA;AAAM;AACJK;AACAC;AACGC;AAWL;AAAM;AACJC;AACAC;AACAC;AACGC;AAMLC;AACAC;AACAC;AAQA;AAEMC;AACEC;AACAA;AAAuC;AAClCC;AAAAA;AAGgBC;AACR;AAGbpB;AAAgB;AACjB;AAIPqB;AACEJ;AACEC;AAA4B;AAC7B;AAGH;AAEKI;AAMA;AAIY;AAEoCC;AAEtBC;AAEAC;AAM1B;AAgBsC;AAI7C;AAEAC;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a0e600c419584352ab0dc527a213f4896f669f77"},l=o[a]||(o[a]={});(!l[n]||l[n].hash!==t)&&(l[n]=i);var s=l[n];return e=function(){return s},s}e();const ie=(e().s[0]++,j(ae).withConfig({displayName:"Datatable__StyledDatatable",componentId:"sc-ekhe1z-0"})(["display:flex;flex-direction:column;position:relative;border:1px solid var(--sscds-color-border-default);border-radius:var(--sscds-radii-surface-md);background:var(--sscds-color-background-surface-default);"]));e().s[1]++;const re=n=>(e().f[0]++,e().s[2]++,ne(le(t=>(e().f[1]++,e().s[3]++,[t,!0])),te)(n));function y({id:n,data:t,dataSize:o,columns:a,dataPrimaryKey:i,onCancelLoading:l,isDataLoading:s=(e().b[0][0]++,!1),onDataFetch:I=(e().b[1][0]++,E),batchActions:O=(e().b[2][0]++,[]),isControlsEnabled:v=(e().b[3][0]++,!0),isBatchModuleEnabled:q=(e().b[4][0]++,!0),controlsConfig:_=(e().b[5][0]++,{}),tableConfig:M=(e().b[6][0]++,{}),resetSelectionFn:g}){e().f[2]++;const[r,T]=(e().s[4]++,X(`datatable_${n}`));e().s[5]++,f.useEffect(()=>{if(e().f[3]++,e().s[6]++,n)e().b[7][1]++;else{e().b[7][0]++,e().s[7]++;return}const A=(e().s[8]++,d.subscribe(m=>(e().f[4]++,e().s[9]++,{hiddenColumns:m.hiddenColumns,columnOrder:m.columnOrder}),m=>{e().f[5]++,e().s[10]++,T(m)}));return e().s[11]++,A},[]),e().s[12]++,f.useEffect(()=>(e().f[6]++,e().s[13]++,()=>(e().f[7]++,e().s[14]++,d.replace($("isCanceled",!0,L)))),[]);const h=(e().s[15]++,ee(l)),{onColumnOrderChange:G,onColumnVisibilityChange:P,...b}=(e().s[16]++,S(()=>(e().f[8]++,e().s[17]++,Y(Z(["filteringConfig","isCancelEnabled"],h)(_))),[_])),{onSelect:F,defaultSelectedRowIds:D,hasOnlyPerPageSelection:K,...C}=(e().s[18]++,S(()=>(e().f[9]++,e().s[19]++,H(M)),[M]));e().s[20]++,se(I),e().s[21]++,ce(F,D),e().s[22]++,J(G,P,a,(e().b[8][0]++,(r==null?void 0:r.columnOrder)||(e().b[8][1]++,C.defaultColumnOrder)),(e().b[9][0]++,(r==null?void 0:r.hiddenColumns)||(e().b[9][1]++,C.defaultHiddenColumns)));const B=(e().s[23]++,h?(e().b[10][0]++,()=>{e().f[10]++,e().s[24]++,d.update(A=>{e().f[11]++,e().s[25]++,A.isCanceled=!0,e().s[26]++,A.filters=A.filters.map(m=>(e().f[12]++,e().s[27]++,{...m,isCanceled:m.isLoading,isLoading:!1})),e().s[28]++,l()})}):(e().b[10][1]++,E));return e().s[29]++,g==null||g(()=>{e().f[13]++,e().s[30]++,d.update(A=>{e().f[14]++,e().s[31]++,A.shouldResetSelectedRows=!0})}),e().s[32]++,p.jsxs(ie,{className:z,children:[(e().b[11][0]++,v&&(e().b[11][1]++,p.jsx(N,{...b,isDataLoading:s,onCancelLoading:B}))),(e().b[12][0]++,q&&(e().b[12][1]++,p.jsx(Q,{actions:O,columns:{isButtonDisplayed:(e().b[13][0]++,!v&&(e().b[13][1]++,b.hasColumnsControls)),defaultIsColumnsControlsOpen:b.defaultIsColumnsControlsOpen,defaultIsColumnsControlsApplied:b.defaultIsColumnsControlsApplied},dataSize:o,hasOnlyPerPageSelection:K,hasSelection:C.hasSelection}))),p.jsx(U,{columns:a,data:t,dataPrimaryKey:i,dataSize:o,defaultSelectedRows:re(D),...C,defaultColumnOrder:(e().b[14][0]++,(r==null?void 0:r.columnOrder)||(e().b[14][1]++,C.defaultColumnOrder)),defaultHiddenColumns:(e().b[15][0]++,(r==null?void 0:r.hiddenColumns)||(e().b[15][1]++,C.defaultHiddenColumns)),isCancelDisabled:!h,isDataLoading:s,onCancelLoading:B})]})}e().s[33]++;y.displayName="Datatable";e().s[34]++;try{e().s[35]++,y.displayName="Datatable",e().s[36]++,y.__docgenInfo={description:"",displayName:"Datatable",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Table data you want to display",name:"data",required:!0,type:{name:"D[]"}},dataSize:{defaultValue:null,description:"Total size of data",name:"dataSize",required:!0,type:{name:"number"}},columns:{defaultValue:null,description:`Settings for each table column.

Extends: https://react-table.tanstack.com/docs/api/useTable#column-options`,name:"columns",required:!0,type:{name:"Column<D>[]"}},isDataLoading:{defaultValue:{value:"false"},description:"Flag to determine wheter data is currently loading",name:"isDataLoading",required:!1,type:{name:"boolean"}},onCancelLoading:{defaultValue:null,description:"Cancel function called upon request cancellation.",name:"onCancelLoading",required:!1,type:{name:"() => void"}},onDataFetch:{defaultValue:null,description:"Data fetch function called upon pagination, sorting, filtering and searching",name:"onDataFetch",required:!1,type:{name:"OnDataFetchFn<D>"}},batchActions:{defaultValue:{value:"[]"},description:`List of available batch actions for table

See: [action.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/types/action.types.ts)`,name:"batchActions",required:!1,type:{name:"Action<BatchActionArgs>[]"}},dataPrimaryKey:{defaultValue:null,description:`Name of column used as table primary key or function to retrieve the key

Return value is used as id for selected rows`,name:"dataPrimaryKey",required:!1,type:{name:"PrimaryKey<D>"}},isControlsEnabled:{defaultValue:{value:"true"},description:"Flag to enable/disable top controls module",name:"isControlsEnabled",required:!1,type:{name:"boolean"}},isBatchModuleEnabled:{defaultValue:{value:"true"},description:"Flag to enable/disable batch actions module with element counter",name:"isBatchModuleEnabled",required:!1,type:{name:"boolean"}},controlsConfig:{defaultValue:{value:"{}"},description:`Config object for controls module

See: [ControlsModule.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/ControlsModule/ControlsModule.types.ts)`,name:"controlsConfig",required:!1,type:{name:"Partial<ControlsConfig<D>>"}},tableConfig:{defaultValue:{value:"{}"},description:`Config object for table

See: [Table.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/Table/Table.types.ts)`,name:"tableConfig",required:!1,type:{name:"Partial<TableConfig<D>>"}},resetSelectionFn:{defaultValue:null,description:"Function that allow storing selection reset function in the parent component",name:"resetSelectionFn",required:!1,type:{name:"(resetFn: () => void) => void"}}}}}catch{}export{y as D};
//# sourceMappingURL=Datatable-CiotxvM6.js.map
