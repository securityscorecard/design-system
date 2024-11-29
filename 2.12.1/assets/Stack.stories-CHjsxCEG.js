import{j as e}from"./jsx-runtime-CfatFE5O.js";import"./index-X2Iu_k3Q.js";import{B as r}from"./Box-BRxAUuNb.js";import{S as v}from"./index-BnuP2NC2.js";import{B as k}from"./Button-D7wMjAqv.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cjy7s_Lq.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-BsP7FXMl.js";import"./index-0K9MvtJv.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-BkfyGi5e.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BVsKAY55.js";import"./index-CeGY6Ei3.js";import"./slice-a4xO8Rfj.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./prop-CVCEMdxf.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-BQsZAX6J.js";import"./index-Ozu0POZL.js";import"./Padbox-DPWp-bzC.js";import"./Inline.enums-Bs7GfXP0.js";import"./Cluster-DiauHNp4.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";const ue={title:"layout/primitives/Stack",component:v,argTypes:{gap:{description:"Whitespace between each child of the Stack",options:["none","xxs","xs","sm","md","mdPlus","lg","lgPlus","xl","xlPlus","xxl","half-x","1x","2x","3x","4x","6x","8x","12x","16x","24x","32x"],control:{type:"select"},table:{type:{summary:"'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdPlus' | 'lg' | 'lgPlus' | 'xl' | 'xlPlus' | 'xxl' | 'half-x' | '1x' | '2x' | '3x' | '4x' | '6x' | '8x' | '12x' | '16x' | '24x' | '32x'"},defaultValue:{summary:"'none'"}}},justify:{description:"Horizontal alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"},defaultValue:{summary:"'stretch'"}}},align:{description:"Vertical alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"}}},splitAt:{description:"Index of element after which the Stack is splitted. Leave `undefined` for no splitting",control:{type:"number"},table:{type:{summary:"number"}}},isRecursive:{description:"Should apply gap recursively (on nested levels)",control:{type:"boolean"},table:{type:{summary:"boolean"}}}}},t={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(k,{color:"primary",variant:"solid",children:"Click me gently"}),e.jsx(r,{})]})},parameters:{screenshot:{skip:!0}}},s={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})}},o={args:{gap:"xl",isRecursive:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsx(r,{})]})]}),e.jsx(r,{})]})}},n={args:{gap:"sm",splitAt:2,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})},decorators:[b=>e.jsx("div",{style:{height:"20rem"},children:b()})]},a={args:{...t.args,justify:"center"}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    gap: 'lg',
    children: <>
        <Box />
        <Button color="primary" variant="solid">
          Click me gently
        </Button>
        <Box />
      </>
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,c,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: 'lg',
    children: <>
        <Box />
        <Box />
        <Box />
      </>
  }
}`,...(x=(c=s.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    gap: 'xl',
    isRecursive: true,
    children: <>
        <Box />
        <Box>
          <Box />
          <Box>
            <Box />
            <Box />
          </Box>
        </Box>
        <Box />
      </>
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    gap: 'sm',
    splitAt: 2,
    children: <>
        <Box />
        <Box />
        <Box />
      </>
  },
  decorators: [storyFn => <div style={{
    height: '20rem'
  }}>{storyFn()}</div>]
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,B,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    justify: 'center'
  }
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const ge=["Playground","WithGap","RecursiveGap","SplitedStack","WithHorizontalAlignment"];export{t as Playground,o as RecursiveGap,n as SplitedStack,s as WithGap,a as WithHorizontalAlignment,ge as __namedExportsOrder,ue as default};
//# sourceMappingURL=Stack.stories-CHjsxCEG.js.map
