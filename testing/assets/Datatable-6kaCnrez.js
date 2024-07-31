import{j as c}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{P as e}from"./index-BRV0Se7Z.js";import{B as N,s as L,k as T,r as B,i as K,j as M,p as V,m as j}from"./space-BY85GhUc.js";import{a as w}from"./index-Bl_jQQ83.js";import"./Surface-CvF-S7pg.js";import{P as z}from"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{c as H,d as _}from"./Filters-CFnOTFBy.js";import{D as l,d as $}from"./Datatable.store-D58zn130.js";import{p as U}from"./pick-DB5feQ9Q.js";import{w as W}from"./when-DJfveLYW.js";import{p as X}from"./propEq-CyrJNrjT.js";import{A as G}from"./BatchActions-CQRUh8gW.js";import{m as J,b as Q}from"./defaultConfigs-BU_QJpC1.js";import{C as Y}from"./ControlsModule-CEoE7-G2.js";import{B as Z}from"./BatchModule-BMPKr54p.js";import{T as ee}from"./Table-MKSRqKtA.js";import{R as ne}from"./BaseTable.types-cuKXYoMJ.js";import{u as ae}from"./useColumnsControls-DyEKFv-h.js";import{u as re}from"./useLocalStorageState-CgPcEN2x.js";import{h as te,i as oe}from"./Select-Dx3xIfX3.js";import{n as k}from"./noop-CRTpovv1.js";var ie=N(function(n){for(var o={},a=0;a<n.length;)o[n[a][0]]=n[a][1],a+=1;return o});const le=ie,se=t=>{d.useEffect(()=>{const n=l.subscribe(U(["pageIndex","pageSize","sortBy","filters","query","isCanceled"]),W(X("isCanceled",!1),t));return()=>{n()}},[t])},ue=(t,n)=>{d.useEffect(()=>l.update(o=>{o.selectedIds=n}),[n]),d.useEffect(()=>{const o=l.subscribe(a=>({ids:a.selectedIds,hasExclusiveSelection:a.hasExclusiveSelection}),({ids:a,hasExclusiveSelection:f})=>{t(a,f)});return()=>{o()}},[t])},de={onSelect:e.func,NoDataComponent:e.elementType,NoMatchingDataComponent:e.elementType,hasSelection:e.bool,isMultiSelect:e.bool,hasOnlyPerPageSelection:e.bool,defaultSelectedRowIds:e.arrayOf(e.oneOfType([e.string,e.number])),hasPagination:e.bool,hasServerSidePagination:e.bool,defaultPageSize:e.number,hasSorting:e.bool,hasServerSideSorting:e.bool,defaultPageIndex:e.number,defaultSortBy:e.arrayOf(e.shape({id:e.string.isRequired,desc:e.bool})),defaultHiddenColumns:e.arrayOf(e.oneOfType([e.string,e.number])),defaultColumnOrder:e.arrayOf(e.oneOfType([e.string,e.number])),rowActions:e.arrayOf(ne)},me=L(z).withConfig({displayName:"Datatable__StyledDatatable",componentId:"sc-ekhe1z-0"})(["display:flex;flex-direction:column;position:relative;border:1px solid ",";border-radius:",";background:",";"],T("neutral.300"),B("double"),T("neutral.0")),ce=t=>V(j(n=>[n,!0]),le)(t);function y({id:t,data:n,dataSize:o,columns:a,dataPrimaryKey:f,onCancelLoading:b,isDataLoading:C=!1,onDataFetch:S=k,batchActions:R=[],isControlsEnabled:h=!0,isBatchModuleEnabled:P=!0,controlsConfig:q={},tableConfig:O={},resetSelectionFn:p}){const[r,D]=re(`datatable_${t}`);d.useEffect(()=>t?l.subscribe(i=>({hiddenColumns:i.hiddenColumns,columnOrder:i.columnOrder}),i=>{D(i)}):void 0,[]),d.useEffect(()=>()=>l.replace(te("isCanceled",!0,$)),[]);const g=K(b),{onColumnOrderChange:x,onColumnVisibilityChange:I,...m}=w(()=>J(oe(["filteringConfig","isCancelEnabled"],g)(q)),[q]),{onSelect:F,defaultSelectedRowIds:v,hasOnlyPerPageSelection:E,...s}=w(()=>Q(O),[O]);se(S),ue(F,v),ae(x,I,a,(r==null?void 0:r.columnOrder)||s.defaultColumnOrder,(r==null?void 0:r.hiddenColumns)||s.defaultHiddenColumns);const A=g?()=>{l.update(u=>{u.isCanceled=!0,u.filters=u.filters.map(i=>({...i,isCanceled:i.isLoading,isLoading:!1})),b()})}:k;return p==null||p(()=>{l.update(u=>{u.shouldResetSelectedRows=!0})}),c.jsxs(me,{className:M,children:[h&&c.jsx(Y,{...m,isDataLoading:C,onCancelLoading:A}),P&&c.jsx(Z,{actions:R,columns:{isButtonDisplayed:!h&&m.hasColumnsControls,defaultIsColumnsControlsOpen:m.defaultIsColumnsControlsOpen,defaultIsColumnsControlsApplied:m.defaultIsColumnsControlsApplied},dataSize:o,hasOnlyPerPageSelection:E,hasSelection:s.hasSelection}),c.jsx(ee,{columns:a,data:n,dataPrimaryKey:f,dataSize:o,defaultSelectedRows:ce(v),...s,defaultColumnOrder:(r==null?void 0:r.columnOrder)||s.defaultColumnOrder,defaultHiddenColumns:(r==null?void 0:r.hiddenColumns)||s.defaultHiddenColumns,isCancelDisabled:!g,isDataLoading:C,onCancelLoading:A})]})}y.propTypes={data:e.arrayOf(e.shape({})).isRequired,dataSize:e.number.isRequired,columns:e.arrayOf(e.shape({})).isRequired,isDataLoading:e.bool,batchActions:e.arrayOf(G),dataPrimaryKey:e.oneOfType([e.string,e.func]),isControlsEnabled:e.bool,controlsConfig:e.exact({onControlToggle:e.func,onCancelLoading:e.func,onColumnVisibilityChange:e.func,hasSearch:e.bool,searchConfig:e.exact({placeholder:e.string,onSearch:e.func,onClear:e.func,defaultValue:e.string,isValidatedOnSubmit:e.bool,pattern:e.string,errorMessage:e.string}),hasFiltering:e.bool,filteringConfig:e.exact({onChange:e.func,onApply:e.func,onClose:e.func,state:e.arrayOf(H),fields:e.arrayOf(_),isCancelEnabled:e.bool}),defaultIsFilteringOpen:e.bool,defaultIsFilteringApplied:e.bool,hasColumnsControls:e.bool,onColumnOrderChange:e.func,defaultIsColumnsControlsOpen:e.bool,defaultIsColumnsControlsApplied:e.bool}),tableConfig:e.exact(de),pageButtonsCount:e.number,resetSelectionFn:e.func,onDataFetch:e.func,onCancelLoading:e.func};y.displayName="Datatable";y.__docgenInfo={description:"",methods:[],displayName:"Datatable",props:{id:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"D"}],raw:"D[]"},description:"Table data you want to display",type:{name:"arrayOf",value:{name:"shape",value:{}}}},dataSize:{required:!0,tsType:{name:"number"},description:"Total size of data",type:{name:"number"}},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"D"}],raw:"Column<D>"}],raw:"Column<D>[]"},description:`Settings for each table column.

