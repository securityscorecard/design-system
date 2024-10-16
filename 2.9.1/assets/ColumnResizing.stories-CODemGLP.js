import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-D96qhicj.js";import{T as n,c as p}from"./Template-B3FSJjDI.js";import"./useLogger-BdR6T79l.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./_isObject-BZZHHNGj.js";import"./slice-CaMqkvGm.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./IconButton-CKUQpq1U.js";import"./index-C7IrpltL.js";import"./components-CjIxgO6S.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-BsP7FXMl.js";import"./index-BRV0Se7Z.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./prop-CgNUfcFy.js";import"./useSafeTranslation-BFYCnF6T.js";import"./en-US-DPXU96ho.js";import"./menuElements-Ht_uLAmV.js";import"./index-C1kpn3a9.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./index-FmXXYKzo.js";import"./Inline.enums-CsgpNQwN.js";import"./Cluster-BnO1HbAj.js";import"./index-CUGQ8N4L.js";import"./pluck-5zg4Xx5s.js";import"./useLocalStorageState-D2NPfI6N.js";import"./useContainerQuery-DfiLLmFV.js";import"./Skeleton-Czx0AtBC.js";import"./Button-jQCIxIJA.js";import"./index-zphH5PEn.js";import"./index-C2vIIBl6.js";import"./Tooltip-DgJ8Q0u2.js";import"./FloatingContext-C7MQzhpq.js";import"./index-lS962czg.js";import"./CloseButton-DSRlqFcT.js";import"./index-BkLmc-fh.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-_JuRKZiv.js";import"./Pill-DDsfaC4J.js";import"./PillRemoveButton-CcoG8WEs.js";const Fn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnResizingManagedState"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const yn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,yn as __namedExportsOrder,Fn as default};
//# sourceMappingURL=ColumnResizing.stories-CODemGLP.js.map
