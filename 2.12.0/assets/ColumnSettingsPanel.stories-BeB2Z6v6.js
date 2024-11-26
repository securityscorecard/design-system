import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as S}from"./index-ClcD9ViR.js";import{D as m}from"./Datatable-CbbsOUJe.js";import{T as t}from"./Template-BasqZflr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-CA2WAjqk.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-xmN6WiMq.js";import"./menuElements-BYhuLLKf.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-CajKmcpa.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-7cJ2juxC.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-BtznGf-c.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-nLI0iivB.js";import"./Cluster-wkODOmrt.js";import"./index-CpAvg4Hc.js";import"./IconButton-Cd40Tx_f.js";import"./components-BlntQQgH.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./useSafeTranslation-D0Mz5J_m.js";import"./en-US-DVFKJdgt.js";import"./Button-BfyVdgm0.js";import"./pluck-DtgIh6Gb.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-xb3ufhUt.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-CXhmAfct.js";import"./index-Al6z2MCl.js";import"./Tooltip-eZWLkn5m.js";import"./FloatingContext-f-xOTKfR.js";import"./index-8Dw_EHst.js";import"./CloseButton-CJqflljN.js";import"./index-BgMjzImo.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-K53_VLVp.js";import"./Pill-D8fkm8BA.js";import"./PillRemoveButton-D_m0G_lu.js";const Pt={title:"components/DatatableV2/ColumnSettingsPanel",component:m,parameters:{screenshot:{skip:!0}}},d=t.bind({});d.args=t.args;const C=t.bind({});C.args={...t.args,enableHiding:!1,enableColumnPinning:!1};const a=t.bind({});a.args={...t.args,enableHiding:!1,initialState:{showColumnSettings:!0}};a.parameters={screenshot:{skip:!1}};const l=t.bind({});l.args={...t.args,enableColumnPinning:!1,initialState:{showColumnSettings:!0}};l.parameters={screenshot:{skip:!1}};const p=t.bind({});p.args={...t.args,initialState:{showColumnSettings:!0}};p.parameters={screenshot:{skip:!1}};const i=g=>{const[e,u]=S.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(m,{state:{showColumnSettings:e},onShowColumnSettings:u,...g}),n.jsxs("div",{children:[n.jsx("strong",{children:"Debug:"}),n.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};i.args=t.args;var o,r,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [showColumnSettings, setShowColumnSettings] = useState<boolean>(true);
  return <>
      <Datatable state={{
      showColumnSettings
    }} onShowColumnSettings={setShowColumnSettings} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(showColumnSettings, null, 2)}</pre>
      </div>
    </>;
}`,...(s=(r=i.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ft=["ColumnSettingsPanelEnabled","DisabledColumnSettingsPanel","DisabledColumnHidingInSettingsPanel","DisabledColumnPinningInSettingsPanel","InitialColumnSettingsPanel","ColumnSettingsPanelManagedState"];export{d as ColumnSettingsPanelEnabled,i as ColumnSettingsPanelManagedState,a as DisabledColumnHidingInSettingsPanel,l as DisabledColumnPinningInSettingsPanel,C as DisabledColumnSettingsPanel,p as InitialColumnSettingsPanel,ft as __namedExportsOrder,Pt as default};
//# sourceMappingURL=ColumnSettingsPanel.stories-BeB2Z6v6.js.map