Extends: https://react-table.tanstack.com/docs/api/useTable#column-options`,type:{name:"arrayOf",value:{name:"shape",value:{}}}},isDataLoading:{required:!1,tsType:{name:"boolean"},description:"Flag to determine wheter data is currently loading",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onCancelLoading:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel function called upon request cancellation.",type:{name:"func"}},onDataFetch:{required:!1,tsType:{name:"signature",type:"function",raw:`({
  pageSize,
  pageIndex,
  sortBy,
  filters,
  query,
}: OnDataFetchArgs<D>) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  pageSize: number;
  pageIndex: number;
  sortBy: SortingRule<D>[];
  filters: Filter[];
  query: string;
}`,signature:{properties:[{key:"pageSize",value:{name:"number",required:!0}},{key:"pageIndex",value:{name:"number",required:!0}},{key:"sortBy",value:{name:"Array",elements:[{name:"SortingRule",elements:[{name:"D"}],raw:"SortingRule<D>"}],raw:"SortingRule<D>[]",required:!0}},{key:"filters",value:{name:"Array",elements:[{name:"Filter"}],raw:"Filter[]",required:!0}},{key:"query",value:{name:"string",required:!0}}]}},name:""}],return:{name:"void"}}},description:"Data fetch function called upon pagination, sorting, filtering and searching",defaultValue:{value:"noop",computed:!0},type:{name:"func"}},batchActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| ActionKinds<OnClickArgs, OnClickReturnType>
| ActionWithSubactions<OnClickArgs, OnClickReturnType>`,elements:[{name:"union",raw:`| (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]},{name:"intersection",raw:`ActionBase<OnClickArgs, OnClickReturnType> & {
  subActions: ActionKinds<OnClickArgs, OnClickReturnType>[];
  href?: never;
  to?: never;
}`,elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  name: string;
  onClick?: (...args: OnClickArgs) => OnClickReturnType;
  tooltip?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(...args: OnClickArgs) => OnClickReturnType",signature:{arguments:[{type:{name:"tuple",raw:"[string[], boolean, () => void]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"boolean"},{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}]},name:"args",rest:!0}],return:{name:"void"}},required:!1}},{key:"tooltip",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}},{name:"signature",type:"object",raw:`{
  subActions: ActionKinds<OnClickArgs, OnClickReturnType>[];
  href?: never;
  to?: never;
}`,signature:{properties:[{key:"subActions",value:{name:"Array",elements:[{name:"union",raw:`| (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"ActionKinds<OnClickArgs, OnClickReturnType>[]",required:!0}},{key:"href",value:{name:"never",required:!1}},{key:"to",value:{name:"never",required:!1}}]}}]}]}],raw:"Action<BatchActionArgs>[]"},description:`List of available batch actions for table

See: [action.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/types/action.types.ts)`,defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"custom",raw:"ActionPropType"}}},dataPrimaryKey:{required:!1,tsType:{name:"union",raw:`| string
| ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string)`,elements:[{name:"string"},{name:"unknown"}]},description:`Name of column used as table primary key or function to retrieve the key

Return value is used as id for selected rows`,type:{name:"union",value:[{name:"string"},{name:"func"}]}},isControlsEnabled:{required:!1,tsType:{name:"boolean"},description:"Flag to enable/disable top controls module",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},isBatchModuleEnabled:{required:!1,tsType:{name:"boolean"},description:"Flag to enable/disable batch actions module with element counter",defaultValue:{value:"true",computed:!1}},controlsConfig:{required:!1,tsType:{name:"Partial",elements:[{name:"ControlsConfig",elements:[{name:"D"}],raw:"ControlsConfig<D>"}],raw:"Partial<ControlsConfig<D>>"},description:`Config object for controls module

See: [ControlsModule.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/ControlsModule/ControlsModule.types.ts)`,defaultValue:{value:"{}",computed:!1},type:{name:"exact",value:{onControlToggle:{name:"func",required:!1},onCancelLoading:{name:"func",required:!1},onColumnVisibilityChange:{name:"func",required:!1},hasSearch:{name:"bool",required:!1},searchConfig:{name:"exact",value:{placeholder:{name:"string",required:!1},onSearch:{name:"func",required:!1},onClear:{name:"func",required:!1},defaultValue:{name:"string",required:!1},isValidatedOnSubmit:{name:"bool",required:!1},pattern:{name:"string",required:!1},errorMessage:{name:"string",required:!1}},required:!1},hasFiltering:{name:"bool",required:!1},filteringConfig:{name:"exact",value:{onChange:{name:"func",required:!1},onApply:{name:"func",required:!1},onClose:{name:"func",required:!1},state:{name:"arrayOf",value:{name:"custom",raw:"FilterStatePropType"},required:!1},fields:{name:"arrayOf",value:{name:"custom",raw:"FieldPropTypes"},required:!1},isCancelEnabled:{name:"bool",required:!1}},required:!1},defaultIsFilteringOpen:{name:"bool",required:!1},defaultIsFilteringApplied:{name:"bool",required:!1},hasColumnsControls:{name:"bool",required:!1},onColumnOrderChange:{name:"func",required:!1},defaultIsColumnsControlsOpen:{name:"bool",required:!1},defaultIsColumnsControlsApplied:{name:"bool",required:!1}}}},tableConfig:{required:!1,tsType:{name:"Partial",elements:[{name:"TableConfig",elements:[{name:"D"}],raw:"TableConfig<D>"}],raw:"Partial<TableConfig<D>>"},description:`Config object for table

See: [Table.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/Table/Table.types.ts)`,defaultValue:{value:"{}",computed:!1},type:{name:"exact",value:{onSelect:{name:"func",required:!1},NoDataComponent:{name:"elementType",required:!1},NoMatchingDataComponent:{name:"elementType",required:!1},hasSelection:{name:"bool",required:!1},isMultiSelect:{name:"bool",required:!1},hasOnlyPerPageSelection:{name:"bool",required:!1},defaultSelectedRowIds:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},hasPagination:{name:"bool",required:!1},hasServerSidePagination:{name:"bool",required:!1},defaultPageSize:{name:"number",required:!1},hasSorting:{name:"bool",required:!1},hasServerSideSorting:{name:"bool",required:!1},defaultPageIndex:{name:"number",required:!1},defaultSortBy:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},desc:{name:"bool",required:!1}}},required:!1},defaultHiddenColumns:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},defaultColumnOrder:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},rowActions:{name:"arrayOf",value:{name:"custom",raw:"RowActionKindsPropType"},required:!1}}}},resetSelectionFn:{required:!1,tsType:{name:"signature",type:"function",raw:"(resetFn: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"resetFn"}],return:{name:"void"}}},description:"Function that allow storing selection reset function in the parent component",type:{name:"func"}},pageButtonsCount:{description:"",type:{name:"number"},required:!1}}};export{y as D};
