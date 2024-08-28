import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as b}from"./chunk-454WOBUV-DWuJqIWT.js";import{W as n,a as r}from"./WizardStep-BTHS8StN.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./index-B-CeicLq.js";import"./index-C1FT5pTy.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./index-C7IrpltL.js";import"./index-DPJ-F9hp.js";import"./flex.types-BrkCVx66.js";import"./prop-B-t2KTqT.js";import"./Inline-CVToOADQ.js";import"./Cluster-DZ_NL6w4.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./index-S1j4WVfd.js";import"./useOuterCallback-QFNlztp2.js";import"./index-Ceyc17I-.js";import"./index-xeJFfyKc.js";import"./Heading-N7GgeHZF.js";import"./mergeRefs-DsscGrvh.js";import"./index-Cp1GzN7Y.js";import"./index-uyLpYamY.js";import"./isFunction-C9e5dGMJ.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-CQ4_Qafr.js";import"./CloseButton-BeO2B7D9.js";import"./IconButton-C1FilO1y.js";import"./components-Tmbw27rw.js";import"./index-Cvv1KPJl.js";import"./Icon-Ctrq9sYp.js";import"./index-C95nPCzM.js";import"./Spinner-BvaTOgAJ.js";import"./FloatingContext-Bsi7uTe6.js";import"./Button-B2HZICot.js";import"./Step-3_l2xEaU.js";import"./useContainerQuery-DqIcbuCK.js";import"./index-DXjoAeTX.js";const xe={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{inlineStories:!1,iframeHeight:500,source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Wizard.stories-DxrEIrJH.js.map
