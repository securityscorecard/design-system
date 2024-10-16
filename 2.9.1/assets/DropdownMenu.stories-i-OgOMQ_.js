import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{q as y}from"./styled-components.browser.esm-CkXiwQaI.js";import{D as n}from"./DropdownMenu-JmEi2g_B.js";import{s as b}from"./actions-BlaJxskd.js";import"./index-C1kpn3a9.js";import{p as w}from"./index-ndiHb6d5.js";import"./index-BnOFXWSX.js";import{M}from"./react-router-dom-B-6Qbk9C.js";import{I as p}from"./Inline.enums-CsgpNQwN.js";import{B as W}from"./Button-D2k_mujA.js";import{P as _}from"./Padbox-DpT_ILeC.js";import"./index-CTjT7uj6.js";import"./index-C7IrpltL.js";import"./require-router-link-DZ62ouIa.js";import"./useLogger-BdR6T79l.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./ControlledDropdown-CblElBmb.js";import"./index-BkLmc-fh.js";import"./constants-CgU6e_L6.js";import"./index-BsP7FXMl.js";import"./space.enums-aJQ33HT_.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-DTPxGhlC.js";import"./noop-zffMy0O7.js";import"./mergeRefs-Btf8uGkc.js";import"./slice-CaMqkvGm.js";import"./FloatingContext-C7MQzhpq.js";import"./Dropdown-TqG88Dsm.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CUGQ8N4L.js";import"./isFunction-0s348r1S.js";import"./pluck-5zg4Xx5s.js";import"./prop-CgNUfcFy.js";import"./isNull-T1j7Gx-1.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./Icon-C0fNGvgr.js";import"./index-BRV0Se7Z.js";import"./index-C2vIIBl6.js";import"./Tooltip-DgJ8Q0u2.js";import"./index-Dc3BNA-e.js";import"./index-FmXXYKzo.js";import"./Cluster-BnO1HbAj.js";import"./index-v1YtIK4i.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./index-BifjOJLR.js";import"./isNotNull-C3X32hrc.js";import"./tiny-invariant-CopsF_GD.js";const a=y(_).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],w(100)),Br={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  }`}}},defaultIsOpen:{control:"boolean"},placement:{options:["bottom","bottom-left","bottom-right"],control:{type:"select"}}}},o=e=>r.jsx(p,{justify:"center",children:r.jsx(n,{...e,children:r.jsx(W,{children:"Handler"})})});o.args={actions:b};o.parameters={screenshot:{skip:!0}};const t=e=>r.jsx(p,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});t.args={...o.args,defaultIsOpen:!0};const i=e=>r.jsx(p,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});i.args={...t.args,paneWidth:300};const s=e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{children:r.jsx(p,{justify:"center",children:r.jsx(n,{...e,placement:"bottom",children:"Bottom"})})}),r.jsx(a,{children:r.jsx(p,{justify:"flex-start",children:r.jsx(n,{...e,placement:"bottom-start",children:"Left"})})}),r.jsx(a,{children:r.jsx(p,{justify:"flex-end",children:r.jsx(n,{...e,placement:"bottom-end",children:"Right"})})})]});s.args={...t.args,paneWidth:300};o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"OpenedOnInit"};i.__docgenInfo={description:"",methods:[],displayName:"WithCustomWidth"};s.__docgenInfo={description:"",methods:[],displayName:"Placements"};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>
      <Button>Handler</Button>
    </DropdownMenu>
  </Inline>`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,D,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <>
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
  </>`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Nr=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,s as Placements,i as WithCustomWidth,Nr as __namedExportsOrder,Br as default};
//# sourceMappingURL=DropdownMenu.stories-i-OgOMQ_.js.map
