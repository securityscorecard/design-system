import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a as w}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{W as s,a as r}from"./WizardStep-B7WBOxkn.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./index-BQsZAX6J.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-CeGY6Ei3.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./index-Ozu0POZL.js";import"./Padbox-DPWp-bzC.js";import"./index-DxcpycWO.js";import"./index-BnuP2NC2.js";import"./prop-CVCEMdxf.js";import"./Inline.enums-Bs7GfXP0.js";import"./Cluster-DiauHNp4.js";import"./useLogger-BVsKAY55.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-DjtFZXhd.js";import"./Modal-CExHe_S2.js";import"./useOuterCallback-CJ5emATz.js";import"./index-B4kzUT7Q.js";import"./index-Ds_B4qJH.js";import"./Heading-Dw5B582O.js";import"./mergeRefs-D2M2BR1V.js";import"./index-0K9MvtJv.js";import"./index-BsP7FXMl.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-Cal9QCFP.js";import"./CloseButton-CA3EgCdD.js";import"./IconButton-C7WqqEmt.js";import"./components-D0pVc94e.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-DbwGX_n3.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./FloatingContext-Iczo9egI.js";import"./Button-B9sDvBNH.js";import"./Step-B5MO16IM.js";import"./useContainerQuery-Cae4Sqz1.js";import"./index-gVnCqFBT.js";const ye={title:"components/Wizard",component:s,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}},tags:["deprecated"]},m=({isBackwardNavigationEnabled:o=!1,initialStep:N=void 0})=>e.jsxs(s,{initialStep:N,isBackwardNavigationEnabled:o,onStepChange:w("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(s,{onStepChange:w("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),n=()=>e.jsx(m,{initialStep:"step-two"});i.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"TwoStepWizard"};p.__docgenInfo={description:"",methods:[],displayName:"WithBackwardsNavigation"};n.__docgenInfo={description:"",methods:[],displayName:"WithInitialStep"};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,g,u;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,W,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(x=(W=p.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var T,y,z;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(z=(y=n.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const ze=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,a as TwoStepWizard,p as WithBackwardsNavigation,n as WithInitialStep,ze as __namedExportsOrder,ye as default};
//# sourceMappingURL=Wizard.stories-Xwqq2RWI.js.map
