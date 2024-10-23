import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as s,ah as m,ak as p}from"./index-BxVnAofd.js";import{DarkMode as r}from"./Text.stories-DfnepTG5.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-jgdZpc2e.js";import"../sb-preview/runtime.js";import"./index-DhoXBIRq.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-0COcc321.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-BQWFrAEB.js";import"./constants-CHqWh-7J.js";import"./isNotUndefined-DxARNfZG.js";import"./_isObject-BZZHHNGj.js";import"./slice-DUYrgxkR.js";import"./index-CKrVqi-N.js";import"./Padbox-DzmU9-lr.js";import"./index-CVyJwDg7.js";import"./index-iY2rO5S8.js";import"./prop-qecTCRZr.js";import"./Inline.enums-6YASdLRa.js";import"./Cluster-CjJ089XP.js";import"./useLogger-DZJuabeR.js";import"./DSProvider-BQ8JssCJ.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-B9rA5P-U.js";import"./storybook-WT-kyym6.js";import"./zipObj-C0uoDeoJ.js";import"./index-DmfpuQjN.js";import"./index-DjgdIhAl.js";import"./Heading-CAUnJabY.js";import"./index-C5vu570j.js";import"./index-CHeNQ-B2.js";import"./require-router-link--hD0WpN8.js";import"./react-router-dom-DwuZB8Qo.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-C-cY_r9w.js";import"./isNotNull-C1OvDTe-.js";import"./Display-Bde2xxcK.js";import"./ElementLabel-BG1PitjW.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
`,e.jsx(p,{of:r,type:"dynamic"})]})}function ne(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{ne as default};
//# sourceMappingURL=DSThemeOverride-CkXSicVc.js.map
