import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{useMDXComponents as r}from"./index-Cd31CJfN.js";import{ae as s,ah as i}from"./index-DvOX7CN-.js";import{D as d}from"./DSProvider.stories-oP7NcE9q.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bi3rkE5o.js";import"../sb-preview/runtime.js";import"./index-CWFZYRor.js";import"./index-kifaGmES.js";import"./index-DrFu-skq.js";import"./DSProvider-0V0etiPX.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./_isObject-dmcfxmtS.js";function t(o){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,title:"Theme/DSProvider"}),`
`,e.jsx(n.h1,{id:"dsprovider",children:"DSProvider"}),`
`,e.jsxs(n.p,{children:["In order to use Design System components you need to add ",e.jsx(n.code,{children:"styled-components"}),` theme provider.
You can extend `,e.jsx(n.a,{href:"/docs/theme-theme-object--page",children:"default Design System theme"}),` with you own
values when `,e.jsx(n.code,{children:"theme"}),` prop is passed into the component. This component also includes reset CSS rules
(this is opt-out feature via `,e.jsx(n.code,{children:"config.hasIncludedGlobalStyles"})," property)."]}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h3,{id:"usage-with-default-theme",children:"Usage with default theme"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// AppComponent.jsx
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
`,e.jsx(n.h3,{id:"usage-with-extended-theme",children:"Usage with extended theme"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// AppComponent.jsx
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
`})})]})}function C(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{C as default};
//# sourceMappingURL=DSProvider-DWroyEJs.js.map
