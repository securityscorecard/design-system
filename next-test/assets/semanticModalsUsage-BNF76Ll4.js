import{j as t}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as l}from"./index-DUy19JZU.js";import{ae as i}from"./index-Dsf9k0-2.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DWOSZXVX.js";import"../sb-preview/runtime.js";import"./index-_KdZNTQd.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const r="/design-system/next-test/assets/SemanticModal-BinnRMin.png";function s(n){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Guides/Using semantic modals"}),`
`,t.jsx(e.h2,{id:"using-semantic-modals",children:"Using semantic modals"}),`
`,t.jsx(e.p,{children:"Several different popup actions notify the user about what is going on around the platform. Notifications through the Toast component inform him about successful action results, and about what will eventually need the user's attention. The Toast component is mostly not related to the user's immediate actions - so how do we notify the user about immediate problems?"}),`
`,t.jsx(e.p,{children:"Inside the forms, whenever there's an error, the user gets an error message. When the user clicks on a button and the following action might cause some problems, it's good to send out an alert and ask the user to either proceed with the desired action or cancel it. That's what semantic modals are for."}),`
`,t.jsx(e.p,{children:"The difference between notification and semantic modal is that notification displays the information and through actions leads you to where the problem is (another space), whereas the semantic modal allows you to execute the action directly."}),`
`,t.jsx(e.h3,{id:"semantic-modal-parameters",children:"Semantic modal parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"left"},children:"Key"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Type"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Default"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"title"}),t.jsx(e.td,{style:{textAlign:"left"},children:"string"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsx(e.td,{style:{textAlign:"left"},children:"The title of the modal (main message)"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"actions"}),t.jsx(e.td,{style:{textAlign:"left"},children:"array"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsx(e.td,{style:{textAlign:"left"},children:"Array accepts two ojects with properties described below - for primary and secondary button action"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"onClose"}),t.jsx(e.td,{style:{textAlign:"left"},children:"function"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsx(e.td,{style:{textAlign:"left"},children:"Executes whatever should happen on close button click"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"variant"}),t.jsx(e.td,{style:{textAlign:"left"},children:"string"}),t.jsx(e.td,{style:{textAlign:"left"},children:"info"}),t.jsxs(e.td,{style:{textAlign:"left"},children:["Options are ",t.jsx(e.code,{children:"info"}),", ",t.jsx(e.code,{children:"warn"}),", ",t.jsx(e.code,{children:"error"})," and ",t.jsx(e.code,{children:"ban"})]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"primaryButtonColor"}),t.jsx(e.td,{style:{textAlign:"left"},children:"string"}),t.jsx(e.td,{style:{textAlign:"left"},children:"primary"}),t.jsxs(e.td,{style:{textAlign:"left"},children:["Can be changed to ",t.jsx(e.code,{children:"error"})," or ",t.jsx(e.code,{children:"success"})]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"isPrimaryButtonLoading"}),t.jsx(e.td,{style:{textAlign:"left"},children:"boolean"}),t.jsx(e.td,{style:{textAlign:"left"},children:"false"}),t.jsxs(e.td,{style:{textAlign:"left"},children:["If there's an ongoing process, we can turn the button into ",t.jsx(e.code,{children:"loading"})," until the process resolves"]})]})]})]}),`
`,t.jsx(e.h4,{id:"action",children:"Action"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"left"},children:"Key"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Type"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Default"}),t.jsx(e.th,{style:{textAlign:"left"},children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"label"}),t.jsx(e.td,{style:{textAlign:"left"},children:"string"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsx(e.td,{style:{textAlign:"left"},children:"Action name of the button"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"onClick"}),t.jsx(e.td,{style:{textAlign:"left"},children:"function"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsx(e.td,{style:{textAlign:"left"},children:"Sets what happens on the button click"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"left"},children:"name"}),t.jsx(e.td,{style:{textAlign:"left"},children:"string"}),t.jsx(e.td,{style:{textAlign:"left"}}),t.jsx(e.td,{style:{textAlign:"left"},children:"Button name parameter"})]})]})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`
import { SemanticModal, SemanticModalEnums } from 'securityscorecard/design-system';

/** ex. tries to turn off 2FA for the whole company
* this is not a desired action from the security standpoint
* to make sure this action is not made by accident
* we alert the user to confirm this is really what he wants to do
*/

const turnOff2FAModal = () => (
  <SemanticModal
    title="Turning off 2FA"
    message="You are going to turn off 2FA enforcement for your company. This action will decrease your sign up security. Are you sure you want to proceed?"
    actions={[
      {
        label: "Turn off 2FA",
        name: "turn off 2FA",
        onClick: () => proceed(),
      },
      {
        label: "Cancel",
        name: "cancel",
        onClick: () => cancel(),
      },
    ]}
    variant="danger"
    primaryButtonColor="error"
  />
);

...
  if(set2FA(user, false)) {
    displayModal(turnOff2FAModal, true)
  }

`})}),`
`,t.jsx("img",{alt:"Example of rendered SemanticModal",src:r,width:640})]})}function g(n={}){const{wrapper:e}={...l(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{g as default};
//# sourceMappingURL=semanticModalsUsage-BNF76Ll4.js.map
