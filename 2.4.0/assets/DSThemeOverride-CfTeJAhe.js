import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{ae as s,ag as m,ah as h}from"./index-BFqCTqzQ.js";import{DarkMode as r}from"./Text.stories-DqOigXjI.js";import"./index-CTjT7uj6.js";import"./iframe-BwyVvPEg.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";import"./index-BfLWfhlY.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DzAsfYvZ.js";import"./index-BRV0Se7Z.js";import"./index-BawZj8GX.js";import"./Padbox-ugjOsLS7.js";import"./index-C7IrpltL.js";import"./index-BcSnSfQB.js";import"./flex.types-BrkCVx66.js";import"./prop-CePbk9wh.js";import"./Inline-Cg9jPAAE.js";import"./Cluster-HoiIP47J.js";import"./useLogger-IjsioYUQ.js";import"./DSProvider-DXXID37Q.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./index-BiHv5IcS.js";import"./storybook-CcMDNGsQ.js";import"./zipObj-D_Us9sqw.js";import"./index-CdPlJU3q.js";import"./spacing.types-C9Yu1wmA.js";import"./index-D3M05C5e.js";import"./Heading-8_WGMOaA.js";import"./index-DrIwkQ8-.js";import"./index-DCUikTFM.js";import"./require-router-link-CwDqj7nA.js";import"./react-router-dom-DzSrOeqf.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-CdyG0a3O.js";import"./isNotNull-DhaqNAj6.js";import"./Display-D72whZ0L.js";import"./ElementLabel-BAHjFxqF.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
`,e.jsx(t.h1,{id:"dsthemeoverride",children:"DSThemeOverride"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DSThemeOverride"}),` component empowers users with the ability to locally control and personalize the
visual appearance of components within their applications. By utilizing the `,e.jsx(t.code,{children:"overrides"}),` property,
this component enables dynamic alterations to the default theme object. This means that users can
effortlessly customize the styling of individual components without the need for extensive global
theme modifications. Whether it's tweaking colors, adjusting spacing, or fine-tuning typography, the
`,e.jsx(t.code,{children:"DSThemeOverride"}),` component offers a seamless way to achieve a bespoke look and feel for specific
elements, all while maintaining the broader design consistency of the application.`]}),`
`,e.jsx(t.h2,{id:"overrides-vs-extension",children:"Overrides vs. extension"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DSThemeOverride"}),` component will strictly allowing local override of the theme. If you need to
extend the default theme with new values you have to pass those to the `,e.jsx(t.code,{children:"DSProvider"}),` component and its
`,e.jsx(t.code,{children:"theme"})," property."]}),`
`,e.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"overrides"}),` property accept either a function that returns the subset of the default theme or
the subset itself. The function accepts the default theme object as the first argument which allows
you to assign any value to the overriden object.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const DarkBox = ({ children }) => (
  <DSThemeOverride
    overrides={(theme) => ({
      colors: {
        text: {
          primary: theme.colors.neutral[0],
          secondary: theme.colors.neutral[500],
          danger: '#fd4a4a',
        },
      },
    })}
  >
    {children}
  </DSThemeOverride>
);
`})}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(m,{of:r})}),`
`,e.jsx(h,{of:r,type:"dynamic"})]})}function oe(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{oe as default};
//# sourceMappingURL=DSThemeOverride-CfTeJAhe.js.map
