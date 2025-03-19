import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as k}from"./index-ClcD9ViR.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as m}from"./Datatable-CqKviANN.js";import{a as F,T as e}from"./argTypes-ClA1DOWX.js";import"./index-BwXZKvUD.js";import{u as q,f as Q}from"./externalData-BcGcuBeF.js";import{B as d}from"./Button-dZHq7LEz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-DBZ2KDnn.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-DD_G22M5.js";import"./SelectionToolbar-Dy-IFdnW.js";import"./index-U7rWlclI.js";import"./Icon-Bik-9-TI.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-OY6jNnnn.js";import"./index-DV1EfWHB.js";import"./Padbox-DhupY5rO.js";import"./index-BeSa3Tgc.js";import"./prop-gA1VFyoz.js";import"./Inline-C2UKE3FB.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./index-CEsunubm.js";import"./Button-DXrAv08R.js";import"./components-ByF3bco0.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-DW1KuvTP.js";import"./en-US-DVFKJdgt.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-fYiYssr0.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DPdGIrHZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-CgUcX5gD.js";import"./Tooltip-ClqziCrA.js";import"./FloatingContext-f-xOTKfR.js";import"./index-Cp8NM1Nv.js";import"./CloseButton-DA0CgUBz.js";import"./index-BVsc1NiC.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BiQ22au2.js";import"./Pill-BY7T1u-8.js";import"./PillRemoveButton-BWcc2Zae.js";import"./index-fjUauUmc.js";import"./require-router-link-DVLtxlD2.js";import"./react-router-dom-CjXcz4Wm.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";const at={title:"components/DatatableV2/Selection",component:m,parameters:{screenshot:{skip:!0}},argTypes:F},i=e.bind({});i.args={...e.args,getRowId:t=>t.id};i.parameters={screenshot:{skip:!1}};const A=e.bind({});A.args={...e.args,enableRowSelection:!1};A.parameters={screenshot:{skip:!1}};const M=e.bind({});M.args={...e.args,enableBatchRowSelection:!1};M.parameters={screenshot:{skip:!1}};const j=e.bind({});j.args={...i.args,enableMultiRowSelection:!1};j.parameters={screenshot:{skip:!1}};const v=e.bind({});v.args={...i.args,enableSelectAll:!1};v.parameters={screenshot:{skip:!1}};const T=e.bind({});T.args={...i.args,selectAllMode:"page"};const z=e.bind({});z.args={...i.args,selectAllMode:"all"};const E=e.bind({});E.args={...e.args,enableRowSelection:t=>t.original.organization.grade!=="A"};E.parameters={screenshot:{skip:!1}};const u=e.bind({});u.args={...i.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:t,table:n})=>a.jsxs(a.Fragment,{children:[a.jsx(d,{variant:"outline",onClick:()=>{g("selectedRows")(t)},children:"Show selected rows"}),a.jsx(d,{onClick:()=>{var s;(s=n.setRowSelection)==null||s.call(n,()=>n.options.data.reduce((o,c)=>c.organization.grade==="F"?{...o,[c.id]:!0}:o,{}))},children:"Select all F grades"})]})};u.parameters={screenshot:{skip:!1}};const B=e.bind({});B.args={...i.args,initialState:u.args.initialState,enableSelectionToolbar:!1};const p=t=>{const[n,s]=k.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return a.jsxs(a.Fragment,{children:[a.jsx(m,{state:{rowSelection:n},onRowSelectionChange:s,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};p.args=i.args;const r=t=>{var c,S,b;const[n,s]=k.useState({pageIndex:1,pageSize:10}),o=q({queryKey:["data",n],queryFn:()=>Q(n),keepPreviousData:!0});return a.jsx(m,{...t,data:((c=o==null?void 0:o.data)==null?void 0:c.entries)??[],pageCount:((S=o==null?void 0:o.data)==null?void 0:S.pageCount)??-1,rowCount:(b=o==null?void 0:o.data)==null?void 0:b.rowCount,state:{pagination:n},manualPagination:!0,onPaginationChange:s})};r.args={...e.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"}),initialState:{rowSelection:{"55ea9935-7f59-4e30-b132-5372d214c20e":!0,"72badeb8-8974-4dc3-82f5-b638b381b9c4":!0,"ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6":!0}}};r.parameters={screenshot:{skip:!1}};const l=r.bind({});l.args={...r.args,manualPagination:!0,rowSelectionMode:"multi-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"})};l.parameters={screenshot:{skip:!1}};var f,w,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=Selection.stories-C4UU15Lk.js.map
