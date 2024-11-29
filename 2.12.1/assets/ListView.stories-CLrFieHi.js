import{j as o}from"./jsx-runtime-CfatFE5O.js";import{f as m}from"./index-xJp9Kd2E.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as i}from"./index-ClcD9ViR.js";import{L as Ve}from"./ListView-CpwIwdJR.js";import"./index-BQsZAX6J.js";import{T as j}from"./index-gVnCqFBT.js";import{B as _e}from"./Button-B9sDvBNH.js";import{I as $e}from"./Inline.enums-Bs7GfXP0.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PaginationToolbar-Zd9oPfo0.js";import"./menuElements-CccNpS3Y.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./_isObject-BZZHHNGj.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-BsP7FXMl.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-CeGY6Ei3.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./slice-a4xO8Rfj.js";import"./useLogger-BVsKAY55.js";import"./Padbox-DPWp-bzC.js";import"./IconButton-C7WqqEmt.js";import"./components-D0pVc94e.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./prop-CVCEMdxf.js";import"./useSafeTranslation-BoMGciE_.js";import"./en-US-DTEh3xIi.js";import"./index-Ozu0POZL.js";import"./pluck-DBmb9H0q.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-RIrARYRh.js";import"./index-BnuP2NC2.js";import"./Cluster-DiauHNp4.js";m.seed(42);const Fe=()=>{const e=[];for(let n=0;n<50;n+=1){const a=m.person.firstName(),u=m.person.lastName();e.push({id:m.string.uuid(),name:`${a} ${u}`,email:m.internet.email({firstName:a.toLowerCase(),lastName:u.toLowerCase(),allowSpecialCharacters:!1})})}return e},L=Fe(),Mn={component:Ve,argTypes:{data:{control:{disable:!0}}},args:{data:L,renderListViewRow:({row:e})=>o.jsxs($e,{align:"baseline","data-id":e.id,gap:"sm",children:[o.jsx(j,{size:"lg",children:e.name}),o.jsx(j,{variant:"subtle",children:e.email})]}),getRowId:e=>e.id},tags:["new"],parameters:{docs:{description:{component:"```jsx\nimport { ListView } from '@securityscorecard/design-system';\n\n<ListView data={[...]} renderListViewRow={({row}) => (...)} />\n```"}}}},w={parameters:{screenshot:{skip:!0}}},c={args:{enablePagination:!0}},S={args:{enablePagination:!1}},d={args:{...c.args,enableRowsPerPage:!0}},b={args:{...d.args,rowsPerPageOptions:[5,10,15]},parameters:{screenshot:{skip:!0}}},R={args:{...c.args,initialState:{pagination:{pageSize:10,pageIndex:1}}}},l={args:{enableRowSelection:!0}},f={args:{enableRowSelection:!1}},C={args:{...l.args,enableMultiRowSelection:!1}},v={args:{enableRowSelection:e=>e.original.email.endsWith("@hotmail.com")}},p={args:{...l.args,initialState:{rowSelection:{"6204f537-1c93-468f-9970-d9a2710fff9c":!0,"a197d02e-642a-4c46-a838-920fdc7f6ee9":!0,"f5d6b48d-95f4-4984-824c-210f6c63400d":!0}}}},P={args:{...p.args,renderRowSelectionActions:({selectedRows:e,table:n})=>o.jsx(_e,{iconStart:{name:"plus"},variant:"subtle",onClick:()=>{t("selectedRows")(e),n.toggleAllRowsSelected(!0)},children:"Select all"})}},h={args:{rowActions:[{iconName:"ban",label:"Remove",onClick:({row:e,table:n})=>a=>t("row action")({row:e,table:n,event:a})}]}},k={args:{rowActions:[{iconName:"eye-slash",label:"Make private",onClick:({row:e,table:n})=>a=>t("row action")({row:e,table:n,event:a})},{iconName:"times",label:"Archive item",onClick:({row:e,table:n})=>a=>t("row action")({row:e,table:n,event:a})},null,{iconName:"ban",label:"Remove",isDestructive:!0,onClick:({row:e,table:n})=>a=>t("row action")({row:e,table:n,event:a})}]}},I={args:{rowActions:[{iconName:"ban",label:"Remove",onClick:({row:e,table:n})=>a=>t("row action")({row:e,table:n,event:a}),isDisabled:({row:e})=>e.original.email.endsWith("@hotmail.com")}]}},g={args:{onRowClick:t("onRowClick")}},A={args:{...g.args,initialState:{activeRowId:"6204f537-1c93-468f-9970-d9a2710fff9c"}}},x={args:{enableRowSelection:!0,state:{isLoading:!0}}},qe=(e,n)=>new Promise(a=>{setTimeout(()=>{a({entries:L.slice(e*n,(e+1)*n),rowCount:L.length})},1500)}),E={render:function(n){const[a,u]=i.useState(""),[r,Be]=i.useState({pageSize:10,pageIndex:0}),[D,Te]=i.useState({}),[N,y]=i.useState(!1),[s,We]=i.useState(null);return i.useEffect(()=>{y(!0),qe(r.pageIndex,r.pageSize).then(Je=>{We(Je),y(!1)})},[r.pageIndex,r.pageSize]),o.jsxs(o.Fragment,{children:[o.jsx(Ve,{...n,data:(s==null?void 0:s.entries)??[],rowCount:s==null?void 0:s.rowCount,state:{activeRowId:a,pagination:r,rowSelection:D,isLoading:N},manualPagination:!0,onActiveRowIdChange:u,onPaginationChange:Be,onRowSelectionChange:Te}),o.jsxs("div",{children:[o.jsx("strong",{children:"Debug:"}),o.jsx("pre",{children:JSON.stringify({activeRowId:a,pagination:r,rowSelection:D,isLoading:N},null,2)})]})]})},args:{onRowClick:t("onRowClick"),enableRowSelection:!0},parameters:{screenshot:{skip:!0}}};var O,z,M;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(M=(z=w.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var V,B,T;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    enablePagination: true
  }
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var W,J,_;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    enablePagination: false
  }
}`,...(_=(J=S.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var $,F,q;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...PaginationEnabled.args,
    enableRowsPerPage: true
  }
}`,...(q=(F=d.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var G,H,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...EnabledRowsPerPage.args,
    rowsPerPageOptions: [5, 10, 15]
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,U,X;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...PaginationEnabled.args,
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 1
      }
    }
  }
}`,...(X=(U=R.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    enableRowSelection: true
  }
}`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    enableRowSelection: false
  }
}`,...(oe=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,re,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...SelectionEnabled.args,
    enableMultiRowSelection: false
  }
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    enableRowSelection: row => row.original.email.endsWith('@hotmail.com')
  }
}`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,de,pe;p.parameters={...p.parameters,docs:{...(me=p.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...SelectionEnabled.args,
    initialState: {
      rowSelection: {
        '6204f537-1c93-468f-9970-d9a2710fff9c': true,
        'a197d02e-642a-4c46-a838-920fdc7f6ee9': true,
        'f5d6b48d-95f4-4984-824c-210f6c63400d': true
      }
    }
  }
}`,...(pe=(de=p.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,ue,we;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...InitialSelection.args,
    renderRowSelectionActions: ({
      selectedRows,
      table
    }) => {
      return <Button iconStart={{
        name: 'plus'
      }} variant="subtle" onClick={() => {
        action('selectedRows')(selectedRows);
        table.toggleAllRowsSelected(true);
      }}>
          Select all
        </Button>;
    }
  }
}`,...(we=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:we.source}}};var Se,be,Re;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    rowActions: [{
      iconName: 'ban',
      label: 'Remove',
      onClick: ({
        row,
        table
      }) => event => action('row action')({
        row,
        table,
        event
      })
    }]
  }
}`,...(Re=(be=h.parameters)==null?void 0:be.docs)==null?void 0:Re.source}}};var fe,Ce,ve;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    rowActions: [{
      iconName: 'eye-slash',
      label: 'Make private',
      onClick: ({
        row,
        table
      }) => event => action('row action')({
        row,
        table,
        event
      })
    }, {
      iconName: 'times',
      label: 'Archive item',
      onClick: ({
        row,
        table
      }) => event => action('row action')({
        row,
        table,
        event
      })
    }, null, {
      iconName: 'ban',
      label: 'Remove',
      isDestructive: true,
      onClick: ({
        row,
        table
      }) => event => action('row action')({
        row,
        table,
        event
      })
    }]
  }
}`,...(ve=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var Pe,he,ke;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    rowActions: [{
      iconName: 'ban',
      label: 'Remove',
      onClick: ({
        row,
        table
      }) => event => action('row action')({
        row,
        table,
        event
      }),
      isDisabled: ({
        row
      }) => row.original.email.endsWith('@hotmail.com')
    }]
  }
}`,...(ke=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var Ie,Ae,xe;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    onRowClick: action('onRowClick')
  }
}`,...(xe=(Ae=g.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};var Ee,Le,De;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...RowOnClickEnabled.args,
    initialState: {
      activeRowId: '6204f537-1c93-468f-9970-d9a2710fff9c'
    }
  }
}`,...(De=(Le=A.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Ne,ye,je;x.parameters={...x.parameters,docs:{...(Ne=x.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    enableRowSelection: true,
    state: {
      isLoading: true
    }
  }
}`,...(je=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var Oe,ze,Me;E.parameters={...E.parameters,docs:{...(Oe=E.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: function Render(args) {
    const [activeRowId, setActiveRowId] = useState('');
    const [pagination, setPagination] = useState({
      pageSize: 10,
      pageIndex: 0
    });
    const [rowSelection, setRowSelection] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Result | null>(null);
    useEffect(() => {
      setIsLoading(true);
      fetchData(pagination.pageIndex, pagination.pageSize).then(result => {
        setData(result);
        setIsLoading(false);
      });
    }, [pagination.pageIndex, pagination.pageSize]);
    return <>
        <ListView {...args} data={data?.entries ?? []} rowCount={data?.rowCount} state={{
        activeRowId,
        pagination,
        rowSelection,
        isLoading
      }} manualPagination onActiveRowIdChange={setActiveRowId} onPaginationChange={setPagination} onRowSelectionChange={setRowSelection} />
        <div>
          <strong>Debug:</strong>
          <pre>
            {JSON.stringify({
            activeRowId,
            pagination,
            rowSelection,
            isLoading
          }, null, 2)}
          </pre>
        </div>
      </>;
  },
  args: {
    onRowClick: action('onRowClick'),
    enableRowSelection: true
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(Me=(ze=E.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};const Vn=["Playground","PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","SelectionEnabled","DisabledSelection","SingleRowSelection","ConditionallyEnabledSelection","InitialSelection","RowSelectionActions","RowActionsEnabled","MultipleRowActions","ConditionallyDisabledRowAction","RowOnClickEnabled","InitialActiveRow","Loading","ManagedState"];export{I as ConditionallyDisabledRowAction,v as ConditionallyEnabledSelection,b as CustomRowsPerPageOptions,S as DisabledPagination,f as DisabledSelection,d as EnabledRowsPerPage,A as InitialActiveRow,R as InitialPagination,p as InitialSelection,x as Loading,E as ManagedState,k as MultipleRowActions,c as PaginationEnabled,w as Playground,h as RowActionsEnabled,g as RowOnClickEnabled,P as RowSelectionActions,l as SelectionEnabled,C as SingleRowSelection,Vn as __namedExportsOrder,Mn as default};
//# sourceMappingURL=ListView.stories-CLrFieHi.js.map
