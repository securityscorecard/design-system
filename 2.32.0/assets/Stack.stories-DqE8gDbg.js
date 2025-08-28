import{j as e}from"./jsx-runtime-BbjHj44Y.js";import"./index-BQrLH5Fx.js";import{B as r}from"./Box-BhqS7Coe.js";import{S as v}from"./index-C8Uj0hRh.js";import{B as k}from"./Button-oNs-dHY1.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BoFlc8mL.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./index-CVyJwDg7.js";import"./index-DRm3KUNF.js";import"./index-DYWQy94d.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-Bk_dtu3O.js";import"./react-router-dom-BGDj--y4.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useLogger-D6HktrB1.js";import"./index-BzkxN2vn.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-7bldAnOT.js";import"./index-DCKWONtv.js";import"./Padbox-BDqsTa65.js";import"./Inline-C4eBN8Ve.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";const ye={title:"layout/primitives/Stack",component:v,argTypes:{gap:{description:"Whitespace between each child of the Stack",options:["none","xxs","xs","sm","md","mdPlus","lg","lgPlus","xl","xlPlus","xxl","half-x","1x","2x","3x","4x","6x","8x","12x","16x","24x","32x"],control:{type:"select"},table:{type:{summary:"'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdPlus' | 'lg' | 'lgPlus' | 'xl' | 'xlPlus' | 'xxl' | 'half-x' | '1x' | '2x' | '3x' | '4x' | '6x' | '8x' | '12x' | '16x' | '24x' | '32x'"},defaultValue:{summary:"'none'"}}},justify:{description:"Horizontal alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"},defaultValue:{summary:"'stretch'"}}},align:{description:"Vertical alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"}}},splitAt:{description:"Index of element after which the Stack is splitted. Leave `undefined` for no splitting",control:{type:"number"},table:{type:{summary:"number"}}},isRecursive:{description:"Should apply gap recursively (on nested levels)",control:{type:"boolean"},table:{type:{summary:"boolean"}}}}},t={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(k,{color:"primary",variant:"solid",children:"Click me gently"}),e.jsx(r,{})]})},parameters:{screenshot:{skip:!0}}},s={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})}},o={args:{gap:"xl",isRecursive:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsx(r,{})]})]}),e.jsx(r,{})]})}},n={args:{gap:"sm",splitAt:2,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})},decorators:[b=>e.jsx("div",{style:{height:"20rem"},children:b()})]},i={args:{...t.args,justify:"center"}};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,c,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,B,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    justify: 'center'
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const fe=["Playground","WithGap","RecursiveGap","SplitedStack","WithHorizontalAlignment"];export{t as Playground,o as RecursiveGap,n as SplitedStack,s as WithGap,i as WithHorizontalAlignment,fe as __namedExportsOrder,ye as default};
//# sourceMappingURL=Stack.stories-DqE8gDbg.js.map
