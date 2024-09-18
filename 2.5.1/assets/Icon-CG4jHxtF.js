import{j as N}from"./jsx-runtime-Cw0GR0a5.js";import{R as B,r as q}from"./index-CTjT7uj6.js";import{s as R}from"./styled-components.browser.esm-xOyuSOjK.js";import{p as S,i as M,f as $,I as U}from"./index-uyLpYamY.js";import{P as r}from"./index-BRV0Se7Z.js";import{c as G}from"./index-C7IrpltL.js";import{A as K,h as H,j as Q}from"./index-DT7C7tog.js";import{i as Y,u as X}from"./useLogger-BRbW6gx4.js";function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?T(Object(t),!0).forEach(function(o){y(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function x(e){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(e)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J(e,n){if(e==null)return{};var t={},o=Object.keys(e),i,a;for(a=0;a<o.length;a++)i=o[a],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Z(e,n){if(e==null)return{};var t=J(e,n),o,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}function P(e){return ee(e)||ne(e)||te(e)||le()}function ee(e){if(Array.isArray(e))return z(e)}function ne(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function te(e,n){if(e){if(typeof e=="string")return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,n)}}function z(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function le(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e){var n,t=e.beat,o=e.fade,i=e.beatFade,a=e.bounce,u=e.shake,A=e.flash,s=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,w=e.fixedWidth,h=e.inverse,I=e.border,v=e.listItem,m=e.flip,O=e.size,g=e.rotation,E=e.pull,j=(n={"fa-beat":t,"fa-fade":o,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":u,"fa-flash":A,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":w,"fa-inverse":h,"fa-border":I,"fa-li":v,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},y(n,"fa-".concat(O),typeof O<"u"&&O!==null),y(n,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),y(n,"fa-pull-".concat(E),typeof E<"u"&&E!==null),y(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(j).map(function(C){return j[C]?C:null}).filter(function(C){return C})}function oe(e){return e=e-0,e===e}function L(e){return oe(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(n,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ie=["style"];function ae(e){return e.charAt(0).toUpperCase()+e.slice(1)}function se(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var o=t.indexOf(":"),i=L(t.slice(0,o)),a=t.slice(o+1).trim();return i.startsWith("webkit")?n[ae(i)]=a:n[i]=a,n},{})}function V(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var o=(n.children||[]).map(function(s){return V(e,s)}),i=Object.keys(n.attributes||{}).reduce(function(s,c){var f=n.attributes[c];switch(c){case"class":s.attrs.className=f,delete n.attributes.class;break;case"style":s.attrs.style=se(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?s.attrs[c.toLowerCase()]=f:s.attrs[L(c)]=f}return s},{attrs:{}}),a=t.style,u=a===void 0?{}:a,A=Z(t,ie);return i.attrs.style=d(d({},i.attrs.style),u),e.apply(void 0,[n.tag,d(d({},i.attrs),A)].concat(P(o)))}var W=!1;try{W=!0}catch{}function ce(){if(!W&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function D(e){if(e&&x(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(S.icon)return S.icon(e);if(e===null)return null;if(e&&x(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function _(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?y({},e,n):{}}var b=B.forwardRef(function(e,n){var t=e.icon,o=e.mask,i=e.symbol,a=e.className,u=e.title,A=e.titleId,s=e.maskId,c=D(t),f=_("classes",[].concat(P(re(e)),P(a.split(" ")))),p=_("transform",typeof e.transform=="string"?S.transform(e.transform):e.transform),w=_("mask",D(o)),h=M(c,d(d(d(d({},f),p),w),{},{symbol:i,title:u,titleId:A,maskId:s}));if(!h)return ce("Could not find icon",c),null;var I=h.abstract,v={ref:n};return Object.keys(e).forEach(function(m){b.defaultProps.hasOwnProperty(m)||(v[m]=e[m])}),ue(I[0],v)});b.displayName="FontAwesomeIcon";b.propTypes={beat:r.bool,border:r.bool,beatFade:r.bool,bounce:r.bool,className:r.string,fade:r.bool,flash:r.bool,mask:r.oneOfType([r.object,r.array,r.string]),maskId:r.string,fixedWidth:r.bool,inverse:r.bool,flip:r.oneOf([!0,!1,"horizontal","vertical","both"]),icon:r.oneOfType([r.object,r.array,r.string]),listItem:r.bool,pull:r.oneOf(["right","left"]),pulse:r.bool,rotation:r.oneOf([0,90,180,270]),shake:r.bool,size:r.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:r.bool,spinPulse:r.bool,spinReverse:r.bool,symbol:r.oneOfType([r.bool,r.string]),title:r.string,titleId:r.string,transform:r.oneOfType([r.string,r.object]),swapOpacity:r.bool};b.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ue=V.bind(null,B.createElement);function l(){var e="/home/runner/work/design-system/design-system/src/components/Icon/Icon.tsx",n="bcc3ba8e3b211cf9de43a3b9cc54b937963eb314",t=window,o="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/Icon/Icon.tsx",statementMap:{0:{start:{line:12,column:18},end:{line:17,column:1}},1:{start:{line:18,column:17},end:{line:23,column:1}},2:{start:{line:24,column:16},end:{line:31,column:22}},3:{start:{line:29,column:6},end:{line:29,column:21}},4:{start:{line:31,column:6},end:{line:31,column:21}},5:{start:{line:32,column:21},end:{line:43,column:1}},6:{start:{line:36,column:2},end:{line:37,column:21}},7:{start:{line:37,column:4},end:{line:37,column:21}},8:{start:{line:38,column:2},end:{line:39,column:18}},9:{start:{line:39,column:4},end:{line:39,column:18}},10:{start:{line:40,column:2},end:{line:42,column:5}},11:{start:{line:44,column:19},end:{line:51,column:48}},12:{start:{line:45,column:35},end:{line:45,column:66}},13:{start:{line:51,column:6},end:{line:51,column:31}},14:{start:{line:52,column:13},end:{line:79,column:1}},15:{start:{line:64,column:6},end:{line:64,column:23}},16:{start:{line:65,column:14},end:{line:65,column:26}},17:{start:{line:66,column:25},end:{line:69,column:4}},18:{start:{line:70,column:2},end:{line:73,column:3}},19:{start:{line:71,column:4},end:{line:71,column:123}},20:{start:{line:72,column:4},end:{line:72,column:16}},21:{start:{line:74,column:31},end:{line:74,column:213}},22:{start:{line:75,column:2},end:{line:77,column:3}},23:{start:{line:76,column:4},end:{line:76,column:73}},24:{start:{line:78,column:2},end:{line:78,column:14}},25:{start:{line:81,column:0},end:{line:87,column:50}},26:{start:{line:83,column:4},end:{line:83,column:30}},27:{start:{line:85,column:4},end:{line:85,column:3193}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:27,column:71},end:{line:27,column:72}},loc:{start:{line:29,column:6},end:{line:29,column:21}},line:29},1:{name:"(anonymous_1)",decl:{start:{line:29,column:23},end:{line:29,column:24}},loc:{start:{line:31,column:6},end:{line:31,column:21}},line:31},2:{name:"(anonymous_2)",decl:{start:{line:32,column:21},end:{line:32,column:22}},loc:{start:{line:35,column:6},end:{line:43,column:1}},line:35},3:{name:"(anonymous_3)",decl:{start:{line:45,column:21},end:{line:45,column:22}},loc:{start:{line:45,column:35},end:{line:45,column:66}},line:45},4:{name:"(anonymous_4)",decl:{start:{line:49,column:54},end:{line:49,column:55}},loc:{start:{line:51,column:6},end:{line:51,column:31}},line:51},5:{name:"(anonymous_5)",decl:{start:{line:52,column:13},end:{line:52,column:14}},loc:{start:{line:61,column:6},end:{line:79,column:1}},line:61}},branchMap:{0:{loc:{start:{line:36,column:2},end:{line:37,column:21}},type:"if",locations:[{start:{line:36,column:2},end:{line:37,column:21}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:36},1:{loc:{start:{line:38,column:2},end:{line:39,column:18}},type:"if",locations:[{start:{line:38,column:2},end:{line:39,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:38},2:{loc:{start:{line:51,column:6},end:{line:51,column:31}},type:"binary-expr",locations:[{start:{line:51,column:6},end:{line:51,column:11}},{start:{line:51,column:15},end:{line:51,column:31}}],line:51},3:{loc:{start:{line:54,column:2},end:{line:54,column:22}},type:"default-arg",locations:[{start:{line:54,column:9},end:{line:54,column:22}}],line:54},4:{loc:{start:{line:57,column:2},end:{line:57,column:16}},type:"default-arg",locations:[{start:{line:57,column:14},end:{line:57,column:16}}],line:57},5:{loc:{start:{line:58,column:2},end:{line:58,column:23}},type:"default-arg",locations:[{start:{line:58,column:18},end:{line:58,column:23}}],line:58},6:{loc:{start:{line:70,column:2},end:{line:73,column:3}},type:"if",locations:[{start:{line:70,column:2},end:{line:73,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:70},7:{loc:{start:{line:75,column:2},end:{line:77,column:3}},type:"if",locations:[{start:{line:75,column:2},end:{line:77,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:75}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0],4:[0],5:[0],6:[0,0],7:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Icon/Icon.tsx"],names:["$color","theme","name","ssc","color","size","hasFixedSize","warn","type"],mappings:"AAgFI;AAhFJ;AACA;AACA;AACA;AAKA;AACA;AAEA;AACA;AAEA;AACA;AAEA;AAAqD;AAC/C;AACA;AACA;AAEN;AACA;AAAoD;AAC9C;AACA;AACA;AAEN;AAEA;AAA0B;AAAA;AAAA;AAKd;AAAQ;AACP;AAAQ;AAGrB;AAAsB;AAAEA;AAAc;AACpC;AAAmC;AACnC;AAA+B;AAC/B;AAAwB;AAAEC;AAC5B;AAEA;AAIG;AAEH;AAAE;AAAA;AAAA;AAEc;AAAQ;AAIxB;AAAc;AACZC;AACiBC;AACjBC;AACAC;AACY;AACI;AAChBC;AAES;AACT;AAAM;AAAEC;AACR;AACA;AAA0C;AAC9BL;AACFM;AAEV;AACED;AAGA;AAAO;AAET;AAaA;AACE;AAAmC;AAGrC;AACF;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bcc3ba8e3b211cf9de43a3b9cc54b937963eb314"},a=t[o]||(t[o]={});(!a[e]||a[e].hash!==n)&&(a[e]=i);var u=a[e];return l=function(){return u},u}l();const fe=(l().s[0]++,{sm:"0.875rem",md:"1rem",lg:"1.5rem",xl:"2rem"}),F=(l().s[1]++,{sm:"1rem",md:"1.5rem",lg:"2rem",xl:"2.5rem"}),me=(l().s[2]++,R.div.withConfig({displayName:"Icon__IconBox",componentId:"sc-1eab7dk-0"})(["display:inline-grid;place-items:center;width:",";height:",";"],({$size:e})=>(l().f[0]++,l().s[3]++,F[e]),({$size:e})=>(l().f[1]++,l().s[4]++,F[e])));l().s[5]++;const de=({$color:e,theme:n})=>(l().f[2]++,l().s[6]++,typeof e>"u"?(l().b[0][0]++,l().s[7]++,"inherit"):(l().b[0][1]++,l().s[8]++,e.startsWith("var(")?(l().b[1][0]++,l().s[9]++,e):(l().b[1][1]++,l().s[10]++,Q(e,{theme:n})))),Ae=(l().s[11]++,R(b).withConfig({shouldForwardProp:e=>(l().f[3]++,l().s[12]++,!Y(e,["margin"]))}).withConfig({displayName:"Icon__StyledIcon",componentId:"sc-1eab7dk-1"})(["color:",";font-size:",";",";"],de,({$size:e})=>(l().f[4]++,l().s[13]++,l().b[2][0]++,e&&(l().b[2][1]++,fe[e])),K));l().s[14]++;const k=({name:e,type:n=(l().b[3][0]++,U.ssc),color:t,size:o,className:i=(l().b[4][0]++,""),hasFixedWidth:a=(l().b[5][0]++,!1),hasFixedSize:u,...A})=>{l().f[5]++;const{warn:s}=(l().s[15]++,X("Icon")),c=(l().s[16]++,q.useRef(null)),f=(l().s[17]++,$({iconName:e,prefix:n}));if(l().s[18]++,f===void 0)return l().b[6][0]++,l().s[19]++,s(`Used icon was not found. You need to import it in the icon library. Looking for prefix: ${n}, name: ${e}`),l().s[20]++,null;l().b[6][1]++;const p=(l().s[21]++,N.jsx(Ae,{ref:c,$color:t,$hasFixedSize:u,$size:o,className:G(H,i),fixedWidth:a,icon:f,...A}));return l().s[22]++,u?(l().b[7][0]++,l().s[23]++,N.jsx(me,{$size:o,children:p})):(l().b[7][1]++,l().s[24]++,p)},we=k;l().s[25]++;try{l().s[26]++,k.displayName="Icon",l().s[27]++,k.__docgenInfo={description:"",displayName:"Icon",props:{hasFixedSize:{defaultValue:null,description:"Apply wrapper box with fixed width and height around the icon. The `size` property has to be\ndefined if set to `true`.\nApply wrapper box with fixed width and height around the icon.",name:"hasFixedSize",required:!1,type:{name:"true"}},size:{defaultValue:null,description:"Sets icon size to one of the predefined sizes",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},type:{defaultValue:{value:"ssc"},description:"Selects correct icon variant from DS or FontAwesome. The `ssc` and `fab` (brand) can be used\nwith any size. The XL size can be used with `fal` (light) but not with `far` (regular) type.\nSmaller sizes can be used with `far` (regular) but not with `fal` (light) type.",name:"type",required:!1,type:{name:"enum",value:[{value:'"ssc"'},{value:'"far"'},{value:'"fal"'},{value:'"fab"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"IconNames"}},color:{defaultValue:null,description:"Changes icon color to defined color from theme",name:"color",required:!1,type:{name:'Color | "var(--sscds-color-icon-info)" | "var(--sscds-color-icon-success)" | "var(--sscds-color-icon-default)" | "var(--sscds-color-icon-disabled)" | "var(--sscds-color-icon-warning)" | "var(--sscds-color-icon-danger)" | "var(--sscds-color-icon-subtle)" | "var(--sscds-color-icon-inverse)"'}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},hasFixedWidth:{defaultValue:{value:"false"},description:"Sets icon width to fixed size. Useful for aligning icons",name:"hasFixedWidth",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:'**DEPRECATED** kept for backwards compatibility until we remove.\nThe `size` or styled component should be use for setting size.\n@deprecated Use "size" or font size in styled-component',name:"fontSize",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:`**DEPRECATED** kept for backwards compatibility until we remove.
You should always use Button or Link component for interactions.
@deprecated Always use Button or Link component for interactions`,name:"onClick",required:!1,type:{name:"MouseEventHandler"}},margin:{defaultValue:null,description:`**DEPRECATED** use Layout Primitives for layouts
@deprecated use layout primitives instead`,name:"margin",required:!1,type:{name:"SpacingSizeValue"}},padding:{defaultValue:null,description:`**DEPRECATED** use Layout Primitives for layouts
@deprecated use layout primitives instead`,name:"padding",required:!1,type:{name:"SpacingSizeValue"}}}}}catch{}export{we as I};
//# sourceMappingURL=Icon-CG4jHxtF.js.map
