import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{q as w}from"./styled-components.browser.esm-Dp0SDG1F.js";import{D as n}from"./DropdownMenu-v44gcBZs.js";import{s as y}from"./actions-DGQu4djS.js";import"./index-BeaoyfpW.js";import{p as I}from"./index-DseqSOhp.js";import"./index-B3-hlY5H.js";import{M}from"./react-router-dom-DwuZB8Qo.js";import{I as i}from"./Inline.enums-Cxnp2INc.js";import{B as W}from"./Button-BC5Dtn7q.js";import{P as v}from"./Padbox-D7p1agbO.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CVyJwDg7.js";import"./require-router-link-olwqu5YC.js";import"./useLogger-BV2AIPN5.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./ControlledDropdown-fxtYj6wK.js";import"./index-BAFidxi4.js";import"./constants-C4Oh6sKJ.js";import"./index-CajKmcpa.js";import"./space.enums-FzolKu9U.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-CsuasNJq.js";import"./noop-BL97hhQA.js";import"./mergeRefs-BjwOtpm_.js";import"./FloatingContext-Cr2ZSxO5.js";import"./Dropdown-DivI2ZMZ.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-iel8gM5l.js";import"./isNull-ByzPK5V3.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Icon-BDYv1UkU.js";import"./index-Dk74W0Oi.js";import"./index-BPKnG4rV.js";import"./Tooltip-arLSrIhq.js";import"./index-B9Ea3eoS.js";import"./index-CHCeFjJF.js";import"./Cluster-x6SODxoc.js";import"./index-wSBD82EL.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./index-nYlI4MS_.js";import"./isNotNull-Bi0ik2MG.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],I(100)),Rr={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
    label: string;
    name: string;
    onClick: () => void;
  }
| {
    label: string;
    name: string;
    to: To;
    onClick?: () => void;
    href?: never;
    subActions?: never;
  }
| {
    label: string;
    name: string;
    href: string;
    onClick?: () => void;
    to?: never;
    subActions?: never;
  }`}}},defaultIsOpen:{control:"boolean"},placement:{options:["bottom","bottom-left","bottom-right"],control:{type:"select"}}}},o=e=>r.jsx(i,{justify:"center",children:r.jsx(n,{...e,children:r.jsx(W,{children:"Handler"})})});o.args={actions:y};o.parameters={screenshot:{skip:!0}};const t=e=>r.jsx(i,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});t.args={...o.args,defaultIsOpen:!0};const s=e=>r.jsx(i,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});s.args={...t.args,paneWidth:300};const p=e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{children:r.jsx(i,{justify:"center",children:r.jsx(n,{...e,placement:"bottom",children:"Bottom"})})}),r.jsx(a,{children:r.jsx(i,{justify:"flex-start",children:r.jsx(n,{...e,placement:"bottom-start",children:"Left"})})}),r.jsx(a,{children:r.jsx(i,{justify:"flex-end",children:r.jsx(n,{...e,placement:"bottom-end",children:"Right"})})})]});p.args={...t.args,paneWidth:300};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>
      <Button>Handler</Button>
    </DropdownMenu>
  </Inline>`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,g,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,D,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => <>
    <Wrapper>
      <Inline justify="center">
        <DropdownMenu {...args} placement="bottom">
          Bottom
        </DropdownMenu>
      </Inline>
    </Wrapper>
    <Wrapper>
      <Inline justify="flex-start">
        <DropdownMenu {...args} placement="bottom-start">
          Left
        </DropdownMenu>
      </Inline>
    </Wrapper>
    <Wrapper>
      <Inline justify="flex-end">
        <DropdownMenu {...args} placement="bottom-end">
          Right
        </DropdownMenu>
      </Inline>
    </Wrapper>
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const _r=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,p as Placements,s as WithCustomWidth,_r as __namedExportsOrder,Rr as default};
//# sourceMappingURL=DropdownMenu.stories-gY40v0iq.js.map
