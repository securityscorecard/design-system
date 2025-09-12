import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as s}from"./index-Df2jvlcT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-5JrpLaDa.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const r="/design-system/2.34.0/assets/CopySVGcode-D_OsBPiE.png";function i(t){const n={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Add svg icon to DS icon library"}),`
`,e.jsx(n.h1,{id:"add-svg-to-the-design-system-icon-library",children:"Add SVG to the Design System icon library"}),`
`,e.jsx(n.p,{children:"When you need to add a new icon that is going to be used inside of the design system library, use the following step-by-step guide."}),`
`,e.jsx(n.h2,{id:"what-doesnt-belong-in-the-ds-icon-library",children:"What doesn't belong in the DS icon library"}),`
`,e.jsx(n.p,{children:"The design system library only has icons that are free license only and are used within the DS components as preset icons. If the icon can be added to the component through the component API, it doesn't need to be included in the design system library."}),`
`,e.jsx(n.p,{children:"When you use the free license icon, don't forget to add the license note into the file as a comment."}),`
`,e.jsx(n.h2,{id:"step-by-step-guide",children:"Step-by-step guide"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Find the icon's SVG first and copy the SVG file. Go to fontawesome.com and find the icon you want in the free license icon library. Copy the SVG code."}),`
`]}),`
`,e.jsx("img",{alt:"Copy SVG code button in the FontAwesome UI",src:r,width:240}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Create a new file in src/theme/icons and name it with your icon name using camel-case. Copy the '_template.ts' content into your file."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"In src/theme/icons/index.ts find the latest exported icon, and inside the icon's file find the icon's Unicode."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"In your file change your Unicode to the last one and add one. For example, a table has 'e030', so the next one will be 'e031'."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Copy the SVG path data from your icon file and add them as a string to the 'svgPathData'."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Set width and height properties from your icon's viewBox."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Change your export name to the icon's name."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"In src/theme/icons/index.ts export your icon as the last icon to the bottom of the file. Keep the order of icons as they are created."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Add your icon into src/theme/icons/icon.enums.ts as the last item."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run Storybook and check the icon is visible in the Icon component's list of all icons."}),`
`]}),`
`]})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
//# sourceMappingURL=addIcon-B3--Jjdx.js.map
