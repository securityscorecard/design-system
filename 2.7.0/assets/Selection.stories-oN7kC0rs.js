import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as R}from"./index-CTjT7uj6.js";import{a as A}from"./chunk-454WOBUV-CM0pFb8Z.js";import{D as S}from"./Datatable-CzjyHGDw.js";import{T as e}from"./Template-D3ii2cNl.js";import"./index-CpvTOCP5.js";import{B as c}from"./Button-zezd41gU.js";import"./v4-CQkTLCs1.js";import"./useLogger-DkXBJUOu.js";import"./index-DxUWnzkt.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./IconButton-B6Vl45Lx.js";import"./index-C7IrpltL.js";import"./components-DLROIErt.js";import"./index-Bw8dvKh9.js";import"./Icon-Dgg-0yKJ.js";import"./index-DBr7mztH.js";import"./index-BRV0Se7Z.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./prop-DvyrXmKl.js";import"./useSafeTranslation-1fjXo0ht.js";import"./en-US-CaArnYpN.js";import"./menuElements-DgYjNEr7.js";import"./tslib.es6-BLYux4pC.js";import"./index-BKmXk_rQ.js";import"./index-DHcn_niD.js";import"./Padbox-BddxODtE.js";import"./index-Bdemn2ub.js";import"./Inline.enums-ylSCK-eY.js";import"./Cluster-Ca0XQ4y2.js";import"./index-DUZoCKfF.js";import"./isFunction-CFc181nM.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Skeleton-B0UUdlXt.js";import"./Button-DuBGIkA_.js";import"./index-DIQfTgIV.js";import"./index-B9dTXKMz.js";import"./Tooltip-BUCNYsMe.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-CCbSLEx8.js";import"./CloseButton-CZwz8uav.js";import"./index-BkSsiqLF.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-CSYfEf6y.js";import"./Pill-DgBp7Jh3.js";import"./PillRemoveButton-VkzxbQzP.js";import"./index-DX0BMr00.js";import"./require-router-link-DlQZJzFx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-CSZRs2Kd.js";import"./isNotNull-4bNLWuBe.js";import"./noop-BOAHQqnZ.js";const He={title:"components/DatatableV2/Selection",component:S,parameters:{screenshot:{skip:!0}}},o=e.bind({});o.args={...e.args,getRowId:r=>r.id};o.parameters={screenshot:{skip:!1}};const g=e.bind({});g.args={...e.args,enableRowSelection:!1};g.parameters={screenshot:{skip:!1}};const b=e.bind({});b.args={...e.args,enableBatchRowSelection:!1};b.parameters={screenshot:{skip:!1}};const f=e.bind({});f.args={...o.args,enableMultiRowSelection:!1};f.parameters={screenshot:{skip:!1}};const w=e.bind({});w.args={...o.args,enableSelectAll:!1};w.parameters={screenshot:{skip:!1}};const x=e.bind({});x.args={...o.args,selectAllMode:"page"};const D=e.bind({});D.args={...o.args,selectAllMode:"all"};const u=e.bind({});u.args={...e.args,enableRowSelection:r=>r.original.organization.grade!=="A"};u.parameters={screenshot:{skip:!1}};const h=e.bind({});h.args={...o.args,initialState:{rowSelection:{"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0}},renderRowSelectionActions:({selectedRows:r,table:i})=>t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"outline",onClick:()=>{A("selectedRows")(r)},children:"Show selected rows"}),t.jsx(c,{onClick:()=>{var a;(a=i.setRowSelection)==null||a.call(i,()=>i.options.data.reduce((n,l)=>l.organization.grade==="F"?{...n,[l.id]:!0}:n,{}))},children:"Select all F grades"})]})};h.parameters={screenshot:{skip:!1}};const s=r=>{const[i,a]=R.useState({"e23968c3-3f19-44b2-aee9-c4a1d7c326ee":!0,"eb43a2df-8884-43f1-bfe8-eea3545bbded":!0});return t.jsxs(t.Fragment,{children:[t.jsx(S,{state:{rowSelection:i},onRowSelectionChange:a,...r}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};s.args=o.args;var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Je=["SelectionEnabled","DisabledSelection","DisabledBatchRowSelection","SingleRowSelection","DisabledSelectAllHeader","SelectAllModePage","SelectAllModeAll","ConditionallyEnabledSelection","RowSelectionActions","SelectionManagedState"];export{u as ConditionallyEnabledSelection,b as DisabledBatchRowSelection,w as DisabledSelectAllHeader,g as DisabledSelection,h as RowSelectionActions,D as SelectAllModeAll,x as SelectAllModePage,o as SelectionEnabled,s as SelectionManagedState,f as SingleRowSelection,Je as __namedExportsOrder,He as default};
//# sourceMappingURL=Selection.stories-oN7kC0rs.js.map
