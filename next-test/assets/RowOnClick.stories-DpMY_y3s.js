import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{a as R}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as S}from"./index-D09P9AUD.js";import{D}from"./Datatable-CjaWXYzc.js";import{a as j,T as d}from"./argTypes-fktNeP-w.js";import"./index-LR-EjM-6.js";import{S as C}from"./index-1T5Tqafd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useOuterCallback-CJ5emATz.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-B4kzUT7Q.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./mergeRefs-D2M2BR1V.js";import"./index-DAjbAeX4.js";import"./index-BLQl-HhB.js";import"./DSProvider-oeie4wyM.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-UZVzQLwe.js";import"./CloseButton-DsGT12sN.js";import"./IconButton-BIRkG6iG.js";import"./components-Dt-mykMV.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-DbwGX_n3.js";import"./useLogger-DJ74rrw8.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./Inline.enums-Cb7IYB12.js";import"./prop-DM27i_5J.js";import"./FloatingContext-Iczo9egI.js";import"./ElementLabel-CIy3SKjT.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./PaginationToolbar-BFKv9stq.js";import"./SelectionToolbar-DQTHdOf8.js";import"./index-fVh6sz_B.js";import"./Button-CSEXYzvx.js";import"./useSafeTranslation-DfC4LVWh.js";import"./en-US-DTEh3xIi.js";import"./pluck-B7TtmBCE.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-DHnwFTCK.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-Ci5i8ZTJ.js";import"./index-BNloZ91k.js";import"./Tooltip-BnELo82z.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-2RA1rzht.js";import"./Pill-Bn4tqEYP.js";import"./PillRemoveButton-DXAxIpoY.js";import"./Cluster-Czc8yUGw.js";const Be={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}},argTypes:j},g=d.bind({});g.args={...d.args,onRowClick:({row:r,table:t})=>R("row action")({row:r,table:t}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:t})=>e=>R("rowsAction button")({row:r,table:t,event:e})}]};const O=d.bind({});O.args={...d.args};const k=d.bind({});k.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};k.parameters={screenshot:{skip:!1}};const c=r=>{const[t,e]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};c.args=g.args;const y=({row:r,table:t})=>{var w,m;const{flatRows:e=[]}=((w=t.getSortedRowModel)==null?void 0:w.call(t))??{},[a,i]=s.useState((m=e.findIndex)==null?void 0:m.call(e,n=>n.id===r.id));return s.useEffect(()=>{var n;i((n=e==null?void 0:e.findIndex)==null?void 0:n.call(e,u=>u.id===r.id))},[e,r.id]),s.useEffect(()=>{const n=u=>{u.key==="ArrowUp"&&(i(l=>l-1<0?0:l-1),t.setActiveRowId(e[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(i(l=>l+1>=e.length?e.length-1:l+1),t.setActiveRowId(e[a<e.length-1?a+1:e.length-1].id))};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}},[e,e.length,t,a]),{rows:e,rowIndex:a}},x=([r,t])=>typeof t=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(t).map(x)]}):o.jsxs("div",{children:[r,": ",t.toString()]},r),E=({row:r,table:t,onClose:e})=>{const{rows:a,rowIndex:i}=y({row:r,table:t});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[i].original.organization.name,onClose:e,children:o.jsx(C,{gap:"sm",children:Object.entries(a[i].original).map(x)})})},p=r=>{const[t,e]=s.useState(""),[a,i]=s.useState(null),w=s.useCallback(()=>{e(""),i(null)},[i,e]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:t},onActiveRowIdChange:e,onRowClick:m=>{m.row.id===t?i(null):i(m)},...r}),a!==null&&o.jsx(E,{row:a.row,table:a.table,onClose:w})]})};p.args=d.args;c.__docgenInfo={description:"",methods:[],displayName:"ActiveRowManagedState"};p.__docgenInfo={description:"",methods:[],displayName:"OpenDrawerOnRowClick"};var v,I,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(f=p.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Ue=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{k as ActiveRow,c as ActiveRowManagedState,p as OpenDrawerOnRowClick,O as RowOnClickDisabled,g as RowOnClickEnabled,Ue as __namedExportsOrder,Be as default};
//# sourceMappingURL=RowOnClick.stories-DpMY_y3s.js.map
