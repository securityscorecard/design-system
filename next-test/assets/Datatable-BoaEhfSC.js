import{j as b}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{q as z}from"./styled-components.browser.esm-6IU7b-y2.js";import{a as k}from"./index-VMNEoDvM.js";import{j as M,e as K,d as W}from"./index-COP2hIVi.js";import"./index-LR-EjM-6.js";import{D as d,d as F}from"./Datatable.store-BENizukJ.js";import{p as Q}from"./pick-DHMZF_qQ.js";import{w as L}from"./when-BW4_TdeZ.js";import{p as Y}from"./propEq-4hbvJUAl.js";import{m as N,b as H}from"./defaultConfigs-Cgp0gizg.js";import{C as J}from"./ControlsModule-BD6VaRLM.js";import{B as V}from"./BatchModule-DRY4q2Fk.js";import{T as X}from"./Table-NOEZIfqP.js";import{u as Z}from"./useColumnsControls-BOwHmkti.js";import{a as $}from"./constants-CHqWh-7J.js";import{u as ee}from"./useLocalStorageState-D2NPfI6N.js";import{b as ne,c as Ae}from"./Filters-Cm17HpBI.js";import{i as le,m as ae}from"./space.enums-BIVz6JhH.js";import{n as D}from"./noop-CdhuOQYG.js";import{P as te}from"./Padbox-D3nB_sul.js";import{b as oe}from"./_isObject-BZZHHNGj.js";var se=oe(function(t){for(var a={},l=0;l<t.length;)a[t[l][0]]=t[l][1],l+=1;return a});function c(){var n="/Users/radekpodrazky/Projects/design-system/src/components/Datatable/hooks/useDataFetch.ts",t="2b58db6a8b0f088eaea1899b1bfed8701d6d1395",a=window,l="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Datatable/hooks/useDataFetch.ts",statementMap:{0:{start:{line:4,column:28},end:{line:11,column:1}},1:{start:{line:5,column:2},end:{line:10,column:20}},2:{start:{line:6,column:24},end:{line:6,column:173}},3:{start:{line:7,column:4},end:{line:9,column:6}},4:{start:{line:8,column:6},end:{line:8,column:20}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:28},end:{line:4,column:29}},loc:{start:{line:4,column:45},end:{line:11,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:5,column:12},end:{line:5,column:13}},loc:{start:{line:5,column:18},end:{line:10,column:3}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:7,column:11},end:{line:7,column:12}},loc:{start:{line:7,column:17},end:{line:9,column:5}},line:7}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Datatable/hooks/useDataFetch.ts"],names:["useEffect","pick","propEq","when","DatatableStore","useDataFetch","onDataFetch","unsubscribe","subscribe"],mappings:"AAAA,SAASA,iBAAiB;AAC1B,SAASC,MAAMC,QAAQC,YAAY;AAEnC,SAASC,sBAAsB;AAGxB,aAAMC,eAAe,CAAIC,gBAAwC;AACtEN,YAAU,MAAM;AACd,UAAMO,cAAcH,eAAeI,UACjCP,KAAK,CACH,aACA,YACA,UACA,WACA,SACA,YAAY,CACb,GACDE,KAAKD,OAAO,cAAc,KAAK,GAAGI,WAAW,CAC/C;AAEA,WAAO,MAAM;AACXC,kBAAY;AAAA,IACd;AAAA,EACF,GAAG,CAACD,WAAW,CAAC;AAClB;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2b58db6a8b0f088eaea1899b1bfed8701d6d1395"},A=a[l]||(a[l]={});(!A[n]||A[n].hash!==t)&&(A[n]=i);var o=A[n];return c=function(){return o},o}c();c().s[0]++;const ie=n=>{c().f[0]++,c().s[1]++,p.useEffect(()=>{c().f[1]++;const t=(c().s[2]++,d.subscribe(Q(["pageIndex","pageSize","sortBy","filters","query","isCanceled"]),L(Y("isCanceled",!1),n)));return c().s[3]++,()=>{c().f[2]++,c().s[4]++,t()}},[n])};function s(){var n="/Users/radekpodrazky/Projects/design-system/src/components/Datatable/hooks/useTableRowSelect.ts",t="e151ae19f03b37ad2797811c939c383638fcadfb",a=window,l="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Datatable/hooks/useTableRowSelect.ts",statementMap:{0:{start:{line:3,column:33},end:{line:21,column:1}},1:{start:{line:4,column:2},end:{line:6,column:31}},2:{start:{line:4,column:18},end:{line:6,column:4}},3:{start:{line:5,column:4},end:{line:5,column:42}},4:{start:{line:7,column:2},end:{line:20,column:17}},5:{start:{line:8,column:24},end:{line:16,column:6}},6:{start:{line:8,column:57},end:{line:11,column:5}},7:{start:{line:15,column:6},end:{line:15,column:43}},8:{start:{line:17,column:4},end:{line:19,column:6}},9:{start:{line:18,column:6},end:{line:18,column:20}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:33},end:{line:3,column:34}},loc:{start:{line:3,column:70},end:{line:21,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:4,column:12},end:{line:4,column:13}},loc:{start:{line:4,column:18},end:{line:6,column:4}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:4,column:40},end:{line:4,column:41}},loc:{start:{line:4,column:47},end:{line:6,column:3}},line:4},3:{name:"(anonymous_3)",decl:{start:{line:7,column:12},end:{line:7,column:13}},loc:{start:{line:7,column:18},end:{line:20,column:3}},line:7},4:{name:"(anonymous_4)",decl:{start:{line:8,column:49},end:{line:8,column:50}},loc:{start:{line:8,column:57},end:{line:11,column:5}},line:8},5:{name:"(anonymous_5)",decl:{start:{line:11,column:8},end:{line:11,column:9}},loc:{start:{line:14,column:10},end:{line:16,column:5}},line:14},6:{name:"(anonymous_6)",decl:{start:{line:17,column:11},end:{line:17,column:12}},loc:{start:{line:17,column:17},end:{line:19,column:5}},line:17}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Datatable/hooks/useTableRowSelect.ts"],names:["useEffect","DatatableStore","useTableRowSelect","onSelect","defaultSelectedRowIds","update","s","selectedIds","unsubscribe","subscribe","ids","hasExclusiveSelection"],mappings:"AAAA,SAASA,iBAAiB;AAG1B,SAASC,sBAAsB;AAGxB,aAAMC,oBAAoB,CAC/BC,UACAC,0BACS;AACTJ,YACE,MACEC,eAAeI,OAAQC,OAAM;AAC3BA,MAAEC,cAAcH;AAAAA,EAClB,CAAC,GACH,CAACA,qBAAqB,CACxB;AACAJ,YAAU,MAAM;AACd,UAAMQ,cAAcP,eAAeQ,UAChCH,QAAO;AAAA,MACNI,KAAKJ,EAAEC;AAAAA,MACPI,uBAAuBL,EAAEK;AAAAA,IAC3B,IACA,CAAC;AAAA,MAAED;AAAAA,MAAKC;AAAAA,IAAsB,MAAM;AAClCR,eAASO,KAAKC,qBAAqB;AAAA,IACrC,CACF;AAEA,WAAO,MAAM;AACXH,kBAAY;AAAA,IACd;AAAA,EACF,GAAG,CAACL,QAAQ,CAAC;AACf;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e151ae19f03b37ad2797811c939c383638fcadfb"},A=a[l]||(a[l]={});(!A[n]||A[n].hash!==t)&&(A[n]=i);var o=A[n];return s=function(){return o},o}s();s().s[0]++;const re=(n,t)=>{s().f[0]++,s().s[1]++,p.useEffect(()=>(s().f[1]++,s().s[2]++,d.update(a=>{s().f[2]++,s().s[3]++,a.selectedIds=t})),[t]),s().s[4]++,p.useEffect(()=>{s().f[3]++;const a=(s().s[5]++,d.subscribe(l=>(s().f[4]++,s().s[6]++,{ids:l.selectedIds,hasExclusiveSelection:l.hasExclusiveSelection}),({ids:l,hasExclusiveSelection:i})=>{s().f[5]++,s().s[7]++,n(l,i)}));return s().s[8]++,()=>{s().f[6]++,s().s[9]++,a()}},[n])};function w(){var n="/Users/radekpodrazky/Projects/design-system/src/components/Datatable/ControlsModule/index.ts",t="e937504117bb741ba7a2885b951463b5d93c8031",a=window,l="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Datatable/ControlsModule/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Datatable/ControlsModule/index.ts"],names:["default","ControlsModule"],mappings:"AAAA,SAASA,WAAWC,sBAAsB;AAC1C,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e937504117bb741ba7a2885b951463b5d93c8031"},A=a[l]||(a[l]={});(!A[n]||A[n].hash!==t)&&(A[n]=i);var o=A[n];return w=function(){return o},o}w();function O(){var n="/Users/radekpodrazky/Projects/design-system/src/components/Datatable/BatchModule/index.ts",t="aa41caae94d57b2e88b77b742dd8441a1ccdcde4",a=window,l="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Datatable/BatchModule/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Datatable/BatchModule/index.ts"],names:["default","BatchModule"],mappings:"AAAA,SAASA,WAAWC,mBAAmB;AACvC,cAAc;AACd,cAAc;AACd,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"aa41caae94d57b2e88b77b742dd8441a1ccdcde4"},A=a[l]||(a[l]={});(!A[n]||A[n].hash!==t)&&(A[n]=i);var o=A[n];return O=function(){return o},o}O();function I(){var n="/Users/radekpodrazky/Projects/design-system/src/components/Datatable/Table/index.ts",t="3b16c098afdb9efdac4c612dcbbd4c479a58442d",a=window,l="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Datatable/Table/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Datatable/Table/index.ts"],names:["default","Table"],mappings:"AAAA,SAASA,WAAWC,aAAa;AACjC,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3b16c098afdb9efdac4c612dcbbd4c479a58442d"},A=a[l]||(a[l]={});(!A[n]||A[n].hash!==t)&&(A[n]=i);var o=A[n];return I=function(){return o},o}I();function e(){var n="/Users/radekpodrazky/Projects/design-system/src/components/Datatable/Datatable.tsx",t="a55c7bb8622b00a65399f6e841bdc6fc29a949d6",a=window,l="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Datatable/Datatable.tsx",statementMap:{0:{start:{line:19,column:24},end:{line:22,column:186}},1:{start:{line:23,column:24},end:{line:23,column:114}},2:{start:{line:23,column:51},end:{line:23,column:114}},3:{start:{line:23,column:68},end:{line:23,column:78}},4:{start:{line:40,column:46},end:{line:40,column:85}},5:{start:{line:41,column:2},end:{line:54,column:9}},6:{start:{line:42,column:4},end:{line:44,column:5}},7:{start:{line:43,column:6},end:{line:43,column:13}},8:{start:{line:45,column:24},end:{line:52,column:6}},9:{start:{line:46,column:6},end:{line:49,column:8}},10:{start:{line:51,column:6},end:{line:51,column:33}},11:{start:{line:53,column:4},end:{line:53,column:23}},12:{start:{line:55,column:2},end:{line:55,column:102}},13:{start:{line:55,column:18},end:{line:55,column:96}},14:{start:{line:55,column:24},end:{line:55,column:96}},15:{start:{line:56,column:26},end:{line:56,column:57}},16:{start:{line:61,column:6},end:{line:61,column:153}},17:{start:{line:61,column:31},end:{line:61,column:134}},18:{start:{line:67,column:6},end:{line:67,column:76}},19:{start:{line:67,column:31},end:{line:67,column:60}},20:{start:{line:68,column:2},end:{line:68,column:28}},21:{start:{line:69,column:2},end:{line:69,column:53}},22:{start:{line:70,column:2},end:{line:70,column:215}},23:{start:{line:71,column:30},end:{line:82,column:10}},24:{start:{line:72,column:4},end:{line:81,column:7}},25:{start:{line:73,column:6},end:{line:73,column:26}},26:{start:{line:74,column:6},end:{line:79,column:10}},27:{start:{line:74,column:45},end:{line:79,column:7}},28:{start:{line:80,column:6},end:{line:80,column:24}},29:{start:{line:83,column:2},end:{line:87,column:5}},30:{start:{line:84,column:4},end:{line:86,column:7}},31:{start:{line:85,column:6},end:{line:85,column:39}},32:{start:{line:88,column:2},end:{line:96,column:7}},33:{start:{line:98,column:0},end:{line:98,column:36}},34:{start:{line:101,column:0},end:{line:478,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:23,column:24},end:{line:23,column:25}},loc:{start:{line:23,column:51},end:{line:23,column:114}},line:23},1:{name:"(anonymous_1)",decl:{start:{line:23,column:60},end:{line:23,column:61}},loc:{start:{line:23,column:68},end:{line:23,column:78}},line:23},2:{name:"Datatable",decl:{start:{line:24,column:9},end:{line:24,column:18}},loc:{start:{line:39,column:3},end:{line:97,column:1}},line:39},3:{name:"(anonymous_3)",decl:{start:{line:41,column:12},end:{line:41,column:13}},loc:{start:{line:41,column:18},end:{line:54,column:3}},line:41},4:{name:"(anonymous_4)",decl:{start:{line:45,column:49},end:{line:45,column:50}},loc:{start:{line:45,column:56},end:{line:50,column:5}},line:45},5:{name:"(anonymous_5)",decl:{start:{line:50,column:7},end:{line:50,column:8}},loc:{start:{line:50,column:20},end:{line:52,column:5}},line:50},6:{name:"(anonymous_6)",decl:{start:{line:55,column:12},end:{line:55,column:13}},loc:{start:{line:55,column:18},end:{line:55,column:96}},line:55},7:{name:"(anonymous_7)",decl:{start:{line:55,column:18},end:{line:55,column:19}},loc:{start:{line:55,column:24},end:{line:55,column:96}},line:55},8:{name:"(anonymous_8)",decl:{start:{line:61,column:25},end:{line:61,column:26}},loc:{start:{line:61,column:31},end:{line:61,column:134}},line:61},9:{name:"(anonymous_9)",decl:{start:{line:67,column:25},end:{line:67,column:26}},loc:{start:{line:67,column:31},end:{line:67,column:60}},line:67},10:{name:"(anonymous_10)",decl:{start:{line:71,column:48},end:{line:71,column:49}},loc:{start:{line:71,column:54},end:{line:82,column:3}},line:71},11:{name:"(anonymous_11)",decl:{start:{line:72,column:26},end:{line:72,column:27}},loc:{start:{line:72,column:33},end:{line:81,column:5}},line:72},12:{name:"(anonymous_12)",decl:{start:{line:74,column:32},end:{line:74,column:33}},loc:{start:{line:74,column:45},end:{line:79,column:7}},line:74},13:{name:"(anonymous_13)",decl:{start:{line:83,column:21},end:{line:83,column:22}},loc:{start:{line:83,column:27},end:{line:87,column:3}},line:83},14:{name:"(anonymous_14)",decl:{start:{line:84,column:26},end:{line:84,column:27}},loc:{start:{line:84,column:33},end:{line:86,column:5}},line:84}},branchMap:{0:{loc:{start:{line:31,column:2},end:{line:31,column:23}},type:"default-arg",locations:[{start:{line:31,column:18},end:{line:31,column:23}}],line:31},1:{loc:{start:{line:32,column:2},end:{line:32,column:20}},type:"default-arg",locations:[{start:{line:32,column:16},end:{line:32,column:20}}],line:32},2:{loc:{start:{line:33,column:2},end:{line:33,column:19}},type:"default-arg",locations:[{start:{line:33,column:17},end:{line:33,column:19}}],line:33},3:{loc:{start:{line:34,column:2},end:{line:34,column:26}},type:"default-arg",locations:[{start:{line:34,column:22},end:{line:34,column:26}}],line:34},4:{loc:{start:{line:35,column:2},end:{line:35,column:29}},type:"default-arg",locations:[{start:{line:35,column:25},end:{line:35,column:29}}],line:35},5:{loc:{start:{line:36,column:2},end:{line:36,column:21}},type:"default-arg",locations:[{start:{line:36,column:19},end:{line:36,column:21}}],line:36},6:{loc:{start:{line:37,column:2},end:{line:37,column:18}},type:"default-arg",locations:[{start:{line:37,column:16},end:{line:37,column:18}}],line:37},7:{loc:{start:{line:42,column:4},end:{line:44,column:5}},type:"if",locations:[{start:{line:42,column:4},end:{line:44,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:42},8:{loc:{start:{line:70,column:77},end:{line:70,column:142}},type:"binary-expr",locations:[{start:{line:70,column:77},end:{line:70,column:104}},{start:{line:70,column:108},end:{line:70,column:142}}],line:70},9:{loc:{start:{line:70,column:144},end:{line:70,column:213}},type:"binary-expr",locations:[{start:{line:70,column:144},end:{line:70,column:173}},{start:{line:70,column:177},end:{line:70,column:213}}],line:70},10:{loc:{start:{line:71,column:30},end:{line:82,column:10}},type:"cond-expr",locations:[{start:{line:71,column:48},end:{line:82,column:3}},{start:{line:82,column:6},end:{line:82,column:10}}],line:71},11:{loc:{start:{line:89,column:4},end:{line:89,column:140}},type:"binary-expr",locations:[{start:{line:89,column:4},end:{line:89,column:21}},{start:{line:89,column:41},end:{line:89,column:140}}],line:89},12:{loc:{start:{line:90,column:4},end:{line:94,column:87}},type:"binary-expr",locations:[{start:{line:90,column:4},end:{line:90,column:24}},{start:{line:90,column:44},end:{line:94,column:87}}],line:90},13:{loc:{start:{line:91,column:25},end:{line:91,column:84}},type:"binary-expr",locations:[{start:{line:91,column:25},end:{line:91,column:43}},{start:{line:91,column:47},end:{line:91,column:84}}],line:91},14:{loc:{start:{line:95,column:175},end:{line:95,column:240}},type:"binary-expr",locations:[{start:{line:95,column:175},end:{line:95,column:202}},{start:{line:95,column:206},end:{line:95,column:240}}],line:95},15:{loc:{start:{line:95,column:264},end:{line:95,column:333}},type:"binary-expr",locations:[{start:{line:95,column:264},end:{line:95,column:293}},{start:{line:95,column:297},end:{line:95,column:333}}],line:95}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Datatable/Datatable.tsx"],names:["useEffect","styled","useDeepCompareMemo","assoc","assocPath","fromPairs","map","pipe","isNotUndefined","noop","getColor","getRadii","Padbox","useDataFetch","useTableRowSelect","mergeControlsConfig","mergeTableConfig","ControlsModule","BatchModule","Table","DatatableStore","datatableInitialState","useColumnsControls","CLX_COMPONENT","useLocalStorageState","StyledDatatable","withConfig","displayName","componentId","mapSelectedRows","defaultSelectedRowIds","id","Datatable","data","dataSize","columns","dataPrimaryKey","onCancelLoading","isDataLoading","onDataFetch","batchActions","isControlsEnabled","isBatchModuleEnabled","controlsConfig","tableConfig","resetSelectionFn","persistedState","setPersistedState","unsubscribe","subscribe","s","hiddenColumns","columnOrder","partial","replace","isCancelEnabled","onColumnOrderChange","onColumnVisibilityChange","restControlsConfig","onSelect","hasOnlyPerPageSelection","restTableConfig","defaultColumnOrder","defaultHiddenColumns","handleCancelLoading","update","isCanceled","filters","filter","isLoading","shouldResetSelectedRows","isButtonDisplayed","hasColumnsControls","defaultIsColumnsControlsOpen","defaultIsColumnsControlsApplied","hasSelection"],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a55c7bb8622b00a65399f6e841bdc6fc29a949d6"},A=a[l]||(a[l]={});(!A[n]||A[n].hash!==t)&&(A[n]=i);var o=A[n];return e=function(){return o},o}e();const ce=(e().s[0]++,z(te).withConfig({displayName:"Datatable__StyledDatatable",componentId:"sc-ekhe1z-0"})(["display:flex;flex-direction:column;position:relative;border:1px solid ",";border-radius:",";background:",";"],M("neutral.300"),K("double"),M("neutral.0")));e().s[1]++;const ue=n=>(e().f[0]++,e().s[2]++,W(ae(t=>(e().f[1]++,e().s[3]++,[t,!0])),se)(n));function _({id:n,data:t,dataSize:a,columns:l,dataPrimaryKey:i,onCancelLoading:A,isDataLoading:o=(e().b[0][0]++,!1),onDataFetch:q=(e().b[1][0]++,D),batchActions:T=(e().b[2][0]++,[]),isControlsEnabled:y=(e().b[3][0]++,!0),isBatchModuleEnabled:x=(e().b[4][0]++,!0),controlsConfig:h=(e().b[5][0]++,{}),tableConfig:v=(e().b[6][0]++,{}),resetSelectionFn:f}){e().f[2]++;const[r,P]=(e().s[4]++,ee(`datatable_${n}`));e().s[5]++,p.useEffect(()=>{if(e().f[3]++,e().s[6]++,n)e().b[7][1]++;else{e().b[7][0]++,e().s[7]++;return}const u=(e().s[8]++,d.subscribe(m=>(e().f[4]++,e().s[9]++,{hiddenColumns:m.hiddenColumns,columnOrder:m.columnOrder}),m=>{e().f[5]++,e().s[10]++,P(m)}));return e().s[11]++,u},[]),e().s[12]++,p.useEffect(()=>(e().f[6]++,e().s[13]++,()=>(e().f[7]++,e().s[14]++,d.replace(ne("isCanceled",!0,F)))),[]);const g=(e().s[15]++,le(A)),{onColumnOrderChange:R,onColumnVisibilityChange:U,...B}=(e().s[16]++,k(()=>(e().f[8]++,e().s[17]++,N(Ae(["filteringConfig","isCancelEnabled"],g)(h))),[h])),{onSelect:G,defaultSelectedRowIds:E,hasOnlyPerPageSelection:j,...C}=(e().s[18]++,k(()=>(e().f[9]++,e().s[19]++,H(v)),[v]));e().s[20]++,ie(q),e().s[21]++,re(G,E),e().s[22]++,Z(R,U,l,(e().b[8][0]++,(r==null?void 0:r.columnOrder)||(e().b[8][1]++,C.defaultColumnOrder)),(e().b[9][0]++,(r==null?void 0:r.hiddenColumns)||(e().b[9][1]++,C.defaultHiddenColumns)));const S=(e().s[23]++,g?(e().b[10][0]++,()=>{e().f[10]++,e().s[24]++,d.update(u=>{e().f[11]++,e().s[25]++,u.isCanceled=!0,e().s[26]++,u.filters=u.filters.map(m=>(e().f[12]++,e().s[27]++,{...m,isCanceled:m.isLoading,isLoading:!1})),e().s[28]++,A()})}):(e().b[10][1]++,D));return e().s[29]++,f==null||f(()=>{e().f[13]++,e().s[30]++,d.update(u=>{e().f[14]++,e().s[31]++,u.shouldResetSelectedRows=!0})}),e().s[32]++,b.jsxs(ce,{className:$,children:[(e().b[11][0]++,y&&(e().b[11][1]++,b.jsx(J,{...B,isDataLoading:o,onCancelLoading:S}))),(e().b[12][0]++,x&&(e().b[12][1]++,b.jsx(V,{actions:T,columns:{isButtonDisplayed:(e().b[13][0]++,!y&&(e().b[13][1]++,B.hasColumnsControls)),defaultIsColumnsControlsOpen:B.defaultIsColumnsControlsOpen,defaultIsColumnsControlsApplied:B.defaultIsColumnsControlsApplied},dataSize:a,hasOnlyPerPageSelection:j,hasSelection:C.hasSelection}))),b.jsx(X,{columns:l,data:t,dataPrimaryKey:i,dataSize:a,defaultSelectedRows:ue(E),...C,defaultColumnOrder:(e().b[14][0]++,(r==null?void 0:r.columnOrder)||(e().b[14][1]++,C.defaultColumnOrder)),defaultHiddenColumns:(e().b[15][0]++,(r==null?void 0:r.hiddenColumns)||(e().b[15][1]++,C.defaultHiddenColumns)),isCancelDisabled:!g,isDataLoading:o,onCancelLoading:S})]})}e().s[33]++;_.displayName="Datatable";e().s[34]++;_.__docgenInfo={description:"",methods:[],displayName:"Datatable",props:{id:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"D"}],raw:"D[]"},description:"Table data you want to display"},dataSize:{required:!0,tsType:{name:"number"},description:"Total size of data"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"D"}],raw:"Column<D>"}],raw:"Column<D>[]"},description:`Settings for each table column.

