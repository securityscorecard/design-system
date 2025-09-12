import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{ae as s,am as a,an as c}from"./index-sShnySmF.js";import{I as m}from"./Icon-BBciP95r.js";import{S as d,I as p}from"./index-DRm3KUNF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BsQteR32.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./useLogger-DB992SI6.js";import"./DSProvider-DJmllnwz.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Theme/createIconLibrary()"}),`
`,e.jsx(n.h1,{id:"createiconlibrary",children:"createIconLibrary()"}),`
`,e.jsxs(n.p,{children:["In order to use Design System ",e.jsx(n.code,{children:"Icon"})," components you need to add ",e.jsx(n.code,{children:"createIconLibrary()"}),`. You should
do this setup in once in module where you initialize your application. This will include all Design
System defined icons and you'll be able to use them later.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createIconLibrary } from '@securityscorecard/design-system';

createIconLibrary();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
`})}),`
`,e.jsx(n.h2,{id:"extending-icons-library",children:"Extending icons library"}),`
`,e.jsxs(n.p,{children:[`By default we are including only minimal set of icon necessary for usage this library. However
you can extend default set of icons in the library with icons provided by FontAwesome (either
Free or Pro versions). All you have to do is provide array of icons as first argument of
`,e.jsx(n.code,{children:"createIconLibrary"})," funtion."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// main.js
import { faBone as fasBone } from '@fortawesome/free-solid-svg-icons/faAcorn';
import { fab } from '@fortawesome/pro-brand-svg-icons'; // add all icons from Brands set

import { createIconLibrary } from '@securityscorecard/design-system';

createIconLibrary([fasBone, fab]);

// Component.jsx
export const Component = () => (
  <>
    <Icon name="bone" type="fas" />
    <Icon name="react" type="fab" />
  </>
);
`})}),`
`,e.jsx(n.h2,{id:"default-icon-set",children:"Default icon set"}),`
`,e.jsx(a,{children:Object.values(d).map(r=>e.jsx(c,{name:r,children:e.jsx(m,{name:r,type:p.ssc})},r))})]})}function T(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{T as default};
//# sourceMappingURL=createIconLibrary-BoAQDMv6.js.map
