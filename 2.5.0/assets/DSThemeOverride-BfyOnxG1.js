import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{ae as s,ah as m,ai as h}from"./index-D4lxgMQs.js";import{DarkMode as r}from"./Text.stories-CEnopHub.js";import"./index-CTjT7uj6.js";import"./iframe-Cs5C-iW1.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";import"./index-Nbgc27zk.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DT7C7tog.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";import"./index-C7IrpltL.js";import"./index-BYvZ6SHf.js";import"./prop-BK8rocxd.js";import"./Inline.enums-CsFZc2ym.js";import"./Cluster-BEmEoxq8.js";import"./useLogger-BRbW6gx4.js";import"./DSProvider-OItu1eMI.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./index-CL66zYYS.js";import"./storybook-BltFH4CS.js";import"./zipObj-Cc13prBD.js";import"./index-dYvLZgz3.js";import"./index-CzcvDuwe.js";import"./Heading-ZGNgTxwI.js";import"./index-vxnc4v2T.js";import"./index-Ce7N-01r.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-DtrhChS2.js";import"./isNotNull-lH5ks6fm.js";import"./Display-9ywecTwR.js";import"./ElementLabel-CMiyZGKd.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"theme/DSThemeOverride"}),`
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
//# sourceMappingURL=DSThemeOverride-BfyOnxG1.js.map
