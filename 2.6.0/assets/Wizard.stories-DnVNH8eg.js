import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as b}from"./chunk-454WOBUV-CM0pFb8Z.js";import{W as n,a as r}from"./WizardStep-Bmwztrw5.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-DozTNYRt.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-CbknQUej.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./index-C7IrpltL.js";import"./index-NWhnjyl5.js";import"./prop-CqBAad6K.js";import"./Inline.enums-DlaUPeKw.js";import"./Cluster-CO02VLRh.js";import"./useLogger-XTihx-r2.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./index-BLQpKnZy.js";import"./useOuterCallback-BTWdDzjv.js";import"./index-jf5n_qdU.js";import"./index-CcmXMBOf.js";import"./Heading-CP5qUNRg.js";import"./mergeRefs-rkkxDSpI.js";import"./index-DEer-CVx.js";import"./index-CMxDd3Da.js";import"./isFunction-ORz17Qg7.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-BjcCWu4d.js";import"./CloseButton-DolDE5X-.js";import"./IconButton-CIf20D8_.js";import"./components-9007xTyM.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-BRV0Se7Z.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./FloatingContext-Bsi7uTe6.js";import"./Button-BJCD1Rvj.js";import"./Step-DO1YQ-Eg.js";import"./useContainerQuery-DqIcbuCK.js";import"./index-uIya-cWM.js";const xe={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Wizard onStepChange={action('Wizard/on-step-change')}>
      <WizardStep id="step-one" name="Step One" primaryAction={{
      label: 'Next Step',
      onClick: ({
        goToNextStep
      }) => goToNextStep()
    }}>
        Step one
      </WizardStep>
      <WizardStep id="step-two" name="Step Two" primaryAction={{
      label: 'Next',
      onClick: ({
        goToNextStep
      }) => goToNextStep()
    }} secondaryAction={{
      label: 'Previous',
      onClick: ({
        goToPreviousStep
      }) => goToPreviousStep()
    }}>
        Step Two
      </WizardStep>
    </Wizard>;
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var W,g,h;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var T,z,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const We=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,a as TwoStepWizard,p as WithBackwardsNavigation,s as WithInitialStep,We as __namedExportsOrder,xe as default};
//# sourceMappingURL=Wizard.stories-DnVNH8eg.js.map
