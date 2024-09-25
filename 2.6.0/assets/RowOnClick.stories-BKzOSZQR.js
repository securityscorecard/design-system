import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{a as R}from"./chunk-454WOBUV-CM0pFb8Z.js";import{D as S}from"./index-B2nIQ_Lu.js";import{D}from"./Datatable-Bg80pmRP.js";import{T as c}from"./Template-C6k2Jk7B.js";import"./index-DozTNYRt.js";import{S as C}from"./index-NWhnjyl5.js";import"./v4-CQkTLCs1.js";import"./useOuterCallback-BTWdDzjv.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-jf5n_qdU.js";import"./index-CbknQUej.js";import"./mergeRefs-rkkxDSpI.js";import"./index-DEer-CVx.js";import"./index-CMxDd3Da.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./isFunction-ORz17Qg7.js";import"./prop-CqBAad6K.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-BjcCWu4d.js";import"./CloseButton-DolDE5X-.js";import"./IconButton-CIf20D8_.js";import"./components-9007xTyM.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-BRV0Se7Z.js";import"./useLogger-XTihx-r2.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./Inline.enums-DlaUPeKw.js";import"./FloatingContext-Bsi7uTe6.js";import"./ElementLabel-CTPKCfMW.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./menuElements-Cq542wPo.js";import"./tslib.es6-BLYux4pC.js";import"./index-uIya-cWM.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-BJCD1Rvj.js";import"./index-DfX17r-U.js";import"./Skeleton-Bs9JsnhX.js";import"./index-fzZP4z-t.js";import"./Tooltip-D2te_2P5.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-BlYXqBWM.js";import"./Pill-z8JPj4-3.js";import"./PillRemoveButton-C9oge2rz.js";import"./Cluster-CO02VLRh.js";const _e={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=c.bind({});g.args={...c.args,onRowClick:({row:r,table:t})=>R("row action")({row:r,table:t}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:t})=>e=>R("rowsAction button")({row:r,table:t,event:e})}]};const j=c.bind({});j.args={...c.args};const f=c.bind({});f.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};f.parameters={screenshot:{skip:!1}};const m=r=>{const[t,e]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};m.args=g.args;const O=({row:r,table:t})=>{var w,d;const{flatRows:e=[]}=((w=t.getSortedRowModel)==null?void 0:w.call(t))??{},[a,n]=s.useState((d=e.findIndex)==null?void 0:d.call(e,i=>i.id===r.id));return s.useEffect(()=>{var i;n((i=e==null?void 0:e.findIndex)==null?void 0:i.call(e,u=>u.id===r.id))},[e,r.id]),s.useEffect(()=>{const i=u=>{u.key==="ArrowUp"&&(n(p=>p-1<0?0:p-1),t.setActiveRowId(e[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(n(p=>p+1>=e.length?e.length-1:p+1),t.setActiveRowId(e[a<e.length-1?a+1:e.length-1].id))};return document.addEventListener("keyup",i),()=>{document.removeEventListener("keyup",i)}},[e,e.length,t,a]),{rows:e,rowIndex:a}},k=([r,t])=>typeof t=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(t).map(k)]}):o.jsxs("div",{children:[r,": ",t.toString()]},r),y=({row:r,table:t,onClose:e})=>{const{rows:a,rowIndex:n}=O({row:r,table:t});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[n].original.organization.name,onClose:e,children:o.jsx(C,{gap:"sm",children:Object.entries(a[n].original).map(k)})})},l=r=>{const[t,e]=s.useState(""),[a,n]=s.useState(null),w=s.useCallback(()=>{e(""),n(null)},[n,e]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,onRowClick:d=>{d.row.id===t?n(null):n(d)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};l.args=c.args;var v,I,b;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const ze=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{f as ActiveRow,m as ActiveRowManagedState,l as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,ze as __namedExportsOrder,_e as default};
//# sourceMappingURL=RowOnClick.stories-BKzOSZQR.js.map
