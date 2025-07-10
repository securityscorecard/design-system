import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as e}from"./index-ClcD9ViR.js";import{D as p}from"./Datatable-kA5bJlUu.js";import{a as S,T as i,c as u}from"./argTypes-CqYprXkk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DUeFF7SW.js";import"./index-D5D9nAa6.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-C8HMneKs.js";import"./DSProvider-_CMlen06.js";import"./index-Dw8zQ6WV.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-CjRByw3L.js";import"./SelectionToolbar-CBcglnkU.js";import"./index-BV_a_HQq.js";import"./Icon-D5TBsI6x.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-Dg7OEBei.js";import"./index-CT2OIHT-.js";import"./Padbox-CTuFGL01.js";import"./index-BXECzo_T.js";import"./prop-gA1VFyoz.js";import"./Inline-ErbB6jzf.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-D835thia.js";import"./index-DFY1Tdgr.js";import"./Button-ZXXHu2Zy.js";import"./components-C4-LvCWm.js";import"./index-VHVnCIxC.js";import"./Spinner-PSPqNyRK.js";import"./useSafeTranslation-C25o8IhV.js";import"./en-US-CvthOZgl.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-DxUJpeDG.js";import"./useContainerQuery-DIj571oY.js";import"./Skeleton-CP354bxR.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-KsOPkqiG.js";import"./index-BI_Tj3uZ.js";import"./Tooltip-BXm6ehC_.js";import"./FloatingContext-f-xOTKfR.js";import"./index-B79z5W8X.js";import"./ControlledDropdown-DploOwaN.js";import"./index-slDD0MBU.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-DBEKEo6Z.js";import"./useOuterCallback--QVL0YIA.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-D7wPq1N3.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-Dp2JVDVv.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-sEzJ6zX1.js";import"./Pill-BkZJUAD3.js";import"./PillRemoveButton-DGqihXni.js";const Wi={title:"components/DatatableV2/ColumnResizing",component:p,parameters:{screenshot:{skip:!0}},argTypes:S},b=i.bind({});b.args=i.args;const f=i.bind({});f.args={...i.args,enableColumnResizing:!1};const h=i.bind({});h.args={...i.args,columns:[...u,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=i.bind({});l.args={...i.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const R=i.bind({});R.args={...i.args,columns:[{accessorKey:"country",header:"Country",size:400},...u]};const c=i.bind({});c.args={...i.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return n.jsxs(n.Fragment,{children:[n.jsx(p,{state:{columnSizing:r},onColumnSizingChange:z,...g}),n.jsxs("div",{children:[n.jsx("strong",{children:"Debug:"}),n.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=i.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-BZYHJado.js.map
