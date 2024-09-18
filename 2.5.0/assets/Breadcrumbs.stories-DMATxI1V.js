import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{B as t,a as e}from"./Breadcrumbs-Dxd9xB_r.js";import{M as C}from"./react-router-dom-DzSrOeqf.js";import"./index-CTjT7uj6.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-C7IrpltL.js";import"./index-uyLpYamY.js";import"./index-Djj9NU8F.js";import"./Icon-DXON6kdo.js";import"./index-BRV0Se7Z.js";import"./index-DT7C7tog.js";import"./useLogger-BRbW6gx4.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./index-Cu2iMPpY.js";import"./DropdownMenu-C8fQ0YoO.js";import"./require-router-link-YRwpEbcA.js";import"./ControlledDropdown-DUET8ZL_.js";import"./index-CECIl5yl.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./noop-XW1TVrX5.js";import"./mergeRefs-CyslAdeM.js";import"./index-Nbgc27zk.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";import"./index-BYvZ6SHf.js";import"./Inline.enums-CsFZc2ym.js";import"./Cluster-BEmEoxq8.js";import"./FloatingContext-Bsi7uTe6.js";import"./Dropdown-CjCOJPmc.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CL66zYYS.js";import"./isNull-DtrhChS2.js";import"./pick-XwXReSlB.js";import"./index-vxnc4v2T.js";import"./index-Ce7N-01r.js";import"./isNotNull-lH5ks6fm.js";import"./isNilOrEmpty-B_sjZgCr.js";import"./isNil-DBsJ5Qwu.js";import"./isNotNilOrEmpty-BN_BASDr.js";import"./tiny-invariant-CopsF_GD.js";const Pr={title:"components/Breadcrumbs",component:t,subcomponents:{BreadcrumbItem:e},decorators:[R=>r.jsx(C,{children:R()})],parameters:{docs:{description:{component:"\n```jsx\nimport { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';\n```\n\nThe BreadcrumbItem is a link that should help the user to get to the place in the navigation\nstructure where he needs to go. It accepts all props you can give to a link, but makesure to\ngive it `to` or `href` attributes. Otherwise the link would be inactive plain text.\nThe current page shouldn't have these defined though."}}}},m=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"#",children:"Parent"}),r.jsx(e,{href:"",children:"Current"})]});m.parameters={screenshot:{skip:!0}};const o=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"",children:"Current"})]}),n=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"#",children:"Parent4"}),r.jsx(e,{href:"#",children:"Parent5"}),r.jsx(e,{href:"",children:"Current"})]}),c=()=>r.jsxs(t,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"",children:"Current"})]}),a=()=>r.jsxs(t,{children:[r.jsx(e,{to:"/root",children:"Root"}),r.jsx(e,{to:"/parent1",children:"Parent1"}),r.jsx(e,{to:"/parent2",children:"Parent2"}),r.jsx(e,{to:"/parent3",children:"Parent3"}),r.jsx(e,{to:"/parent4",children:"Parent4"}),r.jsx(e,{to:"/parent5",children:"Parent5"}),r.jsx(e,{to:"",children:"Current"})]});a.parameters={screenshot:{skip:!0}};var s,i,d;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(g=(P=a.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const gr=["Playground","WithTwoItems","WithDropdown","OnLimit","WithRelativeLinks"];export{c as OnLimit,m as Playground,n as WithDropdown,a as WithRelativeLinks,o as WithTwoItems,gr as __namedExportsOrder,Pr as default};
//# sourceMappingURL=Breadcrumbs.stories-DMATxI1V.js.map
