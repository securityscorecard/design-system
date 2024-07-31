import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{D as u}from"./Datatable-CUEcp2i-.js";import{T as n,c as l}from"./Template-DdIjOLPX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-D4I9buOf.js";import"./space-B9R18Mwn.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./menuElements-HsU9kfTS.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./tslib.es6-BLYux4pC.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./Text-C1sA-5dj.js";import"./pluck-CCxX0LJC.js";import"./useLocalStorageState-CgPcEN2x.js";import"./useContainerQuery-BBpl-5uo.js";import"./Paragraph-DD2XWiUD.js";import"./spacing.types-QRY9P8Qv.js";import"./Skeleton-BoUdprqo.js";import"./Tooltip-BAcCN_rY.js";import"./FloatingContext-nGTlWJDF.js";import"./Button-CKE-X77u.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-DLDOSOzx.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./CloseButton-CuyKiBXp.js";import"./sortable.esm-DD_xGjRI.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./Pill-CwiyUbuD.js";import"./PillRemoveButton-MEfwPxhp.js";import"./PillLabel-DJNPzf-i.js";import"./gt-CQw4D1xu.js";const hn={title:"components/DatatableV2/ColumnResizing",component:u,parameters:{screenshot:{skip:!0}}},S=n.bind({});S.args=n.args;const b=n.bind({});b.args={...n.args,enableColumnResizing:!1};const f=n.bind({});f.args={...n.args,columns:[...l,{accessorKey:"country",header:"Country",enableResizing:!1}]};const p=n.bind({});p.args={...n.args,defaultColumn:{minSize:200,size:250,maxSize:350}};p.parameters={screenshot:{skip:!1}};const h=n.bind({});h.args={...n.args,columns:[{accessorKey:"country",header:"Country",size:400},...l]};const c=n.bind({});c.args={...n.args,initialState:{columnSizing:{"organization.name":300}}};c.parameters={screenshot:{skip:!1}};const o=g=>{const[e,d]=r.useState({"organization.name":300}),t=r.useRef(null),z=C=>{t.current&&window.cancelAnimationFrame(t.current),t.current=window.requestAnimationFrame(()=>{d(C)})};return i.jsxs(i.Fragment,{children:[i.jsx(u,{state:{columnSizing:e},onColumnSizingChange:z,...g}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(e,null,2)})]})]})};o.args=n.args;o.__docgenInfo={description:"",methods:[],displayName:"ColumnResizingManagedState"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({
    'organization.name': 300
  });
  const timeout = useRef<number | null>(null);

  // We recommend to debounce the column resizing due to high performance impact
  const debouncedSetColumnSizing: OnChangeFn<ColumnSizingState> = params => {
    if (timeout.current) {
      window.cancelAnimationFrame(timeout.current);
    }
    timeout.current = window.requestAnimationFrame(() => {
      setColumnSizing(params);
    });
  };
  return <>
      <Datatable state={{
      columnSizing
    }} onColumnSizingChange={debouncedSetColumnSizing} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnSizing, null, 2)}</pre>
      </div>
    </>;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Rn=["ColumnResizingEnabled","DisabledColumnResizing","DisabledColumnResizingForColumn","CustomDefaultColumnsWidth","SpecificSizingForColumn","InitialColumnResizing","ColumnResizingManagedState"];export{S as ColumnResizingEnabled,o as ColumnResizingManagedState,p as CustomDefaultColumnsWidth,b as DisabledColumnResizing,f as DisabledColumnResizingForColumn,c as InitialColumnResizing,h as SpecificSizingForColumn,Rn as __namedExportsOrder,hn as default};
