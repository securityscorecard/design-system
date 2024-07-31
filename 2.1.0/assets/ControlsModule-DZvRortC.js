import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{s as ie,k as se,p as te,m as oe,t as ne,S as E,P as ae}from"./space-B9R18Mwn.js";import{P as r}from"./index-Dk74W0Oi.js";import{E as L}from"./Message-C3lQWFI8.js";import{v as le,b as de,F as pe}from"./Filters-DqTDlEEi.js";import"./Surface-Cs7tekjF.js";import{P as G}from"./Padbox-BrtZqAZY.js";import{S as M}from"./Stack-B_iJg7G-.js";import{I as _}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./Checkbox-BglAPnik.js";import"./Input-CwSx1PX_.js";import"./Label-B8OlZEa3.js";import"./MultiValueInput-C6fEM2Nq.js";import"./Password-D7QM-IUi.js";import"./Radio-DFCni97p.js";import"./Select-BLoNL4vb.js";import"./CreatableSelect-E3UeHrc0.js";import"./Range-Bir4y49t.js";import"./Switch-D9B5JuGJ.js";import"./TextArea-COoMwukw.js";import{S as z}from"./SearchBar-Bv5RW7j4.js";import"./SegmentedToggleItem-DDZuede1.js";import"./InputGroup-YSY5KnVJ.js";import"./BaseDateRangePicker-On7sDHGq.js";import"./SingleDatePicker-BSv1bju8.js";import{S as K}from"./Icon-B7DxM8PH.js";import{C as ue}from"./ColumnsControls-BvXBgOEc.js";import{C as U}from"./ControlButton-BBMhxOrx.js";import{D as m}from"./Datatable.store-C2OZ8Th5.js";import"./DSProvider-DzIDhM_J.js";import{m as me}from"./theme-BW2FcxSF.js";import"./index-DFvsTZbx.js";import{o as ce}from"./omit-SByFF4Xo.js";import{z as fe}from"./zipObj-D5WCOpKt.js";import{i as w}from"./isNonEmptyArray-WRg_f07P.js";import{i as ge}from"./isNotNilOrEmpty-Drr4-pBH.js";import{a as ye}from"./all-C7zVCIcz.js";const H={onSearch:r.func.isRequired,onClear:r.func.isRequired,placeholder:r.string,isValidatedOnSubmit:r.bool,pattern:r.string,errorMessage:r.string,isDisabled:r.bool,defaultValue:r.string},V=({onSearch:c,onClear:f,placeholder:g="Search",isValidatedOnSubmit:j=!1,pattern:b,errorMessage:v,...d})=>{const[p,y]=a.useState(!1),[A,C]=a.useState(!1),[T,P]=a.useState(0),x=()=>{C(!1),y(!1),f==null||f()},F=async u=>{C(!0),await c(u),C(!1)},h=u=>{const I=u.target,q=le(I),l=()=>{q||F(I.value)};j?u.key==="Enter"&&(y(q),l()):(y(q),T&&window.clearTimeout(T),P(window.setTimeout(()=>{l()},500)))};return d.defaultValue!==void 0?t.jsxs(M,{children:[t.jsx(z,{isInvalid:p,isSearching:A,pattern:b,placeholder:g,onClear:x,onKeyUp:h,...d}),p&&t.jsx(L,{children:v})]}):t.jsxs(M,{children:[t.jsx(z,{isInvalid:p,isSearching:A,pattern:b,placeholder:g,onClear:x,onKeyUp:h,...d}),p&&t.jsx(L,{children:v})]})};V.propTypes=H;V.__docgenInfo={description:"",methods:[],displayName:"Search",props:{isInvalid:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(query: string) => void | Promise<void>",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",type:{name:"func"}},onClear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1},type:{name:"string"}},isValidatedOnSubmit:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},pattern:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},errorMessage:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}},composes:["Omit"]};const Ce={hasSearch:r.bool,searchConfig:r.exact(H).isRequired,hasFiltering:r.bool,defaultIsFilteringOpen:r.bool,defaultIsFilteringApplied:r.bool,filteringConfig:r.exact(de).isRequired,isDataLoading:r.bool,onCancelLoading:r.func,onControlToggle:r.func,hasColumnsControls:r.bool.isRequired,defaultIsColumnsControlsOpen:r.bool.isRequired,defaultIsColumnsControlsApplied:r.bool.isRequired},i={filters:"filters",columns:"columns"},he=ie(G).withConfig({displayName:"ControlsModule__FiltersContainer",componentId:"sc-fatra2-0"})(["display:flex;background-color:",";"],se("neutral.0")),qe=te(ce,oe(c=>({...c,isActive:!1}))),B=fe(["isActive","isApplied"]),Se={isActive:!1,isApplied:!1},Q=me(Se);function R({hasSearch:c,searchConfig:f,hasFiltering:g,filteringConfig:j,defaultIsFilteringOpen:b,defaultIsFilteringApplied:v,hasColumnsControls:d,defaultIsColumnsControlsOpen:p,defaultIsColumnsControlsApplied:y,isDataLoading:A,onCancelLoading:C,onControlToggle:T}){const{onClose:P,onApply:x,state:F,fields:h,...u}=j,{onSearch:I,onClear:q,defaultValue:l,...J}=f,W=m.useState(e=>e.filters),[n,N]=a.useState({[i.filters]:Q(B([b,v||w(F)])),[i.columns]:Q(B([p,y]))}),[X,Y]=a.useState(0);a.useEffect(()=>{m.update(e=>{e.query=l,e.filters=F,e.hasAppliedFilters=n[i.filters].isApplied})},[]);const Z=g||d,D=g&&w(h),O=(e,s)=>{N(o=>({...o,[e]:{...o[e],...s}}))},S=(e,s)=>{T(e,!s),N(o=>({...qe([e],o),[e]:{...o[e],isActive:!o[e].isActive}}))},$=()=>{P(),O(i.filters,{isActive:!1})},ee=e=>{const s=w(e);x(e),O(i.filters,{isApplied:s}),m.update(o=>{o.pageIndex=0,o.filters=e,o.hasAppliedFilters=s,o.isCanceled=!1}),Y(e.length)},k=e=>{I(e),m.update(s=>{s.pageIndex=0,s.query=e,s.isCanceled=!1,s.shouldResetSelectedRows=!0})},re=()=>{q(),m.update(e=>{e.pageIndex=0,e.query=""})};return a.useEffect(()=>{ge(l)&&k(l)},[]),a.useEffect(()=>{const e=m.subscribe(s=>({columnOrder:s.columnOrder,hiddenColumns:s.hiddenColumns}),({columnOrder:s,hiddenColumns:o})=>{ye(ne,[s,o])&&O(i.columns,{isApplied:!1})});return()=>{e()}},[]),t.jsxs("div",{children:[t.jsx(G,{paddingSize:E.md,paddingType:ae.squish,children:t.jsxs(_,{gap:E.lg,stretch:"end",children:[Z&&t.jsxs(_,{gap:"mdPlus",children:[d&&t.jsx(ue,{isOpen:n[i.columns].isActive,onApply:e=>{O(i.columns,{isApplied:e}),S(i.columns,n[i.columns].isActive)},onClose:()=>S(i.columns,n[i.columns].isActive),onOpen:()=>S(i.columns,n[i.columns].isActive),children:e=>t.jsx(U,{iconName:K.columns3,label:"Toggle columns",onClick:()=>S(i.columns,n[i.columns].isActive),...e})}),D&&t.jsx(U,{appliedFilters:X,iconName:K.filter,label:"Filters",onClick:()=>S(i.filters,n[i.filters].isActive)})]}),c&&t.jsx(V,{defaultValue:l,onClear:re,onSearch:k,...J})]})}),D&&n[i.filters].isActive&&t.jsx(he,{paddingSize:E.md,children:t.jsx(pe,{fields:h,isLoading:A,state:W,onApply:ee,onCancel:C,onClose:$,...u})})]})}R.propTypes=Ce;R.displayName="ControlsModule";R.__docgenInfo={description:"",methods:[],displayName:"ControlsModule",props:{hasSearch:{description:"",type:{name:"bool"},required:!1},searchConfig:{description:"",type:{name:"exact",value:{onSearch:{name:"func",required:!0},onClear:{name:"func",required:!0},placeholder:{name:"string",required:!1},isValidatedOnSubmit:{name:"bool",required:!1},pattern:{name:"string",required:!1},errorMessage:{name:"string",required:!1},isDisabled:{name:"bool",required:!1},defaultValue:{name:"string",required:!1}}},required:!0},hasFiltering:{description:"",type:{name:"bool"},required:!1},defaultIsFilteringOpen:{description:"",type:{name:"bool"},required:!1},defaultIsFilteringApplied:{description:"",type:{name:"bool"},required:!1},filteringConfig:{description:"",type:{name:"exact",value:{fields:{name:"arrayOf",value:{name:"custom",raw:"FieldPropTypes"},required:!0},state:{name:"arrayOf",value:{name:"custom",raw:"FilterStatePropType"},required:!1},isLoading:{name:"bool",required:!1},isCancelEnabled:{name:"bool",required:!1},isOperatorFieldEnabled:{name:"bool",required:!1},defaultOperator:{name:"enum",value:[{value:'"and"',computed:!1},{value:'"or"',computed:!1}],required:!1},onApply:{name:"func",required:!1},onClose:{name:"func",required:!1},onCancel:{name:"func",required:!1},onChange:{name:"func",required:!1},onError:{name:"func",required:!1}}},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},onCancelLoading:{description:"",type:{name:"func"},required:!1},onControlToggle:{description:"",type:{name:"func"},required:!1},hasColumnsControls:{description:"",type:{name:"bool"},required:!0},defaultIsColumnsControlsOpen:{description:"",type:{name:"bool"},required:!0},defaultIsColumnsControlsApplied:{description:"",type:{name:"bool"},required:!0}}};export{R as C};
