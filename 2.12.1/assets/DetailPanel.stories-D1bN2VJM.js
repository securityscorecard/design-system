import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as g}from"./index-ClcD9ViR.js";import{a as f}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as d}from"./Datatable-9J1O1ho_.js";import{T as i}from"./Template-q_ZKQZPn.js";import{S as u}from"./Snippet-COWreNeA.js";import"./index-BQsZAX6J.js";import{P as b}from"./Padbox-DPWp-bzC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useLogger-BVsKAY55.js";import"./index-CeGY6Ei3.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-Zd9oPfo0.js";import"./menuElements-CccNpS3Y.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-BsP7FXMl.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-gVnCqFBT.js";import"./Inline.enums-Bs7GfXP0.js";import"./prop-CVCEMdxf.js";import"./IconButton-C7WqqEmt.js";import"./components-D0pVc94e.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./useSafeTranslation-BoMGciE_.js";import"./en-US-DTEh3xIi.js";import"./Button-B9sDvBNH.js";import"./index-Ozu0POZL.js";import"./pluck-DBmb9H0q.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-RIrARYRh.js";import"./useLocalStorageState-D2NPfI6N.js";import"./index-BlLyJPr3.js";import"./index-BnuP2NC2.js";import"./index-BmLnN1YK.js";import"./Tooltip-jY7iBNOF.js";import"./FloatingContext-Iczo9egI.js";import"./index-Cal9QCFP.js";import"./CloseButton-CA3EgCdD.js";import"./index-0K9MvtJv.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-C6jSWOeZ.js";import"./Pill-CJpEBFcq.js";import"./PillRemoveButton-ClKFZ-rf.js";import"./Cluster-DiauHNp4.js";import"./ErrorBoundary-CcRNGkfm.js";import"./index-BIguDwj2.js";import"./index-DaL9ZfvN.js";import"./require-router-link-BkfyGi5e.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./flip-Cf__ZOUJ.js";const Re={title:"components/DatatableV2/DetailPanel",component:d,parameters:{screenshot:{skip:!0}}},E=({row:a})=>e.jsx(b,{paddingSize:"md",children:e.jsx(u,{shouldDedent:!1,isExpanded:!0,children:JSON.stringify(a.original,null,2)})}),r=i.bind({});r.args={...i.args,enableExpanding:!0,enableExpandAll:!0,renderDetailPanel:E,enableRowActions:!0,rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:a,table:n})=>o=>f("row action")({row:a,table:n,event:o})}]};r.parameters={screenshot:{skip:!1}};const l=i.bind({});l.args={...r.args,enableExpandAll:!1};l.parameters={screenshot:{skip:!1}};const c=i.bind({});c.args={...r.args,initialState:{expanded:!0}};c.parameters={screenshot:{skip:!1}};const x=i.bind({});x.args={...r.args,initialState:{expanded:{"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0,"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0}}};x.parameters={screenshot:{skip:!1}};const t=a=>{const[n,o]=g.useState({"dc7f6ee9-be51-4938-90f5-d6b48d95f498":!0});return e.jsxs(e.Fragment,{children:[e.jsx(d,{state:{expanded:n},manualExpanding:!0,onExpandedChange:o,...a}),e.jsxs("div",{children:[e.jsx("strong",{children:"Debug:"}),e.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};t.args=r.args;t.__docgenInfo={description:"",methods:[],displayName:"DetailPanelManagedState"};var p,s,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Te=["DetailPanelEnabled","DisableExpandAll","InitialExpandedAllDetailPanels","InitialExpandedSomeDetailPanels","DetailPanelManagedState"];export{r as DetailPanelEnabled,t as DetailPanelManagedState,l as DisableExpandAll,c as InitialExpandedAllDetailPanels,x as InitialExpandedSomeDetailPanels,Te as __namedExportsOrder,Re as default};
//# sourceMappingURL=DetailPanel.stories-D1bN2VJM.js.map
