import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as l}from"./index-DUy19JZU.js";import{ae as s}from"./index-CDrBpA_v.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-_GJS3f5s.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const i="/design-system/2.21.0/assets/Breadcrumbs-CXtL_cGr.png";function r(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Implementing Breadcrumbs"}),`
`,e.jsx(t.h2,{id:"implementing-breadcrumbs",children:"Implementing Breadcrumbs"}),`
`,e.jsx(t.p,{children:`Breadcrumbs component is an important part of the architecture structure and improves the navigation on the web giving a clear message where the user currently is.
It makes the use of back buttons obsolete and navigating the web consistent.`}),`
`,e.jsx(t.h3,{id:"breadcrumbs-parameters",children:"Breadcrumbs parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Key"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Type"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Default"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"children"}),e.jsx(t.td,{style:{textAlign:"left"},children:"string"}),e.jsx(t.td,{style:{textAlign:"left"}}),e.jsx(t.td,{style:{textAlign:"left"},children:"React nodes - only BreadcrumbItem accepted"})]})})]}),`
`,e.jsx(t.h4,{id:"breadcrumbitem",children:"BreadcrumbItem"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Key"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Type"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Default"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"children"}),e.jsx(t.td,{style:{textAlign:"left"},children:"string"}),e.jsx(t.td,{style:{textAlign:"left"}}),e.jsx(t.td,{style:{textAlign:"left"},children:"This should be a string that is used as the link children"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"onClick"}),e.jsx(t.td,{style:{textAlign:"left"},children:"function"}),e.jsx(t.td,{style:{textAlign:"left"}}),e.jsx(t.td,{style:{textAlign:"left"},children:'Alternative to "to" and "href" parameters of the link'})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"to"}),e.jsx(t.td,{style:{textAlign:"left"},children:"string"}),e.jsx(t.td,{style:{textAlign:"left"}}),e.jsx(t.td,{style:{textAlign:"left"},children:"Address for the link to navigate to"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"href"}),e.jsx(t.td,{style:{textAlign:"left"},children:"string"}),e.jsx(t.td,{style:{textAlign:"left"}}),e.jsx(t.td,{style:{textAlign:"left"},children:"Address for the link to navigate to"})]})]})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`
import { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';

...
// this is an example Breadcrumbs for a fictional page

const BreadcrumbsComponent = () => (
  <Breadcrumbs>
    <BreadcrumbItem href="/top-level">
      Top level
    </BreadcrumbItem>
    <BreadcrumbItem href="/top-level/lower-level">
      Lower level
    </BreadcrumbItem>
    <BreadcrumbItem>
      Current level
    </BreadcrumbItem>
  </Breadcrumbs>
);

`})}),`
`,e.jsx(t.p,{children:"This setup will render following:"}),`
`,e.jsx("img",{alt:"Example of renderd breadcrumbs",src:i,width:320}),`
`,e.jsx(t.p,{children:"Notice the Current level has lighter color - this one doesn't have 'to' or 'href' defined, so it's inactive."})]})}function u(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{u as default};
//# sourceMappingURL=implementingBreadcrumbs-Bf4LXC6u.js.map
