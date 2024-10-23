import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{D as u}from"./Datatable-BrBXLni9.js";import{T as n,c as p}from"./Template-D_XUIyO4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-DZJuabeR.js";import"./index-BQWFrAEB.js";import"./constants-CHqWh-7J.js";import"./isNotUndefined-DxARNfZG.js";import"./_isObject-BZZHHNGj.js";import"./slice-DUYrgxkR.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./IconButton-ClFQ-YsQ.js";import"./index-CVyJwDg7.js";import"./components-B6h-HAd3.js";import"./index-CA8igt89.js";import"./Icon-OPJ4_-kw.js";import"./index-BsP7FXMl.js";import"./index-Dk74W0Oi.js";import"./index-B2Sxccu3.js";import"./Spinner-h6IgF5Nn.js";import"./prop-qecTCRZr.js";import"./useSafeTranslation-BCAAUwPD.js";import"./en-US-CDWxVyPr.js";import"./menuElements-DEtjLdXS.js";import"./index-0COcc321.js";import"./index-CKrVqi-N.js";import"./Padbox-DzmU9-lr.js";import"./index-iY2rO5S8.js";import"./Inline.enums-6YASdLRa.js";import"./Cluster-CjJ089XP.js";import"./index-B9rA5P-U.js";import"./pluck-D_zsPq3H.js";import"./useLocalStorageState-D2NPfI6N.js";import"./useContainerQuery-Cnf3zHpB.js";import"./Skeleton-lY1Z7Pv8.js";import"./Button-Y7NUWBaW.js";import"./index-DmfpuQjN.js";import"./index-BR1zTT6O.js";import"./Tooltip-HRInPKQC.js";import"./FloatingContext-CQFaKq2L.js";import"./index-DRQu5xX2.js";import"./CloseButton-DldEAqTZ.js";import"./index-BC9WaV5B.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-DfZLU8Or.js";import"./Pill-LFTbJjnh.js";import"./PillRemoveButton-tEWM886E.js";const yn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnResizingManagedState"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const wn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,wn as __namedExportsOrder,yn as default};
//# sourceMappingURL=ColumnResizing.stories-C2dS1s1B.js.map
