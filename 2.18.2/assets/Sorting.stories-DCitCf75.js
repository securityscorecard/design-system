import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as d}from"./index-ClcD9ViR.js";import{D as s}from"./Datatable-DtaDWt6D.js";import{a as c,T as t,c as S}from"./argTypes-C6VlO4PI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DBZ2KDnn.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-Crf4_jmR.js";import"./SelectionToolbar-rqfbzbK3.js";import"./index-U7rWlclI.js";import"./Icon-Bik-9-TI.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-OY6jNnnn.js";import"./index-DV1EfWHB.js";import"./Padbox-DhupY5rO.js";import"./index-BeSa3Tgc.js";import"./prop-gA1VFyoz.js";import"./Inline-C2UKE3FB.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./index-CEsunubm.js";import"./Button-DXrAv08R.js";import"./components-ByF3bco0.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-DXLRFKFi.js";import"./en-US-CvthOZgl.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-fYiYssr0.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DPdGIrHZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-CgUcX5gD.js";import"./Tooltip-ClqziCrA.js";import"./FloatingContext-f-xOTKfR.js";import"./index-Cp8NM1Nv.js";import"./CloseButton-DA0CgUBz.js";import"./index-BVsc1NiC.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BiQ22au2.js";import"./Pill-BY7T1u-8.js";import"./PillRemoveButton-BWcc2Zae.js";const vt={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}},argTypes:c},u=t.bind({});u.args=t.args;const b=t.bind({});b.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const f=t.bind({});f.args={...t.args,columns:[...S,{accessorKey:"country",header:"Country",enableSorting:!1}]};const D=t.bind({});D.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const yt=["SortingEnabled","DisabledSorting","EnabledMultiSorting","DisabledSortingForColumn","DisabledSortingRemoval","InitialSorting","SortingManagedState"];export{b as DisabledSorting,f as DisabledSortingForColumn,D as DisabledSortingRemoval,m as EnabledMultiSorting,p as InitialSorting,u as SortingEnabled,o as SortingManagedState,yt as __namedExportsOrder,vt as default};
//# sourceMappingURL=Sorting.stories-DCitCf75.js.map
