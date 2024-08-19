import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{s as w,h as y}from"./space-1LtLrmuu.js";import{D as t}from"./DropdownMenu-0cqzWS2f.js";import{s as I}from"./actions-16IZvRih.js";import"./Surface-DpLLkhSd.js";import{P as M}from"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import{I as s}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{B as W}from"./Button-vDRI25at.js";import{M as v}from"./react-router-dom-Dge5SpE2.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./action.types-CSW_hKjS.js";import"./require-router-link-DHB4GfDh.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./Dropdown-Bz5N8_Wi.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./index-DFvsTZbx.js";import"./ControlledDropdown-D7eVtMr8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Mi4Xn43N.js";import"./noop-CLoMDX4X.js";import"./mergeRefs-sWHjowoU.js";import"./FloatingContext-C7r7lnEb.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Text-DTP2ysh1.js";import"./isNotNull-B1xFkUZ3.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Icon-4JNizDXH.js";import"./Tooltip-D-FMcIGF.js";import"./flex.types-BrkCVx66.js";import"./BaseButton-D1TUSAxp.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./tiny-invariant-CopsF_GD.js";const a=w(M).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],y(100)),xr={title:"components/DropdownMenu",component:t,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(v,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  }`}}},defaultIsOpen:{control:"boolean"},placement:{options:["bottom","bottom-left","bottom-right"],control:{type:"select"}}}},o=e=>r.jsx(s,{justify:"center",children:r.jsx(t,{...e,children:r.jsx(W,{children:"Handler"})})});o.args={actions:I};o.parameters={screenshot:{skip:!0}};const n=e=>r.jsx(s,{justify:"center",children:r.jsx(t,{...e,children:"Dropdown handler"})});n.args={...o.args,defaultIsOpen:!0};const i=e=>r.jsx(s,{justify:"center",children:r.jsx(t,{...e,children:"Dropdown handler"})});i.args={...n.args,paneWidth:300};const p=e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{children:r.jsx(s,{justify:"center",children:r.jsx(t,{...e,placement:"bottom",children:"Bottom"})})}),r.jsx(a,{children:r.jsx(s,{justify:"flex-start",children:r.jsx(t,{...e,placement:"bottom-start",children:"Left"})})}),r.jsx(a,{children:r.jsx(s,{justify:"flex-end",children:r.jsx(t,{...e,placement:"bottom-end",children:"Right"})})})]});p.args={...n.args,paneWidth:300};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>
      <Button>Handler</Button>
    </DropdownMenu>
  </Inline>`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,D,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => <>
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
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Dr=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,n as OpenedOnInit,p as Placements,i as WithCustomWidth,Dr as __namedExportsOrder,xr as default};
