import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as s,ah as m,ai as p}from"./index-Ci8oVFXU.js";import{DarkMode as r}from"./Text.stories-DWcu0I6o.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C8FkmGC_.js";import"../sb-preview/runtime.js";import"./index-DhoXBIRq.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CCc8drJn.js";import"./index-DrFu-skq.js";import"./space-B9R18Mwn.js";import"./Surface-Cs7tekjF.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./flex.types-q2tZp175.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./Text-C1sA-5dj.js";import"./storybook-DyKsesZd.js";import"./zipObj-D5WCOpKt.js";import"./Paragraph-DD2XWiUD.js";import"./spacing.types-QRY9P8Qv.js";import"./Heading-Doa2oxzU.js";import"./Link-C_aB62BF.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./tiny-invariant-CopsF_GD.js";import"./BaseLink-BTj3sWKL.js";import"./isNotNull-C0-yEnlk.js";import"./Display-Ci8ojk6S.js";import"./ElementLabel-BOrjkxWz.js";import"./Button-CKE-X77u.js";import"./BaseButton-IeCCn510.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./Spinner-DLDOSOzx.js";import"./noop-Bk6XfTLC.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
