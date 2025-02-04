import{j as t}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{D as e}from"./Datatable-CjaWXYzc.js";import{a as b,T as i,c}from"./argTypes-fktNeP-w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DJ74rrw8.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./PaginationToolbar-BFKv9stq.js";import"./SelectionToolbar-DQTHdOf8.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-LR-EjM-6.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./index-1T5Tqafd.js";import"./prop-DM27i_5J.js";import"./Inline.enums-Cb7IYB12.js";import"./Cluster-Czc8yUGw.js";import"./index-fVh6sz_B.js";import"./Button-CSEXYzvx.js";import"./components-Dt-mykMV.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./useSafeTranslation-DfC4LVWh.js";import"./en-US-DTEh3xIi.js";import"./pluck-B7TtmBCE.js";import"./IconButton-BIRkG6iG.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-DHnwFTCK.js";import"./useLocalStorageState-D2NPfI6N.js";import"./Paragraph-Ci5i8ZTJ.js";import"./index-BNloZ91k.js";import"./Tooltip-BnELo82z.js";import"./FloatingContext-Iczo9egI.js";import"./index-UZVzQLwe.js";import"./CloseButton-DsGT12sN.js";import"./index-DAjbAeX4.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";import"./index-xJp9Kd2E.js";import"./index-2RA1rzht.js";import"./Pill-Bn4tqEYP.js";import"./PillRemoveButton-DXAxIpoY.js";const hi={title:"components/DatatableV2/ColumnVisibility",component:e,parameters:{screenshot:{skip:!0}},argTypes:b},d=i.bind({});d.args=i.args;const y=i.bind({});y.args={...i.args,enableHiding:!1};const g=i.bind({});g.args={...i.args,columns:[...c,{accessorKey:"country",header:"Country",enableHiding:!1}]};const a=i.bind({});a.args={...i.args,initialState:{columnVisibility:{score:!1}}};a.parameters={screenshot:{skip:!1}};const o=l=>{const[r,p]=u.useState({score:!1});return t.jsxs(t.Fragment,{children:[t.jsx(e,{state:{columnVisibility:r},onColumnVisibilityChange:p,...l}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=i.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnVisibilityManagedState"};var s,m,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    score: false
  });
  return <>
      <Datatable state={{
      columnVisibility
    }} onColumnVisibilityChange={setColumnVisibility} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnVisibility, null, 2)}</pre>
      </div>
    </>;
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const xi=["ColumnVisibilityEnabled","DisabledColumnVisibility","DisabledColumnVisibilityForColumn","InitialColumnVisibility","ColumnVisibilityManagedState"];export{d as ColumnVisibilityEnabled,o as ColumnVisibilityManagedState,y as DisabledColumnVisibility,g as DisabledColumnVisibilityForColumn,a as InitialColumnVisibility,xi as __namedExportsOrder,hi as default};
//# sourceMappingURL=ColumnVisibility.stories-BQNjWjhQ.js.map
