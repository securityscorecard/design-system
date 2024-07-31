import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as y}from"./chunk-454WOBUV-DWuJqIWT.js";import{W as s,a as r}from"./WizardStep-BReBtNbM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./index-Dk74W0Oi.js";import"./Surface-Cs7tekjF.js";import"./space-B9R18Mwn.js";import"./index-CVyJwDg7.js";import"./flex.types-q2tZp175.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./Modal-Bil95eKm.js";import"./useOuterCallback-D_VzbQoG.js";import"./BaseOverlay-DOzxuK0O.js";import"./Heading-Doa2oxzU.js";import"./mergeRefs-CX7C4EOn.js";import"./index-DFvsTZbx.js";import"./CloseButton-CuyKiBXp.js";import"./Icon-B7DxM8PH.js";import"./FloatingContext-nGTlWJDF.js";import"./Button-CKE-X77u.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./Step-DMccgvwb.js";import"./useContainerQuery-BBpl-5uo.js";import"./Text-C1sA-5dj.js";import"./check-DkA7BUy7.js";const he={title:"components/Wizard",component:s,subcomponents:{WizardStep:r},parameters:{docs:{inlineStories:!1,iframeHeight:500,source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:N=void 0})=>e.jsxs(s,{initialStep:N,isBackwardNavigationEnabled:o,onStepChange:y("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(s,{onStepChange:y("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),n=()=>e.jsx(m,{initialStep:"step-two"});i.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"TwoStepWizard"};p.__docgenInfo={description:"",methods:[],displayName:"WithBackwardsNavigation"};n.__docgenInfo={description:"",methods:[],displayName:"WithInitialStep"};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,W,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(x=(W=p.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var T,z,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const We=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,a as TwoStepWizard,p as WithBackwardsNavigation,n as WithInitialStep,We as __namedExportsOrder,he as default};
