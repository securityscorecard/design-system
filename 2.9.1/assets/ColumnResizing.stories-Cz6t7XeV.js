import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r as e}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-x8kdJ1cZ.js";import{T as n,c as p}from"./Template-B5fQhUoo.js";import"./useLogger-BUVDCBjf.js";import"./index-CrKmLWnD.js";import"./constants-l-41uwkI.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-BD6Crr4Z.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-fQ2bMmdG.js";import"./index-C7IrpltL.js";import"./components-CEAZ8Niy.js";import"./index-Do5YN-r4.js";import"./Icon-D2McLPVS.js";import"./index-CajKmcpa.js";import"./index-BRV0Se7Z.js";import"./index-BpwILXOI.js";import"./Spinner-D0DPxq7I.js";import"./prop-DthtuCpe.js";import"./useSafeTranslation-DO0eKWrX.js";import"./en-US-CaArnYpN.js";import"./menuElements-DX7GXJyU.js";import"./tslib.es6-BLYux4pC.js";import"./index-CtMHODJ2.js";import"./index-CXHcUZNU.js";import"./Padbox-C9-4IgMJ.js";import"./index-BFpmPCJD.js";import"./Inline.enums-B2crYYgS.js";import"./Cluster-_Y3KuvTf.js";import"./index-BILJD4ib.js";import"./isFunction-ueona4bl.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Skeleton-BWW78PHt.js";import"./Button-CvHd8Azw.js";import"./index--l7ovmQ3.js";import"./index-BjRuNwra.js";import"./Tooltip-BMm0xgGu.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-BvVXaNp9.js";import"./CloseButton-CvqEfgDP.js";import"./index-CbtSpW2v.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-D6R3DHC6.js";import"./Pill-BDiUppEK.js";import"./PillRemoveButton-COTxmups.js";const Fn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...p,{accessorKey:"country",header:"Country",enableResizing:!1}]};const l=n.bind({});l.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};l.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...p]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[r,d]=e.useState({"organization.name":300}),t=e.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:r},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=n.args;var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const wn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,l as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,wn as __namedExportsOrder,Fn as default};
//# sourceMappingURL=ColumnResizing.stories-Cz6t7XeV.js.map
