import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as x}from"./index-ClcD9ViR.js";import{a as M}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as g}from"./Datatable-Ca65eRou.js";import{T as e}from"./Template-Dy7yT-UW.js";import"./index-BR9gIOhu.js";import{u as F,f as q}from"./externalData-C44ChJU3.js";import{B as d}from"./Button-DF9F2IpX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-CGEbE2mZ.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-puo24fTf.js";import"./SelectionToolbar-B-gmUSrD.js";import"./index-DYDjgMG1.js";import"./Icon-CHceuV7K.js";import"./index-CeOnF3dB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-UOk5nvl2.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./index-CLVl6jk_.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-BdnhnZ8J.js";import"./Cluster-CGQQQZ4I.js";import"./index-CpAvg4Hc.js";import"./Button-vEOnW8Bm.js";import"./components-MIUzfLU3.js";import"./index-CGIPeC-W.js";import"./Spinner-CScYiCuC.js";import"./useSafeTranslation-BH9xR3W8.js";import"./en-US-DVFKJdgt.js";import"./pluck-DtgIh6Gb.js";import"./IconButton-CUW5D67R.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-RJ8AjUwu.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-DTMAbG_k.js";import"./index-CiMTWSno.js";import"./Tooltip-BJtTNnrF.js";import"./FloatingContext-f-xOTKfR.js";import"./index-B2iyLVXu.js";import"./CloseButton-Cw8Fr_ZE.js";import"./index-Ccg6HrRD.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-C-FffhfA.js";import"./Pill-v3oAvX7G.js";import"./PillRemoveButton-DgC9NddM.js";import"./index-CLLXPhty.js";import"./require-router-link-dCknxxr0.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";const et={title:"components/DatatableV2/Selection",component:g,parameters:{screenshot:{skip:!0}}},r=e.bind({});r.args={...e.args,getRowId:o=>o.id};r.parameters={screenshot:{skip:!1}};const k=e.bind({});k.args={...e.args,enableRowSelection:!1};k.parameters={screenshot:{skip:!1}};const A=e.bind({});A.args={...e.args,enableBatchRowSelection:!1};A.parameters={screenshot:{skip:!1}};const j=e.bind({});j.args={...r.args,enableMultiRowSelection:!1};j.parameters={screenshot:{skip:!1}};const v=e.bind({});v.args={...r.args,enableSelectAll:!1};v.parameters={screenshot:{skip:!1}};const Q=e.bind({});Q.args={...r.args,selectAllMode:"page"};const z=e.bind({});z.args={...r.args,selectAllMode:"all"};const E=e.bind({});E.args={...e.args,enableRowSelection:o=>o.original.organization.grade!=="A"};E.parameters={screenshot:{skip:!1}};const m=e.bind({});m.args={...r.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:o,table:n})=>a.jsxs(a.Fragment,{children:[a.jsx(d,{variant:"outline",onClick:()=>{M("selectedRows")(o)},children:"Show selected rows"}),a.jsx(d,{onClick:()=>{var s;(s=n.setRowSelection)==null||s.call(n,()=>n.options.data.reduce((t,c)=>c.organization.grade==="F"?{...t,[c.id]:!0}:t,{}))},children:"Select all F grades"})]})};m.parameters={screenshot:{skip:!1}};const B=e.bind({});B.args={...r.args,initialState:m.args.initialState,enableSelectionToolbar:!1};const p=o=>{const[n,s]=x.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return a.jsxs(a.Fragment,{children:[a.jsx(g,{state:{rowSelection:n},onRowSelectionChange:s,...o}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};p.args=r.args;const i=o=>{var c,u,S;const[n,s]=x.useState({pageIndex:1,pageSize:10}),t=F({queryKey:["data",n],queryFn:()=>q(n),keepPreviousData:!0});return a.jsx(g,{...o,data:((c=t==null?void 0:t.data)==null?void 0:c.entries)??[],pageCount:((u=t==null?void 0:t.data)==null?void 0:u.pageCount)??-1,rowCount:(S=t==null?void 0:t.data)==null?void 0:S.rowCount,state:{pagination:n},onPaginationChange:s})};i.args={...e.args,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:o})=>a.jsx(d,{onClick:()=>M("batch action")(o),children:"Show selected rows"}),manualPagination:!0,initialState:{rowSelection:{"55ea9935-7f59-4e30-b132-5372d214c20e":!0,"72badeb8-8974-4dc3-82f5-b638b381b9c4":!0,"ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6":!0}}};i.parameters={screenshot:{skip:!1}};const l=i.bind({});l.args={...i.args,rowSelectionMode:"multi-page"};l.parameters={screenshot:{skip:!1}};var b,f,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,P,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
  }} onPaginationChange={setPagination} />;
}`,...(C=(P=i.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var D,R,y;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
  }} onPaginationChange={setPagination} />;
}`,...(y=(R=l.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const tt=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","ConditionallyEnabledSelection","RowSelectionActions","DisabledSelectionToolbar","SelectionManagedState","ManualPaginationWithSinglePageSelection","ManualPaginationWithMultiPageSelection"];export{E as ConditionallyEnabledSelection,A as DisabledBatchRowSelection,v as DisabledSelectAllHeader,k as DisabledSelection,B as DisabledSelectionToolbar,l as ManualPaginationWithMultiPageSelection,i as ManualPaginationWithSinglePageSelection,m as RowSelectionActions,z as SelectAllModeAll,Q as SelectAllModePage,r as SelectionEnabled,p as SelectionManagedState,j as SingleRowSelection,tt as __namedExportsOrder,et as default};
//# sourceMappingURL=Selection.stories-u1Dq-WaE.js.map
