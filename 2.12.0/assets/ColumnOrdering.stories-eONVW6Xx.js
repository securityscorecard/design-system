import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{D as p}from"./Datatable-CbbsOUJe.js";import{T as r}from"./Template-BasqZflr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-CA2WAjqk.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-xmN6WiMq.js";import"./menuElements-BYhuLLKf.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-CajKmcpa.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-7cJ2juxC.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-BtznGf-c.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-nLI0iivB.js";import"./Cluster-wkODOmrt.js";import"./index-CpAvg4Hc.js";import"./IconButton-Cd40Tx_f.js";import"./components-BlntQQgH.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./useSafeTranslation-D0Mz5J_m.js";import"./en-US-DVFKJdgt.js";import"./Button-BfyVdgm0.js";import"./pluck-DtgIh6Gb.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-xb3ufhUt.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-CXhmAfct.js";import"./index-Al6z2MCl.js";import"./Tooltip-eZWLkn5m.js";import"./FloatingContext-f-xOTKfR.js";import"./index-8Dw_EHst.js";import"./CloseButton-CJqflljN.js";import"./index-BgMjzImo.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-K53_VLVp.js";import"./Pill-D8fkm8BA.js";import"./PillRemoveButton-D_m0G_lu.js";const xr={title:"components/DatatableV2/ColumnOrdering",component:p,parameters:{screenshot:{skip:!0}}},c=r.bind({});c.args={...r.args};const O=r.bind({});O.args={...r.args,enableColumnOrdering:!1};const C=r.bind({});C.args={...r.args,initialState:{columnPinning:{left:["score"]}}};const b=r.bind({});b.args={...r.args,enableRowSelection:!0};const d=r.bind({});d.args={...r.args,enableRowSelection:!0,initialState:{columnOrder:["detectionMethod","score","organization.name","organization.domain"]}};d.parameters={screenshot:{skip:!1}};const t=l=>{const[n,g]=u.useState(["detectionMethod","score","organization.name","organization.domain"]);return o.jsxs(o.Fragment,{children:[o.jsx(p,{state:{columnOrder:n},onColumnOrderChange:g,...l}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};t.args=r.args;var e,i,m,a,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(['detectionMethod', 'score', 'organization.name', 'organization.domain']);
  return <>
      <Datatable state={{
      columnOrder
    }} onColumnOrderChange={setColumnOrder} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnOrder, null, 2)}</pre>
      </div>
    </>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:"For managed state all columns has to be provided as a default value",...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.description}}};const Dr=["ColumnOrderingEnabled","DisabledColumnOrdering","ColumnOrderingWithPinnedColumns","ColumnOrderingWithSelection","InitialColumnOrdering","ColumnOrderingManagedState"];export{c as ColumnOrderingEnabled,t as ColumnOrderingManagedState,C as ColumnOrderingWithPinnedColumns,b as ColumnOrderingWithSelection,O as DisabledColumnOrdering,d as InitialColumnOrdering,Dr as __namedExportsOrder,xr as default};
//# sourceMappingURL=ColumnOrdering.stories-eONVW6Xx.js.map
