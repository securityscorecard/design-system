import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as e}from"./index-ClcD9ViR.js";import{D as p}from"./Datatable-B-lwFFP8.js";import{a as S,T as i,c as u}from"./argTypes-BaXCbz7R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DBZ2KDnn.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-CwWWnfgy.js";import"./SelectionToolbar-DXoQOkyw.js";import"./index-U7rWlclI.js";import"./Icon-Bik-9-TI.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-B1oE8qgv.js";import"./index-DV1EfWHB.js";import"./Padbox-DhupY5rO.js";import"./index-BJfwPkfN.js";import"./prop-gA1VFyoz.js";import"./Inline-BnvQG4P8.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./index-CEsunubm.js";import"./Button-DXrAv08R.js";import"./components-ByF3bco0.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-DXLRFKFi.js";import"./en-US-CvthOZgl.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-fYiYssr0.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DPdGIrHZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-CZqIN7mn.js";import"./Tooltip-BV3L2RxT.js";import"./FloatingContext-f-xOTKfR.js";import"./index-Fi7iNN6E.js";import"./ControlledDropdown-QQhVOnls.js";import"./index-BVsc1NiC.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-D92qb2E8.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-BWxbgbWw.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BEvLCbuv.js";import"./Pill-DF5XtEzd.js";import"./PillRemoveButton-BQqDExGM.js";const Wi={title:"components/DatatableV2/ColumnResizing",component:p,parameters:{screenshot:{skip:!0}},argTypes:S},b=i.bind({});b.args=i.args;const f=i.bind({});f.args={...i.args,enableColumnResizing:!1};const h=i.bind({});h.args={...i.args,columns:[...u,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=i.bind({});l.args={...i.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const R=i.bind({});R.args={...i.args,columns:[{accessorKey:"country",header:"Country",size:400},...u]};const c=i.bind({});c.args={...i.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return n.jsxs(n.Fragment,{children:[n.jsx(p,{state:{columnSizing:r},onColumnSizingChange:z,...g}),n.jsxs("div",{children:[n.jsx("strong",{children:"Debug:"}),n.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=i.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const _i=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{b as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,f as DisabledColumnResizing,h as DisabledColumnResizingForColumn,c as InitialColumnResizing,R as SpecificSizingForColumn,_i as __namedExportsOrder,Wi as default};
//# sourceMappingURL=ColumnResizing.stories-2tSYKORJ.js.map
