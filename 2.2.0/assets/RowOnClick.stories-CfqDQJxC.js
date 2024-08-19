import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{a as R}from"./chunk-454WOBUV-DWuJqIWT.js";import{D as S}from"./index-Ca5RqgEd.js";import{D}from"./Datatable-Rvbe6Dwv.js";import{T as c}from"./Template-CP6s3hoX.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as C}from"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./useOuterCallback-Mi4Xn43N.js";import"./index-DIVhMF2i.js";import"./space-1LtLrmuu.js";import"./index-C7IrpltL.js";import"./BaseOverlay-C1Jhhd36.js";import"./mergeRefs-sWHjowoU.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./index-DFvsTZbx.js";import"./CloseButton-Ddazfl7Y.js";import"./Icon-4JNizDXH.js";import"./useLogger-Cd66DVRc.js";import"./FloatingContext-C7r7lnEb.js";import"./ElementLabel-BFX3DrvP.js";import"./menuElements-CDUISt4p.js";import"./tslib.es6-BLYux4pC.js";import"./Text-DTP2ysh1.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-DwI_GXhF.js";import"./Button-vDRI25at.js";import"./BaseButton-D1TUSAxp.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";import"./Paragraph-4LRW5eCl.js";import"./Skeleton-Mij27U1S.js";import"./Tooltip-D-FMcIGF.js";import"./sortable.esm-CWiKwvcN.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./Pill-3kaa-68-.js";import"./PillRemoveButton-CS7bxu8m.js";import"./PillLabel-CLRUhFaA.js";import"./gt-mgGmHlKl.js";import"./flex.types-BrkCVx66.js";const zt={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=c.bind({});g.args={...c.args,onRowClick:({row:r,table:e})=>R("row action")({row:r,table:e}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:e})=>t=>R("rowsAction button")({row:r,table:e,event:t})}]};const j=c.bind({});j.args={...c.args};const f=c.bind({});f.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};f.parameters={screenshot:{skip:!1}};const m=r=>{const[e,t]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};m.args=g.args;const O=({row:r,table:e})=>{var w,d;const{flatRows:t=[]}=((w=e.getSortedRowModel)==null?void 0:w.call(e))??{},[a,n]=s.useState((d=t.findIndex)==null?void 0:d.call(t,i=>i.id===r.id));return s.useEffect(()=>{var i;n((i=t==null?void 0:t.findIndex)==null?void 0:i.call(t,u=>u.id===r.id))},[t,r.id]),s.useEffect(()=>{const i=u=>{u.key==="ArrowUp"&&(n(p=>p-1<0?0:p-1),e.setActiveRowId(t[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(n(p=>p+1>=t.length?t.length-1:p+1),e.setActiveRowId(t[a<t.length-1?a+1:t.length-1].id))};return document.addEventListener("keyup",i),()=>{document.removeEventListener("keyup",i)}},[t,t.length,e,a]),{rows:t,rowIndex:a}},k=([r,e])=>typeof e=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(e).map(k)]}):o.jsxs("div",{children:[r,": ",e.toString()]},r),y=({row:r,table:e,onClose:t})=>{const{rows:a,rowIndex:n}=O({row:r,table:e});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[n].original.organization.name,onClose:t,children:o.jsx(C,{gap:"sm",children:Object.entries(a[n].original).map(k)})})},l=r=>{const[e,t]=s.useState(""),[a,n]=s.useState(null),w=s.useCallback(()=>{t(""),n(null)},[n,t]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,onRowClick:d=>{d.row.id===e?n(null):n(d)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};l.args=c.args;var v,I,b;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [activeRowId, setActiveRowId] = useState('e23968c3-3f19-44b2-aee9-c4a1d7c326ee');
  return <>
      <Datatable state={{
      activeRowId
    }} onActiveRowIdChange={setActiveRowId} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(activeRowId, null, 2)}</pre>
      </div>
    </>;
}`,...(b=(I=m.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var h,x,A;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [activeRowId, setActiveRowId] = useState('');
  const [drawerData, setDrawerData] = useState<{
    row: DatatableRow<DataSource>;
    table: DatatableInstance<DataSource>;
  } | null>(null);
  const handleDrawerClose = useCallback(() => {
    setActiveRowId('');
    setDrawerData(null);
  }, [setDrawerData, setActiveRowId]);
  return <>
      <Datatable state={{
      activeRowId
    }} onActiveRowIdChange={setActiveRowId} onRowClick={props => {
      if (props.row.id === activeRowId) {
        setDrawerData(null);
      } else {
        setDrawerData(props);
      }
    }} {...args} />
      {drawerData !== null && <DataDrawer row={drawerData.row} table={drawerData.table} onClose={handleDrawerClose} />}
    </>;
}`,...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Ft=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{f as ActiveRow,m as ActiveRowManagedState,l as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,Ft as __namedExportsOrder,zt as default};
