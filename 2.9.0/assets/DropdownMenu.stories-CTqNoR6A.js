import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{q as w}from"./styled-components.browser.esm-CkXiwQaI.js";import{D as n}from"./DropdownMenu-VLPFMCSC.js";import{s as y}from"./actions-CATKiKqw.js";import"./index-UyBh8dRE.js";import{p as I}from"./index-CrKmLWnD.js";import"./index-CXM7Ka2k.js";import{M}from"./react-router-dom-B-6Qbk9C.js";import{I as i}from"./Inline.enums-B2crYYgS.js";import{B as W}from"./Button-DQJ9phVp.js";import{P as v}from"./Padbox-C9-4IgMJ.js";import"./index-CTjT7uj6.js";import"./index-C7IrpltL.js";import"./require-router-link-DQ1KljjI.js";import"./useLogger-BUVDCBjf.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-BD6Crr4Z.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./ControlledDropdown-D41atIZb.js";import"./index-CbtSpW2v.js";import"./constants-l-41uwkI.js";import"./index-CajKmcpa.js";import"./space.enums-Dn0LioXL.js";import"./isFunction-ueona4bl.js";import"./prop-DthtuCpe.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Dk3S8c2F.js";import"./noop-C6yK0wcs.js";import"./mergeRefs-BdafcyrG.js";import"./FloatingContext-Bsi7uTe6.js";import"./Dropdown-B1rFsuCE.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BILJD4ib.js";import"./isNull-Bs93IvUT.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./Icon-D2McLPVS.js";import"./index-BRV0Se7Z.js";import"./index-CBtqyOjV.js";import"./Tooltip-DGd2AJs9.js";import"./index-dJwzZQsw.js";import"./index-BFpmPCJD.js";import"./Cluster-_Y3KuvTf.js";import"./index-DqOLbV5v.js";import"./index-DdGAx8Lu.js";import"./Spinner-BZdjEwis.js";import"./index-Do5YN-r4.js";import"./isNotNull-beo8WoSn.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],I(100)),Br={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Cr=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,p as Placements,s as WithCustomWidth,Cr as __namedExportsOrder,Br as default};
//# sourceMappingURL=DropdownMenu.stories-CTqNoR6A.js.map
