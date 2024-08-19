import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as R}from"./index-CTjT7uj6.js";import{a as A}from"./chunk-454WOBUV-DWuJqIWT.js";import{D as S}from"./Datatable-Rvbe6Dwv.js";import{T as e}from"./Template-CP6s3hoX.js";import{B as c}from"./Button-vDRI25at.js";import"./v4-D8aEg3BZ.js";import"./useLogger-Cd66DVRc.js";import"./space-1LtLrmuu.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./menuElements-CDUISt4p.js";import"./Icon-4JNizDXH.js";import"./index-DFvsTZbx.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./tslib.es6-BLYux4pC.js";import"./Surface-DpLLkhSd.js";import"./flex.types-BrkCVx66.js";import"./prop-DG2n0FAQ.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./Text-DTP2ysh1.js";import"./DSThemeOverride-BduN1ykm.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-DwI_GXhF.js";import"./Paragraph-4LRW5eCl.js";import"./spacing.types-C9Yu1wmA.js";import"./Skeleton-Mij27U1S.js";import"./Tooltip-D-FMcIGF.js";import"./FloatingContext-C7r7lnEb.js";import"./CloseButton-Ddazfl7Y.js";import"./sortable.esm-CWiKwvcN.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./Pill-3kaa-68-.js";import"./PillRemoveButton-CS7bxu8m.js";import"./PillLabel-CLRUhFaA.js";import"./gt-mgGmHlKl.js";import"./BaseButton-D1TUSAxp.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-CJrCb2wC.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";const De={title:"components/DatatableV2/Selection",component:S,parameters:{screenshot:{skip:!0}}},o=e.bind({});o.args={...e.args,getRowId:r=>r.id};o.parameters={screenshot:{skip:!1}};const g=e.bind({});g.args={...e.args,enableRowSelection:!1};g.parameters={screenshot:{skip:!1}};const b=e.bind({});b.args={...e.args,enableBatchRowSelection:!1};b.parameters={screenshot:{skip:!1}};const f=e.bind({});f.args={...o.args,enableMultiRowSelection:!1};f.parameters={screenshot:{skip:!1}};const w=e.bind({});w.args={...o.args,enableSelectAll:!1};w.parameters={screenshot:{skip:!1}};const x=e.bind({});x.args={...o.args,selectAllMode:"page"};const D=e.bind({});D.args={...o.args,selectAllMode:"all"};const u=e.bind({});u.args={...e.args,enableRowSelection:r=>r.original.organization.grade!=="A"};u.parameters={screenshot:{skip:!1}};const h=e.bind({});h.args={...o.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:r,table:i})=>t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"outline",onClick:()=>{A("selectedRows")(r)},children:"Show selected rows"}),t.jsx(c,{onClick:()=>{var a;(a=i.setRowSelection)==null||a.call(i,()=>i.options.data.reduce((n,l)=>l.organization.grade==="F"?{...n,[l.id]:!0}:n,{}))},children:"Select all F grades"})]})};h.parameters={screenshot:{skip:!1}};const s=r=>{const[i,a]=R.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return t.jsxs(t.Fragment,{children:[t.jsx(S,{state:{rowSelection:i},onRowSelectionChange:a,...r}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};s.args=o.args;var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const je=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","ConditionallyEnabledSelection","RowSelectionActions","SelectionManagedState"];export{u as ConditionallyEnabledSelection,b as DisabledBatchRowSelection,w as DisabledSelectAllHeader,g as DisabledSelection,h as RowSelectionActions,D as SelectAllModeAll,x as SelectAllModePage,o as SelectionEnabled,s as SelectionManagedState,f as SingleRowSelection,je as __namedExportsOrder,De as default};
