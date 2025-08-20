import{j as r}from"./jsx-runtime-BbjHj44Y.js";import{q as w}from"./styled-components.browser.esm-DdpL0cfT.js";import{D as n}from"./DropdownMenu-F193fPmu.js";import{s as y}from"./actions-B4qZLwXq.js";import"./index-CbztWzgW.js";import{p as I}from"./index-BzkxN2vn.js";import"./index-C2LKKbZX.js";import{M}from"./react-router-dom-DxT5PRwj.js";import{I as i}from"./Inline-B7NzMb1T.js";import{B as W}from"./Button-BOsYjBY0.js";import{P as v}from"./Padbox-hEmkrqba.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CVyJwDg7.js";import"./require-router-link-Dx6wPKPd.js";import"./useLogger-O6XA1hQU.js";import"./_isObject-dmcfxmtS.js";import"./DSProvider-CTEb0Eap.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-BnwRPiCA.js";import"./ControlledDropdown-nmi5yu7h.js";import"./index-BGhWSV4h.js";import"./constants-l-41uwkI.js";import"./index-DRm3KUNF.js";import"./space.enums-DGrZwzIk.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-BmgVlhkC.js";import"./useOuterCallback-B34oUwCq.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./FloatingContext-Bl8tl6Fh.js";import"./Dropdown-BecWQt0-.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CP_iG0Cq.js";import"./isNull-C_3YYFwP.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Icon-BGVJaxc5.js";import"./index-Dk74W0Oi.js";import"./index-9a8DLdm9.js";import"./Tooltip-BvUur632.js";import"./index-Bfs0wQhB.js";import"./index-CcmHmzDo.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./index-BlcsDpij.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./index-CmE5poE7.js";import"./isNotNull-CploqAht.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],I(100)),_r={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Pr=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,p as Placements,s as WithCustomWidth,Pr as __namedExportsOrder,_r as default};
//# sourceMappingURL=DropdownMenu.stories-D4Tl1x6d.js.map
