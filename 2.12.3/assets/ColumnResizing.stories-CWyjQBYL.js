import{j as i}from"./jsx-runtime-CfatFE5O.js";import{r as e}from"./index-ClcD9ViR.js";import{D as u}from"./Datatable-Dp4ugSt7.js";import{T as n,c as p}from"./Template-CSHtRXlH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-CA2WAjqk.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-CdMcQTsn.js";import"./menuElements-rra-N_Mf.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-CajKmcpa.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-83j-rV9N.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-CqL4JSrw.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-BoodrCNm.js";import"./Cluster-wkODOmrt.js";import"./index-SvgRUxZC.js";import"./IconButton-Be4MdzEz.js";import"./components-BlntQQgH.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./useSafeTranslation-D0Mz5J_m.js";import"./en-US-DVFKJdgt.js";import"./Button-D1_vamon.js";import"./pluck-DtgIh6Gb.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-xb3ufhUt.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-CbIgZDyE.js";import"./index-D05MWUDH.js";import"./Tooltip-CLl0K0dw.js";import"./FloatingContext-f-xOTKfR.js";import"./index-B1gWeAuA.js";import"./CloseButton-KHmbJHrg.js";import"./index-BgMjzImo.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-DLTZVkzK.js";import"./Pill-Bs1dRCTF.js";import"./PillRemoveButton-BrXQC1i9.js";const wn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:r},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const yn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,yn as __namedExportsOrder,wn as default};
//# sourceMappingURL=ColumnResizing.stories-CWyjQBYL.js.map
