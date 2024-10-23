import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import"./index-CfzITaHV.js";import{B as r}from"./Box-CCm2ILWC.js";import{S as v}from"./index-D5s2qWpv.js";import{B as k}from"./Button-BC4WdvK_.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BfdLNWmY.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-CajKmcpa.js";import"./index-D97QikPo.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DHFK1UxZ.js";import"./prop-BraK_cHP.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-k4I0c-EH.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DBrb0845.js";import"./index-DIvwzgjZ.js";import"./index-sYlzTV1h.js";import"./Spinner-CaS15r7b.js";import"./index-KsdgvOjZ.js";import"./Icon-CYAM9BRr.js";import"./index-Dii5kbWS.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./Inline.enums-Dg90oR_c.js";import"./Cluster-hENBaGjg.js";import"./isNull-CY6zyd1L.js";import"./isNotNull-DgOaR-Mp.js";import"./noop-HYpN8PIr.js";const he={title:"layout/primitives/Stack",component:v,argTypes:{gap:{description:"Whitespace between each child of the Stack",options:["none","xxs","xs","sm","md","mdPlus","lg","lgPlus","xl","xlPlus","xxl","half-x","1x","2x","3x","4x","6x","8x","12x","16x","24x","32x"],control:{type:"select"},table:{type:{summary:"'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdPlus' | 'lg' | 'lgPlus' | 'xl' | 'xlPlus' | 'xxl' | 'half-x' | '1x' | '2x' | '3x' | '4x' | '6x' | '8x' | '12x' | '16x' | '24x' | '32x'"},defaultValue:{summary:"'none'"}}},justify:{description:"Horizontal alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"},defaultValue:{summary:"'stretch'"}}},align:{description:"Vertical alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"}}},splitAt:{description:"Index of element after which the Stack is splitted. Leave `undefined` for no splitting",control:{type:"number"},table:{type:{summary:"number"}}},isRecursive:{description:"Should apply gap recursively (on nested levels)",control:{type:"boolean"},table:{type:{summary:"boolean"}}}}},t={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(k,{color:"primary",variant:"solid",children:"Click me gently"}),e.jsx(r,{})]})},parameters:{screenshot:{skip:!0}}},s={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})}},o={args:{gap:"xl",isRecursive:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsx(r,{})]})]}),e.jsx(r,{})]})}},n={args:{gap:"sm",splitAt:2,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})},decorators:[b=>e.jsx("div",{style:{height:"20rem"},children:b()})]},i={args:{...t.args,justify:"center"}};var a,p,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,c,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const ye=["Playground","WithGap","RecursiveGap","SplitedStack","WithHorizontalAlignment"];export{t as Playground,o as RecursiveGap,n as SplitedStack,s as WithGap,i as WithHorizontalAlignment,ye as __namedExportsOrder,he as default};
//# sourceMappingURL=Stack.stories-CpJU7vOF.js.map
