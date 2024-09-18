import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{s as w}from"./styled-components.browser.esm-xOyuSOjK.js";import{D as n}from"./DropdownMenu-C8fQ0YoO.js";import{s as y}from"./actions-DCOctJRl.js";import"./index-Nbgc27zk.js";import{f as I}from"./index-DT7C7tog.js";import"./index-B6eQQJJF.js";import{M}from"./react-router-dom-DzSrOeqf.js";import{B as W}from"./Button-B3X-5wIP.js";import{I as s}from"./Inline.enums-CsFZc2ym.js";import{P as v}from"./Padbox-DcClumXL.js";import"./index-CTjT7uj6.js";import"./index-C7IrpltL.js";import"./require-router-link-YRwpEbcA.js";import"./useLogger-BRbW6gx4.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./ControlledDropdown-DUET8ZL_.js";import"./index-CECIl5yl.js";import"./index-uyLpYamY.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./noop-XW1TVrX5.js";import"./mergeRefs-CyslAdeM.js";import"./FloatingContext-Bsi7uTe6.js";import"./Dropdown-CjCOJPmc.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CL66zYYS.js";import"./isNull-DtrhChS2.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Icon-DXON6kdo.js";import"./index-BRV0Se7Z.js";import"./index-2-tG497e.js";import"./Tooltip-BMo-rNPf.js";import"./index-B2xEckfB.js";import"./index-BYvZ6SHf.js";import"./Cluster-BEmEoxq8.js";import"./index-Bw8SY8Pa.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./index-Djj9NU8F.js";import"./isNotNull-lH5ks6fm.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],I(100)),Wr={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
//# sourceMappingURL=DropdownMenu.stories-DEK49mxg.js.map
