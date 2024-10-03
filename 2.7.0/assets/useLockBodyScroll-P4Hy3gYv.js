import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as l}from"./index-CsyiI30-.js";import"./index-CTjT7uj6.js";import"./iframe-DoMNPUTg.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CgFWNHQ8.js";import"./index-DrFu-skq.js";function t(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Hooks/useLockBodyScroll"}),`
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
`})})]})}function M(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t(e)}export{M as default};
//# sourceMappingURL=useLockBodyScroll-P4Hy3gYv.js.map
