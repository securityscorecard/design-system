import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as W}from"./index-CTjT7uj6.js";import{a}from"./chunk-454WOBUV-DWuJqIWT.js";import{T as v}from"./TreeView-BjULKhqu.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as X}from"./Stack-D3Wl5zWT.js";import{I as R}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{T as C}from"./Text-DTP2ysh1.js";import{H as Y}from"./HexGrade-DJwZMWDw.js";import{f as s}from"./index-xJp9Kd2E.js";import"./v4-D8aEg3BZ.js";import"./sortable.esm-CWiKwvcN.js";import"./index-DIVhMF2i.js";import"./space-1LtLrmuu.js";import"./Badge-BMh3jQcX.js";import"./index-BRV0Se7Z.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./index-DFvsTZbx.js";import"./menuElements-CDUISt4p.js";import"./Icon-4JNizDXH.js";import"./index-C7IrpltL.js";import"./useLogger-Cd66DVRc.js";import"./tslib.es6-BLYux4pC.js";import"./flex.types-BrkCVx66.js";import"./spacing.types-C9Yu1wmA.js";import"./defaultTo-C2m3wrMk.js";s.seed(42);const Z=()=>({id:s.string.uuid(),domain:s.internet.domainName(),name:s.company.name(),grade:s.helpers.arrayElement(["A","B","C","D","F"]),industry:s.helpers.arrayElement(["Technology","Manufacturing","Information","Non Profit"])}),$=e=>{const r=[];for(let o=0;o<e;o++)r.push(o);return r};function ee(...e){const r=(o=0)=>{const i=e[o];return $(i).map(()=>({...Z(),subRows:e[o+1]?r(o+1):void 0}))};return r()}const He={title:"components/TreeView",component:v,args:{data:ee(1,2,2),renderPrimaryContent:({name:e})=>n.jsx(C,{isBold:!0,children:e})}},t={args:{renderPrimaryContent:({name:e,industry:r})=>n.jsxs(X,{children:[n.jsx(C,{isBold:!0,children:e}),n.jsx(C,{variant:"secondary",children:r})]}),renderSecondaryContent:({domain:e,grade:r})=>n.jsxs(R,{stretch:"start",style:{width:"30ch"},children:[n.jsx(C,{variant:"secondary",children:e}),n.jsx(R,{align:"center",gap:"sm",children:n.jsx(Y,{grade:r,size:24})})]}),onDragEnd:a("onDragEnd"),onRowClick:a("onRowClick"),rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:e})=>r=>a("row action")({row:e,event:r}),isDisabled:({row:e})=>e.grade==="D"},{iconName:"times",label:"Archive item",onClick:({row:e})=>r=>a("row action")({row:e,event:r})},null,{iconName:"ban",label:"Remove",isDestructive:!0,onClick:({row:e})=>r=>a("row action")({row:e,event:r})}]},render:function(r){const[o,i]=W.useState("");return n.jsx(v,{activeRowId:o,onActiveRowIdChange:i,...r})},parameters:{screenshot:{skip:!0}}};var y,b;const c={args:{renderPrimaryContent:(y=t.args)==null?void 0:y.renderPrimaryContent,renderSecondaryContent:(b=t.args)==null?void 0:b.renderSecondaryContent}},l={args:{isSortable:!1}},m={args:{isCollapsible:!1}},d={args:{isSortable:!1,isCollapsible:!1}};var h;const p={args:{rowActions:(h=t.args)==null?void 0:h.rowActions}},g={args:{rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:e})=>r=>a("row action")({row:e,event:r}),isDisabled:({row:e})=>e.grade==="D"},{iconName:"times",label:"Remove",isDestructive:!0,onClick:({row:e})=>r=>a("row action")({row:e,event:r})}]}},w={args:{onRowClick:a("onRowClick")},render:function(r){const[o,i]=W.useState("");return n.jsx(v,{activeRowId:o,onActiveRowIdChange:i,...r})}},u={args:{...c.args,rowHeight:100}};var k,S,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    renderPrimaryContent: ({
      name,
      industry
    }) => <Stack>
        <Text isBold>{name}</Text>
        <Text variant="secondary">{industry}</Text>
      </Stack>,
    renderSecondaryContent: ({
      domain,
      grade
    }) => <Inline stretch="start" style={{
      width: '30ch'
    }}>
        <Text variant="secondary">{domain}</Text>
        <Inline align="center" gap="sm">
          <HexGrade grade={grade} size={24} />
        </Inline>
      </Inline>,
    onDragEnd: action('onDragEnd'),
    onRowClick: action('onRowClick'),
    rowActions: [{
      iconName: 'eye-slash',
      label: 'Make private',
      onClick: ({
        row
      }) => event => action('row action')({
        row,
        event
      }),
      isDisabled: ({
        row
      }) => row.grade === 'D'
    }, {
      iconName: 'times',
      label: 'Archive item',
      onClick: ({
        row
      }) => event => action('row action')({
        row,
        event
      })
    }, null, {
      iconName: 'ban',
      label: 'Remove',
      isDestructive: true,
      onClick: ({
        row
      }) => event => action('row action')({
        row,
        event
      })
    }]
  },
  render: function Render(args) {
    const [activeRow, setActiveRow] = useState('');
    return <TreeView activeRowId={activeRow} onActiveRowIdChange={setActiveRow} {...args} />;
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var A,D,x;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    renderPrimaryContent: Playground.args?.renderPrimaryContent,
    renderSecondaryContent: Playground.args?.renderSecondaryContent
  }
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var I,T,P;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isSortable: false
  }
}`,...(P=(T=l.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var j,N,E;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isCollapsible: false
  }
}`,...(E=(N=m.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var H,M,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isSortable: false,
    isCollapsible: false
  }
}`,...(B=(M=d.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var V,O,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    rowActions: Playground.args?.rowActions
  }
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var G,_,F;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    rowActions: [{
      iconName: 'eye-slash',
      label: 'Make private',
      onClick: ({
        row
      }) => event => action('row action')({
        row,
        event
      }),
      isDisabled: ({
        row
      }) => row.grade === 'D'
    }, {
      iconName: 'times',
      label: 'Remove',
      isDestructive: true,
      onClick: ({
        row
      }) => event => action('row action')({
        row,
        event
      })
    }]
  }
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,q,J;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    onRowClick: action('onRowClick')
  },
  render: function Render(args) {
    const [activeRow, setActiveRow] = useState('');
    return <TreeView activeRowId={activeRow} onActiveRowIdChange={setActiveRow} {...args} />;
  }
}`,...(J=(q=w.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...ContentRenderers.args,
    rowHeight: 100
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Me=["Playground","ContentRenderers","DisabledSorting","DisabledCollapsing","DisabledSortingAndCollapsing","RowActionsMenu","TwoRowActions","RowOnClickEnabled","CustomRowHeight"];export{c as ContentRenderers,u as CustomRowHeight,m as DisabledCollapsing,l as DisabledSorting,d as DisabledSortingAndCollapsing,t as Playground,p as RowActionsMenu,w as RowOnClickEnabled,g as TwoRowActions,Me as __namedExportsOrder,He as default};
