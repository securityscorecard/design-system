import{j as t}from"./jsx-runtime-CfatFE5O.js";import{r as x}from"./index-ClcD9ViR.js";import{u as y,f as w}from"./externalData-CCo6rkSa.js";import{D as p}from"./Datatable-EmPQCWlZ.js";import{a as k,T as a,c as v}from"./argTypes-8JEwNNt5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-9UeQIaBT.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-CHFF7_OZ.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-CbbWiVze.js";import"./SelectionToolbar-LSZWlj9w.js";import"./index-5FmQ2rGj.js";import"./Icon-DDqMC7gY.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-CHgCsRDF.js";import"./index-Bi90Y8Ou.js";import"./Padbox-D0nj4Q3C.js";import"./index-BeSa3Tgc.js";import"./prop-gA1VFyoz.js";import"./Inline-CzyJe68E.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./index-CEsunubm.js";import"./Button-BzpqzwVh.js";import"./components-bxA9E4Xq.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-DXLRFKFi.js";import"./en-US-CvthOZgl.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-CmtyVeFH.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-C3mfRfNP.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-eIAX-UPI.js";import"./Tooltip-CV6r79zI.js";import"./FloatingContext-f-xOTKfR.js";import"./index-z6XHyhmH.js";import"./ControlledDropdown-4-HSNlKO.js";import"./index--0EcN0Mx.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-D92qb2E8.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-CLYQW0G3.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-Cw0a2Kaj.js";import"./Pill-wCwM3tsQ.js";import"./PillRemoveButton-DUpHZfVu.js";const Qt={title:"components/DatatableV2/Pagination",component:p,parameters:{screenshot:{skip:!0}},argTypes:k},S=a.bind({});S.args=a.args;S.parameters={screenshot:{skip:!1}};const f=a.bind({});f.args={...a.args,enablePagination:!1};f.parameters={screenshot:{skip:!1}};const D=a.bind({});D.args={...a.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const C=a.bind({});C.args={...a.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};C.parameters={screenshot:{skip:!1}};const j=a.bind({});j.args={...a.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};j.parameters={screenshot:{skip:!1}};const r=o=>{const[i,s]=x.useState({pageIndex:1,pageSize:10});return t.jsxs(t.Fragment,{children:[t.jsx(p,{state:{pagination:i},onPaginationChange:s,...o}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};r.args=a.args;const e=o=>{var g,m,u;const[i,s]=x.useState({pageIndex:0,pageSize:10}),n=y({queryKey:["data",i],queryFn:()=>w(i),keepPreviousData:!0});return t.jsxs(t.Fragment,{children:[t.jsx(p,{...o,columns:v,data:((g=n==null?void 0:n.data)==null?void 0:g.entries)??[],pageCount:((m=n==null?void 0:n.data)==null?void 0:m.pageCount)??-1,rowCount:(u=n==null?void 0:n.data)==null?void 0:u.rowCount,state:{pagination:i},manualPagination:!0,onPaginationChange:s}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Vt=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{C as CustomRowsPerPageOptions,f as DisabledPagination,D as EnabledRowsPerPage,j as InitialPagination,e as ManualPagination,S as PaginationEnabled,r as PaginationManagedState,Vt as __namedExportsOrder,Qt as default};
//# sourceMappingURL=Pagination.stories-uwffJAQg.js.map
