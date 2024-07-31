import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as k}from"./Heading-Doa2oxzU.js";import{P as S}from"./Paragraph-DD2XWiUD.js";import{a as I}from"./Text-C1sA-5dj.js";import"./Surface-Cs7tekjF.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import{I as N}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{S as F}from"./Spinner-DLDOSOzx.js";import{_ as R,w as l,a5 as $,aj as q,L,ak as j,e as T,a3 as K,p as G,v as M,S as O,i as m,s as u,I as v,h as c,A as h,D as W,G as C,H as U,k as a,r as V,m as E}from"./space-B9R18Mwn.js";import"./DSProvider-DzIDhM_J.js";import"./theme-BW2FcxSF.js";import"./index-DFvsTZbx.js";import{T as J,A as Q,b as X}from"./BaseTable.styles-2ZZNyzZ6.js";import{R as Y}from"./index-BwDkhjyp.js";import{S as f,I as Z}from"./Icon-B7DxM8PH.js";import{c as x}from"./index-CVyJwDg7.js";import{m as ee,i as _}from"./isFunction-Wst0ouRg.js";import{b as w}from"./both-CuwR4I11.js";import{p as te}from"./pluck-CCxX0LJC.js";import{f as re}from"./flip-BqWK4A3v.js";import{D as oe}from"./DropdownMenu-BTsEoeHW.js";import"./DropdownMenu.types-B7-2fpHE.js";import{w as ie,h as se,s as ne}from"./ellipsisH-CxP8BjCT.js";import{P as n}from"./index-Dk74W0Oi.js";import{c as b}from"./action.types-BWYzzYyM.js";var ae=R(function(o,i){return l($(ee,0,te("length",i)),function(){var s=arguments,r=this;return o.apply(r,q(function(p){return p.apply(r,s)},i))})}),de=R(function(o,i){return o%i});const ce=de;var le=w(L,isFinite);const pe=le;var me=l(1,pe),ue=_(Number.isFinite)?l(1,j(Number.isFinite,Number)):me;const ge=ue;var fe=w(ge,ae(T,[Math.floor,K]));const ye=fe;var he=l(1,ye),we=_(Number.isInteger)?l(1,j(Number.isInteger,Number)):he;const be=we;var xe=l(1,w(be,G(re(ce)(2),M(T)(0))));const ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{margin:{top:0,bottom:.8},children:"No data available"}),e.jsx(S,{margin:{bottom:.8},size:I.md,children:"There are no records in this database."})]});ke.__docgenInfo={description:"",methods:[],displayName:"NoData"};const Se=()=>e.jsxs(e.Fragment,{children:[e.jsxs(N,{align:"center",gap:O.sm,children:[e.jsx(F,{borderWidth:2,height:16,horizontalMargin:0,verticalMargin:0,width:16,dark:!0}),e.jsx(k,{margin:{top:0,bottom:0,left:.5},children:"Loading"})]}),e.jsx(S,{margin:{top:.8,bottom:.8},size:I.md,children:"This may take a few moments."})]});Se.__docgenInfo={description:"",methods:[],displayName:"LoadingNoData"};const D=t=>m(t)&&{style:{flex:"0 0 auto"}},Ie=t=>t==="left"?"left: 0;":t==="right"?"right: 0;":"",Ne=({sticky:t})=>m(t)&&`
    justify-content: center;
    flex: 0 0 auto;
    position: sticky;
    z-index: 4;
    ${Ie(t)}
  `,y=u(Z).attrs(t=>({color:v.neutral700,margin:{left:.3},...t})).withConfig({displayName:"SortingIcon__StyledIcon",componentId:"sc-1eol5cc-0"})(["font-size:",";",";"],c(10),({$isActive:t})=>t&&h(["font-size:",";"],c(14))),P=Y.memo(({isSorted:t,isSortedDesc:o})=>o?e.jsx(y,{name:f.sortDown,$isActive:!0}):t?e.jsx(y,{name:f.sortUp,$isActive:!0}):e.jsx(y,{color:v.neutral500,name:f.sort}));P.__docgenInfo={description:"",methods:[],displayName:"SortingIcon",props:{isSorted:{required:!0,tsType:{name:"boolean"},description:""},isSortedDesc:{required:!0,tsType:{name:"boolean"},description:""}}};const Re=u.th.withConfig({displayName:"Head__StyledTh",componentId:"sc-180umfb-0"})(["display:flex;align-items:center;min-height:",";font-weight:",";font-size:",";line-height:",";text-align:left;padding:",";background-color:",";border-color:",";border-style:solid;border-width:1px 0 1px 1px;",";",";&:first-of-type{border-left:0;}"],c(48),W("bold"),C("md"),U("md"),c(12,8),a("neutral.0"),a("neutral.300"),Ne,({sticky:t})=>t==="left"&&h(["border-right:1px solid ",";&:first-of-type + &{border-left:0;}"],a("neutral.300")));function A({headerGroups:t}){return e.jsx("thead",{children:t.map(o=>{const{key:i,...s}=o.getHeaderGroupProps();return e.jsx("tr",{...s,children:o.headers.map(r=>{const{key:p,...g}=r.getHeaderProps({...r.getSortByToggleProps({...r.getSortByToggleProps(),title:r.canSort?`Sort ${r.Header}`:void 0}),...D(r.sticky)});return e.jsxs(Re,{...g,sticky:r.sticky,children:[e.jsx(J,{popupRenderer:()=>r.headerTooltip,shouldRender:m(r.headerTooltip),children:r.render("Header")}),r.canSort&&e.jsx(P,{isSorted:r.isSorted,isSortedDesc:r.isSortedDesc})]},p)})},i)})})}A.displayName="Head";A.__docgenInfo={description:"",methods:[],displayName:"Head",props:{headerGroups:{required:!0,tsType:{name:"Array",elements:[{name:"HeaderGroup",elements:[{name:"D"}],raw:"HeaderGroup<D>"}],raw:"HeaderGroup<D>[]"},description:""}}};function H({rows:t,prepareRow:o,...i}){return e.jsx("tbody",{...i,children:t.map((s,r)=>{o(s);const{key:p,...g}=s.getRowProps();return e.jsx("tr",{...g,className:x("ds-table-row",{"is-selected":s.isSelected}),children:s.cells.map(d=>{const{key:z,...B}=d.getCellProps(D(d.column.sticky));return e.jsx("td",{className:x("ds-table-cell",{"is-sticky":m(d.column.sticky),"is-sticky-left":d.column.sticky==="left","is-sticky-right":d.column.sticky==="right","is-odd":xe(r)}),...B,children:d.render("Cell")},z)})},p)})})}H.displayName="Body";H.__docgenInfo={description:"",methods:[],displayName:"Body",props:{prepareRow:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: Row<D>) => void",signature:{arguments:[{type:{name:"Row",elements:[{name:"D"}],raw:"Row<D>"},name:"row"}],return:{name:"void"}}},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"Row",elements:[{name:"D"}],raw:"Row<D>"}],raw:"Row<D>[]"},description:""}},composes:["TableBodyProps"]};const je=u.svg.withConfig({displayName:"actionsColumn__SVGIcon",componentId:"sc-oz8pgb-0"})(["display:inline-block;width:1rem;height:1rem;"]),Te=u.button.withConfig({displayName:"actionsColumn__RowActionsButton",componentId:"sc-oz8pgb-1"})(["display:flex;justify-content:center;align-items:center;width:",";height:",";color:",";font-size:",";border-radius:",";border:0 none;background:transparent;cursor:pointer;&:hover{background:",";}",";"],c(24),c(24),a("neutral.600"),C("lg"),V("default"),a("neutral.200"),({isActive:t})=>t&&h(["&,&:hover{background:",";color:",";}"],a("primary.400"),a("neutral.0")));function it(){return{id:Q,sticky:"right",width:48,disableSortBy:!0,cellType:X.actions,Cell:t=>{const{row:o,rowActions:i}=t,s=E(r=>({...r,onClick:()=>r.onClick(o.id,o.original)}))(i);return e.jsx(N,{justify:"center",stretch:"start",children:e.jsx(oe,{actions:s,paneWidth:"auto",placement:"bottom-end",children:r=>e.jsx(Te,{"aria-label":"Row Actions",isActive:r,children:e.jsx(je,{role:"presentation",viewBox:`0 0 ${ie} ${se}`,xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:ne,fill:"currentColor"})})})})})}}}const ve=n.exact({...b,onClick:n.func.isRequired}),Ce=n.exact({...b,onClick:n.func,hrefComposer:n.func.isRequired}),_e=n.exact({...b,onClick:n.func,toComposer:n.func.isRequired}),st=n.oneOfType([ve,Ce,_e]);export{H as B,A as H,Se as L,ke as N,st as R,it as g};
