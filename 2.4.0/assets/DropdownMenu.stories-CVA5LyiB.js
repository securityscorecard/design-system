import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{s as w}from"./styled-components.browser.esm-xOyuSOjK.js";import{D as n}from"./DropdownMenu-Drpuxu38.js";import{s as y}from"./actions-BMPRRnn_.js";import"./index-BfLWfhlY.js";import{f as I}from"./index-DzAsfYvZ.js";import"./index-Jlc1e3xA.js";import{M}from"./react-router-dom-DzSrOeqf.js";import{B as W}from"./Button-CsnXVoMf.js";import{I as s}from"./Inline-Cg9jPAAE.js";import{P as v}from"./Padbox-ugjOsLS7.js";import"./index-CTjT7uj6.js";import"./index-C7IrpltL.js";import"./require-router-link-CwDqj7nA.js";import"./useLogger-IjsioYUQ.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./ControlledDropdown-BGC5q1fr.js";import"./index-4aEyDaIq.js";import"./index-uyLpYamY.js";import"./isFunction-BtTpAfvx.js";import"./prop-CePbk9wh.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./noop-00w40azb.js";import"./mergeRefs-CmEt7Zz_.js";import"./FloatingContext-Bsi7uTe6.js";import"./Dropdown-Ck_eSPas.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BiHv5IcS.js";import"./index-BRV0Se7Z.js";import"./isNull-CdyG0a3O.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Icon-DCTBW-fe.js";import"./index-D09y0Wvv.js";import"./Tooltip-DVd80gkH.js";import"./index-BawZj8GX.js";import"./index-BcSnSfQB.js";import"./flex.types-BrkCVx66.js";import"./Cluster-HoiIP47J.js";import"./index-Cq8-NMvO.js";import"./index-DNjKNlmW.js";import"./Spinner-qeMxdFSS.js";import"./index-DoZinuF4.js";import"./isNotNull-DhaqNAj6.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],I(100)),vr={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  }`}}},defaultIsOpen:{control:"boolean"},placement:{options:["bottom","bottom-left","bottom-right"],control:{type:"select"}}}},o=e=>r.jsx(s,{justify:"center",children:r.jsx(n,{...e,children:r.jsx(W,{children:"Handler"})})});o.args={actions:y};o.parameters={screenshot:{skip:!0}};const t=e=>r.jsx(s,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});t.args={...o.args,defaultIsOpen:!0};const i=e=>r.jsx(s,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});i.args={...t.args,paneWidth:300};const p=e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{children:r.jsx(s,{justify:"center",children:r.jsx(n,{...e,placement:"bottom",children:"Bottom"})})}),r.jsx(a,{children:r.jsx(s,{justify:"flex-start",children:r.jsx(n,{...e,placement:"bottom-start",children:"Left"})})}),r.jsx(a,{children:r.jsx(s,{justify:"flex-end",children:r.jsx(n,{...e,placement:"bottom-end",children:"Right"})})})]});p.args={...t.args,paneWidth:300};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>
      <Button>Handler</Button>
    </DropdownMenu>
  </Inline>`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,g,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Inline justify="center">
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
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Or=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,p as Placements,i as WithCustomWidth,Or as __namedExportsOrder,vr as default};
//# sourceMappingURL=DropdownMenu.stories-CVA5LyiB.js.map
