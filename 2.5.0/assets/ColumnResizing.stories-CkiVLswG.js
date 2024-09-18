import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-CWdg3r28.js";import{T as n,c as l}from"./Template-D3USgV_-.js";import"./useLogger-BRbW6gx4.js";import"./index-DT7C7tog.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./IconButton-VTTA73pK.js";import"./index-C7IrpltL.js";import"./components-CfW15aca.js";import"./index-Djj9NU8F.js";import"./Icon-DXON6kdo.js";import"./index-uyLpYamY.js";import"./index-BRV0Se7Z.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./prop-BK8rocxd.js";import"./menuElements-B6cdWUOT.js";import"./tslib.es6-BLYux4pC.js";import"./index-Nbgc27zk.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";import"./index-BYvZ6SHf.js";import"./Inline.enums-CsFZc2ym.js";import"./Cluster-BEmEoxq8.js";import"./index-CL66zYYS.js";import"./isFunction-CoLsl8nV.js";import"./useLocalStorageState-Dk2imEhS.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-CLKkzqeb.js";import"./index-dYvLZgz3.js";import"./Skeleton-DbMjYdNj.js";import"./index-2-tG497e.js";import"./Tooltip-BMo-rNPf.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-CQk43U1M.js";import"./CloseButton-DbZzs4Ds.js";import"./index-CECIl5yl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-DKH-kKYk.js";import"./Pill-BFhmsnaJ.js";import"./PillRemoveButton-ZZRHiNnC.js";const bn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...l,{accessorKey:"country",header:"Country",enableResizing:!1}]};const p=n.bind({});p.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};p.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...l]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-CkiVLswG.js.map
