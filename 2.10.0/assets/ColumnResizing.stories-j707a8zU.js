import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{D as u}from"./Datatable-BFe3_jWk.js";import{T as n,c as p}from"./Template-Br9hDzIS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-DBrb0845.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-DqReE266.js";import"./index-CVyJwDg7.js";import"./components-D4rQYKk1.js";import"./index-KsdgvOjZ.js";import"./Icon-CYAM9BRr.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./index-sYlzTV1h.js";import"./Spinner-CaS15r7b.js";import"./prop-BraK_cHP.js";import"./useSafeTranslation-CKZ54jxn.js";import"./en-US-wky7Us-i.js";import"./menuElements-B0f2j1Iu.js";import"./index-Dii5kbWS.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./index-D5s2qWpv.js";import"./Inline.enums-Dg90oR_c.js";import"./Cluster-hENBaGjg.js";import"./index-iel8gM5l.js";import"./isFunction-DHFK1UxZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-BBrWYpwZ.js";import"./Skeleton-Co4xxNhc.js";import"./Button-DyPMm7cZ.js";import"./index-C9awWo0S.js";import"./index-ns3nuyBm.js";import"./Tooltip-CiNVQnwO.js";import"./FloatingContext-Cr2ZSxO5.js";import"./index-Dosn2Gf1.js";import"./CloseButton-a1TgeEoF.js";import"./index-D97QikPo.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-B3IS_vUE.js";import"./Pill-D-HanoWC.js";import"./PillRemoveButton-B0oiM2Sz.js";const Fn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:r},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const wn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,wn as __namedExportsOrder,Fn as default};
//# sourceMappingURL=ColumnResizing.stories-j707a8zU.js.map
