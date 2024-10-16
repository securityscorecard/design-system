import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{D as s}from"./Datatable-x8kdJ1cZ.js";import{T as t,c}from"./Template-B5fQhUoo.js";import"./useLogger-BUVDCBjf.js";import"./index-CrKmLWnD.js";import"./constants-l-41uwkI.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-BD6Crr4Z.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-fQ2bMmdG.js";import"./index-C7IrpltL.js";import"./components-CEAZ8Niy.js";import"./index-Do5YN-r4.js";import"./Icon-D2McLPVS.js";import"./index-CajKmcpa.js";import"./index-BRV0Se7Z.js";import"./index-BpwILXOI.js";import"./Spinner-D0DPxq7I.js";import"./prop-DthtuCpe.js";import"./useSafeTranslation-DO0eKWrX.js";import"./en-US-CaArnYpN.js";import"./menuElements-DX7GXJyU.js";import"./tslib.es6-BLYux4pC.js";import"./index-CtMHODJ2.js";import"./index-CXHcUZNU.js";import"./Padbox-C9-4IgMJ.js";import"./index-BFpmPCJD.js";import"./Inline.enums-B2crYYgS.js";import"./Cluster-_Y3KuvTf.js";import"./index-BILJD4ib.js";import"./isFunction-ueona4bl.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Skeleton-BWW78PHt.js";import"./Button-CvHd8Azw.js";import"./index--l7ovmQ3.js";import"./index-BjRuNwra.js";import"./Tooltip-BMm0xgGu.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-BvVXaNp9.js";import"./CloseButton-CvqEfgDP.js";import"./index-CbtSpW2v.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-D6R3DHC6.js";import"./Pill-BDiUppEK.js";import"./PillRemoveButton-COTxmups.js";const ht={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}}},S=t.bind({});S.args=t.args;const u=t.bind({});u.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const b=t.bind({});b.args={...t.args,columns:[...c,{accessorKey:"country",header:"Country",enableSorting:!1}]};const f=t.bind({});f.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const jt=["SortingEnabled","DisabledSorting","EnabledMultiSorting","DisabledSortingForColumn","DisabledSortingRemoval","InitialSorting","SortingManagedState"];export{u as DisabledSorting,b as DisabledSortingForColumn,f as DisabledSortingRemoval,m as EnabledMultiSorting,p as InitialSorting,S as SortingEnabled,o as SortingManagedState,jt as __namedExportsOrder,ht as default};
//# sourceMappingURL=Sorting.stories-B8AAI6XS.js.map