Extends: https://react-table.tanstack.com/docs/api/useTable#column-options`},isDataLoading:{required:!1,tsType:{name:"boolean"},description:"Flag to determine wheter data is currently loading",defaultValue:{value:"false",computed:!1}},onCancelLoading:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel function called upon request cancellation."},onDataFetch:{required:!1,tsType:{name:"signature",type:"function",raw:`({
  pageSize,
  pageIndex,
  sortBy,
  filters,
  query,
}: OnDataFetchArgs<D>) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  pageSize: number;
  pageIndex: number;
  sortBy: SortingRule<D>[];
  filters: Filter[];
  query: string;
}`,signature:{properties:[{key:"pageSize",value:{name:"number",required:!0}},{key:"pageIndex",value:{name:"number",required:!0}},{key:"sortBy",value:{name:"Array",elements:[{name:"SortingRule",elements:[{name:"D"}],raw:"SortingRule<D>"}],raw:"SortingRule<D>[]",required:!0}},{key:"filters",value:{name:"Array",elements:[{name:"Filter"}],raw:"Filter[]",required:!0}},{key:"query",value:{name:"string",required:!0}}]}},name:""}],return:{name:"void"}}},description:"Data fetch function called upon pagination, sorting, filtering and searching",defaultValue:{value:"noop",computed:!0}},batchActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| ActionKinds<OnClickArgs, OnClickReturnType>
| ActionWithSubactions<OnClickArgs, OnClickReturnType>`,elements:[{name:"union",raw:`| (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]},{name:"intersection",raw:`ActionBase<OnClickArgs, OnClickReturnType> & {
  subActions: ActionKinds<OnClickArgs, OnClickReturnType>[];
  href?: never;
  to?: never;
}`,elements:[{name:"signature",type:"object",raw:`{
  label: ReactNode;
  name: string;
  onClick?: (...args: OnClickArgs) => OnClickReturnType;
  tooltip?: ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(...args: OnClickArgs) => OnClickReturnType",signature:{arguments:[{type:{name:"tuple",raw:"[string[], boolean, () => void]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"boolean"},{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}]},name:"args",rest:!0}],return:{name:"void"}},required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}}]}},{name:"signature",type:"object",raw:`{
  subActions: ActionKinds<OnClickArgs, OnClickReturnType>[];
  href?: never;
  to?: never;
}`,signature:{properties:[{key:"subActions",value:{name:"Array",elements:[{name:"union",raw:`| (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"ActionKinds<OnClickArgs, OnClickReturnType>[]",required:!0}},{key:"href",value:{name:"never",required:!1}},{key:"to",value:{name:"never",required:!1}}]}}]}]}],raw:"Action<BatchActionArgs>[]"},description:`List of available batch actions for table

See: [action.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/types/action.types.ts)`,defaultValue:{value:"[]",computed:!1}},dataPrimaryKey:{required:!1,tsType:{name:"union",raw:`| string
| ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string)`,elements:[{name:"string"},{name:"unknown"}]},description:`Name of column used as table primary key or function to retrieve the key

Return value is used as id for selected rows`},isControlsEnabled:{required:!1,tsType:{name:"boolean"},description:"Flag to enable/disable top controls module",defaultValue:{value:"true",computed:!1}},isBatchModuleEnabled:{required:!1,tsType:{name:"boolean"},description:"Flag to enable/disable batch actions module with element counter",defaultValue:{value:"true",computed:!1}},controlsConfig:{required:!1,tsType:{name:"Partial",elements:[{name:"ControlsConfig",elements:[{name:"D"}],raw:"ControlsConfig<D>"}],raw:"Partial<ControlsConfig<D>>"},description:`Config object for controls module

See: [ControlsModule.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/ControlsModule/ControlsModule.types.ts)`,defaultValue:{value:"{}",computed:!1}},tableConfig:{required:!1,tsType:{name:"Partial",elements:[{name:"TableConfig",elements:[{name:"D"}],raw:"TableConfig<D>"}],raw:"Partial<TableConfig<D>>"},description:`Config object for table

See: [Table.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/Table/Table.types.ts)`,defaultValue:{value:"{}",computed:!1}},resetSelectionFn:{required:!1,tsType:{name:"signature",type:"function",raw:"(resetFn: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"resetFn"}],return:{name:"void"}}},description:"Function that allow storing selection reset function in the parent component"}}};export{_ as D};
//# sourceMappingURL=Datatable-BoaEhfSC.js.map
