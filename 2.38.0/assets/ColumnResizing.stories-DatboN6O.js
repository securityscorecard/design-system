import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as e}from"./index-ClcD9ViR.js";import{D as p}from"./Datatable-zgO1uCr9.js";import{a as S,T as i,c as u}from"./argTypes-BSIyZDlS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-Duem4C0W.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-DyLdaVGt.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-BblPGU9S.js";import"./SelectionToolbar-yNZs8ZlA.js";import"./index-BeCDKFyL.js";import"./Icon-BUtjSb1P.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-DSixxlEM.js";import"./index-Bi90Y8Ou.js";import"./Padbox-D0nj4Q3C.js";import"./index-BeSa3Tgc.js";import"./prop-gA1VFyoz.js";import"./Inline-CzyJe68E.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./index-CEsunubm.js";import"./Button-CdECnUEw.js";import"./components-tj5nOmNW.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-Bti168uf.js";import"./en-US-DPMKfmiD.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-P8KcAbIR.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-CcSw-eOb.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-VvEy1U1f.js";import"./Tooltip-I8gdfiul.js";import"./FloatingContext-f-xOTKfR.js";import"./ElementLabel-Kzoagp5M.js";import"./index-Dw5h2a-g.js";import"./ControlledDropdown-CVmBdv_n.js";import"./index-DuBGvjtd.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-BFSBiNPT.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-iWuEGS0V.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-GVec7ORO.js";import"./Pill-hjtK783m.js";import"./PillRemoveButton-DQ8sRJWK.js";const _i={title:"components/DatatableV2/ColumnResizing",component:p,parameters:{screenshot:{skip:!0}},argTypes:S},b=i.bind({});b.args=i.args;const f=i.bind({});f.args={...i.args,enableColumnResizing:!1};const h=i.bind({});h.args={...i.args,columns:[...u,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=i.bind({});l.args={...i.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const R=i.bind({});R.args={...i.args,columns:[{accessorKey:"country",header:"Country",size:400},...u]};const c=i.bind({});c.args={...i.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return n.jsxs(n.Fragment,{children:[n.jsx(p,{state:{columnSizing:r},onColumnSizingChange:z,...g}),n.jsxs("div",{children:[n.jsx("strong",{children:"Debug:"}),n.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=i.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const qi=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{b as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,f as DisabledColumnResizing,h as DisabledColumnResizingForColumn,c as InitialColumnResizing,R as SpecificSizingForColumn,qi as __namedExportsOrder,_i as default};
//# sourceMappingURL=ColumnResizing.stories-DatboN6O.js.map
