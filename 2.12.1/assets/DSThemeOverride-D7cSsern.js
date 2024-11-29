import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{ae as s,ah as m,ai as h}from"./index-BcxKTrCY.js";import{DarkMode as r}from"./Text.stories-CH4W0MlT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CTqAVif7.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-BQsZAX6J.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-CeGY6Ei3.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./index-Ozu0POZL.js";import"./Padbox-DPWp-bzC.js";import"./index-DxcpycWO.js";import"./index-BnuP2NC2.js";import"./prop-CVCEMdxf.js";import"./Inline.enums-Bs7GfXP0.js";import"./Cluster-DiauHNp4.js";import"./useLogger-BVsKAY55.js";import"./DSProvider-oeie4wyM.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-gVnCqFBT.js";import"./storybook-CzZzegut.js";import"./zipObj-C0uoDeoJ.js";import"./index-BlLyJPr3.js";import"./index-Ds_B4qJH.js";import"./Heading-Dw5B582O.js";import"./index-BIguDwj2.js";import"./index-DaL9ZfvN.js";import"./require-router-link-BkfyGi5e.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./Display-DftDDTCF.js";import"./ElementLabel-CIy3SKjT.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
//# sourceMappingURL=DSThemeOverride-D7cSsern.js.map
