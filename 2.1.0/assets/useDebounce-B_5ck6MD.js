import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{ae as l}from"./index-Bz6VQPVz.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CdmlgOp-.js";import"../sb-preview/runtime.js";import"./index-DhoXBIRq.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CCc8drJn.js";import"./index-DrFu-skq.js";function s(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Hooks/useDebounce"}),`
`,e.jsx(t.h2,{id:"usedebounce",children:"useDebounce"}),`
`,e.jsxs(t.p,{children:["This hook utilizes the ",e.jsx(t.code,{children:"requestAnimationFrame"})," to debounce performance-heavy functions."]}),`
`,e.jsx(t.p,{children:"You can pass following options via parameter object"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Key"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Type"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"callback"}),e.jsx(t.td,{style:{textAlign:"left"},children:"function"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Performance-heavy function we need debounce"})]})})]}),`
`,e.jsx(t.p,{children:"The return object includes following properties"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Key"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Type"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"callback"}),e.jsx(t.td,{style:{textAlign:"left"},children:"function"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Passed callback function wrapped in the debounce mechanism"})]})})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { useDebounce } from '@securityscorecard/design-system';

const debouncedFn = useDebounce(heavyFn);
`})})]})}function g(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{g as default};
