import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as f}from"./index-ClcD9ViR.js";import{u as j,f as w}from"./externalData-BQBlWHp8.js";import{D as p}from"./Datatable-x2ZfM_pe.js";import{a as I,T as t,c as k}from"./argTypes-CMcsPgbk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-BIFF4Ira.js";import"./index-C2fNon3Z.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-BumGbSft.js";import"./SelectionToolbar-BIj_XAYC.js";import"./index-t408_oKr.js";import"./Icon-CwDBfXxP.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-D-VPAycD.js";import"./index-D4bv78R3.js";import"./Padbox-QeDNAg-Y.js";import"./index-CJqnHCRB.js";import"./prop-DxwKVRPv.js";import"./Inline-CJoeeTWo.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-EcHytK4z.js";import"./index-fVh6sz_B.js";import"./Button-F6ZYDBEp.js";import"./components-C9ZynCTM.js";import"./index-DKZQhKLO.js";import"./Spinner-C4Y4qwgQ.js";import"./useSafeTranslation-CTytszpq.js";import"./en-US-DTEh3xIi.js";import"./pluck-CostYriq.js";import"./IconButton-D-PcuZjI.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-CkPRSvbb.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-YvM1PAod.js";import"./index-BlmJOztB.js";import"./Tooltip-CNTka1Rj.js";import"./FloatingContext-Iczo9egI.js";import"./index-oSnT1g_s.js";import"./CloseButton-BnxGXhE2.js";import"./index-DAjbAeX4.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-CxXlF41o.js";import"./Pill-BDetg8sM.js";import"./PillRemoveButton-CrYU6s_g.js";const Ma={title:"components/DatatableV2/Pagination",component:p,parameters:{screenshot:{skip:!0}},argTypes:I},S=t.bind({});S.args=t.args;S.parameters={screenshot:{skip:!1}};const x=t.bind({});x.args={...t.args,enablePagination:!1};x.parameters={screenshot:{skip:!1}};const D=t.bind({});D.args={...t.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const y=t.bind({});y.args={...t.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};y.parameters={screenshot:{skip:!1}};const C=t.bind({});C.args={...t.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};C.parameters={screenshot:{skip:!1}};const i=r=>{const[e,s]=f.useState({pageIndex:1,pageSize:10});return a.jsxs(a.Fragment,{children:[a.jsx(p,{state:{pagination:e},onPaginationChange:s,...r}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};i.args=t.args;const o=r=>{var g,m,d;const[e,s]=f.useState({pageIndex:0,pageSize:10}),n=j({queryKey:["data",e],queryFn:()=>w(e),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(p,{...r,columns:k,data:((g=n==null?void 0:n.data)==null?void 0:g.entries)??[],pageCount:((m=n==null?void 0:n.data)==null?void 0:m.pageCount)??-1,rowCount:(d=n==null?void 0:n.data)==null?void 0:d.rowCount,state:{pagination:e},manualPagination:!0,onPaginationChange:s}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"PaginationManagedState"};o.__docgenInfo={description:"",methods:[],displayName:"ManualPagination"};var u,c,l;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var P,b,h;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Na=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{y as CustomRowsPerPageOptions,x as DisabledPagination,D as EnabledRowsPerPage,C as InitialPagination,o as ManualPagination,S as PaginationEnabled,i as PaginationManagedState,Na as __namedExportsOrder,Ma as default};
//# sourceMappingURL=Pagination.stories-D5kv_Xsy.js.map
