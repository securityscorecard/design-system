import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{B as t,a as e}from"./Breadcrumbs-CKNaXX5y.js";import{M as C}from"./react-router-dom-Dge5SpE2.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./space-1LtLrmuu.js";import"./index-C7IrpltL.js";import"./Icon-4JNizDXH.js";import"./index-DFvsTZbx.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DropdownMenu-0cqzWS2f.js";import"./action.types-CSW_hKjS.js";import"./require-router-link-DHB4GfDh.js";import"./Dropdown-Bz5N8_Wi.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./ControlledDropdown-D7eVtMr8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Mi4Xn43N.js";import"./noop-CLoMDX4X.js";import"./mergeRefs-sWHjowoU.js";import"./Surface-DpLLkhSd.js";import"./flex.types-BrkCVx66.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./FloatingContext-C7r7lnEb.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Text-DTP2ysh1.js";import"./isNotNull-B1xFkUZ3.js";import"./DropdownMenu.types-BiMILHFG.js";import"./pick-Dgh-9MLD.js";import"./Button-vDRI25at.js";import"./BaseButton-D1TUSAxp.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./isNilOrEmpty-MGEuPZ7r.js";import"./isNil-C1Q7XXIj.js";import"./isNotNilOrEmpty-cGK6as13.js";import"./tiny-invariant-CopsF_GD.js";const fr={title:"components/Breadcrumbs",component:t,subcomponents:{BreadcrumbItem:e},decorators:[R=>r.jsx(C,{children:R()})],parameters:{docs:{description:{component:"\n```jsx\nimport { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';\n```\n\nThe BreadcrumbItem is a link that should help the user to get to the place in the navigation\nstructure where he needs to go. It accepts all props you can give to a link, but makesure to\ngive it `to` or `href` attributes. Otherwise the link would be inactive plain text.\nThe current page shouldn't have these defined though."}}}},m=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"#",children:"Parent"}),r.jsx(e,{href:"",children:"Current"})]});m.parameters={screenshot:{skip:!0}};const o=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"",children:"Current"})]}),n=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"#",children:"Parent4"}),r.jsx(e,{href:"#",children:"Parent5"}),r.jsx(e,{href:"",children:"Current"})]}),c=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"",children:"Current"})]}),a=()=>r.jsxs(t,{children:[r.jsx(e,{to:"/root",children:"Root"}),r.jsx(e,{to:"/parent1",children:"Parent1"}),r.jsx(e,{to:"/parent2",children:"Parent2"}),r.jsx(e,{to:"/parent3",children:"Parent3"}),r.jsx(e,{to:"/parent4",children:"Parent4"}),r.jsx(e,{to:"/parent5",children:"Parent5"}),r.jsx(e,{to:"",children:"Current"})]});a.parameters={screenshot:{skip:!0}};var s,i,d;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(d=(i=m.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,B,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#" iconName="cog">
        Root
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent4</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent5</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(I=(B=n.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var l,f,x;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#" iconName="cog">
        Root
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var j,P,g;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem to="/root">Root</BreadcrumbItem>
      <BreadcrumbItem to="/parent1">Parent1</BreadcrumbItem>
      <BreadcrumbItem to="/parent2">Parent2</BreadcrumbItem>
      <BreadcrumbItem to="/parent3">Parent3</BreadcrumbItem>
      <BreadcrumbItem to="/parent4">Parent4</BreadcrumbItem>
      <BreadcrumbItem to="/parent5">Parent5</BreadcrumbItem>
      <BreadcrumbItem to="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(g=(P=a.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const xr=["Playground","WithTwoItems","WithDropdown","OnLimit","WithRelativeLinks"];export{c as OnLimit,m as Playground,n as WithDropdown,a as WithRelativeLinks,o as WithTwoItems,xr as __namedExportsOrder,fr as default};
