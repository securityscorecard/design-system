import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{s as I,h as b}from"./space-B9R18Mwn.js";import{D as t}from"./DropdownMenu-BTsEoeHW.js";import{s as w}from"./actions-BA0s72gd.js";import"./Surface-Cs7tekjF.js";import{P as M}from"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import{I as p}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{B as W}from"./Button-CKE-X77u.js";import{M as _}from"./react-router-dom-gpQgZfeg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./action.types-BWYzzYyM.js";import"./require-router-link-m162i5rV.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./Dropdown-1JeK-t7e.js";import"./index-DFvsTZbx.js";import"./ControlledDropdown-Dz2bix8N.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-D_VzbQoG.js";import"./noop-Bk6XfTLC.js";import"./mergeRefs-CX7C4EOn.js";import"./FloatingContext-nGTlWJDF.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Text-C1sA-5dj.js";import"./isFunction-Wst0ouRg.js";import"./pluck-CCxX0LJC.js";import"./prop-3Huj0iT1.js";import"./isNotNull-C0-yEnlk.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Icon-B7DxM8PH.js";import"./Tooltip-BAcCN_rY.js";import"./flex.types-q2tZp175.js";import"./BaseButton-IeCCn510.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./tiny-invariant-CopsF_GD.js";const a=I(M).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],b(100)),De={title:"components/DropdownMenu",component:t,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[r=>e.jsx(_,{children:r()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  }`}}},defaultIsOpen:{control:"boolean"},placement:{options:["bottom","bottom-left","bottom-right"],control:{type:"select"}}}},o=r=>e.jsx(p,{justify:"center",children:e.jsx(t,{...r,children:e.jsx(W,{children:"Handler"})})});o.args={actions:w};o.parameters={screenshot:{skip:!0}};const n=r=>e.jsx(p,{justify:"center",children:e.jsx(t,{...r,children:"Dropdown handler"})});n.args={...o.args,defaultIsOpen:!0};const s=r=>e.jsx(p,{justify:"center",children:e.jsx(t,{...r,children:"Dropdown handler"})});s.args={...n.args,paneWidth:300};const i=r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx(p,{justify:"center",children:e.jsx(t,{...r,placement:"bottom",children:"Bottom"})})}),e.jsx(a,{children:e.jsx(p,{justify:"flex-start",children:e.jsx(t,{...r,placement:"bottom-start",children:"Left"})})}),e.jsx(a,{children:e.jsx(p,{justify:"flex-end",children:e.jsx(t,{...r,placement:"bottom-end",children:"Right"})})})]});i.args={...n.args,paneWidth:300};o.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"OpenedOnInit"};s.__docgenInfo={description:"",methods:[],displayName:"WithCustomWidth"};i.__docgenInfo={description:"",methods:[],displayName:"Placements"};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>
      <Button>Handler</Button>
    </DropdownMenu>
  </Inline>`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,y,D;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => <>
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
  </>`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const Ie=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,n as OpenedOnInit,i as Placements,s as WithCustomWidth,Ie as __namedExportsOrder,De as default};
