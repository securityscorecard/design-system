import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{D as p}from"./Datatable-P8Y2Y9Ij.js";import{a as c,T as r}from"./argTypes-iCxNF9BD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DBZ2KDnn.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-C--2iuF_.js";import"./SelectionToolbar-BINqiXqH.js";import"./index-U7rWlclI.js";import"./Icon-Bik-9-TI.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-DCGZYvlw.js";import"./index-DAJCpEFs.js";import"./Padbox-Bcaafd_-.js";import"./index-BXr0x_2P.js";import"./prop-gA1VFyoz.js";import"./Inline-mI01sxMS.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-MjzvoWTP.js";import"./index-CEsunubm.js";import"./Button-DXrAv08R.js";import"./components-ByF3bco0.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-DXLRFKFi.js";import"./en-US-CvthOZgl.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-fYiYssr0.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DPdGIrHZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-sYUuX_NM.js";import"./Tooltip-C-Mt1qrC.js";import"./FloatingContext-f-xOTKfR.js";import"./index-N9f_LLGc.js";import"./CloseButton-DdYwDmKz.js";import"./index-BVsc1NiC.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-QNM6kbOt.js";import"./Pill-BKjcDxHu.js";import"./PillRemoveButton-DMOLskL5.js";const jr={title:"components/DatatableV2/ColumnOrdering",component:p,parameters:{screenshot:{skip:!0}},argTypes:c},O=r.bind({});O.args={...r.args};const C=r.bind({});C.args={...r.args,enableColumnOrdering:!1};const b=r.bind({});b.args={...r.args,initialState:{columnPinning:{left:["score"]}}};const h=r.bind({});h.args={...r.args,enableRowSelection:!0};const d=r.bind({});d.args={...r.args,enableRowSelection:!0,initialState:{columnOrder:["detectionMethod","score","organization.name","organization.domain"]}};d.parameters={screenshot:{skip:!1}};const t=l=>{const[n,g]=u.useState(["detectionMethod","score","organization.name","organization.domain"]);return o.jsxs(o.Fragment,{children:[o.jsx(p,{state:{columnOrder:n},onColumnOrderChange:g,...l}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};t.args=r.args;var e,i,m,a,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:"For managed state all columns has to be provided as a default value",...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.description}}};const zr=["ColumnOrderingEnabled","DisabledColumnOrdering","ColumnOrderingWithPinnedColumns","ColumnOrderingWithSelection","InitialColumnOrdering","ColumnOrderingManagedState"];export{O as ColumnOrderingEnabled,t as ColumnOrderingManagedState,b as ColumnOrderingWithPinnedColumns,h as ColumnOrderingWithSelection,C as DisabledColumnOrdering,d as InitialColumnOrdering,zr as __namedExportsOrder,jr as default};
//# sourceMappingURL=ColumnOrdering.stories-r_NkrnA_.js.map
