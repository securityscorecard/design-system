import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as k}from"./index-ClcD9ViR.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as m}from"./Datatable-CY3pJogs.js";import{a as F,T as e}from"./argTypes-CGY1KX4p.js";import"./index-BR9gIOhu.js";import{u as q,f as Q}from"./externalData-DsDMlv_T.js";import{B as d}from"./Button-DF9F2IpX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-CGEbE2mZ.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-puo24fTf.js";import"./SelectionToolbar-B-gmUSrD.js";import"./index-DYDjgMG1.js";import"./Icon-CHceuV7K.js";import"./index-CeOnF3dB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-UOk5nvl2.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./index-CLVl6jk_.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-BdnhnZ8J.js";import"./Cluster-CGQQQZ4I.js";import"./index-CpAvg4Hc.js";import"./Button-vEOnW8Bm.js";import"./components-MIUzfLU3.js";import"./index-CGIPeC-W.js";import"./Spinner-CScYiCuC.js";import"./useSafeTranslation-BH9xR3W8.js";import"./en-US-DVFKJdgt.js";import"./pluck-DtgIh6Gb.js";import"./IconButton-CUW5D67R.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-RJ8AjUwu.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-DTMAbG_k.js";import"./index-CiMTWSno.js";import"./Tooltip-BJtTNnrF.js";import"./FloatingContext-f-xOTKfR.js";import"./index-B2iyLVXu.js";import"./CloseButton-Cw8Fr_ZE.js";import"./index-Ccg6HrRD.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-C-FffhfA.js";import"./Pill-v3oAvX7G.js";import"./PillRemoveButton-DgC9NddM.js";import"./index-CLLXPhty.js";import"./require-router-link-dCknxxr0.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";const tt={title:"components/DatatableV2/Selection",component:m,parameters:{screenshot:{skip:!0}},argTypes:F},i=e.bind({});i.args={...e.args,getRowId:t=>t.id};i.parameters={screenshot:{skip:!1}};const A=e.bind({});A.args={...e.args,enableRowSelection:!1};A.parameters={screenshot:{skip:!1}};const M=e.bind({});M.args={...e.args,enableBatchRowSelection:!1};M.parameters={screenshot:{skip:!1}};const j=e.bind({});j.args={...i.args,enableMultiRowSelection:!1};j.parameters={screenshot:{skip:!1}};const v=e.bind({});v.args={...i.args,enableSelectAll:!1};v.parameters={screenshot:{skip:!1}};const T=e.bind({});T.args={...i.args,selectAllMode:"page"};const z=e.bind({});z.args={...i.args,selectAllMode:"all"};const E=e.bind({});E.args={...e.args,enableRowSelection:t=>t.original.organization.grade!=="A"};E.parameters={screenshot:{skip:!1}};const u=e.bind({});u.args={...i.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:t,table:n})=>a.jsxs(a.Fragment,{children:[a.jsx(d,{variant:"outline",onClick:()=>{g("selectedRows")(t)},children:"Show selected rows"}),a.jsx(d,{onClick:()=>{var s;(s=n.setRowSelection)==null||s.call(n,()=>n.options.data.reduce((o,c)=>c.organization.grade==="F"?{...o,[c.id]:!0}:o,{}))},children:"Select all F grades"})]})};u.parameters={screenshot:{skip:!1}};const B=e.bind({});B.args={...i.args,initialState:u.args.initialState,enableSelectionToolbar:!1};const p=t=>{const[n,s]=k.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return a.jsxs(a.Fragment,{children:[a.jsx(m,{state:{rowSelection:n},onRowSelectionChange:s,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};p.args=i.args;const r=t=>{var c,S,b;const[n,s]=k.useState({pageIndex:1,pageSize:10}),o=q({queryKey:["data",n],queryFn:()=>Q(n),keepPreviousData:!0});return a.jsx(m,{...t,data:((c=o==null?void 0:o.data)==null?void 0:c.entries)??[],pageCount:((S=o==null?void 0:o.data)==null?void 0:S.pageCount)??-1,rowCount:(b=o==null?void 0:o.data)==null?void 0:b.rowCount,state:{pagination:n},manualPagination:!0,onPaginationChange:s})};r.args={...e.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"}),initialState:{rowSelection:{"55ea9935-7f59-4e30-b132-5372d214c20e":!0,"72badeb8-8974-4dc3-82f5-b638b381b9c4":!0,"ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6":!0}}};r.parameters={screenshot:{skip:!1}};const l=r.bind({});l.args={...r.args,manualPagination:!0,rowSelectionMode:"multi-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"})};l.parameters={screenshot:{skip:!1}};var f,w,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const at=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","ConditionallyEnabledSelection","RowSelectionActions","DisabledSelectionToolbar","SelectionManagedState","ManualPaginationWithSinglePageSelection","ManualPaginationWithMultiPageSelection"];export{E as ConditionallyEnabledSelection,M as DisabledBatchRowSelection,v as DisabledSelectAllHeader,A as DisabledSelection,B as DisabledSelectionToolbar,l as ManualPaginationWithMultiPageSelection,r as ManualPaginationWithSinglePageSelection,u as RowSelectionActions,z as SelectAllModeAll,T as SelectAllModePage,i as SelectionEnabled,p as SelectionManagedState,j as SingleRowSelection,at as __namedExportsOrder,tt as default};
//# sourceMappingURL=Selection.stories-BhNHaFET.js.map
