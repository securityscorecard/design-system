import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as R}from"./index-BwDkhjyp.js";import{a as A}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as g}from"./Datatable-BFe3_jWk.js";import{T as e}from"./Template-Br9hDzIS.js";import"./index-CfzITaHV.js";import{B as p}from"./Button-BC4WdvK_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./useLogger-DBrb0845.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-DqReE266.js";import"./index-CVyJwDg7.js";import"./components-D4rQYKk1.js";import"./index-KsdgvOjZ.js";import"./Icon-CYAM9BRr.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./index-sYlzTV1h.js";import"./Spinner-CaS15r7b.js";import"./prop-BraK_cHP.js";import"./useSafeTranslation-CKZ54jxn.js";import"./en-US-wky7Us-i.js";import"./menuElements-B0f2j1Iu.js";import"./index-Dii5kbWS.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./index-D5s2qWpv.js";import"./Inline.enums-Dg90oR_c.js";import"./Cluster-hENBaGjg.js";import"./index-iel8gM5l.js";import"./isFunction-DHFK1UxZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-BBrWYpwZ.js";import"./Skeleton-Co4xxNhc.js";import"./Button-DyPMm7cZ.js";import"./index-C9awWo0S.js";import"./index-ns3nuyBm.js";import"./Tooltip-CiNVQnwO.js";import"./FloatingContext-Cr2ZSxO5.js";import"./index-Dosn2Gf1.js";import"./CloseButton-a1TgeEoF.js";import"./index-D97QikPo.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-B3IS_vUE.js";import"./Pill-D-HanoWC.js";import"./PillRemoveButton-B0oiM2Sz.js";import"./index-BfdLNWmY.js";import"./require-router-link-k4I0c-EH.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-CY6zyd1L.js";import"./isNotNull-DgOaR-Mp.js";import"./noop-HYpN8PIr.js";const Ie={title:"components/DatatableV2/Selection",component:g,parameters:{screenshot:{skip:!0}}},o=e.bind({});o.args={...e.args,getRowId:r=>r.id};o.parameters={screenshot:{skip:!1}};const b=e.bind({});b.args={...e.args,enableRowSelection:!1};b.parameters={screenshot:{skip:!1}};const f=e.bind({});f.args={...e.args,enableBatchRowSelection:!1};f.parameters={screenshot:{skip:!1}};const w=e.bind({});w.args={...o.args,enableMultiRowSelection:!1};w.parameters={screenshot:{skip:!1}};const u=e.bind({});u.args={...o.args,enableSelectAll:!1};u.parameters={screenshot:{skip:!1}};const D=e.bind({});D.args={...o.args,selectAllMode:"page"};const x=e.bind({});x.args={...o.args,selectAllMode:"all"};const h=e.bind({});h.args={...e.args,enableRowSelection:r=>r.original.organization.grade!=="A"};h.parameters={screenshot:{skip:!1}};const n=e.bind({});n.args={...o.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:r,table:i})=>t.jsxs(t.Fragment,{children:[t.jsx(p,{variant:"outline",onClick:()=>{A("selectedRows")(r)},children:"Show selected rows"}),t.jsx(p,{onClick:()=>{var s;(s=i.setRowSelection)==null||s.call(i,()=>i.options.data.reduce((l,c)=>c.organization.grade==="F"?{...l,[c.id]:!0}:l,{}))},children:"Select all F grades"})]})};n.parameters={screenshot:{skip:!1}};const j=e.bind({});j.args={...o.args,initialState:n.args.initialState,enableSelectionToolbar:!1};const a=r=>{const[i,s]=R.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return t.jsxs(t.Fragment,{children:[t.jsx(g,{state:{rowSelection:i},onRowSelectionChange:s,...r}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};a.args=o.args;var m,d,S;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({
    'e23968c3-3f19-44b2-aee9-c4a1d7c326ee': true,
    'eb43a2df-8884-43f1-bfe8-eea3545bbded': true
  });
  return <>
      <Datatable state={{
      rowSelection
    }} onRowSelectionChange={setRowSelection} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(rowSelection, null, 2)}</pre>
      </div>
    </>;
}`,...(S=(d=a.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};const Ve=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","ConditionallyEnabledSelection","RowSelectionActions","DisabledSelectionToolbar","SelectionManagedState"];export{h as ConditionallyEnabledSelection,f as DisabledBatchRowSelection,u as DisabledSelectAllHeader,b as DisabledSelection,j as DisabledSelectionToolbar,n as RowSelectionActions,x as SelectAllModeAll,D as SelectAllModePage,o as SelectionEnabled,a as SelectionManagedState,w as SingleRowSelection,Ve as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Selection.stories-BK_5dwa8.js.map
