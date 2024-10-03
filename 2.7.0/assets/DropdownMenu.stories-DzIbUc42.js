import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{q as w}from"./styled-components.browser.esm-CkXiwQaI.js";import{D as n}from"./DropdownMenu-DbF9O1_v.js";import{s as y}from"./actions-CjRqORAj.js";import"./index-BKmXk_rQ.js";import{p as I}from"./index-DxUWnzkt.js";import"./index-CpvTOCP5.js";import{M}from"./react-router-dom-B-6Qbk9C.js";import{I as s}from"./Inline.enums-ylSCK-eY.js";import{B as W}from"./Button-zezd41gU.js";import{P as v}from"./Padbox-BddxODtE.js";import"./index-CTjT7uj6.js";import"./index-C7IrpltL.js";import"./require-router-link-DlQZJzFx.js";import"./useLogger-DkXBJUOu.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./ControlledDropdown-D5P7lTfE.js";import"./index-BkSsiqLF.js";import"./index-DBr7mztH.js";import"./isFunction-CFc181nM.js";import"./prop-DvyrXmKl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Dk3S8c2F.js";import"./noop-BOAHQqnZ.js";import"./mergeRefs-ezcFPe0V.js";import"./FloatingContext-Bsi7uTe6.js";import"./Dropdown-CC4930SS.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DUZoCKfF.js";import"./isNull-CSZRs2Kd.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./Icon-Dgg-0yKJ.js";import"./index-BRV0Se7Z.js";import"./index-B9dTXKMz.js";import"./Tooltip-BUCNYsMe.js";import"./index-DHcn_niD.js";import"./index-Bdemn2ub.js";import"./Cluster-Ca0XQ4y2.js";import"./index-DX0BMr00.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./index-Bw8dvKh9.js";import"./isNotNull-4bNLWuBe.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],I(100)),Wr={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const vr=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,p as Placements,i as WithCustomWidth,vr as __namedExportsOrder,Wr as default};
//# sourceMappingURL=DropdownMenu.stories-DzIbUc42.js.map
