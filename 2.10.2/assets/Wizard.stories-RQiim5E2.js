import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{W as n,a as r}from"./WizardStep-D8fB23J2.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BgZRODrj.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./index-CVyJwDg7.js";import"./index-C7NqzKU7.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-Dhd6yXoj.js";import"./Cluster-BeQ8Kfla.js";import"./useLogger-CeNh0Atc.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-A9z14S2A.js";import"./useOuterCallback-CsuasNJq.js";import"./index-CvvN4_Vk.js";import"./index-g4nZnKup.js";import"./Heading-CHUwBEJk.js";import"./mergeRefs-BjwOtpm_.js";import"./index-D6mk1gl9.js";import"./index-CajKmcpa.js";import"./isFunction-BAANUD86.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-C-7vAVjh.js";import"./CloseButton-DlurLOPy.js";import"./IconButton-DByWM6Xn.js";import"./components-CbPQWOa6.js";import"./index-CodEEOgp.js";import"./Icon-CCnW0-hW.js";import"./index-Dk74W0Oi.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./FloatingContext-Cr2ZSxO5.js";import"./Button-Dg7nljpV.js";import"./Step-B7APi95q.js";import"./useContainerQuery-BBrWYpwZ.js";import"./index-P638_79P.js";const ze={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),p=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),a=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(x=(u=p.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var W,g,h;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var T,z,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const we=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,p as TwoStepWizard,a as WithBackwardsNavigation,s as WithInitialStep,we as __namedExportsOrder,ze as default};
//# sourceMappingURL=Wizard.stories-RQiim5E2.js.map
