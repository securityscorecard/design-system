import{j as i}from"./jsx-runtime-CfatFE5O.js";import{r as e}from"./index-ClcD9ViR.js";import{D as u}from"./Datatable-D8zBFDck.js";import{a as S,T as n,c as p}from"./argTypes-ClIEYlAI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DhLFZSdg.js";import"./index-CwwveOyd.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-CPYqWFL_.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-BHujzsX0.js";import"./SelectionToolbar-C5BQlbZT.js";import"./index-CUzBbf6F.js";import"./Icon-Bh7zeEtc.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-D88lkBP-.js";import"./index-C3NFEOoi.js";import"./Padbox-DyJBw-9L.js";import"./index-Bqw6gtNo.js";import"./prop-gA1VFyoz.js";import"./Inline-DoR-Gmpw.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C2D5KA8h.js";import"./index-CEsunubm.js";import"./Button-DDUAhNoT.js";import"./components-Crj7JrGD.js";import"./index-CqkKBNL-.js";import"./Spinner-ByPeh1d6.js";import"./useSafeTranslation-zmCT_kAg.js";import"./en-US-DVFKJdgt.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-BV8xP9mH.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-d2sY6OpO.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-aD75l0GC.js";import"./index-D7bO9QwG.js";import"./Tooltip-UvxVuC-4.js";import"./FloatingContext-f-xOTKfR.js";import"./index-D_kmftDK.js";import"./CloseButton-B8FZn_gb.js";import"./index-54z-fB9T.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BYmvVVhU.js";import"./Pill-2l4_QlLH.js";import"./PillRemoveButton-65-kpGGM.js";const jn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}},argTypes:S},b=n.bind({});b.args=n.args;const f=n.bind({});f.args={...n.args,enableColumnResizing:!1};const h=n.bind({});h.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const R=n.bind({});R.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:r},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const En=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{b as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,f as DisabledColumnResizing,h as DisabledColumnResizingForColumn,c as InitialColumnResizing,R as SpecificSizingForColumn,En as __namedExportsOrder,jn as default};
//# sourceMappingURL=ColumnResizing.stories-CNMp7K8X.js.map
