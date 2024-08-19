import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as a}from"./index-CTjT7uj6.js";import{s as ie,k as le,p as ne,V as oe,r as re,S as E,P as ae}from"./space-1LtLrmuu.js";import{P as t}from"./index-BRV0Se7Z.js";import{E as L}from"./Message-6KzRW5US.js";import{v as se,b as ue,F as de}from"./Filters-DaqJyQg6.js";import"./Surface-DpLLkhSd.js";import{P as Q}from"./Padbox-DKEfmyAv.js";import{S as M}from"./Stack-D3Wl5zWT.js";import{I as k}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./Checkbox-DtOI_Iry.js";import"./Input-CflEDIf9.js";import"./Label-Bgxc31x7.js";import"./MultiValueInput-D_NZt4Q-.js";import"./Password-DMckXrPE.js";import"./Radio-DvXQpNUS.js";import"./Select-D2oYJWhQ.js";import"./CreatableSelect-DuZZJGpq.js";import"./Range-BxXBtghR.js";import"./Switch-BouC_1R9.js";import"./TextArea-dzhcLn8B.js";import{S as z}from"./SearchBar-CgCaR-wq.js";import"./SegmentedToggleItem-CNyXGxSM.js";import"./InputGroup-pSAtlOG3.js";import"./BaseDateRangePicker-DYt_PHqx.js";import"./SingleDatePicker-DIUObEQq.js";import{S as K}from"./Icon-4JNizDXH.js";import{C as pe}from"./ColumnsControls-gjbtFimJ.js";import{C as U}from"./ControlButton-Bah5uQC8.js";import{D as m}from"./Datatable.store-D58zn130.js";import"./DSProvider-IYcK3cWD.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import{m as ce}from"./theme-Cr_I21Pv.js";import{o as me}from"./omit-C7oLbB4m.js";import{z as fe}from"./zipObj-DVsQulIT.js";import{i as N}from"./isNonEmptyArray-CGykYah7.js";import{i as ge}from"./isNotNilOrEmpty-cGK6as13.js";import{a as Ce}from"./all-iEGJVrnb.js";const G={onSearch:t.func.isRequired,onClear:t.func.isRequired,placeholder:t.string,isValidatedOnSubmit:t.bool,pattern:t.string,errorMessage:t.string,isDisabled:t.bool,defaultValue:t.string},j=({onSearch:s,onClear:f,placeholder:g="Search",isValidatedOnSubmit:_=!1,pattern:V,errorMessage:A,...d})=>{const[p,C]=a.useState(!1),[q,h]=a.useState(!1),[v,P]=a.useState(0),I=()=>{h(!1),C(!1),f==null||f()},x=async c=>{h(!0),await s(c),h(!1)},y=c=>{const F=c.target,S=se(F),u=()=>{S||x(F.value)};_?c.key==="Enter"&&(C(S),u()):(C(S),v&&window.clearTimeout(v),P(window.setTimeout(()=>{u()},500)))};return d.defaultValue!==void 0?n.jsxs(M,{children:[n.jsx(z,{isInvalid:p,isSearching:q,pattern:V,placeholder:g,onClear:I,onKeyUp:y,...d}),p&&n.jsx(L,{children:A})]}):n.jsxs(M,{children:[n.jsx(z,{isInvalid:p,isSearching:q,pattern:V,placeholder:g,onClear:I,onKeyUp:y,...d}),p&&n.jsx(L,{children:A})]})};j.propTypes=G;try{j.displayName="Search",j.__docgenInfo={description:"",displayName:"Search",props:{onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(query: string) => void | Promise<void>"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},placeholder:{defaultValue:{value:"Search"},description:"",name:"placeholder",required:!1,type:{name:"string"}},isValidatedOnSubmit:{defaultValue:{value:"false"},description:"",name:"isValidatedOnSubmit",required:!1,type:{name:"boolean"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}const he={hasSearch:t.bool,searchConfig:t.exact(G).isRequired,hasFiltering:t.bool,defaultIsFilteringOpen:t.bool,defaultIsFilteringApplied:t.bool,filteringConfig:t.exact(ue).isRequired,isDataLoading:t.bool,onCancelLoading:t.func,onControlToggle:t.func,hasColumnsControls:t.bool.isRequired,defaultIsColumnsControlsOpen:t.bool.isRequired,defaultIsColumnsControlsApplied:t.bool.isRequired},i={filters:"filters",columns:"columns"},ye=ie(Q).withConfig({displayName:"ControlsModule__FiltersContainer",componentId:"sc-fatra2-0"})(["display:flex;background-color:",";"],le("neutral.0")),Se=ne(me,oe(s=>({...s,isActive:!1}))),B=fe(["isActive","isApplied"]),be={isActive:!1,isApplied:!1},H=ce(be);function O({hasSearch:s,searchConfig:f,hasFiltering:g,filteringConfig:_,defaultIsFilteringOpen:V,defaultIsFilteringApplied:A,hasColumnsControls:d,defaultIsColumnsControlsOpen:p,defaultIsColumnsControlsApplied:C,isDataLoading:q,onCancelLoading:h,onControlToggle:v}){const{onClose:P,onApply:I,state:x,fields:y,...c}=_,{onSearch:F,onClear:S,defaultValue:u,...J}=f,W=m.useState(e=>e.filters),[r,R]=a.useState({[i.filters]:H(B([V,A||N(x)])),[i.columns]:H(B([p,C]))}),[X,Y]=a.useState(0);a.useEffect(()=>{m.update(e=>{e.query=u,e.filters=x,e.hasAppliedFilters=r[i.filters].isApplied})},[]);const Z=g||d,D=g&&N(y),T=(e,l)=>{R(o=>({...o,[e]:{...o[e],...l}}))},b=(e,l)=>{v(e,!l),R(o=>({...Se([e],o),[e]:{...o[e],isActive:!o[e].isActive}}))},$=()=>{P(),T(i.filters,{isActive:!1})},ee=e=>{const l=N(e);I(e),T(i.filters,{isApplied:l}),m.update(o=>{o.pageIndex=0,o.filters=e,o.hasAppliedFilters=l,o.isCanceled=!1}),Y(e.length)},w=e=>{F(e),m.update(l=>{l.pageIndex=0,l.query=e,l.isCanceled=!1,l.shouldResetSelectedRows=!0})},te=()=>{S(),m.update(e=>{e.pageIndex=0,e.query=""})};return a.useEffect(()=>{ge(u)&&w(u)},[]),a.useEffect(()=>{const e=m.subscribe(l=>({columnOrder:l.columnOrder,hiddenColumns:l.hiddenColumns}),({columnOrder:l,hiddenColumns:o})=>{Ce(re,[l,o])&&T(i.columns,{isApplied:!1})});return()=>{e()}},[]),n.jsxs("div",{children:[n.jsx(Q,{paddingSize:E.md,paddingType:ae.squish,children:n.jsxs(k,{gap:E.lg,stretch:"end",children:[Z&&n.jsxs(k,{gap:"mdPlus",children:[d&&n.jsx(pe,{isOpen:r[i.columns].isActive,onApply:e=>{T(i.columns,{isApplied:e}),b(i.columns,r[i.columns].isActive)},onClose:()=>b(i.columns,r[i.columns].isActive),onOpen:()=>b(i.columns,r[i.columns].isActive),children:e=>n.jsx(U,{iconName:K.columns3,label:"Toggle columns",onClick:()=>b(i.columns,r[i.columns].isActive),...e})}),D&&n.jsx(U,{appliedFilters:X,iconName:K.filter,label:"Filters",onClick:()=>b(i.filters,r[i.filters].isActive)})]}),s&&n.jsx(j,{defaultValue:u,onClear:te,onSearch:w,...J})]})}),D&&r[i.filters].isActive&&n.jsx(ye,{paddingSize:E.md,children:n.jsx(de,{fields:y,isLoading:q,state:W,onApply:ee,onCancel:h,onClose:$,...c})})]})}O.propTypes=he;O.displayName="ControlsModule";try{O.displayName="ControlsModule",O.__docgenInfo={description:"",displayName:"ControlsModule",props:{onColumnVisibilityChange:{defaultValue:null,description:"",name:"onColumnVisibilityChange",required:!0,type:{name:"(hiddenColumns: IdType<D>[]) => void"}},onControlToggle:{defaultValue:null,description:"",name:"onControlToggle",required:!0,type:{name:"(control: Controls, isActive: boolean) => void"}},onCancelLoading:{defaultValue:null,description:"",name:"onCancelLoading",required:!0,type:{name:"() => void"}},hasSearch:{defaultValue:null,description:"",name:"hasSearch",required:!0,type:{name:"boolean"}},searchConfig:{defaultValue:null,description:"",name:"searchConfig",required:!0,type:{name:"Partial<SearchProps>"}},hasFiltering:{defaultValue:null,description:"",name:"hasFiltering",required:!0,type:{name:"boolean"}},filteringConfig:{defaultValue:null,description:"",name:"filteringConfig",required:!0,type:{name:"Partial<FiltersProps>"}},defaultIsFilteringOpen:{defaultValue:null,description:"",name:"defaultIsFilteringOpen",required:!0,type:{name:"boolean"}},defaultIsFilteringApplied:{defaultValue:null,description:"",name:"defaultIsFilteringApplied",required:!0,type:{name:"boolean"}},hasColumnsControls:{defaultValue:null,description:"",name:"hasColumnsControls",required:!0,type:{name:"boolean"}},defaultIsColumnsControlsOpen:{defaultValue:null,description:"",name:"defaultIsColumnsControlsOpen",required:!0,type:{name:"boolean"}},defaultIsColumnsControlsApplied:{defaultValue:null,description:"",name:"defaultIsColumnsControlsApplied",required:!0,type:{name:"boolean"}},isDataLoading:{defaultValue:null,description:"",name:"isDataLoading",required:!0,type:{name:"boolean"}}}}}catch{}export{O as C};
