import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{D as u}from"./Datatable-DGBKrjVG.js";import{T as n,c as p}from"./Template-B6T_mIBx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-BV2AIPN5.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-Cc3nJNU-.js";import"./menuElements-B9_FW7TJ.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./index-g6a7d4VX.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./index-DswKY91G.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-BAfT2b1A.js";import"./Cluster-x6SODxoc.js";import"./index-iel8gM5l.js";import"./IconButton-G79IfSWP.js";import"./components-KPog_F_-.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./useSafeTranslation-D7WzaY-Y.js";import"./en-US-wky7Us-i.js";import"./Button-CXTuE1Mx.js";import"./pluck-DtgIh6Gb.js";import"./useContainerQuery-BBrWYpwZ.js";import"./Skeleton-4tPyiyJG.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-Tm3zSpl6.js";import"./index-D8YPWSaz.js";import"./Tooltip-C2iKzNvT.js";import"./FloatingContext-Cr2ZSxO5.js";import"./index-DQm2UIbK.js";import"./CloseButton-DAl5F0pU.js";import"./index-BAFidxi4.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-CrCPhLtn.js";import"./Pill-BO_fL3ZH.js";import"./PillRemoveButton-BXLVcWxq.js";const yn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:r},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const jn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,jn as __namedExportsOrder,yn as default};
//# sourceMappingURL=ColumnResizing.stories-WLMxYfb6.js.map
