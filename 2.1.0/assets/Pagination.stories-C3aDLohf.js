import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{g as w,T as n,c as I}from"./Template-B8CfEXil.js";import{D as g}from"./Datatable-CL2Bdg1d.js";import"./index-xJp9Kd2E.js";import"./Pill-Dq2X2jGR.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./PillRemoveButton-D2CC_PxY.js";import"./space-BY85GhUc.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./index-DFvsTZbx.js";import"./Surface-CvF-S7pg.js";import"./flex.types-BrkCVx66.js";import"./useLogger-CziYgifR.js";import"./prop-Cw0eZkJ_.js";import"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import"./Icon-DSPfH_8v.js";import"./PillLabel-yycd7XxX.js";import"./gt-bFkVvxSK.js";import"./menuElements-CIq9H2AQ.js";import"./tslib.es6-BLYux4pC.js";import"./Text-CQej7zPl.js";import"./pluck-CGJirjHu.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-DwI_GXhF.js";import"./Paragraph-DLn62-bA.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-S2p0M2gE.js";import"./Tooltip-Dgp4eCqw.js";import"./FloatingContext-CTHtuARV.js";import"./Button-CgUf0TwU.js";import"./BaseButton-Bl-0NeNF.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-b5BYo8Sk.js";import"./isNotNull-D2Wrs3cn.js";import"./noop-CRTpovv1.js";import"./CloseButton-B_hKnNOh.js";import"./sortable.esm-CWiKwvcN.js";import"./modifiers.esm-D9Gd6yO_.js";const p=w(100),k=t=>({entries:p.slice(t.pageIndex*t.pageSize,(t.pageIndex+1)*t.pageSize),pageCount:Math.ceil(p.length/t.pageSize),rowCount:p.length}),v=({queryFn:t})=>({data:t()}),Ia={title:"components/DatatableV2/Pagination",component:g,parameters:{screenshot:{skip:!0}}},f=n.bind({});f.args=n.args;f.parameters={screenshot:{skip:!1}};const C=n.bind({});C.args={...n.args,enablePagination:!1};C.parameters={screenshot:{skip:!1}};const D=n.bind({});D.args={...n.args,enableRowsPerPage:!0};D.parameters={screenshot:{skip:!1}};const y=n.bind({});y.args={...n.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};y.parameters={screenshot:{skip:!1}};const j=n.bind({});j.args={...n.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};j.parameters={screenshot:{skip:!1}};const r=t=>{const[i,s]=x.useState({pageIndex:1,pageSize:10});return a.jsxs(a.Fragment,{children:[a.jsx(g,{state:{pagination:i},onPaginationChange:s,...t}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};r.args=n.args;const o=t=>{var m,d,u;const[i,s]=x.useState({pageIndex:0,pageSize:10}),e=v({queryKey:["data",i],queryFn:()=>k(i),keepPreviousData:!0});return a.jsxs(a.Fragment,{children:[a.jsx(g,{...t,columns:I,data:((m=e==null?void 0:e.data)==null?void 0:m.entries)??[],pageCount:((d=e==null?void 0:e.data)==null?void 0:d.pageCount)??-1,rowCount:(u=e==null?void 0:e.data)==null?void 0:u.rowCount,state:{pagination:i},manualPagination:!0,onPaginationChange:s}),a.jsxs("div",{children:[a.jsx("strong",{children:"Debug:"}),a.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"PaginationManagedState"};o.__docgenInfo={description:"",methods:[],displayName:"ManualPagination"};var c,l,P;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const ka=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{y as CustomRowsPerPageOptions,C as DisabledPagination,D as EnabledRowsPerPage,j as InitialPagination,o as ManualPagination,f as PaginationEnabled,r as PaginationManagedState,ka as __namedExportsOrder,Ia as default};
