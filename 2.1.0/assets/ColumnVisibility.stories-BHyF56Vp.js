import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{D as e}from"./Datatable-CUEcp2i-.js";import{T as i,c as b}from"./Template-DdIjOLPX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-D4I9buOf.js";import"./space-B9R18Mwn.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./menuElements-HsU9kfTS.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./tslib.es6-BLYux4pC.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./Text-C1sA-5dj.js";import"./pluck-CCxX0LJC.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-BBpl-5uo.js";import"./Paragraph-DD2XWiUD.js";import"./spacing.types-QRY9P8Qv.js";import"./Skeleton-BoUdprqo.js";import"./Tooltip-BAcCN_rY.js";import"./FloatingContext-nGTlWJDF.js";import"./Button-CKE-X77u.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-DLDOSOzx.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./CloseButton-CuyKiBXp.js";import"./sortable.esm-DD_xGjRI.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./Pill-CwiyUbuD.js";import"./PillRemoveButton-MEfwPxhp.js";import"./PillLabel-DJNPzf-i.js";import"./gt-CQw4D1xu.js";const di={title:"components/DatatableV2/ColumnVisibility",component:e,parameters:{screenshot:{skip:!0}}},c=i.bind({});c.args=i.args;const d=i.bind({});d.args={...i.args,enableHiding:!1};const y=i.bind({});y.args={...i.args,columns:[...b,{accessorKey:"country",header:"Country",enableHiding:!1}]};const l=i.bind({});l.args={...i.args,initialState:{columnVisibility:{score:!1}}};l.parameters={screenshot:{skip:!1}};const o=a=>{const[r,p]=u.useState({score:!1});return t.jsxs(t.Fragment,{children:[t.jsx(e,{state:{columnVisibility:r},onColumnVisibilityChange:p,...a}),t.jsxs("div",{children:[t.jsx("strong",{children:"Debug:"}),t.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})};o.args=i.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnVisibilityManagedState"};var s,m,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const yi=["ColumnVisibilityEnabled","DisabledColumnVisibility","DisabledColumnVisibilityForColumn","InitialColumnVisibility","ColumnVisibilityManagedState"];export{c as ColumnVisibilityEnabled,o as ColumnVisibilityManagedState,d as DisabledColumnVisibility,y as DisabledColumnVisibilityForColumn,l as InitialColumnVisibility,yi as __namedExportsOrder,di as default};
