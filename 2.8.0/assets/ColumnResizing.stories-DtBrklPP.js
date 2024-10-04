import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-ATDnWHNO.js";import{T as n,c as l}from"./Template-DrOofwRc.js";import"./useLogger-DkXBJUOu.js";import"./index-DxUWnzkt.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./IconButton-BN0A83L5.js";import"./index-C7IrpltL.js";import"./components-CYX7eQ8t.js";import"./index-CmRxaJ3P.js";import"./Icon-Nxma5B5F.js";import"./index-DBr7mztH.js";import"./index-BRV0Se7Z.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./prop-DvyrXmKl.js";import"./useSafeTranslation-DgH_B3Fu.js";import"./en-US-CaArnYpN.js";import"./menuElements-DoK581II.js";import"./tslib.es6-BLYux4pC.js";import"./index-BKmXk_rQ.js";import"./index-DHcn_niD.js";import"./Padbox-BddxODtE.js";import"./index-Bdemn2ub.js";import"./Inline.enums-ylSCK-eY.js";import"./Cluster-Ca0XQ4y2.js";import"./index-CGsDvru0.js";import"./isFunction-CFc181nM.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Skeleton-B0UUdlXt.js";import"./Button-D36O3cyQ.js";import"./index-Dum28YZO.js";import"./index-B9dTXKMz.js";import"./Tooltip-BUCNYsMe.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-DtKicFZi.js";import"./CloseButton-E870eJyc.js";import"./index-BkSsiqLF.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-CFj4K2pu.js";import"./Pill-DyYZ_fkc.js";import"./PillRemoveButton-DcLVDju2.js";const hn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...l,{accessorKey:"country",header:"Country",enableResizing:!1}]};const p=n.bind({});p.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};p.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...l]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({
    'organization.name': 300
  });
  const timeout = useRef<number | null>(null);

  // We recommend to debounce the column resizing due to high performance impact
  const debouncedSetColumnSizing: OnChangeFn<ColumnSizingState> = params => {
    if (timeout.current) {
      window.cancelAnimationFrame(timeout.current);
    }
    timeout.current = window.requestAnimationFrame(() => {
      setColumnSizing(params);
    });
  };
  return <>
      <Datatable state={{
      columnSizing
    }} onColumnSizingChange={debouncedSetColumnSizing} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnSizing, null, 2)}</pre>
      </div>
    </>;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Rn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,p as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,Rn as __namedExportsOrder,hn as default};
//# sourceMappingURL=ColumnResizing.stories-DtBrklPP.js.map
