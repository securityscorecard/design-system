import{j as r}from"./jsx-runtime-CfatFE5O.js";import{B as o,a as e}from"./Breadcrumbs-BWNnBeEm.js";import{M as _}from"./react-router-dom-CPhVUpqL.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-BLQl-HhB.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-DbwGX_n3.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./useLogger-DJ74rrw8.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-BIwFR3nb.js";import"./DropdownMenu-Fwn9MDl_.js";import"./require-router-link-BWnqzLA_.js";import"./ControlledDropdown-DszYVnBj.js";import"./index-DAjbAeX4.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-CJ5emATz.js";import"./noop-CdhuOQYG.js";import"./mergeRefs-D2M2BR1V.js";import"./index-LR-EjM-6.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./index-1T5Tqafd.js";import"./prop-DM27i_5J.js";import"./Inline.enums-Cb7IYB12.js";import"./Cluster-Czc8yUGw.js";import"./FloatingContext-Iczo9egI.js";import"./Dropdown-e_OK7VtK.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-fVh6sz_B.js";import"./isFunction-DJTGGMd1.js";import"./pluck-B7TtmBCE.js";import"./isNull-D8kYROfs.js";import"./index-m5gpRUr1.js";import"./index-Z8dOtpW2.js";import"./isNotNull-CGNDL-_A.js";import"./isNilOrEmpty-DmYx1NWM.js";import"./isNil-qfCNC9HL.js";import"./isNotNilOrEmpty-D7UMwbhS.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";const yr={title:"components/Breadcrumbs",component:o,subcomponents:{BreadcrumbItem:e},decorators:[R=>r.jsx(_,{children:R()})],parameters:{docs:{description:{component:"\n```jsx\nimport { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';\n```\n\nThe BreadcrumbItem is a link that should help the user to get to the place in the navigation\nstructure where he needs to go. It accepts all props you can give to a link, but makesure to\ngive it `to` or `href` attributes. Otherwise the link would be inactive plain text.\nThe current page shouldn't have these defined though."}}}},t=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"#",children:"Parent"}),r.jsx(e,{href:"",children:"Current"})]});t.parameters={screenshot:{skip:!0}};const n=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"",children:"Current"})]}),a=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"#",children:"Parent4"}),r.jsx(e,{href:"#",children:"Parent5"}),r.jsx(e,{href:"",children:"Current"})]}),c=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"",children:"Current"})]}),m=()=>r.jsxs(o,{children:[r.jsx(e,{to:"/root",children:"Root"}),r.jsx(e,{to:"/parent1",children:"Parent1"}),r.jsx(e,{to:"/parent2",children:"Parent2"}),r.jsx(e,{to:"/parent3",children:"Parent3"}),r.jsx(e,{to:"/parent4",children:"Parent4"}),r.jsx(e,{to:"/parent5",children:"Parent5"}),r.jsx(e,{to:"",children:"Current"})]});m.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"WithTwoItems"};a.__docgenInfo={description:"",methods:[],displayName:"WithDropdown"};c.__docgenInfo={description:"",methods:[],displayName:"OnLimit"};m.__docgenInfo={description:"",methods:[],displayName:"WithRelativeLinks"};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,B,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var l,f,x;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#" iconName="cog">
        Root
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var j,P,g;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem to="/root">Root</BreadcrumbItem>
      <BreadcrumbItem to="/parent1">Parent1</BreadcrumbItem>
      <BreadcrumbItem to="/parent2">Parent2</BreadcrumbItem>
      <BreadcrumbItem to="/parent3">Parent3</BreadcrumbItem>
      <BreadcrumbItem to="/parent4">Parent4</BreadcrumbItem>
      <BreadcrumbItem to="/parent5">Parent5</BreadcrumbItem>
      <BreadcrumbItem to="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(g=(P=m.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const Cr=["Playground","WithTwoItems","WithDropdown","OnLimit","WithRelativeLinks"];export{c as OnLimit,t as Playground,a as WithDropdown,m as WithRelativeLinks,n as WithTwoItems,Cr as __namedExportsOrder,yr as default};
//# sourceMappingURL=Breadcrumbs.stories-CZ9Q-x-J.js.map
