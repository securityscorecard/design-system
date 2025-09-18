import{j as o}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as l}from"./index-DUy19JZU.js";import{ae as r}from"./index-BTpC9w9o.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-8vui-XyW.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";function t(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Hooks/useLockBodyScroll"}),`
`,o.jsx(n.h2,{id:"uselockbodyscroll",children:"useLockBodyScroll"}),`
`,o.jsx(n.p,{children:`This hook is called to prevent scrolling the body of a page while a component is positioned over the page.
Basically, call the useLockBodyScroll hook in any component and body scrolling will be locked until that component unmounts`}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-js",children:`import { useLockBodyScroll } from '@securityscorecard/design-system';

function ModalWithLockedBody({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <Portal>
      <Overlay placement="center">
        <BaseModal>
          <Content>Modal content</Content>
          <Footer>Modal Footer</Footer>
        </BaseModal>
      </Overlay>
    </Portal>
  );
}
`})})]})}function k(e={}){const{wrapper:n}={...l(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t(e)}export{k as default};
//# sourceMappingURL=useLockBodyScroll-Cnw7X25v.js.map
