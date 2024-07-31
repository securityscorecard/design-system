import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as x}from"./index-BwDkhjyp.js";import{g as w,T as n,c as I}from"./Template-DdIjOLPX.js";import{D as g}from"./Datatable-CUEcp2i-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-xJp9Kd2E.js";import"./Pill-CwiyUbuD.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./PillRemoveButton-MEfwPxhp.js";import"./space-B9R18Mwn.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./index-DFvsTZbx.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./useLogger-D4I9buOf.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./Icon-B7DxM8PH.js";import"./PillLabel-DJNPzf-i.js";import"./gt-CQw4D1xu.js";import"./menuElements-HsU9kfTS.js";import"./tslib.es6-BLYux4pC.js";import"./Text-C1sA-5dj.js";import"./pluck-CCxX0LJC.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-BBpl-5uo.js";import"./Paragraph-DD2XWiUD.js";import"./spacing.types-QRY9P8Qv.js";import"./Skeleton-BoUdprqo.js";import"./Tooltip-BAcCN_rY.js";import"./FloatingContext-nGTlWJDF.js";import"./Button-CKE-X77u.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-DLDOSOzx.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./CloseButton-CuyKiBXp.js";import"./sortable.esm-DD_xGjRI.js";import"./modifiers.esm-CDknwSvc.js";const p=w(100),k=t=>({entries:p.slice(t.pageIndex*t.pageSize,(t.pageIndex+1)*t.pageSize),pageCount:Math.ceil(p.length/t.pageSize),rowCount:p.length}),v=({queryFn:t})=>({data:t()}),ka={title:"components/DatatableV2/Pagination",component:g,parameters:{screenshot:{skip:!0}}},f=n.bind({});f.args=n.args;f.parameters={screenshot:{skip:!1}};const C=n.bind({});C.args={...n.args,enablePagination:!1};C.parameters={screenshot:{skip:!1}};const D=n.bind({});D.args={...n.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const y=n.bind({});y.args={...n.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};y.parameters={screenshot:{skip:!1}};const j=n.bind({});j.args={...n.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};j.parameters={screenshot:{skip:!1}};const r=t=>{const[i,s]=x.useState({pageIndex:1,pageSize:10});return a.jsxs(a.Fragment,{children:[a.jsx(g,{state:{pagination:i},onPaginationChange:s,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};r.args=n.args;const o=t=>{var m,d,u;const[i,s]=x.useState({pageIndex:0,pageSize:10}),e=v({queryKey:["data",i],queryFn:()=>k(i),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(g,{...t,columns:I,data:((m=e==null?void 0:e.data)==null?void 0:m.entries)??[],pageCount:((d=e==null?void 0:e.data)==null?void 0:d.pageCount)??-1,rowCount:(u=e==null?void 0:e.data)==null?void 0:u.rowCount,state:{pagination:i},manualPagination:!0,onPaginationChange:s}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"PaginationManagedState"};o.__docgenInfo={description:"",methods:[],displayName:"ManualPagination"};var c,l,P;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(P=(l=r.parameters)==null?void 0:l.docs)==null?void 0:P.source}}};var h,S,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const va=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{y as CustomRowsPerPageOptions,C as DisabledPagination,D as EnabledRowsPerPage,j as InitialPagination,o as ManualPagination,f as PaginationEnabled,r as PaginationManagedState,va as __namedExportsOrder,ka as default};
