import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as i}from"./index-BFqCTqzQ.js";import"./index-CTjT7uj6.js";import"./iframe-BwyVvPEg.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";function l(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useOuterCallback"}),`
`,e.jsx(t.h2,{id:"useoutercallback",children:"useOuterCallback"}),`
`,e.jsx(t.p,{children:"This hook is used fith forward ref and helps you listen to the events outside of your component. Which is useful when you click outside of modal or drawer and you want to have them closed."}),`
`,e.jsx(t.p,{children:"You can pass following options via parameter object"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Key"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Type"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Default"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"callback"}),e.jsx(t.td,{style:{textAlign:"left"},children:"function"}),e.jsx(t.td,{style:{textAlign:"left"}}),e.jsxs(t.td,{style:{textAlign:"left"},children:["It is triggered on events happening outside of the element (listened to ",e.jsx(t.code,{children:"Escape"}),", ",e.jsx(t.code,{children:"Enter"})," keypress and ",e.jsx(t.code,{children:"Click"}),")"]})]})})]}),`
`,e.jsx(t.p,{children:"The return object includes following properties"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Key"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Type"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Default"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"ref"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Object"}),e.jsx(t.td,{style:{textAlign:"left"}}),e.jsx(t.td,{style:{textAlign:"left"},children:"Creates an object that is then passed into the component that reacts to the outside events"})]})})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { useOuterClick } from '@securityscorecard/design-system';

const Component = () => {
  const onClick = () => callAction();
  const outerRef = useOuterClick(onClick);

  return (
    <div>
      <AnotherComponent ref={outerRef} />
    </div>
  );
};
`})})]})}function g(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{g as default};
//# sourceMappingURL=useOuterCallback-C5o4jTOm.js.map
