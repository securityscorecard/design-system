import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-DCxSHHFj.js";import{T as n,c as l}from"./Template-DA-S9vQR.js";import"./useLogger-_RKsn3HX.js";import"./index-C1FT5pTy.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./IconButton-C1FilO1y.js";import"./components-Tmbw27rw.js";import"./index-Cvv1KPJl.js";import"./Icon-Ctrq9sYp.js";import"./index-uyLpYamY.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./index-C95nPCzM.js";import"./Spinner-BvaTOgAJ.js";import"./prop-B-t2KTqT.js";import"./menuElements-B_rPB4a6.js";import"./tslib.es6-BLYux4pC.js";import"./index-B-CeicLq.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./index-DPJ-F9hp.js";import"./flex.types-BrkCVx66.js";import"./Inline-CVToOADQ.js";import"./Cluster-DZ_NL6w4.js";import"./index-DXjoAeTX.js";import"./isFunction-C9e5dGMJ.js";import"./useLocalStorageState-Dk2imEhS.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-B2HZICot.js";import"./index-CnFAm5FJ.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-D1HxNzJO.js";import"./index-D5bPmNji.js";import"./Tooltip-BQzvuGg4.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-CQ4_Qafr.js";import"./CloseButton-BeO2B7D9.js";import"./index-Cp1GzN7Y.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-CpVj0NfY.js";import"./PillRemoveButton-YKsUPAtp.js";import"./Pill-BKaSw2i-.js";import"./PillLabel-n9U0O5_Y.js";import"./gt-DOG6XcTq.js";const Rn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...l,{accessorKey:"country",header:"Country",enableResizing:!1}]};const p=n.bind({});p.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};p.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...l]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-C4rOb5U4.js.map
