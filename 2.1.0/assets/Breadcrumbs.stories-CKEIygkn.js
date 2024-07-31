import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{B as o,a as e}from"./Breadcrumbs-BaDVl-vf.js";import{M as _}from"./react-router-dom-gpQgZfeg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./space-B9R18Mwn.js";import"./index-CVyJwDg7.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./DropdownMenu-BTsEoeHW.js";import"./action.types-BWYzzYyM.js";import"./require-router-link-m162i5rV.js";import"./Dropdown-1JeK-t7e.js";import"./ControlledDropdown-Dz2bix8N.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-D_VzbQoG.js";import"./noop-Bk6XfTLC.js";import"./mergeRefs-CX7C4EOn.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./FloatingContext-nGTlWJDF.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Text-C1sA-5dj.js";import"./isFunction-Wst0ouRg.js";import"./pluck-CCxX0LJC.js";import"./isNotNull-C0-yEnlk.js";import"./DropdownMenu.types-B7-2fpHE.js";import"./pick-C_tN_oBI.js";import"./Button-CKE-X77u.js";import"./BaseButton-IeCCn510.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./isNilOrEmpty-CUDYV7wl.js";import"./isNil-Bk-kOnIJ.js";import"./isNotNilOrEmpty-Drr4-pBH.js";import"./tiny-invariant-CopsF_GD.js";const jr={title:"components/Breadcrumbs",component:o,subcomponents:{BreadcrumbItem:e},decorators:[R=>r.jsx(_,{children:R()})],parameters:{docs:{description:{component:"\n```jsx\nimport { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';\n```\n\nThe BreadcrumbItem is a link that should help the user to get to the place in the navigation\nstructure where he needs to go. It accepts all props you can give to a link, but makesure to\ngive it `to` or `href` attributes. Otherwise the link would be inactive plain text.\nThe current page shouldn't have these defined though."}}}},t=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"#",children:"Parent"}),r.jsx(e,{href:"",children:"Current"})]});t.parameters={screenshot:{skip:!0}};const n=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"",children:"Current"})]}),a=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"#",children:"Parent4"}),r.jsx(e,{href:"#",children:"Parent5"}),r.jsx(e,{href:"",children:"Current"})]}),c=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"",children:"Current"})]}),m=()=>r.jsxs(o,{children:[r.jsx(e,{to:"/root",children:"Root"}),r.jsx(e,{to:"/parent1",children:"Parent1"}),r.jsx(e,{to:"/parent2",children:"Parent2"}),r.jsx(e,{to:"/parent3",children:"Parent3"}),r.jsx(e,{to:"/parent4",children:"Parent4"}),r.jsx(e,{to:"/parent5",children:"Parent5"}),r.jsx(e,{to:"",children:"Current"})]});m.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"WithTwoItems"};a.__docgenInfo={description:"",methods:[],displayName:"WithDropdown"};c.__docgenInfo={description:"",methods:[],displayName:"OnLimit"};m.__docgenInfo={description:"",methods:[],displayName:"WithRelativeLinks"};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(g=(P=m.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const Pr=["Playground","WithTwoItems","WithDropdown","OnLimit","WithRelativeLinks"];export{c as OnLimit,t as Playground,a as WithDropdown,m as WithRelativeLinks,n as WithTwoItems,Pr as __namedExportsOrder,jr as default};
