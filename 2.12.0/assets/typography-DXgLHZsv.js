import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as p}from"./index-DUy19JZU.js";import{ae as y}from"./index-czIRoYOr.js";import{q as l}from"./styled-components.browser.esm-6IU7b-y2.js";import"./index-BgMjzImo.js";import{t}from"./theme-B4UkYPRv.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DgSIVQ_v.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./constants-C4Oh6sKJ.js";import"./index-CajKmcpa.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-Cqa5do1Y.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./colors-BJBAFLAc.js";const x=l.div.withConfig({displayName:"FontPallete__List",componentId:"sc-vhupmc-0"})(["font-family:'Nunito Sans',-apple-system,'.SFNSText-Regular','San Francisco',BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;margin:0;font-size:14px;line-height:20px;display:flex;flex-direction:column;"]),f=l.div.withConfig({displayName:"FontPallete__ListHeading",componentId:"sc-vhupmc-1"})(["display:flex;flex-direction:row;align-items:center;padding-bottom:20px;font-weight:700;color:rgba(51,51,51,0.6);"]),u=l.div.withConfig({displayName:"FontPallete__ListName",componentId:"sc-vhupmc-2"})(["flex:0 0 35%;"]),j=l.div.withConfig({displayName:"FontPallete__ListSample",componentId:"sc-vhupmc-3"})(["flex:1;"]),w=l.div.withConfig({displayName:"FontPallete__Item",componentId:"sc-vhupmc-4"})(["display:flex;align-items:flex-start;margin-bottom:30px;"]),b=l.div.withConfig({displayName:"FontPallete__ItemDescription",componentId:"sc-vhupmc-5"})(["flex:0 0 35%;line-height:20px;"]),H=l.div.withConfig({displayName:"FontPallete__ItemTitle",componentId:"sc-vhupmc-6"})(["font-weight:700;color:#333333;word-break:break;"]),S=l.div.withConfig({displayName:"FontPallete__ItemSubtitle",componentId:"sc-vhupmc-7"})(["color:rgba(51,51,51,0.8);"]),z=l.div.withConfig({displayName:"FontPallete__SampleText",componentId:"sc-vhupmc-8"})(["flex:1;font-family:",";font-weight:",";font-size:",";line-height:",";"],({fontFamily:n})=>n,({fontWeight:n})=>n,({fontSize:n})=>n,({lineHeight:n})=>n),o=({title:n,subtitle:i,fontFamily:r=t.typography.family.base,fontWeight:m=t.typography.weight.regular,fontSize:g=t.typography.size.lg,lineHeight:d="normal",sampleText:c})=>e.jsxs(w,{children:[e.jsxs(b,{children:[e.jsx(H,{children:n}),e.jsx(S,{children:i})]}),e.jsx(z,{fontFamily:r,fontWeight:m,fontSize:g,lineHeight:d,children:c})]}),a=({children:n,...i})=>e.jsxs(x,{...i,children:[e.jsxs(f,{children:[e.jsx(u,{children:"Name"}),e.jsx(j,{children:"Sample"})]}),n]}),s=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra
magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut
leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et.`;function h(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Theme/Typography"}),`
`,e.jsx(i.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(i.p,{children:[`Design System have defined two basic font families. As base font family we are using sans-serif
`,e.jsx(i.code,{children:"Inter"})," font, for monospaced text we are using ",e.jsx(i.code,{children:"Space Mono"}),` font. These fonts are not bundled
together with the Design System and need to be installed separately.`]}),`
`,e.jsx(i.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(i.h3,{id:"yarn",children:"yarn"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`yarn add @fontsource/inter @fontsource/space-mono
`})}),`
`,e.jsx(i.h3,{id:"npm",children:"npm"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @fontsource/inter @fontsource/space-mono
`})}),`
`,e.jsx(i.h3,{id:"google-web-fonts",children:"Google Web Fonts"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
  rel="stylesheet"
/>
`})}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.h3,{id:"families",children:"Families"}),`
`,e.jsxs(a,{children:[e.jsx(o,{fontFamily:t.typography.family.base,sampleText:s,subtitle:"Inter",title:"theme.typography.family.base"}),e.jsx(o,{fontFamily:t.typography.family.mono,sampleText:s,subtitle:"SpaceMono",title:"theme.typography.family.mono"})]}),`
`,e.jsx(i.h3,{id:"font-weights",children:"Font weights"}),`
`,e.jsxs(a,{children:[e.jsx(o,{fontWeight:t.typography.weight.light,sampleText:s,subtitle:"Light weight",title:"theme.typography.weight.light"}),e.jsx(o,{fontWeight:t.typography.weight.regular,sampleText:s,subtitle:"Regular weight, monospace font can be used only with regular weight",title:"theme.typography.weight.regular"}),e.jsx(o,{fontWeight:t.typography.weight.medium,sampleText:s,subtitle:"Medium weight",title:"theme.typography.weight.medium"}),e.jsx(o,{fontWeight:t.typography.weight.semibold,sampleText:s,subtitle:"Semibold weight",title:"theme.typography.weight.semibold"}),e.jsx(o,{fontWeight:t.typography.weight.bold,sampleText:s,subtitle:"Bold weight",title:"theme.typography.weight.bold"})]}),`
`,e.jsx(i.h3,{id:"font-sizes",children:"Font sizes"}),`
`,e.jsx(i.h4,{id:"headings",children:"Headings"}),`
`,e.jsxs(a,{children:[e.jsx(o,{fontSize:t.typography.size.h1,fontWeight:t.typography.weight.medium,lineHeight:t.typography.lineHeight.xxl,sampleText:"Heading H1",subtitle:"Page-level headers",title:"theme.typography.size.h1"}),e.jsx(o,{fontSize:t.typography.size.h2,fontWeight:t.typography.weight.medium,lineHeight:t.typography.lineHeight.xxl,sampleText:"Heading H2",subtitle:"Section and column headers",title:"theme.typography.size.h2"}),e.jsx(o,{fontSize:t.typography.size.h3,fontWeight:t.typography.weight.medium,lineHeight:t.typography.lineHeight.xl,sampleText:"Heading H3",subtitle:"Subsection headers",title:"theme.typography.size.h3"}),e.jsx(o,{fontSize:t.typography.size.h4,fontWeight:t.typography.weight.medium,lineHeight:t.typography.lineHeight.lg,sampleText:"Heading H4",subtitle:"Block headers",title:"theme.typography.size.h4"}),e.jsx(o,{fontSize:t.typography.size.h5,fontWeight:t.typography.weight.medium,lineHeight:t.typography.lineHeight.mdPlus,sampleText:"Heading H5",subtitle:"Block headers",title:"theme.typography.size.h5"})]}),`
`,e.jsx(i.h4,{id:"body-text",children:"Body text"}),`
`,e.jsxs(a,{children:[e.jsx(o,{fontSize:t.typography.size.lg,lineHeight:t.typography.lineHeight.lg,sampleText:s,subtitle:"",title:"theme.typography.size.lg"}),e.jsx(o,{fontSize:t.typography.size.md,lineHeight:t.typography.lineHeight.md,sampleText:s,subtitle:"",title:"theme.typography.size.md"}),e.jsx(o,{fontSize:t.typography.size.sm,lineHeight:t.typography.lineHeight.md,sampleText:s,subtitle:"",title:"theme.typography.size.sm"})]})]})}function O(n={}){const{wrapper:i}={...p(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(h,{...n})}):h(n)}export{O as default,s as lipsum};
//# sourceMappingURL=typography-DXgLHZsv.js.map
