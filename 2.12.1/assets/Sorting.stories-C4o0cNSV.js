import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as d}from"./index-ClcD9ViR.js";import{D as s}from"./Datatable-CDDSyLy0.js";import{T as t,c}from"./Template-htqWTEER.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-CA2WAjqk.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-C12HEWmC.js";import"./menuElements-TWmbXdYk.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-CajKmcpa.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-DJDNSEQh.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-Cl2_DJzs.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-B2f8ESXY.js";import"./Cluster-kZdd8a--.js";import"./index-CpAvg4Hc.js";import"./IconButton-Cd40Tx_f.js";import"./components-BlntQQgH.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./useSafeTranslation-D0Mz5J_m.js";import"./en-US-DVFKJdgt.js";import"./Button-BfyVdgm0.js";import"./pluck-DtgIh6Gb.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-xb3ufhUt.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-CXhmAfct.js";import"./index-BMmtpsT8.js";import"./Tooltip-B2VzhlUD.js";import"./FloatingContext-f-xOTKfR.js";import"./index-Byt0q8Ko.js";import"./CloseButton-OsL_K5I2.js";import"./index-BgMjzImo.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-D4h6pg9F.js";import"./Pill-bUi88xUB.js";import"./PillRemoveButton-BG6YtsQK.js";const jt={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}}},S=t.bind({});S.args=t.args;const u=t.bind({});u.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const b=t.bind({});b.args={...t.args,columns:[...c,{accessorKey:"country",header:"Country",enableSorting:!1}]};const f=t.bind({});f.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=Sorting.stories-C4o0cNSV.js.map
