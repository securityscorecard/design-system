import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{D as a}from"./Datatable-CRiRCi20.js";import{T as e}from"./Template-CpnJcoj5.js";import"./useLogger-BNYGJgyi.js";import"./index-DzoB_gWM.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./IconButton-C0z_ySy5.js";import"./components-imVrW6nL.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./index-t-vajJ9r.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./prop-BgpcU4fO.js";import"./menuElements-ByXMhNOt.js";import"./tslib.es6-BLYux4pC.js";import"./index-CoMEwqFC.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-DZoBl2Wq.js";import"./flex.types-BrkCVx66.js";import"./Inline-DPdVYO7t.js";import"./Cluster-DaqHgnAc.js";import"./index-C_SwQgDv.js";import"./pluck-XHiJ2W8k.js";import"./useLocalStorageState-Bvq8NDNj.js";import"./useContainerQuery-DfiLLmFV.js";import"./Button-BMWvW0nZ.js";import"./index-mAAZmqGJ.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-BSMwopXk.js";import"./index-Drrfuvzh.js";import"./Tooltip-BT_E9yk_.js";import"./FloatingContext-CyxsIqHp.js";import"./index-BtwkxZ3S.js";import"./CloseButton-B7KX2rrC.js";import"./index-beAa1auE.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-DHgpcg3j.js";import"./PillRemoveButton-CsvadIXl.js";import"./Pill-CA-mw_E3.js";import"./PillLabel-DZn6lXVM.js";import"./gt-2XdA2AlM.js";const ue={title:"components/DatatableV2/FullscreenMode",component:a,parameters:{screenshot:{skip:!0}}},c=e.bind({});c.args=e.args;const u=e.bind({});u.args={...e.args,enableFullScreenMode:!1};const l=e.bind({});l.args={...e.args,initialState:{isFullscreenMode:!0}};l.parameters={screenshot:{skip:!1}};const t=m=>{const[o,p]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(a,{state:{isFullscreenMode:o},manualSorting:!0,onFullscreenModeChange:p,...m}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(o,null,2)})]})]})};t.args=e.args;t.__docgenInfo={description:"",methods:[],displayName:"FullscreenModeManagedState"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);
  return <>
      <Datatable state={{
      isFullscreenMode
    }} manualSorting onFullscreenModeChange={setIsFullscreenMode} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(isFullscreenMode, null, 2)}</pre>
      </div>
    </>;
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const ge=["FullscreenModeEnabled","FullscreenModeDisabled","InitialFullscreenMode","FullscreenModeManagedState"];export{u as FullscreenModeDisabled,c as FullscreenModeEnabled,t as FullscreenModeManagedState,l as InitialFullscreenMode,ge as __namedExportsOrder,ue as default};
//# sourceMappingURL=FullscreenMode.stories-DSCKJyjn.js.map
