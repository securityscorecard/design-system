import{j as a}from"./jsx-runtime-BbjHj44Y.js";import{r as u}from"./index-C6mWTJJr.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as f}from"./Datatable-CE78aihF.js";import{a as N,T as n}from"./argTypes-CW70O5S9.js";import"./index-B6q2X_uQ.js";import{u as P,f as A}from"./externalData-C907oiqG.js";import{S as $}from"./index-p3Ne9M6I.js";import{B as w}from"./Button-CghCdp8e.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./useLogger-D6HktrB1.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-DK0Ydi9M.js";import"./SelectionToolbar-Cpbf0zfO.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-DRm3KUNF.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./index-CABfzxjM.js";import"./index-CRnaouss.js";import"./Padbox-CMSZZGn9.js";import"./index-C8Uj0hRh.js";import"./prop-gA1VFyoz.js";import"./Inline-WQsFVyS5.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./Button-I8Y2XdcJ.js";import"./components-C9sJjMsI.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./useSafeTranslation-RSFuNJC9.js";import"./en-US-D2DA8Sg-.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-Dt6UXVFt.js";import"./useContainerQuery-J3pQj2z2.js";import"./Skeleton-C3OdMv_p.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-CsW7DeuJ.js";import"./index-CZnLRAtc.js";import"./Tooltip-DJK58tJC.js";import"./FloatingContext-Bl8tl6Fh.js";import"./ElementLabel-B8jQdsnd.js";import"./index-CV-r94w-.js";import"./ControlledDropdown-BvnoebAE.js";import"./index-DYWQy94d.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-BmgVlhkC.js";import"./useOuterCallback-B34oUwCq.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-DrVS-_Bd.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-DCMymTJo.js";import"./modifiers.esm-D9hq2467.js";import"./index-xJp9Kd2E.js";import"./index-B0HbwT1s.js";import"./Pill-Dx7-VHbt.js";import"./PillRemoveButton-d8NE9DkX.js";import"./index-B5HQU4Nk.js";import"./require-router-link-Bk_dtu3O.js";import"./react-router-dom-BGDj--y4.js";import"./tiny-invariant-CopsF_GD.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";const Pt={title:"components/DatatableV2/Selection",component:f,parameters:{screenshot:{skip:!0}},argTypes:N},c=n.bind({});c.args={...n.args,getRowId:t=>t.id};c.parameters={screenshot:{skip:!1}};const O=n.bind({});O.args={...n.args,enableRowSelection:!1};O.parameters={screenshot:{skip:!1}};const W=n.bind({});W.args={...n.args,enableBatchRowSelection:!1};W.parameters={screenshot:{skip:!1}};const _=n.bind({});_.args={...c.args,enableMultiRowSelection:!1};_.parameters={screenshot:{skip:!1}};const H=n.bind({});H.args={...c.args,enableSelectAll:!1};H.parameters={screenshot:{skip:!1}};const G=n.bind({});G.args={...c.args,selectAllMode:"page"};const L=n.bind({});L.args={...c.args,selectAllMode:"all"};const d=t=>{var g,s,b;const[e,r]=u.useState({pageIndex:1,pageSize:10}),[o,l]=u.useState({}),i=P({queryKey:["data",e],queryFn:()=>A(e),keepPreviousData:!0});return a.jsx(f,{...t,data:((g=i==null?void 0:i.data)==null?void 0:g.entries)??[],initialState:{isVirtualSelectAll:!0},pageCount:((s=i==null?void 0:i.data)==null?void 0:s.pageCount)??-1,rowCount:(b=i==null?void 0:i.data)==null?void 0:b.rowCount,selectAllMode:"virtual",state:{pagination:e,rowSelection:o},manualPagination:!0,onPaginationChange:r,onRowSelectionChange:l})};d.args={...n.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t,isVirtualSelectAll:e})=>{const r=Object.keys(t).filter(o=>!!t[o]).length;return a.jsxs(w,{onClick:()=>C("batch action")(t,e),children:["Show selected rows"," ",e?"(all)":`(${r})`]})},selectAllMode:"virtual"};d.parameters={screenshot:{skip:!1}};const S=t=>{var b,y,x;const[e,r]=u.useState(!0),[o,l]=u.useState({pageIndex:1,pageSize:10}),[i,g]=u.useState({}),s=P({queryKey:["data",o],queryFn:()=>A(o),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(f,{...t,data:((b=s==null?void 0:s.data)==null?void 0:b.entries)??[],pageCount:((y=s==null?void 0:s.data)==null?void 0:y.pageCount)??-1,rowCount:(x=s==null?void 0:s.data)==null?void 0:x.rowCount,selectAllMode:"virtual",state:{pagination:o,isVirtualSelectAll:e,rowSelection:i},manualPagination:!0,onPaginationChange:l,onRowSelectionChange:g,onVirtualSelectAllChange:r}),a.jsx("div",{children:a.jsx($,{children:e&&a.jsx("span",{children:"All rows have been selected"})})})]})};S.args={...n.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t,isVirtualSelectAll:e})=>a.jsxs(w,{onClick:()=>C("batch action")(t,e),children:["Show selected rows ",e?"(all)":""]}),selectAllMode:"virtual"};S.parameters={screenshot:{skip:!1}};const J=n.bind({});J.args={...n.args,enableRowSelection:t=>t.original.organization.grade!=="A"};J.parameters={screenshot:{skip:!1}};const R=n.bind({});R.args={...c.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:t,table:e})=>a.jsxs(a.Fragment,{children:[a.jsx(w,{variant:"outline",onClick:()=>{C("selectedRows")(t)},children:"Show selected rows"}),a.jsx(w,{onClick:()=>{var r;(r=e.setRowSelection)==null||r.call(e,()=>e.options.data.reduce((o,l)=>l.organization.grade==="F"?{...o,[l.id]:!0}:o,{}))},children:"Select all F grades"})]})};R.parameters={screenshot:{skip:!1}};const U=n.bind({});U.args={...c.args,initialState:R.args.initialState,enableSelectionToolbar:!1};const h=t=>{const[e,r]=u.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return a.jsxs(a.Fragment,{children:[a.jsx(f,{state:{rowSelection:e},onRowSelectionChange:r,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};h.args=c.args;const p=t=>{var l,i,g;const[e,r]=u.useState({pageIndex:1,pageSize:10}),o=P({queryKey:["data",e],queryFn:()=>A(e),keepPreviousData:!0});return a.jsx(f,{...t,data:((l=o==null?void 0:o.data)==null?void 0:l.entries)??[],pageCount:((i=o==null?void 0:o.data)==null?void 0:i.pageCount)??-1,rowCount:(g=o==null?void 0:o.data)==null?void 0:g.rowCount,state:{pagination:e},manualPagination:!0,onPaginationChange:r})};p.args={...n.args,manualPagination:!0,rowSelectionMode:"single-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(w,{onClick:()=>C("batch action")(t),children:"Show selected rows"}),initialState:{rowSelection:{"55ea9935-7f59-4e30-b132-5372d214c20e":!0,"72badeb8-8974-4dc3-82f5-b638b381b9c4":!0,"ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6":!0}}};p.parameters={screenshot:{skip:!1}};const m=p.bind({});m.args={...p.args,manualPagination:!0,rowSelectionMode:"multi-page",renderRowSelectionActions:({selectedRows:t})=>a.jsx(w,{onClick:()=>C("batch action")(t),children:"Show selected rows"})};m.parameters={screenshot:{skip:!1}};var M,D,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const At=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","SelectAllModeVirtual","SelectAllModeVirtualManagedState","ConditionallyEnabledSelection","RowSelectionActions","DisabledSelectionToolbar","SelectionManagedState","ManualPaginationWithSinglePageSelection","ManualPaginationWithMultiPageSelection"];export{J as ConditionallyEnabledSelection,W as DisabledBatchRowSelection,H as DisabledSelectAllHeader,O as DisabledSelection,U as DisabledSelectionToolbar,m as ManualPaginationWithMultiPageSelection,p as ManualPaginationWithSinglePageSelection,R as RowSelectionActions,L as SelectAllModeAll,G as SelectAllModePage,d as SelectAllModeVirtual,S as SelectAllModeVirtualManagedState,c as SelectionEnabled,h as SelectionManagedState,_ as SingleRowSelection,At as __namedExportsOrder,Pt as default};
//# sourceMappingURL=Selection.stories-CJ2fEFDr.js.map
