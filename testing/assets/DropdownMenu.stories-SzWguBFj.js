import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{s as I,h as b}from"./space-BY85GhUc.js";import{D as t}from"./DropdownMenu-D0YxwLyR.js";import{s as w}from"./actions-CSnHhUwL.js";import"./Surface-CvF-S7pg.js";import{P as M}from"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import{I as p}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{B as W}from"./Button-CgUf0TwU.js";import{M as _}from"./react-router-dom-BO_MR9e_.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./action.types-CSW_hKjS.js";import"./require-router-link-EREg1Bbm.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./Dropdown-D5JdNZs1.js";import"./index-DFvsTZbx.js";import"./ControlledDropdown-Dffl62Db.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Mi4Xn43N.js";import"./noop-CRTpovv1.js";import"./mergeRefs-BUQjZHg5.js";import"./FloatingContext-CTHtuARV.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Text-CQej7zPl.js";import"./isFunction-DKkHXutz.js";import"./pluck-CGJirjHu.js";import"./prop-Cw0eZkJ_.js";import"./isNotNull-D2Wrs3cn.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Icon-DSPfH_8v.js";import"./Tooltip-Dgp4eCqw.js";import"./flex.types-BrkCVx66.js";import"./BaseButton-Bl-0NeNF.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-b5BYo8Sk.js";import"./tiny-invariant-CopsF_GD.js";const a=I(M).withConfig({displayName:"DropdownMenustories__Wrapper",componentId:"sc-azd8ei-0"})(["margin-bottom:",";"],b(100)),ye={title:"components/DropdownMenu",component:t,parameters:{docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}},decorators:[r=>e.jsx(_,{children:r()})],argTypes:{actions:{table:{type:{summary:"ActionKinds[]",detail:`| {
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
  </>`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const De=["Default","OpenedOnInit","WithCustomWidth","Placements"];export{o as Default,n as OpenedOnInit,i as Placements,s as WithCustomWidth,De as __namedExportsOrder,ye as default};
