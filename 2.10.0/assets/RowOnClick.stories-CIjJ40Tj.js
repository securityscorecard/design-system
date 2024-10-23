import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{a as R}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as S}from"./index-BxOaE3O0.js";import{D}from"./Datatable-xGdmYyl-.js";import{T as d}from"./Template-Yn6PUlti.js";import"./index-Bv39VcRu.js";import{S as C}from"./index-Cf7gdOSN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./useOuterCallback-D-FgCOcm.js";import"./index-DhoXBIRq.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-CTaTgKG2.js";import"./index-dWynxCtG.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./mergeRefs-D2M2BR1V.js";import"./index-DuTw_9qX.js";import"./index-BsP7FXMl.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-DqyU8raZ.js";import"./CloseButton-BCLB1UKm.js";import"./IconButton-DoYGB1w0.js";import"./components-BQVXU2CE.js";import"./index-DP_jSIOV.js";import"./Icon-Rfg63q_9.js";import"./index-Dk74W0Oi.js";import"./useLogger-CvwVUQJ2.js";import"./index-gqxQzocl.js";import"./Spinner-K1HJcvQM.js";import"./prop-CTu21A3U.js";import"./Inline.enums-B6aHLh-0.js";import"./FloatingContext-CQFaKq2L.js";import"./ElementLabel-BG1PitjW.js";import"./index-BdgNbBlP.js";import"./Padbox-CDFfn736.js";import"./useSafeTranslation-DcCPuJ_8.js";import"./en-US-CDWxVyPr.js";import"./menuElements-HHmq4m46.js";import"./index-B9rA5P-U.js";import"./pluck-DHBcIId7.js";import"./useLocalStorageState-D2NPfI6N.js";import"./useContainerQuery-Cnf3zHpB.js";import"./Skeleton-C-5DW4Hw.js";import"./Button-CWF-cIJl.js";import"./index-BydEblTc.js";import"./index-DcIFkB_X.js";import"./Tooltip-PZ3iKA0p.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-Bp9iF5gu.js";import"./Pill-iZ7-fUnx.js";import"./PillRemoveButton-qry3U2cu.js";import"./Cluster-DBXy5O-6.js";const Vt={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=d.bind({});g.args={...d.args,onRowClick:({row:r,table:e})=>R("row action")({row:r,table:e}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:e})=>t=>R("rowsAction button")({row:r,table:e,event:t})}]};const j=d.bind({});j.args={...d.args};const k=d.bind({});k.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};k.parameters={screenshot:{skip:!1}};const c=r=>{const[e,t]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};c.args=g.args;const O=({row:r,table:e})=>{var w,m;const{flatRows:t=[]}=((w=e.getSortedRowModel)==null?void 0:w.call(e))??{},[a,i]=s.useState((m=t.findIndex)==null?void 0:m.call(t,n=>n.id===r.id));return s.useEffect(()=>{var n;i((n=t==null?void 0:t.findIndex)==null?void 0:n.call(t,u=>u.id===r.id))},[t,r.id]),s.useEffect(()=>{const n=u=>{u.key==="ArrowUp"&&(i(l=>l-1<0?0:l-1),e.setActiveRowId(t[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(i(l=>l+1>=t.length?t.length-1:l+1),e.setActiveRowId(t[a<t.length-1?a+1:t.length-1].id))};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}},[t,t.length,e,a]),{rows:t,rowIndex:a}},x=([r,e])=>typeof e=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(e).map(x)]}):o.jsxs("div",{children:[r,": ",e.toString()]},r),y=({row:r,table:e,onClose:t})=>{const{rows:a,rowIndex:i}=O({row:r,table:e});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[i].original.organization.name,onClose:t,children:o.jsx(C,{gap:"sm",children:Object.entries(a[i].original).map(x)})})},p=r=>{const[e,t]=s.useState(""),[a,i]=s.useState(null),w=s.useCallback(()=>{t(""),i(null)},[i,t]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,onRowClick:m=>{m.row.id===e?i(null):i(m)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};p.args=d.args;c.__docgenInfo={description:"",methods:[],displayName:"ActiveRowManagedState"};p.__docgenInfo={description:"",methods:[],displayName:"OpenDrawerOnRowClick"};var v,I,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(h=(I=c.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var b,f,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(A=(f=p.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Bt=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{k as ActiveRow,c as ActiveRowManagedState,p as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,Bt as __namedExportsOrder,Vt as default};
//# sourceMappingURL=RowOnClick.stories-CIjJ40Tj.js.map
