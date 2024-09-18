import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{ae as a,af as o}from"./index-Dike8YnX.js";import"./index-CTjT7uj6.js";import"./iframe-BqweUOmQ.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Localization"}),`
`,e.jsx(n.h1,{id:"localization",children:"Localization"}),`
`,e.jsx(o,{children:e.jsx(n.p,{children:`Localization is the process of adapting software to different languages and
regional differences. It involves translating text, adjusting layouts, and
adapting cultural elements to meet the needs of users in various locales.
Effective localization ensures that your application is accessible and
user-friendly across different regions and languages.`})}),`
`,e.jsx(n.p,{children:"Our component library is designed with localization in mind, allowing you to easily create multilingual applications. By separating the text content from the component structure, we enable seamless integration of translations without altering the core functionality of the components."}),`
`,e.jsx(n.p,{children:"Localization not only involves translating text but also adapting to regional formatting conventions, such as date and number formats. Our localized components handle these variations automatically, ensuring a consistent user experience across different locales."}),`
`,e.jsx(n.h2,{id:"how-does-it-work",children:"How Does It Work?"}),`
`,e.jsxs(n.p,{children:["We've chosen to implement localization using ",e.jsx(n.code,{children:"i18next"})," and ",e.jsx(n.code,{children:"react-i18next"}),". This decision was made to facilitate easy integration with applications that already use this popular localization infrastructure."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"i18next"})," provides a robust framework for managing translations, while ",e.jsx(n.code,{children:"react-i18next"})," offers React-specific bindings that make it simple to use localized content within our components. This approach allows for dynamic language switching and efficient management of translation resources."]}),`
`,e.jsx(n.h2,{id:"integration-into-existing-apps",children:"Integration into Existing Apps"}),`
`,e.jsx(n.p,{children:"Integrating our localized components into your existing application is straightforward. Here are the steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Import available translations from the component library:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import enUsLang from '@securityscorecars/design-system/locales/en-US';
`})}),`
`,e.jsx(n.p,{children:"If your preferred language is not available, you can create your own translations following the same structure."}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Provide the imported or created resources to your ",e.jsx(n.code,{children:"i18next"})," configuration under the ",e.jsx(n.code,{children:"sscds"})," namespace. Here's a simple example:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUsLang from '@securityscorecars/design-system/locales/en-US';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      sscds: enUsLang,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
`})}),`
`,e.jsxs(n.p,{children:["By following these steps, your application will be set up to use the localized versions of our components. The components will automatically use the translations provided under the ",e.jsx(n.code,{children:"sscds"})," namespace, allowing for seamless integration of multiple languages in your user interface."]}),`
`,e.jsx(n.h2,{id:"available-languages",children:"Available languages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"en-US"})," - The default language"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ja-JP"})," - Japanese (日本語)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"es-ES"})," - Spanish"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pt-BR"})," - Brazilian Portuguese"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cs-CZ"})," - Czech"]}),`
`]})]})}function w(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{w as default};
//# sourceMappingURL=localization-D7ZtyPLU.js.map
