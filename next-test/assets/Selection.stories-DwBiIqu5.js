import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as M}from"./index-ClcD9ViR.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as m}from"./Datatable-CjaWXYzc.js";import{a as F,T as e}from"./argTypes-fktNeP-w.js";import"./index-BafkohO7.js";import{u as _,f as q}from"./externalData-B0GSo2RV.js";import{B as d}from"./Button-DTETAW_Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-DJ74rrw8.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-BFKv9stq.js";import"./SelectionToolbar-DQTHdOf8.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-LR-EjM-6.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./index-1T5Tqafd.js";import"./prop-DM27i_5J.js";import"./Inline.enums-Cb7IYB12.js";import"./Cluster-Czc8yUGw.js";import"./index-fVh6sz_B.js";import"./Button-CSEXYzvx.js";import"./components-Dt-mykMV.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./useSafeTranslation-DfC4LVWh.js";import"./en-US-DTEh3xIi.js";import"./pluck-B7TtmBCE.js";import"./IconButton-BIRkG6iG.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-DHnwFTCK.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-Ci5i8ZTJ.js";import"./index-BNloZ91k.js";import"./Tooltip-BnELo82z.js";import"./FloatingContext-Iczo9egI.js";import"./index-UZVzQLwe.js";import"./CloseButton-DsGT12sN.js";import"./index-DAjbAeX4.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-2RA1rzht.js";import"./Pill-Bn4tqEYP.js";import"./PillRemoveButton-DXAxIpoY.js";import"./index-B_pk6Myb.js";import"./require-router-link-BWnqzLA_.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";const tt={title:"components/DatatableV2/Selection",component:m,parameters:{screenshot:{skip:!0}},argTypes:F},r=e.bind({});r.args={...e.args,getRowId:t=>t.id};r.parameters={screenshot:{skip:!1}};const k=e.bind({});k.args={...e.args,enableRowSelection:!1};k.parameters={screenshot:{skip:!1}};const A=e.bind({});A.args={...e.args,enableBatchRowSelection:!1};A.parameters={screenshot:{skip:!1}};const j=e.bind({});j.args={...r.args,enableMultiRowSelection:!1};j.parameters={screenshot:{skip:!1}};const v=e.bind({});v.args={...r.args,enableSelectAll:!1};v.parameters={screenshot:{skip:!1}};const I=e.bind({});I.args={...r.args,selectAllMode:"page"};const Q=e.bind({});Q.args={...r.args,selectAllMode:"all"};const E=e.bind({});E.args={...e.args,enableRowSelection:t=>t.original.organization.grade!=="A"};E.parameters={screenshot:{skip:!1}};const u=e.bind({});u.args={...r.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:t,table:n})=>a.jsxs(a.Fragment,{children:[a.jsx(d,{variant:"outline",onClick:()=>{g("selectedRows")(t)},children:"Show selected rows"}),a.jsx(d,{onClick:()=>{var s;(s=n.setRowSelection)==null||s.call(n,()=>n.options.data.reduce((o,p)=>p.organization.grade==="F"?{...o,[p.id]:!0}:o,{}))},children:"Select all F grades"})]})};u.parameters={screenshot:{skip:!1}};const T=e.bind({});T.args={...r.args,initialState:u.args.initialState,enableSelectionToolbar:!1};const l=t=>{const[n,s]=M.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return a.jsxs(a.Fragment,{children:[a.jsx(m,{state:{rowSelection:n},onRowSelectionChange:s,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};l.args=r.args;const i=t=>{var p,S,b;const[n,s]=M.useState({pageIndex:1,pageSize:10}),o=_({queryKey:["data",n],queryFn:()=>q(n),keepPreviousData:!0});return a.jsx(m,{...t,data:((p=o==null?void 0:o.data)==null?void 0:p.entries)??[],pageCount:((S=o==null?void 0:o.data)==null?void 0:S.pageCount)??-1,rowCount:(b=o==null?void 0:o.data)==null?void 0:b.rowCount,state:{pagination:n},manualPagination:!0,onPaginationChange:s})};i.args={...e.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"}),initialState:{rowSelection:{"55ea9935-7f59-4e30-b132-5372d214c20e":!0,"72badeb8-8974-4dc3-82f5-b638b381b9c4":!0,"ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6":!0}}};i.parameters={screenshot:{skip:!1}};const c=i.bind({});c.args={...i.args,manualPagination:!0,rowSelectionMode:"multi-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(d,{onClick:()=>g("batch action")(t),children:"Show selected rows"})};c.parameters={screenshot:{skip:!1}};l.__docgenInfo={description:"",methods:[],displayName:"SelectionManagedState"};i.__docgenInfo={description:"",methods:[],displayName:"ManualPaginationWithSinglePageSelection"};var f,h,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var P,C,R;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var y,D,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const at=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","ConditionallyEnabledSelection","RowSelectionActions","DisabledSelectionToolbar","SelectionManagedState","ManualPaginationWithSinglePageSelection","ManualPaginationWithMultiPageSelection"];export{E as ConditionallyEnabledSelection,A as DisabledBatchRowSelection,v as DisabledSelectAllHeader,k as DisabledSelection,T as DisabledSelectionToolbar,c as ManualPaginationWithMultiPageSelection,i as ManualPaginationWithSinglePageSelection,u as RowSelectionActions,Q as SelectAllModeAll,I as SelectAllModePage,r as SelectionEnabled,l as SelectionManagedState,j as SingleRowSelection,at as __namedExportsOrder,tt as default};
//# sourceMappingURL=Selection.stories-DwBiIqu5.js.map
