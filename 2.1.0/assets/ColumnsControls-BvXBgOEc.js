import{j as m}from"./jsx-runtime-Nms4Y4qS.js";import{r as y}from"./index-BwDkhjyp.js";import{P as l}from"./index-Dk74W0Oi.js";import{C as E}from"./ControlDropdown-B1Y3BnKg.js";import{S as H}from"./SortableList-cioTTupr.js";import{D as c}from"./Datatable.store-C2OZ8Th5.js";import{g as N}from"./_commonjsHelpers-BosuxZz1.js";import{B as _,_ as L,R as C,S as P}from"./space-B9R18Mwn.js";import{l as k}from"./lt-8WxB2gIi.js";import{u as $}from"./index-BFi_qJcR.js";import{i as B}from"./isEmptyArray-B-_3gajU.js";import"./Surface-Cs7tekjF.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import{I as F}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{T as K,a as G}from"./Text-C1sA-5dj.js";import"./Checkbox-BglAPnik.js";import"./Input-CwSx1PX_.js";import"./Label-B8OlZEa3.js";import"./Message-C3lQWFI8.js";import"./MultiValueInput-C6fEM2Nq.js";import"./Password-D7QM-IUi.js";import"./Radio-DFCni97p.js";import"./Select-BLoNL4vb.js";import"./CreatableSelect-E3UeHrc0.js";import"./Range-Bir4y49t.js";import{S as J,a as M}from"./Switch-D9B5JuGJ.js";import"./TextArea-COoMwukw.js";import"./SearchBar-Bv5RW7j4.js";import"./SegmentedToggleItem-DDZuede1.js";import"./InputGroup-YSY5KnVJ.js";import"./DSProvider-DzIDhM_J.js";import"./theme-BW2FcxSF.js";import"./index-DFvsTZbx.js";import{p as Q}from"./pluck-CCxX0LJC.js";import{n as h}from"./noop-Bk6XfTLC.js";var U=_(function(r){return function(e,o){return r(e,o)?-1:r(o,e)?1:0}}),W=L(function(r,e){return Array.prototype.slice.call(e,0).sort(r)}),X=function t(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var o,n,i;if(Array.isArray(r)){if(o=r.length,o!=e.length)return!1;for(n=o;n--!==0;)if(!t(r[n],e[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if(i=Object.keys(r),o=i.length,o!==Object.keys(e).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[n]))return!1;for(n=o;n--!==0;){var a=i[n];if(!t(r[a],e[a]))return!1}return!0}return r!==r&&e!==e};const S=N(X),Y=t=>(r,e)=>{const o=t.indexOf(r),n=t.indexOf(e);return o===-1&&n>=0?1:o>=0&&n===-1?-1:U(k)(o,n)},v=(t,r)=>{const e=Y(t),o=C(r);return W(e,o)},Z=()=>{const{columns:t,columnOrder:r}=c.useState(u=>({columns:u.columns,columnOrder:u.columnOrder})),[e,o]=y.useState(v(r,t));return y.useEffect(()=>{const u=c.subscribe(s=>({order:s.columnOrder,allColumns:s.columns}),({order:s,allColumns:p})=>{o(v(s,p))});return()=>{u()}},[]),{orderedColumns:e,setLocalColumnOrder:o,storeOrderedColumns:()=>{const u=S(e,C(t));c.update(s=>{s.columnOrder=u?[]:e})},reinitializeOrderedColumns:()=>{o(v(r,t))},resetOrderedColumns:()=>{o(C(t))},isInDefaultOrder:S(e,C(t))}},ee=()=>{const t=c.useState(s=>s.hiddenColumns),[r,e]=y.useState(t);$(()=>{e(t)},[t]);const o=(s,p)=>{e(p===!0?d=>d.filter(O=>O!==s):d=>[...d,s])},n=B(r);return{hiddenColumns:r,setHiddenColumn:o,storeVisibleColumns:()=>{c.update(s=>{s.hiddenColumns=r})},reinitializeVisibleColumns:()=>{e(t)},resetVisisbleColumns:()=>{e([])},isInDefaultVisibility:n}},b=({children:t,isOpen:r=!1,onClose:e=h,onApply:o=h,onReset:n=h})=>{const i=y.useRef(null),{orderedColumns:a,setLocalColumnOrder:u,storeOrderedColumns:s,reinitializeOrderedColumns:p,resetOrderedColumns:d,isInDefaultOrder:O}=Z(),{hiddenColumns:R,setHiddenColumn:x,storeVisibleColumns:j,reinitializeVisibleColumns:V,resetVisisbleColumns:w,isInDefaultVisibility:T}=ee(),q=c.useState(g=>g.columns),z=()=>{e(),p(),V()},D=()=>{o(!O||!T),s(),j()},I=()=>{n(),d(),w()};return m.jsxs("span",{ref:i,children:[typeof t=="function"?t({hiddenColumns:R.length}):t,m.jsx(E,{isOpen:r,parentRef:i,title:"Toggle columns",onClose:z,onReset:I,onSubmit:D,children:m.jsx(H,{items:a,labels:Q("label")(q),maxHeight:300,renderItem:({label:g,id:f})=>m.jsxs(F,{align:"center","data-id":f,gap:P.sm,justify:"space-between",children:[m.jsx(K,{size:G.md,children:g}),m.jsx(J,{checked:!R.includes(f),name:`visibility-${f}`,size:M.sm,switchId:`visibility-${f}`,onChange:A=>{x(f,A.target.checked)}})]}),onOrderChange:u})})]})};b.propTypes={children:l.oneOfType([l.func,l.node]).isRequired,onClose:l.func.isRequired,onApply:l.func.isRequired,isOpen:l.bool,onReset:l.func};const Le=b;b.__docgenInfo={description:"",methods:[],displayName:"ColumnsControls",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"noop",computed:!0},type:{name:"func"}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(shouldApply: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"shouldApply"}],return:{name:"void"}}},description:"",defaultValue:{value:"noop",computed:!0},type:{name:"func"}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"noop",computed:!0},type:{name:"func"}},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | ((obj: RenderProps) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"",type:{name:"union",value:[{name:"func"},{name:"node"}]}}}};export{Le as C};
