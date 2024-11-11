import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{D as s}from"./Datatable-BS1XgIyB.js";import{T as t,c}from"./Template-BTSJr8QW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-BV2AIPN5.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-D3QXQDb_.js";import"./menuElements-DjMq89b2.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./index-BeaoyfpW.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./index-CHCeFjJF.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-Cxnp2INc.js";import"./Cluster-x6SODxoc.js";import"./index-iel8gM5l.js";import"./IconButton-G79IfSWP.js";import"./components-KPog_F_-.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./useSafeTranslation-D7WzaY-Y.js";import"./en-US-wky7Us-i.js";import"./Button-CXTuE1Mx.js";import"./pluck-DtgIh6Gb.js";import"./useContainerQuery-BBrWYpwZ.js";import"./Skeleton-4tPyiyJG.js";import"./useLocalStorageState-UxkHlwiN.js";import"./index-Tm3zSpl6.js";import"./index-BPKnG4rV.js";import"./Tooltip-arLSrIhq.js";import"./FloatingContext-Cr2ZSxO5.js";import"./index-DQm2UIbK.js";import"./CloseButton-DAl5F0pU.js";import"./index-BAFidxi4.js";import"./isFunction-DJDWul57.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-CSt5TfZv.js";import"./Pill-BDPtuStQ.js";import"./PillRemoveButton-BRdfmSP3.js";const Et={title:"components/DatatableV2/Sorting",component:s,parameters:{screenshot:{skip:!0}}},S=t.bind({});S.args=t.args;const u=t.bind({});u.args={...t.args,enableSorting:!1};const m=t.bind({});m.args={...t.args,enableMultiSort:!0};const b=t.bind({});b.args={...t.args,columns:[...c,{accessorKey:"country",header:"Country",enableSorting:!1}]};const f=t.bind({});f.args={...t.args,enableSortingRemoval:!1};const p=t.bind({});p.args={...m.args,initialState:{sorting:[{id:"score",desc:!0},{id:"organization.name",desc:!1}]}};p.parameters={screenshot:{skip:!1}};const o=g=>{const[i,l]=d.useState([{id:"organization.name",desc:!0}]);return r.jsxs(r.Fragment,{children:[r.jsx(s,{state:{sorting:i},manualSorting:!0,onSortingChange:l,...g}),r.jsxs("div",{children:[r.jsx("strong",{children:"Debug:"}),r.jsx("pre",{children:JSON.stringify(i,null,2)})]})]})};o.args=t.args;var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const vt=["SortingEnabled","DisabledSorting","EnabledMultiSorting","DisabledSortingForColumn","DisabledSortingRemoval","InitialSorting","SortingManagedState"];export{u as DisabledSorting,b as DisabledSortingForColumn,f as DisabledSortingRemoval,m as EnabledMultiSorting,p as InitialSorting,S as SortingEnabled,o as SortingManagedState,vt as __namedExportsOrder,Et as default};
//# sourceMappingURL=Sorting.stories-BJ-hOcD3.js.map
