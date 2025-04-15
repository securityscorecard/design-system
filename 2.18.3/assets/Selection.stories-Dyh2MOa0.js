import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as f}from"./Datatable-BMkHllbE.js";import{a as N,T as o}from"./argTypes-BcEl3v65.js";import"./index-sBLPEEBa.js";import{u as P,f as A}from"./externalData-DnjmCY5R.js";import{S as $}from"./index-CEsunubm.js";import{B as w}from"./Button-C-X3w_b0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-DBZ2KDnn.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-CqNTFtXh.js";import"./SelectionToolbar-5GePxfUL.js";import"./index-U7rWlclI.js";import"./Icon-Bik-9-TI.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-BH46DRTB.js";import"./index-Bi90Y8Ou.js";import"./Padbox-D0nj4Q3C.js";import"./index-BeSa3Tgc.js";import"./prop-gA1VFyoz.js";import"./Inline-CzyJe68E.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./Button-DXrAv08R.js";import"./components-ByF3bco0.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-DXLRFKFi.js";import"./en-US-CvthOZgl.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-fYiYssr0.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DPdGIrHZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-DUH0Ap2M.js";import"./Tooltip-Csv8ziFU.js";import"./FloatingContext-f-xOTKfR.js";import"./index-Cp8NM1Nv.js";import"./CloseButton-DA0CgUBz.js";import"./index-BVsc1NiC.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-CdV0E-rC.js";import"./Pill-BcDYdYew.js";import"./PillRemoveButton-5Rqk_0LL.js";import"./index-Dzby0U3-.js";import"./require-router-link-BEFJOFw9.js";import"./react-router-dom-CfjGzTlJ.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";const mt={title:"components/DatatableV2/Selection",component:f,parameters:{screenshot:{skip:!0}},argTypes:N},c=o.bind({});c.args={...o.args,getRowId:t=>t.id};c.parameters={screenshot:{skip:!1}};const O=o.bind({});O.args={...o.args,enableRowSelection:!1};O.parameters={screenshot:{skip:!1}};const W=o.bind({});W.args={...o.args,enableBatchRowSelection:!1};W.parameters={screenshot:{skip:!1}};const _=o.bind({});_.args={...c.args,enableMultiRowSelection:!1};_.parameters={screenshot:{skip:!1}};const H=o.bind({});H.args={...c.args,enableSelectAll:!1};H.parameters={screenshot:{skip:!1}};const G=o.bind({});G.args={...c.args,selectAllMode:"page"};const L=o.bind({});L.args={...c.args,selectAllMode:"all"};const d=t=>{var g,s,b;const[e,r]=u.useState({pageIndex:1,pageSize:10}),[n,l]=u.useState({}),i=P({queryKey:["data",e],queryFn:()=>A(e),keepPreviousData:!0});return a.jsx(f,{...t,data:((g=i==null?void 0:i.data)==null?void 0:g.entries)??[],initialState:{isVirtualSelectAll:!0},pageCount:((s=i==null?void 0:i.data)==null?void 0:s.pageCount)??-1,rowCount:(b=i==null?void 0:i.data)==null?void 0:b.rowCount,selectAllMode:"virtual",state:{pagination:e,rowSelection:n},manualPagination:!0,onPaginationChange:r,onRowSelectionChange:l})};d.args={...o.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t,isVirtualSelectAll:e})=>{const r=Object.keys(t).filter(n=>!!t[n]).length;return a.jsxs(w,{onClick:()=>C("batch action")(t,e),children:["Show selected rows"," ",e?"(all)":`(${r})`]})},selectAllMode:"virtual"};d.parameters={screenshot:{skip:!1}};const S=t=>{var b,y,x;const[e,r]=u.useState(!0),[n,l]=u.useState({pageIndex:1,pageSize:10}),[i,g]=u.useState({}),s=P({queryKey:["data",n],queryFn:()=>A(n),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(f,{...t,data:((b=s==null?void 0:s.data)==null?void 0:b.entries)??[],pageCount:((y=s==null?void 0:s.data)==null?void 0:y.pageCount)??-1,rowCount:(x=s==null?void 0:s.data)==null?void 0:x.rowCount,selectAllMode:"virtual",state:{pagination:n,isVirtualSelectAll:e,rowSelection:i},manualPagination:!0,onPaginationChange:l,onRowSelectionChange:g,onVirtualSelectAllChange:r}),a.jsx("div",{children:a.jsx($,{children:e&&a.jsx("span",{children:"All rows have been selected"})})})]})};S.args={...o.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t,isVirtualSelectAll:e})=>a.jsxs(w,{onClick:()=>C("batch action")(t,e),children:["Show selected rows ",e?"(all)":""]}),selectAllMode:"virtual"};S.parameters={screenshot:{skip:!1}};const J=o.bind({});J.args={...o.args,enableRowSelection:t=>t.original.organization.grade!=="A"};J.parameters={screenshot:{skip:!1}};const R=o.bind({});R.args={...c.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:t,table:e})=>a.jsxs(a.Fragment,{children:[a.jsx(w,{variant:"outline",onClick:()=>{C("selectedRows")(t)},children:"Show selected rows"}),a.jsx(w,{onClick:()=>{var r;(r=e.setRowSelection)==null||r.call(e,()=>e.options.data.reduce((n,l)=>l.organization.grade==="F"?{...n,[l.id]:!0}:n,{}))},children:"Select all F grades"})]})};R.parameters={screenshot:{skip:!1}};const U=o.bind({});U.args={...c.args,initialState:R.args.initialState,enableSelectionToolbar:!1};const h=t=>{const[e,r]=u.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return a.jsxs(a.Fragment,{children:[a.jsx(f,{state:{rowSelection:e},onRowSelectionChange:r,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};h.args=c.args;const p=t=>{var l,i,g;const[e,r]=u.useState({pageIndex:1,pageSize:10}),n=P({queryKey:["data",e],queryFn:()=>A(e),keepPreviousData:!0});return a.jsx(f,{...t,data:((l=n==null?void 0:n.data)==null?void 0:l.entries)??[],pageCount:((i=n==null?void 0:n.data)==null?void 0:i.pageCount)??-1,rowCount:(g=n==null?void 0:n.data)==null?void 0:g.rowCount,state:{pagination:e},manualPagination:!0,onPaginationChange:r})};p.args={...o.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(w,{onClick:()=>C("batch action")(t),children:"Show selected rows"}),initialState:{rowSelection:{"55ea9935-7f59-4e30-b132-5372d214c20e":!0,"72badeb8-8974-4dc3-82f5-b638b381b9c4":!0,"ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6":!0}}};p.parameters={screenshot:{skip:!1}};const m=p.bind({});m.args={...p.args,manualPagination:!0,rowSelectionMode:"multi-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(w,{onClick:()=>C("batch action")(t),children:"Show selected rows"})};m.parameters={screenshot:{skip:!1}};var M,D,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10
  });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true
  });
  return <Datatable {...args} data={dataQuery?.data?.entries ?? []} initialState={{
    isVirtualSelectAll: true
  }} pageCount={dataQuery?.data?.pageCount ?? -1} rowCount={dataQuery?.data?.rowCount} selectAllMode="virtual" state={{
    pagination,
    rowSelection
  }} manualPagination onPaginationChange={setPagination} onRowSelectionChange={setRowSelection} />;
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var j,v,q;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [isVirtualSelectAll, setVirtualSelectAll] = useState<boolean>(true);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10
  });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true
  });
  return <>
      <Datatable {...args} data={dataQuery?.data?.entries ?? []} pageCount={dataQuery?.data?.pageCount ?? -1} rowCount={dataQuery?.data?.rowCount} selectAllMode="virtual" state={{
      pagination,
      isVirtualSelectAll,
      rowSelection
    }} manualPagination onPaginationChange={setPagination} onRowSelectionChange={setRowSelection} onVirtualSelectAllChange={setVirtualSelectAll} />
      <div>
        <Strong>
          {isVirtualSelectAll && <span>All rows have been selected</span>}
        </Strong>
      </div>
    </>;
}`,...(q=(v=S.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var V,F,z;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
}`,...(z=(F=h.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var I,E,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(K=(E=p.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var Q,T,B;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const wt=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","SelectAllModeVirtual","SelectAllModeVirtualManagedState","ConditionallyEnabledSelection","RowSelectionActions","DisabledSelectionToolbar","SelectionManagedState","ManualPaginationWithSinglePageSelection","ManualPaginationWithMultiPageSelection"];export{J as ConditionallyEnabledSelection,W as DisabledBatchRowSelection,H as DisabledSelectAllHeader,O as DisabledSelection,U as DisabledSelectionToolbar,m as ManualPaginationWithMultiPageSelection,p as ManualPaginationWithSinglePageSelection,R as RowSelectionActions,L as SelectAllModeAll,G as SelectAllModePage,d as SelectAllModeVirtual,S as SelectAllModeVirtualManagedState,c as SelectionEnabled,h as SelectionManagedState,_ as SingleRowSelection,wt as __namedExportsOrder,mt as default};
//# sourceMappingURL=Selection.stories-Dyh2MOa0.js.map
