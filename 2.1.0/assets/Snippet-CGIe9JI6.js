import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{s as b,k as _,h as I}from"./space-B9R18Mwn.js";import{B as x}from"./Button-CKE-X77u.js";import{S as T}from"./Surface-Cs7tekjF.js";import{P as R}from"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{C as B}from"./Text-C1sA-5dj.js";import{E as D}from"./ErrorBoundary-CvEVBj3D.js";import{u as C}from"./useLogger-D4I9buOf.js";import{I as N}from"./Icon-B7DxM8PH.js";function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,o)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(o){V(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function V(e,t,r){return t=$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e){var t=k(e,"string");return typeof t=="symbol"?t:String(t)}function k(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const q=j({});function j(e){return t.withOptions=r=>j(S(S({},e),r)),t;function t(r,...o){const i=typeof r=="string"?[r]:r.raw,{escapeSpecialCharacters:u=Array.isArray(r)}=e;let c="";for(let a=0;a<i.length;a++){let n=i[a];u&&(n=n.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\{/g,"{")),c+=n,a<o.length&&(c+=o[a])}const f=c.split(`
`);let p=null;for(const a of f){const n=a.match(/^(\s+)\S+/);if(n){const l=n[1].length;p?p=Math.min(p,l):p=l}}if(p!==null){const a=p;c=f.map(n=>n[0]===" "||n[0]==="	"?n.slice(a):n).join(`
`)}return c.trim().replace(/\\n/g,`
`)}}async function W(e){return"clipboard"in navigator?navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}const z=()=>{const[e,t]=d.useState(!1),{warn:r}=C("useClipboard");return{isCopied:e,copy:i=>{W(i).then(()=>{t(!0),setTimeout(()=>{t(!1)},1500)}).catch(u=>{r(u)})}}},w=b.div.withConfig({displayName:"Snippet__ButtonWrapper",componentId:"sc-1053oev-0"})(["position:absolute;right:0rem;",";background-color:",";"],({$position:e})=>e==="top"?"top: 0rem;border-radius: 0 var(--sscds-radius);":"bottom: 0rem;border-radius: var(--sscds-radius) 0;",_("neutral.100")),A=b(T).withConfig({displayName:"Snippet__SnippetRoot",componentId:"sc-1053oev-1"})([""]),K=b(R).withConfig({displayName:"Snippet__SnippetContent",componentId:"sc-1053oev-2"})(["",";overflow:auto;"],({$shouldWrapText:e})=>e?`
  white-space: break-spaces;
  word-wrap: break-word;
  `:void 0),g=d.forwardRef(({children:e,canCopy:t=!0,shouldDedent:r=!0,shouldWrapText:o=!1,maxHeight:i=200,isExpanded:u=!1},c)=>{const{error:f}=C("Snippet"),p=d.useRef(null),[a,n]=d.useState(!0),[l,O]=d.useState(u),{copy:P,isCopied:m}=z(),y=typeof e=="string";if(d.useLayoutEffect(()=>{n(p.current.getBoundingClientRect().height>i)},[n,i]),!y)return f("Only string can be passed in `children` property"),null;const h=r?q(e):e;return s.jsxs(A,{ref:c,background:"dynamic",style:{position:"relative"},hasBorder:!0,children:[s.jsx(K,{$shouldWrapText:o,"aria-multiline":"true","aria-readonly":"true",as:"pre",paddingSize:"md",role:"textbox",style:{maxHeight:l?"none":I(i)},tabIndex:0,children:y?s.jsx(B,{ref:p,size:"sm",children:h}):s.jsx(D,{size:"xs"})}),y&&t&&s.jsx(w,{$position:"top",children:s.jsx(x,{"aria-label":m?"Copied to clipboard":"Copy to clipboard",iconStart:{name:m?"check":"copy"},variant:"ghost",onClick:()=>P(h),children:m?"Copied":void 0})}),a&&s.jsx(w,{$position:"bottom",children:s.jsxs(x,{variant:"ghost",onClick:()=>O(E=>!E),children:[s.jsx("span",{children:l?"Show less":"Show more"}),s.jsx(N,{name:l?"angle-up":"angle-down"})]})})]})});g.displayName="Snippet";const re=g;g.__docgenInfo={description:"",methods:[],displayName:"Snippet",props:{canCopy:{defaultValue:{value:"true",computed:!1},required:!1},shouldDedent:{defaultValue:{value:"true",computed:!1},required:!1},shouldWrapText:{defaultValue:{value:"false",computed:!1},required:!1},maxHeight:{defaultValue:{value:"200",computed:!1},required:!1},isExpanded:{defaultValue:{value:"false",computed:!1},required:!1}}};export{re as S};
