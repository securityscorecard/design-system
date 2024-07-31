import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as s,ag as i}from"./index-BXUN0mrA.js";import{D as d}from"./DSProvider.stories-Bh16Y5cX.js";import"./index-CTjT7uj6.js";import"./iframe-Ix-0Lw17.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";import"./DSProvider-eD554_K8.js";import"./space-BY85GhUc.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";function t(n){const o={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,title:"Theme/DSProvider"}),`
`,e.jsx(o.h1,{id:"dsprovider",children:"DSProvider"}),`
`,e.jsxs(o.p,{children:["In order to use Design System components you need to add ",e.jsx(o.code,{children:"styled-components"}),` theme provider.
You can extend `,e.jsx(o.a,{href:"/docs/theme-theme-object--page",children:"default Design System theme"}),` with you own
values when `,e.jsx(o.code,{children:"theme"}),` prop is passed into the component. This component also includes reset CSS rules
(this is opt-out feature via `,e.jsx(o.code,{children:"config.hasIncludedGlobalStyles"})," property)."]}),`
`,e.jsx(i,{}),`
`,e.jsx(o.h3,{id:"usage-with-default-theme",children:"Usage with default theme"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`// AppComponent.jsx
import { DSProvider } from '@securityscorecard/design-system'
...

const AppComponent = (
  <Provider store={this.store}>
    <DSProvider>
      <Root />
    </DSProvider>
  </Provider>
);
`})}),`
`,e.jsx(o.h3,{id:"usage-with-extended-theme",children:"Usage with extended theme"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`// AppComponent.jsx
import { DSProvider } from '@securityscorecard/design-system'
...

const customTheme = {
  heights: {
    header: '3rem',
    footer: '2rem',
  },
  ...
}

const AppComponent = (
  <Provider store={this.store}>
    <DSProvider theme={customTheme}>
      <Root />
    </DSProvider>
  </Provider>
);
`})})]})}function M(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{M as default};
