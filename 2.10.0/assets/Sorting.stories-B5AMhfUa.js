import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{D as s}from"./Datatable-BrBXLni9.js";import{T as t,c}from"./Template-D_XUIyO4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-DZJuabeR.js";import"./index-BQWFrAEB.js";import"./constants-CHqWh-7J.js";import"./isNotUndefined-DxARNfZG.js";import"./_isObject-BZZHHNGj.js";import"./slice-DUYrgxkR.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./IconButton-ClFQ-YsQ.js";import"./index-CVyJwDg7.js";import"./components-B6h-HAd3.js";import"./index-CA8igt89.js";import"./Icon-OPJ4_-kw.js";import"./index-BsP7FXMl.js";import"./index-Dk74W0Oi.js";import"./index-B2Sxccu3.js";import"./Spinner-h6IgF5Nn.js";import"./prop-qecTCRZr.js";import"./useSafeTranslation-BCAAUwPD.js";import"./en-US-CDWxVyPr.js";import"./menuElements-DEtjLdXS.js";import"./index-0COcc321.js";import"./index-CKrVqi-N.js";import"./Padbox-DzmU9-lr.js";import"./index-iY2rO5S8.js";import"./Inline.enums-6YASdLRa.js";import"./Cluster-CjJ089XP.js";import"./index-B9rA5P-U.js";import"./pluck-D_zsPq3H.js";import"./useLocalStorageState-D2NPfI6N.js";import"./useContainerQuery-Cnf3zHpB.js";import"./Skeleton-lY1Z7Pv8.js";import"./Button-Y7NUWBaW.js";import"./index-DmfpuQjN.js";import"./index-BR1zTT6O.js";import"./Tooltip-HRInPKQC.js";import"./FloatingContext-CQFaKq2L.js";import"./index-DRQu5xX2.js";import"./CloseButton-DldEAqTZ.js";import"./index-BC9WaV5B.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-DfZLU8Or.js";import"./Pill-LFTbJjnh.js";import"./PillRemoveButton-tEWM886E.js";const jt={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}}},S=t.bind({});S.args=t.args;const u=t.bind({});u.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const b=t.bind({});b.args={...t.args,columns:[...c,{accessorKey:"country",header:"Country",enableSorting:!1}]};const f=t.bind({});f.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;o.__docgenInfo={description:"",methods:[],displayName:"SortingManagedState"};var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [sorting, setSorting] = useState<SortingState>([{
    id: 'organization.name',
    desc: true
  }]);
  return <>
      <Datatable state={{
      sorting
    }} manualSorting onSortingChange={setSorting} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(sorting, null, 2)}</pre>
      </div>
    </>;
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const Et=["SortingEnabled","DisabledSorting","EnabledMultiSorting","DisabledSortingForColumn","DisabledSortingRemoval","InitialSorting","SortingManagedState"];export{u as DisabledSorting,b as DisabledSortingForColumn,f as DisabledSortingRemoval,m as EnabledMultiSorting,p as InitialSorting,S as SortingEnabled,o as SortingManagedState,Et as __namedExportsOrder,jt as default};
//# sourceMappingURL=Sorting.stories-B5AMhfUa.js.map
