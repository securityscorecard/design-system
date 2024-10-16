import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{ae as s,al as a,am as c}from"./index-QPajMEvj.js";import{I as m}from"./Icon-C0fNGvgr.js";import{S as d,I as p}from"./index-BsP7FXMl.js";import"./index-CTjT7uj6.js";import"./iframe-awgemxr7.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CgFWNHQ8.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./isObject-BZZHHNGj.js";import"./slice-CaMqkvGm.js";import"./useLogger-BdR6T79l.js";import"./DSProvider-DZ2BDZS9.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Theme/createIconLibrary()"}),`
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
`,e.jsx(a,{children:Object.values(d).map(r=>e.jsx(c,{name:r,children:e.jsx(m,{name:r,type:p.ssc})},r))})]})}function G(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{G as default};
//# sourceMappingURL=createIconLibrary-Ic1ha-DR.js.map
