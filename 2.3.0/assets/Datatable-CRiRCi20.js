import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{i as la,u as oa}from"./useLogger-BNYGJgyi.js";import{r as j}from"./index-CTjT7uj6.js";import{I as de}from"./IconButton-C0z_ySy5.js";import{b as bn,M as Dn,c as Ie,d as ce,$ as pn,a as gn}from"./menuElements-ByXMhNOt.js";import{c as Oe}from"./index-C7IrpltL.js";import{p as Cn}from"./pluck-XHiJ2W8k.js";import{u as ra}from"./useLocalStorageState-Bvq8NDNj.js";import{s as ve,z as Pe,B as Ne,H as fn,j as xe,W as ua,A as ia}from"./index-DzoB_gWM.js";import{S as an}from"./index-CoMEwqFC.js";import{u as sa}from"./useContainerQuery-DfiLLmFV.js";import{P as Ve}from"./Padbox-DIe3-S_j.js";import{I as oe}from"./Inline-DPdVYO7t.js";import{B as yn}from"./Button-BMWvW0nZ.js";import{S as ma,T as Fe}from"./index-C_SwQgDv.js";import{P as ca}from"./index-mAAZmqGJ.js";import{S as Aa}from"./Skeleton-BSMwopXk.js";import{S as Me}from"./index-DZoBl2Wq.js";import"./index-Drrfuvzh.js";import{T as un}from"./Tooltip-BT_E9yk_.js";import"./index-BtwkxZ3S.js";import"./index-CQl3OQTU.js";import{u as da,C as ba,a as Da,b as sn,s as pa,K as ga,P as Ca,D as fa,c as ya,S as wa,v as ha}from"./sortable.esm-Bgh6Enlk.js";import{r as va,a as Ia}from"./modifiers.esm-D9Gd6yO_.js";import{a as wn}from"./DSProvider-DOkUOQoq.js";import{a as mn}from"./components-imVrW6nL.js";import{I as Va}from"./Icon-CHqwD8rK.js";import{C as ka}from"./CloseButton-B7KX2rrC.js";/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function ge(e,a){return typeof e=="function"?e(a):e}function ie(e,a){return n=>{a.setState(t=>({...t,[e]:ge(n,t[e])}))}}function je(e){return e instanceof Function}function Ba(e){return Array.isArray(e)&&e.every(a=>typeof a=="number")}function Sa(e,a){const n=[],t=l=>{l.forEach(o=>{n.push(o);const r=a(o);r!=null&&r.length&&t(r)})};return t(e),n}function k(e,a,n){let t=[],l;return o=>{let r;n.key&&n.debug&&(r=Date.now());const u=e(o);if(!(u.length!==t.length||u.some((A,p)=>t[p]!==A)))return l;t=u;let c;if(n.key&&n.debug&&(c=Date.now()),l=a(...u),n==null||n.onChange==null||n.onChange(l),n.key&&n.debug&&n!=null&&n.debug()){const A=Math.round((Date.now()-r)*100)/100,p=Math.round((Date.now()-c)*100)/100,D=p/16,s=(C,g)=>{for(C=String(C);C.length<g;)C=" "+C;return C};console.info(`%c⏱ ${s(p,5)} /${s(A,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*D,120))}deg 100% 31%);`,n==null?void 0:n.key)}return l}}function B(e,a,n,t){return{debug:()=>{var l;return(l=e==null?void 0:e.debugAll)!=null?l:e[a]},key:!1,onChange:t}}function Ra(e,a,n,t){const l=()=>{var r;return(r=o.getValue())!=null?r:e.options.renderFallbackValue},o={id:`${a.id}_${n.id}`,row:a,column:n,getValue:()=>a.getValue(t),renderValue:l,getContext:k(()=>[e,n,a,o],(r,u,i,c)=>({table:r,column:u,row:i,cell:c,getValue:c.getValue,renderValue:c.renderValue}),B(e.options,"debugCells"))};return e._features.forEach(r=>{r.createCell==null||r.createCell(o,n,a,e)},{}),o}function xa(e,a,n,t){var l,o;const u={...e._getDefaultColumnDef(),...a},i=u.accessorKey;let c=(l=(o=u.id)!=null?o:i?i.replace(".","_"):void 0)!=null?l:typeof u.header=="string"?u.header:void 0,A;if(u.accessorFn?A=u.accessorFn:i&&(i.includes(".")?A=D=>{let s=D;for(const g of i.split(".")){var C;s=(C=s)==null?void 0:C[g]}return s}:A=D=>D[u.accessorKey]),!c)throw new Error;let p={id:`${String(c)}`,accessorFn:A,parent:t,depth:n,columnDef:u,columns:[],getFlatColumns:k(()=>[!0],()=>{var D;return[p,...(D=p.columns)==null?void 0:D.flatMap(s=>s.getFlatColumns())]},B(e.options,"debugColumns")),getLeafColumns:k(()=>[e._getOrderColumnsFn()],D=>{var s;if((s=p.columns)!=null&&s.length){let C=p.columns.flatMap(g=>g.getLeafColumns());return D(C)}return[p]},B(e.options,"debugColumns"))};for(const D of e._features)D.createColumn==null||D.createColumn(p,e);return p}const ne="debugHeaders";function cn(e,a,n){var t;let o={id:(t=n.id)!=null?t:a.id,column:a,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const r=[],u=i=>{i.subHeaders&&i.subHeaders.length&&i.subHeaders.map(u),r.push(i)};return u(o),r},getContext:()=>({table:e,header:o,column:a})};return e._features.forEach(r=>{r.createHeader==null||r.createHeader(o,e)}),o}const Ea={createTable:e=>{e.getHeaderGroups=k(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,l)=>{var o,r;const u=(o=t==null?void 0:t.map(p=>n.find(D=>D.id===p)).filter(Boolean))!=null?o:[],i=(r=l==null?void 0:l.map(p=>n.find(D=>D.id===p)).filter(Boolean))!=null?r:[],c=n.filter(p=>!(t!=null&&t.includes(p.id))&&!(l!=null&&l.includes(p.id)));return Ee(a,[...u,...c,...i],e)},B(e.options,ne)),e.getCenterHeaderGroups=k(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,l)=>(n=n.filter(o=>!(t!=null&&t.includes(o.id))&&!(l!=null&&l.includes(o.id))),Ee(a,n,e,"center")),B(e.options,ne)),e.getLeftHeaderGroups=k(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(a,n,t)=>{var l;const o=(l=t==null?void 0:t.map(r=>n.find(u=>u.id===r)).filter(Boolean))!=null?l:[];return Ee(a,o,e,"left")},B(e.options,ne)),e.getRightHeaderGroups=k(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(a,n,t)=>{var l;const o=(l=t==null?void 0:t.map(r=>n.find(u=>u.id===r)).filter(Boolean))!=null?l:[];return Ee(a,o,e,"right")},B(e.options,ne)),e.getFooterGroups=k(()=>[e.getHeaderGroups()],a=>[...a].reverse(),B(e.options,ne)),e.getLeftFooterGroups=k(()=>[e.getLeftHeaderGroups()],a=>[...a].reverse(),B(e.options,ne)),e.getCenterFooterGroups=k(()=>[e.getCenterHeaderGroups()],a=>[...a].reverse(),B(e.options,ne)),e.getRightFooterGroups=k(()=>[e.getRightHeaderGroups()],a=>[...a].reverse(),B(e.options,ne)),e.getFlatHeaders=k(()=>[e.getHeaderGroups()],a=>a.map(n=>n.headers).flat(),B(e.options,ne)),e.getLeftFlatHeaders=k(()=>[e.getLeftHeaderGroups()],a=>a.map(n=>n.headers).flat(),B(e.options,ne)),e.getCenterFlatHeaders=k(()=>[e.getCenterHeaderGroups()],a=>a.map(n=>n.headers).flat(),B(e.options,ne)),e.getRightFlatHeaders=k(()=>[e.getRightHeaderGroups()],a=>a.map(n=>n.headers).flat(),B(e.options,ne)),e.getCenterLeafHeaders=k(()=>[e.getCenterFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),B(e.options,ne)),e.getLeftLeafHeaders=k(()=>[e.getLeftFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),B(e.options,ne)),e.getRightLeafHeaders=k(()=>[e.getRightFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),B(e.options,ne)),e.getLeafHeaders=k(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(a,n,t)=>{var l,o,r,u,i,c;return[...(l=(o=a[0])==null?void 0:o.headers)!=null?l:[],...(r=(u=n[0])==null?void 0:u.headers)!=null?r:[],...(i=(c=t[0])==null?void 0:c.headers)!=null?i:[]].map(A=>A.getLeafHeaders()).flat()},B(e.options,ne))}};function Ee(e,a,n,t){var l,o;let r=0;const u=function(D,s){s===void 0&&(s=1),r=Math.max(r,s),D.filter(C=>C.getIsVisible()).forEach(C=>{var g;(g=C.columns)!=null&&g.length&&u(C.columns,s+1)},0)};u(e);let i=[];const c=(D,s)=>{const C={depth:s,id:[t,`${s}`].filter(Boolean).join("_"),headers:[]},g=[];D.forEach(v=>{const w=[...g].reverse()[0],S=v.column.depth===C.depth;let R,P=!1;if(S&&v.column.parent?R=v.column.parent:(R=v.column,P=!0),w&&(w==null?void 0:w.column)===R)w.subHeaders.push(v);else{const O=cn(n,R,{id:[t,s,R.id,v==null?void 0:v.id].filter(Boolean).join("_"),isPlaceholder:P,placeholderId:P?`${g.filter(F=>F.column===R).length}`:void 0,depth:s,index:g.length});O.subHeaders.push(v),g.push(O)}C.headers.push(v),v.headerGroup=C}),i.push(C),s>0&&c(g,s-1)},A=a.map((D,s)=>cn(n,D,{depth:r,index:s}));c(A,r-1),i.reverse();const p=D=>D.filter(C=>C.column.getIsVisible()).map(C=>{let g=0,v=0,w=[0];C.subHeaders&&C.subHeaders.length?(w=[],p(C.subHeaders).forEach(R=>{let{colSpan:P,rowSpan:O}=R;g+=P,w.push(O)})):g=1;const S=Math.min(...w);return v=v+S,C.colSpan=g,C.rowSpan=v,{colSpan:g,rowSpan:v}});return p((l=(o=i[0])==null?void 0:o.headers)!=null?l:[]),i}const Ga=(e,a,n,t,l,o,r)=>{let u={id:a,index:t,original:n,depth:l,parentId:r,_valuesCache:{},_uniqueValuesCache:{},getValue:i=>{if(u._valuesCache.hasOwnProperty(i))return u._valuesCache[i];const c=e.getColumn(i);if(c!=null&&c.accessorFn)return u._valuesCache[i]=c.accessorFn(u.original,t),u._valuesCache[i]},getUniqueValues:i=>{if(u._uniqueValuesCache.hasOwnProperty(i))return u._uniqueValuesCache[i];const c=e.getColumn(i);if(c!=null&&c.accessorFn)return c.columnDef.getUniqueValues?(u._uniqueValuesCache[i]=c.columnDef.getUniqueValues(u.original,t),u._uniqueValuesCache[i]):(u._uniqueValuesCache[i]=[u.getValue(i)],u._uniqueValuesCache[i])},renderValue:i=>{var c;return(c=u.getValue(i))!=null?c:e.options.renderFallbackValue},subRows:o??[],getLeafRows:()=>Sa(u.subRows,i=>i.subRows),getParentRow:()=>u.parentId?e.getRow(u.parentId,!0):void 0,getParentRows:()=>{let i=[],c=u;for(;;){const A=c.getParentRow();if(!A)break;i.push(A),c=A}return i.reverse()},getAllCells:k(()=>[e.getAllLeafColumns()],i=>i.map(c=>Ra(e,u,c,c.id)),B(e.options,"debugRows")),_getAllCellsByColumnId:k(()=>[u.getAllCells()],i=>i.reduce((c,A)=>(c[A.column.id]=A,c),{}),B(e.options,"debugRows"))};for(let i=0;i<e._features.length;i++){const c=e._features[i];c==null||c.createRow==null||c.createRow(u,e)}return u},qa={createColumn:(e,a)=>{e._getFacetedRowModel=a.options.getFacetedRowModel&&a.options.getFacetedRowModel(a,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():a.getPreFilteredRowModel(),e._getFacetedUniqueValues=a.options.getFacetedUniqueValues&&a.options.getFacetedUniqueValues(a,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=a.options.getFacetedMinMaxValues&&a.options.getFacetedMinMaxValues(a,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},hn=(e,a,n)=>{var t;const l=n.toLowerCase();return!!(!((t=e.getValue(a))==null||(t=t.toString())==null||(t=t.toLowerCase())==null)&&t.includes(l))};hn.autoRemove=e=>se(e);const vn=(e,a,n)=>{var t;return!!(!((t=e.getValue(a))==null||(t=t.toString())==null)&&t.includes(n))};vn.autoRemove=e=>se(e);const In=(e,a,n)=>{var t;return((t=e.getValue(a))==null||(t=t.toString())==null?void 0:t.toLowerCase())===(n==null?void 0:n.toLowerCase())};In.autoRemove=e=>se(e);const Vn=(e,a,n)=>{var t;return(t=e.getValue(a))==null?void 0:t.includes(n)};Vn.autoRemove=e=>se(e)||!(e!=null&&e.length);const kn=(e,a,n)=>!n.some(t=>{var l;return!((l=e.getValue(a))!=null&&l.includes(t))});kn.autoRemove=e=>se(e)||!(e!=null&&e.length);const Bn=(e,a,n)=>n.some(t=>{var l;return(l=e.getValue(a))==null?void 0:l.includes(t)});Bn.autoRemove=e=>se(e)||!(e!=null&&e.length);const Sn=(e,a,n)=>e.getValue(a)===n;Sn.autoRemove=e=>se(e);const Rn=(e,a,n)=>e.getValue(a)==n;Rn.autoRemove=e=>se(e);const tn=(e,a,n)=>{let[t,l]=n;const o=e.getValue(a);return o>=t&&o<=l};tn.resolveFilterValue=e=>{let[a,n]=e,t=typeof a!="number"?parseFloat(a):a,l=typeof n!="number"?parseFloat(n):n,o=a===null||Number.isNaN(t)?-1/0:t,r=n===null||Number.isNaN(l)?1/0:l;if(o>r){const u=o;o=r,r=u}return[o,r]};tn.autoRemove=e=>se(e)||se(e[0])&&se(e[1]);const be={includesString:hn,includesStringSensitive:vn,equalsString:In,arrIncludes:Vn,arrIncludesAll:kn,arrIncludesSome:Bn,equals:Sn,weakEquals:Rn,inNumberRange:tn};function se(e){return e==null||e===""}const Fa={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:ie("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,a)=>{e.getAutoFilterFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);return typeof t=="string"?be.includesString:typeof t=="number"?be.inNumberRange:typeof t=="boolean"||t!==null&&typeof t=="object"?be.equals:Array.isArray(t)?be.arrIncludes:be.weakEquals},e.getFilterFn=()=>{var n,t;return je(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(n=(t=a.options.filterFns)==null?void 0:t[e.columnDef.filterFn])!=null?n:be[e.columnDef.filterFn]},e.getCanFilter=()=>{var n,t,l;return((n=e.columnDef.enableColumnFilter)!=null?n:!0)&&((t=a.options.enableColumnFilters)!=null?t:!0)&&((l=a.options.enableFilters)!=null?l:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var n;return(n=a.getState().columnFilters)==null||(n=n.find(t=>t.id===e.id))==null?void 0:n.value},e.getFilterIndex=()=>{var n,t;return(n=(t=a.getState().columnFilters)==null?void 0:t.findIndex(l=>l.id===e.id))!=null?n:-1},e.setFilterValue=n=>{a.setColumnFilters(t=>{const l=e.getFilterFn(),o=t==null?void 0:t.find(A=>A.id===e.id),r=ge(n,o?o.value:void 0);if(An(l,r,e)){var u;return(u=t==null?void 0:t.filter(A=>A.id!==e.id))!=null?u:[]}const i={id:e.id,value:r};if(o){var c;return(c=t==null?void 0:t.map(A=>A.id===e.id?i:A))!=null?c:[]}return t!=null&&t.length?[...t,i]:[i]})}},createRow:(e,a)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=a=>{const n=e.getAllLeafColumns(),t=l=>{var o;return(o=ge(a,l))==null?void 0:o.filter(r=>{const u=n.find(i=>i.id===r.id);if(u){const i=u.getFilterFn();if(An(i,r.value,u))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(t)},e.resetColumnFilters=a=>{var n,t;e.setColumnFilters(a?[]:(n=(t=e.initialState)==null?void 0:t.columnFilters)!=null?n:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function An(e,a,n){return(e&&e.autoRemove?e.autoRemove(a,n):!1)||typeof a>"u"||typeof a=="string"&&!a}const Ma=(e,a,n)=>n.reduce((t,l)=>{const o=l.getValue(e);return t+(typeof o=="number"?o:0)},0),Oa=(e,a,n)=>{let t;return n.forEach(l=>{const o=l.getValue(e);o!=null&&(t>o||t===void 0&&o>=o)&&(t=o)}),t},Na=(e,a,n)=>{let t;return n.forEach(l=>{const o=l.getValue(e);o!=null&&(t<o||t===void 0&&o>=o)&&(t=o)}),t},Ha=(e,a,n)=>{let t,l;return n.forEach(o=>{const r=o.getValue(e);r!=null&&(t===void 0?r>=r&&(t=l=r):(t>r&&(t=r),l<r&&(l=r)))}),[t,l]},ja=(e,a)=>{let n=0,t=0;if(a.forEach(l=>{let o=l.getValue(e);o!=null&&(o=+o)>=o&&(++n,t+=o)}),n)return t/n},Pa=(e,a)=>{if(!a.length)return;const n=a.map(o=>o.getValue(e));if(!Ba(n))return;if(n.length===1)return n[0];const t=Math.floor(n.length/2),l=n.sort((o,r)=>o-r);return n.length%2!==0?l[t]:(l[t-1]+l[t])/2},Ua=(e,a)=>Array.from(new Set(a.map(n=>n.getValue(e))).values()),Ka=(e,a)=>new Set(a.map(n=>n.getValue(e))).size,_a=(e,a)=>a.length,Ue={sum:Ma,min:Oa,max:Na,extent:Ha,mean:ja,median:Pa,unique:Ua,uniqueCount:Ka,count:_a},Ta={getDefaultColumnDef:()=>({aggregatedCell:e=>{var a,n;return(a=(n=e.getValue())==null||n.toString==null?void 0:n.toString())!=null?a:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:ie("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,a)=>{e.toggleGrouping=()=>{a.setGrouping(n=>n!=null&&n.includes(e.id)?n.filter(t=>t!==e.id):[...n??[],e.id])},e.getCanGroup=()=>{var n,t;return((n=e.columnDef.enableGrouping)!=null?n:!0)&&((t=a.options.enableGrouping)!=null?t:!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.includes(e.id)},e.getGroupedIndex=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const n=e.getCanGroup();return()=>{n&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);if(typeof t=="number")return Ue.sum;if(Object.prototype.toString.call(t)==="[object Date]")return Ue.extent},e.getAggregationFn=()=>{var n,t;if(!e)throw new Error;return je(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(n=(t=a.options.aggregationFns)==null?void 0:t[e.columnDef.aggregationFn])!=null?n:Ue[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=a=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(a),e.resetGrouping=a=>{var n,t;e.setGrouping(a?[]:(n=(t=e.initialState)==null?void 0:t.grouping)!=null?n:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,a)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=n=>{if(e._groupingValuesCache.hasOwnProperty(n))return e._groupingValuesCache[n];const t=a.getColumn(n);return t!=null&&t.columnDef.getGroupingValue?(e._groupingValuesCache[n]=t.columnDef.getGroupingValue(e.original),e._groupingValuesCache[n]):e.getValue(n)},e._groupingValuesCache={}},createCell:(e,a,n,t)=>{e.getIsGrouped=()=>a.getIsGrouped()&&a.id===n.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&a.getIsGrouped(),e.getIsAggregated=()=>{var l;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((l=n.subRows)!=null&&l.length)}}};function Ya(e,a,n){if(!(a!=null&&a.length)||!n)return e;const t=e.filter(o=>!a.includes(o.id));return n==="remove"?t:[...a.map(o=>e.find(r=>r.id===o)).filter(Boolean),...t]}const Qa={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:ie("columnOrder",e)}),createColumn:(e,a)=>{e.getIndex=k(n=>[Se(a,n)],n=>n.findIndex(t=>t.id===e.id),B(a.options,"debugColumns")),e.getIsFirstColumn=n=>{var t;return((t=Se(a,n)[0])==null?void 0:t.id)===e.id},e.getIsLastColumn=n=>{var t;const l=Se(a,n);return((t=l[l.length-1])==null?void 0:t.id)===e.id}},createTable:e=>{e.setColumnOrder=a=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(a),e.resetColumnOrder=a=>{var n;e.setColumnOrder(a?[]:(n=e.initialState.columnOrder)!=null?n:[])},e._getOrderColumnsFn=k(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(a,n,t)=>l=>{let o=[];if(!(a!=null&&a.length))o=l;else{const r=[...a],u=[...l];for(;u.length&&r.length;){const i=r.shift(),c=u.findIndex(A=>A.id===i);c>-1&&o.push(u.splice(c,1)[0])}o=[...o,...u]}return Ya(o,n,t)},B(e.options,"debugTable"))}},Ke=()=>({left:[],right:[]}),za={getInitialState:e=>({columnPinning:Ke(),...e}),getDefaultOptions:e=>({onColumnPinningChange:ie("columnPinning",e)}),createColumn:(e,a)=>{e.pin=n=>{const t=e.getLeafColumns().map(l=>l.id).filter(Boolean);a.setColumnPinning(l=>{var o,r;if(n==="right"){var u,i;return{left:((u=l==null?void 0:l.left)!=null?u:[]).filter(p=>!(t!=null&&t.includes(p))),right:[...((i=l==null?void 0:l.right)!=null?i:[]).filter(p=>!(t!=null&&t.includes(p))),...t]}}if(n==="left"){var c,A;return{left:[...((c=l==null?void 0:l.left)!=null?c:[]).filter(p=>!(t!=null&&t.includes(p))),...t],right:((A=l==null?void 0:l.right)!=null?A:[]).filter(p=>!(t!=null&&t.includes(p)))}}return{left:((o=l==null?void 0:l.left)!=null?o:[]).filter(p=>!(t!=null&&t.includes(p))),right:((r=l==null?void 0:l.right)!=null?r:[]).filter(p=>!(t!=null&&t.includes(p)))}})},e.getCanPin=()=>e.getLeafColumns().some(t=>{var l,o,r;return((l=t.columnDef.enablePinning)!=null?l:!0)&&((o=(r=a.options.enableColumnPinning)!=null?r:a.options.enablePinning)!=null?o:!0)}),e.getIsPinned=()=>{const n=e.getLeafColumns().map(u=>u.id),{left:t,right:l}=a.getState().columnPinning,o=n.some(u=>t==null?void 0:t.includes(u)),r=n.some(u=>l==null?void 0:l.includes(u));return o?"left":r?"right":!1},e.getPinnedIndex=()=>{var n,t;const l=e.getIsPinned();return l?(n=(t=a.getState().columnPinning)==null||(t=t[l])==null?void 0:t.indexOf(e.id))!=null?n:-1:0}},createRow:(e,a)=>{e.getCenterVisibleCells=k(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left,a.getState().columnPinning.right],(n,t,l)=>{const o=[...t??[],...l??[]];return n.filter(r=>!o.includes(r.column.id))},B(a.options,"debugRows")),e.getLeftVisibleCells=k(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left],(n,t)=>(t??[]).map(o=>n.find(r=>r.column.id===o)).filter(Boolean).map(o=>({...o,position:"left"})),B(a.options,"debugRows")),e.getRightVisibleCells=k(()=>[e._getAllVisibleCells(),a.getState().columnPinning.right],(n,t)=>(t??[]).map(o=>n.find(r=>r.column.id===o)).filter(Boolean).map(o=>({...o,position:"right"})),B(a.options,"debugRows"))},createTable:e=>{e.setColumnPinning=a=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(a),e.resetColumnPinning=a=>{var n,t;return e.setColumnPinning(a?Ke():(n=(t=e.initialState)==null?void 0:t.columnPinning)!=null?n:Ke())},e.getIsSomeColumnsPinned=a=>{var n;const t=e.getState().columnPinning;if(!a){var l,o;return!!((l=t.left)!=null&&l.length||(o=t.right)!=null&&o.length)}return!!((n=t[a])!=null&&n.length)},e.getLeftLeafColumns=k(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(a,n)=>(n??[]).map(t=>a.find(l=>l.id===t)).filter(Boolean),B(e.options,"debugColumns")),e.getRightLeafColumns=k(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(a,n)=>(n??[]).map(t=>a.find(l=>l.id===t)).filter(Boolean),B(e.options,"debugColumns")),e.getCenterLeafColumns=k(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t)=>{const l=[...n??[],...t??[]];return a.filter(o=>!l.includes(o.id))},B(e.options,"debugColumns"))}},Ge={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},_e=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),$a={getDefaultColumnDef:()=>Ge,getInitialState:e=>({columnSizing:{},columnSizingInfo:_e(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:ie("columnSizing",e),onColumnSizingInfoChange:ie("columnSizingInfo",e)}),createColumn:(e,a)=>{e.getSize=()=>{var n,t,l;const o=a.getState().columnSizing[e.id];return Math.min(Math.max((n=e.columnDef.minSize)!=null?n:Ge.minSize,(t=o??e.columnDef.size)!=null?t:Ge.size),(l=e.columnDef.maxSize)!=null?l:Ge.maxSize)},e.getStart=k(n=>[n,Se(a,n),a.getState().columnSizing],(n,t)=>t.slice(0,e.getIndex(n)).reduce((l,o)=>l+o.getSize(),0),B(a.options,"debugColumns")),e.getAfter=k(n=>[n,Se(a,n),a.getState().columnSizing],(n,t)=>t.slice(e.getIndex(n)+1).reduce((l,o)=>l+o.getSize(),0),B(a.options,"debugColumns")),e.resetSize=()=>{a.setColumnSizing(n=>{let{[e.id]:t,...l}=n;return l})},e.getCanResize=()=>{var n,t;return((n=e.columnDef.enableResizing)!=null?n:!0)&&((t=a.options.enableColumnResizing)!=null?t:!0)},e.getIsResizing=()=>a.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,a)=>{e.getSize=()=>{let n=0;const t=l=>{if(l.subHeaders.length)l.subHeaders.forEach(t);else{var o;n+=(o=l.column.getSize())!=null?o:0}};return t(e),n},e.getStart=()=>{if(e.index>0){const n=e.headerGroup.headers[e.index-1];return n.getStart()+n.getSize()}return 0},e.getResizeHandler=n=>{const t=a.getColumn(e.column.id),l=t==null?void 0:t.getCanResize();return o=>{if(!t||!l||(o.persist==null||o.persist(),Te(o)&&o.touches&&o.touches.length>1))return;const r=e.getSize(),u=e?e.getLeafHeaders().map(w=>[w.column.id,w.column.getSize()]):[[t.id,t.getSize()]],i=Te(o)?Math.round(o.touches[0].clientX):o.clientX,c={},A=(w,S)=>{typeof S=="number"&&(a.setColumnSizingInfo(R=>{var P,O;const F=a.options.columnResizeDirection==="rtl"?-1:1,N=(S-((P=R==null?void 0:R.startOffset)!=null?P:0))*F,U=Math.max(N/((O=R==null?void 0:R.startSize)!=null?O:0),-.999999);return R.columnSizingStart.forEach(L=>{let[$,me]=L;c[$]=Math.round(Math.max(me+me*U,0)*100)/100}),{...R,deltaOffset:N,deltaPercentage:U}}),(a.options.columnResizeMode==="onChange"||w==="end")&&a.setColumnSizing(R=>({...R,...c})))},p=w=>A("move",w),D=w=>{A("end",w),a.setColumnSizingInfo(S=>({...S,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},s=n||typeof document<"u"?document:null,C={moveHandler:w=>p(w.clientX),upHandler:w=>{s==null||s.removeEventListener("mousemove",C.moveHandler),s==null||s.removeEventListener("mouseup",C.upHandler),D(w.clientX)}},g={moveHandler:w=>(w.cancelable&&(w.preventDefault(),w.stopPropagation()),p(w.touches[0].clientX),!1),upHandler:w=>{var S;s==null||s.removeEventListener("touchmove",g.moveHandler),s==null||s.removeEventListener("touchend",g.upHandler),w.cancelable&&(w.preventDefault(),w.stopPropagation()),D((S=w.touches[0])==null?void 0:S.clientX)}},v=Wa()?{passive:!1}:!1;Te(o)?(s==null||s.addEventListener("touchmove",g.moveHandler,v),s==null||s.addEventListener("touchend",g.upHandler,v)):(s==null||s.addEventListener("mousemove",C.moveHandler,v),s==null||s.addEventListener("mouseup",C.upHandler,v)),a.setColumnSizingInfo(w=>({...w,startOffset:i,startSize:r,deltaOffset:0,deltaPercentage:0,columnSizingStart:u,isResizingColumn:t.id}))}}},createTable:e=>{e.setColumnSizing=a=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(a),e.setColumnSizingInfo=a=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(a),e.resetColumnSizing=a=>{var n;e.setColumnSizing(a?{}:(n=e.initialState.columnSizing)!=null?n:{})},e.resetHeaderSizeInfo=a=>{var n;e.setColumnSizingInfo(a?_e():(n=e.initialState.columnSizingInfo)!=null?n:_e())},e.getTotalSize=()=>{var a,n;return(a=(n=e.getHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getLeftTotalSize=()=>{var a,n;return(a=(n=e.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getCenterTotalSize=()=>{var a,n;return(a=(n=e.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getRightTotalSize=()=>{var a,n;return(a=(n=e.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0}}};let qe=null;function Wa(){if(typeof qe=="boolean")return qe;let e=!1;try{const a={get passive(){return e=!0,!1}},n=()=>{};window.addEventListener("test",n,a),window.removeEventListener("test",n)}catch{e=!1}return qe=e,qe}function Te(e){return e.type==="touchstart"}const Ja={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:ie("columnVisibility",e)}),createColumn:(e,a)=>{e.toggleVisibility=n=>{e.getCanHide()&&a.setColumnVisibility(t=>({...t,[e.id]:n??!e.getIsVisible()}))},e.getIsVisible=()=>{var n,t;const l=e.columns;return(n=l.length?l.some(o=>o.getIsVisible()):(t=a.getState().columnVisibility)==null?void 0:t[e.id])!=null?n:!0},e.getCanHide=()=>{var n,t;return((n=e.columnDef.enableHiding)!=null?n:!0)&&((t=a.options.enableHiding)!=null?t:!0)},e.getToggleVisibilityHandler=()=>n=>{e.toggleVisibility==null||e.toggleVisibility(n.target.checked)}},createRow:(e,a)=>{e._getAllVisibleCells=k(()=>[e.getAllCells(),a.getState().columnVisibility],n=>n.filter(t=>t.column.getIsVisible()),B(a.options,"debugRows")),e.getVisibleCells=k(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(n,t,l)=>[...n,...t,...l],B(a.options,"debugRows"))},createTable:e=>{const a=(n,t)=>k(()=>[t(),t().filter(l=>l.getIsVisible()).map(l=>l.id).join("_")],l=>l.filter(o=>o.getIsVisible==null?void 0:o.getIsVisible()),B(e.options,"debugColumns"));e.getVisibleFlatColumns=a("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=a("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=a("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=a("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=a("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=n=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(n),e.resetColumnVisibility=n=>{var t;e.setColumnVisibility(n?{}:(t=e.initialState.columnVisibility)!=null?t:{})},e.toggleAllColumnsVisible=n=>{var t;n=(t=n)!=null?t:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((l,o)=>({...l,[o.id]:n||!(o.getCanHide!=null&&o.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>n=>{var t;e.toggleAllColumnsVisible((t=n.target)==null?void 0:t.checked)}}};function Se(e,a){return a?a==="center"?e.getCenterVisibleLeafColumns():a==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const La={createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},Xa={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:ie("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:a=>{var n;const t=(n=e.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[a.id])==null?void 0:n.getValue();return typeof t=="string"||typeof t=="number"}}),createColumn:(e,a)=>{e.getCanGlobalFilter=()=>{var n,t,l,o;return((n=e.columnDef.enableGlobalFilter)!=null?n:!0)&&((t=a.options.enableGlobalFilter)!=null?t:!0)&&((l=a.options.enableFilters)!=null?l:!0)&&((o=a.options.getColumnCanGlobalFilter==null?void 0:a.options.getColumnCanGlobalFilter(e))!=null?o:!0)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>be.includesString,e.getGlobalFilterFn=()=>{var a,n;const{globalFilterFn:t}=e.options;return je(t)?t:t==="auto"?e.getGlobalAutoFilterFn():(a=(n=e.options.filterFns)==null?void 0:n[t])!=null?a:be[t]},e.setGlobalFilter=a=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(a)},e.resetGlobalFilter=a=>{e.setGlobalFilter(a?void 0:e.initialState.globalFilter)}}},Za={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:ie("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let a=!1,n=!1;e._autoResetExpanded=()=>{var t,l;if(!a){e._queue(()=>{a=!0});return}if((t=(l=e.options.autoResetAll)!=null?l:e.options.autoResetExpanded)!=null?t:!e.options.manualExpanding){if(n)return;n=!0,e._queue(()=>{e.resetExpanded(),n=!1})}},e.setExpanded=t=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(t),e.toggleAllRowsExpanded=t=>{t??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=t=>{var l,o;e.setExpanded(t?{}:(l=(o=e.initialState)==null?void 0:o.expanded)!=null?l:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(t=>t.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>t=>{t.persist==null||t.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const t=e.getState().expanded;return t===!0||Object.values(t).some(Boolean)},e.getIsAllRowsExpanded=()=>{const t=e.getState().expanded;return typeof t=="boolean"?t===!0:!(!Object.keys(t).length||e.getRowModel().flatRows.some(l=>!l.getIsExpanded()))},e.getExpandedDepth=()=>{let t=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(o=>{const r=o.split(".");t=Math.max(t,r.length)}),t},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,a)=>{e.toggleExpanded=n=>{a.setExpanded(t=>{var l;const o=t===!0?!0:!!(t!=null&&t[e.id]);let r={};if(t===!0?Object.keys(a.getRowModel().rowsById).forEach(u=>{r[u]=!0}):r=t,n=(l=n)!=null?l:!o,!o&&n)return{...r,[e.id]:!0};if(o&&!n){const{[e.id]:u,...i}=r;return i}return t})},e.getIsExpanded=()=>{var n;const t=a.getState().expanded;return!!((n=a.options.getIsRowExpanded==null?void 0:a.options.getIsRowExpanded(e))!=null?n:t===!0||t!=null&&t[e.id])},e.getCanExpand=()=>{var n,t,l;return(n=a.options.getRowCanExpand==null?void 0:a.options.getRowCanExpand(e))!=null?n:((t=a.options.enableExpanding)!=null?t:!0)&&!!((l=e.subRows)!=null&&l.length)},e.getIsAllParentsExpanded=()=>{let n=!0,t=e;for(;n&&t.parentId;)t=a.getRow(t.parentId,!0),n=t.getIsExpanded();return n},e.getToggleExpandedHandler=()=>{const n=e.getCanExpand();return()=>{n&&e.toggleExpanded()}}}},$e=0,We=10,Ye=()=>({pageIndex:$e,pageSize:We}),et={getInitialState:e=>({...e,pagination:{...Ye(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:ie("pagination",e)}),createTable:e=>{let a=!1,n=!1;e._autoResetPageIndex=()=>{var t,l;if(!a){e._queue(()=>{a=!0});return}if((t=(l=e.options.autoResetAll)!=null?l:e.options.autoResetPageIndex)!=null?t:!e.options.manualPagination){if(n)return;n=!0,e._queue(()=>{e.resetPageIndex(),n=!1})}},e.setPagination=t=>{const l=o=>ge(t,o);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(l)},e.resetPagination=t=>{var l;e.setPagination(t?Ye():(l=e.initialState.pagination)!=null?l:Ye())},e.setPageIndex=t=>{e.setPagination(l=>{let o=ge(t,l.pageIndex);const r=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return o=Math.max(0,Math.min(o,r)),{...l,pageIndex:o}})},e.resetPageIndex=t=>{var l,o;e.setPageIndex(t?$e:(l=(o=e.initialState)==null||(o=o.pagination)==null?void 0:o.pageIndex)!=null?l:$e)},e.resetPageSize=t=>{var l,o;e.setPageSize(t?We:(l=(o=e.initialState)==null||(o=o.pagination)==null?void 0:o.pageSize)!=null?l:We)},e.setPageSize=t=>{e.setPagination(l=>{const o=Math.max(1,ge(t,l.pageSize)),r=l.pageSize*l.pageIndex,u=Math.floor(r/o);return{...l,pageIndex:u,pageSize:o}})},e.setPageCount=t=>e.setPagination(l=>{var o;let r=ge(t,(o=e.options.pageCount)!=null?o:-1);return typeof r=="number"&&(r=Math.max(-1,r)),{...l,pageCount:r}}),e.getPageOptions=k(()=>[e.getPageCount()],t=>{let l=[];return t&&t>0&&(l=[...new Array(t)].fill(null).map((o,r)=>r)),l},B(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:t}=e.getState().pagination,l=e.getPageCount();return l===-1?!0:l===0?!1:t<l-1},e.previousPage=()=>e.setPageIndex(t=>t-1),e.nextPage=()=>e.setPageIndex(t=>t+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var t;return(t=e.options.pageCount)!=null?t:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var t;return(t=e.options.rowCount)!=null?t:e.getPrePaginationRowModel().rows.length}}},Qe=()=>({top:[],bottom:[]}),nt={getInitialState:e=>({rowPinning:Qe(),...e}),getDefaultOptions:e=>({onRowPinningChange:ie("rowPinning",e)}),createRow:(e,a)=>{e.pin=(n,t,l)=>{const o=t?e.getLeafRows().map(i=>{let{id:c}=i;return c}):[],r=l?e.getParentRows().map(i=>{let{id:c}=i;return c}):[],u=new Set([...r,e.id,...o]);a.setRowPinning(i=>{var c,A;if(n==="bottom"){var p,D;return{top:((p=i==null?void 0:i.top)!=null?p:[]).filter(g=>!(u!=null&&u.has(g))),bottom:[...((D=i==null?void 0:i.bottom)!=null?D:[]).filter(g=>!(u!=null&&u.has(g))),...Array.from(u)]}}if(n==="top"){var s,C;return{top:[...((s=i==null?void 0:i.top)!=null?s:[]).filter(g=>!(u!=null&&u.has(g))),...Array.from(u)],bottom:((C=i==null?void 0:i.bottom)!=null?C:[]).filter(g=>!(u!=null&&u.has(g)))}}return{top:((c=i==null?void 0:i.top)!=null?c:[]).filter(g=>!(u!=null&&u.has(g))),bottom:((A=i==null?void 0:i.bottom)!=null?A:[]).filter(g=>!(u!=null&&u.has(g)))}})},e.getCanPin=()=>{var n;const{enableRowPinning:t,enablePinning:l}=a.options;return typeof t=="function"?t(e):(n=t??l)!=null?n:!0},e.getIsPinned=()=>{const n=[e.id],{top:t,bottom:l}=a.getState().rowPinning,o=n.some(u=>t==null?void 0:t.includes(u)),r=n.some(u=>l==null?void 0:l.includes(u));return o?"top":r?"bottom":!1},e.getPinnedIndex=()=>{var n,t;const l=e.getIsPinned();if(!l)return-1;const o=(n=a._getPinnedRows(l))==null?void 0:n.map(r=>{let{id:u}=r;return u});return(t=o==null?void 0:o.indexOf(e.id))!=null?t:-1}},createTable:e=>{e.setRowPinning=a=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(a),e.resetRowPinning=a=>{var n,t;return e.setRowPinning(a?Qe():(n=(t=e.initialState)==null?void 0:t.rowPinning)!=null?n:Qe())},e.getIsSomeRowsPinned=a=>{var n;const t=e.getState().rowPinning;if(!a){var l,o;return!!((l=t.top)!=null&&l.length||(o=t.bottom)!=null&&o.length)}return!!((n=t[a])!=null&&n.length)},e._getPinnedRows=k(a=>[e.getRowModel().rows,e.getState().rowPinning[a],a],(a,n,t)=>{var l;return((l=e.options.keepPinnedRows)==null||l?(n??[]).map(r=>{const u=e.getRow(r,!0);return u.getIsAllParentsExpanded()?u:null}):(n??[]).map(r=>a.find(u=>u.id===r))).filter(Boolean).map(r=>({...r,position:t}))},B(e.options,"debugRows")),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=k(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(a,n,t)=>{const l=new Set([...n??[],...t??[]]);return a.filter(o=>!l.has(o.id))},B(e.options,"debugRows"))}},at={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:ie("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=a=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(a),e.resetRowSelection=a=>{var n;return e.setRowSelection(a?{}:(n=e.initialState.rowSelection)!=null?n:{})},e.toggleAllRowsSelected=a=>{e.setRowSelection(n=>{a=typeof a<"u"?a:!e.getIsAllRowsSelected();const t={...n},l=e.getPreGroupedRowModel().flatRows;return a?l.forEach(o=>{o.getCanSelect()&&(t[o.id]=!0)}):l.forEach(o=>{delete t[o.id]}),t})},e.toggleAllPageRowsSelected=a=>e.setRowSelection(n=>{const t=typeof a<"u"?a:!e.getIsAllPageRowsSelected(),l={...n};return e.getRowModel().rows.forEach(o=>{Je(l,o.id,t,!0,e)}),l}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=k(()=>[e.getState().rowSelection,e.getCoreRowModel()],(a,n)=>Object.keys(a).length?ze(e,n):{rows:[],flatRows:[],rowsById:{}},B(e.options,"debugTable")),e.getFilteredSelectedRowModel=k(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(a,n)=>Object.keys(a).length?ze(e,n):{rows:[],flatRows:[],rowsById:{}},B(e.options,"debugTable")),e.getGroupedSelectedRowModel=k(()=>[e.getState().rowSelection,e.getSortedRowModel()],(a,n)=>Object.keys(a).length?ze(e,n):{rows:[],flatRows:[],rowsById:{}},B(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const a=e.getFilteredRowModel().flatRows,{rowSelection:n}=e.getState();let t=!!(a.length&&Object.keys(n).length);return t&&a.some(l=>l.getCanSelect()&&!n[l.id])&&(t=!1),t},e.getIsAllPageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows.filter(l=>l.getCanSelect()),{rowSelection:n}=e.getState();let t=!!a.length;return t&&a.some(l=>!n[l.id])&&(t=!1),t},e.getIsSomeRowsSelected=()=>{var a;const n=Object.keys((a=e.getState().rowSelection)!=null?a:{}).length;return n>0&&n<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:a.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>a=>{e.toggleAllRowsSelected(a.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>a=>{e.toggleAllPageRowsSelected(a.target.checked)}},createRow:(e,a)=>{e.toggleSelected=(n,t)=>{const l=e.getIsSelected();a.setRowSelection(o=>{var r;if(n=typeof n<"u"?n:!l,e.getCanSelect()&&l===n)return o;const u={...o};return Je(u,e.id,n,(r=t==null?void 0:t.selectChildren)!=null?r:!0,a),u})},e.getIsSelected=()=>{const{rowSelection:n}=a.getState();return ln(e,n)},e.getIsSomeSelected=()=>{const{rowSelection:n}=a.getState();return Le(e,n)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=a.getState();return Le(e,n)==="all"},e.getCanSelect=()=>{var n;return typeof a.options.enableRowSelection=="function"?a.options.enableRowSelection(e):(n=a.options.enableRowSelection)!=null?n:!0},e.getCanSelectSubRows=()=>{var n;return typeof a.options.enableSubRowSelection=="function"?a.options.enableSubRowSelection(e):(n=a.options.enableSubRowSelection)!=null?n:!0},e.getCanMultiSelect=()=>{var n;return typeof a.options.enableMultiRowSelection=="function"?a.options.enableMultiRowSelection(e):(n=a.options.enableMultiRowSelection)!=null?n:!0},e.getToggleSelectedHandler=()=>{const n=e.getCanSelect();return t=>{var l;n&&e.toggleSelected((l=t.target)==null?void 0:l.checked)}}}},Je=(e,a,n,t,l)=>{var o;const r=l.getRow(a,!0);n?(r.getCanMultiSelect()||Object.keys(e).forEach(u=>delete e[u]),r.getCanSelect()&&(e[a]=!0)):delete e[a],t&&(o=r.subRows)!=null&&o.length&&r.getCanSelectSubRows()&&r.subRows.forEach(u=>Je(e,u.id,n,t,l))};function ze(e,a){const n=e.getState().rowSelection,t=[],l={},o=function(r,u){return r.map(i=>{var c;const A=ln(i,n);if(A&&(t.push(i),l[i.id]=i),(c=i.subRows)!=null&&c.length&&(i={...i,subRows:o(i.subRows)}),A)return i}).filter(Boolean)};return{rows:o(a.rows),flatRows:t,rowsById:l}}function ln(e,a){var n;return(n=a[e.id])!=null?n:!1}function Le(e,a,n){var t;if(!((t=e.subRows)!=null&&t.length))return!1;let l=!0,o=!1;return e.subRows.forEach(r=>{if(!(o&&!l)&&(r.getCanSelect()&&(ln(r,a)?o=!0:l=!1),r.subRows&&r.subRows.length)){const u=Le(r,a);u==="all"?o=!0:(u==="some"&&(o=!0),l=!1)}}),l?"all":o?"some":!1}const Xe=/([0-9]+)/gm,tt=(e,a,n)=>xn(we(e.getValue(n)).toLowerCase(),we(a.getValue(n)).toLowerCase()),lt=(e,a,n)=>xn(we(e.getValue(n)),we(a.getValue(n))),ot=(e,a,n)=>on(we(e.getValue(n)).toLowerCase(),we(a.getValue(n)).toLowerCase()),rt=(e,a,n)=>on(we(e.getValue(n)),we(a.getValue(n))),ut=(e,a,n)=>{const t=e.getValue(n),l=a.getValue(n);return t>l?1:t<l?-1:0},it=(e,a,n)=>on(e.getValue(n),a.getValue(n));function on(e,a){return e===a?0:e>a?1:-1}function we(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function xn(e,a){const n=e.split(Xe).filter(Boolean),t=a.split(Xe).filter(Boolean);for(;n.length&&t.length;){const l=n.shift(),o=t.shift(),r=parseInt(l,10),u=parseInt(o,10),i=[r,u].sort();if(isNaN(i[0])){if(l>o)return 1;if(o>l)return-1;continue}if(isNaN(i[1]))return isNaN(r)?-1:1;if(r>u)return 1;if(u>r)return-1}return n.length-t.length}const ke={alphanumeric:tt,alphanumericCaseSensitive:lt,text:ot,textCaseSensitive:rt,datetime:ut,basic:it},st={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:ie("sorting",e),isMultiSortEvent:a=>a.shiftKey}),createColumn:(e,a)=>{e.getAutoSortingFn=()=>{const n=a.getFilteredRowModel().flatRows.slice(10);let t=!1;for(const l of n){const o=l==null?void 0:l.getValue(e.id);if(Object.prototype.toString.call(o)==="[object Date]")return ke.datetime;if(typeof o=="string"&&(t=!0,o.split(Xe).length>1))return ke.alphanumeric}return t?ke.text:ke.basic},e.getAutoSortDir=()=>{const n=a.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var n,t;if(!e)throw new Error;return je(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(n=(t=a.options.sortingFns)==null?void 0:t[e.columnDef.sortingFn])!=null?n:ke[e.columnDef.sortingFn]},e.toggleSorting=(n,t)=>{const l=e.getNextSortingOrder(),o=typeof n<"u"&&n!==null;a.setSorting(r=>{const u=r==null?void 0:r.find(s=>s.id===e.id),i=r==null?void 0:r.findIndex(s=>s.id===e.id);let c=[],A,p=o?n:l==="desc";if(r!=null&&r.length&&e.getCanMultiSort()&&t?u?A="toggle":A="add":r!=null&&r.length&&i!==r.length-1?A="replace":u?A="toggle":A="replace",A==="toggle"&&(o||l||(A="remove")),A==="add"){var D;c=[...r,{id:e.id,desc:p}],c.splice(0,c.length-((D=a.options.maxMultiSortColCount)!=null?D:Number.MAX_SAFE_INTEGER))}else A==="toggle"?c=r.map(s=>s.id===e.id?{...s,desc:p}:s):A==="remove"?c=r.filter(s=>s.id!==e.id):c=[{id:e.id,desc:p}];return c})},e.getFirstSortDir=()=>{var n,t;return((n=(t=e.columnDef.sortDescFirst)!=null?t:a.options.sortDescFirst)!=null?n:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=n=>{var t,l;const o=e.getFirstSortDir(),r=e.getIsSorted();return r?r!==o&&((t=a.options.enableSortingRemoval)==null||t)&&(!(n&&(l=a.options.enableMultiRemove)!=null)||l)?!1:r==="desc"?"asc":"desc":o},e.getCanSort=()=>{var n,t;return((n=e.columnDef.enableSorting)!=null?n:!0)&&((t=a.options.enableSorting)!=null?t:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var n,t;return(n=(t=e.columnDef.enableMultiSort)!=null?t:a.options.enableMultiSort)!=null?n:!!e.accessorFn},e.getIsSorted=()=>{var n;const t=(n=a.getState().sorting)==null?void 0:n.find(l=>l.id===e.id);return t?t.desc?"desc":"asc":!1},e.getSortIndex=()=>{var n,t;return(n=(t=a.getState().sorting)==null?void 0:t.findIndex(l=>l.id===e.id))!=null?n:-1},e.clearSorting=()=>{a.setSorting(n=>n!=null&&n.length?n.filter(t=>t.id!==e.id):[])},e.getToggleSortingHandler=()=>{const n=e.getCanSort();return t=>{n&&(t.persist==null||t.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?a.options.isMultiSortEvent==null?void 0:a.options.isMultiSortEvent(t):!1))}}},createTable:e=>{e.setSorting=a=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(a),e.resetSorting=a=>{var n,t;e.setSorting(a?[]:(n=(t=e.initialState)==null?void 0:t.sorting)!=null?n:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},mt=[Ea,Ja,Qa,za,qa,Fa,La,Xa,st,Ta,Za,et,nt,at,$a];function ct(e){var a,n;const t=[...mt,...(a=e._features)!=null?a:[]];let l={_features:t};const o=l._features.reduce((D,s)=>Object.assign(D,s.getDefaultOptions==null?void 0:s.getDefaultOptions(l)),{}),r=D=>l.options.mergeOptions?l.options.mergeOptions(o,D):{...o,...D};let i={...{},...(n=e.initialState)!=null?n:{}};l._features.forEach(D=>{var s;i=(s=D.getInitialState==null?void 0:D.getInitialState(i))!=null?s:i});const c=[];let A=!1;const p={_features:t,options:{...o,...e},initialState:i,_queue:D=>{c.push(D),A||(A=!0,Promise.resolve().then(()=>{for(;c.length;)c.shift()();A=!1}).catch(s=>setTimeout(()=>{throw s})))},reset:()=>{l.setState(l.initialState)},setOptions:D=>{const s=ge(D,l.options);l.options=r(s)},getState:()=>l.options.state,setState:D=>{l.options.onStateChange==null||l.options.onStateChange(D)},_getRowId:(D,s,C)=>{var g;return(g=l.options.getRowId==null?void 0:l.options.getRowId(D,s,C))!=null?g:`${C?[C.id,s].join("."):s}`},getCoreRowModel:()=>(l._getCoreRowModel||(l._getCoreRowModel=l.options.getCoreRowModel(l)),l._getCoreRowModel()),getRowModel:()=>l.getPaginationRowModel(),getRow:(D,s)=>{let C=(s?l.getPrePaginationRowModel():l.getRowModel()).rowsById[D];if(!C&&(C=l.getCoreRowModel().rowsById[D],!C))throw new Error;return C},_getDefaultColumnDef:k(()=>[l.options.defaultColumn],D=>{var s;return D=(s=D)!=null?s:{},{header:C=>{const g=C.header.column.columnDef;return g.accessorKey?g.accessorKey:g.accessorFn?g.id:null},cell:C=>{var g,v;return(g=(v=C.renderValue())==null||v.toString==null?void 0:v.toString())!=null?g:null},...l._features.reduce((C,g)=>Object.assign(C,g.getDefaultColumnDef==null?void 0:g.getDefaultColumnDef()),{}),...D}},B(e,"debugColumns")),_getColumnDefs:()=>l.options.columns,getAllColumns:k(()=>[l._getColumnDefs()],D=>{const s=function(C,g,v){return v===void 0&&(v=0),C.map(w=>{const S=xa(l,w,v,g),R=w;return S.columns=R.columns?s(R.columns,S,v+1):[],S})};return s(D)},B(e,"debugColumns")),getAllFlatColumns:k(()=>[l.getAllColumns()],D=>D.flatMap(s=>s.getFlatColumns()),B(e,"debugColumns")),_getAllFlatColumnsById:k(()=>[l.getAllFlatColumns()],D=>D.reduce((s,C)=>(s[C.id]=C,s),{}),B(e,"debugColumns")),getAllLeafColumns:k(()=>[l.getAllColumns(),l._getOrderColumnsFn()],(D,s)=>{let C=D.flatMap(g=>g.getLeafColumns());return s(C)},B(e,"debugColumns")),getColumn:D=>l._getAllFlatColumnsById()[D]};Object.assign(l,p);for(let D=0;D<l._features.length;D++){const s=l._features[D];s==null||s.createTable==null||s.createTable(l)}return l}function At(){return e=>k(()=>[e.options.data],a=>{const n={rows:[],flatRows:[],rowsById:{}},t=function(l,o,r){o===void 0&&(o=0);const u=[];for(let c=0;c<l.length;c++){const A=Ga(e,e._getRowId(l[c],c,r),l[c],c,o,void 0,r==null?void 0:r.id);if(n.flatRows.push(A),n.rowsById[A.id]=A,u.push(A),e.options.getSubRows){var i;A.originalSubRows=e.options.getSubRows(l[c],c),(i=A.originalSubRows)!=null&&i.length&&(A.subRows=t(A.originalSubRows,o+1,A))}}return u};return n.rows=t(a),n},B(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function dt(){return e=>k(()=>[e.getState().expanded,e.getPreExpandedRowModel(),e.options.paginateExpandedRows],(a,n,t)=>!n.rows.length||a!==!0&&!Object.keys(a??{}).length||!t?n:En(n),B(e.options,"debugTable"))}function En(e){const a=[],n=t=>{var l;a.push(t),(l=t.subRows)!=null&&l.length&&t.getIsExpanded()&&t.subRows.forEach(n)};return e.rows.forEach(n),{rows:a,flatRows:e.flatRows,rowsById:e.rowsById}}function bt(e){return a=>k(()=>[a.getState().pagination,a.getPrePaginationRowModel(),a.options.paginateExpandedRows?void 0:a.getState().expanded],(n,t)=>{if(!t.rows.length)return t;const{pageSize:l,pageIndex:o}=n;let{rows:r,flatRows:u,rowsById:i}=t;const c=l*o,A=c+l;r=r.slice(c,A);let p;a.options.paginateExpandedRows?p={rows:r,flatRows:u,rowsById:i}:p=En({rows:r,flatRows:u,rowsById:i}),p.flatRows=[];const D=s=>{p.flatRows.push(s),s.subRows.length&&s.subRows.forEach(D)};return p.rows.forEach(D),p},B(a.options,"debugTable"))}function Dt(){return e=>k(()=>[e.getState().sorting,e.getPreSortedRowModel()],(a,n)=>{if(!n.rows.length||!(a!=null&&a.length))return n;const t=e.getState().sorting,l=[],o=t.filter(i=>{var c;return(c=e.getColumn(i.id))==null?void 0:c.getCanSort()}),r={};o.forEach(i=>{const c=e.getColumn(i.id);c&&(r[i.id]={sortUndefined:c.columnDef.sortUndefined,invertSorting:c.columnDef.invertSorting,sortingFn:c.getSortingFn()})});const u=i=>{const c=i.map(A=>({...A}));return c.sort((A,p)=>{for(let s=0;s<o.length;s+=1){var D;const C=o[s],g=r[C.id],v=(D=C==null?void 0:C.desc)!=null?D:!1;let w=0;if(g.sortUndefined){const S=A.getValue(C.id),R=p.getValue(C.id),P=S===void 0,O=R===void 0;(P||O)&&(w=P&&O?0:P?g.sortUndefined:-g.sortUndefined)}if(w===0&&(w=g.sortingFn(A,p,C.id)),w!==0)return v&&(w*=-1),g.invertSorting&&(w*=-1),w}return A.index-p.index}),c.forEach(A=>{var p;l.push(A),(p=A.subRows)!=null&&p.length&&(A.subRows=u(A.subRows))}),c};return{rows:u(n.rows),flatRows:l,rowsById:n.rowsById}},B(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function pt(e){const a={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[n]=j.useState(()=>({current:ct(a)})),[t,l]=j.useState(()=>n.current.initialState);return n.current.setOptions(o=>({...o,...e,state:{...t,...e.state},onStateChange:r=>{l(r),e.onStateChange==null||e.onStateChange(r)}})),n.current}function Z(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandAllButton.tsx",a="9d9806d40ccb313ddf01b88567ffdabfce808fd9",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandAllButton.tsx",statementMap:{0:{start:{line:3,column:24},end:{line:19,column:1}},1:{start:{line:13,column:6},end:{line:13,column:11}},2:{start:{line:16,column:6},end:{line:16,column:16}},3:{start:{line:17,column:30},end:{line:17,column:53}},4:{start:{line:18,column:2},end:{line:18,column:326}},5:{start:{line:18,column:279},end:{line:18,column:322}},6:{start:{line:22,column:0},end:{line:39,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:24},end:{line:3,column:25}},loc:{start:{line:5,column:6},end:{line:19,column:1}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:18,column:273},end:{line:18,column:274}},loc:{start:{line:18,column:279},end:{line:18,column:322}},line:18}},branchMap:{0:{loc:{start:{line:18,column:83},end:{line:18,column:117}},type:"cond-expr",locations:[{start:{line:18,column:105},end:{line:18,column:108}},{start:{line:18,column:111},end:{line:18,column:117}}],line:18},1:{loc:{start:{line:18,column:131},end:{line:18,column:162}},type:"binary-expr",locations:[{start:{line:18,column:131},end:{line:18,column:140}},{start:{line:18,column:144},end:{line:18,column:162}}],line:18},2:{loc:{start:{line:18,column:171},end:{line:18,column:232}},type:"cond-expr",locations:[{start:{line:18,column:193},end:{line:18,column:212}},{start:{line:18,column:215},end:{line:18,column:232}}],line:18}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandAllButton.tsx"],names:["IconButton","ExpandAllButton","table","getIsSomeRowsExpanded","getState","options","renderDetailPanel","toggleAllRowsExpanded","isLoading","areSomeRowsExpanded","undefined"],mappings:"AAeI;AAdJ,OAAOA,gBAAgB;AAEvB,MAAMC,kBAAkB,CAAK;AAAA,EAAEC;AAAuC,MAAM;AAC1E,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,IAAkB;AAAA,IAC7BC;AAAAA,EACF,IAAIL;AAEJ,QAAM;AAAA,IAAEM;AAAAA,EAAU,IAAIJ,SAAS;AAC/B,QAAMK,sBAAsBN,sBAAsB;AAElD,SACE,oBAAC,cACC,UAAS,gBACT,cAAcM,sBAAsB,MAAMC,QAC1C,YAAYF,aAAa,CAACF,mBAC1B,OAAOG,sBAAsB,sBAAsB,mBACnD,MAAK,MACL,SAAQ,SACR,SAAS,MAAMF,sBAAsB,CAACE,mBAAmB,GACzD;AAEN;AAEA,eAAeR;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9d9806d40ccb313ddf01b88567ffdabfce808fd9"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Z=function(){return r},r}Z();Z().s[0]++;const Gn=({table:e})=>{Z().f[0]++;const{getIsSomeRowsExpanded:a,getState:n,options:{renderDetailPanel:t},toggleAllRowsExpanded:l}=(Z().s[1]++,e),{isLoading:o}=(Z().s[2]++,n()),r=(Z().s[3]++,a());return Z().s[4]++,m.jsx(de,{iconName:"angles-right",iconRotation:r?(Z().b[0][0]++,270):(Z().b[0][1]++,void 0),isDisabled:(Z().b[1][0]++,o||(Z().b[1][1]++,!t)),label:r?(Z().b[2][0]++,"Collapse all rows"):(Z().b[2][1]++,"Expand all rows"),size:"sm",variant:"ghost",onClick:()=>(Z().f[1]++,Z().s[5]++,l(!r))})};Z().s[6]++;Gn.__docgenInfo={description:"",methods:[],displayName:"ExpandAllButton",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function X(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandButton.tsx",a="da102d752fc8f25da53c9ef30edb5141b0d4032b",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandButton.tsx",statementMap:{0:{start:{line:3,column:21},end:{line:23,column:1}},1:{start:{line:11,column:6},end:{line:11,column:11}},2:{start:{line:16,column:6},end:{line:16,column:9}},3:{start:{line:17,column:20},end:{line:17,column:34}},4:{start:{line:18,column:21},end:{line:18,column:36}},5:{start:{line:19,column:2},end:{line:22,column:7}},6:{start:{line:20,column:4},end:{line:20,column:24}},7:{start:{line:21,column:4},end:{line:21,column:21}},8:{start:{line:26,column:0},end:{line:1184,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:21},end:{line:3,column:22}},loc:{start:{line:6,column:6},end:{line:23,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:19,column:244},end:{line:19,column:245}},loc:{start:{line:19,column:251},end:{line:22,column:3}},line:19}},branchMap:{0:{loc:{start:{line:19,column:82},end:{line:19,column:106}},type:"cond-expr",locations:[{start:{line:19,column:95},end:{line:19,column:97}},{start:{line:19,column:100},end:{line:19,column:106}}],line:19},1:{loc:{start:{line:19,column:120},end:{line:19,column:152}},type:"binary-expr",locations:[{start:{line:19,column:120},end:{line:19,column:130}},{start:{line:19,column:134},end:{line:19,column:152}}],line:19},2:{loc:{start:{line:19,column:161},end:{line:19,column:203}},type:"cond-expr",locations:[{start:{line:19,column:174},end:{line:19,column:188}},{start:{line:19,column:191},end:{line:19,column:203}}],line:19}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandButton.tsx"],names:["IconButton","ExpandButton","table","row","options","renderDetailPanel","getIsExpanded","getCanExpand","toggleExpanded","canExpand","isExpanded","undefined","e","stopPropagation"],mappings:"AAmBI;AAlBJ,OAAOA,gBAAgB;AAEvB,MAAMC,eAAe,CAAK;AAAA,EACxBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,IAAkB;AAAA,EAC/B,IAAIH;AACJ,QAAM;AAAA,IAAEI;AAAAA,IAAeC;AAAAA,IAAcC;AAAAA,EAAe,IAAIL;AAExD,QAAMM,YAAYF,aAAa;AAC/B,QAAMG,aAAaJ,cAAc;AAEjC,SACE,oBAAC,cACC,UAAS,eACT,cAAcI,aAAa,KAAKC,QAChC,YAAY,CAACF,aAAa,CAACJ,mBAC3B,OAAOK,aAAa,iBAAiB,cACrC,MAAK,MACL,SAAQ,SACR,SAAUE,OAAM;AACdA,MAAEC,gBAAgB;AAClBL,mBAAe;AAAA,EACjB,GACA;AAEN;AAEA,eAAeP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"da102d752fc8f25da53c9ef30edb5141b0d4032b"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return X=function(){return r},r}X();X().s[0]++;const qn=({table:e,row:a})=>{X().f[0]++;const{options:{renderDetailPanel:n}}=(X().s[1]++,e),{getIsExpanded:t,getCanExpand:l,toggleExpanded:o}=(X().s[2]++,a),r=(X().s[3]++,l()),u=(X().s[4]++,t());return X().s[5]++,m.jsx(de,{iconName:"angle-right",iconRotation:u?(X().b[0][0]++,90):(X().b[0][1]++,void 0),isDisabled:(X().b[1][0]++,!r&&(X().b[1][1]++,!n)),label:u?(X().b[2][0]++,"Collapse row"):(X().b[2][1]++,"Expand row"),size:"sm",variant:"ghost",onClick:i=>{X().f[1]++,X().s[6]++,i.stopPropagation(),X().s[7]++,o()}})};X().s[8]++;qn.__docgenInfo={description:"",methods:[],displayName:"ExpandButton",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""}}};function _(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/RowActionsMenu.tsx",a="ce10698b0648b60dad79bf64ade76cf4c4cd4bf4",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/RowActionsMenu.tsx",statementMap:{0:{start:{line:4,column:23},end:{line:48,column:1}},1:{start:{line:11,column:6},end:{line:11,column:11}},2:{start:{line:14,column:6},end:{line:14,column:16}},3:{start:{line:15,column:2},end:{line:47,column:11}},4:{start:{line:16,column:4},end:{line:18,column:5}},5:{start:{line:17,column:6},end:{line:17,column:82}},6:{start:{line:26,column:8},end:{line:26,column:14}},7:{start:{line:27,column:26},end:{line:30,column:14}},8:{start:{line:31,column:29},end:{line:34,column:17}},9:{start:{line:35,column:29},end:{line:38,column:17}},10:{start:{line:39,column:31},end:{line:42,column:19}},11:{start:{line:43,column:4},end:{line:46,column:67}},12:{start:{line:51,column:0},end:{line:1304,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:23},end:{line:4,column:24}},loc:{start:{line:8,column:6},end:{line:48,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:15,column:206},end:{line:15,column:207}},loc:{start:{line:15,column:221},end:{line:47,column:3}},line:15}},branchMap:{0:{loc:{start:{line:16,column:4},end:{line:18,column:5}},type:"if",locations:[{start:{line:16,column:4},end:{line:18,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:16},1:{loc:{start:{line:27,column:26},end:{line:30,column:14}},type:"cond-expr",locations:[{start:{line:27,column:56},end:{line:30,column:6}},{start:{line:30,column:9},end:{line:30,column:14}}],line:27},2:{loc:{start:{line:31,column:29},end:{line:34,column:17}},type:"cond-expr",locations:[{start:{line:31,column:62},end:{line:34,column:6}},{start:{line:34,column:9},end:{line:34,column:17}}],line:31},3:{loc:{start:{line:35,column:29},end:{line:38,column:17}},type:"cond-expr",locations:[{start:{line:35,column:62},end:{line:38,column:6}},{start:{line:38,column:9},end:{line:38,column:17}}],line:35},4:{loc:{start:{line:39,column:31},end:{line:42,column:19}},type:"cond-expr",locations:[{start:{line:39,column:66},end:{line:42,column:6}},{start:{line:42,column:9},end:{line:42,column:19}}],line:39}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/RowActionsMenu.tsx"],names:["DropdownMenu","MenuContent","MenuItem","MenuSeparator","RowActionsMenu","row","table","rowActions","getState","isFullscreenMode","map","action","i","iconName","iconType","label","onClick","isDisabled","isDestructive","resolvedLabel","resolvedIconName","resolvedIconType","resolvedIsDisabled"],mappings:"AAoCmB;AAnCnB,YAAYA,kBAAkB;AAE9B,SACEC,aACAC,UACAC,qBACK;AAOP,MAAMC,iBAAiB,CAAK;AAAA,EAC1BC;AAAAA,EACAC;AAAAA,EACAC;AAKF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAS,IAAIF;AACrB,QAAM;AAAA,IAAEG;AAAAA,EAAiB,IAAID,SAAS;AACtC,SACE,oBAAC,aAAa,QAAb,EACC,8BAAC,eACC,eAAeC,kBACf,OAAM,OACN,kBAAkB,IAClB,YAAY,GAEXF,qBAAWG,IAAI,CAACC,QAAQC,MAAM;AAC7B,QAAID,WAAW,MAAM;AAEnB,aAAO,oBAAC,mBAAoB,yBAAwBC,CAAE,EAAK;AAAA,IAC7D;AACA,UAAM;AAAA,MACJC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,IACF,IAAIP;AAEJ,UAAMQ,gBACJ,OAAOJ,UAAU,aAAaA,MAAM;AAAA,MAAEV;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAIS;AACxD,UAAMK,mBACJ,OAAOP,aAAa,aAChBA,SAAS;AAAA,MAAER;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACvBO;AACN,UAAMQ,mBACJ,OAAOP,aAAa,aAChBA,SAAS;AAAA,MAAET;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACvBQ;AACN,UAAMQ,qBACJ,OAAOL,eAAe,aAClBA,WAAW;AAAA,MAAEZ;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACzBW;AAEN,WACE,oBAAC,YAEC,WAAU,kCACV,UAAUG,kBACV,UAAUC,kBACV,eACA,YAAYC,oBACZ,SAASN,QAAQ;AAAA,MAAEX;AAAAA,MAAKC;AAAAA,IAAM,CAAC,GAE9Ba,2BARK,eAAcA,aAAc,EASpC;AAAA,EAEJ,CAAC,GACH,GACF;AAEJ;AAEA,eAAef;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ce10698b0648b60dad79bf64ade76cf4c4cd4bf4"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return _=function(){return r},r}_();_().s[0]++;const Fn=({row:e,table:a,rowActions:n})=>{_().f[0]++;const{getState:t}=(_().s[1]++,a),{isFullscreenMode:l}=(_().s[2]++,t());return _().s[3]++,m.jsx(bn,{children:m.jsx(Dn,{$isFullscreen:l,align:"end",collisionPadding:10,sideOffset:5,children:n.map((o,r)=>{if(_().f[1]++,_().s[4]++,o===null)return _().b[0][0]++,_().s[5]++,m.jsx(Ie,{},`row-actions-separator-${r}`);_().b[0][1]++;const{iconName:u,iconType:i,label:c,onClick:A,isDisabled:p,isDestructive:D}=(_().s[6]++,o),s=(_().s[7]++,typeof c=="function"?(_().b[1][0]++,c({row:e,table:a})):(_().b[1][1]++,c)),C=(_().s[8]++,typeof u=="function"?(_().b[2][0]++,u({row:e,table:a})):(_().b[2][1]++,u)),g=(_().s[9]++,typeof i=="function"?(_().b[3][0]++,i({row:e,table:a})):(_().b[3][1]++,i)),v=(_().s[10]++,typeof p=="function"?(_().b[4][0]++,p({row:e,table:a})):(_().b[4][1]++,p));return _().s[11]++,m.jsx(ce,{className:"ds-table-row-actions-menu-item",iconName:C,iconType:g,isDestructive:D,isDisabled:v,onClick:A({row:e,table:a}),children:s},`row-actions-${s}`)})})})};_().s[12]++;Fn.__docgenInfo={description:"",methods:[],displayName:"RowActionsMenu",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},rowActions:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`null | {
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: {
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: {
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconName",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconType",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}},required:!0}},{key:"isDisabled",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"isDestructive",value:{name:"boolean",required:!1}}]}}]}],raw:"DatatableRowAction<D>[]"},description:""}}};function H(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/RowActionsButton.tsx",a="51d5b66f8f1e4925be9c3b56c9378b0ab19e8a21",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/RowActionsButton.tsx",statementMap:{0:{start:{line:5,column:25},end:{line:54,column:1}},1:{start:{line:13,column:6},end:{line:13,column:11}},2:{start:{line:14,column:2},end:{line:19,column:3}},3:{start:{line:15,column:4},end:{line:18,column:9}},4:{start:{line:20,column:2},end:{line:52,column:3}},5:{start:{line:28,column:8},end:{line:28,column:21}},6:{start:{line:29,column:26},end:{line:32,column:14}},7:{start:{line:33,column:29},end:{line:36,column:17}},8:{start:{line:37,column:29},end:{line:40,column:17}},9:{start:{line:41,column:31},end:{line:44,column:19}},10:{start:{line:45,column:4},end:{line:51,column:9}},11:{start:{line:46,column:6},end:{line:46,column:26}},12:{start:{line:47,column:6},end:{line:50,column:12}},13:{start:{line:53,column:2},end:{line:53,column:14}},14:{start:{line:57,column:0},end:{line:1215,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:25},end:{line:5,column:26}},loc:{start:{line:8,column:6},end:{line:54,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:45,column:281},end:{line:45,column:282}},loc:{start:{line:45,column:288},end:{line:51,column:5}},line:45}},branchMap:{0:{loc:{start:{line:11,column:6},end:{line:11,column:21}},type:"default-arg",locations:[{start:{line:11,column:19},end:{line:11,column:21}}],line:11},1:{loc:{start:{line:14,column:2},end:{line:19,column:3}},type:"if",locations:[{start:{line:14,column:2},end:{line:19,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:14},2:{loc:{start:{line:20,column:2},end:{line:52,column:3}},type:"if",locations:[{start:{line:20,column:2},end:{line:52,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20},3:{loc:{start:{line:29,column:26},end:{line:32,column:14}},type:"cond-expr",locations:[{start:{line:29,column:56},end:{line:32,column:6}},{start:{line:32,column:9},end:{line:32,column:14}}],line:29},4:{loc:{start:{line:33,column:29},end:{line:36,column:17}},type:"cond-expr",locations:[{start:{line:33,column:62},end:{line:36,column:6}},{start:{line:36,column:9},end:{line:36,column:17}}],line:33},5:{loc:{start:{line:37,column:29},end:{line:40,column:17}},type:"cond-expr",locations:[{start:{line:37,column:62},end:{line:40,column:6}},{start:{line:40,column:9},end:{line:40,column:17}}],line:37},6:{loc:{start:{line:41,column:31},end:{line:44,column:19}},type:"cond-expr",locations:[{start:{line:41,column:66},end:{line:44,column:6}},{start:{line:44,column:9},end:{line:44,column:19}}],line:41},7:{loc:{start:{line:45,column:230},end:{line:45,column:270}},type:"cond-expr",locations:[{start:{line:45,column:246},end:{line:45,column:260}},{start:{line:45,column:263},end:{line:45,column:270}}],line:45}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},f:{0:0,1:0},b:{0:[0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/RowActionsButton.tsx"],names:["DropdownMenu","RowActionsMenu","IconButton","RowActionsButton","row","table","options","rowActions","length","label","iconName","iconType","onClick","isDisabled","isDestructive","resolvedLabel","resolvedIconName","resolvedIconType","resolvedIsDisabled","e","stopPropagation"],mappings:"AAmBM,SAEI,KAFJ;AAnBN,YAAYA,kBAAkB;AAG9B,OAAOC,oBAAoB;AAC3B,OAAOC,gBAAgB;AAEvB,MAAMC,mBAAmB,CAAK;AAAA,EAC5BC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC,aAAa,CAAA;AAAA,IAAG;AAAA,EAC7B,IAAIF;AAEJ,MAAIE,WAAWC,SAAS,GAAG;AACzB,WACE,qBAAC,aAAa,MAAb,EACC;AAAA,0BAAC,aAAa,SAAb,EAAqB,SAAO,MAC3B,8BAAC,cACC,WAAU,2CACV,UAAS,cACT,OAAM,eACN,MAAK,MACL,SAAQ,SAAO,GAEnB;AAAA,MACA,oBAAC,kBAAe,KAAU,YAAwB,OAAa;AAAA,OACjE;AAAA,EAEJ;AAEA,MAAID,WAAWC,WAAW,GAAG;AAC3B,UAAM;AAAA,MAAEC;AAAAA,MAAOC;AAAAA,MAAUC;AAAAA,MAAUC;AAAAA,MAASC;AAAAA,MAAYC;AAAAA,IAAc,IACpEP,WAAW,CAAC;AAEd,UAAMQ,gBACJ,OAAON,UAAU,aAAaA,MAAM;AAAA,MAAEL;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAII;AACxD,UAAMO,mBACJ,OAAON,aAAa,aAAaA,SAAS;AAAA,MAAEN;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAIK;AAC9D,UAAMO,mBACJ,OAAON,aAAa,aAAaA,SAAS;AAAA,MAAEP;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAIM;AAC9D,UAAMO,qBACJ,OAAOL,eAAe,aAClBA,WAAW;AAAA,MAAET;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACzBQ;AAEN,WACE,oBAAC,cACC,WAAU,2CACV,UAAUG,kBACV,UAAUC,kBACV,YAAYC,oBACZ,OAAOH,eACP,MAAK,MACL,SAASD,gBAAgB,iBAAiB,SAC1C,SAAUK,OAAM;AACdA,QAAEC,gBAAgB;AAClBR,cAAQ;AAAA,QAAER;AAAAA,QAAKC;AAAAA,MAAM,CAAC,EAAEc,CAA2B;AAAA,IACrD,GACA;AAAA,EAEN;AAEA,SAAO;AACT;AAEA,eAAehB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"51d5b66f8f1e4925be9c3b56c9378b0ab19e8a21"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return H=function(){return r},r}H();H().s[0]++;const Mn=({row:e,table:a})=>{H().f[0]++;const{options:{rowActions:n=(H().b[0][0]++,[])}}=(H().s[1]++,a);if(H().s[2]++,n.length>1)return H().b[1][0]++,H().s[3]++,m.jsxs(pn,{children:[m.jsx(gn,{asChild:!0,children:m.jsx(de,{className:"ds-table-header-cell-row-actions-button",iconName:"ellipsis-h",label:"Row actions",size:"sm",variant:"ghost"})}),m.jsx(Fn,{row:e,rowActions:n,table:a})]});if(H().b[1][1]++,H().s[4]++,n.length===1){H().b[2][0]++;const{label:t,iconName:l,iconType:o,onClick:r,isDisabled:u,isDestructive:i}=(H().s[5]++,n[0]),c=(H().s[6]++,typeof t=="function"?(H().b[3][0]++,t({row:e,table:a})):(H().b[3][1]++,t)),A=(H().s[7]++,typeof l=="function"?(H().b[4][0]++,l({row:e,table:a})):(H().b[4][1]++,l)),p=(H().s[8]++,typeof o=="function"?(H().b[5][0]++,o({row:e,table:a})):(H().b[5][1]++,o)),D=(H().s[9]++,typeof u=="function"?(H().b[6][0]++,u({row:e,table:a})):(H().b[6][1]++,u));return H().s[10]++,m.jsx(de,{className:"ds-table-header-cell-row-actions-button",iconName:A,iconType:p,isDisabled:D,label:c,size:"sm",variant:i?(H().b[7][0]++,"danger-ghost"):(H().b[7][1]++,"ghost"),onClick:s=>{H().f[1]++,H().s[11]++,s.stopPropagation(),H().s[12]++,r({row:e,table:a})(s)}})}else H().b[2][1]++;return H().s[13]++,null};H().s[14]++;Mn.__docgenInfo={description:"",methods:[],displayName:"RowActionsButton",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ee(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/inputs/IndeterminateCheckbox.tsx",a="9be567c60dcc1dba2fcbf6c62d4c9852196d189e",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/inputs/IndeterminateCheckbox.tsx",statementMap:{0:{start:{line:3,column:30},end:{line:14,column:1}},1:{start:{line:7,column:14},end:{line:7,column:26}},2:{start:{line:8,column:2},end:{line:12,column:42}},3:{start:{line:9,column:4},end:{line:11,column:5}},4:{start:{line:10,column:6},end:{line:10,column:66}},5:{start:{line:13,column:2},end:{line:13,column:140}},6:{start:{line:13,column:117},end:{line:13,column:136}},7:{start:{line:17,column:0},end:{line:30,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:30},end:{line:3,column:31}},loc:{start:{line:6,column:6},end:{line:14,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:8,column:12},end:{line:8,column:13}},loc:{start:{line:8,column:18},end:{line:12,column:3}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:13,column:110},end:{line:13,column:111}},loc:{start:{line:13,column:117},end:{line:13,column:136}},line:13}},branchMap:{0:{loc:{start:{line:9,column:4},end:{line:11,column:5}},type:"if",locations:[{start:{line:9,column:4},end:{line:11,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:9},1:{loc:{start:{line:10,column:34},end:{line:10,column:65}},type:"binary-expr",locations:[{start:{line:10,column:34},end:{line:10,column:48}},{start:{line:10,column:52},end:{line:10,column:65}}],line:10}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/inputs/IndeterminateCheckbox.tsx"],names:["useEffect","useRef","IndeterminateCheckbox","indeterminate","props","ref","current","checked","className","e","stopPropagation"],mappings:"AAeI;AAfJ,SAAgCA,WAAWC,cAAc;AAEzD,MAAMC,wBAAwBA,CAAC;AAAA,EAC7BC;AAAAA,EACA,GAAGC;AACkD,MAAM;AAC3D,QAAMC,MAAMJ,OAAyB,IAAI;AAEzCD,YAAU,MAAM;AACd,QAAI,OAAOG,kBAAkB,WAAW;AACtCE,UAAIC,QAAQH,gBAAgB,CAACC,MAAMG,WAAWJ;AAAAA,IAChD;AAAA,EACF,GAAG,CAACE,KAAKF,eAAeC,MAAMG,OAAO,CAAC;AAEtC,SACE,oBAAC,WACC,KACA,WAAWH,MAAMI,WACjB,MAAK,YACDJ,GAAAA,OACJ,SAAUK,OAAMA,EAAEC,gBAAgB,GAClC;AAEN;AAEA,eAAeR;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9be567c60dcc1dba2fcbf6c62d4c9852196d189e"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ee=function(){return r},r}ee();ee().s[0]++;const He=({indeterminate:e,...a})=>{ee().f[0]++;const n=(ee().s[1]++,j.useRef(null));return ee().s[2]++,j.useEffect(()=>{ee().f[1]++,ee().s[3]++,typeof e=="boolean"?(ee().b[0][0]++,ee().s[4]++,n.current.indeterminate=(ee().b[1][0]++,!a.checked&&(ee().b[1][1]++,e))):ee().b[0][1]++},[n,e,a.checked]),ee().s[5]++,m.jsx("input",{ref:n,className:a.className,type:"checkbox",...a,onClick:t=>(ee().f[2]++,ee().s[6]++,t.stopPropagation())})};ee().s[7]++;He.__docgenInfo={description:"",methods:[],displayName:"IndeterminateCheckbox",props:{indeterminate:{required:!1,tsType:{name:"boolean"},description:""}}};function h(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/SelectButton.tsx",a="bdd0a3f372de079ecb0da868186cdd43fcf4ccd6",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/SelectButton.tsx",statementMap:{0:{start:{line:4,column:25},end:{line:36,column:1}},1:{start:{line:7,column:6},end:{line:36,column:1}},2:{start:{line:16,column:6},end:{line:16,column:11}},3:{start:{line:17,column:31},end:{line:17,column:50}},4:{start:{line:18,column:2},end:{line:18,column:44}},5:{start:{line:19,column:2},end:{line:34,column:3}},6:{start:{line:22,column:8},end:{line:22,column:40}},7:{start:{line:23,column:22},end:{line:23,column:79}},8:{start:{line:23,column:44},end:{line:23,column:78}},9:{start:{line:24,column:4},end:{line:33,column:5}},10:{start:{line:25,column:33},end:{line:25,column:64}},11:{start:{line:26,column:27},end:{line:26,column:65}},12:{start:{line:26,column:49},end:{line:26,column:64}},13:{start:{line:27,column:27},end:{line:27,column:107}},14:{start:{line:28,column:6},end:{line:32,column:7}},15:{start:{line:29,column:8},end:{line:31,column:9}},16:{start:{line:29,column:21},end:{line:29,column:26}},17:{start:{line:30,column:10},end:{line:30,column:56}},18:{start:{line:35,column:2},end:{line:35,column:37}},19:{start:{line:37,column:21},end:{line:85,column:1}},20:{start:{line:50,column:6},end:{line:50,column:11}},21:{start:{line:53,column:6},end:{line:53,column:16}},22:{start:{line:54,column:26},end:{line:54,column:115}},23:{start:{line:55,column:17},end:{line:70,column:3}},24:{start:{line:60,column:6},end:{line:60,column:26}},25:{start:{line:61,column:6},end:{line:68,column:7}},26:{start:{line:62,column:8},end:{line:62,column:126}},27:{start:{line:64,column:8},end:{line:67,column:14}},28:{start:{line:71,column:17},end:{line:75,column:3}},29:{start:{line:76,column:2},end:{line:84,column:160}},30:{start:{line:88,column:0},end:{line:1268,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:25},end:{line:4,column:26}},loc:{start:{line:7,column:6},end:{line:36,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:7,column:6},end:{line:7,column:7}},loc:{start:{line:7,column:17},end:{line:36,column:1}},line:7},2:{name:"(anonymous_2)",decl:{start:{line:23,column:37},end:{line:23,column:38}},loc:{start:{line:23,column:44},end:{line:23,column:78}},line:23},3:{name:"(anonymous_3)",decl:{start:{line:26,column:42},end:{line:26,column:43}},loc:{start:{line:26,column:49},end:{line:26,column:64}},line:26},4:{name:"(anonymous_4)",decl:{start:{line:37,column:21},end:{line:37,column:22}},loc:{start:{line:43,column:6},end:{line:85,column:1}},line:43},5:{name:"(anonymous_5)",decl:{start:{line:59,column:14},end:{line:59,column:15}},loc:{start:{line:59,column:21},end:{line:69,column:5}},line:59}},branchMap:{0:{loc:{start:{line:19,column:2},end:{line:34,column:3}},type:"if",locations:[{start:{line:19,column:2},end:{line:34,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:19},1:{loc:{start:{line:19,column:6},end:{line:19,column:124}},type:"binary-expr",locations:[{start:{line:19,column:6},end:{line:19,column:29}},{start:{line:19,column:33},end:{line:19,column:56}},{start:{line:19,column:60},end:{line:19,column:86}},{start:{line:19,column:90},end:{line:19,column:124}}],line:19},2:{loc:{start:{line:24,column:4},end:{line:33,column:5}},type:"if",locations:[{start:{line:24,column:4},end:{line:33,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:24},3:{loc:{start:{line:27,column:27},end:{line:27,column:107}},type:"cond-expr",locations:[{start:{line:27,column:54},end:{line:27,column:79}},{start:{line:27,column:82},end:{line:27,column:107}}],line:27},4:{loc:{start:{line:28,column:6},end:{line:32,column:7}},type:"if",locations:[{start:{line:28,column:6},end:{line:32,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:28},5:{loc:{start:{line:40,column:2},end:{line:40,column:26}},type:"default-arg",locations:[{start:{line:40,column:21},end:{line:40,column:26}}],line:40},6:{loc:{start:{line:41,column:2},end:{line:41,column:26}},type:"default-arg",locations:[{start:{line:41,column:21},end:{line:41,column:26}}],line:41},7:{loc:{start:{line:54,column:26},end:{line:54,column:115}},type:"cond-expr",locations:[{start:{line:54,column:52},end:{line:54,column:80}},{start:{line:54,column:83},end:{line:54,column:115}}],line:54},8:{loc:{start:{line:56,column:13},end:{line:56,column:70}},type:"cond-expr",locations:[{start:{line:56,column:32},end:{line:56,column:47}},{start:{line:56,column:50},end:{line:56,column:70}}],line:56},9:{loc:{start:{line:57,column:14},end:{line:57,column:54}},type:"binary-expr",locations:[{start:{line:57,column:14},end:{line:57,column:23}},{start:{line:57,column:27},end:{line:57,column:30}},{start:{line:57,column:34},end:{line:57,column:54}}],line:57},10:{loc:{start:{line:58,column:18},end:{line:58,column:78}},type:"cond-expr",locations:[{start:{line:58,column:37},end:{line:58,column:56}},{start:{line:58,column:59},end:{line:58,column:78}}],line:58},11:{loc:{start:{line:61,column:6},end:{line:68,column:7}},type:"if",locations:[{start:{line:61,column:6},end:{line:68,column:7}},{start:{line:63,column:13},end:{line:68,column:7}}],line:61},12:{loc:{start:{line:62,column:8},end:{line:62,column:125}},type:"cond-expr",locations:[{start:{line:62,column:34},end:{line:62,column:76}},{start:{line:62,column:79},end:{line:62,column:125}}],line:62},13:{loc:{start:{line:76,column:9},end:{line:84,column:159}},type:"cond-expr",locations:[{start:{line:79,column:20},end:{line:81,column:259}},{start:{line:82,column:22},end:{line:84,column:159}}],line:76},14:{loc:{start:{line:81,column:151},end:{line:81,column:227}},type:"cond-expr",locations:[{start:{line:81,column:170},end:{line:81,column:219}},{start:{line:81,column:222},end:{line:81,column:227}}],line:81},15:{loc:{start:{line:81,column:170},end:{line:81,column:219}},type:"binary-expr",locations:[{start:{line:81,column:170},end:{line:81,column:199}},{start:{line:81,column:203},end:{line:81,column:219}}],line:81}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0,0,0],2:[0,0],3:[0,0],4:[0,0],5:[0],6:[0],7:[0,0],8:[0,0],9:[0,0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/SelectButton.tsx"],names:["clx","IndeterminateCheckbox","selectRowHandler","row","table","event","options","enableBatchRowSelection","enableMultiRowSelection","refs","lastSelectedRowIdRef","lastSelectedRowId","wasCurrentRowChecked","getIsSelected","toggleSelected","nativeEvent","shiftKey","current","rows","getPrePaginationRowModel","lastIndex","findIndex","r","id","isLastIndexChecked","currentIndex","start","end","i","SelectButton","isHeaderCheckbox","hasTargetWrapper","style","getState","selectAllMode","isLoading","allRowsSelected","getIsAllRowsSelected","getIsAllPageRowsSelected","common","checked","disabled","getCanSelect","onChange","e","stopPropagation","getToggleAllRowsSelectedHandler","getToggleAllPageRowsSelectedHandler","styles","width","height","accentColor","getIsSomeRowsSelected"],mappings:"AAuGM;AAlGN,OAAOA,SAAS;AAGhB,OAAOC,2BAA2B;AAElC,MAAMC,mBACJ,CAAK;AAAA,EAAEC;AAAAA,EAAKC;AAA6D,MACzE,CAACC,UAAyC;AACxC,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,MAAyBC;AAAAA,IAAwB;AAAA,IAC5DC,MAAM;AAAA,MAAEC,sBAAsBC;AAAAA,IAAkB;AAAA,EAClD,IAAIP;AACJ,QAAMQ,uBAAuBT,IAAIU,cAAc;AAE/CV,MAAIW,eAAe,CAACF,oBAAoB;AAExC,MACEL,2BACAC,2BACCH,MAAMU,YAA6BC,YACpCL,kBAAkBM,YAAY,MAC9B;AACA,UAAM;AAAA,MAAEC;AAAAA,IAAK,IAAId,MAAMe,yBAAyB;AAChD,UAAMC,YAAYF,KAAKG,UACpBC,OAAMA,EAAEC,OAAOZ,kBAAkBM,OACpC;AAEA,QAAIG,cAAc,IAAI;AACpB,YAAMI,qBAAqBN,KAAKE,SAAS,EAAEP,cAAc;AACzD,YAAMY,eAAeP,KAAKG,UAAWC,OAAMA,EAAEC,OAAOpB,IAAIoB,EAAE;AAC1D,YAAM,CAACG,OAAOC,GAAG,IACfP,YAAYK,eACR,CAACL,WAAWK,YAAY,IACxB,CAACA,cAAcL,SAAS;AAC9B,UAAIR,yBAAyBY,oBAAoB;AAC/C,iBAASI,IAAIF,OAAOE,KAAKD,KAAKC,KAAK;AACjCV,eAAKU,CAAC,EAAEd,eAAe,CAACF,oBAAoB;AAAA,QAC9C;AAAA,MACF;AAAA,IACF;AAAA,EACF;AAEAD,oBAAkBM,UAAUd,IAAIoB;AAClC;AAEF,MAAMM,eAAe,CAAK;AAAA,EACxB1B;AAAAA,EACAC;AAAAA,EACA0B,mBAAmB;AAAA,EACnBC,mBAAmB;AAAA,EACnBC;AAMkC,MAAM;AACxC,QAAM;AAAA,IACJC;AAAAA,IACA3B,SAAS;AAAA,MAAEE;AAAAA,MAAyB0B;AAAAA,IAAc;AAAA,EACpD,IAAI9B;AACJ,QAAM;AAAA,IAAE+B;AAAAA,EAAU,IAAIF,SAAS;AAE/B,QAAMG,kBACJF,kBAAkB,QACd9B,MAAMiC,qBAAqB,IAC3BjC,MAAMkC,yBAAyB;AAErC,QAAMC,SAAkC;AAAA,IACtCC,SAASV,mBAAmBM,kBAAkBjC,KAAKU,cAAc;AAAA,IACjE4B,UAAUN,aAAchC,OAAO,CAACA,KAAKuC,aAAa;AAAA,IAClD,cAAcZ,mBAAmB,sBAAsB;AAAA,IACvDa,UAAWC,OAAM;AACfA,QAAEC,gBAAgB;AAElB,UAAIf,kBAAkB;AACpBI,0BAAkB,QACd9B,MAAM0C,gCAAgC,EAAEF,CAAC,IACzCxC,MAAM2C,oCAAoC,EAAEH,CAAC;AAAA,MACnD,OAAO;AACL1C,yBAAiB;AAAA,UAAEC;AAAAA,UAAKC;AAAAA,QAAM,CAAC,EAAEwC,CAAC;AAAA,MACpC;AAAA,IACF;AAAA,EACF;AAEA,QAAMI,SAAS;AAAA,IACbC,OAAO;AAAA,IACPC,QAAQ;AAAA,IACRC,aAAa;AAAA,EACf;AAEA,SAAO3C;AAAAA;AAAAA;AAAAA,IAGL,oBAAC,WACC,WAAWR,IAAI;AAAA,MAAE,iCAAiC+B;AAAAA,IAAiB,CAAC,GACpE,OAEA,8BAAC,yBACC,WAAU,uDACV,eACED,mBACI1B,MAAMgD,sBAAsB,KAAK,CAAChB,kBAClC,OAEN,GAAIG,QACJ,OAAOS,QAAO,GAElB;AAAA,MAEA,oBAAC,WACC,WAAWhD,IAAI;AAAA,IAAE,iCAAiC+B;AAAAA,EAAiB,CAAC,GAEpE,8BAAC,WACC,WAAU,wDACV,MAAK,SACL,GAAIQ,QACJ,OAAOS,QAAO,GAElB;AAEJ;AAEA,eAAenB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bdd0a3f372de079ecb0da868186cdd43fcf4ccd6"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return h=function(){return r},r}h();h().s[0]++;const gt=({row:e,table:a})=>(h().f[0]++,h().s[1]++,n=>{h().f[1]++;const{options:{enableBatchRowSelection:t,enableMultiRowSelection:l},refs:{lastSelectedRowIdRef:o}}=(h().s[2]++,a),r=(h().s[3]++,e.getIsSelected());if(h().s[4]++,e.toggleSelected(!r),h().s[5]++,h().b[1][0]++,t&&(h().b[1][1]++,l)&&(h().b[1][2]++,n.nativeEvent.shiftKey)&&(h().b[1][3]++,o.current!==null)){h().b[0][0]++;const{rows:u}=(h().s[6]++,a.getPrePaginationRowModel()),i=(h().s[7]++,u.findIndex(c=>(h().f[2]++,h().s[8]++,c.id===o.current)));if(h().s[9]++,i!==-1){h().b[2][0]++;const c=(h().s[10]++,u[i].getIsSelected()),A=(h().s[11]++,u.findIndex(s=>(h().f[3]++,h().s[12]++,s.id===e.id))),[p,D]=(h().s[13]++,i<A?(h().b[3][0]++,[i,A]):(h().b[3][1]++,[A,i]));if(h().s[14]++,r!==c){h().b[4][0]++,h().s[15]++;for(let s=(h().s[16]++,p);s<=D;s++)h().s[17]++,u[s].toggleSelected(!r)}else h().b[4][1]++}else h().b[2][1]++}else h().b[0][1]++;h().s[18]++,o.current=e.id});h().s[19]++;const Ze=({row:e,table:a,isHeaderCheckbox:n=(h().b[5][0]++,!1),hasTargetWrapper:t=(h().b[6][0]++,!1),style:l})=>{h().f[4]++;const{getState:o,options:{enableMultiRowSelection:r,selectAllMode:u}}=(h().s[20]++,a),{isLoading:i}=(h().s[21]++,o()),c=(h().s[22]++,u==="all"?(h().b[7][0]++,a.getIsAllRowsSelected()):(h().b[7][1]++,a.getIsAllPageRowsSelected())),A=(h().s[23]++,{checked:n?(h().b[8][0]++,c):(h().b[8][1]++,e==null?void 0:e.getIsSelected()),disabled:(h().b[9][0]++,i||(h().b[9][1]++,e&&(h().b[9][2]++,!(e!=null&&e.getCanSelect())))),"aria-label":n?(h().b[10][0]++,"Toggle select all"):(h().b[10][1]++,"Toggle select row"),onChange:D=>{h().f[5]++,h().s[24]++,D.stopPropagation(),h().s[25]++,n?(h().b[11][0]++,h().s[26]++,u==="all"?(h().b[12][0]++,a.getToggleAllRowsSelectedHandler()(D)):(h().b[12][1]++,a.getToggleAllPageRowsSelectedHandler()(D))):(h().b[11][1]++,h().s[27]++,gt({row:e,table:a})(D))}}),p=(h().s[28]++,{width:"1.25rem",height:"1.25rem",accentColor:"var(--sscds-table-color-accent)"});return h().s[29]++,r?(h().b[13][0]++,m.jsx("label",{className:Oe({"ds-table-select-button-target":t}),style:l,children:m.jsx(He,{className:"ds-table-select-multi-button ds-table-select-button",indeterminate:n?(h().b[14][0]++,h().b[15][0]++,a.getIsSomeRowsSelected()&&(h().b[15][1]++,!c)):(h().b[14][1]++,!1),...A,style:p})})):(h().b[13][1]++,m.jsx("label",{className:Oe({"ds-table-select-button-target":t}),children:m.jsx("input",{className:"ds-table-select-single-button ds-table-select-button",type:"radio",...A,style:p})}))};h().s[30]++;Ze.__docgenInfo={description:"",methods:[],displayName:"SelectButton",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},isHeaderCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasTargetWrapper:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function Y(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDisplayColumns.tsx",a="5d94e908e8519f35c1e69ab6ecc9bf8a91d43b40",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDisplayColumns.tsx",statementMap:{0:{start:{line:7,column:32},end:{line:11,column:1}},1:{start:{line:12,column:33},end:{line:39,column:1}},2:{start:{line:13,column:2},end:{line:38,column:251}},3:{start:{line:13,column:23},end:{line:38,column:20}},4:{start:{line:25,column:26},end:{line:25,column:102}},5:{start:{line:26,column:37},end:{line:26,column:92}},6:{start:{line:35,column:26},end:{line:35,column:63}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:33},end:{line:12,column:34}},loc:{start:{line:12,column:51},end:{line:39,column:1}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:13,column:17},end:{line:13,column:18}},loc:{start:{line:13,column:23},end:{line:38,column:20}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:23,column:92},end:{line:23,column:93}},loc:{start:{line:25,column:26},end:{line:25,column:102}},line:25},3:{name:"(anonymous_3)",decl:{start:{line:26,column:10},end:{line:26,column:11}},loc:{start:{line:26,column:37},end:{line:26,column:92}},line:26},4:{name:"(anonymous_4)",decl:{start:{line:32,column:10},end:{line:32,column:11}},loc:{start:{line:35,column:26},end:{line:35,column:63}},line:35}},branchMap:{0:{loc:{start:{line:13,column:24},end:{line:20,column:3}},type:"binary-expr",locations:[{start:{line:13,column:24},end:{line:13,column:52}},{start:{line:13,column:56},end:{line:20,column:3}}],line:13},1:{loc:{start:{line:16,column:21},end:{line:16,column:74}},type:"cond-expr",locations:[{start:{line:16,column:52},end:{line:16,column:67}},{start:{line:16,column:70},end:{line:16,column:74}}],line:16},2:{loc:{start:{line:20,column:5},end:{line:29,column:3}},type:"binary-expr",locations:[{start:{line:20,column:5},end:{line:20,column:36}},{start:{line:20,column:40},end:{line:29,column:3}}],line:20},3:{loc:{start:{line:23,column:21},end:{line:25,column:109}},type:"cond-expr",locations:[{start:{line:23,column:92},end:{line:25,column:102}},{start:{line:25,column:105},end:{line:25,column:109}}],line:23},4:{loc:{start:{line:23,column:21},end:{line:23,column:89}},type:"binary-expr",locations:[{start:{line:23,column:21},end:{line:23,column:49}},{start:{line:23,column:53},end:{line:23,column:89}}],line:23},5:{loc:{start:{line:29,column:5},end:{line:38,column:3}},type:"binary-expr",locations:[{start:{line:29,column:5},end:{line:29,column:34}},{start:{line:29,column:38},end:{line:38,column:3}}],line:29}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDisplayColumns.tsx"],names:["useMemo","ExpandAllButton","ExpandButton","RowActionsButton","SelectButton","displayColumnIds","expand","select","actions","useDisplayColumns","tableOptions","enableExpanding","id","header","headerComponent","enableExpandAll","cell","size","defaultDisplayColumn","enableRowSelection","enableSelectAll","enableMultiRowSelection","table","props","enableRowActions","row","filter","Boolean"],mappings:"AAqCoB;AArCpB,SAAgBA,eAAe;AAE/B,OAAOC,qBAAqB;AAC5B,OAAOC,kBAAkB;AACzB,OAAOC,sBAAsB;AAC7B,OAAOC,kBAAkB;AAGlB,aAAMC,mBAAmB;AAAA,EAC9BC,QAAQ;AAAA,EACRC,QAAQ;AAAA,EACRC,SAAS;AACX;AACO,aAAMC,oBAAoB,CAC/BC,iBACG;AACH,SAAOV,QACL,MAEI,CACEU,aAAaC,mBAAmB;AAAA,IAC9BC,IAAIP,iBAAiBC;AAAAA,IACrBO,QAAQ;AAAA,IACRC,iBAAiBJ,aAAaK,kBAC1Bd,kBACA;AAAA,IACJe,MAAMd;AAAAA,IACNe,MAAM;AAAA,IACN,GAAGP,aAAaQ;AAAAA,EAClB,GACAR,aAAaS,sBAAsB;AAAA,IACjCP,IAAIP,iBAAiBE;AAAAA,IACrBM,QAAQ;AAAA,IACRC,iBACEJ,aAAaU,mBACbV,aAAaW,0BACT,CAAC;AAAA,MAAEC;AAAAA,IAAM,MACP,oBAAC,gBACC,OACA,kBAAgB,MAChB,kBAAgB,MAAA,IAGpB;AAAA,IACNN,MAAOO,WAAU,oBAAC,gBAAa,GAAIA,OAAO,kBAAgB,MAAG;AAAA,IAC7DN,MAAM;AAAA,IACN,GAAGP,aAAaQ;AAAAA,EAClB,GACAR,aAAac,oBAAoB;AAAA,IAC/BZ,IAAIP,iBAAiBG;AAAAA,IACrBK,QAAQ;AAAA,IACRG,MAAMA,CAAC;AAAA,MAAEM;AAAAA,MAAOG;AAAAA,IAAI,MAClB,oBAAC,oBAAiB,KAAU,OAC7B;AAAA,IACDR,MAAM;AAAA,IACN,GAAGP,aAAaQ;AAAAA,EAClB,CAAC,EAEHQ,OAAOC,OAAO,GAClB,CACEjB,aAAaC,iBACbD,aAAaK,iBACbL,aAAaS,oBACbT,aAAaU,iBACbV,aAAaW,yBACbX,aAAaQ,sBACbR,aAAac,gBAAgB,CAEjC;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5d94e908e8519f35c1e69ab6ecc9bf8a91d43b40"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Y=function(){return r},r}Y();const J=(Y().s[0]++,{expand:"ssc_dt_expand",select:"ssc_dt_select",actions:"ssc_dt_actions"});Y().s[1]++;const Ct=e=>(Y().f[0]++,Y().s[2]++,j.useMemo(()=>(Y().f[1]++,Y().s[3]++,[(Y().b[0][0]++,e.enableExpanding&&(Y().b[0][1]++,{id:J.expand,header:"",headerComponent:e.enableExpandAll?(Y().b[1][0]++,Gn):(Y().b[1][1]++,null),cell:qn,size:56,...e.defaultDisplayColumn})),(Y().b[2][0]++,e.enableRowSelection&&(Y().b[2][1]++,{id:J.select,header:"",headerComponent:(Y().b[4][0]++,e.enableSelectAll&&(Y().b[4][1]++,e.enableMultiRowSelection)?(Y().b[3][0]++,({table:a})=>(Y().f[2]++,Y().s[4]++,m.jsx(Ze,{table:a,hasTargetWrapper:!0,isHeaderCheckbox:!0}))):(Y().b[3][1]++,null)),cell:a=>(Y().f[3]++,Y().s[5]++,m.jsx(Ze,{...a,hasTargetWrapper:!0})),size:56,...e.defaultDisplayColumn})),(Y().b[5][0]++,e.enableRowActions&&(Y().b[5][1]++,{id:J.actions,header:"",cell:({table:a,row:n})=>(Y().f[4]++,Y().s[6]++,m.jsx(Mn,{row:n,table:a})),size:56,...e.defaultDisplayColumn}))].filter(Boolean)),[e.enableExpanding,e.enableExpandAll,e.enableRowSelection,e.enableSelectAll,e.enableMultiRowSelection,e.defaultDisplayColumn,e.enableRowActions]));function b(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/columns.utils.ts",a="eecc849ca001c4ace67a5c5384a38a66d6dce9be",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/columns.utils.ts",statementMap:{0:{start:{line:3,column:27},end:{line:3,column:113}},1:{start:{line:3,column:42},end:{line:3,column:113}},2:{start:{line:4,column:29},end:{line:4,column:69}},3:{start:{line:4,column:37},end:{line:4,column:69}},4:{start:{line:5,column:36},end:{line:14,column:1}},5:{start:{line:6,column:28},end:{line:6,column:30}},6:{start:{line:7,column:25},end:{line:11,column:3}},7:{start:{line:8,column:4},end:{line:10,column:7}},8:{start:{line:9,column:6},end:{line:9,column:34}},9:{start:{line:12,column:2},end:{line:12,column:26}},10:{start:{line:13,column:2},end:{line:13,column:27}},11:{start:{line:15,column:30},end:{line:22,column:3}},12:{start:{line:17,column:6},end:{line:22,column:3}},13:{start:{line:17,column:37},end:{line:22,column:1}},14:{start:{line:23,column:34},end:{line:23,column:153}},15:{start:{line:23,column:53},end:{line:23,column:153}},16:{start:{line:24,column:36},end:{line:24,column:113}},17:{start:{line:24,column:48},end:{line:24,column:113}},18:{start:{line:25,column:22},end:{line:27,column:1}},19:{start:{line:26,column:2},end:{line:26,column:117}},20:{start:{line:26,column:93},end:{line:26,column:112}},21:{start:{line:28,column:21},end:{line:43,column:1}},22:{start:{line:32,column:19},end:{line:32,column:57}},23:{start:{line:33,column:2},end:{line:35,column:3}},24:{start:{line:34,column:4},end:{line:34,column:14}},25:{start:{line:36,column:18},end:{line:36,column:67}},26:{start:{line:37,column:24},end:{line:37,column:54}},27:{start:{line:38,column:2},end:{line:42,column:4}},28:{start:{line:44,column:23},end:{line:66,column:1}},29:{start:{line:48,column:19},end:{line:48,column:39}},30:{start:{line:49,column:2},end:{line:51,column:3}},31:{start:{line:50,column:4},end:{line:50,column:14}},32:{start:{line:52,column:2},end:{line:59,column:3}},33:{start:{line:53,column:29},end:{line:53,column:69}},34:{start:{line:54,column:4},end:{line:58,column:6}},35:{start:{line:60,column:29},end:{line:60,column:64}},36:{start:{line:61,column:2},end:{line:65,column:4}},37:{start:{line:67,column:35},end:{line:82,column:1}},38:{start:{line:72,column:2},end:{line:81,column:4}},39:{start:{line:83,column:29},end:{line:90,column:1}},40:{start:{line:84,column:2},end:{line:86,column:3}},41:{start:{line:85,column:4},end:{line:85,column:50}},42:{start:{line:87,column:25},end:{line:87,column:41}},43:{start:{line:88,column:2},end:{line:88,column:139}},44:{start:{line:89,column:2},end:{line:89,column:24}},45:{start:{line:91,column:37},end:{line:97,column:1}},46:{start:{line:94,column:6},end:{line:94,column:18}},47:{start:{line:95,column:29},end:{line:95,column:53}},48:{start:{line:96,column:2},end:{line:96,column:141}},49:{start:{line:98,column:33},end:{line:98,column:145}},50:{start:{line:98,column:44},end:{line:98,column:145}},51:{start:{line:98,column:90},end:{line:98,column:144}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:27},end:{line:3,column:28}},loc:{start:{line:3,column:42},end:{line:3,column:113}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:4,column:29},end:{line:4,column:30}},loc:{start:{line:4,column:37},end:{line:4,column:69}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:5,column:36},end:{line:5,column:37}},loc:{start:{line:5,column:49},end:{line:14,column:1}},line:5},3:{name:"(anonymous_3)",decl:{start:{line:7,column:25},end:{line:7,column:26}},loc:{start:{line:7,column:35},end:{line:11,column:3}},line:7},4:{name:"(anonymous_4)",decl:{start:{line:8,column:17},end:{line:8,column:18}},loc:{start:{line:8,column:26},end:{line:10,column:5}},line:8},5:{name:"(anonymous_5)",decl:{start:{line:15,column:30},end:{line:15,column:31}},loc:{start:{line:17,column:6},end:{line:22,column:3}},line:17},6:{name:"(anonymous_6)",decl:{start:{line:17,column:21},end:{line:17,column:22}},loc:{start:{line:17,column:37},end:{line:22,column:1}},line:17},7:{name:"(anonymous_7)",decl:{start:{line:23,column:34},end:{line:23,column:35}},loc:{start:{line:23,column:53},end:{line:23,column:153}},line:23},8:{name:"(anonymous_8)",decl:{start:{line:24,column:36},end:{line:24,column:37}},loc:{start:{line:24,column:48},end:{line:24,column:113}},line:24},9:{name:"(anonymous_9)",decl:{start:{line:25,column:22},end:{line:25,column:23}},loc:{start:{line:25,column:41},end:{line:27,column:1}},line:25},10:{name:"(anonymous_10)",decl:{start:{line:26,column:79},end:{line:26,column:80}},loc:{start:{line:26,column:93},end:{line:26,column:112}},line:26},11:{name:"(anonymous_11)",decl:{start:{line:28,column:21},end:{line:28,column:22}},loc:{start:{line:31,column:6},end:{line:43,column:1}},line:31},12:{name:"(anonymous_12)",decl:{start:{line:44,column:23},end:{line:44,column:24}},loc:{start:{line:47,column:6},end:{line:66,column:1}},line:47},13:{name:"(anonymous_13)",decl:{start:{line:67,column:35},end:{line:67,column:36}},loc:{start:{line:71,column:6},end:{line:82,column:1}},line:71},14:{name:"(anonymous_14)",decl:{start:{line:83,column:29},end:{line:83,column:30}},loc:{start:{line:83,column:75},end:{line:90,column:1}},line:83},15:{name:"(anonymous_15)",decl:{start:{line:91,column:37},end:{line:91,column:38}},loc:{start:{line:91,column:79},end:{line:97,column:1}},line:91},16:{name:"(anonymous_16)",decl:{start:{line:98,column:33},end:{line:98,column:34}},loc:{start:{line:98,column:44},end:{line:98,column:145}},line:98},17:{name:"(anonymous_17)",decl:{start:{line:98,column:81},end:{line:98,column:82}},loc:{start:{line:98,column:90},end:{line:98,column:144}},line:98}},branchMap:{0:{loc:{start:{line:3,column:42},end:{line:3,column:113}},type:"binary-expr",locations:[{start:{line:3,column:42},end:{line:3,column:54}},{start:{line:3,column:58},end:{line:3,column:93}},{start:{line:3,column:97},end:{line:3,column:113}}],line:3},1:{loc:{start:{line:19,column:6},end:{line:19,column:77}},type:"binary-expr",locations:[{start:{line:19,column:6},end:{line:19,column:18}},{start:{line:19,column:22},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:77}}],line:19},2:{loc:{start:{line:20,column:17},end:{line:20,column:131}},type:"cond-expr",locations:[{start:{line:20,column:113},end:{line:20,column:122}},{start:{line:20,column:125},end:{line:20,column:131}}],line:20},3:{loc:{start:{line:20,column:17},end:{line:20,column:110}},type:"binary-expr",locations:[{start:{line:20,column:17},end:{line:20,column:41}},{start:{line:20,column:46},end:{line:20,column:68}},{start:{line:20,column:72},end:{line:20,column:93}},{start:{line:20,column:97},end:{line:20,column:109}}],line:20},4:{loc:{start:{line:21,column:17},end:{line:21,column:49}},type:"binary-expr",locations:[{start:{line:21,column:17},end:{line:21,column:41}},{start:{line:21,column:45},end:{line:21,column:49}}],line:21},5:{loc:{start:{line:23,column:53},end:{line:23,column:153}},type:"binary-expr",locations:[{start:{line:23,column:53},end:{line:23,column:84}},{start:{line:23,column:88},end:{line:23,column:153}}],line:23},6:{loc:{start:{line:24,column:48},end:{line:24,column:113}},type:"binary-expr",locations:[{start:{line:24,column:48},end:{line:24,column:80}},{start:{line:24,column:84},end:{line:24,column:113}}],line:24},7:{loc:{start:{line:32,column:33},end:{line:32,column:56}},type:"binary-expr",locations:[{start:{line:32,column:33},end:{line:32,column:43}},{start:{line:32,column:47},end:{line:32,column:56}}],line:32},8:{loc:{start:{line:33,column:2},end:{line:35,column:3}},type:"if",locations:[{start:{line:33,column:2},end:{line:35,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:33},9:{loc:{start:{line:33,column:6},end:{line:33,column:123}},type:"binary-expr",locations:[{start:{line:33,column:6},end:{line:33,column:42}},{start:{line:33,column:46},end:{line:33,column:82}},{start:{line:33,column:86},end:{line:33,column:123}}],line:33},10:{loc:{start:{line:36,column:23},end:{line:36,column:48}},type:"cond-expr",locations:[{start:{line:36,column:32},end:{line:36,column:40}},{start:{line:36,column:43},end:{line:36,column:48}}],line:36},11:{loc:{start:{line:37,column:24},end:{line:37,column:54}},type:"binary-expr",locations:[{start:{line:37,column:24},end:{line:37,column:48}},{start:{line:37,column:52},end:{line:37,column:54}}],line:37},12:{loc:{start:{line:49,column:2},end:{line:51,column:3}},type:"if",locations:[{start:{line:49,column:2},end:{line:51,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:49},13:{loc:{start:{line:52,column:2},end:{line:59,column:3}},type:"if",locations:[{start:{line:52,column:2},end:{line:59,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:52},14:{loc:{start:{line:56,column:19},end:{line:56,column:82}},type:"binary-expr",locations:[{start:{line:56,column:19},end:{line:56,column:35}},{start:{line:56,column:39},end:{line:56,column:82}}],line:56},15:{loc:{start:{line:57,column:17},end:{line:57,column:73}},type:"binary-expr",locations:[{start:{line:57,column:17},end:{line:57,column:33}},{start:{line:57,column:37},end:{line:57,column:73}}],line:57},16:{loc:{start:{line:63,column:16},end:{line:63,column:81}},type:"binary-expr",locations:[{start:{line:63,column:16},end:{line:63,column:34}},{start:{line:63,column:38},end:{line:63,column:81}}],line:63},17:{loc:{start:{line:64,column:15},end:{line:64,column:74}},type:"binary-expr",locations:[{start:{line:64,column:15},end:{line:64,column:33}},{start:{line:64,column:37},end:{line:64,column:74}}],line:64},18:{loc:{start:{line:84,column:2},end:{line:86,column:3}},type:"if",locations:[{start:{line:84,column:2},end:{line:86,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:84},19:{loc:{start:{line:96,column:45},end:{line:96,column:82}},type:"binary-expr",locations:[{start:{line:96,column:45},end:{line:96,column:63}},{start:{line:96,column:67},end:{line:96,column:82}}],line:96}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0},b:{0:[0,0,0],1:[0,0,0],2:[0,0],3:[0,0,0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/columns.utils.ts"],names:["pluck","displayColumnIds","getColumnId","columnDef","id","accessorKey","toString","header","parseCSSVarId","replace","getAllLeafColumnDefs","columns","allLeafColumnDefs","getLeafColumns","cols","forEach","col","push","prepareColumns","columnDefs","map","columnDefType","accessorFn","enableSorting","getIsLastLeftPinnedColumn","table","column","getIsPinned","getLeftLeafColumns","length","getPinnedIndex","getIsFirstRightPinnedColumn","getTotalRight","getRightLeafHeaders","slice","reduce","acc","getSize","getSizeStyle","CSSVarId","select","expand","actions","varName","columnMinSize","minSize","minWidth","width","flex","getPinnedStyle","isPinned","isLastLeftColumn","left","getStart","borderRight","boxShadow","isFirstRightColumn","right","borderLeft","getCommonCellStyles","reorderColumn","draggedColumn","targetColumn","columnOrder","getCanPin","pin","newColumnOrder","splice","indexOf","getDefaultColumnOrder","tableOptions","enableRowSelection","defaultColumnOrder","Array","from","Set","filter","Boolean","getHidableColumns","getVisibleFlatColumns","Object","values"],mappings:"AACA,SAASA,aAAa;AAWtB,SAASC,wBAAwB;AAE1B,aAAMC,cAAc,CAAIC,cAC7BA,UAAUC,MAAMD,UAAUE,aAAaC,WAAW,KAAKH,UAAUI;AAE5D,aAAMC,gBAAgBA,CAACJ,OAAeA,GAAGK,QAAQ,iBAAiB,GAAG;AAErE,aAAMC,uBAAuB,CAClCC,YAC4B;AAC5B,QAAMC,oBAA6C,CAAE;AACrD,QAAMC,iBAAiBA,CAACC,SAAkC;AACxDA,SAAKC,QAASC,SAAQ;AACpBJ,wBAAkBK,KAAKD,GAAG;AAAA,IAC5B,CAAC;AAAA,EACH;AACAH,iBAAeF,OAAO;AACtB,SAAOC;AACT;AAEO,aAAMM,iBAAiB,CAAI;AAAA,EAChCC;AAGF,MACEA,WAAWC,IAAKjB,gBAAe;AAAA,EAC7B,GAAGA;AAAAA,EACHC,IAAID,UAAUC,MAAMD,UAAUE,aAAaC,WAAW,KAAKH,UAAUI;AAAAA,EACrEc,eACElB,WAAWkB,kBACV,CAAClB,UAAUE,eAAe,CAACF,UAAUmB,cAAcnB,UAAUC,MAC1D,YACA;AAAA,EACNmB,eAAepB,WAAWoB,iBAAiB;AAC7C,EAAE;AAEJ,MAAMC,4BAA4B,CAChCC,OACAC,WAEAA,OAAOC,YAAY,MAAM,UACzBF,MAAMG,mBAAmB,EAAEC,SAAS,MAAMH,OAAOI,eAAe;AAElE,MAAMC,8BAA8B,CAAIL,WACtCA,OAAOC,YAAY,MAAM,WAAWD,OAAOI,eAAe,MAAM;AAElE,MAAME,gBAAgB,CACpBP,OACAC,WACG;AACH,SAAOD,MACJQ,oBAAoB,EACpBC,MAAMR,OAAOI,eAAe,IAAI,CAAC,EACjCK,OAAO,CAACC,KAAKpB,QAAQoB,MAAMpB,IAAIqB,QAAQ,GAAG,CAAC;AAChD;AAEA,MAAMC,eAAe,CAAI;AAAA,EACvB/B;AAAAA,EACAmB;AAIF,MAAqB;AACnB,QAAMa,WAAW/B,cAAcD,QAAQH,MAAMsB,OAAOtB,EAAE;AAEtD,MACEmC,aAAatC,iBAAiBuC,UAC9BD,aAAatC,iBAAiBwC,UAC9BF,aAAatC,iBAAiByC,SAC9B;AACA,WAAO,CAAC;AAAA,EACV;AAEA,QAAMC,UAAW,KAAIpC,SAAS,WAAW,KAAM,IAAGgC,QAAS;AAC3D,QAAMK,gBAAgBlB,OAAOvB,UAAU0C,WAAW;AAElD,SAAO;AAAA,IACLC,UAAW,gBAAeH,OAAQ,aAAYC,aAAc;AAAA,IAC5DG,OAAQ,YAAWJ,OAAQ;AAAA,IAC3BK,MAAO,OAAML,OAAQ;AAAA,EACvB;AACF;AAEA,MAAMM,iBAAiB,CAAI;AAAA,EACzBxB;AAAAA,EACAC;AAIF,MAAqB;AACnB,QAAMwB,WAAWxB,OAAOC,YAAY;AAEpC,MAAI,CAACuB,UAAU;AACb,WAAO,CAAC;AAAA,EACV;AAEA,MAAIA,aAAa,QAAQ;AACvB,UAAMC,mBAAmB3B,0BAA0BC,OAAOC,MAAM;AAEhE,WAAO;AAAA,MACL0B,MAAO,GAAE1B,OAAO2B,SAAS,MAAM,IAAI,EAAG;AAAA,MACtCC,aACEH,oBAAoB;AAAA,MACtBI,WAAWJ,oBAAoB;AAAA,IACjC;AAAA,EACF;AACA,QAAMK,qBAAqBzB,4BAA4BL,MAAM;AAE7D,SAAO;AAAA,IACL+B,OAAQ,GAAEzB,cAAcP,OAAOC,MAAM,IAAI,EAAG;AAAA,IAC5CgC,YACEF,sBAAsB;AAAA,IACxBD,WAAWC,sBAAsB;AAAA,EACnC;AACF;AAEO,aAAMG,sBAAsB,CAAI;AAAA,EACrClC;AAAAA,EACAlB;AAAAA,EACAmB;AAKF,MAAqB;AACnB,SAAO;AAAA,IACL,GAAGY,aAAa;AAAA,MAAE/B;AAAAA,MAAQmB;AAAAA,IAAO,CAAC;AAAA,IAClC,GAAGuB,eAAe;AAAA,MAAExB;AAAAA,MAAOC;AAAAA,IAAO,CAAC;AAAA,EACrC;AACF;AAEO,aAAMkC,gBAAgB,CAC3BC,eACAC,cACAC,gBACqB;AACrB,MAAIF,cAAcG,UAAU,GAAG;AAC7BH,kBAAcI,IAAIH,aAAanC,YAAY,CAAC;AAAA,EAC9C;AACA,QAAMuC,iBAAiB,CAAC,GAAGH,WAAW;AACtCG,iBAAeC,OACbD,eAAeE,QAAQN,aAAa1D,EAAE,GACtC,GACA8D,eAAeC,OAAOD,eAAeE,QAAQP,cAAczD,EAAE,GAAG,CAAC,EAAE,CAAC,CACtE;AACA,SAAO8D;AACT;AAEO,aAAMG,wBAAwB,CACnCN,aACA5D,WACAmE,iBACqB;AACrB,QAAM;AAAA,IAAEC;AAAAA,EAAmB,IAAID;AAC/B,QAAME,qBAA+BxE,MAAM,CAAC,IAAI,GAAGG,SAAS;AAC5D,SAAOsE,MAAMC,KACX,oBAAIC,IAAI,CACNJ,sBAAsB,iBACtB,GAAGR,aACH,GAAGS,kBAAkB,CACtB,CACH,EAAEI,OAAOC,OAAO;AAClB;AAEO,aAAMC,oBAAoB,CAAIrD,UACnCA,MACGsD,sBAAsB,EACtBH,OAAQ5D,SAAQgE,OAAOC,OAAOhF,gBAAgB,EAAEmE,QAAQpD,IAAIZ,EAAE,MAAM,EAAE;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"eecc849ca001c4ace67a5c5384a38a66d6dce9be"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return b=function(){return r},r}b();b().s[0]++;const ft=e=>{var a,n;return b().f[0]++,b().s[1]++,b().b[0][0]++,e.id??(b().b[0][1]++,(n=(a=e.accessorKey)==null?void 0:a.toString)==null?void 0:n.call(a))??(b().b[0][2]++,e.header)};b().s[2]++;const en=e=>(b().f[1]++,b().s[3]++,e.replace(/[^a-zA-Z0-9]/g,"_"));b().s[4]++;const yt=e=>{b().f[2]++;const a=(b().s[5]++,[]);b().s[6]++;const n=t=>{b().f[3]++,b().s[7]++,t.forEach(l=>{b().f[4]++,b().s[8]++,a.push(l)})};return b().s[9]++,n(e),b().s[10]++,a};b().s[11]++;const wt=({columnDefs:e})=>(b().f[5]++,b().s[12]++,e.map(a=>{var n,t;return b().f[6]++,b().s[13]++,{...a,id:(b().b[1][0]++,a.id??(b().b[1][1]++,(t=(n=a.accessorKey)==null?void 0:n.toString)==null?void 0:t.call(n))??(b().b[1][2]++,a.header)),columnDefType:(b().b[3][0]++,(a==null?void 0:a.columnDefType)??(b().b[3][1]++,!a.accessorKey&&(b().b[3][2]++,!a.accessorFn)&&(b().b[3][3]++,a.id))?(b().b[2][0]++,"display"):(b().b[2][1]++,"data")),enableSorting:(b().b[4][0]++,(a==null?void 0:a.enableSorting)??(b().b[4][1]++,!0))}}));b().s[14]++;const ht=(e,a)=>(b().f[7]++,b().s[15]++,b().b[5][0]++,a.getIsPinned()==="left"&&(b().b[5][1]++,e.getLeftLeafColumns().length-1===a.getPinnedIndex()));b().s[16]++;const vt=e=>(b().f[8]++,b().s[17]++,b().b[6][0]++,e.getIsPinned()==="right"&&(b().b[6][1]++,e.getPinnedIndex()===0));b().s[18]++;const It=(e,a)=>(b().f[9]++,b().s[19]++,e.getRightLeafHeaders().slice(a.getPinnedIndex()+1).reduce((n,t)=>(b().f[10]++,b().s[20]++,n+t.getSize()),0));b().s[21]++;const Vt=({header:e,column:a})=>{b().f[11]++;const n=(b().s[22]++,en((b().b[7][0]++,(e==null?void 0:e.id)??(b().b[7][1]++,a.id))));if(b().s[23]++,b().b[9][0]++,n===J.select||(b().b[9][1]++,n===J.expand)||(b().b[9][2]++,n===J.actions))return b().b[8][0]++,b().s[24]++,{};b().b[8][1]++;const t=(b().s[25]++,`--${e?(b().b[10][0]++,"header"):(b().b[10][1]++,"col")}-${n}-size`),l=(b().s[26]++,b().b[11][0]++,a.columnDef.minSize??(b().b[11][1]++,60));return b().s[27]++,{minWidth:`max(calc(var(${t}) * 1px), ${l}px)`,width:`calc(var(${t}) * 1px)`,flex:`var(${t}) 0 auto`}};b().s[28]++;const kt=({table:e,column:a})=>{b().f[12]++;const n=(b().s[29]++,a.getIsPinned());if(b().s[30]++,n)b().b[12][1]++;else return b().b[12][0]++,b().s[31]++,{};if(b().s[32]++,n==="left"){b().b[13][0]++;const l=(b().s[33]++,ht(e,a));return b().s[34]++,{left:`${a.getStart("left")/16}rem`,borderRight:(b().b[14][0]++,l&&(b().b[14][1]++,"1px solid var(--sscds-table-color-border)")),boxShadow:(b().b[15][0]++,l&&(b().b[15][1]++,"var(--sscds-table-shadow-pin-left)"))}}else b().b[13][1]++;const t=(b().s[35]++,vt(a));return b().s[36]++,{right:`${It(e,a)/16}rem`,borderLeft:(b().b[16][0]++,t&&(b().b[16][1]++,"1px solid var(--sscds-table-color-border)")),boxShadow:(b().b[17][0]++,t&&(b().b[17][1]++,"var(--sscds-table-shadow-pin-right)"))}};b().s[37]++;const On=({table:e,header:a,column:n})=>(b().f[13]++,b().s[38]++,{...Vt({header:a,column:n}),...kt({table:e,column:n})});b().s[39]++;const Bt=(e,a,n)=>{b().f[14]++,b().s[40]++,e.getCanPin()?(b().b[18][0]++,b().s[41]++,e.pin(a.getIsPinned())):b().b[18][1]++;const t=(b().s[42]++,[...n]);return b().s[43]++,t.splice(t.indexOf(a.id),0,t.splice(t.indexOf(e.id),1)[0]),b().s[44]++,t};b().s[45]++;const St=(e,a,n)=>{b().f[15]++;const{enableRowSelection:t}=(b().s[46]++,n),l=(b().s[47]++,Cn(["id"],a));return b().s[48]++,Array.from(new Set([(b().b[19][0]++,t&&(b().b[19][1]++,"ssc_dt_select")),...e,...l])).filter(Boolean)};b().s[49]++;const Nn=e=>(b().f[16]++,b().s[50]++,e.getVisibleFlatColumns().filter(a=>(b().f[17]++,b().s[51]++,Object.values(J).indexOf(a.id)===-1)));function G(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useOptions.ts",a="52594af44e328375a5bb5971212a69cb5b101f68",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useOptions.ts",statementMap:{0:{start:{line:2,column:26},end:{line:84,column:1}},1:{start:{line:31,column:26},end:{line:36,column:22}},2:{start:{line:31,column:41},end:{line:36,column:3}},3:{start:{line:37,column:27},end:{line:37,column:43}},4:{start:{line:38,column:24},end:{line:38,column:37}},5:{start:{line:39,column:2},end:{line:41,column:3}},6:{start:{line:40,column:4},end:{line:40,column:30}},7:{start:{line:42,column:2},end:{line:44,column:3}},8:{start:{line:43,column:4},end:{line:43,column:27}},9:{start:{line:45,column:2},end:{line:83,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:26},end:{line:2,column:27}},loc:{start:{line:30,column:6},end:{line:84,column:1}},line:30},1:{name:"(anonymous_1)",decl:{start:{line:31,column:34},end:{line:31,column:35}},loc:{start:{line:31,column:41},end:{line:36,column:3}},line:31}},branchMap:{0:{loc:{start:{line:6,column:2},end:{line:6,column:32}},type:"default-arg",locations:[{start:{line:6,column:28},end:{line:6,column:32}}],line:6},1:{loc:{start:{line:7,column:2},end:{line:7,column:28}},type:"default-arg",locations:[{start:{line:7,column:24},end:{line:7,column:28}}],line:7},2:{loc:{start:{line:8,column:2},end:{line:8,column:29}},type:"default-arg",locations:[{start:{line:8,column:25},end:{line:8,column:29}}],line:8},3:{loc:{start:{line:9,column:2},end:{line:9,column:28}},type:"default-arg",locations:[{start:{line:9,column:24},end:{line:9,column:28}}],line:9},4:{loc:{start:{line:10,column:2},end:{line:10,column:29}},type:"default-arg",locations:[{start:{line:10,column:25},end:{line:10,column:29}}],line:10},5:{loc:{start:{line:11,column:2},end:{line:11,column:25}},type:"default-arg",locations:[{start:{line:11,column:20},end:{line:11,column:25}}],line:11},6:{loc:{start:{line:12,column:2},end:{line:12,column:25}},type:"default-arg",locations:[{start:{line:12,column:20},end:{line:12,column:25}}],line:12},7:{loc:{start:{line:13,column:2},end:{line:13,column:29}},type:"default-arg",locations:[{start:{line:13,column:25},end:{line:13,column:29}}],line:13},8:{loc:{start:{line:14,column:2},end:{line:14,column:21}},type:"default-arg",locations:[{start:{line:14,column:17},end:{line:14,column:21}}],line:14},9:{loc:{start:{line:15,column:2},end:{line:15,column:32}},type:"default-arg",locations:[{start:{line:15,column:28},end:{line:15,column:32}}],line:15},10:{loc:{start:{line:16,column:2},end:{line:16,column:25}},type:"default-arg",locations:[{start:{line:16,column:20},end:{line:16,column:25}}],line:16},11:{loc:{start:{line:17,column:2},end:{line:17,column:25}},type:"default-arg",locations:[{start:{line:17,column:21},end:{line:17,column:25}}],line:17},12:{loc:{start:{line:18,column:2},end:{line:18,column:27}},type:"default-arg",locations:[{start:{line:18,column:23},end:{line:18,column:27}}],line:18},13:{loc:{start:{line:19,column:2},end:{line:19,column:27}},type:"default-arg",locations:[{start:{line:19,column:22},end:{line:19,column:27}}],line:19},14:{loc:{start:{line:20,column:2},end:{line:20,column:24}},type:"default-arg",locations:[{start:{line:20,column:20},end:{line:20,column:24}}],line:20},15:{loc:{start:{line:21,column:2},end:{line:21,column:22}},type:"default-arg",locations:[{start:{line:21,column:18},end:{line:21,column:22}}],line:21},16:{loc:{start:{line:22,column:2},end:{line:22,column:29}},type:"default-arg",locations:[{start:{line:22,column:25},end:{line:22,column:29}}],line:22},17:{loc:{start:{line:27,column:2},end:{line:27,column:40}},type:"default-arg",locations:[{start:{line:27,column:23},end:{line:27,column:40}}],line:27},18:{loc:{start:{line:28,column:2},end:{line:28,column:24}},type:"default-arg",locations:[{start:{line:28,column:18},end:{line:28,column:24}}],line:28},19:{loc:{start:{line:39,column:2},end:{line:41,column:3}},type:"if",locations:[{start:{line:39,column:2},end:{line:41,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:39},20:{loc:{start:{line:39,column:6},end:{line:39,column:63}},type:"binary-expr",locations:[{start:{line:39,column:6},end:{line:39,column:33}},{start:{line:39,column:37},end:{line:39,column:63}}],line:39},21:{loc:{start:{line:42,column:2},end:{line:44,column:3}},type:"if",locations:[{start:{line:42,column:2},end:{line:44,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:42},22:{loc:{start:{line:42,column:6},end:{line:42,column:57}},type:"binary-expr",locations:[{start:{line:42,column:6},end:{line:42,column:30}},{start:{line:42,column:34},end:{line:42,column:57}}],line:42}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0],9:[0],10:[0],11:[0],12:[0],13:[0],14:[0],15:[0],16:[0],17:[0],18:[0],19:[0,0],20:[0,0],21:[0,0],22:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useOptions.ts"],names:["useMemo","useOptions","columns","data","defaultColumn","enableBatchRowSelection","enableColumnActions","enableColumnOrdering","enableColumnPinning","enableColumnResizing","enableExpandAll","enableExpanding","enableFullScreenMode","enableHiding","enableMultiRowSelection","enableMultiSort","enablePagination","enableRowSelection","enableRowsPerPage","enableSelectAll","enableSorting","enableSortingRemoval","manualPagination","manualSorting","renderNoDataFallback","renderRowSelectionActions","rowsPerPageOptions","selectAllMode","restDatatableOptions","__defaultColumn","minSize","size","maxSize","__manualPagination","__manualSorting","undefined","defaultDisplayColumn","columnDefType","enablePinning","enableResizing","columnResizeMode","paginateExpandedRows"],mappings:"AACA,SAASA,eAAe;AAIjB,aAAMC,aAAa,CAAI;AAAA,EAC5BC;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC,0BAA0B;AAAA,EAC1BC,sBAAsB;AAAA,EACtBC,uBAAuB;AAAA,EACvBC,sBAAsB;AAAA,EACtBC,uBAAuB;AAAA,EACvBC,kBAAkB;AAAA,EAClBC,kBAAkB;AAAA,EAClBC,uBAAuB;AAAA,EACvBC,eAAe;AAAA,EACfC,0BAA0B;AAAA,EAC1BC,kBAAkB;AAAA,EAClBC,mBAAmB;AAAA,EACnBC,qBAAqB;AAAA,EACrBC,oBAAoB;AAAA,EACpBC,kBAAkB;AAAA,EAClBC,gBAAgB;AAAA,EAChBC,uBAAuB;AAAA,EACvBC;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC,qBAAqB,CAAC,IAAI,IAAI,IAAI,GAAG;AAAA,EACrCC,gBAAgB;AAAA,EAChB,GAAGC;AACyB,MAAiC;AAC7D,QAAMC,kBAAkB7B,QACtB,OAAO;AAAA,IACL8B,SAAS;AAAA,IACTC,MAAM;AAAA,IACNC,SAAS;AAAA,IACT,GAAG5B;AAAAA,EACL,IACA,CAACA,aAAa,CAChB;AACA,MAAI6B,qBAAqBX;AACzB,MAAIY,kBAAkBX;AAEtB,MAAID,qBAAqBa,UAAanB,qBAAqB,OAAO;AAChEiB,yBAAqB;AAAA,EACvB;AAEA,MAAIV,kBAAkBY,UAAaf,kBAAkB,OAAO;AAC1Dc,sBAAkB;AAAA,EACpB;AAEA,SAAO;AAAA,IACLhC;AAAAA,IACAC;AAAAA,IACAC,eAAeyB;AAAAA,IACfO,sBAAsB;AAAA,MACpBC,eAAe;AAAA,MACf/B,qBAAqB;AAAA,MACrBO,cAAc;AAAA,MACdyB,eAAe;AAAA,MACfC,gBAAgB;AAAA,MAChBnB,eAAe;AAAA,IACjB;AAAA,IACAf;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC,kBAAkBW;AAAAA,IAClBV,eAAeW;AAAAA,IACfV;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACA,GAAGC;AAAAA,IACHY,kBAAkB;AAAA,IAClBC,sBAAsB;AAAA,EACxB;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"52594af44e328375a5bb5971212a69cb5b101f68"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return G=function(){return r},r}G();G().s[0]++;const Rt=({columns:e,data:a,defaultColumn:n,enableBatchRowSelection:t=(G().b[0][0]++,!0),enableColumnActions:l=(G().b[1][0]++,!0),enableColumnOrdering:o=(G().b[2][0]++,!0),enableColumnPinning:r=(G().b[3][0]++,!0),enableColumnResizing:u=(G().b[4][0]++,!0),enableExpandAll:i=(G().b[5][0]++,!1),enableExpanding:c=(G().b[6][0]++,!1),enableFullScreenMode:A=(G().b[7][0]++,!0),enableHiding:p=(G().b[8][0]++,!0),enableMultiRowSelection:D=(G().b[9][0]++,!0),enableMultiSort:s=(G().b[10][0]++,!1),enablePagination:C=(G().b[11][0]++,!0),enableRowSelection:g=(G().b[12][0]++,!0),enableRowsPerPage:v=(G().b[13][0]++,!1),enableSelectAll:w=(G().b[14][0]++,!0),enableSorting:S=(G().b[15][0]++,!0),enableSortingRemoval:R=(G().b[16][0]++,!0),manualPagination:P,manualSorting:O,renderNoDataFallback:F,renderRowSelectionActions:N,rowsPerPageOptions:U=(G().b[17][0]++,[10,25,50,100]),selectAllMode:L=(G().b[18][0]++,"page"),...$})=>{G().f[0]++;const me=(G().s[1]++,j.useMemo(()=>(G().f[1]++,G().s[2]++,{minSize:40,size:150,maxSize:800,...n}),[n]));let De=(G().s[3]++,P),pe=(G().s[4]++,O);return G().s[5]++,G().b[20][0]++,P===void 0&&(G().b[20][1]++,C===!1)?(G().b[19][0]++,G().s[6]++,De=!0):G().b[19][1]++,G().s[7]++,G().b[22][0]++,O===void 0&&(G().b[22][1]++,S===!1)?(G().b[21][0]++,G().s[8]++,pe=!0):G().b[21][1]++,G().s[9]++,{columns:e,data:a,defaultColumn:me,defaultDisplayColumn:{columnDefType:"display",enableColumnActions:!1,enableHiding:!1,enablePinning:!1,enableResizing:!1,enableSorting:!1},enableBatchRowSelection:t,enableColumnActions:l,enableColumnOrdering:o,enableColumnPinning:r,enableColumnResizing:u,enableExpandAll:i,enableExpanding:c,enableFullScreenMode:A,enableHiding:p,enableMultiRowSelection:D,enableMultiSort:s,enablePagination:C,enableRowSelection:g,enableRowsPerPage:v,enableSelectAll:w,enableSorting:S,enableSortingRemoval:R,manualPagination:De,manualSorting:pe,renderNoDataFallback:F,renderRowSelectionActions:N,rowsPerPageOptions:U,selectAllMode:L,...$,columnResizeMode:"onChange",paginateExpandedRows:!1}};function re(){var e="/Users/radekpodrazky/Projects/design-system/src/hooks/useDebounce.ts",a="57acf5508a7864e02bc2c136e9dc3bc8710cdb22",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/useDebounce.ts",statementMap:{0:{start:{line:2,column:27},end:{line:12,column:1}},1:{start:{line:3,column:18},end:{line:3,column:30}},2:{start:{line:4,column:2},end:{line:11,column:4}},3:{start:{line:5,column:4},end:{line:7,column:5}},4:{start:{line:6,column:6},end:{line:6,column:51}},5:{start:{line:8,column:4},end:{line:10,column:7}},6:{start:{line:9,column:6},end:{line:9,column:23}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:27},end:{line:2,column:28}},loc:{start:{line:2,column:41},end:{line:12,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:4,column:9},end:{line:4,column:10}},loc:{start:{line:4,column:21},end:{line:11,column:3}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:8,column:51},end:{line:8,column:52}},loc:{start:{line:8,column:57},end:{line:10,column:5}},line:8}},branchMap:{0:{loc:{start:{line:5,column:4},end:{line:7,column:5}},type:"if",locations:[{start:{line:5,column:4},end:{line:7,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:5}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0,2:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/useDebounce.ts"],names:["useRef","useDebounce","callback","timeout","params","current","window","cancelAnimationFrame","requestAnimationFrame"],mappings:"AAAA,SAASA,cAAc;AAIhB,aAAMC,cAAc,CAAIC,aAAuC;AACpE,QAAMC,UAAUH,OAAsB,IAAI;AAE1C,SAAQI,YAAW;AACjB,QAAID,QAAQE,SAAS;AACnBC,aAAOC,qBAAqBJ,QAAQE,OAAO;AAAA,IAC7C;AACAF,YAAQE,UAAUC,OAAOE,sBAAsB,MAAM;AACnDN,eAASE,MAAM;AAAA,IACjB,CAAC;AAAA,EACH;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"57acf5508a7864e02bc2c136e9dc3bc8710cdb22"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return re=function(){return r},r}re();re().s[0]++;const xt=e=>{re().f[0]++;const a=(re().s[1]++,j.useRef(null));return re().s[2]++,n=>{re().f[1]++,re().s[3]++,a.current?(re().b[0][0]++,re().s[4]++,window.cancelAnimationFrame(a.current)):re().b[0][1]++,re().s[5]++,a.current=window.requestAnimationFrame(()=>{re().f[2]++,re().s[6]++,e(n)})}};function d(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDatatable.ts",a="e1cc8346116ad0e4cd1158e396c1204505f28568",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDatatable.ts",statementMap:{0:{start:{line:7,column:32},end:{line:18,column:1}},1:{start:{line:11,column:6},end:{line:11,column:18}},2:{start:{line:12,column:2},end:{line:13,column:16}},3:{start:{line:13,column:4},end:{line:13,column:16}},4:{start:{line:14,column:2},end:{line:16,column:3}},5:{start:{line:15,column:4},end:{line:15,column:61}},6:{start:{line:17,column:2},end:{line:17,column:14}},7:{start:{line:19,column:28},end:{line:101,column:1}},8:{start:{line:20,column:23},end:{line:20,column:42}},9:{start:{line:21,column:25},end:{line:21,column:56}},10:{start:{line:22,column:19},end:{line:22,column:27}},11:{start:{line:23,column:31},end:{line:23,column:43}},12:{start:{line:24,column:21},end:{line:26,column:40}},13:{start:{line:24,column:35},end:{line:26,column:4}},14:{start:{line:27,column:23},end:{line:39,column:32}},15:{start:{line:28,column:22},end:{line:28,column:53}},16:{start:{line:29,column:4},end:{line:29,column:105}},17:{start:{line:30,column:4},end:{line:33,column:6}},18:{start:{line:34,column:4},end:{line:37,column:6}},19:{start:{line:38,column:4},end:{line:38,column:21}},20:{start:{line:40,column:54},end:{line:40,column:105}},21:{start:{line:41,column:50},end:{line:41,column:99}},22:{start:{line:42,column:42},end:{line:42,column:84}},23:{start:{line:43,column:40},end:{line:43,column:85}},24:{start:{line:44,column:28},end:{line:44,column:39}},25:{start:{line:45,column:19},end:{line:47,column:3}},26:{start:{line:46,column:4},end:{line:46,column:61}},27:{start:{line:48,column:20},end:{line:52,column:3}},28:{start:{line:49,column:4},end:{line:51,column:5}},29:{start:{line:50,column:6},end:{line:50,column:33}},30:{start:{line:53,column:2},end:{line:60,column:9}},31:{start:{line:54,column:4},end:{line:54,column:48}},32:{start:{line:55,column:4},end:{line:55,column:50}},33:{start:{line:56,column:4},end:{line:59,column:6}},34:{start:{line:57,column:6},end:{line:57,column:55}},35:{start:{line:58,column:6},end:{line:58,column:53}},36:{start:{line:61,column:2},end:{line:63,column:9}},37:{start:{line:62,column:4},end:{line:62,column:15}},38:{start:{line:64,column:35},end:{line:64,column:63}},39:{start:{line:65,column:15},end:{line:67,column:160}},40:{start:{line:65,column:29},end:{line:67,column:22}},41:{start:{line:65,column:193},end:{line:67,column:6}},42:{start:{line:65,column:271},end:{line:67,column:3}},43:{start:{line:68,column:16},end:{line:91,column:4}},44:{start:{line:92,column:2},end:{line:95,column:4}},45:{start:{line:96,column:2},end:{line:96,column:91}},46:{start:{line:97,column:2},end:{line:97,column:89}},47:{start:{line:98,column:2},end:{line:98,column:88}},48:{start:{line:99,column:2},end:{line:99,column:76}},49:{start:{line:100,column:2},end:{line:100,column:15}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:32},end:{line:7,column:33}},loc:{start:{line:7,column:50},end:{line:18,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:19,column:28},end:{line:19,column:29}},loc:{start:{line:19,column:41},end:{line:101,column:1}},line:19},2:{name:"(anonymous_2)",decl:{start:{line:24,column:29},end:{line:24,column:30}},loc:{start:{line:24,column:35},end:{line:26,column:4}},line:24},3:{name:"(anonymous_3)",decl:{start:{line:27,column:31},end:{line:27,column:32}},loc:{start:{line:27,column:37},end:{line:39,column:3}},line:27},4:{name:"(anonymous_4)",decl:{start:{line:45,column:19},end:{line:45,column:20}},loc:{start:{line:45,column:25},end:{line:47,column:3}},line:45},5:{name:"(anonymous_5)",decl:{start:{line:48,column:20},end:{line:48,column:21}},loc:{start:{line:48,column:31},end:{line:52,column:3}},line:48},6:{name:"(anonymous_6)",decl:{start:{line:53,column:12},end:{line:53,column:13}},loc:{start:{line:53,column:18},end:{line:60,column:3}},line:53},7:{name:"(anonymous_7)",decl:{start:{line:56,column:11},end:{line:56,column:12}},loc:{start:{line:56,column:17},end:{line:59,column:5}},line:56},8:{name:"(anonymous_8)",decl:{start:{line:61,column:18},end:{line:61,column:19}},loc:{start:{line:61,column:24},end:{line:63,column:3}},line:61},9:{name:"(anonymous_9)",decl:{start:{line:65,column:23},end:{line:65,column:24}},loc:{start:{line:65,column:29},end:{line:67,column:22}},line:65},10:{name:"(anonymous_10)",decl:{start:{line:65,column:187},end:{line:65,column:188}},loc:{start:{line:65,column:193},end:{line:67,column:6}},line:65},11:{name:"(anonymous_11)",decl:{start:{line:65,column:261},end:{line:65,column:262}},loc:{start:{line:65,column:271},end:{line:67,column:3}},line:65}},branchMap:{0:{loc:{start:{line:12,column:2},end:{line:13,column:16}},type:"if",locations:[{start:{line:12,column:2},end:{line:13,column:16}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:12},1:{loc:{start:{line:14,column:2},end:{line:16,column:3}},type:"if",locations:[{start:{line:14,column:2},end:{line:16,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:14},2:{loc:{start:{line:28,column:22},end:{line:28,column:53}},type:"binary-expr",locations:[{start:{line:28,column:22},end:{line:28,column:47}},{start:{line:28,column:51},end:{line:28,column:53}}],line:28},3:{loc:{start:{line:29,column:50},end:{line:29,column:77}},type:"binary-expr",locations:[{start:{line:29,column:50},end:{line:29,column:71}},{start:{line:29,column:75},end:{line:29,column:77}}],line:29},4:{loc:{start:{line:31,column:51},end:{line:31,column:112}},type:"cond-expr",locations:[{start:{line:31,column:82},end:{line:31,column:107}},{start:{line:31,column:110},end:{line:31,column:112}}],line:31},5:{loc:{start:{line:31,column:117},end:{line:31,column:181}},type:"cond-expr",locations:[{start:{line:31,column:151},end:{line:31,column:176}},{start:{line:31,column:179},end:{line:31,column:181}}],line:31},6:{loc:{start:{line:31,column:186},end:{line:31,column:221}},type:"binary-expr",locations:[{start:{line:31,column:186},end:{line:31,column:215}},{start:{line:31,column:219},end:{line:31,column:221}}],line:31},7:{loc:{start:{line:32,column:52},end:{line:32,column:115}},type:"cond-expr",locations:[{start:{line:32,column:84},end:{line:32,column:110}},{start:{line:32,column:113},end:{line:32,column:115}}],line:32},8:{loc:{start:{line:32,column:120},end:{line:32,column:156}},type:"binary-expr",locations:[{start:{line:32,column:120},end:{line:32,column:150}},{start:{line:32,column:154},end:{line:32,column:156}}],line:32},9:{loc:{start:{line:35,column:17},end:{line:35,column:54}},type:"binary-expr",locations:[{start:{line:35,column:17},end:{line:35,column:49}},{start:{line:35,column:53},end:{line:35,column:54}}],line:35},10:{loc:{start:{line:36,column:16},end:{line:36,column:94}},type:"binary-expr",locations:[{start:{line:36,column:16},end:{line:36,column:47}},{start:{line:36,column:51},end:{line:36,column:88}},{start:{line:36,column:92},end:{line:36,column:94}}],line:36},11:{loc:{start:{line:40,column:63},end:{line:40,column:104}},type:"binary-expr",locations:[{start:{line:40,column:63},end:{line:40,column:95}},{start:{line:40,column:99},end:{line:40,column:104}}],line:40},12:{loc:{start:{line:41,column:59},end:{line:41,column:98}},type:"binary-expr",locations:[{start:{line:41,column:59},end:{line:41,column:89}},{start:{line:41,column:93},end:{line:41,column:98}}],line:41},13:{loc:{start:{line:42,column:51},end:{line:42,column:83}},type:"binary-expr",locations:[{start:{line:42,column:51},end:{line:42,column:77}},{start:{line:42,column:81},end:{line:42,column:83}}],line:42},14:{loc:{start:{line:43,column:49},end:{line:43,column:84}},type:"binary-expr",locations:[{start:{line:43,column:49},end:{line:43,column:74}},{start:{line:43,column:78},end:{line:43,column:84}}],line:43},15:{loc:{start:{line:49,column:4},end:{line:51,column:5}},type:"if",locations:[{start:{line:49,column:4},end:{line:51,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:49},16:{loc:{start:{line:65,column:29},end:{line:67,column:22}},type:"cond-expr",locations:[{start:{line:65,column:80},end:{line:67,column:7}},{start:{line:67,column:10},end:{line:67,column:22}}],line:65},17:{loc:{start:{line:65,column:29},end:{line:65,column:77}},type:"binary-expr",locations:[{start:{line:65,column:29},end:{line:65,column:53}},{start:{line:65,column:57},end:{line:65,column:77}}],line:65},18:{loc:{start:{line:65,column:90},end:{line:65,column:169}},type:"binary-expr",locations:[{start:{line:65,column:90},end:{line:65,column:125}},{start:{line:65,column:129},end:{line:65,column:163}},{start:{line:65,column:167},end:{line:65,column:169}}],line:65},19:{loc:{start:{line:88,column:27},end:{line:88,column:91}},type:"cond-expr",locations:[{start:{line:88,column:59},end:{line:88,column:82}},{start:{line:88,column:85},end:{line:88,column:91}}],line:88},20:{loc:{start:{line:89,column:23},end:{line:89,column:80}},type:"cond-expr",locations:[{start:{line:89,column:52},end:{line:89,column:71}},{start:{line:89,column:74},end:{line:89,column:80}}],line:89},21:{loc:{start:{line:90,column:25},end:{line:90,column:86}},type:"cond-expr",locations:[{start:{line:90,column:56},end:{line:90,column:77}},{start:{line:90,column:80},end:{line:90,column:86}}],line:90},22:{loc:{start:{line:96,column:32},end:{line:96,column:90}},type:"binary-expr",locations:[{start:{line:96,column:32},end:{line:96,column:65}},{start:{line:96,column:69},end:{line:96,column:90}}],line:96},23:{loc:{start:{line:97,column:30},end:{line:97,column:88}},type:"binary-expr",locations:[{start:{line:97,column:30},end:{line:97,column:65}},{start:{line:97,column:69},end:{line:97,column:88}}],line:97},24:{loc:{start:{line:98,column:26},end:{line:98,column:87}},type:"binary-expr",locations:[{start:{line:98,column:26},end:{line:98,column:59}},{start:{line:98,column:63},end:{line:98,column:87}}],line:98},25:{loc:{start:{line:99,column:25},end:{line:99,column:75}},type:"binary-expr",locations:[{start:{line:99,column:25},end:{line:99,column:57}},{start:{line:99,column:61},end:{line:99,column:75}}],line:99}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDatatable.ts"],names:["getCoreRowModel","getExpandedRowModel","getPaginationRowModel","getSortedRowModel","useReactTable","useEffect","useLayoutEffect","useMemo","useRef","useState","getAllLeafColumnDefs","getColumnId","getDefaultColumnOrder","prepareColumns","displayColumnIds","useDisplayColumns","useOptions","useDebounce","getMaxRowsPerPageOption","tableOptions","enableRowsPerPage","rowsPerPageOptions","Array","isArray","length","useDatatable","options","displayColumns","tableRef","lastSelectedRowIdRef","columnDefs","columns","initialState","initState","columnOrder","columnPinning","left","from","Set","enableExpanding","expand","enableRowSelection","select","right","enableRowActions","actions","pagination","pageIndex","pageSize","showColumnSettings","setShowColumnSettings","isFullscreenMode","setIsFullscreenMode","columnSizing","setColumnSizing","activeRowId","setActiveRowId","undefined","width","setWidth","onResize","current","getBoundingClientRect","onKeyDown","event","key","window","addEventListener","removeEventListener","debouncedSetColumnSizing","data","state","isLoading","fill","map","Object","assign","col","table","enablePagination","enableSorting","refs","onShowColumnSettings","onFullscreenModeChange","onColumnSizingChange","onActiveRowIdChange"],mappings:"AAAA,SAEEA,iBACAC,qBACAC,uBACAC,mBACAC,qBACK;AACP,SAASC,WAAWC,iBAAiBC,SAASC,QAAQC,gBAAgB;AAEtE,SACEC,sBACAC,aACAC,uBACAC,sBACK;AAOP,SAASC,kBAAkBC,yBAAyB;AACpD,SAASC,kBAAkB;AAC3B,SAASC,mBAAmB;AAE5B,MAAMC,0BAA0B,CAC9BC,iBACG;AACH,QAAM;AAAA,IAAEC;AAAAA,IAAmBC;AAAAA,EAAmB,IAAIF;AAClD,MAAI,CAACC;AAAmB,WAAO;AAE/B,MAAIE,MAAMC,QAAQF,kBAAkB,GAAG;AACrC,WAAOA,mBAAmBA,mBAAmBG,SAAS,CAAC;AAAA,EACzD;AACA,SAAO;AACT;AAEO,aAAMC,eAAe,CAC1BC,YACyB;AACzB,QAAMP,eAAeH,WAAcU,OAAO;AAC1C,QAAMC,iBAAiBZ,kBAAqBI,YAAY;AACxD,QAAMS,WAAWpB,OAAyB;AAC1C,QAAMqB,uBAAuBrB,OAAsB,IAAI;AAEvD,QAAMsB,aAAavB,QACjB,MACEM,eAAe;AAAA,IAAEiB,YAAY,CAAC,GAAGH,gBAAgB,GAAGD,QAAQK,OAAO;AAAA,EAAE,CAAC,GACxE,CAACL,QAAQK,SAASJ,cAAc,CAClC;AAEA,QAAMK,eAAezB,QAAwC,MAAM;AACjE,UAAM0B,YAAYd,aAAaa,gBAAgB,CAAC;AAChDC,cAAUC,cAActB,sBACtBqB,UAAUC,eAAe,CAAE,GAC3BJ,YACAX,YACF;AACAc,cAAUE,gBAAgB;AAAA,MACxBC,MAAMd,MAAMe,KACV,oBAAIC,IAAI,CACN,GAAInB,aAAaoB,kBAAkB,CAACzB,iBAAiB0B,MAAM,IAAI,CAAE,GACjE,GAAIrB,aAAasB,qBAAqB,CAAC3B,iBAAiB4B,MAAM,IAAI,CAAA,GAClE,GAAIT,UAAUE,eAAeC,QAAQ,CAAE,CAAC,CACzC,CACH;AAAA,MACAO,OAAOrB,MAAMe,KACX,oBAAIC,IAAI,CACN,GAAInB,aAAayB,mBAAmB,CAAC9B,iBAAiB+B,OAAO,IAAI,CAAE,GACnE,GAAIZ,UAAUE,eAAeQ,SAAS,CAAE,CAAC,CAC1C,CACH;AAAA,IACF;AACAV,cAAUa,aAAa;AAAA,MACrBC,WAAWd,WAAWa,YAAYC,aAAa;AAAA,MAC/CC,UACEf,WAAWa,YAAYE,YACvB9B,wBAAwBC,YAAY,KACpC;AAAA,IACJ;AAEA,WAAOc;AAAAA,EACT,GAAG,CAACd,cAAcW,UAAU,CAAC;AAE7B,QAAM,CAACmB,oBAAoBC,qBAAqB,IAAIzC,SAClDuB,cAAciB,sBAAsB,KACtC;AACA,QAAM,CAACE,kBAAkBC,mBAAmB,IAAI3C,SAC9CuB,cAAcmB,oBAAoB,KACpC;AACA,QAAM,CAACE,cAAcC,eAAe,IAAI7C,SACtCuB,cAAcqB,gBAAgB,CAAC,CACjC;AACA,QAAM,CAACE,aAAaC,cAAc,IAAI/C,SACpCuB,cAAcuB,eAAeE,MAC/B;AACA,QAAM,CAACC,OAAOC,QAAQ,IAAIlD,SAAS,CAAC;AAEpC,QAAMmD,WAAWA,MAAM;AACrBD,aAAS/B,SAASiC,QAAQC,sBAAsB,EAAEJ,KAAK;AAAA,EACzD;AACA,QAAMK,YAAYA,CAACC,UAA2B;AAC5C,QAAIA,MAAMC,QAAQ,UAAU;AAC1Bb,0BAAoB,KAAK;AAAA,IAC3B;AAAA,EACF;AACA/C,YAAU,MAAM;AACd6D,WAAOC,iBAAiB,UAAUP,QAAQ;AAC1CM,WAAOC,iBAAiB,WAAWJ,SAAS;AAC5C,WAAO,MAAM;AACXG,aAAOE,oBAAoB,WAAWL,SAAS;AAC/CG,aAAOE,oBAAoB,UAAUR,QAAQ;AAAA,IAC/C;AAAA,EACF,GAAG,EAAE;AACLtD,kBAAgB,MAAM;AACpBsD,aAAS;AAAA,EACX,GAAG,EAAE;AAEL,QAAMS,2BAA2BpD,YAAYqC,eAAe;AAE5D,QAAMgB,OAAY/D,QAChB,MACEmB,QAAQ6C,OAAOC,aAAa,CAAC9C,QAAQ4C,KAAK9C,SACtC,CACE,GAAGF,MACDI,QAAQ6C,OAAOzB,YAAYE,YACzBhB,cAAcc,YAAYE,YAC1B,EACJ,EAAEyB,KAAK,IAAI,CAAC,EACZC,IAAI,MACJC,OAAOC,OACL,CAAC,GACD,GAAGlE,qBAAqBS,aAAaY,OAAO,EAAE2C,IAAKG,UAAS;AAAA,IAC1D,CAAClE,YAAYkE,GAAG,CAAC,GAAG;AAAA,EACtB,EAAE,CACJ,CACF,IACAnD,QAAQ4C,MACd,CACEtC,cAAcc,YAAYE,UAC1BtB,QAAQ4C,MACR5C,QAAQ6C,OAAOC,WACf9C,QAAQ6C,OAAOzB,YAAYE,UAC3B7B,aAAaY,OAAO,CAExB;AAEA,QAAM+C,QAAQ1E,cAAc;AAAA,IAC1B,GAAGe;AAAAA;AAAAA;AAAAA;AAAAA,IAIHY,SAASD;AAAAA,IACTwC;AAAAA,IACAtC;AAAAA,IACAuC,OAAO;AAAA,MACLtB;AAAAA,MACAE;AAAAA,MACAE;AAAAA,MACAE;AAAAA,MACA,GAAGpC,aAAaoD;AAAAA;AAAAA;AAAAA;AAAAA,MAIhBb;AAAAA,IACF;AAAA,IACA1D,iBAAiBA,gBAAgB;AAAA,IACjCE,uBAAuBiB,aAAa4D,mBAChC7E,sBAAsB,IACtBuD;AAAAA,IACJtD,mBAAmBgB,aAAa6D,gBAC5B7E,kBAAkB,IAClBsD;AAAAA,IACJxD,qBAAqBkB,aAAaoB,kBAC9BtC,oBAAoB,IACpBwD;AAAAA,EACN,CAAC;AAEDqB,QAAMG,OAAO;AAAA,IACXrD;AAAAA,IACAC;AAAAA,EACF;AAEAiD,QAAM5B,wBACJ/B,aAAa+D,wBAAwBhC;AACvC4B,QAAM1B,sBACJjC,aAAagE,0BAA0B/B;AACzC0B,QAAMxB,kBACJnC,aAAaiE,wBAAwBf;AACvCS,QAAMtB,iBAAiBrC,aAAakE,uBAAuB7B;AAE3D,SAAOsB;AACT;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e1cc8346116ad0e4cd1158e396c1204505f28568"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return d=function(){return r},r}d();d().s[0]++;const Et=e=>{d().f[0]++;const{enableRowsPerPage:a,rowsPerPageOptions:n}=(d().s[1]++,e);if(d().s[2]++,a)d().b[0][1]++;else return d().b[0][0]++,d().s[3]++,null;return d().s[4]++,Array.isArray(n)?(d().b[1][0]++,d().s[5]++,n[n.length-1]):(d().b[1][1]++,d().s[6]++,null)};d().s[7]++;const Gt=e=>{var F,N,U,L;d().f[1]++;const a=(d().s[8]++,Rt(e)),n=(d().s[9]++,Ct(a)),t=(d().s[10]++,j.useRef()),l=(d().s[11]++,j.useRef(null)),o=(d().s[12]++,j.useMemo(()=>(d().f[2]++,d().s[13]++,wt({columnDefs:[...n,...e.columns]})),[e.columns,n])),r=(d().s[14]++,j.useMemo(()=>{var me,De,pe,Re;d().f[3]++;const $=(d().s[15]++,d().b[2][0]++,a.initialState??(d().b[2][1]++,{}));return d().s[16]++,$.columnOrder=St((d().b[3][0]++,$.columnOrder??(d().b[3][1]++,[])),o,a),d().s[17]++,$.columnPinning={left:Array.from(new Set([...a.enableExpanding?(d().b[4][0]++,[J.expand]):(d().b[4][1]++,[]),...a.enableRowSelection?(d().b[5][0]++,[J.select]):(d().b[5][1]++,[]),...(d().b[6][0]++,((me=$.columnPinning)==null?void 0:me.left)??(d().b[6][1]++,[]))])),right:Array.from(new Set([...a.enableRowActions?(d().b[7][0]++,[J.actions]):(d().b[7][1]++,[]),...(d().b[8][0]++,((De=$.columnPinning)==null?void 0:De.right)??(d().b[8][1]++,[]))]))},d().s[18]++,$.pagination={pageIndex:(d().b[9][0]++,((pe=$==null?void 0:$.pagination)==null?void 0:pe.pageIndex)??(d().b[9][1]++,0)),pageSize:(d().b[10][0]++,((Re=$==null?void 0:$.pagination)==null?void 0:Re.pageSize)??(d().b[10][1]++,Et(a))??(d().b[10][2]++,50))},d().s[19]++,$},[a,o])),[u,i]=(d().s[20]++,j.useState((d().b[11][0]++,(r==null?void 0:r.showColumnSettings)??(d().b[11][1]++,!1)))),[c,A]=(d().s[21]++,j.useState((d().b[12][0]++,(r==null?void 0:r.isFullscreenMode)??(d().b[12][1]++,!1)))),[p,D]=(d().s[22]++,j.useState((d().b[13][0]++,(r==null?void 0:r.columnSizing)??(d().b[13][1]++,{})))),[s,C]=(d().s[23]++,j.useState((d().b[14][0]++,(r==null?void 0:r.activeRowId)??(d().b[14][1]++,void 0)))),[g,v]=(d().s[24]++,j.useState(0));d().s[25]++;const w=()=>{d().f[4]++,d().s[26]++,v(t.current.getBoundingClientRect().width)};d().s[27]++;const S=$=>{d().f[5]++,d().s[28]++,$.key==="Escape"?(d().b[15][0]++,d().s[29]++,A(!1)):d().b[15][1]++};d().s[30]++,j.useEffect(()=>(d().f[6]++,d().s[31]++,window.addEventListener("resize",w),d().s[32]++,window.addEventListener("keydown",S),d().s[33]++,()=>{d().f[7]++,d().s[34]++,window.removeEventListener("keydown",S),d().s[35]++,window.removeEventListener("resize",w)}),[]),d().s[36]++,j.useLayoutEffect(()=>{d().f[8]++,d().s[37]++,w()},[]);const R=(d().s[38]++,xt(D)),P=(d().s[39]++,j.useMemo(()=>{var $,me,De,pe;return d().f[9]++,d().s[40]++,d().b[17][0]++,(($=e.state)==null?void 0:$.isLoading)&&(d().b[17][1]++,!e.data.length)?(d().b[16][0]++,[...Array((d().b[18][0]++,((De=(me=e.state)==null?void 0:me.pagination)==null?void 0:De.pageSize)||(d().b[18][1]++,(pe=r==null?void 0:r.pagination)==null?void 0:pe.pageSize)||(d().b[18][2]++,10))).fill(null)].map(()=>(d().f[10]++,d().s[41]++,Object.assign({},...yt(a.columns).map(Re=>(d().f[11]++,d().s[42]++,{[ft(Re)]:null})))))):(d().b[16][1]++,e.data)},[(F=r==null?void 0:r.pagination)==null?void 0:F.pageSize,e.data,(N=e.state)==null?void 0:N.isLoading,(L=(U=e.state)==null?void 0:U.pagination)==null?void 0:L.pageSize,a.columns])),O=(d().s[43]++,pt({...a,columns:o,data:P,initialState:r,state:{showColumnSettings:u,isFullscreenMode:c,columnSizing:p,activeRowId:s,...a.state,width:g},getCoreRowModel:At(),getPaginationRowModel:a.enablePagination?(d().b[19][0]++,bt()):(d().b[19][1]++,void 0),getSortedRowModel:a.enableSorting?(d().b[20][0]++,Dt()):(d().b[20][1]++,void 0),getExpandedRowModel:a.enableExpanding?(d().b[21][0]++,dt()):(d().b[21][1]++,void 0)}));return d().s[44]++,O.refs={tableRef:t,lastSelectedRowIdRef:l},d().s[45]++,O.setShowColumnSettings=(d().b[22][0]++,a.onShowColumnSettings??(d().b[22][1]++,i)),d().s[46]++,O.setIsFullscreenMode=(d().b[23][0]++,a.onFullscreenModeChange??(d().b[23][1]++,A)),d().s[47]++,O.setColumnSizing=(d().b[24][0]++,a.onColumnSizingChange??(d().b[24][1]++,R)),d().s[48]++,O.setActiveRowId=(d().b[25][0]++,a.onActiveRowIdChange??(d().b[25][1]++,C)),d().s[49]++,O};function I(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/usePersistentState.ts",a="f91e37bb0cfd6212f919e6f40eae1f5a9f75716c",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/usePersistentState.ts",statementMap:{0:{start:{line:4,column:34},end:{line:43,column:1}},1:{start:{line:10,column:6},end:{line:10,column:13}},2:{start:{line:11,column:28},end:{line:11,column:53}},3:{start:{line:12,column:44},end:{line:15,column:4}},4:{start:{line:16,column:42},end:{line:16,column:107}},5:{start:{line:17,column:29},end:{line:17,column:116}},6:{start:{line:17,column:53},end:{line:17,column:115}},7:{start:{line:18,column:40},end:{line:18,column:168}},8:{start:{line:19,column:50},end:{line:19,column:123}},9:{start:{line:20,column:32},end:{line:20,column:87}},10:{start:{line:21,column:2},end:{line:29,column:3}},11:{start:{line:22,column:4},end:{line:28,column:7}},12:{start:{line:30,column:2},end:{line:42,column:5}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:34},end:{line:4,column:35}},loc:{start:{line:4,column:52},end:{line:43,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:17,column:41},end:{line:17,column:42}},loc:{start:{line:17,column:53},end:{line:17,column:115}},line:17}},branchMap:{0:{loc:{start:{line:7,column:4},end:{line:7,column:19}},type:"default-arg",locations:[{start:{line:7,column:14},end:{line:7,column:19}}],line:7},1:{loc:{start:{line:13,column:49},end:{line:13,column:113}},type:"cond-expr",locations:[{start:{line:13,column:83},end:{line:13,column:108}},{start:{line:13,column:111},end:{line:13,column:113}}],line:13},2:{loc:{start:{line:13,column:49},end:{line:13,column:80}},type:"binary-expr",locations:[{start:{line:13,column:49},end:{line:13,column:71}},{start:{line:13,column:75},end:{line:13,column:80}}],line:13},3:{loc:{start:{line:13,column:118},end:{line:13,column:184}},type:"cond-expr",locations:[{start:{line:13,column:154},end:{line:13,column:179}},{start:{line:13,column:182},end:{line:13,column:184}}],line:13},4:{loc:{start:{line:13,column:118},end:{line:13,column:151}},type:"binary-expr",locations:[{start:{line:13,column:118},end:{line:13,column:143}},{start:{line:13,column:147},end:{line:13,column:151}}],line:13},5:{loc:{start:{line:13,column:189},end:{line:13,column:258}},type:"binary-expr",locations:[{start:{line:13,column:189},end:{line:13,column:215}},{start:{line:13,column:219},end:{line:13,column:252}},{start:{line:13,column:256},end:{line:13,column:258}}],line:13},6:{loc:{start:{line:14,column:50},end:{line:14,column:115}},type:"cond-expr",locations:[{start:{line:14,column:84},end:{line:14,column:110}},{start:{line:14,column:113},end:{line:14,column:115}}],line:14},7:{loc:{start:{line:14,column:50},end:{line:14,column:81}},type:"binary-expr",locations:[{start:{line:14,column:50},end:{line:14,column:73}},{start:{line:14,column:77},end:{line:14,column:81}}],line:14},8:{loc:{start:{line:14,column:120},end:{line:14,column:191}},type:"binary-expr",locations:[{start:{line:14,column:120},end:{line:14,column:147}},{start:{line:14,column:151},end:{line:14,column:185}},{start:{line:14,column:189},end:{line:14,column:191}}],line:14},9:{loc:{start:{line:16,column:51},end:{line:16,column:106}},type:"binary-expr",locations:[{start:{line:16,column:51},end:{line:16,column:70}},{start:{line:16,column:74},end:{line:16,column:100}},{start:{line:16,column:104},end:{line:16,column:106}}],line:16},10:{loc:{start:{line:17,column:53},end:{line:17,column:115}},type:"binary-expr",locations:[{start:{line:17,column:53},end:{line:17,column:62}},{start:{line:17,column:66},end:{line:17,column:98}},{start:{line:17,column:102},end:{line:17,column:115}}],line:17},11:{loc:{start:{line:18,column:88},end:{line:18,column:141}},type:"binary-expr",locations:[{start:{line:18,column:88},end:{line:18,column:106}},{start:{line:18,column:110},end:{line:18,column:135}},{start:{line:18,column:139},end:{line:18,column:141}}],line:18},12:{loc:{start:{line:19,column:59},end:{line:19,column:122}},type:"binary-expr",locations:[{start:{line:19,column:59},end:{line:19,column:82}},{start:{line:19,column:86},end:{line:19,column:116}},{start:{line:19,column:120},end:{line:19,column:122}}],line:19},13:{loc:{start:{line:20,column:41},end:{line:20,column:86}},type:"binary-expr",locations:[{start:{line:20,column:41},end:{line:20,column:55}},{start:{line:20,column:59},end:{line:20,column:80}},{start:{line:20,column:84},end:{line:20,column:86}}],line:20},14:{loc:{start:{line:21,column:2},end:{line:29,column:3}},type:"if",locations:[{start:{line:21,column:2},end:{line:29,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:21}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0,0],6:[0,0],7:[0,0],8:[0,0,0],9:[0,0,0],10:[0,0,0],11:[0,0,0],12:[0,0,0],13:[0,0,0],14:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/usePersistentState.ts"],names:["useState","useLocalStorageState","displayColumnIds","usePersistentState","key","options","columns","enabled","initialState","props","state","setState","columnPinning","setColumnPinning","left","Array","from","Set","enableExpanding","expand","enableRowSelection","select","right","enableRowActions","actions","columnSizing","setColumnSizing","defaultColumnOrder","map","column","id","accessorKey","toString","header","columnOrder","setColumnOrder","columnVisibility","setColumnVisibility","sorting","setSorting","onColumnPinningChange","onColumnSizingChange","onColumnOrderChange","onColumnVisibilityChange","onSortingChange"],mappings:"AAAA,SAASA,gBAAgB;AASzB,SAASC,4BAA4B;AAErC,SAASC,wBAAwB;AAU1B,aAAMC,qBAAqB,CAChCC,KACAC,YAMG;AACH,QAAM;AAAA,IAAEC;AAAAA,IAASC,UAAU;AAAA,IAAOC;AAAAA,IAAcC;AAAAA,EAAM,IAAIJ;AAC1D,QAAM,CAACK,OAAOC,QAAQ,IAAIV,qBAAsCG,GAAG;AACnE,QAAM,CAACQ,eAAeC,gBAAgB,IAAIb,SAA6B;AAAA,IACrEc,MAAMC,MAAMC,KACV,oBAAIC,IAAI,CACN,GAAIR,OAAOS,mBAAmB,QAAQ,CAAChB,iBAAiBiB,MAAM,IAAI,CAAA,GAClE,GAAIV,OAAOW,sBAAsB,OAAO,CAAClB,iBAAiBmB,MAAM,IAAI,CAAE,GACtE,GAAIX,OAAOE,eAAeE,QACxBN,cAAcI,eAAeE,QAC7B,CAAE,CAAC,CACN,CACH;AAAA,IACAQ,OAAOP,MAAMC,KACX,oBAAIC,IAAI,CACN,GAAIR,OAAOc,oBAAoB,OAAO,CAACrB,iBAAiBsB,OAAO,IAAI,IACnE,GAAId,OAAOE,eAAeU,SACxBd,cAAcI,eAAeU,SAC7B,CAAE,CAAC,CACN,CACH;AAAA,EACF,CAAC;AACD,QAAM,CAACG,cAAcC,eAAe,IAAI1B,SACtCU,OAAOe,gBAAgBjB,cAAciB,gBAAgB,CAAC,CACxD;AACA,QAAME,qBAAqBrB,QAAQsB,IAChCC,YAAWA,OAAOC,MAAMD,OAAOE,aAAaC,WAAW,KAAKH,OAAOI,MACtE;AACA,QAAM,CAACC,aAAaC,cAAc,IAAInC,SACpCe,MAAMC,KACJ,oBAAIC,IAAI,CACN,GAAIP,OAAOwB,eAAe1B,cAAc0B,eAAe,CAAE,GACzD,GAAGP,kBAAkB,CACtB,CACH,CACF;AACA,QAAM,CAACS,kBAAkBC,mBAAmB,IAAIrC,SAC9CU,OAAO0B,oBAAoB5B,cAAc4B,oBAAoB,CAAC,CAChE;AACA,QAAM,CAACE,SAASC,UAAU,IAAIvC,SAC5BU,OAAO4B,WAAW9B,cAAc8B,WAAW,EAC7C;AAEA,MAAI/B,SAAS;AACXI,aAAS;AAAA,MACPC;AAAAA,MACAa;AAAAA,MACAW;AAAAA,MACAE;AAAAA,MACAJ;AAAAA,IACF,CAAC;AAAA,EACH;AAEA,SAAO,CACL;AAAA,IAAEtB;AAAAA,IAAea;AAAAA,IAAcS;AAAAA,IAAaE;AAAAA,IAAkBE;AAAAA,EAAQ,GACtE;AAAA,IACEE,uBAAuB3B;AAAAA,IACvB4B,sBAAsBf;AAAAA,IACtBgB,qBAAqBP;AAAAA,IACrBQ,0BAA0BN;AAAAA,IAC1BO,iBAAiBL;AAAAA,EACnB,CAAC;AAEL;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f91e37bb0cfd6212f919e6f40eae1f5a9f75716c"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return I=function(){return r},r}I();I().s[0]++;const qt=(e,a)=>{var R,P,O,F;I().f[0]++;const{columns:n,enabled:t=(I().b[0][0]++,!1),initialState:l,props:o}=(I().s[1]++,a),[r,u]=(I().s[2]++,ra(e)),[i,c]=(I().s[3]++,j.useState({left:Array.from(new Set([...(I().b[2][0]++,(o==null?void 0:o.enableExpanding)??(I().b[2][1]++,!1)?(I().b[1][0]++,[J.expand]):(I().b[1][1]++,[])),...(I().b[4][0]++,(o==null?void 0:o.enableRowSelection)??(I().b[4][1]++,!0)?(I().b[3][0]++,[J.select]):(I().b[3][1]++,[])),...(I().b[5][0]++,((R=r==null?void 0:r.columnPinning)==null?void 0:R.left)??(I().b[5][1]++,(P=l==null?void 0:l.columnPinning)==null?void 0:P.left)??(I().b[5][2]++,[]))])),right:Array.from(new Set([...(I().b[7][0]++,(o==null?void 0:o.enableRowActions)??(I().b[7][1]++,!0)?(I().b[6][0]++,[J.actions]):(I().b[6][1]++,[])),...(I().b[8][0]++,((O=r==null?void 0:r.columnPinning)==null?void 0:O.right)??(I().b[8][1]++,(F=l==null?void 0:l.columnPinning)==null?void 0:F.right)??(I().b[8][2]++,[]))]))})),[A,p]=(I().s[4]++,j.useState((I().b[9][0]++,(r==null?void 0:r.columnSizing)??(I().b[9][1]++,l==null?void 0:l.columnSizing)??(I().b[9][2]++,{})))),D=(I().s[5]++,n.map(N=>{var U,L;return I().f[1]++,I().s[6]++,I().b[10][0]++,N.id??(I().b[10][1]++,(L=(U=N.accessorKey)==null?void 0:U.toString)==null?void 0:L.call(U))??(I().b[10][2]++,N.header)})),[s,C]=(I().s[7]++,j.useState(Array.from(new Set([...(I().b[11][0]++,(r==null?void 0:r.columnOrder)??(I().b[11][1]++,l==null?void 0:l.columnOrder)??(I().b[11][2]++,[])),...D])))),[g,v]=(I().s[8]++,j.useState((I().b[12][0]++,(r==null?void 0:r.columnVisibility)??(I().b[12][1]++,l==null?void 0:l.columnVisibility)??(I().b[12][2]++,{})))),[w,S]=(I().s[9]++,j.useState((I().b[13][0]++,(r==null?void 0:r.sorting)??(I().b[13][1]++,l==null?void 0:l.sorting)??(I().b[13][2]++,[]))));return I().s[10]++,t?(I().b[14][0]++,I().s[11]++,u({columnPinning:i,columnSizing:A,columnVisibility:g,sorting:w,columnOrder:s})):I().b[14][1]++,I().s[12]++,[{columnPinning:i,columnSizing:A,columnOrder:s,columnVisibility:g,sorting:w},{onColumnPinningChange:c,onColumnSizingChange:p,onColumnOrderChange:C,onColumnVisibilityChange:v,onSortingChange:S}]};function E(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Pagination.tsx",a="c6e79cfe67c87e3f746bb09f838b53fefc2ac9b3",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Pagination.tsx",statementMap:{0:{start:{line:7,column:11},end:{line:15,column:1}},1:{start:{line:16,column:15},end:{line:19,column:174}},2:{start:{line:20,column:19},end:{line:81,column:1}},3:{start:{line:38,column:6},end:{line:38,column:11}},4:{start:{line:41,column:6},end:{line:41,column:16}},5:{start:{line:45,column:6},end:{line:45,column:16}},6:{start:{line:46,column:22},end:{line:46,column:35}},7:{start:{line:47,column:19},end:{line:47,column:37}},8:{start:{line:48,column:24},end:{line:48,column:74}},9:{start:{line:49,column:24},end:{line:49,column:44}},10:{start:{line:50,column:23},end:{line:50,column:79}},11:{start:{line:51,column:35},end:{line:51,column:56}},12:{start:{line:52,column:15},end:{line:52,column:43}},13:{start:{line:53,column:2},end:{line:80,column:10}},14:{start:{line:57,column:8},end:{line:57,column:44}},15:{start:{line:58,column:68},end:{line:58,column:175}},16:{start:{line:75,column:277},end:{line:75,column:292}},17:{start:{line:76,column:276},end:{line:76,column:290}},18:{start:{line:77,column:269},end:{line:77,column:279}},19:{start:{line:78,column:290},end:{line:78,column:312}},20:{start:{line:84,column:0},end:{line:101,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:20,column:19},end:{line:20,column:20}},loc:{start:{line:22,column:6},end:{line:81,column:1}},line:22},1:{name:"(anonymous_1)",decl:{start:{line:56,column:143},end:{line:56,column:144}},loc:{start:{line:56,column:150},end:{line:58,column:7}},line:56},2:{name:"(anonymous_2)",decl:{start:{line:58,column:42},end:{line:58,column:43}},loc:{start:{line:58,column:68},end:{line:58,column:175}},line:58},3:{name:"(anonymous_3)",decl:{start:{line:75,column:271},end:{line:75,column:272}},loc:{start:{line:75,column:277},end:{line:75,column:292}},line:75},4:{name:"(anonymous_4)",decl:{start:{line:76,column:270},end:{line:76,column:271}},loc:{start:{line:76,column:276},end:{line:76,column:290}},line:76},5:{name:"(anonymous_5)",decl:{start:{line:77,column:263},end:{line:77,column:264}},loc:{start:{line:77,column:269},end:{line:77,column:279}},line:77},6:{name:"(anonymous_6)",decl:{start:{line:78,column:284},end:{line:78,column:285}},loc:{start:{line:78,column:290},end:{line:78,column:312}},line:78}},branchMap:{0:{loc:{start:{line:48,column:24},end:{line:48,column:74}},type:"binary-expr",locations:[{start:{line:48,column:24},end:{line:48,column:32}},{start:{line:48,column:36},end:{line:48,column:74}}],line:48},1:{loc:{start:{line:52,column:15},end:{line:52,column:43}},type:"binary-expr",locations:[{start:{line:52,column:15},end:{line:52,column:27}},{start:{line:52,column:31},end:{line:52,column:43}}],line:52},2:{loc:{start:{line:54,column:4},end:{line:59,column:8}},type:"binary-expr",locations:[{start:{line:54,column:4},end:{line:54,column:21}},{start:{line:54,column:25},end:{line:54,column:37}},{start:{line:54,column:57},end:{line:59,column:8}}],line:54},3:{loc:{start:{line:55,column:131},end:{line:55,column:170}},type:"cond-expr",locations:[{start:{line:55,column:145},end:{line:55,column:151}},{start:{line:55,column:154},end:{line:55,column:170}}],line:55},4:{loc:{start:{line:67,column:6},end:{line:67,column:28}},type:"binary-expr",locations:[{start:{line:67,column:6},end:{line:67,column:10}},{start:{line:67,column:14},end:{line:67,column:28}}],line:67},5:{loc:{start:{line:71,column:8},end:{line:71,column:30}},type:"cond-expr",locations:[{start:{line:71,column:16},end:{line:71,column:21}},{start:{line:71,column:24},end:{line:71,column:30}}],line:71}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0,0],1:[0,0],2:[0,0,0],3:[0,0],4:[0,0],5:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Pagination.tsx"],names:["styled","abbreviateNumber","getFormStyle","getRadii","Inline","Padbox","useContainerQuery","IconButton","cq","sm","maxWidth","md","minWidth","Select","select","withConfig","displayName","componentId","Pagination","table","getCanNextPage","getCanPreviousPage","getPageCount","getPrePaginationRowModel","getState","nextPage","options","enableRowsPerPage","rowCount","rowsPerPageOptions","previousPage","setPageIndex","setPageSize","pagination","pageIndex","pageSize","currentPage","lastPage","totalRowCount","rows","length","firstRowIndex","lastRowIndex","Math","min","cqParams","containerRef","isLg","e","Number","target","value","map","size","toLocaleString","toString"],mappings:"AA2DU,SAKE,KALF;AA3DV,OAAOA,YAAY;AAEnB,SAASC,kBAAkBC,cAAcC,gBAAgB;AACzD,SAASC,QAAQC,cAAc;AAE/B,SAASC,yBAAyB;AAClC,OAAOC,gBAAgB;AAEvB,MAAMC,KAAK;AAAA,EACTC,IAAI;AAAA,IACFC,UAAU;AAAA,EACZ;AAAA,EACAC,IAAI;AAAA,IACFC,UAAU;AAAA,IACVF,UAAU;AAAA,EACZ;AACF;AAEA,MAAMG,SAASb,OAAOc,OAAMC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,qBAAA,mBAAA,WAAA,YAAA,GAAA,GACNf,aAAa,aAAa,GAC7BC,SAAS,SAAS,GAC1BD,aAAa,OAAO,GACnBA,aAAa,aAAa,CAAC;AAGvC,MAAMgB,aAAa,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACrE,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,MAAmBC;AAAAA,MAAUC;AAAAA,IAAmB;AAAA,IAC3DC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIb;AACJ,QAAM;AAAA,IAAEc;AAAAA,EAAW,IAAIT,SAAS;AAChC,QAAM;AAAA,IAAEU;AAAAA,IAAWC;AAAAA,EAAS,IAAIF;AAEhC,QAAMG,cAAcF,YAAY;AAChC,QAAMG,WAAWf,aAAa,IAAI;AAClC,QAAMgB,gBAAgBV,YAAYL,yBAAyB,EAAEgB,KAAKC;AAClE,QAAMC,gBAAgBP,YAAYC;AAClC,QAAMO,eAAeC,KAAKC,IAAIV,YAAYC,WAAWA,UAAUG,aAAa;AAE5E,QAAM,CAACO,UAAUC,YAAY,IAAIxC,kBAAkBE,EAAE;AACrD,QAAMuC,OAAO,CAACF,SAASpC,MAAM,CAACoC,SAASlC;AAEvC,SACE,oBAAC,UACC,KAAKmC,cACL,WAAU,+BACV,aAAY,MACZ,aAAY,UAEZ,+BAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACrCnB;AAAAA,yBAAqB,CAACkB,SAASpC,MAC9B,qBAAC,UACC,OAAM,UACN,WAAU,6CACV,KAAI,MAEJ;AAAA,0BAAC,WACC,WAAU,2CACV,SAAQ,qBAEPoC,mBAASlC,KAAK,SAAS,kBAC1B;AAAA,MACA,oBAAC,UACC,WAAU,4CACV,IAAG,qBACH,OAAOwB,UACP,UAAWa,OAAM;AACfhB,oBAAYiB,OAAOD,EAAEE,OAAOC,KAAK,CAAC;AAAA,MACpC,GAECtB,6BAAmBuB,IAAKC,UACvB,oBAAC,YAEC,WAAU,4CACV,OAAOA,MAENA,kBAJIA,IAKP,CACD,GACH;AAAA,OACF;AAAA,IAEF,qBAAC,SAAI,WAAU,kCACXZ;AAAAA,uBAAgB,GAAGa,eAAe,OAAO;AAAA,MAAE;AAAA,MAC5CZ,aAAaY,eAAe,OAAO;AAAA,MAAE;AAAA,MAAI;AAAA,MAC1C,oBAAC,UAAK,OAAOhB,cAAciB,SAAS,GACjCtD,2BAAiBqC,aAAa,GACjC;AAAA,MACCS,QAAQ;AAAA,OACX;AAAA,IACA,qBAAC,UACC,OAAM,UACN,WAAU,uCACV,KAAI,MAEJ;AAAA,2BAAC,UAAK,WAAU,4CACb;AAAA,SAACA,OAAO,QAAQ;AAAA,QAAO;AAAA,QAAEX;AAAAA,SAC5B;AAAA,MACA,oBAAC,cACC,WAAU,+EACV,UAAS,iBACT,YAAY,CAACf,mBAAmB,GAChC,OAAM,iCACN,MAAK,MACL,SAAQ,SACR,SAAS,MAAMU,aAAa,CAAC,GAAE;AAAA,MAEjC,oBAAC,cACC,WAAU,8EACV,UAAS,cACT,YAAY,CAACV,mBAAmB,GAChC,OAAM,oCACN,MAAK,MACL,SAAQ,SACR,SAAS,MAAMS,aAAa,GAAE;AAAA,MAEhC,oBAAC,cACC,WAAU,8EACV,UAAS,eACT,YAAY,CAACV,eAAe,GAC5B,OAAM,gCACN,MAAK,MACL,SAAQ,SACR,SAAS,MAAMK,SAAS,GAAE;AAAA,MAE5B,oBAAC,cACC,WAAU,8EACV,UAAS,iBACT,cAAc,KACd,YAAY,CAACL,eAAe,GAC5B,OAAM,gCACN,MAAK,MACL,SAAQ,SACR,SAAS,MAAMW,aAAaM,QAAQ,GAAE;AAAA,OAE1C;AAAA,KACF,GACF;AAEJ;AAEA,eAAenB;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c6e79cfe67c87e3f746bb09f838b53fefc2ac9b3"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return E=function(){return r},r}E();const Ft=(E().s[0]++,{sm:{maxWidth:512},md:{minWidth:513,maxWidth:720}}),Mt=(E().s[1]++,ve.select.withConfig({displayName:"Pagination__Select",componentId:"sc-wcafgt-0"})(["border:1px solid ",";border-radius:",";color:",";height:",";"],Pe("borderColor"),Ne("default"),Pe("color"),Pe("fieldHeight")));E().s[2]++;const Hn=({table:e})=>{E().f[0]++;const{getCanNextPage:a,getCanPreviousPage:n,getPageCount:t,getPrePaginationRowModel:l,getState:o,nextPage:r,options:{enableRowsPerPage:u,rowCount:i,rowsPerPageOptions:c},previousPage:A,setPageIndex:p,setPageSize:D}=(E().s[3]++,e),{pagination:s}=(E().s[4]++,o()),{pageIndex:C,pageSize:g}=(E().s[5]++,s),v=(E().s[6]++,C+1),w=(E().s[7]++,t()-1),S=(E().s[8]++,E().b[0][0]++,i??(E().b[0][1]++,l().rows.length)),R=(E().s[9]++,C*g),P=(E().s[10]++,Math.min(C*g+g,S)),[O,F]=(E().s[11]++,sa(Ft)),N=(E().s[12]++,E().b[1][0]++,!O.sm&&(E().b[1][1]++,!O.md));return E().s[13]++,m.jsx(Ve,{ref:F,className:"ds-table-pagination-toolbar",paddingSize:"md",paddingType:"squish",children:m.jsxs(oe,{align:"center",gap:"md",justify:"space-between",children:[(E().b[2][0]++,u&&(E().b[2][1]++,!O.sm)&&(E().b[2][2]++,m.jsxs(oe,{align:"center",className:"ds-table-pagination-rows-per-page-wrapper",gap:"md",children:[m.jsx("label",{className:"ds-table-pagination-rows-per-page-label",htmlFor:"rowsPerPageSelect",children:O.md?(E().b[3][0]++,"Rows"):(E().b[3][1]++,"Number of rows")}),m.jsx(Mt,{className:"ds-table-pagination-rows-per-page-select",id:"rowsPerPageSelect",value:g,onChange:U=>{E().f[1]++,E().s[14]++,D(Number(U.target.value))},children:c.map(U=>(E().f[2]++,E().s[15]++,m.jsx("option",{className:"ds-table-pagination-rows-per-page-option",value:U,children:U},U)))})]}))),m.jsxs("div",{className:"ds-table-pagination-item-count",children:[(R+1).toLocaleString("en-US"),"-",P.toLocaleString("en-US")," of"," ",m.jsx("abbr",{title:S.toString(),children:fn(S)}),(E().b[4][0]++,N&&(E().b[4][1]++," total items"))]}),m.jsxs(oe,{align:"center",className:"ds-table-pagination-buttons-wrapper",gap:"sm",children:[m.jsxs("span",{className:"ds-table-pagination-buttons-current-page",children:[N?(E().b[5][1]++,"Page"):(E().b[5][0]++,"Pg.")," ",v]}),m.jsx(de,{className:"ds-table-pagination-buttons-first-button ds-table-pagination-buttons-button",iconName:"backward-step",isDisabled:!n(),label:"Go to the first page of table",size:"sm",variant:"ghost",onClick:()=>(E().f[3]++,E().s[16]++,p(0))}),m.jsx(de,{className:"ds-table-pagination-buttons-prev-button ds-table-pagination-buttons-button",iconName:"angle-left",isDisabled:!n(),label:"Go to the previous page of table",size:"sm",variant:"ghost",onClick:()=>(E().f[4]++,E().s[17]++,A())}),m.jsx(de,{className:"ds-table-pagination-buttons-next-button ds-table-pagination-buttons-button",iconName:"angle-right",isDisabled:!a(),label:"Go to the next page of table",size:"sm",variant:"ghost",onClick:()=>(E().f[5]++,E().s[18]++,r())}),m.jsx(de,{className:"ds-table-pagination-buttons-last-button ds-table-pagination-buttons-button",iconName:"backward-step",iconRotation:180,isDisabled:!a(),label:"Go to the last page of table",size:"sm",variant:"ghost",onClick:()=>(E().f[6]++,E().s[19]++,p(w))})]})]})})};E().s[20]++;Hn.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function T(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Selection.tsx",a="819dfd9fb1612c98779edf173b04bb4a245a6dcd",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Selection.tsx",statementMap:{0:{start:{line:8,column:36},end:{line:15,column:1}},1:{start:{line:11,column:6},end:{line:11,column:11}},2:{start:{line:12,column:23},end:{line:12,column:49}},3:{start:{line:13,column:28},end:{line:13,column:47}},4:{start:{line:14,column:2},end:{line:14,column:27}},5:{start:{line:16,column:22},end:{line:19,column:131}},6:{start:{line:20,column:18},end:{line:61,column:1}},7:{start:{line:31,column:6},end:{line:31,column:11}},8:{start:{line:32,column:28},end:{line:32,column:55}},9:{start:{line:33,column:23},end:{line:33,column:49}},10:{start:{line:34,column:24},end:{line:34,column:74}},11:{start:{line:35,column:2},end:{line:37,column:3}},12:{start:{line:36,column:4},end:{line:36,column:16}},13:{start:{line:38,column:2},end:{line:60,column:13}},14:{start:{line:53,column:127},end:{line:53,column:155}},15:{start:{line:64,column:0},end:{line:81,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:36},end:{line:8,column:37}},loc:{start:{line:8,column:47},end:{line:15,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:20,column:18},end:{line:20,column:19}},loc:{start:{line:22,column:6},end:{line:61,column:1}},line:22},2:{name:"(anonymous_2)",decl:{start:{line:53,column:121},end:{line:53,column:122}},loc:{start:{line:53,column:127},end:{line:53,column:155}},line:53}},branchMap:{0:{loc:{start:{line:34,column:24},end:{line:34,column:74}},type:"binary-expr",locations:[{start:{line:34,column:24},end:{line:34,column:32}},{start:{line:34,column:36},end:{line:34,column:74}}],line:34},1:{loc:{start:{line:35,column:2},end:{line:37,column:3}},type:"if",locations:[{start:{line:35,column:2},end:{line:37,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},2:{loc:{start:{line:50,column:8},end:{line:50,column:46}},type:"cond-expr",locations:[{start:{line:50,column:30},end:{line:50,column:36}},{start:{line:50,column:39},end:{line:50,column:46}}],line:50}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Selection.tsx"],names:["pluck","styled","abbreviateNumber","Inline","Padbox","Surface","Button","Strong","getSelectedRowsCount","table","getSelectedRowModel","selectedRows","rows","selectedRowsCount","length","SelectionRoot","withConfig","displayName","componentId","Selection","options","renderRowSelectionActions","rowCount","getPrePaginationRowModel","toggleAllRowsSelected","totalRowCount","toLocaleString","toString"],mappings:"AA2DY,SACE,KADF;AA1DZ,SAASA,aAAa;AACtB,OAAOC,YAAY;AAEnB,SAASC,wBAAwB;AAEjC,SAASC,QAAQC,QAAQC,eAAe;AACxC,OAAOC,YAAY;AACnB,SAASC,cAAc;AAEhB,aAAMC,uBAAuB,CAAKC,UAAgC;AACvE,QAAM;AAAA,IAAEC;AAAAA,EAAoB,IAAID;AAChC,QAAME,eAAeD,oBAAoB,EAAEE;AAC3C,QAAMC,oBAAoBF,aAAaG;AACvC,SAAOD;AACT;AAEA,MAAME,gBAAgBd,OAAOI,OAAO,EAACW,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAOpC,EAAA,CAAA,6HAAA,CAAA;AACD,MAAMC,YAAY,CAAK;AAAA,EAAEV;AAAuC,MAAM;AACpE,QAAM;AAAA,IACJW,SAAS;AAAA,MAAEC;AAAAA,MAA2BC;AAAAA,IAAS;AAAA,IAC/CC;AAAAA,IACAb;AAAAA,IACAc;AAAAA,EACF,IAAIf;AAEJ,QAAMI,oBAAoBL,qBAAqBC,KAAK;AACpD,QAAME,eAAeD,oBAAoB,EAAEE;AAC3C,QAAMa,gBAAgBH,YAAYC,yBAAyB,EAAEX,KAAKE;AAElE,MAAID,sBAAsB,GAAG;AAC3B,WAAO;AAAA,EACT;AAEA,SACE,oBAAC,iBACC,WAAU,8BACV,WAAW,GACX,QAAO,MACP,OAAO;AAAA,IACL,sBAAsB;AAAA,IACtB,wBAAwB;AAAA,EAC1B,GACA,WAAS,MAET,8BAAC,UAAO,aAAY,MAClB,+BAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACtC;AAAA,yBAAC,UACC,OAAM,UACN,WAAU,+BACV,KAAI,MAEJ;AAAA,2BAAC,SACC;AAAA,4BAAC,UAAO,WAAU,yCACfA,4BAAkBa,eAAe,OAAO,GAC3C;AAAA,QAAU;AAAA,QAAG;AAAA,QACV;AAAA,QACH,oBAAC,UAAK,OAAOD,cAAcE,SAAS,GACjCzB,2BAAiBuB,aAAa,GACjC;AAAA,QAAQ;AAAA,QACPA,kBAAkB,IAAI,SAAS;AAAA,QAAQ;AAAA,SAC1C;AAAA,MACA,oBAAC,UACC,WAAU,mCACV,MAAK,MACL,SAAQ,SACR,SAAS,MAAMD,sBAAsB,KAAK,GAAE,6BAG9C;AAAA,OACF;AAAA,IACA,oBAAC,UACC,OAAM,UACN,WAAU,wCACV,KAAI,MACJ,SAAQ,YAEPH,sCAA4B;AAAA,MAC3BV,cAAcX,MAAM,YAAYW,YAAY;AAAA,MAC5Cc;AAAAA,MACAhB;AAAAA,IACF,CAAC,GACH;AAAA,KACF,GACF,GACF;AAEJ;AAEA,eAAeU;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"819dfd9fb1612c98779edf173b04bb4a245a6dcd"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return T=function(){return r},r}T();T().s[0]++;const Ot=e=>{T().f[0]++;const{getSelectedRowModel:a}=(T().s[1]++,e),n=(T().s[2]++,a().rows),t=(T().s[3]++,n.length);return T().s[4]++,t},Nt=(T().s[5]++,ve(an).withConfig({displayName:"Selection__SelectionRoot",componentId:"sc-1agyq0k-0"})(["position:sticky;z-index:2;left:0;right:0;bottom:var(--sscds-space-4x);margin:var(--sscds-space-4x) var(--sscds-space-8x) 0;"]));T().s[6]++;const jn=({table:e})=>{T().f[1]++;const{options:{renderRowSelectionActions:a,rowCount:n},getPrePaginationRowModel:t,getSelectedRowModel:l,toggleAllRowsSelected:o}=(T().s[7]++,e),r=(T().s[8]++,Ot(e)),u=(T().s[9]++,l().rows),i=(T().s[10]++,T().b[0][0]++,n??(T().b[0][1]++,t().rows.length));return T().s[11]++,r===0?(T().b[1][0]++,T().s[12]++,null):(T().b[1][1]++,T().s[13]++,m.jsx(Nt,{className:"ds-table-selection-toolbar",elevation:2,radius:"md",style:{"--sscds-background":"var(--sscds-color-primary-3)","--sscds-border-color":"var(--sscds-color-primary-8)"},hasBorder:!0,children:m.jsx(Ve,{paddingSize:"md",children:m.jsxs(oe,{align:"center",gap:"md",justify:"space-between",children:[m.jsxs(oe,{align:"center",className:"ds-table-selection-overview",gap:"sm",children:[m.jsxs("div",{children:[m.jsx(ma,{className:"ds-table-selection-currently-selected",children:r.toLocaleString("en-US")})," ","of"," ",m.jsx("abbr",{title:i.toString(),children:fn(i)})," ",i===1?(T().b[2][0]++,"item"):(T().b[2][1]++,"items")," selected"]}),m.jsx(yn,{className:"ds-table-selection-clear-button",size:"sm",variant:"ghost",onClick:()=>(T().f[2]++,T().s[14]++,o(!1)),children:"Clear selection"})]}),m.jsx(oe,{align:"center",className:"ds-table-selection-actions-container",gap:"md",justify:"flex-end",children:a==null?void 0:a({selectedRows:Cn("original",u),totalRowCount:i,table:e})})]})})}))};T().s[15]++;jn.__docgenInfo={description:"",methods:[],displayName:"Selection",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function Ce(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/DetailPanel.tsx",a="70b3d0c10bac1336116f1333285a5fd9c6df7db6",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/DetailPanel.tsx",statementMap:{0:{start:{line:2,column:20},end:{line:21,column:1}},1:{start:{line:11,column:6},end:{line:11,column:11}},2:{start:{line:14,column:6},end:{line:14,column:16}},3:{start:{line:15,column:2},end:{line:20,column:11}},4:{start:{line:24,column:0},end:{line:1182,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:5,column:6},end:{line:21,column:1}},line:5}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/DetailPanel.tsx"],names:["DetailPanel","table","row","options","renderDetailPanel","getState","width","getVisibleCells","length"],mappings:"AAmBM;AAfN,MAAMA,cAAc,CAAK;AAAA,EACvBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,IAAkB;AAAA,IAC7BC;AAAAA,EACF,IAAIJ;AACJ,QAAM;AAAA,IAAEK;AAAAA,EAAM,IAAID,SAAS;AAE3B,SACE,oBAAC,QAAG,WAAU,wDACZ,8BAAC,QACC,WAAU,8BACV,SAASH,IAAIK,gBAAgB,EAAEC,QAC/B,OAAO;AAAA,IAAEF;AAAAA,EAAM,GAEdF,4BAAkB;AAAA,IAAEH;AAAAA,IAAOC;AAAAA,EAAI,CAAC,GACnC,GACF;AAEJ;AAEA,eAAeF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"70b3d0c10bac1336116f1333285a5fd9c6df7db6"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Ce=function(){return r},r}Ce();Ce().s[0]++;const Pn=({table:e,row:a})=>{Ce().f[0]++;const{options:{renderDetailPanel:n},getState:t}=(Ce().s[1]++,e),{width:l}=(Ce().s[2]++,t());return Ce().s[3]++,m.jsx("tr",{className:"ds-table-body-row ds-table-row ds-table-detail-panel",children:m.jsx("td",{className:"ds-table-detail-panel-cell",colSpan:a.getVisibleCells().length,style:{width:l},children:n({table:e,row:a})})})};Ce().s[4]++;Pn.__docgenInfo={description:"",methods:[],displayName:"DetailPanel",props:{row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function he(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/utils.ts",a="349f6d187e5d8fd62257cc8b46e42bb3cfd1ce99",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/utils.ts",statementMap:{0:{start:{line:1,column:37},end:{line:1,column:87}},1:{start:{line:1,column:50},end:{line:1,column:87}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:37},end:{line:1,column:38}},loc:{start:{line:1,column:50},end:{line:1,column:87}},line:1}},branchMap:{0:{loc:{start:{line:1,column:50},end:{line:1,column:87}},type:"cond-expr",locations:[{start:{line:1,column:75},end:{line:1,column:82}},{start:{line:1,column:85},end:{line:1,column:87}}],line:1}},s:{0:0,1:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/utils.ts"],names:["parseFromValuesOrFunc","fn","arg","Function"],mappings:"AAAO,aAAMA,wBAAwB,CACnCC,IACAC,QACmBD,cAAcE,WAAWF,GAAGC,GAAG,IAAID;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"349f6d187e5d8fd62257cc8b46e42bb3cfd1ce99"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return he=function(){return r},r}he();he().s[0]++;const Un=(e,a)=>(he().f[0]++,he().s[1]++,e instanceof Function?(he().b[0][0]++,e(a)):(he().b[0][1]++,e));function Q(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyCell.tsx",a="f68b4ea5f48afdedc3dbb91b4bf6ae7258244c6a",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyCell.tsx",statementMap:{0:{start:{line:8,column:17},end:{line:40,column:1}},1:{start:{line:14,column:6},end:{line:14,column:10}},2:{start:{line:17,column:6},end:{line:17,column:12}},3:{start:{line:20,column:6},end:{line:20,column:22}},4:{start:{line:23,column:6},end:{line:23,column:22}},5:{start:{line:24,column:44},end:{line:24,column:57}},6:{start:{line:25,column:2},end:{line:30,column:56}},7:{start:{line:26,column:4},end:{line:27,column:13}},8:{start:{line:27,column:6},end:{line:27,column:13}},9:{start:{line:28,column:17},end:{line:28,column:33}},10:{start:{line:29,column:4},end:{line:29,column:120}},11:{start:{line:31,column:2},end:{line:39,column:158}},12:{start:{line:43,column:0},end:{line:1281,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:17},end:{line:8,column:18}},loc:{start:{line:11,column:6},end:{line:40,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:25,column:12},end:{line:25,column:13}},loc:{start:{line:25,column:18},end:{line:30,column:3}},line:25}},branchMap:{0:{loc:{start:{line:26,column:4},end:{line:27,column:13}},type:"if",locations:[{start:{line:26,column:4},end:{line:27,column:13}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:26},1:{loc:{start:{line:26,column:8},end:{line:26,column:43}},type:"binary-expr",locations:[{start:{line:26,column:8},end:{line:26,column:18}},{start:{line:26,column:22},end:{line:26,column:43}}],line:26},2:{loc:{start:{line:29,column:21},end:{line:29,column:118}},type:"cond-expr",locations:[{start:{line:29,column:51},end:{line:29,column:59}},{start:{line:29,column:62},end:{line:29,column:118}}],line:29},3:{loc:{start:{line:39,column:16},end:{line:39,column:154}},type:"cond-expr",locations:[{start:{line:39,column:44},end:{line:39,column:83}},{start:{line:39,column:86},end:{line:39,column:154}}],line:39}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyCell.tsx"],names:["useEffect","useState","clx","getCommonCellStyles","Skeleton","parseFromValuesOrFunc","displayColumnIds","BodyCell","cell","table","column","getIsPinned","columnDefType","columnDef","isLoading","getState","skeletonWidth","setSkeletonWidth","size","getSize","Math","round","random","id","select","expand","actions","getContext"],mappings:"AAgDQ;AAhDR,SAAgBA,WAAWC,gBAAgB;AAC3C,OAAOC,SAAS;AAEhB,SAASC,2BAA2B;AAEpC,OAAOC,cAAc;AACrB,SAASC,6BAA6B;AACtC,SAASC,wBAAwB;AAEjC,MAAMC,WAAW,CAAK;AAAA,EACpBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAO,IAAIF;AACnB,QAAM;AAAA,IAAEG;AAAAA,EAAY,IAAID;AACxB,QAAM;AAAA,IAAEE;AAAAA,EAAc,IAAIF,OAAOG;AACjC,QAAM;AAAA,IAAEC;AAAAA,EAAU,IAAIL,MAAMM,SAAS;AAErC,QAAM,CAACC,eAAeC,gBAAgB,IAAIhB,SAAS,GAAG;AAEtDD,YAAU,MAAM;AACd,QAAI,CAACc,aAAaE,kBAAkB;AAAK;AACzC,UAAME,OAAOR,OAAOS,QAAQ;AAC5BF,qBACEL,kBAAkB,YACdM,OAAO,IACPE,KAAKC,MAAMD,KAAKE,OAAO,KAAKJ,OAAOA,OAAO,KAAKA,OAAO,CAAC,CAC7D;AAAA,EACF,GAAG,CAACR,QAAQE,eAAeE,WAAWE,aAAa,CAAC;AAEpD,SACE,oBAAC,QACC,WAAWd,IAAI,oCAAoC;AAAA,IACjD,yBAAyBU,kBAAkB;AAAA,IAC3C,wBAAwBF,OAAOa,OAAOjB,iBAAiBkB;AAAAA,IACvD,wBAAwBd,OAAOa,OAAOjB,iBAAiBmB;AAAAA,IACvD,yBAAyBf,OAAOa,OAAOjB,iBAAiBoB;AAAAA,EAC1D,CAAC,GACD,eAAaf,YAAY,GACzB,OAAOR,oBAAoB;AAAA,IACzBM;AAAAA,IACAC;AAAAA,EACF,CAAC,GAEAI,sBACC,oBAAC,YAAS,OAAOE,eAAc,IAE/BX,sBAAsBG,KAAKE,OAAOG,UAAUL,MAAMA,KAAKmB,WAAW,CAAC,GAEvE;AAEJ;AAEA,eAAepB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f68b4ea5f48afdedc3dbb91b4bf6ae7258244c6a"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Q=function(){return r},r}Q();Q().s[0]++;const Kn=({cell:e,table:a})=>{Q().f[0]++;const{column:n}=(Q().s[1]++,e),{getIsPinned:t}=(Q().s[2]++,n),{columnDefType:l}=(Q().s[3]++,n.columnDef),{isLoading:o}=(Q().s[4]++,a.getState()),[r,u]=(Q().s[5]++,j.useState(100));return Q().s[6]++,j.useEffect(()=>{if(Q().f[1]++,Q().s[7]++,Q().b[1][0]++,!o||(Q().b[1][1]++,r!==100)){Q().b[0][0]++,Q().s[8]++;return}else Q().b[0][1]++;const i=(Q().s[9]++,n.getSize());Q().s[10]++,u(l==="display"?(Q().b[2][0]++,i/2):(Q().b[2][1]++,Math.round(Math.random()*(i-i/3)+i/3)))},[n,l,o,r]),Q().s[11]++,m.jsx("td",{className:Oe("ds-table-body-cell ds-table-cell",{"ds-table-cell-display":l==="display","ds-table-cell-select":n.id===J.select,"ds-table-cell-expand":n.id===J.expand,"ds-table-cell-actions":n.id===J.actions}),"data-pinned":t(),style:On({table:a,column:n}),children:o?(Q().b[3][0]++,m.jsx(Aa,{width:r})):(Q().b[3][1]++,Un(e.column.columnDef.cell,e.getContext()))})};Q().s[12]++;Kn.__docgenInfo={description:"",methods:[],displayName:"BodyCell",props:{cell:{required:!0,tsType:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function z(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyRow.tsx",a="ad9bb2e9ce1672683e61718f37877901671ee232",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyRow.tsx",statementMap:{0:{start:{line:4,column:16},end:{line:38,column:1}},1:{start:{line:15,column:6},end:{line:15,column:11}},2:{start:{line:21,column:6},end:{line:21,column:9}},3:{start:{line:24,column:6},end:{line:24,column:16}},4:{start:{line:25,column:24},end:{line:25,column:56}},5:{start:{line:26,column:2},end:{line:37,column:7}},6:{start:{line:28,column:6},end:{line:34,column:7}},7:{start:{line:29,column:8},end:{line:29,column:27}},8:{start:{line:30,column:8},end:{line:33,column:11}},9:{start:{line:35,column:65},end:{line:35,column:104}},10:{start:{line:41,column:0},end:{line:1199,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:7,column:6},end:{line:38,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:27,column:180},end:{line:27,column:181}},loc:{start:{line:27,column:186},end:{line:35,column:5}},line:27},2:{name:"(anonymous_2)",decl:{start:{line:35,column:39},end:{line:35,column:40}},loc:{start:{line:35,column:65},end:{line:35,column:104}},line:35}},branchMap:{0:{loc:{start:{line:27,column:92},end:{line:27,column:135}},type:"cond-expr",locations:[{start:{line:27,column:108},end:{line:27,column:126}},{start:{line:27,column:129},end:{line:27,column:135}}],line:27},1:{loc:{start:{line:28,column:6},end:{line:34,column:7}},type:"if",locations:[{start:{line:28,column:6},end:{line:34,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:28},2:{loc:{start:{line:36,column:4},end:{line:36,column:92}},type:"binary-expr",locations:[{start:{line:36,column:4},end:{line:36,column:21}},{start:{line:36,column:25},end:{line:36,column:40}},{start:{line:36,column:60},end:{line:36,column:92}}],line:36}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyRow.tsx"],names:["DetailPanel","BodyCell","BodyRow","row","table","getState","options","renderDetailPanel","onRowClick","setActiveRowId","getVisibleCells","getIsExpanded","getIsSelected","id","activeRowId","hasOnRowClick","undefined","map","cell"],mappings:"AAuBI,mBAaM,KAbN;AApBJ,OAAOA,iBAAiB;AACxB,OAAOC,cAAc;AAErB,MAAMC,UAAU,CAAK;AAAA,EACnBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,MAAmBC;AAAAA,IAAW;AAAA,IACzCC;AAAAA,EACF,IAAIL;AACJ,QAAM;AAAA,IAAEM;AAAAA,IAAiBC;AAAAA,IAAeC;AAAAA,IAAeC;AAAAA,EAAG,IAAIV;AAC9D,QAAM;AAAA,IAAEW;AAAAA,EAAY,IAAIT,SAAS;AACjC,QAAMU,gBAAgB,OAAOP,eAAe;AAE5C,SACE,iCACE;AAAA,wBAAC,QACC,WAAU,kCACV,eAAaO,gBAAgBF,OAAOC,cAAcE,QAClD,iBAAeJ,cAAc,GAC7B,SAAS,MAAM;AACb,UAAIG,eAAe;AACjBN,uBAAeI,EAAE;AACjBL,mBAAW;AAAA,UAAEL;AAAAA,UAAKC;AAAAA,QAAM,CAAC;AAAA,MAC3B;AAAA,IACF,GAECM,0BAAgB,EAAEO,IAAKC,UACtB,oBAAC,YAAuB,MAAY,SAArBA,KAAKL,GACrB,GACH;AAAA,IACCN,qBAAqBI,cAAc,KAClC,oBAAC,eAAY,KAAU,OACxB;AAAA,KACH;AAEJ;AAEA,eAAeT;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ad9bb2e9ce1672683e61718f37877901671ee232"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return z=function(){return r},r}z();z().s[0]++;const _n=({row:e,table:a})=>{z().f[0]++;const{getState:n,options:{renderDetailPanel:t,onRowClick:l},setActiveRowId:o}=(z().s[1]++,a),{getVisibleCells:r,getIsExpanded:u,getIsSelected:i,id:c}=(z().s[2]++,e),{activeRowId:A}=(z().s[3]++,n()),p=(z().s[4]++,typeof l=="function");return z().s[5]++,m.jsxs(m.Fragment,{children:[m.jsx("tr",{className:"ds-table-body-row ds-table-row","data-active":p?(z().b[0][0]++,c===A):(z().b[0][1]++,void 0),"data-selected":i(),onClick:()=>{z().f[1]++,z().s[6]++,p?(z().b[1][0]++,z().s[7]++,o(c),z().s[8]++,l({row:e,table:a})):z().b[1][1]++},children:r().map(D=>(z().f[2]++,z().s[9]++,m.jsx(Kn,{cell:D,table:a},D.id)))}),(z().b[2][0]++,t&&(z().b[2][1]++,u())&&(z().b[2][2]++,m.jsx(Pn,{row:e,table:a})))]})};z().s[10]++;_n.__docgenInfo={description:"",methods:[],displayName:"BodyRow",props:{row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function le(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/Body.tsx",a="3f40fed29695002a25c84dbb00977eff3a3ff688",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/Body.tsx",statementMap:{0:{start:{line:7,column:13},end:{line:10,column:60}},1:{start:{line:11,column:13},end:{line:40,column:1}},2:{start:{line:20,column:6},end:{line:20,column:11}},3:{start:{line:23,column:6},end:{line:23,column:19}},4:{start:{line:24,column:2},end:{line:39,column:96}},5:{start:{line:39,column:55},end:{line:39,column:91}},6:{start:{line:43,column:0},end:{line:60,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:13},end:{line:11,column:14}},loc:{start:{line:13,column:6},end:{line:40,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:39,column:30},end:{line:39,column:31}},loc:{start:{line:39,column:55},end:{line:39,column:91}},line:39}},branchMap:{0:{loc:{start:{line:24,column:78},end:{line:39,column:92}},type:"cond-expr",locations:[{start:{line:24,column:109},end:{line:39,column:18}},{start:{line:39,column:21},end:{line:39,column:92}}],line:24},1:{loc:{start:{line:28,column:152},end:{line:39,column:6}},type:"binary-expr",locations:[{start:{line:28,column:152},end:{line:30,column:4}},{start:{line:30,column:24},end:{line:39,column:6}}],line:28}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/Body.tsx"],names:["styled","Padbox","Stack","Surface","Paragraph","Text","BodyRow","List","ul","withConfig","displayName","componentId","Body","table","getRowModel","getVisibleLeafColumns","options","renderNoDataFallback","rows","length","display","flex","map","row","id"],mappings:"AA+BoB,cAKE,YALF;AA9BpB,OAAOA,YAAY;AAEnB,SAASC,QAAQC,OAAOC,eAAe;AACvC,SAASC,iBAAiB;AAC1B,SAASC,YAAY;AAErB,OAAOC,aAAa;AAEpB,MAAMC,OAAOP,OAAOQ,GAAEC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAGrB,EAAA,CAAA,sDAAA,CAAA;AAED,MAAMC,OAAO,CAAK;AAAA,EAAEC;AAAuC,MAAM;AAC/D,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,IAAqB;AAAA,EAClC,IAAIJ;AACJ,QAAM;AAAA,IAAEK;AAAAA,EAAK,IAAIJ,YAAY;AAE7B,SACE,oBAAC,WAAM,WAAU,iBACd,WAACI,KAAKC,SACL,oBAAC,QAAG,OAAO;AAAA,IAAEC,SAAS;AAAA,EAAO,GAC3B,8BAAC,QAAG,SAASL,sBAAsB,EAAEI,QAAQ,OAAO;AAAA,IAAEE,MAAM;AAAA,EAAE,GAC5D,8BAAC,WAAQ,YAAW,SAAQ,QAAO,QACjC,8BAAC,UAAO,aAAY,MACjBJ,iCAAuB;AAAA,IAAEJ;AAAAA,EAAM,CAAC,KAC/B,qBAAC,SAAM,KAAI,MACT;AAAA,wBAAC,QAAK,IAAG,KAAI,MAAK,MAAK,QAAM,MAAA,8BAE7B;AAAA,IACA,qBAAC,aAAU,IAAG,OAAM,SAAQ,aAAW;AAAA;AAAA,MAErC,qBAAC,QACC;AAAA,4BAAC,QAAG,mCAAqB;AAAA,QACzB,oBAAC,QAAG,yDAA2C;AAAA,SACjD;AAAA,OACF;AAAA,KACF,GAEJ,GACF,GACF,GACF,IAEAK,KAAKI,IAAKC,SAAQ,oBAAC,WAAqB,KAAU,SAAlBA,IAAIC,GAA8B,GAEtE;AAEJ;AAEA,eAAeZ;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3f40fed29695002a25c84dbb00977eff3a3ff688"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return le=function(){return r},r}le();const Ht=(le().s[0]++,ve.ul.withConfig({displayName:"Body__List",componentId:"sc-u1ch7l-0"})(["list-style-type:initial;padding-inline-start:1.5rem;"]));le().s[1]++;const Tn=({table:e})=>{le().f[0]++;const{getRowModel:a,getVisibleLeafColumns:n,options:{renderNoDataFallback:t}}=(le().s[2]++,e),{rows:l}=(le().s[3]++,a());return le().s[4]++,m.jsx("tbody",{className:"ds-table-body",children:l.length?(le().b[0][1]++,l.map(o=>(le().f[1]++,le().s[5]++,m.jsx(_n,{row:o,table:e},o.id)))):(le().b[0][0]++,m.jsx("tr",{style:{display:"flex"},children:m.jsx("td",{colSpan:n().length,style:{flex:1},children:m.jsx(an,{background:"white",radius:"none",children:m.jsx(Ve,{paddingSize:"xl",children:(le().b[1][0]++,(t==null?void 0:t({table:e}))??(le().b[1][1]++,m.jsxs(Me,{gap:"sm",children:[m.jsx(Fe,{as:"p",size:"lg",isBold:!0,children:"No results found"}),m.jsxs(ca,{as:"div",variant:"secondary",children:["This may happen because:",m.jsxs(Ht,{children:[m.jsx("li",{children:"the data set is empty"}),m.jsx("li",{children:"none of the items match your active filters"})]})]})]})))})})})}))})};le().s[6]++;Tn.__docgenInfo={description:"",methods:[],displayName:"Body",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function f(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/ColumnActionsMenu.tsx",a="e5599290f81a57500436e1b6a8c379300c827569",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/ColumnActionsMenu.tsx",statementMap:{0:{start:{line:5,column:26},end:{line:71,column:1}},1:{start:{line:23,column:6},end:{line:23,column:11}},2:{start:{line:26,column:6},end:{line:26,column:12}},3:{start:{line:30,column:6},end:{line:30,column:16}},4:{start:{line:31,column:25},end:{line:31,column:49}},5:{start:{line:32,column:21},end:{line:34,column:3}},6:{start:{line:33,column:4},end:{line:33,column:33}},7:{start:{line:35,column:26},end:{line:37,column:3}},8:{start:{line:36,column:4},end:{line:36,column:26}},9:{start:{line:38,column:27},end:{line:40,column:3}},10:{start:{line:39,column:4},end:{line:39,column:35}},11:{start:{line:41,column:26},end:{line:43,column:3}},12:{start:{line:42,column:4},end:{line:42,column:20}},13:{start:{line:44,column:32},end:{line:50,column:3}},14:{start:{line:45,column:4},end:{line:48,column:8}},15:{start:{line:45,column:34},end:{line:48,column:5}},16:{start:{line:49,column:4},end:{line:49,column:23}},17:{start:{line:51,column:31},end:{line:53,column:3}},18:{start:{line:52,column:4},end:{line:52,column:41}},19:{start:{line:52,column:35},end:{line:52,column:39}},20:{start:{line:54,column:31},end:{line:56,column:3}},21:{start:{line:55,column:4},end:{line:55,column:39}},22:{start:{line:55,column:33},end:{line:55,column:37}},23:{start:{line:57,column:28},end:{line:69,column:668}},24:{start:{line:57,column:232},end:{line:57,column:249}},25:{start:{line:57,column:468},end:{line:57,column:484}},26:{start:{line:58,column:168},end:{line:58,column:191}},27:{start:{line:67,column:153},end:{line:67,column:175}},28:{start:{line:69,column:214},end:{line:69,column:237}},29:{start:{line:70,column:2},end:{line:70,column:268}},30:{start:{line:74,column:0},end:{line:1228,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:26},end:{line:5,column:27}},loc:{start:{line:8,column:6},end:{line:71,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:32,column:21},end:{line:32,column:22}},loc:{start:{line:32,column:33},end:{line:34,column:3}},line:32},2:{name:"(anonymous_2)",decl:{start:{line:35,column:26},end:{line:35,column:27}},loc:{start:{line:35,column:32},end:{line:37,column:3}},line:35},3:{name:"(anonymous_3)",decl:{start:{line:38,column:27},end:{line:38,column:28}},loc:{start:{line:38,column:33},end:{line:40,column:3}},line:38},4:{name:"(anonymous_4)",decl:{start:{line:41,column:26},end:{line:41,column:27}},loc:{start:{line:41,column:35},end:{line:43,column:3}},line:41},5:{name:"(anonymous_5)",decl:{start:{line:44,column:32},end:{line:44,column:33}},loc:{start:{line:44,column:38},end:{line:50,column:3}},line:44},6:{name:"(anonymous_6)",decl:{start:{line:45,column:24},end:{line:45,column:25}},loc:{start:{line:45,column:34},end:{line:48,column:5}},line:45},7:{name:"(anonymous_7)",decl:{start:{line:51,column:31},end:{line:51,column:32}},loc:{start:{line:51,column:37},end:{line:53,column:3}},line:51},8:{name:"(anonymous_8)",decl:{start:{line:52,column:26},end:{line:52,column:27}},loc:{start:{line:52,column:35},end:{line:52,column:39}},line:52},9:{name:"(anonymous_9)",decl:{start:{line:54,column:31},end:{line:54,column:32}},loc:{start:{line:54,column:37},end:{line:56,column:3}},line:54},10:{name:"(anonymous_10)",decl:{start:{line:55,column:24},end:{line:55,column:25}},loc:{start:{line:55,column:33},end:{line:55,column:37}},line:55},11:{name:"(anonymous_11)",decl:{start:{line:57,column:226},end:{line:57,column:227}},loc:{start:{line:57,column:232},end:{line:57,column:249}},line:57},12:{name:"(anonymous_12)",decl:{start:{line:57,column:462},end:{line:57,column:463}},loc:{start:{line:57,column:468},end:{line:57,column:484}},line:57},13:{name:"(anonymous_13)",decl:{start:{line:58,column:162},end:{line:58,column:163}},loc:{start:{line:58,column:168},end:{line:58,column:191}},line:58},14:{name:"(anonymous_14)",decl:{start:{line:67,column:147},end:{line:67,column:148}},loc:{start:{line:67,column:153},end:{line:67,column:175}},line:67},15:{name:"(anonymous_15)",decl:{start:{line:69,column:208},end:{line:69,column:209}},loc:{start:{line:69,column:214},end:{line:69,column:237}},line:69}},branchMap:{0:{loc:{start:{line:57,column:32},end:{line:57,column:900}},type:"cond-expr",locations:[{start:{line:57,column:71},end:{line:57,column:895}},{start:{line:57,column:898},end:{line:57,column:900}}],line:57},1:{loc:{start:{line:57,column:32},end:{line:57,column:68}},type:"binary-expr",locations:[{start:{line:57,column:32},end:{line:57,column:45}},{start:{line:57,column:49},end:{line:57,column:68}}],line:57},2:{loc:{start:{line:57,column:542},end:{line:57,column:786}},type:"binary-expr",locations:[{start:{line:57,column:542},end:{line:57,column:572}},{start:{line:57,column:592},end:{line:57,column:786}}],line:57},3:{loc:{start:{line:57,column:788},end:{line:57,column:894}},type:"cond-expr",locations:[{start:{line:57,column:842},end:{line:57,column:885}},{start:{line:57,column:888},end:{line:57,column:894}}],line:57},4:{loc:{start:{line:57,column:788},end:{line:57,column:823}},type:"binary-expr",locations:[{start:{line:57,column:788},end:{line:57,column:800}},{start:{line:57,column:804},end:{line:57,column:823}}],line:57},5:{loc:{start:{line:57,column:905},end:{line:57,column:1305}},type:"cond-expr",locations:[{start:{line:57,column:943},end:{line:57,column:1300}},{start:{line:57,column:1303},end:{line:57,column:1305}}],line:57},6:{loc:{start:{line:57,column:905},end:{line:57,column:940}},type:"binary-expr",locations:[{start:{line:57,column:905},end:{line:57,column:917}},{start:{line:57,column:921},end:{line:57,column:940}}],line:57},7:{loc:{start:{line:57,column:1166},end:{line:57,column:1299}},type:"cond-expr",locations:[{start:{line:57,column:1247},end:{line:57,column:1290}},{start:{line:57,column:1293},end:{line:57,column:1299}}],line:57},8:{loc:{start:{line:57,column:1166},end:{line:57,column:1228}},type:"binary-expr",locations:[{start:{line:57,column:1166},end:{line:57,column:1179}},{start:{line:57,column:1183},end:{line:57,column:1203}},{start:{line:57,column:1207},end:{line:57,column:1228}}],line:57},9:{loc:{start:{line:57,column:1310},end:{line:57,column:1680}},type:"cond-expr",locations:[{start:{line:57,column:1372},end:{line:57,column:1675}},{start:{line:57,column:1678},end:{line:57,column:1680}}],line:57},10:{loc:{start:{line:57,column:1310},end:{line:57,column:1369}},type:"binary-expr",locations:[{start:{line:57,column:1310},end:{line:57,column:1322}},{start:{line:57,column:1326},end:{line:57,column:1345}},{start:{line:57,column:1349},end:{line:57,column:1369}}],line:57},11:{loc:{start:{line:57,column:1562},end:{line:57,column:1674}},type:"cond-expr",locations:[{start:{line:57,column:1622},end:{line:57,column:1665}},{start:{line:57,column:1668},end:{line:57,column:1674}}],line:57},12:{loc:{start:{line:57,column:1562},end:{line:57,column:1603}},type:"binary-expr",locations:[{start:{line:57,column:1562},end:{line:57,column:1581}},{start:{line:57,column:1585},end:{line:57,column:1603}}],line:57},13:{loc:{start:{line:57,column:1685},end:{line:69,column:8}},type:"cond-expr",locations:[{start:{line:57,column:1729},end:{line:69,column:3}},{start:{line:69,column:6},end:{line:69,column:8}}],line:57},14:{loc:{start:{line:57,column:1685},end:{line:57,column:1726}},type:"binary-expr",locations:[{start:{line:57,column:1685},end:{line:57,column:1704}},{start:{line:57,column:1708},end:{line:57,column:1726}}],line:57},15:{loc:{start:{line:68,column:4},end:{line:68,column:120}},type:"cond-expr",locations:[{start:{line:68,column:68},end:{line:68,column:111}},{start:{line:68,column:114},end:{line:68,column:120}}],line:68},16:{loc:{start:{line:68,column:4},end:{line:68,column:49}},type:"binary-expr",locations:[{start:{line:68,column:4},end:{line:68,column:24}},{start:{line:68,column:28},end:{line:68,column:49}}],line:68},17:{loc:{start:{line:69,column:13},end:{line:69,column:395}},type:"cond-expr",locations:[{start:{line:69,column:61},end:{line:69,column:390}},{start:{line:69,column:393},end:{line:69,column:395}}],line:69},18:{loc:{start:{line:69,column:13},end:{line:69,column:58}},type:"binary-expr",locations:[{start:{line:69,column:13},end:{line:69,column:33}},{start:{line:69,column:37},end:{line:69,column:58}}],line:69},19:{loc:{start:{line:69,column:298},end:{line:69,column:389}},type:"cond-expr",locations:[{start:{line:69,column:337},end:{line:69,column:380}},{start:{line:69,column:383},end:{line:69,column:389}}],line:69},20:{loc:{start:{line:69,column:400},end:{line:69,column:651}},type:"cond-expr",locations:[{start:{line:69,column:423},end:{line:69,column:646}},{start:{line:69,column:649},end:{line:69,column:651}}],line:69},21:{loc:{start:{line:69,column:514},end:{line:69,column:554}},type:"cond-expr",locations:[{start:{line:69,column:533},end:{line:69,column:543}},{start:{line:69,column:546},end:{line:69,column:554}}],line:69}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0,0],9:[0,0],10:[0,0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/ColumnActionsMenu.tsx"],names:["DropdownMenu","MenuContent","MenuItem","MenuSeparator","getHidableColumns","ColumnActionsMenu","header","table","getState","options","enableColumnOrdering","enableColumnPinning","enableColumnResizing","enableFullScreenMode","enableHiding","enableSorting","enableSortingRemoval","setColumnSizingInfo","setShowColumnSettings","setIsFullscreenMode","column","columnSizing","isFullscreenMode","hidableColumns","handleSort","isDesc","toggleSorting","handleClearSort","clearSorting","handleHideColumn","toggleVisibility","handlePinColumn","dir","pin","handleResetColumnSize","old","isResizingColumn","resetSize","handleColumnSettings","handleFullscreenMode","columnActionsMenu","getCanSort","getIsSorted","getCanHide","undefined","length","getCanPin","getIsPinned","getCanResize","id","filter","Boolean"],mappings:"AAoEU;AAlEV,YAAYA,kBAAkB;AAG9B,SACEC,aACAC,UACAC,qBACK;AACP,SAASC,yBAAyB;AAElC,MAAMC,oBAAoB,CAAK;AAAA,EAC7BC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC;AAAAA,IACAC,SAAS;AAAA,MACPC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,IACF;AAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIZ;AACJ,QAAM;AAAA,IAAEa;AAAAA,EAAO,IAAId;AACnB,QAAM;AAAA,IAAEe;AAAAA,IAAcC;AAAAA,EAAiB,IAAId,SAAS;AAEpD,QAAMe,iBAAiBnB,kBAAkBG,KAAK;AAE9C,QAAMiB,aAAaA,CAACC,WAAoB;AACtCL,WAAOM,cAAcD,MAAM;AAAA,EAC7B;AACA,QAAME,kBAAkBA,MAAM;AAC5BP,WAAOQ,aAAa;AAAA,EACtB;AACA,QAAMC,mBAAmBA,MAAM;AAC7BT,WAAOU,iBAAiB,KAAK;AAAA,EAC/B;AACA,QAAMC,kBAAkBA,CAACC,QAA+B;AACtDZ,WAAOa,IAAID,GAAG;AAAA,EAChB;AACA,QAAME,wBAAwBA,MAAM;AAClCjB,wBAAqBkB,UAAS;AAAA,MAC5B,GAAGA;AAAAA,MACHC,kBAAkB;AAAA,IACpB,EAAE;AACFhB,WAAOiB,UAAU;AAAA,EACnB;AACA,QAAMC,uBAAuBA,MAAM;AACjCpB,0BAAuBiB,SAAQ,CAACA,GAAG;AAAA,EACrC;AACA,QAAMI,uBAAuBA,MAAM;AACjCpB,wBAAqBgB,SAAQ,CAACA,GAAG;AAAA,EACnC;AAEA,QAAMK,oBAAoB,CACxB,GAAIzB,iBAAiBK,OAAOqB,WAAW,IACnC,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,WACT,YAAYrB,OAAOsB,YAAY,MAAM,OACrC,SAAS,MAAMlB,WAAW,KAAK,GAAE,8BAJ7B,qBAON,GACA,oBAAC,YAEC,WAAU,qCACV,UAAS,aACT,YAAYJ,OAAOsB,YAAY,MAAM,QACrC,SAAS,MAAMlB,WAAW,IAAI,GAAE,+BAJ5B,sBAON,GACAR,yBAAyB,SACvB,oBAAC,YAEC,WAAU,qCACV,UAAS,SACT,YAAY,CAACI,OAAOsB,YAAY,GAChC,SAASf,iBAAgB,0BAJrB,uBAON,GAEFb,gBAAgBM,OAAOuB,WAAW,IAChC,oBAAC,mBAAkB,mBAAmB,IACpCC,MAAS,IAEf,CAAE,GACN,GAAI9B,gBAAgBM,OAAOuB,WAAW,IAClC,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,aACT,YAAYpB,eAAesB,WAAW,GACtC,SAAShB,kBAAiB,2BAJtB,qBAON,GACA,CAACf,gBAAgB,CAACH,uBAAuB,CAACD,uBACxC,oBAAC,mBAAkB,mBAAsB,IACvCkC,MAAS,IAEf,CAAA,GACJ,GAAI9B,gBAAgBH,uBAAuBD,uBACvC,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,aACT,SAAS4B,sBAAqB,+BAH1B,qBAMN,GACA3B,uBAAuBS,OAAO0B,UAAU,IACtC,oBAAC,mBAAkB,mBAAsB,IACvCF,MAAS,IAEf,CAAE,GACN,GAAIjC,uBAAuBS,OAAO0B,UAAU,IACxC;AAAA,IACE,oBAAC,YAEC,WAAU,qCACV,UAAS,cACT,YAAY1B,OAAO2B,YAAY,MAAM,QACrC,SAAS,MAAMhB,gBAAgB,MAAM,GAAE,0BAJnC,qBAON;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,IASA,oBAAC,YAEC,WAAU,qCACV,UAAS,SACT,YAAY,CAACX,OAAO2B,YAAY,GAChC,SAAS,MAAMhB,gBAAgB,KAAK,GAAE,4BAJlC,sBAON;AAAA,IACAnB,wBAAwBQ,OAAO4B,aAAa,IAC1C,oBAAC,mBAAkB,mBAAsB,IACvCJ;AAAAA,EAAS,IAEf,CAAE,GACN,GAAIhC,wBAAwBQ,OAAO4B,aAAa,IAC5C,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,SACT,YAAY,CAAC3B,aAAaD,OAAO6B,EAAE,GACnC,SAAS,MAAMf,sBAAsB,GAAE,iCAJnC,uBAON,GACArB,uBACE,oBAAC,mBAAkB,mBAAsB,IACvC+B,MAAS,IAEf,IACJ,GAAI/B,uBACA,CACE,oBAAC,YAEC,WAAU,qCACV,UAAUS,mBAAmB,aAAa,UAC1C,SAASiB,sBAAqB,kCAH1B,uBAMN,CAAW,IAEb,CAAA,CAAG,EACPW,OAAOC,OAAO;AAEhB,SACE,oBAAC,aAAa,QAAb,EACC,8BAAC,eACC,eAAe7B,kBACf,OAAM,SACN,WAAU,wCACV,kBAAkB,IAClB,YAAY,GAEXkB,6BACH,GACF;AAEJ;AACA,eAAenC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e5599290f81a57500436e1b6a8c379300c827569"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return f=function(){return r},r}f();f().s[0]++;const Yn=({header:e,table:a})=>{f().f[0]++;const{getState:n,options:{enableColumnOrdering:t,enableColumnPinning:l,enableColumnResizing:o,enableFullScreenMode:r,enableHiding:u,enableSorting:i,enableSortingRemoval:c},setColumnSizingInfo:A,setShowColumnSettings:p,setIsFullscreenMode:D}=(f().s[1]++,a),{column:s}=(f().s[2]++,e),{columnSizing:C,isFullscreenMode:g}=(f().s[3]++,n()),v=(f().s[4]++,Nn(a));f().s[5]++;const w=L=>{f().f[1]++,f().s[6]++,s.toggleSorting(L)};f().s[7]++;const S=()=>{f().f[2]++,f().s[8]++,s.clearSorting()};f().s[9]++;const R=()=>{f().f[3]++,f().s[10]++,s.toggleVisibility(!1)};f().s[11]++;const P=L=>{f().f[4]++,f().s[12]++,s.pin(L)};f().s[13]++;const O=()=>{f().f[5]++,f().s[14]++,A(L=>(f().f[6]++,f().s[15]++,{...L,isResizingColumn:!1})),f().s[16]++,s.resetSize()};f().s[17]++;const F=()=>{f().f[7]++,f().s[18]++,p(L=>(f().f[8]++,f().s[19]++,!L))};f().s[20]++;const N=()=>{f().f[9]++,f().s[21]++,D(L=>(f().f[10]++,f().s[22]++,!L))},U=(f().s[23]++,[...(f().b[1][0]++,i&&(f().b[1][1]++,s.getCanSort())?(f().b[0][0]++,[m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"sort-up",isDisabled:s.getIsSorted()==="asc",onClick:()=>(f().f[11]++,f().s[24]++,w(!1)),children:"Ascending sort"},"col-action-sort-asc"),m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"sort-down",isDisabled:s.getIsSorted()==="desc",onClick:()=>(f().f[12]++,f().s[25]++,w(!0)),children:"Descending sort"},"col-action-sort-desc"),(f().b[2][0]++,c!==!1&&(f().b[2][1]++,m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!s.getIsSorted(),onClick:S,children:"Clear sort"},"col-action-sort-reset"))),(f().b[4][0]++,u&&(f().b[4][1]++,s.getCanHide())?(f().b[3][0]++,m.jsx(Ie,{},"col-action-sep-01")):(f().b[3][1]++,void 0))]):(f().b[0][1]++,[])),...(f().b[6][0]++,u&&(f().b[6][1]++,s.getCanHide())?(f().b[5][0]++,[m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"eye-slash",isDisabled:v.length===1,onClick:R,children:"Hide column"},"col-action-hide-col"),(f().b[8][0]++,!u&&(f().b[8][1]++,!l)&&(f().b[8][2]++,!t)?(f().b[7][0]++,m.jsx(Ie,{},"col-action-sep-02")):(f().b[7][1]++,void 0))]):(f().b[5][1]++,[])),...(f().b[10][0]++,u||(f().b[10][1]++,l)||(f().b[10][2]++,t)?(f().b[9][0]++,[m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"columns-3",onClick:F,children:"Column settings"},"col-action-settings"),(f().b[12][0]++,l&&(f().b[12][1]++,s.getCanPin())?(f().b[11][0]++,m.jsx(Ie,{},"col-action-sep-03")):(f().b[11][1]++,void 0))]):(f().b[9][1]++,[])),...(f().b[14][0]++,l&&(f().b[14][1]++,s.getCanPin())?(f().b[13][0]++,[m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"thumbstack",isDisabled:s.getIsPinned()==="left",onClick:()=>(f().f[13]++,f().s[26]++,P("left")),children:"Pin column"},"col-action-pin-left"),m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!s.getIsPinned(),onClick:()=>(f().f[14]++,f().s[27]++,P(!1)),children:"Unpin column"},"col-action-pin-reset"),(f().b[16][0]++,o&&(f().b[16][1]++,s.getCanResize())?(f().b[15][0]++,m.jsx(Ie,{},"col-action-sep-04")):(f().b[15][1]++,void 0))]):(f().b[13][1]++,[])),...(f().b[18][0]++,o&&(f().b[18][1]++,s.getCanResize())?(f().b[17][0]++,[m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!C[s.id],onClick:()=>(f().f[15]++,f().s[28]++,O()),children:"Reset column size"},"col-action-size-reset"),r?(f().b[19][0]++,m.jsx(Ie,{},"col-action-sep-05")):(f().b[19][1]++,void 0)]):(f().b[17][1]++,[])),...r?(f().b[20][0]++,[m.jsx(ce,{className:"ds-table-column-actions-menu-item",iconName:g?(f().b[21][0]++,"compress"):(f().b[21][1]++,"expand"),onClick:N,children:"Toggle full screen"},"col-action-fullscreen")]):(f().b[20][1]++,[])].filter(Boolean));return f().s[29]++,m.jsx(bn,{children:m.jsx(Dn,{$isFullscreen:g,align:"start",className:"ds-table-column-actions-menu-content",collisionPadding:10,sideOffset:5,children:U})})};f().s[30]++;Yn.__docgenInfo={description:"",methods:[],displayName:"ColumnActionsMenu",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ue(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellColumnActionsButton.tsx",a="75eee4859d4d85877e864a477d55b25e7cd5dedd",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellColumnActionsButton.tsx",statementMap:{0:{start:{line:5,column:38},end:{line:20,column:1}},1:{start:{line:11,column:6},end:{line:11,column:12}},2:{start:{line:14,column:6},end:{line:14,column:12}},3:{start:{line:15,column:20},end:{line:15,column:33}},4:{start:{line:16,column:2},end:{line:19,column:10}},5:{start:{line:23,column:0},end:{line:1177,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:38},end:{line:5,column:39}},loc:{start:{line:8,column:6},end:{line:20,column:1}},line:8}},branchMap:{0:{loc:{start:{line:17,column:174},end:{line:17,column:257}},type:"cond-expr",locations:[{start:{line:17,column:197},end:{line:17,column:208}},{start:{line:17,column:211},end:{line:17,column:257}}],line:17},1:{loc:{start:{line:17,column:211},end:{line:17,column:257}},type:"cond-expr",locations:[{start:{line:17,column:233},end:{line:17,column:242}},{start:{line:17,column:245},end:{line:17,column:257}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellColumnActionsButton.tsx"],names:["DropdownMenu","ColumnActionsMenu","IconButton","HeaderCellColumnActionsButton","header","table","column","getIsSorted","direction"],mappings:"AAkBM,SAEI,KAFJ;AAlBN,YAAYA,kBAAkB;AAG9B,OAAOC,uBAAuB;AAC9B,OAAOC,gBAAgB;AAEvB,MAAMC,gCAAgC,CAAK;AAAA,EACzCC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAO,IAAIF;AACnB,QAAM;AAAA,IAAEG;AAAAA,EAAY,IAAID;AACxB,QAAME,YAAYD,YAAY;AAC9B,SACE,oBAAC,SAAI,WAAU,sDACb,+BAAC,aAAa,MAAb,EACC;AAAA,wBAAC,aAAa,SAAb,EAAqB,SAAO,MAC3B,8BAAC,cACC,WAAU,8CACV,UACEC,cAAc,SACV,cACAA,cAAc,QACd,YACA,cAEN,OAAM,kBACN,MAAK,MACL,SAAQ,SAAO,GAEnB;AAAA,IAEA,oBAAC,qBAAkB,QAAgB,OAAa;AAAA,KAClD,GACF;AAEJ;AAEA,eAAeL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"75eee4859d4d85877e864a477d55b25e7cd5dedd"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ue=function(){return r},r}ue();ue().s[0]++;const Qn=({header:e,table:a})=>{ue().f[0]++;const{column:n}=(ue().s[1]++,e),{getIsSorted:t}=(ue().s[2]++,n),l=(ue().s[3]++,t());return ue().s[4]++,m.jsx("div",{className:"ds-table-header-cell-column-actions-button-wrapper",children:m.jsxs(pn,{children:[m.jsx(gn,{asChild:!0,children:m.jsx(de,{className:"ds-table-header-cell-column-actions-button",iconName:l==="desc"?(ue().b[0][0]++,"sort-down"):(ue().b[0][1]++,l==="asc"?(ue().b[1][0]++,"sort-up"):(ue().b[1][1]++,"ellipsis-v")),label:"Column actions",size:"sm",variant:"ghost"})}),m.jsx(Yn,{header:e,table:a})]})})};ue().s[5]++;Qn.__docgenInfo={description:"",methods:[],displayName:"HeaderCellColumnActionsButton",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function x(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellResizeHandler.tsx",a="9908df52cc791855d75d9e6106adb4a7db96f4e6",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellResizeHandler.tsx",statementMap:{0:{start:{line:2,column:32},end:{line:62,column:1}},1:{start:{line:12,column:6},end:{line:12,column:11}},2:{start:{line:17,column:6},end:{line:17,column:12}},3:{start:{line:21,column:6},end:{line:21,column:12}},4:{start:{line:22,column:18},end:{line:22,column:60}},5:{start:{line:23,column:18},end:{line:23,column:60}},6:{start:{line:24,column:32},end:{line:30,column:3}},7:{start:{line:25,column:4},end:{line:28,column:8}},8:{start:{line:25,column:34},end:{line:28,column:5}},9:{start:{line:29,column:4},end:{line:29,column:23}},10:{start:{line:31,column:37},end:{line:46,column:3}},11:{start:{line:34,column:8},end:{line:34,column:9}},12:{start:{line:35,column:4},end:{line:36,column:13}},13:{start:{line:36,column:6},end:{line:36,column:13}},14:{start:{line:37,column:4},end:{line:45,column:7}},15:{start:{line:38,column:23},end:{line:38,column:52}},16:{start:{line:39,column:27},end:{line:39,column:112}},17:{start:{line:40,column:23},end:{line:40,column:107}},18:{start:{line:41,column:6},end:{line:44,column:8}},19:{start:{line:47,column:2},end:{line:61,column:4}},20:{start:{line:65,column:0},end:{line:1219,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:32},end:{line:2,column:33}},loc:{start:{line:5,column:6},end:{line:62,column:1}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:24,column:32},end:{line:24,column:33}},loc:{start:{line:24,column:38},end:{line:30,column:3}},line:24},2:{name:"(anonymous_2)",decl:{start:{line:25,column:24},end:{line:25,column:25}},loc:{start:{line:25,column:34},end:{line:28,column:5}},line:25},3:{name:"(anonymous_3)",decl:{start:{line:31,column:37},end:{line:31,column:38}},loc:{start:{line:31,column:44},end:{line:46,column:3}},line:31},4:{name:"(anonymous_4)",decl:{start:{line:37,column:20},end:{line:37,column:21}},loc:{start:{line:37,column:29},end:{line:45,column:5}},line:37}},branchMap:{0:{loc:{start:{line:22,column:18},end:{line:22,column:60}},type:"binary-expr",locations:[{start:{line:22,column:18},end:{line:22,column:35}},{start:{line:22,column:39},end:{line:22,column:60}}],line:22},1:{loc:{start:{line:23,column:18},end:{line:23,column:60}},type:"binary-expr",locations:[{start:{line:23,column:18},end:{line:23,column:35}},{start:{line:23,column:39},end:{line:23,column:60}}],line:23},2:{loc:{start:{line:35,column:4},end:{line:36,column:13}},type:"if",locations:[{start:{line:35,column:4},end:{line:36,column:13}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},3:{loc:{start:{line:35,column:8},end:{line:35,column:51}},type:"binary-expr",locations:[{start:{line:35,column:8},end:{line:35,column:27}},{start:{line:35,column:31},end:{line:35,column:51}}],line:35},4:{loc:{start:{line:38,column:23},end:{line:38,column:52}},type:"binary-expr",locations:[{start:{line:38,column:23},end:{line:38,column:39}},{start:{line:38,column:43},end:{line:38,column:52}}],line:38},5:{loc:{start:{line:39,column:27},end:{line:39,column:112}},type:"cond-expr",locations:[{start:{line:39,column:49},end:{line:39,column:62}},{start:{line:39,column:65},end:{line:39,column:112}}],line:39},6:{loc:{start:{line:39,column:65},end:{line:39,column:112}},type:"cond-expr",locations:[{start:{line:39,column:88},end:{line:39,column:101}},{start:{line:39,column:104},end:{line:39,column:112}}],line:39},7:{loc:{start:{line:40,column:23},end:{line:40,column:107}},type:"cond-expr",locations:[{start:{line:40,column:49},end:{line:40,column:56}},{start:{line:40,column:59},end:{line:40,column:107}}],line:40},8:{loc:{start:{line:40,column:59},end:{line:40,column:107}},type:"cond-expr",locations:[{start:{line:40,column:85},end:{line:40,column:92}},{start:{line:40,column:95},end:{line:40,column:107}}],line:40}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellResizeHandler.tsx"],names:["HeaderCellResizeHandler","header","table","setColumnSizingInfo","setColumnSizing","options","defaultColumn","column","getResizeHandler","getSize","id","columnDef","minSize","maxSize","handleColumnSizeReset","old","isResizingColumn","resetSize","handleKeyboardColumnResize","e","key","oldValue","updatedValue","newValue"],mappings:"AAyDI;AArDJ,MAAMA,0BAA0B,CAAK;AAAA,EACnCC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,IAAc;AAAA,EAC3B,IAAIJ;AACJ,QAAM;AAAA,IAAEK;AAAAA,IAAQC;AAAAA,IAAkBC;AAAAA,EAAQ,IAAIR;AAC9C,QAAM;AAAA,IAAES;AAAAA,IAAIC;AAAAA,EAAU,IAAIJ;AAC1B,QAAMK,UAAUD,UAAUC,WAAWN,cAAcM;AACnD,QAAMC,UAAUF,UAAUE,WAAWP,cAAcO;AAEnD,QAAMC,wBAAwBA,MAAM;AAClCX,wBAAqBY,UAAS;AAAA,MAC5B,GAAGA;AAAAA,MACHC,kBAAkB;AAAA,IACpB,EAAE;AACFT,WAAOU,UAAU;AAAA,EACnB;AAEA,QAAMC,6BAA6BA,CAACC,MAAoC;AACtE,UAAM;AAAA,MAAEC;AAAAA,IAAI,IAAID;AAChB,QAAIC,QAAQ,eAAeA,QAAQ;AAAc;AAEjDhB,oBAAiBW,SAAQ;AACvB,YAAMM,WAAWN,MAAMR,OAAOG,EAAE,KAAKD,QAAQ;AAC7C,YAAMa,eACJF,QAAQ,cACJC,WAAW,KACXD,QAAQ,eACRC,WAAW,KACXA;AACN,YAAME,WACJD,gBAAgBT,UACZA,UACAS,gBAAgBV,UAChBA,UACAU;AAEN,aAAO;AAAA,QACL,GAAGP;AAAAA,QACH,CAACL,EAAE,GAAGa;AAAAA,MACR;AAAA,IACF,CAAC;AAAA,EACH;AAEA;AAAA;AAAA,IAEE;AAAA,MAAC;AAAA;AAAA,QACC,oBAAiB;AAAA,QACjB,WAAU;AAAA,QAEV,UAAU;AAAA,QACV,eAAeT;AAAAA,QACf,WAAWI;AAAAA,QACX,aAAaV,iBAAiB;AAAA,QAC9B,cAAcA,iBAAiB;AAAA;AAAA,IAAE;AAAA;AAGvC;AAEA,eAAeR;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9908df52cc791855d75d9e6106adb4a7db96f4e6"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return x=function(){return r},r}x();x().s[0]++;const zn=({header:e,table:a})=>{x().f[0]++;const{setColumnSizingInfo:n,setColumnSizing:t,options:{defaultColumn:l}}=(x().s[1]++,a),{column:o,getResizeHandler:r,getSize:u}=(x().s[2]++,e),{id:i,columnDef:c}=(x().s[3]++,o),A=(x().s[4]++,x().b[0][0]++,c.minSize??(x().b[0][1]++,l.minSize)),p=(x().s[5]++,x().b[1][0]++,c.maxSize??(x().b[1][1]++,l.maxSize));x().s[6]++;const D=()=>{x().f[1]++,x().s[7]++,n(C=>(x().f[2]++,x().s[8]++,{...C,isResizingColumn:!1})),x().s[9]++,o.resetSize()};x().s[10]++;const s=C=>{x().f[3]++;const{key:g}=(x().s[11]++,C);if(x().s[12]++,x().b[3][0]++,g!=="ArrowLeft"&&(x().b[3][1]++,g!=="ArrowRight")){x().b[2][0]++,x().s[13]++;return}else x().b[2][1]++;x().s[14]++,t(v=>{x().f[4]++;const w=(x().s[15]++,x().b[4][0]++,(v==null?void 0:v[o.id])??(x().b[4][1]++,u())),S=(x().s[16]++,g==="ArrowLeft"?(x().b[5][0]++,w-10):(x().b[5][1]++,g==="ArrowRight"?(x().b[6][0]++,w+10):(x().b[6][1]++,w))),R=(x().s[17]++,S>=p?(x().b[7][0]++,p):(x().b[7][1]++,S<=A?(x().b[8][0]++,A):(x().b[8][1]++,S)));return x().s[18]++,{...v,[i]:R}})};return x().s[19]++,m.jsx("hr",{"aria-orientation":"vertical",className:"ds-table-header-cell-resize-handler",tabIndex:0,onDoubleClick:D,onKeyDown:s,onMouseDown:r(),onTouchStart:r()})};x().s[20]++;zn.__docgenInfo={description:"",methods:[],displayName:"HeaderCellResizeHandler",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function M(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCell.tsx",a="b467b9181e7efc9c66339dd0e2cbd56c56240113",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCell.tsx",statementMap:{0:{start:{line:10,column:27},end:{line:13,column:2}},1:{start:{line:10,column:45},end:{line:13,column:1}},2:{start:{line:14,column:19},end:{line:73,column:1}},3:{start:{line:22,column:6},end:{line:22,column:11}},4:{start:{line:28,column:6},end:{line:28,column:12}},5:{start:{line:36,column:6},end:{line:36,column:12}},6:{start:{line:43,column:6},end:{line:43,column:15}},7:{start:{line:44,column:28},end:{line:44,column:109}},8:{start:{line:45,column:23},end:{line:49,column:4}},9:{start:{line:50,column:24},end:{line:50,column:88}},10:{start:{line:51,column:22},end:{line:51,column:58}},11:{start:{line:52,column:2},end:{line:72,column:571}},12:{start:{line:76,column:0},end:{line:1230,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:27},end:{line:10,column:28}},loc:{start:{line:10,column:45},end:{line:13,column:1}},line:10},1:{name:"(anonymous_1)",decl:{start:{line:14,column:19},end:{line:14,column:20}},loc:{start:{line:17,column:6},end:{line:73,column:1}},line:17}},branchMap:{0:{loc:{start:{line:11,column:24},end:{line:11,column:40}},type:"binary-expr",locations:[{start:{line:11,column:24},end:{line:11,column:35}},{start:{line:11,column:39},end:{line:11,column:40}}],line:11},1:{loc:{start:{line:44,column:28},end:{line:44,column:109}},type:"binary-expr",locations:[{start:{line:44,column:29},end:{line:44,column:48}},{start:{line:44,column:52},end:{line:44,column:73}},{start:{line:44,column:78},end:{line:44,column:109}}],line:44},2:{loc:{start:{line:50,column:46},end:{line:50,column:73}},type:"binary-expr",locations:[{start:{line:50,column:46},end:{line:50,column:61}},{start:{line:50,column:65},end:{line:50,column:73}}],line:50},3:{loc:{start:{line:63,column:15},end:{line:72,column:563}},type:"cond-expr",locations:[{start:{line:63,column:31},end:{line:63,column:35}},{start:{line:63,column:38},end:{line:72,column:563}}],line:63},4:{loc:{start:{line:63,column:38},end:{line:72,column:563}},type:"cond-expr",locations:[{start:{line:63,column:81},end:{line:72,column:6}},{start:{line:72,column:9},end:{line:72,column:563}}],line:63},5:{loc:{start:{line:68,column:14},end:{line:68,column:47}},type:"cond-expr",locations:[{start:{line:68,column:29},end:{line:68,column:38}},{start:{line:68,column:41},end:{line:68,column:47}}],line:68},6:{loc:{start:{line:70,column:4},end:{line:70,column:94}},type:"binary-expr",locations:[{start:{line:70,column:4},end:{line:70,column:21}},{start:{line:70,column:41},end:{line:70,column:94}}],line:70},7:{loc:{start:{line:71,column:4},end:{line:71,column:85}},type:"binary-expr",locations:[{start:{line:71,column:4},end:{line:71,column:18}},{start:{line:71,column:38},end:{line:71,column:85}}],line:71},8:{loc:{start:{line:72,column:9},end:{line:72,column:563}},type:"cond-expr",locations:[{start:{line:72,column:85},end:{line:72,column:161}},{start:{line:72,column:180},end:{line:72,column:563}}],line:72}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCell.tsx"],names:["clx","HeaderCellColumnActionsButton","getCommonCellStyles","HeaderCellResizeHandler","Inline","Tooltip","displayColumnIds","parseFromValuesOrFunc","getTextHeaderStyle","labelLength","minWidth","Math","min","overflow","HeaderCell","header","table","options","enableColumnActions","column","getContext","id","isPlaceholder","columnDef","getCanResize","getCanSort","getIsSorted","getIsPinned","getToggleSortingHandler","columnDefType","cdEnableColumnActions","cdHeader","headerComponent","renderHeaderTooltip","showColumnActions","tooltipPopup","headerElement","headerStyle","length","select","expand","actions","cursor","undefined","Object","values","indexOf"],mappings:"AAgFQ,SAGM,KAHN;AA/ER,OAAOA,SAAS;AAGhB,OAAOC,mCAAmC;AAC1C,SAASC,2BAA2B;AACpC,OAAOC,6BAA6B;AACpC,SAASC,cAAc;AACvB,SAASC,eAAe;AACxB,SAASC,wBAAwB;AACjC,SAASC,6BAA6B;AAEtC,MAAMC,qBAAqBA,CACzBC,iBACmB;AAAA,EACnBC,UAAW,GAAEC,KAAKC,IAAIH,eAAe,GAAG,CAAC,CAAE;AAAA,EAC3CI,UAAU;AACZ;AAEA,MAAMC,aAAa,CAAK;AAAA,EACtBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,IAAoB;AAAA,EACjC,IAAIF;AACJ,QAAM;AAAA,IAAEG;AAAAA,IAAQC;AAAAA,IAAYC;AAAAA,IAAIC;AAAAA,EAAc,IAAIP;AAClD,QAAM;AAAA,IACJQ;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIT;AACJ,QAAM;AAAA,IACJU;AAAAA,IACAX,qBAAqBY;AAAAA,IACrBf,QAAQgB;AAAAA,IACRC;AAAAA,IACAC;AAAAA,EACF,IAAIV;AAEJ,QAAMW,qBACHhB,uBAAuBY,0BACxBA,0BAA0B;AAE5B,QAAMK,eAAeF,sBAAsB;AAAA,IACzCd;AAAAA,IACAJ;AAAAA,IACAC;AAAAA,EACF,CAAC;AACD,QAAMoB,gBAAgB7B,sBACpByB,mBAAmBD,UACnBX,WAAW,CACb;AACA,QAAMiB,cAAc7B,mBAAmBuB,UAAUO,MAAM;AACvD,SACE,oBAAC,QAEC,WAAWtC,IAAI,sCAAsC;AAAA,IACnD,yBAAyB6B,kBAAkB;AAAA,IAC3C,wBAAwBV,OAAOE,OAAOf,iBAAiBiC;AAAAA,IACvD,wBAAwBpB,OAAOE,OAAOf,iBAAiBkC;AAAAA,IACvD,yBAAyBrB,OAAOE,OAAOf,iBAAiBmC;AAAAA,EAC1D,CAAC,GACD,eAAad,YAAY,GACzB,eAAaD,YAAY,GACzB,OAAO;AAAA,IACL,GAAGxB,oBAAoB;AAAA,MACrBc;AAAAA,MACAD;AAAAA,MACAI;AAAAA,IACF,CAAC;AAAA,EACH,GAECG,0BAAgB,OAAOO,kBAAkB,SACxC,qBAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACtC;AAAA,wBAAC,UAAO,OAAM,UAAS,OAAO;AAAA,MAAEhB,UAAU;AAAA,IAAS,GACjD,8BAAC,WAAQ,WAAU,OAAM,OAAOsB,cAC9B,8BAAC,YACC,cAAa,WAAUJ,QAAS,IAChC,WAAU,uDACV,OAAO;AAAA,MACL,GAAGM;AAAAA,MACHK,QAAQjB,WAAW,IAAI,YAAYkB;AAAAA,IACrC,GACA,OAAOZ,UACP,MAAK,UACL,SAASH,wBAAwB,GAEhCQ,yBACH,GACF,GACF;AAAA,IACCF,qBACC,oBAAC,iCAA8B,QAAgB,OAChD;AAAA,IACAV,aAAa,KACZ,oBAAC,2BAAwB,QAAgB,OAC1C;AAAA,KACH,IACEoB,OAAOC,OAAOvC,gBAAgB,EAAEwC,QAAQvB,UAAUF,EAAE,IAAI,IAC1D,oBAAC,UAAO,OAAM,UAAS,SAAQ,UAC5Be,yBACH,IAEA,oBAAC,UAAO,OAAM,UAAS,SAAQ,cAC7B,8BAAC,SACC,WAAU,8BACV,OAAOC,aACP,OAAON,UAEP,8BAAC,WAAQ,WAAU,OAAM,OAAOI,cAC9B,8BAAC,YAAO,WAAU,4BAA2B,MAAK,UAC/CC,yBACH,GACF,GACF,GACF,KA5DGf,EA8DP;AAEJ;AAEA,eAAeP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b467b9181e7efc9c66339dd0e2cbd56c56240113"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return M=function(){return r},r}M();M().s[0]++;const jt=e=>(M().f[0]++,M().s[1]++,{minWidth:`${Math.min((M().b[0][0]++,e??(M().b[0][1]++,0)),4)}ch`,overflow:"hidden"});M().s[2]++;const $n=({header:e,table:a})=>{M().f[1]++;const{options:{enableColumnActions:n}}=(M().s[3]++,a),{column:t,getContext:l,id:o,isPlaceholder:r}=(M().s[4]++,e),{columnDef:u,getCanResize:i,getCanSort:c,getIsSorted:A,getIsPinned:p,getToggleSortingHandler:D}=(M().s[5]++,t),{columnDefType:s,enableColumnActions:C,header:g,headerComponent:v,renderHeaderTooltip:w}=(M().s[6]++,u),S=(M().s[7]++,M().b[1][0]++,(n||(M().b[1][1]++,C))&&(M().b[1][2]++,C!==!1)),R=(M().s[8]++,w==null?void 0:w({column:t,header:e,table:a})),P=(M().s[9]++,Un((M().b[2][0]++,v??(M().b[2][1]++,g)),l())),O=(M().s[10]++,jt(g==null?void 0:g.length));return M().s[11]++,m.jsx("th",{className:Oe("ds-table-header-cell ds-table-cell",{"ds-table-cell-display":s==="display","ds-table-cell-select":t.id===J.select,"ds-table-cell-expand":t.id===J.expand,"ds-table-cell-actions":t.id===J.actions}),"data-pinned":p(),"data-sorted":A(),style:{...On({table:a,header:e,column:t})},children:r?(M().b[3][0]++,null):(M().b[3][1]++,s==="data"?(M().b[4][0]++,m.jsxs(oe,{align:"center",gap:"xs",justify:"space-between",children:[m.jsx(oe,{align:"center",style:{overflow:"hidden"},children:m.jsx(un,{placement:"top",popup:R,children:m.jsx("button",{"aria-label":`Sort by ${g}`,className:"ds-table-header-cell-title ds-table-unstyled-button",style:{...O,cursor:c()?(M().b[5][0]++,"pointer"):(M().b[5][1]++,void 0)},title:g,type:"button",onClick:D(),children:P})})}),(M().b[6][0]++,S&&(M().b[6][1]++,m.jsx(Qn,{header:e,table:a}))),(M().b[7][0]++,i()&&(M().b[7][1]++,m.jsx(zn,{header:e,table:a})))]})):(M().b[4][1]++,Object.values(J).indexOf(u.id)>0?(M().b[8][0]++,m.jsx(oe,{align:"center",justify:"center",children:P})):(M().b[8][1]++,m.jsx(oe,{align:"center",justify:"flex-start",children:m.jsx("div",{className:"ds-table-header-cell-title",style:O,title:g,children:m.jsx(un,{placement:"top",popup:R,children:m.jsx("button",{className:"ds-table-unstyled-button",type:"button",children:P})})})}))))},o)};M().s[12]++;$n.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function fe(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderRow.tsx",a="d190319a9a6c2f880e1ae941b7d7f89fe73acde4",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderRow.tsx",statementMap:{0:{start:{line:3,column:18},end:{line:8,column:1}},1:{start:{line:7,column:2},end:{line:7,column:196}},2:{start:{line:7,column:146},end:{line:7,column:191}},3:{start:{line:11,column:0},end:{line:1197,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:18},end:{line:3,column:19}},loc:{start:{line:6,column:6},end:{line:8,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:7,column:118},end:{line:7,column:119}},loc:{start:{line:7,column:146},end:{line:7,column:191}},line:7}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderRow.tsx"],names:["HeaderCell","HeaderRow","headerGroup","table","headers","map","header","id"],mappings:"AAeQ;AAZR,OAAOA,gBAAgB;AAEvB,MAAMC,YAAY,CAAK;AAAA,EACrBC;AAAAA,EACAC;AAIF,MAAM;AACJ,SACE,oBAAC,QAAG,WAAU,oCACXD,sBAAYE,QAAQC,IAAKC,YACxB,oBAAC,cAA2B,QAAgB,SAA3BA,OAAOC,GACzB,GACH;AAEJ;AAEA,eAAeN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d190319a9a6c2f880e1ae941b7d7f89fe73acde4"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return fe=function(){return r},r}fe();fe().s[0]++;const Wn=({headerGroup:e,table:a})=>(fe().f[0]++,fe().s[1]++,m.jsx("tr",{className:"ds-table-header-row ds-table-row",children:e.headers.map(n=>(fe().f[1]++,fe().s[2]++,m.jsx($n,{header:n,table:a},n.id)))}));fe().s[3]++;Wn.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{headerGroup:{required:!0,tsType:{name:"intersection",raw:`Omit<HeaderGroup<D>, 'headers'> & {
  headers: DatatableHeader<D>[];
}`,elements:[{name:"Omit",elements:[{name:"HeaderGroup",elements:[{name:"D"}],raw:"HeaderGroup<D>"},{name:"literal",value:"'headers'"}],raw:"Omit<HeaderGroup<D>, 'headers'>"},{name:"signature",type:"object",raw:`{
  headers: DatatableHeader<D>[];
}`,signature:{properties:[{key:"headers",value:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableHeader<D>[]",required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ye(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/Header.tsx",a="9cfb59383e68912b96348486ee3fb5610dcbf1d6",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/Header.tsx",statementMap:{0:{start:{line:3,column:15},end:{line:7,column:1}},1:{start:{line:6,column:2},end:{line:6,column:200}},2:{start:{line:6,column:141},end:{line:6,column:195}},3:{start:{line:10,column:0},end:{line:27,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:15},end:{line:3,column:16}},loc:{start:{line:5,column:6},end:{line:7,column:1}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:6,column:108},end:{line:6,column:109}},loc:{start:{line:6,column:141},end:{line:6,column:195}},line:6}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/Header.tsx"],names:["HeaderRow","Header","table","getHeaderGroups","map","headerGroup","id"],mappings:"AASQ;AANR,OAAOA,eAAe;AAEtB,MAAMC,SAAS,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACjE,SACE,oBAAC,WAAM,WAAU,mBACdA,gBAAMC,gBAAgB,EAAEC,IAAKC,iBAC5B,oBAAC,aAEC,aACA,SAFKA,YAAYC,GAIpB,GACH;AAEJ;AAEA,eAAeL;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9cfb59383e68912b96348486ee3fb5610dcbf1d6"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ye=function(){return r},r}ye();ye().s[0]++;const Jn=({table:e})=>(ye().f[0]++,ye().s[1]++,m.jsx("thead",{className:"ds-table-header",children:e.getHeaderGroups().map(a=>(ye().f[1]++,ye().s[2]++,m.jsx(Wn,{headerGroup:a,table:e},a.id)))}));ye().s[3]++;Jn.__docgenInfo={description:"",methods:[],displayName:"Header",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function K(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItem.tsx",a="9a8b921980e1a118cf621ac99c54bb59cdec05f0",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItem.tsx",statementMap:{0:{start:{line:6,column:21},end:{line:40,column:1}},1:{start:{line:17,column:6},end:{line:17,column:11}},2:{start:{line:25,column:6},end:{line:27,column:4}},3:{start:{line:28,column:16},end:{line:31,column:3}},4:{start:{line:32,column:2},end:{line:39,column:10}},5:{start:{line:37,column:366},end:{line:37,column:407}},6:{start:{line:38,column:347},end:{line:38,column:392}},7:{start:{line:43,column:0},end:{line:756,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:21},end:{line:6,column:22}},loc:{start:{line:10,column:6},end:{line:40,column:1}},line:10},1:{name:"(anonymous_1)",decl:{start:{line:37,column:359},end:{line:37,column:360}},loc:{start:{line:37,column:366},end:{line:37,column:407}},line:37},2:{name:"(anonymous_2)",decl:{start:{line:38,column:340},end:{line:38,column:341}},loc:{start:{line:38,column:347},end:{line:38,column:392}},line:38}},branchMap:{0:{loc:{start:{line:32,column:226},end:{line:32,column:260}},type:"cond-expr",locations:[{start:{line:32,column:249},end:{line:32,column:250}},{start:{line:32,column:253},end:{line:32,column:260}}],line:32},1:{loc:{start:{line:33,column:4},end:{line:35,column:26}},type:"binary-expr",locations:[{start:{line:33,column:4},end:{line:33,column:24}},{start:{line:33,column:44},end:{line:35,column:26}}],line:33},2:{loc:{start:{line:37,column:4},end:{line:37,column:413}},type:"binary-expr",locations:[{start:{line:37,column:4},end:{line:37,column:16}},{start:{line:37,column:36},end:{line:37,column:413}}],line:37},3:{loc:{start:{line:37,column:147},end:{line:37,column:186}},type:"cond-expr",locations:[{start:{line:37,column:171},end:{line:37,column:177}},{start:{line:37,column:180},end:{line:37,column:186}}],line:37},4:{loc:{start:{line:37,column:266},end:{line:37,column:329}},type:"binary-expr",locations:[{start:{line:37,column:266},end:{line:37,column:280}},{start:{line:37,column:284},end:{line:37,column:305}},{start:{line:37,column:309},end:{line:37,column:329}}],line:37},5:{loc:{start:{line:38,column:4},end:{line:38,column:398}},type:"binary-expr",locations:[{start:{line:38,column:4},end:{line:38,column:23}},{start:{line:38,column:43},end:{line:38,column:398}}],line:38},6:{loc:{start:{line:38,column:154},end:{line:38,column:202}},type:"cond-expr",locations:[{start:{line:38,column:187},end:{line:38,column:194}},{start:{line:38,column:197},end:{line:38,column:202}}],line:38},7:{loc:{start:{line:38,column:358},end:{line:38,column:391}},type:"cond-expr",locations:[{start:{line:38,column:377},end:{line:38,column:383}},{start:{line:38,column:386},end:{line:38,column:391}}],line:38}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0,0],5:[0,0],6:[0,0],7:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItem.tsx"],names:["useSortable","CSS","Inline","Padbox","IconButton","SettingsItem","column","table","canColumnHide","options","enableColumnPinning","enableHiding","enableColumnOrdering","attributes","listeners","setActivatorNodeRef","setNodeRef","transform","transition","id","style","Transform","toString","columnDef","header","cursor","getIsVisible","getCanHide","e","toggleVisibility","target","checked","getIsPinned","getCanPin","pin"],mappings:"AAuCM,SAMI,KANJ;AAvCN,SAASA,mBAAmB;AAC5B,SAASC,WAAW;AAEpB,SAASC,QAAQC,cAAc;AAE/B,OAAOC,gBAAgB;AAEvB,MAAMC,eAAe,CAAK;AAAA,EACxBC;AAAAA,EACAC;AAAAA,EACAC;AAKF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,MAAqBC;AAAAA,MAAcC;AAAAA,IAAqB;AAAA,EACrE,IAAIL;AACJ,QAAM;AAAA,IACJM;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIlB,YAAY;AAAA,IAAEmB,IAAIb,OAAOa;AAAAA,EAAG,CAAC;AACjC,QAAMC,QAAQ;AAAA,IACZH,WAAWhB,IAAIoB,UAAUC,SAASL,SAAS;AAAA,IAC3CC;AAAAA,EACF;AACA,SACE,oBAAC,UACC,KAAKF,YACL,WAAU,gCACV,aAAY,MACZ,aAAY,UACZ,OAEA,+BAAC,UACC,OAAM,UACN,KAAI,MACJ,SAASJ,uBAAuB,IAAI,SAEnCA;AAAAA,4BACC,oBAAC,cACC,KAAKG,qBACL,UAAS,sBACT,OAAQ,WAAUT,OAAOiB,UAAUC,MAAO,WAC1C,GAAIX,eACAC,WACJ,MAAK,MACL,OAAO;AAAA,MAAEW,QAAQ;AAAA,IAAO,GACxB,SAAQ,SAEX;AAAA,IACD,oBAAC,UAAMnB,iBAAOiB,UAAUC,QAAO;AAAA,IAC9Bb,gBACC,oBAAC,SAAI,WAAU,6BACb,8BAAC,WACC,cAAa,GAAEL,OAAOoB,aAAa,IAAI,SAAS,MAAO,IACrDpB,OAAOiB,UAAUC,MAClB,WACD,SAASlB,OAAOoB,aAAa,GAC7B,UACG,CAAClB,iBAAiBF,OAAOoB,aAAa,KACvC,CAACpB,OAAOqB,WAAW,GAErB,MAAK,YACL,UAAWC,OAAMtB,OAAOuB,iBAAiBD,EAAEE,OAAOC,OAAO,GAAE,GAE/D;AAAA,IAEDrB,uBACC,oBAAC,SAAI,WAAU,6BACb,8BAAC,WACC,cAAa,GACXJ,OAAO0B,YAAY,MAAM,QAAQ,UAAU,KAC5C,IAAG1B,OAAOiB,UAAUC,MAAO,WAC5B,SAASlB,OAAO0B,YAAY,MAAM,OAClC,UAAU,CAAC1B,OAAO2B,UAAU,GAC5B,MAAK,YACL,UAAWL,OAAMtB,OAAO4B,IAAIN,EAAEE,OAAOC,UAAU,SAAS,KAAK,GAAE,GAEnE;AAAA,KAEJ,GACF;AAEJ;AAEA,eAAe1B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9a8b921980e1a118cf621ac99c54bb59cdec05f0"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return K=function(){return r},r}K();K().s[0]++;const Ln=({column:e,table:a,canColumnHide:n})=>{K().f[0]++;const{options:{enableColumnPinning:t,enableHiding:l,enableColumnOrdering:o}}=(K().s[1]++,a),{attributes:r,listeners:u,setActivatorNodeRef:i,setNodeRef:c,transform:A,transition:p}=(K().s[2]++,da({id:e.id})),D=(K().s[3]++,{transform:ba.Transform.toString(A),transition:p});return K().s[4]++,m.jsx(Ve,{ref:c,className:"ds-table-settings-panel-item",paddingSize:"md",paddingType:"squish",style:D,children:m.jsxs(oe,{align:"center",gap:"md",stretch:o?(K().b[0][0]++,2):(K().b[0][1]++,"start"),children:[(K().b[1][0]++,o&&(K().b[1][1]++,m.jsx(de,{ref:i,iconName:"grip-dots-vertical",label:`Reorder ${e.columnDef.header} column`,...r,...u,size:"sm",style:{cursor:"grab"},variant:"ghost"}))),m.jsx("span",{children:e.columnDef.header}),(K().b[2][0]++,l&&(K().b[2][1]++,m.jsx("div",{className:"ds-table-checkbox-wrapper",children:m.jsx("input",{"aria-label":`${e.getIsVisible()?(K().b[3][0]++,"Hide"):(K().b[3][1]++,"Show")} ${e.columnDef.header} column`,checked:e.getIsVisible(),disabled:(K().b[4][0]++,!n&&(K().b[4][1]++,e.getIsVisible())||(K().b[4][2]++,!e.getCanHide())),type:"checkbox",onChange:s=>(K().f[1]++,K().s[5]++,e.toggleVisibility(s.target.checked))})}))),(K().b[5][0]++,t&&(K().b[5][1]++,m.jsx("div",{className:"ds-table-checkbox-wrapper",children:m.jsx("input",{"aria-label":`${e.getIsPinned()!==!1?(K().b[6][0]++,"Unpin"):(K().b[6][1]++,"Pin")} ${e.columnDef.header} column`,checked:e.getIsPinned()!==!1,disabled:!e.getCanPin(),type:"checkbox",onChange:s=>(K().f[2]++,K().s[6]++,e.pin(s.target.checked?(K().b[7][0]++,"left"):(K().b[7][1]++,!1)))})})))]})})};K().s[7]++;Ln.__docgenInfo={description:"",methods:[],displayName:"SettingsItem",props:{column:{required:!0,tsType:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},canColumnHide:{required:!0,tsType:{name:"boolean"},description:""}}};function V(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItems.tsx",a="ce74e80ee8d539514bed9fd8e80337719efa2f17",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItems.tsx",statementMap:{0:{start:{line:7,column:25},end:{line:7,column:101}},1:{start:{line:7,column:49},end:{line:7,column:101}},2:{start:{line:7,column:77},end:{line:7,column:100}},3:{start:{line:8,column:24},end:{line:8,column:96}},4:{start:{line:8,column:46},end:{line:8,column:96}},5:{start:{line:8,column:74},end:{line:8,column:95}},6:{start:{line:9,column:33},end:{line:11,column:92}},7:{start:{line:12,column:34},end:{line:73,column:1}},8:{start:{line:13,column:2},end:{line:72,column:4}},9:{start:{line:21,column:10},end:{line:21,column:46}},10:{start:{line:22,column:6},end:{line:22,column:43}},11:{start:{line:32,column:10},end:{line:32,column:46}},12:{start:{line:33,column:6},end:{line:40,column:7}},13:{start:{line:38,column:12},end:{line:38,column:45}},14:{start:{line:39,column:8},end:{line:39,column:77}},15:{start:{line:41,column:6},end:{line:41,column:74}},16:{start:{line:51,column:10},end:{line:51,column:46}},17:{start:{line:52,column:6},end:{line:59,column:7}},18:{start:{line:57,column:12},end:{line:57,column:45}},19:{start:{line:58,column:8},end:{line:58,column:78}},20:{start:{line:60,column:6},end:{line:60,column:51}},21:{start:{line:69,column:10},end:{line:69,column:46}},22:{start:{line:70,column:6},end:{line:70,column:69}},23:{start:{line:74,column:22},end:{line:104,column:1}},24:{start:{line:82,column:6},end:{line:82,column:11}},25:{start:{line:85,column:6},end:{line:85,column:16}},26:{start:{line:86,column:18},end:{line:88,column:5}},27:{start:{line:89,column:24},end:{line:97,column:3}},28:{start:{line:93,column:26},end:{line:93,column:62}},29:{start:{line:94,column:25},end:{line:94,column:58}},30:{start:{line:95,column:21},end:{line:95,column:76}},31:{start:{line:96,column:4},end:{line:96,column:29}},32:{start:{line:98,column:2},end:{line:103,column:429}},33:{start:{line:103,column:336},end:{line:103,column:418}},34:{start:{line:107,column:0},end:{line:824,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:25},end:{line:7,column:26}},loc:{start:{line:7,column:49},end:{line:7,column:101}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:7,column:65},end:{line:7,column:66}},loc:{start:{line:7,column:77},end:{line:7,column:100}},line:7},2:{name:"(anonymous_2)",decl:{start:{line:8,column:24},end:{line:8,column:25}},loc:{start:{line:8,column:46},end:{line:8,column:96}},line:8},3:{name:"(anonymous_3)",decl:{start:{line:8,column:62},end:{line:8,column:63}},loc:{start:{line:8,column:74},end:{line:8,column:95}},line:8},4:{name:"(anonymous_4)",decl:{start:{line:12,column:34},end:{line:12,column:35}},loc:{start:{line:12,column:50},end:{line:73,column:1}},line:12},5:{name:"(anonymous_5)",decl:{start:{line:14,column:4},end:{line:14,column:5}},loc:{start:{line:16,column:7},end:{line:23,column:5}},line:16},6:{name:"(anonymous_6)",decl:{start:{line:24,column:4},end:{line:24,column:5}},loc:{start:{line:27,column:7},end:{line:42,column:5}},line:27},7:{name:"(anonymous_7)",decl:{start:{line:43,column:4},end:{line:43,column:5}},loc:{start:{line:46,column:7},end:{line:61,column:5}},line:46},8:{name:"(anonymous_8)",decl:{start:{line:62,column:4},end:{line:62,column:5}},loc:{start:{line:64,column:7},end:{line:71,column:5}},line:64},9:{name:"(anonymous_9)",decl:{start:{line:74,column:22},end:{line:74,column:23}},loc:{start:{line:78,column:6},end:{line:104,column:1}},line:78},10:{name:"(anonymous_10)",decl:{start:{line:89,column:24},end:{line:89,column:25}},loc:{start:{line:92,column:8},end:{line:97,column:3}},line:92},11:{name:"(anonymous_11)",decl:{start:{line:103,column:308},end:{line:103,column:309}},loc:{start:{line:103,column:336},end:{line:103,column:418}},line:103}},branchMap:{0:{loc:{start:{line:33,column:6},end:{line:40,column:7}},type:"if",locations:[{start:{line:33,column:6},end:{line:40,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:33},1:{loc:{start:{line:52,column:6},end:{line:59,column:7}},type:"if",locations:[{start:{line:52,column:6},end:{line:59,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:52}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItems.tsx"],names:["DndContext","KeyboardSensor","PointerSensor","closestCenter","useSensor","useSensors","restrictToParentElement","restrictToVerticalAxis","SortableContext","sortableKeyboardCoordinates","verticalListSortingStrategy","reorderColumn","SettingsItem","getDraggedColumn","active","allColumns","find","column","id","getTargetColumn","over","screenReaderInstructions","screenReaderAnnouncements","onDragStart","columnDef","header","onDragOver","activeHeader","overHeader","onDragEnd","onDragCancel","SettingsItems","table","canHideMoreColumns","getState","setColumnOrder","columnOrder","sensors","coordinateGetter","handleDragEnd","draggedColumn","targetColumn","newOrder","draggable","announcements","map"],mappings:"AA4HY;AA5HZ,SAEEA,YAEAC,gBAEAC,eACAC,eACAC,WACAC,kBACK;AACP,SACEC,yBACAC,8BACK;AACP,SACEC,iBACAC,6BACAC,mCACK;AAGP,SAASC,qBAAqB;AAE9B,OAAOC,kBAAkB;AAEzB,MAAMC,mBAAmB,CACvBC,QACAC,eACGA,WAAWC,KAAMC,YAAWA,OAAOC,OAAOJ,OAAOI,EAAE;AACxD,MAAMC,kBAAkB,CAAKC,MAAYL,eACvCA,WAAWC,KAAMC,YAAWA,OAAOC,OAAOE,KAAKF,EAAE;AAEnD,MAAMG,2BAA4B;AAAA;AAAA;AAGlC,MAAMC,4BAA4B,CAAKP,eAAqC;AAC1E,SAAO;AAAA,IACLQ,YAAY;AAAA,MAAET;AAAAA,IAAO,GAAG;AACtB,YAAM;AAAA,QACJU,WAAW;AAAA,UAAEC;AAAAA,QAAO;AAAA,MACtB,IAAIZ,iBAAiBC,QAAQC,UAAU;AACvC,aAAQ,aAAYU,MAAO;AAAA,IAC7B;AAAA,IACAC,WAAW;AAAA,MAAEZ;AAAAA,MAAQM;AAAAA,IAAK,GAAG;AAC3B,YAAM;AAAA,QACJI,WAAW;AAAA,UAAEC,QAAQE;AAAAA,QAAa;AAAA,MACpC,IAAId,iBAAiBC,QAAQC,UAAU;AAEvC,UAAIK,MAAM;AACR,cAAM;AAAA,UACJI,WAAW;AAAA,YAAEC,QAAQG;AAAAA,UAAW;AAAA,QAClC,IAAIT,gBAAgBC,MAAML,UAAU;AACpC,eAAQ,GAAEY,YAAa,0BAAyBC,UAAW;AAAA,MAC7D;AAEA,aAAQ,GAAED,YAAa;AAAA,IACzB;AAAA,IACAE,UAAU;AAAA,MAAEf;AAAAA,MAAQM;AAAAA,IAAK,GAAG;AAC1B,YAAM;AAAA,QACJI,WAAW;AAAA,UAAEC,QAAQE;AAAAA,QAAa;AAAA,MACpC,IAAId,iBAAiBC,QAAQC,UAAU;AAEvC,UAAIK,MAAM;AACR,cAAM;AAAA,UACJI,WAAW;AAAA,YAAEC,QAAQG;AAAAA,UAAW;AAAA,QAClC,IAAIT,gBAAgBC,MAAML,UAAU;AACpC,eAAQ,GAAEY,YAAa,4BAA2BC,UAAW;AAAA,MAC/D;AAEA,aAAQ,GAAED,YAAa;AAAA,IACzB;AAAA,IACAG,aAAa;AAAA,MAAEhB;AAAAA,IAAO,GAAG;AACvB,YAAM;AAAA,QACJU,WAAW;AAAA,UAAEC;AAAAA,QAAO;AAAA,MACtB,IAAIZ,iBAAiBC,QAAQC,UAAU;AACvC,aAAQ,2BAA0BU,MAAO;AAAA,IAC3C;AAAA,EACF;AACF;AAEA,MAAMM,gBAAgB,CAAK;AAAA,EACzBhB;AAAAA,EACAiB;AAAAA,EACAC;AAKF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,IAAUC;AAAAA,EAAe,IAAIH;AACrC,QAAM;AAAA,IAAEI;AAAAA,EAAY,IAAIF,SAAS;AAEjC,QAAMG,UAAUhC,WACdD,UAAUF,aAAa,GACvBE,UAAUH,gBAAgB;AAAA,IACxBqC,kBAAkB7B;AAAAA,EACpB,CAAC,CACH;AAEA,QAAM8B,gBAAgBA,CAAC;AAAA,IAAEnB;AAAAA,IAAMN;AAAAA,EAAqB,MAAM;AACxD,UAAM0B,gBAAgB3B,iBAAiBC,QAAQC,UAAU;AACzD,UAAM0B,eAAetB,gBAAgBC,MAAML,UAAU;AACrD,UAAM2B,WAAW/B,cAAc6B,eAAeC,cAAcL,WAAW;AACvED,mBAAeO,QAAQ;AAAA,EACzB;AAEA,SACE,oBAAC,cACC,eAAe;AAAA,IACbrB,0BAA0B;AAAA,MAAEsB,WAAWtB;AAAAA,IAAyB;AAAA,IAChEuB,eAAetB,0BAA0BP,UAAU;AAAA,EACrD,GACA,oBAAoBZ,eACpB,WAAW,CAACI,wBAAwBD,uBAAuB,GAC3D,SACA,WAAWiC,eAEX,8BAAC,mBACC,OAAOxB,YACP,UAAUL,6BAEV,8BAAC,SACEK,qBAAW8B,IAAK5B,YACf,oBAAC,gBAEC,eAAegB,oBACf,QACA,SAHKhB,OAAOC,GAKf,GACH,GACF,GACF;AAEJ;AAEA,eAAea;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ce74e80ee8d539514bed9fd8e80337719efa2f17"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return V=function(){return r},r}V();V().s[0]++;const Be=(e,a)=>(V().f[0]++,V().s[1]++,a.find(n=>(V().f[1]++,V().s[2]++,n.id===e.id)));V().s[3]++;const nn=(e,a)=>(V().f[2]++,V().s[4]++,a.find(n=>(V().f[3]++,V().s[5]++,n.id===e.id))),Pt=(V().s[6]++,`To pick up a draggable table column, press space or enter.
Use the up and down arrow keys to update the position of the column in the table.
Press space or enter again to drop the item in its new position, or press escape to cancel.`);V().s[7]++;const Ut=e=>(V().f[4]++,V().s[8]++,{onDragStart({active:a}){V().f[5]++;const{columnDef:{header:n}}=(V().s[9]++,Be(a,e));return V().s[10]++,`Picked up ${n} column.`},onDragOver({active:a,over:n}){V().f[6]++;const{columnDef:{header:t}}=(V().s[11]++,Be(a,e));if(V().s[12]++,n){V().b[0][0]++;const{columnDef:{header:l}}=(V().s[13]++,nn(n,e));return V().s[14]++,`${t} column was moved over ${l} column.`}else V().b[0][1]++;return V().s[15]++,`${t} column is no longer over a droppable area.`},onDragEnd({active:a,over:n}){V().f[7]++;const{columnDef:{header:t}}=(V().s[16]++,Be(a,e));if(V().s[17]++,n){V().b[1][0]++;const{columnDef:{header:l}}=(V().s[18]++,nn(n,e));return V().s[19]++,`${t} column was dropped over ${l} column`}else V().b[1][1]++;return V().s[20]++,`${t} column was dropped.`},onDragCancel({active:a}){V().f[8]++;const{columnDef:{header:n}}=(V().s[21]++,Be(a,e));return V().s[22]++,`Dragging was cancelled. ${n} column was dropped.`}});V().s[23]++;const Xn=({allColumns:e,table:a,canHideMoreColumns:n})=>{V().f[9]++;const{getState:t,setColumnOrder:l}=(V().s[24]++,a),{columnOrder:o}=(V().s[25]++,t()),r=(V().s[26]++,Da(sn(Ca),sn(ga,{coordinateGetter:pa})));V().s[27]++;const u=({over:i,active:c})=>{V().f[10]++;const A=(V().s[28]++,Be(c,e)),p=(V().s[29]++,nn(i,e)),D=(V().s[30]++,Bt(A,p,o));V().s[31]++,l(D)};return V().s[32]++,m.jsx(fa,{accessibility:{screenReaderInstructions:{draggable:Pt},announcements:Ut(e)},collisionDetection:ya,modifiers:[va,Ia],sensors:r,onDragEnd:u,children:m.jsx(wa,{items:e,strategy:ha,children:m.jsx("div",{children:e.map(i=>(V().f[11]++,V().s[33]++,m.jsx(Ln,{canColumnHide:n,column:i,table:a},i.id)))})})})};V().s[34]++;Xn.__docgenInfo={description:"",methods:[],displayName:"SettingsItems",props:{allColumns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}]}],raw:"DatatableColumn<D>[]"},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},canHideMoreColumns:{required:!0,tsType:{name:"boolean"},description:""}}};function y(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/Settings.tsx",a="b4c5c6e923247b6b9cd35cb0358907789db7aa48",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/Settings.tsx",statementMap:{0:{start:{line:14,column:21},end:{line:17,column:839}},1:{start:{line:18,column:17},end:{line:121,column:1}},2:{start:{line:36,column:6},end:{line:36,column:11}},3:{start:{line:40,column:6},end:{line:40,column:16}},4:{start:{line:43,column:6},end:{line:43,column:27}},5:{start:{line:44,column:29},end:{line:44,column:64}},6:{start:{line:45,column:21},end:{line:50,column:116}},7:{start:{line:46,column:4},end:{line:48,column:5}},8:{start:{line:47,column:6},end:{line:47,column:246}},9:{start:{line:47,column:90},end:{line:47,column:145}},10:{start:{line:47,column:127},end:{line:47,column:144}},11:{start:{line:47,column:206},end:{line:47,column:244}},12:{start:{line:49,column:4},end:{line:49,column:87}},13:{start:{line:49,column:47},end:{line:49,column:85}},14:{start:{line:51,column:35},end:{line:58,column:3}},15:{start:{line:52,column:28},end:{line:52,column:101}},16:{start:{line:52,column:64},end:{line:52,column:100}},17:{start:{line:53,column:26},end:{line:53,column:87}},18:{start:{line:53,column:58},end:{line:53,column:86}},19:{start:{line:54,column:4},end:{line:57,column:6}},20:{start:{line:59,column:36},end:{line:66,column:3}},21:{start:{line:60,column:28},end:{line:60,column:102}},22:{start:{line:60,column:64},end:{line:60,column:101}},23:{start:{line:61,column:26},end:{line:61,column:86}},24:{start:{line:61,column:58},end:{line:61,column:85}},25:{start:{line:62,column:4},end:{line:65,column:6}},26:{start:{line:67,column:43},end:{line:73,column:3}},27:{start:{line:68,column:4},end:{line:72,column:7}},28:{start:{line:68,column:40},end:{line:68,column:76}},29:{start:{line:69,column:6},end:{line:71,column:7}},30:{start:{line:70,column:8},end:{line:70,column:45}},31:{start:{line:74,column:44},end:{line:78,column:3}},32:{start:{line:75,column:4},end:{line:77,column:12}},33:{start:{line:76,column:45},end:{line:76,column:51}},34:{start:{line:79,column:2},end:{line:120,column:7}},35:{start:{line:87,column:118},end:{line:87,column:146}},36:{start:{line:98,column:10},end:{line:98,column:61}},37:{start:{line:99,column:10},end:{line:99,column:67}},38:{start:{line:100,column:10},end:{line:100,column:57}},39:{start:{line:107,column:308},end:{line:107,column:358}},40:{start:{line:114,column:308},end:{line:114,column:359}},41:{start:{line:124,column:0},end:{line:141,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:18,column:17},end:{line:18,column:18}},loc:{start:{line:20,column:6},end:{line:121,column:1}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:45,column:29},end:{line:45,column:30}},loc:{start:{line:45,column:35},end:{line:50,column:3}},line:45},2:{name:"(anonymous_2)",decl:{start:{line:47,column:79},end:{line:47,column:80}},loc:{start:{line:47,column:90},end:{line:47,column:145}},line:47},3:{name:"(anonymous_3)",decl:{start:{line:47,column:118},end:{line:47,column:119}},loc:{start:{line:47,column:127},end:{line:47,column:144}},line:47},4:{name:"(anonymous_4)",decl:{start:{line:47,column:197},end:{line:47,column:198}},loc:{start:{line:47,column:206},end:{line:47,column:244}},line:47},5:{name:"(anonymous_5)",decl:{start:{line:49,column:38},end:{line:49,column:39}},loc:{start:{line:49,column:47},end:{line:49,column:85}},line:49},6:{name:"(anonymous_6)",decl:{start:{line:51,column:35},end:{line:51,column:36}},loc:{start:{line:51,column:41},end:{line:58,column:3}},line:51},7:{name:"(anonymous_7)",decl:{start:{line:52,column:55},end:{line:52,column:56}},loc:{start:{line:52,column:64},end:{line:52,column:100}},line:52},8:{name:"(anonymous_8)",decl:{start:{line:53,column:49},end:{line:53,column:50}},loc:{start:{line:53,column:58},end:{line:53,column:86}},line:53},9:{name:"(anonymous_9)",decl:{start:{line:59,column:36},end:{line:59,column:37}},loc:{start:{line:59,column:42},end:{line:66,column:3}},line:59},10:{name:"(anonymous_10)",decl:{start:{line:60,column:55},end:{line:60,column:56}},loc:{start:{line:60,column:64},end:{line:60,column:101}},line:60},11:{name:"(anonymous_11)",decl:{start:{line:61,column:49},end:{line:61,column:50}},loc:{start:{line:61,column:58},end:{line:61,column:85}},line:61},12:{name:"(anonymous_12)",decl:{start:{line:67,column:43},end:{line:67,column:44}},loc:{start:{line:67,column:63},end:{line:73,column:3}},line:67},13:{name:"(anonymous_13)",decl:{start:{line:68,column:31},end:{line:68,column:32}},loc:{start:{line:68,column:40},end:{line:68,column:76}},line:68},14:{name:"(anonymous_14)",decl:{start:{line:68,column:86},end:{line:68,column:87}},loc:{start:{line:68,column:102},end:{line:72,column:5}},line:68},15:{name:"(anonymous_15)",decl:{start:{line:74,column:44},end:{line:74,column:45}},loc:{start:{line:74,column:56},end:{line:78,column:3}},line:74},16:{name:"(anonymous_16)",decl:{start:{line:76,column:36},end:{line:76,column:37}},loc:{start:{line:76,column:45},end:{line:76,column:51}},line:76},17:{name:"(anonymous_17)",decl:{start:{line:87,column:112},end:{line:87,column:113}},loc:{start:{line:87,column:118},end:{line:87,column:146}},line:87},18:{name:"(anonymous_18)",decl:{start:{line:97,column:116},end:{line:97,column:117}},loc:{start:{line:97,column:122},end:{line:101,column:9}},line:97},19:{name:"(anonymous_19)",decl:{start:{line:107,column:301},end:{line:107,column:302}},loc:{start:{line:107,column:308},end:{line:107,column:358}},line:107},20:{name:"(anonymous_20)",decl:{start:{line:114,column:301},end:{line:114,column:302}},loc:{start:{line:114,column:308},end:{line:114,column:359}},line:114}},branchMap:{0:{loc:{start:{line:46,column:4},end:{line:48,column:5}},type:"if",locations:[{start:{line:46,column:4},end:{line:48,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:46},1:{loc:{start:{line:56,column:29},end:{line:56,column:102}},type:"binary-expr",locations:[{start:{line:56,column:29},end:{line:56,column:53}},{start:{line:56,column:57},end:{line:56,column:102}}],line:56},2:{loc:{start:{line:64,column:28},end:{line:64,column:101}},type:"binary-expr",locations:[{start:{line:64,column:28},end:{line:64,column:52}},{start:{line:64,column:56},end:{line:64,column:101}}],line:64},3:{loc:{start:{line:69,column:6},end:{line:71,column:7}},type:"if",locations:[{start:{line:69,column:6},end:{line:71,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:69},4:{loc:{start:{line:69,column:10},end:{line:69,column:58}},type:"binary-expr",locations:[{start:{line:69,column:10},end:{line:69,column:24}},{start:{line:69,column:28},end:{line:69,column:43}},{start:{line:69,column:47},end:{line:69,column:58}}],line:69},5:{loc:{start:{line:75,column:21},end:{line:77,column:10}},type:"cond-expr",locations:[{start:{line:75,column:30},end:{line:77,column:5}},{start:{line:77,column:8},end:{line:77,column:10}}],line:75},6:{loc:{start:{line:92,column:11},end:{line:92,column:41}},type:"binary-expr",locations:[{start:{line:92,column:11},end:{line:92,column:36}},{start:{line:92,column:40},end:{line:92,column:41}}],line:92},7:{loc:{start:{line:98,column:27},end:{line:98,column:59}},type:"binary-expr",locations:[{start:{line:98,column:27},end:{line:98,column:53}},{start:{line:98,column:57},end:{line:98,column:59}}],line:98},8:{loc:{start:{line:99,column:30},end:{line:99,column:65}},type:"binary-expr",locations:[{start:{line:99,column:30},end:{line:99,column:59}},{start:{line:99,column:63},end:{line:99,column:65}}],line:99},9:{loc:{start:{line:100,column:25},end:{line:100,column:55}},type:"binary-expr",locations:[{start:{line:100,column:25},end:{line:100,column:49}},{start:{line:100,column:53},end:{line:100,column:55}}],line:100},10:{loc:{start:{line:103,column:10},end:{line:108,column:14}},type:"binary-expr",locations:[{start:{line:103,column:10},end:{line:103,column:22}},{start:{line:103,column:42},end:{line:108,column:14}}],line:103},11:{loc:{start:{line:107,column:87},end:{line:107,column:152}},type:"cond-expr",locations:[{start:{line:107,column:137},end:{line:107,column:143}},{start:{line:107,column:146},end:{line:107,column:152}}],line:107},12:{loc:{start:{line:109,column:10},end:{line:115,column:14}},type:"binary-expr",locations:[{start:{line:109,column:10},end:{line:109,column:29}},{start:{line:109,column:49},end:{line:115,column:14}}],line:109},13:{loc:{start:{line:114,column:87},end:{line:114,column:152}},type:"cond-expr",locations:[{start:{line:114,column:137},end:{line:114,column:144}},{start:{line:114,column:147},end:{line:114,column:152}}],line:114}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/Settings.tsx"],names:["useContext","useMemo","styled","Button","CloseButton","Icon","Inline","Padbox","Stack","Text","getHidableColumns","IndeterminateCheckbox","SettingsItems","DSContext","getButtonSize","SettingsRoot","div","withConfig","displayName","componentId","Settings","table","getAllLeafColumns","getCenterLeafColumns","getLeftLeafColumns","getRightLeafColumns","getState","options","enableColumnPinning","enableHiding","setColumnOrder","setColumnPinning","setColumnVisibility","setShowColumnSettings","initialState","columnOrder","columnPinning","datatable","canHideMoreColumns","length","allColumns","Array","from","Set","map","colId","find","col","id","filter","Boolean","columnDef","columnDefType","getColumnsVisibilityInfo","hideableColumns","hiddenColumns","getIsVisible","areAllColumnsVisible","areSomeColumnsVisible","getColumnsPinnabilityInfo","pineableColumns","enablePinning","pinnedColumns","getIsPinned","areAllColumnsPinned","areSomeColumnsPinned","handleToggleAllColumnsVisibility","nextVisibility","forEach","index","toggleVisibility","handleToggleAllColumnsPinnability","pinned","left","borderBottom","overflow","position","top","settingsOffset","paddingRight","columnVisibility","height","e","target","checked","marginLeft"],mappings:"AA+JU,SACE,KADF;AA/JV,SAASA,YAAYC,eAAe;AACpC,OAAOC,YAAY;AAEnB,OAAOC,YAAY;AACnB,SAASC,mBAAmB;AAC5B,SAASC,YAAY;AACrB,SAASC,QAAQC,QAAQC,aAAa;AACtC,SAASC,YAAY;AACrB,SAASC,yBAAyB;AAElC,OAAOC,2BAA2B;AAClC,OAAOC,mBAAmB;AAC1B,SAASC,iBAAiB;AAC1B,SAASC,qBAAqB;AAE9B,MAAMC,eAAeb,OAAOc,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAoC9B,EAAA,CAAA,i0BAAA,CAAA;AAED,MAAMC,WAAW,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACnE,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,MAAqBC;AAAAA,IAAa;AAAA,IAC7CC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIb;AACJ,QAAM;AAAA,IAAEc;AAAAA,IAAaC;AAAAA,EAAc,IAAIV,SAAS;AAChD,QAAM;AAAA,IAAEW;AAAAA,EAAU,IAAIrC,WAAWa,SAAS;AAE1C,QAAMyB,qBAAqB5B,kBAAkBW,KAAK,EAAEkB,SAAS;AAC7D,QAAMC,aAAavC,QAAQ,MAAM;AAC/B,QAAIkC,YAAYI,SAAS,GAAG;AAC1B,aAAO,CACL,GAAGf,mBAAmB,GACtB,GAAGiB,MAAMC,KAAK,IAAIC,IAAIR,WAAW,CAAC,EAAES,IAAKC,WACvCtB,qBAAqB,EAAEuB,KAAMC,SAAQA,KAAKC,OAAOH,KAAK,CACxD,GACA,GAAGpB,oBAAoB,CAAC,EAEvBwB,OAAOC,OAAO,EACdD,OAAQF,SAAQA,IAAII,UAAUC,kBAAkB,MAAM;AAAA,IAC3D;AAEA,WAAO9B,kBAAkB,EAAE2B,OACxBF,SAAQA,IAAII,UAAUC,kBAAkB,MAC3C;AAAA,EAEF,GAAG,CACDjB,aACAC,eACAd,mBACAE,oBACAC,qBACAF,oBAAoB,CACrB;AAED,QAAM8B,2BAA2BA,MAAM;AACrC,UAAMC,kBAAkBhC,kBAAkB,EAAE2B,OACzCF,SAAQA,IAAII,UAAUtB,iBAAiB,KAC1C;AACA,UAAM0B,gBAAgBD,gBAAgBL,OACnCF,SAAQA,IAAIS,aAAa,MAAM,KAClC;AAEA,WAAO;AAAA,MACLC,sBAAsBF,cAAchB,WAAW;AAAA,MAC/CmB,uBACEH,cAAchB,SAAS,KACvBgB,cAAchB,SAASe,gBAAgBf;AAAAA,IAC3C;AAAA,EACF;AAEA,QAAMoB,4BAA4BA,MAAM;AACtC,UAAMC,kBAAkBtC,kBAAkB,EAAE2B,OACzCF,SAAQA,IAAII,UAAUU,kBAAkB,KAC3C;AACA,UAAMC,gBAAgBF,gBAAgBX,OACnCF,SAAQA,IAAIgB,YAAY,MAAM,KACjC;AAEA,WAAO;AAAA,MACLC,qBAAqBF,cAAcvB,WAAW;AAAA,MAC9C0B,sBACEH,cAAcvB,SAAS,KACvBuB,cAAcvB,SAASqB,gBAAgBrB;AAAAA,IAC3C;AAAA,EACF;AAEA,QAAM2B,mCAAmCA,CAACC,mBAA4B;AACpE7C,sBAAkB,EACf2B,OAAQF,SAAQA,IAAII,UAAUtB,iBAAiB,KAAK,EACpDuC,QAAQ,CAACrB,KAAKsB,UAAU;AAOvB,UAAIF,kBAAmB,CAACA,kBAAkBE,UAAU,GAAI;AACtDtB,YAAIuB,iBAAiBH,cAAc;AAAA,MACrC;AAAA,IACF,CAAC;AAAA,EACL;AAEA,QAAMI,oCAAoCA,CAACC,WAAoB;AAC7DzC,qBACEyC,SAAS;AAAA,MAAEC,MAAMnD,kBAAkB,EAAEsB,IAAKG,SAAQA,IAAIC,EAAE;AAAA,IAAE,IAAI,CAAC,CACjE;AAAA,EACF;AAEA,SACE,qBAAC,gBAAa,WAAU,2BACtB;AAAA,wBAAC,UACC,IAAG,UACH,aAAY,UACZ,OAAO;AAAA,MAAE0B,cAAc;AAAA,IAAqC,GAE5D,+BAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACtC;AAAA,2BAAC,UAAO,OAAM,UAAS,KAAI,MACzB;AAAA,4BAAC,QAAK,MAAK,aAAW;AAAA,QACtB,oBAAC,QAAK,QAAM,MAAC,6BAAe;AAAA,SAC9B;AAAA,MACA,oBAAC,eACC,WAAU,yBACV,oBAAmB,MACnB,SAAS,MAAMzC,sBAAsB,KAAK,GAAE;AAAA,OAEhD,GACF;AAAA,IACA,oBAAC,UACC,aAAY,MACZ,aAAY,UACZ,OAAO;AAAA,MACL0C,UAAU;AAAA,MACVC,UAAU;AAAA,MACVC,KAAKxC,WAAWyC,kBAAkB;AAAA,IACpC,GAEA,+BAAC,SAAM,KAAI,MACT;AAAA,2BAAC,UACC,OAAM,YACN,KAAI,MACJ,SAAQ,SACR,OAAO;AAAA,QAAEC,cAAc;AAAA,MAAO,GAE9B;AAAA,4BAAC,SACC,8BAAC,UACC,MAAK,MACL,SAAQ,SACR,SAAS,MAAM;AACbhD,2BAAiBG,aAAaE,iBAAiB,CAAC,CAAC;AACjDJ,8BAAoBE,aAAa8C,oBAAoB,CAAC,CAAC;AACvDlD,yBAAeI,aAAaC,eAAe,EAAE;AAAA,QAC/C,GAAE,8BAGJ,GACF;AAAA,QACA,qBAAC,UAAO,KAAI,MACTN;AAAAA,0BACC,qBAAC,SAAM,KAAI,MAAK,SAAQ,UACtB;AAAA,gCAAC,QAAK,SAAQ,aAAY,kBAAI;AAAA,YAC9B,oBAAC,SACC,WAAU,6BACV,OAAO;AAAA,cAAEoD,QAAQnE,cAAc,IAAI;AAAA,YAAE,GAErC,8BAAC,yBACC,cAAa,GACXuC,yBAAyB,EAAEI,uBACvB,SACA,MACL,gBACD,SAASJ,yBAAyB,EAAEI,sBACpC,eACEJ,yBAAyB,EAAEK,uBAE7B,UAAWwB,OACThB,iCAAiCgB,EAAEC,OAAOC,OAAO,GAClD,GAEL;AAAA,aACF;AAAA,UAEDxD,uBACC,qBAAC,SAAM,KAAI,MAAK,SAAQ,UACtB;AAAA,gCAAC,QAAK,SAAQ,aAAY,iBAAG;AAAA,YAC7B,oBAAC,SACC,WAAU,6BACV,OAAO;AAAA,cACLqD,QAAQnE,cAAc,IAAI;AAAA,cAC1BuE,YAAY;AAAA,YACd,GAEA,8BAAC,yBACC,cAAa,GACX1B,0BAA0B,EAAEK,sBACxB,UACA,KACL,gBACD,SAASL,0BAA0B,EAAEK,qBACrC,eACEL,0BAA0B,EAAEM,sBAE9B,UAAWiB,OACTX,kCAAkCW,EAAEC,OAAOC,OAAO,GACnD,GAEL;AAAA,aACF;AAAA,WAEJ;AAAA,SACF;AAAA,MACA,oBAAC,iBACC,YACA,oBACA,OAAa;AAAA,OAEjB,GACF;AAAA,KACF;AAEJ;AAEA,eAAehE;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b4c5c6e923247b6b9cd35cb0358907789db7aa48"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return y=function(){return r},r}y();const Kt=(y().s[0]++,ve.div.withConfig({displayName:"Settings__SettingsRoot",componentId:"sc-10xs3m5-0"})(["display:flex;flex-direction:column;position:absolute;top:0;bottom:0;right:0;border-left:1px solid var(--sscds-table-color-border);background:white;box-shadow:var(--sscds-table-shadow-settings);width:100%;max-width:var(--sscds-table-size-settings-width);z-index:2;.ds-table-settings-panel-item{padding-left:0.5rem;border:1px solid var(--sscds-table-color-border);&:first-of-type{border-top-left-radius:var(--sscds-table-radii-settings-item);border-top-right-radius:var(--sscds-table-radii-settings-item);}&:last-of-type{border-bottom-left-radius:var(--sscds-table-radii-settings-item);border-bottom-right-radius:var(--sscds-table-radii-settings-item);}}.ds-table-settings-panel-item + .ds-table-settings-panel-item{margin-top:-1px;}.ds-table-checkbox-wrapper{display:flex;padding:0 0.5rem;align-items:center;justify-content:center;}"]));y().s[1]++;const Zn=({table:e})=>{y().f[0]++;const{getAllLeafColumns:a,getCenterLeafColumns:n,getLeftLeafColumns:t,getRightLeafColumns:l,getState:o,options:{enableColumnPinning:r,enableHiding:u},setColumnOrder:i,setColumnPinning:c,setColumnVisibility:A,setShowColumnSettings:p,initialState:D}=(y().s[2]++,e),{columnOrder:s,columnPinning:C}=(y().s[3]++,o()),{datatable:g}=(y().s[4]++,j.useContext(wn)),v=(y().s[5]++,Nn(e).length>1),w=(y().s[6]++,j.useMemo(()=>(y().f[1]++,y().s[7]++,s.length>0?(y().b[0][0]++,y().s[8]++,[...t(),...Array.from(new Set(s)).map(F=>(y().f[2]++,y().s[9]++,n().find(N=>(y().f[3]++,y().s[10]++,(N==null?void 0:N.id)===F)))),...l()].filter(Boolean).filter(F=>(y().f[4]++,y().s[11]++,F.columnDef.columnDefType==="data"))):(y().b[0][1]++,y().s[12]++,a().filter(F=>(y().f[5]++,y().s[13]++,F.columnDef.columnDefType==="data")))),[s,C,a,t,l,n]));y().s[14]++;const S=()=>{y().f[6]++;const F=(y().s[15]++,a().filter(U=>(y().f[7]++,y().s[16]++,U.columnDef.enableHiding!==!1))),N=(y().s[17]++,F.filter(U=>(y().f[8]++,y().s[18]++,U.getIsVisible()===!1)));return y().s[19]++,{areAllColumnsVisible:N.length===0,areSomeColumnsVisible:(y().b[1][0]++,N.length>0&&(y().b[1][1]++,N.length<F.length))}};y().s[20]++;const R=()=>{y().f[9]++;const F=(y().s[21]++,a().filter(U=>(y().f[10]++,y().s[22]++,U.columnDef.enablePinning!==!1))),N=(y().s[23]++,F.filter(U=>(y().f[11]++,y().s[24]++,U.getIsPinned()===!1)));return y().s[25]++,{areAllColumnsPinned:N.length===0,areSomeColumnsPinned:(y().b[2][0]++,N.length>0&&(y().b[2][1]++,N.length<F.length))}};y().s[26]++;const P=F=>{y().f[12]++,y().s[27]++,a().filter(N=>(y().f[13]++,y().s[28]++,N.columnDef.enableHiding!==!1)).forEach((N,U)=>{y().f[14]++,y().s[29]++,y().b[4][0]++,F||(y().b[4][1]++,!F&&(y().b[4][2]++,U!==0))?(y().b[3][0]++,y().s[30]++,N.toggleVisibility(F)):y().b[3][1]++})};y().s[31]++;const O=F=>{y().f[15]++,y().s[32]++,c(F?(y().b[5][0]++,{left:a().map(N=>(y().f[16]++,y().s[33]++,N.id))}):(y().b[5][1]++,{}))};return y().s[34]++,m.jsxs(Kt,{className:"ds-table-settings-panel",children:[m.jsx(Ve,{as:"header",paddingSize:"mdPlus",style:{borderBottom:"1px solid var(--sscds-border-color"},children:m.jsxs(oe,{align:"center",gap:"md",justify:"space-between",children:[m.jsxs(oe,{align:"center",gap:"md",children:[m.jsx(Va,{name:"columns-3"}),m.jsx(Fe,{isBold:!0,children:"Column settings"})]}),m.jsx(ka,{ariaLabel:"Close column settings",marginCompensation:"md",onClose:()=>(y().f[17]++,y().s[35]++,p(!1))})]})}),m.jsx(Ve,{paddingSize:"md",paddingType:"squish",style:{overflow:"auto",position:"sticky",top:(y().b[6][0]++,(g==null?void 0:g.settingsOffset)??(y().b[6][1]++,0))},children:m.jsxs(Me,{gap:"sm",children:[m.jsxs(oe,{align:"flex-end",gap:"md",stretch:"start",style:{paddingRight:"1rem"},children:[m.jsx("div",{children:m.jsx(yn,{size:"sm",variant:"ghost",onClick:()=>{y().f[18]++,y().s[36]++,c((y().b[7][0]++,D.columnPinning??(y().b[7][1]++,{}))),y().s[37]++,A((y().b[8][0]++,D.columnVisibility??(y().b[8][1]++,{}))),y().s[38]++,i((y().b[9][0]++,D.columnOrder??(y().b[9][1]++,[])))},children:"Reset to default"})}),m.jsxs(oe,{gap:"sm",children:[(y().b[10][0]++,u&&(y().b[10][1]++,m.jsxs(Me,{gap:"sm",justify:"center",children:[m.jsx(Fe,{variant:"secondary",children:"Show"}),m.jsx("div",{className:"ds-table-checkbox-wrapper",style:{height:mn("sm")},children:m.jsx(He,{"aria-label":`${S().areAllColumnsVisible?(y().b[11][0]++,"Hide"):(y().b[11][1]++,"Show")} all columns`,checked:S().areAllColumnsVisible,indeterminate:S().areSomeColumnsVisible,onChange:F=>(y().f[19]++,y().s[39]++,P(F.target.checked))})})]}))),(y().b[12][0]++,r&&(y().b[12][1]++,m.jsxs(Me,{gap:"sm",justify:"center",children:[m.jsx(Fe,{variant:"secondary",children:"Pin"}),m.jsx("div",{className:"ds-table-checkbox-wrapper",style:{height:mn("sm"),marginLeft:"0.35rem"},children:m.jsx(He,{"aria-label":`${R().areAllColumnsPinned?(y().b[13][0]++,"Unpin"):(y().b[13][1]++,"Pin")} all columns`,checked:R().areAllColumnsPinned,indeterminate:R().areSomeColumnsPinned,onChange:F=>(y().f[20]++,y().s[40]++,O(F.target.checked))})})]})))]})]}),m.jsx(Xn,{allColumns:w,canHideMoreColumns:v,table:e})]})})]})};y().s[41]++;Zn.__docgenInfo={description:"",methods:[],displayName:"Settings",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function rn(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableRoot.tsx",a="32d354f308fdc4a24cdb3d4d840f9880f3ea60e8",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableRoot.tsx",statementMap:{0:{start:{line:3,column:18},end:{line:6,column:3854}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableRoot.tsx"],names:["styled","getColor","getRadii","TableRoot","div","withConfig","displayName","componentId"],mappings:"AAAA,OAAOA,YAAY;AAEnB,SAASC,UAAUC,gBAAgB;AAEnC,MAAMC,YAAYH,OAAOI,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,qVAAA,sBAAA,sBAAA,qDAAA,sBAAA,sBAAA,gqGAAA,GAoBPL,SAAS,OAAO,GACbD,SAAS,aAAa,GACtBA,SAAS,WAAW,GAGvBC,SAAS,OAAO,GACbD,SAAS,aAAa,GACtBA,SAAS,WAAW,CAAC;AAsM7C,eAAeE;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"32d354f308fdc4a24cdb3d4d840f9880f3ea60e8"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return rn=function(){return r},r}rn();const _t=(rn().s[0]++,ve.div.withConfig({displayName:"TableRoot",componentId:"sc-1olpkzw-0"})(["position:relative;width:100%;max-width:100%;overflow-x:auto;transform:scale(1,-1);&[data-settings-state='open']{min-height:37.5rem;display:flex;align-content:flex-end;flex-wrap:wrap;background:var(--sscds-table-color-header-background);}&::-webkit-scrollbar{box-sizing:content-box;height:1.5rem;}&::-webkit-scrollbar-thumb{border-radius:",";background-color:",";border:8px solid ",";}&::-webkit-scrollbar-track-piece{border-radius:",";background-color:",";border:8px solid ",";}.ds-table{width:100%;transform:scale(1,-1);}.ds-table,.ds-table-header,.ds-table-body{display:grid;}.ds-table-row{display:flex;}.ds-table-body-row{align-items:flex-start;justify-content:flex-start;&[data-active='true'] .ds-table-cell{background-color:var(--sscds-table-color-active);}&[data-active]:hover .ds-table-cell{background-color:var(--sscds-color-primary-3);cursor:pointer;}}.ds-table-cell{display:flex;flex-direction:row;padding:var(--sscds-table-spacing-cell);height:100%;background-color:var(--sscds-table-color-background);&[data-pinned]:not([data-pinned='false']){position:sticky;z-index:1;& + .ds-table-cell[data-pinned='false']{border-left:none !important;}}}.ds-table-header-row,.ds-table-row:not(:last-of-type){border-bottom:1px solid var(--sscds-table-color-border);}.ds-table-header-cell{position:relative;flex-direction:column;justify-content:center;min-height:2.5rem;padding:var(--sscds-table-spacing-cell-header);background-color:var(--sscds-table-color-header-background);&:not(:first-of-type){border-left:1px solid var(--sscds-table-color-border) !important;}.ds-table-header-cell-title{text-align:left;font-weight:var(--sscds-table-typography-weight-header);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.ds-table-header-cell-resize-handler{margin:0;border:0;display:inline-block;width:0.25rem;background:var(--sscds-table-color-accent);cursor:col-resize;user-select:none;touch-action:none;position:absolute;top:0;bottom:0;right:0;opacity:0;transition:var(--sscds-action-transition);&:focus-visible{z-index:1;}}.ds-table-header-cell-sort-button{opacity:0;font-size:var(--sscds-font-size-body-sm);}.ds-table-header-cell-column-actions-button-wrapper{display:flex;align-items:center;position:absolute;top:0;right:0;bottom:0;opacity:0;background:linear-gradient( to right,transparent,var(--sscds-table-color-header-background) 20% );padding-block:var(--sscds-space-1x);padding-inline-start:var(--sscds-space-4x);padding-inline-end:var(--sscds-space-2x);transition:var(--sscds-action-transition);}&:hover,&:focus-within{.ds-table-header-cell-sort-button,.ds-table-header-cell-resize-handler,.ds-table-header-cell-column-actions-button-wrapper{opacity:1;}}&[data-sorted]:not([data-sorted='false']) .ds-table-header-cell-sort-button{opacity:1;}}.ds-table-body-cell{align-items:flex-start;}.ds-table-body-cell:has([data-radix-popper-content-wrapper]){z-index:2 !important;}.ds-table-cell-select,.ds-table-cell-expand,.ds-table-cell-actions{min-width:3.5rem;flex:0 0 3.5rem;justify-content:center;padding:var(--sscds-table-spacing-cell-display);}.ds-table-detail-panel-cell{position:sticky;left:0;}.ds-table-select-button-target{width:2rem;height:2rem;display:grid;place-items:center;}&[data-fullscreen='true']{.ds-table{max-height:calc(100vh - var(--sscds-table-height-pagination));overflow:auto;}.ds-table-header{position:sticky;top:0;z-index:2;}}&[data-horizontal-scroll='false']{& .ds-table-cell{box-shadow:none !important;}& .ds-table-body-cell{border:none !important;}}.ds-table-unstyled-button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;text-align:inherit;outline:none;line-height:inherit;-webkit-appearance:none;}"],Ne("round"),xe("primary.500"),xe("neutral.0"),Ne("round"),xe("neutral.300"),xe("neutral.0")));function te(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/ProgressBar.tsx",a="c31e52b4e992bff3312a4bd07988bccafc2bea0e",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/ProgressBar.tsx",statementMap:{0:{start:{line:5,column:13},end:{line:5,column:125}},1:{start:{line:6,column:20},end:{line:15,column:55}},2:{start:{line:7,column:35},end:{line:7,column:77}},3:{start:{line:13,column:6},end:{line:13,column:24}},4:{start:{line:15,column:6},end:{line:15,column:27}},5:{start:{line:16,column:0},end:{line:18,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:21},end:{line:7,column:22}},loc:{start:{line:7,column:35},end:{line:7,column:77}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:11,column:457},end:{line:11,column:458}},loc:{start:{line:13,column:6},end:{line:13,column:24}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:13,column:26},end:{line:13,column:27}},loc:{start:{line:15,column:6},end:{line:15,column:27}},line:15}},branchMap:{0:{loc:{start:{line:13,column:6},end:{line:13,column:24}},type:"cond-expr",locations:[{start:{line:13,column:14},end:{line:13,column:15}},{start:{line:13,column:18},end:{line:13,column:24}}],line:13},1:{loc:{start:{line:15,column:6},end:{line:15,column:27}},type:"cond-expr",locations:[{start:{line:15,column:17},end:{line:15,column:18}},{start:{line:15,column:21},end:{line:15,column:27}}],line:15}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/ProgressBar.tsx"],names:["styled","keyframes","memo","includes","getRadii","wave","ProgressBar","span","withConfig","shouldForwardProp","property","displayName","componentId","isTop","undefined","isBottom","defaultProps","role"],mappings:"AAAA,OAAOA,UAAUC,iBAAiB;AAClC,SAASC,YAAY;AACrB,SAASC,gBAAgB;AAEzB,SAASC,gBAAgB;AAEzB,MAAMC,OAAOJ,UAYZ,CAAA,mGAAA,CAAA;AACD,MAAMK,cAAcN,OAAOO,KAAKC,WAAW;AAAA,EACzCC,mBAAoBC,cAAa,CAACP,SAASO,UAAU,CAAC,SAAS,UAAU,CAAC;AAC5E,CAAC,EAACF,WAAA;AAAA,EAAAG,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,4GAAA,SAAA,uDAAA,gFAAA,sMAAA,GAOU,CAAC;AAAA,EAAEC;AAAM,MAAOA,QAAQ,IAAIC,QAC/B,CAAC;AAAA,EAAEC;AAAS,MAAOA,WAAW,IAAID,QAIxBV,SAAS,SAAS,GAIpBC,IAAI;AAiBrBC,YAAYU,eAAe;AAAA,EACzBC,MAAM;AACR;AAEA,eAAef,KAAKI,WAAW;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c31e52b4e992bff3312a4bd07988bccafc2bea0e"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return te=function(){return r},r}te();const Tt=(te().s[0]++,ua(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"])),ea=(te().s[1]++,ve.span.withConfig({shouldForwardProp:e=>(te().f[0]++,te().s[2]++,!la(e,["isTop","isBottom"]))}).withConfig({displayName:"ProgressBar",componentId:"sc-7v6dfo-0"})(["display:block;background:var(--sscds-brand-100);overflow:hidden;position:absolute;left:0;right:0;bottom:",";top:",";z-index:1;height:0.25rem;width:100%;border-radius:",";-webkit-mask-image:-webkit-radial-gradient(white,black);&::after{animation:"," 2s linear 0.5s infinite;background:linear-gradient( 90deg,transparent,var(--sscds-brand-500),transparent );content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}"],({isTop:e})=>(te().f[1]++,te().s[3]++,e?(te().b[0][0]++,0):(te().b[0][1]++,void 0)),({isBottom:e})=>(te().f[2]++,te().s[4]++,e?(te().b[1][0]++,0):(te().b[1][1]++,void 0)),Ne("default"),Tt));te().s[5]++;ea.defaultProps={role:"progressbar"};const dn=j.memo(ea);function Ae(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useHasHorizontalScroll.ts",a="d7e6d1d4aad0972fc2a20851bb75087f84d17fae",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useHasHorizontalScroll.ts",statementMap:{0:{start:{line:1,column:38},end:{line:11,column:1}},1:{start:{line:5,column:6},end:{line:5,column:11}},2:{start:{line:8,column:6},end:{line:8,column:16}},3:{start:{line:9,column:21},end:{line:9,column:89}},4:{start:{line:9,column:66},end:{line:9,column:85}},5:{start:{line:10,column:2},end:{line:10,column:28}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:38},end:{line:1,column:39}},loc:{start:{line:1,column:49},end:{line:11,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:9,column:52},end:{line:9,column:53}},loc:{start:{line:9,column:66},end:{line:9,column:85}},line:9}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useHasHorizontalScroll.ts"],names:["useHasHorizontalScroll","table","getState","getVisibleFlatColumns","width","totalWidth","reduce","acc","col","getSize"],mappings:"AAEO,aAAMA,yBAAyB,CAAIC,UAAgC;AACxE,QAAM;AAAA,IAAEC;AAAAA,IAAUC;AAAAA,EAAsB,IAAIF;AAC5C,QAAM;AAAA,IAAEG;AAAAA,EAAM,IAAIF,SAAS;AAE3B,QAAMG,aAAaF,sBAAsB,EAAEG,OACzC,CAACC,KAAKC,QAAQD,MAAMC,IAAIC,QAAQ,GAChC,CACF;AAEA,SAAOJ,aAAaD;AACtB;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d7e6d1d4aad0972fc2a20851bb75087f84d17fae"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Ae=function(){return r},r}Ae();Ae().s[0]++;const Yt=e=>{Ae().f[0]++;const{getState:a,getVisibleFlatColumns:n}=(Ae().s[1]++,e),{width:t}=(Ae().s[2]++,a()),l=(Ae().s[3]++,n().reduce((o,r)=>(Ae().f[1]++,Ae().s[4]++,o+r.getSize()),0));return Ae().s[5]++,l>t};function q(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/Table.tsx",a="f85e4131914edc2c3e915e22c9a444da4aff6e5c",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/Table.tsx",statementMap:{0:{start:{line:11,column:14},end:{line:65,column:1}},1:{start:{line:23,column:6},end:{line:23,column:11}},2:{start:{line:31,column:6},end:{line:31,column:16}},3:{start:{line:34,column:6},end:{line:34,column:27}},4:{start:{line:35,column:30},end:{line:35,column:59}},5:{start:{line:36,column:25},end:{line:48,column:65}},6:{start:{line:37,column:20},end:{line:37,column:36}},7:{start:{line:38,column:21},end:{line:38,column:23}},8:{start:{line:39,column:4},end:{line:46,column:5}},9:{start:{line:39,column:17},end:{line:39,column:18}},10:{start:{line:40,column:21},end:{line:40,column:31}},11:{start:{line:41,column:20},end:{line:41,column:36}},12:{start:{line:42,column:6},end:{line:43,column:64}},13:{start:{line:43,column:8},end:{line:43,column:64}},14:{start:{line:44,column:6},end:{line:44,column:70}},15:{start:{line:45,column:6},end:{line:45,column:74}},16:{start:{line:47,column:4},end:{line:47,column:20}},17:{start:{line:49,column:2},end:{line:51,column:36}},18:{start:{line:50,column:4},end:{line:50,column:56}},19:{start:{line:52,column:2},end:{line:64,column:7}},20:{start:{line:56,column:8},end:{line:56,column:31}},21:{start:{line:68,column:0},end:{line:85,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:14},end:{line:11,column:15}},loc:{start:{line:13,column:6},end:{line:65,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:36,column:33},end:{line:36,column:34}},loc:{start:{line:36,column:39},end:{line:48,column:3}},line:36},2:{name:"(anonymous_2)",decl:{start:{line:49,column:12},end:{line:49,column:13}},loc:{start:{line:49,column:18},end:{line:51,column:3}},line:49},3:{name:"(anonymous_3)",decl:{start:{line:55,column:43},end:{line:55,column:44}},loc:{start:{line:55,column:52},end:{line:57,column:7}},line:55}},branchMap:{0:{loc:{start:{line:42,column:6},end:{line:43,column:64}},type:"if",locations:[{start:{line:42,column:6},end:{line:43,column:64}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:42},1:{loc:{start:{line:53,column:145},end:{line:53,column:183}},type:"cond-expr",locations:[{start:{line:53,column:166},end:{line:53,column:172}},{start:{line:53,column:175},end:{line:53,column:183}}],line:53},2:{loc:{start:{line:54,column:6},end:{line:54,column:71}},type:"binary-expr",locations:[{start:{line:54,column:6},end:{line:54,column:18}},{start:{line:54,column:38},end:{line:54,column:71}}],line:54},3:{loc:{start:{line:61,column:6},end:{line:61,column:74}},type:"binary-expr",locations:[{start:{line:61,column:6},end:{line:61,column:18}},{start:{line:61,column:38},end:{line:61,column:74}}],line:61},4:{loc:{start:{line:63,column:4},end:{line:63,column:66}},type:"binary-expr",locations:[{start:{line:63,column:4},end:{line:63,column:22}},{start:{line:63,column:42},end:{line:63,column:66}}],line:63}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/Table.tsx"],names:["useContext","useEffect","useMemo","Body","Header","parseCSSVarId","Settings","TableRoot","ProgressBar","DSContext","useHasHorizontalScroll","Table","table","getFlatHeaders","getState","options","columns","refs","tableRef","columnSizing","columnSizingInfo","columnVisibility","showColumnSettings","showProgress","isFullscreenMode","datatable","hasHorizontalScroll","columnSizeVars","headers","colSizes","i","length","header","colSize","getSize","subHeaders","id","column","onFullscreenModeChange","ref","current"],mappings:"AAkDI,mBAOqB,KACjB,YARJ;AAlDJ,SAASA,YAAYC,WAAWC,eAAe;AAG/C,OAAOC,UAAU;AACjB,OAAOC,YAAY;AACnB,SAASC,qBAAqB;AAC9B,OAAOC,cAAc;AACrB,OAAOC,eAAe;AACtB,OAAOC,iBAAiB;AACxB,SAASC,iBAAiB;AAC1B,SAASC,8BAA8B;AAEvC,MAAMC,QAAQ,CAAK;AAAA,EAAEC;AAAuC,MAAM;AAChE,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,IAAQ;AAAA,IACnBC,MAAM;AAAA,MAAEC;AAAAA,IAAS;AAAA,EACnB,IAAIN;AACJ,QAAM;AAAA,IACJO;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIV,SAAS;AACb,QAAM;AAAA,IAAEW;AAAAA,EAAU,IAAIzB,WAAWS,SAAS;AAC1C,QAAMiB,sBAAsBhB,uBAAuBE,KAAK;AAExD,QAAMe,iBAAiBzB,QAAQ,MAAM;AACnC,UAAM0B,UAAUf,eAAe;AAC/B,UAAMgB,WAAsC,CAAC;AAC7C,aAASC,IAAI,GAAGA,IAAIF,QAAQG,QAAQD,KAAK;AACvC,YAAME,SAASJ,QAAQE,CAAC;AACxB,UAAIG,UAAUD,OAAOE,QAAQ;AAC7B,UAAIF,OAAOG,YAAYJ;AACrBE,kBAAUA,UAAU,OAAOD,OAAOG,WAAWJ,SAAS;AACxDF,eAAU,YAAWxB,cAAc2B,OAAOI,EAAE,CAAE,OAAM,IAAIH;AACxDJ,eAAU,SAAQxB,cAAc2B,OAAOK,OAAOD,EAAE,CAAE,OAAM,IAAIH;AAAAA,IAC9D;AACA,WAAOJ;AAAAA,EAET,GAAG,CAACb,SAASG,cAAcC,kBAAkBC,gBAAgB,CAAC;AAE9DpB,YAAU,MAAM;AACdwB,eAAWa,uBAAuBd,gBAAgB;AAAA,EACpD,GAAG,CAACA,kBAAkBC,SAAS,CAAC;AAEhC,SACE,iCACE;AAAA,yBAAC,aACC,mBAAiBD,kBACjB,0BAAwBE,qBACxB,uBAAqBJ,qBAAqB,SAAS,UACnD,UAAU,GAETC;AAAAA,sBAAgB,oBAAC,eAAY,OAAK,MAAG;AAAA,MACtC,qBAAC,WACC,KAAMgB,SAAQ;AACZrB,iBAASsB,UAAUD;AAAAA,MACrB,GACA,WAAU,YACV,OAAOZ,gBAEP;AAAA,4BAAC,UAAO,OAAa;AAAA,QACrB,oBAAC,QAAK,OAAa;AAAA,SACrB;AAAA,MACCJ,gBAAgB,oBAAC,eAAY,UAAQ,MAAG;AAAA,OAC3C;AAAA,IACCD,sBAAsB,oBAAC,YAAS,OAAgB;AAAA,KACnD;AAEJ;AAEA,eAAeX;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f85e4131914edc2c3e915e22c9a444da4aff6e5c"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return q=function(){return r},r}q();q().s[0]++;const na=({table:e})=>{q().f[0]++;const{getFlatHeaders:a,getState:n,options:{columns:t},refs:{tableRef:l}}=(q().s[1]++,e),{columnSizing:o,columnSizingInfo:r,columnVisibility:u,showColumnSettings:i,showProgress:c,isFullscreenMode:A}=(q().s[2]++,n()),{datatable:p}=(q().s[3]++,j.useContext(wn)),D=(q().s[4]++,Yt(e)),s=(q().s[5]++,j.useMemo(()=>{var v;q().f[1]++;const C=(q().s[6]++,a()),g=(q().s[7]++,{});q().s[8]++;for(let w=(q().s[9]++,0);w<C.length;w++){const S=(q().s[10]++,C[w]);let R=(q().s[11]++,S.getSize());q().s[12]++,(v=S.subHeaders)!=null&&v.length?(q().b[0][0]++,q().s[13]++,R=R*1.05+S.subHeaders.length*2):q().b[0][1]++,q().s[14]++,g[`--header-${en(S.id)}-size`]=R,q().s[15]++,g[`--col-${en(S.column.id)}-size`]=R}return q().s[16]++,g},[t,o,r,u]));return q().s[17]++,j.useEffect(()=>{q().f[2]++,q().s[18]++,p==null||p.onFullscreenModeChange(A)},[A,p]),q().s[19]++,m.jsxs(m.Fragment,{children:[m.jsxs(_t,{"data-fullscreen":A,"data-horizontal-scroll":D,"data-settings-state":i?(q().b[1][0]++,"open"):(q().b[1][1]++,"closed"),tabIndex:0,children:[(q().b[2][0]++,c&&(q().b[2][1]++,m.jsx(dn,{isTop:!0}))),m.jsxs("table",{ref:C=>{q().f[3]++,q().s[20]++,l.current=C},className:"ds-table",style:s,children:[m.jsx(Jn,{table:e}),m.jsx(Tn,{table:e})]}),(q().b[3][0]++,c&&(q().b[3][1]++,m.jsx(dn,{isBottom:!0})))]}),(q().b[4][0]++,i&&(q().b[4][1]++,m.jsx(Zn,{table:e})))]})};q().s[21]++;na.__docgenInfo={description:"",methods:[],displayName:"Table",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function W(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableSurface.tsx",a="01d4b72b40d7c9e5dad25c7062e0ac0b7f47410f",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableSurface.tsx",statementMap:{0:{start:{line:7,column:22},end:{line:12,column:264}},1:{start:{line:12,column:6},end:{line:12,column:263}},2:{start:{line:13,column:21},end:{line:50,column:1}},3:{start:{line:18,column:6},end:{line:18,column:11}},4:{start:{line:21,column:6},end:{line:21,column:16}},5:{start:{line:22,column:2},end:{line:49,column:7}},6:{start:{line:53,column:0},end:{line:70,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:14},end:{line:10,column:15}},loc:{start:{line:12,column:6},end:{line:12,column:263}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:13,column:21},end:{line:13,column:22}},loc:{start:{line:15,column:6},end:{line:50,column:1}},line:15}},branchMap:{0:{loc:{start:{line:12,column:6},end:{line:12,column:263}},type:"binary-expr",locations:[{start:{line:12,column:6},end:{line:12,column:19}},{start:{line:12,column:23},end:{line:12,column:263}}],line:12},1:{loc:{start:{line:23,column:64},end:{line:23,column:96}},type:"cond-expr",locations:[{start:{line:23,column:83},end:{line:23,column:89}},{start:{line:23,column:92},end:{line:23,column:96}}],line:23},2:{loc:{start:{line:41,column:9},end:{line:45,column:12}},type:"cond-expr",locations:[{start:{line:41,column:28},end:{line:45,column:7}},{start:{line:45,column:10},end:{line:45,column:12}}],line:41},3:{loc:{start:{line:47,column:4},end:{line:47,column:81}},type:"binary-expr",locations:[{start:{line:47,column:4},end:{line:47,column:36}},{start:{line:47,column:56},end:{line:47,column:81}}],line:47},4:{loc:{start:{line:48,column:4},end:{line:48,column:119}},type:"binary-expr",locations:[{start:{line:48,column:4},end:{line:48,column:34}},{start:{line:48,column:38},end:{line:48,column:73}},{start:{line:48,column:93},end:{line:48,column:119}}],line:48}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableSurface.tsx"],names:["styled","css","Surface","Pagination","Selection","Table","DatatableRoot","div","withConfig","displayName","componentId","$isFullscreen","TableSurface","table","getState","isFullscreenMode","position","overflow","width","maxWidth","options","enableRowSelection","enablePagination","getRowModel","rows","length"],mappings:"AAiCI,SAuCI,KAvCJ;AAhCJ,OAAOA,UAAUC,WAAW;AAE5B,SAASC,eAAe;AAExB,OAAOC,gBAAgB;AACvB,OAAOC,eAAe;AACtB,OAAOC,WAAW;AAElB,MAAMC,gBAAgBN,OAAOO,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,IAAA,GAAA,GAC5B,CAAC;AAAA,EAAEC;AAAc,MACjBA,iBACAV,gPAaC;AAGL,MAAMW,eAAe,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACvE,QAAM;AAAA,IAAEC;AAAAA,EAAS,IAAID;AACrB,QAAM;AAAA,IAAEE;AAAAA,EAAiB,IAAID,SAAS;AAEtC,SACE,qBAAC,iBAAc,eAAeC,kBAC5B;AAAA,wBAAC,WACC,YAAW,SACX,QAAQA,mBAAmB,SAAS,MACpC,OAAO;AAAA,MACL,kCAAkC;AAAA,MAClC,8BAA8B;AAAA,MAC9B,8BAA8B;AAAA,MAC9B,yCACE;AAAA,MACF,2CACE;AAAA,MACF,8BAA8B;AAAA,MAC9B,8BAA8B;AAAA,MAC9B,qCAAqC;AAAA,MACrC,sCACE;AAAA,MACF,0CACE;AAAA,MACF,iCACE;AAAA,MACF,iCACE;AAAA,MACF,kCACE;AAAA,MACF,qCAAqC;AAAA,MACrC,qCAAqC;AAAA,MACrCC,UAAU;AAAA,MACVC,UAAU;AAAA,MACV,GAAIF,mBACA;AAAA,QACEE,UAAU;AAAA,QACVC,OAAO;AAAA,QACPC,UAAU;AAAA,MACZ,IACA,CAAC;AAAA,IACP,GACA,WAAS,MAET,8BAAC,SAAM,OAAa,GACtB;AAAA,IACCN,MAAMO,QAAQC,sBAAsB,oBAAC,aAAU,OAAgB;AAAA,IAC/DR,MAAMO,QAAQE,oBACbT,MAAMU,YAAY,EAAEC,KAAKC,SAAS,KAAK,oBAAC,cAAW,OAAgB;AAAA,KACvE;AAEJ;AAEA,eAAeb;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"01d4b72b40d7c9e5dad25c7062e0ac0b7f47410f"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return W=function(){return r},r}W();const Qt=(W().s[0]++,ve.div.withConfig({displayName:"TableSurface__DatatableRoot",componentId:"sc-1akd3x4-0"})(["",";"],({$isFullscreen:e})=>(W().f[0]++,W().s[1]++,W().b[0][0]++,e&&(W().b[0][1]++,ia(["--sscds-table-height-pagination:4.25rem;position:fixed;inset:0;padding:0 !important;margin:0 !important;z-index:999;width:100vw;height:100vh;background:white;display:grid;grid-template-rows:1fr var(--sscds-table-height-pagination);"])))));W().s[2]++;const aa=({table:e})=>{W().f[1]++;const{getState:a}=(W().s[3]++,e),{isFullscreenMode:n}=(W().s[4]++,a());return W().s[5]++,m.jsxs(Qt,{$isFullscreen:n,children:[m.jsx(an,{background:"white",radius:n?(W().b[1][0]++,"none"):(W().b[1][1]++,"md"),style:{"--sscds-table-color-background":"var(--sscds-background)","--sscds-table-color-border":"var(--sscds-border-color)","--sscds-table-color-accent":"var(--sscds-color-primary-9)","--sscds-table-color-header-background":"var(--sscds-color-neutral-2)","--sscds-table-color-settings-background":"var(--sscds-table-color-background)","--sscds-table-color-active":"var(--sscds-color-neutral-3)","--sscds-table-spacing-cell":"var(--sscds-space-2x)","--sscds-table-spacing-cell-header":"var(--sscds-space-2x)","--sscds-table-spacing-cell-display":"var(--sscds-space-1x) var(--sscds-space-3x)","--sscds-table-typography-weight-header":"var(--sscds-font-weight-elementlabel-strong)","--sscds-table-shadow-settings":"-6px 0px 12px 0px rgba(0, 0, 0, 0.07)","--sscds-table-shadow-pin-left":"8px 0px 8px 0px rgba(0, 0, 0, 0.05)","--sscds-table-shadow-pin-right":"-8px 0px 8px 0px rgba(0, 0, 0, 0.05)","--sscds-table-size-settings-width":"22.5rem","--sscds-table-radii-settings-item":"var(--sscds-radii-default)",position:"relative",overflow:"clip",...n?(W().b[2][0]++,{overflow:"hidden",width:"100%",maxWidth:"100%"}):(W().b[2][1]++,{})},hasBorder:!0,children:m.jsx(na,{table:e})}),(W().b[3][0]++,e.options.enableRowSelection&&(W().b[3][1]++,m.jsx(jn,{table:e}))),(W().b[4][0]++,e.options.enablePagination&&(W().b[4][1]++,e.getRowModel().rows.length>0)&&(W().b[4][2]++,m.jsx(Hn,{table:e})))]})};W().s[6]++;aa.__docgenInfo={description:"",methods:[],displayName:"TableSurface",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ae(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/Datatable.tsx",a="5b66bbd86e29d27146582dba0aa61d7d911cbf0d",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/Datatable.tsx",statementMap:{0:{start:{line:6,column:18},end:{line:34,column:1}},1:{start:{line:7,column:17},end:{line:7,column:41}},2:{start:{line:14,column:6},end:{line:14,column:11}},3:{start:{line:15,column:52},end:{line:20,column:4}},4:{start:{line:21,column:16},end:{line:30,column:4}},5:{start:{line:31,column:2},end:{line:31,column:42}},6:{start:{line:32,column:2},end:{line:32,column:50}},7:{start:{line:33,column:2},end:{line:33,column:54}},8:{start:{line:37,column:0},end:{line:3924,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:18},end:{line:6,column:19}},loc:{start:{line:6,column:29},end:{line:34,column:1}},line:6}},branchMap:{0:{loc:{start:{line:18,column:18},end:{line:18,column:36}},type:"binary-expr",locations:[{start:{line:18,column:18},end:{line:18,column:30}},{start:{line:18,column:34},end:{line:18,column:36}}],line:18},1:{loc:{start:{line:23,column:7},end:{line:29,column:10}},type:"cond-expr",locations:[{start:{line:23,column:31},end:{line:29,column:5}},{start:{line:29,column:8},end:{line:29,column:10}}],line:23}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/Datatable.tsx"],names:["useLogger","useDatatable","usePersistentState","TableSurface","Datatable","props","logger","id","enablePersistentState","columns","initialState","state","persistentState","persistentStateSetters","enabled","table","log","getState"],mappings:"AAoCS;AAlCT,SAASA,iBAAiB;AAC1B,SAASC,oBAAoB;AAC7B,SAASC,0BAA0B;AAEnC,OAAOC,kBAAkB;AAEzB,MAAMC,YAAY,CAAKC,UAA+B;AACpD,QAAMC,SAASN,UAAU,aAAa;AACtC,QAAM;AAAA,IAAEO;AAAAA,IAAIC;AAAAA,IAAuBC;AAAAA,IAASC;AAAAA,IAAcC;AAAAA,EAAM,IAAIN;AACpE,QAAM,CAACO,iBAAiBC,sBAAsB,IAAIX,mBAC/C,YAAWK,EAAG,IACf;AAAA,IACEO,SAASN;AAAAA,IACTC;AAAAA,IACAC,cAAcA,gBAAgB,CAAC;AAAA,IAC/BL;AAAAA,EACF,CACF;AACA,QAAMU,QAAQd,aAAa;AAAA,IACzB,GAAGI;AAAAA,IACH,GAAIG,wBACA;AAAA,MACEG,OAAO;AAAA,QACL,GAAGA;AAAAA,QACH,GAAGC;AAAAA,MACL;AAAA,MACA,GAAGC;AAAAA,IACL,IACA,CAAC;AAAA,EACP,CAAC;AAEDP,SAAOU,IAAI,sBAAsBD,KAAK;AACtCT,SAAOU,IAAI,mBAAmBD,MAAME,SAAS,CAAC;AAE9C,SAAO,oBAAC,gBAAa,OAAgB;AACvC;AAEA,eAAeb;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5b66bbd86e29d27146582dba0aa61d7d911cbf0d"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ae=function(){return r},r}ae();ae().s[0]++;const ta=e=>{ae().f[0]++;const a=(ae().s[1]++,oa("DatatableV2")),{id:n,enablePersistentState:t,columns:l,initialState:o,state:r}=(ae().s[2]++,e),[u,i]=(ae().s[3]++,qt(`sscds_dt_${n}`,{enabled:t,columns:l,initialState:(ae().b[0][0]++,o??(ae().b[0][1]++,{})),props:e})),c=(ae().s[4]++,Gt({...e,...t?(ae().b[1][0]++,{state:{...r,...u},...i}):(ae().b[1][1]++,{})}));return ae().s[5]++,a.log("Datatable Instance",c),ae().s[6]++,a.log("Datatable State",c.getState()),ae().s[7]++,m.jsx(aa,{table:c})},wl=ta;ae().s[8]++;ta.__docgenInfo={description:"",methods:[],displayName:"Datatable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"DatatableColumnDef",required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}]}],raw:"DatatableColumnDef<D>[]"},description:"Definition of the table columns. Each column definition is REQUIRED to have `header` property\nset. If you define a column that is not used for displaing row data (e.g. have button...),\nplease provide `columnDefType: 'display'`. Setting this property will disable some unnecessary\nfunctionalities and filter out the column from column orderdering."},data:{required:!0,tsType:{name:"Array",elements:[{name:"D"}],raw:"D[]"},description:"Table data that will be displayed."},enableColumnActions:{required:!1,tsType:{name:"boolean"},description:`Enables/disables actions menu in column header with column-related actions.

@default true`},enableColumnOrdering:{required:!1,tsType:{name:"boolean"},description:`Enables/disables column ordering for the table.
Controlled in table column settings panel accessible through the column actions menu.

@default true`},enableColumnPinning:{required:!1,tsType:{name:"boolean"},description:`Enables/disables column pinning for the table. Controlled in the column actions menu or table
column settings panel accessible through the column actions menu.

@default true`},enableColumnResizing:{required:!1,tsType:{name:"boolean"},description:`Enables/disables column resizing for the table. Columns can be resized by dragging handler in
the column header.

@default true`},enableExpanding:{required:!1,tsType:{name:"boolean"},description:`Enables/disables expanding detail panel for all rows.

@default false`},enableExpandAll:{required:!1,tsType:{name:"boolean"},description:`Enables/disables button in the table header that expands all detail panels at once.

@default false`},enableFullScreenMode:{required:!1,tsType:{name:"boolean"},description:`Enables/disables switching between fullscreen and normal mode.

@default true`},enableHiding:{required:!1,tsType:{name:"boolean"},description:`Enables/disables column hiding for the table. Controlled in the column actions menu or table
column settings panel accessible through the column actions menu.

@default true`},enableMultiRowSelection:{required:!1,tsType:{name:"TableOptions['enableMultiRowSelection']",raw:"TableOptions<D>['enableMultiRowSelection']"},description:`Enables/disables selection of multiple rows in the table. If this is \`false\` radio buttons will
be displayed instead of checkboxes and there will be no select all option in the table header.

@default true`},enableMultiSort:{required:!1,tsType:{name:"boolean"},description:"@default false"},enableMultiRemove:{required:!1,tsType:{name:"boolean"},description:"@default false"},enablePagination:{required:!1,tsType:{name:"boolean"},description:`Enables/disables pagination for the table.

@default true`},enablePersistentState:{required:!1,tsType:{name:"boolean"},description:`Enables/disables storing table state into LocalStorage. This will automatically store pinned
and hidden columns, columns order and size and sorting. This property REQUIRES 'id' prop to be
set. The state will be stored in LS with key in format \`sscds_dt_<id>\`.

@default true`},enableRowActions:{required:!1,tsType:{name:"boolean"},description:`Enables/disables row actions column for the table.

@default false`},enableRowSelection:{required:!1,tsType:{name:"TableOptions['enableRowSelection']",raw:"TableOptions<D>['enableRowSelection']"},description:`Enables/disables row selection for the table.

@default true`},enableBatchRowSelection:{required:!1,tsType:{name:"boolean"},description:"Enables/disables batch row selection when `Shift` key is pressed.\n\n@default true"},enableRowsPerPage:{required:!1,tsType:{name:"boolean"},description:`Enables/disables rows per page selector for the table. This property REQUIRES
\`enablePagination\` to be true.

@default false`},enableSelectAll:{required:!1,tsType:{name:"boolean"},description:`Enables/disables checkbox in the table header that selects all rows at once.

@default true`},enableSorting:{required:!1,tsType:{name:"boolean"},description:"@default true"},enableSortingRemoval:{required:!1,tsType:{name:"boolean"},description:"@default true"},id:{required:!0,tsType:{name:"string"},description:"Unique table identifier. Used as id for storing table state to LocalStorage when enablePersistentState is enabled"},initialState:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`Omit<
  InitialTableState,
  'columnFilter' | 'globalFilter' | 'grouping' | 'rowPinning'
> &
  CustomState`,elements:[{name:"Omit",elements:[{name:"InitialTableState"},{name:"union",raw:"'columnFilter' | 'globalFilter' | 'grouping' | 'rowPinning'",elements:[{name:"literal",value:"'columnFilter'"},{name:"literal",value:"'globalFilter'"},{name:"literal",value:"'grouping'"},{name:"literal",value:"'rowPinning'"}]}],raw:`Omit<
  InitialTableState,
  'columnFilter' | 'globalFilter' | 'grouping' | 'rowPinning'
>`},{name:"CustomState"}]}],raw:"Partial<DatatableInitialState>"},description:`Default state of the table. This is used when table is initialized and is used when state is
restored to default.`},onFullscreenModeChange:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:"If provided, this function will be called with an `updaterFn` when `state.isFullscreenMode`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.isFullscreenMode` option."},onShowColumnSettings:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:"If provided, this function will be called with an `updaterFn` when `state.showColumnSetting`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.showColumnSettings` option."},onActiveRowIdChange:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:"If provided, this function will be called with an `updaterFn` when `state.activeRowId`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.activeRowId` option."},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"void"}}},description:"Callback that is called when user clicks anywhere in the row area. Clicking on the selection\ncheckbox, row expand button and the row actions stops event propagation and does not trigger\nthe row click callback. We are passing argmuments into the callback:\n - `row` - current row, row data are accessible through `row.original`\n - `table` - current instance of the table"},renderDetailPanel:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"row",value:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
}`,elements:[{name:"Omit",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},{name:"literal",value:"'getVisibleCells'"}],raw:"Omit<Row<D>, 'getVisibleCells'>"},{name:"signature",type:"object",raw:`{
  getVisibleCells: () => DatatableCell<D>[];
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Cell",elements:[{name:"D"},{name:"unknown"}],raw:"Cell<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D>;
    column: DatatableColumn<D>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"intersection",raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,elements:[{name:"Omit",elements:[{name:"Column",elements:[{name:"D"},{name:"unknown"}],raw:"Column<D, V>"},{name:"union",raw:"'columnDef' | 'columns'",elements:[{name:"literal",value:"'columnDef'"},{name:"literal",value:"'columns'"}]}],raw:`Omit<
  Column<D, V>,
  'columnDef' | 'columns'
>`},{name:"signature",type:"object",raw:`{
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
}`,signature:{properties:[{key:"columnDef",value:{name:"intersection",raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"ColumnDef",elements:[{name:"D"},{name:"unknown"}],raw:"ColumnDef<D, V>"},{name:"union",raw:`| 'accessorFn'
| 'cell'
| 'header'
| 'aggregatedCell'
| 'aggregationFn'
| 'enableColumnFilter'
| 'enableGlobalFilter'
| 'enableGrouping'
| 'filterFn'
| 'footer'
| 'getGroupingValue'
| 'getUniqueValues'`,elements:[{name:"literal",value:"'accessorFn'"},{name:"literal",value:"'cell'"},{name:"literal",value:"'header'"},{name:"literal",value:"'aggregatedCell'"},{name:"literal",value:"'aggregationFn'"},{name:"literal",value:"'enableColumnFilter'"},{name:"literal",value:"'enableGlobalFilter'"},{name:"literal",value:"'enableGrouping'"},{name:"literal",value:"'filterFn'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'getGroupingValue'"},{name:"literal",value:"'getUniqueValues'"}]}],raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`},{name:"signature",type:"object",raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,signature:{properties:[{key:"accessorFn",value:{name:"AccessorFn",elements:[{name:"D"},{name:"unknown"}],raw:"AccessorFn<D, V>",required:!1},description:`You can use this to compose cell value from multiple keys in data object.

Example:
If your data looks like:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
\`\`\`

You can extract full name with:
\`\`\`
{
  header: 'Full name'
  accessorFn: row => \`\${row.firstName} \${row.lastName}
  id: 'fullname
}`},{key:"accessorKey",value:{name:"union",raw:"DeepKeys<D> | (string & Record<string, unknown>)",elements:[{name:"DeepKeys",elements:[{name:"D"}],raw:"DeepKeys<D>"},{name:"unknown"}],required:!1},description:`Points cell value to single key in your data object.

Example:
\`\`\`
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

{
  header: 'Age'
  accessorKey: 'age
}`},{key:"header",value:{name:"string",required:!0},description:"`header` is used as a readable column name on multiple places withing the table UI.\n\n If you want to render custom JSX in that table header cell use `headerComponent` property."},{key:"headerComponent",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column header."},{key:"cell",value:{name:"signature",type:"function",raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"cell",value:{name:"DatatableCell",required:!0}},{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"Provide custom implementation for showing column value."},{key:"columnDefType",value:{name:"union",raw:"'display' | 'data'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'data'"}],required:!1},description:`Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
to \`display\`. This will filter out the column from column ordering and disables table functions
(pinning, sizing, sorting, etc).

@default data`},{key:"enableColumnActions",value:{name:"boolean",required:!1},description:"Enables/disables actions menu in header for given column."},{key:"renderHeaderTooltip",value:{name:"signature",type:"function",raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"intersection",raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,elements:[{name:"Omit",elements:[{name:"Header",elements:[{name:"D"},{name:"unknown"}],raw:"Header<D, unknown>"},{name:"union",raw:"'column' | 'getContext'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'getContext'"}]}],raw:`Omit<
  Header<D, unknown>,
  'column' | 'getContext'
>`},{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"getContext",value:{name:"signature",type:"function",raw:`() => {
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  column: DatatableColumn<D>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Provide your own implementation of row details panel. This property accepts React component\nwith properties:\n - `row` - current row, row data are accessible through `row.original`\n - `table` - current instance of the table"},renderNoDataFallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { table: DatatableInstance<D> }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ table: DatatableInstance<D> }",signature:{properties:[{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"You can provide your own implementation of the state when there are no data in the table. This\nproperty accepts React component with one property `table` which holds current instance of the\ntable."},renderRowSelectionActions:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  selectedRows: D[];
  totalRowCount: number;
  table: DatatableInstance<D>;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  selectedRows: D[];
  totalRowCount: number;
  table: DatatableInstance<D>;
}`,signature:{properties:[{key:"selectedRows",value:{name:"Array",elements:[{name:"D"}],raw:"D[]",required:!0}},{key:"totalRowCount",value:{name:"number",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"You can provide your own implementation of the row actions container. This property accepts\nReact component with properties:\n - `selectedRows` - array of currently selected rows\n - `totalRowCount` - count of all rows in the table\n - `table` - current instance of the table"},rowActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`null | {
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: {
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: {
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconName",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconType",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}},required:!0}},{key:"isDisabled",value:{name:"union",raw:`| Type
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"isDestructive",value:{name:"boolean",required:!1}}]}}]}],raw:"DatatableRowAction<D>[]"},description:`List of actions available on the row data. Actions will be rendered as last column of the table.
If only one action is provided it will be rendered directly in the column. If multiple actions
are provided actions will be rendered in dropdown menu.`},rowCount:{required:!1,tsType:{name:"number"},description:`Expected number of rows in the dataset which is used for displaying pagination correctly when
pagination is not managed internally. This property is REQUIRED for the manual (managed,
server-side) pagination.`},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"List of options for the row count displayed on the current page.\n\ndefault: `[10, 25, 50, 100]`"},selectAllMode:{required:!1,tsType:{name:"union",raw:"'page' | 'all'",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'all'"}]},description:"Switch mode for the select all checkbox in the table header. When `page` is set checkbox will\nselect all rows in the current page. When `all` is set checkbox will select all rows in the\ntable.\n\n@default page"},state:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`Omit<
  TableState,
  'columnFilters' | 'globalFilter' | 'grouping' | 'rowPinning'
> &
  CustomState`,elements:[{name:"Omit",elements:[{name:"TableState"},{name:"union",raw:"'columnFilters' | 'globalFilter' | 'grouping' | 'rowPinning'",elements:[{name:"literal",value:"'columnFilters'"},{name:"literal",value:"'globalFilter'"},{name:"literal",value:"'grouping'"},{name:"literal",value:"'rowPinning'"}]}],raw:`Omit<
  TableState,
  'columnFilters' | 'globalFilter' | 'grouping' | 'rowPinning'
>`},{name:"CustomState"}]}],raw:"Partial<DatatableState>"},description:"Current state of the table. Used when you need to manage table state on your own."}},composes:["Omit"]};export{wl as D};
//# sourceMappingURL=Datatable-CRiRCi20.js.map
