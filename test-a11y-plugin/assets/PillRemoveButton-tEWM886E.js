import{j as c}from"./jsx-runtime-Nms4Y4qS.js";import{q as d,A as p}from"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-BC9WaV5B.js";import"./index-0COcc321.js";import{I as m}from"./Inline.enums-6YASdLRa.js";import{S as u}from"./isNotUndefined-DxARNfZG.js";import{S as v}from"./index-BsP7FXMl.js";import"./index-CA8igt89.js";import{I as b}from"./Icon-OPJ4_-kw.js";function a(){var e="/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillWrapper.tsx",A="b192990f77ebe3de6d321945dccadab6b5596937",l=window,r="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillWrapper.tsx",statementMap:{0:{start:{line:5,column:26},end:{line:10,column:374}},1:{start:{line:10,column:6},end:{line:10,column:373}},2:{start:{line:11,column:20},end:{line:15,column:175}},3:{start:{line:15,column:22},end:{line:15,column:175}},4:{start:{line:18,column:0},end:{line:116,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:278},end:{line:8,column:279}},loc:{start:{line:10,column:6},end:{line:10,column:373}},line:10},1:{name:"(anonymous_1)",decl:{start:{line:11,column:20},end:{line:11,column:21}},loc:{start:{line:15,column:22},end:{line:15,column:175}},line:15}},branchMap:{0:{loc:{start:{line:10,column:6},end:{line:10,column:373}},type:"binary-expr",locations:[{start:{line:10,column:6},end:{line:10,column:18}},{start:{line:10,column:22},end:{line:10,column:373}}],line:10}},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillWrapper.tsx"],names:["styled","css","SpaceSizes","Inline","StyledPillWrapper","div","withConfig","displayName","componentId","$isClickable","PillWrapper","children","isClickable","props","xs"],mappings:"AA0CI;AA1CJ,OAAOA,UAAUC,WAAW;AAE5B,SAASC,kBAAkB;AAC3B,SAASC,cAAc;AAGvB,MAAMC,oBAAoBJ,OAAOK,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,4QAAA,GAAA,GAWhC,CAAC;AAAA,EAAEC;AAAa,MAChBA,gBACAR,+VAkBC;AAGL,MAAMS,cAAcA,CAAC;AAAA,EAAEC;AAAAA,EAAUC;AAAAA,EAAa,GAAGC;AAAwB,MACvE,oBAAC,qBAAkB,cAAcD,aAAa,GAAIC,OAChD,8BAAC,UAAO,OAAM,UAAS,KAAKX,WAAWY,IACpCH,UACH,GACF;AAGF,eAAeD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b192990f77ebe3de6d321945dccadab6b5596937"},n=l[r]||(l[r]={});(!n[e]||n[e].hash!==A)&&(n[e]=i);var s=n[e];return a=function(){return s},s}a();const C=(a().s[0]++,d.div.withConfig({displayName:"PillWrapper__StyledPillWrapper",componentId:"sc-1cck2m6-0"})(["display:inline-block;min-width:0;border-radius:var(--sscds-radii-rounded);padding-inline:var(--sscds-pill-padding-inline,var(--sscds-space-2x));background-color:var( --sscds-pill-color-background,var(--sscds-color-background-pill-gray-default) );width:fit-content;",";"],({$isClickable:e})=>(a().f[0]++,a().s[1]++,a().b[0][0]++,e&&(a().b[0][1]++,p(["cursor:pointer;box-shadow:inset 0 0 0 1px var( --sscds-pill-color-border,var(--sscds-color-border-pill-gray-default) );&:hover{background-color:var( --sscds-pill-color-background-hover,var(--sscds-color-background-pill-gray-hover) );box-shadow:inset 0 0 0 1px var( --sscds-pill-color-border-hover,var(--sscds-color-border-pill-gray-hover) );}"])))));a().s[2]++;const h=({children:e,isClickable:A,...l})=>(a().f[1]++,a().s[3]++,c.jsx(C,{$isClickable:A,...l,children:c.jsx(m,{align:"center",gap:u.xs,children:e})}));a().s[4]++;h.__docgenInfo={description:"",methods:[],displayName:"PillWrapper",props:{isClickable:{required:!0,tsType:{name:"StyledPillWrapperProps['$isClickable']",raw:"StyledPillWrapperProps['$isClickable']"},description:"Flag that enabled hover functionality on the pill. This should be used only when\npassing custom element (e.g. `a` tag) throught the `as` property without passing\n`onClick` property."},onClick:{required:!1,tsType:{name:"ReactEventHandler",raw:"React.EventHandler<React.MouseEvent | React.KeyboardEvent>",elements:[{name:"union",raw:"React.MouseEvent | React.KeyboardEvent",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent"},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"}]}]},description:"Callback called when the pill is clicked. Hover functionality is enabled when this\nproperty is passed in, this can be overriden by `isClickable` property when using\ncustom element such as `a` tag without `onClick` property."},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'gray'
| 'blue'
| 'turquoise'
| 'teal'
| 'green'
| 'yellow'
| 'orange'
| 'red'
| 'pink'
| 'purple'
| 'brown'`,elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'turquoise'"},{name:"literal",value:"'teal'"},{name:"literal",value:"'green'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'red'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'brown'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""}}};function o(){var e="/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillLabel.ts",A="c229c5bc353391c8c8e60fa6b74ac0dc38f2ad59",l=window,r="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillLabel.ts",statementMap:{0:{start:{line:2,column:18},end:{line:11,column:4}},1:{start:{line:7,column:6},end:{line:11,column:3}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:349},end:{line:5,column:350}},loc:{start:{line:7,column:6},end:{line:11,column:3}},line:7}},branchMap:{0:{loc:{start:{line:7,column:6},end:{line:11,column:3}},type:"binary-expr",locations:[{start:{line:7,column:6},end:{line:7,column:20}},{start:{line:7,column:24},end:{line:11,column:3}}],line:7}},s:{0:0,1:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillLabel.ts"],names:["styled","PillLabel","div","withConfig","displayName","componentId","$maxLength"],mappings:"AAAA,OAAOA,YAAY;AAInB,MAAMC,YAAYD,OAAOE,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,oVAAA,EAAA,GAexB,CAAC;AAAA,EAAEC;AAAW,MACdA,aAAa,KACb;AAAA,iBACaA,aAAa,CAAC;AAAA;AAAA;AAAA,GAG5B;AAGH,eAAeL;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c229c5bc353391c8c8e60fa6b74ac0dc38f2ad59"},n=l[r]||(l[r]={});(!n[e]||n[e].hash!==A)&&(n[e]=i);var s=n[e];return o=function(){return s},s}o();const _=(o().s[0]++,d.div.withConfig({displayName:"PillLabel",componentId:"sc-nosr4t-0"})(["flex:1 1 0%;white-space:nowrap;color:var(--sscds-pill-color-text,var(--sscds-color-text-pill-gray));font-size:var( --sscds-pill-font-size,var(--sscds-font-size-elementlabel-sm) );font-weight:var( --sscds-pill-font-weight,var(--sscds-font-weight-elementlabel-default) );line-height:var(--sscds-pill-size,var(--sscds-font-lineheight-30));",""],({$maxLength:e})=>(o().f[0]++,o().s[1]++,o().b[0][0]++,e>0&&(o().b[0][1]++,`
    max-width: ${e+2}ch;
    overflow: hidden;
    text-overflow: ellipsis;
  `))));function t(){var e="/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillRemoveButton.tsx",A="9bad6e1fe1731b5e1b5bceb9b4b40a3c1b602b65",l=window,r="__coverage__",i={path:"/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillRemoveButton.tsx",statementMap:{0:{start:{line:5,column:32},end:{line:8,column:552}},1:{start:{line:9,column:25},end:{line:12,column:216}},2:{start:{line:12,column:22},end:{line:12,column:216}},3:{start:{line:15,column:0},end:{line:28,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:25},end:{line:9,column:26}},loc:{start:{line:12,column:22},end:{line:12,column:216}},line:12}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Pill/PillRemoveButton.tsx"],names:["styled","SSCIconNames","Icon","PillRemoveButtonWrapper","button","withConfig","displayName","componentId","PillRemoveButton","pillLabel","props","times"],mappings:"AAkCI;AAlCJ,OAAOA,YAAY;AAEnB,SAASC,oBAAoB;AAC7B,SAASC,YAAY;AAGrB,MAAMC,0BAA0BH,OAAOI,OAAMC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAoB5C,EAAA,CAAA,kiBAAA,CAAA;AAED,MAAMC,mBAAmBA,CAAC;AAAA,EAAEC;AAAAA,EAAW,GAAGC;AAA6B,MACrE,oBAAC,2BACC,cAAY,UAAUD,SAAS,IAC/B,MAAK,UACL,GAAIC,OAEJ,8BAAC,QAAK,MAAMT,aAAaU,OAAO,MAAK,MAAK,cAAY,MAAA,GACxD;AAGF,eAAeH;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9bad6e1fe1731b5e1b5bceb9b4b40a3c1b602b65"},n=l[r]||(l[r]={});(!n[e]||n[e].hash!==A)&&(n[e]=i);var s=n[e];return t=function(){return s},s}t();const g=(t().s[0]++,d.button.withConfig({displayName:"PillRemoveButton__PillRemoveButtonWrapper",componentId:"sc-fs3lsz-0"})(["display:flex;align-items:center;justify-content:center;appearance:none;border:0 none;background:transparent;cursor:pointer;color:var(--sscds-pill-color-text,var(--sscds-color-text-pill-gray));border-radius:var(--sscds-radii-circle);margin-inline-end:calc( var(--sscds-pill-padding-inline,var(--sscds-space-2x)) * -1 ) !important;width:var(--sscds-pill-size,var(--sscds-font-lineheight-30));height:var(--sscds-pill-size,var(--sscds-font-lineheight-30));&:hover,&:focus-visible{background-color:var(--sscds-color-background-action-subtle-hover);}"]));t().s[1]++;const y=({pillLabel:e,...A})=>(t().f[0]++,t().s[2]++,c.jsx(g,{"aria-label":`Remove ${e}`,type:"button",...A,children:c.jsx(b,{name:v.times,size:"sm",hasFixedSize:!0})}));t().s[3]++;y.__docgenInfo={description:"",methods:[],displayName:"PillRemoveButton",props:{pillLabel:{required:!0,tsType:{name:"string"},description:""}}};export{h as P,_ as a,y as b};
//# sourceMappingURL=PillRemoveButton-tEWM886E.js.map
