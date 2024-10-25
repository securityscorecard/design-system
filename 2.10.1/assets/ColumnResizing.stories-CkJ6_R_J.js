import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{D as u}from"./Datatable-BFq8C8YQ.js";import{T as n,c as p}from"./Template-CAqBU9tA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-CeNh0Atc.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-DByWM6Xn.js";import"./index-CVyJwDg7.js";import"./components-CbPQWOa6.js";import"./index-CodEEOgp.js";import"./Icon-CCnW0-hW.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./prop-C6y-wj7q.js";import"./useSafeTranslation-D7WzaY-Y.js";import"./en-US-wky7Us-i.js";import"./menuElements-C76X0SCp.js";import"./index-CJ1jFOY0.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./index-DswKY91G.js";import"./Inline.enums-BAfT2b1A.js";import"./Cluster-x6SODxoc.js";import"./index-P638_79P.js";import"./isFunction-BAANUD86.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-BBrWYpwZ.js";import"./Skeleton-Da9ufsch.js";import"./Button-Dg7nljpV.js";import"./index-DV_F2C3q.js";import"./index-qy2HD_nf.js";import"./Tooltip-BEDwtQgb.js";import"./FloatingContext-Cr2ZSxO5.js";import"./index-BOujddvT.js";import"./CloseButton-BrcJf-ju.js";import"./index-D6mk1gl9.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-BwQkA-7b.js";import"./Pill-CmUf-Iiu.js";import"./PillRemoveButton-Cp2GXDE0.js";const Fn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:r},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-CkJ6_R_J.js.map
