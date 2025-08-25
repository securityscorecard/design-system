import{j as t}from"./jsx-runtime-BbjHj44Y.js";import{useMDXComponents as l}from"./index-Cd31CJfN.js";import{ae as s}from"./index-DvOX7CN-.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bi3rkE5o.js";import"../sb-preview/runtime.js";import"./index-CWFZYRor.js";import"./index-kifaGmES.js";import"./index-DrFu-skq.js";function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"managers/NotificationsProvider/Docs"}),`
`,t.jsx(e.h1,{id:"notificationsprovider",children:"NotificationsProvider"}),`
`,t.jsx(e.p,{children:"This feature provides an api to display toast notifications programatically"}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(e.p,{children:["First, you need to render in your application the ",t.jsx(e.code,{children:"NotificationsProvider"})," component."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { NotificationsProvider } from '@securityscorecard/design-system';

const App = () => (
  <>
    <NotificationsProvider />
    <YourApplication />
  </>
);
`})}),`
`,t.jsxs(e.p,{children:["Then you can use ",t.jsx(e.code,{children:"addNotification"})," function to create a new toast notification."]}),`
`,t.jsx(e.h3,{id:"component",children:"Component"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { addNotification } from '@securityscorecard/design-system';

const YourComponent = () => (
  <Button
    onClick={() => {
      addNotification({
        id: 'toast-1',
        variant: 'warn',
        content: 'The rule has been resumed',
        autoDismiss: true,
      });
    }}
  >
    Add new notification
  </Button>
);
`})}),`
`,t.jsx(e.h2,{id:"provider-functions",children:"Provider functions"}),`
`,t.jsxs(e.p,{children:["Manager functions are based on dispatching ",t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events",rel:"nofollow",children:"custom events"}),`
and hadling those events in event listeners.`]}),`
`,t.jsx(e.h3,{id:"exported-funtions",children:"Exported funtions"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"left"},children:"Key"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Type"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"addNotification"}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"(notification: Notification) => void"})}),t.jsx(e.td,{style:{textAlign:"left"},children:"Adds new notification"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"updateNotification"}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"(notification: Notification) => void"})}),t.jsx(e.td,{style:{textAlign:"left"},children:"Update notification"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"removeBanner"}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"(id: string) => void"})}),t.jsx(e.td,{style:{textAlign:"left"},children:"Remove notification"})]})]})]}),`
`,t.jsx(e.h3,{id:"notification-options",children:"Notification options"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"left"},children:"Property"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Type"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Required"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Default"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"id"}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"boolean"})}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"true"})}),t.jsx(e.td,{style:{textAlign:"left"},children:"-"}),t.jsx(e.td,{style:{textAlign:"left"},children:"Unique identifier"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"content"}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"ReactNode"})}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"true"})}),t.jsx(e.td,{style:{textAlign:"left"},children:"-"}),t.jsx(e.td,{style:{textAlign:"left"},children:"Content of the notification"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"variant"}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"'info' | 'warn' | 'error' | 'success' | 'loading'"})}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"false"})}),t.jsx(e.td,{style:{textAlign:"left"},children:"-"}),t.jsx(e.td,{style:{textAlign:"left"},children:"Specifies the type of toast notification that will be display."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"autoDismiss"}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"boolean"})}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"false"})}),t.jsx(e.td,{style:{textAlign:"left"},children:t.jsx("code",{children:"false"})}),t.jsx(e.td,{style:{textAlign:"left"},children:"If defined, notification will be auto dismissed after 6000ms"})]})]})]})]})}function p(n={}){const{wrapper:e}={...l(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{p as default};
//# sourceMappingURL=NotificationsProvider-uOI5GedV.js.map
