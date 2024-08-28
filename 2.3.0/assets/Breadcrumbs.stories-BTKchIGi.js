import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{B as t,a as e}from"./Breadcrumbs-BN8y9wzJ.js";import{M as C}from"./react-router-dom-C502PAO1.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./index-C1FT5pTy.js";import"./index-C7IrpltL.js";import"./index-uyLpYamY.js";import"./index-Cvv1KPJl.js";import"./Icon-Ctrq9sYp.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./index-B6xaUNVy.js";import"./DropdownMenu-DQZG4Af1.js";import"./action.types-CSW_hKjS.js";import"./require-router-link-CVseUTa3.js";import"./ControlledDropdown-CJDS15aa.js";import"./index-Cp1GzN7Y.js";import"./isFunction-C9e5dGMJ.js";import"./prop-B-t2KTqT.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./noop-DhoWYSxJ.js";import"./mergeRefs-DsscGrvh.js";import"./index-B-CeicLq.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./index-DPJ-F9hp.js";import"./flex.types-BrkCVx66.js";import"./Inline-CVToOADQ.js";import"./Cluster-DZ_NL6w4.js";import"./FloatingContext-Bsi7uTe6.js";import"./Dropdown-D09r0X2S.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DXjoAeTX.js";import"./isNull-BieT8P3B.js";import"./pick-DfeMrevl.js";import"./index-ckyeIyvp.js";import"./index-CuVkAW_o.js";import"./isNotNull-D58Nipgn.js";import"./isNilOrEmpty-DczrYfYr.js";import"./isNil-G-meFOE3.js";import"./isNotNilOrEmpty-1xWht62B.js";import"./tiny-invariant-CopsF_GD.js";const gr={title:"components/Breadcrumbs",component:t,subcomponents:{BreadcrumbItem:e},decorators:[R=>r.jsx(C,{children:R()})],parameters:{docs:{description:{component:"\n```jsx\nimport { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';\n```\n\nThe BreadcrumbItem is a link that should help the user to get to the place in the navigation\nstructure where he needs to go. It accepts all props you can give to a link, but makesure to\ngive it `to` or `href` attributes. Otherwise the link would be inactive plain text.\nThe current page shouldn't have these defined though."}}}},m=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"#",children:"Parent"}),r.jsx(e,{href:"",children:"Current"})]});m.parameters={screenshot:{skip:!0}};const a=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"",children:"Current"})]}),n=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"#",children:"Parent4"}),r.jsx(e,{href:"#",children:"Parent5"}),r.jsx(e,{href:"",children:"Current"})]}),c=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"",children:"Current"})]}),o=()=>r.jsxs(t,{children:[r.jsx(e,{to:"/root",children:"Root"}),r.jsx(e,{to:"/parent1",children:"Parent1"}),r.jsx(e,{to:"/parent2",children:"Parent2"}),r.jsx(e,{to:"/parent3",children:"Parent3"}),r.jsx(e,{to:"/parent4",children:"Parent4"}),r.jsx(e,{to:"/parent5",children:"Parent5"}),r.jsx(e,{to:"",children:"Current"})]});o.parameters={screenshot:{skip:!0}};var s,i,d;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(d=(i=m.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,B,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var j,P,g;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Breadcrumbs>
      <BreadcrumbItem to="/root">Root</BreadcrumbItem>
      <BreadcrumbItem to="/parent1">Parent1</BreadcrumbItem>
      <BreadcrumbItem to="/parent2">Parent2</BreadcrumbItem>
      <BreadcrumbItem to="/parent3">Parent3</BreadcrumbItem>
      <BreadcrumbItem to="/parent4">Parent4</BreadcrumbItem>
      <BreadcrumbItem to="/parent5">Parent5</BreadcrumbItem>
      <BreadcrumbItem to="">Current</BreadcrumbItem>
    </Breadcrumbs>;
}`,...(g=(P=o.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const Rr=["Playground","WithTwoItems","WithDropdown","OnLimit","WithRelativeLinks"];export{c as OnLimit,m as Playground,n as WithDropdown,o as WithRelativeLinks,a as WithTwoItems,Rr as __namedExportsOrder,gr as default};
//# sourceMappingURL=Breadcrumbs.stories-BTKchIGi.js.map
