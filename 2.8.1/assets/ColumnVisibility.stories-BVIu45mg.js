import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{D as e}from"./Datatable-RCCEXGVu.js";import{T as i,c as b}from"./Template-8geySY9E.js";import"./useLogger-DkXBJUOu.js";import"./index-DxUWnzkt.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./IconButton-DVi0OZlk.js";import"./index-C7IrpltL.js";import"./components-CYX7eQ8t.js";import"./index-CmRxaJ3P.js";import"./Icon-Nxma5B5F.js";import"./index-DBr7mztH.js";import"./index-BRV0Se7Z.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./prop-DvyrXmKl.js";import"./useSafeTranslation-DgH_B3Fu.js";import"./en-US-CaArnYpN.js";import"./menuElements-pfQcNcyi.js";import"./tslib.es6-BLYux4pC.js";import"./index-DKUwlGz1.js";import"./index-B1HIS_mG.js";import"./Padbox-BddxODtE.js";import"./index-C1DSbQpy.js";import"./Inline.enums-CG-V8ygw.js";import"./Cluster-Bh3LKsFx.js";import"./index-x37bp9TC.js";import"./isFunction-CFc181nM.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Skeleton-B0UUdlXt.js";import"./Button-B0SYPtI0.js";import"./index-Cv-mKTwf.js";import"./index-BWOhgLBn.js";import"./Tooltip-DVqg2LQI.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-DIPrMsAG.js";import"./CloseButton-BVE5nk-T.js";import"./index-BkSsiqLF.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-DOwFg6Hq.js";import"./Pill-j452u0so.js";import"./PillRemoveButton-DmjFGYD8.js";const di={title:"components/DatatableV2/ColumnVisibility",component:e,parameters:{screenshot:{skip:!0}}},c=i.bind({});c.args=i.args;const d=i.bind({});d.args={...i.args,enableHiding:!1};const y=i.bind({});y.args={...i.args,columns:[...b,{accessorKey:"country",header:"Country",enableHiding:!1}]};const l=i.bind({});l.args={...i.args,initialState:{columnVisibility:{score:!1}}};l.parameters={screenshot:{skip:!1}};const o=a=>{const[r,p]=u.useState({score:!1});return t.jsxs(t.Fragment,{children:[t.jsx(e,{state:{columnVisibility:r},onColumnVisibilityChange:p,...a}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=i.args;var s,m,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    score: false
  });
  return <>
      <Datatable state={{
      columnVisibility
    }} onColumnVisibilityChange={setColumnVisibility} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnVisibility, null, 2)}</pre>
      </div>
    </>;
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const yi=["ColumnVisibilityEnabled","DisabledColumnVisibility","DisabledColumnVisibilityForColumn","InitialColumnVisibility","ColumnVisibilityManagedState"];export{c as ColumnVisibilityEnabled,o as ColumnVisibilityManagedState,d as DisabledColumnVisibility,y as DisabledColumnVisibilityForColumn,l as InitialColumnVisibility,yi as __namedExportsOrder,di as default};
//# sourceMappingURL=ColumnVisibility.stories-BVIu45mg.js.map
