import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as d}from"./index-ClcD9ViR.js";import{D as s}from"./Datatable-OB9_4WG6.js";import{a as c,T as t,c as S}from"./argTypes-D6o1ik4s.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-CCAiqPwH.js";import"./index-Bb-be-4U.js";import"./constants-CHqWh-7J.js";import"./space.enums-BgYGmFKv.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-mgEeOsVG.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-_iGpegM3.js";import"./SelectionToolbar-aGpKim4q.js";import"./index-BFJL67i_.js";import"./Icon-CPMGMxZp.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-D7SQqnNj.js";import"./index-BavDiaxs.js";import"./Padbox-DtjBCBeh.js";import"./index-BP5CQ5vd.js";import"./prop-Cr6L5s4M.js";import"./Inline-DCm6Uasr.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-CHwR_-vL.js";import"./index-DZGjp5Sd.js";import"./Button-CAJpGfaD.js";import"./components-D7PCbKyD.js";import"./index-BLjwvqnm.js";import"./Spinner-JO64Fpiq.js";import"./useSafeTranslation-lb9Y1528.js";import"./en-US-DTEh3xIi.js";import"./pluck-CtHNMFGn.js";import"./IconButton-Dy0o1yF0.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-CQ8N9stu.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-DkqDPL8U.js";import"./index-DzbCdzyB.js";import"./Tooltip-CE2lvoKC.js";import"./FloatingContext-fZ7pv7Rw.js";import"./index-D0owNTDz.js";import"./CloseButton-Czh5s8Ul.js";import"./index-DUaCKjdz.js";import"./isFunction-CPOop_5p.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-BRYn6oPt.js";import"./Pill-CT93ebYx.js";import"./PillRemoveButton-DRT1gp3h.js";const vt={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}},argTypes:c},u=t.bind({});u.args=t.args;const b=t.bind({});b.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const f=t.bind({});f.args={...t.args,columns:[...S,{accessorKey:"country",header:"Country",enableSorting:!1}]};const D=t.bind({});D.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=Sorting.stories-BvMJX2jC.js.map
