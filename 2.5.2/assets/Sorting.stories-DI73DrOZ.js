import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import{D as s}from"./Datatable-3soSpFof.js";import{T as t,c}from"./Template-27ha8e3T.js";import"./useLogger-BRbW6gx4.js";import"./index-DT7C7tog.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./IconButton-BfF2jWqp.js";import"./index-C7IrpltL.js";import"./components-BojOatfK.js";import"./index-DCTvgOp1.js";import"./Icon-B9Y_mYIL.js";import"./index-uyLpYamY.js";import"./index-BRV0Se7Z.js";import"./index-CY6BXmKt.js";import"./Spinner-B9l4ubnC.js";import"./prop-BK8rocxd.js";import"./menuElements-_Gw3TffX.js";import"./tslib.es6-BLYux4pC.js";import"./index-DR5XHNKF.js";import"./index-BbaO5Nb4.js";import"./Padbox-DcClumXL.js";import"./index-nwGNxYyI.js";import"./Inline.enums-DB1XHHNB.js";import"./Cluster-C2ONgLd-.js";import"./index-BIxA6EUN.js";import"./isFunction-CoLsl8nV.js";import"./useLocalStorageState-Dk2imEhS.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-DCr2txsF.js";import"./index-CHxAjElR.js";import"./Skeleton-DbMjYdNj.js";import"./index-BS9KBRlz.js";import"./Tooltip-DYvM2b-Z.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-DUZS25O0.js";import"./CloseButton-g4GwbAmN.js";import"./index-CECIl5yl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bgh6Enlk.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-D3MmMaIe.js";import"./Pill-DnpINHG-.js";import"./PillRemoveButton-BrovzdXu.js";const St={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}}},S=t.bind({});S.args=t.args;const u=t.bind({});u.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const b=t.bind({});b.args={...t.args,columns:[...c,{accessorKey:"country",header:"Country",enableSorting:!1}]};const f=t.bind({});f.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ut=["SortingEnabled","DisabledSorting","EnabledMultiSorting","DisabledSortingForColumn","DisabledSortingRemoval","InitialSorting","SortingManagedState"];export{u as DisabledSorting,b as DisabledSortingForColumn,f as DisabledSortingRemoval,m as EnabledMultiSorting,p as InitialSorting,S as SortingEnabled,o as SortingManagedState,ut as __namedExportsOrder,St as default};
//# sourceMappingURL=Sorting.stories-DI73DrOZ.js.map
