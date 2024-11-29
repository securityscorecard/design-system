import{j as i}from"./jsx-runtime-CfatFE5O.js";import{r}from"./index-ClcD9ViR.js";import{D as u}from"./Datatable-9J1O1ho_.js";import{T as n,c as p}from"./Template-q_ZKQZPn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-BVsKAY55.js";import"./index-CeGY6Ei3.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-Zd9oPfo0.js";import"./menuElements-CccNpS3Y.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-BsP7FXMl.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-BQsZAX6J.js";import"./index-Ozu0POZL.js";import"./Padbox-DPWp-bzC.js";import"./index-BnuP2NC2.js";import"./prop-CVCEMdxf.js";import"./Inline.enums-Bs7GfXP0.js";import"./Cluster-DiauHNp4.js";import"./index-gVnCqFBT.js";import"./IconButton-C7WqqEmt.js";import"./components-D0pVc94e.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./useSafeTranslation-BoMGciE_.js";import"./en-US-DTEh3xIi.js";import"./Button-B9sDvBNH.js";import"./pluck-DBmb9H0q.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-RIrARYRh.js";import"./useLocalStorageState-D2NPfI6N.js";import"./index-BlLyJPr3.js";import"./index-BmLnN1YK.js";import"./Tooltip-jY7iBNOF.js";import"./FloatingContext-Iczo9egI.js";import"./index-Cal9QCFP.js";import"./CloseButton-CA3EgCdD.js";import"./index-0K9MvtJv.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-C6jSWOeZ.js";import"./Pill-CJpEBFcq.js";import"./PillRemoveButton-ClKFZ-rf.js";const yn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnResizingManagedState"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-DeacOClD.js.map
