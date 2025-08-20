import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{W as n,a as r}from"./WizardStep-Ipdvyj89.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-CbztWzgW.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-Bfs0wQhB.js";import"./Padbox-hEmkrqba.js";import"./index-CVyJwDg7.js";import"./index-CcmHmzDo.js";import"./prop-gA1VFyoz.js";import"./Inline-B7NzMb1T.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./useLogger-O6XA1hQU.js";import"./DSProvider-CTEb0Eap.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-HdmSZXCr.js";import"./Modal-DZa5bvEg.js";import"./useOuterCallback-B34oUwCq.js";import"./index-u7CqcJ18.js";import"./index-hHKih82r.js";import"./Heading-zZHIYZQx.js";import"./mergeRefs-C43w_hK8.js";import"./index-BGhWSV4h.js";import"./index-DRm3KUNF.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DRUBFyPh.js";import"./CloseButton-D4Tk-gHy.js";import"./IconButton-D6uxzsW5.js";import"./components-DsRWzzQN.js";import"./index-CmE5poE7.js";import"./Icon-BGVJaxc5.js";import"./index-Dk74W0Oi.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./FloatingContext-Bl8tl6Fh.js";import"./Button-DJ_7XBm0.js";import"./Step-D45ajALL.js";import"./useContainerQuery-J3pQj2z2.js";import"./index-CP_iG0Cq.js";const be={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}},tags:["deprecated"]},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),p=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),a=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Wizard.stories-JANioJNh.js.map
