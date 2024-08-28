import{j as g}from"./jsx-runtime-Cw0GR0a5.js";import{P as M}from"./index-BRV0Se7Z.js";import{_ as R}from"./extends-CF3RwP-h.js";import{_ as I,m as T,g as j,a as G,b as K,c as w,d as _,e as D,f as U,u as W,S as q}from"./Select-CTJSTwH3.js";import{_ as X,a as F,b as J}from"./unsupportedIterableToArray-xuqNRLo1.js";import{R as Y,r as z}from"./index-CTjT7uj6.js";import"./index-DIVhMF2i.js";import{c as k}from"./index-C7IrpltL.js";import{S as H,b as $}from"./index-C_SwQgDv.js";import{h as E}from"./index-DzoB_gWM.js";var V=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,s=String(t).toLowerCase(),o=String(r.getOptionValue(a)).toLowerCase(),i=String(r.getOptionLabel(a)).toLowerCase();return o===s||i===s},Q={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,a,r,s){return!(!t||a.some(function(o){return V(t,o,s)})||r.some(function(o){return V(t,o,s)}))},getNewOptionData:function(t,a){return{label:a,value:t,__isNew__:!0}},getOptionValue:j,getOptionLabel:G},Z=I({allowCreateWhileLoading:!1,createOptionPosition:"last"},Q),x=function(t){var a,r;return r=a=function(s){X(i,s);var o=K(i);function i(p){var e;J(this,i),e=o.call(this,p),e.select=void 0,e.onChange=function(u,m){var A=e.props,y=A.getNewOptionData,d=A.inputValue,S=A.isMulti,f=A.onChange,v=A.onCreateOption,B=A.value,h=A.name;if(m.action!=="select-option")return f(u,m);var C=e.state.newOption,c=Array.isArray(u)?u:[u];if(c[c.length-1]===C){if(v)v(d);else{var P=y(d,d),L={action:"create-option",name:h,option:P};f(S?[].concat(w(_(B)),[P]):P,L)}return}f(u,m)};var b=p.options||[];return e.state={newOption:void 0,options:b},e}return F(i,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){var e=this,b=this.state.options;return Y.createElement(t,R({},this.props,{ref:function(m){e.select=m},options:b,onChange:this.onChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,b){var u=e.allowCreateWhileLoading,m=e.createOptionPosition,A=e.formatCreateLabel,y=e.getNewOptionData,d=e.inputValue,S=e.isLoading,f=e.isValidNewOption,v=e.value,B=e.getOptionValue,h=e.getOptionLabel,C=e.options||[],c=b.newOption;return f(d,_(v),C,{getOptionValue:B,getOptionLabel:h})?c=y(d,A(d)):c=void 0,{newOption:c,options:(u||!S)&&c?m==="first"?[c].concat(w(C)):[].concat(w(C),[c]):C}}}]),i}(z.Component),a.defaultProps=Z,r},ee=x(D),ae=T(ee);const ne=ae;var te=x(D),le=T(te),re=U(le);const oe=re;function n(){var l="/Users/radekpodrazky/Projects/design-system/src/components/forms/Select/CreatableSelect.tsx",t="74ce34ba9b0c46d8d999f9e39629bb56333156f1",a=window,r="__coverage__",s={path:"/Users/radekpodrazky/Projects/design-system/src/components/forms/Select/CreatableSelect.tsx",statementMap:{0:{start:{line:11,column:26},end:{line:14,column:4}},1:{start:{line:11,column:46},end:{line:14,column:4}},2:{start:{line:11,column:78},end:{line:14,column:4}},3:{start:{line:20,column:22},end:{line:20,column:43}},4:{start:{line:21,column:2},end:{line:23,column:3}},5:{start:{line:22,column:4},end:{line:22,column:181}},6:{start:{line:24,column:2},end:{line:24,column:174}},7:{start:{line:26,column:0},end:{line:29,column:2}},8:{start:{line:30,column:0},end:{line:30,column:51}},9:{start:{line:31,column:0},end:{line:31,column:48}},10:{start:{line:34,column:0},end:{line:252,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:26},end:{line:11,column:27}},loc:{start:{line:11,column:46},end:{line:14,column:4}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:11,column:46},end:{line:11,column:47}},loc:{start:{line:11,column:78},end:{line:14,column:4}},line:11},2:{name:"CreatableSelect",decl:{start:{line:15,column:9},end:{line:15,column:24}},loc:{start:{line:19,column:3},end:{line:25,column:1}},line:19}},branchMap:{0:{loc:{start:{line:16,column:2},end:{line:16,column:27}},type:"default-arg",locations:[{start:{line:16,column:19},end:{line:16,column:27}}],line:16},1:{loc:{start:{line:17,column:2},end:{line:17,column:17}},type:"default-arg",locations:[{start:{line:17,column:12},end:{line:17,column:17}}],line:17},2:{loc:{start:{line:21,column:2},end:{line:23,column:3}},type:"if",locations:[{start:{line:21,column:2},end:{line:23,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:21}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0},b:{0:[0],1:[0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/forms/Select/CreatableSelect.tsx"],names:["PropTypes","CreatableReactSelect","AsyncCreatableReactSelect","cls","Strong","TextVariants","useSelectProps","Select","CLX_COMPONENT","renderCreateLabel","createNewLabel","inputValue","inherit","CreatableSelect","isAsync","props","selectProps","className","propTypes","string","defaultProps","displayName"],mappings:"AAeI,mBACE,KADF;AAdJ,OAAOA,eAAe;AACtB,OAAOC,0BAA0B;AACjC,OAAOC,+BAA+B;AACtC,OAAOC,SAAS;AAEhB,SAASC,cAAc;AACvB,SAASC,oBAAoB;AAC7B,SAASC,sBAAsB;AAC/B,OAAOC,YAAY;AAEnB,SAASC,qBAAqB;AAE9B,MAAMC,oBAAoBA,CAACC,mBAA2B,CAACC,eAEnD,iCACE;AAAA,sBAAC,UAAMD,0BAAe;AAAA,EACtB,oBAAC,UAAO,SAASL,aAAaO,SAAUD,sBAAW;AAAA,GACrD;AAEJ,SAASE,gBAAiD;AAAA,EACxDH,iBAAiB;AAAA,EACjBI,UAAU;AAAA,EACV,GAAGC;AAC0B,GAAuB;AACpD,QAAMC,cAAcV,eAAwBS,KAAK;AAEjD,MAAID,SAAS;AACX,WACE,oBAAC,6BACC,WAAWX,IAAIK,eAAeO,OAAOE,SAAS,GAC9C,mBAAmBR,kBAAkBC,cAAc,GACnD,GAAIM,aACJ;AAAA,EAEN;AAEA,SACE,oBAAC,wBACC,WAAWb,IAAIK,eAAeO,OAAOE,SAAS,GAC9C,mBAAmBR,kBAAkBC,cAAc,GACnD,GAAIM,aACJ;AAEN;AAEAH,gBAAgBK,YAAY;AAAA,EAC1B,GAAGX,OAAOW;AAAAA,EACVR,gBAAgBV,UAAUmB;AAC5B;AACAN,gBAAgBO,eAAeb,OAAOa;AACtCP,gBAAgBQ,cAAc;AAE9B,eAAeR;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"74ce34ba9b0c46d8d999f9e39629bb56333156f1"},o=a[r]||(a[r]={});(!o[l]||o[l].hash!==t)&&(o[l]=s);var i=o[l];return n=function(){return i},i}n();n().s[0]++;const N=l=>(n().f[0]++,n().s[1]++,t=>(n().f[1]++,n().s[2]++,g.jsxs(g.Fragment,{children:[g.jsx("span",{children:l}),g.jsx(H,{variant:$.inherit,children:t})]})));function O({createNewLabel:l=(n().b[0][0]++,"Create"),isAsync:t=(n().b[1][0]++,!1),...a}){n().f[2]++;const r=(n().s[3]++,W(a));return n().s[4]++,t?(n().b[2][0]++,n().s[5]++,g.jsx(oe,{className:k(E,a==null?void 0:a.className),formatCreateLabel:N(l),...r})):(n().b[2][1]++,n().s[6]++,g.jsx(ne,{className:k(E,a==null?void 0:a.className),formatCreateLabel:N(l),...r}))}n().s[7]++;O.propTypes={...q.propTypes,createNewLabel:M.string};n().s[8]++;O.defaultProps=q.defaultProps;n().s[9]++;O.displayName="CreatableSelect";n().s[10]++;O.__docgenInfo={description:"",methods:[],displayName:"CreatableSelect",props:{defaultIsMenuOpen:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},menuActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"Array<ActionKinds<[MenuActionArgs<IsMulti>]>>"},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"ActionKindsPropType"}}},maxPillLabelLength:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1},type:{name:"number"}},maxVisibleItem:{required:!1,tsType:{name:"number"},description:"",type:{name:"number"}},isMenuPositionRelative:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1},type:{name:"string"}},createNewLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create'",computed:!1},type:{name:"string"}},isAsync:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isClearable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"custom",raw:"OptionPropType"},{name:"custom",raw:"GroupPropType"}]}},required:!1},isMulti:{description:"",type:{name:"bool"},required:!1},defaultValue:{description:"",type:{name:"union",value:[{name:"custom",raw:"OptionPropType"},{name:"arrayOf",value:{name:"custom",raw:"OptionPropType"}}]},required:!1},defaultInputValue:{description:"",type:{name:"string"},required:!1},components:{description:"",type:{name:"shape",value:{}},required:!1}}};export{O as C};
//# sourceMappingURL=CreatableSelect-DTjPuRte.js.map
