import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{g as y,T as n,c as I}from"./Template-CP6s3hoX.js";import{D as g}from"./Datatable-Rvbe6Dwv.js";import"./index-xJp9Kd2E.js";import"./Pill-3kaa-68-.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./PillRemoveButton-CS7bxu8m.js";import"./space-1LtLrmuu.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./index-DFvsTZbx.js";import"./Surface-DpLLkhSd.js";import"./flex.types-BrkCVx66.js";import"./useLogger-Cd66DVRc.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./Icon-4JNizDXH.js";import"./PillLabel-CLRUhFaA.js";import"./gt-mgGmHlKl.js";import"./menuElements-CDUISt4p.js";import"./tslib.es6-BLYux4pC.js";import"./Text-DTP2ysh1.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-DwI_GXhF.js";import"./Button-vDRI25at.js";import"./BaseButton-D1TUSAxp.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";import"./Paragraph-4LRW5eCl.js";import"./Skeleton-Mij27U1S.js";import"./Tooltip-D-FMcIGF.js";import"./FloatingContext-C7r7lnEb.js";import"./CloseButton-Ddazfl7Y.js";import"./sortable.esm-CWiKwvcN.js";import"./modifiers.esm-D9Gd6yO_.js";const p=y(100),k=t=>({entries:p.slice(t.pageIndex*t.pageSize,(t.pageIndex+1)*t.pageSize),pageCount:Math.ceil(p.length/t.pageSize),rowCount:p.length}),v=({queryFn:t})=>({data:t()}),Ia={title:"components/DatatableV2/Pagination",component:g,parameters:{screenshot:{skip:!0}}},f=n.bind({});f.args=n.args;f.parameters={screenshot:{skip:!1}};const C=n.bind({});C.args={...n.args,enablePagination:!1};C.parameters={screenshot:{skip:!1}};const D=n.bind({});D.args={...n.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const j=n.bind({});j.args={...n.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};j.parameters={screenshot:{skip:!1}};const w=n.bind({});w.args={...n.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};w.parameters={screenshot:{skip:!1}};const i=t=>{const[r,s]=x.useState({pageIndex:1,pageSize:10});return a.jsxs(a.Fragment,{children:[a.jsx(g,{state:{pagination:r},onPaginationChange:s,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};i.args=n.args;const o=t=>{var m,u,c;const[r,s]=x.useState({pageIndex:0,pageSize:10}),e=v({queryKey:["data",r],queryFn:()=>k(r),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(g,{...t,columns:I,data:((m=e==null?void 0:e.data)==null?void 0:m.entries)??[],pageCount:((u=e==null?void 0:e.data)==null?void 0:u.pageCount)??-1,rowCount:(c=e==null?void 0:e.data)==null?void 0:c.rowCount,state:{pagination:r},manualPagination:!0,onPaginationChange:s}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};var l,d,P;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(P=(d=i.parameters)==null?void 0:d.docs)==null?void 0:P.source}}};var h,S,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const ka=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{j as CustomRowsPerPageOptions,C as DisabledPagination,D as EnabledRowsPerPage,w as InitialPagination,o as ManualPagination,f as PaginationEnabled,i as PaginationManagedState,ka as __namedExportsOrder,Ia as default};
