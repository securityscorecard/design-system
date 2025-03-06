import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as k}from"./index-ClcD9ViR.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as m}from"./Datatable-D8zBFDck.js";import{a as F,T as e}from"./argTypes-ClIEYlAI.js";import"./index-CvqOkU93.js";import{u as q,f as Q}from"./externalData-rj_CaORY.js";import{B as d}from"./Button-mgF-9QWd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-DhLFZSdg.js";import"./index-CwwveOyd.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-CPYqWFL_.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-BHujzsX0.js";import"./SelectionToolbar-C5BQlbZT.js";import"./index-CUzBbf6F.js";import"./Icon-Bh7zeEtc.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-D88lkBP-.js";import"./index-C3NFEOoi.js";import"./Padbox-DyJBw-9L.js";import"./index-Bqw6gtNo.js";import"./prop-gA1VFyoz.js";import"./Inline-DoR-Gmpw.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C2D5KA8h.js";import"./index-CEsunubm.js";import"./Button-DDUAhNoT.js";import"./components-Crj7JrGD.js";import"./index-CqkKBNL-.js";import"./Spinner-ByPeh1d6.js";import"./useSafeTranslation-zmCT_kAg.js";import"./en-US-DVFKJdgt.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-BV8xP9mH.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-d2sY6OpO.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-aD75l0GC.js";import"./index-D7bO9QwG.js";import"./Tooltip-UvxVuC-4.js";import"./FloatingContext-f-xOTKfR.js";import"./index-D_kmftDK.js";import"./CloseButton-B8FZn_gb.js";import"./index-54z-fB9T.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BYmvVVhU.js";import"./Pill-2l4_QlLH.js";import"./PillRemoveButton-65-kpGGM.js";import"./index-BpCVfMpw.js";import"./require-router-link-61hLzpmd.js";import"./react-router-dom-D8rN1sjW.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";const at={title:"components/DatatableV2/Selection",component:m,parameters:{screenshot:{skip:!0}},argTypes:F},i=e.bind({});i.args={...e.args,getRowId:t=>t.id};i.parameters={screenshot:{skip:!1}};const A=e.bind({});A.args={...e.args,enableRowSelection:!1};A.parameters={screenshot:{skip:!1}};const M=e.bind({});M.args={...e.args,enableBatchRowSelection:!1};M.parameters={screenshot:{skip:!1}};const j=e.bind({});j.args={...i.args,enableMultiRowSelection:!1};j.parameters={screenshot:{skip:!1}};const v=e.bind({});v.args={...i.args,enableSelectAll:!1};v.parameters={screenshot:{skip:!1}};const T=e.bind({});T.args={...i.args,selectAllMode:"page"};const z=e.bind({});z.args={...i.args,selectAllMode:"all"};const E=e.bind({});E.args={...e.args,enableRowSelection:t=>t.original.organization.grade!=="A"};E.parameters={screenshot:{skip:!1}};const u=e.bind({});u.args={...i.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:t,table:n})=>a.jsxs(a.Fragment,{children:[a.jsx(d,{variant:"outline",onClick:()=>{g("selectedRows")(t)},children:"Show selected rows"}),a.jsx(d,{onClick:()=>{var s;(s=n.setRowSelection)==null||s.call(n,()=>n.options.data.reduce((o,c)=>c.organization.grade==="F"?{...o,[c.id]:!0}:o,{}))},children:"Select all F grades"})]})};u.parameters={screenshot:{skip:!1}};const B=e.bind({});B.args={...i.args,initialState:u.args.initialState,enableSelectionToolbar:!1};const p=t=>{const[n,s]=k.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return a.jsxs(a.Fragment,{children:[a.jsx(m,{state:{rowSelection:n},onRowSelectionChange:s,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};p.args=i.args;const r=t=>{var c,S,b;const[n,s]=k.useState({pageIndex:1,pageSize:10}),o=q({queryKey:["data",n],queryFn:()=>Q(n),keepPreviousData:!0});return a.jsx(m,{...t,data:((c=o==null?void 0:o.data)==null?void 0:c.entries)??[],pageCount:((S=o==null?void 0:o.data)==null?void 0:S.pageCount)??-1,rowCount:(b=o==null?void 0:o.data)==null?void 0:b.rowCount,state:{pagination:n},manualPagination:!0,onPaginationChange:s})};r.args={...e.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"}),initialState:{rowSelection:{"55ea9935-7f59-4e30-b132-5372d214c20e":!0,"72badeb8-8974-4dc3-82f5-b638b381b9c4":!0,"ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6":!0}}};r.parameters={screenshot:{skip:!1}};const l=r.bind({});l.args={...r.args,manualPagination:!0,rowSelectionMode:"multi-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"})};l.parameters={screenshot:{skip:!1}};var f,w,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({
    'e23968c3-3f19-44b2-aee9-c4a1d7c326ee': true,
    'eb43a2df-8884-43f1-bfe8-eea3545bbded': true
  });
  return <>
      <Datatable state={{
      rowSelection
    }} onRowSelectionChange={setRowSelection} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(rowSelection, null, 2)}</pre>
      </div>
    </>;
}`,...(h=(w=p.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var P,C,R;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10
  });
  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true
  });
  return <Datatable {...args} data={dataQuery?.data?.entries ?? []} pageCount={dataQuery?.data?.pageCount ?? -1} rowCount={dataQuery?.data?.rowCount} state={{
    pagination
  }} manualPagination onPaginationChange={setPagination} />;
}`,...(R=(C=r.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,y,x;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10
  });
  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true
  });
  return <Datatable {...args} data={dataQuery?.data?.entries ?? []} pageCount={dataQuery?.data?.pageCount ?? -1} rowCount={dataQuery?.data?.rowCount} state={{
    pagination
  }} manualPagination onPaginationChange={setPagination} />;
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const ot=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","ConditionallyEnabledSelection","RowSelectionActions","DisabledSelectionToolbar","SelectionManagedState","ManualPaginationWithSinglePageSelection","ManualPaginationWithMultiPageSelection"];export{E as ConditionallyEnabledSelection,M as DisabledBatchRowSelection,v as DisabledSelectAllHeader,A as DisabledSelection,B as DisabledSelectionToolbar,l as ManualPaginationWithMultiPageSelection,r as ManualPaginationWithSinglePageSelection,u as RowSelectionActions,z as SelectAllModeAll,T as SelectAllModePage,i as SelectionEnabled,p as SelectionManagedState,j as SingleRowSelection,ot as __namedExportsOrder,at as default};
//# sourceMappingURL=Selection.stories-D0YJUmCh.js.map
