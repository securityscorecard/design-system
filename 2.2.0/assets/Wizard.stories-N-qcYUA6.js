import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as b}from"./chunk-454WOBUV-DWuJqIWT.js";import{W as n,a as r}from"./WizardStep-CK0vle30.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./Surface-DpLLkhSd.js";import"./space-1LtLrmuu.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./prop-DG2n0FAQ.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./index-TJHuq_d-.js";import"./useOuterCallback-Mi4Xn43N.js";import"./BaseOverlay-C1Jhhd36.js";import"./Heading-C-vyOsFk.js";import"./mergeRefs-sWHjowoU.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./CloseButton-Ddazfl7Y.js";import"./Icon-4JNizDXH.js";import"./FloatingContext-C7r7lnEb.js";import"./Button-vDRI25at.js";import"./BaseButton-D1TUSAxp.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";import"./Step-L30_CSD3.js";import"./useContainerQuery-DwI_GXhF.js";import"./Text-DTP2ysh1.js";import"./check-DkA7BUy7.js";const We={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{inlineStories:!1,iframeHeight:500,source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
