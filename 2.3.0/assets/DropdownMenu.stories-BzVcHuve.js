import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{s as w,f as y}from"./index-C1FT5pTy.js";import{D as n}from"./DropdownMenu-DQZG4Af1.js";import{s as I}from"./actions-Bt0J8UlD.js";import"./index-B-CeicLq.js";import"./index-CRIkvV_Z.js";import{M}from"./react-router-dom-C502PAO1.js";import{B as W}from"./Button-vvMvQQ6x.js";import{I as s}from"./Inline-CVToOADQ.js";import{P as v}from"./Padbox-DLePQqEe.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./action.types-CSW_hKjS.js";import"./require-router-link-CVseUTa3.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./ControlledDropdown-CJDS15aa.js";import"./index-Cp1GzN7Y.js";import"./index-uyLpYamY.js";import"./isFunction-C9e5dGMJ.js";import"./prop-B-t2KTqT.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./noop-DhoWYSxJ.js";import"./mergeRefs-DsscGrvh.js";import"./FloatingContext-Bsi7uTe6.js";import"./Dropdown-D09r0X2S.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DXjoAeTX.js";import"./isNull-BieT8P3B.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Icon-Ctrq9sYp.js";import"./index-D5bPmNji.js";import"./Tooltip-BQzvuGg4.js";import"./index--b1-fK-k.js";import"./index-DPJ-F9hp.js";import"./flex.types-BrkCVx66.js";import"./Cluster-DZ_NL6w4.js";import"./Button.enums-mm-W5TJM.js";import"./index-BmyUtPWu.js";import"./spacing.types-C9Yu1wmA.js";import"./index-C95nPCzM.js";import"./Spinner-BvaTOgAJ.js";import"./index-Cvv1KPJl.js";import"./isNotNull-D58Nipgn.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],y(100)),kr={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  }`}}},defaultIsOpen:{control:"boolean"},placement:{options:["bottom","bottom-left","bottom-right"],control:{type:"select"}}}},o=e=>r.jsx(s,{justify:"center",children:r.jsx(n,{...e,children:r.jsx(W,{children:"Handler"})})});o.args={actions:I};o.parameters={screenshot:{skip:!0}};const t=e=>r.jsx(s,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});t.args={...o.args,defaultIsOpen:!0};const i=e=>r.jsx(s,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});i.args={...t.args,paneWidth:300};const p=e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{children:r.jsx(s,{justify:"center",children:r.jsx(n,{...e,placement:"bottom",children:"Bottom"})})}),r.jsx(a,{children:r.jsx(s,{justify:"flex-start",children:r.jsx(n,{...e,placement:"bottom-start",children:"Left"})})}),r.jsx(a,{children:r.jsx(s,{justify:"flex-end",children:r.jsx(n,{...e,placement:"bottom-end",children:"Right"})})})]});p.args={...t.args,paneWidth:300};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Inline justify="center">
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
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Br=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,p as Placements,i as WithCustomWidth,Br as __namedExportsOrder,kr as default};
//# sourceMappingURL=DropdownMenu.stories-BzVcHuve.js.map
