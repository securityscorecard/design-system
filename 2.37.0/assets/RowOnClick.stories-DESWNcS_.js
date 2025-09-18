import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{a as R}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as S}from"./index-DaD1zO_B.js";import{D}from"./Datatable-DhgRg_r0.js";import{a as j,T as c}from"./argTypes-B-BLNFwO.js";import"./index-BFvOT19C.js";import{S as C}from"./index-Cg7zxyij.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useOuterCallback-BFSBiNPT.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-D-Ed_h9X.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./mergeRefs-C43w_hK8.js";import"./index-CRdrLk6A.js";import"./index-DRm3KUNF.js";import"./DSProvider-DJmllnwz.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-B0iju06q.js";import"./CloseButton-C6E8xhqw.js";import"./IconButton-BKKBo0WP.js";import"./components-DJ3iJqD4.js";import"./index-rImj20zY.js";import"./Icon-BBciP95r.js";import"./index-DbwGX_n3.js";import"./useLogger-DB992SI6.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./Inline.enums-KPT5jvjq.js";import"./FloatingContext-f-xOTKfR.js";import"./ElementLabel-Kzoagp5M.js";import"./index-CVaQsks3.js";import"./Padbox-GRySZhbo.js";import"./Inline-D-ay0DV_.js";import"./PaginationToolbar-K_XxllPG.js";import"./SelectionToolbar-D7l5adqM.js";import"./index-NGm66y6o.js";import"./Button-BDUOFFiA.js";import"./useSafeTranslation-Bti168uf.js";import"./en-US-DPMKfmiD.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-BTLiYSm3.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DQ9vNjtz.js";import"./index-30vURgj0.js";import"./Tooltip-TBvp3FNj.js";import"./index-BCFnZhbo.js";import"./ControlledDropdown-Dc6-KNdn.js";import"./usePopper-m9aO9_-k.js";import"./noop-CGDyLuY9.js";import"./Dropdown-pXJ_0ztW.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BXcD0DgJ.js";import"./Pill-DoNpSpEy.js";import"./PillRemoveButton-DG4tJgRJ.js";import"./Cluster-MjzvoWTP.js";const Yt={title:"components/DatatableV2/RowOnClick",component:D,parameters:{screenshot:{skip:!0}},argTypes:j},g=c.bind({});g.args={...c.args,onRowClick:({row:r,table:e,event:t})=>R("row action")({row:r,table:e,event:t}),enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:e})=>t=>R("rowsAction button")({row:r,table:e,event:t})}]};const O=c.bind({});O.args={...c.args};const f=c.bind({});f.args={...g.args,initialState:{...g.args.initialState,activeRowId:"e23968c3-3f19-44b2-aee9-c4a1d7c326ee"}};f.parameters={screenshot:{skip:!1}};const d=r=>{const[e,t]=s.useState("e23968c3-3f19-44b2-aee9-c4a1d7c326ee");return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,...r}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};d.args=g.args;const y=({row:r,table:e})=>{var w,p;const{flatRows:t=[]}=((w=e.getSortedRowModel)==null?void 0:w.call(e))??{},[a,i]=s.useState((p=t.findIndex)==null?void 0:p.call(t,n=>n.id===r.id));return s.useEffect(()=>{var n;i((n=t==null?void 0:t.findIndex)==null?void 0:n.call(t,u=>u.id===r.id))},[t,r.id]),s.useEffect(()=>{const n=u=>{u.key==="ArrowUp"&&(i(m=>m-1<0?0:m-1),e.setActiveRowId(t[a-1>=0?a-1:0].id)),u.key==="ArrowDown"&&(i(m=>m+1>=t.length?t.length-1:m+1),e.setActiveRowId(t[a<t.length-1?a+1:t.length-1].id))};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}},[t,t.length,e,a]),{rows:t,rowIndex:a}},k=([r,e])=>typeof e=="object"?o.jsxs(C,{gap:"sm",children:[o.jsx("div",{children:r}),Object.entries(e).map(k)]}):o.jsxs("div",{children:[r,": ",e.toString()]},r),E=({row:r,table:e,onClose:t})=>{const{rows:a,rowIndex:i}=y({row:r,table:e});return o.jsx(S,{hasBackdrop:!1,size:"md",title:a[i].original.organization.name,onClose:t,children:o.jsx(C,{gap:"sm",children:Object.entries(a[i].original).map(k)})})},l=r=>{const[e,t]=s.useState(""),[a,i]=s.useState(null),w=s.useCallback(()=>{t(""),i(null)},[i,t]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{state:{activeRowId:e},onActiveRowIdChange:t,onRowClick:p=>{p.row.id===e?i(null):i(p)},...r}),a!==null&&o.jsx(E,{row:a.row,table:a.table,onClose:w})]})};l.args=c.args;var v,I,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Zt=["RowOnClickEnabled","RowOnClickDisabled","ActiveRow","ActiveRowManagedState","OpenDrawerOnRowClick"];export{f as ActiveRow,d as ActiveRowManagedState,l as OpenDrawerOnRowClick,O as RowOnClickDisabled,g as RowOnClickEnabled,Zt as __namedExportsOrder,Yt as default};
//# sourceMappingURL=RowOnClick.stories-DESWNcS_.js.map
