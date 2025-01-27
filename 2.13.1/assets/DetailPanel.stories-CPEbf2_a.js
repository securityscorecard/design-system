import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as g}from"./index-ClcD9ViR.js";import{a as u}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as l}from"./Datatable-D-1nA43Z.js";import{a as f,T as i}from"./argTypes-CLrsugrY.js";import{S as b}from"./Snippet-BMvItWZ5.js";import"./index-C0tcqiOb.js";import{P as E}from"./Padbox-DmYWNoOJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-CGEbE2mZ.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-vtIdxa-5.js";import"./SelectionToolbar-DZG0Moqx.js";import"./index-DYDjgMG1.js";import"./Icon-CHceuV7K.js";import"./index-CeOnF3dB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-CpAvg4Hc.js";import"./Inline.enums-CFrWSfFs.js";import"./prop-C6y-wj7q.js";import"./Button-vEOnW8Bm.js";import"./components-MIUzfLU3.js";import"./index-CGIPeC-W.js";import"./Spinner-CScYiCuC.js";import"./useSafeTranslation-BH9xR3W8.js";import"./en-US-DVFKJdgt.js";import"./index-BaexK_kB.js";import"./pluck-DtgIh6Gb.js";import"./IconButton-CUW5D67R.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-RJ8AjUwu.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-DTMAbG_k.js";import"./index-DocoHESx.js";import"./index-D2rWxbnI.js";import"./Tooltip-DUvzNTog.js";import"./FloatingContext-f-xOTKfR.js";import"./index-2UgTPBhG.js";import"./CloseButton-DH2Foj5b.js";import"./index-Ccg6HrRD.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-j3TVFBpQ.js";import"./Pill-BAusDNNE.js";import"./PillRemoveButton-Cb8jjtX4.js";import"./Cluster-BKESMogL.js";import"./ErrorBoundary-rMhW81pv.js";import"./index-BUgguZLK.js";import"./index-DFFyPjew.js";import"./require-router-link-dCknxxr0.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./flip-BtvP9idc.js";const Re={title:"components/DatatableV2/DetailPanel",component:l,parameters:{screenshot:{skip:!0}},argTypes:f},D=({row:r})=>e.jsx(E,{paddingSize:"md",children:e.jsx(b,{shouldDedent:!1,isExpanded:!0,children:JSON.stringify(r.original,null,2)})}),t=i.bind({});t.args={...i.args,enableExpanding:!0,enableExpandAll:!0,renderDetailPanel:D,enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:r,table:o})=>n=>u("row action")({row:r,table:o,event:n})}]};t.parameters={screenshot:{skip:!1}};const d=i.bind({});d.args={...t.args,enableExpandAll:!1};d.parameters={screenshot:{skip:!1}};const c=i.bind({});c.args={...t.args,initialState:{expanded:!0}};c.parameters={screenshot:{skip:!1}};const x=i.bind({});x.args={...t.args,initialState:{expanded:{"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0,"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0}}};x.parameters={screenshot:{skip:!1}};const a=r=>{const[o,n]=g.useState({"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0});return e.jsxs(e.Fragment,{children:[e.jsx(l,{state:{expanded:o},manualExpanding:!0,onExpandedChange:n,...r}),e.jsxs("div",{children:[e.jsx("strong",{children:"Debug:"}),e.jsx("pre",{children:JSON.stringify(o,null,2)})]})]})};a.args=t.args;var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ze=["DetailPanelEnabled","DisableExpandAll","InitialExpandedAllDetailPanels","InitialExpandedSomeDetailPanels","DetailPanelManagedState"];export{t as DetailPanelEnabled,a as DetailPanelManagedState,d as DisableExpandAll,c as InitialExpandedAllDetailPanels,x as InitialExpandedSomeDetailPanels,ze as __namedExportsOrder,Re as default};
//# sourceMappingURL=DetailPanel.stories-CPEbf2_a.js.map
