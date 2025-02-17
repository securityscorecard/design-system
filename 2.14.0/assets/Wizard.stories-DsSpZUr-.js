import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{W as n,a as r}from"./WizardStep-DBMSpWRq.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./index-BRIjTykA.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-CwwveOyd.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-DA8sC3zT.js";import"./Padbox-BYX1bb3x.js";import"./index-DxcpycWO.js";import"./index-DkH2SPrY.js";import"./prop-gA1VFyoz.js";import"./Inline--xZ0784D.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-lwRIG2k3.js";import"./useLogger-DhLFZSdg.js";import"./DSProvider-CPYqWFL_.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-CuR_b8_I.js";import"./Modal-DbRpHYPV.js";import"./useOuterCallback-D92qb2E8.js";import"./index-dIq9_GSP.js";import"./index-BZ9CBGB8.js";import"./Heading-wrYorEub.js";import"./mergeRefs-C43w_hK8.js";import"./index-54z-fB9T.js";import"./index-DRm3KUNF.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DYTBfTru.js";import"./CloseButton-lVEJVCaq.js";import"./IconButton-BV8xP9mH.js";import"./components-Crj7JrGD.js";import"./index-CUzBbf6F.js";import"./Icon-Bh7zeEtc.js";import"./index-DbwGX_n3.js";import"./index-CqkKBNL-.js";import"./Spinner-ByPeh1d6.js";import"./FloatingContext-f-xOTKfR.js";import"./Button-DDUAhNoT.js";import"./Step-BaoOFBFd.js";import"./useContainerQuery-uyIEPHxz.js";import"./index-Cqf_csgT.js";const be={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}},tags:["deprecated"]},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),p=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),a=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(g=(u=p.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,W,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(h=(W=a.parameters)==null?void 0:W.docs)==null?void 0:h.source}}};var T,z,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const ke=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,p as TwoStepWizard,a as WithBackwardsNavigation,s as WithInitialStep,ke as __namedExportsOrder,be as default};
//# sourceMappingURL=Wizard.stories-DsSpZUr-.js.map
