import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-CE9AuCi0.js";import{T as n,c as l}from"./Template-DThkUfqA.js";import"./useLogger-IjsioYUQ.js";import"./index-DzAsfYvZ.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./IconButton-Bd-lF6sc.js";import"./index-C7IrpltL.js";import"./components-BItAEv9I.js";import"./index-DoZinuF4.js";import"./Icon-DCTBW-fe.js";import"./index-uyLpYamY.js";import"./index-BRV0Se7Z.js";import"./index-DNjKNlmW.js";import"./Spinner-qeMxdFSS.js";import"./prop-CePbk9wh.js";import"./menuElements-DejiY6eM.js";import"./tslib.es6-BLYux4pC.js";import"./index-BfLWfhlY.js";import"./index-BawZj8GX.js";import"./Padbox-ugjOsLS7.js";import"./index-BcSnSfQB.js";import"./flex.types-BrkCVx66.js";import"./Inline-Cg9jPAAE.js";import"./Cluster-HoiIP47J.js";import"./index-BiHv5IcS.js";import"./isFunction-BtTpAfvx.js";import"./useLocalStorageState-Dk2imEhS.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-5uIKxvED.js";import"./index-CdPlJU3q.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-DPenJgjv.js";import"./index-D09y0Wvv.js";import"./Tooltip-DVd80gkH.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-Dgakt_4W.js";import"./CloseButton-BWqOiFUV.js";import"./index-4aEyDaIq.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-CUoDZfxY.js";import"./Pill-XORrOTHp.js";import"./PillRemoveButton-B_IsOC8g.js";import"./gt-aySh16NS.js";const Rn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...l,{accessorKey:"country",header:"Country",enableResizing:!1}]};const p=n.bind({});p.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};p.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...l]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Dn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,p as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,Dn as __namedExportsOrder,Rn as default};
//# sourceMappingURL=ColumnResizing.stories-fKE48xYC.js.map
