import{j as r}from"./jsx-runtime-CfatFE5O.js";import{q as w}from"./styled-components.browser.esm-6IU7b-y2.js";import{D as n}from"./DropdownMenu-BHvz55hG.js";import{s as y}from"./actions-B6HrA_Rr.js";import"./index-oFlQPhyy.js";import{p as I}from"./index-Bb-be-4U.js";import"./index-Byb4kuxt.js";import{M}from"./react-router-dom-Cv8hkFnb.js";import{I as i}from"./Inline-Cltm-cZ0.js";import{B as W}from"./Button-BmCQBAEa.js";import{P as v}from"./Padbox-N3VhyJTW.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DxcpycWO.js";import"./require-router-link-eqlYZtvZ.js";import"./useLogger-CCAiqPwH.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-mgEeOsVG.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./ControlledDropdown-CKwvBOd9.js";import"./index-DUaCKjdz.js";import"./constants-CHqWh-7J.js";import"./index-BLQl-HhB.js";import"./space.enums-BgYGmFKv.js";import"./isFunction-CPOop_5p.js";import"./pluck-CtHNMFGn.js";import"./prop-Cr6L5s4M.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-CJ5emATz.js";import"./noop-DoDTf092.js";import"./mergeRefs-BFez88JG.js";import"./FloatingContext-fZ7pv7Rw.js";import"./Dropdown-CM4D0G0X.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DZGjp5Sd.js";import"./isNull-DbDg-2CV.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Icon-CPMGMxZp.js";import"./index-DbwGX_n3.js";import"./index-CrGFM8CV.js";import"./Tooltip-D0kp4-6J.js";import"./index-CUV4n1T7.js";import"./index-DCrzxnwq.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-C-kvLuIZ.js";import"./index-D1Wd6eP-.js";import"./index-BLjwvqnm.js";import"./Spinner-JO64Fpiq.js";import"./index-BFJL67i_.js";import"./isNotNull-BhVAhDfp.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";const a=w(v).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],I(100)),Cr={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  </>`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Rr=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,p as Placements,s as WithCustomWidth,Rr as __namedExportsOrder,Cr as default};
//# sourceMappingURL=DropdownMenu.stories-D257sdzN.js.map
