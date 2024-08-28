import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{B as o,a as e}from"./Breadcrumbs-C9xEKcaQ.js";import{M as _}from"./react-router-dom-CJ3P1gOI.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./index-DzoB_gWM.js";import"./index-C7IrpltL.js";import"./index-t-vajJ9r.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./useLogger-BNYGJgyi.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./index-CrNv8B7n.js";import"./DropdownMenu-DQ-xJ-_f.js";import"./action.types-CSW_hKjS.js";import"./require-router-link-DIC5Nlq-.js";import"./ControlledDropdown-CThOzJqs.js";import"./index-beAa1auE.js";import"./checkCircleSolid-D_DFWg_A.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-CyPC4-G8.js";import"./noop-zq4Ga5XN.js";import"./mergeRefs-B_qfXDGV.js";import"./index-CoMEwqFC.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-DZoBl2Wq.js";import"./flex.types-BrkCVx66.js";import"./prop-BgpcU4fO.js";import"./Inline-DPdVYO7t.js";import"./Cluster-DaqHgnAc.js";import"./FloatingContext-CyxsIqHp.js";import"./Dropdown-C8el54wh.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-C_SwQgDv.js";import"./isFunction-BiBuFaUE.js";import"./pluck-XHiJ2W8k.js";import"./isNull-Ddx7qw_y.js";import"./pick-DnFF07PT.js";import"./index-CNVgbpgL.js";import"./index-BBBQ7b2m.js";import"./isNotNull-DFX8Jk9A.js";import"./isNilOrEmpty-Cdj5d-0t.js";import"./isNil-B57hcqoE.js";import"./isNotNilOrEmpty-C6qSabrU.js";import"./tiny-invariant-CopsF_GD.js";const Rr={title:"components/Breadcrumbs",component:o,subcomponents:{BreadcrumbItem:e},decorators:[R=>r.jsx(_,{children:R()})],parameters:{docs:{description:{component:"\n```jsx\nimport { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';\n```\n\nThe BreadcrumbItem is a link that should help the user to get to the place in the navigation\nstructure where he needs to go. It accepts all props you can give to a link, but makesure to\ngive it `to` or `href` attributes. Otherwise the link would be inactive plain text.\nThe current page shouldn't have these defined though."}}}},t=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"#",children:"Parent"}),r.jsx(e,{href:"",children:"Current"})]});t.parameters={screenshot:{skip:!0}};const n=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",children:"Root"}),r.jsx(e,{href:"",children:"Current"})]}),a=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"#",children:"Parent4"}),r.jsx(e,{href:"#",children:"Parent5"}),r.jsx(e,{href:"",children:"Current"})]}),c=()=>r.jsxs(o,{children:[r.jsx(e,{href:"#",iconName:"cog",children:"Root"}),r.jsx(e,{href:"#",children:"Parent1"}),r.jsx(e,{href:"#",children:"Parent2"}),r.jsx(e,{href:"#",children:"Parent3"}),r.jsx(e,{href:"",children:"Current"})]}),m=()=>r.jsxs(o,{children:[r.jsx(e,{to:"/root",children:"Root"}),r.jsx(e,{to:"/parent1",children:"Parent1"}),r.jsx(e,{to:"/parent2",children:"Parent2"}),r.jsx(e,{to:"/parent3",children:"Parent3"}),r.jsx(e,{to:"/parent4",children:"Parent4"}),r.jsx(e,{to:"/parent5",children:"Parent5"}),r.jsx(e,{to:"",children:"Current"})]});m.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"WithTwoItems"};a.__docgenInfo={description:"",methods:[],displayName:"WithDropdown"};c.__docgenInfo={description:"",methods:[],displayName:"OnLimit"};m.__docgenInfo={description:"",methods:[],displayName:"WithRelativeLinks"};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(g=(P=m.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const _r=["Playground","WithTwoItems","WithDropdown","OnLimit","WithRelativeLinks"];export{c as OnLimit,t as Playground,a as WithDropdown,m as WithRelativeLinks,n as WithTwoItems,_r as __namedExportsOrder,Rr as default};
//# sourceMappingURL=Breadcrumbs.stories-XBHXBuAv.js.map
