import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{ae as s,ah as m,ai as h}from"./index-Casf_vIB.js";import{DarkMode as r}from"./Text.stories-BW_eVoHg.js";import"./index-CTjT7uj6.js";import"./iframe-BN0ISbaB.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CgFWNHQ8.js";import"./index-DrFu-skq.js";import"./index-DozTNYRt.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-CbknQUej.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./index-C7IrpltL.js";import"./index-NWhnjyl5.js";import"./prop-CqBAad6K.js";import"./Inline.enums-DlaUPeKw.js";import"./Cluster-CO02VLRh.js";import"./useLogger-XTihx-r2.js";import"./DSProvider-B7ofGRk-.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./index-uIya-cWM.js";import"./storybook-Crh9kOSz.js";import"./zipObj-Di5u6WK6.js";import"./index-DfX17r-U.js";import"./index-CcmXMBOf.js";import"./Heading-CP5qUNRg.js";import"./index-MgMbEsmP.js";import"./index-tXRcgkgg.js";import"./require-router-link-CU3avibx.js";import"./react-router-dom-B-6Qbk9C.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-D6Q9WflV.js";import"./isNotNull-CcOpPpmr.js";import"./Display-Do1ucDtJ.js";import"./ElementLabel-CTPKCfMW.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
`,e.jsx(h,{of:r,type:"dynamic"})]})}function ee(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{ee as default};
//# sourceMappingURL=DSThemeOverride-jo8UVuJV.js.map
