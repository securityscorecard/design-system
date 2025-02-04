import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as d}from"./index-ClcD9ViR.js";import{D as s}from"./Datatable-CjaWXYzc.js";import{a as c,T as t,c as S}from"./argTypes-fktNeP-w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DJ74rrw8.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-BFKv9stq.js";import"./SelectionToolbar-DQTHdOf8.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-LR-EjM-6.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./index-1T5Tqafd.js";import"./prop-DM27i_5J.js";import"./Inline.enums-Cb7IYB12.js";import"./Cluster-Czc8yUGw.js";import"./index-fVh6sz_B.js";import"./Button-CSEXYzvx.js";import"./components-Dt-mykMV.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./useSafeTranslation-DfC4LVWh.js";import"./en-US-DTEh3xIi.js";import"./pluck-B7TtmBCE.js";import"./IconButton-BIRkG6iG.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-DHnwFTCK.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-Ci5i8ZTJ.js";import"./index-BNloZ91k.js";import"./Tooltip-BnELo82z.js";import"./FloatingContext-Iczo9egI.js";import"./index-UZVzQLwe.js";import"./CloseButton-DsGT12sN.js";import"./index-DAjbAeX4.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-2RA1rzht.js";import"./Pill-Bn4tqEYP.js";import"./PillRemoveButton-DXAxIpoY.js";const yt={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}},argTypes:c},u=t.bind({});u.args=t.args;const b=t.bind({});b.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const f=t.bind({});f.args={...t.args,columns:[...S,{accessorKey:"country",header:"Country",enableSorting:!1}]};const D=t.bind({});D.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;o.__docgenInfo={description:"",methods:[],displayName:"SortingManagedState"};var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const Et=["SortingEnabled","DisabledSorting","EnabledMultiSorting","DisabledSortingForColumn","DisabledSortingRemoval","InitialSorting","SortingManagedState"];export{b as DisabledSorting,f as DisabledSortingForColumn,D as DisabledSortingRemoval,m as EnabledMultiSorting,p as InitialSorting,u as SortingEnabled,o as SortingManagedState,Et as __namedExportsOrder,yt as default};
//# sourceMappingURL=Sorting.stories-BPwVSbSu.js.map
