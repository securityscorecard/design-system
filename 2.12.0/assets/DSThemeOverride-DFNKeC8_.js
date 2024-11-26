import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{ae as s,ah as m,ai as h}from"./index-czIRoYOr.js";import{DarkMode as r}from"./Text.stories-CNVnLkoL.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DgSIVQ_v.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-7cJ2juxC.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-DxcpycWO.js";import"./index-BtznGf-c.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-nLI0iivB.js";import"./Cluster-wkODOmrt.js";import"./useLogger-CA2WAjqk.js";import"./DSProvider-Cqa5do1Y.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-CpAvg4Hc.js";import"./storybook-CBhUmier.js";import"./zipObj-C0uoDeoJ.js";import"./index-CXhmAfct.js";import"./index-DnGPFhQW.js";import"./Heading-DmVkXWQm.js";import"./index-DAr0NE0w.js";import"./index-CfrrGa82.js";import"./require-router-link-tvWtIm7z.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./Display-CF_bOXtb.js";import"./ElementLabel-Kzoagp5M.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
`,e.jsx(h,{of:r,type:"dynamic"})]})}function te(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{te as default};
//# sourceMappingURL=DSThemeOverride-DFNKeC8_.js.map
