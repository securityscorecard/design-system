import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as w}from"./chunk-454WOBUV-CM0pFb8Z.js";import{W as s,a as r}from"./WizardStep-CHQmzbgU.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-C1kpn3a9.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./_isObject-BZZHHNGj.js";import"./slice-CaMqkvGm.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./index-C7IrpltL.js";import"./index-FmXXYKzo.js";import"./prop-CgNUfcFy.js";import"./Inline.enums-CsgpNQwN.js";import"./Cluster-BnO1HbAj.js";import"./useLogger-BdR6T79l.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-PC5aHHT7.js";import"./useOuterCallback-DTPxGhlC.js";import"./index-C0LbFgwF.js";import"./index-LvHYR_Fi.js";import"./Heading-B8ImNJrT.js";import"./mergeRefs-Btf8uGkc.js";import"./index-BkLmc-fh.js";import"./index-BsP7FXMl.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-lS962czg.js";import"./CloseButton-DSRlqFcT.js";import"./IconButton-CKUQpq1U.js";import"./components-CjIxgO6S.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-BRV0Se7Z.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./FloatingContext-C7MQzhpq.js";import"./Button-jQCIxIJA.js";import"./Step-BO40cqo5.js";import"./useContainerQuery-DfiLLmFV.js";import"./index-CUGQ8N4L.js";const Te={title:"components/Wizard",component:s,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:N=void 0})=>e.jsxs(s,{initialStep:N,isBackwardNavigationEnabled:o,onStepChange:w("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(s,{onStepChange:w("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),n=()=>e.jsx(m,{initialStep:"step-two"});i.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"TwoStepWizard"};p.__docgenInfo={description:"",methods:[],displayName:"WithBackwardsNavigation"};n.__docgenInfo={description:"",methods:[],displayName:"WithInitialStep"};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,W,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(x=(W=p.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var T,y,z;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(z=(y=n.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const ye=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,a as TwoStepWizard,p as WithBackwardsNavigation,n as WithInitialStep,ye as __namedExportsOrder,Te as default};
//# sourceMappingURL=Wizard.stories-B159drm6.js.map
