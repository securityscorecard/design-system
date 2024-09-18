import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as b}from"./chunk-454WOBUV-DWuJqIWT.js";import{W as n,a as r}from"./WizardStep-DJArwctX.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./index-h7qFssqm.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DT7C7tog.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";import"./index-C7IrpltL.js";import"./index-CISbCLO7.js";import"./prop-BK8rocxd.js";import"./Inline.enums-Dxp6-wcT.js";import"./Cluster-DithqAUq.js";import"./useLogger-BRbW6gx4.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./index-CyDI49_r.js";import"./useOuterCallback-QFNlztp2.js";import"./index-BkEniAtJ.js";import"./index-CzcvDuwe.js";import"./Heading-ZGNgTxwI.js";import"./mergeRefs-CyslAdeM.js";import"./index-CECIl5yl.js";import"./index-uyLpYamY.js";import"./isFunction-CoLsl8nV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-BPT15Fxp.js";import"./CloseButton-CsFb1uAV.js";import"./IconButton-BuN5sAFu.js";import"./components-CuVdvoC-.js";import"./index-CHR41AfE.js";import"./Icon-CG4jHxtF.js";import"./index-BRV0Se7Z.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./FloatingContext-Bsi7uTe6.js";import"./Button-D3qY9K8F.js";import"./Step-DVCIU63Y.js";import"./useContainerQuery-DqIcbuCK.js";import"./index-XqRGyOl1.js";const xe={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Wizard.stories-wcxwzJ9C.js.map
