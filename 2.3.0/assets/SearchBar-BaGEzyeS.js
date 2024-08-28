import{j as u}from"./jsx-runtime-Cw0GR0a5.js";import{r as d,R as X}from"./index-CTjT7uj6.js";import{y as C,s as p,j as x,g as E,S as B,p as D,z as Q,f as K,h as Z}from"./index-DzoB_gWM.js";import{P as o}from"./index-BRV0Se7Z.js";import{c as $}from"./index-C7IrpltL.js";import"./index-CXWz7k9C.js";import"./index-beAa1auE.js";import"./index-CQl3OQTU.js";import{S as v,I as W}from"./index-t-vajJ9r.js";import"./index-klhtVnMw.js";import{i as AA}from"./isNonEmptyString-CIMRQYAB.js";import{i as eA}from"./isNotNilOrEmpty-C6qSabrU.js";import{S as nA}from"./Spinner-Bmxd_xeK.js";import{I as G}from"./Icon-CHqwD8rK.js";import{I as lA}from"./Input-DZoLjmPp.js";function e(){var l="/Users/radekpodrazky/Projects/design-system/src/components/forms/SearchBar/useField.ts",t="ec5f0800b7a7db27c04224e07146ca18e4ce8cf6",a=window,i="__coverage__",s={path:"/Users/radekpodrazky/Projects/design-system/src/components/forms/SearchBar/useField.ts",statementMap:{0:{start:{line:3,column:24},end:{line:22,column:1}},1:{start:{line:4,column:23},end:{line:4,column:53}},2:{start:{line:5,column:26},end:{line:5,column:54}},3:{start:{line:6,column:44},end:{line:6,column:89}},4:{start:{line:7,column:16},end:{line:7,column:61}},5:{start:{line:8,column:19},end:{line:15,column:3}},6:{start:{line:9,column:4},end:{line:11,column:5}},7:{start:{line:10,column:6},end:{line:10,column:27}},8:{start:{line:12,column:4},end:{line:14,column:5}},9:{start:{line:13,column:6},end:{line:13,column:39}},10:{start:{line:16,column:2},end:{line:21,column:4}},11:{start:{line:20,column:22},end:{line:20,column:42}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:24},end:{line:3,column:25}},loc:{start:{line:3,column:77},end:{line:22,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:8,column:19},end:{line:8,column:20}},loc:{start:{line:8,column:26},end:{line:15,column:3}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:20,column:16},end:{line:20,column:17}},loc:{start:{line:20,column:22},end:{line:20,column:42}},line:20}},branchMap:{0:{loc:{start:{line:6,column:53},end:{line:6,column:88}},type:"cond-expr",locations:[{start:{line:6,column:71},end:{line:6,column:83}},{start:{line:6,column:86},end:{line:6,column:88}}],line:6},1:{loc:{start:{line:7,column:16},end:{line:7,column:61}},type:"cond-expr",locations:[{start:{line:7,column:31},end:{line:7,column:45}},{start:{line:7,column:48},end:{line:7,column:61}}],line:7},2:{loc:{start:{line:9,column:4},end:{line:11,column:5}},type:"if",locations:[{start:{line:9,column:4},end:{line:11,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:9},3:{loc:{start:{line:12,column:4},end:{line:14,column:5}},type:"if",locations:[{start:{line:12,column:4},end:{line:14,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:12}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/forms/SearchBar/useField.ts"],names:["useState","isNotUndefined","useField","valueFromProps","defaultValue","onChangeFromProps","isControlled","hasDefaultValue","internalValue","setInternalValue","value","onChange","e","target","clearValue"],mappings:"AAAA,SAASA,gBAAgB;AACzB,SAASC,sBAAsB;AAExB,aAAMC,WAAWA,CAACC,gBAAgBC,cAAcC,sBAAsB;AAC3E,QAAMC,eAAeL,eAAeE,cAAc;AAClD,QAAMI,kBAAkBN,eAAeG,YAAY;AAEnD,QAAM,CAACI,eAAeC,gBAAgB,IAAIT,SACxCO,kBAAkBH,eAAe,EACnC;AACA,QAAMM,QAAQJ,eAAeH,iBAAiBK;AAE9C,QAAMG,WAAYC,OAAM;AACtB,QAAIP,mBAAmB;AACrBA,wBAAkBO,CAAC;AAAA,IACrB;AACA,QAAI,CAACN,cAAc;AACjBG,uBAAiBG,EAAEC,OAAOH,KAAK;AAAA,IACjC;AAAA,EACF;AAEA,SAAO;AAAA,IACLA;AAAAA,IACAC;AAAAA,IACAL;AAAAA,IACAQ,YAAYA,MAAML,iBAAiB,EAAE;AAAA,EACvC;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ec5f0800b7a7db27c04224e07146ca18e4ce8cf6"},n=a[i]||(a[i]={});(!n[l]||n[l].hash!==t)&&(n[l]=s);var c=n[l];return e=function(){return c},c}e();e().s[0]++;const oA=(l,t,a)=>{e().f[0]++;const i=(e().s[1]++,C(l)),s=(e().s[2]++,C(t)),[n,c]=(e().s[3]++,d.useState(s?(e().b[0][0]++,t):(e().b[0][1]++,""))),g=(e().s[4]++,i?(e().b[1][0]++,l):(e().b[1][1]++,n));e().s[5]++;const S=f=>{e().f[1]++,e().s[6]++,a?(e().b[2][0]++,e().s[7]++,a(f)):e().b[2][1]++,e().s[8]++,i?e().b[3][1]++:(e().b[3][0]++,e().s[9]++,c(f.target.value))};return e().s[10]++,{value:g,onChange:S,isControlled:i,clearValue:()=>(e().f[2]++,e().s[11]++,c(""))}};function A(){var l="/Users/radekpodrazky/Projects/design-system/src/components/forms/SearchBar/SearchBar.tsx",t="b2227e0806c89c46b052098f6e931b847c319309",a=window,i="__coverage__",s={path:"/Users/radekpodrazky/Projects/design-system/src/components/forms/SearchBar/SearchBar.tsx",statementMap:{0:{start:{line:16,column:22},end:{line:19,column:26}},1:{start:{line:20,column:20},end:{line:23,column:100}},2:{start:{line:24,column:26},end:{line:27,column:109}},3:{start:{line:28,column:20},end:{line:31,column:360}},4:{start:{line:32,column:20},end:{line:40,column:3}},5:{start:{line:38,column:6},end:{line:40,column:2}},6:{start:{line:41,column:18},end:{line:114,column:2}},7:{start:{line:63,column:6},end:{line:63,column:63}},8:{start:{line:64,column:56},end:{line:64,column:71}},9:{start:{line:65,column:22},end:{line:65,column:86}},10:{start:{line:66,column:44},end:{line:66,column:55}},11:{start:{line:67,column:19},end:{line:67,column:42}},12:{start:{line:68,column:31},end:{line:68,column:101}},13:{start:{line:69,column:28},end:{line:76,column:3}},14:{start:{line:70,column:4},end:{line:72,column:5}},15:{start:{line:71,column:6},end:{line:71,column:16}},16:{start:{line:73,column:4},end:{line:75,column:5}},17:{start:{line:74,column:6},end:{line:74,column:19}},18:{start:{line:77,column:17},end:{line:83,column:27}},19:{start:{line:78,column:4},end:{line:79,column:13}},20:{start:{line:79,column:6},end:{line:79,column:13}},21:{start:{line:80,column:4},end:{line:80,column:33}},22:{start:{line:81,column:4},end:{line:81,column:26}},23:{start:{line:82,column:4},end:{line:82,column:34}},24:{start:{line:84,column:2},end:{line:88,column:9}},25:{start:{line:85,column:4},end:{line:87,column:5}},26:{start:{line:86,column:6},end:{line:86,column:20}},27:{start:{line:89,column:25},end:{line:100,column:3}},28:{start:{line:90,column:23},end:{line:90,column:37}},29:{start:{line:91,column:4},end:{line:98,column:5}},30:{start:{line:92,column:6},end:{line:94,column:7}},31:{start:{line:93,column:8},end:{line:93,column:43}},32:{start:{line:95,column:6},end:{line:97,column:24}},33:{start:{line:96,column:8},end:{line:96,column:27}},34:{start:{line:99,column:4},end:{line:99,column:16}},35:{start:{line:101,column:24},end:{line:108,column:3}},36:{start:{line:102,column:4},end:{line:104,column:5}},37:{start:{line:103,column:6},end:{line:103,column:17}},38:{start:{line:105,column:4},end:{line:107,column:5}},39:{start:{line:106,column:6},end:{line:106,column:20}},40:{start:{line:109,column:2},end:{line:113,column:7}},41:{start:{line:115,column:0},end:{line:130,column:2}},42:{start:{line:133,column:0},end:{line:265,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:35,column:75},end:{line:35,column:76}},loc:{start:{line:38,column:6},end:{line:40,column:2}},line:38},1:{name:"(anonymous_1)",decl:{start:{line:41,column:35},end:{line:41,column:36}},loc:{start:{line:57,column:11},end:{line:114,column:1}},line:57},2:{name:"(anonymous_2)",decl:{start:{line:69,column:28},end:{line:69,column:29}},loc:{start:{line:69,column:34},end:{line:76,column:3}},line:69},3:{name:"(anonymous_3)",decl:{start:{line:77,column:29},end:{line:77,column:30}},loc:{start:{line:77,column:44},end:{line:83,column:3}},line:77},4:{name:"(anonymous_4)",decl:{start:{line:84,column:12},end:{line:84,column:13}},loc:{start:{line:84,column:18},end:{line:88,column:3}},line:84},5:{name:"(anonymous_5)",decl:{start:{line:89,column:25},end:{line:89,column:26}},loc:{start:{line:89,column:32},end:{line:100,column:3}},line:89},6:{name:"(anonymous_6)",decl:{start:{line:95,column:41},end:{line:95,column:42}},loc:{start:{line:95,column:47},end:{line:97,column:7}},line:95},7:{name:"(anonymous_7)",decl:{start:{line:101,column:24},end:{line:101,column:25}},loc:{start:{line:101,column:31},end:{line:108,column:3}},line:101}},branchMap:{0:{loc:{start:{line:38,column:15},end:{line:38,column:63}},type:"cond-expr",locations:[{start:{line:38,column:30},end:{line:38,column:47}},{start:{line:38,column:50},end:{line:38,column:63}}],line:38},1:{loc:{start:{line:48,column:2},end:{line:48,column:28}},type:"default-arg",locations:[{start:{line:48,column:23},end:{line:48,column:28}}],line:48},2:{loc:{start:{line:49,column:2},end:{line:49,column:20}},type:"default-arg",locations:[{start:{line:49,column:17},end:{line:49,column:20}}],line:49},3:{loc:{start:{line:50,column:2},end:{line:50,column:24}},type:"default-arg",locations:[{start:{line:50,column:16},end:{line:50,column:24}}],line:50},4:{loc:{start:{line:51,column:2},end:{line:51,column:20}},type:"default-arg",locations:[{start:{line:51,column:15},end:{line:51,column:20}}],line:51},5:{loc:{start:{line:52,column:2},end:{line:52,column:19}},type:"default-arg",locations:[{start:{line:52,column:14},end:{line:52,column:19}}],line:52},6:{loc:{start:{line:53,column:15},end:{line:53,column:43}},type:"default-arg",locations:[{start:{line:53,column:38},end:{line:53,column:43}}],line:53},7:{loc:{start:{line:54,column:2},end:{line:54,column:36}},type:"default-arg",locations:[{start:{line:54,column:31},end:{line:54,column:36}}],line:54},8:{loc:{start:{line:65,column:22},end:{line:65,column:86}},type:"cond-expr",locations:[{start:{line:65,column:44},end:{line:65,column:64}},{start:{line:65,column:67},end:{line:65,column:86}}],line:65},9:{loc:{start:{line:68,column:31},end:{line:68,column:101}},type:"binary-expr",locations:[{start:{line:68,column:31},end:{line:68,column:39}},{start:{line:68,column:44},end:{line:68,column:57}},{start:{line:68,column:61},end:{line:68,column:73}},{start:{line:68,column:77},end:{line:68,column:100}}],line:68},10:{loc:{start:{line:70,column:4},end:{line:72,column:5}},type:"if",locations:[{start:{line:70,column:4},end:{line:72,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:70},11:{loc:{start:{line:73,column:4},end:{line:75,column:5}},type:"if",locations:[{start:{line:73,column:4},end:{line:75,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:73},12:{loc:{start:{line:78,column:4},end:{line:79,column:13}},type:"if",locations:[{start:{line:78,column:4},end:{line:79,column:13}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:78},13:{loc:{start:{line:85,column:4},end:{line:87,column:5}},type:"if",locations:[{start:{line:85,column:4},end:{line:87,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:85},14:{loc:{start:{line:85,column:8},end:{line:85,column:60}},type:"binary-expr",locations:[{start:{line:85,column:8},end:{line:85,column:34}},{start:{line:85,column:38},end:{line:85,column:60}}],line:85},15:{loc:{start:{line:91,column:4},end:{line:98,column:5}},type:"if",locations:[{start:{line:91,column:4},end:{line:98,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:91},16:{loc:{start:{line:92,column:6},end:{line:94,column:7}},type:"if",locations:[{start:{line:92,column:6},end:{line:94,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:92},17:{loc:{start:{line:102,column:4},end:{line:104,column:5}},type:"if",locations:[{start:{line:102,column:4},end:{line:104,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:102},18:{loc:{start:{line:105,column:4},end:{line:107,column:5}},type:"if",locations:[{start:{line:105,column:4},end:{line:107,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:105},19:{loc:{start:{line:105,column:8},end:{line:105,column:53}},type:"binary-expr",locations:[{start:{line:105,column:8},end:{line:105,column:25}},{start:{line:105,column:29},end:{line:105,column:53}}],line:105},20:{loc:{start:{line:111,column:55},end:{line:111,column:251}},type:"cond-expr",locations:[{start:{line:111,column:85},end:{line:111,column:171}},{start:{line:111,column:190},end:{line:111,column:251}}],line:111},21:{loc:{start:{line:112,column:4},end:{line:112,column:230}},type:"binary-expr",locations:[{start:{line:112,column:4},end:{line:112,column:24}},{start:{line:112,column:44},end:{line:112,column:230}}],line:112}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0,0],9:[0,0,0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/forms/SearchBar/SearchBar.tsx"],names:["React","useCallback","useEffect","useState","styled","isNonEmptyString","isNotNilOrEmpty","isNotUndefined","PropTypes","pipe","cls","getColor","getFormStyle","getSpace","pxToRem","Input","SpaceSizes","Icon","IconTypes","SSCIconNames","Spinner","useField","CLX_COMPONENT","SearchBarRoot","div","withConfig","displayName","componentId","IconWrapper","SearchIconWrapper","md","ClearButton","SearchInput","lgPlus","$isClearable","theme","SearchBar","forwardRef","value","valueFromProps","defaultValue","onChange","onChangeFromProps","onKeyUp","onClear","onSearch","hasDebouncedSearch","debounceTime","placeholder","isDisabled","isInvalid","isSearching","isSearchingFromProps","shouldTriggerSearchOnMount","className","rest","ref","isControlled","clearValue","internalIsSearching","setInternalIsSearching","undefined","typingTimeout","setTypingTimeout","hasValue","isClearButtonVisible","handleClearSearch","search","val","handleOnChange","e","eventValue","target","window","clearTimeout","setTimeout","handleOnKeyUp","key","ssc","times","propTypes","string","bool","number","func"],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b2227e0806c89c46b052098f6e931b847c319309"},n=a[i]||(a[i]={});(!n[l]||n[l].hash!==t)&&(n[l]=s);var c=n[l];return A=function(){return c},c}A();const iA=(A().s[0]++,p.div.withConfig({displayName:"SearchBar__SearchBarRoot",componentId:"sc-cl9trn-0"})(["position:relative;"])),_=(A().s[1]++,p.div.withConfig({displayName:"SearchBar__IconWrapper",componentId:"sc-cl9trn-1"})(["position:absolute;top:0;display:flex;align-items:center;color:",";"],x("neutral.800"))),tA=(A().s[2]++,p(_).withConfig({displayName:"SearchBar__SearchIconWrapper",componentId:"sc-cl9trn-2"})(["left:0;padding:",";height:",";"],E(B.md),D(Q("fieldHeight"),K))),aA=(A().s[3]++,p(_).withConfig({displayName:"SearchBar__ClearButton",componentId:"sc-cl9trn-3"})(["right:",";height:",";background:none;border:none;border-radius:0;cursor:pointer;&:hover,&:focus{::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:24px;height:24px;border-radius:100%;background-color:",";z-index:-1;}}"],E(B.md),D(Q("fieldHeight"),K),x("error.500"))),cA=(A().s[4]++,p(lA).withConfig({displayName:"SearchBar__SearchInput",componentId:"sc-cl9trn-4"})(["padding-left:",";padding-right:",";"],E(B.lgPlus),({$isClearable:l,theme:t})=>(A().f[0]++,A().s[5]++,E(l?(A().b[0][0]++,B.lgPlus):(A().b[0][1]++,B.md),{theme:t})))),I=(A().s[6]++,X.forwardRef(({value:l,defaultValue:t,onChange:a,onKeyUp:i,onClear:s,onSearch:n,hasDebouncedSearch:c=(A().b[1][0]++,!1),debounceTime:g=(A().b[2][0]++,500),placeholder:S=(A().b[3][0]++,"Search"),isDisabled:f=(A().b[4][0]++,!1),isInvalid:h=(A().b[5][0]++,!1),isSearching:N=(A().b[6][0]++,!1),shouldTriggerSearchOnMount:k=(A().b[7][0]++,!1),className:V,...T},j)=>{A().f[1]++;const{value:m,onChange:Y,isControlled:b,clearValue:q}=(A().s[7]++,oA(l,t,a)),[w,M]=(A().s[8]++,d.useState(!1)),z=(A().s[9]++,n===void 0?(A().b[8][0]++,N):(A().b[8][1]++,w)),[U,P]=(A().s[10]++,d.useState(0)),F=(A().s[11]++,AA(m)),O=(A().s[12]++,A().b[9][0]++,F&&(A().b[9][1]++,!b||(A().b[9][2]++,b&&(A().b[9][3]++,C(s)))));A().s[13]++;const R=()=>{A().f[2]++,A().s[14]++,s?(A().b[10][0]++,A().s[15]++,s()):A().b[10][1]++,A().s[16]++,b?A().b[11][1]++:(A().b[11][0]++,A().s[17]++,q())},y=(A().s[18]++,d.useCallback(async r=>{if(A().f[3]++,A().s[19]++,h){A().b[12][0]++,A().s[20]++;return}else A().b[12][1]++;A().s[21]++,M(!0),A().s[22]++,await(n==null?void 0:n(r)),A().s[23]++,M(!1)},[h,n]));A().s[24]++,d.useEffect(()=>{A().f[4]++,A().s[25]++,A().b[14][0]++,k&&(A().b[14][1]++,eA(m))?(A().b[13][0]++,A().s[26]++,y(m)):A().b[13][1]++},[]),A().s[27]++;const H=r=>{A().f[5]++;const J=(A().s[28]++,r.target.value);A().s[29]++,c?(A().b[15][0]++,A().s[30]++,U?(A().b[16][0]++,A().s[31]++,window.clearTimeout(U)):A().b[16][1]++,A().s[32]++,P(window.setTimeout(()=>{A().f[6]++,A().s[33]++,y(J)},g))):A().b[15][1]++,A().s[34]++,Y(r)};A().s[35]++;const L=r=>{A().f[7]++,A().s[36]++,C(i)?(A().b[17][0]++,A().s[37]++,i(r)):A().b[17][1]++,A().s[38]++,A().b[19][0]++,r.key==="Enter"&&(A().b[19][1]++,C(n))?(A().b[18][0]++,A().s[39]++,y(m)):A().b[18][1]++};return A().s[40]++,u.jsxs(iA,{className:$(Z,V),children:[u.jsx(cA,{...T,ref:j,$isClearable:O,isDisabled:f,isInvalid:h,placeholder:S,type:"search",value:m,onChange:H,onKeyUp:L}),u.jsx(tA,{children:z?(A().b[20][0]++,u.jsx(nA,{borderWidth:2,height:16,verticalMargin:0,width:16,dark:!0})):(A().b[20][1]++,u.jsx(G,{name:v.search,type:W.ssc}))}),(A().b[21][0]++,O&&(A().b[21][1]++,u.jsx(aA,{"aria-label":"Clear search value",as:"button",onClick:R,children:u.jsx(G,{name:v.times,type:W.ssc})})))]})}));A().s[41]++;I.propTypes={value:o.string,defaultValue:o.string,hasDebouncedSearch:o.bool,debounceTime:o.number,isDisabled:o.bool,isInvalid:o.bool,isSearching:o.bool,shouldTriggerSearchOnMount:o.bool,placeholder:o.string,className:o.string,onChange:o.func,onClear:o.func,onSearch:o.func,onKeyUp:o.func};const IA=I;A().s[42]++;I.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{hasDebouncedSearch:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},debounceTime:{defaultValue:{value:"500",computed:!1},description:"",type:{name:"number"},required:!1},placeholder:{defaultValue:{value:"'Search'",computed:!1},description:"",type:{name:"string"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isInvalid:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isSearching:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},shouldTriggerSearchOnMount:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},value:{description:"",type:{name:"string"},required:!1},defaultValue:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onClear:{description:"",type:{name:"func"},required:!1},onSearch:{description:"",type:{name:"func"},required:!1},onKeyUp:{description:"",type:{name:"func"},required:!1}}};export{IA as S};
//# sourceMappingURL=SearchBar-BaGEzyeS.js.map
