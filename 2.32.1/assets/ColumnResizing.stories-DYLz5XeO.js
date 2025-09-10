import{j as n}from"./jsx-runtime-BbjHj44Y.js";import{r as e}from"./index-C6mWTJJr.js";import{D as p}from"./Datatable-CE78aihF.js";import{a as S,T as i,c as u}from"./argTypes-CW70O5S9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-D6HktrB1.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-DK0Ydi9M.js";import"./SelectionToolbar-Cpbf0zfO.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-DRm3KUNF.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./index-CABfzxjM.js";import"./index-CRnaouss.js";import"./Padbox-CMSZZGn9.js";import"./index-C8Uj0hRh.js";import"./prop-gA1VFyoz.js";import"./Inline-WQsFVyS5.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./index-p3Ne9M6I.js";import"./Button-I8Y2XdcJ.js";import"./components-C9sJjMsI.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./useSafeTranslation-RSFuNJC9.js";import"./en-US-D2DA8Sg-.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-Dt6UXVFt.js";import"./useContainerQuery-J3pQj2z2.js";import"./Skeleton-C3OdMv_p.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-CsW7DeuJ.js";import"./index-CZnLRAtc.js";import"./Tooltip-DJK58tJC.js";import"./FloatingContext-Bl8tl6Fh.js";import"./ElementLabel-B8jQdsnd.js";import"./index-CV-r94w-.js";import"./ControlledDropdown-BvnoebAE.js";import"./index-DYWQy94d.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-BmgVlhkC.js";import"./useOuterCallback-B34oUwCq.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-DrVS-_Bd.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-DCMymTJo.js";import"./modifiers.esm-D9hq2467.js";import"./index-xJp9Kd2E.js";import"./index-B0HbwT1s.js";import"./Pill-Dx7-VHbt.js";import"./PillRemoveButton-d8NE9DkX.js";const _i={title:"components/DatatableV2/ColumnResizing",component:p,parameters:{screenshot:{skip:!0}},argTypes:S},b=i.bind({});b.args=i.args;const f=i.bind({});f.args={...i.args,enableColumnResizing:!1};const h=i.bind({});h.args={...i.args,columns:[...u,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=i.bind({});l.args={...i.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const R=i.bind({});R.args={...i.args,columns:[{accessorKey:"country",header:"Country",size:400},...u]};const c=i.bind({});c.args={...i.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return n.jsxs(n.Fragment,{children:[n.jsx(p,{state:{columnSizing:r},onColumnSizingChange:z,...g}),n.jsxs("div",{children:[n.jsx("strong",{children:"Debug:"}),n.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=i.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-DYLz5XeO.js.map
