import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{i as ia,u as sa}from"./useLogger-DZJuabeR.js";import{r as P}from"./index-BwDkhjyp.js";import{I as be}from"./IconButton-ClFQ-YsQ.js";import{u as ce,S as ma}from"./useSafeTranslation-BCAAUwPD.js";import{b as yn,M as wn,c as Me,d as pe,$ as hn,a as vn}from"./menuElements-DyWKGTWV.js";import{c as je}from"./index-CVyJwDg7.js";import{p as In}from"./pluck-D_zsPq3H.js";import{u as ca}from"./useLocalStorageState-D2NPfI6N.js";import{q as he,W as Aa,A as da}from"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-0COcc321.js";import{d as bn,m as He,b as Je,f as xe}from"./index-BQWFrAEB.js";import{u as ba}from"./useContainerQuery-Cnf3zHpB.js";import{S as rn}from"./Skeleton-lY1Z7Pv8.js";import{P as Be}from"./Padbox-DzmU9-lr.js";import{I as te}from"./Inline.enums-6YASdLRa.js";import{B as Pe}from"./Button-Y7NUWBaW.js";import{S as Da,T as Ue}from"./index-B9rA5P-U.js";import{S as un}from"./index-CKrVqi-N.js";import{P as pa}from"./index-DmfpuQjN.js";import{S as Oe}from"./index-iY2rO5S8.js";import"./index-BR1zTT6O.js";import"./index-CA8igt89.js";import{T as Dn}from"./Tooltip-HRInPKQC.js";import{I as Ne}from"./Icon-OPJ4_-kw.js";import"./index-DRQu5xX2.js";import{u as ga,C as Ca,a as fa,b as pn,s as ya,K as wa,P as ha,D as va,c as Ia,S as Va,v as ka}from"./sortable.esm-CHKde6Px.js";import{r as Ba,a as Sa}from"./modifiers.esm-CDknwSvc.js";import{a as Vn}from"./DSProvider-BQ8JssCJ.js";import{C as Ea}from"./CloseButton-DldEAqTZ.js";/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function ge(e,a){return typeof e=="function"?e(a):e}function me(e,a){return n=>{a.setState(t=>({...t,[e]:ge(n,t[e])}))}}function Te(e){return e instanceof Function}function Ra(e){return Array.isArray(e)&&e.every(a=>typeof a=="number")}function xa(e,a){const n=[],t=l=>{l.forEach(o=>{n.push(o);const r=a(o);r!=null&&r.length&&t(r)})};return t(e),n}function B(e,a,n){let t=[],l;return o=>{let r;n.key&&n.debug&&(r=Date.now());const u=e(o);if(!(u.length!==t.length||u.some((A,p)=>t[p]!==A)))return l;t=u;let m;if(n.key&&n.debug&&(m=Date.now()),l=a(...u),n==null||n.onChange==null||n.onChange(l),n.key&&n.debug&&n!=null&&n.debug()){const A=Math.round((Date.now()-r)*100)/100,p=Math.round((Date.now()-m)*100)/100,d=p/16,c=(g,C)=>{for(g=String(g);g.length<C;)g=" "+g;return g};console.info(`%c⏱ ${c(p,5)} /${c(A,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*d,120))}deg 100% 31%);`,n==null?void 0:n.key)}return l}}function S(e,a,n,t){return{debug:()=>{var l;return(l=e==null?void 0:e.debugAll)!=null?l:e[a]},key:!1,onChange:t}}function Ga(e,a,n,t){const l=()=>{var r;return(r=o.getValue())!=null?r:e.options.renderFallbackValue},o={id:`${a.id}_${n.id}`,row:a,column:n,getValue:()=>a.getValue(t),renderValue:l,getContext:B(()=>[e,n,a,o],(r,u,i,m)=>({table:r,column:u,row:i,cell:m,getValue:m.getValue,renderValue:m.renderValue}),S(e.options,"debugCells"))};return e._features.forEach(r=>{r.createCell==null||r.createCell(o,n,a,e)},{}),o}function qa(e,a,n,t){var l,o;const u={...e._getDefaultColumnDef(),...a},i=u.accessorKey;let m=(l=(o=u.id)!=null?o:i?i.replace(".","_"):void 0)!=null?l:typeof u.header=="string"?u.header:void 0,A;if(u.accessorFn?A=u.accessorFn:i&&(i.includes(".")?A=d=>{let c=d;for(const C of i.split(".")){var g;c=(g=c)==null?void 0:g[C]}return c}:A=d=>d[u.accessorKey]),!m)throw new Error;let p={id:`${String(m)}`,accessorFn:A,parent:t,depth:n,columnDef:u,columns:[],getFlatColumns:B(()=>[!0],()=>{var d;return[p,...(d=p.columns)==null?void 0:d.flatMap(c=>c.getFlatColumns())]},S(e.options,"debugColumns")),getLeafColumns:B(()=>[e._getOrderColumnsFn()],d=>{var c;if((c=p.columns)!=null&&c.length){let g=p.columns.flatMap(C=>C.getLeafColumns());return d(g)}return[p]},S(e.options,"debugColumns"))};for(const d of e._features)d.createColumn==null||d.createColumn(p,e);return p}const oe="debugHeaders";function gn(e,a,n){var t;let o={id:(t=n.id)!=null?t:a.id,column:a,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const r=[],u=i=>{i.subHeaders&&i.subHeaders.length&&i.subHeaders.map(u),r.push(i)};return u(o),r},getContext:()=>({table:e,header:o,column:a})};return e._features.forEach(r=>{r.createHeader==null||r.createHeader(o,e)}),o}const Fa={createTable:e=>{e.getHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,l)=>{var o,r;const u=(o=t==null?void 0:t.map(p=>n.find(d=>d.id===p)).filter(Boolean))!=null?o:[],i=(r=l==null?void 0:l.map(p=>n.find(d=>d.id===p)).filter(Boolean))!=null?r:[],m=n.filter(p=>!(t!=null&&t.includes(p.id))&&!(l!=null&&l.includes(p.id)));return Ge(a,[...u,...m,...i],e)},S(e.options,oe)),e.getCenterHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t,l)=>(n=n.filter(o=>!(t!=null&&t.includes(o.id))&&!(l!=null&&l.includes(o.id))),Ge(a,n,e,"center")),S(e.options,oe)),e.getLeftHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(a,n,t)=>{var l;const o=(l=t==null?void 0:t.map(r=>n.find(u=>u.id===r)).filter(Boolean))!=null?l:[];return Ge(a,o,e,"left")},S(e.options,oe)),e.getRightHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(a,n,t)=>{var l;const o=(l=t==null?void 0:t.map(r=>n.find(u=>u.id===r)).filter(Boolean))!=null?l:[];return Ge(a,o,e,"right")},S(e.options,oe)),e.getFooterGroups=B(()=>[e.getHeaderGroups()],a=>[...a].reverse(),S(e.options,oe)),e.getLeftFooterGroups=B(()=>[e.getLeftHeaderGroups()],a=>[...a].reverse(),S(e.options,oe)),e.getCenterFooterGroups=B(()=>[e.getCenterHeaderGroups()],a=>[...a].reverse(),S(e.options,oe)),e.getRightFooterGroups=B(()=>[e.getRightHeaderGroups()],a=>[...a].reverse(),S(e.options,oe)),e.getFlatHeaders=B(()=>[e.getHeaderGroups()],a=>a.map(n=>n.headers).flat(),S(e.options,oe)),e.getLeftFlatHeaders=B(()=>[e.getLeftHeaderGroups()],a=>a.map(n=>n.headers).flat(),S(e.options,oe)),e.getCenterFlatHeaders=B(()=>[e.getCenterHeaderGroups()],a=>a.map(n=>n.headers).flat(),S(e.options,oe)),e.getRightFlatHeaders=B(()=>[e.getRightHeaderGroups()],a=>a.map(n=>n.headers).flat(),S(e.options,oe)),e.getCenterLeafHeaders=B(()=>[e.getCenterFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),S(e.options,oe)),e.getLeftLeafHeaders=B(()=>[e.getLeftFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),S(e.options,oe)),e.getRightLeafHeaders=B(()=>[e.getRightFlatHeaders()],a=>a.filter(n=>{var t;return!((t=n.subHeaders)!=null&&t.length)}),S(e.options,oe)),e.getLeafHeaders=B(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(a,n,t)=>{var l,o,r,u,i,m;return[...(l=(o=a[0])==null?void 0:o.headers)!=null?l:[],...(r=(u=n[0])==null?void 0:u.headers)!=null?r:[],...(i=(m=t[0])==null?void 0:m.headers)!=null?i:[]].map(A=>A.getLeafHeaders()).flat()},S(e.options,oe))}};function Ge(e,a,n,t){var l,o;let r=0;const u=function(d,c){c===void 0&&(c=1),r=Math.max(r,c),d.filter(g=>g.getIsVisible()).forEach(g=>{var C;(C=g.columns)!=null&&C.length&&u(g.columns,c+1)},0)};u(e);let i=[];const m=(d,c)=>{const g={depth:c,id:[t,`${c}`].filter(Boolean).join("_"),headers:[]},C=[];d.forEach(v=>{const y=[...C].reverse()[0],E=v.column.depth===g.depth;let I,U=!1;if(E&&v.column.parent?I=v.column.parent:(I=v.column,U=!0),y&&(y==null?void 0:y.column)===I)y.subHeaders.push(v);else{const O=gn(n,I,{id:[t,c,I.id,v==null?void 0:v.id].filter(Boolean).join("_"),isPlaceholder:U,placeholderId:U?`${C.filter(J=>J.column===I).length}`:void 0,depth:c,index:C.length});O.subHeaders.push(v),C.push(O)}g.headers.push(v),v.headerGroup=g}),i.push(g),c>0&&m(C,c-1)},A=a.map((d,c)=>gn(n,d,{depth:r,index:c}));m(A,r-1),i.reverse();const p=d=>d.filter(g=>g.column.getIsVisible()).map(g=>{let C=0,v=0,y=[0];g.subHeaders&&g.subHeaders.length?(y=[],p(g.subHeaders).forEach(I=>{let{colSpan:U,rowSpan:O}=I;C+=U,y.push(O)})):C=1;const E=Math.min(...y);return v=v+E,g.colSpan=C,g.rowSpan=v,{colSpan:C,rowSpan:v}});return p((l=(o=i[0])==null?void 0:o.headers)!=null?l:[]),i}const Ma=(e,a,n,t,l,o,r)=>{let u={id:a,index:t,original:n,depth:l,parentId:r,_valuesCache:{},_uniqueValuesCache:{},getValue:i=>{if(u._valuesCache.hasOwnProperty(i))return u._valuesCache[i];const m=e.getColumn(i);if(m!=null&&m.accessorFn)return u._valuesCache[i]=m.accessorFn(u.original,t),u._valuesCache[i]},getUniqueValues:i=>{if(u._uniqueValuesCache.hasOwnProperty(i))return u._uniqueValuesCache[i];const m=e.getColumn(i);if(m!=null&&m.accessorFn)return m.columnDef.getUniqueValues?(u._uniqueValuesCache[i]=m.columnDef.getUniqueValues(u.original,t),u._uniqueValuesCache[i]):(u._uniqueValuesCache[i]=[u.getValue(i)],u._uniqueValuesCache[i])},renderValue:i=>{var m;return(m=u.getValue(i))!=null?m:e.options.renderFallbackValue},subRows:[],getLeafRows:()=>xa(u.subRows,i=>i.subRows),getParentRow:()=>u.parentId?e.getRow(u.parentId,!0):void 0,getParentRows:()=>{let i=[],m=u;for(;;){const A=m.getParentRow();if(!A)break;i.push(A),m=A}return i.reverse()},getAllCells:B(()=>[e.getAllLeafColumns()],i=>i.map(m=>Ga(e,u,m,m.id)),S(e.options,"debugRows")),_getAllCellsByColumnId:B(()=>[u.getAllCells()],i=>i.reduce((m,A)=>(m[A.column.id]=A,m),{}),S(e.options,"debugRows"))};for(let i=0;i<e._features.length;i++){const m=e._features[i];m==null||m.createRow==null||m.createRow(u,e)}return u},Oa={createColumn:(e,a)=>{e._getFacetedRowModel=a.options.getFacetedRowModel&&a.options.getFacetedRowModel(a,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():a.getPreFilteredRowModel(),e._getFacetedUniqueValues=a.options.getFacetedUniqueValues&&a.options.getFacetedUniqueValues(a,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=a.options.getFacetedMinMaxValues&&a.options.getFacetedMinMaxValues(a,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},kn=(e,a,n)=>{var t;const l=n.toLowerCase();return!!(!((t=e.getValue(a))==null||(t=t.toString())==null||(t=t.toLowerCase())==null)&&t.includes(l))};kn.autoRemove=e=>Ae(e);const Bn=(e,a,n)=>{var t;return!!(!((t=e.getValue(a))==null||(t=t.toString())==null)&&t.includes(n))};Bn.autoRemove=e=>Ae(e);const Sn=(e,a,n)=>{var t;return((t=e.getValue(a))==null||(t=t.toString())==null?void 0:t.toLowerCase())===(n==null?void 0:n.toLowerCase())};Sn.autoRemove=e=>Ae(e);const En=(e,a,n)=>{var t;return(t=e.getValue(a))==null?void 0:t.includes(n)};En.autoRemove=e=>Ae(e)||!(e!=null&&e.length);const Rn=(e,a,n)=>!n.some(t=>{var l;return!((l=e.getValue(a))!=null&&l.includes(t))});Rn.autoRemove=e=>Ae(e)||!(e!=null&&e.length);const xn=(e,a,n)=>n.some(t=>{var l;return(l=e.getValue(a))==null?void 0:l.includes(t)});xn.autoRemove=e=>Ae(e)||!(e!=null&&e.length);const Gn=(e,a,n)=>e.getValue(a)===n;Gn.autoRemove=e=>Ae(e);const qn=(e,a,n)=>e.getValue(a)==n;qn.autoRemove=e=>Ae(e);const sn=(e,a,n)=>{let[t,l]=n;const o=e.getValue(a);return o>=t&&o<=l};sn.resolveFilterValue=e=>{let[a,n]=e,t=typeof a!="number"?parseFloat(a):a,l=typeof n!="number"?parseFloat(n):n,o=a===null||Number.isNaN(t)?-1/0:t,r=n===null||Number.isNaN(l)?1/0:l;if(o>r){const u=o;o=r,r=u}return[o,r]};sn.autoRemove=e=>Ae(e)||Ae(e[0])&&Ae(e[1]);const De={includesString:kn,includesStringSensitive:Bn,equalsString:Sn,arrIncludes:En,arrIncludesAll:Rn,arrIncludesSome:xn,equals:Gn,weakEquals:qn,inNumberRange:sn};function Ae(e){return e==null||e===""}const Na={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:me("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,a)=>{e.getAutoFilterFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);return typeof t=="string"?De.includesString:typeof t=="number"?De.inNumberRange:typeof t=="boolean"||t!==null&&typeof t=="object"?De.equals:Array.isArray(t)?De.arrIncludes:De.weakEquals},e.getFilterFn=()=>{var n,t;return Te(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(n=(t=a.options.filterFns)==null?void 0:t[e.columnDef.filterFn])!=null?n:De[e.columnDef.filterFn]},e.getCanFilter=()=>{var n,t,l;return((n=e.columnDef.enableColumnFilter)!=null?n:!0)&&((t=a.options.enableColumnFilters)!=null?t:!0)&&((l=a.options.enableFilters)!=null?l:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var n;return(n=a.getState().columnFilters)==null||(n=n.find(t=>t.id===e.id))==null?void 0:n.value},e.getFilterIndex=()=>{var n,t;return(n=(t=a.getState().columnFilters)==null?void 0:t.findIndex(l=>l.id===e.id))!=null?n:-1},e.setFilterValue=n=>{a.setColumnFilters(t=>{const l=e.getFilterFn(),o=t==null?void 0:t.find(A=>A.id===e.id),r=ge(n,o?o.value:void 0);if(Cn(l,r,e)){var u;return(u=t==null?void 0:t.filter(A=>A.id!==e.id))!=null?u:[]}const i={id:e.id,value:r};if(o){var m;return(m=t==null?void 0:t.map(A=>A.id===e.id?i:A))!=null?m:[]}return t!=null&&t.length?[...t,i]:[i]})}},createRow:(e,a)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=a=>{const n=e.getAllLeafColumns(),t=l=>{var o;return(o=ge(a,l))==null?void 0:o.filter(r=>{const u=n.find(i=>i.id===r.id);if(u){const i=u.getFilterFn();if(Cn(i,r.value,u))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(t)},e.resetColumnFilters=a=>{var n,t;e.setColumnFilters(a?[]:(n=(t=e.initialState)==null?void 0:t.columnFilters)!=null?n:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function Cn(e,a,n){return(e&&e.autoRemove?e.autoRemove(a,n):!1)||typeof a>"u"||typeof a=="string"&&!a}const ja=(e,a,n)=>n.reduce((t,l)=>{const o=l.getValue(e);return t+(typeof o=="number"?o:0)},0),Ha=(e,a,n)=>{let t;return n.forEach(l=>{const o=l.getValue(e);o!=null&&(t>o||t===void 0&&o>=o)&&(t=o)}),t},Pa=(e,a,n)=>{let t;return n.forEach(l=>{const o=l.getValue(e);o!=null&&(t<o||t===void 0&&o>=o)&&(t=o)}),t},Ua=(e,a,n)=>{let t,l;return n.forEach(o=>{const r=o.getValue(e);r!=null&&(t===void 0?r>=r&&(t=l=r):(t>r&&(t=r),l<r&&(l=r)))}),[t,l]},Ka=(e,a)=>{let n=0,t=0;if(a.forEach(l=>{let o=l.getValue(e);o!=null&&(o=+o)>=o&&(++n,t+=o)}),n)return t/n},Ta=(e,a)=>{if(!a.length)return;const n=a.map(o=>o.getValue(e));if(!Ra(n))return;if(n.length===1)return n[0];const t=Math.floor(n.length/2),l=n.sort((o,r)=>o-r);return n.length%2!==0?l[t]:(l[t-1]+l[t])/2},_a=(e,a)=>Array.from(new Set(a.map(n=>n.getValue(e))).values()),Ya=(e,a)=>new Set(a.map(n=>n.getValue(e))).size,Qa=(e,a)=>a.length,_e={sum:ja,min:Ha,max:Pa,extent:Ua,mean:Ka,median:Ta,unique:_a,uniqueCount:Ya,count:Qa},za={getDefaultColumnDef:()=>({aggregatedCell:e=>{var a,n;return(a=(n=e.getValue())==null||n.toString==null?void 0:n.toString())!=null?a:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:me("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,a)=>{e.toggleGrouping=()=>{a.setGrouping(n=>n!=null&&n.includes(e.id)?n.filter(t=>t!==e.id):[...n??[],e.id])},e.getCanGroup=()=>{var n,t;return((n=e.columnDef.enableGrouping)!=null?n:!0)&&((t=a.options.enableGrouping)!=null?t:!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.includes(e.id)},e.getGroupedIndex=()=>{var n;return(n=a.getState().grouping)==null?void 0:n.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const n=e.getCanGroup();return()=>{n&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const n=a.getCoreRowModel().flatRows[0],t=n==null?void 0:n.getValue(e.id);if(typeof t=="number")return _e.sum;if(Object.prototype.toString.call(t)==="[object Date]")return _e.extent},e.getAggregationFn=()=>{var n,t;if(!e)throw new Error;return Te(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(n=(t=a.options.aggregationFns)==null?void 0:t[e.columnDef.aggregationFn])!=null?n:_e[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=a=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(a),e.resetGrouping=a=>{var n,t;e.setGrouping(a?[]:(n=(t=e.initialState)==null?void 0:t.grouping)!=null?n:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,a)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=n=>{if(e._groupingValuesCache.hasOwnProperty(n))return e._groupingValuesCache[n];const t=a.getColumn(n);return t!=null&&t.columnDef.getGroupingValue?(e._groupingValuesCache[n]=t.columnDef.getGroupingValue(e.original),e._groupingValuesCache[n]):e.getValue(n)},e._groupingValuesCache={}},createCell:(e,a,n,t)=>{e.getIsGrouped=()=>a.getIsGrouped()&&a.id===n.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&a.getIsGrouped(),e.getIsAggregated=()=>{var l;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((l=n.subRows)!=null&&l.length)}}};function $a(e,a,n){if(!(a!=null&&a.length)||!n)return e;const t=e.filter(o=>!a.includes(o.id));return n==="remove"?t:[...a.map(o=>e.find(r=>r.id===o)).filter(Boolean),...t]}const Wa={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:me("columnOrder",e)}),createColumn:(e,a)=>{e.getIndex=B(n=>[Re(a,n)],n=>n.findIndex(t=>t.id===e.id),S(a.options,"debugColumns")),e.getIsFirstColumn=n=>{var t;return((t=Re(a,n)[0])==null?void 0:t.id)===e.id},e.getIsLastColumn=n=>{var t;const l=Re(a,n);return((t=l[l.length-1])==null?void 0:t.id)===e.id}},createTable:e=>{e.setColumnOrder=a=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(a),e.resetColumnOrder=a=>{var n;e.setColumnOrder(a?[]:(n=e.initialState.columnOrder)!=null?n:[])},e._getOrderColumnsFn=B(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(a,n,t)=>l=>{let o=[];if(!(a!=null&&a.length))o=l;else{const r=[...a],u=[...l];for(;u.length&&r.length;){const i=r.shift(),m=u.findIndex(A=>A.id===i);m>-1&&o.push(u.splice(m,1)[0])}o=[...o,...u]}return $a(o,n,t)},S(e.options,"debugTable"))}},Ye=()=>({left:[],right:[]}),La={getInitialState:e=>({columnPinning:Ye(),...e}),getDefaultOptions:e=>({onColumnPinningChange:me("columnPinning",e)}),createColumn:(e,a)=>{e.pin=n=>{const t=e.getLeafColumns().map(l=>l.id).filter(Boolean);a.setColumnPinning(l=>{var o,r;if(n==="right"){var u,i;return{left:((u=l==null?void 0:l.left)!=null?u:[]).filter(p=>!(t!=null&&t.includes(p))),right:[...((i=l==null?void 0:l.right)!=null?i:[]).filter(p=>!(t!=null&&t.includes(p))),...t]}}if(n==="left"){var m,A;return{left:[...((m=l==null?void 0:l.left)!=null?m:[]).filter(p=>!(t!=null&&t.includes(p))),...t],right:((A=l==null?void 0:l.right)!=null?A:[]).filter(p=>!(t!=null&&t.includes(p)))}}return{left:((o=l==null?void 0:l.left)!=null?o:[]).filter(p=>!(t!=null&&t.includes(p))),right:((r=l==null?void 0:l.right)!=null?r:[]).filter(p=>!(t!=null&&t.includes(p)))}})},e.getCanPin=()=>e.getLeafColumns().some(t=>{var l,o,r;return((l=t.columnDef.enablePinning)!=null?l:!0)&&((o=(r=a.options.enableColumnPinning)!=null?r:a.options.enablePinning)!=null?o:!0)}),e.getIsPinned=()=>{const n=e.getLeafColumns().map(u=>u.id),{left:t,right:l}=a.getState().columnPinning,o=n.some(u=>t==null?void 0:t.includes(u)),r=n.some(u=>l==null?void 0:l.includes(u));return o?"left":r?"right":!1},e.getPinnedIndex=()=>{var n,t;const l=e.getIsPinned();return l?(n=(t=a.getState().columnPinning)==null||(t=t[l])==null?void 0:t.indexOf(e.id))!=null?n:-1:0}},createRow:(e,a)=>{e.getCenterVisibleCells=B(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left,a.getState().columnPinning.right],(n,t,l)=>{const o=[...t??[],...l??[]];return n.filter(r=>!o.includes(r.column.id))},S(a.options,"debugRows")),e.getLeftVisibleCells=B(()=>[e._getAllVisibleCells(),a.getState().columnPinning.left],(n,t)=>(t??[]).map(o=>n.find(r=>r.column.id===o)).filter(Boolean).map(o=>({...o,position:"left"})),S(a.options,"debugRows")),e.getRightVisibleCells=B(()=>[e._getAllVisibleCells(),a.getState().columnPinning.right],(n,t)=>(t??[]).map(o=>n.find(r=>r.column.id===o)).filter(Boolean).map(o=>({...o,position:"right"})),S(a.options,"debugRows"))},createTable:e=>{e.setColumnPinning=a=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(a),e.resetColumnPinning=a=>{var n,t;return e.setColumnPinning(a?Ye():(n=(t=e.initialState)==null?void 0:t.columnPinning)!=null?n:Ye())},e.getIsSomeColumnsPinned=a=>{var n;const t=e.getState().columnPinning;if(!a){var l,o;return!!((l=t.left)!=null&&l.length||(o=t.right)!=null&&o.length)}return!!((n=t[a])!=null&&n.length)},e.getLeftLeafColumns=B(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(a,n)=>(n??[]).map(t=>a.find(l=>l.id===t)).filter(Boolean),S(e.options,"debugColumns")),e.getRightLeafColumns=B(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(a,n)=>(n??[]).map(t=>a.find(l=>l.id===t)).filter(Boolean),S(e.options,"debugColumns")),e.getCenterLeafColumns=B(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(a,n,t)=>{const l=[...n??[],...t??[]];return a.filter(o=>!l.includes(o.id))},S(e.options,"debugColumns"))}},qe={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},Qe=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),Ja={getDefaultColumnDef:()=>qe,getInitialState:e=>({columnSizing:{},columnSizingInfo:Qe(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:me("columnSizing",e),onColumnSizingInfoChange:me("columnSizingInfo",e)}),createColumn:(e,a)=>{e.getSize=()=>{var n,t,l;const o=a.getState().columnSizing[e.id];return Math.min(Math.max((n=e.columnDef.minSize)!=null?n:qe.minSize,(t=o??e.columnDef.size)!=null?t:qe.size),(l=e.columnDef.maxSize)!=null?l:qe.maxSize)},e.getStart=B(n=>[n,Re(a,n),a.getState().columnSizing],(n,t)=>t.slice(0,e.getIndex(n)).reduce((l,o)=>l+o.getSize(),0),S(a.options,"debugColumns")),e.getAfter=B(n=>[n,Re(a,n),a.getState().columnSizing],(n,t)=>t.slice(e.getIndex(n)+1).reduce((l,o)=>l+o.getSize(),0),S(a.options,"debugColumns")),e.resetSize=()=>{a.setColumnSizing(n=>{let{[e.id]:t,...l}=n;return l})},e.getCanResize=()=>{var n,t;return((n=e.columnDef.enableResizing)!=null?n:!0)&&((t=a.options.enableColumnResizing)!=null?t:!0)},e.getIsResizing=()=>a.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,a)=>{e.getSize=()=>{let n=0;const t=l=>{if(l.subHeaders.length)l.subHeaders.forEach(t);else{var o;n+=(o=l.column.getSize())!=null?o:0}};return t(e),n},e.getStart=()=>{if(e.index>0){const n=e.headerGroup.headers[e.index-1];return n.getStart()+n.getSize()}return 0},e.getResizeHandler=n=>{const t=a.getColumn(e.column.id),l=t==null?void 0:t.getCanResize();return o=>{if(!t||!l||(o.persist==null||o.persist(),ze(o)&&o.touches&&o.touches.length>1))return;const r=e.getSize(),u=e?e.getLeafHeaders().map(y=>[y.column.id,y.column.getSize()]):[[t.id,t.getSize()]],i=ze(o)?Math.round(o.touches[0].clientX):o.clientX,m={},A=(y,E)=>{typeof E=="number"&&(a.setColumnSizingInfo(I=>{var U,O;const J=a.options.columnResizeDirection==="rtl"?-1:1,N=(E-((U=I==null?void 0:I.startOffset)!=null?U:0))*J,H=Math.max(N/((O=I==null?void 0:I.startSize)!=null?O:0),-.999999);return I.columnSizingStart.forEach(_=>{let[T,le]=_;m[T]=Math.round(Math.max(le+le*H,0)*100)/100}),{...I,deltaOffset:N,deltaPercentage:H}}),(a.options.columnResizeMode==="onChange"||y==="end")&&a.setColumnSizing(I=>({...I,...m})))},p=y=>A("move",y),d=y=>{A("end",y),a.setColumnSizingInfo(E=>({...E,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},c=n||typeof document<"u"?document:null,g={moveHandler:y=>p(y.clientX),upHandler:y=>{c==null||c.removeEventListener("mousemove",g.moveHandler),c==null||c.removeEventListener("mouseup",g.upHandler),d(y.clientX)}},C={moveHandler:y=>(y.cancelable&&(y.preventDefault(),y.stopPropagation()),p(y.touches[0].clientX),!1),upHandler:y=>{var E;c==null||c.removeEventListener("touchmove",C.moveHandler),c==null||c.removeEventListener("touchend",C.upHandler),y.cancelable&&(y.preventDefault(),y.stopPropagation()),d((E=y.touches[0])==null?void 0:E.clientX)}},v=Xa()?{passive:!1}:!1;ze(o)?(c==null||c.addEventListener("touchmove",C.moveHandler,v),c==null||c.addEventListener("touchend",C.upHandler,v)):(c==null||c.addEventListener("mousemove",g.moveHandler,v),c==null||c.addEventListener("mouseup",g.upHandler,v)),a.setColumnSizingInfo(y=>({...y,startOffset:i,startSize:r,deltaOffset:0,deltaPercentage:0,columnSizingStart:u,isResizingColumn:t.id}))}}},createTable:e=>{e.setColumnSizing=a=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(a),e.setColumnSizingInfo=a=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(a),e.resetColumnSizing=a=>{var n;e.setColumnSizing(a?{}:(n=e.initialState.columnSizing)!=null?n:{})},e.resetHeaderSizeInfo=a=>{var n;e.setColumnSizingInfo(a?Qe():(n=e.initialState.columnSizingInfo)!=null?n:Qe())},e.getTotalSize=()=>{var a,n;return(a=(n=e.getHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getLeftTotalSize=()=>{var a,n;return(a=(n=e.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getCenterTotalSize=()=>{var a,n;return(a=(n=e.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0},e.getRightTotalSize=()=>{var a,n;return(a=(n=e.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((t,l)=>t+l.getSize(),0))!=null?a:0}}};let Fe=null;function Xa(){if(typeof Fe=="boolean")return Fe;let e=!1;try{const a={get passive(){return e=!0,!1}},n=()=>{};window.addEventListener("test",n,a),window.removeEventListener("test",n)}catch{e=!1}return Fe=e,Fe}function ze(e){return e.type==="touchstart"}const Za={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:me("columnVisibility",e)}),createColumn:(e,a)=>{e.toggleVisibility=n=>{e.getCanHide()&&a.setColumnVisibility(t=>({...t,[e.id]:n??!e.getIsVisible()}))},e.getIsVisible=()=>{var n,t;const l=e.columns;return(n=l.length?l.some(o=>o.getIsVisible()):(t=a.getState().columnVisibility)==null?void 0:t[e.id])!=null?n:!0},e.getCanHide=()=>{var n,t;return((n=e.columnDef.enableHiding)!=null?n:!0)&&((t=a.options.enableHiding)!=null?t:!0)},e.getToggleVisibilityHandler=()=>n=>{e.toggleVisibility==null||e.toggleVisibility(n.target.checked)}},createRow:(e,a)=>{e._getAllVisibleCells=B(()=>[e.getAllCells(),a.getState().columnVisibility],n=>n.filter(t=>t.column.getIsVisible()),S(a.options,"debugRows")),e.getVisibleCells=B(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(n,t,l)=>[...n,...t,...l],S(a.options,"debugRows"))},createTable:e=>{const a=(n,t)=>B(()=>[t(),t().filter(l=>l.getIsVisible()).map(l=>l.id).join("_")],l=>l.filter(o=>o.getIsVisible==null?void 0:o.getIsVisible()),S(e.options,"debugColumns"));e.getVisibleFlatColumns=a("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=a("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=a("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=a("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=a("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=n=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(n),e.resetColumnVisibility=n=>{var t;e.setColumnVisibility(n?{}:(t=e.initialState.columnVisibility)!=null?t:{})},e.toggleAllColumnsVisible=n=>{var t;n=(t=n)!=null?t:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((l,o)=>({...l,[o.id]:n||!(o.getCanHide!=null&&o.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>n=>{var t;e.toggleAllColumnsVisible((t=n.target)==null?void 0:t.checked)}}};function Re(e,a){return a?a==="center"?e.getCenterVisibleLeafColumns():a==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const et={createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},nt={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:me("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:a=>{var n;const t=(n=e.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[a.id])==null?void 0:n.getValue();return typeof t=="string"||typeof t=="number"}}),createColumn:(e,a)=>{e.getCanGlobalFilter=()=>{var n,t,l,o;return((n=e.columnDef.enableGlobalFilter)!=null?n:!0)&&((t=a.options.enableGlobalFilter)!=null?t:!0)&&((l=a.options.enableFilters)!=null?l:!0)&&((o=a.options.getColumnCanGlobalFilter==null?void 0:a.options.getColumnCanGlobalFilter(e))!=null?o:!0)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>De.includesString,e.getGlobalFilterFn=()=>{var a,n;const{globalFilterFn:t}=e.options;return Te(t)?t:t==="auto"?e.getGlobalAutoFilterFn():(a=(n=e.options.filterFns)==null?void 0:n[t])!=null?a:De[t]},e.setGlobalFilter=a=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(a)},e.resetGlobalFilter=a=>{e.setGlobalFilter(a?void 0:e.initialState.globalFilter)}}},at={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:me("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let a=!1,n=!1;e._autoResetExpanded=()=>{var t,l;if(!a){e._queue(()=>{a=!0});return}if((t=(l=e.options.autoResetAll)!=null?l:e.options.autoResetExpanded)!=null?t:!e.options.manualExpanding){if(n)return;n=!0,e._queue(()=>{e.resetExpanded(),n=!1})}},e.setExpanded=t=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(t),e.toggleAllRowsExpanded=t=>{t??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=t=>{var l,o;e.setExpanded(t?{}:(l=(o=e.initialState)==null?void 0:o.expanded)!=null?l:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(t=>t.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>t=>{t.persist==null||t.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const t=e.getState().expanded;return t===!0||Object.values(t).some(Boolean)},e.getIsAllRowsExpanded=()=>{const t=e.getState().expanded;return typeof t=="boolean"?t===!0:!(!Object.keys(t).length||e.getRowModel().flatRows.some(l=>!l.getIsExpanded()))},e.getExpandedDepth=()=>{let t=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(o=>{const r=o.split(".");t=Math.max(t,r.length)}),t},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,a)=>{e.toggleExpanded=n=>{a.setExpanded(t=>{var l;const o=t===!0?!0:!!(t!=null&&t[e.id]);let r={};if(t===!0?Object.keys(a.getRowModel().rowsById).forEach(u=>{r[u]=!0}):r=t,n=(l=n)!=null?l:!o,!o&&n)return{...r,[e.id]:!0};if(o&&!n){const{[e.id]:u,...i}=r;return i}return t})},e.getIsExpanded=()=>{var n;const t=a.getState().expanded;return!!((n=a.options.getIsRowExpanded==null?void 0:a.options.getIsRowExpanded(e))!=null?n:t===!0||t!=null&&t[e.id])},e.getCanExpand=()=>{var n,t,l;return(n=a.options.getRowCanExpand==null?void 0:a.options.getRowCanExpand(e))!=null?n:((t=a.options.enableExpanding)!=null?t:!0)&&!!((l=e.subRows)!=null&&l.length)},e.getIsAllParentsExpanded=()=>{let n=!0,t=e;for(;n&&t.parentId;)t=a.getRow(t.parentId,!0),n=t.getIsExpanded();return n},e.getToggleExpandedHandler=()=>{const n=e.getCanExpand();return()=>{n&&e.toggleExpanded()}}}},Xe=0,Ze=10,$e=()=>({pageIndex:Xe,pageSize:Ze}),tt={getInitialState:e=>({...e,pagination:{...$e(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:me("pagination",e)}),createTable:e=>{let a=!1,n=!1;e._autoResetPageIndex=()=>{var t,l;if(!a){e._queue(()=>{a=!0});return}if((t=(l=e.options.autoResetAll)!=null?l:e.options.autoResetPageIndex)!=null?t:!e.options.manualPagination){if(n)return;n=!0,e._queue(()=>{e.resetPageIndex(),n=!1})}},e.setPagination=t=>{const l=o=>ge(t,o);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(l)},e.resetPagination=t=>{var l;e.setPagination(t?$e():(l=e.initialState.pagination)!=null?l:$e())},e.setPageIndex=t=>{e.setPagination(l=>{let o=ge(t,l.pageIndex);const r=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return o=Math.max(0,Math.min(o,r)),{...l,pageIndex:o}})},e.resetPageIndex=t=>{var l,o;e.setPageIndex(t?Xe:(l=(o=e.initialState)==null||(o=o.pagination)==null?void 0:o.pageIndex)!=null?l:Xe)},e.resetPageSize=t=>{var l,o;e.setPageSize(t?Ze:(l=(o=e.initialState)==null||(o=o.pagination)==null?void 0:o.pageSize)!=null?l:Ze)},e.setPageSize=t=>{e.setPagination(l=>{const o=Math.max(1,ge(t,l.pageSize)),r=l.pageSize*l.pageIndex,u=Math.floor(r/o);return{...l,pageIndex:u,pageSize:o}})},e.setPageCount=t=>e.setPagination(l=>{var o;let r=ge(t,(o=e.options.pageCount)!=null?o:-1);return typeof r=="number"&&(r=Math.max(-1,r)),{...l,pageCount:r}}),e.getPageOptions=B(()=>[e.getPageCount()],t=>{let l=[];return t&&t>0&&(l=[...new Array(t)].fill(null).map((o,r)=>r)),l},S(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:t}=e.getState().pagination,l=e.getPageCount();return l===-1?!0:l===0?!1:t<l-1},e.previousPage=()=>e.setPageIndex(t=>t-1),e.nextPage=()=>e.setPageIndex(t=>t+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var t;return(t=e.options.pageCount)!=null?t:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var t;return(t=e.options.rowCount)!=null?t:e.getPrePaginationRowModel().rows.length}}},We=()=>({top:[],bottom:[]}),lt={getInitialState:e=>({rowPinning:We(),...e}),getDefaultOptions:e=>({onRowPinningChange:me("rowPinning",e)}),createRow:(e,a)=>{e.pin=(n,t,l)=>{const o=t?e.getLeafRows().map(i=>{let{id:m}=i;return m}):[],r=l?e.getParentRows().map(i=>{let{id:m}=i;return m}):[],u=new Set([...r,e.id,...o]);a.setRowPinning(i=>{var m,A;if(n==="bottom"){var p,d;return{top:((p=i==null?void 0:i.top)!=null?p:[]).filter(C=>!(u!=null&&u.has(C))),bottom:[...((d=i==null?void 0:i.bottom)!=null?d:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)]}}if(n==="top"){var c,g;return{top:[...((c=i==null?void 0:i.top)!=null?c:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)],bottom:((g=i==null?void 0:i.bottom)!=null?g:[]).filter(C=>!(u!=null&&u.has(C)))}}return{top:((m=i==null?void 0:i.top)!=null?m:[]).filter(C=>!(u!=null&&u.has(C))),bottom:((A=i==null?void 0:i.bottom)!=null?A:[]).filter(C=>!(u!=null&&u.has(C)))}})},e.getCanPin=()=>{var n;const{enableRowPinning:t,enablePinning:l}=a.options;return typeof t=="function"?t(e):(n=t??l)!=null?n:!0},e.getIsPinned=()=>{const n=[e.id],{top:t,bottom:l}=a.getState().rowPinning,o=n.some(u=>t==null?void 0:t.includes(u)),r=n.some(u=>l==null?void 0:l.includes(u));return o?"top":r?"bottom":!1},e.getPinnedIndex=()=>{var n,t;const l=e.getIsPinned();if(!l)return-1;const o=(n=a._getPinnedRows(l))==null?void 0:n.map(r=>{let{id:u}=r;return u});return(t=o==null?void 0:o.indexOf(e.id))!=null?t:-1}},createTable:e=>{e.setRowPinning=a=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(a),e.resetRowPinning=a=>{var n,t;return e.setRowPinning(a?We():(n=(t=e.initialState)==null?void 0:t.rowPinning)!=null?n:We())},e.getIsSomeRowsPinned=a=>{var n;const t=e.getState().rowPinning;if(!a){var l,o;return!!((l=t.top)!=null&&l.length||(o=t.bottom)!=null&&o.length)}return!!((n=t[a])!=null&&n.length)},e._getPinnedRows=B(a=>[e.getRowModel().rows,e.getState().rowPinning[a],a],(a,n,t)=>{var l;return((l=e.options.keepPinnedRows)==null||l?(n??[]).map(r=>{const u=e.getRow(r,!0);return u.getIsAllParentsExpanded()?u:null}):(n??[]).map(r=>a.find(u=>u.id===r))).filter(Boolean).map(r=>({...r,position:t}))},S(e.options,"debugRows")),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=B(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(a,n,t)=>{const l=new Set([...n??[],...t??[]]);return a.filter(o=>!l.has(o.id))},S(e.options,"debugRows"))}},ot={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:me("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=a=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(a),e.resetRowSelection=a=>{var n;return e.setRowSelection(a?{}:(n=e.initialState.rowSelection)!=null?n:{})},e.toggleAllRowsSelected=a=>{e.setRowSelection(n=>{a=typeof a<"u"?a:!e.getIsAllRowsSelected();const t={...n},l=e.getPreGroupedRowModel().flatRows;return a?l.forEach(o=>{o.getCanSelect()&&(t[o.id]=!0)}):l.forEach(o=>{delete t[o.id]}),t})},e.toggleAllPageRowsSelected=a=>e.setRowSelection(n=>{const t=typeof a<"u"?a:!e.getIsAllPageRowsSelected(),l={...n};return e.getRowModel().rows.forEach(o=>{en(l,o.id,t,!0,e)}),l}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=B(()=>[e.getState().rowSelection,e.getCoreRowModel()],(a,n)=>Object.keys(a).length?Le(e,n):{rows:[],flatRows:[],rowsById:{}},S(e.options,"debugTable")),e.getFilteredSelectedRowModel=B(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(a,n)=>Object.keys(a).length?Le(e,n):{rows:[],flatRows:[],rowsById:{}},S(e.options,"debugTable")),e.getGroupedSelectedRowModel=B(()=>[e.getState().rowSelection,e.getSortedRowModel()],(a,n)=>Object.keys(a).length?Le(e,n):{rows:[],flatRows:[],rowsById:{}},S(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const a=e.getFilteredRowModel().flatRows,{rowSelection:n}=e.getState();let t=!!(a.length&&Object.keys(n).length);return t&&a.some(l=>l.getCanSelect()&&!n[l.id])&&(t=!1),t},e.getIsAllPageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows.filter(l=>l.getCanSelect()),{rowSelection:n}=e.getState();let t=!!a.length;return t&&a.some(l=>!n[l.id])&&(t=!1),t},e.getIsSomeRowsSelected=()=>{var a;const n=Object.keys((a=e.getState().rowSelection)!=null?a:{}).length;return n>0&&n<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const a=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:a.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>a=>{e.toggleAllRowsSelected(a.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>a=>{e.toggleAllPageRowsSelected(a.target.checked)}},createRow:(e,a)=>{e.toggleSelected=(n,t)=>{const l=e.getIsSelected();a.setRowSelection(o=>{var r;if(n=typeof n<"u"?n:!l,e.getCanSelect()&&l===n)return o;const u={...o};return en(u,e.id,n,(r=t==null?void 0:t.selectChildren)!=null?r:!0,a),u})},e.getIsSelected=()=>{const{rowSelection:n}=a.getState();return mn(e,n)},e.getIsSomeSelected=()=>{const{rowSelection:n}=a.getState();return nn(e,n)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=a.getState();return nn(e,n)==="all"},e.getCanSelect=()=>{var n;return typeof a.options.enableRowSelection=="function"?a.options.enableRowSelection(e):(n=a.options.enableRowSelection)!=null?n:!0},e.getCanSelectSubRows=()=>{var n;return typeof a.options.enableSubRowSelection=="function"?a.options.enableSubRowSelection(e):(n=a.options.enableSubRowSelection)!=null?n:!0},e.getCanMultiSelect=()=>{var n;return typeof a.options.enableMultiRowSelection=="function"?a.options.enableMultiRowSelection(e):(n=a.options.enableMultiRowSelection)!=null?n:!0},e.getToggleSelectedHandler=()=>{const n=e.getCanSelect();return t=>{var l;n&&e.toggleSelected((l=t.target)==null?void 0:l.checked)}}}},en=(e,a,n,t,l)=>{var o;const r=l.getRow(a,!0);n?(r.getCanMultiSelect()||Object.keys(e).forEach(u=>delete e[u]),r.getCanSelect()&&(e[a]=!0)):delete e[a],t&&(o=r.subRows)!=null&&o.length&&r.getCanSelectSubRows()&&r.subRows.forEach(u=>en(e,u.id,n,t,l))};function Le(e,a){const n=e.getState().rowSelection,t=[],l={},o=function(r,u){return r.map(i=>{var m;const A=mn(i,n);if(A&&(t.push(i),l[i.id]=i),(m=i.subRows)!=null&&m.length&&(i={...i,subRows:o(i.subRows)}),A)return i}).filter(Boolean)};return{rows:o(a.rows),flatRows:t,rowsById:l}}function mn(e,a){var n;return(n=a[e.id])!=null?n:!1}function nn(e,a,n){var t;if(!((t=e.subRows)!=null&&t.length))return!1;let l=!0,o=!1;return e.subRows.forEach(r=>{if(!(o&&!l)&&(r.getCanSelect()&&(mn(r,a)?o=!0:l=!1),r.subRows&&r.subRows.length)){const u=nn(r,a);u==="all"?o=!0:(u==="some"&&(o=!0),l=!1)}}),l?"all":o?"some":!1}const an=/([0-9]+)/gm,rt=(e,a,n)=>Fn(we(e.getValue(n)).toLowerCase(),we(a.getValue(n)).toLowerCase()),ut=(e,a,n)=>Fn(we(e.getValue(n)),we(a.getValue(n))),it=(e,a,n)=>cn(we(e.getValue(n)).toLowerCase(),we(a.getValue(n)).toLowerCase()),st=(e,a,n)=>cn(we(e.getValue(n)),we(a.getValue(n))),mt=(e,a,n)=>{const t=e.getValue(n),l=a.getValue(n);return t>l?1:t<l?-1:0},ct=(e,a,n)=>cn(e.getValue(n),a.getValue(n));function cn(e,a){return e===a?0:e>a?1:-1}function we(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function Fn(e,a){const n=e.split(an).filter(Boolean),t=a.split(an).filter(Boolean);for(;n.length&&t.length;){const l=n.shift(),o=t.shift(),r=parseInt(l,10),u=parseInt(o,10),i=[r,u].sort();if(isNaN(i[0])){if(l>o)return 1;if(o>l)return-1;continue}if(isNaN(i[1]))return isNaN(r)?-1:1;if(r>u)return 1;if(u>r)return-1}return n.length-t.length}const Se={alphanumeric:rt,alphanumericCaseSensitive:ut,text:it,textCaseSensitive:st,datetime:mt,basic:ct},At={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:me("sorting",e),isMultiSortEvent:a=>a.shiftKey}),createColumn:(e,a)=>{e.getAutoSortingFn=()=>{const n=a.getFilteredRowModel().flatRows.slice(10);let t=!1;for(const l of n){const o=l==null?void 0:l.getValue(e.id);if(Object.prototype.toString.call(o)==="[object Date]")return Se.datetime;if(typeof o=="string"&&(t=!0,o.split(an).length>1))return Se.alphanumeric}return t?Se.text:Se.basic},e.getAutoSortDir=()=>{const n=a.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var n,t;if(!e)throw new Error;return Te(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(n=(t=a.options.sortingFns)==null?void 0:t[e.columnDef.sortingFn])!=null?n:Se[e.columnDef.sortingFn]},e.toggleSorting=(n,t)=>{const l=e.getNextSortingOrder(),o=typeof n<"u"&&n!==null;a.setSorting(r=>{const u=r==null?void 0:r.find(c=>c.id===e.id),i=r==null?void 0:r.findIndex(c=>c.id===e.id);let m=[],A,p=o?n:l==="desc";if(r!=null&&r.length&&e.getCanMultiSort()&&t?u?A="toggle":A="add":r!=null&&r.length&&i!==r.length-1?A="replace":u?A="toggle":A="replace",A==="toggle"&&(o||l||(A="remove")),A==="add"){var d;m=[...r,{id:e.id,desc:p}],m.splice(0,m.length-((d=a.options.maxMultiSortColCount)!=null?d:Number.MAX_SAFE_INTEGER))}else A==="toggle"?m=r.map(c=>c.id===e.id?{...c,desc:p}:c):A==="remove"?m=r.filter(c=>c.id!==e.id):m=[{id:e.id,desc:p}];return m})},e.getFirstSortDir=()=>{var n,t;return((n=(t=e.columnDef.sortDescFirst)!=null?t:a.options.sortDescFirst)!=null?n:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=n=>{var t,l;const o=e.getFirstSortDir(),r=e.getIsSorted();return r?r!==o&&((t=a.options.enableSortingRemoval)==null||t)&&(!(n&&(l=a.options.enableMultiRemove)!=null)||l)?!1:r==="desc"?"asc":"desc":o},e.getCanSort=()=>{var n,t;return((n=e.columnDef.enableSorting)!=null?n:!0)&&((t=a.options.enableSorting)!=null?t:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var n,t;return(n=(t=e.columnDef.enableMultiSort)!=null?t:a.options.enableMultiSort)!=null?n:!!e.accessorFn},e.getIsSorted=()=>{var n;const t=(n=a.getState().sorting)==null?void 0:n.find(l=>l.id===e.id);return t?t.desc?"desc":"asc":!1},e.getSortIndex=()=>{var n,t;return(n=(t=a.getState().sorting)==null?void 0:t.findIndex(l=>l.id===e.id))!=null?n:-1},e.clearSorting=()=>{a.setSorting(n=>n!=null&&n.length?n.filter(t=>t.id!==e.id):[])},e.getToggleSortingHandler=()=>{const n=e.getCanSort();return t=>{n&&(t.persist==null||t.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?a.options.isMultiSortEvent==null?void 0:a.options.isMultiSortEvent(t):!1))}}},createTable:e=>{e.setSorting=a=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(a),e.resetSorting=a=>{var n,t;e.setSorting(a?[]:(n=(t=e.initialState)==null?void 0:t.sorting)!=null?n:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},dt=[Fa,Za,Wa,La,Oa,Na,et,nt,At,za,at,tt,lt,ot,Ja];function bt(e){var a,n;const t=[...dt,...(a=e._features)!=null?a:[]];let l={_features:t};const o=l._features.reduce((d,c)=>Object.assign(d,c.getDefaultOptions==null?void 0:c.getDefaultOptions(l)),{}),r=d=>l.options.mergeOptions?l.options.mergeOptions(o,d):{...o,...d};let i={...{},...(n=e.initialState)!=null?n:{}};l._features.forEach(d=>{var c;i=(c=d.getInitialState==null?void 0:d.getInitialState(i))!=null?c:i});const m=[];let A=!1;const p={_features:t,options:{...o,...e},initialState:i,_queue:d=>{m.push(d),A||(A=!0,Promise.resolve().then(()=>{for(;m.length;)m.shift()();A=!1}).catch(c=>setTimeout(()=>{throw c})))},reset:()=>{l.setState(l.initialState)},setOptions:d=>{const c=ge(d,l.options);l.options=r(c)},getState:()=>l.options.state,setState:d=>{l.options.onStateChange==null||l.options.onStateChange(d)},_getRowId:(d,c,g)=>{var C;return(C=l.options.getRowId==null?void 0:l.options.getRowId(d,c,g))!=null?C:`${g?[g.id,c].join("."):c}`},getCoreRowModel:()=>(l._getCoreRowModel||(l._getCoreRowModel=l.options.getCoreRowModel(l)),l._getCoreRowModel()),getRowModel:()=>l.getPaginationRowModel(),getRow:(d,c)=>{let g=(c?l.getPrePaginationRowModel():l.getRowModel()).rowsById[d];if(!g&&(g=l.getCoreRowModel().rowsById[d],!g))throw new Error;return g},_getDefaultColumnDef:B(()=>[l.options.defaultColumn],d=>{var c;return d=(c=d)!=null?c:{},{header:g=>{const C=g.header.column.columnDef;return C.accessorKey?C.accessorKey:C.accessorFn?C.id:null},cell:g=>{var C,v;return(C=(v=g.renderValue())==null||v.toString==null?void 0:v.toString())!=null?C:null},...l._features.reduce((g,C)=>Object.assign(g,C.getDefaultColumnDef==null?void 0:C.getDefaultColumnDef()),{}),...d}},S(e,"debugColumns")),_getColumnDefs:()=>l.options.columns,getAllColumns:B(()=>[l._getColumnDefs()],d=>{const c=function(g,C,v){return v===void 0&&(v=0),g.map(y=>{const E=qa(l,y,v,C),I=y;return E.columns=I.columns?c(I.columns,E,v+1):[],E})};return c(d)},S(e,"debugColumns")),getAllFlatColumns:B(()=>[l.getAllColumns()],d=>d.flatMap(c=>c.getFlatColumns()),S(e,"debugColumns")),_getAllFlatColumnsById:B(()=>[l.getAllFlatColumns()],d=>d.reduce((c,g)=>(c[g.id]=g,c),{}),S(e,"debugColumns")),getAllLeafColumns:B(()=>[l.getAllColumns(),l._getOrderColumnsFn()],(d,c)=>{let g=d.flatMap(C=>C.getLeafColumns());return c(g)},S(e,"debugColumns")),getColumn:d=>l._getAllFlatColumnsById()[d]};Object.assign(l,p);for(let d=0;d<l._features.length;d++){const c=l._features[d];c==null||c.createTable==null||c.createTable(l)}return l}function Dt(){return e=>B(()=>[e.options.data],a=>{const n={rows:[],flatRows:[],rowsById:{}},t=function(l,o,r){o===void 0&&(o=0);const u=[];for(let m=0;m<l.length;m++){const A=Ma(e,e._getRowId(l[m],m,r),l[m],m,o,void 0,r==null?void 0:r.id);if(n.flatRows.push(A),n.rowsById[A.id]=A,u.push(A),e.options.getSubRows){var i;A.originalSubRows=e.options.getSubRows(l[m],m),(i=A.originalSubRows)!=null&&i.length&&(A.subRows=t(A.originalSubRows,o+1,A))}}return u};return n.rows=t(a),n},S(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function pt(){return e=>B(()=>[e.getState().expanded,e.getPreExpandedRowModel(),e.options.paginateExpandedRows],(a,n,t)=>!n.rows.length||a!==!0&&!Object.keys(a??{}).length||!t?n:Mn(n),S(e.options,"debugTable"))}function Mn(e){const a=[],n=t=>{var l;a.push(t),(l=t.subRows)!=null&&l.length&&t.getIsExpanded()&&t.subRows.forEach(n)};return e.rows.forEach(n),{rows:a,flatRows:e.flatRows,rowsById:e.rowsById}}function gt(e){return a=>B(()=>[a.getState().pagination,a.getPrePaginationRowModel(),a.options.paginateExpandedRows?void 0:a.getState().expanded],(n,t)=>{if(!t.rows.length)return t;const{pageSize:l,pageIndex:o}=n;let{rows:r,flatRows:u,rowsById:i}=t;const m=l*o,A=m+l;r=r.slice(m,A);let p;a.options.paginateExpandedRows?p={rows:r,flatRows:u,rowsById:i}:p=Mn({rows:r,flatRows:u,rowsById:i}),p.flatRows=[];const d=c=>{p.flatRows.push(c),c.subRows.length&&c.subRows.forEach(d)};return p.rows.forEach(d),p},S(a.options,"debugTable"))}function Ct(){return e=>B(()=>[e.getState().sorting,e.getPreSortedRowModel()],(a,n)=>{if(!n.rows.length||!(a!=null&&a.length))return n;const t=e.getState().sorting,l=[],o=t.filter(i=>{var m;return(m=e.getColumn(i.id))==null?void 0:m.getCanSort()}),r={};o.forEach(i=>{const m=e.getColumn(i.id);m&&(r[i.id]={sortUndefined:m.columnDef.sortUndefined,invertSorting:m.columnDef.invertSorting,sortingFn:m.getSortingFn()})});const u=i=>{const m=i.map(A=>({...A}));return m.sort((A,p)=>{for(let c=0;c<o.length;c+=1){var d;const g=o[c],C=r[g.id],v=(d=g==null?void 0:g.desc)!=null?d:!1;let y=0;if(C.sortUndefined){const E=A.getValue(g.id),I=p.getValue(g.id),U=E===void 0,O=I===void 0;(U||O)&&(y=U&&O?0:U?C.sortUndefined:-C.sortUndefined)}if(y===0&&(y=C.sortingFn(A,p,g.id)),y!==0)return v&&(y*=-1),C.invertSorting&&(y*=-1),y}return A.index-p.index}),m.forEach(A=>{var p;l.push(A),(p=A.subRows)!=null&&p.length&&(A.subRows=u(A.subRows))}),m};return{rows:u(n.rows),flatRows:l,rowsById:n.rowsById}},S(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function ft(e){const a={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[n]=P.useState(()=>({current:bt(a)})),[t,l]=P.useState(()=>n.current.initialState);return n.current.setOptions(o=>({...o,...e,state:{...t,...e.state},onStateChange:r=>{l(r),e.onStateChange==null||e.onStateChange(r)}})),n.current}function X(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandAllButton.tsx",a="d601dc8b9f4e78b5ae780e98bae68794391f3688",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandAllButton.tsx",statementMap:{0:{start:{line:4,column:24},end:{line:25,column:1}},1:{start:{line:9,column:6},end:{line:9,column:26}},2:{start:{line:18,column:6},end:{line:18,column:11}},3:{start:{line:21,column:6},end:{line:21,column:16}},4:{start:{line:22,column:30},end:{line:22,column:53}},5:{start:{line:23,column:2},end:{line:23,column:36}},6:{start:{line:23,column:24},end:{line:23,column:36}},7:{start:{line:24,column:2},end:{line:24,column:372}},8:{start:{line:24,column:325},end:{line:24,column:368}},9:{start:{line:28,column:0},end:{line:45,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:24},end:{line:4,column:25}},loc:{start:{line:6,column:6},end:{line:25,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:24,column:319},end:{line:24,column:320}},loc:{start:{line:24,column:325},end:{line:24,column:368}},line:24}},branchMap:{0:{loc:{start:{line:23,column:2},end:{line:23,column:36}},type:"if",locations:[{start:{line:23,column:2},end:{line:23,column:36}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:23},1:{loc:{start:{line:24,column:83},end:{line:24,column:117}},type:"cond-expr",locations:[{start:{line:24,column:105},end:{line:24,column:108}},{start:{line:24,column:111},end:{line:24,column:117}}],line:24},2:{loc:{start:{line:24,column:131},end:{line:24,column:162}},type:"binary-expr",locations:[{start:{line:24,column:131},end:{line:24,column:140}},{start:{line:24,column:144},end:{line:24,column:162}}],line:24},3:{loc:{start:{line:24,column:171},end:{line:24,column:278}},type:"cond-expr",locations:[{start:{line:24,column:193},end:{line:24,column:235}},{start:{line:24,column:238},end:{line:24,column:278}}],line:24}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandAllButton.tsx"],names:["IconButton","useSafeTranslation","ExpandAllButton","table","t","getIsSomeRowsExpanded","getState","options","renderDetailPanel","enableExpandAll","toggleAllRowsExpanded","isLoading","areSomeRowsExpanded","undefined"],mappings:"AAmBI;AAlBJ,OAAOA,gBAAgB;AACvB,SAASC,0BAA0B;AAEnC,MAAMC,kBAAkB,CAAK;AAAA,EAAEC;AAAuC,MAAM;AAC1E,QAAM;AAAA,IAAEC;AAAAA,EAAE,IAAIH,mBAAmB;AACjC,QAAM;AAAA,IACJI;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,MAAmBC;AAAAA,IAAgB;AAAA,IAC9CC;AAAAA,EACF,IAAIP;AAEJ,QAAM;AAAA,IAAEQ;AAAAA,EAAU,IAAIL,SAAS;AAC/B,QAAMM,sBAAsBP,sBAAsB;AAElD,MAAI,CAACI,gBAAiB,QAAO;AAE7B,SACE,oBAAC,cACC,UAAS,gBACT,cAAcG,sBAAsB,MAAMC,QAC1C,YAAYF,aAAa,CAACH,mBAC1B,OACEI,sBACIR,EAAE,uCAAuC,IACzCA,EAAE,qCAAqC,GAE7C,MAAK,MACL,SAAQ,SACR,SAAS,MAAMM,sBAAsB,CAACE,mBAAmB,GACzD;AAEN;AAEA,eAAeV;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d601dc8b9f4e78b5ae780e98bae68794391f3688"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return X=function(){return r},r}X();X().s[0]++;const On=({table:e})=>{X().f[0]++;const{t:a}=(X().s[1]++,ce()),{getIsSomeRowsExpanded:n,getState:t,options:{renderDetailPanel:l,enableExpandAll:o},toggleAllRowsExpanded:r}=(X().s[2]++,e),{isLoading:u}=(X().s[3]++,t()),i=(X().s[4]++,n());if(X().s[5]++,o)X().b[0][1]++;else return X().b[0][0]++,X().s[6]++,null;return X().s[7]++,s.jsx(be,{iconName:"angles-right",iconRotation:i?(X().b[1][0]++,270):(X().b[1][1]++,void 0),isDisabled:(X().b[2][0]++,u||(X().b[2][1]++,!l)),label:i?(X().b[3][0]++,a("sscds|datatable.expanding.collapseAll")):(X().b[3][1]++,a("sscds|datatable.expanding.expandAll")),size:"sm",variant:"ghost",onClick:()=>(X().f[1]++,X().s[8]++,r(!i))})};X().s[9]++;On.__docgenInfo={description:"",methods:[],displayName:"ExpandAllButton",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function Z(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandButton.tsx",a="738981a51198c3b2598ecc4ef1b2731b27aac37b",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandButton.tsx",statementMap:{0:{start:{line:4,column:21},end:{line:27,column:1}},1:{start:{line:10,column:6},end:{line:10,column:26}},2:{start:{line:15,column:6},end:{line:15,column:11}},3:{start:{line:20,column:6},end:{line:20,column:9}},4:{start:{line:21,column:20},end:{line:21,column:34}},5:{start:{line:22,column:21},end:{line:22,column:36}},6:{start:{line:23,column:2},end:{line:26,column:7}},7:{start:{line:24,column:4},end:{line:24,column:24}},8:{start:{line:25,column:4},end:{line:25,column:21}},9:{start:{line:30,column:0},end:{line:1188,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:21},end:{line:4,column:22}},loc:{start:{line:7,column:6},end:{line:27,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:23,column:300},end:{line:23,column:301}},loc:{start:{line:23,column:307},end:{line:26,column:3}},line:23}},branchMap:{0:{loc:{start:{line:23,column:82},end:{line:23,column:106}},type:"cond-expr",locations:[{start:{line:23,column:95},end:{line:23,column:97}},{start:{line:23,column:100},end:{line:23,column:106}}],line:23},1:{loc:{start:{line:23,column:120},end:{line:23,column:152}},type:"binary-expr",locations:[{start:{line:23,column:120},end:{line:23,column:130}},{start:{line:23,column:134},end:{line:23,column:152}}],line:23},2:{loc:{start:{line:23,column:161},end:{line:23,column:259}},type:"cond-expr",locations:[{start:{line:23,column:174},end:{line:23,column:216}},{start:{line:23,column:219},end:{line:23,column:259}}],line:23}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/ExpandButton.tsx"],names:["IconButton","useSafeTranslation","ExpandButton","table","row","t","options","renderDetailPanel","getIsExpanded","getCanExpand","toggleExpanded","canExpand","isExpanded","undefined","e","stopPropagation"],mappings:"AAqBI;AApBJ,OAAOA,gBAAgB;AACvB,SAASC,0BAA0B;AAEnC,MAAMC,eAAe,CAAK;AAAA,EACxBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAE,IAAIJ,mBAAmB;AACjC,QAAM;AAAA,IACJK,SAAS;AAAA,MAAEC;AAAAA,IAAkB;AAAA,EAC/B,IAAIJ;AACJ,QAAM;AAAA,IAAEK;AAAAA,IAAeC;AAAAA,IAAcC;AAAAA,EAAe,IAAIN;AAExD,QAAMO,YAAYF,aAAa;AAC/B,QAAMG,aAAaJ,cAAc;AAEjC,SACE,oBAAC,cACC,UAAS,eACT,cAAcI,aAAa,KAAKC,QAChC,YAAY,CAACF,aAAa,CAACJ,mBAC3B,OACEK,aACIP,EAAE,uCAAuC,IACzCA,EAAE,qCAAqC,GAE7C,MAAK,MACL,SAAQ,SACR,SAAUS,OAAM;AACdA,MAAEC,gBAAgB;AAClBL,mBAAe;AAAA,EACjB,GACA;AAEN;AAEA,eAAeR;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"738981a51198c3b2598ecc4ef1b2731b27aac37b"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Z=function(){return r},r}Z();Z().s[0]++;const Nn=({table:e,row:a})=>{Z().f[0]++;const{t:n}=(Z().s[1]++,ce()),{options:{renderDetailPanel:t}}=(Z().s[2]++,e),{getIsExpanded:l,getCanExpand:o,toggleExpanded:r}=(Z().s[3]++,a),u=(Z().s[4]++,o()),i=(Z().s[5]++,l());return Z().s[6]++,s.jsx(be,{iconName:"angle-right",iconRotation:i?(Z().b[0][0]++,90):(Z().b[0][1]++,void 0),isDisabled:(Z().b[1][0]++,!u&&(Z().b[1][1]++,!t)),label:i?(Z().b[2][0]++,n("sscds|datatable.expanding.collapseRow")):(Z().b[2][1]++,n("sscds|datatable.expanding.expandRow")),size:"sm",variant:"ghost",onClick:m=>{Z().f[1]++,Z().s[7]++,m.stopPropagation(),Z().s[8]++,r()}})};Z().s[9]++;Nn.__docgenInfo={description:"",methods:[],displayName:"ExpandButton",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""}}};function Q(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/RowActionsMenu.tsx",a="850798f9f56af17145959a89dc87b0f97ae4cbf3",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/RowActionsMenu.tsx",statementMap:{0:{start:{line:4,column:23},end:{line:48,column:1}},1:{start:{line:11,column:6},end:{line:11,column:11}},2:{start:{line:14,column:6},end:{line:14,column:16}},3:{start:{line:15,column:2},end:{line:47,column:11}},4:{start:{line:16,column:4},end:{line:18,column:5}},5:{start:{line:17,column:6},end:{line:17,column:82}},6:{start:{line:26,column:8},end:{line:26,column:14}},7:{start:{line:27,column:26},end:{line:30,column:14}},8:{start:{line:31,column:29},end:{line:34,column:17}},9:{start:{line:35,column:29},end:{line:38,column:17}},10:{start:{line:39,column:31},end:{line:42,column:19}},11:{start:{line:43,column:4},end:{line:46,column:67}},12:{start:{line:51,column:0},end:{line:1304,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:23},end:{line:4,column:24}},loc:{start:{line:8,column:6},end:{line:48,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:15,column:206},end:{line:15,column:207}},loc:{start:{line:15,column:221},end:{line:47,column:3}},line:15}},branchMap:{0:{loc:{start:{line:16,column:4},end:{line:18,column:5}},type:"if",locations:[{start:{line:16,column:4},end:{line:18,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:16},1:{loc:{start:{line:27,column:26},end:{line:30,column:14}},type:"cond-expr",locations:[{start:{line:27,column:56},end:{line:30,column:6}},{start:{line:30,column:9},end:{line:30,column:14}}],line:27},2:{loc:{start:{line:31,column:29},end:{line:34,column:17}},type:"cond-expr",locations:[{start:{line:31,column:62},end:{line:34,column:6}},{start:{line:34,column:9},end:{line:34,column:17}}],line:31},3:{loc:{start:{line:35,column:29},end:{line:38,column:17}},type:"cond-expr",locations:[{start:{line:35,column:62},end:{line:38,column:6}},{start:{line:38,column:9},end:{line:38,column:17}}],line:35},4:{loc:{start:{line:39,column:31},end:{line:42,column:19}},type:"cond-expr",locations:[{start:{line:39,column:66},end:{line:42,column:6}},{start:{line:42,column:9},end:{line:42,column:19}}],line:39}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/RowActionsMenu.tsx"],names:["DropdownMenu","MenuContent","MenuItem","MenuSeparator","RowActionsMenu","row","table","rowActions","getState","isFullscreenMode","map","action","i","iconName","iconType","label","onClick","isDisabled","isDestructive","resolvedLabel","resolvedIconName","resolvedIconType","resolvedIsDisabled"],mappings:"AAmCmB;AAnCnB,YAAYA,kBAAkB;AAE9B,SACEC,aACAC,UACAC,qBACK;AAOP,MAAMC,iBAAiB,CAAK;AAAA,EAC1BC;AAAAA,EACAC;AAAAA,EACAC;AAKF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAS,IAAIF;AACrB,QAAM;AAAA,IAAEG;AAAAA,EAAiB,IAAID,SAAS;AACtC,SACE,oBAAC,aAAa,QAAb,EACC,8BAAC,eACC,eAAeC,kBACf,OAAM,OACN,kBAAkB,IAClB,YAAY,GAEXF,qBAAWG,IAAI,CAACC,QAAQC,MAAM;AAC7B,QAAID,WAAW,MAAM;AAEnB,aAAO,oBAAC,mBAAmB,yBAAyBC,CAAC,EAAM;AAAA,IAC7D;AACA,UAAM;AAAA,MACJC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,IACF,IAAIP;AAEJ,UAAMQ,gBACJ,OAAOJ,UAAU,aAAaA,MAAM;AAAA,MAAEV;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAIS;AACxD,UAAMK,mBACJ,OAAOP,aAAa,aAChBA,SAAS;AAAA,MAAER;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACvBO;AACN,UAAMQ,mBACJ,OAAOP,aAAa,aAChBA,SAAS;AAAA,MAAET;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACvBQ;AACN,UAAMQ,qBACJ,OAAOL,eAAe,aAClBA,WAAW;AAAA,MAAEZ;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACzBW;AAEN,WACE,oBAAC,YAEC,WAAU,kCACV,UAAUG,kBACV,UAAUC,kBACV,eACA,YAAYC,oBACZ,SAASN,QAAQ;AAAA,MAAEX;AAAAA,MAAKC;AAAAA,IAAM,CAAC,GAE9Ba,2BARI,eAAeA,aAAa,EASnC;AAAA,EAEJ,CAAC,GACH,GACF;AAEJ;AAEA,eAAef;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"850798f9f56af17145959a89dc87b0f97ae4cbf3"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Q=function(){return r},r}Q();Q().s[0]++;const jn=({row:e,table:a,rowActions:n})=>{Q().f[0]++;const{getState:t}=(Q().s[1]++,a),{isFullscreenMode:l}=(Q().s[2]++,t());return Q().s[3]++,s.jsx(yn,{children:s.jsx(wn,{$isFullscreen:l,align:"end",collisionPadding:10,sideOffset:5,children:n.map((o,r)=>{if(Q().f[1]++,Q().s[4]++,o===null)return Q().b[0][0]++,Q().s[5]++,s.jsx(Me,{},`row-actions-separator-${r}`);Q().b[0][1]++;const{iconName:u,iconType:i,label:m,onClick:A,isDisabled:p,isDestructive:d}=(Q().s[6]++,o),c=(Q().s[7]++,typeof m=="function"?(Q().b[1][0]++,m({row:e,table:a})):(Q().b[1][1]++,m)),g=(Q().s[8]++,typeof u=="function"?(Q().b[2][0]++,u({row:e,table:a})):(Q().b[2][1]++,u)),C=(Q().s[9]++,typeof i=="function"?(Q().b[3][0]++,i({row:e,table:a})):(Q().b[3][1]++,i)),v=(Q().s[10]++,typeof p=="function"?(Q().b[4][0]++,p({row:e,table:a})):(Q().b[4][1]++,p));return Q().s[11]++,s.jsx(pe,{className:"ds-table-row-actions-menu-item",iconName:g,iconType:C,isDestructive:d,isDisabled:v,onClick:A({row:e,table:a}),children:c},`row-actions-${c}`)})})})};Q().s[12]++;jn.__docgenInfo={description:"",methods:[],displayName:"RowActionsMenu",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
| ((props: { row: DatatableRow<D>; table: DatatableInstance<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"isDestructive",value:{name:"boolean",required:!1}}]}}]}],raw:"DatatableRowAction<D>[]"},description:""}}};function j(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/RowActionsButton.tsx",a="46ce1ff369be2e7023b4fa2384da3222c9ebf17f",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/RowActionsButton.tsx",statementMap:{0:{start:{line:6,column:25},end:{line:58,column:1}},1:{start:{line:14,column:6},end:{line:14,column:11}},2:{start:{line:17,column:6},end:{line:17,column:26}},3:{start:{line:18,column:2},end:{line:23,column:3}},4:{start:{line:19,column:4},end:{line:22,column:9}},5:{start:{line:24,column:2},end:{line:56,column:3}},6:{start:{line:32,column:8},end:{line:32,column:21}},7:{start:{line:33,column:26},end:{line:36,column:14}},8:{start:{line:37,column:29},end:{line:40,column:17}},9:{start:{line:41,column:29},end:{line:44,column:17}},10:{start:{line:45,column:31},end:{line:48,column:19}},11:{start:{line:49,column:4},end:{line:55,column:9}},12:{start:{line:50,column:6},end:{line:50,column:26}},13:{start:{line:51,column:6},end:{line:54,column:12}},14:{start:{line:57,column:2},end:{line:57,column:14}},15:{start:{line:61,column:0},end:{line:1219,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:25},end:{line:6,column:26}},loc:{start:{line:9,column:6},end:{line:58,column:1}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:49,column:281},end:{line:49,column:282}},loc:{start:{line:49,column:288},end:{line:55,column:5}},line:49}},branchMap:{0:{loc:{start:{line:12,column:6},end:{line:12,column:21}},type:"default-arg",locations:[{start:{line:12,column:19},end:{line:12,column:21}}],line:12},1:{loc:{start:{line:18,column:2},end:{line:23,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:23,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:18},2:{loc:{start:{line:24,column:2},end:{line:56,column:3}},type:"if",locations:[{start:{line:24,column:2},end:{line:56,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:24},3:{loc:{start:{line:33,column:26},end:{line:36,column:14}},type:"cond-expr",locations:[{start:{line:33,column:56},end:{line:36,column:6}},{start:{line:36,column:9},end:{line:36,column:14}}],line:33},4:{loc:{start:{line:37,column:29},end:{line:40,column:17}},type:"cond-expr",locations:[{start:{line:37,column:62},end:{line:40,column:6}},{start:{line:40,column:9},end:{line:40,column:17}}],line:37},5:{loc:{start:{line:41,column:29},end:{line:44,column:17}},type:"cond-expr",locations:[{start:{line:41,column:62},end:{line:44,column:6}},{start:{line:44,column:9},end:{line:44,column:17}}],line:41},6:{loc:{start:{line:45,column:31},end:{line:48,column:19}},type:"cond-expr",locations:[{start:{line:45,column:66},end:{line:48,column:6}},{start:{line:48,column:9},end:{line:48,column:19}}],line:45},7:{loc:{start:{line:49,column:230},end:{line:49,column:270}},type:"cond-expr",locations:[{start:{line:49,column:246},end:{line:49,column:260}},{start:{line:49,column:263},end:{line:49,column:270}}],line:49}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0},b:{0:[0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/RowActionsButton.tsx"],names:["DropdownMenu","RowActionsMenu","IconButton","useSafeTranslation","RowActionsButton","row","table","options","rowActions","t","length","label","iconName","iconType","onClick","isDisabled","isDestructive","resolvedLabel","resolvedIconName","resolvedIconType","resolvedIsDisabled","e","stopPropagation"],mappings:"AAqBM,SAEI,KAFJ;AArBN,YAAYA,kBAAkB;AAG9B,OAAOC,oBAAoB;AAC3B,OAAOC,gBAAgB;AACvB,SAASC,0BAA0B;AAEnC,MAAMC,mBAAmB,CAAK;AAAA,EAC5BC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC,aAAa,CAAA;AAAA,IAAG;AAAA,EAC7B,IAAIF;AACJ,QAAM;AAAA,IAAEG;AAAAA,EAAE,IAAIN,mBAAmB;AAEjC,MAAIK,WAAWE,SAAS,GAAG;AACzB,WACE,qBAAC,aAAa,MAAb,EACC;AAAA,0BAAC,aAAa,SAAb,EAAqB,SAAO,MAC3B,8BAAC,cACC,WAAU,2CACV,UAAS,cACT,OAAOD,EAAE,oCAAoC,GAC7C,MAAK,MACL,SAAQ,SAAO,GAEnB;AAAA,MACA,oBAAC,kBAAe,KAAU,YAAwB,OAAa;AAAA,OACjE;AAAA,EAEJ;AAEA,MAAID,WAAWE,WAAW,GAAG;AAC3B,UAAM;AAAA,MAAEC;AAAAA,MAAOC;AAAAA,MAAUC;AAAAA,MAAUC;AAAAA,MAASC;AAAAA,MAAYC;AAAAA,IAAc,IACpER,WAAW,CAAC;AAEd,UAAMS,gBACJ,OAAON,UAAU,aAAaA,MAAM;AAAA,MAAEN;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAIK;AACxD,UAAMO,mBACJ,OAAON,aAAa,aAAaA,SAAS;AAAA,MAAEP;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAIM;AAC9D,UAAMO,mBACJ,OAAON,aAAa,aAAaA,SAAS;AAAA,MAAER;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IAAIO;AAC9D,UAAMO,qBACJ,OAAOL,eAAe,aAClBA,WAAW;AAAA,MAAEV;AAAAA,MAAKC;AAAAA,IAAM,CAAC,IACzBS;AAEN,WACE,oBAAC,cACC,WAAU,2CACV,UAAUG,kBACV,UAAUC,kBACV,YAAYC,oBACZ,OAAOH,eACP,MAAK,MACL,SAASD,gBAAgB,iBAAiB,SAC1C,SAAUK,OAAM;AACdA,QAAEC,gBAAgB;AAClBR,cAAQ;AAAA,QAAET;AAAAA,QAAKC;AAAAA,MAAM,CAAC,EAAEe,CAA0B;AAAA,IACpD,GACA;AAAA,EAEN;AAEA,SAAO;AACT;AAEA,eAAejB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"46ce1ff369be2e7023b4fa2384da3222c9ebf17f"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return j=function(){return r},r}j();j().s[0]++;const Hn=({row:e,table:a})=>{j().f[0]++;const{options:{rowActions:n=(j().b[0][0]++,[])}}=(j().s[1]++,a),{t}=(j().s[2]++,ce());if(j().s[3]++,n.length>1)return j().b[1][0]++,j().s[4]++,s.jsxs(hn,{children:[s.jsx(vn,{asChild:!0,children:s.jsx(be,{className:"ds-table-header-cell-row-actions-button",iconName:"ellipsis-h",label:t("sscds|datatable.rowActions.trigger"),size:"sm",variant:"ghost"})}),s.jsx(jn,{row:e,rowActions:n,table:a})]});if(j().b[1][1]++,j().s[5]++,n.length===1){j().b[2][0]++;const{label:l,iconName:o,iconType:r,onClick:u,isDisabled:i,isDestructive:m}=(j().s[6]++,n[0]),A=(j().s[7]++,typeof l=="function"?(j().b[3][0]++,l({row:e,table:a})):(j().b[3][1]++,l)),p=(j().s[8]++,typeof o=="function"?(j().b[4][0]++,o({row:e,table:a})):(j().b[4][1]++,o)),d=(j().s[9]++,typeof r=="function"?(j().b[5][0]++,r({row:e,table:a})):(j().b[5][1]++,r)),c=(j().s[10]++,typeof i=="function"?(j().b[6][0]++,i({row:e,table:a})):(j().b[6][1]++,i));return j().s[11]++,s.jsx(be,{className:"ds-table-header-cell-row-actions-button",iconName:p,iconType:d,isDisabled:c,label:A,size:"sm",variant:m?(j().b[7][0]++,"danger-ghost"):(j().b[7][1]++,"ghost"),onClick:g=>{j().f[1]++,j().s[12]++,g.stopPropagation(),j().s[13]++,u({row:e,table:a})(g)}})}else j().b[2][1]++;return j().s[14]++,null};j().s[15]++;Hn.__docgenInfo={description:"",methods:[],displayName:"RowActionsButton",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ae(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/inputs/IndeterminateCheckbox.tsx",a="d5e194d8300a68d272ecac1e46111e699fc5f386",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/inputs/IndeterminateCheckbox.tsx",statementMap:{0:{start:{line:3,column:30},end:{line:14,column:1}},1:{start:{line:7,column:14},end:{line:7,column:26}},2:{start:{line:8,column:2},end:{line:12,column:42}},3:{start:{line:9,column:4},end:{line:11,column:5}},4:{start:{line:10,column:6},end:{line:10,column:66}},5:{start:{line:13,column:2},end:{line:13,column:140}},6:{start:{line:13,column:117},end:{line:13,column:136}},7:{start:{line:17,column:0},end:{line:30,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:30},end:{line:3,column:31}},loc:{start:{line:6,column:6},end:{line:14,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:8,column:12},end:{line:8,column:13}},loc:{start:{line:8,column:18},end:{line:12,column:3}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:13,column:110},end:{line:13,column:111}},loc:{start:{line:13,column:117},end:{line:13,column:136}},line:13}},branchMap:{0:{loc:{start:{line:9,column:4},end:{line:11,column:5}},type:"if",locations:[{start:{line:9,column:4},end:{line:11,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:9},1:{loc:{start:{line:10,column:34},end:{line:10,column:65}},type:"binary-expr",locations:[{start:{line:10,column:34},end:{line:10,column:48}},{start:{line:10,column:52},end:{line:10,column:65}}],line:10}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/inputs/IndeterminateCheckbox.tsx"],names:["useEffect","useRef","IndeterminateCheckbox","indeterminate","props","ref","current","checked","className","e","stopPropagation"],mappings:"AAeI;AAfJ,SAAyBA,WAAWC,cAAc;AAElD,MAAMC,wBAAwBA,CAAC;AAAA,EAC7BC;AAAAA,EACA,GAAGC;AACkD,MAAM;AAC3D,QAAMC,MAAMJ,OAAyB,IAAI;AAEzCD,YAAU,MAAM;AACd,QAAI,OAAOG,kBAAkB,WAAW;AACtCE,UAAIC,QAAQH,gBAAgB,CAACC,MAAMG,WAAWJ;AAAAA,IAChD;AAAA,EACF,GAAG,CAACE,KAAKF,eAAeC,MAAMG,OAAO,CAAC;AAEtC,SACE,oBAAC,WACC,KACA,WAAWH,MAAMI,WACjB,MAAK,YACDJ,GAAAA,OACJ,SAAUK,OAAMA,EAAEC,gBAAgB,GAClC;AAEN;AAEA,eAAeR;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d5e194d8300a68d272ecac1e46111e699fc5f386"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ae=function(){return r},r}ae();ae().s[0]++;const Ke=({indeterminate:e,...a})=>{ae().f[0]++;const n=(ae().s[1]++,P.useRef(null));return ae().s[2]++,P.useEffect(()=>{ae().f[1]++,ae().s[3]++,typeof e=="boolean"?(ae().b[0][0]++,ae().s[4]++,n.current.indeterminate=(ae().b[1][0]++,!a.checked&&(ae().b[1][1]++,e))):ae().b[0][1]++},[n,e,a.checked]),ae().s[5]++,s.jsx("input",{ref:n,className:a.className,type:"checkbox",...a,onClick:t=>(ae().f[2]++,ae().s[6]++,t.stopPropagation())})};ae().s[7]++;Ke.__docgenInfo={description:"",methods:[],displayName:"IndeterminateCheckbox",props:{indeterminate:{required:!1,tsType:{name:"boolean"},description:""}}};function w(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/SelectButton.tsx",a="c06b28388488ccb57ae490a6f8e1b94b71f2cf9a",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/SelectButton.tsx",statementMap:{0:{start:{line:5,column:25},end:{line:37,column:1}},1:{start:{line:8,column:6},end:{line:37,column:1}},2:{start:{line:17,column:6},end:{line:17,column:11}},3:{start:{line:18,column:31},end:{line:18,column:50}},4:{start:{line:19,column:2},end:{line:19,column:44}},5:{start:{line:20,column:2},end:{line:35,column:3}},6:{start:{line:23,column:8},end:{line:23,column:40}},7:{start:{line:24,column:22},end:{line:24,column:79}},8:{start:{line:24,column:44},end:{line:24,column:78}},9:{start:{line:25,column:4},end:{line:34,column:5}},10:{start:{line:26,column:33},end:{line:26,column:64}},11:{start:{line:27,column:27},end:{line:27,column:65}},12:{start:{line:27,column:49},end:{line:27,column:64}},13:{start:{line:28,column:27},end:{line:28,column:107}},14:{start:{line:29,column:6},end:{line:33,column:7}},15:{start:{line:30,column:8},end:{line:32,column:9}},16:{start:{line:30,column:21},end:{line:30,column:26}},17:{start:{line:31,column:10},end:{line:31,column:56}},18:{start:{line:36,column:2},end:{line:36,column:37}},19:{start:{line:38,column:21},end:{line:89,column:1}},20:{start:{line:51,column:6},end:{line:51,column:11}},21:{start:{line:54,column:6},end:{line:54,column:16}},22:{start:{line:57,column:6},end:{line:57,column:26}},23:{start:{line:58,column:26},end:{line:58,column:115}},24:{start:{line:59,column:17},end:{line:74,column:3}},25:{start:{line:64,column:6},end:{line:64,column:26}},26:{start:{line:65,column:6},end:{line:72,column:7}},27:{start:{line:66,column:8},end:{line:66,column:126}},28:{start:{line:68,column:8},end:{line:71,column:14}},29:{start:{line:75,column:17},end:{line:79,column:3}},30:{start:{line:80,column:2},end:{line:88,column:160}},31:{start:{line:92,column:0},end:{line:1272,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:25},end:{line:5,column:26}},loc:{start:{line:8,column:6},end:{line:37,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:8,column:6},end:{line:8,column:7}},loc:{start:{line:8,column:17},end:{line:37,column:1}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:24,column:37},end:{line:24,column:38}},loc:{start:{line:24,column:44},end:{line:24,column:78}},line:24},3:{name:"(anonymous_3)",decl:{start:{line:27,column:42},end:{line:27,column:43}},loc:{start:{line:27,column:49},end:{line:27,column:64}},line:27},4:{name:"(anonymous_4)",decl:{start:{line:38,column:21},end:{line:38,column:22}},loc:{start:{line:44,column:6},end:{line:89,column:1}},line:44},5:{name:"(anonymous_5)",decl:{start:{line:63,column:14},end:{line:63,column:15}},loc:{start:{line:63,column:21},end:{line:73,column:5}},line:63}},branchMap:{0:{loc:{start:{line:20,column:2},end:{line:35,column:3}},type:"if",locations:[{start:{line:20,column:2},end:{line:35,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20},1:{loc:{start:{line:20,column:6},end:{line:20,column:124}},type:"binary-expr",locations:[{start:{line:20,column:6},end:{line:20,column:29}},{start:{line:20,column:33},end:{line:20,column:56}},{start:{line:20,column:60},end:{line:20,column:86}},{start:{line:20,column:90},end:{line:20,column:124}}],line:20},2:{loc:{start:{line:25,column:4},end:{line:34,column:5}},type:"if",locations:[{start:{line:25,column:4},end:{line:34,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:25},3:{loc:{start:{line:28,column:27},end:{line:28,column:107}},type:"cond-expr",locations:[{start:{line:28,column:54},end:{line:28,column:79}},{start:{line:28,column:82},end:{line:28,column:107}}],line:28},4:{loc:{start:{line:29,column:6},end:{line:33,column:7}},type:"if",locations:[{start:{line:29,column:6},end:{line:33,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:29},5:{loc:{start:{line:41,column:2},end:{line:41,column:26}},type:"default-arg",locations:[{start:{line:41,column:21},end:{line:41,column:26}}],line:41},6:{loc:{start:{line:42,column:2},end:{line:42,column:26}},type:"default-arg",locations:[{start:{line:42,column:21},end:{line:42,column:26}}],line:42},7:{loc:{start:{line:58,column:26},end:{line:58,column:115}},type:"cond-expr",locations:[{start:{line:58,column:52},end:{line:58,column:80}},{start:{line:58,column:83},end:{line:58,column:115}}],line:58},8:{loc:{start:{line:60,column:13},end:{line:60,column:70}},type:"cond-expr",locations:[{start:{line:60,column:32},end:{line:60,column:47}},{start:{line:60,column:50},end:{line:60,column:70}}],line:60},9:{loc:{start:{line:61,column:14},end:{line:61,column:54}},type:"binary-expr",locations:[{start:{line:61,column:14},end:{line:61,column:23}},{start:{line:61,column:27},end:{line:61,column:30}},{start:{line:61,column:34},end:{line:61,column:54}}],line:61},10:{loc:{start:{line:62,column:18},end:{line:62,column:120}},type:"cond-expr",locations:[{start:{line:62,column:37},end:{line:62,column:77}},{start:{line:62,column:80},end:{line:62,column:120}}],line:62},11:{loc:{start:{line:65,column:6},end:{line:72,column:7}},type:"if",locations:[{start:{line:65,column:6},end:{line:72,column:7}},{start:{line:67,column:13},end:{line:72,column:7}}],line:65},12:{loc:{start:{line:66,column:8},end:{line:66,column:125}},type:"cond-expr",locations:[{start:{line:66,column:34},end:{line:66,column:76}},{start:{line:66,column:79},end:{line:66,column:125}}],line:66},13:{loc:{start:{line:80,column:9},end:{line:88,column:159}},type:"cond-expr",locations:[{start:{line:83,column:20},end:{line:85,column:259}},{start:{line:86,column:22},end:{line:88,column:159}}],line:80},14:{loc:{start:{line:85,column:151},end:{line:85,column:227}},type:"cond-expr",locations:[{start:{line:85,column:170},end:{line:85,column:219}},{start:{line:85,column:222},end:{line:85,column:227}}],line:85},15:{loc:{start:{line:85,column:170},end:{line:85,column:219}},type:"binary-expr",locations:[{start:{line:85,column:170},end:{line:85,column:199}},{start:{line:85,column:203},end:{line:85,column:219}}],line:85}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0,0,0],2:[0,0],3:[0,0],4:[0,0],5:[0],6:[0],7:[0,0],8:[0,0],9:[0,0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/buttons/SelectButton.tsx"],names:["clx","IndeterminateCheckbox","useSafeTranslation","selectRowHandler","row","table","event","options","enableBatchRowSelection","enableMultiRowSelection","refs","lastSelectedRowIdRef","lastSelectedRowId","wasCurrentRowChecked","getIsSelected","toggleSelected","nativeEvent","shiftKey","current","rows","getPrePaginationRowModel","lastIndex","findIndex","r","id","isLastIndexChecked","currentIndex","start","end","i","SelectButton","isHeaderCheckbox","hasTargetWrapper","style","getState","selectAllMode","isLoading","t","allRowsSelected","getIsAllRowsSelected","getIsAllPageRowsSelected","common","checked","disabled","getCanSelect","onChange","e","stopPropagation","getToggleAllRowsSelectedHandler","getToggleAllPageRowsSelectedHandler","styles","width","height","accentColor","getIsSomeRowsSelected"],mappings:"AAuGM;AAtGN,OAAOA,SAAS;AAGhB,OAAOC,2BAA2B;AAClC,SAASC,0BAA0B;AAEnC,MAAMC,mBACJ,CAAK;AAAA,EAAEC;AAAAA,EAAKC;AAA6D,MACzE,CAACC,UAAyC;AACxC,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,MAAyBC;AAAAA,IAAwB;AAAA,IAC5DC,MAAM;AAAA,MAAEC,sBAAsBC;AAAAA,IAAkB;AAAA,EAClD,IAAIP;AACJ,QAAMQ,uBAAuBT,IAAIU,cAAc;AAE/CV,MAAIW,eAAe,CAACF,oBAAoB;AAExC,MACEL,2BACAC,2BACCH,MAAMU,YAA6BC,YACpCL,kBAAkBM,YAAY,MAC9B;AACA,UAAM;AAAA,MAAEC;AAAAA,IAAK,IAAId,MAAMe,yBAAyB;AAChD,UAAMC,YAAYF,KAAKG,UACpBC,OAAMA,EAAEC,OAAOZ,kBAAkBM,OACpC;AAEA,QAAIG,cAAc,IAAI;AACpB,YAAMI,qBAAqBN,KAAKE,SAAS,EAAEP,cAAc;AACzD,YAAMY,eAAeP,KAAKG,UAAWC,OAAMA,EAAEC,OAAOpB,IAAIoB,EAAE;AAC1D,YAAM,CAACG,OAAOC,GAAG,IACfP,YAAYK,eACR,CAACL,WAAWK,YAAY,IACxB,CAACA,cAAcL,SAAS;AAC9B,UAAIR,yBAAyBY,oBAAoB;AAC/C,iBAASI,IAAIF,OAAOE,KAAKD,KAAKC,KAAK;AACjCV,eAAKU,CAAC,EAAEd,eAAe,CAACF,oBAAoB;AAAA,QAC9C;AAAA,MACF;AAAA,IACF;AAAA,EACF;AAEAD,oBAAkBM,UAAUd,IAAIoB;AAClC;AAEF,MAAMM,eAAe,CAAK;AAAA,EACxB1B;AAAAA,EACAC;AAAAA,EACA0B,mBAAmB;AAAA,EACnBC,mBAAmB;AAAA,EACnBC;AAMkC,MAAM;AACxC,QAAM;AAAA,IACJC;AAAAA,IACA3B,SAAS;AAAA,MAAEE;AAAAA,MAAyB0B;AAAAA,IAAc;AAAA,EACpD,IAAI9B;AACJ,QAAM;AAAA,IAAE+B;AAAAA,EAAU,IAAIF,SAAS;AAC/B,QAAM;AAAA,IAAEG;AAAAA,EAAE,IAAInC,mBAAmB;AAEjC,QAAMoC,kBACJH,kBAAkB,QACd9B,MAAMkC,qBAAqB,IAC3BlC,MAAMmC,yBAAyB;AAErC,QAAMC,SAAkC;AAAA,IACtCC,SAASX,mBAAmBO,kBAAkBlC,KAAKU,cAAc;AAAA,IACjE6B,UAAUP,aAAchC,OAAO,CAACA,KAAKwC,aAAa;AAAA,IAClD,cAAcb,mBACVM,EAAE,qCAAqC,IACvCA,EAAE,qCAAqC;AAAA,IAC3CQ,UAAWC,OAAM;AACfA,QAAEC,gBAAgB;AAElB,UAAIhB,kBAAkB;AACpBI,0BAAkB,QACd9B,MAAM2C,gCAAgC,EAAEF,CAAC,IACzCzC,MAAM4C,oCAAoC,EAAEH,CAAC;AAAA,MACnD,OAAO;AACL3C,yBAAiB;AAAA,UAAEC;AAAAA,UAAKC;AAAAA,QAAM,CAAC,EAAEyC,CAAC;AAAA,MACpC;AAAA,IACF;AAAA,EACF;AAEA,QAAMI,SAAS;AAAA,IACbC,OAAO;AAAA,IACPC,QAAQ;AAAA,IACRC,aAAa;AAAA,EACf;AAEA,SAAO5C;AAAAA;AAAAA;AAAAA,IAGL,oBAAC,WACC,WAAWT,IAAI;AAAA,MAAE,iCAAiCgC;AAAAA,IAAiB,CAAC,GACpE,OAEA,8BAAC,yBACC,WAAU,uDACV,eACED,mBACI1B,MAAMiD,sBAAsB,KAAK,CAAChB,kBAClC,OAEN,GAAIG,QACJ,OAAOS,QAAO,GAElB;AAAA,MAEA,oBAAC,WACC,WAAWlD,IAAI;AAAA,IAAE,iCAAiCgC;AAAAA,EAAiB,CAAC,GAEpE,8BAAC,WACC,WAAU,wDACV,MAAK,SACL,GAAIS,QACJ,OAAOS,QAAO,GAElB;AAEJ;AAEA,eAAepB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c06b28388488ccb57ae490a6f8e1b94b71f2cf9a"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return w=function(){return r},r}w();w().s[0]++;const yt=({row:e,table:a})=>(w().f[0]++,w().s[1]++,n=>{w().f[1]++;const{options:{enableBatchRowSelection:t,enableMultiRowSelection:l},refs:{lastSelectedRowIdRef:o}}=(w().s[2]++,a),r=(w().s[3]++,e.getIsSelected());if(w().s[4]++,e.toggleSelected(!r),w().s[5]++,w().b[1][0]++,t&&(w().b[1][1]++,l)&&(w().b[1][2]++,n.nativeEvent.shiftKey)&&(w().b[1][3]++,o.current!==null)){w().b[0][0]++;const{rows:u}=(w().s[6]++,a.getPrePaginationRowModel()),i=(w().s[7]++,u.findIndex(m=>(w().f[2]++,w().s[8]++,m.id===o.current)));if(w().s[9]++,i!==-1){w().b[2][0]++;const m=(w().s[10]++,u[i].getIsSelected()),A=(w().s[11]++,u.findIndex(c=>(w().f[3]++,w().s[12]++,c.id===e.id))),[p,d]=(w().s[13]++,i<A?(w().b[3][0]++,[i,A]):(w().b[3][1]++,[A,i]));if(w().s[14]++,r!==m){w().b[4][0]++,w().s[15]++;for(let c=(w().s[16]++,p);c<=d;c++)w().s[17]++,u[c].toggleSelected(!r)}else w().b[4][1]++}else w().b[2][1]++}else w().b[0][1]++;w().s[18]++,o.current=e.id});w().s[19]++;const tn=({row:e,table:a,isHeaderCheckbox:n=(w().b[5][0]++,!1),hasTargetWrapper:t=(w().b[6][0]++,!1),style:l})=>{w().f[4]++;const{getState:o,options:{enableMultiRowSelection:r,selectAllMode:u}}=(w().s[20]++,a),{isLoading:i}=(w().s[21]++,o()),{t:m}=(w().s[22]++,ce()),A=(w().s[23]++,u==="all"?(w().b[7][0]++,a.getIsAllRowsSelected()):(w().b[7][1]++,a.getIsAllPageRowsSelected())),p=(w().s[24]++,{checked:n?(w().b[8][0]++,A):(w().b[8][1]++,e==null?void 0:e.getIsSelected()),disabled:(w().b[9][0]++,i||(w().b[9][1]++,e&&(w().b[9][2]++,!(e!=null&&e.getCanSelect())))),"aria-label":n?(w().b[10][0]++,m("sscds|datatable.selection.toggleAll")):(w().b[10][1]++,m("sscds|datatable.selection.toggleRow")),onChange:c=>{w().f[5]++,w().s[25]++,c.stopPropagation(),w().s[26]++,n?(w().b[11][0]++,w().s[27]++,u==="all"?(w().b[12][0]++,a.getToggleAllRowsSelectedHandler()(c)):(w().b[12][1]++,a.getToggleAllPageRowsSelectedHandler()(c))):(w().b[11][1]++,w().s[28]++,yt({row:e,table:a})(c))}}),d=(w().s[29]++,{width:"1.25rem",height:"1.25rem",accentColor:"var(--sscds-table-color-accent)"});return w().s[30]++,r?(w().b[13][0]++,s.jsx("label",{className:je({"ds-table-select-button-target":t}),style:l,children:s.jsx(Ke,{className:"ds-table-select-multi-button ds-table-select-button",indeterminate:n?(w().b[14][0]++,w().b[15][0]++,a.getIsSomeRowsSelected()&&(w().b[15][1]++,!A)):(w().b[14][1]++,!1),...p,style:d})})):(w().b[13][1]++,s.jsx("label",{className:je({"ds-table-select-button-target":t}),children:s.jsx("input",{className:"ds-table-select-single-button ds-table-select-button",type:"radio",...p,style:d})}))};w().s[31]++;tn.__docgenInfo={description:"",methods:[],displayName:"SelectButton",props:{row:{required:!1,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},isHeaderCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasTargetWrapper:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function Y(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDisplayColumns.tsx",a="ad3bb6b0e9d88a77cebac6f830a11a7d8003048d",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDisplayColumns.tsx",statementMap:{0:{start:{line:7,column:32},end:{line:11,column:1}},1:{start:{line:12,column:33},end:{line:39,column:1}},2:{start:{line:13,column:2},end:{line:38,column:221}},3:{start:{line:13,column:23},end:{line:38,column:20}},4:{start:{line:16,column:48},end:{line:16,column:82}},5:{start:{line:17,column:37},end:{line:17,column:68}},6:{start:{line:25,column:26},end:{line:25,column:102}},7:{start:{line:26,column:37},end:{line:26,column:92}},8:{start:{line:35,column:26},end:{line:35,column:63}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:33},end:{line:12,column:34}},loc:{start:{line:12,column:51},end:{line:39,column:1}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:13,column:17},end:{line:13,column:18}},loc:{start:{line:13,column:23},end:{line:38,column:20}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:16,column:21},end:{line:16,column:22}},loc:{start:{line:16,column:48},end:{line:16,column:82}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:17,column:10},end:{line:17,column:11}},loc:{start:{line:17,column:37},end:{line:17,column:68}},line:17},4:{name:"(anonymous_4)",decl:{start:{line:23,column:92},end:{line:23,column:93}},loc:{start:{line:25,column:26},end:{line:25,column:102}},line:25},5:{name:"(anonymous_5)",decl:{start:{line:26,column:10},end:{line:26,column:11}},loc:{start:{line:26,column:37},end:{line:26,column:92}},line:26},6:{name:"(anonymous_6)",decl:{start:{line:32,column:10},end:{line:32,column:11}},loc:{start:{line:35,column:26},end:{line:35,column:63}},line:35}},branchMap:{0:{loc:{start:{line:13,column:24},end:{line:20,column:3}},type:"binary-expr",locations:[{start:{line:13,column:24},end:{line:13,column:52}},{start:{line:13,column:56},end:{line:20,column:3}}],line:13},1:{loc:{start:{line:20,column:5},end:{line:29,column:3}},type:"binary-expr",locations:[{start:{line:20,column:5},end:{line:20,column:36}},{start:{line:20,column:40},end:{line:29,column:3}}],line:20},2:{loc:{start:{line:23,column:21},end:{line:25,column:109}},type:"cond-expr",locations:[{start:{line:23,column:92},end:{line:25,column:102}},{start:{line:25,column:105},end:{line:25,column:109}}],line:23},3:{loc:{start:{line:23,column:21},end:{line:23,column:89}},type:"binary-expr",locations:[{start:{line:23,column:21},end:{line:23,column:49}},{start:{line:23,column:53},end:{line:23,column:89}}],line:23},4:{loc:{start:{line:29,column:5},end:{line:38,column:3}},type:"binary-expr",locations:[{start:{line:29,column:5},end:{line:29,column:34}},{start:{line:29,column:38},end:{line:38,column:3}}],line:29}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDisplayColumns.tsx"],names:["useMemo","ExpandAllButton","ExpandButton","RowActionsButton","SelectButton","displayColumnIds","expand","select","actions","useDisplayColumns","tableOptions","enableExpanding","id","header","headerComponent","props","cell","size","defaultDisplayColumn","enableRowSelection","enableSelectAll","enableMultiRowSelection","table","enableRowActions","row","filter","Boolean"],mappings:"AAuBwC;AAvBxC,SAASA,eAAe;AAExB,OAAOC,qBAAqB;AAC5B,OAAOC,kBAAkB;AACzB,OAAOC,sBAAsB;AAC7B,OAAOC,kBAAkB;AAGlB,aAAMC,mBAAmB;AAAA,EAC9BC,QAAQ;AAAA,EACRC,QAAQ;AAAA,EACRC,SAAS;AACX;AACO,aAAMC,oBAAoB,CAC/BC,iBACG;AACH,SAAOV,QACL,MAEI,CACEU,aAAaC,mBAAmB;AAAA,IAC9BC,IAAIP,iBAAiBC;AAAAA,IACrBO,QAAQ;AAAA,IACRC,iBAAkBC,WAAU,oBAAC,mBAAgB,GAAIA,OAAS;AAAA,IAC1DC,MAAOD,WAAU,oBAAC,gBAAa,GAAIA,OAAS;AAAA,IAC5CE,MAAM;AAAA,IACN,GAAGP,aAAaQ;AAAAA,EAClB,GACAR,aAAaS,sBAAsB;AAAA,IACjCP,IAAIP,iBAAiBE;AAAAA,IACrBM,QAAQ;AAAA,IACRC,iBACEJ,aAAaU,mBACbV,aAAaW,0BACT,CAAC;AAAA,MAAEC;AAAAA,IAAM,MACP,oBAAC,gBACC,OACA,kBAAgB,MAChB,kBAAgB,MAAA,IAGpB;AAAA,IACNN,MAAOD,WAAU,oBAAC,gBAAa,GAAIA,OAAO,kBAAgB,MAAG;AAAA,IAC7DE,MAAM;AAAA,IACN,GAAGP,aAAaQ;AAAAA,EAClB,GACAR,aAAaa,oBAAoB;AAAA,IAC/BX,IAAIP,iBAAiBG;AAAAA,IACrBK,QAAQ;AAAA,IACRG,MAAMA,CAAC;AAAA,MAAEM;AAAAA,MAAOE;AAAAA,IAAI,MAClB,oBAAC,oBAAiB,KAAU,OAC7B;AAAA,IACDP,MAAM;AAAA,IACN,GAAGP,aAAaQ;AAAAA,EAClB,CAAC,EAEHO,OAAOC,OAAO,GAClB,CACEhB,aAAaC,iBACbD,aAAaS,oBACbT,aAAaU,iBACbV,aAAaW,yBACbX,aAAaQ,sBACbR,aAAaa,gBAAgB,CAEjC;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ad3bb6b0e9d88a77cebac6f830a11a7d8003048d"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Y=function(){return r},r}Y();const ee=(Y().s[0]++,{expand:"ssc_dt_expand",select:"ssc_dt_select",actions:"ssc_dt_actions"});Y().s[1]++;const wt=e=>(Y().f[0]++,Y().s[2]++,P.useMemo(()=>(Y().f[1]++,Y().s[3]++,[(Y().b[0][0]++,e.enableExpanding&&(Y().b[0][1]++,{id:ee.expand,header:"",headerComponent:a=>(Y().f[2]++,Y().s[4]++,s.jsx(On,{...a})),cell:a=>(Y().f[3]++,Y().s[5]++,s.jsx(Nn,{...a})),size:56,...e.defaultDisplayColumn})),(Y().b[1][0]++,e.enableRowSelection&&(Y().b[1][1]++,{id:ee.select,header:"",headerComponent:(Y().b[3][0]++,e.enableSelectAll&&(Y().b[3][1]++,e.enableMultiRowSelection)?(Y().b[2][0]++,({table:a})=>(Y().f[4]++,Y().s[6]++,s.jsx(tn,{table:a,hasTargetWrapper:!0,isHeaderCheckbox:!0}))):(Y().b[2][1]++,null)),cell:a=>(Y().f[5]++,Y().s[7]++,s.jsx(tn,{...a,hasTargetWrapper:!0})),size:56,...e.defaultDisplayColumn})),(Y().b[4][0]++,e.enableRowActions&&(Y().b[4][1]++,{id:ee.actions,header:"",cell:({table:a,row:n})=>(Y().f[6]++,Y().s[8]++,s.jsx(Hn,{row:n,table:a})),size:56,...e.defaultDisplayColumn}))].filter(Boolean)),[e.enableExpanding,e.enableRowSelection,e.enableSelectAll,e.enableMultiRowSelection,e.defaultDisplayColumn,e.enableRowActions]));function D(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/columns.utils.ts",a="d204969143d8080c19d83c2133221c693499e908",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/columns.utils.ts",statementMap:{0:{start:{line:3,column:27},end:{line:3,column:113}},1:{start:{line:3,column:42},end:{line:3,column:113}},2:{start:{line:4,column:29},end:{line:4,column:69}},3:{start:{line:4,column:37},end:{line:4,column:69}},4:{start:{line:5,column:36},end:{line:14,column:1}},5:{start:{line:6,column:28},end:{line:6,column:30}},6:{start:{line:7,column:25},end:{line:11,column:3}},7:{start:{line:8,column:4},end:{line:10,column:7}},8:{start:{line:9,column:6},end:{line:9,column:34}},9:{start:{line:12,column:2},end:{line:12,column:26}},10:{start:{line:13,column:2},end:{line:13,column:27}},11:{start:{line:15,column:30},end:{line:22,column:3}},12:{start:{line:17,column:6},end:{line:22,column:3}},13:{start:{line:17,column:37},end:{line:22,column:1}},14:{start:{line:23,column:34},end:{line:23,column:153}},15:{start:{line:23,column:53},end:{line:23,column:153}},16:{start:{line:24,column:36},end:{line:24,column:113}},17:{start:{line:24,column:48},end:{line:24,column:113}},18:{start:{line:25,column:22},end:{line:27,column:1}},19:{start:{line:26,column:2},end:{line:26,column:117}},20:{start:{line:26,column:93},end:{line:26,column:112}},21:{start:{line:28,column:21},end:{line:43,column:1}},22:{start:{line:32,column:19},end:{line:32,column:57}},23:{start:{line:33,column:2},end:{line:35,column:3}},24:{start:{line:34,column:4},end:{line:34,column:14}},25:{start:{line:36,column:18},end:{line:36,column:67}},26:{start:{line:37,column:24},end:{line:37,column:54}},27:{start:{line:38,column:2},end:{line:42,column:4}},28:{start:{line:44,column:23},end:{line:66,column:1}},29:{start:{line:48,column:19},end:{line:48,column:39}},30:{start:{line:49,column:2},end:{line:51,column:3}},31:{start:{line:50,column:4},end:{line:50,column:14}},32:{start:{line:52,column:2},end:{line:59,column:3}},33:{start:{line:53,column:29},end:{line:53,column:69}},34:{start:{line:54,column:4},end:{line:58,column:6}},35:{start:{line:60,column:29},end:{line:60,column:64}},36:{start:{line:61,column:2},end:{line:65,column:4}},37:{start:{line:67,column:35},end:{line:82,column:1}},38:{start:{line:72,column:2},end:{line:81,column:4}},39:{start:{line:83,column:29},end:{line:90,column:1}},40:{start:{line:84,column:2},end:{line:86,column:3}},41:{start:{line:85,column:4},end:{line:85,column:50}},42:{start:{line:87,column:25},end:{line:87,column:41}},43:{start:{line:88,column:2},end:{line:88,column:139}},44:{start:{line:89,column:2},end:{line:89,column:24}},45:{start:{line:91,column:37},end:{line:97,column:1}},46:{start:{line:94,column:6},end:{line:94,column:18}},47:{start:{line:95,column:29},end:{line:95,column:53}},48:{start:{line:96,column:2},end:{line:96,column:141}},49:{start:{line:98,column:33},end:{line:98,column:145}},50:{start:{line:98,column:44},end:{line:98,column:145}},51:{start:{line:98,column:90},end:{line:98,column:144}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:27},end:{line:3,column:28}},loc:{start:{line:3,column:42},end:{line:3,column:113}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:4,column:29},end:{line:4,column:30}},loc:{start:{line:4,column:37},end:{line:4,column:69}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:5,column:36},end:{line:5,column:37}},loc:{start:{line:5,column:49},end:{line:14,column:1}},line:5},3:{name:"(anonymous_3)",decl:{start:{line:7,column:25},end:{line:7,column:26}},loc:{start:{line:7,column:35},end:{line:11,column:3}},line:7},4:{name:"(anonymous_4)",decl:{start:{line:8,column:17},end:{line:8,column:18}},loc:{start:{line:8,column:26},end:{line:10,column:5}},line:8},5:{name:"(anonymous_5)",decl:{start:{line:15,column:30},end:{line:15,column:31}},loc:{start:{line:17,column:6},end:{line:22,column:3}},line:17},6:{name:"(anonymous_6)",decl:{start:{line:17,column:21},end:{line:17,column:22}},loc:{start:{line:17,column:37},end:{line:22,column:1}},line:17},7:{name:"(anonymous_7)",decl:{start:{line:23,column:34},end:{line:23,column:35}},loc:{start:{line:23,column:53},end:{line:23,column:153}},line:23},8:{name:"(anonymous_8)",decl:{start:{line:24,column:36},end:{line:24,column:37}},loc:{start:{line:24,column:48},end:{line:24,column:113}},line:24},9:{name:"(anonymous_9)",decl:{start:{line:25,column:22},end:{line:25,column:23}},loc:{start:{line:25,column:41},end:{line:27,column:1}},line:25},10:{name:"(anonymous_10)",decl:{start:{line:26,column:79},end:{line:26,column:80}},loc:{start:{line:26,column:93},end:{line:26,column:112}},line:26},11:{name:"(anonymous_11)",decl:{start:{line:28,column:21},end:{line:28,column:22}},loc:{start:{line:31,column:6},end:{line:43,column:1}},line:31},12:{name:"(anonymous_12)",decl:{start:{line:44,column:23},end:{line:44,column:24}},loc:{start:{line:47,column:6},end:{line:66,column:1}},line:47},13:{name:"(anonymous_13)",decl:{start:{line:67,column:35},end:{line:67,column:36}},loc:{start:{line:71,column:6},end:{line:82,column:1}},line:71},14:{name:"(anonymous_14)",decl:{start:{line:83,column:29},end:{line:83,column:30}},loc:{start:{line:83,column:75},end:{line:90,column:1}},line:83},15:{name:"(anonymous_15)",decl:{start:{line:91,column:37},end:{line:91,column:38}},loc:{start:{line:91,column:79},end:{line:97,column:1}},line:91},16:{name:"(anonymous_16)",decl:{start:{line:98,column:33},end:{line:98,column:34}},loc:{start:{line:98,column:44},end:{line:98,column:145}},line:98},17:{name:"(anonymous_17)",decl:{start:{line:98,column:81},end:{line:98,column:82}},loc:{start:{line:98,column:90},end:{line:98,column:144}},line:98}},branchMap:{0:{loc:{start:{line:3,column:42},end:{line:3,column:113}},type:"binary-expr",locations:[{start:{line:3,column:42},end:{line:3,column:54}},{start:{line:3,column:58},end:{line:3,column:93}},{start:{line:3,column:97},end:{line:3,column:113}}],line:3},1:{loc:{start:{line:19,column:6},end:{line:19,column:77}},type:"binary-expr",locations:[{start:{line:19,column:6},end:{line:19,column:18}},{start:{line:19,column:22},end:{line:19,column:57}},{start:{line:19,column:61},end:{line:19,column:77}}],line:19},2:{loc:{start:{line:20,column:17},end:{line:20,column:131}},type:"cond-expr",locations:[{start:{line:20,column:113},end:{line:20,column:122}},{start:{line:20,column:125},end:{line:20,column:131}}],line:20},3:{loc:{start:{line:20,column:17},end:{line:20,column:110}},type:"binary-expr",locations:[{start:{line:20,column:17},end:{line:20,column:41}},{start:{line:20,column:46},end:{line:20,column:68}},{start:{line:20,column:72},end:{line:20,column:93}},{start:{line:20,column:97},end:{line:20,column:109}}],line:20},4:{loc:{start:{line:21,column:17},end:{line:21,column:49}},type:"binary-expr",locations:[{start:{line:21,column:17},end:{line:21,column:41}},{start:{line:21,column:45},end:{line:21,column:49}}],line:21},5:{loc:{start:{line:23,column:53},end:{line:23,column:153}},type:"binary-expr",locations:[{start:{line:23,column:53},end:{line:23,column:84}},{start:{line:23,column:88},end:{line:23,column:153}}],line:23},6:{loc:{start:{line:24,column:48},end:{line:24,column:113}},type:"binary-expr",locations:[{start:{line:24,column:48},end:{line:24,column:80}},{start:{line:24,column:84},end:{line:24,column:113}}],line:24},7:{loc:{start:{line:32,column:33},end:{line:32,column:56}},type:"binary-expr",locations:[{start:{line:32,column:33},end:{line:32,column:43}},{start:{line:32,column:47},end:{line:32,column:56}}],line:32},8:{loc:{start:{line:33,column:2},end:{line:35,column:3}},type:"if",locations:[{start:{line:33,column:2},end:{line:35,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:33},9:{loc:{start:{line:33,column:6},end:{line:33,column:123}},type:"binary-expr",locations:[{start:{line:33,column:6},end:{line:33,column:42}},{start:{line:33,column:46},end:{line:33,column:82}},{start:{line:33,column:86},end:{line:33,column:123}}],line:33},10:{loc:{start:{line:36,column:23},end:{line:36,column:48}},type:"cond-expr",locations:[{start:{line:36,column:32},end:{line:36,column:40}},{start:{line:36,column:43},end:{line:36,column:48}}],line:36},11:{loc:{start:{line:37,column:24},end:{line:37,column:54}},type:"binary-expr",locations:[{start:{line:37,column:24},end:{line:37,column:48}},{start:{line:37,column:52},end:{line:37,column:54}}],line:37},12:{loc:{start:{line:49,column:2},end:{line:51,column:3}},type:"if",locations:[{start:{line:49,column:2},end:{line:51,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:49},13:{loc:{start:{line:52,column:2},end:{line:59,column:3}},type:"if",locations:[{start:{line:52,column:2},end:{line:59,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:52},14:{loc:{start:{line:56,column:19},end:{line:56,column:82}},type:"binary-expr",locations:[{start:{line:56,column:19},end:{line:56,column:35}},{start:{line:56,column:39},end:{line:56,column:82}}],line:56},15:{loc:{start:{line:57,column:17},end:{line:57,column:73}},type:"binary-expr",locations:[{start:{line:57,column:17},end:{line:57,column:33}},{start:{line:57,column:37},end:{line:57,column:73}}],line:57},16:{loc:{start:{line:63,column:16},end:{line:63,column:81}},type:"binary-expr",locations:[{start:{line:63,column:16},end:{line:63,column:34}},{start:{line:63,column:38},end:{line:63,column:81}}],line:63},17:{loc:{start:{line:64,column:15},end:{line:64,column:74}},type:"binary-expr",locations:[{start:{line:64,column:15},end:{line:64,column:33}},{start:{line:64,column:37},end:{line:64,column:74}}],line:64},18:{loc:{start:{line:84,column:2},end:{line:86,column:3}},type:"if",locations:[{start:{line:84,column:2},end:{line:86,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:84},19:{loc:{start:{line:96,column:45},end:{line:96,column:82}},type:"binary-expr",locations:[{start:{line:96,column:45},end:{line:96,column:63}},{start:{line:96,column:67},end:{line:96,column:82}}],line:96}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0},b:{0:[0,0,0],1:[0,0,0],2:[0,0],3:[0,0,0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/columns.utils.ts"],names:["pluck","displayColumnIds","getColumnId","columnDef","id","accessorKey","toString","header","parseCSSVarId","replace","getAllLeafColumnDefs","columns","allLeafColumnDefs","getLeafColumns","cols","forEach","col","push","prepareColumns","columnDefs","map","columnDefType","accessorFn","enableSorting","getIsLastLeftPinnedColumn","table","column","getIsPinned","getLeftLeafColumns","length","getPinnedIndex","getIsFirstRightPinnedColumn","getTotalRight","getRightLeafHeaders","slice","reduce","acc","getSize","getSizeStyle","CSSVarId","select","expand","actions","varName","columnMinSize","minSize","minWidth","width","flex","getPinnedStyle","isPinned","isLastLeftColumn","left","getStart","borderRight","boxShadow","isFirstRightColumn","right","borderLeft","getCommonCellStyles","reorderColumn","draggedColumn","targetColumn","columnOrder","getCanPin","pin","newColumnOrder","splice","indexOf","getDefaultColumnOrder","tableOptions","enableRowSelection","defaultColumnOrder","Array","from","Set","filter","Boolean","getHidableColumns","getVisibleFlatColumns","Object","values"],mappings:"AACA,SAASA,aAAa;AAWtB,SAASC,wBAAwB;AAE1B,aAAMC,cAAc,CAAIC,cAC7BA,UAAUC,MAAMD,UAAUE,aAAaC,WAAW,KAAKH,UAAUI;AAE5D,aAAMC,gBAAgBA,CAACJ,OAAeA,GAAGK,QAAQ,iBAAiB,GAAG;AAErE,aAAMC,uBAAuB,CAClCC,YAC4B;AAC5B,QAAMC,oBAA6C,CAAE;AACrD,QAAMC,iBAAiBA,CAACC,SAAkC;AACxDA,SAAKC,QAASC,SAAQ;AACpBJ,wBAAkBK,KAAKD,GAAG;AAAA,IAC5B,CAAC;AAAA,EACH;AACAH,iBAAeF,OAAO;AACtB,SAAOC;AACT;AAEO,aAAMM,iBAAiB,CAAI;AAAA,EAChCC;AAGF,MACEA,WAAWC,IAAKjB,gBAAe;AAAA,EAC7B,GAAGA;AAAAA,EACHC,IAAID,UAAUC,MAAMD,UAAUE,aAAaC,WAAW,KAAKH,UAAUI;AAAAA,EACrEc,eACElB,WAAWkB,kBACV,CAAClB,UAAUE,eAAe,CAACF,UAAUmB,cAAcnB,UAAUC,MAC1D,YACA;AAAA,EACNmB,eAAepB,WAAWoB,iBAAiB;AAC7C,EAAE;AAEJ,MAAMC,4BAA4B,CAChCC,OACAC,WAEAA,OAAOC,YAAY,MAAM,UACzBF,MAAMG,mBAAmB,EAAEC,SAAS,MAAMH,OAAOI,eAAe;AAElE,MAAMC,8BAA8B,CAAIL,WACtCA,OAAOC,YAAY,MAAM,WAAWD,OAAOI,eAAe,MAAM;AAElE,MAAME,gBAAgB,CACpBP,OACAC,WACG;AACH,SAAOD,MACJQ,oBAAoB,EACpBC,MAAMR,OAAOI,eAAe,IAAI,CAAC,EACjCK,OAAO,CAACC,KAAKpB,QAAQoB,MAAMpB,IAAIqB,QAAQ,GAAG,CAAC;AAChD;AAEA,MAAMC,eAAe,CAAI;AAAA,EACvB/B;AAAAA,EACAmB;AAIF,MAAqB;AACnB,QAAMa,WAAW/B,cAAcD,QAAQH,MAAMsB,OAAOtB,EAAE;AAEtD,MACEmC,aAAatC,iBAAiBuC,UAC9BD,aAAatC,iBAAiBwC,UAC9BF,aAAatC,iBAAiByC,SAC9B;AACA,WAAO,CAAC;AAAA,EACV;AAEA,QAAMC,UAAU,KAAKpC,SAAS,WAAW,KAAK,IAAIgC,QAAQ;AAC1D,QAAMK,gBAAgBlB,OAAOvB,UAAU0C,WAAW;AAElD,SAAO;AAAA,IACLC,UAAU,gBAAgBH,OAAO,aAAaC,aAAa;AAAA,IAC3DG,OAAO,YAAYJ,OAAO;AAAA,IAC1BK,MAAM,OAAOL,OAAO;AAAA,EACtB;AACF;AAEA,MAAMM,iBAAiB,CAAI;AAAA,EACzBxB;AAAAA,EACAC;AAIF,MAAqB;AACnB,QAAMwB,WAAWxB,OAAOC,YAAY;AAEpC,MAAI,CAACuB,UAAU;AACb,WAAO,CAAC;AAAA,EACV;AAEA,MAAIA,aAAa,QAAQ;AACvB,UAAMC,mBAAmB3B,0BAA0BC,OAAOC,MAAM;AAEhE,WAAO;AAAA,MACL0B,MAAM,GAAG1B,OAAO2B,SAAS,MAAM,IAAI,EAAE;AAAA,MACrCC,aACEH,oBAAoB;AAAA,MACtBI,WAAWJ,oBAAoB;AAAA,IACjC;AAAA,EACF;AACA,QAAMK,qBAAqBzB,4BAA4BL,MAAM;AAE7D,SAAO;AAAA,IACL+B,OAAO,GAAGzB,cAAcP,OAAOC,MAAM,IAAI,EAAE;AAAA,IAC3CgC,YACEF,sBAAsB;AAAA,IACxBD,WAAWC,sBAAsB;AAAA,EACnC;AACF;AAEO,aAAMG,sBAAsB,CAAI;AAAA,EACrClC;AAAAA,EACAlB;AAAAA,EACAmB;AAKF,MAAqB;AACnB,SAAO;AAAA,IACL,GAAGY,aAAa;AAAA,MAAE/B;AAAAA,MAAQmB;AAAAA,IAAO,CAAC;AAAA,IAClC,GAAGuB,eAAe;AAAA,MAAExB;AAAAA,MAAOC;AAAAA,IAAO,CAAC;AAAA,EACrC;AACF;AAEO,aAAMkC,gBAAgB,CAC3BC,eACAC,cACAC,gBACqB;AACrB,MAAIF,cAAcG,UAAU,GAAG;AAC7BH,kBAAcI,IAAIH,aAAanC,YAAY,CAAC;AAAA,EAC9C;AACA,QAAMuC,iBAAiB,CAAC,GAAGH,WAAW;AACtCG,iBAAeC,OACbD,eAAeE,QAAQN,aAAa1D,EAAE,GACtC,GACA8D,eAAeC,OAAOD,eAAeE,QAAQP,cAAczD,EAAE,GAAG,CAAC,EAAE,CAAC,CACtE;AACA,SAAO8D;AACT;AAEO,aAAMG,wBAAwB,CACnCN,aACA5D,WACAmE,iBACqB;AACrB,QAAM;AAAA,IAAEC;AAAAA,EAAmB,IAAID;AAC/B,QAAME,qBAA+BxE,MAAM,CAAC,IAAI,GAAGG,SAAS;AAC5D,SAAOsE,MAAMC,KACX,oBAAIC,IAAI,CACNJ,sBAAsB,iBACtB,GAAGR,aACH,GAAGS,kBAAkB,CACtB,CACH,EAAEI,OAAOC,OAAO;AAClB;AAEO,aAAMC,oBAAoB,CAAIrD,UACnCA,MACGsD,sBAAsB,EACtBH,OAAQ5D,SAAQgE,OAAOC,OAAOhF,gBAAgB,EAAEmE,QAAQpD,IAAIZ,EAAE,MAAM,EAAE;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d204969143d8080c19d83c2133221c693499e908"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return D=function(){return r},r}D();D().s[0]++;const ht=e=>{var a,n;return D().f[0]++,D().s[1]++,D().b[0][0]++,e.id??(D().b[0][1]++,(n=(a=e.accessorKey)==null?void 0:a.toString)==null?void 0:n.call(a))??(D().b[0][2]++,e.header)};D().s[2]++;const ln=e=>(D().f[1]++,D().s[3]++,e.replace(/[^a-zA-Z0-9]/g,"_"));D().s[4]++;const vt=e=>{D().f[2]++;const a=(D().s[5]++,[]);D().s[6]++;const n=t=>{D().f[3]++,D().s[7]++,t.forEach(l=>{D().f[4]++,D().s[8]++,a.push(l)})};return D().s[9]++,n(e),D().s[10]++,a};D().s[11]++;const It=({columnDefs:e})=>(D().f[5]++,D().s[12]++,e.map(a=>{var n,t;return D().f[6]++,D().s[13]++,{...a,id:(D().b[1][0]++,a.id??(D().b[1][1]++,(t=(n=a.accessorKey)==null?void 0:n.toString)==null?void 0:t.call(n))??(D().b[1][2]++,a.header)),columnDefType:(D().b[3][0]++,(a==null?void 0:a.columnDefType)??(D().b[3][1]++,!a.accessorKey&&(D().b[3][2]++,!a.accessorFn)&&(D().b[3][3]++,a.id))?(D().b[2][0]++,"display"):(D().b[2][1]++,"data")),enableSorting:(D().b[4][0]++,(a==null?void 0:a.enableSorting)??(D().b[4][1]++,!0))}}));D().s[14]++;const Vt=(e,a)=>(D().f[7]++,D().s[15]++,D().b[5][0]++,a.getIsPinned()==="left"&&(D().b[5][1]++,e.getLeftLeafColumns().length-1===a.getPinnedIndex()));D().s[16]++;const kt=e=>(D().f[8]++,D().s[17]++,D().b[6][0]++,e.getIsPinned()==="right"&&(D().b[6][1]++,e.getPinnedIndex()===0));D().s[18]++;const Bt=(e,a)=>(D().f[9]++,D().s[19]++,e.getRightLeafHeaders().slice(a.getPinnedIndex()+1).reduce((n,t)=>(D().f[10]++,D().s[20]++,n+t.getSize()),0));D().s[21]++;const St=({header:e,column:a})=>{D().f[11]++;const n=(D().s[22]++,ln((D().b[7][0]++,(e==null?void 0:e.id)??(D().b[7][1]++,a.id))));if(D().s[23]++,D().b[9][0]++,n===ee.select||(D().b[9][1]++,n===ee.expand)||(D().b[9][2]++,n===ee.actions))return D().b[8][0]++,D().s[24]++,{};D().b[8][1]++;const t=(D().s[25]++,`--${e?(D().b[10][0]++,"header"):(D().b[10][1]++,"col")}-${n}-size`),l=(D().s[26]++,D().b[11][0]++,a.columnDef.minSize??(D().b[11][1]++,60));return D().s[27]++,{minWidth:`max(calc(var(${t}) * 1px), ${l}px)`,width:`calc(var(${t}) * 1px)`,flex:`var(${t}) 0 auto`}};D().s[28]++;const Et=({table:e,column:a})=>{D().f[12]++;const n=(D().s[29]++,a.getIsPinned());if(D().s[30]++,n)D().b[12][1]++;else return D().b[12][0]++,D().s[31]++,{};if(D().s[32]++,n==="left"){D().b[13][0]++;const l=(D().s[33]++,Vt(e,a));return D().s[34]++,{left:`${a.getStart("left")/16}rem`,borderRight:(D().b[14][0]++,l&&(D().b[14][1]++,"1px solid var(--sscds-table-color-border)")),boxShadow:(D().b[15][0]++,l&&(D().b[15][1]++,"var(--sscds-table-shadow-pin-left)"))}}else D().b[13][1]++;const t=(D().s[35]++,kt(a));return D().s[36]++,{right:`${Bt(e,a)/16}rem`,borderLeft:(D().b[16][0]++,t&&(D().b[16][1]++,"1px solid var(--sscds-table-color-border)")),boxShadow:(D().b[17][0]++,t&&(D().b[17][1]++,"var(--sscds-table-shadow-pin-right)"))}};D().s[37]++;const Pn=({table:e,header:a,column:n})=>(D().f[13]++,D().s[38]++,{...St({header:a,column:n}),...Et({table:e,column:n})});D().s[39]++;const Rt=(e,a,n)=>{D().f[14]++,D().s[40]++,e.getCanPin()?(D().b[18][0]++,D().s[41]++,e.pin(a.getIsPinned())):D().b[18][1]++;const t=(D().s[42]++,[...n]);return D().s[43]++,t.splice(t.indexOf(a.id),0,t.splice(t.indexOf(e.id),1)[0]),D().s[44]++,t};D().s[45]++;const xt=(e,a,n)=>{D().f[15]++;const{enableRowSelection:t}=(D().s[46]++,n),l=(D().s[47]++,In(["id"],a));return D().s[48]++,Array.from(new Set([(D().b[19][0]++,t&&(D().b[19][1]++,"ssc_dt_select")),...e,...l])).filter(Boolean)};D().s[49]++;const Un=e=>(D().f[16]++,D().s[50]++,e.getVisibleFlatColumns().filter(a=>(D().f[17]++,D().s[51]++,Object.values(ee).indexOf(a.id)===-1)));function G(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useOptions.ts",a="add03b27a843276cc1a0faa3a3e70f2f71dbed4b",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useOptions.ts",statementMap:{0:{start:{line:2,column:26},end:{line:88,column:1}},1:{start:{line:33,column:26},end:{line:38,column:22}},2:{start:{line:33,column:41},end:{line:38,column:3}},3:{start:{line:39,column:27},end:{line:39,column:43}},4:{start:{line:40,column:24},end:{line:40,column:37}},5:{start:{line:41,column:2},end:{line:43,column:3}},6:{start:{line:42,column:4},end:{line:42,column:30}},7:{start:{line:44,column:2},end:{line:46,column:3}},8:{start:{line:45,column:4},end:{line:45,column:27}},9:{start:{line:47,column:2},end:{line:87,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:26},end:{line:2,column:27}},loc:{start:{line:32,column:6},end:{line:88,column:1}},line:32},1:{name:"(anonymous_1)",decl:{start:{line:33,column:34},end:{line:33,column:35}},loc:{start:{line:33,column:41},end:{line:38,column:3}},line:33}},branchMap:{0:{loc:{start:{line:6,column:2},end:{line:6,column:32}},type:"default-arg",locations:[{start:{line:6,column:28},end:{line:6,column:32}}],line:6},1:{loc:{start:{line:7,column:2},end:{line:7,column:28}},type:"default-arg",locations:[{start:{line:7,column:24},end:{line:7,column:28}}],line:7},2:{loc:{start:{line:8,column:2},end:{line:8,column:29}},type:"default-arg",locations:[{start:{line:8,column:25},end:{line:8,column:29}}],line:8},3:{loc:{start:{line:9,column:2},end:{line:9,column:28}},type:"default-arg",locations:[{start:{line:9,column:24},end:{line:9,column:28}}],line:9},4:{loc:{start:{line:10,column:2},end:{line:10,column:29}},type:"default-arg",locations:[{start:{line:10,column:25},end:{line:10,column:29}}],line:10},5:{loc:{start:{line:11,column:2},end:{line:11,column:25}},type:"default-arg",locations:[{start:{line:11,column:20},end:{line:11,column:25}}],line:11},6:{loc:{start:{line:12,column:2},end:{line:12,column:25}},type:"default-arg",locations:[{start:{line:12,column:20},end:{line:12,column:25}}],line:12},7:{loc:{start:{line:13,column:2},end:{line:13,column:29}},type:"default-arg",locations:[{start:{line:13,column:25},end:{line:13,column:29}}],line:13},8:{loc:{start:{line:14,column:2},end:{line:14,column:21}},type:"default-arg",locations:[{start:{line:14,column:17},end:{line:14,column:21}}],line:14},9:{loc:{start:{line:15,column:2},end:{line:15,column:32}},type:"default-arg",locations:[{start:{line:15,column:28},end:{line:15,column:32}}],line:15},10:{loc:{start:{line:16,column:2},end:{line:16,column:25}},type:"default-arg",locations:[{start:{line:16,column:20},end:{line:16,column:25}}],line:16},11:{loc:{start:{line:17,column:2},end:{line:17,column:25}},type:"default-arg",locations:[{start:{line:17,column:21},end:{line:17,column:25}}],line:17},12:{loc:{start:{line:18,column:2},end:{line:18,column:27}},type:"default-arg",locations:[{start:{line:18,column:23},end:{line:18,column:27}}],line:18},13:{loc:{start:{line:19,column:2},end:{line:19,column:27}},type:"default-arg",locations:[{start:{line:19,column:22},end:{line:19,column:27}}],line:19},14:{loc:{start:{line:20,column:2},end:{line:20,column:24}},type:"default-arg",locations:[{start:{line:20,column:20},end:{line:20,column:24}}],line:20},15:{loc:{start:{line:21,column:2},end:{line:21,column:31}},type:"default-arg",locations:[{start:{line:21,column:27},end:{line:21,column:31}}],line:21},16:{loc:{start:{line:22,column:2},end:{line:22,column:22}},type:"default-arg",locations:[{start:{line:22,column:18},end:{line:22,column:22}}],line:22},17:{loc:{start:{line:23,column:2},end:{line:23,column:29}},type:"default-arg",locations:[{start:{line:23,column:25},end:{line:23,column:29}}],line:23},18:{loc:{start:{line:24,column:2},end:{line:24,column:25}},type:"default-arg",locations:[{start:{line:24,column:21},end:{line:24,column:25}}],line:24},19:{loc:{start:{line:29,column:2},end:{line:29,column:40}},type:"default-arg",locations:[{start:{line:29,column:23},end:{line:29,column:40}}],line:29},20:{loc:{start:{line:30,column:2},end:{line:30,column:24}},type:"default-arg",locations:[{start:{line:30,column:18},end:{line:30,column:24}}],line:30},21:{loc:{start:{line:41,column:2},end:{line:43,column:3}},type:"if",locations:[{start:{line:41,column:2},end:{line:43,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:41},22:{loc:{start:{line:41,column:6},end:{line:41,column:63}},type:"binary-expr",locations:[{start:{line:41,column:6},end:{line:41,column:33}},{start:{line:41,column:37},end:{line:41,column:63}}],line:41},23:{loc:{start:{line:44,column:2},end:{line:46,column:3}},type:"if",locations:[{start:{line:44,column:2},end:{line:46,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:44},24:{loc:{start:{line:44,column:6},end:{line:44,column:57}},type:"binary-expr",locations:[{start:{line:44,column:6},end:{line:44,column:30}},{start:{line:44,column:34},end:{line:44,column:57}}],line:44}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0],9:[0],10:[0],11:[0],12:[0],13:[0],14:[0],15:[0],16:[0],17:[0],18:[0],19:[0],20:[0],21:[0,0],22:[0,0],23:[0,0],24:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useOptions.ts"],names:["useMemo","useOptions","columns","data","defaultColumn","enableBatchRowSelection","enableColumnActions","enableColumnOrdering","enableColumnPinning","enableColumnResizing","enableExpandAll","enableExpanding","enableFullScreenMode","enableHiding","enableMultiRowSelection","enableMultiSort","enablePagination","enableRowSelection","enableRowsPerPage","enableSelectAll","enableSelectionToolbar","enableSorting","enableSortingRemoval","enableTopToolbar","manualPagination","manualSorting","renderNoDataFallback","renderRowSelectionActions","rowsPerPageOptions","selectAllMode","restDatatableOptions","__defaultColumn","minSize","size","maxSize","__manualPagination","__manualSorting","undefined","defaultDisplayColumn","columnDefType","enablePinning","enableResizing","columnResizeMode","paginateExpandedRows"],mappings:"AACA,SAASA,eAAe;AAIjB,aAAMC,aAAa,CAAI;AAAA,EAC5BC;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC,0BAA0B;AAAA,EAC1BC,sBAAsB;AAAA,EACtBC,uBAAuB;AAAA,EACvBC,sBAAsB;AAAA,EACtBC,uBAAuB;AAAA,EACvBC,kBAAkB;AAAA,EAClBC,kBAAkB;AAAA,EAClBC,uBAAuB;AAAA,EACvBC,eAAe;AAAA,EACfC,0BAA0B;AAAA,EAC1BC,kBAAkB;AAAA,EAClBC,mBAAmB;AAAA,EACnBC,qBAAqB;AAAA,EACrBC,oBAAoB;AAAA,EACpBC,kBAAkB;AAAA,EAClBC,yBAAyB;AAAA,EACzBC,gBAAgB;AAAA,EAChBC,uBAAuB;AAAA,EACvBC,mBAAmB;AAAA,EACnBC;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC;AAAAA,EACAC,qBAAqB,CAAC,IAAI,IAAI,IAAI,GAAG;AAAA,EACrCC,gBAAgB;AAAA,EAChB,GAAGC;AACyB,MAAiC;AAC7D,QAAMC,kBAAkB/B,QACtB,OAAO;AAAA,IACLgC,SAAS;AAAA,IACTC,MAAM;AAAA,IACNC,SAAS;AAAA,IACT,GAAG9B;AAAAA,EACL,IACA,CAACA,aAAa,CAChB;AACA,MAAI+B,qBAAqBX;AACzB,MAAIY,kBAAkBX;AAEtB,MAAID,qBAAqBa,UAAarB,qBAAqB,OAAO;AAChEmB,yBAAqB;AAAA,EACvB;AAEA,MAAIV,kBAAkBY,UAAahB,kBAAkB,OAAO;AAC1De,sBAAkB;AAAA,EACpB;AAEA,SAAO;AAAA,IACLlC;AAAAA,IACAC;AAAAA,IACAC,eAAe2B;AAAAA,IACfO,sBAAsB;AAAA,MACpBC,eAAe;AAAA,MACfjC,qBAAqB;AAAA,MACrBO,cAAc;AAAA,MACd2B,eAAe;AAAA,MACfC,gBAAgB;AAAA,MAChBpB,eAAe;AAAA,IACjB;AAAA,IACAhB;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC,kBAAkBW;AAAAA,IAClBV,eAAeW;AAAAA,IACfV;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACA,GAAGC;AAAAA,IACHY,kBAAkB;AAAA,IAClBC,sBAAsB;AAAA,EACxB;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"add03b27a843276cc1a0faa3a3e70f2f71dbed4b"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return G=function(){return r},r}G();G().s[0]++;const Gt=({columns:e,data:a,defaultColumn:n,enableBatchRowSelection:t=(G().b[0][0]++,!0),enableColumnActions:l=(G().b[1][0]++,!0),enableColumnOrdering:o=(G().b[2][0]++,!0),enableColumnPinning:r=(G().b[3][0]++,!0),enableColumnResizing:u=(G().b[4][0]++,!0),enableExpandAll:i=(G().b[5][0]++,!1),enableExpanding:m=(G().b[6][0]++,!1),enableFullScreenMode:A=(G().b[7][0]++,!0),enableHiding:p=(G().b[8][0]++,!0),enableMultiRowSelection:d=(G().b[9][0]++,!0),enableMultiSort:c=(G().b[10][0]++,!1),enablePagination:g=(G().b[11][0]++,!0),enableRowSelection:C=(G().b[12][0]++,!0),enableRowsPerPage:v=(G().b[13][0]++,!1),enableSelectAll:y=(G().b[14][0]++,!0),enableSelectionToolbar:E=(G().b[15][0]++,!0),enableSorting:I=(G().b[16][0]++,!0),enableSortingRemoval:U=(G().b[17][0]++,!0),enableTopToolbar:O=(G().b[18][0]++,!0),manualPagination:J,manualSorting:N,renderNoDataFallback:H,renderRowSelectionActions:_,rowsPerPageOptions:T=(G().b[19][0]++,[10,25,50,100]),selectAllMode:le=(G().b[20][0]++,"page"),...ve})=>{G().f[0]++;const Ie=(G().s[1]++,P.useMemo(()=>(G().f[1]++,G().s[2]++,{minSize:40,size:150,maxSize:800,...n}),[n]));let Ve=(G().s[3]++,J),dn=(G().s[4]++,N);return G().s[5]++,G().b[22][0]++,J===void 0&&(G().b[22][1]++,g===!1)?(G().b[21][0]++,G().s[6]++,Ve=!0):G().b[21][1]++,G().s[7]++,G().b[24][0]++,N===void 0&&(G().b[24][1]++,I===!1)?(G().b[23][0]++,G().s[8]++,dn=!0):G().b[23][1]++,G().s[9]++,{columns:e,data:a,defaultColumn:Ie,defaultDisplayColumn:{columnDefType:"display",enableColumnActions:!1,enableHiding:!1,enablePinning:!1,enableResizing:!1,enableSorting:!1},enableBatchRowSelection:t,enableColumnActions:l,enableColumnOrdering:o,enableColumnPinning:r,enableColumnResizing:u,enableExpandAll:i,enableExpanding:m,enableFullScreenMode:A,enableHiding:p,enableMultiRowSelection:d,enableMultiSort:c,enablePagination:g,enableRowSelection:C,enableRowsPerPage:v,enableSelectAll:y,enableSelectionToolbar:E,enableSorting:I,enableSortingRemoval:U,enableTopToolbar:O,manualPagination:Ve,manualSorting:dn,renderNoDataFallback:H,renderRowSelectionActions:_,rowsPerPageOptions:T,selectAllMode:le,...ve,columnResizeMode:"onChange",paginateExpandedRows:!1}};function ie(){var e="/Users/radekpodrazky/Projects/design-system/src/hooks/useDebounce.ts",a="57acf5508a7864e02bc2c136e9dc3bc8710cdb22",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/useDebounce.ts",statementMap:{0:{start:{line:2,column:27},end:{line:12,column:1}},1:{start:{line:3,column:18},end:{line:3,column:30}},2:{start:{line:4,column:2},end:{line:11,column:4}},3:{start:{line:5,column:4},end:{line:7,column:5}},4:{start:{line:6,column:6},end:{line:6,column:51}},5:{start:{line:8,column:4},end:{line:10,column:7}},6:{start:{line:9,column:6},end:{line:9,column:23}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:27},end:{line:2,column:28}},loc:{start:{line:2,column:41},end:{line:12,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:4,column:9},end:{line:4,column:10}},loc:{start:{line:4,column:21},end:{line:11,column:3}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:8,column:51},end:{line:8,column:52}},loc:{start:{line:8,column:57},end:{line:10,column:5}},line:8}},branchMap:{0:{loc:{start:{line:5,column:4},end:{line:7,column:5}},type:"if",locations:[{start:{line:5,column:4},end:{line:7,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:5}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0,2:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/useDebounce.ts"],names:["useRef","useDebounce","callback","timeout","params","current","window","cancelAnimationFrame","requestAnimationFrame"],mappings:"AAAA,SAASA,cAAc;AAIhB,aAAMC,cAAc,CAAIC,aAAuC;AACpE,QAAMC,UAAUH,OAAsB,IAAI;AAE1C,SAAQI,YAAW;AACjB,QAAID,QAAQE,SAAS;AACnBC,aAAOC,qBAAqBJ,QAAQE,OAAO;AAAA,IAC7C;AACAF,YAAQE,UAAUC,OAAOE,sBAAsB,MAAM;AACnDN,eAASE,MAAM;AAAA,IACjB,CAAC;AAAA,EACH;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"57acf5508a7864e02bc2c136e9dc3bc8710cdb22"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ie=function(){return r},r}ie();ie().s[0]++;const qt=e=>{ie().f[0]++;const a=(ie().s[1]++,P.useRef(null));return ie().s[2]++,n=>{ie().f[1]++,ie().s[3]++,a.current?(ie().b[0][0]++,ie().s[4]++,window.cancelAnimationFrame(a.current)):ie().b[0][1]++,ie().s[5]++,a.current=window.requestAnimationFrame(()=>{ie().f[2]++,ie().s[6]++,e(n)})}};function b(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDatatable.ts",a="1a1b2f1a4b89a7796919a655cf2b01078ad888e6",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDatatable.ts",statementMap:{0:{start:{line:7,column:32},end:{line:17,column:1}},1:{start:{line:11,column:6},end:{line:11,column:18}},2:{start:{line:12,column:2},end:{line:12,column:38}},3:{start:{line:12,column:26},end:{line:12,column:38}},4:{start:{line:13,column:2},end:{line:15,column:3}},5:{start:{line:14,column:4},end:{line:14,column:61}},6:{start:{line:16,column:2},end:{line:16,column:14}},7:{start:{line:18,column:28},end:{line:100,column:1}},8:{start:{line:19,column:23},end:{line:19,column:42}},9:{start:{line:20,column:25},end:{line:20,column:56}},10:{start:{line:21,column:19},end:{line:21,column:27}},11:{start:{line:22,column:31},end:{line:22,column:43}},12:{start:{line:23,column:21},end:{line:25,column:40}},13:{start:{line:23,column:35},end:{line:25,column:4}},14:{start:{line:26,column:23},end:{line:38,column:32}},15:{start:{line:27,column:22},end:{line:27,column:53}},16:{start:{line:28,column:4},end:{line:28,column:105}},17:{start:{line:29,column:4},end:{line:32,column:6}},18:{start:{line:33,column:4},end:{line:36,column:6}},19:{start:{line:37,column:4},end:{line:37,column:21}},20:{start:{line:39,column:54},end:{line:39,column:105}},21:{start:{line:40,column:50},end:{line:40,column:99}},22:{start:{line:41,column:42},end:{line:41,column:84}},23:{start:{line:42,column:40},end:{line:42,column:85}},24:{start:{line:43,column:28},end:{line:43,column:39}},25:{start:{line:44,column:19},end:{line:46,column:3}},26:{start:{line:45,column:4},end:{line:45,column:61}},27:{start:{line:47,column:20},end:{line:51,column:3}},28:{start:{line:48,column:4},end:{line:50,column:5}},29:{start:{line:49,column:6},end:{line:49,column:33}},30:{start:{line:52,column:2},end:{line:59,column:9}},31:{start:{line:53,column:4},end:{line:53,column:48}},32:{start:{line:54,column:4},end:{line:54,column:50}},33:{start:{line:55,column:4},end:{line:58,column:6}},34:{start:{line:56,column:6},end:{line:56,column:55}},35:{start:{line:57,column:6},end:{line:57,column:53}},36:{start:{line:60,column:2},end:{line:62,column:9}},37:{start:{line:61,column:4},end:{line:61,column:15}},38:{start:{line:63,column:35},end:{line:63,column:63}},39:{start:{line:64,column:15},end:{line:66,column:160}},40:{start:{line:64,column:29},end:{line:66,column:22}},41:{start:{line:64,column:193},end:{line:66,column:6}},42:{start:{line:64,column:271},end:{line:66,column:3}},43:{start:{line:67,column:16},end:{line:90,column:4}},44:{start:{line:91,column:2},end:{line:94,column:4}},45:{start:{line:95,column:2},end:{line:95,column:91}},46:{start:{line:96,column:2},end:{line:96,column:89}},47:{start:{line:97,column:2},end:{line:97,column:88}},48:{start:{line:98,column:2},end:{line:98,column:76}},49:{start:{line:99,column:2},end:{line:99,column:15}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:32},end:{line:7,column:33}},loc:{start:{line:7,column:50},end:{line:17,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:18,column:28},end:{line:18,column:29}},loc:{start:{line:18,column:41},end:{line:100,column:1}},line:18},2:{name:"(anonymous_2)",decl:{start:{line:23,column:29},end:{line:23,column:30}},loc:{start:{line:23,column:35},end:{line:25,column:4}},line:23},3:{name:"(anonymous_3)",decl:{start:{line:26,column:31},end:{line:26,column:32}},loc:{start:{line:26,column:37},end:{line:38,column:3}},line:26},4:{name:"(anonymous_4)",decl:{start:{line:44,column:19},end:{line:44,column:20}},loc:{start:{line:44,column:25},end:{line:46,column:3}},line:44},5:{name:"(anonymous_5)",decl:{start:{line:47,column:20},end:{line:47,column:21}},loc:{start:{line:47,column:31},end:{line:51,column:3}},line:47},6:{name:"(anonymous_6)",decl:{start:{line:52,column:12},end:{line:52,column:13}},loc:{start:{line:52,column:18},end:{line:59,column:3}},line:52},7:{name:"(anonymous_7)",decl:{start:{line:55,column:11},end:{line:55,column:12}},loc:{start:{line:55,column:17},end:{line:58,column:5}},line:55},8:{name:"(anonymous_8)",decl:{start:{line:60,column:18},end:{line:60,column:19}},loc:{start:{line:60,column:24},end:{line:62,column:3}},line:60},9:{name:"(anonymous_9)",decl:{start:{line:64,column:23},end:{line:64,column:24}},loc:{start:{line:64,column:29},end:{line:66,column:22}},line:64},10:{name:"(anonymous_10)",decl:{start:{line:64,column:187},end:{line:64,column:188}},loc:{start:{line:64,column:193},end:{line:66,column:6}},line:64},11:{name:"(anonymous_11)",decl:{start:{line:64,column:261},end:{line:64,column:262}},loc:{start:{line:64,column:271},end:{line:66,column:3}},line:64}},branchMap:{0:{loc:{start:{line:12,column:2},end:{line:12,column:38}},type:"if",locations:[{start:{line:12,column:2},end:{line:12,column:38}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:12},1:{loc:{start:{line:13,column:2},end:{line:15,column:3}},type:"if",locations:[{start:{line:13,column:2},end:{line:15,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:13},2:{loc:{start:{line:27,column:22},end:{line:27,column:53}},type:"binary-expr",locations:[{start:{line:27,column:22},end:{line:27,column:47}},{start:{line:27,column:51},end:{line:27,column:53}}],line:27},3:{loc:{start:{line:28,column:50},end:{line:28,column:77}},type:"binary-expr",locations:[{start:{line:28,column:50},end:{line:28,column:71}},{start:{line:28,column:75},end:{line:28,column:77}}],line:28},4:{loc:{start:{line:30,column:51},end:{line:30,column:112}},type:"cond-expr",locations:[{start:{line:30,column:82},end:{line:30,column:107}},{start:{line:30,column:110},end:{line:30,column:112}}],line:30},5:{loc:{start:{line:30,column:117},end:{line:30,column:181}},type:"cond-expr",locations:[{start:{line:30,column:151},end:{line:30,column:176}},{start:{line:30,column:179},end:{line:30,column:181}}],line:30},6:{loc:{start:{line:30,column:186},end:{line:30,column:221}},type:"binary-expr",locations:[{start:{line:30,column:186},end:{line:30,column:215}},{start:{line:30,column:219},end:{line:30,column:221}}],line:30},7:{loc:{start:{line:31,column:52},end:{line:31,column:115}},type:"cond-expr",locations:[{start:{line:31,column:84},end:{line:31,column:110}},{start:{line:31,column:113},end:{line:31,column:115}}],line:31},8:{loc:{start:{line:31,column:120},end:{line:31,column:156}},type:"binary-expr",locations:[{start:{line:31,column:120},end:{line:31,column:150}},{start:{line:31,column:154},end:{line:31,column:156}}],line:31},9:{loc:{start:{line:34,column:17},end:{line:34,column:54}},type:"binary-expr",locations:[{start:{line:34,column:17},end:{line:34,column:49}},{start:{line:34,column:53},end:{line:34,column:54}}],line:34},10:{loc:{start:{line:35,column:16},end:{line:35,column:94}},type:"binary-expr",locations:[{start:{line:35,column:16},end:{line:35,column:47}},{start:{line:35,column:51},end:{line:35,column:88}},{start:{line:35,column:92},end:{line:35,column:94}}],line:35},11:{loc:{start:{line:39,column:63},end:{line:39,column:104}},type:"binary-expr",locations:[{start:{line:39,column:63},end:{line:39,column:95}},{start:{line:39,column:99},end:{line:39,column:104}}],line:39},12:{loc:{start:{line:40,column:59},end:{line:40,column:98}},type:"binary-expr",locations:[{start:{line:40,column:59},end:{line:40,column:89}},{start:{line:40,column:93},end:{line:40,column:98}}],line:40},13:{loc:{start:{line:41,column:51},end:{line:41,column:83}},type:"binary-expr",locations:[{start:{line:41,column:51},end:{line:41,column:77}},{start:{line:41,column:81},end:{line:41,column:83}}],line:41},14:{loc:{start:{line:42,column:49},end:{line:42,column:84}},type:"binary-expr",locations:[{start:{line:42,column:49},end:{line:42,column:74}},{start:{line:42,column:78},end:{line:42,column:84}}],line:42},15:{loc:{start:{line:48,column:4},end:{line:50,column:5}},type:"if",locations:[{start:{line:48,column:4},end:{line:50,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:48},16:{loc:{start:{line:64,column:29},end:{line:66,column:22}},type:"cond-expr",locations:[{start:{line:64,column:80},end:{line:66,column:7}},{start:{line:66,column:10},end:{line:66,column:22}}],line:64},17:{loc:{start:{line:64,column:29},end:{line:64,column:77}},type:"binary-expr",locations:[{start:{line:64,column:29},end:{line:64,column:53}},{start:{line:64,column:57},end:{line:64,column:77}}],line:64},18:{loc:{start:{line:64,column:90},end:{line:64,column:169}},type:"binary-expr",locations:[{start:{line:64,column:90},end:{line:64,column:125}},{start:{line:64,column:129},end:{line:64,column:163}},{start:{line:64,column:167},end:{line:64,column:169}}],line:64},19:{loc:{start:{line:87,column:27},end:{line:87,column:91}},type:"cond-expr",locations:[{start:{line:87,column:59},end:{line:87,column:82}},{start:{line:87,column:85},end:{line:87,column:91}}],line:87},20:{loc:{start:{line:88,column:23},end:{line:88,column:80}},type:"cond-expr",locations:[{start:{line:88,column:52},end:{line:88,column:71}},{start:{line:88,column:74},end:{line:88,column:80}}],line:88},21:{loc:{start:{line:89,column:25},end:{line:89,column:86}},type:"cond-expr",locations:[{start:{line:89,column:56},end:{line:89,column:77}},{start:{line:89,column:80},end:{line:89,column:86}}],line:89},22:{loc:{start:{line:95,column:32},end:{line:95,column:90}},type:"binary-expr",locations:[{start:{line:95,column:32},end:{line:95,column:65}},{start:{line:95,column:69},end:{line:95,column:90}}],line:95},23:{loc:{start:{line:96,column:30},end:{line:96,column:88}},type:"binary-expr",locations:[{start:{line:96,column:30},end:{line:96,column:65}},{start:{line:96,column:69},end:{line:96,column:88}}],line:96},24:{loc:{start:{line:97,column:26},end:{line:97,column:87}},type:"binary-expr",locations:[{start:{line:97,column:26},end:{line:97,column:59}},{start:{line:97,column:63},end:{line:97,column:87}}],line:97},25:{loc:{start:{line:98,column:25},end:{line:98,column:75}},type:"binary-expr",locations:[{start:{line:98,column:25},end:{line:98,column:57}},{start:{line:98,column:61},end:{line:98,column:75}}],line:98}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useDatatable.ts"],names:["getCoreRowModel","getExpandedRowModel","getPaginationRowModel","getSortedRowModel","useReactTable","useEffect","useLayoutEffect","useMemo","useRef","useState","getAllLeafColumnDefs","getColumnId","getDefaultColumnOrder","prepareColumns","displayColumnIds","useDisplayColumns","useOptions","useDebounce","getMaxRowsPerPageOption","tableOptions","enableRowsPerPage","rowsPerPageOptions","Array","isArray","length","useDatatable","options","displayColumns","tableRef","lastSelectedRowIdRef","columnDefs","columns","initialState","initState","columnOrder","columnPinning","left","from","Set","enableExpanding","expand","enableRowSelection","select","right","enableRowActions","actions","pagination","pageIndex","pageSize","showColumnSettings","setShowColumnSettings","isFullscreenMode","setIsFullscreenMode","columnSizing","setColumnSizing","activeRowId","setActiveRowId","undefined","width","setWidth","onResize","current","getBoundingClientRect","onKeyDown","event","key","window","addEventListener","removeEventListener","debouncedSetColumnSizing","data","state","isLoading","fill","map","Object","assign","col","table","enablePagination","enableSorting","refs","onShowColumnSettings","onFullscreenModeChange","onColumnSizingChange","onActiveRowIdChange"],mappings:"AAAA,SAEEA,iBACAC,qBACAC,uBACAC,mBACAC,qBACK;AACP,SAASC,WAAWC,iBAAiBC,SAASC,QAAQC,gBAAgB;AAEtE,SACEC,sBACAC,aACAC,uBACAC,sBACK;AAOP,SAASC,kBAAkBC,yBAAyB;AACpD,SAASC,kBAAkB;AAC3B,SAASC,mBAAmB;AAE5B,MAAMC,0BAA0B,CAC9BC,iBACG;AACH,QAAM;AAAA,IAAEC;AAAAA,IAAmBC;AAAAA,EAAmB,IAAIF;AAClD,MAAI,CAACC,kBAAmB,QAAO;AAE/B,MAAIE,MAAMC,QAAQF,kBAAkB,GAAG;AACrC,WAAOA,mBAAmBA,mBAAmBG,SAAS,CAAC;AAAA,EACzD;AACA,SAAO;AACT;AAEO,aAAMC,eAAe,CAC1BC,YACyB;AACzB,QAAMP,eAAeH,WAAcU,OAAO;AAC1C,QAAMC,iBAAiBZ,kBAAqBI,YAAY;AACxD,QAAMS,WAAWpB,OAAyB;AAC1C,QAAMqB,uBAAuBrB,OAAsB,IAAI;AAEvD,QAAMsB,aAAavB,QACjB,MACEM,eAAe;AAAA,IAAEiB,YAAY,CAAC,GAAGH,gBAAgB,GAAGD,QAAQK,OAAO;AAAA,EAAE,CAAC,GACxE,CAACL,QAAQK,SAASJ,cAAc,CAClC;AAEA,QAAMK,eAAezB,QAAwC,MAAM;AACjE,UAAM0B,YAAYd,aAAaa,gBAAgB,CAAC;AAChDC,cAAUC,cAActB,sBACtBqB,UAAUC,eAAe,CAAE,GAC3BJ,YACAX,YACF;AACAc,cAAUE,gBAAgB;AAAA,MACxBC,MAAMd,MAAMe,KACV,oBAAIC,IAAI,CACN,GAAInB,aAAaoB,kBAAkB,CAACzB,iBAAiB0B,MAAM,IAAI,CAAE,GACjE,GAAIrB,aAAasB,qBAAqB,CAAC3B,iBAAiB4B,MAAM,IAAI,CAAA,GAClE,GAAIT,UAAUE,eAAeC,QAAQ,CAAE,CAAC,CACzC,CACH;AAAA,MACAO,OAAOrB,MAAMe,KACX,oBAAIC,IAAI,CACN,GAAInB,aAAayB,mBAAmB,CAAC9B,iBAAiB+B,OAAO,IAAI,CAAE,GACnE,GAAIZ,UAAUE,eAAeQ,SAAS,CAAE,CAAC,CAC1C,CACH;AAAA,IACF;AACAV,cAAUa,aAAa;AAAA,MACrBC,WAAWd,WAAWa,YAAYC,aAAa;AAAA,MAC/CC,UACEf,WAAWa,YAAYE,YACvB9B,wBAAwBC,YAAY,KACpC;AAAA,IACJ;AAEA,WAAOc;AAAAA,EACT,GAAG,CAACd,cAAcW,UAAU,CAAC;AAE7B,QAAM,CAACmB,oBAAoBC,qBAAqB,IAAIzC,SAClDuB,cAAciB,sBAAsB,KACtC;AACA,QAAM,CAACE,kBAAkBC,mBAAmB,IAAI3C,SAC9CuB,cAAcmB,oBAAoB,KACpC;AACA,QAAM,CAACE,cAAcC,eAAe,IAAI7C,SACtCuB,cAAcqB,gBAAgB,CAAC,CACjC;AACA,QAAM,CAACE,aAAaC,cAAc,IAAI/C,SACpCuB,cAAcuB,eAAeE,MAC/B;AACA,QAAM,CAACC,OAAOC,QAAQ,IAAIlD,SAAS,CAAC;AAEpC,QAAMmD,WAAWA,MAAM;AACrBD,aAAS/B,SAASiC,QAAQC,sBAAsB,EAAEJ,KAAK;AAAA,EACzD;AACA,QAAMK,YAAYA,CAACC,UAA2B;AAC5C,QAAIA,MAAMC,QAAQ,UAAU;AAC1Bb,0BAAoB,KAAK;AAAA,IAC3B;AAAA,EACF;AACA/C,YAAU,MAAM;AACd6D,WAAOC,iBAAiB,UAAUP,QAAQ;AAC1CM,WAAOC,iBAAiB,WAAWJ,SAAS;AAC5C,WAAO,MAAM;AACXG,aAAOE,oBAAoB,WAAWL,SAAS;AAC/CG,aAAOE,oBAAoB,UAAUR,QAAQ;AAAA,IAC/C;AAAA,EACF,GAAG,EAAE;AACLtD,kBAAgB,MAAM;AACpBsD,aAAS;AAAA,EACX,GAAG,EAAE;AAEL,QAAMS,2BAA2BpD,YAAYqC,eAAe;AAE5D,QAAMgB,OAAY/D,QAChB,MACEmB,QAAQ6C,OAAOC,aAAa,CAAC9C,QAAQ4C,KAAK9C,SACtC,CACE,GAAGF,MACDI,QAAQ6C,OAAOzB,YAAYE,YACzBhB,cAAcc,YAAYE,YAC1B,EACJ,EAAEyB,KAAK,IAAI,CAAC,EACZC,IAAI,MACJC,OAAOC,OACL,CAAC,GACD,GAAGlE,qBAAqBS,aAAaY,OAAO,EAAE2C,IAAKG,UAAS;AAAA,IAC1D,CAAClE,YAAYkE,GAAG,CAAC,GAAG;AAAA,EACtB,EAAE,CACJ,CACF,IACAnD,QAAQ4C,MACd,CACEtC,cAAcc,YAAYE,UAC1BtB,QAAQ4C,MACR5C,QAAQ6C,OAAOC,WACf9C,QAAQ6C,OAAOzB,YAAYE,UAC3B7B,aAAaY,OAAO,CAExB;AAEA,QAAM+C,QAAQ1E,cAAc;AAAA,IAC1B,GAAGe;AAAAA;AAAAA;AAAAA;AAAAA,IAIHY,SAASD;AAAAA,IACTwC;AAAAA,IACAtC;AAAAA,IACAuC,OAAO;AAAA,MACLtB;AAAAA,MACAE;AAAAA,MACAE;AAAAA,MACAE;AAAAA,MACA,GAAGpC,aAAaoD;AAAAA;AAAAA;AAAAA;AAAAA,MAIhBb;AAAAA,IACF;AAAA,IACA1D,iBAAiBA,gBAAgB;AAAA,IACjCE,uBAAuBiB,aAAa4D,mBAChC7E,sBAAsB,IACtBuD;AAAAA,IACJtD,mBAAmBgB,aAAa6D,gBAC5B7E,kBAAkB,IAClBsD;AAAAA,IACJxD,qBAAqBkB,aAAaoB,kBAC9BtC,oBAAoB,IACpBwD;AAAAA,EACN,CAAC;AAEDqB,QAAMG,OAAO;AAAA,IACXrD;AAAAA,IACAC;AAAAA,EACF;AAEAiD,QAAM5B,wBACJ/B,aAAa+D,wBAAwBhC;AACvC4B,QAAM1B,sBACJjC,aAAagE,0BAA0B/B;AACzC0B,QAAMxB,kBACJnC,aAAaiE,wBAAwBf;AACvCS,QAAMtB,iBAAiBrC,aAAakE,uBAAuB7B;AAE3D,SAAOsB;AACT;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1a1b2f1a4b89a7796919a655cf2b01078ad888e6"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return b=function(){return r},r}b();b().s[0]++;const Ft=e=>{b().f[0]++;const{enableRowsPerPage:a,rowsPerPageOptions:n}=(b().s[1]++,e);if(b().s[2]++,a)b().b[0][1]++;else return b().b[0][0]++,b().s[3]++,null;return b().s[4]++,Array.isArray(n)?(b().b[1][0]++,b().s[5]++,n[n.length-1]):(b().b[1][1]++,b().s[6]++,null)};b().s[7]++;const Mt=e=>{var J,N,H,_;b().f[1]++;const a=(b().s[8]++,Gt(e)),n=(b().s[9]++,wt(a)),t=(b().s[10]++,P.useRef()),l=(b().s[11]++,P.useRef(null)),o=(b().s[12]++,P.useMemo(()=>(b().f[2]++,b().s[13]++,It({columnDefs:[...n,...e.columns]})),[e.columns,n])),r=(b().s[14]++,P.useMemo(()=>{var le,ve,Ie,Ve;b().f[3]++;const T=(b().s[15]++,b().b[2][0]++,a.initialState??(b().b[2][1]++,{}));return b().s[16]++,T.columnOrder=xt((b().b[3][0]++,T.columnOrder??(b().b[3][1]++,[])),o,a),b().s[17]++,T.columnPinning={left:Array.from(new Set([...a.enableExpanding?(b().b[4][0]++,[ee.expand]):(b().b[4][1]++,[]),...a.enableRowSelection?(b().b[5][0]++,[ee.select]):(b().b[5][1]++,[]),...(b().b[6][0]++,((le=T.columnPinning)==null?void 0:le.left)??(b().b[6][1]++,[]))])),right:Array.from(new Set([...a.enableRowActions?(b().b[7][0]++,[ee.actions]):(b().b[7][1]++,[]),...(b().b[8][0]++,((ve=T.columnPinning)==null?void 0:ve.right)??(b().b[8][1]++,[]))]))},b().s[18]++,T.pagination={pageIndex:(b().b[9][0]++,((Ie=T==null?void 0:T.pagination)==null?void 0:Ie.pageIndex)??(b().b[9][1]++,0)),pageSize:(b().b[10][0]++,((Ve=T==null?void 0:T.pagination)==null?void 0:Ve.pageSize)??(b().b[10][1]++,Ft(a))??(b().b[10][2]++,50))},b().s[19]++,T},[a,o])),[u,i]=(b().s[20]++,P.useState((b().b[11][0]++,(r==null?void 0:r.showColumnSettings)??(b().b[11][1]++,!1)))),[m,A]=(b().s[21]++,P.useState((b().b[12][0]++,(r==null?void 0:r.isFullscreenMode)??(b().b[12][1]++,!1)))),[p,d]=(b().s[22]++,P.useState((b().b[13][0]++,(r==null?void 0:r.columnSizing)??(b().b[13][1]++,{})))),[c,g]=(b().s[23]++,P.useState((b().b[14][0]++,(r==null?void 0:r.activeRowId)??(b().b[14][1]++,void 0)))),[C,v]=(b().s[24]++,P.useState(0));b().s[25]++;const y=()=>{b().f[4]++,b().s[26]++,v(t.current.getBoundingClientRect().width)};b().s[27]++;const E=T=>{b().f[5]++,b().s[28]++,T.key==="Escape"?(b().b[15][0]++,b().s[29]++,A(!1)):b().b[15][1]++};b().s[30]++,P.useEffect(()=>(b().f[6]++,b().s[31]++,window.addEventListener("resize",y),b().s[32]++,window.addEventListener("keydown",E),b().s[33]++,()=>{b().f[7]++,b().s[34]++,window.removeEventListener("keydown",E),b().s[35]++,window.removeEventListener("resize",y)}),[]),b().s[36]++,P.useLayoutEffect(()=>{b().f[8]++,b().s[37]++,y()},[]);const I=(b().s[38]++,qt(d)),U=(b().s[39]++,P.useMemo(()=>{var T,le,ve,Ie;return b().f[9]++,b().s[40]++,b().b[17][0]++,((T=e.state)==null?void 0:T.isLoading)&&(b().b[17][1]++,!e.data.length)?(b().b[16][0]++,[...Array((b().b[18][0]++,((ve=(le=e.state)==null?void 0:le.pagination)==null?void 0:ve.pageSize)||(b().b[18][1]++,(Ie=r==null?void 0:r.pagination)==null?void 0:Ie.pageSize)||(b().b[18][2]++,10))).fill(null)].map(()=>(b().f[10]++,b().s[41]++,Object.assign({},...vt(a.columns).map(Ve=>(b().f[11]++,b().s[42]++,{[ht(Ve)]:null})))))):(b().b[16][1]++,e.data)},[(J=r==null?void 0:r.pagination)==null?void 0:J.pageSize,e.data,(N=e.state)==null?void 0:N.isLoading,(_=(H=e.state)==null?void 0:H.pagination)==null?void 0:_.pageSize,a.columns])),O=(b().s[43]++,ft({...a,columns:o,data:U,initialState:r,state:{showColumnSettings:u,isFullscreenMode:m,columnSizing:p,activeRowId:c,...a.state,width:C},getCoreRowModel:Dt(),getPaginationRowModel:a.enablePagination?(b().b[19][0]++,gt()):(b().b[19][1]++,void 0),getSortedRowModel:a.enableSorting?(b().b[20][0]++,Ct()):(b().b[20][1]++,void 0),getExpandedRowModel:a.enableExpanding?(b().b[21][0]++,pt()):(b().b[21][1]++,void 0)}));return b().s[44]++,O.refs={tableRef:t,lastSelectedRowIdRef:l},b().s[45]++,O.setShowColumnSettings=(b().b[22][0]++,a.onShowColumnSettings??(b().b[22][1]++,i)),b().s[46]++,O.setIsFullscreenMode=(b().b[23][0]++,a.onFullscreenModeChange??(b().b[23][1]++,A)),b().s[47]++,O.setColumnSizing=(b().b[24][0]++,a.onColumnSizingChange??(b().b[24][1]++,I)),b().s[48]++,O.setActiveRowId=(b().b[25][0]++,a.onActiveRowIdChange??(b().b[25][1]++,g)),b().s[49]++,O};function V(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/usePersistentState.ts",a="f91e37bb0cfd6212f919e6f40eae1f5a9f75716c",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/usePersistentState.ts",statementMap:{0:{start:{line:4,column:34},end:{line:43,column:1}},1:{start:{line:10,column:6},end:{line:10,column:13}},2:{start:{line:11,column:28},end:{line:11,column:53}},3:{start:{line:12,column:44},end:{line:15,column:4}},4:{start:{line:16,column:42},end:{line:16,column:107}},5:{start:{line:17,column:29},end:{line:17,column:116}},6:{start:{line:17,column:53},end:{line:17,column:115}},7:{start:{line:18,column:40},end:{line:18,column:168}},8:{start:{line:19,column:50},end:{line:19,column:123}},9:{start:{line:20,column:32},end:{line:20,column:87}},10:{start:{line:21,column:2},end:{line:29,column:3}},11:{start:{line:22,column:4},end:{line:28,column:7}},12:{start:{line:30,column:2},end:{line:42,column:5}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:34},end:{line:4,column:35}},loc:{start:{line:4,column:52},end:{line:43,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:17,column:41},end:{line:17,column:42}},loc:{start:{line:17,column:53},end:{line:17,column:115}},line:17}},branchMap:{0:{loc:{start:{line:7,column:4},end:{line:7,column:19}},type:"default-arg",locations:[{start:{line:7,column:14},end:{line:7,column:19}}],line:7},1:{loc:{start:{line:13,column:49},end:{line:13,column:113}},type:"cond-expr",locations:[{start:{line:13,column:83},end:{line:13,column:108}},{start:{line:13,column:111},end:{line:13,column:113}}],line:13},2:{loc:{start:{line:13,column:49},end:{line:13,column:80}},type:"binary-expr",locations:[{start:{line:13,column:49},end:{line:13,column:71}},{start:{line:13,column:75},end:{line:13,column:80}}],line:13},3:{loc:{start:{line:13,column:118},end:{line:13,column:184}},type:"cond-expr",locations:[{start:{line:13,column:154},end:{line:13,column:179}},{start:{line:13,column:182},end:{line:13,column:184}}],line:13},4:{loc:{start:{line:13,column:118},end:{line:13,column:151}},type:"binary-expr",locations:[{start:{line:13,column:118},end:{line:13,column:143}},{start:{line:13,column:147},end:{line:13,column:151}}],line:13},5:{loc:{start:{line:13,column:189},end:{line:13,column:258}},type:"binary-expr",locations:[{start:{line:13,column:189},end:{line:13,column:215}},{start:{line:13,column:219},end:{line:13,column:252}},{start:{line:13,column:256},end:{line:13,column:258}}],line:13},6:{loc:{start:{line:14,column:50},end:{line:14,column:115}},type:"cond-expr",locations:[{start:{line:14,column:84},end:{line:14,column:110}},{start:{line:14,column:113},end:{line:14,column:115}}],line:14},7:{loc:{start:{line:14,column:50},end:{line:14,column:81}},type:"binary-expr",locations:[{start:{line:14,column:50},end:{line:14,column:73}},{start:{line:14,column:77},end:{line:14,column:81}}],line:14},8:{loc:{start:{line:14,column:120},end:{line:14,column:191}},type:"binary-expr",locations:[{start:{line:14,column:120},end:{line:14,column:147}},{start:{line:14,column:151},end:{line:14,column:185}},{start:{line:14,column:189},end:{line:14,column:191}}],line:14},9:{loc:{start:{line:16,column:51},end:{line:16,column:106}},type:"binary-expr",locations:[{start:{line:16,column:51},end:{line:16,column:70}},{start:{line:16,column:74},end:{line:16,column:100}},{start:{line:16,column:104},end:{line:16,column:106}}],line:16},10:{loc:{start:{line:17,column:53},end:{line:17,column:115}},type:"binary-expr",locations:[{start:{line:17,column:53},end:{line:17,column:62}},{start:{line:17,column:66},end:{line:17,column:98}},{start:{line:17,column:102},end:{line:17,column:115}}],line:17},11:{loc:{start:{line:18,column:88},end:{line:18,column:141}},type:"binary-expr",locations:[{start:{line:18,column:88},end:{line:18,column:106}},{start:{line:18,column:110},end:{line:18,column:135}},{start:{line:18,column:139},end:{line:18,column:141}}],line:18},12:{loc:{start:{line:19,column:59},end:{line:19,column:122}},type:"binary-expr",locations:[{start:{line:19,column:59},end:{line:19,column:82}},{start:{line:19,column:86},end:{line:19,column:116}},{start:{line:19,column:120},end:{line:19,column:122}}],line:19},13:{loc:{start:{line:20,column:41},end:{line:20,column:86}},type:"binary-expr",locations:[{start:{line:20,column:41},end:{line:20,column:55}},{start:{line:20,column:59},end:{line:20,column:80}},{start:{line:20,column:84},end:{line:20,column:86}}],line:20},14:{loc:{start:{line:21,column:2},end:{line:29,column:3}},type:"if",locations:[{start:{line:21,column:2},end:{line:29,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:21}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0,0],6:[0,0],7:[0,0],8:[0,0,0],9:[0,0,0],10:[0,0,0],11:[0,0,0],12:[0,0,0],13:[0,0,0],14:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/usePersistentState.ts"],names:["useState","useLocalStorageState","displayColumnIds","usePersistentState","key","options","columns","enabled","initialState","props","state","setState","columnPinning","setColumnPinning","left","Array","from","Set","enableExpanding","expand","enableRowSelection","select","right","enableRowActions","actions","columnSizing","setColumnSizing","defaultColumnOrder","map","column","id","accessorKey","toString","header","columnOrder","setColumnOrder","columnVisibility","setColumnVisibility","sorting","setSorting","onColumnPinningChange","onColumnSizingChange","onColumnOrderChange","onColumnVisibilityChange","onSortingChange"],mappings:"AAAA,SAASA,gBAAgB;AASzB,SAASC,4BAA4B;AAErC,SAASC,wBAAwB;AAU1B,aAAMC,qBAAqB,CAChCC,KACAC,YAMG;AACH,QAAM;AAAA,IAAEC;AAAAA,IAASC,UAAU;AAAA,IAAOC;AAAAA,IAAcC;AAAAA,EAAM,IAAIJ;AAC1D,QAAM,CAACK,OAAOC,QAAQ,IAAIV,qBAAsCG,GAAG;AACnE,QAAM,CAACQ,eAAeC,gBAAgB,IAAIb,SAA6B;AAAA,IACrEc,MAAMC,MAAMC,KACV,oBAAIC,IAAI,CACN,GAAIR,OAAOS,mBAAmB,QAAQ,CAAChB,iBAAiBiB,MAAM,IAAI,CAAA,GAClE,GAAIV,OAAOW,sBAAsB,OAAO,CAAClB,iBAAiBmB,MAAM,IAAI,CAAE,GACtE,GAAIX,OAAOE,eAAeE,QACxBN,cAAcI,eAAeE,QAC7B,CAAE,CAAC,CACN,CACH;AAAA,IACAQ,OAAOP,MAAMC,KACX,oBAAIC,IAAI,CACN,GAAIR,OAAOc,oBAAoB,OAAO,CAACrB,iBAAiBsB,OAAO,IAAI,IACnE,GAAId,OAAOE,eAAeU,SACxBd,cAAcI,eAAeU,SAC7B,CAAE,CAAC,CACN,CACH;AAAA,EACF,CAAC;AACD,QAAM,CAACG,cAAcC,eAAe,IAAI1B,SACtCU,OAAOe,gBAAgBjB,cAAciB,gBAAgB,CAAC,CACxD;AACA,QAAME,qBAAqBrB,QAAQsB,IAChCC,YAAWA,OAAOC,MAAMD,OAAOE,aAAaC,WAAW,KAAKH,OAAOI,MACtE;AACA,QAAM,CAACC,aAAaC,cAAc,IAAInC,SACpCe,MAAMC,KACJ,oBAAIC,IAAI,CACN,GAAIP,OAAOwB,eAAe1B,cAAc0B,eAAe,CAAE,GACzD,GAAGP,kBAAkB,CACtB,CACH,CACF;AACA,QAAM,CAACS,kBAAkBC,mBAAmB,IAAIrC,SAC9CU,OAAO0B,oBAAoB5B,cAAc4B,oBAAoB,CAAC,CAChE;AACA,QAAM,CAACE,SAASC,UAAU,IAAIvC,SAC5BU,OAAO4B,WAAW9B,cAAc8B,WAAW,EAC7C;AAEA,MAAI/B,SAAS;AACXI,aAAS;AAAA,MACPC;AAAAA,MACAa;AAAAA,MACAW;AAAAA,MACAE;AAAAA,MACAJ;AAAAA,IACF,CAAC;AAAA,EACH;AAEA,SAAO,CACL;AAAA,IAAEtB;AAAAA,IAAea;AAAAA,IAAcS;AAAAA,IAAaE;AAAAA,IAAkBE;AAAAA,EAAQ,GACtE;AAAA,IACEE,uBAAuB3B;AAAAA,IACvB4B,sBAAsBf;AAAAA,IACtBgB,qBAAqBP;AAAAA,IACrBQ,0BAA0BN;AAAAA,IAC1BO,iBAAiBL;AAAAA,EACnB,CAAC;AAEL;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f91e37bb0cfd6212f919e6f40eae1f5a9f75716c"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return V=function(){return r},r}V();V().s[0]++;const Ot=(e,a)=>{var I,U,O,J;V().f[0]++;const{columns:n,enabled:t=(V().b[0][0]++,!1),initialState:l,props:o}=(V().s[1]++,a),[r,u]=(V().s[2]++,ca(e)),[i,m]=(V().s[3]++,P.useState({left:Array.from(new Set([...(V().b[2][0]++,(o==null?void 0:o.enableExpanding)??(V().b[2][1]++,!1)?(V().b[1][0]++,[ee.expand]):(V().b[1][1]++,[])),...(V().b[4][0]++,(o==null?void 0:o.enableRowSelection)??(V().b[4][1]++,!0)?(V().b[3][0]++,[ee.select]):(V().b[3][1]++,[])),...(V().b[5][0]++,((I=r==null?void 0:r.columnPinning)==null?void 0:I.left)??(V().b[5][1]++,(U=l==null?void 0:l.columnPinning)==null?void 0:U.left)??(V().b[5][2]++,[]))])),right:Array.from(new Set([...(V().b[7][0]++,(o==null?void 0:o.enableRowActions)??(V().b[7][1]++,!0)?(V().b[6][0]++,[ee.actions]):(V().b[6][1]++,[])),...(V().b[8][0]++,((O=r==null?void 0:r.columnPinning)==null?void 0:O.right)??(V().b[8][1]++,(J=l==null?void 0:l.columnPinning)==null?void 0:J.right)??(V().b[8][2]++,[]))]))})),[A,p]=(V().s[4]++,P.useState((V().b[9][0]++,(r==null?void 0:r.columnSizing)??(V().b[9][1]++,l==null?void 0:l.columnSizing)??(V().b[9][2]++,{})))),d=(V().s[5]++,n.map(N=>{var H,_;return V().f[1]++,V().s[6]++,V().b[10][0]++,N.id??(V().b[10][1]++,(_=(H=N.accessorKey)==null?void 0:H.toString)==null?void 0:_.call(H))??(V().b[10][2]++,N.header)})),[c,g]=(V().s[7]++,P.useState(Array.from(new Set([...(V().b[11][0]++,(r==null?void 0:r.columnOrder)??(V().b[11][1]++,l==null?void 0:l.columnOrder)??(V().b[11][2]++,[])),...d])))),[C,v]=(V().s[8]++,P.useState((V().b[12][0]++,(r==null?void 0:r.columnVisibility)??(V().b[12][1]++,l==null?void 0:l.columnVisibility)??(V().b[12][2]++,{})))),[y,E]=(V().s[9]++,P.useState((V().b[13][0]++,(r==null?void 0:r.sorting)??(V().b[13][1]++,l==null?void 0:l.sorting)??(V().b[13][2]++,[]))));return V().s[10]++,t?(V().b[14][0]++,V().s[11]++,u({columnPinning:i,columnSizing:A,columnVisibility:C,sorting:y,columnOrder:c})):V().b[14][1]++,V().s[12]++,[{columnPinning:i,columnSizing:A,columnOrder:c,columnVisibility:C,sorting:y},{onColumnPinningChange:m,onColumnSizingChange:p,onColumnOrderChange:g,onColumnVisibilityChange:v,onSortingChange:E}]};function Kn(){var e="/Users/radekpodrazky/Projects/design-system/src/components/Skeleton/index.ts",a="2f2e0341b20af47b1240d732f1c2e9c2b0e06085",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/Skeleton/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Skeleton/index.ts"],names:["default","Skeleton"],mappings:"AAAA,SAASA,WAAWC,gBAAgB;AACpC,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2f2e0341b20af47b1240d732f1c2e9c2b0e06085"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Kn=function(){return r},r}Kn();function x(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Pagination.tsx",a="491d37696bacfa9d89ae8c2e6c86c593534e123f",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Pagination.tsx",statementMap:{0:{start:{line:9,column:11},end:{line:17,column:1}},1:{start:{line:18,column:15},end:{line:21,column:144}},2:{start:{line:22,column:19},end:{line:86,column:1}},3:{start:{line:40,column:6},end:{line:40,column:11}},4:{start:{line:44,column:6},end:{line:44,column:16}},5:{start:{line:48,column:6},end:{line:48,column:16}},6:{start:{line:49,column:22},end:{line:49,column:35}},7:{start:{line:50,column:19},end:{line:50,column:37}},8:{start:{line:51,column:24},end:{line:51,column:74}},9:{start:{line:52,column:24},end:{line:52,column:44}},10:{start:{line:53,column:23},end:{line:53,column:79}},11:{start:{line:54,column:35},end:{line:54,column:56}},12:{start:{line:55,column:15},end:{line:55,column:43}},13:{start:{line:59,column:6},end:{line:59,column:26}},14:{start:{line:60,column:2},end:{line:85,column:10}},15:{start:{line:73,column:291},end:{line:73,column:306}},16:{start:{line:74,column:290},end:{line:74,column:304}},17:{start:{line:76,column:283},end:{line:76,column:293}},18:{start:{line:77,column:304},end:{line:77,column:326}},19:{start:{line:82,column:8},end:{line:82,column:44}},20:{start:{line:83,column:68},end:{line:83,column:175}},21:{start:{line:89,column:0},end:{line:106,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:22,column:19},end:{line:22,column:20}},loc:{start:{line:24,column:6},end:{line:86,column:1}},line:24},1:{name:"(anonymous_1)",decl:{start:{line:73,column:285},end:{line:73,column:286}},loc:{start:{line:73,column:291},end:{line:73,column:306}},line:73},2:{name:"(anonymous_2)",decl:{start:{line:74,column:284},end:{line:74,column:285}},loc:{start:{line:74,column:290},end:{line:74,column:304}},line:74},3:{name:"(anonymous_3)",decl:{start:{line:76,column:277},end:{line:76,column:278}},loc:{start:{line:76,column:283},end:{line:76,column:293}},line:76},4:{name:"(anonymous_4)",decl:{start:{line:77,column:298},end:{line:77,column:299}},loc:{start:{line:77,column:304},end:{line:77,column:326}},line:77},5:{name:"(anonymous_5)",decl:{start:{line:81,column:143},end:{line:81,column:144}},loc:{start:{line:81,column:150},end:{line:83,column:7}},line:81},6:{name:"(anonymous_6)",decl:{start:{line:83,column:42},end:{line:83,column:43}},loc:{start:{line:83,column:68},end:{line:83,column:175}},line:83}},branchMap:{0:{loc:{start:{line:51,column:24},end:{line:51,column:74}},type:"binary-expr",locations:[{start:{line:51,column:24},end:{line:51,column:32}},{start:{line:51,column:36},end:{line:51,column:74}}],line:51},1:{loc:{start:{line:55,column:15},end:{line:55,column:43}},type:"binary-expr",locations:[{start:{line:55,column:15},end:{line:55,column:27}},{start:{line:55,column:31},end:{line:55,column:43}}],line:55},2:{loc:{start:{line:61,column:88},end:{line:71,column:6}},type:"cond-expr",locations:[{start:{line:61,column:116},end:{line:61,column:145}},{start:{line:61,column:148},end:{line:71,column:6}}],line:61},3:{loc:{start:{line:61,column:148},end:{line:71,column:6}},type:"cond-expr",locations:[{start:{line:61,column:155},end:{line:66,column:6}},{start:{line:66,column:9},end:{line:71,column:6}}],line:61},4:{loc:{start:{line:79,column:4},end:{line:84,column:8}},type:"binary-expr",locations:[{start:{line:79,column:4},end:{line:79,column:21}},{start:{line:79,column:25},end:{line:79,column:37}},{start:{line:79,column:57},end:{line:84,column:8}}],line:79},5:{loc:{start:{line:80,column:131},end:{line:80,column:240}},type:"cond-expr",locations:[{start:{line:80,column:145},end:{line:80,column:194}},{start:{line:80,column:197},end:{line:80,column:240}}],line:80}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0,0],5:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Pagination.tsx"],names:["styled","abbreviateNumber","getFormStyle","Inline","Padbox","useContainerQuery","IconButton","useSafeTranslation","Skeleton","cq","sm","maxWidth","md","minWidth","Select","select","withConfig","displayName","componentId","Pagination","table","getCanNextPage","getCanPreviousPage","getPageCount","getPrePaginationRowModel","getState","nextPage","options","enableRowsPerPage","rowCount","rowsPerPageOptions","previousPage","setPageIndex","setPageSize","pagination","isLoading","pageIndex","pageSize","currentPage","lastPage","totalRowCount","rows","length","firstRowIndex","lastRowIndex","Math","min","cqParams","containerRef","isLg","t","lng","toLocaleString","count","e","Number","target","value","map","size"],mappings:"AAgEY,cAiBJ,YAjBI;AAhEZ,OAAOA,YAAY;AAEnB,SAASC,kBAAkBC,oBAAoB;AAC/C,SAASC,QAAQC,cAAc;AAE/B,SAASC,yBAAyB;AAClC,OAAOC,gBAAgB;AACvB,SAASC,0BAA0B;AACnC,SAASC,gBAAgB;AAEzB,MAAMC,KAAK;AAAA,EACTC,IAAI;AAAA,IACFC,UAAU;AAAA,EACZ;AAAA,EACAC,IAAI;AAAA,IACFC,UAAU;AAAA,IACVF,UAAU;AAAA,EACZ;AACF;AAEA,MAAMG,SAASd,OAAOe,OAAMC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CACNhB,EAAAA,CAAAA,qBAAAA,kDAAAA,eAAAA,GAAAA,aAAa,aAAa,GAErCA,aAAa,OAAO,CAAC;AAIhC,MAAMiB,aAAa,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACrE,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,MAAmBC;AAAAA,MAAUC;AAAAA,IAAmB;AAAA,IAC3DC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIb;AACJ,QAAM;AAAA,IAAEc;AAAAA,IAAYC;AAAAA,EAAU,IAAIV,SAAS;AAC3C,QAAM;AAAA,IAAEW;AAAAA,IAAWC;AAAAA,EAAS,IAAIH;AAEhC,QAAMI,cAAcF,YAAY;AAChC,QAAMG,WAAWhB,aAAa,IAAI;AAClC,QAAMiB,gBAAgBX,YAAYL,yBAAyB,EAAEiB,KAAKC;AAClE,QAAMC,gBAAgBP,YAAYC;AAClC,QAAMO,eAAeC,KAAKC,IAAIV,YAAYC,WAAWA,UAAUG,aAAa;AAE5E,QAAM,CAACO,UAAUC,YAAY,IAAI3C,kBAAkBI,EAAE;AACrD,QAAMwC,OAAO,CAACF,SAASrC,MAAM,CAACqC,SAASnC;AAEvC,QAAM;AAAA,IAAEsC;AAAAA,IAAGC;AAAAA,EAAI,IAAI5C,mBAAmB;AAEtC,SACE,oBAAC,UACC,KAAKyC,cACL,WAAU,+BACV,aAAY,MACZ,aAAY,UAEZ,+BAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACtC;AAAA,wBAAC,SAAI,WAAU,kCACZb,sBACC,oBAAC,YAAS,OAAO,SACfc,OACFC,EAAE,+CAA+C;AAAA,MAC/CP,gBAAgBA,gBAAgB,GAAGS,eAAeD,GAAG;AAAA,MACrDP,cAAcA,aAAaQ,eAAeD,GAAG;AAAA,MAC7CX,eAAevC,iBAAiBuC,eAAeW,GAAG;AAAA,MAClDE,OAAOb;AAAAA,IACT,CAAC,IAEDU,EAAE,gDAAgD;AAAA,MAChDP,gBAAgBA,gBAAgB,GAAGS,eAAeD,GAAG;AAAA,MACrDP,cAAcA,aAAaQ,eAAeD,GAAG;AAAA,MAC7CX,eAAevC,iBAAiBuC,eAAeW,GAAG;AAAA,MAClDE,OAAOb;AAAAA,IACT,CAAC,GAEL;AAAA,IACA,qBAAC,UACC,OAAM,UACN,WAAU,uCACV,KAAI,MAEJ;AAAA,0BAAC,cACC,WAAU,+EACV,UAAS,iBACT,YAAY,CAAClB,mBAAmB,GAChC,OAAO4B,EAAE,0CAA0C,GACnD,MAAK,MACL,SAAQ,SACR,SAAS,MAAMlB,aAAa,CAAC,GAAE;AAAA,MAEjC,oBAAC,cACC,WAAU,8EACV,UAAS,cACT,YAAY,CAACV,mBAAmB,GAChC,OAAO4B,EAAE,6CAA6C,GACtD,MAAK,MACL,SAAQ,SACR,SAAS,MAAMnB,aAAa,GAAE;AAAA,MAEhC,oBAAC,UAAK,WAAU,4CACbO,uBACH;AAAA,MACA,oBAAC,cACC,WAAU,8EACV,UAAS,eACT,YAAY,CAACjB,eAAe,GAC5B,OAAO6B,EAAE,yCAAyC,GAClD,MAAK,MACL,SAAQ,SACR,SAAS,MAAMxB,SAAS,GAAE;AAAA,MAE5B,oBAAC,cACC,WAAU,8EACV,UAAS,iBACT,cAAc,KACd,YAAY,CAACL,eAAe,GAC5B,OAAO6B,EAAE,yCAAyC,GAClD,MAAK,MACL,SAAQ,SACR,SAAS,MAAMlB,aAAaO,QAAQ,GAAE;AAAA,OAE1C;AAAA,IACCX,qBAAqB,CAACmB,SAASrC,MAC9B,qBAAC,UACC,OAAM,UACN,WAAU,6CACV,KAAI,MAEJ;AAAA,0BAAC,WACC,WAAU,2CACV,SAAQ,qBAEPqC,mBAASnC,KACNsC,EAAE,8CAA8C,IAChDA,EAAE,wCAAwC,GAChD;AAAA,MACA,oBAAC,UACC,WAAU,4CACV,IAAG,qBACH,OAAOb,UACP,UAAWiB,OAAM;AACfrB,oBAAYsB,OAAOD,EAAEE,OAAOC,KAAK,CAAC;AAAA,MACpC,GAEC3B,6BAAmB4B,IAAKC,UACvB,oBAAC,YAEC,WAAU,4CACV,OAAOA,MAENA,kBAJIA,IAKP,CACD,GACH;AAAA,OACF;AAAA,KAEJ,GACF;AAEJ;AAEA,eAAexC;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"491d37696bacfa9d89ae8c2e6c86c593534e123f"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return x=function(){return r},r}x();const Nt=(x().s[0]++,{sm:{maxWidth:512},md:{minWidth:513,maxWidth:720}}),jt=(x().s[1]++,he.select.withConfig({displayName:"Pagination__Select",componentId:"sc-wcafgt-0"})(["border:1px solid ",";border-radius:var(--sscds-radii-input);color:",";height:2rem;"],bn("borderColor"),bn("color")));x().s[2]++;const Tn=({table:e})=>{x().f[0]++;const{getCanNextPage:a,getCanPreviousPage:n,getPageCount:t,getPrePaginationRowModel:l,getState:o,nextPage:r,options:{enableRowsPerPage:u,rowCount:i,rowsPerPageOptions:m},previousPage:A,setPageIndex:p,setPageSize:d}=(x().s[3]++,e),{pagination:c,isLoading:g}=(x().s[4]++,o()),{pageIndex:C,pageSize:v}=(x().s[5]++,c),y=(x().s[6]++,C+1),E=(x().s[7]++,t()-1),I=(x().s[8]++,x().b[0][0]++,i??(x().b[0][1]++,l().rows.length)),U=(x().s[9]++,C*v),O=(x().s[10]++,Math.min(C*v+v,I)),[J,N]=(x().s[11]++,ba(Nt)),H=(x().s[12]++,x().b[1][0]++,!J.sm&&(x().b[1][1]++,!J.md)),{t:_,lng:T}=(x().s[13]++,ce());return x().s[14]++,s.jsx(Be,{ref:N,className:"ds-table-pagination-toolbar",paddingSize:"md",paddingType:"squish",children:s.jsxs(te,{align:"center",gap:"md",justify:"space-between",children:[s.jsx("div",{className:"ds-table-pagination-item-count",children:g?(x().b[2][0]++,s.jsx(rn,{width:120})):(x().b[2][1]++,H?(x().b[3][0]++,_("sscds|datatable.pagination.itemCounter.full",{firstRowIndex:(U+1).toLocaleString(T),lastRowIndex:O.toLocaleString(T),totalRowCount:He(I,T),count:I})):(x().b[3][1]++,_("sscds|datatable.pagination.itemCounter.short",{firstRowIndex:(U+1).toLocaleString(T),lastRowIndex:O.toLocaleString(T),totalRowCount:He(I,T),count:I})))}),s.jsxs(te,{align:"center",className:"ds-table-pagination-buttons-wrapper",gap:"sm",children:[s.jsx(be,{className:"ds-table-pagination-buttons-first-button ds-table-pagination-buttons-button",iconName:"backward-step",isDisabled:!n(),label:_("sscds|datatable.pagination.goToFirstPage"),size:"sm",variant:"ghost",onClick:()=>(x().f[1]++,x().s[15]++,p(0))}),s.jsx(be,{className:"ds-table-pagination-buttons-prev-button ds-table-pagination-buttons-button",iconName:"angle-left",isDisabled:!n(),label:_("sscds|datatable.pagination.goToPreviousPage"),size:"sm",variant:"ghost",onClick:()=>(x().f[2]++,x().s[16]++,A())}),s.jsx("span",{className:"ds-table-pagination-buttons-current-page",children:y}),s.jsx(be,{className:"ds-table-pagination-buttons-next-button ds-table-pagination-buttons-button",iconName:"angle-right",isDisabled:!a(),label:_("sscds|datatable.pagination.goToNextPage"),size:"sm",variant:"ghost",onClick:()=>(x().f[3]++,x().s[17]++,r())}),s.jsx(be,{className:"ds-table-pagination-buttons-last-button ds-table-pagination-buttons-button",iconName:"backward-step",iconRotation:180,isDisabled:!a(),label:_("sscds|datatable.pagination.goToLastPage"),size:"sm",variant:"ghost",onClick:()=>(x().f[4]++,x().s[18]++,p(E))})]}),(x().b[4][0]++,u&&(x().b[4][1]++,!J.sm)&&(x().b[4][2]++,s.jsxs(te,{align:"center",className:"ds-table-pagination-rows-per-page-wrapper",gap:"md",children:[s.jsx("label",{className:"ds-table-pagination-rows-per-page-label",htmlFor:"rowsPerPageSelect",children:J.md?(x().b[5][0]++,_("sscds|datatable.pagination.rowsPerPage.short")):(x().b[5][1]++,_("sscds|datatable.pagination.rowsPerPage"))}),s.jsx(jt,{className:"ds-table-pagination-rows-per-page-select",id:"rowsPerPageSelect",value:v,onChange:le=>{x().f[5]++,x().s[19]++,d(Number(le.target.value))},children:m.map(le=>(x().f[6]++,x().s[20]++,s.jsx("option",{className:"ds-table-pagination-rows-per-page-option",value:le,children:le},le)))})]})))]})})};x().s[21]++;Tn.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function z(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Selection.tsx",a="d54bc0389aff351358f7171906ba4c94d6707233",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Selection.tsx",statementMap:{0:{start:{line:9,column:29},end:{line:16,column:1}},1:{start:{line:12,column:6},end:{line:12,column:11}},2:{start:{line:13,column:23},end:{line:13,column:49}},3:{start:{line:14,column:28},end:{line:14,column:47}},4:{start:{line:15,column:2},end:{line:15,column:27}},5:{start:{line:17,column:22},end:{line:20,column:131}},6:{start:{line:21,column:18},end:{line:65,column:1}},7:{start:{line:32,column:6},end:{line:32,column:11}},8:{start:{line:36,column:6},end:{line:36,column:26}},9:{start:{line:37,column:28},end:{line:37,column:55}},10:{start:{line:38,column:23},end:{line:38,column:49}},11:{start:{line:39,column:24},end:{line:39,column:74}},12:{start:{line:40,column:2},end:{line:42,column:3}},13:{start:{line:41,column:4},end:{line:41,column:16}},14:{start:{line:43,column:2},end:{line:64,column:13}},15:{start:{line:57,column:127},end:{line:57,column:155}},16:{start:{line:68,column:0},end:{line:85,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:29},end:{line:9,column:30}},loc:{start:{line:9,column:40},end:{line:16,column:1}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:21,column:18},end:{line:21,column:19}},loc:{start:{line:23,column:6},end:{line:65,column:1}},line:23},2:{name:"(anonymous_2)",decl:{start:{line:57,column:121},end:{line:57,column:122}},loc:{start:{line:57,column:127},end:{line:57,column:155}},line:57}},branchMap:{0:{loc:{start:{line:39,column:24},end:{line:39,column:74}},type:"binary-expr",locations:[{start:{line:39,column:24},end:{line:39,column:32}},{start:{line:39,column:36},end:{line:39,column:74}}],line:39},1:{loc:{start:{line:40,column:2},end:{line:42,column:3}},type:"if",locations:[{start:{line:40,column:2},end:{line:42,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:40}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/Selection.tsx"],names:["pluck","styled","abbreviateNumber","Inline","Padbox","Surface","Button","Strong","SafeTrans","useSafeTranslation","getSelectedRowsCount","table","getSelectedRowModel","selectedRows","rows","selectedRowsCount","length","SelectionRoot","withConfig","displayName","componentId","Selection","options","renderRowSelectionActions","rowCount","getPrePaginationRowModel","toggleAllRowsSelected","t","lng","totalRowCount","bold","count","selectedRowCount","toLocaleString"],mappings:"AA0DU,SASU,KATV;AA1DV,SAASA,aAAa;AACtB,OAAOC,YAAY;AAEnB,SAASC,wBAAwB;AAEjC,SAASC,QAAQC,QAAQC,eAAe;AACxC,OAAOC,YAAY;AACnB,SAASC,cAAc;AACvB,SACEC,WACAC,0BACK;AAEP,MAAMC,uBAAuB,CAAKC,UAAgC;AAChE,QAAM;AAAA,IAAEC;AAAAA,EAAoB,IAAID;AAChC,QAAME,eAAeD,oBAAoB,EAAEE;AAC3C,QAAMC,oBAAoBF,aAAaG;AACvC,SAAOD;AACT;AAEA,MAAME,gBAAgBhB,OAAOI,OAAO,EAACa,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAOpC,EAAA,CAAA,6HAAA,CAAA;AACD,MAAMC,YAAY,CAAK;AAAA,EAAEV;AAAuC,MAAM;AACpE,QAAM;AAAA,IACJW,SAAS;AAAA,MAAEC;AAAAA,MAA2BC;AAAAA,IAAS;AAAA,IAC/CC;AAAAA,IACAb;AAAAA,IACAc;AAAAA,EACF,IAAIf;AACJ,QAAM;AAAA,IAAEgB;AAAAA,IAAGC;AAAAA,EAAI,IAAInB,mBAAmB;AAEtC,QAAMM,oBAAoBL,qBAAqBC,KAAK;AACpD,QAAME,eAAeD,oBAAoB,EAAEE;AAC3C,QAAMe,gBAAgBL,YAAYC,yBAAyB,EAAEX,KAAKE;AAElE,MAAID,sBAAsB,GAAG;AAC3B,WAAO;AAAA,EACT;AAEA,SACE,oBAAC,iBACC,WAAU,8BACV,WAAW,GACX,QAAO,MACP,OAAO;AAAA,IACL,sBAAsB;AAAA,IACtB,wBAAwB;AAAA,EAC1B,GACA,WAAS,MAET,8BAAC,UAAO,aAAY,MAClB,+BAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACtC;AAAA,yBAAC,UACC,OAAM,UACN,WAAU,+BACV,KAAI,MAEJ;AAAA,0BAAC,SACC,8BAAC,aACC,YAAY;AAAA,QACVe,MACE,oBAAC,UAAO,WAAU,yCAEf;AAAA,UAAEf;AAAAA,QAAkB,GACvB;AAAA,MAEJ,GACA,SAAQ,yCACR,QAAQ;AAAA,QACNgB,OAAOF;AAAAA,QACPA,eAAe3B,iBAAiB2B,eAAeD,GAAG;AAAA,QAClDI,kBAAkBjB,kBAAkBkB,eAAeL,GAAG;AAAA,MACxD,GAAE,GAEN;AAAA,MACA,oBAAC,UACC,WAAU,mCACV,MAAK,MACL,SAAQ,SACR,SAAS,MAAMF,sBAAsB,KAAK,GAEzCC,YAAE,0CAA0C,GAC/C;AAAA,OACF;AAAA,IACA,oBAAC,UACC,OAAM,UACN,WAAU,wCACV,KAAI,MACJ,SAAQ,YAEPJ,sCAA4B;AAAA,MAC3BV,cAAcb,MAAM,YAAYa,YAAY;AAAA,MAC5CgB;AAAAA,MACAlB;AAAAA,IACF,CAAC,GACH;AAAA,KACF,GACF,GACF;AAEJ;AAEA,eAAeU;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d54bc0389aff351358f7171906ba4c94d6707233"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return z=function(){return r},r}z();z().s[0]++;const Ht=e=>{z().f[0]++;const{getSelectedRowModel:a}=(z().s[1]++,e),n=(z().s[2]++,a().rows),t=(z().s[3]++,n.length);return z().s[4]++,t},Pt=(z().s[5]++,he(un).withConfig({displayName:"Selection__SelectionRoot",componentId:"sc-1agyq0k-0"})(["position:sticky;z-index:2;left:0;right:0;bottom:var(--sscds-space-4x);margin:var(--sscds-space-4x) var(--sscds-space-4x) 0;"]));z().s[6]++;const _n=({table:e})=>{z().f[1]++;const{options:{renderRowSelectionActions:a,rowCount:n},getPrePaginationRowModel:t,getSelectedRowModel:l,toggleAllRowsSelected:o}=(z().s[7]++,e),{t:r,lng:u}=(z().s[8]++,ce()),i=(z().s[9]++,Ht(e)),m=(z().s[10]++,l().rows),A=(z().s[11]++,z().b[0][0]++,n??(z().b[0][1]++,t().rows.length));return z().s[12]++,i===0?(z().b[1][0]++,z().s[13]++,null):(z().b[1][1]++,z().s[14]++,s.jsx(Pt,{className:"ds-table-selection-toolbar",elevation:2,radius:"md",style:{"--sscds-background":"var(--sscds-color-primary-3)","--sscds-border-color":"var(--sscds-color-primary-8)"},hasBorder:!0,children:s.jsx(Be,{paddingSize:"md",children:s.jsxs(te,{align:"center",gap:"md",justify:"space-between",children:[s.jsxs(te,{align:"center",className:"ds-table-selection-overview",gap:"sm",children:[s.jsx("div",{children:s.jsx(ma,{components:{bold:s.jsx(Da,{className:"ds-table-selection-currently-selected",children:{selectedRowsCount:i}})},i18nKey:"sscds|datatable.selection.itemCounter",values:{count:A,totalRowCount:He(A,u),selectedRowCount:i.toLocaleString(u)}})}),s.jsx(Pe,{className:"ds-table-selection-clear-button",size:"sm",variant:"ghost",onClick:()=>(z().f[2]++,z().s[15]++,o(!1)),children:r("sscds|datatable.selection.clearSelection")})]}),s.jsx(te,{align:"center",className:"ds-table-selection-actions-container",gap:"md",justify:"flex-end",children:a==null?void 0:a({selectedRows:In("original",m),totalRowCount:A,table:e})})]})})}))};z().s[16]++;_n.__docgenInfo={description:"",methods:[],displayName:"Selection",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function Ce(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/DetailPanel.tsx",a="beb15f05043679bde94b0b4cdca0688ac8b3402c",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/DetailPanel.tsx",statementMap:{0:{start:{line:2,column:20},end:{line:21,column:1}},1:{start:{line:11,column:6},end:{line:11,column:11}},2:{start:{line:14,column:6},end:{line:14,column:16}},3:{start:{line:15,column:2},end:{line:20,column:11}},4:{start:{line:24,column:0},end:{line:1182,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:5,column:6},end:{line:21,column:1}},line:5}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/DetailPanel.tsx"],names:["DetailPanel","table","row","options","renderDetailPanel","getState","width","getVisibleCells","length"],mappings:"AAiBM;AAfN,MAAMA,cAAc,CAAK;AAAA,EACvBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,IAAkB;AAAA,IAC7BC;AAAAA,EACF,IAAIJ;AACJ,QAAM;AAAA,IAAEK;AAAAA,EAAM,IAAID,SAAS;AAE3B,SACE,oBAAC,QAAG,WAAU,wDACZ,8BAAC,QACC,WAAU,8BACV,SAASH,IAAIK,gBAAgB,EAAEC,QAC/B,OAAO;AAAA,IAAEF;AAAAA,EAAM,GAEdF,4BAAkB;AAAA,IAAEH;AAAAA,IAAOC;AAAAA,EAAI,CAAC,GACnC,GACF;AAEJ;AAEA,eAAeF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"beb15f05043679bde94b0b4cdca0688ac8b3402c"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return Ce=function(){return r},r}Ce();Ce().s[0]++;const Yn=({table:e,row:a})=>{Ce().f[0]++;const{options:{renderDetailPanel:n},getState:t}=(Ce().s[1]++,e),{width:l}=(Ce().s[2]++,t());return Ce().s[3]++,s.jsx("tr",{className:"ds-table-body-row ds-table-row ds-table-detail-panel",children:s.jsx("td",{className:"ds-table-detail-panel-cell",colSpan:a.getVisibleCells().length,style:{width:l},children:n({table:e,row:a})})})};Ce().s[4]++;Yn.__docgenInfo={description:"",methods:[],displayName:"DetailPanel",props:{row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ke(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/utils.ts",a="349f6d187e5d8fd62257cc8b46e42bb3cfd1ce99",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/utils.ts",statementMap:{0:{start:{line:1,column:37},end:{line:1,column:87}},1:{start:{line:1,column:50},end:{line:1,column:87}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:37},end:{line:1,column:38}},loc:{start:{line:1,column:50},end:{line:1,column:87}},line:1}},branchMap:{0:{loc:{start:{line:1,column:50},end:{line:1,column:87}},type:"cond-expr",locations:[{start:{line:1,column:75},end:{line:1,column:82}},{start:{line:1,column:85},end:{line:1,column:87}}],line:1}},s:{0:0,1:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/utils.ts"],names:["parseFromValuesOrFunc","fn","arg","Function"],mappings:"AAAO,aAAMA,wBAAwB,CACnCC,IACAC,QACmBD,cAAcE,WAAWF,GAAGC,GAAG,IAAID;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"349f6d187e5d8fd62257cc8b46e42bb3cfd1ce99"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ke=function(){return r},r}ke();ke().s[0]++;const Qn=(e,a)=>(ke().f[0]++,ke().s[1]++,e instanceof Function?(ke().b[0][0]++,e(a)):(ke().b[0][1]++,e));function $(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyCell.tsx",a="117c1d3a97530b78234ea8b5759e44e15ba5eb4d",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyCell.tsx",statementMap:{0:{start:{line:8,column:17},end:{line:39,column:1}},1:{start:{line:14,column:6},end:{line:14,column:10}},2:{start:{line:17,column:6},end:{line:17,column:12}},3:{start:{line:20,column:6},end:{line:20,column:22}},4:{start:{line:23,column:6},end:{line:23,column:22}},5:{start:{line:24,column:44},end:{line:24,column:57}},6:{start:{line:25,column:2},end:{line:29,column:56}},7:{start:{line:26,column:4},end:{line:26,column:52}},8:{start:{line:26,column:45},end:{line:26,column:52}},9:{start:{line:27,column:17},end:{line:27,column:33}},10:{start:{line:28,column:4},end:{line:28,column:120}},11:{start:{line:30,column:2},end:{line:38,column:158}},12:{start:{line:42,column:0},end:{line:1280,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:17},end:{line:8,column:18}},loc:{start:{line:11,column:6},end:{line:39,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:25,column:12},end:{line:25,column:13}},loc:{start:{line:25,column:18},end:{line:29,column:3}},line:25}},branchMap:{0:{loc:{start:{line:26,column:4},end:{line:26,column:52}},type:"if",locations:[{start:{line:26,column:4},end:{line:26,column:52}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:26},1:{loc:{start:{line:26,column:8},end:{line:26,column:43}},type:"binary-expr",locations:[{start:{line:26,column:8},end:{line:26,column:18}},{start:{line:26,column:22},end:{line:26,column:43}}],line:26},2:{loc:{start:{line:28,column:21},end:{line:28,column:118}},type:"cond-expr",locations:[{start:{line:28,column:51},end:{line:28,column:59}},{start:{line:28,column:62},end:{line:28,column:118}}],line:28},3:{loc:{start:{line:38,column:16},end:{line:38,column:154}},type:"cond-expr",locations:[{start:{line:38,column:44},end:{line:38,column:83}},{start:{line:38,column:86},end:{line:38,column:154}}],line:38}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyCell.tsx"],names:["useEffect","useState","clx","getCommonCellStyles","Skeleton","parseFromValuesOrFunc","displayColumnIds","BodyCell","cell","table","column","getIsPinned","columnDefType","columnDef","isLoading","getState","skeletonWidth","setSkeletonWidth","size","getSize","Math","round","random","id","select","expand","actions","getContext"],mappings:"AAgDQ;AAhDR,SAASA,WAAWC,gBAAgB;AACpC,OAAOC,SAAS;AAEhB,SAASC,2BAA2B;AAEpC,OAAOC,cAAc;AACrB,SAASC,6BAA6B;AACtC,SAASC,wBAAwB;AAEjC,MAAMC,WAAW,CAAK;AAAA,EACpBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAO,IAAIF;AACnB,QAAM;AAAA,IAAEG;AAAAA,EAAY,IAAID;AACxB,QAAM;AAAA,IAAEE;AAAAA,EAAc,IAAIF,OAAOG;AACjC,QAAM;AAAA,IAAEC;AAAAA,EAAU,IAAIL,MAAMM,SAAS;AAErC,QAAM,CAACC,eAAeC,gBAAgB,IAAIhB,SAAS,GAAG;AAEtDD,YAAU,MAAM;AACd,QAAI,CAACc,aAAaE,kBAAkB,IAAK;AACzC,UAAME,OAAOR,OAAOS,QAAQ;AAC5BF,qBACEL,kBAAkB,YACdM,OAAO,IACPE,KAAKC,MAAMD,KAAKE,OAAO,KAAKJ,OAAOA,OAAO,KAAKA,OAAO,CAAC,CAC7D;AAAA,EACF,GAAG,CAACR,QAAQE,eAAeE,WAAWE,aAAa,CAAC;AAEpD,SACE,oBAAC,QACC,WAAWd,IAAI,oCAAoC;AAAA,IACjD,yBAAyBU,kBAAkB;AAAA,IAC3C,wBAAwBF,OAAOa,OAAOjB,iBAAiBkB;AAAAA,IACvD,wBAAwBd,OAAOa,OAAOjB,iBAAiBmB;AAAAA,IACvD,yBAAyBf,OAAOa,OAAOjB,iBAAiBoB;AAAAA,EAC1D,CAAC,GACD,eAAaf,YAAY,GACzB,OAAOR,oBAAoB;AAAA,IACzBM;AAAAA,IACAC;AAAAA,EACF,CAAC,GAEAI,sBACC,oBAAC,YAAS,OAAOE,eAAc,IAE/BX,sBAAsBG,KAAKE,OAAOG,UAAUL,MAAMA,KAAKmB,WAAW,CAAC,GAEvE;AAEJ;AAEA,eAAepB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"117c1d3a97530b78234ea8b5759e44e15ba5eb4d"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return $=function(){return r},r}$();$().s[0]++;const zn=({cell:e,table:a})=>{$().f[0]++;const{column:n}=($().s[1]++,e),{getIsPinned:t}=($().s[2]++,n),{columnDefType:l}=($().s[3]++,n.columnDef),{isLoading:o}=($().s[4]++,a.getState()),[r,u]=($().s[5]++,P.useState(100));return $().s[6]++,P.useEffect(()=>{if($().f[1]++,$().s[7]++,$().b[1][0]++,!o||($().b[1][1]++,r!==100)){$().b[0][0]++,$().s[8]++;return}else $().b[0][1]++;const i=($().s[9]++,n.getSize());$().s[10]++,u(l==="display"?($().b[2][0]++,i/2):($().b[2][1]++,Math.round(Math.random()*(i-i/3)+i/3)))},[n,l,o,r]),$().s[11]++,s.jsx("td",{className:je("ds-table-body-cell ds-table-cell",{"ds-table-cell-display":l==="display","ds-table-cell-select":n.id===ee.select,"ds-table-cell-expand":n.id===ee.expand,"ds-table-cell-actions":n.id===ee.actions}),"data-pinned":t(),style:Pn({table:a,column:n}),children:o?($().b[3][0]++,s.jsx(rn,{width:r})):($().b[3][1]++,Qn(e.column.columnDef.cell,e.getContext()))})};$().s[12]++;zn.__docgenInfo={description:"",methods:[],displayName:"BodyCell",props:{cell:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"getVisibleCells",value:{name:"signature",type:"function",raw:"() => DatatableCell<D>[]",signature:{arguments:[],return:{name:"Array",elements:[{name:"DatatableCell"}],raw:"DatatableCell<D>[]"}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function L(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyRow.tsx",a="bab7829a612101111dbc721cbc753e883246f4e5",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyRow.tsx",statementMap:{0:{start:{line:4,column:16},end:{line:38,column:1}},1:{start:{line:15,column:6},end:{line:15,column:11}},2:{start:{line:21,column:6},end:{line:21,column:9}},3:{start:{line:24,column:6},end:{line:24,column:16}},4:{start:{line:25,column:24},end:{line:25,column:56}},5:{start:{line:26,column:2},end:{line:37,column:7}},6:{start:{line:28,column:6},end:{line:34,column:7}},7:{start:{line:29,column:8},end:{line:29,column:27}},8:{start:{line:30,column:8},end:{line:33,column:11}},9:{start:{line:35,column:65},end:{line:35,column:104}},10:{start:{line:41,column:0},end:{line:1199,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:16},end:{line:4,column:17}},loc:{start:{line:7,column:6},end:{line:38,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:27,column:180},end:{line:27,column:181}},loc:{start:{line:27,column:186},end:{line:35,column:5}},line:27},2:{name:"(anonymous_2)",decl:{start:{line:35,column:39},end:{line:35,column:40}},loc:{start:{line:35,column:65},end:{line:35,column:104}},line:35}},branchMap:{0:{loc:{start:{line:27,column:92},end:{line:27,column:135}},type:"cond-expr",locations:[{start:{line:27,column:108},end:{line:27,column:126}},{start:{line:27,column:129},end:{line:27,column:135}}],line:27},1:{loc:{start:{line:28,column:6},end:{line:34,column:7}},type:"if",locations:[{start:{line:28,column:6},end:{line:34,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:28},2:{loc:{start:{line:36,column:4},end:{line:36,column:92}},type:"binary-expr",locations:[{start:{line:36,column:4},end:{line:36,column:21}},{start:{line:36,column:25},end:{line:36,column:40}},{start:{line:36,column:60},end:{line:36,column:92}}],line:36}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/BodyRow.tsx"],names:["DetailPanel","BodyCell","BodyRow","row","table","getState","options","renderDetailPanel","onRowClick","setActiveRowId","getVisibleCells","getIsExpanded","getIsSelected","id","activeRowId","hasOnRowClick","undefined","map","cell"],mappings:"AAqBI,mBAaM,KAbN;AApBJ,OAAOA,iBAAiB;AACxB,OAAOC,cAAc;AAErB,MAAMC,UAAU,CAAK;AAAA,EACnBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,MAAmBC;AAAAA,IAAW;AAAA,IACzCC;AAAAA,EACF,IAAIL;AACJ,QAAM;AAAA,IAAEM;AAAAA,IAAiBC;AAAAA,IAAeC;AAAAA,IAAeC;AAAAA,EAAG,IAAIV;AAC9D,QAAM;AAAA,IAAEW;AAAAA,EAAY,IAAIT,SAAS;AACjC,QAAMU,gBAAgB,OAAOP,eAAe;AAE5C,SACE,iCACE;AAAA,wBAAC,QACC,WAAU,kCACV,eAAaO,gBAAgBF,OAAOC,cAAcE,QAClD,iBAAeJ,cAAc,GAC7B,SAAS,MAAM;AACb,UAAIG,eAAe;AACjBN,uBAAeI,EAAE;AACjBL,mBAAW;AAAA,UAAEL;AAAAA,UAAKC;AAAAA,QAAM,CAAC;AAAA,MAC3B;AAAA,IACF,GAECM,0BAAgB,EAAEO,IAAKC,UACtB,oBAAC,YAAuB,MAAY,SAArBA,KAAKL,GACrB,GACH;AAAA,IACCN,qBAAqBI,cAAc,KAClC,oBAAC,eAAY,KAAU,OACxB;AAAA,KACH;AAEJ;AAEA,eAAeT;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bab7829a612101111dbc721cbc753e883246f4e5"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return L=function(){return r},r}L();L().s[0]++;const $n=({row:e,table:a})=>{L().f[0]++;const{getState:n,options:{renderDetailPanel:t,onRowClick:l},setActiveRowId:o}=(L().s[1]++,a),{getVisibleCells:r,getIsExpanded:u,getIsSelected:i,id:m}=(L().s[2]++,e),{activeRowId:A}=(L().s[3]++,n()),p=(L().s[4]++,typeof l=="function");return L().s[5]++,s.jsxs(s.Fragment,{children:[s.jsx("tr",{className:"ds-table-body-row ds-table-row","data-active":p?(L().b[0][0]++,m===A):(L().b[0][1]++,void 0),"data-selected":i(),onClick:()=>{L().f[1]++,L().s[6]++,p?(L().b[1][0]++,L().s[7]++,o(m),L().s[8]++,l({row:e,table:a})):L().b[1][1]++},children:r().map(d=>(L().f[2]++,L().s[9]++,s.jsx(zn,{cell:d,table:a},d.id)))}),(L().b[2][0]++,t&&(L().b[2][1]++,u())&&(L().b[2][2]++,s.jsx(Yn,{row:e,table:a})))]})};L().s[10]++;$n.__docgenInfo={description:"",methods:[],displayName:"BodyRow",props:{row:{required:!0,tsType:{name:"intersection",raw:`Omit<Row<D>, 'getVisibleCells'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"getValue",value:{name:"Getter",elements:[{name:"unknown"}],raw:"Getter<V>",required:!0}},{key:"renderValue",value:{name:"Getter",elements:[{name:"union",raw:"V | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"Getter<V | null>",required:!0}},{key:"row",value:{name:"DatatableRow",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableCell<D>[]"}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ue(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/Body.tsx",a="9123f63b30016638761285470f29774b836a065d",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/Body.tsx",statementMap:{0:{start:{line:8,column:13},end:{line:11,column:60}},1:{start:{line:12,column:13},end:{line:44,column:1}},2:{start:{line:21,column:6},end:{line:21,column:11}},3:{start:{line:24,column:6},end:{line:24,column:19}},4:{start:{line:27,column:6},end:{line:27,column:26}},5:{start:{line:28,column:2},end:{line:43,column:96}},6:{start:{line:43,column:55},end:{line:43,column:91}},7:{start:{line:47,column:0},end:{line:64,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:13},end:{line:12,column:14}},loc:{start:{line:14,column:6},end:{line:44,column:1}},line:14},1:{name:"(anonymous_1)",decl:{start:{line:43,column:30},end:{line:43,column:31}},loc:{start:{line:43,column:55},end:{line:43,column:91}},line:43}},branchMap:{0:{loc:{start:{line:28,column:78},end:{line:43,column:92}},type:"cond-expr",locations:[{start:{line:28,column:109},end:{line:43,column:18}},{start:{line:43,column:21},end:{line:43,column:92}}],line:28},1:{loc:{start:{line:32,column:131},end:{line:43,column:6}},type:"binary-expr",locations:[{start:{line:32,column:131},end:{line:34,column:4}},{start:{line:34,column:24},end:{line:43,column:6}}],line:32}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/body/Body.tsx"],names:["styled","Padbox","Stack","Surface","Paragraph","Text","BodyRow","useSafeTranslation","List","ul","withConfig","displayName","componentId","Body","table","getRowModel","getVisibleLeafColumns","options","renderNoDataFallback","rows","t","length","display","flex","map","row","id"],mappings:"AAgCoB,cAKE,YALF;AAhCpB,OAAOA,YAAY;AAEnB,SAASC,QAAQC,OAAOC,eAAe;AACvC,SAASC,iBAAiB;AAC1B,SAASC,YAAY;AAErB,OAAOC,aAAa;AACpB,SAASC,0BAA0B;AAEnC,MAAMC,OAAOR,OAAOS,GAAEC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAGrB,EAAA,CAAA,sDAAA,CAAA;AAED,MAAMC,OAAO,CAAK;AAAA,EAAEC;AAAuC,MAAM;AAC/D,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,IAAqB;AAAA,EAClC,IAAIJ;AACJ,QAAM;AAAA,IAAEK;AAAAA,EAAK,IAAIJ,YAAY;AAC7B,QAAM;AAAA,IAAEK;AAAAA,EAAE,IAAIb,mBAAmB;AAEjC,SACE,oBAAC,WAAM,WAAU,iBACd,WAACY,KAAKE,SACL,oBAAC,QAAG,OAAO;AAAA,IAAEC,SAAS;AAAA,EAAO,GAC3B,8BAAC,QAAG,SAASN,sBAAsB,EAAEK,QAAQ,OAAO;AAAA,IAAEE,MAAM;AAAA,EAAE,GAC5D,8BAAC,WAAQ,QAAO,QACd,8BAAC,UAAO,aAAY,MACjBL,iCAAuB;AAAA,IAAEJ;AAAAA,EAAM,CAAC,KAC/B,qBAAC,SAAM,KAAI,MACT;AAAA,wBAAC,QAAK,IAAG,KAAI,MAAK,MAAK,QAAM,MAC1BM,YAAE,8BAA8B,GACnC;AAAA,IACA,qBAAC,aAAU,IAAG,OAAM,SAAQ,aACzBA;AAAAA,QAAE,yCAAyC;AAAA,MAC5C,qBAAC,QACC;AAAA,4BAAC,QAAIA,YAAE,sCAAsC,GAAE;AAAA,QAC/C,oBAAC,QACEA,YAAE,2CAA2C,GAChD;AAAA,SACF;AAAA,OACF;AAAA,KACF,GAEJ,GACF,GACF,GACF,IAEAD,KAAKK,IAAKC,SAAQ,oBAAC,WAAqB,KAAU,SAAlBA,IAAIC,GAA8B,GAEtE;AAEJ;AAEA,eAAeb;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9123f63b30016638761285470f29774b836a065d"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ue=function(){return r},r}ue();const Ut=(ue().s[0]++,he.ul.withConfig({displayName:"Body__List",componentId:"sc-u1ch7l-0"})(["list-style-type:initial;padding-inline-start:1.5rem;"]));ue().s[1]++;const Wn=({table:e})=>{ue().f[0]++;const{getRowModel:a,getVisibleLeafColumns:n,options:{renderNoDataFallback:t}}=(ue().s[2]++,e),{rows:l}=(ue().s[3]++,a()),{t:o}=(ue().s[4]++,ce());return ue().s[5]++,s.jsx("tbody",{className:"ds-table-body",children:l.length?(ue().b[0][1]++,l.map(r=>(ue().f[1]++,ue().s[6]++,s.jsx($n,{row:r,table:e},r.id)))):(ue().b[0][0]++,s.jsx("tr",{style:{display:"flex"},children:s.jsx("td",{colSpan:n().length,style:{flex:1},children:s.jsx(un,{radius:"none",children:s.jsx(Be,{paddingSize:"xl",children:(ue().b[1][0]++,(t==null?void 0:t({table:e}))??(ue().b[1][1]++,s.jsxs(Oe,{gap:"sm",children:[s.jsx(Ue,{as:"p",size:"lg",isBold:!0,children:o("sscds|datatable.noData.title")}),s.jsxs(pa,{as:"div",variant:"secondary",children:[o("sscds|datatable.noData.list.description"),s.jsxs(Ut,{children:[s.jsx("li",{children:o("sscds|datatable.noData.list.emptySet")}),s.jsx("li",{children:o("sscds|datatable.noData.list.activeFilters")})]})]})]})))})})})}))})};ue().s[7]++;Wn.__docgenInfo={description:"",methods:[],displayName:"Body",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function h(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/ColumnActionsMenu.tsx",a="1b3a557ecbd0ad9f2e1f6243931bdaec872f36be",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/ColumnActionsMenu.tsx",statementMap:{0:{start:{line:6,column:26},end:{line:54,column:1}},1:{start:{line:21,column:6},end:{line:21,column:11}},2:{start:{line:24,column:6},end:{line:24,column:12}},3:{start:{line:28,column:6},end:{line:28,column:16}},4:{start:{line:31,column:6},end:{line:31,column:26}},5:{start:{line:32,column:25},end:{line:32,column:49}},6:{start:{line:33,column:21},end:{line:35,column:3}},7:{start:{line:34,column:4},end:{line:34,column:33}},8:{start:{line:36,column:26},end:{line:38,column:3}},9:{start:{line:37,column:4},end:{line:37,column:26}},10:{start:{line:39,column:27},end:{line:41,column:3}},11:{start:{line:40,column:4},end:{line:40,column:35}},12:{start:{line:42,column:26},end:{line:44,column:3}},13:{start:{line:43,column:4},end:{line:43,column:20}},14:{start:{line:45,column:32},end:{line:51,column:3}},15:{start:{line:46,column:4},end:{line:49,column:8}},16:{start:{line:46,column:34},end:{line:49,column:5}},17:{start:{line:50,column:4},end:{line:50,column:23}},18:{start:{line:52,column:28},end:{line:52,column:2476}},19:{start:{line:52,column:232},end:{line:52,column:249}},20:{start:{line:52,column:501},end:{line:52,column:517}},21:{start:{line:52,column:1649},end:{line:52,column:1672}},22:{start:{line:52,column:1907},end:{line:52,column:1929}},23:{start:{line:52,column:2346},end:{line:52,column:2369}},24:{start:{line:53,column:2},end:{line:53,column:268}},25:{start:{line:57,column:0},end:{line:1211,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:26},end:{line:6,column:27}},loc:{start:{line:9,column:6},end:{line:54,column:1}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:33,column:21},end:{line:33,column:22}},loc:{start:{line:33,column:33},end:{line:35,column:3}},line:33},2:{name:"(anonymous_2)",decl:{start:{line:36,column:26},end:{line:36,column:27}},loc:{start:{line:36,column:32},end:{line:38,column:3}},line:36},3:{name:"(anonymous_3)",decl:{start:{line:39,column:27},end:{line:39,column:28}},loc:{start:{line:39,column:33},end:{line:41,column:3}},line:39},4:{name:"(anonymous_4)",decl:{start:{line:42,column:26},end:{line:42,column:27}},loc:{start:{line:42,column:35},end:{line:44,column:3}},line:42},5:{name:"(anonymous_5)",decl:{start:{line:45,column:32},end:{line:45,column:33}},loc:{start:{line:45,column:38},end:{line:51,column:3}},line:45},6:{name:"(anonymous_6)",decl:{start:{line:46,column:24},end:{line:46,column:25}},loc:{start:{line:46,column:34},end:{line:49,column:5}},line:46},7:{name:"(anonymous_7)",decl:{start:{line:52,column:226},end:{line:52,column:227}},loc:{start:{line:52,column:232},end:{line:52,column:249}},line:52},8:{name:"(anonymous_8)",decl:{start:{line:52,column:495},end:{line:52,column:496}},loc:{start:{line:52,column:501},end:{line:52,column:517}},line:52},9:{name:"(anonymous_9)",decl:{start:{line:52,column:1643},end:{line:52,column:1644}},loc:{start:{line:52,column:1649},end:{line:52,column:1672}},line:52},10:{name:"(anonymous_10)",decl:{start:{line:52,column:1901},end:{line:52,column:1902}},loc:{start:{line:52,column:1907},end:{line:52,column:1929}},line:52},11:{name:"(anonymous_11)",decl:{start:{line:52,column:2340},end:{line:52,column:2341}},loc:{start:{line:52,column:2346},end:{line:52,column:2369}},line:52}},branchMap:{0:{loc:{start:{line:52,column:32},end:{line:52,column:999}},type:"cond-expr",locations:[{start:{line:52,column:71},end:{line:52,column:994}},{start:{line:52,column:997},end:{line:52,column:999}}],line:52},1:{loc:{start:{line:52,column:32},end:{line:52,column:68}},type:"binary-expr",locations:[{start:{line:52,column:32},end:{line:52,column:45}},{start:{line:52,column:49},end:{line:52,column:68}}],line:52},2:{loc:{start:{line:52,column:608},end:{line:52,column:885}},type:"binary-expr",locations:[{start:{line:52,column:608},end:{line:52,column:638}},{start:{line:52,column:658},end:{line:52,column:885}}],line:52},3:{loc:{start:{line:52,column:887},end:{line:52,column:993}},type:"cond-expr",locations:[{start:{line:52,column:941},end:{line:52,column:984}},{start:{line:52,column:987},end:{line:52,column:993}}],line:52},4:{loc:{start:{line:52,column:887},end:{line:52,column:922}},type:"binary-expr",locations:[{start:{line:52,column:887},end:{line:52,column:899}},{start:{line:52,column:903},end:{line:52,column:922}}],line:52},5:{loc:{start:{line:52,column:1004},end:{line:52,column:1436}},type:"cond-expr",locations:[{start:{line:52,column:1042},end:{line:52,column:1431}},{start:{line:52,column:1434},end:{line:52,column:1436}}],line:52},6:{loc:{start:{line:52,column:1004},end:{line:52,column:1039}},type:"binary-expr",locations:[{start:{line:52,column:1004},end:{line:52,column:1016}},{start:{line:52,column:1020},end:{line:52,column:1039}}],line:52},7:{loc:{start:{line:52,column:1297},end:{line:52,column:1430}},type:"cond-expr",locations:[{start:{line:52,column:1378},end:{line:52,column:1421}},{start:{line:52,column:1424},end:{line:52,column:1430}}],line:52},8:{loc:{start:{line:52,column:1297},end:{line:52,column:1359}},type:"binary-expr",locations:[{start:{line:52,column:1297},end:{line:52,column:1310}},{start:{line:52,column:1314},end:{line:52,column:1334}},{start:{line:52,column:1338},end:{line:52,column:1359}}],line:52},9:{loc:{start:{line:52,column:1441},end:{line:52,column:2140}},type:"cond-expr",locations:[{start:{line:52,column:1485},end:{line:52,column:2135}},{start:{line:52,column:2138},end:{line:52,column:2140}}],line:52},10:{loc:{start:{line:52,column:1441},end:{line:52,column:1482}},type:"binary-expr",locations:[{start:{line:52,column:1441},end:{line:52,column:1460}},{start:{line:52,column:1464},end:{line:52,column:1482}}],line:52},11:{loc:{start:{line:52,column:2018},end:{line:52,column:2134}},type:"cond-expr",locations:[{start:{line:52,column:2082},end:{line:52,column:2125}},{start:{line:52,column:2128},end:{line:52,column:2134}}],line:52},12:{loc:{start:{line:52,column:2018},end:{line:52,column:2063}},type:"binary-expr",locations:[{start:{line:52,column:2018},end:{line:52,column:2038}},{start:{line:52,column:2042},end:{line:52,column:2063}}],line:52},13:{loc:{start:{line:52,column:2145},end:{line:52,column:2459}},type:"cond-expr",locations:[{start:{line:52,column:2193},end:{line:52,column:2454}},{start:{line:52,column:2457},end:{line:52,column:2459}}],line:52},14:{loc:{start:{line:52,column:2145},end:{line:52,column:2190}},type:"binary-expr",locations:[{start:{line:52,column:2145},end:{line:52,column:2165}},{start:{line:52,column:2169},end:{line:52,column:2190}}],line:52}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/menus/ColumnActionsMenu.tsx"],names:["DropdownMenu","MenuContent","MenuItem","MenuSeparator","getHidableColumns","useSafeTranslation","ColumnActionsMenu","header","table","getState","options","enableColumnOrdering","enableColumnPinning","enableColumnResizing","enableHiding","enableSorting","enableSortingRemoval","setColumnSizingInfo","column","columnSizing","isFullscreenMode","t","hidableColumns","handleSort","isDesc","toggleSorting","handleClearSort","clearSorting","handleHideColumn","toggleVisibility","handlePinColumn","dir","pin","handleResetColumnSize","old","isResizingColumn","resetSize","columnActionsMenu","getCanSort","getIsSorted","getCanHide","undefined","length","getCanPin","getIsPinned","getCanResize","id","filter","Boolean"],mappings:"AA4DU;AA3DV,YAAYA,kBAAkB;AAG9B,SACEC,aACAC,UACAC,qBACK;AACP,SAASC,yBAAyB;AAClC,SAASC,0BAA0B;AAEnC,MAAMC,oBAAoB,CAAK;AAAA,EAC7BC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC;AAAAA,IACAC,SAAS;AAAA,MACPC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,IACF;AAAA,IACAC;AAAAA,EACF,IAAIT;AACJ,QAAM;AAAA,IAAEU;AAAAA,EAAO,IAAIX;AACnB,QAAM;AAAA,IAAEY;AAAAA,IAAcC;AAAAA,EAAiB,IAAIX,SAAS;AACpD,QAAM;AAAA,IAAEY;AAAAA,EAAE,IAAIhB,mBAAmB;AAEjC,QAAMiB,iBAAiBlB,kBAAkBI,KAAK;AAE9C,QAAMe,aAAaA,CAACC,WAAoB;AACtCN,WAAOO,cAAcD,MAAM;AAAA,EAC7B;AACA,QAAME,kBAAkBA,MAAM;AAC5BR,WAAOS,aAAa;AAAA,EACtB;AACA,QAAMC,mBAAmBA,MAAM;AAC7BV,WAAOW,iBAAiB,KAAK;AAAA,EAC/B;AACA,QAAMC,kBAAkBA,CAACC,QAA+B;AACtDb,WAAOc,IAAID,GAAG;AAAA,EAChB;AACA,QAAME,wBAAwBA,MAAM;AAClChB,wBAAqBiB,UAAS;AAAA,MAC5B,GAAGA;AAAAA,MACHC,kBAAkB;AAAA,IACpB,EAAE;AACFjB,WAAOkB,UAAU;AAAA,EACnB;AAEA,QAAMC,oBAAoB,CACxB,GAAItB,iBAAiBG,OAAOoB,WAAW,IACnC,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,WACT,YAAYpB,OAAOqB,YAAY,MAAM,OACrC,SAAS,MAAMhB,WAAW,KAAK,GAE9BF,YAAE,8CAA8C,KAN7C,qBAON,GACA,oBAAC,YAEC,WAAU,qCACV,UAAS,aACT,YAAYH,OAAOqB,YAAY,MAAM,QACrC,SAAS,MAAMhB,WAAW,IAAI,GAE7BF,YAAE,+CAA+C,KAN9C,sBAON,GACAL,yBAAyB,SACvB,oBAAC,YAEC,WAAU,qCACV,UAAS,SACT,YAAY,CAACE,OAAOqB,YAAY,GAChC,SAASb,iBAERL,YAAE,0CAA0C,KANzC,uBAON,GAEFP,gBAAgBI,OAAOsB,WAAW,IAChC,oBAAC,mBAAkB,mBAAmB,IACpCC,MAAS,IAEf,CAAE,GACN,GAAI3B,gBAAgBI,OAAOsB,WAAW,IAClC,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,aACT,YAAYlB,eAAeoB,WAAW,GACtC,SAASd,kBAERP,YAAE,0CAA0C,KANzC,qBAON,GACA,CAACP,gBAAgB,CAACF,uBAAuB,CAACD,uBACxC,oBAAC,mBAAkB,mBAAsB,IACvC8B,MAAS,IAEf,CAAE,GACN,GAAI7B,uBAAuBM,OAAOyB,UAAU,IACxC,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,aACT,YAAYzB,OAAO0B,YAAY,MAAM,QACrC,SAAS,MAAMd,gBAAgB,MAAM,GAEpCT,YAAE,2CAA2C,KAN1C,qBAON,GACA,oBAAC,YAEC,WAAU,qCACV,UAAS,SACT,YAAY,CAACH,OAAO0B,YAAY,GAChC,SAAS,MAAMd,gBAAgB,KAAK,GAEnCT,YAAE,6CAA6C,KAN5C,sBAON,GACAR,wBAAwBK,OAAO2B,aAAa,IAC1C,oBAAC,mBAAkB,mBAAsB,IACvCJ,MAAS,IAEf,CAAE,GACN,GAAI5B,wBAAwBK,OAAO2B,aAAa,IAC5C,CACE,oBAAC,YAEC,WAAU,qCACV,UAAS,SACT,YAAY,CAAC1B,aAAaD,OAAO4B,EAAE,GACnC,SAAS,MAAMb,sBAAsB,GAEpCZ,YAAE,yCAAyC,KANxC,uBAON,CAAW,IAEb,CAAA,CAAG,EACP0B,OAAOC,OAAO;AAEhB,SACE,oBAAC,aAAa,QAAb,EACC,8BAAC,eACC,eAAe5B,kBACf,OAAM,SACN,WAAU,wCACV,kBAAkB,IAClB,YAAY,GAEXiB,6BACH,GACF;AAEJ;AACA,eAAe/B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1b3a557ecbd0ad9f2e1f6243931bdaec872f36be"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return h=function(){return r},r}h();h().s[0]++;const Ln=({header:e,table:a})=>{h().f[0]++;const{getState:n,options:{enableColumnOrdering:t,enableColumnPinning:l,enableColumnResizing:o,enableHiding:r,enableSorting:u,enableSortingRemoval:i},setColumnSizingInfo:m}=(h().s[1]++,a),{column:A}=(h().s[2]++,e),{columnSizing:p,isFullscreenMode:d}=(h().s[3]++,n()),{t:c}=(h().s[4]++,ce()),g=(h().s[5]++,Un(a));h().s[6]++;const C=O=>{h().f[1]++,h().s[7]++,A.toggleSorting(O)};h().s[8]++;const v=()=>{h().f[2]++,h().s[9]++,A.clearSorting()};h().s[10]++;const y=()=>{h().f[3]++,h().s[11]++,A.toggleVisibility(!1)};h().s[12]++;const E=O=>{h().f[4]++,h().s[13]++,A.pin(O)};h().s[14]++;const I=()=>{h().f[5]++,h().s[15]++,m(O=>(h().f[6]++,h().s[16]++,{...O,isResizingColumn:!1})),h().s[17]++,A.resetSize()},U=(h().s[18]++,[...(h().b[1][0]++,u&&(h().b[1][1]++,A.getCanSort())?(h().b[0][0]++,[s.jsx(pe,{className:"ds-table-column-actions-menu-item",iconName:"sort-up",isDisabled:A.getIsSorted()==="asc",onClick:()=>(h().f[7]++,h().s[19]++,C(!1)),children:c("sscds|datatable.columnActions.sort.ascending")},"col-action-sort-asc"),s.jsx(pe,{className:"ds-table-column-actions-menu-item",iconName:"sort-down",isDisabled:A.getIsSorted()==="desc",onClick:()=>(h().f[8]++,h().s[20]++,C(!0)),children:c("sscds|datatable.columnActions.sort.descending")},"col-action-sort-desc"),(h().b[2][0]++,i!==!1&&(h().b[2][1]++,s.jsx(pe,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!A.getIsSorted(),onClick:v,children:c("sscds|datatable.columnActions.sort.clear")},"col-action-sort-reset"))),(h().b[4][0]++,r&&(h().b[4][1]++,A.getCanHide())?(h().b[3][0]++,s.jsx(Me,{},"col-action-sep-01")):(h().b[3][1]++,void 0))]):(h().b[0][1]++,[])),...(h().b[6][0]++,r&&(h().b[6][1]++,A.getCanHide())?(h().b[5][0]++,[s.jsx(pe,{className:"ds-table-column-actions-menu-item",iconName:"eye-slash",isDisabled:g.length===1,onClick:y,children:c("sscds|datatable.columnActions.hideColumn")},"col-action-hide-col"),(h().b[8][0]++,!r&&(h().b[8][1]++,!l)&&(h().b[8][2]++,!t)?(h().b[7][0]++,s.jsx(Me,{},"col-action-sep-02")):(h().b[7][1]++,void 0))]):(h().b[5][1]++,[])),...(h().b[10][0]++,l&&(h().b[10][1]++,A.getCanPin())?(h().b[9][0]++,[s.jsx(pe,{className:"ds-table-column-actions-menu-item",iconName:"thumbtack",isDisabled:A.getIsPinned()==="left",onClick:()=>(h().f[9]++,h().s[21]++,E("left")),children:c("sscds|datatable.columnActions.pinning.pin")},"col-action-pin-left"),s.jsx(pe,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!A.getIsPinned(),onClick:()=>(h().f[10]++,h().s[22]++,E(!1)),children:c("sscds|datatable.columnActions.pinning.unpin")},"col-action-pin-reset"),(h().b[12][0]++,o&&(h().b[12][1]++,A.getCanResize())?(h().b[11][0]++,s.jsx(Me,{},"col-action-sep-04")):(h().b[11][1]++,void 0))]):(h().b[9][1]++,[])),...(h().b[14][0]++,o&&(h().b[14][1]++,A.getCanResize())?(h().b[13][0]++,[s.jsx(pe,{className:"ds-table-column-actions-menu-item",iconName:"times",isDisabled:!p[A.id],onClick:()=>(h().f[11]++,h().s[23]++,I()),children:c("sscds|datatable.columnActions.resetSize")},"col-action-size-reset")]):(h().b[13][1]++,[]))].filter(Boolean));return h().s[24]++,s.jsx(yn,{children:s.jsx(wn,{$isFullscreen:d,align:"start",className:"ds-table-column-actions-menu-content",collisionPadding:10,sideOffset:5,children:U})})};h().s[25]++;Ln.__docgenInfo={description:"",methods:[],displayName:"ColumnActionsMenu",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function se(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellColumnActionsButton.tsx",a="dd02ff5f601dd71906eb543e23e216020a877bef",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellColumnActionsButton.tsx",statementMap:{0:{start:{line:6,column:38},end:{line:24,column:1}},1:{start:{line:12,column:6},end:{line:12,column:12}},2:{start:{line:15,column:6},end:{line:15,column:12}},3:{start:{line:16,column:20},end:{line:16,column:33}},4:{start:{line:19,column:6},end:{line:19,column:26}},5:{start:{line:20,column:2},end:{line:23,column:10}},6:{start:{line:27,column:0},end:{line:1181,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:38},end:{line:6,column:39}},loc:{start:{line:9,column:6},end:{line:24,column:1}},line:9}},branchMap:{0:{loc:{start:{line:21,column:174},end:{line:21,column:257}},type:"cond-expr",locations:[{start:{line:21,column:197},end:{line:21,column:208}},{start:{line:21,column:211},end:{line:21,column:257}}],line:21},1:{loc:{start:{line:21,column:211},end:{line:21,column:257}},type:"cond-expr",locations:[{start:{line:21,column:233},end:{line:21,column:242}},{start:{line:21,column:245},end:{line:21,column:257}}],line:21}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellColumnActionsButton.tsx"],names:["DropdownMenu","ColumnActionsMenu","IconButton","useSafeTranslation","HeaderCellColumnActionsButton","header","table","column","getIsSorted","direction","t"],mappings:"AAoBM,SAEI,KAFJ;AApBN,YAAYA,kBAAkB;AAG9B,OAAOC,uBAAuB;AAC9B,OAAOC,gBAAgB;AACvB,SAASC,0BAA0B;AAEnC,MAAMC,gCAAgC,CAAK;AAAA,EACzCC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,EAAO,IAAIF;AACnB,QAAM;AAAA,IAAEG;AAAAA,EAAY,IAAID;AACxB,QAAME,YAAYD,YAAY;AAC9B,QAAM;AAAA,IAAEE;AAAAA,EAAE,IAAIP,mBAAmB;AACjC,SACE,oBAAC,SAAI,WAAU,sDACb,+BAAC,aAAa,MAAb,EACC;AAAA,wBAAC,aAAa,SAAb,EAAqB,SAAO,MAC3B,8BAAC,cACC,WAAU,8CACV,UACEM,cAAc,SACV,cACAA,cAAc,QACd,YACA,cAEN,OAAOC,EAAE,uCAAuC,GAChD,MAAK,MACL,SAAQ,SAAO,GAEnB;AAAA,IAEA,oBAAC,qBAAkB,QAAgB,OAAa;AAAA,KAClD,GACF;AAEJ;AAEA,eAAeN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dd02ff5f601dd71906eb543e23e216020a877bef"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return se=function(){return r},r}se();se().s[0]++;const Jn=({header:e,table:a})=>{se().f[0]++;const{column:n}=(se().s[1]++,e),{getIsSorted:t}=(se().s[2]++,n),l=(se().s[3]++,t()),{t:o}=(se().s[4]++,ce());return se().s[5]++,s.jsx("div",{className:"ds-table-header-cell-column-actions-button-wrapper",children:s.jsxs(hn,{children:[s.jsx(vn,{asChild:!0,children:s.jsx(be,{className:"ds-table-header-cell-column-actions-button",iconName:l==="desc"?(se().b[0][0]++,"sort-down"):(se().b[0][1]++,l==="asc"?(se().b[1][0]++,"sort-up"):(se().b[1][1]++,"ellipsis-v")),label:o("sscds|datatable.columnActions.trigger"),size:"sm",variant:"ghost"})}),s.jsx(Ln,{header:e,table:a})]})})};se().s[6]++;Jn.__docgenInfo={description:"",methods:[],displayName:"HeaderCellColumnActionsButton",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function R(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellResizeHandler.tsx",a="9ccd2249acb22289699b73fb7e967f0320a938e8",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellResizeHandler.tsx",statementMap:{0:{start:{line:2,column:32},end:{line:61,column:1}},1:{start:{line:12,column:6},end:{line:12,column:11}},2:{start:{line:17,column:6},end:{line:17,column:12}},3:{start:{line:21,column:6},end:{line:21,column:12}},4:{start:{line:22,column:18},end:{line:22,column:60}},5:{start:{line:23,column:18},end:{line:23,column:60}},6:{start:{line:24,column:32},end:{line:30,column:3}},7:{start:{line:25,column:4},end:{line:28,column:8}},8:{start:{line:25,column:34},end:{line:28,column:5}},9:{start:{line:29,column:4},end:{line:29,column:23}},10:{start:{line:31,column:37},end:{line:45,column:3}},11:{start:{line:34,column:8},end:{line:34,column:9}},12:{start:{line:35,column:4},end:{line:35,column:60}},13:{start:{line:35,column:53},end:{line:35,column:60}},14:{start:{line:36,column:4},end:{line:44,column:7}},15:{start:{line:37,column:23},end:{line:37,column:52}},16:{start:{line:38,column:27},end:{line:38,column:112}},17:{start:{line:39,column:23},end:{line:39,column:107}},18:{start:{line:40,column:6},end:{line:43,column:8}},19:{start:{line:46,column:2},end:{line:60,column:4}},20:{start:{line:64,column:0},end:{line:1218,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:32},end:{line:2,column:33}},loc:{start:{line:5,column:6},end:{line:61,column:1}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:24,column:32},end:{line:24,column:33}},loc:{start:{line:24,column:38},end:{line:30,column:3}},line:24},2:{name:"(anonymous_2)",decl:{start:{line:25,column:24},end:{line:25,column:25}},loc:{start:{line:25,column:34},end:{line:28,column:5}},line:25},3:{name:"(anonymous_3)",decl:{start:{line:31,column:37},end:{line:31,column:38}},loc:{start:{line:31,column:44},end:{line:45,column:3}},line:31},4:{name:"(anonymous_4)",decl:{start:{line:36,column:20},end:{line:36,column:21}},loc:{start:{line:36,column:29},end:{line:44,column:5}},line:36}},branchMap:{0:{loc:{start:{line:22,column:18},end:{line:22,column:60}},type:"binary-expr",locations:[{start:{line:22,column:18},end:{line:22,column:35}},{start:{line:22,column:39},end:{line:22,column:60}}],line:22},1:{loc:{start:{line:23,column:18},end:{line:23,column:60}},type:"binary-expr",locations:[{start:{line:23,column:18},end:{line:23,column:35}},{start:{line:23,column:39},end:{line:23,column:60}}],line:23},2:{loc:{start:{line:35,column:4},end:{line:35,column:60}},type:"if",locations:[{start:{line:35,column:4},end:{line:35,column:60}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},3:{loc:{start:{line:35,column:8},end:{line:35,column:51}},type:"binary-expr",locations:[{start:{line:35,column:8},end:{line:35,column:27}},{start:{line:35,column:31},end:{line:35,column:51}}],line:35},4:{loc:{start:{line:37,column:23},end:{line:37,column:52}},type:"binary-expr",locations:[{start:{line:37,column:23},end:{line:37,column:39}},{start:{line:37,column:43},end:{line:37,column:52}}],line:37},5:{loc:{start:{line:38,column:27},end:{line:38,column:112}},type:"cond-expr",locations:[{start:{line:38,column:49},end:{line:38,column:62}},{start:{line:38,column:65},end:{line:38,column:112}}],line:38},6:{loc:{start:{line:38,column:65},end:{line:38,column:112}},type:"cond-expr",locations:[{start:{line:38,column:88},end:{line:38,column:101}},{start:{line:38,column:104},end:{line:38,column:112}}],line:38},7:{loc:{start:{line:39,column:23},end:{line:39,column:107}},type:"cond-expr",locations:[{start:{line:39,column:49},end:{line:39,column:56}},{start:{line:39,column:59},end:{line:39,column:107}}],line:39},8:{loc:{start:{line:39,column:59},end:{line:39,column:107}},type:"cond-expr",locations:[{start:{line:39,column:85},end:{line:39,column:92}},{start:{line:39,column:95},end:{line:39,column:107}}],line:39}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCellResizeHandler.tsx"],names:["HeaderCellResizeHandler","header","table","setColumnSizingInfo","setColumnSizing","options","defaultColumn","column","getResizeHandler","getSize","id","columnDef","minSize","maxSize","handleColumnSizeReset","old","isResizingColumn","resetSize","handleKeyboardColumnResize","e","key","oldValue","updatedValue","newValue"],mappings:"AAyDI;AArDJ,MAAMA,0BAA0B,CAAK;AAAA,EACnCC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,IAAc;AAAA,EAC3B,IAAIJ;AACJ,QAAM;AAAA,IAAEK;AAAAA,IAAQC;AAAAA,IAAkBC;AAAAA,EAAQ,IAAIR;AAC9C,QAAM;AAAA,IAAES;AAAAA,IAAIC;AAAAA,EAAU,IAAIJ;AAC1B,QAAMK,UAAUD,UAAUC,WAAWN,cAAcM;AACnD,QAAMC,UAAUF,UAAUE,WAAWP,cAAcO;AAEnD,QAAMC,wBAAwBA,MAAM;AAClCX,wBAAqBY,UAAS;AAAA,MAC5B,GAAGA;AAAAA,MACHC,kBAAkB;AAAA,IACpB,EAAE;AACFT,WAAOU,UAAU;AAAA,EACnB;AAEA,QAAMC,6BAA6BA,CAACC,MAAoC;AACtE,UAAM;AAAA,MAAEC;AAAAA,IAAI,IAAID;AAChB,QAAIC,QAAQ,eAAeA,QAAQ,aAAc;AAEjDhB,oBAAiBW,SAAQ;AACvB,YAAMM,WAAWN,MAAMR,OAAOG,EAAE,KAAKD,QAAQ;AAC7C,YAAMa,eACJF,QAAQ,cACJC,WAAW,KACXD,QAAQ,eACRC,WAAW,KACXA;AACN,YAAME,WACJD,gBAAgBT,UACZA,UACAS,gBAAgBV,UAChBA,UACAU;AAEN,aAAO;AAAA,QACL,GAAGP;AAAAA,QACH,CAACL,EAAE,GAAGa;AAAAA,MACR;AAAA,IACF,CAAC;AAAA,EACH;AAEA;AAAA;AAAA,IAEE;AAAA,MAAC;AAAA;AAAA,QACC,oBAAiB;AAAA,QACjB,WAAU;AAAA,QAEV,UAAU;AAAA,QACV,eAAeT;AAAAA,QACf,WAAWI;AAAAA,QACX,aAAaV,iBAAiB;AAAA,QAC9B,cAAcA,iBAAiB;AAAA;AAAA,IAAE;AAAA;AAGvC;AAEA,eAAeR;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9ccd2249acb22289699b73fb7e967f0320a938e8"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return R=function(){return r},r}R();R().s[0]++;const Xn=({header:e,table:a})=>{R().f[0]++;const{setColumnSizingInfo:n,setColumnSizing:t,options:{defaultColumn:l}}=(R().s[1]++,a),{column:o,getResizeHandler:r,getSize:u}=(R().s[2]++,e),{id:i,columnDef:m}=(R().s[3]++,o),A=(R().s[4]++,R().b[0][0]++,m.minSize??(R().b[0][1]++,l.minSize)),p=(R().s[5]++,R().b[1][0]++,m.maxSize??(R().b[1][1]++,l.maxSize));R().s[6]++;const d=()=>{R().f[1]++,R().s[7]++,n(g=>(R().f[2]++,R().s[8]++,{...g,isResizingColumn:!1})),R().s[9]++,o.resetSize()};R().s[10]++;const c=g=>{R().f[3]++;const{key:C}=(R().s[11]++,g);if(R().s[12]++,R().b[3][0]++,C!=="ArrowLeft"&&(R().b[3][1]++,C!=="ArrowRight")){R().b[2][0]++,R().s[13]++;return}else R().b[2][1]++;R().s[14]++,t(v=>{R().f[4]++;const y=(R().s[15]++,R().b[4][0]++,(v==null?void 0:v[o.id])??(R().b[4][1]++,u())),E=(R().s[16]++,C==="ArrowLeft"?(R().b[5][0]++,y-10):(R().b[5][1]++,C==="ArrowRight"?(R().b[6][0]++,y+10):(R().b[6][1]++,y))),I=(R().s[17]++,E>=p?(R().b[7][0]++,p):(R().b[7][1]++,E<=A?(R().b[8][0]++,A):(R().b[8][1]++,E)));return R().s[18]++,{...v,[i]:I}})};return R().s[19]++,s.jsx("hr",{"aria-orientation":"vertical",className:"ds-table-header-cell-resize-handler",tabIndex:0,onDoubleClick:d,onKeyDown:c,onMouseDown:r(),onTouchStart:r()})};R().s[20]++;Xn.__docgenInfo={description:"",methods:[],displayName:"HeaderCellResizeHandler",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function F(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCell.tsx",a="fe790fdfd4e2a86a499d73a0ea2d309c901aac15",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCell.tsx",statementMap:{0:{start:{line:11,column:27},end:{line:14,column:2}},1:{start:{line:11,column:45},end:{line:14,column:1}},2:{start:{line:15,column:19},end:{line:75,column:1}},3:{start:{line:23,column:6},end:{line:23,column:11}},4:{start:{line:29,column:6},end:{line:29,column:12}},5:{start:{line:37,column:6},end:{line:37,column:12}},6:{start:{line:44,column:6},end:{line:44,column:15}},7:{start:{line:45,column:20},end:{line:45,column:33}},8:{start:{line:46,column:28},end:{line:46,column:109}},9:{start:{line:47,column:23},end:{line:51,column:4}},10:{start:{line:52,column:24},end:{line:52,column:88}},11:{start:{line:53,column:22},end:{line:53,column:58}},12:{start:{line:54,column:2},end:{line:74,column:568}},13:{start:{line:78,column:0},end:{line:1232,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:27},end:{line:11,column:28}},loc:{start:{line:11,column:45},end:{line:14,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:15,column:19},end:{line:15,column:20}},loc:{start:{line:18,column:6},end:{line:75,column:1}},line:18}},branchMap:{0:{loc:{start:{line:12,column:24},end:{line:12,column:40}},type:"binary-expr",locations:[{start:{line:12,column:24},end:{line:12,column:35}},{start:{line:12,column:39},end:{line:12,column:40}}],line:12},1:{loc:{start:{line:46,column:28},end:{line:46,column:109}},type:"binary-expr",locations:[{start:{line:46,column:29},end:{line:46,column:48}},{start:{line:46,column:52},end:{line:46,column:73}},{start:{line:46,column:78},end:{line:46,column:109}}],line:46},2:{loc:{start:{line:52,column:46},end:{line:52,column:73}},type:"binary-expr",locations:[{start:{line:52,column:46},end:{line:52,column:61}},{start:{line:52,column:65},end:{line:52,column:73}}],line:52},3:{loc:{start:{line:65,column:15},end:{line:74,column:560}},type:"cond-expr",locations:[{start:{line:65,column:31},end:{line:65,column:35}},{start:{line:65,column:38},end:{line:74,column:560}}],line:65},4:{loc:{start:{line:65,column:38},end:{line:74,column:560}},type:"cond-expr",locations:[{start:{line:65,column:81},end:{line:74,column:6}},{start:{line:74,column:9},end:{line:74,column:560}}],line:65},5:{loc:{start:{line:70,column:14},end:{line:70,column:47}},type:"cond-expr",locations:[{start:{line:70,column:29},end:{line:70,column:38}},{start:{line:70,column:41},end:{line:70,column:47}}],line:70},6:{loc:{start:{line:72,column:4},end:{line:72,column:346}},type:"cond-expr",locations:[{start:{line:72,column:40},end:{line:72,column:93}},{start:{line:72,column:96},end:{line:72,column:346}}],line:72},7:{loc:{start:{line:72,column:96},end:{line:72,column:346}},type:"cond-expr",locations:[{start:{line:72,column:134},end:{line:72,column:339}},{start:{line:72,column:342},end:{line:72,column:346}}],line:72},8:{loc:{start:{line:72,column:256},end:{line:72,column:301}},type:"cond-expr",locations:[{start:{line:72,column:278},end:{line:72,column:287}},{start:{line:72,column:290},end:{line:72,column:301}}],line:72},9:{loc:{start:{line:73,column:4},end:{line:73,column:85}},type:"binary-expr",locations:[{start:{line:73,column:4},end:{line:73,column:18}},{start:{line:73,column:38},end:{line:73,column:85}}],line:73},10:{loc:{start:{line:74,column:9},end:{line:74,column:560}},type:"cond-expr",locations:[{start:{line:74,column:82},end:{line:74,column:158}},{start:{line:74,column:177},end:{line:74,column:560}}],line:74}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderCell.tsx"],names:["clx","HeaderCellColumnActionsButton","getCommonCellStyles","HeaderCellResizeHandler","Inline","Tooltip","displayColumnIds","parseFromValuesOrFunc","Icon","getTextHeaderStyle","labelLength","minWidth","Math","min","overflow","HeaderCell","header","table","options","enableColumnActions","column","getContext","id","isPlaceholder","columnDef","getCanResize","getCanSort","getIsSorted","getIsPinned","getToggleSortingHandler","columnDefType","cdEnableColumnActions","cdHeader","headerComponent","renderHeaderTooltip","direction","showColumnActions","tooltipPopup","headerElement","headerStyle","length","select","expand","actions","cursor","undefined","Object","values","includes"],mappings:"AAkFQ,SAGM,KAHN;AAjFR,OAAOA,SAAS;AAGhB,OAAOC,mCAAmC;AAC1C,SAASC,2BAA2B;AACpC,OAAOC,6BAA6B;AACpC,SAASC,cAAc;AACvB,SAASC,eAAe;AACxB,SAASC,wBAAwB;AACjC,SAASC,6BAA6B;AACtC,SAASC,YAAY;AAErB,MAAMC,qBAAqBA,CACzBC,iBACmB;AAAA,EACnBC,UAAU,GAAGC,KAAKC,IAAIH,eAAe,GAAG,CAAC,CAAC;AAAA,EAC1CI,UAAU;AACZ;AAEA,MAAMC,aAAa,CAAK;AAAA,EACtBC;AAAAA,EACAC;AAIF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,IAAoB;AAAA,EACjC,IAAIF;AACJ,QAAM;AAAA,IAAEG;AAAAA,IAAQC;AAAAA,IAAYC;AAAAA,IAAIC;AAAAA,EAAc,IAAIP;AAClD,QAAM;AAAA,IACJQ;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIT;AACJ,QAAM;AAAA,IACJU;AAAAA,IACAX,qBAAqBY;AAAAA,IACrBf,QAAQgB;AAAAA,IACRC;AAAAA,IACAC;AAAAA,EACF,IAAIV;AACJ,QAAMW,YAAYR,YAAY;AAE9B,QAAMS,qBACHjB,uBAAuBY,0BACxBA,0BAA0B;AAE5B,QAAMM,eAAeH,sBAAsB;AAAA,IACzCd;AAAAA,IACAJ;AAAAA,IACAC;AAAAA,EACF,CAAC;AACD,QAAMqB,gBAAgB/B,sBACpB0B,mBAAmBD,UACnBX,WAAW,CACb;AACA,QAAMkB,cAAc9B,mBAAmBuB,UAAUQ,MAAM;AACvD,SACE,oBAAC,QAEC,WAAWxC,IAAI,sCAAsC;AAAA,IACnD,yBAAyB8B,kBAAkB;AAAA,IAC3C,wBAAwBV,OAAOE,OAAOhB,iBAAiBmC;AAAAA,IACvD,wBAAwBrB,OAAOE,OAAOhB,iBAAiBoC;AAAAA,IACvD,yBAAyBtB,OAAOE,OAAOhB,iBAAiBqC;AAAAA,EAC1D,CAAC,GACD,eAAaf,YAAY,GACzB,eAAaD,YAAY,GACzB,OAAO;AAAA,IACL,GAAGzB,oBAAoB;AAAA,MACrBe;AAAAA,MACAD;AAAAA,MACAI;AAAAA,IACF,CAAC;AAAA,EACH,GAECG,0BAAgB,OAAOO,kBAAkB,SACxC,qBAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACtC;AAAA,wBAAC,UAAO,OAAM,UAAS,OAAO;AAAA,MAAEhB,UAAU;AAAA,IAAS,GACjD,8BAAC,WAAQ,WAAU,OAAM,OAAOuB,cAC9B,8BAAC,YACC,cAAY,WAAWL,QAAQ,IAC/B,WAAU,uDACV,OAAO;AAAA,MACL,GAAGO;AAAAA,MACHK,QAAQlB,WAAW,IAAI,YAAYmB;AAAAA,IACrC,GACA,OAAOb,UACP,MAAK,UACL,SAASH,wBAAwB,GAEhCS,yBACH,GACF,GACF;AAAA,IACCF,oBACC,oBAAC,iCAA8B,QAAgB,OAAa,IAC1DD,cAAc,QAChB,oBAAC,SAAI,WAAU,sDACb,8BAAC,QACC,MAAMA,cAAc,QAAQ,YAAY,aACxC,MAAK,MACL,cAAY,MAAA,GAEhB,IACE;AAAA,IACHV,aAAa,KACZ,oBAAC,2BAAwB,QAAgB,OAC1C;AAAA,KACH,IACEqB,OAAOC,OAAOzC,gBAAgB,EAAE0C,SAASxB,UAAUF,EAAE,IACvD,oBAAC,UAAO,OAAM,UAAS,SAAQ,UAC5BgB,yBACH,IAEA,oBAAC,UAAO,OAAM,UAAS,SAAQ,cAC7B,8BAAC,SACC,WAAU,8BACV,OAAOC,aACP,OAAOP,UAEP,8BAAC,WAAQ,WAAU,OAAM,OAAOK,cAC9B,8BAAC,YAAO,WAAU,4BAA2B,MAAK,UAC/CC,yBACH,GACF,GACF,GACF,KApEGhB,EAsEP;AAEJ;AAEA,eAAeP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fe790fdfd4e2a86a499d73a0ea2d309c901aac15"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return F=function(){return r},r}F();F().s[0]++;const Kt=e=>(F().f[0]++,F().s[1]++,{minWidth:`${Math.min((F().b[0][0]++,e??(F().b[0][1]++,0)),4)}ch`,overflow:"hidden"});F().s[2]++;const Zn=({header:e,table:a})=>{F().f[1]++;const{options:{enableColumnActions:n}}=(F().s[3]++,a),{column:t,getContext:l,id:o,isPlaceholder:r}=(F().s[4]++,e),{columnDef:u,getCanResize:i,getCanSort:m,getIsSorted:A,getIsPinned:p,getToggleSortingHandler:d}=(F().s[5]++,t),{columnDefType:c,enableColumnActions:g,header:C,headerComponent:v,renderHeaderTooltip:y}=(F().s[6]++,u),E=(F().s[7]++,A()),I=(F().s[8]++,F().b[1][0]++,(n||(F().b[1][1]++,g))&&(F().b[1][2]++,g!==!1)),U=(F().s[9]++,y==null?void 0:y({column:t,header:e,table:a})),O=(F().s[10]++,Qn((F().b[2][0]++,v??(F().b[2][1]++,C)),l())),J=(F().s[11]++,Kt(C==null?void 0:C.length));return F().s[12]++,s.jsx("th",{className:je("ds-table-header-cell ds-table-cell",{"ds-table-cell-display":c==="display","ds-table-cell-select":t.id===ee.select,"ds-table-cell-expand":t.id===ee.expand,"ds-table-cell-actions":t.id===ee.actions}),"data-pinned":p(),"data-sorted":A(),style:{...Pn({table:a,header:e,column:t})},children:r?(F().b[3][0]++,null):(F().b[3][1]++,c==="data"?(F().b[4][0]++,s.jsxs(te,{align:"center",gap:"xs",justify:"space-between",children:[s.jsx(te,{align:"center",style:{overflow:"hidden"},children:s.jsx(Dn,{placement:"top",popup:U,children:s.jsx("button",{"aria-label":`Sort by ${C}`,className:"ds-table-header-cell-title ds-table-unstyled-button",style:{...J,cursor:m()?(F().b[5][0]++,"pointer"):(F().b[5][1]++,void 0)},title:C,type:"button",onClick:d(),children:O})})}),I?(F().b[6][0]++,s.jsx(Jn,{header:e,table:a})):(F().b[6][1]++,E!==!1?(F().b[7][0]++,s.jsx("div",{className:"ds-table-header-cell-column-actions-button-wrapper",children:s.jsx(Ne,{name:E==="asc"?(F().b[8][0]++,"sort-up"):(F().b[8][1]++,"sort-down"),size:"sm",hasFixedSize:!0})})):(F().b[7][1]++,null)),(F().b[9][0]++,i()&&(F().b[9][1]++,s.jsx(Xn,{header:e,table:a})))]})):(F().b[4][1]++,Object.values(ee).includes(u.id)?(F().b[10][0]++,s.jsx(te,{align:"center",justify:"center",children:O})):(F().b[10][1]++,s.jsx(te,{align:"center",justify:"flex-start",children:s.jsx("div",{className:"ds-table-header-cell-title",style:J,title:C,children:s.jsx(Dn,{placement:"top",popup:U,children:s.jsx("button",{className:"ds-table-unstyled-button",type:"button",children:O})})})}))))},o)};F().s[13]++;Zn.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{header:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function fe(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderRow.tsx",a="7af7164f3b453c452bf6898942bb88a0287542e0",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderRow.tsx",statementMap:{0:{start:{line:3,column:18},end:{line:8,column:1}},1:{start:{line:7,column:2},end:{line:7,column:196}},2:{start:{line:7,column:146},end:{line:7,column:191}},3:{start:{line:11,column:0},end:{line:1197,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:18},end:{line:3,column:19}},loc:{start:{line:6,column:6},end:{line:8,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:7,column:118},end:{line:7,column:119}},loc:{start:{line:7,column:146},end:{line:7,column:191}},line:7}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/HeaderRow.tsx"],names:["HeaderCell","HeaderRow","headerGroup","table","headers","map","header","id"],mappings:"AAaQ;AAZR,OAAOA,gBAAgB;AAEvB,MAAMC,YAAY,CAAK;AAAA,EACrBC;AAAAA,EACAC;AAIF,MAAM;AACJ,SACE,oBAAC,QAAG,WAAU,oCACXD,sBAAYE,QAAQC,IAAKC,YACxB,oBAAC,cAA2B,QAAgB,SAA3BA,OAAOC,GACzB,GACH;AAEJ;AAEA,eAAeN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7af7164f3b453c452bf6898942bb88a0287542e0"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return fe=function(){return r},r}fe();fe().s[0]++;const ea=({headerGroup:e,table:a})=>(fe().f[0]++,fe().s[1]++,s.jsx("tr",{className:"ds-table-header-row ds-table-row",children:e.headers.map(n=>(fe().f[1]++,fe().s[2]++,s.jsx(Zn,{header:n,table:a},n.id)))}));fe().s[3]++;ea.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{headerGroup:{required:!0,tsType:{name:"intersection",raw:`Omit<HeaderGroup<D>, 'headers'> & {
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}],required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}]}],raw:"DatatableHeader<D>[]",required:!0}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function ye(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/Header.tsx",a="83076790827e47e630af14b433943a7bec992350",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/Header.tsx",statementMap:{0:{start:{line:3,column:15},end:{line:7,column:1}},1:{start:{line:6,column:2},end:{line:6,column:200}},2:{start:{line:6,column:141},end:{line:6,column:195}},3:{start:{line:10,column:0},end:{line:27,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:15},end:{line:3,column:16}},loc:{start:{line:5,column:6},end:{line:7,column:1}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:6,column:108},end:{line:6,column:109}},loc:{start:{line:6,column:141},end:{line:6,column:195}},line:6}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/header/Header.tsx"],names:["HeaderRow","Header","table","getHeaderGroups","map","headerGroup","id"],mappings:"AAOQ;AANR,OAAOA,eAAe;AAEtB,MAAMC,SAAS,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACjE,SACE,oBAAC,WAAM,WAAU,mBACdA,gBAAMC,gBAAgB,EAAEC,IAAKC,iBAC5B,oBAAC,aAEC,aACA,SAFKA,YAAYC,GAIpB,GACH;AAEJ;AAEA,eAAeL;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"83076790827e47e630af14b433943a7bec992350"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ye=function(){return r},r}ye();ye().s[0]++;const na=({table:e})=>(ye().f[0]++,ye().s[1]++,s.jsx("thead",{className:"ds-table-header",children:e.getHeaderGroups().map(a=>(ye().f[1]++,ye().s[2]++,s.jsx(ea,{headerGroup:a,table:e},a.id)))}));ye().s[3]++;na.__docgenInfo={description:"",methods:[],displayName:"Header",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function K(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItem.tsx",a="638ee2ea94a086a2766160b27c54ef91ac4774e4",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItem.tsx",statementMap:{0:{start:{line:7,column:21},end:{line:56,column:1}},1:{start:{line:18,column:6},end:{line:18,column:11}},2:{start:{line:26,column:6},end:{line:28,column:4}},3:{start:{line:31,column:6},end:{line:31,column:26}},4:{start:{line:32,column:16},end:{line:35,column:3}},5:{start:{line:36,column:2},end:{line:55,column:10}},6:{start:{line:48,column:152},end:{line:48,column:193}},7:{start:{line:53,column:117},end:{line:53,column:162}},8:{start:{line:59,column:0},end:{line:772,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:21},end:{line:7,column:22}},loc:{start:{line:11,column:6},end:{line:56,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:48,column:145},end:{line:48,column:146}},loc:{start:{line:48,column:152},end:{line:48,column:193}},line:48},2:{name:"(anonymous_2)",decl:{start:{line:53,column:110},end:{line:53,column:111}},loc:{start:{line:53,column:117},end:{line:53,column:162}},line:53}},branchMap:{0:{loc:{start:{line:36,column:203},end:{line:36,column:237}},type:"cond-expr",locations:[{start:{line:36,column:226},end:{line:36,column:227}},{start:{line:36,column:230},end:{line:36,column:237}}],line:36},1:{loc:{start:{line:37,column:4},end:{line:41,column:26}},type:"binary-expr",locations:[{start:{line:37,column:4},end:{line:37,column:24}},{start:{line:37,column:44},end:{line:41,column:26}}],line:37},2:{loc:{start:{line:44,column:6},end:{line:48,column:199}},type:"binary-expr",locations:[{start:{line:44,column:6},end:{line:44,column:18}},{start:{line:44,column:38},end:{line:48,column:199}}],line:44},3:{loc:{start:{line:44,column:146},end:{line:48,column:8}},type:"cond-expr",locations:[{start:{line:44,column:170},end:{line:46,column:8}},{start:{line:46,column:11},end:{line:48,column:8}}],line:44},4:{loc:{start:{line:48,column:52},end:{line:48,column:115}},type:"binary-expr",locations:[{start:{line:48,column:52},end:{line:48,column:66}},{start:{line:48,column:70},end:{line:48,column:91}},{start:{line:48,column:95},end:{line:48,column:115}}],line:48},5:{loc:{start:{line:49,column:6},end:{line:53,column:168}},type:"binary-expr",locations:[{start:{line:49,column:6},end:{line:49,column:25}},{start:{line:49,column:45},end:{line:53,column:168}}],line:49},6:{loc:{start:{line:49,column:153},end:{line:53,column:8}},type:"cond-expr",locations:[{start:{line:49,column:186},end:{line:51,column:8}},{start:{line:51,column:11},end:{line:53,column:8}}],line:49},7:{loc:{start:{line:53,column:128},end:{line:53,column:161}},type:"cond-expr",locations:[{start:{line:53,column:147},end:{line:53,column:153}},{start:{line:53,column:156},end:{line:53,column:161}}],line:53}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0,0],5:[0,0],6:[0,0],7:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItem.tsx"],names:["useSortable","CSS","Inline","Padbox","IconButton","useSafeTranslation","SettingsItem","column","table","canColumnHide","options","enableColumnPinning","enableHiding","enableColumnOrdering","attributes","listeners","setActivatorNodeRef","setNodeRef","transform","transition","id","t","style","Transform","toString","columnName","columnDef","header","cursor","getIsVisible","getCanHide","e","toggleVisibility","target","checked","getIsPinned","getCanPin","pin"],mappings:"AA+CU,cAcF,YAdE;AA/CV,SAASA,mBAAmB;AAC5B,SAASC,WAAW;AAEpB,SAASC,QAAQC,cAAc;AAE/B,OAAOC,gBAAgB;AACvB,SAASC,0BAA0B;AAEnC,MAAMC,eAAe,CAAK;AAAA,EACxBC;AAAAA,EACAC;AAAAA,EACAC;AAKF,MAAM;AACJ,QAAM;AAAA,IACJC,SAAS;AAAA,MAAEC;AAAAA,MAAqBC;AAAAA,MAAcC;AAAAA,IAAqB;AAAA,EACrE,IAAIL;AACJ,QAAM;AAAA,IACJM;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAInB,YAAY;AAAA,IAAEoB,IAAIb,OAAOa;AAAAA,EAAG,CAAC;AACjC,QAAM;AAAA,IAAEC;AAAAA,EAAE,IAAIhB,mBAAmB;AAEjC,QAAMiB,QAAQ;AAAA,IACZJ,WAAWjB,IAAIsB,UAAUC,SAASN,SAAS;AAAA,IAC3CC;AAAAA,EACF;AACA,SACE,oBAAC,UACC,KAAKF,YACL,WAAU,gCACV,aAAY,MACZ,OAEA,+BAAC,UACC,OAAM,UACN,KAAI,MACJ,SAASJ,uBAAuB,IAAI,SAEnCA;AAAAA,4BACC,oBAAC,cACC,KAAKG,qBACL,UAAS,sBACT,OAAOK,EAAE,6CAA6C;AAAA,MACpDI,YAAYlB,OAAOmB,UAAUC;AAAAA,IAC/B,CAAC,GACGb,GAAAA,YACJ,GAAIC,WACJ,MAAK,MACL,OAAO;AAAA,MAAEa,QAAQ;AAAA,IAAO,GACxB,SAAQ,SAEX;AAAA,IACD,oBAAC,UAAMrB,iBAAOmB,UAAUC,QAAO;AAAA,IAC/B,qBAAC,UAAO,KAAI,MAAK,SAAQ,OACtBf;AAAAA,sBACC,oBAAC,SAAI,WAAU,6BACb,8BAAC,WACC,cACEL,OAAOsB,aAAa,IAChBR,EAAE,8CAA8C;AAAA,QAC9CI,YAAYlB,OAAOmB,UAAUC;AAAAA,MAC/B,CAAC,IACDN,EAAE,8CAA8C;AAAA,QAC9CI,YAAYlB,OAAOmB,UAAUC;AAAAA,MAC/B,CAAC,GAEP,SAASpB,OAAOsB,aAAa,GAC7B,UACG,CAACpB,iBAAiBF,OAAOsB,aAAa,KACvC,CAACtB,OAAOuB,WAAW,GAErB,MAAK,YACL,UAAWC,OAAMxB,OAAOyB,iBAAiBD,EAAEE,OAAOC,OAAO,GAAE,GAE/D;AAAA,MAEDvB,uBACC,oBAAC,SAAI,WAAU,6BACb,8BAAC,WACC,cACEJ,OAAO4B,YAAY,MAAM,QACrBd,EAAE,+CAA+C;AAAA,QAC/CI,YAAYlB,OAAOmB,UAAUC;AAAAA,MAC/B,CAAC,IACDN,EAAE,6CAA6C;AAAA,QAC7CI,YAAYlB,OAAOmB,UAAUC;AAAAA,MAC/B,CAAC,GAEP,SAASpB,OAAO4B,YAAY,MAAM,OAClC,UAAU,CAAC5B,OAAO6B,UAAU,GAC5B,MAAK,YACL,UAAWL,OAAMxB,OAAO8B,IAAIN,EAAEE,OAAOC,UAAU,SAAS,KAAK,GAAE,GAEnE;AAAA,OAEJ;AAAA,KACF,GACF;AAEJ;AAEA,eAAe5B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"638ee2ea94a086a2766160b27c54ef91ac4774e4"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return K=function(){return r},r}K();K().s[0]++;const aa=({column:e,table:a,canColumnHide:n})=>{K().f[0]++;const{options:{enableColumnPinning:t,enableHiding:l,enableColumnOrdering:o}}=(K().s[1]++,a),{attributes:r,listeners:u,setActivatorNodeRef:i,setNodeRef:m,transform:A,transition:p}=(K().s[2]++,ga({id:e.id})),{t:d}=(K().s[3]++,ce()),c=(K().s[4]++,{transform:Ca.Transform.toString(A),transition:p});return K().s[5]++,s.jsx(Be,{ref:m,className:"ds-table-settings-panel-item",paddingSize:"sm",style:c,children:s.jsxs(te,{align:"center",gap:"md",stretch:o?(K().b[0][0]++,2):(K().b[0][1]++,"start"),children:[(K().b[1][0]++,o&&(K().b[1][1]++,s.jsx(be,{ref:i,iconName:"grip-dots-vertical",label:d("sscds|datatable.settings.ordering.reorder",{columnName:e.columnDef.header}),...r,...u,size:"sm",style:{cursor:"grab"},variant:"ghost"}))),s.jsx("span",{children:e.columnDef.header}),s.jsxs(te,{gap:"sm",stretch:"all",children:[(K().b[2][0]++,l&&(K().b[2][1]++,s.jsx("div",{className:"ds-table-checkbox-wrapper",children:s.jsx("input",{"aria-label":e.getIsVisible()?(K().b[3][0]++,d("sscds|datatable.settings.hiding.hideColumn",{columnName:e.columnDef.header})):(K().b[3][1]++,d("sscds|datatable.settings.hiding.showColumn",{columnName:e.columnDef.header})),checked:e.getIsVisible(),disabled:(K().b[4][0]++,!n&&(K().b[4][1]++,e.getIsVisible())||(K().b[4][2]++,!e.getCanHide())),type:"checkbox",onChange:g=>(K().f[1]++,K().s[6]++,e.toggleVisibility(g.target.checked))})}))),(K().b[5][0]++,t&&(K().b[5][1]++,s.jsx("div",{className:"ds-table-checkbox-wrapper",children:s.jsx("input",{"aria-label":e.getIsPinned()!==!1?(K().b[6][0]++,d("sscds|datatable.settings.pinnig.unpinColumn",{columnName:e.columnDef.header})):(K().b[6][1]++,d("sscds|datatable.settings.pinnig.pinColumn",{columnName:e.columnDef.header})),checked:e.getIsPinned()!==!1,disabled:!e.getCanPin(),type:"checkbox",onChange:g=>(K().f[2]++,K().s[7]++,e.pin(g.target.checked?(K().b[7][0]++,"left"):(K().b[7][1]++,!1)))})})))]})]})})};K().s[8]++;aa.__docgenInfo={description:"",methods:[],displayName:"SettingsItem",props:{column:{required:!0,tsType:{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}]},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},canColumnHide:{required:!0,tsType:{name:"boolean"},description:""}}};function k(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItems.tsx",a="263c96344ce9dc9a9ccf936bd2edb4c4029b8898",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItems.tsx",statementMap:{0:{start:{line:8,column:25},end:{line:8,column:101}},1:{start:{line:8,column:49},end:{line:8,column:101}},2:{start:{line:8,column:77},end:{line:8,column:100}},3:{start:{line:9,column:24},end:{line:9,column:96}},4:{start:{line:9,column:46},end:{line:9,column:96}},5:{start:{line:9,column:74},end:{line:9,column:95}},6:{start:{line:10,column:34},end:{line:85,column:1}},7:{start:{line:11,column:2},end:{line:84,column:4}},8:{start:{line:19,column:10},end:{line:19,column:46}},9:{start:{line:20,column:6},end:{line:22,column:9}},10:{start:{line:32,column:10},end:{line:32,column:46}},11:{start:{line:33,column:6},end:{line:43,column:7}},12:{start:{line:38,column:12},end:{line:38,column:45}},13:{start:{line:39,column:8},end:{line:42,column:11}},14:{start:{line:44,column:6},end:{line:46,column:9}},15:{start:{line:56,column:10},end:{line:56,column:46}},16:{start:{line:57,column:6},end:{line:67,column:7}},17:{start:{line:62,column:12},end:{line:62,column:45}},18:{start:{line:63,column:8},end:{line:66,column:11}},19:{start:{line:68,column:6},end:{line:70,column:9}},20:{start:{line:79,column:10},end:{line:79,column:46}},21:{start:{line:80,column:6},end:{line:82,column:9}},22:{start:{line:86,column:22},end:{line:119,column:1}},23:{start:{line:94,column:6},end:{line:94,column:11}},24:{start:{line:97,column:6},end:{line:97,column:16}},25:{start:{line:100,column:6},end:{line:100,column:26}},26:{start:{line:101,column:18},end:{line:103,column:5}},27:{start:{line:104,column:24},end:{line:112,column:3}},28:{start:{line:108,column:26},end:{line:108,column:62}},29:{start:{line:109,column:25},end:{line:109,column:58}},30:{start:{line:110,column:21},end:{line:110,column:76}},31:{start:{line:111,column:4},end:{line:111,column:29}},32:{start:{line:113,column:2},end:{line:118,column:429}},33:{start:{line:118,column:336},end:{line:118,column:418}},34:{start:{line:122,column:0},end:{line:839,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:25},end:{line:8,column:26}},loc:{start:{line:8,column:49},end:{line:8,column:101}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:8,column:65},end:{line:8,column:66}},loc:{start:{line:8,column:77},end:{line:8,column:100}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:9,column:24},end:{line:9,column:25}},loc:{start:{line:9,column:46},end:{line:9,column:96}},line:9},3:{name:"(anonymous_3)",decl:{start:{line:9,column:62},end:{line:9,column:63}},loc:{start:{line:9,column:74},end:{line:9,column:95}},line:9},4:{name:"(anonymous_4)",decl:{start:{line:10,column:34},end:{line:10,column:35}},loc:{start:{line:10,column:53},end:{line:85,column:1}},line:10},5:{name:"(anonymous_5)",decl:{start:{line:12,column:4},end:{line:12,column:5}},loc:{start:{line:14,column:7},end:{line:23,column:5}},line:14},6:{name:"(anonymous_6)",decl:{start:{line:24,column:4},end:{line:24,column:5}},loc:{start:{line:27,column:7},end:{line:47,column:5}},line:27},7:{name:"(anonymous_7)",decl:{start:{line:48,column:4},end:{line:48,column:5}},loc:{start:{line:51,column:7},end:{line:71,column:5}},line:51},8:{name:"(anonymous_8)",decl:{start:{line:72,column:4},end:{line:72,column:5}},loc:{start:{line:74,column:7},end:{line:83,column:5}},line:74},9:{name:"(anonymous_9)",decl:{start:{line:86,column:22},end:{line:86,column:23}},loc:{start:{line:90,column:6},end:{line:119,column:1}},line:90},10:{name:"(anonymous_10)",decl:{start:{line:104,column:24},end:{line:104,column:25}},loc:{start:{line:107,column:8},end:{line:112,column:3}},line:107},11:{name:"(anonymous_11)",decl:{start:{line:118,column:308},end:{line:118,column:309}},loc:{start:{line:118,column:336},end:{line:118,column:418}},line:118}},branchMap:{0:{loc:{start:{line:33,column:6},end:{line:43,column:7}},type:"if",locations:[{start:{line:33,column:6},end:{line:43,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:33},1:{loc:{start:{line:57,column:6},end:{line:67,column:7}},type:"if",locations:[{start:{line:57,column:6},end:{line:67,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:57}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/SettingsItems.tsx"],names:["DndContext","KeyboardSensor","PointerSensor","closestCenter","useSensor","useSensors","restrictToParentElement","restrictToVerticalAxis","SortableContext","sortableKeyboardCoordinates","verticalListSortingStrategy","reorderColumn","SettingsItem","useSafeTranslation","getDraggedColumn","active","allColumns","find","column","id","getTargetColumn","over","screenReaderAnnouncements","t","onDragStart","columnDef","header","onDragOver","activeHeader","overHeader","onDragEnd","onDragCancel","SettingsItems","table","canHideMoreColumns","getState","setColumnOrder","columnOrder","sensors","coordinateGetter","handleDragEnd","draggedColumn","targetColumn","newOrder","screenReaderInstructions","draggable","announcements","map"],mappings:"AAiJY;AAhJZ,SAEEA,YAEAC,gBAEAC,eACAC,eACAC,WACAC,kBACK;AACP,SACEC,yBACAC,8BACK;AACP,SACEC,iBACAC,6BACAC,mCACK;AAEP,SAASC,qBAAqB;AAE9B,OAAOC,kBAAkB;AACzB,SAASC,0BAA0B;AAEnC,MAAMC,mBAAmB,CACvBC,QACAC,eACGA,WAAWC,KAAMC,YAAWA,OAAOC,OAAOJ,OAAOI,EAAE;AACxD,MAAMC,kBAAkB,CAAKC,MAAYL,eACvCA,WAAWC,KAAMC,YAAWA,OAAOC,OAAOE,KAAKF,EAAE;AAEnD,MAAMG,4BAA4B,CAChCN,YACAO,MACG;AACH,SAAO;AAAA,IACLC,YAAY;AAAA,MAAET;AAAAA,IAAO,GAAG;AACtB,YAAM;AAAA,QACJU,WAAW;AAAA,UAAEC;AAAAA,QAAO;AAAA,MACtB,IAAIZ,iBAAiBC,QAAQC,UAAU;AACvC,aAAOO,EAAE,2DAA2D;AAAA,QAClEG;AAAAA,MACF,CAAC;AAAA,IACH;AAAA,IACAC,WAAW;AAAA,MAAEZ;AAAAA,MAAQM;AAAAA,IAAK,GAAG;AAC3B,YAAM;AAAA,QACJI,WAAW;AAAA,UAAEC,QAAQE;AAAAA,QAAa;AAAA,MACpC,IAAId,iBAAiBC,QAAQC,UAAU;AAEvC,UAAIK,MAAM;AACR,cAAM;AAAA,UACJI,WAAW;AAAA,YAAEC,QAAQG;AAAAA,UAAW;AAAA,QAClC,IAAIT,gBAAgBC,MAAML,UAAU;AACpC,eAAOO,EAAE,4DAA4D;AAAA,UACnEK;AAAAA,UACAC;AAAAA,QACF,CAAC;AAAA,MACH;AAEA,aAAON,EACL,mEACA;AAAA,QAAEK;AAAAA,MAAa,CACjB;AAAA,IACF;AAAA,IACAE,UAAU;AAAA,MAAEf;AAAAA,MAAQM;AAAAA,IAAK,GAAG;AAC1B,YAAM;AAAA,QACJI,WAAW;AAAA,UAAEC,QAAQE;AAAAA,QAAa;AAAA,MACpC,IAAId,iBAAiBC,QAAQC,UAAU;AAEvC,UAAIK,MAAM;AACR,cAAM;AAAA,UACJI,WAAW;AAAA,YAAEC,QAAQG;AAAAA,UAAW;AAAA,QAClC,IAAIT,gBAAgBC,MAAML,UAAU;AACpC,eAAOO,EAAE,8DAA8D;AAAA,UACrEK;AAAAA,UACAC;AAAAA,QACF,CAAC;AAAA,MACH;AAEA,aAAON,EAAE,0DAA0D;AAAA,QACjEK;AAAAA,MACF,CAAC;AAAA,IACH;AAAA,IACAG,aAAa;AAAA,MAAEhB;AAAAA,IAAO,GAAG;AACvB,YAAM;AAAA,QACJU,WAAW;AAAA,UAAEC;AAAAA,QAAO;AAAA,MACtB,IAAIZ,iBAAiBC,QAAQC,UAAU;AACvC,aAAOO,EAAE,6DAA6D;AAAA,QACpEG;AAAAA,MACF,CAAC;AAAA,IACH;AAAA,EACF;AACF;AAEA,MAAMM,gBAAgB,CAAK;AAAA,EACzBhB;AAAAA,EACAiB;AAAAA,EACAC;AAKF,MAAM;AACJ,QAAM;AAAA,IAAEC;AAAAA,IAAUC;AAAAA,EAAe,IAAIH;AACrC,QAAM;AAAA,IAAEI;AAAAA,EAAY,IAAIF,SAAS;AACjC,QAAM;AAAA,IAAEZ;AAAAA,EAAE,IAAIV,mBAAmB;AAEjC,QAAMyB,UAAUjC,WACdD,UAAUF,aAAa,GACvBE,UAAUH,gBAAgB;AAAA,IACxBsC,kBAAkB9B;AAAAA,EACpB,CAAC,CACH;AAEA,QAAM+B,gBAAgBA,CAAC;AAAA,IAAEnB;AAAAA,IAAMN;AAAAA,EAAqB,MAAM;AACxD,UAAM0B,gBAAgB3B,iBAAiBC,QAAQC,UAAU;AACzD,UAAM0B,eAAetB,gBAAgBC,MAAML,UAAU;AACrD,UAAM2B,WAAWhC,cAAc8B,eAAeC,cAAcL,WAAW;AACvED,mBAAeO,QAAQ;AAAA,EACzB;AAEA,SACE,oBAAC,cACC,eAAe;AAAA,IACbC,0BAA0B;AAAA,MACxBC,WAAWtB,EACT,6DACF;AAAA,IACF;AAAA,IACAuB,eAAexB,0BAA0BN,YAAYO,CAAC;AAAA,EACxD,GACA,oBAAoBpB,eACpB,WAAW,CAACI,wBAAwBD,uBAAuB,GAC3D,SACA,WAAWkC,eAEX,8BAAC,mBACC,OAAOxB,YACP,UAAUN,6BAEV,8BAAC,SACEM,qBAAW+B,IAAK7B,YACf,oBAAC,gBAEC,eAAegB,oBACf,QACA,SAHKhB,OAAOC,GAKf,GACH,GACF,GACF;AAEJ;AAEA,eAAea;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"263c96344ce9dc9a9ccf936bd2edb4c4029b8898"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return k=function(){return r},r}k();k().s[0]++;const Ee=(e,a)=>(k().f[0]++,k().s[1]++,a.find(n=>(k().f[1]++,k().s[2]++,n.id===e.id)));k().s[3]++;const on=(e,a)=>(k().f[2]++,k().s[4]++,a.find(n=>(k().f[3]++,k().s[5]++,n.id===e.id)));k().s[6]++;const Tt=(e,a)=>(k().f[4]++,k().s[7]++,{onDragStart({active:n}){k().f[5]++;const{columnDef:{header:t}}=(k().s[8]++,Ee(n,e));return k().s[9]++,a("sscds|datatable.settings.ordering.screenReader.pickedUp",{header:t})},onDragOver({active:n,over:t}){k().f[6]++;const{columnDef:{header:l}}=(k().s[10]++,Ee(n,e));if(k().s[11]++,t){k().b[0][0]++;const{columnDef:{header:o}}=(k().s[12]++,on(t,e));return k().s[13]++,a("sscds|datatable.settings.ordering.screenReader.movedOver",{activeHeader:l,overHeader:o})}else k().b[0][1]++;return k().s[14]++,a("sscds|datatable.settings.ordering.screenReader.notDroppableArea",{activeHeader:l})},onDragEnd({active:n,over:t}){k().f[7]++;const{columnDef:{header:l}}=(k().s[15]++,Ee(n,e));if(k().s[16]++,t){k().b[1][0]++;const{columnDef:{header:o}}=(k().s[17]++,on(t,e));return k().s[18]++,a("sscds|datatable.settings.ordering.screenReader.droppedOver",{activeHeader:l,overHeader:o})}else k().b[1][1]++;return k().s[19]++,a("sscds|datatable.settings.ordering.screenReader.dropped",{activeHeader:l})},onDragCancel({active:n}){k().f[8]++;const{columnDef:{header:t}}=(k().s[20]++,Ee(n,e));return k().s[21]++,a("sscds|datatable.settings.ordering.screenReader.dragCancel",{header:t})}});k().s[22]++;const ta=({allColumns:e,table:a,canHideMoreColumns:n})=>{k().f[9]++;const{getState:t,setColumnOrder:l}=(k().s[23]++,a),{columnOrder:o}=(k().s[24]++,t()),{t:r}=(k().s[25]++,ce()),u=(k().s[26]++,fa(pn(ha),pn(wa,{coordinateGetter:ya})));k().s[27]++;const i=({over:m,active:A})=>{k().f[10]++;const p=(k().s[28]++,Ee(A,e)),d=(k().s[29]++,on(m,e)),c=(k().s[30]++,Rt(p,d,o));k().s[31]++,l(c)};return k().s[32]++,s.jsx(va,{accessibility:{screenReaderInstructions:{draggable:r("sscds|datatable.settings.ordering.screenReader.instructions")},announcements:Tt(e,r)},collisionDetection:Ia,modifiers:[Ba,Sa],sensors:u,onDragEnd:i,children:s.jsx(Va,{items:e,strategy:ka,children:s.jsx("div",{children:e.map(m=>(k().f[11]++,k().s[33]++,s.jsx(aa,{canColumnHide:n,column:m,table:a},m.id)))})})})};k().s[34]++;ta.__docgenInfo={description:"",methods:[],displayName:"SettingsItems",props:{allColumns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"column",value:{name:"DatatableColumn",required:!0}},{key:"header",value:{name:"DatatableHeader",required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}}},required:!0}}]}}],required:!0}},{key:"table",value:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1},description:"You can provide your own implementation of the column header tooltip. This property accepts\nReact component with properties:\n - `column` - current column object\n - `header` - current header object\n - `table` - current instance of the table"}]}}],required:!0}},{key:"columns",value:{name:"DatatableColumn",required:!1}}]}}]}],raw:"DatatableColumn<D>[]"},description:""},table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""},canHideMoreColumns:{required:!0,tsType:{name:"boolean"},description:""}}};function f(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/Settings.tsx",a="5f251a60c6a055c56479a8afb81484374863bbc6",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/Settings.tsx",statementMap:{0:{start:{line:14,column:21},end:{line:17,column:940}},1:{start:{line:18,column:17},end:{line:119,column:1}},2:{start:{line:36,column:6},end:{line:36,column:11}},3:{start:{line:40,column:6},end:{line:40,column:16}},4:{start:{line:43,column:6},end:{line:43,column:27}},5:{start:{line:46,column:6},end:{line:46,column:26}},6:{start:{line:47,column:29},end:{line:47,column:64}},7:{start:{line:48,column:21},end:{line:53,column:116}},8:{start:{line:49,column:4},end:{line:51,column:5}},9:{start:{line:50,column:6},end:{line:50,column:246}},10:{start:{line:50,column:90},end:{line:50,column:145}},11:{start:{line:50,column:127},end:{line:50,column:144}},12:{start:{line:50,column:206},end:{line:50,column:244}},13:{start:{line:52,column:4},end:{line:52,column:87}},14:{start:{line:52,column:47},end:{line:52,column:85}},15:{start:{line:54,column:35},end:{line:61,column:3}},16:{start:{line:55,column:28},end:{line:55,column:101}},17:{start:{line:55,column:64},end:{line:55,column:100}},18:{start:{line:56,column:26},end:{line:56,column:87}},19:{start:{line:56,column:58},end:{line:56,column:86}},20:{start:{line:57,column:4},end:{line:60,column:6}},21:{start:{line:62,column:36},end:{line:69,column:3}},22:{start:{line:63,column:28},end:{line:63,column:102}},23:{start:{line:63,column:64},end:{line:63,column:101}},24:{start:{line:64,column:26},end:{line:64,column:86}},25:{start:{line:64,column:58},end:{line:64,column:85}},26:{start:{line:65,column:4},end:{line:68,column:6}},27:{start:{line:70,column:43},end:{line:76,column:3}},28:{start:{line:71,column:4},end:{line:75,column:7}},29:{start:{line:71,column:40},end:{line:71,column:76}},30:{start:{line:72,column:6},end:{line:74,column:7}},31:{start:{line:73,column:8},end:{line:73,column:45}},32:{start:{line:77,column:44},end:{line:81,column:3}},33:{start:{line:78,column:4},end:{line:80,column:12}},34:{start:{line:79,column:45},end:{line:79,column:51}},35:{start:{line:82,column:2},end:{line:118,column:10}},36:{start:{line:94,column:130},end:{line:94,column:158}},37:{start:{line:101,column:10},end:{line:101,column:61}},38:{start:{line:102,column:10},end:{line:102,column:67}},39:{start:{line:103,column:10},end:{line:103,column:57}},40:{start:{line:108,column:433},end:{line:108,column:483}},41:{start:{line:112,column:433},end:{line:112,column:484}},42:{start:{line:122,column:0},end:{line:139,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:18,column:17},end:{line:18,column:18}},loc:{start:{line:20,column:6},end:{line:119,column:1}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:48,column:29},end:{line:48,column:30}},loc:{start:{line:48,column:35},end:{line:53,column:3}},line:48},2:{name:"(anonymous_2)",decl:{start:{line:50,column:79},end:{line:50,column:80}},loc:{start:{line:50,column:90},end:{line:50,column:145}},line:50},3:{name:"(anonymous_3)",decl:{start:{line:50,column:118},end:{line:50,column:119}},loc:{start:{line:50,column:127},end:{line:50,column:144}},line:50},4:{name:"(anonymous_4)",decl:{start:{line:50,column:197},end:{line:50,column:198}},loc:{start:{line:50,column:206},end:{line:50,column:244}},line:50},5:{name:"(anonymous_5)",decl:{start:{line:52,column:38},end:{line:52,column:39}},loc:{start:{line:52,column:47},end:{line:52,column:85}},line:52},6:{name:"(anonymous_6)",decl:{start:{line:54,column:35},end:{line:54,column:36}},loc:{start:{line:54,column:41},end:{line:61,column:3}},line:54},7:{name:"(anonymous_7)",decl:{start:{line:55,column:55},end:{line:55,column:56}},loc:{start:{line:55,column:64},end:{line:55,column:100}},line:55},8:{name:"(anonymous_8)",decl:{start:{line:56,column:49},end:{line:56,column:50}},loc:{start:{line:56,column:58},end:{line:56,column:86}},line:56},9:{name:"(anonymous_9)",decl:{start:{line:62,column:36},end:{line:62,column:37}},loc:{start:{line:62,column:42},end:{line:69,column:3}},line:62},10:{name:"(anonymous_10)",decl:{start:{line:63,column:55},end:{line:63,column:56}},loc:{start:{line:63,column:64},end:{line:63,column:101}},line:63},11:{name:"(anonymous_11)",decl:{start:{line:64,column:49},end:{line:64,column:50}},loc:{start:{line:64,column:58},end:{line:64,column:85}},line:64},12:{name:"(anonymous_12)",decl:{start:{line:70,column:43},end:{line:70,column:44}},loc:{start:{line:70,column:63},end:{line:76,column:3}},line:70},13:{name:"(anonymous_13)",decl:{start:{line:71,column:31},end:{line:71,column:32}},loc:{start:{line:71,column:40},end:{line:71,column:76}},line:71},14:{name:"(anonymous_14)",decl:{start:{line:71,column:86},end:{line:71,column:87}},loc:{start:{line:71,column:102},end:{line:75,column:5}},line:71},15:{name:"(anonymous_15)",decl:{start:{line:77,column:44},end:{line:77,column:45}},loc:{start:{line:77,column:56},end:{line:81,column:3}},line:77},16:{name:"(anonymous_16)",decl:{start:{line:79,column:36},end:{line:79,column:37}},loc:{start:{line:79,column:45},end:{line:79,column:51}},line:79},17:{name:"(anonymous_17)",decl:{start:{line:94,column:124},end:{line:94,column:125}},loc:{start:{line:94,column:130},end:{line:94,column:158}},line:94},18:{name:"(anonymous_18)",decl:{start:{line:100,column:117},end:{line:100,column:118}},loc:{start:{line:100,column:123},end:{line:104,column:9}},line:100},19:{name:"(anonymous_19)",decl:{start:{line:108,column:426},end:{line:108,column:427}},loc:{start:{line:108,column:433},end:{line:108,column:483}},line:108},20:{name:"(anonymous_20)",decl:{start:{line:112,column:426},end:{line:112,column:427}},loc:{start:{line:112,column:433},end:{line:112,column:484}},line:112}},branchMap:{0:{loc:{start:{line:49,column:4},end:{line:51,column:5}},type:"if",locations:[{start:{line:49,column:4},end:{line:51,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:49},1:{loc:{start:{line:59,column:29},end:{line:59,column:102}},type:"binary-expr",locations:[{start:{line:59,column:29},end:{line:59,column:53}},{start:{line:59,column:57},end:{line:59,column:102}}],line:59},2:{loc:{start:{line:67,column:28},end:{line:67,column:101}},type:"binary-expr",locations:[{start:{line:67,column:28},end:{line:67,column:52}},{start:{line:67,column:56},end:{line:67,column:101}}],line:67},3:{loc:{start:{line:72,column:6},end:{line:74,column:7}},type:"if",locations:[{start:{line:72,column:6},end:{line:74,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:72},4:{loc:{start:{line:72,column:10},end:{line:72,column:58}},type:"binary-expr",locations:[{start:{line:72,column:10},end:{line:72,column:24}},{start:{line:72,column:28},end:{line:72,column:43}},{start:{line:72,column:47},end:{line:72,column:58}}],line:72},5:{loc:{start:{line:78,column:21},end:{line:80,column:10}},type:"cond-expr",locations:[{start:{line:78,column:30},end:{line:80,column:5}},{start:{line:80,column:8},end:{line:80,column:10}}],line:78},6:{loc:{start:{line:85,column:9},end:{line:85,column:39}},type:"binary-expr",locations:[{start:{line:85,column:9},end:{line:85,column:34}},{start:{line:85,column:38},end:{line:85,column:39}}],line:85},7:{loc:{start:{line:101,column:27},end:{line:101,column:59}},type:"binary-expr",locations:[{start:{line:101,column:27},end:{line:101,column:53}},{start:{line:101,column:57},end:{line:101,column:59}}],line:101},8:{loc:{start:{line:102,column:30},end:{line:102,column:65}},type:"binary-expr",locations:[{start:{line:102,column:30},end:{line:102,column:59}},{start:{line:102,column:63},end:{line:102,column:65}}],line:102},9:{loc:{start:{line:103,column:25},end:{line:103,column:55}},type:"binary-expr",locations:[{start:{line:103,column:25},end:{line:103,column:49}},{start:{line:103,column:53},end:{line:103,column:55}}],line:103},10:{loc:{start:{line:106,column:10},end:{line:109,column:14}},type:"binary-expr",locations:[{start:{line:106,column:10},end:{line:106,column:22}},{start:{line:106,column:42},end:{line:109,column:14}}],line:106},11:{loc:{start:{line:108,column:150},end:{line:108,column:291}},type:"cond-expr",locations:[{start:{line:108,column:200},end:{line:108,column:244}},{start:{line:108,column:247},end:{line:108,column:291}}],line:108},12:{loc:{start:{line:110,column:10},end:{line:113,column:14}},type:"binary-expr",locations:[{start:{line:110,column:10},end:{line:110,column:29}},{start:{line:110,column:49},end:{line:113,column:14}}],line:110},13:{loc:{start:{line:112,column:150},end:{line:112,column:291}},type:"cond-expr",locations:[{start:{line:112,column:200},end:{line:112,column:245}},{start:{line:112,column:248},end:{line:112,column:291}}],line:112}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/panels/Settings.tsx"],names:["useContext","useMemo","styled","Button","CloseButton","Icon","Inline","Padbox","Stack","Text","getHidableColumns","IndeterminateCheckbox","SettingsItems","DSContext","useSafeTranslation","SettingsRoot","div","withConfig","displayName","componentId","Settings","table","getAllLeafColumns","getCenterLeafColumns","getLeftLeafColumns","getRightLeafColumns","getState","options","enableColumnPinning","enableHiding","setColumnOrder","setColumnPinning","setColumnVisibility","setShowColumnSettings","initialState","columnOrder","columnPinning","datatable","t","canHideMoreColumns","length","allColumns","Array","from","Set","map","colId","find","col","id","filter","Boolean","columnDef","columnDefType","getColumnsVisibilityInfo","hideableColumns","hiddenColumns","getIsVisible","areAllColumnsVisible","areSomeColumnsVisible","getColumnsPinnabilityInfo","pineableColumns","enablePinning","pinnedColumns","getIsPinned","areAllColumnsPinned","areSomeColumnsPinned","handleToggleAllColumnsVisibility","nextVisibility","forEach","index","toggleVisibility","handleToggleAllColumnsPinnability","pinned","left","overflow","position","top","settingsOffset","borderBottom","paddingRight","columnVisibility","e","target","checked"],mappings:"AA8KY,SACE,KADF;AA9KZ,SAASA,YAAYC,eAAe;AACpC,OAAOC,YAAY;AAEnB,OAAOC,YAAY;AACnB,SAASC,mBAAmB;AAC5B,SAASC,YAAY;AACrB,SAASC,QAAQC,QAAQC,aAAa;AACtC,SAASC,YAAY;AACrB,SAASC,yBAAyB;AAElC,OAAOC,2BAA2B;AAClC,OAAOC,mBAAmB;AAC1B,SAASC,iBAAiB;AAC1B,SAASC,0BAA0B;AAEnC,MAAMC,eAAeb,OAAOc,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAyC9B,EAAA,CAAA,s6BAAA,CAAA;AAED,MAAMC,WAAW,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACnE,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,MAAqBC;AAAAA,IAAa;AAAA,IAC7CC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIb;AACJ,QAAM;AAAA,IAAEc;AAAAA,IAAaC;AAAAA,EAAc,IAAIV,SAAS;AAChD,QAAM;AAAA,IAAEW;AAAAA,EAAU,IAAIrC,WAAWa,SAAS;AAC1C,QAAM;AAAA,IAAEyB;AAAAA,EAAE,IAAIxB,mBAAmB;AAEjC,QAAMyB,qBAAqB7B,kBAAkBW,KAAK,EAAEmB,SAAS;AAC7D,QAAMC,aAAaxC,QAAQ,MAAM;AAC/B,QAAIkC,YAAYK,SAAS,GAAG;AAC1B,aAAO,CACL,GAAGhB,mBAAmB,GACtB,GAAGkB,MAAMC,KAAK,IAAIC,IAAIT,WAAW,CAAC,EAAEU,IAAKC,WACvCvB,qBAAqB,EAAEwB,KAAMC,SAAQA,KAAKC,OAAOH,KAAK,CACxD,GACA,GAAGrB,oBAAoB,CAAC,EAEvByB,OAAOC,OAAO,EACdD,OAAQF,SAAQA,IAAII,UAAUC,kBAAkB,MAAM;AAAA,IAC3D;AAEA,WAAO/B,kBAAkB,EAAE4B,OACxBF,SAAQA,IAAII,UAAUC,kBAAkB,MAC3C;AAAA,EAEF,GAAG,CACDlB,aACAC,eACAd,mBACAE,oBACAC,qBACAF,oBAAoB,CACrB;AAED,QAAM+B,2BAA2BA,MAAM;AACrC,UAAMC,kBAAkBjC,kBAAkB,EAAE4B,OACzCF,SAAQA,IAAII,UAAUvB,iBAAiB,KAC1C;AACA,UAAM2B,gBAAgBD,gBAAgBL,OACnCF,SAAQA,IAAIS,aAAa,MAAM,KAClC;AAEA,WAAO;AAAA,MACLC,sBAAsBF,cAAchB,WAAW;AAAA,MAC/CmB,uBACEH,cAAchB,SAAS,KACvBgB,cAAchB,SAASe,gBAAgBf;AAAAA,IAC3C;AAAA,EACF;AAEA,QAAMoB,4BAA4BA,MAAM;AACtC,UAAMC,kBAAkBvC,kBAAkB,EAAE4B,OACzCF,SAAQA,IAAII,UAAUU,kBAAkB,KAC3C;AACA,UAAMC,gBAAgBF,gBAAgBX,OACnCF,SAAQA,IAAIgB,YAAY,MAAM,KACjC;AAEA,WAAO;AAAA,MACLC,qBAAqBF,cAAcvB,WAAW;AAAA,MAC9C0B,sBACEH,cAAcvB,SAAS,KACvBuB,cAAcvB,SAASqB,gBAAgBrB;AAAAA,IAC3C;AAAA,EACF;AAEA,QAAM2B,mCAAmCA,CAACC,mBAA4B;AACpE9C,sBAAkB,EACf4B,OAAQF,SAAQA,IAAII,UAAUvB,iBAAiB,KAAK,EACpDwC,QAAQ,CAACrB,KAAKsB,UAAU;AAOvB,UAAIF,kBAAmB,CAACA,kBAAkBE,UAAU,GAAI;AACtDtB,YAAIuB,iBAAiBH,cAAc;AAAA,MACrC;AAAA,IACF,CAAC;AAAA,EACL;AAEA,QAAMI,oCAAoCA,CAACC,WAAoB;AAC7D1C,qBACE0C,SAAS;AAAA,MAAEC,MAAMpD,kBAAkB,EAAEuB,IAAKG,SAAQA,IAAIC,EAAE;AAAA,IAAE,IAAI,CAAC,CACjE;AAAA,EACF;AAEA,SACE,oBAAC,gBAAa,WAAU,2BACtB,+BAAC,SACC,OAAO;AAAA,IACL0B,UAAU;AAAA,IACVC,UAAU;AAAA,IACVC,KAAKxC,WAAWyC,kBAAkB;AAAA,EACpC,GAEA;AAAA,wBAAC,UACC,IAAG,UACH,aAAY,UACZ,OAAO;AAAA,MACLC,cAAc;AAAA,IAChB,GAEA,+BAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,iBACtC;AAAA,2BAAC,UAAO,OAAM,UAAS,KAAI,MACzB;AAAA,4BAAC,QAAK,MAAK,aAAW;AAAA,QACtB,oBAAC,QAAK,QAAM,MAAEzC,YAAE,gCAAgC,GAAE;AAAA,SACpD;AAAA,MACA,oBAAC,eACC,WAAWA,EAAE,gCAAgC,GAC7C,oBAAmB,MACnB,SAAS,MAAML,sBAAsB,KAAK,GAAE;AAAA,OAEhD,GACF;AAAA,IACA,oBAAC,UAAO,aAAY,MAAK,OAAO,CAAC,GAC/B,+BAAC,SAAM,KAAI,MACT;AAAA,2BAAC,UACC,KAAI,MACJ,SAAQ,SACR,OAAO;AAAA,QAAE+C,cAAc;AAAA,MAAwB,GAE/C;AAAA,4BAAC,SACC,8BAAC,UACC,MAAK,MACL,SAAQ,UACR,SAAS,MAAM;AACbjD,2BAAiBG,aAAaE,iBAAiB,CAAC,CAAC;AACjDJ,8BAAoBE,aAAa+C,oBAAoB,CAAC,CAAC;AACvDnD,yBAAeI,aAAaC,eAAe,EAAE;AAAA,QAC/C,GAECG,YAAE,gCAAgC,GACrC,GACF;AAAA,QACA,qBAAC,UAAO,KAAI,MAAK,SAAQ,OACtBT;AAAAA,0BACC,qBAAC,SAAM,KAAI,MAAK,SAAQ,UACtB;AAAA,gCAAC,QAAK,MAAK,OAAM,MAAK,MAAK,cAAY,MAAA;AAAA,YACvC,oBAAC,SAAI,WAAU,6BACb,8BAAC,yBACC,cACEyB,yBAAyB,EAAEI,uBACvBpB,EAAE,yCAAyC,IAC3CA,EAAE,yCAAyC,GAEjD,SACEgB,yBAAyB,EAAEI,sBAE7B,eACEJ,yBAAyB,EAAEK,uBAE7B,UAAWuB,OACTf,iCAAiCe,EAAEC,OAAOC,OAAO,GAClD,GAEL;AAAA,aACF;AAAA,UAEDxD,uBACC,qBAAC,SAAM,KAAI,MAAK,SAAQ,UACtB;AAAA,gCAAC,QAAK,MAAK,aAAY,MAAK,MAAK,cAAY,MAAA;AAAA,YAC7C,oBAAC,SAAI,WAAU,6BACb,8BAAC,yBACC,cACEgC,0BAA0B,EAAEK,sBACxB3B,EAAE,0CAA0C,IAC5CA,EAAE,wCAAwC,GAEhD,SACEsB,0BAA0B,EAAEK,qBAE9B,eACEL,0BAA0B,EAAEM,sBAE9B,UAAWgB,OACTV,kCAAkCU,EAAEC,OAAOC,OAAO,GACnD,GAEL;AAAA,aACF;AAAA,WAEJ;AAAA,SACF;AAAA,MACA,oBAAC,iBACC,YACA,oBACA,OAAa;AAAA,OAEjB,GACF;AAAA,KACF,GACF;AAEJ;AAEA,eAAehE;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5f251a60c6a055c56479a8afb81484374863bbc6"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return f=function(){return r},r}f();const _t=(f().s[0]++,he.div.withConfig({displayName:"Settings__SettingsRoot",componentId:"sc-10xs3m5-0"})(["display:flex;flex-direction:column;position:absolute;top:0;bottom:0;right:0;border-left:1px solid var(--sscds-table-color-border);background:white;box-shadow:var(--sscds-table-shadow-settings);width:100%;max-width:var(--sscds-table-size-settings-width);z-index:2;.ds-table-settings-panel-item{border:1px solid var(--sscds-table-color-border);&:first-of-type{border-top-left-radius:var(--sscds-table-radii-settings-item);border-top-right-radius:var(--sscds-table-radii-settings-item);}&:last-of-type{border-bottom-left-radius:var(--sscds-table-radii-settings-item);border-bottom-right-radius:var(--sscds-table-radii-settings-item);}}.ds-table-settings-panel-item + .ds-table-settings-panel-item{margin-top:-1px;}.ds-table-checkbox-wrapper{display:flex;padding:0 0.5rem;align-items:center;justify-content:center;input[type='checkbox']{width:1.25rem;height:1.25rem;accent-color:var(--sscds-color-background-action-highlight-default);}}"]));f().s[1]++;const la=({table:e})=>{f().f[0]++;const{getAllLeafColumns:a,getCenterLeafColumns:n,getLeftLeafColumns:t,getRightLeafColumns:l,getState:o,options:{enableColumnPinning:r,enableHiding:u},setColumnOrder:i,setColumnPinning:m,setColumnVisibility:A,setShowColumnSettings:p,initialState:d}=(f().s[2]++,e),{columnOrder:c,columnPinning:g}=(f().s[3]++,o()),{datatable:C}=(f().s[4]++,P.useContext(Vn)),{t:v}=(f().s[5]++,ce()),y=(f().s[6]++,Un(e).length>1),E=(f().s[7]++,P.useMemo(()=>(f().f[1]++,f().s[8]++,c.length>0?(f().b[0][0]++,f().s[9]++,[...t(),...Array.from(new Set(c)).map(N=>(f().f[2]++,f().s[10]++,n().find(H=>(f().f[3]++,f().s[11]++,(H==null?void 0:H.id)===N)))),...l()].filter(Boolean).filter(N=>(f().f[4]++,f().s[12]++,N.columnDef.columnDefType==="data"))):(f().b[0][1]++,f().s[13]++,a().filter(N=>(f().f[5]++,f().s[14]++,N.columnDef.columnDefType==="data")))),[c,g,a,t,l,n]));f().s[15]++;const I=()=>{f().f[6]++;const N=(f().s[16]++,a().filter(_=>(f().f[7]++,f().s[17]++,_.columnDef.enableHiding!==!1))),H=(f().s[18]++,N.filter(_=>(f().f[8]++,f().s[19]++,_.getIsVisible()===!1)));return f().s[20]++,{areAllColumnsVisible:H.length===0,areSomeColumnsVisible:(f().b[1][0]++,H.length>0&&(f().b[1][1]++,H.length<N.length))}};f().s[21]++;const U=()=>{f().f[9]++;const N=(f().s[22]++,a().filter(_=>(f().f[10]++,f().s[23]++,_.columnDef.enablePinning!==!1))),H=(f().s[24]++,N.filter(_=>(f().f[11]++,f().s[25]++,_.getIsPinned()===!1)));return f().s[26]++,{areAllColumnsPinned:H.length===0,areSomeColumnsPinned:(f().b[2][0]++,H.length>0&&(f().b[2][1]++,H.length<N.length))}};f().s[27]++;const O=N=>{f().f[12]++,f().s[28]++,a().filter(H=>(f().f[13]++,f().s[29]++,H.columnDef.enableHiding!==!1)).forEach((H,_)=>{f().f[14]++,f().s[30]++,f().b[4][0]++,N||(f().b[4][1]++,!N&&(f().b[4][2]++,_!==0))?(f().b[3][0]++,f().s[31]++,H.toggleVisibility(N)):f().b[3][1]++})};f().s[32]++;const J=N=>{f().f[15]++,f().s[33]++,m(N?(f().b[5][0]++,{left:a().map(H=>(f().f[16]++,f().s[34]++,H.id))}):(f().b[5][1]++,{}))};return f().s[35]++,s.jsx(_t,{className:"ds-table-settings-panel",children:s.jsxs("div",{style:{overflow:"auto",position:"sticky",top:(f().b[6][0]++,(C==null?void 0:C.settingsOffset)??(f().b[6][1]++,0))},children:[s.jsx(Be,{as:"header",paddingSize:"mdPlus",style:{borderBottom:"1px solid var(--sscds-border-color"},children:s.jsxs(te,{align:"center",gap:"md",justify:"space-between",children:[s.jsxs(te,{align:"center",gap:"md",children:[s.jsx(Ne,{name:"columns-3"}),s.jsx(Ue,{isBold:!0,children:v("sscds|datatable.settings.title")})]}),s.jsx(Ea,{ariaLabel:v("sscds|datatable.settings.close"),marginCompensation:"md",onClose:()=>(f().f[17]++,f().s[36]++,p(!1))})]})}),s.jsx(Be,{paddingSize:"md",style:{},children:s.jsxs(Oe,{gap:"md",children:[s.jsxs(te,{gap:"sm",stretch:"start",style:{paddingRight:"var(--sscds-space-2x)"},children:[s.jsx("div",{children:s.jsx(Pe,{size:"sm",variant:"subtle",onClick:()=>{f().f[18]++,f().s[37]++,m((f().b[7][0]++,d.columnPinning??(f().b[7][1]++,{}))),f().s[38]++,A((f().b[8][0]++,d.columnVisibility??(f().b[8][1]++,{}))),f().s[39]++,i((f().b[9][0]++,d.columnOrder??(f().b[9][1]++,[])))},children:v("sscds|datatable.settings.reset")})}),s.jsxs(te,{gap:"sm",stretch:"all",children:[(f().b[10][0]++,u&&(f().b[10][1]++,s.jsxs(Oe,{gap:"1x",justify:"center",children:[s.jsx(Ne,{name:"eye",size:"md",hasFixedSize:!0}),s.jsx("div",{className:"ds-table-checkbox-wrapper",children:s.jsx(Ke,{"aria-label":I().areAllColumnsVisible?(f().b[11][0]++,v("sscds|datatable.settings.hiding.hideAll")):(f().b[11][1]++,v("sscds|datatable.settings.hiding.showAll")),checked:I().areAllColumnsVisible,indeterminate:I().areSomeColumnsVisible,onChange:N=>(f().f[19]++,f().s[40]++,O(N.target.checked))})})]}))),(f().b[12][0]++,r&&(f().b[12][1]++,s.jsxs(Oe,{gap:"1x",justify:"center",children:[s.jsx(Ne,{name:"thumbtack",size:"md",hasFixedSize:!0}),s.jsx("div",{className:"ds-table-checkbox-wrapper",children:s.jsx(Ke,{"aria-label":U().areAllColumnsPinned?(f().b[13][0]++,v("sscds|datatable.settings.pinnig.unpinAll")):(f().b[13][1]++,v("sscds|datatable.settings.pinnig.pinAll")),checked:U().areAllColumnsPinned,indeterminate:U().areSomeColumnsPinned,onChange:N=>(f().f[20]++,f().s[41]++,J(N.target.checked))})})]})))]})]}),s.jsx(ta,{allColumns:E,canHideMoreColumns:y,table:e})]})})]})})};f().s[42]++;la.__docgenInfo={description:"",methods:[],displayName:"Settings",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function An(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableRoot.tsx",a="ddffb9ccdc754f0a3aa152707630e44f86916e41",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableRoot.tsx",statementMap:{0:{start:{line:3,column:18},end:{line:6,column:3850}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableRoot.tsx"],names:["styled","getColor","getRadii","TableRoot","div","withConfig","displayName","componentId"],mappings:"AAAA,OAAOA,YAAY;AAEnB,SAASC,UAAUC,gBAAgB;AAEnC,MAAMC,YAAYH,OAAOI,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,qVAAA,sBAAA,sBAAA,qDAAA,sBAAA,sBAAA,4pGAAA,GAoBPL,SAAS,OAAO,GACbD,SAAS,aAAa,GACtBA,SAAS,WAAW,GAGvBC,SAAS,OAAO,GACbD,SAAS,aAAa,GACtBA,SAAS,WAAW,CAAC;AAsM7C,eAAeE;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ddffb9ccdc754f0a3aa152707630e44f86916e41"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return An=function(){return r},r}An();const Yt=(An().s[0]++,he.div.withConfig({displayName:"TableRoot",componentId:"sc-1olpkzw-0"})(["position:relative;width:100%;max-width:100%;overflow-x:auto;transform:scale(1,-1);&[data-settings-state='open']{min-height:37.5rem;display:flex;align-content:flex-end;flex-wrap:wrap;background:var(--sscds-table-color-header-background);}&::-webkit-scrollbar{box-sizing:content-box;height:1.5rem;}&::-webkit-scrollbar-thumb{border-radius:",";background-color:",";border:8px solid ",";}&::-webkit-scrollbar-track-piece{border-radius:",";background-color:",";border:8px solid ",";}.ds-table{width:100%;transform:scale(1,-1);}.ds-table,.ds-table-header,.ds-table-body{display:grid;}.ds-table-row{display:flex;}.ds-table-body-row{align-items:flex-start;justify-content:flex-start;&[data-active='true'] .ds-table-cell{background-color:var(--sscds-table-color-active);}&[data-active]:hover .ds-table-cell{background-color:var(--sscds-color-primary-3);cursor:pointer;}}.ds-table-cell{display:flex;flex-direction:row;padding:var(--sscds-table-spacing-cell);height:100%;background-color:var(--sscds-table-color-background);&[data-pinned]:not([data-pinned='false']){position:sticky;z-index:1;& + .ds-table-cell[data-pinned='false']{border-left:none !important;}}}.ds-table-header-row,.ds-table-row:not(:last-of-type){border-bottom:1px solid var(--sscds-table-color-border);}.ds-table-header-cell{position:relative;flex-direction:column;justify-content:center;min-height:2.5rem;padding:var(--sscds-table-spacing-cell-header);background-color:var(--sscds-table-color-header-background);&:not(:first-of-type){border-left:1px solid var(--sscds-table-color-border) !important;}.ds-table-header-cell-title{text-align:left;font-weight:var(--sscds-table-typography-weight-header);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.ds-table-header-cell-resize-handler{margin:0;border:0;display:inline-block;width:0.25rem;background:var(--sscds-table-color-accent);cursor:col-resize;user-select:none;touch-action:none;position:absolute;top:0;bottom:0;right:0;opacity:0;transition:var(--sscds-action-transition);&:focus-visible{z-index:1;}}.ds-table-header-cell-sort-button{opacity:0;font-size:var(--sscds-font-size-body-sm);}.ds-table-header-cell-column-actions-button-wrapper{display:flex;align-items:center;position:absolute;top:0;right:0;bottom:0;opacity:0;background:linear-gradient( to right,transparent,var(--sscds-table-color-header-background) 20% );padding-block:var(--sscds-space-1x);padding-inline-start:var(--sscds-space-4x);padding-inline-end:var(--sscds-space-2x);transition:var(--sscds-action-transition);}&:hover,&:focus-within{.ds-table-header-cell-sort-button,.ds-table-header-cell-resize-handler,.ds-table-header-cell-column-actions-button-wrapper{opacity:1;}}&[data-sorted]:not([data-sorted='false']) .ds-table-header-cell-sort-button{opacity:1;}}.ds-table-body-cell{align-items:center;}.ds-table-body-cell:has([data-radix-popper-content-wrapper]){z-index:2 !important;}.ds-table-cell-select,.ds-table-cell-expand,.ds-table-cell-actions{min-width:3.5rem;flex:0 0 3.5rem;justify-content:center;padding:var(--sscds-table-spacing-cell-display);}.ds-table-detail-panel-cell{position:sticky;left:0;}.ds-table-select-button-target{width:2rem;height:2rem;display:grid;place-items:center;}&[data-fullscreen='true']{.ds-table{max-height:calc(100vh - var(--sscds-table-height-pagination));overflow:auto;}.ds-table-header{position:sticky;top:0;z-index:2;}}&[data-horizontal-scroll='false']{& .ds-table-cell{box-shadow:none !important;}& .ds-table-body-cell{border:none !important;}}.ds-table-unstyled-button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;text-align:inherit;outline:none;line-height:inherit;-webkit-appearance:none;}"],Je("round"),xe("primary.500"),xe("neutral.0"),Je("round"),xe("neutral.300"),xe("neutral.0")));function ne(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/ProgressBar.tsx",a="917f29c03eb8331559526a7c219d4d41142baac1",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/ProgressBar.tsx",statementMap:{0:{start:{line:5,column:13},end:{line:5,column:125}},1:{start:{line:6,column:20},end:{line:17,column:55}},2:{start:{line:6,column:50},end:{line:8,column:1}},3:{start:{line:9,column:35},end:{line:9,column:77}},4:{start:{line:15,column:6},end:{line:15,column:24}},5:{start:{line:17,column:6},end:{line:17,column:27}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:38},end:{line:6,column:39}},loc:{start:{line:6,column:50},end:{line:8,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:9,column:21},end:{line:9,column:22}},loc:{start:{line:9,column:35},end:{line:9,column:77}},line:9},2:{name:"(anonymous_2)",decl:{start:{line:13,column:457},end:{line:13,column:458}},loc:{start:{line:15,column:6},end:{line:15,column:24}},line:15},3:{name:"(anonymous_3)",decl:{start:{line:15,column:26},end:{line:15,column:27}},loc:{start:{line:17,column:6},end:{line:17,column:27}},line:17}},branchMap:{0:{loc:{start:{line:7,column:8},end:{line:7,column:35}},type:"binary-expr",locations:[{start:{line:7,column:8},end:{line:7,column:18}},{start:{line:7,column:22},end:{line:7,column:35}}],line:7},1:{loc:{start:{line:15,column:6},end:{line:15,column:24}},type:"cond-expr",locations:[{start:{line:15,column:14},end:{line:15,column:15}},{start:{line:15,column:18},end:{line:15,column:24}}],line:15},2:{loc:{start:{line:17,column:6},end:{line:17,column:27}},type:"cond-expr",locations:[{start:{line:17,column:17},end:{line:17,column:18}},{start:{line:17,column:21},end:{line:17,column:27}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/ProgressBar.tsx"],names:["styled","keyframes","memo","includes","getRadii","wave","ProgressBar","span","attrs","props","role","withConfig","shouldForwardProp","property","displayName","componentId","isTop","undefined","isBottom"],mappings:"AAAA,OAAOA,UAAUC,iBAAiB;AAClC,SAASC,YAAY;AACrB,SAASC,gBAAgB;AAEzB,SAASC,gBAAgB;AAEzB,MAAMC,OAAOJ,UAYZ,CAAA,mGAAA,CAAA;AAED,MAAMK,cAAcN,OAAOO,KACxBC,MAAOC,YAAW;AAAA,EACjBC,MAAMD,MAAMC,QAAQ;AACtB,EAAE,EACDC,WAAW;AAAA,EACVC,mBAAoBC,cAAa,CAACV,SAASU,UAAU,CAAC,SAAS,UAAU,CAAC;AAC5E,CAAC,EAACF,WAAA;AAAA,EAAAG,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,4GAAA,SAAA,uDAAA,gFAAA,sMAAA,GAOQ,CAAC;AAAA,EAAEC;AAAM,MAAOA,QAAQ,IAAIC,QAC/B,CAAC;AAAA,EAAEC;AAAS,MAAOA,WAAW,IAAID,QAIxBb,SAAS,SAAS,GAIpBC,IAAI;AAiBrB,eAAeH,KAAKI,WAAW;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"917f29c03eb8331559526a7c219d4d41142baac1"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return ne=function(){return r},r}ne();const Qt=(ne().s[0]++,Aa(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"])),zt=(ne().s[1]++,he.span.attrs(e=>(ne().f[0]++,ne().s[2]++,{role:(ne().b[0][0]++,e.role||(ne().b[0][1]++,"progressbar"))})).withConfig({shouldForwardProp:e=>(ne().f[1]++,ne().s[3]++,!ia(e,["isTop","isBottom"]))}).withConfig({displayName:"ProgressBar",componentId:"sc-7v6dfo-0"})(["display:block;background:var(--sscds-brand-100);overflow:hidden;position:absolute;left:0;right:0;bottom:",";top:",";z-index:1;height:0.25rem;width:100%;border-radius:",";-webkit-mask-image:-webkit-radial-gradient(white,black);&::after{animation:"," 2s linear 0.5s infinite;background:linear-gradient( 90deg,transparent,var(--sscds-brand-500),transparent );content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}"],({isTop:e})=>(ne().f[2]++,ne().s[4]++,e?(ne().b[1][0]++,0):(ne().b[1][1]++,void 0)),({isBottom:e})=>(ne().f[3]++,ne().s[5]++,e?(ne().b[2][0]++,0):(ne().b[2][1]++,void 0)),Je("default"),Qt)),fn=P.memo(zt);function de(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useHasHorizontalScroll.ts",a="d7e6d1d4aad0972fc2a20851bb75087f84d17fae",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useHasHorizontalScroll.ts",statementMap:{0:{start:{line:1,column:38},end:{line:11,column:1}},1:{start:{line:5,column:6},end:{line:5,column:11}},2:{start:{line:8,column:6},end:{line:8,column:16}},3:{start:{line:9,column:21},end:{line:9,column:89}},4:{start:{line:9,column:66},end:{line:9,column:85}},5:{start:{line:10,column:2},end:{line:10,column:28}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:38},end:{line:1,column:39}},loc:{start:{line:1,column:49},end:{line:11,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:9,column:52},end:{line:9,column:53}},loc:{start:{line:9,column:66},end:{line:9,column:85}},line:9}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/hooks/useHasHorizontalScroll.ts"],names:["useHasHorizontalScroll","table","getState","getVisibleFlatColumns","width","totalWidth","reduce","acc","col","getSize"],mappings:"AAEO,aAAMA,yBAAyB,CAAIC,UAAgC;AACxE,QAAM;AAAA,IAAEC;AAAAA,IAAUC;AAAAA,EAAsB,IAAIF;AAC5C,QAAM;AAAA,IAAEG;AAAAA,EAAM,IAAIF,SAAS;AAE3B,QAAMG,aAAaF,sBAAsB,EAAEG,OACzC,CAACC,KAAKC,QAAQD,MAAMC,IAAIC,QAAQ,GAChC,CACF;AAEA,SAAOJ,aAAaD;AACtB;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d7e6d1d4aad0972fc2a20851bb75087f84d17fae"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return de=function(){return r},r}de();de().s[0]++;const $t=e=>{de().f[0]++;const{getState:a,getVisibleFlatColumns:n}=(de().s[1]++,e),{width:t}=(de().s[2]++,a()),l=(de().s[3]++,n().reduce((o,r)=>(de().f[1]++,de().s[4]++,o+r.getSize()),0));return de().s[5]++,l>t};function M(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/Table.tsx",a="ee5156e22064f2b656c3c502df77eb12b4650fee",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/Table.tsx",statementMap:{0:{start:{line:11,column:14},end:{line:64,column:1}},1:{start:{line:23,column:6},end:{line:23,column:11}},2:{start:{line:31,column:6},end:{line:31,column:16}},3:{start:{line:34,column:6},end:{line:34,column:27}},4:{start:{line:35,column:30},end:{line:35,column:59}},5:{start:{line:36,column:25},end:{line:47,column:65}},6:{start:{line:37,column:20},end:{line:37,column:36}},7:{start:{line:38,column:21},end:{line:38,column:23}},8:{start:{line:39,column:4},end:{line:45,column:5}},9:{start:{line:39,column:17},end:{line:39,column:18}},10:{start:{line:40,column:21},end:{line:40,column:31}},11:{start:{line:41,column:20},end:{line:41,column:36}},12:{start:{line:42,column:6},end:{line:42,column:93}},13:{start:{line:42,column:37},end:{line:42,column:93}},14:{start:{line:43,column:6},end:{line:43,column:70}},15:{start:{line:44,column:6},end:{line:44,column:74}},16:{start:{line:46,column:4},end:{line:46,column:20}},17:{start:{line:48,column:2},end:{line:50,column:36}},18:{start:{line:49,column:4},end:{line:49,column:56}},19:{start:{line:51,column:2},end:{line:63,column:7}},20:{start:{line:55,column:8},end:{line:55,column:31}},21:{start:{line:67,column:0},end:{line:84,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:14},end:{line:11,column:15}},loc:{start:{line:13,column:6},end:{line:64,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:36,column:33},end:{line:36,column:34}},loc:{start:{line:36,column:39},end:{line:47,column:3}},line:36},2:{name:"(anonymous_2)",decl:{start:{line:48,column:12},end:{line:48,column:13}},loc:{start:{line:48,column:18},end:{line:50,column:3}},line:48},3:{name:"(anonymous_3)",decl:{start:{line:54,column:43},end:{line:54,column:44}},loc:{start:{line:54,column:52},end:{line:56,column:7}},line:54}},branchMap:{0:{loc:{start:{line:42,column:6},end:{line:42,column:93}},type:"if",locations:[{start:{line:42,column:6},end:{line:42,column:93}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:42},1:{loc:{start:{line:52,column:145},end:{line:52,column:183}},type:"cond-expr",locations:[{start:{line:52,column:166},end:{line:52,column:172}},{start:{line:52,column:175},end:{line:52,column:183}}],line:52},2:{loc:{start:{line:53,column:6},end:{line:53,column:71}},type:"binary-expr",locations:[{start:{line:53,column:6},end:{line:53,column:18}},{start:{line:53,column:38},end:{line:53,column:71}}],line:53},3:{loc:{start:{line:60,column:6},end:{line:60,column:74}},type:"binary-expr",locations:[{start:{line:60,column:6},end:{line:60,column:18}},{start:{line:60,column:38},end:{line:60,column:74}}],line:60},4:{loc:{start:{line:62,column:4},end:{line:62,column:66}},type:"binary-expr",locations:[{start:{line:62,column:4},end:{line:62,column:22}},{start:{line:62,column:42},end:{line:62,column:66}}],line:62}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/Table.tsx"],names:["useContext","useEffect","useMemo","Body","Header","parseCSSVarId","Settings","TableRoot","ProgressBar","DSContext","useHasHorizontalScroll","Table","table","getFlatHeaders","getState","options","columns","refs","tableRef","columnSizing","columnSizingInfo","columnVisibility","showColumnSettings","showProgress","isFullscreenMode","datatable","hasHorizontalScroll","columnSizeVars","headers","colSizes","i","length","header","colSize","getSize","subHeaders","id","column","onFullscreenModeChange","ref","current"],mappings:"AAkDI,mBAOqB,KACjB,YARJ;AAlDJ,SAASA,YAAYC,WAAWC,eAAe;AAG/C,OAAOC,UAAU;AACjB,OAAOC,YAAY;AACnB,SAASC,qBAAqB;AAC9B,OAAOC,cAAc;AACrB,OAAOC,eAAe;AACtB,OAAOC,iBAAiB;AACxB,SAASC,iBAAiB;AAC1B,SAASC,8BAA8B;AAEvC,MAAMC,QAAQ,CAAK;AAAA,EAAEC;AAAuC,MAAM;AAChE,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MAAEC;AAAAA,IAAQ;AAAA,IACnBC,MAAM;AAAA,MAAEC;AAAAA,IAAS;AAAA,EACnB,IAAIN;AACJ,QAAM;AAAA,IACJO;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIV,SAAS;AACb,QAAM;AAAA,IAAEW;AAAAA,EAAU,IAAIzB,WAAWS,SAAS;AAC1C,QAAMiB,sBAAsBhB,uBAAuBE,KAAK;AAExD,QAAMe,iBAAiBzB,QAAQ,MAAM;AACnC,UAAM0B,UAAUf,eAAe;AAC/B,UAAMgB,WAAsC,CAAC;AAC7C,aAASC,IAAI,GAAGA,IAAIF,QAAQG,QAAQD,KAAK;AACvC,YAAME,SAASJ,QAAQE,CAAC;AACxB,UAAIG,UAAUD,OAAOE,QAAQ;AAC7B,UAAIF,OAAOG,YAAYJ,OACrBE,WAAUA,UAAU,OAAOD,OAAOG,WAAWJ,SAAS;AACxDF,eAAS,YAAYxB,cAAc2B,OAAOI,EAAE,CAAC,OAAO,IAAIH;AACxDJ,eAAS,SAASxB,cAAc2B,OAAOK,OAAOD,EAAE,CAAC,OAAO,IAAIH;AAAAA,IAC9D;AACA,WAAOJ;AAAAA,EAET,GAAG,CAACb,SAASG,cAAcC,kBAAkBC,gBAAgB,CAAC;AAE9DpB,YAAU,MAAM;AACdwB,eAAWa,uBAAuBd,gBAAgB;AAAA,EACpD,GAAG,CAACA,kBAAkBC,SAAS,CAAC;AAEhC,SACE,iCACE;AAAA,yBAAC,aACC,mBAAiBD,kBACjB,0BAAwBE,qBACxB,uBAAqBJ,qBAAqB,SAAS,UACnD,UAAU,GAETC;AAAAA,sBAAgB,oBAAC,eAAY,OAAK,MAAG;AAAA,MACtC,qBAAC,WACC,KAAMgB,SAAQ;AACZrB,iBAASsB,UAAUD;AAAAA,MACrB,GACA,WAAU,YACV,OAAOZ,gBAEP;AAAA,4BAAC,UAAO,OAAa;AAAA,QACrB,oBAAC,QAAK,OAAa;AAAA,SACrB;AAAA,MACCJ,gBAAgB,oBAAC,eAAY,UAAQ,MAAG;AAAA,OAC3C;AAAA,IACCD,sBAAsB,oBAAC,YAAS,OAAgB;AAAA,KACnD;AAEJ;AAEA,eAAeX;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ee5156e22064f2b656c3c502df77eb12b4650fee"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return M=function(){return r},r}M();M().s[0]++;const oa=({table:e})=>{M().f[0]++;const{getFlatHeaders:a,getState:n,options:{columns:t},refs:{tableRef:l}}=(M().s[1]++,e),{columnSizing:o,columnSizingInfo:r,columnVisibility:u,showColumnSettings:i,showProgress:m,isFullscreenMode:A}=(M().s[2]++,n()),{datatable:p}=(M().s[3]++,P.useContext(Vn)),d=(M().s[4]++,$t(e)),c=(M().s[5]++,P.useMemo(()=>{var v;M().f[1]++;const g=(M().s[6]++,a()),C=(M().s[7]++,{});M().s[8]++;for(let y=(M().s[9]++,0);y<g.length;y++){const E=(M().s[10]++,g[y]);let I=(M().s[11]++,E.getSize());M().s[12]++,(v=E.subHeaders)!=null&&v.length?(M().b[0][0]++,M().s[13]++,I=I*1.05+E.subHeaders.length*2):M().b[0][1]++,M().s[14]++,C[`--header-${ln(E.id)}-size`]=I,M().s[15]++,C[`--col-${ln(E.column.id)}-size`]=I}return M().s[16]++,C},[t,o,r,u]));return M().s[17]++,P.useEffect(()=>{M().f[2]++,M().s[18]++,p==null||p.onFullscreenModeChange(A)},[A,p]),M().s[19]++,s.jsxs(s.Fragment,{children:[s.jsxs(Yt,{"data-fullscreen":A,"data-horizontal-scroll":d,"data-settings-state":i?(M().b[1][0]++,"open"):(M().b[1][1]++,"closed"),tabIndex:0,children:[(M().b[2][0]++,m&&(M().b[2][1]++,s.jsx(fn,{isTop:!0}))),s.jsxs("table",{ref:g=>{M().f[3]++,M().s[20]++,l.current=g},className:"ds-table",style:c,children:[s.jsx(na,{table:e}),s.jsx(Wn,{table:e})]}),(M().b[3][0]++,m&&(M().b[3][1]++,s.jsx(fn,{isBottom:!0})))]}),(M().b[4][0]++,i&&(M().b[4][1]++,s.jsx(la,{table:e})))]})};M().s[21]++;oa.__docgenInfo={description:"",methods:[],displayName:"Table",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function q(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/TopToolbar.tsx",a="63c7c05b6c212950a34d05a08b9f30ce59f4f894",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/TopToolbar.tsx",statementMap:{0:{start:{line:9,column:23},end:{line:12,column:64}},1:{start:{line:14,column:2},end:{line:14,column:86}},2:{start:{line:14,column:62},end:{line:14,column:81}},3:{start:{line:31,column:6},end:{line:31,column:11}},4:{start:{line:36,column:6},end:{line:36,column:16}},5:{start:{line:37,column:24},end:{line:37,column:74}},6:{start:{line:38,column:24},end:{line:38,column:58}},7:{start:{line:42,column:6},end:{line:42,column:26}},8:{start:{line:43,column:31},end:{line:45,column:3}},9:{start:{line:44,column:4},end:{line:44,column:41}},10:{start:{line:44,column:35},end:{line:44,column:39}},11:{start:{line:46,column:31},end:{line:48,column:3}},12:{start:{line:47,column:4},end:{line:47,column:39}},13:{start:{line:47,column:33},end:{line:47,column:37}},14:{start:{line:49,column:2},end:{line:63,column:10}},15:{start:{line:67,column:0},end:{line:84,column:2}}},fnMap:{0:{name:"getHiddenColumns",decl:{start:{line:13,column:9},end:{line:13,column:25}},loc:{start:{line:13,column:44},end:{line:15,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:14,column:48},end:{line:14,column:49}},loc:{start:{line:14,column:62},end:{line:14,column:81}},line:14},2:{name:"TopToolbar",decl:{start:{line:16,column:9},end:{line:16,column:19}},loc:{start:{line:18,column:3},end:{line:64,column:1}},line:18},3:{name:"(anonymous_3)",decl:{start:{line:43,column:31},end:{line:43,column:32}},loc:{start:{line:43,column:37},end:{line:45,column:3}},line:43},4:{name:"(anonymous_4)",decl:{start:{line:44,column:26},end:{line:44,column:27}},loc:{start:{line:44,column:35},end:{line:44,column:39}},line:44},5:{name:"(anonymous_5)",decl:{start:{line:46,column:31},end:{line:46,column:32}},loc:{start:{line:46,column:37},end:{line:48,column:3}},line:46},6:{name:"(anonymous_6)",decl:{start:{line:47,column:24},end:{line:47,column:25}},loc:{start:{line:47,column:33},end:{line:47,column:37}},line:47}},branchMap:{0:{loc:{start:{line:14,column:62},end:{line:14,column:81}},type:"cond-expr",locations:[{start:{line:14,column:68},end:{line:14,column:71}},{start:{line:14,column:74},end:{line:14,column:81}}],line:14},1:{loc:{start:{line:37,column:24},end:{line:37,column:74}},type:"binary-expr",locations:[{start:{line:37,column:24},end:{line:37,column:32}},{start:{line:37,column:36},end:{line:37,column:74}}],line:37},2:{loc:{start:{line:50,column:4},end:{line:53,column:9}},type:"cond-expr",locations:[{start:{line:50,column:32},end:{line:50,column:102}},{start:{line:50,column:121},end:{line:53,column:9}}],line:50},3:{loc:{start:{line:54,column:4},end:{line:56,column:9}},type:"binary-expr",locations:[{start:{line:54,column:4},end:{line:54,column:16}},{start:{line:54,column:20},end:{line:54,column:37}},{start:{line:54,column:57},end:{line:56,column:9}}],line:54},4:{loc:{start:{line:57,column:4},end:{line:59,column:120}},type:"binary-expr",locations:[{start:{line:57,column:5},end:{line:57,column:17}},{start:{line:57,column:21},end:{line:57,column:40}},{start:{line:57,column:44},end:{line:57,column:64}},{start:{line:57,column:85},end:{line:59,column:120}}],line:57},5:{loc:{start:{line:60,column:4},end:{line:62,column:123}},type:"binary-expr",locations:[{start:{line:60,column:4},end:{line:60,column:24}},{start:{line:60,column:44},end:{line:62,column:123}}],line:60},6:{loc:{start:{line:61,column:12},end:{line:61,column:52}},type:"cond-expr",locations:[{start:{line:61,column:31},end:{line:61,column:41}},{start:{line:61,column:44},end:{line:61,column:52}}],line:61}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0,0],4:[0,0,0,0],5:[0,0],6:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/toolbar/TopToolbar.tsx"],names:["styled","Inline","Padbox","Button","Text","abbreviateNumber","useSafeTranslation","Skeleton","TopToolbarRoot","withConfig","displayName","componentId","getHiddenColumns","columnVisibility","Object","values","reduce","acc","val","TopToolbar","table","getState","getPrePaginationRowModel","options","enableFullScreenMode","enableHiding","enableColumnPinning","enableColumnOrdering","rowCount","setShowColumnSettings","setIsFullscreenMode","isFullscreenMode","isLoading","totalRowCount","rows","length","hiddenColumns","t","lng","handleColumnSettings","old","handleFullscreenMode","count","name"],mappings:"AAkDM,SAGM,KAHN;AAlDN,OAAOA,YAAY;AAGnB,SAASC,QAAQC,cAAc;AAC/B,OAAOC,YAAY;AACnB,SAASC,YAAY;AAErB,SAASC,wBAAwB;AACjC,SAASC,0BAA0B;AACnC,SAASC,gBAAgB;AAEzB,MAAMC,iBAAiBR,OAAOE,MAAM,EAACO,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAEpC,EAAA,CAAA,0DAAA,CAAA;AAED,SAASC,iBAAiBC,kBAAmC;AAC3D,SAAOC,OAAOC,OAAOF,gBAAgB,EAAEG,OACrC,CAACC,KAAKC,QAASA,MAAMD,MAAMA,MAAM,GACjC,CACF;AACF;AAEA,SAASE,WAAc;AAAA,EAAEC;AAAuC,GAAG;AACjE,QAAM;AAAA,IACJC;AAAAA,IACAC;AAAAA,IACAC,SAAS;AAAA,MACPC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,MACAC;AAAAA,IACF;AAAA,IACAC;AAAAA,IACAC;AAAAA,EACF,IAAIV;AACJ,QAAM;AAAA,IAAEW;AAAAA,IAAkBlB;AAAAA,IAAkBmB;AAAAA,EAAU,IAAIX,SAAS;AACnE,QAAMY,gBAAgBL,YAAYN,yBAAyB,EAAEY,KAAKC;AAClE,QAAMC,gBAAgBxB,iBAAiBC,gBAAgB;AACvD,QAAM;AAAA,IAAEwB;AAAAA,IAAGC;AAAAA,EAAI,IAAIhC,mBAAmB;AAEtC,QAAMiC,uBAAuBA,MAAM;AACjCV,0BAAuBW,SAAQ,CAACA,GAAG;AAAA,EACrC;AACA,QAAMC,uBAAuBA,MAAM;AACjCX,wBAAqBU,SAAQ,CAACA,GAAG;AAAA,EACnC;AAEA,SACE,oBAAC,kBAAe,aAAY,MAAK,aAAY,UAC3C,+BAAC,UAAO,OAAM,UAAS,KAAI,MAAK,SAAQ,SACrCR;AAAAA,gBACC,oBAAC,SACC,8BAAC,YAAS,OAAO,IAAG,GACtB,IAEA,oBAAC,QACEK,YAAE,0CAA0C;AAAA,MAC3CK,OAAOT;AAAAA,MACPA,eAAe5B,iBAAiB4B,eAAeK,GAAG;AAAA,IACpD,CAAC,GACH;AAAA,IAEDb,gBAAgBW,gBAAgB,KAC/B,oBAAC,QAAK,SAAQ,UACXC,YAAE,4CAA4C;AAAA,MAC7CK,OAAON;AAAAA,IACT,CAAC,GACH;AAAA,KAEAX,gBAAgBC,uBAAuBC,yBACvC,oBAAC,UACC,WAAW;AAAA,MAAEgB,MAAM;AAAA,IAAY,GAC/B,MAAK,MACL,SAAQ,SACR,SAASJ,sBAERF,YAAE,oCAAoC,GACzC;AAAA,IAEDb,wBACC,oBAAC,UACC,WAAW;AAAA,MAAEmB,MAAMZ,mBAAmB,aAAa;AAAA,IAAS,GAC5D,MAAK,MACL,SAAQ,SACR,SAASU,sBAERJ,YAAE,uCAAuC,GAC5C;AAAA,KAEJ,GACF;AAEJ;AAEA,eAAelB;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"63c7c05b6c212950a34d05a08b9f30ce59f4f894"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return q=function(){return r},r}q();const Wt=(q().s[0]++,he(Be).withConfig({displayName:"TopToolbar__TopToolbarRoot",componentId:"sc-1b3chbo-0"})(["border-bottom:1px solid var(--sscds-table-color-border);"]));function Lt(e){return q().f[0]++,q().s[1]++,Object.values(e).reduce((a,n)=>(q().f[1]++,q().s[2]++,n?(q().b[0][0]++,a):(q().b[0][1]++,a+1)),0)}function ra({table:e}){q().f[2]++;const{getState:a,getPrePaginationRowModel:n,options:{enableFullScreenMode:t,enableHiding:l,enableColumnPinning:o,enableColumnOrdering:r,rowCount:u},setShowColumnSettings:i,setIsFullscreenMode:m}=(q().s[3]++,e),{isFullscreenMode:A,columnVisibility:p,isLoading:d}=(q().s[4]++,a()),c=(q().s[5]++,q().b[1][0]++,u??(q().b[1][1]++,n().rows.length)),g=(q().s[6]++,Lt(p)),{t:C,lng:v}=(q().s[7]++,ce());q().s[8]++;const y=()=>{q().f[3]++,q().s[9]++,i(I=>(q().f[4]++,q().s[10]++,!I))};q().s[11]++;const E=()=>{q().f[5]++,q().s[12]++,m(I=>(q().f[6]++,q().s[13]++,!I))};return q().s[14]++,s.jsx(Wt,{paddingSize:"md",paddingType:"squish",children:s.jsxs(te,{align:"center",gap:"2x",stretch:"start",children:[d?(q().b[2][0]++,s.jsx("div",{children:s.jsx(rn,{width:80})})):(q().b[2][1]++,s.jsx(Ue,{children:C("sscds|datatable.topToolbar.itemCounter",{count:c,totalRowCount:He(c,v)})})),(q().b[3][0]++,l&&(q().b[3][1]++,g>0)&&(q().b[3][2]++,s.jsx(Ue,{variant:"subtle",children:C("sscds|datatable.topToolbar.hiddenColumns",{count:g})}))),(q().b[4][0]++,(l||(q().b[4][1]++,o)||(q().b[4][2]++,r))&&(q().b[4][3]++,s.jsx(Pe,{iconStart:{name:"columns-3"},size:"sm",variant:"ghost",onClick:y,children:C("sscds|datatable.topToolbar.columns")}))),(q().b[5][0]++,t&&(q().b[5][1]++,s.jsx(Pe,{iconStart:{name:A?(q().b[6][0]++,"compress"):(q().b[6][1]++,"expand")},size:"sm",variant:"ghost",onClick:E,children:C("sscds|datatable.topToolbar.fullScreen")})))]})})}q().s[15]++;ra.__docgenInfo={description:"",methods:[],displayName:"TopToolbar",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function W(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableSurface.tsx",a="4ce73a1c372ef8960ebf70d0816d2d8ac7ff5f44",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableSurface.tsx",statementMap:{0:{start:{line:8,column:22},end:{line:13,column:624}},1:{start:{line:13,column:6},end:{line:13,column:623}},2:{start:{line:14,column:21},end:{line:54,column:1}},3:{start:{line:19,column:6},end:{line:19,column:11}},4:{start:{line:22,column:6},end:{line:22,column:16}},5:{start:{line:23,column:2},end:{line:53,column:7}},6:{start:{line:57,column:0},end:{line:74,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:14},end:{line:11,column:15}},loc:{start:{line:13,column:6},end:{line:13,column:623}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:14,column:21},end:{line:14,column:22}},loc:{start:{line:16,column:6},end:{line:54,column:1}},line:16}},branchMap:{0:{loc:{start:{line:13,column:6},end:{line:13,column:623}},type:"binary-expr",locations:[{start:{line:13,column:6},end:{line:13,column:19}},{start:{line:13,column:23},end:{line:13,column:623}}],line:13},1:{loc:{start:{line:24,column:44},end:{line:24,column:76}},type:"cond-expr",locations:[{start:{line:24,column:63},end:{line:24,column:69}},{start:{line:24,column:72},end:{line:24,column:76}}],line:24},2:{loc:{start:{line:42,column:9},end:{line:46,column:12}},type:"cond-expr",locations:[{start:{line:42,column:28},end:{line:46,column:7}},{start:{line:46,column:10},end:{line:46,column:12}}],line:42},3:{loc:{start:{line:48,column:6},end:{line:48,column:82}},type:"binary-expr",locations:[{start:{line:48,column:6},end:{line:48,column:36}},{start:{line:48,column:56},end:{line:48,column:82}}],line:48},4:{loc:{start:{line:51,column:4},end:{line:51,column:121}},type:"binary-expr",locations:[{start:{line:51,column:4},end:{line:51,column:36}},{start:{line:51,column:40},end:{line:51,column:76}},{start:{line:51,column:96},end:{line:51,column:121}}],line:51},5:{loc:{start:{line:52,column:4},end:{line:52,column:119}},type:"binary-expr",locations:[{start:{line:52,column:4},end:{line:52,column:34}},{start:{line:52,column:38},end:{line:52,column:73}},{start:{line:52,column:93},end:{line:52,column:119}}],line:52}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0,0],5:[0,0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/table/TableSurface.tsx"],names:["styled","css","Surface","Pagination","Selection","Table","TopToolbar","DatatableRoot","div","withConfig","displayName","componentId","$isFullscreen","TableSurface","table","getState","isFullscreenMode","position","overflow","width","maxWidth","options","enableTopToolbar","enableRowSelection","enableSelectionToolbar","enablePagination","getRowModel","rows","length"],mappings:"AA+CM,SAqCqC,KArCrC;AA/CN,OAAOA,UAAUC,WAAW;AAE5B,SAASC,eAAe;AAExB,OAAOC,gBAAgB;AACvB,OAAOC,eAAe;AACtB,OAAOC,WAAW;AAClB,OAAOC,gBAAgB;AAEvB,MAAMC,gBAAgBP,OAAOQ,IAAGC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,IAAA,GAAA,GAC5B,CAAC;AAAA,EAAEC;AAAc,MACjBA,iBACAX,wlBA0BC;AAGL,MAAMY,eAAe,CAAK;AAAA,EAAEC;AAAuC,MAAM;AACvE,QAAM;AAAA,IAAEC;AAAAA,EAAS,IAAID;AACrB,QAAM;AAAA,IAAEE;AAAAA,EAAiB,IAAID,SAAS;AAEtC,SACE,qBAAC,iBAAc,eAAeC,kBAC5B;AAAA,yBAAC,WACC,QAAQA,mBAAmB,SAAS,MACpC,OAAO;AAAA,MACL,kCAAkC;AAAA,MAClC,8BAA8B;AAAA,MAC9B,8BAA8B;AAAA,MAC9B,yCACE;AAAA,MACF,2CACE;AAAA,MACF,8BAA8B;AAAA,MAC9B,8BAA8B;AAAA,MAC9B,qCAAqC;AAAA,MACrC,sCACE;AAAA,MACF,0CACE;AAAA,MACF,iCACE;AAAA,MACF,iCACE;AAAA,MACF,kCACE;AAAA,MACF,qCAAqC;AAAA,MACrC,qCAAqC;AAAA,MACrCC,UAAU;AAAA,MACVC,UAAU;AAAA,MACV,GAAIF,mBACA;AAAA,QACEE,UAAU;AAAA,QACVC,OAAO;AAAA,QACPC,UAAU;AAAA,MACZ,IACA,CAAC;AAAA,IACP,GACA,WAAS,MAERN;AAAAA,YAAMO,QAAQC,oBAAoB,oBAAC,cAAW,OAAgB;AAAA,MAC/D,oBAAC,SAAM,OAAa;AAAA,OACtB;AAAA,IACCR,MAAMO,QAAQE,sBACbT,MAAMO,QAAQG,0BAA0B,oBAAC,aAAU,OAAgB;AAAA,IACpEV,MAAMO,QAAQI,oBACbX,MAAMY,YAAY,EAAEC,KAAKC,SAAS,KAAK,oBAAC,cAAW,OAAgB;AAAA,KACvE;AAEJ;AAEA,eAAef;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4ce73a1c372ef8960ebf70d0816d2d8ac7ff5f44"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return W=function(){return r},r}W();const Jt=(W().s[0]++,he.div.withConfig({displayName:"TableSurface__DatatableRoot",componentId:"sc-1akd3x4-0"})(["",";"],({$isFullscreen:e})=>(W().f[0]++,W().s[1]++,W().b[0][0]++,e&&(W().b[0][1]++,da(["--sscds-table-height-pagination:3rem;--sscds-table-height-selection:5.125rem;position:fixed;inset:0;padding:0 !important;margin:0 !important;z-index:999;width:100vw;height:100vh;background:white;display:grid;grid-template-rows:1fr;&:has(.ds-table-pagination-toolbar){grid-template-rows:1fr var(--sscds-table-height-pagination);}&:has(.ds-table-selection-toolbar){grid-template-rows:1fr var(--sscds-table-height-selection);}&:has(.ds-table-pagination-toolbar):has(.ds-table-selection-toolbar){grid-template-rows:1fr var(--sscds-table-height-selection) var( --sscds-table-height-pagination );}"])))));W().s[2]++;const ua=({table:e})=>{W().f[1]++;const{getState:a}=(W().s[3]++,e),{isFullscreenMode:n}=(W().s[4]++,a());return W().s[5]++,s.jsxs(Jt,{$isFullscreen:n,children:[s.jsxs(un,{radius:n?(W().b[1][0]++,"none"):(W().b[1][1]++,"md"),style:{"--sscds-table-color-background":"var(--sscds-background)","--sscds-table-color-border":"var(--sscds-border-color)","--sscds-table-color-accent":"var(--sscds-color-primary-9)","--sscds-table-color-header-background":"var(--sscds-color-neutral-2)","--sscds-table-color-settings-background":"var(--sscds-table-color-background)","--sscds-table-color-active":"var(--sscds-color-neutral-3)","--sscds-table-spacing-cell":"var(--sscds-space-2x)","--sscds-table-spacing-cell-header":"var(--sscds-space-2x)","--sscds-table-spacing-cell-display":"var(--sscds-space-1x) var(--sscds-space-3x)","--sscds-table-typography-weight-header":"var(--sscds-font-weight-elementlabel-strong)","--sscds-table-shadow-settings":"-6px 0px 12px 0px rgba(0, 0, 0, 0.07)","--sscds-table-shadow-pin-left":"8px 0px 8px 0px rgba(0, 0, 0, 0.05)","--sscds-table-shadow-pin-right":"-8px 0px 8px 0px rgba(0, 0, 0, 0.05)","--sscds-table-size-settings-width":"22.5rem","--sscds-table-radii-settings-item":"var(--sscds-radii-default)",position:"relative",overflow:"clip",...n?(W().b[2][0]++,{overflow:"hidden",width:"100%",maxWidth:"100%"}):(W().b[2][1]++,{})},hasBorder:!0,children:[(W().b[3][0]++,e.options.enableTopToolbar&&(W().b[3][1]++,s.jsx(ra,{table:e}))),s.jsx(oa,{table:e})]}),(W().b[4][0]++,e.options.enableRowSelection&&(W().b[4][1]++,e.options.enableSelectionToolbar)&&(W().b[4][2]++,s.jsx(_n,{table:e}))),(W().b[5][0]++,e.options.enablePagination&&(W().b[5][1]++,e.getRowModel().rows.length>0)&&(W().b[5][2]++,s.jsx(Tn,{table:e})))]})};W().s[6]++;ua.__docgenInfo={description:"",methods:[],displayName:"TableSurface",props:{table:{required:!0,tsType:{name:"DatatableInstance",elements:[{name:"D"}],raw:"DatatableInstance<D>"},description:""}}};function re(){var e="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/Datatable.tsx",a="6e3d541b2ceef2f804a834b131f8d7710d77ff6b",n=window,t="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/Datatable.tsx",statementMap:{0:{start:{line:6,column:18},end:{line:34,column:1}},1:{start:{line:7,column:17},end:{line:7,column:41}},2:{start:{line:14,column:6},end:{line:14,column:11}},3:{start:{line:15,column:52},end:{line:20,column:4}},4:{start:{line:21,column:16},end:{line:30,column:4}},5:{start:{line:31,column:2},end:{line:31,column:42}},6:{start:{line:32,column:2},end:{line:32,column:50}},7:{start:{line:33,column:2},end:{line:33,column:54}},8:{start:{line:37,column:0},end:{line:3938,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:18},end:{line:6,column:19}},loc:{start:{line:6,column:29},end:{line:34,column:1}},line:6}},branchMap:{0:{loc:{start:{line:18,column:18},end:{line:18,column:36}},type:"binary-expr",locations:[{start:{line:18,column:18},end:{line:18,column:30}},{start:{line:18,column:34},end:{line:18,column:36}}],line:18},1:{loc:{start:{line:23,column:7},end:{line:29,column:10}},type:"cond-expr",locations:[{start:{line:23,column:31},end:{line:29,column:5}},{start:{line:29,column:8},end:{line:29,column:10}}],line:23}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/Datatable.tsx"],names:["useLogger","useDatatable","usePersistentState","TableSurface","Datatable","props","logger","id","enablePersistentState","columns","initialState","state","persistentState","persistentStateSetters","enabled","table","log","getState"],mappings:"AAkCS;AAlCT,SAASA,iBAAiB;AAC1B,SAASC,oBAAoB;AAC7B,SAASC,0BAA0B;AAEnC,OAAOC,kBAAkB;AAEzB,MAAMC,YAAY,CAAKC,UAA+B;AACpD,QAAMC,SAASN,UAAU,aAAa;AACtC,QAAM;AAAA,IAAEO;AAAAA,IAAIC;AAAAA,IAAuBC;AAAAA,IAASC;AAAAA,IAAcC;AAAAA,EAAM,IAAIN;AACpE,QAAM,CAACO,iBAAiBC,sBAAsB,IAAIX,mBAChD,YAAYK,EAAE,IACd;AAAA,IACEO,SAASN;AAAAA,IACTC;AAAAA,IACAC,cAAcA,gBAAgB,CAAC;AAAA,IAC/BL;AAAAA,EACF,CACF;AACA,QAAMU,QAAQd,aAAa;AAAA,IACzB,GAAGI;AAAAA,IACH,GAAIG,wBACA;AAAA,MACEG,OAAO;AAAA,QACL,GAAGA;AAAAA,QACH,GAAGC;AAAAA,MACL;AAAA,MACA,GAAGC;AAAAA,IACL,IACA,CAAC;AAAA,EACP,CAAC;AAEDP,SAAOU,IAAI,sBAAsBD,KAAK;AACtCT,SAAOU,IAAI,mBAAmBD,MAAME,SAAS,CAAC;AAE9C,SAAO,oBAAC,gBAAa,OAAgB;AACvC;AAEA,eAAeb;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6e3d541b2ceef2f804a834b131f8d7710d77ff6b"},o=n[t]||(n[t]={});(!o[e]||o[e].hash!==a)&&(o[e]=l);var r=o[e];return re=function(){return r},r}re();re().s[0]++;const Xt=e=>{re().f[0]++;const a=(re().s[1]++,sa("DatatableV2")),{id:n,enablePersistentState:t,columns:l,initialState:o,state:r}=(re().s[2]++,e),[u,i]=(re().s[3]++,Ot(`sscds_dt_${n}`,{enabled:t,columns:l,initialState:(re().b[0][0]++,o??(re().b[0][1]++,{})),props:e})),m=(re().s[4]++,Mt({...e,...t?(re().b[1][0]++,{state:{...r,...u},...i}):(re().b[1][1]++,{})}));return re().s[5]++,a.log("Datatable Instance",m),re().s[6]++,a.log("Datatable State",m.getState()),re().s[7]++,s.jsx(ua,{table:m})};re().s[8]++;Xt.__docgenInfo={description:"",methods:[],displayName:"Datatable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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

@default true`},enableMultiSort:{required:!1,tsType:{name:"boolean"},description:`Enables/disables if multiple columns can be sorted at the same time. If enabled multiple columns
can be sorted while SHIFT key is hold

@default false`},enableMultiRemove:{required:!1,tsType:{name:"boolean"},description:`Enables/disables the ability to remove multi-sorts

@default false`},enablePagination:{required:!1,tsType:{name:"boolean"},description:`Enables/disables pagination for the table.

@default true`},enablePersistentState:{required:!1,tsType:{name:"boolean"},description:`Enables/disables storing table state into LocalStorage. This will automatically store pinned
and hidden columns, columns order and size and sorting. This property REQUIRES 'id' prop to be
set. The state will be stored in LS with key in format \`sscds_dt_<id>\`.

@default true`},enableRowActions:{required:!1,tsType:{name:"boolean"},description:`Enables/disables row actions column for the table.

@default false`},enableRowSelection:{required:!1,tsType:{name:"TableOptions['enableRowSelection']",raw:"TableOptions<D>['enableRowSelection']"},description:`Enables/disables row selection for the table.

@default true`},enableBatchRowSelection:{required:!1,tsType:{name:"boolean"},description:"Enables/disables batch row selection when `Shift` key is pressed.\n\n@default true"},enableRowsPerPage:{required:!1,tsType:{name:"boolean"},description:`Enables/disables rows per page selector for the table. This property REQUIRES
\`enablePagination\` to be true.

@default false`},enableSelectAll:{required:!1,tsType:{name:"boolean"},description:`Enables/disables checkbox in the table header that selects all rows at once.

@default true`},enableSelectionToolbar:{required:!1,tsType:{name:"boolean"},description:`Enables/disables the selection toolbar with the batch action buttons. If this is set to \`false\`
consumers has to control the selection state on their own as the Datatable doesn't provide other
way how to access the interal state.

@default true`},enableSorting:{required:!1,tsType:{name:"boolean"},description:`Enables/disables table sorting

@default true`},enableSortingRemoval:{required:!1,tsType:{name:"boolean"},description:`Enables/disables if column can be toggled to unsorted state after sorting happened before

@default true`},enableTopToolbar:{required:!1,tsType:{name:"boolean"},description:`Enables/disables the top toolbar with table settings buttons

@default true`},id:{required:!0,tsType:{name:"string"},description:"Unique table identifier. Used as id for storing table state to LocalStorage when enablePersistentState is enabled"},initialState:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`Omit<
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
>`},{name:"CustomState"}]}],raw:"Partial<DatatableState>"},description:"Current state of the table. Used when you need to manage table state on your own."}},composes:["Omit"]};export{Xt as D};
//# sourceMappingURL=Datatable-CWBSn2lL.js.map
