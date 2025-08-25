import{j as t}from"./jsx-runtime-BbjHj44Y.js";import{r as x}from"./index-C6mWTJJr.js";import{u as y,f as w}from"./externalData-BTfzmrIB.js";import{D as p}from"./Datatable-DvLA6sX7.js";import{a as k,T as a,c as v}from"./argTypes-D3xV0klv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-D6HktrB1.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-QAc12VoD.js";import"./SelectionToolbar-8126y9Eo.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-DRm3KUNF.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./index-DllgY1-W.js";import"./index-jYxijnXQ.js";import"./Padbox-BqHnR5yd.js";import"./index-CcmHmzDo.js";import"./prop-gA1VFyoz.js";import"./Inline-B7NzMb1T.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./index-CP_iG0Cq.js";import"./Button-I8Y2XdcJ.js";import"./components-C9sJjMsI.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./useSafeTranslation-RSFuNJC9.js";import"./en-US-D2DA8Sg-.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-Dt6UXVFt.js";import"./useContainerQuery-J3pQj2z2.js";import"./Skeleton-C3OdMv_p.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DEqVryu4.js";import"./index-CqM6cpST.js";import"./Tooltip-C1iD4kNG.js";import"./FloatingContext-Bl8tl6Fh.js";import"./ElementLabel-B8jQdsnd.js";import"./index-DzW18DEa.js";import"./ControlledDropdown-Ch5h0EY8.js";import"./index-DYWQy94d.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-BmgVlhkC.js";import"./useOuterCallback-B34oUwCq.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-BKf1CiGF.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-DCMymTJo.js";import"./modifiers.esm-D9hq2467.js";import"./index-xJp9Kd2E.js";import"./index-CD9tC0QP.js";import"./Pill-DdT6vkgL.js";import"./PillRemoveButton-6FU_Siav.js";const Vt={title:"components/DatatableV2/Pagination",component:p,parameters:{screenshot:{skip:!0}},argTypes:k},S=a.bind({});S.args=a.args;S.parameters={screenshot:{skip:!1}};const f=a.bind({});f.args={...a.args,enablePagination:!1};f.parameters={screenshot:{skip:!1}};const D=a.bind({});D.args={...a.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const C=a.bind({});C.args={...a.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};C.parameters={screenshot:{skip:!1}};const j=a.bind({});j.args={...a.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};j.parameters={screenshot:{skip:!1}};const r=o=>{const[i,s]=x.useState({pageIndex:1,pageSize:10});return t.jsxs(t.Fragment,{children:[t.jsx(p,{state:{pagination:i},onPaginationChange:s,...o}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};r.args=a.args;const e=o=>{var m,g,u;const[i,s]=x.useState({pageIndex:0,pageSize:10}),n=y({queryKey:["data",i],queryFn:()=>w(i),keepPreviousData:!0});return t.jsxs(t.Fragment,{children:[t.jsx(p,{...o,columns:v,data:((m=n==null?void 0:n.data)==null?void 0:m.entries)??[],pageCount:((g=n==null?void 0:n.data)==null?void 0:g.pageCount)??-1,rowCount:(u=n==null?void 0:n.data)==null?void 0:u.rowCount,state:{pagination:i},manualPagination:!0,onPaginationChange:s}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=Pagination.stories-DQ5XbCjd.js.map
