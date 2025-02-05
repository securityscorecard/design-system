import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as x}from"./index-ClcD9ViR.js";import{u as y,f as w}from"./externalData-fASX7SAD.js";import{D as p}from"./Datatable-CfQkRURs.js";import{a as k,T as t,c as v}from"./argTypes-GMJoAJs8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-CCAiqPwH.js";import"./index-Bb-be-4U.js";import"./constants-CHqWh-7J.js";import"./space.enums-BgYGmFKv.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-mgEeOsVG.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-BVkD4o3W.js";import"./SelectionToolbar-DjxGFob2.js";import"./index-BFJL67i_.js";import"./Icon-CPMGMxZp.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-oFlQPhyy.js";import"./index-CUV4n1T7.js";import"./Padbox-N3VhyJTW.js";import"./index-DCrzxnwq.js";import"./prop-Cr6L5s4M.js";import"./Inline-Cltm-cZ0.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-C-kvLuIZ.js";import"./index-DZGjp5Sd.js";import"./Button-CAJpGfaD.js";import"./components-D7PCbKyD.js";import"./index-BLjwvqnm.js";import"./Spinner-JO64Fpiq.js";import"./useSafeTranslation-lb9Y1528.js";import"./en-US-DTEh3xIi.js";import"./pluck-CtHNMFGn.js";import"./IconButton-Dy0o1yF0.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-CQ8N9stu.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-DkqDPL8U.js";import"./index-CrGFM8CV.js";import"./Tooltip-D0kp4-6J.js";import"./FloatingContext-fZ7pv7Rw.js";import"./index-BmV7UxWv.js";import"./CloseButton-CJyLNgsH.js";import"./index-DUaCKjdz.js";import"./isFunction-CPOop_5p.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-Bi5P7cMZ.js";import"./Pill-C6P_4euc.js";import"./PillRemoveButton-B31AQJCY.js";const qa={title:"components/DatatableV2/Pagination",component:p,parameters:{screenshot:{skip:!0}},argTypes:k},S=t.bind({});S.args=t.args;S.parameters={screenshot:{skip:!1}};const f=t.bind({});f.args={...t.args,enablePagination:!1};f.parameters={screenshot:{skip:!1}};const D=t.bind({});D.args={...t.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const C=t.bind({});C.args={...t.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};C.parameters={screenshot:{skip:!1}};const j=t.bind({});j.args={...t.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};j.parameters={screenshot:{skip:!1}};const i=o=>{const[e,s]=x.useState({pageIndex:1,pageSize:10});return a.jsxs(a.Fragment,{children:[a.jsx(p,{state:{pagination:e},onPaginationChange:s,...o}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};i.args=t.args;const r=o=>{var g,m,u;const[e,s]=x.useState({pageIndex:0,pageSize:10}),n=y({queryKey:["data",e],queryFn:()=>w(e),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(p,{...o,columns:v,data:((g=n==null?void 0:n.data)==null?void 0:g.entries)??[],pageCount:((m=n==null?void 0:n.data)==null?void 0:m.pageCount)??-1,rowCount:(u=n==null?void 0:n.data)==null?void 0:u.rowCount,state:{pagination:e},manualPagination:!0,onPaginationChange:s}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var P,b,h;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Fa=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{C as CustomRowsPerPageOptions,f as DisabledPagination,D as EnabledRowsPerPage,j as InitialPagination,r as ManualPagination,S as PaginationEnabled,i as PaginationManagedState,Fa as __namedExportsOrder,qa as default};
//# sourceMappingURL=Pagination.stories-BEsUy3or.js.map
