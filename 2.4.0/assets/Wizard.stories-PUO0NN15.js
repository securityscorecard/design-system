import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as b}from"./chunk-454WOBUV-DWuJqIWT.js";import{W as n,a as r}from"./WizardStep-DfL_MMOM.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./index-BfLWfhlY.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DzAsfYvZ.js";import"./index-BawZj8GX.js";import"./Padbox-ugjOsLS7.js";import"./index-C7IrpltL.js";import"./index-BcSnSfQB.js";import"./flex.types-BrkCVx66.js";import"./prop-CePbk9wh.js";import"./Inline-Cg9jPAAE.js";import"./Cluster-HoiIP47J.js";import"./useLogger-IjsioYUQ.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./index-BKhBOOYn.js";import"./useOuterCallback-QFNlztp2.js";import"./index-BkEniAtJ.js";import"./index-D3M05C5e.js";import"./Heading-8_WGMOaA.js";import"./mergeRefs-CmEt7Zz_.js";import"./index-4aEyDaIq.js";import"./index-uyLpYamY.js";import"./isFunction-BtTpAfvx.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-Dgakt_4W.js";import"./CloseButton-BWqOiFUV.js";import"./IconButton-Bd-lF6sc.js";import"./components-BItAEv9I.js";import"./index-DoZinuF4.js";import"./Icon-DCTBW-fe.js";import"./index-DNjKNlmW.js";import"./Spinner-qeMxdFSS.js";import"./FloatingContext-Bsi7uTe6.js";import"./Button-5uIKxvED.js";import"./Step-CIMptuoh.js";import"./useContainerQuery-DqIcbuCK.js";import"./index-BiHv5IcS.js";const We={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var W,g,h;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var T,z,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const ge=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,a as TwoStepWizard,p as WithBackwardsNavigation,s as WithInitialStep,ge as __namedExportsOrder,We as default};
//# sourceMappingURL=Wizard.stories-PUO0NN15.js.map
