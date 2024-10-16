import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{a as R}from"./chunk-454WOBUV-CM0pFb8Z.js";import{D as S}from"./index-B3qeh_X4.js";import{D}from"./Datatable-D96qhicj.js";import{T as d}from"./Template-B3FSJjDI.js";import"./index-C1kpn3a9.js";import{S as C}from"./index-FmXXYKzo.js";import"./v4-CQkTLCs1.js";import"./useOuterCallback-DTPxGhlC.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-C0LbFgwF.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./isObject-BZZHHNGj.js";import"./slice-CaMqkvGm.js";import"./mergeRefs-Btf8uGkc.js";import"./index-BkLmc-fh.js";import"./index-BsP7FXMl.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-lS962czg.js";import"./CloseButton-DSRlqFcT.js";import"./IconButton-CKUQpq1U.js";import"./components-CjIxgO6S.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-BRV0Se7Z.js";import"./useLogger-BdR6T79l.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./prop-CgNUfcFy.js";import"./Inline.enums-CsgpNQwN.js";import"./FloatingContext-C7MQzhpq.js";import"./ElementLabel-Bua-ZRQK.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./useSafeTranslation-BFYCnF6T.js";import"./en-US-DPXU96ho.js";import"./menuElements-Ht_uLAmV.js";import"./index-CUGQ8N4L.js";import"./pluck-5zg4Xx5s.js";import"./useLocalStorageState-D2NPfI6N.js";import"./useContainerQuery-DfiLLmFV.js";import"./Skeleton-Czx0AtBC.js";import"./Button-jQCIxIJA.js";import"./index-zphH5PEn.js";import"./index-C2vIIBl6.js";import"./Tooltip-DgJ8Q0u2.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-_JuRKZiv.js";import"./Pill-DDsfaC4J.js";import"./PillRemoveButton-CcoG8WEs.js";import"./Cluster-BnO1HbAj.js";const Te={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=d.bind({});g.args={...d.args,onRowClick:({row:r,table:t})=>R("row action")({row:r,table:t}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:t})=>e=>R("rowsAction button")({row:r,table:t,event:e})}]};const j=d.bind({});j.args={...d.args};const k=d.bind({});k.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};k.parameters={screenshot:{skip:!1}};const c=r=>{const[t,e]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};c.args=g.args;const O=({row:r,table:t})=>{var w,m;const{flatRows:e=[]}=((w=t.getSortedRowModel)==null?void 0:w.call(t))??{},[a,i]=s.useState((m=e.findIndex)==null?void 0:m.call(e,n=>n.id===r.id));return s.useEffect(()=>{var n;i((n=e==null?void 0:e.findIndex)==null?void 0:n.call(e,u=>u.id===r.id))},[e,r.id]),s.useEffect(()=>{const n=u=>{u.key==="ArrowUp"&&(i(l=>l-1<0?0:l-1),t.setActiveRowId(e[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(i(l=>l+1>=e.length?e.length-1:l+1),t.setActiveRowId(e[a<e.length-1?a+1:e.length-1].id))};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}},[e,e.length,t,a]),{rows:e,rowIndex:a}},x=([r,t])=>typeof t=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(t).map(x)]}):o.jsxs("div",{children:[r,": ",t.toString()]},r),y=({row:r,table:t,onClose:e})=>{const{rows:a,rowIndex:i}=O({row:r,table:t});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[i].original.organization.name,onClose:e,children:o.jsx(C,{gap:"sm",children:Object.entries(a[i].original).map(x)})})},p=r=>{const[t,e]=s.useState(""),[a,i]=s.useState(null),w=s.useCallback(()=>{e(""),i(null)},[i,e]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,onRowClick:m=>{m.row.id===t?i(null):i(m)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};p.args=d.args;c.__docgenInfo={description:"",methods:[],displayName:"ActiveRowManagedState"};p.__docgenInfo={description:"",methods:[],displayName:"OpenDrawerOnRowClick"};var v,I,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(f=p.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Ve=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{k as ActiveRow,c as ActiveRowManagedState,p as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,Ve as __namedExportsOrder,Te as default};
//# sourceMappingURL=RowOnClick.stories-Cf65R5mW.js.map
