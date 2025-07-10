import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{W as n,a as r}from"./WizardStep-DJHDq0iZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./index-Dg7OEBei.js";import"./styled-components.browser.esm-C8HMneKs.js";import"./index-D5D9nAa6.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-CT2OIHT-.js";import"./Padbox-CTuFGL01.js";import"./index-DxcpycWO.js";import"./index-BXECzo_T.js";import"./prop-gA1VFyoz.js";import"./Inline-ErbB6jzf.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-D835thia.js";import"./useLogger-DUeFF7SW.js";import"./DSProvider-_CMlen06.js";import"./index-Dw8zQ6WV.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-BVVC22h1.js";import"./Modal-CWe8FTW4.js";import"./useOuterCallback--QVL0YIA.js";import"./index-AIrFeNaR.js";import"./index-B66493Qf.js";import"./Heading-CXc6CPe3.js";import"./mergeRefs-C43w_hK8.js";import"./index-slDD0MBU.js";import"./index-DRm3KUNF.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-BtW3Due7.js";import"./CloseButton-0u5dEDRm.js";import"./IconButton-DxUJpeDG.js";import"./components-C4-LvCWm.js";import"./index-BV_a_HQq.js";import"./Icon-D5TBsI6x.js";import"./index-DbwGX_n3.js";import"./index-VHVnCIxC.js";import"./Spinner-PSPqNyRK.js";import"./FloatingContext-f-xOTKfR.js";import"./Button-ZXXHu2Zy.js";import"./Step-C-WkD1pS.js";import"./useContainerQuery-DIj571oY.js";import"./index-DFY1Tdgr.js";const be={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}},tags:["deprecated"]},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),p=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),a=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Wizard.stories-SI-hW1ca.js.map
