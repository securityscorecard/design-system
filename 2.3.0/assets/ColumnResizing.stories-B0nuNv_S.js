import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{D as u}from"./Datatable-CRiRCi20.js";import{T as n,c as l}from"./Template-CpnJcoj5.js";import"./useLogger-BNYGJgyi.js";import"./index-DzoB_gWM.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./IconButton-C0z_ySy5.js";import"./components-imVrW6nL.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./index-t-vajJ9r.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./prop-BgpcU4fO.js";import"./menuElements-ByXMhNOt.js";import"./tslib.es6-BLYux4pC.js";import"./index-CoMEwqFC.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-DZoBl2Wq.js";import"./flex.types-BrkCVx66.js";import"./Inline-DPdVYO7t.js";import"./Cluster-DaqHgnAc.js";import"./index-C_SwQgDv.js";import"./pluck-XHiJ2W8k.js";import"./useLocalStorageState-Bvq8NDNj.js";import"./useContainerQuery-DfiLLmFV.js";import"./Button-BMWvW0nZ.js";import"./index-mAAZmqGJ.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-BSMwopXk.js";import"./index-Drrfuvzh.js";import"./Tooltip-BT_E9yk_.js";import"./FloatingContext-CyxsIqHp.js";import"./index-BtwkxZ3S.js";import"./CloseButton-B7KX2rrC.js";import"./index-beAa1auE.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-DHgpcg3j.js";import"./PillRemoveButton-CsvadIXl.js";import"./Pill-CA-mw_E3.js";import"./PillLabel-DZn6lXVM.js";import"./gt-2XdA2AlM.js";const Rn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...l,{accessorKey:"country",header:"Country",enableResizing:!1}]};const p=n.bind({});p.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};p.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...l]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnResizingManagedState"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ColumnResizing.stories-B0nuNv_S.js.map
