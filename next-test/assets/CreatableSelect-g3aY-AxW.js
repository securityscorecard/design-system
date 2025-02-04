import{j as g}from"./jsx-runtime-CfatFE5O.js";import{_ as D}from"./DSProvider-mgEeOsVG.js";import{_ as q,m as M,g as R,a as F,b as z,c as L,d as x,S as j,e as B,u as G}from"./useSelectProps-BrAIVEgQ.js";import{_ as U,a as W,b as K}from"./unsupportedIterableToArray-xuqNRLo1.js";import{R as T,r as $}from"./index-ClcD9ViR.js";import"./index-_KdZNTQd.js";import{c as P}from"./index-DxcpycWO.js";import{S as J,b as X}from"./index-DZGjp5Sd.js";import{a as w}from"./constants-CHqWh-7J.js";var k=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",l=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,c=String(t).toLowerCase(),i=String(r.getOptionValue(l)).toLowerCase(),s=String(r.getOptionLabel(l)).toLowerCase();return i===c||s===c},Y={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,l,r,c){return!(!t||l.some(function(i){return k(t,i,c)})||r.some(function(i){return k(t,i,c)}))},getNewOptionData:function(t,l){return{label:l,value:t,__isNew__:!0}},getOptionValue:R,getOptionLabel:F},Z=q({allowCreateWhileLoading:!1,createOptionPosition:"last"},Y),E=function(t){var l,r;return r=l=function(c){U(s,c);var i=z(s);function s(f){var n;K(this,s),n=i.call(this,f),n.select=void 0,n.onChange=function(u,A){var m=n.props,h=m.getNewOptionData,p=m.inputValue,y=m.isMulti,C=m.onChange,v=m.onCreateOption,O=m.value,_=m.name;if(A.action!=="select-option")return C(u,A);var b=n.state.newOption,d=Array.isArray(u)?u:[u];if(d[d.length-1]===b){if(v)v(p);else{var S=h(p,p),V={action:"create-option",name:_,option:S};C(y?[].concat(L(x(O)),[S]):S,V)}return}C(u,A)};var o=f.options||[];return n.state={newOption:void 0,options:o},n}return W(s,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){var n=this,o=this.state.options;return T.createElement(t,D({},this.props,{ref:function(A){n.select=A},options:o,onChange:this.onChange}))}}],[{key:"getDerivedStateFromProps",value:function(n,o){var u=n.allowCreateWhileLoading,A=n.createOptionPosition,m=n.formatCreateLabel,h=n.getNewOptionData,p=n.inputValue,y=n.isLoading,C=n.isValidNewOption,v=n.value,O=n.getOptionValue,_=n.getOptionLabel,b=n.options||[],d=o.newOption;return C(p,x(v),b,{getOptionValue:O,getOptionLabel:_})?d=h(p,m(p)):d=void 0,{newOption:d,options:(u||!y)&&d?A==="first"?[d].concat(L(b)):[].concat(L(b),[d]):b}}}]),s}($.Component),l.defaultProps=Z,r},H=E(j),Q=M(H),ee=E(j),ne=M(ee),te=B(ne);function e(){var a="/Users/radekpodrazky/Projects/design-system/src/components/forms/Select/CreatableSelect.tsx",t="bc595c4bd702fb655b4c5cc5fffc173351919d0e",l=window,r="__coverage__",c={path:"/Users/radekpodrazky/Projects/design-system/src/components/forms/Select/CreatableSelect.tsx",statementMap:{0:{start:{line:9,column:26},end:{line:12,column:4}},1:{start:{line:9,column:46},end:{line:12,column:4}},2:{start:{line:9,column:78},end:{line:12,column:4}},3:{start:{line:25,column:22},end:{line:34,column:4}},4:{start:{line:35,column:2},end:{line:37,column:3}},5:{start:{line:36,column:4},end:{line:36,column:181}},6:{start:{line:38,column:2},end:{line:38,column:174}},7:{start:{line:40,column:0},end:{line:40,column:48}},8:{start:{line:42,column:0},end:{line:48,column:50}},9:{start:{line:44,column:4},end:{line:44,column:52}},10:{start:{line:46,column:4},end:{line:46,column:1501}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:26},end:{line:9,column:27}},loc:{start:{line:9,column:46},end:{line:12,column:4}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:9,column:46},end:{line:9,column:47}},loc:{start:{line:9,column:78},end:{line:12,column:4}},line:9},2:{name:"CreatableSelect",decl:{start:{line:13,column:9},end:{line:13,column:24}},loc:{start:{line:24,column:3},end:{line:39,column:1}},line:24}},branchMap:{0:{loc:{start:{line:14,column:2},end:{line:14,column:27}},type:"default-arg",locations:[{start:{line:14,column:19},end:{line:14,column:27}}],line:14},1:{loc:{start:{line:15,column:2},end:{line:15,column:17}},type:"default-arg",locations:[{start:{line:15,column:12},end:{line:15,column:17}}],line:15},2:{loc:{start:{line:16,column:2},end:{line:16,column:18}},type:"default-arg",locations:[{start:{line:16,column:16},end:{line:16,column:18}}],line:16},3:{loc:{start:{line:17,column:2},end:{line:17,column:19}},type:"default-arg",locations:[{start:{line:17,column:14},end:{line:17,column:19}}],line:17},4:{loc:{start:{line:18,column:2},end:{line:18,column:20}},type:"default-arg",locations:[{start:{line:18,column:15},end:{line:18,column:20}}],line:18},5:{loc:{start:{line:19,column:2},end:{line:19,column:21}},type:"default-arg",locations:[{start:{line:19,column:16},end:{line:19,column:21}}],line:19},6:{loc:{start:{line:20,column:2},end:{line:20,column:25}},type:"default-arg",locations:[{start:{line:20,column:23},end:{line:20,column:25}}],line:20},7:{loc:{start:{line:21,column:2},end:{line:21,column:32}},type:"default-arg",locations:[{start:{line:21,column:27},end:{line:21,column:32}}],line:21},8:{loc:{start:{line:22,column:2},end:{line:22,column:16}},type:"default-arg",locations:[{start:{line:22,column:14},end:{line:22,column:16}}],line:22},9:{loc:{start:{line:35,column:2},end:{line:37,column:3}},type:"if",locations:[{start:{line:35,column:2},end:{line:37,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0],9:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/forms/Select/CreatableSelect.tsx"],names:["placeholder","isInvalid","isDisabled","isClearable","maxPillLabelLength","isMenuPositionRelative","className","props","CreatableSelect"],mappings:"AAYI;AAZJ;AACA;AACA;AAEA;AACA;AACA;AAEA;AAEA;AAGM;AAAsB;AAC6B;AAGzD;AAA0D;AACvC;AACP;AACI;AACF;AACC;AACC;AACO;AACI;AACb;AAEiB;AAC7B;AAA4C;AAC1CA;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACGC;AAGL;AACE;AAKI;AAIN;AAOF;AAEAC;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bc595c4bd702fb655b4c5cc5fffc173351919d0e"},i=l[r]||(l[r]={});(!i[a]||i[a].hash!==t)&&(i[a]=c);var s=i[a];return e=function(){return s},s}e();e().s[0]++;const I=a=>(e().f[0]++,e().s[1]++,t=>(e().f[1]++,e().s[2]++,g.jsxs(g.Fragment,{children:[g.jsx("span",{children:a}),g.jsx(J,{variant:X.inherit,children:t})]})));function N({createNewLabel:a=(e().b[0][0]++,"Create"),isAsync:t=(e().b[1][0]++,!1),placeholder:l=(e().b[2][0]++,""),isInvalid:r=(e().b[3][0]++,!1),isDisabled:c=(e().b[4][0]++,!1),isClearable:i=(e().b[5][0]++,!1),maxPillLabelLength:s=(e().b[6][0]++,16),isMenuPositionRelative:f=(e().b[7][0]++,!1),className:n=(e().b[8][0]++,""),...o}){e().f[2]++;const u=(e().s[3]++,G({placeholder:l,isInvalid:r,isDisabled:c,isClearable:i,maxPillLabelLength:s,isMenuPositionRelative:f,className:n,...o}));return e().s[4]++,t?(e().b[9][0]++,e().s[5]++,g.jsx(te,{className:P(w,o==null?void 0:o.className),formatCreateLabel:I(a),...u})):(e().b[9][1]++,e().s[6]++,g.jsx(Q,{className:P(w,o==null?void 0:o.className),formatCreateLabel:I(a),...u}))}e().s[7]++;N.displayName="CreatableSelect";e().s[8]++;try{e().s[9]++,N.displayName="CreatableSelect",e().s[10]++,N.__docgenInfo={description:"",displayName:"CreatableSelect",props:{defaultIsMenuOpen:{defaultValue:null,description:"",name:"defaultIsMenuOpen",required:!1,type:{name:"boolean"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!1,type:{name:"ActionKinds<[MenuActionArgs<IsMulti>]>[]"}},maxPillLabelLength:{defaultValue:{value:"16"},description:"",name:"maxPillLabelLength",required:!1,type:{name:"number"}},maxVisibleItem:{defaultValue:null,description:"",name:"maxVisibleItem",required:!1,type:{name:"number"}},isMenuPositionRelative:{defaultValue:{value:"false"},description:"",name:"isMenuPositionRelative",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:{value:"false"},description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"className attribute applied to the outer component",name:"className",required:!1,type:{name:"string"}},createNewLabel:{defaultValue:{value:"Create"},description:"",name:"createNewLabel",required:!1,type:{name:"string"}},isAsync:{defaultValue:{value:"false"},description:"",name:"isAsync",required:!1,type:{name:"boolean"}}}}}catch{}export{N as C};
//# sourceMappingURL=CreatableSelect-g3aY-AxW.js.map
