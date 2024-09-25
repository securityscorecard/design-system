import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{r as g}from"./index-CTjT7uj6.js";import{D as s}from"./Datatable-Bg80pmRP.js";import{T as n,c as u}from"./Template-C6k2Jk7B.js";import"./useLogger-XTihx-r2.js";import"./index-CbknQUej.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./IconButton-CIf20D8_.js";import"./index-C7IrpltL.js";import"./components-9007xTyM.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-CMxDd3Da.js";import"./index-BRV0Se7Z.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./prop-CqBAad6K.js";import"./menuElements-Cq542wPo.js";import"./tslib.es6-BLYux4pC.js";import"./index-DozTNYRt.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./index-NWhnjyl5.js";import"./Inline.enums-DlaUPeKw.js";import"./Cluster-CO02VLRh.js";import"./index-uIya-cWM.js";import"./isFunction-ORz17Qg7.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-DqIcbuCK.js";import"./Button-BJCD1Rvj.js";import"./index-DfX17r-U.js";import"./Skeleton-Bs9JsnhX.js";import"./index-fzZP4z-t.js";import"./Tooltip-D2te_2P5.js";import"./FloatingContext-Bsi7uTe6.js";import"./index-BjcCWu4d.js";import"./CloseButton-DolDE5X-.js";import"./index-DEer-CVx.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-Bi71s_q_.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-xJp9Kd2E.js";import"./index-BlYXqBWM.js";import"./Pill-z8JPj4-3.js";import"./PillRemoveButton-C9oge2rz.js";const cn={title:"components/DatatableV2/ColumnPinning",component:s,parameters:{screenshot:{skip:!0}}},c=n.bind({});c.args=n.args;const d=n.bind({});d.args={...n.args,enableColumnPinning:!1};const P=n.bind({});P.args={...n.args,columns:[...u,{accessorKey:"country",header:"Country",enablePinning:!1}]};const a=n.bind({});a.args={...n.args,initialState:{columnPinning:{left:["score"],right:["detectionMethod"]}},enableRowSelection:!0};a.parameters={screenshot:{skip:!1,viewport:{width:600,height:1600}}};const t=p=>{const[o,l]=g.useState({left:["score"]});return i.jsxs(i.Fragment,{children:[i.jsx(s,{state:{columnPinning:o},enableRowSelection:!0,onColumnPinningChange:l,...p}),i.jsxs("div",{children:[i.jsx("strong",{children:"Debug:"}),i.jsx("pre",{children:JSON.stringify(o,null,2)})]})]})};t.args=n.args;var r,e,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ['score']
  });
  return <>
      <Datatable state={{
      columnPinning
    }} enableRowSelection onColumnPinningChange={setColumnPinning} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnPinning, null, 2)}</pre>
      </div>
    </>;
}`,...(m=(e=t.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const dn=["ColumnPinningEnabled","DisabledColumnPinning","DisabledColumnPinningForColumn","InitialColumnPinning","ColumnPinningManagedState"];export{c as ColumnPinningEnabled,t as ColumnPinningManagedState,d as DisabledColumnPinning,P as DisabledColumnPinningForColumn,a as InitialColumnPinning,dn as __namedExportsOrder,cn as default};
//# sourceMappingURL=ColumnPinning.stories-Yv3VTYdb.js.map
