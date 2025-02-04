import{j as i}from"./jsx-runtime-CfatFE5O.js";import{r}from"./index-ClcD9ViR.js";import{D as p}from"./Datatable-x2ZfM_pe.js";import{a as S,T as n,c as u}from"./argTypes-CMcsPgbk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-BIFF4Ira.js";import"./index-C2fNon3Z.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-BumGbSft.js";import"./SelectionToolbar-BIj_XAYC.js";import"./index-t408_oKr.js";import"./Icon-CwDBfXxP.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-D-VPAycD.js";import"./index-D4bv78R3.js";import"./Padbox-QeDNAg-Y.js";import"./index-CJqnHCRB.js";import"./prop-DxwKVRPv.js";import"./Inline-CJoeeTWo.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-EcHytK4z.js";import"./index-fVh6sz_B.js";import"./Button-F6ZYDBEp.js";import"./components-C9ZynCTM.js";import"./index-DKZQhKLO.js";import"./Spinner-C4Y4qwgQ.js";import"./useSafeTranslation-CTytszpq.js";import"./en-US-DTEh3xIi.js";import"./pluck-CostYriq.js";import"./IconButton-D-PcuZjI.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-CkPRSvbb.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-YvM1PAod.js";import"./index-BlmJOztB.js";import"./Tooltip-CNTka1Rj.js";import"./FloatingContext-Iczo9egI.js";import"./index-oSnT1g_s.js";import"./CloseButton-BnxGXhE2.js";import"./index-DAjbAeX4.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-CxXlF41o.js";import"./Pill-BDetg8sM.js";import"./PillRemoveButton-CrYU6s_g.js";const jn={title:"components/DatatableV2/ColumnResizing",component:p,parameters:{screenshot:{skip:!0}},argTypes:S},b=n.bind({});b.args=n.args;const f=n.bind({});f.args={...n.args,enableColumnResizing:!1};const h=n.bind({});h.args={...n.args,columns:[...u,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const R=n.bind({});R.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...u]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(p,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnResizingManagedState"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-DPIm9sQB.js.map
