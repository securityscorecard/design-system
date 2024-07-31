import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{a as R}from"./chunk-454WOBUV-DWuJqIWT.js";import{D as S}from"./Drawer-D5EO45nB.js";import{D}from"./Datatable-CUEcp2i-.js";import{T as p}from"./Template-DdIjOLPX.js";import"./Surface-Cs7tekjF.js";import"./Padbox-BrtZqAZY.js";import{S as C}from"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./index-Dk74W0Oi.js";import"./useOuterCallback-D_VzbQoG.js";import"./index-DhoXBIRq.js";import"./space-B9R18Mwn.js";import"./index-CVyJwDg7.js";import"./BaseOverlay-DOzxuK0O.js";import"./mergeRefs-CX7C4EOn.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./index-DFvsTZbx.js";import"./CloseButton-CuyKiBXp.js";import"./Icon-B7DxM8PH.js";import"./useLogger-D4I9buOf.js";import"./Text-C1sA-5dj.js";import"./FloatingContext-nGTlWJDF.js";import"./menuElements-HsU9kfTS.js";import"./tslib.es6-BLYux4pC.js";import"./pluck-CCxX0LJC.js";import"./prop-3Huj0iT1.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-BBpl-5uo.js";import"./Paragraph-DD2XWiUD.js";import"./spacing.types-QRY9P8Qv.js";import"./Skeleton-BoUdprqo.js";import"./Tooltip-BAcCN_rY.js";import"./Button-CKE-X77u.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-DLDOSOzx.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./sortable.esm-DD_xGjRI.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./Pill-CwiyUbuD.js";import"./PillRemoveButton-MEfwPxhp.js";import"./PillLabel-DJNPzf-i.js";import"./gt-CQw4D1xu.js";import"./flex.types-q2tZp175.js";const ze={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=p.bind({});g.args={...p.args,onRowClick:({row:r,table:t})=>R("row action")({row:r,table:t}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:t})=>e=>R("rowsAction button")({row:r,table:t,event:e})}]};const j=p.bind({});j.args={...p.args};const k=p.bind({});k.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};k.parameters={screenshot:{skip:!1}};const c=r=>{const[t,e]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};c.args=g.args;const O=({row:r,table:t})=>{var w,m;const{flatRows:e=[]}=((w=t.getSortedRowModel)==null?void 0:w.call(t))??{},[a,n]=s.useState((m=e.findIndex)==null?void 0:m.call(e,i=>i.id===r.id));return s.useEffect(()=>{var i;n((i=e==null?void 0:e.findIndex)==null?void 0:i.call(e,u=>u.id===r.id))},[e,r.id]),s.useEffect(()=>{const i=u=>{u.key==="ArrowUp"&&(n(l=>l-1<0?0:l-1),t.setActiveRowId(e[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(n(l=>l+1>=e.length?e.length-1:l+1),t.setActiveRowId(e[a<e.length-1?a+1:e.length-1].id))};return document.addEventListener("keyup",i),()=>{document.removeEventListener("keyup",i)}},[e,e.length,t,a]),{rows:e,rowIndex:a}},x=([r,t])=>typeof t=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(t).map(x)]}):o.jsxs("div",{children:[r,": ",t.toString()]},r),y=({row:r,table:t,onClose:e})=>{const{rows:a,rowIndex:n}=O({row:r,table:t});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[n].original.organization.name,onClose:e,children:o.jsx(C,{gap:"sm",children:Object.entries(a[n].original).map(x)})})},d=r=>{const[t,e]=s.useState(""),[a,n]=s.useState(null),w=s.useCallback(()=>{e(""),n(null)},[n,e]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,onRowClick:m=>{m.row.id===t?n(null):n(m)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};d.args=p.args;c.__docgenInfo={description:"",methods:[],displayName:"ActiveRowManagedState"};d.__docgenInfo={description:"",methods:[],displayName:"OpenDrawerOnRowClick"};var v,I,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Fe=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{k as ActiveRow,c as ActiveRowManagedState,d as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,Fe as __namedExportsOrder,ze as default};
