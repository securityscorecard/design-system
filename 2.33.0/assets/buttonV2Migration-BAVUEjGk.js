import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{ae as i}from"./index-sShnySmF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BsQteR32.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const r="/design-system/2.33.0/assets/button-ex-01-before-DW2HE2cN.png",c="/design-system/2.33.0/assets/button-ex-01-after-QswVT4Gw.png",d="/design-system/2.33.0/assets/button-ex-02-before-DhW_ImWf.png",a="/design-system/2.33.0/assets/button-ex-02-after-BT5OzHP_.png",l="/design-system/2.33.0/assets/button-ex-03-before-DrDS6Sf0.png",h="/design-system/2.33.0/assets/button-ex-03-after-DraMTV1O.png",u="/design-system/2.33.0/assets/button-ex-04-before-kdHV_6U3.png",p="/design-system/2.33.0/assets/button-ex-04-after-ZKeKZISK.png",x="/design-system/2.33.0/assets/button-ex-05-before-DuORKXpq.png",g="/design-system/2.33.0/assets/button-ex-05-after-CwESzPNT.png";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/ButtonV2 migration guide"}),`
`,e.jsx(n.h1,{id:"buttonv2-migration-guide",children:"ButtonV2 migration guide"}),`
`,e.jsx(n.p,{children:"The Button component in our design system has been updated to version 2.0, introducing a few breaking changes that you'll need to be aware of when migrating your existing implementations."}),`
`,e.jsxs(n.p,{children:["Any of the following steps expect change of the imported component from ",e.jsx(n.code,{children:"Button"})," to ",e.jsx(n.code,{children:"ButtonV2"}),"."]}),`
`,e.jsx(n.h2,{id:"button-element-is-no-longer-inferred-from-props",children:"Button element is no longer inferred from props"}),`
`,e.jsxs(n.p,{children:["In the previous version of the Button component, the underlying HTML element was inferred based on the provided props (e.g. using an ",e.jsx(n.code,{children:"href"})," prop would render an ",e.jsx(n.code,{children:"<a>"}),` tag).
In `,e.jsx(n.code,{children:"ButtonV2"}),", you must now explicitly define the element to be rendered using the ",e.jsx(n.code,{children:"as"})," prop. The default value for ",e.jsx(n.code,{children:"as"})," is still ",e.jsx(n.code,{children:"button"}),", but you can now pass in ",e.jsx(n.code,{children:"a"})," or a custom React component (like ",e.jsx(n.code,{children:"Link"}),` from react-router-dom) to render the appropriate element.
This change increases type-safety, as the component will now correctly infer the available props based on the `,e.jsx(n.code,{children:"as"})," value. It also decouples the design system from specific UI frameworks, making it more flexible and reusable."]}),`
`,e.jsx(n.h3,{id:"migration-steps",children:"Migration steps:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure you are passing an explicit ",e.jsx(n.code,{children:"as"})," prop to the Button component, specifying the desired underlying element."]}),`
`,e.jsxs(n.li,{children:["Update any existing Button usages to include the ",e.jsx(n.code,{children:"as"})," prop."]}),`
`]}),`
`,e.jsx(n.h2,{id:"button-label-must-now-be-a-string",children:"Button label must now be a string"}),`
`,e.jsxs(n.p,{children:["Previously, the ",e.jsx(n.code,{children:"children"})," prop of the ",e.jsx(n.code,{children:"Button"}),` component could accept any React node, allowing for custom content to be rendered inside the button.
In `,e.jsx(n.code,{children:"ButtonV2"}),", the ",e.jsx(n.code,{children:"children"}),` prop is now restricted to only accepting string values. This change helps ensure a consistent visual appearance and avoid potential rendering artifacts caused by custom React nodes.
If you previously passed non-string content (such as icons) inside the button's children, you should migrate to using the dedicated `,e.jsx(n.code,{children:"iconStart"})," or ",e.jsx(n.code,{children:"iconEnd"}),` props instead. This props allows you to add an icon before or after the button's label, maintaining the expected visual design.
For buttons that contain only an icon without any label, we've introduced a new `,e.jsx(n.code,{children:"IconButton"})," component that you should use."]}),`
`,e.jsx(n.h3,{id:"migration-steps-1",children:"Migration steps:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Update any ",e.jsx(n.code,{children:"Button"})," usages to pass a string value for the ",e.jsx(n.code,{children:"children"})," prop."]}),`
`,e.jsxs(n.li,{children:["If you need to display an icon, use ",e.jsx(n.code,{children:"iconStart"})," or ",e.jsx(n.code,{children:"iconEnd"})," props instead of including it in the children."]}),`
`,e.jsxs(n.li,{children:["For buttons with only an icon, switch to using the new ",e.jsx(n.code,{children:"IconButton"})," component."]}),`
`]}),`
`,e.jsx(n.p,{children:"Please let me know if you have any other questions or need further assistance with the migration to Button v2."}),`
`,e.jsx(n.h2,{id:"button-variants-naming-has-changed",children:"Button variants naming has changed"}),`
`,e.jsxs(n.p,{children:["You were used to use variants like ",e.jsx(n.code,{children:"solid"})," or ",e.jsx(n.code,{children:"outline"}),". These names had larger coupling with the visual style than with actual button hierarchy. The ",e.jsx(n.code,{children:"ButtonV2"})," changes this and implements new naming to better communicate how buttons should be used."]}),`
`,e.jsx(n.h3,{id:"migration-steps-2",children:"Migration steps:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Update any ",e.jsx(n.code,{children:"variant"})," property on Button according to following rules:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant=solid"})," -> ",e.jsx(n.code,{children:"variant"})," property can be omitted (default value) or ",e.jsx(n.code,{children:"variant=base"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant=outline"})," -> ",e.jsx(n.code,{children:"variant=subtle"})," variant"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant=text"})," -> ",e.jsx(n.code,{children:"variant=ghost"})," variant"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Remove any ",e.jsx(n.code,{children:"color"})," property and update ",e.jsx(n.code,{children:"variant"})," according to following rules:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant=solid + color=danger"})," -> ",e.jsx(n.code,{children:"variant=danger"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant=outline + color=danger"})," -> ",e.jsx(n.code,{children:"variant=danger-ghost"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant=text + color=danger"})," -> ",e.jsx(n.code,{children:"variant=danger-ghost"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant=ghost + color=danger"})," -> ",e.jsx(n.code,{children:"variant=danger-ghost"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"common-migration-examples",children:"Common migration examples"}),`
`,e.jsxs(n.h3,{id:"external-link-without-explicit-as-property",children:["External link without explicit ",e.jsx(n.code,{children:"as"})," property"]}),`
`,e.jsx("img",{alt:"Wrong: the button does not have explicitly set `as` property but use the `href` property",src:u,width:470}),`
`,e.jsx("img",{alt:"Correct: the `as` property is set to `a`",src:p,width:470}),`
`,e.jsxs(n.h3,{id:"react-router-link-without-explicit-as-property",children:["React Router link without explicit ",e.jsx(n.code,{children:"as"})," property"]}),`
`,e.jsx("img",{alt:"Wrong: the button does not have explicitly set `as` property but use the `to` property",src:x,width:470}),`
`,e.jsx("img",{alt:"Correct: the `Link` component is imported and the `as` property is set to `Link` on the button",src:g,width:470}),`
`,e.jsx(n.h3,{id:"button-with-nested-icon",children:"Button with nested icon"}),`
`,e.jsx("img",{alt:"Wrong: example of nested Icon componente inside Button",src:r,width:470}),`
`,e.jsx("img",{alt:"Correct: the new IconButton component is used instead",src:c,width:470}),`
`,e.jsx(n.h3,{id:"button-with-nested-react-component",children:"Button with nested React component"}),`
`,e.jsx("img",{alt:"Wrong: a React component is used in button label instead of plain string",src:d,width:470}),`
`,e.jsx("img",{alt:"Correct: the button label contains only string and React component is extracted next to it",src:a,width:470}),`
`,e.jsx(n.h3,{id:"button-with-icon-after-label",children:"Button with icon after label"}),`
`,e.jsx("img",{alt:"Wrong: an Icon component is used next to the button label",src:l,width:470}),`
`,e.jsx("img",{alt:"Correct: the `iconEnd` property is correctly used and the button label contains only string",src:h,width:470})]})}function T(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{T as default};
//# sourceMappingURL=buttonV2Migration-BAVUEjGk.js.map
