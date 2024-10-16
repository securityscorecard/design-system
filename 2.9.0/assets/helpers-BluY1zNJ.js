import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{ae as s}from"./index-C2PbKq_t.js";import"./index-CTjT7uj6.js";import"./iframe-S31xae4r.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CgFWNHQ8.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Helpers/Methods"}),`
`,e.jsx(n.h1,{id:"helper-methods",children:"Helper methods"}),`
`,e.jsx(n.h3,{id:"pxtorem",children:"pxToRem"}),`
`,e.jsxs(n.p,{children:["Converts px values to rem units based on value of ",e.jsx(n.code,{children:"BASE_FONT_SIZE"}),`
constant (currently set to `,e.jsx(n.code,{children:"16"}),")."]}),`
`,e.jsx(n.p,{children:`This function takes any number of arguments and returns converted
values in given order.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { pxToRem } from '@securityscorecard/design-system';

// pxToRem :: (number | string)... -> string
pxToRem(16, auto, 0); // -> '1rem auto 0'
`})}),`
`,e.jsx(n.h3,{id:"createspacing-deprecated",children:"createSpacing (DEPRECATED)"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Layout Primitives"})," instead."]}),`
`,e.jsxs(n.p,{children:["Generates spacing values of given kind (",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"}),`)
for given value based on `,e.jsx(n.code,{children:"BASE_LINE_HEIGHT"})," constant (currently set to ",e.jsx(n.code,{children:"20"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { createSpacing } from '@securityscorecard/design-system';

// createSpacing :: Kind -> Value -> string | string[]
// Kind - 'margin' or 'padding'
// Value - number or 'none' or object
createSpacing('margin', 1); // -> margin: 1.25rem;
createSpacing('margin', 'none'); // -> margin: 0;
createSpacing('margin', { horizontal: 2, vertical: 1 });
/*
  -> margin-top: 1.25rem;
  -> margin-bottom: 1.25rem;
  -> margin-left: 2.5rem;
  -> margin-right: 2.5rem;
*/
createSpacing('margin', { top: 1, bottom: 2, left: 3, right: 4 });
/*
  -> margin-top: 1.25rem;
  -> margin-bottom: 2.5rem;
  -> margin-left: 3.75rem;
  -> margin-right: 5rem;
*/
`})}),`
`,e.jsx(n.h4,{id:"createmarginspacing-createpaddingspacing-deprecated",children:"createMarginSpacing, createPaddingSpacing (DEPRECATED)"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Layout Primitives"})," instead."]}),`
`,e.jsx(n.p,{children:"Generates spacing values for given kind."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {
  createMarginSpacing,
  createPaddingSpacing,
} from '@securityscorecard/design-system';

createMarginSpacing({ horizontal: 2, vertical: 1 });
/*
  -> margin-top: 1.25rem;
  -> margin-bottom: 1.25rem;
  -> margin-left: 2.5rem;
  -> margin-right: 2.5rem;
*/

createPaddingSpacing({ horizontal: 2, vertical: 1 });
/*
  -> padding-top: 1.25rem;
  -> padding-bottom: 1.25rem;
  -> padding-left: 2.5rem;
  -> padding-right: 2.5rem;
*/
`})}),`
`,e.jsx(n.h4,{id:"createspacings-deprecated",children:"createSpacings (DEPRECATED)"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Layout Primitives"})," instead."]}),`
`,e.jsx(n.p,{children:"Generates spacing values for both kinds."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { createSpacings } from '@securityscorecard/design-system';

createSpacings({ margin: { horizontal: 2, vertical: 1 }, padding: 4 });
/*
  -> margin-top: 1.25rem;
  -> margin-bottom: 1.25rem;
  -> margin-left: 2.5rem;
  -> margin-right: 2.5rem;
  -> padding-top: 5rem;
  -> padding-bottom: 5rem;
  -> padding-left: 5rem;
  -> padding-right: 5rem;
*/
`})}),`
`,e.jsx(n.h3,{id:"createpadding",children:"createPadding"}),`
`,e.jsxs(n.p,{children:["Generates padding of given type with given ",e.jsx(n.a,{href:"/docs/theme-space--page#inseting",children:"standard size"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { createPadding } from '@securityscorecard/design-system';

const Box = styled.div<{paddingType: PaddingType; paddingSize: SpaceSize}>\`
  \${createPadding};
\`

<Box paddingType="square" paddingSize="lg" />
/*
  -> padding: 2rem;
*/

<Box paddingType="squish" paddingSize="lg" />
/*
  -> padding: 2rem 1rem;
*/

<Box paddingType="stretch" paddingSize="lg" />
/*
  -> padding: 1rem 2rem;
*/

`})}),`
`,e.jsx(n.h2,{id:"theme-getters",children:"Theme getters"}),`
`,e.jsxs(n.p,{children:["These methods retrieving values from the ",e.jsx(n.a,{href:"/docs/theme-theme-object--page",children:"theme object"}),`
and can be used only in `,e.jsx(n.code,{children:"styled-components"})," template literals."]}),`
`,e.jsx(n.h3,{id:"getcolor",children:"getColor"}),`
`,e.jsx(n.p,{children:"Returns color from theme for given key."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getColor } from '@securityscorecard/design-system';

// getColor :: Color -> Props -> string
// Color - any key of 'ColorTypes' (src/theme/colors.enums.ts)
// Props - styled-components props object
const Component = styled.div\`
  color: \${getColor('neutral.0')};
\`; // -> color: #000;
`})}),`
`,e.jsx(n.h3,{id:"getfontfamily",children:"getFontFamily"}),`
`,e.jsx(n.p,{children:"Returns font-family chain from theme for given key."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getFontFamily } from '@securityscorecard/design-system';

// getFontFamily :: Family -> Props -> string
// Family - any key of 'family' (src/theme/typography.ts)
// Props - styled-components props object
const Component = styled.div\`
  font-family: var(--sscds-font-family-body);
\`; // -> font-family: 'Inter', 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
`})}),`
`,e.jsx(n.h3,{id:"getfontweight",children:"getFontWeight"}),`
`,e.jsx(n.p,{children:"Returns font-weight from theme for given key."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getFontWeight } from '@securityscorecard/design-system';

// getFontWeight :: Weight -> Props -> number
// Weight - any key of 'weight' (src/theme/typography.ts)
// Props - styled-components props object
const Component = styled.div\`
  font-weight: \${getFontWeight('medium')};
\`; // -> font-weight: 500;
`})}),`
`,e.jsx(n.h3,{id:"getfontsize",children:"getFontSize"}),`
`,e.jsx(n.p,{children:"Returns font-size from theme for given key."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getFontSize } from '@securityscorecard/design-system';

// getFontSize :: Size -> Props -> string
// Size - any key of 'size' (src/theme/typography.ts)
// Props - styled-components props object
const Component = styled.div\`
  font-size: \${getFontSize('lg')};
\`; // -> font-size: 15px;
`})}),`
`,e.jsx(n.h3,{id:"getlineheight",children:"getLineHeight"}),`
`,e.jsx(n.p,{children:"Returns line-height from theme for given key."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getLineHeight } from '@securityscorecard/design-system';

// getLineHeight :: Size -> Props -> string
// Size - any key of 'lineHeight' (src/theme/typography.ts)
// Props - styled-components props object
const Component = styled.div\`
  line-height: \${getLineHeight('lg')};
\`; // -> line-height: 20px;
`})}),`
`,e.jsx(n.h3,{id:"getradii",children:"getRadii"}),`
`,e.jsx(n.p,{children:"Returns border-radius from theme for given key."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getRadii } from '@securityscorecard/design-system';

// getRadii :: Type -> Props -> string
// Type - any key of 'radii' (src/theme/radii.ts)
// Props - styled-components props object
const Component = styled.div\`
  border-radius: \${getRadii('default')};
\`; // -> border-radius: 4px;
`})}),`
`,e.jsx(n.h3,{id:"getformstyle",children:"getFormStyle"}),`
`,e.jsx(n.p,{children:"Returns form style from theme for given key."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getFormStyle } from '@securityscorecard/design-system';

// getFormStyle :: Property -> Props -> string
// Property - any key of 'forms' (src/theme/forms.ts)
// Props - styled-components props object
const Component = styled.input\`
  background: \${getFormStyle('bgColor')}; // -> #fff
  border: 1px solid \${getFormStyle('borderColor')}; // -> 1px solid #b4b4b4
  color: \${getFormStyle('color')}; // -> #2a2a2a
\`;
`})}),`
`,e.jsx(n.h3,{id:"getdepth",children:"getDepth"}),`
`,e.jsx(n.p,{children:"Returns z-index from theme for given element."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getDepth } from '@securityscorecard/design-system';

// getDepth :: Element -> Props -> string
// Element - any key of 'depth' (src/theme/depths.ts)
// Props - styled-components props object
const Component = styled.input\`
  z-index: \${getDepth('modal')};
\`; // -> z-index: 1250;
`})}),`
`,e.jsx(n.h3,{id:"getspace",children:"getSpace"}),`
`,e.jsx(n.p,{children:"Returns space value from theme for given size."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getSpace } from '@securityscorecard/design-system';

// getDepth :: Element -> Props -> string
// Element - any key of 'depth' (src/theme/depths.ts)
// Props - styled-components props object
const Component = styled.input\`
  margin-bottom: \${space('m')};
\`; // -> margin-bottom: 1rem;
`})})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{u as default};
//# sourceMappingURL=helpers-BluY1zNJ.js.map
