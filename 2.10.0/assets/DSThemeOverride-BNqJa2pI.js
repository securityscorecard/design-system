import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as s,ah as m,ak as p}from"./index-Dr1C8Baz.js";import{DarkMode as r}from"./Text.stories-CZC0bdeA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CC5roxI7.js";import"../sb-preview/runtime.js";import"./index-DhoXBIRq.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-Dii5kbWS.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./index-CVyJwDg7.js";import"./index-D5s2qWpv.js";import"./prop-BraK_cHP.js";import"./Inline.enums-Dg90oR_c.js";import"./Cluster-hENBaGjg.js";import"./useLogger-DBrb0845.js";import"./DSProvider-DOa9IzhU.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-iel8gM5l.js";import"./storybook-D0JVylcB.js";import"./zipObj-C0uoDeoJ.js";import"./index-C9awWo0S.js";import"./index-spk5fwXj.js";import"./Heading-BdlZi4-C.js";import"./index-B2k6yuum.js";import"./index-DEmtOrz8.js";import"./require-router-link-k4I0c-EH.js";import"./react-router-dom-DwuZB8Qo.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-CY6zyd1L.js";import"./isNotNull-DgOaR-Mp.js";import"./Display-CQYFp5YW.js";import"./ElementLabel-CLZwawJK.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
`,e.jsx(p,{of:r,type:"dynamic"})]})}function ie(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{ie as default};
//# sourceMappingURL=DSThemeOverride-BNqJa2pI.js.map
