import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{D as p}from"./Datatable-Do1PH7db.js";import{T as r}from"./Template-Bpwl2rmC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-CeNh0Atc.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-DByWM6Xn.js";import"./index-CVyJwDg7.js";import"./components-CbPQWOa6.js";import"./index-CodEEOgp.js";import"./Icon-CCnW0-hW.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./prop-C6y-wj7q.js";import"./useSafeTranslation-D7WzaY-Y.js";import"./en-US-wky7Us-i.js";import"./menuElements-D-k4ZSDa.js";import"./index-BgZRODrj.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./index-C7NqzKU7.js";import"./Inline.enums-Dhd6yXoj.js";import"./Cluster-BeQ8Kfla.js";import"./index-P638_79P.js";import"./isFunction-BAANUD86.js";import"./useLocalStorageState-UxkHlwiN.js";import"./useContainerQuery-BBrWYpwZ.js";import"./Skeleton-Da9ufsch.js";import"./Button-Dg7nljpV.js";import"./index-DV_F2C3q.js";import"./index-8mm8G_Ti.js";import"./Tooltip-BJMkqIJX.js";import"./FloatingContext-Cr2ZSxO5.js";import"./index-C-7vAVjh.js";import"./CloseButton-DlurLOPy.js";import"./index-D6mk1gl9.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./sortable.esm-CHKde6Px.js";import"./modifiers.esm-CDknwSvc.js";import"./index-xJp9Kd2E.js";import"./index-0yDBA2bi.js";import"./Pill-DStO1nhW.js";import"./PillRemoveButton-FRuT25Tz.js";const fr={title:"components/DatatableV2/ColumnOrdering",component:p,parameters:{screenshot:{skip:!0}}},c=r.bind({});c.args={...r.args};const O=r.bind({});O.args={...r.args,enableColumnOrdering:!1};const C=r.bind({});C.args={...r.args,initialState:{columnPinning:{left:["score"]}}};const b=r.bind({});b.args={...r.args,enableRowSelection:!0};const d=r.bind({});d.args={...r.args,enableRowSelection:!0,initialState:{columnOrder:["detectionMethod","score","organization.name","organization.domain"]}};d.parameters={screenshot:{skip:!1}};const t=l=>{const[n,g]=u.useState(["detectionMethod","score","organization.name","organization.domain"]);return o.jsxs(o.Fragment,{children:[o.jsx(p,{state:{columnOrder:n},onColumnOrderChange:g,...l}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify(n,null,2)})]})]})};t.args=r.args;var e,i,m,a,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(['detectionMethod', 'score', 'organization.name', 'organization.domain']);
  return <>
      <Datatable state={{
      columnOrder
    }} onColumnOrderChange={setColumnOrder} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnOrder, null, 2)}</pre>
      </div>
    </>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:"For managed state all columns has to be provided as a default value",...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.description}}};const xr=["ColumnOrderingEnabled","DisabledColumnOrdering","ColumnOrderingWithPinnedColumns","ColumnOrderingWithSelection","InitialColumnOrdering","ColumnOrderingManagedState"];export{c as ColumnOrderingEnabled,t as ColumnOrderingManagedState,C as ColumnOrderingWithPinnedColumns,b as ColumnOrderingWithSelection,O as DisabledColumnOrdering,d as InitialColumnOrdering,xr as __namedExportsOrder,fr as default};
//# sourceMappingURL=ColumnOrdering.stories-BdH9a7Ua.js.map
