import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{ae as i}from"./index-CszMIYlt.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-cpR-ItQf.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";function l(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useOuterCallback"}),`
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
`})})]})}function f(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{f as default};
//# sourceMappingURL=useOuterCallback-xpmDflmh.js.map
