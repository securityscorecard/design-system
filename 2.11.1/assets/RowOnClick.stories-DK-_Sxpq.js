import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{a as R}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as S}from"./index-BBs1qKOa.js";import{D}from"./Datatable-DGBKrjVG.js";import{T as c}from"./Template-B6T_mIBx.js";import"./index-g6a7d4VX.js";import{S as C}from"./index-DswKY91G.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./useOuterCallback-CsuasNJq.js";import"./index-DhoXBIRq.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-CvvN4_Vk.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./mergeRefs-BjwOtpm_.js";import"./index-BAFidxi4.js";import"./index-CajKmcpa.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DQm2UIbK.js";import"./CloseButton-DAl5F0pU.js";import"./IconButton-G79IfSWP.js";import"./components-KPog_F_-.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-Dk74W0Oi.js";import"./useLogger-BV2AIPN5.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./Inline.enums-BAfT2b1A.js";import"./FloatingContext-Cr2ZSxO5.js";import"./ElementLabel-CLZwawJK.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./PaginationToolbar-Cc3nJNU-.js";import"./menuElements-B9_FW7TJ.js";import"./index-iel8gM5l.js";import"./useSafeTranslation-D7WzaY-Y.js";import"./en-US-wky7Us-i.js";import"./Button-CXTuE1Mx.js";import"./useContainerQuery-BBrWYpwZ.js";import"./Skeleton-4tPyiyJG.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-Tm3zSpl6.js";import"./index-D8YPWSaz.js";import"./Tooltip-C2iKzNvT.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-CrCPhLtn.js";import"./Pill-BO_fL3ZH.js";import"./PillRemoveButton-BXLVcWxq.js";import"./Cluster-x6SODxoc.js";const Bt={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=c.bind({});g.args={...c.args,onRowClick:({row:r,table:e})=>R("row action")({row:r,table:e}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:e})=>t=>R("rowsAction button")({row:r,table:e,event:t})}]};const j=c.bind({});j.args={...c.args};const f=c.bind({});f.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};f.parameters={screenshot:{skip:!1}};const d=r=>{const[e,t]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};d.args=g.args;const O=({row:r,table:e})=>{var w,p;const{flatRows:t=[]}=((w=e.getSortedRowModel)==null?void 0:w.call(e))??{},[a,i]=s.useState((p=t.findIndex)==null?void 0:p.call(t,n=>n.id===r.id));return s.useEffect(()=>{var n;i((n=t==null?void 0:t.findIndex)==null?void 0:n.call(t,u=>u.id===r.id))},[t,r.id]),s.useEffect(()=>{const n=u=>{u.key==="ArrowUp"&&(i(m=>m-1<0?0:m-1),e.setActiveRowId(t[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(i(m=>m+1>=t.length?t.length-1:m+1),e.setActiveRowId(t[a<t.length-1?a+1:t.length-1].id))};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}},[t,t.length,e,a]),{rows:t,rowIndex:a}},k=([r,e])=>typeof e=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(e).map(k)]}):o.jsxs("div",{children:[r,": ",e.toString()]},r),y=({row:r,table:e,onClose:t})=>{const{rows:a,rowIndex:i}=O({row:r,table:e});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[i].original.organization.name,onClose:t,children:o.jsx(C,{gap:"sm",children:Object.entries(a[i].original).map(k)})})},l=r=>{const[e,t]=s.useState(""),[a,i]=s.useState(null),w=s.useCallback(()=>{t(""),i(null)},[i,t]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,onRowClick:p=>{p.row.id===e?i(null):i(p)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};l.args=c.args;var v,I,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(b=(I=d.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var h,x,A;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Ut=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{f as ActiveRow,d as ActiveRowManagedState,l as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,Ut as __namedExportsOrder,Bt as default};
//# sourceMappingURL=RowOnClick.stories-DK-_Sxpq.js.map
