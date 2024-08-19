import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{ae as n}from"./index-CCCfPMbC.js";import"./index-CTjT7uj6.js";import"./iframe-B4dJUhKJ.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";function s(l){const e={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...l.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Hooks/usePortal"}),`
`,t.jsx(e.h2,{id:"useportal",children:"usePortal"}),`
`,t.jsx(e.p,{children:"This is hook for creation of React Portal. It renders children into a DOM node that exists outside the DOM hierarchy of the parent component."}),`
`,t.jsx(e.p,{children:"You can pass following options via parameter object"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"left"},children:"Key"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Type"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Default"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"onShow"}),t.jsx(e.td,{style:{textAlign:"left"},children:"function"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsxs(e.td,{style:{textAlign:"left"},children:["It is triggered when portal is shown or the ",t.jsx(e.code,{children:"isPortalVisible"})," set to ",t.jsx(e.code,{children:"true"})]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"onHide"}),t.jsx(e.td,{style:{textAlign:"left"},children:"function"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsxs(e.td,{style:{textAlign:"left"},children:["It is triggered when portal is hidden or the ",t.jsx(e.code,{children:"isPortalVisible"})," set to ",t.jsx(e.code,{children:"false"})]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"hasInternalShowHide"}),t.jsx(e.td,{style:{textAlign:"left"},children:"boolean"}),t.jsx(e.td,{style:{textAlign:"left"},children:"false"}),t.jsx(e.td,{style:{textAlign:"left"},children:"Enables/disables the built-in showPortal/hidePortal functions, which gives you a flexible way to handle your portal"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"defaultIsPortalVisible"}),t.jsx(e.td,{style:{textAlign:"left"},children:"boolean"}),t.jsx(e.td,{style:{textAlign:"left"},children:"false"}),t.jsx(e.td,{style:{textAlign:"left"},children:"It is the initial show/hide state of the portal"})]})]})]}),`
`,t.jsx(e.p,{children:"The return object includes following properties"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"left"},children:"Key"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Type"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Default"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"Portal"}),t.jsx(e.td,{style:{textAlign:"left"},children:"component"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsx(e.td,{style:{textAlign:"left"},children:"Renders children into a DOM node that exists outside the DOM hierarchy of the parent component"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"togglePortal"}),t.jsx(e.td,{style:{textAlign:"left"},children:"function"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsxs(e.td,{style:{textAlign:"left"},children:["To toggle (showPortal/hidePortal) the portal or set the ",t.jsx(e.code,{children:"isPortalVisible"})," to ",t.jsx(e.code,{children:"true/false"})]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"showPortal"}),t.jsx(e.td,{style:{textAlign:"left"},children:"function"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsxs(e.td,{style:{textAlign:"left"},children:["To show the portal or set the ",t.jsx(e.code,{children:"isPortalVisible"})," set to ",t.jsx(e.code,{children:"true"})]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"hidePortal"}),t.jsx(e.td,{style:{textAlign:"left"},children:"function"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsxs(e.td,{style:{textAlign:"left"},children:["To hide the portal or set the ",t.jsx(e.code,{children:"isPortalVisible"})," set to ",t.jsx(e.code,{children:"false"})]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"isPortalVisible"}),t.jsx(e.td,{style:{textAlign:"left"},children:"boolean"}),t.jsx(e.td,{style:{textAlign:"left"},children:"false"}),t.jsx(e.td,{style:{textAlign:"left"},children:"The showPortal/hidePortal state"})]})]})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { usePortal } from '@securityscorecard/design-system';

const { Portal } = usePortal({ defaultIsPortalVisible: true });
`})})]})}function u(l={}){const{wrapper:e}={...i(),...l.components};return e?t.jsx(e,{...l,children:t.jsx(s,{...l})}):s(l)}export{u as default};
