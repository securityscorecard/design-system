import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-Dyk1lTu2.js";import{B as r}from"./Box-Cd6tBclU.js";import{S as v}from"./index-nwGNxYyI.js";import{B as k}from"./Button-DBUI4Jbs.js";import"./index-CTjT7uj6.js";import"./index-DOqtWUVi.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-C7IrpltL.js";import"./index-uyLpYamY.js";import"./index-CECIl5yl.js";import"./index-DT7C7tog.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BRbW6gx4.js";import"./index-CY6BXmKt.js";import"./Spinner-B9l4ubnC.js";import"./index-DCTvgOp1.js";import"./Icon-B9Y_mYIL.js";import"./index-DR5XHNKF.js";import"./index-BbaO5Nb4.js";import"./Padbox-DcClumXL.js";import"./Inline.enums-DB1XHHNB.js";import"./Cluster-C2ONgLd-.js";import"./isNull-DtrhChS2.js";import"./isNotNull-lH5ks6fm.js";import"./noop-XW1TVrX5.js";const ce={title:"layout/primitives/Stack",component:v,argTypes:{gap:{description:"Whitespace between each child of the Stack",options:["none","xxs","xs","sm","md","mdPlus","lg","lgPlus","xl","xlPlus","xxl","half-x","1x","2x","3x","4x","6x","8x","12x","16x","24x","32x"],control:{type:"select"},table:{type:{summary:"'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdPlus' | 'lg' | 'lgPlus' | 'xl' | 'xlPlus' | 'xxl' | 'half-x' | '1x' | '2x' | '3x' | '4x' | '6x' | '8x' | '12x' | '16x' | '24x' | '32x'"},defaultValue:{summary:"'none'"}}},justify:{description:"Horizontal alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"},defaultValue:{summary:"'stretch'"}}},align:{description:"Vertical alignment of elements inside Stack",options:["center","flex-end","flex-start","baseline","stretch"],control:{type:"select"},table:{type:{summary:"'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'"}}},splitAt:{description:"Index of element after which the Stack is splitted. Leave `undefined` for no splitting",control:{type:"number"},table:{type:{summary:"number"}}},isRecursive:{description:"Should apply gap recursively (on nested levels)",control:{type:"boolean"},table:{type:{summary:"boolean"}}}}},t={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(k,{color:"primary",variant:"solid",children:"Click me gently"}),e.jsx(r,{})]})},parameters:{screenshot:{skip:!0}}},s={args:{gap:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})}},o={args:{gap:"xl",isRecursive:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsxs(r,{children:[e.jsx(r,{}),e.jsx(r,{})]})]}),e.jsx(r,{})]})}},n={args:{gap:"sm",splitAt:2,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})},decorators:[b=>e.jsx("div",{style:{height:"20rem"},children:b()})]},a={args:{...t.args,justify:"center"}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const xe=["Playground","WithGap","RecursiveGap","SplitedStack","WithHorizontalAlignment"];export{t as Playground,o as RecursiveGap,n as SplitedStack,s as WithGap,a as WithHorizontalAlignment,xe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Stack.stories-B9aO9hEi.js.map
