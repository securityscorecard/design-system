import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as y}from"./chunk-454WOBUV-DWuJqIWT.js";import{W as s,a as r}from"./WizardStep-B0YFKFKB.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./Surface-CvF-S7pg.js";import"./space-BY85GhUc.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./prop-Cw0eZkJ_.js";import"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import"./Modal-B_DN_WRz.js";import"./useOuterCallback-Mi4Xn43N.js";import"./BaseOverlay-Cpz_dJZI.js";import"./Heading-5wHX6smU.js";import"./mergeRefs-BUQjZHg5.js";import"./index-DFvsTZbx.js";import"./CloseButton-B_hKnNOh.js";import"./Icon-DSPfH_8v.js";import"./FloatingContext-CTHtuARV.js";import"./Button-CgUf0TwU.js";import"./BaseButton-Bl-0NeNF.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-b5BYo8Sk.js";import"./isNotNull-D2Wrs3cn.js";import"./noop-CRTpovv1.js";import"./Step-D2hbL-IZ.js";import"./useContainerQuery-DwI_GXhF.js";import"./Text-CQej7zPl.js";import"./check-DkA7BUy7.js";const ge={title:"components/Wizard",component:s,subcomponents:{WizardStep:r},parameters:{docs:{inlineStories:!1,iframeHeight:500,source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:N=void 0})=>e.jsxs(s,{initialStep:N,isBackwardNavigationEnabled:o,onStepChange:y("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(s,{onStepChange:y("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),n=()=>e.jsx(m,{initialStep:"step-two"});i.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"TwoStepWizard"};p.__docgenInfo={description:"",methods:[],displayName:"WithBackwardsNavigation"};n.__docgenInfo={description:"",methods:[],displayName:"WithInitialStep"};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,W,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(x=(W=p.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var T,z,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const he=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,a as TwoStepWizard,p as WithBackwardsNavigation,n as WithInitialStep,he as __namedExportsOrder,ge as default};
