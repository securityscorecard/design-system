import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{s as I,f as b}from"./index-DzoB_gWM.js";import{D as n}from"./DropdownMenu-DQ-xJ-_f.js";import{s as w}from"./actions-CZRiePnr.js";import"./index-CoMEwqFC.js";import"./index-DRBCZw3W.js";import{M}from"./react-router-dom-CJ3P1gOI.js";import{B as W}from"./Button-fZBZNXZ8.js";import{I as p}from"./Inline-DPdVYO7t.js";import{P as _}from"./Padbox-DIe3-S_j.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./action.types-CSW_hKjS.js";import"./require-router-link-DIC5Nlq-.js";import"./useLogger-BNYGJgyi.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./ControlledDropdown-CThOzJqs.js";import"./index-beAa1auE.js";import"./index-t-vajJ9r.js";import"./checkCircleSolid-D_DFWg_A.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-CyPC4-G8.js";import"./noop-zq4Ga5XN.js";import"./mergeRefs-B_qfXDGV.js";import"./FloatingContext-CyxsIqHp.js";import"./Dropdown-C8el54wh.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-C_SwQgDv.js";import"./isFunction-BiBuFaUE.js";import"./pluck-XHiJ2W8k.js";import"./prop-BgpcU4fO.js";import"./isNull-Ddx7qw_y.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Icon-CHqwD8rK.js";import"./index-Drrfuvzh.js";import"./Tooltip-BT_E9yk_.js";import"./index-BUX0wYnk.js";import"./index-DZoBl2Wq.js";import"./flex.types-BrkCVx66.js";import"./Cluster-DaqHgnAc.js";import"./Button.enums-nGQnPjuG.js";import"./index-PS5U9aCu.js";import"./spacing.types-C9Yu1wmA.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./index-CQl3OQTU.js";import"./isNotNull-DFX8Jk9A.js";import"./tiny-invariant-CopsF_GD.js";const a=I(_).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],b(100)),Cr={title:"components/DropdownMenu",component:n,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[e=>r.jsx(M,{children:e()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  }`}}},defaultIsOpen:{control:"boolean"},placement:{options:["bottom","bottom-left","bottom-right"],control:{type:"select"}}}},o=e=>r.jsx(p,{justify:"center",children:r.jsx(n,{...e,children:r.jsx(W,{children:"Handler"})})});o.args={actions:w};o.parameters={screenshot:{skip:!0}};const t=e=>r.jsx(p,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});t.args={...o.args,defaultIsOpen:!0};const i=e=>r.jsx(p,{justify:"center",children:r.jsx(n,{...e,children:"Dropdown handler"})});i.args={...t.args,paneWidth:300};const s=e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{children:r.jsx(p,{justify:"center",children:r.jsx(n,{...e,placement:"bottom",children:"Bottom"})})}),r.jsx(a,{children:r.jsx(p,{justify:"flex-start",children:r.jsx(n,{...e,placement:"bottom-start",children:"Left"})})}),r.jsx(a,{children:r.jsx(p,{justify:"flex-end",children:r.jsx(n,{...e,placement:"bottom-end",children:"Right"})})})]});s.args={...t.args,paneWidth:300};o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"OpenedOnInit"};i.__docgenInfo={description:"",methods:[],displayName:"WithCustomWidth"};s.__docgenInfo={description:"",methods:[],displayName:"Placements"};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>
      <Button>Handler</Button>
    </DropdownMenu>
  </Inline>`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,y,D;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <>
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
  </>`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const kr=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,t as OpenedOnInit,s as Placements,i as WithCustomWidth,kr as __namedExportsOrder,Cr as default};
//# sourceMappingURL=DropdownMenu.stories-H9-Cv0NL.js.map
