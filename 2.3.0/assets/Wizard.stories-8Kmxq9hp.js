import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as y}from"./chunk-454WOBUV-DWuJqIWT.js";import{W as s,a as r}from"./WizardStep-DHnxVSo1.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./index-CoMEwqFC.js";import"./index-DzoB_gWM.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-C7IrpltL.js";import"./index-DZoBl2Wq.js";import"./flex.types-BrkCVx66.js";import"./prop-BgpcU4fO.js";import"./Inline-DPdVYO7t.js";import"./Cluster-DaqHgnAc.js";import"./useLogger-BNYGJgyi.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./index-D8q-ojhZ.js";import"./useOuterCallback-CyPC4-G8.js";import"./index-BNZfQmvL.js";import"./index-5Whqhzhi.js";import"./Heading-B6YquQMs.js";import"./mergeRefs-B_qfXDGV.js";import"./index-beAa1auE.js";import"./index-t-vajJ9r.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-BtwkxZ3S.js";import"./CloseButton-B7KX2rrC.js";import"./IconButton-C0z_ySy5.js";import"./components-imVrW6nL.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./FloatingContext-CyxsIqHp.js";import"./Button-BMWvW0nZ.js";import"./Step-CDGPcsHY.js";import"./useContainerQuery-DfiLLmFV.js";import"./index-C_SwQgDv.js";const ue={title:"components/Wizard",component:s,subcomponents:{WizardStep:r},parameters:{docs:{inlineStories:!1,iframeHeight:500,source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:N=void 0})=>e.jsxs(s,{initialStep:N,isBackwardNavigationEnabled:o,onStepChange:y("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(s,{onStepChange:y("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),n=()=>e.jsx(m,{initialStep:"step-two"});i.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"TwoStepWizard"};p.__docgenInfo={description:"",methods:[],displayName:"WithBackwardsNavigation"};n.__docgenInfo={description:"",methods:[],displayName:"WithInitialStep"};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,W,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(x=(W=p.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var T,z,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const ge=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,a as TwoStepWizard,p as WithBackwardsNavigation,n as WithInitialStep,ge as __namedExportsOrder,ue as default};
//# sourceMappingURL=Wizard.stories-8Kmxq9hp.js.map
