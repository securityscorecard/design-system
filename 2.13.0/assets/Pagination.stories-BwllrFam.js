import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as x}from"./index-ClcD9ViR.js";import{u as w,f as y}from"./externalData-C44ChJU3.js";import{D as p}from"./Datatable-Ca65eRou.js";import{T as t,c as k}from"./Template-Dy7yT-UW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-CGEbE2mZ.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-puo24fTf.js";import"./SelectionToolbar-B-gmUSrD.js";import"./index-DYDjgMG1.js";import"./Icon-CHceuV7K.js";import"./index-CeOnF3dB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-UOk5nvl2.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./index-CLVl6jk_.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-BdnhnZ8J.js";import"./Cluster-CGQQQZ4I.js";import"./index-CpAvg4Hc.js";import"./Button-vEOnW8Bm.js";import"./components-MIUzfLU3.js";import"./index-CGIPeC-W.js";import"./Spinner-CScYiCuC.js";import"./useSafeTranslation-BH9xR3W8.js";import"./en-US-DVFKJdgt.js";import"./pluck-DtgIh6Gb.js";import"./IconButton-CUW5D67R.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-RJ8AjUwu.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-DTMAbG_k.js";import"./index-CiMTWSno.js";import"./Tooltip-BJtTNnrF.js";import"./FloatingContext-f-xOTKfR.js";import"./index-B2iyLVXu.js";import"./CloseButton-Cw8Fr_ZE.js";import"./index-Ccg6HrRD.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-C-FffhfA.js";import"./Pill-v3oAvX7G.js";import"./PillRemoveButton-DgC9NddM.js";const Ra={title:"components/DatatableV2/Pagination",component:p,parameters:{screenshot:{skip:!0}}},S=t.bind({});S.args=t.args;S.parameters={screenshot:{skip:!1}};const f=t.bind({});f.args={...t.args,enablePagination:!1};f.parameters={screenshot:{skip:!1}};const D=t.bind({});D.args={...t.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const C=t.bind({});C.args={...t.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};C.parameters={screenshot:{skip:!1}};const j=t.bind({});j.args={...t.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};j.parameters={screenshot:{skip:!1}};const i=o=>{const[e,s]=x.useState({pageIndex:1,pageSize:10});return a.jsxs(a.Fragment,{children:[a.jsx(p,{state:{pagination:e},onPaginationChange:s,...o}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};i.args=t.args;const r=o=>{var g,m,u;const[e,s]=x.useState({pageIndex:0,pageSize:10}),n=w({queryKey:["data",e],queryFn:()=>y(e),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(p,{...o,columns:k,data:((g=n==null?void 0:n.data)==null?void 0:g.entries)??[],pageCount:((m=n==null?void 0:n.data)==null?void 0:m.pageCount)??-1,rowCount:(u=n==null?void 0:n.data)==null?void 0:u.rowCount,state:{pagination:e},manualPagination:!0,onPaginationChange:s}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const za=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{C as CustomRowsPerPageOptions,f as DisabledPagination,D as EnabledRowsPerPage,j as InitialPagination,r as ManualPagination,S as PaginationEnabled,i as PaginationManagedState,za as __namedExportsOrder,Ra as default};
//# sourceMappingURL=Pagination.stories-BwllrFam.js.map
