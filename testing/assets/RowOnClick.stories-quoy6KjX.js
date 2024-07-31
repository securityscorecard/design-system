import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{a as R}from"./chunk-454WOBUV-DWuJqIWT.js";import{D as S}from"./Drawer-BiTMe9NK.js";import{D}from"./Datatable-CL2Bdg1d.js";import{T as p}from"./Template-B8CfEXil.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import{S as C}from"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./useOuterCallback-Mi4Xn43N.js";import"./index-DIVhMF2i.js";import"./space-BY85GhUc.js";import"./index-C7IrpltL.js";import"./BaseOverlay-Cpz_dJZI.js";import"./mergeRefs-BUQjZHg5.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./index-DFvsTZbx.js";import"./CloseButton-B_hKnNOh.js";import"./Icon-DSPfH_8v.js";import"./useLogger-CziYgifR.js";import"./Text-CQej7zPl.js";import"./FloatingContext-CTHtuARV.js";import"./menuElements-CIq9H2AQ.js";import"./tslib.es6-BLYux4pC.js";import"./pluck-CGJirjHu.js";import"./prop-Cw0eZkJ_.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-DwI_GXhF.js";import"./Paragraph-DLn62-bA.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-S2p0M2gE.js";import"./Tooltip-Dgp4eCqw.js";import"./Button-CgUf0TwU.js";import"./BaseButton-Bl-0NeNF.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-b5BYo8Sk.js";import"./isNotNull-D2Wrs3cn.js";import"./noop-CRTpovv1.js";import"./sortable.esm-CWiKwvcN.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./Pill-Dq2X2jGR.js";import"./PillRemoveButton-D2CC_PxY.js";import"./PillLabel-yycd7XxX.js";import"./gt-bFkVvxSK.js";import"./flex.types-BrkCVx66.js";const Me={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=p.bind({});g.args={...p.args,onRowClick:({row:r,table:t})=>R("row action")({row:r,table:t}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:t})=>e=>R("rowsAction button")({row:r,table:t,event:e})}]};const j=p.bind({});j.args={...p.args};const k=p.bind({});k.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};k.parameters={screenshot:{skip:!1}};const c=r=>{const[t,e]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};c.args=g.args;const O=({row:r,table:t})=>{var w,m;const{flatRows:e=[]}=((w=t.getSortedRowModel)==null?void 0:w.call(t))??{},[a,n]=s.useState((m=e.findIndex)==null?void 0:m.call(e,i=>i.id===r.id));return s.useEffect(()=>{var i;n((i=e==null?void 0:e.findIndex)==null?void 0:i.call(e,u=>u.id===r.id))},[e,r.id]),s.useEffect(()=>{const i=u=>{u.key==="ArrowUp"&&(n(l=>l-1<0?0:l-1),t.setActiveRowId(e[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(n(l=>l+1>=e.length?e.length-1:l+1),t.setActiveRowId(e[a<e.length-1?a+1:e.length-1].id))};return document.addEventListener("keyup",i),()=>{document.removeEventListener("keyup",i)}},[e,e.length,t,a]),{rows:e,rowIndex:a}},x=([r,t])=>typeof t=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(t).map(x)]}):o.jsxs("div",{children:[r,": ",t.toString()]},r),y=({row:r,table:t,onClose:e})=>{const{rows:a,rowIndex:n}=O({row:r,table:t});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[n].original.organization.name,onClose:e,children:o.jsx(C,{gap:"sm",children:Object.entries(a[n].original).map(x)})})},d=r=>{const[t,e]=s.useState(""),[a,n]=s.useState(null),w=s.useCallback(()=>{e(""),n(null)},[n,e]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,onRowClick:m=>{m.row.id===t?n(null):n(m)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};d.args=p.args;c.__docgenInfo={description:"",methods:[],displayName:"ActiveRowManagedState"};d.__docgenInfo={description:"",methods:[],displayName:"OpenDrawerOnRowClick"};var v,I,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(h=(I=c.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var b,f,A;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const ze=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{k as ActiveRow,c as ActiveRowManagedState,d as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,ze as __namedExportsOrder,Me as default};
