import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as a}from"./index-DUy19JZU.js";import{ae as s}from"./index-CWiD2r6-.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-5buaRU9c.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Replacing FlexContainer"}),`
`,e.jsx(n.h1,{id:"replacing-flexcontainer",children:"Replacing FlexContainer"}),`
`,e.jsx(n.p,{children:`One of the most universal tools in the design system toolbox was FlexContainer. It could turn into a row or column, and it was using the parameters the same way as CSS. It was easy to use and easy to remember.
But it also required more definitions for each element, so we have decided to use more predefined layout primitives - Inline, Stack, Center, and Cluster. And we added some extra features.`}),`
`,e.jsx(n.p,{children:"First, a short review of the replacement components called layout primitives."}),`
`,e.jsx(n.h2,{id:"padbox",children:e.jsx(n.a,{href:"?path=/docs/layout-primitives-padbox--playground",children:"Padbox"})}),`
`,e.jsx(n.p,{children:'Padbox is the only container that allows for styling, and its purpose is distancing content through padding. "PaddingSize" is the main argument, but any other styling arguments are accepted by this component.'}),`
`,e.jsx(n.h2,{id:"stack",children:e.jsx(n.a,{href:"?path=/docs/layout-primitives-stack--playground",children:"Stack"})}),`
`,e.jsxs(n.p,{children:["Stack is a flex container that has predefined flex-direction to a column. Apart from the standard flexbox column, it allows you to add the same size gaps between the elements or insert a wider gap (",e.jsx(n.code,{children:"splitAt"}),`) after a defined element.
Property `,e.jsx(n.code,{children:"isRecursive"})," allows you to insert another element with multiple children and apply the same rules to it"]}),`
`,e.jsx(n.h2,{id:"inline",children:e.jsx(n.a,{href:"?path=/docs/layout-primitives-inline--playground",children:"Inline"})}),`
`,e.jsxs(n.p,{children:["Inline is a flex container that has predefined flex-direction to a row. You can adjust ",e.jsx(n.code,{children:"justify"})," (justifyContent), ",e.jsx(n.code,{children:"align"})," (alignItems), ",e.jsx(n.code,{children:"gap size"}),", and ",e.jsx(n.code,{children:"stretch"}),"."]}),`
`,e.jsx(n.h2,{id:"center",children:e.jsx(n.a,{href:"?path=/docs/layout-primitives-center--playground",children:"Center"})}),`
`,e.jsx(n.p,{children:"Center does what you think it does - it aligns its children to the center horizontally."}),`
`,e.jsx(n.h2,{id:"cluster",children:e.jsx(n.a,{href:"?path=/docs/layout-primitives-cluster--playground",children:"Cluster"})}),`
`,e.jsx(n.p,{children:'Cluster component is quite like inline component, but in comparison to "Inline" it allows for wrapping of the content if the width is too small. This component is a good option for navigation.'}),`
`,e.jsxs(n.p,{children:["All layout primitives use ",e.jsx(n.code,{children:"justify"})," to adjust the horizontal spacing and ",e.jsx(n.code,{children:"align"})," to adjust the vertical spacing."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Let's take a look at replacement examples"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<FlexContainer justifyContent="flex-start" alignItems="center">
  <IhsIcon src={ihsLogo} alt="IHS Markit Logo" />
  <IhsText src={ihsText} alt="IHS Markit" />
</FlexContainer>
`})}),`
`,e.jsx(n.p,{children:`FlexContainer is by default row and flex-start, so it should turn to Inline instead.
Replace it with inline:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Inline align="center">
  <IhsIcon src={ihsLogo} alt="IHS Markit Logo" />
  <IhsText src={ihsText} alt="IHS Markit" />
</Inline>
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const BrandingFlexContainer = styled(FlexContainer)\`
  width: 100%;
\`;
const WhiteLabelingLogoContainer = styled(FlexContainer)\`
  ...
\`;
...

<BrandingFlexContainer justifyContent="flex-start">
  <FlexContainer flexShrink={1} flexGrow={1} flexDirection="column">
    {...someLogic}
  </FlexContainer>

  <WhiteLabelingLogoContainer
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    borderColor={
      brandingOptions.COMPANY_AND_SSC === selectedBrandingType
        ? 'transparent'
        : undefined
    }
  >
    {...moreLogic}
  </WhiteLabelingLogoContainer>
</BrandingFlexContainer>
`})}),`
`,e.jsx(n.p,{children:"replace with Stack, Inline, and Center"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const WhiteLabelingLogoContainer = styled(Padbox)\`
  display: flex;
  align-items: center;
  justify-content: center;
  ...
\`;

<Inline gap={SpaceSizes.lg} stretch="start">
  <Stack gap={SpaceSizes.md}>{...someLogic}</Stack>
  <WhiteLabelingLogoContainer
    borderColor={
      brandingOptions.COMPANY_AND_SSC === selectedBrandingType
        ? 'transparent'
        : undefined
    }
  >
    {...moreLogic}
  </WhiteLabelingLogoContainer>
</Inline>;
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<FlexContainer
  className="language-select-option"
  justifyContent="space-between"
  alignItems="center"
>
  {...someCode}
</FlexContainer>
`})}),`
`,e.jsx(n.p,{children:"replace with Inline"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Inline
  className="language-select-option"
  justify="space-between"
  align="center"
>
  {...someCode}
</Inline>
`})})]})}function u(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
//# sourceMappingURL=replacingFlexContainer-CGSCQkEL.js.map
