import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{ae as s,ai as m,aj as p}from"./index-C78Tu7EG.js";import{DarkMode as r}from"./Text.stories-Cj-92DlT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BNRW32KB.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-D88lkBP-.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-CwwveOyd.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-C3NFEOoi.js";import"./Padbox-DyJBw-9L.js";import"./index-DxcpycWO.js";import"./index-Bqw6gtNo.js";import"./prop-gA1VFyoz.js";import"./Inline-DoR-Gmpw.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C2D5KA8h.js";import"./useLogger-DhLFZSdg.js";import"./DSProvider-CPYqWFL_.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-CEsunubm.js";import"./storybook-CEy1qkXR.js";import"./zipObj-BkK7rA3s.js";import"./Paragraph-aD75l0GC.js";import"./index-BZ9CBGB8.js";import"./Heading-wrYorEub.js";import"./index-CiMSpUng.js";import"./index-Bwxa61za.js";import"./require-router-link-61hLzpmd.js";import"./react-router-dom-D8rN1sjW.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./Display-CF_bOXtb.js";import"./ElementLabel-Kzoagp5M.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
`,e.jsx(p,{of:r,type:"dynamic"})]})}function oe(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{oe as default};
//# sourceMappingURL=DSThemeOverride-B9a0qK5v.js.map
