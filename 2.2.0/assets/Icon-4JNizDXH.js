import{j as N}from"./jsx-runtime-Cw0GR0a5.js";import{R,r as F}from"./index-CTjT7uj6.js";import{s as L,b as U,j as $,k as B}from"./space-1LtLrmuu.js";import{p as z,i as H,f as M}from"./index-DFvsTZbx.js";import{P as n}from"./index-BRV0Se7Z.js";import{c as K}from"./index-C7IrpltL.js";import{i as X,u as Y}from"./useLogger-Cd66DVRc.js";const xe={angleDown:"angle-down",angleLeft:"angle-left",angleRight:"angle-right",anglesRight:"angles-right",angleUp:"angle-up",arrowUp:"arrow-up",backwardStep:"backward-step",ban:"ban",check:"check",checkCircle:"check-circle",checkCircleSolid:"check-circle-solid",cog:"cog",columns3:"columns-3",compress:"compress",copy:"copy",ellipsisH:"ellipsis-h",ellipsisV:"ellipsis-v",error:"error",errorCircle:"error-circle",exclTriangle:"excl-triangle",exclTriangleSolid:"excl-triangle-solid",expand:"expand",eye:"eye",eyeSlash:"eye-slash",filter:"filter",gripDotsVertical:"grip-dots-vertical",gripLines:"grip-lines",infoCircle:"info-circle",infoCircleOutline:"info-circle-outline",lightbulb:"lightbulb",longArrowLeft:"long-arrow-left",longArrowRight:"long-arrow-right",minus:"minus",plus:"plus",quoteSquare:"quote-square",resize:"resize",search:"search",sitemap:"sitemap",sort:"sort",sortDown:"sort-down",sortUp:"sort-up",thumbstack:"thumbstack",times:"times",upload:"upload",wrench:"wrench"},G={ssc:"ssc",far:"far",fal:"fal",fab:"fab"};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(a){y(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function x(e){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e,t){if(e==null)return{};var r={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Q(e,t){if(e==null)return{};var r=J(e,t),a,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function A(e){return Z(e)||ee(e)||te(e)||re()}function Z(e){if(Array.isArray(e))return C(e)}function ee(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function te(e,t){if(e){if(typeof e=="string")return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}}function C(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e){var t,r=e.beat,a=e.fade,i=e.beatFade,o=e.bounce,u=e.shake,p=e.flash,s=e.spin,l=e.spinPulse,c=e.spinReverse,m=e.pulse,O=e.fixedWidth,h=e.inverse,I=e.border,g=e.listItem,f=e.flip,S=e.size,v=e.rotation,k=e.pull,j=(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":u,"fa-flash":p,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":O,"fa-inverse":h,"fa-border":I,"fa-li":g,"fa-flip":f===!0,"fa-flip-horizontal":f==="horizontal"||f==="both","fa-flip-vertical":f==="vertical"||f==="both"},y(t,"fa-".concat(S),typeof S<"u"&&S!==null),y(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),y(t,"fa-pull-".concat(k),typeof k<"u"&&k!==null),y(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map(function(w){return j[w]?w:null}).filter(function(w){return w})}function ae(e){return e=e-0,e===e}function q(e){return ae(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ie=["style"];function oe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function se(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var a=r.indexOf(":"),i=q(r.slice(0,a)),o=r.slice(a+1).trim();return i.startsWith("webkit")?t[oe(i)]=o:t[i]=o,t},{})}function V(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(s){return V(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,l){var c=t.attributes[l];switch(l){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=se(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?s.attrs[l.toLowerCase()]=c:s.attrs[q(l)]=c}return s},{attrs:{}}),o=r.style,u=o===void 0?{}:o,p=Q(r,ie);return i.attrs.style=d(d({},i.attrs.style),u),e.apply(void 0,[t.tag,d(d({},i.attrs),p)].concat(A(a)))}var W=!1;try{W=!0}catch{}function le(){if(!W&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function E(e){if(e&&x(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(z.icon)return z.icon(e);if(e===null)return null;if(e&&x(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function P(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?y({},e,t):{}}var b=R.forwardRef(function(e,t){var r=e.icon,a=e.mask,i=e.symbol,o=e.className,u=e.title,p=e.titleId,s=e.maskId,l=E(r),c=P("classes",[].concat(A(ne(e)),A(o.split(" ")))),m=P("transform",typeof e.transform=="string"?z.transform(e.transform):e.transform),O=P("mask",E(a)),h=H(l,d(d(d(d({},c),m),O),{},{symbol:i,title:u,titleId:p,maskId:s}));if(!h)return le("Could not find icon",l),null;var I=h.abstract,g={ref:t};return Object.keys(e).forEach(function(f){b.defaultProps.hasOwnProperty(f)||(g[f]=e[f])}),ce(I[0],g)});b.displayName="FontAwesomeIcon";b.propTypes={beat:n.bool,border:n.bool,beatFade:n.bool,bounce:n.bool,className:n.string,fade:n.bool,flash:n.bool,mask:n.oneOfType([n.object,n.array,n.string]),maskId:n.string,fixedWidth:n.bool,inverse:n.bool,flip:n.oneOf([!0,!1,"horizontal","vertical","both"]),icon:n.oneOfType([n.object,n.array,n.string]),listItem:n.bool,pull:n.oneOf(["right","left"]),pulse:n.bool,rotation:n.oneOf([0,90,180,270]),shake:n.bool,size:n.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n.bool,spinPulse:n.bool,spinReverse:n.bool,symbol:n.oneOfType([n.bool,n.string]),title:n.string,titleId:n.string,transform:n.oneOfType([n.string,n.object]),swapOpacity:n.bool};b.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ce=V.bind(null,R.createElement);const fe={sm:"0.875rem",md:"1rem",lg:"1.5rem",xl:"2rem"},D={sm:"1rem",md:"1.5rem",lg:"2rem",xl:"2.5rem"},ue=L.div.withConfig({displayName:"Icon__IconBox",componentId:"sc-1eab7dk-0"})(["display:inline-grid;place-items:center;width:",";height:",";"],({$size:e})=>D[e],({$size:e})=>D[e]),de=({$color:e,theme:t})=>typeof e>"u"?"inherit":e.startsWith("var(")?e:B(e,{theme:t}),pe=L(b).withConfig({shouldForwardProp:e=>!X(e,["margin"])}).withConfig({displayName:"Icon__StyledIcon",componentId:"sc-1eab7dk-1"})(["color:",";font-size:",";",";"],de,({$size:e})=>e&&fe[e],U),_=({name:e,type:t=G.ssc,color:r,size:a,className:i="",hasFixedWidth:o=!1,hasFixedSize:u,...p})=>{const{warn:s}=Y("Icon"),l=F.useRef(null),c=M({iconName:e,prefix:t});if(c===void 0)return s(`Used icon was not found. You need to import it in the icon library. Looking for prefix: ${t}, name: ${e}`),null;const m=N.jsx(pe,{ref:l,$color:r,$hasFixedSize:u,$size:a,className:K($,i),fixedWidth:o,icon:c,...p});return u?N.jsx(ue,{$size:a,children:m}):m},Oe=_;try{_.displayName="Icon",_.__docgenInfo={description:"",displayName:"Icon",props:{hasFixedSize:{defaultValue:null,description:"Apply wrapper box with fixed width and height around the icon. The `size` property has to be\ndefined if set to `true`.\nApply wrapper box with fixed width and height around the icon.",name:"hasFixedSize",required:!1,type:{name:"true"}},size:{defaultValue:null,description:"Sets icon size to one of the predefined sizes",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},type:{defaultValue:{value:"ssc"},description:"Selects correct icon variant from DS or FontAwesome. The `ssc` and `fab` (brand) can be used\nwith any size. The XL size can be used with `fal` (light) but not with `far` (regular) type.\nSmaller sizes can be used with `far` (regular) but not with `fal` (light) type.",name:"type",required:!1,type:{name:"enum",value:[{value:'"ssc"'},{value:'"far"'},{value:'"fal"'},{value:'"fab"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"IconNames"}},color:{defaultValue:null,description:"Changes icon color to defined color from theme",name:"color",required:!1,type:{name:'Color | "var(--sscds-color-icon-success)" | "var(--sscds-color-icon-default)" | "var(--sscds-color-icon-disabled)" | "var(--sscds-color-icon-danger)" | "var(--sscds-color-icon-subtle)" | "var(--sscds-color-icon-warning)" | "var(--sscds-color-icon-inverse)"'}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},hasFixedWidth:{defaultValue:{value:"false"},description:"Sets icon width to fixed size. Useful for aligning icons",name:"hasFixedWidth",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:'**DEPRECATED** kept for backwards compatibility until we remove.\nThe `size` or styled component should be use for setting size.\n@deprecated Use "size" or font size in styled-component',name:"fontSize",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:`**DEPRECATED** kept for backwards compatibility until we remove.
You should always use Button or Link component for interactions.
@deprecated Always use Button or Link component for interactions`,name:"onClick",required:!1,type:{name:"MouseEventHandler"}},margin:{defaultValue:null,description:`**DEPRECATED** use Layout Primitives for layouts
@deprecated use layout primitives instead`,name:"margin",required:!1,type:{name:"SpacingSizeValue"}},padding:{defaultValue:null,description:`**DEPRECATED** use Layout Primitives for layouts
@deprecated use layout primitives instead`,name:"padding",required:!1,type:{name:"SpacingSizeValue"}}}}}catch{}export{Oe as I,xe as S,G as a};
