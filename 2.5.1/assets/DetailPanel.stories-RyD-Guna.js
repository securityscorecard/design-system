import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as g}from"./index-CTjT7uj6.js";import{a as u}from"./chunk-454WOBUV-DWuJqIWT.js";import{D as l}from"./Datatable-80VHa1AX.js";import{T as i}from"./Template-Bxv2vZAY.js";import{S as f}from"./Snippet-C19nuQxQ.js";import"./index-h7qFssqm.js";import{P as b}from"./Padbox-DcClumXL.js";import"./v4-D8aEg3BZ.js";import"./useLogger-BRbW6gx4.js";import"./index-DT7C7tog.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./IconButton-BuN5sAFu.js";import"./index-C7IrpltL.js";import"./components-CuVdvoC-.js";import"./index-CHR41AfE.js";import"./Icon-CG4jHxtF.js";import"./index-uyLpYamY.js";import"./index-BRV0Se7Z.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./prop-BK8rocxd.js";import"./menuElements-C3z2fE16.js";import"./tslib.es6-BLYux4pC.js";import"./index-XqRGyOl1.js";import"./Inline.enums-Dxp6-wcT.js";import"./isFunction-CoLsl8nV.js";import"./useLocalStorageState-Dk2imEhS.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-D3qY9K8F.js";import"./index-B2xEckfB.js";import"./index-Dzv7tIQf.js";import"./Skeleton-DbMjYdNj.js";import"./index-CISbCLO7.js";import"./index-BfyKkzlx.js";import"./Tooltip-Lwk8rJpd.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-BPT15Fxp.js";import"./CloseButton-CsFb1uAV.js";import"./index-CECIl5yl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-BoTZd2n1.js";import"./Pill-CQHkUhJr.js";import"./PillRemoveButton-D0mC8gmi.js";import"./Cluster-DithqAUq.js";import"./ErrorBoundary-dVyiJ0h6.js";import"./index-vxnc4v2T.js";import"./index-Ce7N-01r.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-DtrhChS2.js";import"./isNotNull-lH5ks6fm.js";import"./flip-D5ImYigC.js";const Oe={title:"components/DatatableV2/DetailPanel",component:l,parameters:{screenshot:{skip:!0}}},E=({row:r})=>e.jsx(b,{paddingSize:"md",children:e.jsx(f,{shouldDedent:!1,isExpanded:!0,children:JSON.stringify(r.original,null,2)})}),t=i.bind({});t.args={...i.args,enableExpanding:!0,enableExpandAll:!0,renderDetailPanel:E,enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:n})=>o=>u("row action")({row:r,table:n,event:o})}]};t.parameters={screenshot:{skip:!1}};const d=i.bind({});d.args={...t.args,enableExpandAll:!1};d.parameters={screenshot:{skip:!1}};const c=i.bind({});c.args={...t.args,initialState:{expanded:!0}};c.parameters={screenshot:{skip:!1}};const x=i.bind({});x.args={...t.args,initialState:{expanded:{"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0,"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0}}};x.parameters={screenshot:{skip:!1}};const a=r=>{const[n,o]=g.useState({"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0});return e.jsxs(e.Fragment,{children:[e.jsx(l,{state:{expanded:n},manualExpanding:!0,onExpandedChange:o,...r}),e.jsxs("div",{children:[e.jsx("strong",{children:"Debug:"}),e.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};a.args=t.args;var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [expanded, setExpanded] = useState<ExpandedState>({
    'dc7f6ee9-be51-4938-90f5-d6b48d95f498': true
  });
  return <>
      <Datatable state={{
      expanded
    }} manualExpanding onExpandedChange={setExpanded} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(expanded, null, 2)}</pre>
      </div>
    </>;
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const we=["DetailPanelEnabled","DisableExpandAll","InitialExpandedAllDetailPanels","InitialExpandedSomeDetailPanels","DetailPanelManagedState"];export{t as DetailPanelEnabled,a as DetailPanelManagedState,d as DisableExpandAll,c as InitialExpandedAllDetailPanels,x as InitialExpandedSomeDetailPanels,we as __namedExportsOrder,Oe as default};
//# sourceMappingURL=DetailPanel.stories-RyD-Guna.js.map
