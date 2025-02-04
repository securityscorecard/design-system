import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{a as R}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as S}from"./index-bBjXCbLx.js";import{D}from"./Datatable-x2ZfM_pe.js";import{a as j,T as d}from"./argTypes-CMcsPgbk.js";import"./index-D-VPAycD.js";import{S as C}from"./index-CJqnHCRB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useOuterCallback-CJ5emATz.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-B4kzUT7Q.js";import"./index-C2fNon3Z.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./mergeRefs-D2M2BR1V.js";import"./index-DAjbAeX4.js";import"./index-BLQl-HhB.js";import"./DSProvider-oeie4wyM.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-oSnT1g_s.js";import"./CloseButton-BnxGXhE2.js";import"./IconButton-D-PcuZjI.js";import"./components-C9ZynCTM.js";import"./index-t408_oKr.js";import"./Icon-CwDBfXxP.js";import"./index-DbwGX_n3.js";import"./useLogger-BIFF4Ira.js";import"./index-DKZQhKLO.js";import"./Spinner-C4Y4qwgQ.js";import"./Inline.enums-L64S19IZ.js";import"./FloatingContext-Iczo9egI.js";import"./ElementLabel-CIy3SKjT.js";import"./index-D4bv78R3.js";import"./Padbox-QeDNAg-Y.js";import"./Inline-CJoeeTWo.js";import"./prop-DxwKVRPv.js";import"./PaginationToolbar-BumGbSft.js";import"./SelectionToolbar-BIj_XAYC.js";import"./index-fVh6sz_B.js";import"./Button-F6ZYDBEp.js";import"./useSafeTranslation-CTytszpq.js";import"./en-US-DTEh3xIi.js";import"./pluck-CostYriq.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-CkPRSvbb.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-YvM1PAod.js";import"./index-BlmJOztB.js";import"./Tooltip-CNTka1Rj.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-CxXlF41o.js";import"./Pill-BDetg8sM.js";import"./PillRemoveButton-CrYU6s_g.js";import"./Cluster-EcHytK4z.js";const Ut={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}},argTypes:j},g=d.bind({});g.args={...d.args,onRowClick:({row:r,table:e})=>R("row action")({row:r,table:e}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:e})=>t=>R("rowsAction button")({row:r,table:e,event:t})}]};const O=d.bind({});O.args={...d.args};const k=d.bind({});k.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};k.parameters={screenshot:{skip:!1}};const c=r=>{const[e,t]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};c.args=g.args;const y=({row:r,table:e})=>{var w,m;const{flatRows:t=[]}=((w=e.getSortedRowModel)==null?void 0:w.call(e))??{},[a,i]=s.useState((m=t.findIndex)==null?void 0:m.call(t,n=>n.id===r.id));return s.useEffect(()=>{var n;i((n=t==null?void 0:t.findIndex)==null?void 0:n.call(t,u=>u.id===r.id))},[t,r.id]),s.useEffect(()=>{const n=u=>{u.key==="ArrowUp"&&(i(l=>l-1<0?0:l-1),e.setActiveRowId(t[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(i(l=>l+1>=t.length?t.length-1:l+1),e.setActiveRowId(t[a<t.length-1?a+1:t.length-1].id))};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}},[t,t.length,e,a]),{rows:t,rowIndex:a}},x=([r,e])=>typeof e=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(e).map(x)]}):o.jsxs("div",{children:[r,": ",e.toString()]},r),E=({row:r,table:e,onClose:t})=>{const{rows:a,rowIndex:i}=y({row:r,table:e});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[i].original.organization.name,onClose:t,children:o.jsx(C,{gap:"sm",children:Object.entries(a[i].original).map(x)})})},p=r=>{const[e,t]=s.useState(""),[a,i]=s.useState(null),w=s.useCallback(()=>{t(""),i(null)},[i,t]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,onRowClick:m=>{m.row.id===e?i(null):i(m)},...r}),a!==null&&o.jsx(E,{row:a.row,table:a.table,onClose:w})]})};p.args=d.args;c.__docgenInfo={description:"",methods:[],displayName:"ActiveRowManagedState"};p.__docgenInfo={description:"",methods:[],displayName:"OpenDrawerOnRowClick"};var v,I,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(f=p.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const qt=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{k as ActiveRow,c as ActiveRowManagedState,p as OpenDrawerOnRowClick,O as RowOnClickDisabled,g as RowOnClickEnabled,qt as __namedExportsOrder,Ut as default};
//# sourceMappingURL=RowOnClick.stories-Bj81CSd-.js.map
