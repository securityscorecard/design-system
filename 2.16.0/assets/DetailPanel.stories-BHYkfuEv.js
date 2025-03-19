import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as g}from"./index-ClcD9ViR.js";import{a as u}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as l}from"./Datatable-CqKviANN.js";import{a as f,T as i}from"./argTypes-ClA1DOWX.js";import{S as b}from"./Snippet-BA0o17zn.js";import"./index-OY6jNnnn.js";import{P as E}from"./Padbox-DhupY5rO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-DBZ2KDnn.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-DD_G22M5.js";import"./SelectionToolbar-Dy-IFdnW.js";import"./index-U7rWlclI.js";import"./Icon-Bik-9-TI.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-CEsunubm.js";import"./Inline-C2UKE3FB.js";import"./prop-gA1VFyoz.js";import"./Button-DXrAv08R.js";import"./components-ByF3bco0.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-DW1KuvTP.js";import"./en-US-DVFKJdgt.js";import"./index-DV1EfWHB.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-fYiYssr0.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DPdGIrHZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-BeSa3Tgc.js";import"./index-CgUcX5gD.js";import"./Tooltip-ClqziCrA.js";import"./FloatingContext-f-xOTKfR.js";import"./index-Cp8NM1Nv.js";import"./CloseButton-DA0CgUBz.js";import"./index-BVsc1NiC.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BiQ22au2.js";import"./Pill-BY7T1u-8.js";import"./PillRemoveButton-BWcc2Zae.js";import"./Cluster-B_3C_5JL.js";import"./ErrorBoundary-DNa6-69j.js";import"./index-Crr46x7K.js";import"./index-BiGW80Qt.js";import"./require-router-link-DVLtxlD2.js";import"./react-router-dom-CjXcz4Wm.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./flip-BOEdXAWn.js";import"./Inline.enums-KPT5jvjq.js";const ze={title:"components/DatatableV2/DetailPanel",component:l,parameters:{screenshot:{skip:!0}},argTypes:f},D=({row:r})=>e.jsx(E,{paddingSize:"md",children:e.jsx(b,{shouldDedent:!1,isExpanded:!0,children:JSON.stringify(r.original,null,2)})}),t=i.bind({});t.args={...i.args,enableExpanding:!0,enableExpandAll:!0,renderDetailPanel:D,enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:o})=>n=>u("row action")({row:r,table:o,event:n})}]};t.parameters={screenshot:{skip:!1}};const d=i.bind({});d.args={...t.args,enableExpandAll:!1};d.parameters={screenshot:{skip:!1}};const c=i.bind({});c.args={...t.args,initialState:{expanded:!0}};c.parameters={screenshot:{skip:!1}};const x=i.bind({});x.args={...t.args,initialState:{expanded:{"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0,"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0}}};x.parameters={screenshot:{skip:!1}};const a=r=>{const[o,n]=g.useState({"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0});return e.jsxs(e.Fragment,{children:[e.jsx(l,{state:{expanded:o},manualExpanding:!0,onExpandedChange:n,...r}),e.jsxs("div",{children:[e.jsx("strong",{children:"Debug:"}),e.jsx("pre",{children:JSON.stringify(o,null,2)})]})]})};a.args=t.args;var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Fe=["DetailPanelEnabled","DisableExpandAll","InitialExpandedAllDetailPanels","InitialExpandedSomeDetailPanels","DetailPanelManagedState"];export{t as DetailPanelEnabled,a as DetailPanelManagedState,d as DisableExpandAll,c as InitialExpandedAllDetailPanels,x as InitialExpandedSomeDetailPanels,Fe as __namedExportsOrder,ze as default};
//# sourceMappingURL=DetailPanel.stories-BHYkfuEv.js.map
