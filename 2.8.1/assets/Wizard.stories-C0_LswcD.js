import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as b}from"./chunk-454WOBUV-CM0pFb8Z.js";import{W as n,a as r}from"./WizardStep-CSqJWjg2.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-DKUwlGz1.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-DxUWnzkt.js";import"./index-B1HIS_mG.js";import"./Padbox-BddxODtE.js";import"./index-C7IrpltL.js";import"./index-C1DSbQpy.js";import"./prop-DvyrXmKl.js";import"./Inline.enums-CG-V8ygw.js";import"./Cluster-Bh3LKsFx.js";import"./useLogger-DkXBJUOu.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./index-BfOIbi0E.js";import"./useOuterCallback-Dk3S8c2F.js";import"./index-jf5n_qdU.js";import"./index-DlSmv1aO.js";import"./Heading-Cf7gMq0j.js";import"./mergeRefs-ezcFPe0V.js";import"./index-BkSsiqLF.js";import"./index-DBr7mztH.js";import"./isFunction-CFc181nM.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DIPrMsAG.js";import"./CloseButton-BVE5nk-T.js";import"./IconButton-DVi0OZlk.js";import"./components-CYX7eQ8t.js";import"./index-CmRxaJ3P.js";import"./Icon-Nxma5B5F.js";import"./index-BRV0Se7Z.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./FloatingContext-Bsi7uTe6.js";import"./Button-B0SYPtI0.js";import"./Step-CXtdYJvw.js";import"./useContainerQuery-DqIcbuCK.js";import"./index-x37bp9TC.js";const xe={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}}},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),a=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),p=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Wizard.stories-C0_LswcD.js.map
