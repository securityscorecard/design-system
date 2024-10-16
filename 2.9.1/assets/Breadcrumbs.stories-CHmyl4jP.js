import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{B as o,a as e}from"./Breadcrumbs-DS9Lt90p.js";import{M as _}from"./react-router-dom-B-6Qbk9C.js";import"./index-CTjT7uj6.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-BsP7FXMl.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-BRV0Se7Z.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./_isObject-BZZHHNGj.js";import"./slice-CaMqkvGm.js";import"./useLogger-BdR6T79l.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-CLnJ_0a7.js";import"./DropdownMenu-JmEi2g_B.js";import"./require-router-link-DZ62ouIa.js";import"./ControlledDropdown-CblElBmb.js";import"./index-BkLmc-fh.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-DTPxGhlC.js";import"./noop-zffMy0O7.js";import"./mergeRefs-Btf8uGkc.js";import"./index-C1kpn3a9.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./index-FmXXYKzo.js";import"./prop-CgNUfcFy.js";import"./Inline.enums-CsgpNQwN.js";import"./Cluster-BnO1HbAj.js";import"./FloatingContext-C7MQzhpq.js";import"./Dropdown-TqG88Dsm.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CUGQ8N4L.js";import"./isFunction-0s348r1S.js";import"./pluck-5zg4Xx5s.js";import"./isNull-T1j7Gx-1.js";import"./index-DAwFNPLM.js";import"./index-Bc3BMMWF.js";import"./isNotNull-C3X32hrc.js";import"./isNilOrEmpty-DryPRcGQ.js";import"./isNil-qfCNC9HL.js";import"./isNotNilOrEmpty-CoFWTRm3.js";import"./tiny-invariant-CopsF_GD.js";const Cr={title:"components/Breadcrumbs",component:o,subcomponents:{BreadcrumbItem:e},decorators:[R=>r.jsx(_,{children:R()})],parameters:{docs:{description:{component:"\n```jsx\nimport { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';\n```\n\nThe BreadcrumbItem is a link that should help the user to get to the place in the navigation\nstructure where he needs to go. It accepts all props you can give to a link, but makesure to\ngive it `to` or `href` attributes. Otherwise the link would be inactive plain text.\nThe current page shouldn't have these defined though."}}}},t=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"#",children:"Parent"}),r.jsx(e,{href:"",children:"Current"})]});t.parameters={screenshot:{skip:!0}};const n=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"",children:"Current"})]}),a=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"#",children:"Parent4"}),r.jsx(e,{href:"#",children:"Parent5"}),r.jsx(e,{href:"",children:"Current"})]}),c=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"",children:"Current"})]}),m=()=>r.jsxs(o,{children:[r.jsx(e,{to:"/root",children:"Root"}),r.jsx(e,{to:"/parent1",children:"Parent1"}),r.jsx(e,{to:"/parent2",children:"Parent2"}),r.jsx(e,{to:"/parent3",children:"Parent3"}),r.jsx(e,{to:"/parent4",children:"Parent4"}),r.jsx(e,{to:"/parent5",children:"Parent5"}),r.jsx(e,{to:"",children:"Current"})]});m.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"WithTwoItems"};a.__docgenInfo={description:"",methods:[],displayName:"WithDropdown"};c.__docgenInfo={description:"",methods:[],displayName:"OnLimit"};m.__docgenInfo={description:"",methods:[],displayName:"WithRelativeLinks"};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(g=(P=m.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const kr=["Playground","WithTwoItems","WithDropdown","OnLimit","WithRelativeLinks"];export{c as OnLimit,t as Playground,a as WithDropdown,m as WithRelativeLinks,n as WithTwoItems,kr as __namedExportsOrder,Cr as default};
//# sourceMappingURL=Breadcrumbs.stories-CHmyl4jP.js.map
