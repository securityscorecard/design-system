import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{g as E,r as y}from"./index-CTjT7uj6.js";import{P as l}from"./index-BRV0Se7Z.js";import{C as H}from"./ControlDropdown-CVt3t3KM.js";import{S as N}from"./SortableList-Z9_zq4x7.js";import{D as c}from"./Datatable.store-D58zn130.js";import{B as _,_ as L,R as C,S as P}from"./space-BY85GhUc.js";import{l as k}from"./lt-ilvgIYX1.js";import{u as $}from"./index-Bl_jQQ83.js";import{i as B}from"./isEmptyArray-Ckn0nrLG.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import{I as F}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{T as K,a as G}from"./Text-CQej7zPl.js";import"./Checkbox-CKFjIkBH.js";import"./Input-BtOZIwxI.js";import"./Label-BXbsNi4R.js";import"./Message-DUxshZZl.js";import"./MultiValueInput-D7lNkhxc.js";import"./Password-65KzSUZy.js";import"./Radio-YCSNiGxy.js";import"./Select-Dx3xIfX3.js";import"./CreatableSelect-Ciqv7Eeg.js";import"./Range-cNWnBLi8.js";import{S as J,a as M}from"./Switch-0dtb0Z-n.js";import"./TextArea-DbKusWUV.js";import"./SearchBar-Dg-JDwAb.js";import"./SegmentedToggleItem-B_FdIjKO.js";import"./InputGroup-Ci-Ppccm.js";import"./DSProvider-eD554_K8.js";import"./theme-DztFT9GZ.js";import"./index-DFvsTZbx.js";import{p as Q}from"./pluck-CGJirjHu.js";import{n as h}from"./noop-CRTpovv1.js";var U=_(function(r){return function(e,o){return r(e,o)?-1:r(o,e)?1:0}}),W=L(function(r,e){return Array.prototype.slice.call(e,0).sort(r)}),X=function t(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var o,n,i;if(Array.isArray(r)){if(o=r.length,o!=e.length)return!1;for(n=o;n--!==0;)if(!t(r[n],e[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if(i=Object.keys(r),o=i.length,o!==Object.keys(e).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[n]))return!1;for(n=o;n--!==0;){var a=i[n];if(!t(r[a],e[a]))return!1}return!0}return r!==r&&e!==e};const S=E(X),Y=t=>(r,e)=>{const o=t.indexOf(r),n=t.indexOf(e);return o===-1&&n>=0?1:o>=0&&n===-1?-1:U(k)(o,n)},v=(t,r)=>{const e=Y(t),o=C(r);return W(e,o)},Z=()=>{const{columns:t,columnOrder:r}=c.useState(u=>({columns:u.columns,columnOrder:u.columnOrder})),[e,o]=y.useState(v(r,t));return y.useEffect(()=>{const u=c.subscribe(s=>({order:s.columnOrder,allColumns:s.columns}),({order:s,allColumns:p})=>{o(v(s,p))});return()=>{u()}},[]),{orderedColumns:e,setLocalColumnOrder:o,storeOrderedColumns:()=>{const u=S(e,C(t));c.update(s=>{s.columnOrder=u?[]:e})},reinitializeOrderedColumns:()=>{o(v(r,t))},resetOrderedColumns:()=>{o(C(t))},isInDefaultOrder:S(e,C(t))}},ee=()=>{const t=c.useState(s=>s.hiddenColumns),[r,e]=y.useState(t);$(()=>{e(t)},[t]);const o=(s,p)=>{e(p===!0?d=>d.filter(O=>O!==s):d=>[...d,s])},n=B(r);return{hiddenColumns:r,setHiddenColumn:o,storeVisibleColumns:()=>{c.update(s=>{s.hiddenColumns=r})},reinitializeVisibleColumns:()=>{e(t)},resetVisisbleColumns:()=>{e([])},isInDefaultVisibility:n}},b=({children:t,isOpen:r=!1,onClose:e=h,onApply:o=h,onReset:n=h})=>{const i=y.useRef(null),{orderedColumns:a,setLocalColumnOrder:u,storeOrderedColumns:s,reinitializeOrderedColumns:p,resetOrderedColumns:d,isInDefaultOrder:O}=Z(),{hiddenColumns:R,setHiddenColumn:x,storeVisibleColumns:j,reinitializeVisibleColumns:V,resetVisisbleColumns:w,isInDefaultVisibility:T}=ee(),q=c.useState(g=>g.columns),z=()=>{e(),p(),V()},D=()=>{o(!O||!T),s(),j()},I=()=>{n(),d(),w()};return m.jsxs("span",{ref:i,children:[typeof t=="function"?t({hiddenColumns:R.length}):t,m.jsx(H,{isOpen:r,parentRef:i,title:"Toggle columns",onClose:z,onReset:I,onSubmit:D,children:m.jsx(N,{items:a,labels:Q("label")(q),maxHeight:300,renderItem:({label:g,id:f})=>m.jsxs(F,{align:"center","data-id":f,gap:P.sm,justify:"space-between",children:[m.jsx(K,{size:G.md,children:g}),m.jsx(J,{checked:!R.includes(f),name:`visibility-${f}`,size:M.sm,switchId:`visibility-${f}`,onChange:A=>{x(f,A.target.checked)}})]}),onOrderChange:u})})]})};b.propTypes={children:l.oneOfType([l.func,l.node]).isRequired,onClose:l.func.isRequired,onApply:l.func.isRequired,isOpen:l.bool,onReset:l.func};const _e=b;b.__docgenInfo={description:"",methods:[],displayName:"ColumnsControls",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"noop",computed:!0},type:{name:"func"}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(shouldApply: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"shouldApply"}],return:{name:"void"}}},description:"",defaultValue:{value:"noop",computed:!0},type:{name:"func"}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"noop",computed:!0},type:{name:"func"}},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | ((obj: RenderProps) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"",type:{name:"union",value:[{name:"func"},{name:"node"}]}}}};export{_e as C};
