import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-Bg80pmRP.js";import{T as n,c as l}from"./Template-C6k2Jk7B.js";import"./useLogger-XTihx-r2.js";import"./index-CbknQUej.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./IconButton-CIf20D8_.js";import"./index-C7IrpltL.js";import"./components-9007xTyM.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-CMxDd3Da.js";import"./index-BRV0Se7Z.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./prop-CqBAad6K.js";import"./menuElements-Cq542wPo.js";import"./tslib.es6-BLYux4pC.js";import"./index-DozTNYRt.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./index-NWhnjyl5.js";import"./Inline.enums-DlaUPeKw.js";import"./Cluster-CO02VLRh.js";import"./index-uIya-cWM.js";import"./isFunction-ORz17Qg7.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-BJCD1Rvj.js";import"./index-DfX17r-U.js";import"./Skeleton-Bs9JsnhX.js";import"./index-fzZP4z-t.js";import"./Tooltip-D2te_2P5.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-BjcCWu4d.js";import"./CloseButton-DolDE5X-.js";import"./index-DEer-CVx.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-BlYXqBWM.js";import"./Pill-z8JPj4-3.js";import"./PillRemoveButton-C9oge2rz.js";const bn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...l,{accessorKey:"country",header:"Country",enableResizing:!1}]};const p=n.bind({});p.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};p.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...l]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const fn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,p as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,fn as __namedExportsOrder,bn as default};
//# sourceMappingURL=ColumnResizing.stories-EeS9r5II.js.map
