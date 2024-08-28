import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{a as R}from"./chunk-454WOBUV-DWuJqIWT.js";import{D as S}from"./index-CetZ-hCC.js";import{D}from"./Datatable-CRiRCi20.js";import{T as p}from"./Template-CpnJcoj5.js";import"./index-CoMEwqFC.js";import{S as C}from"./index-DZoBl2Wq.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./useOuterCallback-CyPC4-G8.js";import"./index-DIVhMF2i.js";import"./index-DzoB_gWM.js";import"./index-C7IrpltL.js";import"./index-BNZfQmvL.js";import"./mergeRefs-B_qfXDGV.js";import"./index-beAa1auE.js";import"./index-t-vajJ9r.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-BtwkxZ3S.js";import"./CloseButton-B7KX2rrC.js";import"./IconButton-C0z_ySy5.js";import"./components-imVrW6nL.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./useLogger-BNYGJgyi.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./prop-BgpcU4fO.js";import"./Inline-DPdVYO7t.js";import"./flex.types-BrkCVx66.js";import"./FloatingContext-CyxsIqHp.js";import"./ElementLabel-Xh_ozbKx.js";import"./menuElements-ByXMhNOt.js";import"./tslib.es6-BLYux4pC.js";import"./index-C_SwQgDv.js";import"./Padbox-DIe3-S_j.js";import"./pluck-XHiJ2W8k.js";import"./useLocalStorageState-Bvq8NDNj.js";import"./useContainerQuery-DfiLLmFV.js";import"./Button-BMWvW0nZ.js";import"./index-mAAZmqGJ.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-BSMwopXk.js";import"./index-Drrfuvzh.js";import"./Tooltip-BT_E9yk_.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-DHgpcg3j.js";import"./PillRemoveButton-CsvadIXl.js";import"./Pill-CA-mw_E3.js";import"./PillLabel-DZn6lXVM.js";import"./gt-2XdA2AlM.js";import"./Cluster-DaqHgnAc.js";import"./index-BUX0wYnk.js";const Je={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}}},g=p.bind({});g.args={...p.args,onRowClick:({row:r,table:t})=>R("row action")({row:r,table:t}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:t})=>e=>R("rowsAction button")({row:r,table:t,event:e})}]};const j=p.bind({});j.args={...p.args};const k=p.bind({});k.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};k.parameters={screenshot:{skip:!1}};const c=r=>{const[t,e]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};c.args=g.args;const O=({row:r,table:t})=>{var w,m;const{flatRows:e=[]}=((w=t.getSortedRowModel)==null?void 0:w.call(t))??{},[a,n]=s.useState((m=e.findIndex)==null?void 0:m.call(e,i=>i.id===r.id));return s.useEffect(()=>{var i;n((i=e==null?void 0:e.findIndex)==null?void 0:i.call(e,u=>u.id===r.id))},[e,r.id]),s.useEffect(()=>{const i=u=>{u.key==="ArrowUp"&&(n(l=>l-1<0?0:l-1),t.setActiveRowId(e[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(n(l=>l+1>=e.length?e.length-1:l+1),t.setActiveRowId(e[a<e.length-1?a+1:e.length-1].id))};return document.addEventListener("keyup",i),()=>{document.removeEventListener("keyup",i)}},[e,e.length,t,a]),{rows:e,rowIndex:a}},x=([r,t])=>typeof t=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(t).map(x)]}):o.jsxs("div",{children:[r,": ",t.toString()]},r),y=({row:r,table:t,onClose:e})=>{const{rows:a,rowIndex:n}=O({row:r,table:t});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[n].original.organization.name,onClose:e,children:o.jsx(C,{gap:"sm",children:Object.entries(a[n].original).map(x)})})},d=r=>{const[t,e]=s.useState(""),[a,n]=s.useState(null),w=s.useCallback(()=>{e(""),n(null)},[n,e]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,onRowClick:m=>{m.row.id===t?n(null):n(m)},...r}),a!==null&&o.jsx(y,{row:a.row,table:a.table,onClose:w})]})};d.args=p.args;c.__docgenInfo={description:"",methods:[],displayName:"ActiveRowManagedState"};d.__docgenInfo={description:"",methods:[],displayName:"OpenDrawerOnRowClick"};var v,I,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Ke=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{k as ActiveRow,c as ActiveRowManagedState,d as OpenDrawerOnRowClick,j as RowOnClickDisabled,g as RowOnClickEnabled,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=RowOnClick.stories-BsSGbag5.js.map
