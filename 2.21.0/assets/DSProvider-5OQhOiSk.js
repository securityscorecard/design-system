import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{ae as s,ah as i}from"./index-CDrBpA_v.js";import{D as d}from"./DSProvider.stories-DxVs73ZV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-_GJS3f5s.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./DSProvider-BIwlM2Bl.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./_isObject-dmcfxmtS.js";function t(o){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,title:"Theme/DSProvider"}),`
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
//# sourceMappingURL=DSProvider-5OQhOiSk.js.map
