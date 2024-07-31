import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{ae as s,ah as m,ai as p}from"./index-BXUN0mrA.js";import{DarkMode as r}from"./Text.stories-D5-jzb2t.js";import"./index-CTjT7uj6.js";import"./iframe-Ix-0Lw17.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";import"./space-BY85GhUc.js";import"./Surface-CvF-S7pg.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./prop-Cw0eZkJ_.js";import"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import"./Text-CQej7zPl.js";import"./storybook-ByffxkSu.js";import"./zipObj-C9fmdzRH.js";import"./Paragraph-DLn62-bA.js";import"./spacing.types-C9Yu1wmA.js";import"./Heading-5wHX6smU.js";import"./Link-CjFXlB6o.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./tiny-invariant-CopsF_GD.js";import"./BaseLink-C32xmWCG.js";import"./isNotNull-D2Wrs3cn.js";import"./Display-BuUMmrUr.js";import"./ElementLabel-Cy-uojkk.js";import"./Button-CgUf0TwU.js";import"./BaseButton-Bl-0NeNF.js";import"./Icon-DSPfH_8v.js";import"./index-DFvsTZbx.js";import"./Spinner-b5BYo8Sk.js";import"./noop-CRTpovv1.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
`,e.jsx(p,{of:r,type:"dynamic"})]})}function re(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{re as default};
