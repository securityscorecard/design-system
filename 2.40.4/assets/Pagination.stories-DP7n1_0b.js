import{j as t}from"./jsx-runtime-CfatFE5O.js";import{r as x}from"./index-ClcD9ViR.js";import{u as y,f as w}from"./externalData-D9zAcXoZ.js";import{D as p}from"./Datatable-BX0B8UBU.js";import{a as k,T as a,c as v}from"./argTypes-2SozXvwC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-D_rFNWpS.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-A0BpKmNN.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-BS2GuKwM.js";import"./SelectionToolbar-86o_MtgE.js";import"./index-D4Gd5-v_.js";import"./Icon-CMhyohng.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-CQFH_APL.js";import"./index-BJmQAHTi.js";import"./Padbox-ukQ1qu4Y.js";import"./index-BeSa3Tgc.js";import"./prop-gA1VFyoz.js";import"./Inline-C2UKE3FB.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./index-CEsunubm.js";import"./Button-56zXr8E8.js";import"./components-C4v5wf-d.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-Bti168uf.js";import"./en-US-DPMKfmiD.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-C2y9YAjf.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DIQxnvTz.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-J4c3t8wy.js";import"./Tooltip-tVQqp8HT.js";import"./FloatingContext-f-xOTKfR.js";import"./ElementLabel-Kzoagp5M.js";import"./index-Cf0G56CS.js";import"./ControlledDropdown-j7qHgtyl.js";import"./index-BQo-AQpP.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-BFSBiNPT.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-B8I4NYtR.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-Dn7IP-87.js";import"./Pill-Bi05sfgI.js";import"./PillRemoveButton-CCtr2Wdj.js";const Vt={title:"components/DatatableV2/Pagination",component:p,parameters:{screenshot:{skip:!0}},argTypes:k},S=a.bind({});S.args=a.args;S.parameters={screenshot:{skip:!1}};const f=a.bind({});f.args={...a.args,enablePagination:!1};f.parameters={screenshot:{skip:!1}};const D=a.bind({});D.args={...a.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const C=a.bind({});C.args={...a.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};C.parameters={screenshot:{skip:!1}};const j=a.bind({});j.args={...a.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};j.parameters={screenshot:{skip:!1}};const r=o=>{const[i,s]=x.useState({pageIndex:1,pageSize:10});return t.jsxs(t.Fragment,{children:[t.jsx(p,{state:{pagination:i},onPaginationChange:s,...o}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};r.args=a.args;const e=o=>{var m,g,u;const[i,s]=x.useState({pageIndex:0,pageSize:10}),n=y({queryKey:["data",i],queryFn:()=>w(i),keepPreviousData:!0});return t.jsxs(t.Fragment,{children:[t.jsx(p,{...o,columns:v,data:((m=n==null?void 0:n.data)==null?void 0:m.entries)??[],pageCount:((g=n==null?void 0:n.data)==null?void 0:g.pageCount)??-1,rowCount:(u=n==null?void 0:n.data)==null?void 0:u.rowCount,state:{pagination:i},manualPagination:!0,onPaginationChange:s}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10
  });
  return <>
      <Datatable state={{
      pagination
    }} onPaginationChange={setPagination} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(pagination, null, 2)}</pre>
      </div>
    </>;
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var P,b,h;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });
  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true
  });
  return <>
      <Datatable {...args} columns={columns} data={dataQuery?.data?.entries ?? []} pageCount={dataQuery?.data?.pageCount ?? -1} rowCount={dataQuery?.data?.rowCount} state={{
      pagination
    }} manualPagination onPaginationChange={setPagination} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(pagination, null, 2)}</pre>
      </div>
    </>;
}`,...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const At=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{C as CustomRowsPerPageOptions,f as DisabledPagination,D as EnabledRowsPerPage,j as InitialPagination,e as ManualPagination,S as PaginationEnabled,r as PaginationManagedState,At as __namedExportsOrder,Vt as default};
//# sourceMappingURL=Pagination.stories-DP7n1_0b.js.map
