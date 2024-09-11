import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{a as R}from"./chunk-454WOBUV-DWuJqIWT.js";import{D as S}from"./index-DP1Z_moy.js";import{D}from"./Datatable-CE9AuCi0.js";import{T as c}from"./Template-DThkUfqA.js";import"./index-BfLWfhlY.js";import{S as C}from"./index-BcSnSfQB.js";import"./v4-D8aEg3BZ.js";import"./useOuterCallback-QFNlztp2.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-C7IrpltL.js";import"./index-BkEniAtJ.js";import"./index-DzAsfYvZ.js";import"./mergeRefs-CmEt7Zz_.js";import"./index-4aEyDaIq.js";import"./index-uyLpYamY.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./isFunction-BtTpAfvx.js";import"./prop-CePbk9wh.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-Dgakt_4W.js";import"./CloseButton-BWqOiFUV.js";import"./IconButton-Bd-lF6sc.js";import"./components-BItAEv9I.js";import"./index-DoZinuF4.js";import"./Icon-DCTBW-fe.js";import"./index-BRV0Se7Z.js";import"./useLogger-IjsioYUQ.js";import"./index-DNjKNlmW.js";import"./Spinner-qeMxdFSS.js";import"./Inline-Cg9jPAAE.js";import"./flex.types-BrkCVx66.js";import"./FloatingContext-Bsi7uTe6.js";import"./ElementLabel-BAHjFxqF.js";import"./menuElements-DejiY6eM.js";import"./tslib.es6-BLYux4pC.js";import"./index-BiHv5IcS.js";import"./Padbox-ugjOsLS7.js";import"./useLocalStorageState-Dk2imEhS.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-5uIKxvED.js";import"./index-CdPlJU3q.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-DPenJgjv.js";import"./index-D09y0Wvv.js";import"./Tooltip-DVd80gkH.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-CUoDZfxY.js";import"./Pill-XORrOTHp.js";import"./PillRemoveButton-B_IsOC8g.js";import"./gt-aySh16NS.js";import"./Cluster-HoiIP47J.js";import"./index-BawZj8GX.js";const Jt={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=c.bind({});g.args={...c.args,onRowClick:({row:r,table:e})=>R("row action")({row:r,table:e}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:e})=>t=>R("rowsAction button")({row:r,table:e,event:t})}]};const j=c.bind({});j.args={...c.args};const f=c.bind({});f.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};f.parameters={screenshot:{skip:!1}};const m=r=>{const[e,t]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};m.args=g.args;const O=({row:r,table:e})=>{var w,p;const{flatRows:t=[]}=((w=e.getSortedRowModel)==null?void 0:w.call(e))??{},[a,n]=s.useState((p=t.findIndex)==null?void 0:p.call(t,i=>i.id===r.id));return s.useEffect(()=>{var i;n((i=t==null?void 0:t.findIndex)==null?void 0:i.call(t,u=>u.id===r.id))},[t,r.id]),s.useEffect(()=>{const i=u=>{u.key==="ArrowUp"&&(n(d=>d-1<0?0:d-1),e.setActiveRowId(t[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(n(d=>d+1>=t.length?t.length-1:d+1),e.setActiveRowId(t[a<t.length-1?a+1:t.length-1].id))};return document.addEventListener("keyup",i),()=>{document.removeEventListener("keyup",i)}},[t,t.length,e,a]),{rows:t,rowIndex:a}},k=([r,e])=>typeof e=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(e).map(k)]}):o.jsxs("div",{children:[r,": ",e.toString()]},r),y=({row:r,table:e,onClose:t})=>{const{rows:a,rowIndex:n}=O({row:r,table:e});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[n].original.organization.name,onClose:t,children:o.jsx(C,{gap:"sm",children:Object.entries(a[n].original).map(k)})})},l=r=>{const[e,t]=s.useState(""),[a,n]=s.useState(null),w=s.useCallback(()=>{t(""),n(null)},[n,t]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,onRowClick:p=>{p.row.id===e?n(null):n(p)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};l.args=c.args;var v,I,b;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Kt=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{f as ActiveRow,m as ActiveRowManagedState,l as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,Kt as __namedExportsOrder,Jt as default};
//# sourceMappingURL=RowOnClick.stories-COKFhZOL.js.map
