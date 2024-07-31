import{j as m}from"./jsx-runtime-Nms4Y4qS.js";import{i as In,u as Rn}from"./useLogger-D4I9buOf.js";import{r as R}from"./index-BwDkhjyp.js";import{B as A,b as Ne,M as He,c as U,d as T,$ as je,a as Se}from"./menuElements-HsU9kfTS.js";import{c as te}from"./index-CVyJwDg7.js";import{p as Pe}from"./pluck-CCxX0LJC.js";import{u as qn}from"./useLocalStorageState-CgPcEN2x.js";import{s as Y,E as ie,r as le,K as Oe,h as Fn,k as W,G as xn,W as Gn,A as Nn}from"./space-B9R18Mwn.js";import{S as Te}from"./Surface-Cs7tekjF.js";import{P as M}from"./Padbox-BrtZqAZY.js";import{S as ne}from"./Stack-B_iJg7G-.js";import{I as j}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{u as Hn}from"./useContainerQuery-BBpl-5uo.js";import{P as jn}from"./Paragraph-DD2XWiUD.js";import{T as ae}from"./Text-C1sA-5dj.js";import{S as Sn}from"./Skeleton-BoUdprqo.js";import{T as Re}from"./Tooltip-BAcCN_rY.js";import{B as Ae}from"./Button-CKE-X77u.js";import{C as Pn}from"./CloseButton-CuyKiBXp.js";import{I as On}from"./Icon-B7DxM8PH.js";import{u as Tn,C as An,a as En,b as qe,s as $n,K as Kn,P as _n,D as zn,c as Yn,S as Un,v as Mn}from"./sortable.esm-DD_xGjRI.js";import{r as Ln,a as Xn}from"./modifiers.esm-CDknwSvc.js";import{a as Ee}from"./DSProvider-DzIDhM_J.js";/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function _(e,a){return typeof e=="function"?e(a):e}function S(e,a){return n=>{a.setState(t=>({...t,[e]:_(n,t[e])}))}}function ue(e){return e instanceof Function}function Jn(e){return Array.isArray(e)&&e.every(a=>typeof a=="number")}function Bn(e,a){const n=[],t=l=>{l.forEach(r=>{n.push(r);const o=a(r);o!=null&&o.length&&t(o)})};return t(e),n}function y(e,a,n){let t=[],l;return r=>{let o;n.key&&n.debug&&(o=Date.now());const u=e(r);if(!(u.length!==t.length||u.some((d,b)=>t[b]!==d)))return l;t=u;let c;if(n.key&&n.debug&&(c=Date.now()),l=a(...u),n==null||n.onChange==null||n.onChange(l),n.key&&n.debug&&n!=null&&n.debug()){const d=Math.round((Date.now()-o)*100)/100,b=Math.round((Date.now()-c)*100)/100,D=b/16,s=(p,g)=>{for(p=String(p);p.length<g;)p=" "+p;return p};console.info(`%c⏱ ${s(b,5)} /${s(d,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*D,120))}deg 100% 31%);`,n==null?void 0:n.key)}return l}}function h(e,a,n,t){return{debug:()=>{var l;return(l=e==null?void 0:e.debugAll)!=null?l:e[a]},key:!1,onChange:t}}function Wn(e,a,n,t){const l=()=>{var o;return(o=r.getValue())!=null?o:e.options.renderFallbackValue},r={id:`${a.id}_${n.id}`,row:a,column:n,getValue:()=>a.getValue(t),renderValue:l,getContext:y(()=>[e,n,a,r],(o,u,i,c)=>({table:o,column:u,row:i,cell:c,getValue:c.getValue,renderValue:c.renderValue}),h(e.options,"debugCells"))};return e._features.forEach(o=>{o.createCell==null||o.createCell(r,n,a,e)},{}),r}function Qn(e,a,n,t){var l,r;const u={...e._getDefaultColumnDef(),...a},i=u.accessorKey;let c=(l=(r=u.id)!=null?r:i?i.replace(".","_"):void 0)!=null?l:typeof u.header=="string"?u.header:void 0,d;if(u.accessorFn?d=u.accessorFn:i&&(i.includes(".")?d=D=>{let s=D;for(const g of i.split(".")){var p;s=(p=s)==null?void 0:p[g]}return s}:d=D=>D[u.accessorKey]),!c)throw new Error;let b={id:`${String(c)}`,accessorFn:d,parent:t,depth:n,columnDef:u,columns:[],getFlatColumns:y(()=>[!0],()=>{var D;return[b,...(D=b.columns)==null?void 0:D.flatMap(s=>s.getFlatColumns())]},h(e.options,"debugColumns")),getLeafColumns:y(()=>[e._getOrderColumnsFn()],D=>{var s;if((s=b.columns)!=null&&s.length){let p=b.columns.flatMap(g=>g.getLeafColumns());return D(p)}return[b]},h(e.options,"debugColumns"))};for(const D of e._features)D.createColumn==null||D.createColumn(b,e);return b}const H="debugHeaders";function Fe(e,a,n){var t;let r={id:(t=n.id)!=null?t:a.id,column:a,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const o=[],u=i=>{i.subHeaders&&i.subHeaders.length&&i.subHeaders.map(u),o.push(i)};return u(r),o},getContext:()=>({table:e,header:r,column:a})};return e._features.forEach(o=>{o.createHeader==null||o.createHeader(r,e)}),r}const Zn={createTable:e=>{e.getHeaderGroups=y(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,l)=>{var r,o;const u=(r=t==null?void 0:t.map(b=>n.find(D=>D.id===b)).filter(Boolean))!=null?r:[],i=(o=l==null?void 0:l.map(b=>n.find(D=>D.id===b)).filter(Boolean))!=null?o:[],c=n.filter(b=>!(t!=null&&t.includes(b.id))&&!(l!=null&&l.includes(b.id)));return Q(a,[...u,...c,...i],e)},h(e.options,H)),e.getCenterHeaderGroups=y(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,l)=>(n=n.filter(r=>!(t!=null&&t.includes(r.id))&&!(l!=null&&l.includes(r.id))),Q(a,n,e,"center")),h(e.options,H)),e.getLeftHeaderGroups=y(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(a,n,t)=>{var l;const r=(l=t==null?void 0:t.map(o=>n.find(u=>u.id===o)).filter(Boolean))!=null?l:[];return Q(a,r,e,"left")},h(e.options,H)),e.getRightHeaderGroups=y(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(a,n,t)=>{var l;const r=(l=t==null?void 0:t.map(o=>n.find(u=>u.id===o)).filter(Boolean))!=null?l:[];return Q(a,r,e,"right")},h(e.options,H)),e.getFooterGroups=y(()=>[e.getHeaderGroups()],a=>[...a].reverse(),h(e.options,H)),e.getLeftFooterGroups=y(()=>[e.getLeftHeaderGroups()],a=>[...a].reverse(),h(e.options,H)),e.getCenterFooterGroups=y(()=>[e.getCenterHeaderGroups()],a=>[...a].reverse(),h(e.options,H)),e.getRightFooterGroups=y(()=>[e.getRightHeaderGroups()],a=>[...a].reverse(),h(e.options,H)),e.getFlatHeaders=y(()=>[e.getHeaderGroups()],a=>a.map(n=>n.headers).flat(),h(e.options,H)),e.getLeftFlatHeaders=y(()=>[e.getLeftHeaderGroups()],a=>a.map(n=>n.headers).flat(),h(e.options,H)),e.getCenterFlatHeaders=y(()=>[e.getCenterHeaderGroups()],a=>a.map(n=>n.headers).flat(),h(e.options,H)),e.getRightFlatHeaders=y(()=>[e.getRightHeaderGroups()],a=>a.map(n=>n.headers).flat(),h(e.options,H)),e.getCenterLeafHeaders=y(()=>[e.getCenterFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),h(e.options,H)),e.getLeftLeafHeaders=y(()=>[e.getLeftFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),h(e.options,H)),e.getRightLeafHeaders=y(()=>[e.getRightFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),h(e.options,H)),e.getLeafHeaders=y(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(a,n,t)=>{var l,r,o,u,i,c;return[...(l=(r=a[0])==null?void 0:r.headers)!=null?l:[],...(o=(u=n[0])==null?void 0:u.headers)!=null?o:[],...(i=(c=t[0])==null?void 0:c.headers)!=null?i:[]].map(d=>d.getLeafHeaders()).flat()},h(e.options,H))}};function Q(e,a,n,t){var l,r;let o=0;const u=function(D,s){s===void 0&&(s=1),o=Math.max(o,s),D.filter(p=>p.getIsVisible()).forEach(p=>{var g;(g=p.columns)!=null&&g.length&&u(p.columns,s+1)},0)};u(e);let i=[];const c=(D,s)=>{const p={depth:s,id:[t,`${s}`].filter(Boolean).join("_"),headers:[]},g=[];D.forEach(f=>{const w=[...g].reverse()[0],C=f.column.depth===p.depth;let v,q=!1;if(C&&f.column.parent?v=f.column.parent:(v=f.column,q=!0),w&&(w==null?void 0:w.column)===v)w.subHeaders.push(f);else{const k=Fe(n,v,{id:[t,s,v.id,f==null?void 0:f.id].filter(Boolean).join("_"),isPlaceholder:q,placeholderId:q?`${g.filter(V=>V.column===v).length}`:void 0,depth:s,index:g.length});k.subHeaders.push(f),g.push(k)}p.headers.push(f),f.headerGroup=p}),i.push(p),s>0&&c(g,s-1)},d=a.map((D,s)=>Fe(n,D,{depth:o,index:s}));c(d,o-1),i.reverse();const b=D=>D.filter(p=>p.column.getIsVisible()).map(p=>{let g=0,f=0,w=[0];p.subHeaders&&p.subHeaders.length?(w=[],b(p.subHeaders).forEach(v=>{let{colSpan:q,rowSpan:k}=v;g+=q,w.push(k)})):g=1;const C=Math.min(...w);return f=f+C,p.colSpan=g,p.rowSpan=f,{colSpan:g,rowSpan:f}});return b((l=(r=i[0])==null?void 0:r.headers)!=null?l:[]),i}const ea=(e,a,n,t,l,r,o)=>{let u={id:a,index:t,original:n,depth:l,parentId:o,_valuesCache:{},_uniqueValuesCache:{},getValue:i=>{if(u._valuesCache.hasOwnProperty(i))return u._valuesCache[i];const c=e.getColumn(i);if(c!=null&&c.accessorFn)return u._valuesCache[i]=c.accessorFn(u.original,t),u._valuesCache[i]},getUniqueValues:i=>{if(u._uniqueValuesCache.hasOwnProperty(i))return u._uniqueValuesCache[i];const c=e.getColumn(i);if(c!=null&&c.accessorFn)return c.columnDef.getUniqueValues?(u._uniqueValuesCache[i]=c.columnDef.getUniqueValues(u.original,t),u._uniqueValuesCache[i]):(u._uniqueValuesCache[i]=[u.getValue(i)],u._uniqueValuesCache[i])},renderValue:i=>{var c;return(c=u.getValue(i))!=null?c:e.options.renderFallbackValue},subRows:r??[],getLeafRows:()=>Bn(u.subRows,i=>i.subRows),getParentRow:()=>u.parentId?e.getRow(u.parentId,!0):void 0,getParentRows:()=>{let i=[],c=u;for(;;){const d=c.getParentRow();if(!d)break;i.push(d),c=d}return i.reverse()},getAllCells:y(()=>[e.getAllLeafColumns()],i=>i.map(c=>Wn(e,u,c,c.id)),h(e.options,"debugRows")),_getAllCellsByColumnId:y(()=>[u.getAllCells()],i=>i.reduce((c,d)=>(c[d.column.id]=d,c),{}),h(e.options,"debugRows"))};for(let i=0;i<e._features.length;i++){const c=e._features[i];c==null||c.createRow==null||c.createRow(u,e)}return u},na={createColumn:(e,a)=>{e._getFacetedRowModel=a.options.getFacetedRowModel&&a.options.getFacetedRowModel(a,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():a.getPreFilteredRowModel(),e._getFacetedUniqueValues=a.options.getFacetedUniqueValues&&a.options.getFacetedUniqueValues(a,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=a.options.getFacetedMinMaxValues&&a.options.getFacetedMinMaxValues(a,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},$e=(e,a,n)=>{var t;const l=n.toLowerCase();return!!(!((t=e.getValue(a))==null||(t=t.toString())==null||(t=t.toLowerCase())==null)&&t.includes(l))};$e.autoRemove=e=>P(e);const Ke=(e,a,n)=>{var t;return!!(!((t=e.getValue(a))==null||(t=t.toString())==null)&&t.includes(n))};Ke.autoRemove=e=>P(e);const _e=(e,a,n)=>{var t;return((t=e.getValue(a))==null||(t=t.toString())==null?void 0:t.toLowerCase())===(n==null?void 0:n.toLowerCase())};_e.autoRemove=e=>P(e);const ze=(e,a,n)=>{var t;return(t=e.getValue(a))==null?void 0:t.includes(n)};ze.autoRemove=e=>P(e)||!(e!=null&&e.length);const Ye=(e,a,n)=>!n.some(t=>{var l;return!((l=e.getValue(a))!=null&&l.includes(t))});Ye.autoRemove=e=>P(e)||!(e!=null&&e.length);const Ue=(e,a,n)=>n.some(t=>{var l;return(l=e.getValue(a))==null?void 0:l.includes(t)});Ue.autoRemove=e=>P(e)||!(e!=null&&e.length);const Me=(e,a,n)=>e.getValue(a)===n;Me.autoRemove=e=>P(e);const Le=(e,a,n)=>e.getValue(a)==n;Le.autoRemove=e=>P(e);const Ve=(e,a,n)=>{let[t,l]=n;const r=e.getValue(a);return r>=t&&r<=l};Ve.resolveFilterValue=e=>{let[a,n]=e,t=typeof a!="number"?parseFloat(a):a,l=typeof n!="number"?parseFloat(n):n,r=a===null||Number.isNaN(t)?-1/0:t,o=n===null||Number.isNaN(l)?1/0:l;if(r>o){const u=r;r=o,o=u}return[r,o]};Ve.autoRemove=e=>P(e)||P(e[0])&&P(e[1]);const E={includesString:$e,includesStringSensitive:Ke,equalsString:_e,arrIncludes:ze,arrIncludesAll:Ye,arrIncludesSome:Ue,equals:Me,weakEquals:Le,inNumberRange:Ve};function P(e){return e==null||e===""}const aa={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:S("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,a)=>{e.getAutoFilterFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);return typeof t=="string"?E.includesString:typeof t=="number"?E.inNumberRange:typeof t=="boolean"||t!==null&&typeof t=="object"?E.equals:Array.isArray(t)?E.arrIncludes:E.weakEquals},e.getFilterFn=()=>{var n,t;return ue(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(n=(t=a.options.filterFns)==null?void 0:t[e.columnDef.filterFn])!=null?n:E[e.columnDef.filterFn]},e.getCanFilter=()=>{var n,t,l;return((n=e.columnDef.enableColumnFilter)!=null?n:!0)&&((t=a.options.enableColumnFilters)!=null?t:!0)&&((l=a.options.enableFilters)!=null?l:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var n;return(n=a.getState().columnFilters)==null||(n=n.find(t=>t.id===e.id))==null?void 0:n.value},e.getFilterIndex=()=>{var n,t;return(n=(t=a.getState().columnFilters)==null?void 0:t.findIndex(l=>l.id===e.id))!=null?n:-1},e.setFilterValue=n=>{a.setColumnFilters(t=>{const l=e.getFilterFn(),r=t==null?void 0:t.find(d=>d.id===e.id),o=_(n,r?r.value:void 0);if(xe(l,o,e)){var u;return(u=t==null?void 0:t.filter(d=>d.id!==e.id))!=null?u:[]}const i={id:e.id,value:o};if(r){var c;return(c=t==null?void 0:t.map(d=>d.id===e.id?i:d))!=null?c:[]}return t!=null&&t.length?[...t,i]:[i]})}},createRow:(e,a)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=a=>{const n=e.getAllLeafColumns(),t=l=>{var r;return(r=_(a,l))==null?void 0:r.filter(o=>{const u=n.find(i=>i.id===o.id);if(u){const i=u.getFilterFn();if(xe(i,o.value,u))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(t)},e.resetColumnFilters=a=>{var n,t;e.setColumnFilters(a?[]:(n=(t=e.initialState)==null?void 0:t.columnFilters)!=null?n:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function xe(e,a,n){return(e&&e.autoRemove?e.autoRemove(a,n):!1)||typeof a>"u"||typeof a=="string"&&!a}const ta=(e,a,n)=>n.reduce((t,l)=>{const r=l.getValue(e);return t+(typeof r=="number"?r:0)},0),la=(e,a,n)=>{let t;return n.forEach(l=>{const r=l.getValue(e);r!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}),t},ra=(e,a,n)=>{let t;return n.forEach(l=>{const r=l.getValue(e);r!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}),t},oa=(e,a,n)=>{let t,l;return n.forEach(r=>{const o=r.getValue(e);o!=null&&(t===void 0?o>=o&&(t=l=o):(t>o&&(t=o),l<o&&(l=o)))}),[t,l]},ua=(e,a)=>{let n=0,t=0;if(a.forEach(l=>{let r=l.getValue(e);r!=null&&(r=+r)>=r&&(++n,t+=r)}),n)return t/n},ia=(e,a)=>{if(!a.length)return;const n=a.map(r=>r.getValue(e));if(!Jn(n))return;if(n.length===1)return n[0];const t=Math.floor(n.length/2),l=n.sort((r,o)=>r-o);return n.length%2!==0?l[t]:(l[t-1]+l[t])/2},sa=(e,a)=>Array.from(new Set(a.map(n=>n.getValue(e))).values()),ma=(e,a)=>new Set(a.map(n=>n.getValue(e))).size,ca=(e,a)=>a.length,se={sum:ta,min:la,max:ra,extent:oa,mean:ua,median:ia,unique:sa,uniqueCount:ma,count:ca},da={getDefaultColumnDef:()=>({aggregatedCell:e=>{var a,n;return(a=(n=e.getValue())==null||n.toString==null?void 0:n.toString())!=null?a:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:S("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,a)=>{e.toggleGrouping=()=>{a.setGrouping(n=>n!=null&&n.includes(e.id)?n.filter(t=>t!==e.id):[...n??[],e.id])},e.getCanGroup=()=>{var n,t;return((n=e.columnDef.enableGrouping)!=null?n:!0)&&((t=a.options.enableGrouping)!=null?t:!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.includes(e.id)},e.getGroupedIndex=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const n=e.getCanGroup();return()=>{n&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);if(typeof t=="number")return se.sum;if(Object.prototype.toString.call(t)==="[object Date]")return se.extent},e.getAggregationFn=()=>{var n,t;if(!e)throw new Error;return ue(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(n=(t=a.options.aggregationFns)==null?void 0:t[e.columnDef.aggregationFn])!=null?n:se[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=a=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(a),e.resetGrouping=a=>{var n,t;e.setGrouping(a?[]:(n=(t=e.initialState)==null?void 0:t.grouping)!=null?n:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,a)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=n=>{if(e._groupingValuesCache.hasOwnProperty(n))return e._groupingValuesCache[n];const t=a.getColumn(n);return t!=null&&t.columnDef.getGroupingValue?(e._groupingValuesCache[n]=t.columnDef.getGroupingValue(e.original),e._groupingValuesCache[n]):e.getValue(n)},e._groupingValuesCache={}},createCell:(e,a,n,t)=>{e.getIsGrouped=()=>a.getIsGrouped()&&a.id===n.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&a.getIsGrouped(),e.getIsAggregated=()=>{var l;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((l=n.subRows)!=null&&l.length)}}};function Da(e,a,n){if(!(a!=null&&a.length)||!n)return e;const t=e.filter(r=>!a.includes(r.id));return n==="remove"?t:[...a.map(r=>e.find(o=>o.id===r)).filter(Boolean),...t]}const ba={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:S("columnOrder",e)}),createColumn:(e,a)=>{e.getIndex=y(n=>[J(a,n)],n=>n.findIndex(t=>t.id===e.id),h(a.options,"debugColumns")),e.getIsFirstColumn=n=>{var t;return((t=J(a,n)[0])==null?void 0:t.id)===e.id},e.getIsLastColumn=n=>{var t;const l=J(a,n);return((t=l[l.length-1])==null?void 0:t.id)===e.id}},createTable:e=>{e.setColumnOrder=a=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(a),e.resetColumnOrder=a=>{var n;e.setColumnOrder(a?[]:(n=e.initialState.columnOrder)!=null?n:[])},e._getOrderColumnsFn=y(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(a,n,t)=>l=>{let r=[];if(!(a!=null&&a.length))r=l;else{const o=[...a],u=[...l];for(;u.length&&o.length;){const i=o.shift(),c=u.findIndex(d=>d.id===i);c>-1&&r.push(u.splice(c,1)[0])}r=[...r,...u]}return Da(r,n,t)},h(e.options,"debugTable"))}},me=()=>({left:[],right:[]}),ga={getInitialState:e=>({columnPinning:me(),...e}),getDefaultOptions:e=>({onColumnPinningChange:S("columnPinning",e)}),createColumn:(e,a)=>{e.pin=n=>{const t=e.getLeafColumns().map(l=>l.id).filter(Boolean);a.setColumnPinning(l=>{var r,o;if(n==="right"){var u,i;return{left:((u=l==null?void 0:l.left)!=null?u:[]).filter(b=>!(t!=null&&t.includes(b))),right:[...((i=l==null?void 0:l.right)!=null?i:[]).filter(b=>!(t!=null&&t.includes(b))),...t]}}if(n==="left"){var c,d;return{left:[...((c=l==null?void 0:l.left)!=null?c:[]).filter(b=>!(t!=null&&t.includes(b))),...t],right:((d=l==null?void 0:l.right)!=null?d:[]).filter(b=>!(t!=null&&t.includes(b)))}}return{left:((r=l==null?void 0:l.left)!=null?r:[]).filter(b=>!(t!=null&&t.includes(b))),right:((o=l==null?void 0:l.right)!=null?o:[]).filter(b=>!(t!=null&&t.includes(b)))}})},e.getCanPin=()=>e.getLeafColumns().some(t=>{var l,r,o;return((l=t.columnDef.enablePinning)!=null?l:!0)&&((r=(o=a.options.enableColumnPinning)!=null?o:a.options.enablePinning)!=null?r:!0)}),e.getIsPinned=()=>{const n=e.getLeafColumns().map(u=>u.id),{left:t,right:l}=a.getState().columnPinning,r=n.some(u=>t==null?void 0:t.includes(u)),o=n.some(u=>l==null?void 0:l.includes(u));return r?"left":o?"right":!1},e.getPinnedIndex=()=>{var n,t;const l=e.getIsPinned();return l?(n=(t=a.getState().columnPinning)==null||(t=t[l])==null?void 0:t.indexOf(e.id))!=null?n:-1:0}},createRow:(e,a)=>{e.getCenterVisibleCells=y(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left,a.getState().columnPinning.right],(n,t,l)=>{const r=[...t??[],...l??[]];return n.filter(o=>!r.includes(o.column.id))},h(a.options,"debugRows")),e.getLeftVisibleCells=y(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left],(n,t)=>(t??[]).map(r=>n.find(o=>o.column.id===r)).filter(Boolean).map(r=>({...r,position:"left"})),h(a.options,"debugRows")),e.getRightVisibleCells=y(()=>[e._getAllVisibleCells(),a.getState().columnPinning.right],(n,t)=>(t??[]).map(r=>n.find(o=>o.column.id===r)).filter(Boolean).map(r=>({...r,position:"right"})),h(a.options,"debugRows"))},createTable:e=>{e.setColumnPinning=a=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(a),e.resetColumnPinning=a=>{var n,t;return e.setColumnPinning(a?me():(n=(t=e.initialState)==null?void 0:t.columnPinning)!=null?n:me())},e.getIsSomeColumnsPinned=a=>{var n;const t=e.getState().columnPinning;if(!a){var l,r;return!!((l=t.left)!=null&&l.length||(r=t.right)!=null&&r.length)}return!!((n=t[a])!=null&&n.length)},e.getLeftLeafColumns=y(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(a,n)=>(n??[]).map(t=>a.find(l=>l.id===t)).filter(Boolean),h(e.options,"debugColumns")),e.getRightLeafColumns=y(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(a,n)=>(n??[]).map(t=>a.find(l=>l.id===t)).filter(Boolean),h(e.options,"debugColumns")),e.getCenterLeafColumns=y(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t)=>{const l=[...n??[],...t??[]];return a.filter(r=>!l.includes(r.id))},h(e.options,"debugColumns"))}},Z={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},ce=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),pa={getDefaultColumnDef:()=>Z,getInitialState:e=>({columnSizing:{},columnSizingInfo:ce(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:S("columnSizing",e),onColumnSizingInfoChange:S("columnSizingInfo",e)}),createColumn:(e,a)=>{e.getSize=()=>{var n,t,l;const r=a.getState().columnSizing[e.id];return Math.min(Math.max((n=e.columnDef.minSize)!=null?n:Z.minSize,(t=r??e.columnDef.size)!=null?t:Z.size),(l=e.columnDef.maxSize)!=null?l:Z.maxSize)},e.getStart=y(n=>[n,J(a,n),a.getState().columnSizing],(n,t)=>t.slice(0,e.getIndex(n)).reduce((l,r)=>l+r.getSize(),0),h(a.options,"debugColumns")),e.getAfter=y(n=>[n,J(a,n),a.getState().columnSizing],(n,t)=>t.slice(e.getIndex(n)+1).reduce((l,r)=>l+r.getSize(),0),h(a.options,"debugColumns")),e.resetSize=()=>{a.setColumnSizing(n=>{let{[e.id]:t,...l}=n;return l})},e.getCanResize=()=>{var n,t;return((n=e.columnDef.enableResizing)!=null?n:!0)&&((t=a.options.enableColumnResizing)!=null?t:!0)},e.getIsResizing=()=>a.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,a)=>{e.getSize=()=>{let n=0;const t=l=>{if(l.subHeaders.length)l.subHeaders.forEach(t);else{var r;n+=(r=l.column.getSize())!=null?r:0}};return t(e),n},e.getStart=()=>{if(e.index>0){const n=e.headerGroup.headers[e.index-1];return n.getStart()+n.getSize()}return 0},e.getResizeHandler=n=>{const t=a.getColumn(e.column.id),l=t==null?void 0:t.getCanResize();return r=>{if(!t||!l||(r.persist==null||r.persist(),de(r)&&r.touches&&r.touches.length>1))return;const o=e.getSize(),u=e?e.getLeafHeaders().map(w=>[w.column.id,w.column.getSize()]):[[t.id,t.getSize()]],i=de(r)?Math.round(r.touches[0].clientX):r.clientX,c={},d=(w,C)=>{typeof C=="number"&&(a.setColumnSizingInfo(v=>{var q,k;const V=a.options.columnResizeDirection==="rtl"?-1:1,I=(C-((q=v==null?void 0:v.startOffset)!=null?q:0))*V,F=Math.max(I/((k=v==null?void 0:v.startSize)!=null?k:0),-.999999);return v.columnSizingStart.forEach(N=>{let[x,O]=N;c[x]=Math.round(Math.max(O+O*F,0)*100)/100}),{...v,deltaOffset:I,deltaPercentage:F}}),(a.options.columnResizeMode==="onChange"||w==="end")&&a.setColumnSizing(v=>({...v,...c})))},b=w=>d("move",w),D=w=>{d("end",w),a.setColumnSizingInfo(C=>({...C,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},s=n||typeof document<"u"?document:null,p={moveHandler:w=>b(w.clientX),upHandler:w=>{s==null||s.removeEventListener("mousemove",p.moveHandler),s==null||s.removeEventListener("mouseup",p.upHandler),D(w.clientX)}},g={moveHandler:w=>(w.cancelable&&(w.preventDefault(),w.stopPropagation()),b(w.touches[0].clientX),!1),upHandler:w=>{var C;s==null||s.removeEventListener("touchmove",g.moveHandler),s==null||s.removeEventListener("touchend",g.upHandler),w.cancelable&&(w.preventDefault(),w.stopPropagation()),D((C=w.touches[0])==null?void 0:C.clientX)}},f=wa()?{passive:!1}:!1;de(r)?(s==null||s.addEventListener("touchmove",g.moveHandler,f),s==null||s.addEventListener("touchend",g.upHandler,f)):(s==null||s.addEventListener("mousemove",p.moveHandler,f),s==null||s.addEventListener("mouseup",p.upHandler,f)),a.setColumnSizingInfo(w=>({...w,startOffset:i,startSize:o,deltaOffset:0,deltaPercentage:0,columnSizingStart:u,isResizingColumn:t.id}))}}},createTable:e=>{e.setColumnSizing=a=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(a),e.setColumnSizingInfo=a=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(a),e.resetColumnSizing=a=>{var n;e.setColumnSizing(a?{}:(n=e.initialState.columnSizing)!=null?n:{})},e.resetHeaderSizeInfo=a=>{var n;e.setColumnSizingInfo(a?ce():(n=e.initialState.columnSizingInfo)!=null?n:ce())},e.getTotalSize=()=>{var a,n;return(a=(n=e.getHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getLeftTotalSize=()=>{var a,n;return(a=(n=e.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getCenterTotalSize=()=>{var a,n;return(a=(n=e.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getRightTotalSize=()=>{var a,n;return(a=(n=e.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0}}};let ee=null;function wa(){if(typeof ee=="boolean")return ee;let e=!1;try{const a={get passive(){return e=!0,!1}},n=()=>{};window.addEventListener("test",n,a),window.removeEventListener("test",n)}catch{e=!1}return ee=e,ee}function de(e){return e.type==="touchstart"}const fa={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:S("columnVisibility",e)}),createColumn:(e,a)=>{e.toggleVisibility=n=>{e.getCanHide()&&a.setColumnVisibility(t=>({...t,[e.id]:n??!e.getIsVisible()}))},e.getIsVisible=()=>{var n,t;const l=e.columns;return(n=l.length?l.some(r=>r.getIsVisible()):(t=a.getState().columnVisibility)==null?void 0:t[e.id])!=null?n:!0},e.getCanHide=()=>{var n,t;return((n=e.columnDef.enableHiding)!=null?n:!0)&&((t=a.options.enableHiding)!=null?t:!0)},e.getToggleVisibilityHandler=()=>n=>{e.toggleVisibility==null||e.toggleVisibility(n.target.checked)}},createRow:(e,a)=>{e._getAllVisibleCells=y(()=>[e.getAllCells(),a.getState().columnVisibility],n=>n.filter(t=>t.column.getIsVisible()),h(a.options,"debugRows")),e.getVisibleCells=y(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(n,t,l)=>[...n,...t,...l],h(a.options,"debugRows"))},createTable:e=>{const a=(n,t)=>y(()=>[t(),t().filter(l=>l.getIsVisible()).map(l=>l.id).join("_")],l=>l.filter(r=>r.getIsVisible==null?void 0:r.getIsVisible()),h(e.options,"debugColumns"));e.getVisibleFlatColumns=a("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=a("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=a("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=a("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=a("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=n=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(n),e.resetColumnVisibility=n=>{var t;e.setColumnVisibility(n?{}:(t=e.initialState.columnVisibility)!=null?t:{})},e.toggleAllColumnsVisible=n=>{var t;n=(t=n)!=null?t:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((l,r)=>({...l,[r.id]:n||!(r.getCanHide!=null&&r.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>n=>{var t;e.toggleAllColumnsVisible((t=n.target)==null?void 0:t.checked)}}};function J(e,a){return a?a==="center"?e.getCenterVisibleLeafColumns():a==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const ya={createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},ha={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:S("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:a=>{var n;const t=(n=e.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[a.id])==null?void 0:n.getValue();return typeof t=="string"||typeof t=="number"}}),createColumn:(e,a)=>{e.getCanGlobalFilter=()=>{var n,t,l,r;return((n=e.columnDef.enableGlobalFilter)!=null?n:!0)&&((t=a.options.enableGlobalFilter)!=null?t:!0)&&((l=a.options.enableFilters)!=null?l:!0)&&((r=a.options.getColumnCanGlobalFilter==null?void 0:a.options.getColumnCanGlobalFilter(e))!=null?r:!0)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>E.includesString,e.getGlobalFilterFn=()=>{var a,n;const{globalFilterFn:t}=e.options;return ue(t)?t:t==="auto"?e.getGlobalAutoFilterFn():(a=(n=e.options.filterFns)==null?void 0:n[t])!=null?a:E[t]},e.setGlobalFilter=a=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(a)},e.resetGlobalFilter=a=>{e.setGlobalFilter(a?void 0:e.initialState.globalFilter)}}},Ca={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:S("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let a=!1,n=!1;e._autoResetExpanded=()=>{var t,l;if(!a){e._queue(()=>{a=!0});return}if((t=(l=e.options.autoResetAll)!=null?l:e.options.autoResetExpanded)!=null?t:!e.options.manualExpanding){if(n)return;n=!0,e._queue(()=>{e.resetExpanded(),n=!1})}},e.setExpanded=t=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(t),e.toggleAllRowsExpanded=t=>{t??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=t=>{var l,r;e.setExpanded(t?{}:(l=(r=e.initialState)==null?void 0:r.expanded)!=null?l:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(t=>t.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>t=>{t.persist==null||t.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const t=e.getState().expanded;return t===!0||Object.values(t).some(Boolean)},e.getIsAllRowsExpanded=()=>{const t=e.getState().expanded;return typeof t=="boolean"?t===!0:!(!Object.keys(t).length||e.getRowModel().flatRows.some(l=>!l.getIsExpanded()))},e.getExpandedDepth=()=>{let t=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(r=>{const o=r.split(".");t=Math.max(t,o.length)}),t},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,a)=>{e.toggleExpanded=n=>{a.setExpanded(t=>{var l;const r=t===!0?!0:!!(t!=null&&t[e.id]);let o={};if(t===!0?Object.keys(a.getRowModel().rowsById).forEach(u=>{o[u]=!0}):o=t,n=(l=n)!=null?l:!r,!r&&n)return{...o,[e.id]:!0};if(r&&!n){const{[e.id]:u,...i}=o;return i}return t})},e.getIsExpanded=()=>{var n;const t=a.getState().expanded;return!!((n=a.options.getIsRowExpanded==null?void 0:a.options.getIsRowExpanded(e))!=null?n:t===!0||t!=null&&t[e.id])},e.getCanExpand=()=>{var n,t,l;return(n=a.options.getRowCanExpand==null?void 0:a.options.getRowCanExpand(e))!=null?n:((t=a.options.enableExpanding)!=null?t:!0)&&!!((l=e.subRows)!=null&&l.length)},e.getIsAllParentsExpanded=()=>{let n=!0,t=e;for(;n&&t.parentId;)t=a.getRow(t.parentId,!0),n=t.getIsExpanded();return n},e.getToggleExpandedHandler=()=>{const n=e.getCanExpand();return()=>{n&&e.toggleExpanded()}}}},pe=0,we=10,De=()=>({pageIndex:pe,pageSize:we}),va={getInitialState:e=>({...e,pagination:{...De(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:S("pagination",e)}),createTable:e=>{let a=!1,n=!1;e._autoResetPageIndex=()=>{var t,l;if(!a){e._queue(()=>{a=!0});return}if((t=(l=e.options.autoResetAll)!=null?l:e.options.autoResetPageIndex)!=null?t:!e.options.manualPagination){if(n)return;n=!0,e._queue(()=>{e.resetPageIndex(),n=!1})}},e.setPagination=t=>{const l=r=>_(t,r);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(l)},e.resetPagination=t=>{var l;e.setPagination(t?De():(l=e.initialState.pagination)!=null?l:De())},e.setPageIndex=t=>{e.setPagination(l=>{let r=_(t,l.pageIndex);const o=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return r=Math.max(0,Math.min(r,o)),{...l,pageIndex:r}})},e.resetPageIndex=t=>{var l,r;e.setPageIndex(t?pe:(l=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageIndex)!=null?l:pe)},e.resetPageSize=t=>{var l,r;e.setPageSize(t?we:(l=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageSize)!=null?l:we)},e.setPageSize=t=>{e.setPagination(l=>{const r=Math.max(1,_(t,l.pageSize)),o=l.pageSize*l.pageIndex,u=Math.floor(o/r);return{...l,pageIndex:u,pageSize:r}})},e.setPageCount=t=>e.setPagination(l=>{var r;let o=_(t,(r=e.options.pageCount)!=null?r:-1);return typeof o=="number"&&(o=Math.max(-1,o)),{...l,pageCount:o}}),e.getPageOptions=y(()=>[e.getPageCount()],t=>{let l=[];return t&&t>0&&(l=[...new Array(t)].fill(null).map((r,o)=>o)),l},h(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:t}=e.getState().pagination,l=e.getPageCount();return l===-1?!0:l===0?!1:t<l-1},e.previousPage=()=>e.setPageIndex(t=>t-1),e.nextPage=()=>e.setPageIndex(t=>t+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var t;return(t=e.options.pageCount)!=null?t:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var t;return(t=e.options.rowCount)!=null?t:e.getPrePaginationRowModel().rows.length}}},be=()=>({top:[],bottom:[]}),Va={getInitialState:e=>({rowPinning:be(),...e}),getDefaultOptions:e=>({onRowPinningChange:S("rowPinning",e)}),createRow:(e,a)=>{e.pin=(n,t,l)=>{const r=t?e.getLeafRows().map(i=>{let{id:c}=i;return c}):[],o=l?e.getParentRows().map(i=>{let{id:c}=i;return c}):[],u=new Set([...o,e.id,...r]);a.setRowPinning(i=>{var c,d;if(n==="bottom"){var b,D;return{top:((b=i==null?void 0:i.top)!=null?b:[]).filter(g=>!(u!=null&&u.has(g))),bottom:[...((D=i==null?void 0:i.bottom)!=null?D:[]).filter(g=>!(u!=null&&u.has(g))),...Array.from(u)]}}if(n==="top"){var s,p;return{top:[...((s=i==null?void 0:i.top)!=null?s:[]).filter(g=>!(u!=null&&u.has(g))),...Array.from(u)],bottom:((p=i==null?void 0:i.bottom)!=null?p:[]).filter(g=>!(u!=null&&u.has(g)))}}return{top:((c=i==null?void 0:i.top)!=null?c:[]).filter(g=>!(u!=null&&u.has(g))),bottom:((d=i==null?void 0:i.bottom)!=null?d:[]).filter(g=>!(u!=null&&u.has(g)))}})},e.getCanPin=()=>{var n;const{enableRowPinning:t,enablePinning:l}=a.options;return typeof t=="function"?t(e):(n=t??l)!=null?n:!0},e.getIsPinned=()=>{const n=[e.id],{top:t,bottom:l}=a.getState().rowPinning,r=n.some(u=>t==null?void 0:t.includes(u)),o=n.some(u=>l==null?void 0:l.includes(u));return r?"top":o?"bottom":!1},e.getPinnedIndex=()=>{var n,t;const l=e.getIsPinned();if(!l)return-1;const r=(n=a._getPinnedRows(l))==null?void 0:n.map(o=>{let{id:u}=o;return u});return(t=r==null?void 0:r.indexOf(e.id))!=null?t:-1}},createTable:e=>{e.setRowPinning=a=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(a),e.resetRowPinning=a=>{var n,t;return e.setRowPinning(a?be():(n=(t=e.initialState)==null?void 0:t.rowPinning)!=null?n:be())},e.getIsSomeRowsPinned=a=>{var n;const t=e.getState().rowPinning;if(!a){var l,r;return!!((l=t.top)!=null&&l.length||(r=t.bottom)!=null&&r.length)}return!!((n=t[a])!=null&&n.length)},e._getPinnedRows=y(a=>[e.getRowModel().rows,e.getState().rowPinning[a],a],(a,n,t)=>{var l;return((l=e.options.keepPinnedRows)==null||l?(n??[]).map(o=>{const u=e.getRow(o,!0);return u.getIsAllParentsExpanded()?u:null}):(n??[]).map(o=>a.find(u=>u.id===o))).filter(Boolean).map(o=>({...o,position:t}))},h(e.options,"debugRows")),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=y(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(a,n,t)=>{const l=new Set([...n??[],...t??[]]);return a.filter(r=>!l.has(r.id))},h(e.options,"debugRows"))}},ka={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:S("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=a=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(a),e.resetRowSelection=a=>{var n;return e.setRowSelection(a?{}:(n=e.initialState.rowSelection)!=null?n:{})},e.toggleAllRowsSelected=a=>{e.setRowSelection(n=>{a=typeof a<"u"?a:!e.getIsAllRowsSelected();const t={...n},l=e.getPreGroupedRowModel().flatRows;return a?l.forEach(r=>{r.getCanSelect()&&(t[r.id]=!0)}):l.forEach(r=>{delete t[r.id]}),t})},e.toggleAllPageRowsSelected=a=>e.setRowSelection(n=>{const t=typeof a<"u"?a:!e.getIsAllPageRowsSelected(),l={...n};return e.getRowModel().rows.forEach(r=>{fe(l,r.id,t,!0,e)}),l}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=y(()=>[e.getState().rowSelection,e.getCoreRowModel()],(a,n)=>Object.keys(a).length?ge(e,n):{rows:[],flatRows:[],rowsById:{}},h(e.options,"debugTable")),e.getFilteredSelectedRowModel=y(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(a,n)=>Object.keys(a).length?ge(e,n):{rows:[],flatRows:[],rowsById:{}},h(e.options,"debugTable")),e.getGroupedSelectedRowModel=y(()=>[e.getState().rowSelection,e.getSortedRowModel()],(a,n)=>Object.keys(a).length?ge(e,n):{rows:[],flatRows:[],rowsById:{}},h(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const a=e.getFilteredRowModel().flatRows,{rowSelection:n}=e.getState();let t=!!(a.length&&Object.keys(n).length);return t&&a.some(l=>l.getCanSelect()&&!n[l.id])&&(t=!1),t},e.getIsAllPageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows.filter(l=>l.getCanSelect()),{rowSelection:n}=e.getState();let t=!!a.length;return t&&a.some(l=>!n[l.id])&&(t=!1),t},e.getIsSomeRowsSelected=()=>{var a;const n=Object.keys((a=e.getState().rowSelection)!=null?a:{}).length;return n>0&&n<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:a.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>a=>{e.toggleAllRowsSelected(a.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>a=>{e.toggleAllPageRowsSelected(a.target.checked)}},createRow:(e,a)=>{e.toggleSelected=(n,t)=>{const l=e.getIsSelected();a.setRowSelection(r=>{var o;if(n=typeof n<"u"?n:!l,e.getCanSelect()&&l===n)return r;const u={...r};return fe(u,e.id,n,(o=t==null?void 0:t.selectChildren)!=null?o:!0,a),u})},e.getIsSelected=()=>{const{rowSelection:n}=a.getState();return ke(e,n)},e.getIsSomeSelected=()=>{const{rowSelection:n}=a.getState();return ye(e,n)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=a.getState();return ye(e,n)==="all"},e.getCanSelect=()=>{var n;return typeof a.options.enableRowSelection=="function"?a.options.enableRowSelection(e):(n=a.options.enableRowSelection)!=null?n:!0},e.getCanSelectSubRows=()=>{var n;return typeof a.options.enableSubRowSelection=="function"?a.options.enableSubRowSelection(e):(n=a.options.enableSubRowSelection)!=null?n:!0},e.getCanMultiSelect=()=>{var n;return typeof a.options.enableMultiRowSelection=="function"?a.options.enableMultiRowSelection(e):(n=a.options.enableMultiRowSelection)!=null?n:!0},e.getToggleSelectedHandler=()=>{const n=e.getCanSelect();return t=>{var l;n&&e.toggleSelected((l=t.target)==null?void 0:l.checked)}}}},fe=(e,a,n,t,l)=>{var r;const o=l.getRow(a,!0);n?(o.getCanMultiSelect()||Object.keys(e).forEach(u=>delete e[u]),o.getCanSelect()&&(e[a]=!0)):delete e[a],t&&(r=o.subRows)!=null&&r.length&&o.getCanSelectSubRows()&&o.subRows.forEach(u=>fe(e,u.id,n,t,l))};function ge(e,a){const n=e.getState().rowSelection,t=[],l={},r=function(o,u){return o.map(i=>{var c;const d=ke(i,n);if(d&&(t.push(i),l[i.id]=i),(c=i.subRows)!=null&&c.length&&(i={...i,subRows:r(i.subRows)}),d)return i}).filter(Boolean)};return{rows:r(a.rows),flatRows:t,rowsById:l}}function ke(e,a){var n;return(n=a[e.id])!=null?n:!1}function ye(e,a,n){var t;if(!((t=e.subRows)!=null&&t.length))return!1;let l=!0,r=!1;return e.subRows.forEach(o=>{if(!(r&&!l)&&(o.getCanSelect()&&(ke(o,a)?r=!0:l=!1),o.subRows&&o.subRows.length)){const u=ye(o,a);u==="all"?r=!0:(u==="some"&&(r=!0),l=!1)}}),l?"all":r?"some":!1}const he=/([0-9]+)/gm,Ia=(e,a,n)=>Xe(z(e.getValue(n)).toLowerCase(),z(a.getValue(n)).toLowerCase()),Ra=(e,a,n)=>Xe(z(e.getValue(n)),z(a.getValue(n))),qa=(e,a,n)=>Ie(z(e.getValue(n)).toLowerCase(),z(a.getValue(n)).toLowerCase()),Fa=(e,a,n)=>Ie(z(e.getValue(n)),z(a.getValue(n))),xa=(e,a,n)=>{const t=e.getValue(n),l=a.getValue(n);return t>l?1:t<l?-1:0},Ga=(e,a,n)=>Ie(e.getValue(n),a.getValue(n));function Ie(e,a){return e===a?0:e>a?1:-1}function z(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function Xe(e,a){const n=e.split(he).filter(Boolean),t=a.split(he).filter(Boolean);for(;n.length&&t.length;){const l=n.shift(),r=t.shift(),o=parseInt(l,10),u=parseInt(r,10),i=[o,u].sort();if(isNaN(i[0])){if(l>r)return 1;if(r>l)return-1;continue}if(isNaN(i[1]))return isNaN(o)?-1:1;if(o>u)return 1;if(u>o)return-1}return n.length-t.length}const L={alphanumeric:Ia,alphanumericCaseSensitive:Ra,text:qa,textCaseSensitive:Fa,datetime:xa,basic:Ga},Na={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:S("sorting",e),isMultiSortEvent:a=>a.shiftKey}),createColumn:(e,a)=>{e.getAutoSortingFn=()=>{const n=a.getFilteredRowModel().flatRows.slice(10);let t=!1;for(const l of n){const r=l==null?void 0:l.getValue(e.id);if(Object.prototype.toString.call(r)==="[object Date]")return L.datetime;if(typeof r=="string"&&(t=!0,r.split(he).length>1))return L.alphanumeric}return t?L.text:L.basic},e.getAutoSortDir=()=>{const n=a.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var n,t;if(!e)throw new Error;return ue(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(n=(t=a.options.sortingFns)==null?void 0:t[e.columnDef.sortingFn])!=null?n:L[e.columnDef.sortingFn]},e.toggleSorting=(n,t)=>{const l=e.getNextSortingOrder(),r=typeof n<"u"&&n!==null;a.setSorting(o=>{const u=o==null?void 0:o.find(s=>s.id===e.id),i=o==null?void 0:o.findIndex(s=>s.id===e.id);let c=[],d,b=r?n:l==="desc";if(o!=null&&o.length&&e.getCanMultiSort()&&t?u?d="toggle":d="add":o!=null&&o.length&&i!==o.length-1?d="replace":u?d="toggle":d="replace",d==="toggle"&&(r||l||(d="remove")),d==="add"){var D;c=[...o,{id:e.id,desc:b}],c.splice(0,c.length-((D=a.options.maxMultiSortColCount)!=null?D:Number.MAX_SAFE_INTEGER))}else d==="toggle"?c=o.map(s=>s.id===e.id?{...s,desc:b}:s):d==="remove"?c=o.filter(s=>s.id!==e.id):c=[{id:e.id,desc:b}];return c})},e.getFirstSortDir=()=>{var n,t;return((n=(t=e.columnDef.sortDescFirst)!=null?t:a.options.sortDescFirst)!=null?n:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=n=>{var t,l;const r=e.getFirstSortDir(),o=e.getIsSorted();return o?o!==r&&((t=a.options.enableSortingRemoval)==null||t)&&(!(n&&(l=a.options.enableMultiRemove)!=null)||l)?!1:o==="desc"?"asc":"desc":r},e.getCanSort=()=>{var n,t;return((n=e.columnDef.enableSorting)!=null?n:!0)&&((t=a.options.enableSorting)!=null?t:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var n,t;return(n=(t=e.columnDef.enableMultiSort)!=null?t:a.options.enableMultiSort)!=null?n:!!e.accessorFn},e.getIsSorted=()=>{var n;const t=(n=a.getState().sorting)==null?void 0:n.find(l=>l.id===e.id);return t?t.desc?"desc":"asc":!1},e.getSortIndex=()=>{var n,t;return(n=(t=a.getState().sorting)==null?void 0:t.findIndex(l=>l.id===e.id))!=null?n:-1},e.clearSorting=()=>{a.setSorting(n=>n!=null&&n.length?n.filter(t=>t.id!==e.id):[])},e.getToggleSortingHandler=()=>{const n=e.getCanSort();return t=>{n&&(t.persist==null||t.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?a.options.isMultiSortEvent==null?void 0:a.options.isMultiSortEvent(t):!1))}}},createTable:e=>{e.setSorting=a=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(a),e.resetSorting=a=>{var n,t;e.setSorting(a?[]:(n=(t=e.initialState)==null?void 0:t.sorting)!=null?n:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},Ha=[Zn,fa,ba,ga,na,aa,ya,ha,Na,da,Ca,va,Va,ka,pa];function ja(e){var a,n;const t=[...Ha,...(a=e._features)!=null?a:[]];let l={_features:t};const r=l._features.reduce((D,s)=>Object.assign(D,s.getDefaultOptions==null?void 0:s.getDefaultOptions(l)),{}),o=D=>l.options.mergeOptions?l.options.mergeOptions(r,D):{...r,...D};let i={...{},...(n=e.initialState)!=null?n:{}};l._features.forEach(D=>{var s;i=(s=D.getInitialState==null?void 0:D.getInitialState(i))!=null?s:i});const c=[];let d=!1;const b={_features:t,options:{...r,...e},initialState:i,_queue:D=>{c.push(D),d||(d=!0,Promise.resolve().then(()=>{for(;c.length;)c.shift()();d=!1}).catch(s=>setTimeout(()=>{throw s})))},reset:()=>{l.setState(l.initialState)},setOptions:D=>{const s=_(D,l.options);l.options=o(s)},getState:()=>l.options.state,setState:D=>{l.options.onStateChange==null||l.options.onStateChange(D)},_getRowId:(D,s,p)=>{var g;return(g=l.options.getRowId==null?void 0:l.options.getRowId(D,s,p))!=null?g:`${p?[p.id,s].join("."):s}`},getCoreRowModel:()=>(l._getCoreRowModel||(l._getCoreRowModel=l.options.getCoreRowModel(l)),l._getCoreRowModel()),getRowModel:()=>l.getPaginationRowModel(),getRow:(D,s)=>{let p=(s?l.getPrePaginationRowModel():l.getRowModel()).rowsById[D];if(!p&&(p=l.getCoreRowModel().rowsById[D],!p))throw new Error;return p},_getDefaultColumnDef:y(()=>[l.options.defaultColumn],D=>{var s;return D=(s=D)!=null?s:{},{header:p=>{const g=p.header.column.columnDef;return g.accessorKey?g.accessorKey:g.accessorFn?g.id:null},cell:p=>{var g,f;return(g=(f=p.renderValue())==null||f.toString==null?void 0:f.toString())!=null?g:null},...l._features.reduce((p,g)=>Object.assign(p,g.getDefaultColumnDef==null?void 0:g.getDefaultColumnDef()),{}),...D}},h(e,"debugColumns")),_getColumnDefs:()=>l.options.columns,getAllColumns:y(()=>[l._getColumnDefs()],D=>{const s=function(p,g,f){return f===void 0&&(f=0),p.map(w=>{const C=Qn(l,w,f,g),v=w;return C.columns=v.columns?s(v.columns,C,f+1):[],C})};return s(D)},h(e,"debugColumns")),getAllFlatColumns:y(()=>[l.getAllColumns()],D=>D.flatMap(s=>s.getFlatColumns()),h(e,"debugColumns")),_getAllFlatColumnsById:y(()=>[l.getAllFlatColumns()],D=>D.reduce((s,p)=>(s[p.id]=p,s),{}),h(e,"debugColumns")),getAllLeafColumns:y(()=>[l.getAllColumns(),l._getOrderColumnsFn()],(D,s)=>{let p=D.flatMap(g=>g.getLeafColumns());return s(p)},h(e,"debugColumns")),getColumn:D=>l._getAllFlatColumnsById()[D]};Object.assign(l,b);for(let D=0;D<l._features.length;D++){const s=l._features[D];s==null||s.createTable==null||s.createTable(l)}return l}function Sa(){return e=>y(()=>[e.options.data],a=>{const n={rows:[],flatRows:[],rowsById:{}},t=function(l,r,o){r===void 0&&(r=0);const u=[];for(let c=0;c<l.length;c++){const d=ea(e,e._getRowId(l[c],c,o),l[c],c,r,void 0,o==null?void 0:o.id);if(n.flatRows.push(d),n.rowsById[d.id]=d,u.push(d),e.options.getSubRows){var i;d.originalSubRows=e.options.getSubRows(l[c],c),(i=d.originalSubRows)!=null&&i.length&&(d.subRows=t(d.originalSubRows,r+1,d))}}return u};return n.rows=t(a),n},h(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function Pa(){return e=>y(()=>[e.getState().expanded,e.getPreExpandedRowModel(),e.options.paginateExpandedRows],(a,n,t)=>!n.rows.length||a!==!0&&!Object.keys(a??{}).length||!t?n:Je(n),h(e.options,"debugTable"))}function Je(e){const a=[],n=t=>{var l;a.push(t),(l=t.subRows)!=null&&l.length&&t.getIsExpanded()&&t.subRows.forEach(n)};return e.rows.forEach(n),{rows:a,flatRows:e.flatRows,rowsById:e.rowsById}}function Oa(e){return a=>y(()=>[a.getState().pagination,a.getPrePaginationRowModel(),a.options.paginateExpandedRows?void 0:a.getState().expanded],(n,t)=>{if(!t.rows.length)return t;const{pageSize:l,pageIndex:r}=n;let{rows:o,flatRows:u,rowsById:i}=t;const c=l*r,d=c+l;o=o.slice(c,d);let b;a.options.paginateExpandedRows?b={rows:o,flatRows:u,rowsById:i}:b=Je({rows:o,flatRows:u,rowsById:i}),b.flatRows=[];const D=s=>{b.flatRows.push(s),s.subRows.length&&s.subRows.forEach(D)};return b.rows.forEach(D),b},h(a.options,"debugTable"))}function Ta(){return e=>y(()=>[e.getState().sorting,e.getPreSortedRowModel()],(a,n)=>{if(!n.rows.length||!(a!=null&&a.length))return n;const t=e.getState().sorting,l=[],r=t.filter(i=>{var c;return(c=e.getColumn(i.id))==null?void 0:c.getCanSort()}),o={};r.forEach(i=>{const c=e.getColumn(i.id);c&&(o[i.id]={sortUndefined:c.columnDef.sortUndefined,invertSorting:c.columnDef.invertSorting,sortingFn:c.getSortingFn()})});const u=i=>{const c=i.map(d=>({...d}));return c.sort((d,b)=>{for(let s=0;s<r.length;s+=1){var D;const p=r[s],g=o[p.id],f=(D=p==null?void 0:p.desc)!=null?D:!1;let w=0;if(g.sortUndefined){const C=d.getValue(p.id),v=b.getValue(p.id),q=C===void 0,k=v===void 0;(q||k)&&(w=q&&k?0:q?g.sortUndefined:-g.sortUndefined)}if(w===0&&(w=g.sortingFn(d,b,p.id)),w!==0)return f&&(w*=-1),g.invertSorting&&(w*=-1),w}return d.index-b.index}),c.forEach(d=>{var b;l.push(d),(b=d.subRows)!=null&&b.length&&(d.subRows=u(d.subRows))}),c};return{rows:u(n.rows),flatRows:l,rowsById:n.rowsById}},h(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function Aa(e){const a={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[n]=R.useState(()=>({current:ja(a)})),[t,l]=R.useState(()=>n.current.initialState);return n.current.setOptions(r=>({...r,...e,state:{...t,...e.state},onStateChange:o=>{l(o),e.onStateChange==null||e.onStateChange(o)}})),n.current}const Be=({table:e})=>{const{getIsSomeRowsExpanded:a,getState:n,options:{renderDetailPanel:t},toggleAllRowsExpanded:l}=e,{isLoading:r}=n(),o=a();return m.jsx(A,{iconProps:{name:"angles-right",rotation:o?270:void 0},isDisabled:r||!t,label:o?"Collapse all rows":"Expand all rows",onClick:()=>l(!o)})};Be.__docgenInfo={description:"",methods:[],displayName:"ExpandAllButton",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const We=({table:e,row:a})=>{const{options:{renderDetailPanel:n}}=e,{getIsExpanded:t,getCanExpand:l,toggleExpanded:r}=a,o=l(),u=t();return m.jsx(A,{iconProps:{name:"angle-right",rotation:u?90:void 0},isDisabled:!o&&!n,label:u?"Collapse row":"Expand row",onClick:i=>{i.stopPropagation(),r()}})};We.__docgenInfo={description:"",methods:[],displayName:"ExpandButton",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""}}};const Qe=({row:e,table:a,rowActions:n})=>{const{getState:t}=a,{isFullscreenMode:l}=t();return m.jsx(Ne,{children:m.jsx(He,{$isFullscreen:l,align:"end",collisionPadding:10,sideOffset:5,children:n.map((r,o)=>{if(r===null)return m.jsx(U,{},`row-actions-separator-${o}`);const{iconName:u,iconType:i,label:c,onClick:d,isDisabled:b,isDestructive:D}=r,s=typeof c=="function"?c({row:e,table:a}):c,p=typeof u=="function"?u({row:e,table:a}):u,g=typeof i=="function"?i({row:e,table:a}):i,f=typeof b=="function"?b({row:e,table:a}):b;return m.jsx(T,{className:"ds-table-row-actions-menu-item",iconName:p,iconType:g,isDestructive:D,isDisabled:f,onClick:d({row:e,table:a}),children:s},`row-actions-${s}`)})})})};Qe.__docgenInfo={description:"",methods:[],displayName:"RowActionsMenu",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"isDestructive",value:{name:"boolean",required:!1}}]}}]}],raw:"DatatableRowAction<D>[]"},description:""}}};const Ze=({row:e,table:a})=>{const{options:{rowActions:n=[]}}=a;if(n.length>1)return m.jsxs(je,{children:[m.jsx(Se,{asChild:!0,children:m.jsx(A,{className:"ds-table-header-cell-row-actions-button",iconProps:{name:"ellipsis-h"},label:"Row actions"})}),m.jsx(Qe,{row:e,rowActions:n,table:a})]});if(n.length===1){const{label:t,iconName:l,iconType:r,onClick:o,isDisabled:u,isDestructive:i}=n[0],c=typeof t=="function"?t({row:e,table:a}):t,d=typeof l=="function"?l({row:e,table:a}):l,b=typeof r=="function"?r({row:e,table:a}):r,D=typeof u=="function"?u({row:e,table:a}):u;return m.jsx(A,{className:"ds-table-header-cell-row-actions-button",iconProps:{name:d,type:b},isDestructive:i,isDisabled:D,label:c,onClick:s=>{s.stopPropagation(),o({row:e,table:a})(s)}})}return null};Ze.__docgenInfo={description:"",methods:[],displayName:"RowActionsButton",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const re=({indeterminate:e,...a})=>{const n=R.useRef(null);return R.useEffect(()=>{typeof e=="boolean"&&(n.current.indeterminate=!a.checked&&e)},[n,e,a.checked]),m.jsx("input",{ref:n,className:a.className,type:"checkbox",...a,onClick:t=>t.stopPropagation()})};re.__docgenInfo={description:"",methods:[],displayName:"IndeterminateCheckbox",props:{indeterminate:{required:!1,tsType:{name:"boolean"},description:""}}};const Ea=({row:e,table:a})=>n=>{const{options:{enableBatchRowSelection:t,enableMultiRowSelection:l},refs:{lastSelectedRowIdRef:r}}=a,o=e.getIsSelected();if(e.toggleSelected(!o),t&&l&&n.nativeEvent.shiftKey&&r.current!==null){const{rows:u}=a.getPrePaginationRowModel(),i=u.findIndex(c=>c.id===r.current);if(i!==-1){const c=u[i].getIsSelected(),d=u.findIndex(s=>s.id===e.id),[b,D]=i<d?[i,d]:[d,i];if(o!==c)for(let s=b;s<=D;s++)u[s].toggleSelected(!o)}}r.current=e.id},oe=({row:e,table:a,isHeaderCheckbox:n=!1,hasTargetWrapper:t=!1,style:l})=>{const{getState:r,options:{enableMultiRowSelection:o,selectAllMode:u}}=a,{isLoading:i}=r(),c=u==="all"?a.getIsAllRowsSelected():a.getIsAllPageRowsSelected(),d={checked:n?c:e==null?void 0:e.getIsSelected(),disabled:i||e&&!(e!=null&&e.getCanSelect()),"aria-label":n?"Toggle select all":"Toggle select row",onChange:D=>{D.stopPropagation(),n?u==="all"?a.getToggleAllRowsSelectedHandler()(D):a.getToggleAllPageRowsSelectedHandler()(D):Ea({row:e,table:a})(D)}},b={width:"1.25rem",height:"1.25rem",accentColor:"var(--sscds-table-color-accent)",...l};return o?m.jsx("label",{className:te({"ds-table-select-button-target":t}),children:m.jsx(re,{className:"ds-table-select-multi-button ds-table-select-button",indeterminate:n?a.getIsSomeRowsSelected()&&!c:!1,...d,style:b})}):m.jsx("label",{className:te({"ds-table-select-button-target":t}),children:m.jsx("input",{className:"ds-table-select-single-button ds-table-select-button",type:"radio",...d,style:b})})};oe.__docgenInfo={description:"",methods:[],displayName:"SelectButton",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},isHeaderCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasTargetWrapper:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G={expand:"ssc_dt_expand",select:"ssc_dt_select",actions:"ssc_dt_actions"},$a=e=>R.useMemo(()=>[e.enableExpanding&&{id:G.expand,header:"",headerComponent:e.enableExpandAll?Be:null,cell:We,size:40,...e.defaultDisplayColumn},e.enableRowSelection&&{id:G.select,header:"",headerComponent:e.enableSelectAll&&e.enableMultiRowSelection?({table:a})=>m.jsx(oe,{table:a,hasTargetWrapper:!0,isHeaderCheckbox:!0}):null,cell:a=>m.jsx(oe,{...a,hasTargetWrapper:!0}),size:40,...e.defaultDisplayColumn},e.enableRowActions&&{id:G.actions,header:"",cell:({table:a,row:n})=>m.jsx(Ze,{row:n,table:a}),size:40,...e.defaultDisplayColumn}].filter(Boolean),[e.enableExpanding,e.enableExpandAll,e.enableRowSelection,e.enableSelectAll,e.enableMultiRowSelection,e.defaultDisplayColumn,e.enableRowActions]),Ka=e=>{var a,n;return e.id??((n=(a=e.accessorKey)==null?void 0:a.toString)==null?void 0:n.call(a))??e.header},Ce=e=>e.replace(/[^a-zA-Z0-9]/g,"_"),_a=e=>{const a=[];return(t=>{t.forEach(l=>{a.push(l)})})(e),a},za=({columnDefs:e})=>e.map(a=>{var n,t;return{...a,id:a.id??((t=(n=a.accessorKey)==null?void 0:n.toString)==null?void 0:t.call(n))??a.header,columnDefType:(a==null?void 0:a.columnDefType)??(!a.accessorKey&&!a.accessorFn&&a.id)?"display":"data",enableSorting:(a==null?void 0:a.enableSorting)??!0}}),Ya=(e,a)=>a.getIsPinned()==="left"&&e.getLeftLeafColumns().length-1===a.getPinnedIndex(),Ua=e=>e.getIsPinned()==="right"&&e.getPinnedIndex()===0,Ma=(e,a)=>e.getRightLeafHeaders().slice(a.getPinnedIndex()+1).reduce((n,t)=>n+t.getSize(),0),La=({header:e,column:a})=>{const n=Ce((e==null?void 0:e.id)??a.id);if(n===G.select||n===G.expand||n===G.actions)return{};const t=`--${e?"header":"col"}-${n}-size`,l=a.columnDef.minSize??60;return{minWidth:`max(calc(var(${t}) * 1px), ${l}px)`,width:`calc(var(${t}) * 1px)`,flex:`var(${t}) 0 auto`}},Xa=({table:e,column:a})=>{const n=a.getIsPinned();if(!n)return{};if(n==="left"){const l=Ya(e,a);return{left:`${a.getStart("left")/16}rem`,borderRight:l&&"1px solid var(--sscds-table-color-border)",boxShadow:l&&"var(--sscds-table-shadow-pin-left)"}}const t=Ua(a);return{right:`${Ma(e,a)/16}rem`,borderLeft:t&&"1px solid var(--sscds-table-color-border)",boxShadow:t&&"var(--sscds-table-shadow-pin-right)"}},en=({table:e,header:a,column:n})=>({...La({header:a,column:n}),...Xa({table:e,column:n})}),Ja=(e,a,n)=>{e.getCanPin()&&e.pin(a.getIsPinned());const t=[...n];return t.splice(t.indexOf(a.id),0,t.splice(t.indexOf(e.id),1)[0]),t},Ba=(e,a,n)=>{const{enableRowSelection:t}=n,l=Pe(["id"],a);return Array.from(new Set([t&&"ssc_dt_select",...e,...l])).filter(Boolean)},nn=e=>e.getVisibleFlatColumns().filter(a=>Object.values(G).indexOf(a.id)===-1),Wa=({columns:e,data:a,defaultColumn:n,enableBatchRowSelection:t=!0,enableColumnActions:l=!0,enableColumnOrdering:r=!0,enableColumnPinning:o=!0,enableColumnResizing:u=!0,enableExpandAll:i=!1,enableExpanding:c=!1,enableFullScreenMode:d=!0,enableHiding:b=!0,enableMultiRowSelection:D=!0,enableMultiSort:s=!1,enablePagination:p=!0,enableRowSelection:g=!0,enableRowsPerPage:f=!1,enableSelectAll:w=!0,enableSorting:C=!0,enableSortingRemoval:v=!0,manualPagination:q,manualSorting:k,renderNoDataFallback:V,renderRowSelectionActions:I,rowsPerPageOptions:F=[10,25,50,100],selectAllMode:N="page",...x})=>{const O=R.useMemo(()=>({minSize:40,size:150,maxSize:800,...n}),[n]);let $=q,K=k;return q===void 0&&p===!1&&($=!0),k===void 0&&C===!1&&(K=!0),{columns:e,data:a,defaultColumn:O,defaultDisplayColumn:{columnDefType:"display",enableColumnActions:!1,enableHiding:!1,enablePinning:!1,enableResizing:!1,enableSorting:!1},enableBatchRowSelection:t,enableColumnActions:l,enableColumnOrdering:r,enableColumnPinning:o,enableColumnResizing:u,enableExpandAll:i,enableExpanding:c,enableFullScreenMode:d,enableHiding:b,enableMultiRowSelection:D,enableMultiSort:s,enablePagination:p,enableRowSelection:g,enableRowsPerPage:f,enableSelectAll:w,enableSorting:C,enableSortingRemoval:v,manualPagination:$,manualSorting:K,renderNoDataFallback:V,renderRowSelectionActions:I,rowsPerPageOptions:F,selectAllMode:N,...x,columnResizeMode:"onChange",paginateExpandedRows:!1}},Qa=e=>{const a=R.useRef(null);return n=>{a.current&&window.cancelAnimationFrame(a.current),a.current=window.requestAnimationFrame(()=>{e(n)})}},Za=e=>{const{enableRowsPerPage:a,rowsPerPageOptions:n}=e;return a&&Array.isArray(n)?n[n.length-1]:null},et=e=>{var V,I,F,N;const a=Wa(e),n=$a(a),t=R.useRef(),l=R.useRef(null),r=R.useMemo(()=>za({columnDefs:[...n,...e.columns]}),[e.columns,n]),o=R.useMemo(()=>{var O,$,K,B;const x=a.initialState??{};return x.columnOrder=Ba(x.columnOrder??[],r,a),x.columnPinning={left:Array.from(new Set([...a.enableExpanding?[G.expand]:[],...a.enableRowSelection?[G.select]:[],...((O=x.columnPinning)==null?void 0:O.left)??[]])),right:Array.from(new Set([...a.enableRowActions?[G.actions]:[],...(($=x.columnPinning)==null?void 0:$.right)??[]]))},x.pagination={pageIndex:((K=x==null?void 0:x.pagination)==null?void 0:K.pageIndex)??0,pageSize:((B=x==null?void 0:x.pagination)==null?void 0:B.pageSize)??Za(a)??50},x},[a,r]),[u,i]=R.useState((o==null?void 0:o.showColumnSettings)??!1),[c,d]=R.useState((o==null?void 0:o.isFullscreenMode)??!1),[b,D]=R.useState((o==null?void 0:o.columnSizing)??{}),[s,p]=R.useState((o==null?void 0:o.activeRowId)??void 0),[g,f]=R.useState(0),w=()=>{f(t.current.getBoundingClientRect().width)},C=x=>{x.key==="Escape"&&d(!1)};R.useEffect(()=>(window.addEventListener("resize",w),window.addEventListener("keydown",C),()=>{window.removeEventListener("keydown",C),window.removeEventListener("resize",w)}),[]),R.useLayoutEffect(()=>{w()},[]);const v=Qa(D),q=R.useMemo(()=>{var x,O,$,K;return(x=e.state)!=null&&x.isLoading&&!e.data.length?[...Array((($=(O=e.state)==null?void 0:O.pagination)==null?void 0:$.pageSize)||((K=o==null?void 0:o.pagination)==null?void 0:K.pageSize)||10).fill(null)].map(()=>Object.assign({},..._a(a.columns).map(B=>({[Ka(B)]:null})))):e.data},[(V=o==null?void 0:o.pagination)==null?void 0:V.pageSize,e.data,(I=e.state)==null?void 0:I.isLoading,(N=(F=e.state)==null?void 0:F.pagination)==null?void 0:N.pageSize,a.columns]),k=Aa({...a,columns:r,data:q,initialState:o,state:{showColumnSettings:u,isFullscreenMode:c,columnSizing:b,activeRowId:s,...a.state,width:g},getCoreRowModel:Sa(),getPaginationRowModel:a.enablePagination?Oa():void 0,getSortedRowModel:a.enableSorting?Ta():void 0,getExpandedRowModel:a.enableExpanding?Pa():void 0});return k.refs={tableRef:t,lastSelectedRowIdRef:l},k.setShowColumnSettings=a.onShowColumnSettings??i,k.setIsFullscreenMode=a.onFullscreenModeChange??d,k.setColumnSizing=a.onColumnSizingChange??v,k.setActiveRowId=a.onActiveRowIdChange??p,k},nt=(e,a)=>{var v,q,k,V;const{columns:n,enabled:t=!1,initialState:l,props:r}=a,[o,u]=qn(e),[i,c]=R.useState({left:Array.from(new Set([...(r==null?void 0:r.enableExpanding)??!1?[G.expand]:[],...(r==null?void 0:r.enableRowSelection)??!0?[G.select]:[],...((v=o==null?void 0:o.columnPinning)==null?void 0:v.left)??((q=l==null?void 0:l.columnPinning)==null?void 0:q.left)??[]])),right:Array.from(new Set([...(r==null?void 0:r.enableRowActions)??!0?[G.actions]:[],...((k=o==null?void 0:o.columnPinning)==null?void 0:k.right)??((V=l==null?void 0:l.columnPinning)==null?void 0:V.right)??[]]))}),[d,b]=R.useState((o==null?void 0:o.columnSizing)??(l==null?void 0:l.columnSizing)??{}),D=n.map(I=>{var F,N;return I.id??((N=(F=I.accessorKey)==null?void 0:F.toString)==null?void 0:N.call(F))??I.header}),[s,p]=R.useState(Array.from(new Set([...(o==null?void 0:o.columnOrder)??(l==null?void 0:l.columnOrder)??[],...D]))),[g,f]=R.useState((o==null?void 0:o.columnVisibility)??(l==null?void 0:l.columnVisibility)??{}),[w,C]=R.useState((o==null?void 0:o.sorting)??(l==null?void 0:l.sorting)??[]);return t&&u({columnPinning:i,columnSizing:d,columnVisibility:g,sorting:w,columnOrder:s}),[{columnPinning:i,columnSizing:d,columnOrder:s,columnVisibility:g,sorting:w},{onColumnPinningChange:c,onColumnSizingChange:b,onColumnOrderChange:p,onColumnVisibilityChange:f,onSortingChange:C}]},at={sm:{maxWidth:512},md:{minWidth:513,maxWidth:720}},tt=Y.select.withConfig({displayName:"Pagination__Select",componentId:"sc-wcafgt-0"})(["border:1px solid ",";border-radius:",";color:",";height:",";"],ie("borderColor"),le("default"),ie("color"),ie("fieldHeight")),an=({table:e})=>{const{getCanNextPage:a,getCanPreviousPage:n,getPageCount:t,getPrePaginationRowModel:l,getState:r,nextPage:o,options:{enableRowsPerPage:u,rowCount:i,rowsPerPageOptions:c},previousPage:d,setPageIndex:b,setPageSize:D}=e,{pagination:s}=r(),{pageIndex:p,pageSize:g}=s,f=p+1,w=t()-1,C=i??l().rows.length,v=p*g,q=Math.min(p*g+g,C),[k,V]=Hn(at),I=!k.sm&&!k.md;return m.jsx(M,{ref:V,className:"ds-table-pagination-toolbar",paddingSize:"md",paddingType:"squish",children:m.jsxs(j,{align:"center",gap:"md",justify:"space-between",children:[u&&!k.sm&&m.jsxs(j,{align:"center",className:"ds-table-pagination-rows-per-page-wrapper",gap:"md",children:[m.jsx("label",{className:"ds-table-pagination-rows-per-page-label",htmlFor:"rowsPerPageSelect",children:k.md?"Rows":"Number of rows"}),m.jsx(tt,{className:"ds-table-pagination-rows-per-page-select",id:"rowsPerPageSelect",value:g,onChange:F=>{D(Number(F.target.value))},children:c.map(F=>m.jsx("option",{className:"ds-table-pagination-rows-per-page-option",value:F,children:F},F))})]}),m.jsxs("div",{className:"ds-table-pagination-item-count",children:[(v+1).toLocaleString("en-US"),"-",q.toLocaleString("en-US")," of"," ",m.jsx("abbr",{title:C.toString(),children:Oe(C)}),I&&" total items"]}),m.jsxs(j,{align:"center",className:"ds-table-pagination-buttons-wrapper",gap:"sm",children:[m.jsxs("span",{className:"ds-table-pagination-buttons-current-page",children:[I?"Page":"Pg."," ",f]}),m.jsx(A,{className:"ds-table-pagination-buttons-first-button ds-table-pagination-buttons-button",iconProps:{name:"backward-step"},isDisabled:!n(),label:"Go to the first page of table",onClick:()=>b(0)}),m.jsx(A,{className:"ds-table-pagination-buttons-prev-button ds-table-pagination-buttons-button",iconProps:{name:"angle-left"},isDisabled:!n(),label:"Go to the previous page of table",onClick:()=>d()}),m.jsx(A,{className:"ds-table-pagination-buttons-next-button ds-table-pagination-buttons-button",iconProps:{name:"angle-right"},isDisabled:!a(),label:"Go to the next page of table",onClick:()=>o()}),m.jsx(A,{className:"ds-table-pagination-buttons-last-button ds-table-pagination-buttons-button",iconProps:{name:"backward-step",rotation:180},isDisabled:!a(),label:"Go to the last page of table",onClick:()=>b(w)})]})]})})};an.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const tn=({table:e,row:a})=>{const{options:{renderDetailPanel:n},getState:t}=e,{width:l}=t();return m.jsx("tr",{className:"ds-table-body-row ds-table-row ds-table-detail-panel",children:m.jsx("td",{className:"ds-table-detail-panel-cell",colSpan:a.getVisibleCells().length,style:{width:l},children:n({table:e,row:a})})})};tn.__docgenInfo={description:"",methods:[],displayName:"DetailPanel",props:{row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const ln=(e,a)=>e instanceof Function?e(a):e,rn=({cell:e,table:a})=>{const{column:n}=e,{getIsPinned:t}=n,{columnDefType:l}=n.columnDef,{isLoading:r}=a.getState(),[o,u]=R.useState(100);return R.useEffect(()=>{if(!r||o!==100)return;const i=n.getSize();u(l==="display"?i/2:Math.round(Math.random()*(i-i/3)+i/3))},[n,l,r,o]),m.jsx("td",{className:te("ds-table-body-cell ds-table-cell",{"ds-table-cell-display":l==="display","ds-table-cell-select":n.id===G.select,"ds-table-cell-expand":n.id===G.expand,"ds-table-cell-actions":n.id===G.actions}),"data-pinned":t(),style:en({table:a,column:n}),children:r?m.jsx(Sn,{width:o}):ln(e.column.columnDef.cell,e.getContext())})};rn.__docgenInfo={description:"",methods:[],displayName:"BodyCell",props:{cell:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const on=({row:e,table:a})=>{const{getState:n,options:{renderDetailPanel:t,onRowClick:l},setActiveRowId:r}=a,{getVisibleCells:o,getIsExpanded:u,getIsSelected:i,id:c}=e,{activeRowId:d}=n(),b=typeof l=="function";return m.jsxs(m.Fragment,{children:[m.jsx("tr",{className:"ds-table-body-row ds-table-row","data-active":b?c===d:void 0,"data-selected":i(),onClick:()=>{b&&(r(c),l({row:e,table:a}))},children:o().map(D=>m.jsx(rn,{cell:D,table:a},D.id))}),t&&u()&&m.jsx(tn,{row:e,table:a})]})};on.__docgenInfo={description:"",methods:[],displayName:"BodyRow",props:{row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const lt=Y.ul.withConfig({displayName:"Body__List",componentId:"sc-u1ch7l-0"})(["list-style-type:initial;padding-inline-start:1.5rem;"]),un=({table:e})=>{const{getRowModel:a,getVisibleLeafColumns:n,options:{renderNoDataFallback:t}}=e,{rows:l}=a();return m.jsx("tbody",{className:"ds-table-body",children:l.length?l.map(r=>m.jsx(on,{row:r,table:e},r.id)):m.jsx("tr",{style:{display:"flex"},children:m.jsx("td",{colSpan:n().length,style:{flex:1},children:m.jsx(Te,{background:"white",radius:"none",children:m.jsx(M,{paddingSize:"xl",children:(t==null?void 0:t({table:e}))??m.jsxs(ne,{gap:"sm",children:[m.jsx(ae,{as:"p",size:"h5",children:"No results found"}),m.jsxs(jn,{as:"div",variant:"secondary",children:["This may happen because:",m.jsxs(lt,{children:[m.jsx("li",{children:"the data set is empty"}),m.jsx("li",{children:"none of the items match your active filters"})]})]})]})})})})})})};un.__docgenInfo={description:"",methods:[],displayName:"Body",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const sn=({header:e,table:a})=>{const{getState:n,options:{enableColumnOrdering:t,enableColumnPinning:l,enableColumnResizing:r,enableFullScreenMode:o,enableHiding:u,enableSorting:i,enableSortingRemoval:c},setColumnSizingInfo:d,setShowColumnSettings:b,setIsFullscreenMode:D}=a,{column:s}=e,{columnSizing:p,isFullscreenMode:g}=n(),f=nn(a),w=N=>{s.toggleSorting(N)},C=()=>{s.clearSorting()},v=()=>{s.toggleVisibility(!1)},q=N=>{s.pin(N)},k=()=>{d(N=>({...N,isResizingColumn:!1})),s.resetSize()},V=()=>{b(N=>!N)},I=()=>{D(N=>!N)},F=[...i&&s.getCanSort()?[m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"sort-up",isDisabled:s.getIsSorted()==="asc",onClick:()=>w(!1),children:"Ascending sort"},"col-action-sort-asc"),m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"sort-down",isDisabled:s.getIsSorted()==="desc",onClick:()=>w(!0),children:"Descending sort"},"col-action-sort-desc"),c!==!1&&m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!s.getIsSorted(),onClick:C,children:"Clear sort"},"col-action-sort-reset"),u&&s.getCanHide()?m.jsx(U,{},"col-action-sep-01"):void 0]:[],...u&&s.getCanHide()?[m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"eye-slash",isDisabled:f.length===1,onClick:v,children:"Hide column"},"col-action-hide-col"),!u&&!l&&!t?m.jsx(U,{},"col-action-sep-02"):void 0]:[],...u||l||t?[m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"columns-3",onClick:V,children:"Column settings"},"col-action-settings"),l&&s.getCanPin()?m.jsx(U,{},"col-action-sep-03"):void 0]:[],...l&&s.getCanPin()?[m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"thumbstack",isDisabled:s.getIsPinned()==="left",onClick:()=>q("left"),children:"Pin column"},"col-action-pin-left"),m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!s.getIsPinned(),onClick:()=>q(!1),children:"Unpin column"},"col-action-pin-reset"),r&&s.getCanResize()?m.jsx(U,{},"col-action-sep-04"):void 0]:[],...r&&s.getCanResize()?[m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!p[s.id],onClick:()=>k(),children:"Reset column size"},"col-action-size-reset"),o?m.jsx(U,{},"col-action-sep-05"):void 0]:[],...o?[m.jsx(T,{className:"ds-table-column-actions-menu-item",iconName:g?"compress":"expand",onClick:I,children:"Toggle full screen"},"col-action-fullscreen")]:[]].filter(Boolean);return m.jsx(Ne,{children:m.jsx(He,{$isFullscreen:g,align:"start",className:"ds-table-column-actions-menu-content",collisionPadding:10,sideOffset:5,children:F})})};sn.__docgenInfo={description:"",methods:[],displayName:"ColumnActionsMenu",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const mn=({header:e,table:a})=>{const{column:n}=e,{getIsSorted:t}=n,l=t();return m.jsxs(je,{children:[m.jsx(Se,{asChild:!0,children:m.jsx(A,{className:"ds-table-header-cell-column-actions-button",iconProps:{name:l==="desc"?"sort-down":l==="asc"?"sort-up":"ellipsis-v"},label:"Column actions"})}),m.jsx(sn,{header:e,table:a})]})};mn.__docgenInfo={description:"",methods:[],displayName:"HeaderCellColumnActionsButton",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const cn=({header:e,table:a})=>{const{setColumnSizingInfo:n,setColumnSizing:t,options:{defaultColumn:l}}=a,{column:r,getResizeHandler:o,getSize:u}=e,{id:i,columnDef:c}=r,d=c.minSize??l.minSize,b=c.maxSize??l.maxSize,D=()=>{n(p=>({...p,isResizingColumn:!1})),r.resetSize()},s=p=>{const{key:g}=p;g!=="ArrowLeft"&&g!=="ArrowRight"||t(f=>{const w=(f==null?void 0:f[r.id])??u(),C=g==="ArrowLeft"?w-10:g==="ArrowRight"?w+10:w,v=C>=b?b:C<=d?d:C;return{...f,[i]:v}})};return m.jsx("hr",{"aria-orientation":"vertical",className:"ds-table-header-cell-resize-handler",tabIndex:0,onDoubleClick:D,onKeyDown:s,onMouseDown:o(),onTouchStart:o()})};cn.__docgenInfo={description:"",methods:[],displayName:"HeaderCellResizeHandler",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const rt=e=>({minWidth:`${Math.min(e??0,4)}ch`,overflow:"hidden"}),dn=({header:e,table:a})=>{const{options:{enableColumnActions:n}}=a,{column:t,getContext:l,id:r,isPlaceholder:o}=e,{columnDef:u,getCanResize:i,getCanSort:c,getIsSorted:d,getIsPinned:b,getToggleSortingHandler:D}=t,{columnDefType:s,enableColumnActions:p,header:g,headerComponent:f,renderHeaderTooltip:w}=u,C=(n||p)&&p!==!1,v=w==null?void 0:w({column:t,header:e,table:a}),q=ln(f??g,l()),k=rt(g==null?void 0:g.length);return m.jsx("th",{className:te("ds-table-header-cell ds-table-cell",{"ds-table-cell-display":s==="display","ds-table-cell-select":t.id===G.select,"ds-table-cell-expand":t.id===G.expand,"ds-table-cell-actions":t.id===G.actions}),"data-pinned":b(),"data-sorted":d(),style:{...en({table:a,header:e,column:t})},children:o?null:s==="data"?m.jsxs(j,{align:"center",gap:"xs",justify:"space-between",children:[m.jsx(j,{align:"center",style:{overflow:"hidden"},children:m.jsx(Re,{placement:"top",popup:v,children:m.jsx("button",{"aria-label":`Sort by ${g}`,className:"ds-table-header-cell-title ds-table-unstyled-button",style:{...k,cursor:c()?"pointer":void 0},title:g,type:"button",onClick:D(),children:q})})}),C&&m.jsx(mn,{header:e,table:a}),i()&&m.jsx(cn,{header:e,table:a})]}):Object.values(G).indexOf(u.id)>0?m.jsx(j,{align:"center",justify:"center",children:q}):m.jsx(j,{align:"center",justify:"flex-start",children:m.jsx("div",{className:"ds-table-header-cell-title",style:k,title:g,children:m.jsx(Re,{placement:"top",popup:v,children:m.jsx("button",{className:"ds-table-unstyled-button",type:"button",children:q})})})})},r)};dn.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const Dn=({headerGroup:e,table:a})=>m.jsx("tr",{className:"ds-table-header-row ds-table-row",children:e.headers.map(n=>m.jsx(dn,{header:n,table:a},n.id))});Dn.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{headerGroup:{required:!0,tsType:{name:"intersection",raw:`Omit<HeaderGroup<D>, 'headers'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableHeader<D>[]",required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const bn=e=>{const{getState:a,getVisibleFlatColumns:n}=e,{width:t}=a();return n().reduce((r,o)=>r+o.getSize(),0)>t},gn=e=>{const{getSelectedRowModel:a}=e;return a().rows.length},ot=Y(M).withConfig({displayName:"Selection__SelectionRoot",componentId:"sc-1agyq0k-0"})(["position:sticky;left:0;right:0;bottom:0;z-index:1;transform:scale(1,-1);background-color:var(--sscds-color-primary-050);height:",";border-bottom:1px solid var(--sscds-table-color-border);"],Fn(53)),pn=({table:e})=>{const{options:{renderRowSelectionActions:a,rowCount:n,enableSelectAll:t},getPrePaginationRowModel:l,getSelectedRowModel:r,toggleAllRowsSelected:o}=e,u=bn(e),i=gn(e),c=r().rows,d=n??l().rows.length;return i===0?null:m.jsx(ot,{$hasHorizontalScroll:u,className:"ds-table-selection-toolbar",paddingSize:"sm",children:m.jsxs(j,{align:"center",gap:"md",justify:"space-between",children:[m.jsxs(j,{align:"center",className:"ds-table-selection-overview",gap:"md",children:[t&&m.jsx(oe,{style:{marginLeft:"2px"},table:e,isHeaderCheckbox:!0}),m.jsxs("div",{children:[m.jsx("strong",{className:"ds-table-selection-currently-selected",children:i.toLocaleString("en-US")})," ","of"," ",m.jsx("abbr",{title:d.toString(),children:Oe(d)})," ",d===1?"item":"items"," selected"]}),m.jsx(Ae,{className:"ds-table-selection-clear-button",variant:"ghost",onClick:()=>o(!1),children:"Clear selection"})]}),m.jsx(j,{align:"center",className:"ds-table-selection-actions-container",gap:"md",justify:"flex-end",children:a==null?void 0:a({selectedRows:Pe("original",c),totalRowCount:d,table:e})})]})})};pn.__docgenInfo={description:"",methods:[],displayName:"Selection",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const wn=({table:e})=>{const{options:{enableRowSelection:a}}=e,n=gn(e);return m.jsx("thead",{className:"ds-table-header",style:a&&n>0?{display:"none"}:null,children:e.getHeaderGroups().map(t=>m.jsx(Dn,{headerGroup:t,table:e},t.id))})};wn.__docgenInfo={description:"",methods:[],displayName:"Header",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const fn=({column:e,table:a,canColumnHide:n})=>{const{options:{enableColumnPinning:t,enableHiding:l,enableColumnOrdering:r}}=a,{attributes:o,listeners:u,setActivatorNodeRef:i,setNodeRef:c,transform:d,transition:b}=Tn({id:e.id}),D={transform:An.Transform.toString(d),transition:b};return m.jsx(M,{ref:c,className:"ds-table-settings-panel-item",paddingSize:"md",paddingType:"squish",style:D,children:m.jsxs(j,{align:"center",gap:"md",stretch:r?2:"start",children:[r&&m.jsx(A,{ref:i,iconProps:{name:"grip-dots-vertical"},label:`Reorder ${e.columnDef.header} column`,type:"button",...o,...u,style:{cursor:"grab"}}),m.jsx("span",{children:e.columnDef.header}),l&&m.jsx("div",{className:"ds-table-checkbox-wrapper",children:m.jsx("input",{"aria-label":`${e.getIsVisible()?"Hide":"Show"} ${e.columnDef.header} column`,checked:e.getIsVisible(),disabled:!n&&e.getIsVisible()||!e.getCanHide(),type:"checkbox",onChange:s=>e.toggleVisibility(s.target.checked)})}),t&&m.jsx("div",{className:"ds-table-checkbox-wrapper",children:m.jsx("input",{"aria-label":`${e.getIsPinned()!==!1?"Unpin":"Pin"} ${e.columnDef.header} column`,checked:e.getIsPinned()!==!1,disabled:!e.getCanPin(),type:"checkbox",onChange:s=>e.pin(s.target.checked?"left":!1)})})]})})};fn.__docgenInfo={description:"",methods:[],displayName:"SettingsItem",props:{column:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},canColumnHide:{required:!0,tsType:{name:"boolean"},description:""}}};const X=(e,a)=>a.find(n=>n.id===e.id),ve=(e,a)=>a.find(n=>n.id===e.id),ut=`To pick up a draggable table column, press space or enter.
Use the up and down arrow keys to update the position of the column in the table.
Press space or enter again to drop the item in its new position, or press escape to cancel.`,it=e=>({onDragStart({active:a}){const{columnDef:{header:n}}=X(a,e);return`Picked up ${n} column.`},onDragOver({active:a,over:n}){const{columnDef:{header:t}}=X(a,e);if(n){const{columnDef:{header:l}}=ve(n,e);return`${t} column was moved over ${l} column.`}return`${t} column is no longer over a droppable area.`},onDragEnd({active:a,over:n}){const{columnDef:{header:t}}=X(a,e);if(n){const{columnDef:{header:l}}=ve(n,e);return`${t} column was dropped over ${l} column`}return`${t} column was dropped.`},onDragCancel({active:a}){const{columnDef:{header:n}}=X(a,e);return`Dragging was cancelled. ${n} column was dropped.`}}),yn=({allColumns:e,table:a,canHideMoreColumns:n})=>{const{getState:t,setColumnOrder:l}=a,{columnOrder:r}=t(),o=En(qe(_n),qe(Kn,{coordinateGetter:$n})),u=({over:i,active:c})=>{const d=X(c,e),b=ve(i,e),D=Ja(d,b,r);l(D)};return m.jsx(zn,{accessibility:{screenReaderInstructions:{draggable:ut},announcements:it(e)},collisionDetection:Yn,modifiers:[Ln,Xn],sensors:o,onDragEnd:u,children:m.jsx(Un,{items:e,strategy:Mn,children:m.jsx("div",{children:e.map(i=>m.jsx(fn,{canColumnHide:n,column:i,table:a},i.id))})})})};yn.__docgenInfo={description:"",methods:[],displayName:"SettingsItems",props:{allColumns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}]}],raw:"DatatableColumn<D>[]"},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},canHideMoreColumns:{required:!0,tsType:{name:"boolean"},description:""}}};const st=Y.div.withConfig({displayName:"Settings__SettingsRoot",componentId:"sc-10xs3m5-0"})(["display:flex;flex-direction:column;position:absolute;top:0;bottom:0;right:0;border-left:1px solid var(--sscds-table-color-border);background:white;box-shadow:var(--sscds-table-shadow-settings);width:100%;max-width:var(--sscds-table-size-settings-width);z-index:2;.ds-table-settings-panel-item{padding-left:0.5rem;border:1px solid var(--sscds-table-color-border);&:first-of-type{border-top-left-radius:var(--sscds-table-radii-settings-item);border-top-right-radius:var(--sscds-table-radii-settings-item);}&:last-of-type{border-bottom-left-radius:var(--sscds-table-radii-settings-item);border-bottom-right-radius:var(--sscds-table-radii-settings-item);}}.ds-table-settings-panel-item + .ds-table-settings-panel-item{margin-top:-1px;}.ds-table-checkbox-wrapper{display:flex;padding:0 0.5rem;align-items:center;justify-content:center;}"]),hn=({table:e})=>{const{getAllLeafColumns:a,getCenterLeafColumns:n,getLeftLeafColumns:t,getRightLeafColumns:l,getState:r,options:{enableColumnPinning:o,enableHiding:u},setColumnOrder:i,setColumnPinning:c,setColumnVisibility:d,setShowColumnSettings:b,initialState:D}=e,{columnOrder:s,columnPinning:p}=r(),{datatable:g}=R.useContext(Ee),f=nn(e).length>1,w=R.useMemo(()=>s.length>0?[...t(),...Array.from(new Set(s)).map(V=>n().find(I=>(I==null?void 0:I.id)===V)),...l()].filter(Boolean).filter(V=>V.columnDef.columnDefType==="data"):a().filter(V=>V.columnDef.columnDefType==="data"),[s,p,a,t,l,n]),C=()=>{const V=a().filter(F=>F.columnDef.enableHiding!==!1),I=V.filter(F=>F.getIsVisible()===!1);return{areAllColumnsVisible:I.length===0,areSomeColumnsVisible:I.length>0&&I.length<V.length}},v=()=>{const V=a().filter(F=>F.columnDef.enablePinning!==!1),I=V.filter(F=>F.getIsPinned()===!1);return{areAllColumnsPinned:I.length===0,areSomeColumnsPinned:I.length>0&&I.length<V.length}},q=V=>{a().filter(I=>I.columnDef.enableHiding!==!1).forEach((I,F)=>{(V||!V&&F!==0)&&I.toggleVisibility(V)})},k=V=>{c(V?{left:a().map(I=>I.id)}:{})};return m.jsxs(st,{className:"ds-table-settings-panel",children:[m.jsx(M,{as:"header",paddingSize:"mdPlus",style:{borderBottom:"1px solid var(--sscds-border-color"},children:m.jsxs(j,{align:"center",gap:"md",justify:"space-between",children:[m.jsxs(j,{align:"center",gap:"md",children:[m.jsx(On,{name:"columns-3"}),m.jsx(ae,{isBold:!0,children:"Column settings"})]}),m.jsx(Pn,{ariaLabel:"Close column settings",marginCompensation:"md",onClose:()=>b(!1)})]})}),m.jsx(M,{paddingSize:"md",paddingType:"squish",style:{overflow:"auto",position:"sticky",top:(g==null?void 0:g.settingsOffset)??0},children:m.jsxs(ne,{gap:"sm",children:[m.jsxs(j,{align:"flex-end",gap:"md",stretch:"start",style:{paddingRight:"1rem"},children:[m.jsx("div",{children:m.jsx(Ae,{type:"button",variant:"ghost",onClick:()=>{c(D.columnPinning??{}),d(D.columnVisibility??{}),i(D.columnOrder??[])},children:"Reset to default"})}),m.jsxs(j,{gap:"sm",children:[u&&m.jsxs(ne,{gap:"sm",justify:"center",children:[m.jsx(ae,{variant:"secondary",children:"Show"}),m.jsx("div",{className:"ds-table-checkbox-wrapper",style:{height:"2.25rem"},children:m.jsx(re,{"aria-label":`${C().areAllColumnsVisible?"Hide":"Show"} all columns`,checked:C().areAllColumnsVisible,indeterminate:C().areSomeColumnsVisible,onChange:V=>q(V.target.checked)})})]}),o&&m.jsxs(ne,{gap:"sm",justify:"center",children:[m.jsx(ae,{variant:"secondary",children:"Pin"}),m.jsx("div",{className:"ds-table-checkbox-wrapper",style:{height:"2.25rem",marginLeft:"0.35rem"},children:m.jsx(re,{"aria-label":`${v().areAllColumnsPinned?"Unpin":"Pin"} all columns`,checked:v().areAllColumnsPinned,indeterminate:v().areSomeColumnsPinned,onChange:V=>k(V.target.checked)})})]})]})]}),m.jsx(yn,{allColumns:w,canHideMoreColumns:f,table:e})]})})]})};hn.__docgenInfo={description:"",methods:[],displayName:"Settings",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const mt=Y.div.withConfig({displayName:"TableRoot",componentId:"sc-1olpkzw-0"})(["position:relative;width:100%;max-width:100%;overflow-x:auto;transform:scale(1,-1);&[data-settings-state='open']{min-height:37.5rem;display:flex;align-content:flex-end;flex-wrap:wrap;background:var(--sscds-table-color-header-background);}&::-webkit-scrollbar{box-sizing:content-box;height:1.5rem;}&::-webkit-scrollbar-thumb{border-radius:",";background-color:",";border:8px solid ",";}&::-webkit-scrollbar-track-piece{border-radius:",";background-color:",";border:8px solid ",";}.ds-table{width:100%;transform:scale(1,-1);}.ds-table,.ds-table-header,.ds-table-body{display:grid;}.ds-table-row{display:flex;}.ds-table-body-row{align-items:flex-start;justify-content:flex-start;&[data-active='true'] .ds-table-cell{background-color:var(--sscds-table-color-active);}&[data-active]:hover .ds-table-cell{background-color:var(--sscds-color-primary-050);cursor:pointer;}}.ds-table-cell{display:flex;flex-direction:row;padding:var(--sscds-table-spacing-cell);height:100%;background-color:var(--sscds-table-color-background);&[data-pinned]:not([data-pinned='false']){position:sticky;z-index:1;& + .ds-table-cell[data-pinned='false']{border-left:none !important;}}}.ds-table-header-row,.ds-table-row:not(:last-of-type){border-bottom:1px solid var(--sscds-table-color-border);}.ds-table-header-cell{position:relative;flex-direction:column;justify-content:center;height:3.25rem;padding:var(--sscds-table-spacing-cell-header);background-color:var(--sscds-table-color-header-background);&:not(:first-of-type){border-left:1px solid var(--sscds-table-color-border) !important;}.ds-table-header-cell-title{text-align:left;font-weight:var(--sscds-table-typography-weight-header);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.ds-table-header-cell-resize-handler{margin:0;border:0;display:inline-block;width:0.25rem;background:var(--sscds-table-color-accent);cursor:col-resize;user-select:none;touch-action:none;position:absolute;top:0;bottom:0;right:0;opacity:0;transition:var(--sscds-action-transition);&:focus-visible{z-index:1;}}.ds-table-header-cell-sort-button{opacity:0;font-size:",";}&:hover,&:focus-within{.ds-table-header-cell-sort-button,.ds-table-header-cell-resize-handler{opacity:1;}}&[data-sorted]:not([data-sorted='false']) .ds-table-header-cell-sort-button{opacity:1;}}.ds-table-body-cell{align-items:flex-start;}.ds-table-body-cell:has([data-radix-popper-content-wrapper]){z-index:2 !important;}.ds-table-cell-select,.ds-table-cell-expand,.ds-table-cell-actions{min-width:2.5rem;flex:0 0 2.5rem;justify-content:center;padding:var(--sscds-table-spacing-cell-display);}.ds-table-detail-panel-cell{position:sticky;left:0;}.ds-table-select-button-target{width:2rem;height:2rem;display:grid;place-items:center;}&[data-fullscreen='true']{.ds-table{max-height:calc(100vh - var(--sscds-table-height-pagination));overflow:auto;}.ds-table-header{position:sticky;top:0;z-index:2;}}&[data-horizontal-scroll='false']{& .ds-table-cell{box-shadow:none !important;}}.ds-table-unstyled-button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;text-align:inherit;outline:none;line-height:inherit;-webkit-appearance:none;}"],le("round"),W("primary.500"),W("neutral.0"),le("round"),W("neutral.300"),W("neutral.0"),xn("sm")),ct=Gn(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"]),Cn=Y.span.withConfig({shouldForwardProp:e=>!In(e,["isTop","isBottom"])}).withConfig({displayName:"ProgressBar",componentId:"sc-7v6dfo-0"})(["display:block;background:var(--sscds-brand-100);overflow:hidden;position:absolute;left:0;right:0;bottom:",";top:",";z-index:1;height:0.25rem;width:100%;border-radius:",";-webkit-mask-image:-webkit-radial-gradient(white,black);&::after{animation:"," 2s linear 0.5s infinite;background:linear-gradient( 90deg,transparent,var(--sscds-brand-500),transparent );content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}"],({isTop:e})=>e?0:void 0,({isBottom:e})=>e?0:void 0,le("default"),ct);Cn.defaultProps={role:"progressbar"};const Ge=R.memo(Cn),vn=({table:e})=>{const{getFlatHeaders:a,getState:n,options:{columns:t},refs:{tableRef:l}}=e,{columnSizing:r,columnSizingInfo:o,columnVisibility:u,showColumnSettings:i,showProgress:c,isFullscreenMode:d}=n(),{datatable:b}=R.useContext(Ee),D=bn(e),s=R.useMemo(()=>{var f;const p=a(),g={};for(let w=0;w<p.length;w++){const C=p[w];let v=C.getSize();(f=C.subHeaders)!=null&&f.length&&(v=v*1.05+C.subHeaders.length*2),g[`--header-${Ce(C.id)}-size`]=v,g[`--col-${Ce(C.column.id)}-size`]=v}return g},[t,r,o,u]);return R.useEffect(()=>{b==null||b.onFullscreenModeChange(d)},[d,b]),m.jsxs(m.Fragment,{children:[m.jsxs(mt,{"data-fullscreen":d,"data-horizontal-scroll":D,"data-settings-state":i?"open":"closed",tabIndex:0,children:[c&&m.jsx(Ge,{isTop:!0}),m.jsxs("table",{ref:p=>{l.current=p},className:"ds-table",style:s,children:[m.jsx(wn,{table:e}),m.jsx(un,{table:e})]}),c&&m.jsx(Ge,{isBottom:!0}),e.options.enableRowSelection&&m.jsx(pn,{table:e})]}),i&&m.jsx(hn,{table:e})]})};vn.__docgenInfo={description:"",methods:[],displayName:"Table",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const dt=Y.div.withConfig({displayName:"TableSurface__DatatableRoot",componentId:"sc-1akd3x4-0"})(["",";"],({$isFullscreen:e})=>e&&Nn(["--sscds-table-height-pagination:4.25rem;position:fixed;inset:0;padding:0 !important;margin:0 !important;z-index:999;width:100vw;height:100vh;background:white;display:grid;grid-template-rows:1fr var(--sscds-table-height-pagination);"])),Vn=({table:e})=>{const{getState:a}=e,{isFullscreenMode:n}=a();return m.jsxs(dt,{$isFullscreen:n,children:[m.jsx(Te,{background:"white",radius:n?"none":"md",style:{"--sscds-table-color-background":"var(--sscds-background)","--sscds-table-color-border":"var(--sscds-border-color)","--sscds-table-color-accent":"var(--sscds-color-primary-500)","--sscds-table-color-header-background":"var(--sscds-color-neutral-2)","--sscds-table-color-settings-background":"var(--sscds-table-color-background)","--sscds-table-color-active":"var(--sscds-color-neutral-3)","--sscds-table-spacing-cell":"var(--sscds-space-2x)","--sscds-table-spacing-cell-header":"var(--sscds-space-2x)","--sscds-table-spacing-cell-display":"var(--sscds-space-1x)","--sscds-table-typography-weight-header":"var(--sscds-font-weight-700)","--sscds-table-shadow-settings":"-6px 0px 12px 0px rgba(0, 0, 0, 0.07)","--sscds-table-shadow-pin-left":"8px 0px 8px 0px rgba(0, 0, 0, 0.05)","--sscds-table-shadow-pin-right":"-8px 0px 8px 0px rgba(0, 0, 0, 0.05)","--sscds-table-size-settings-width":"22.5rem","--sscds-table-radii-settings-item":"var(--sscds-radii-default)",position:"relative",overflow:"clip",...n?{overflow:"hidden",width:"100%",maxWidth:"100%"}:{}},hasBorder:!0,children:m.jsx(vn,{table:e})}),e.options.enablePagination&&e.getRowModel().rows.length>0&&m.jsx(an,{table:e})]})};Vn.__docgenInfo={description:"",methods:[],displayName:"TableSurface",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};const kn=e=>{const a=Rn("DatatableV2"),{id:n,enablePersistentState:t,columns:l,initialState:r,state:o}=e,[u,i]=nt(`sscds_dt_${n}`,{enabled:t,columns:l,initialState:r??{},props:e}),c=et({...e,...t?{state:{...o,...u},...i}:{}});return a.log("Datatable Instance",c),a.log("Datatable State",c.getState()),m.jsx(Vn,{table:c})},Tt=kn;kn.__docgenInfo={description:"",methods:[],displayName:"Datatable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
>`},{name:"CustomState"}]}],raw:"Partial<DatatableState>"},description:"Current state of the table. Used when you need to manage table state on your own."}},composes:["Omit"]};export{Tt as D};
