import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{W as n,a as r}from"./WizardStep-Uu6lTbE9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./index-7cJ2juxC.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-DxcpycWO.js";import"./index-BtznGf-c.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-nLI0iivB.js";import"./Cluster-wkODOmrt.js";import"./useLogger-CA2WAjqk.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-D7PhDLgY.js";import"./Modal-BkEIN2lB.js";import"./useOuterCallback-D92qb2E8.js";import"./index-dIq9_GSP.js";import"./index-DnGPFhQW.js";import"./Heading-DmVkXWQm.js";import"./mergeRefs-BjwOtpm_.js";import"./index-BgMjzImo.js";import"./index-CajKmcpa.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-8Dw_EHst.js";import"./CloseButton-CJqflljN.js";import"./IconButton-Cd40Tx_f.js";import"./components-BlntQQgH.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-DbwGX_n3.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./FloatingContext-f-xOTKfR.js";import"./Button-BfyVdgm0.js";import"./Step-BQFIzqOd.js";import"./useContainerQuery-uyIEPHxz.js";import"./index-CpAvg4Hc.js";const we={title:"components/Wizard",component:n,subcomponents:{WizardStep:r},parameters:{docs:{story:{inline:!1,height:800},source:{type:"code"}}},tags:["deprecated"]},m=({isBackwardNavigationEnabled:o=!1,initialStep:k=void 0})=>e.jsxs(n,{initialStep:k,isBackwardNavigationEnabled:o,onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:t})=>t()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Two"}),e.jsx(r,{id:"step-three",name:"Step Three",primaryAction:{label:"Submit",onClick:({goToNextStep:t})=>t()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:t})=>t()},children:"Step Three"})]}),i=()=>e.jsx(m,{}),p=()=>e.jsxs(n,{onStepChange:b("Wizard/on-step-change"),children:[e.jsx(r,{id:"step-one",name:"Step One",primaryAction:{label:"Next Step",onClick:({goToNextStep:o})=>o()},children:"Step one"}),e.jsx(r,{id:"step-two",name:"Step Two",primaryAction:{label:"Next",onClick:({goToNextStep:o})=>o()},secondaryAction:{label:"Previous",onClick:({goToPreviousStep:o})=>o()},children:"Step Two"})]}),a=()=>e.jsx(m,{isBackwardNavigationEnabled:!0}),s=()=>e.jsx(m,{initialStep:"step-two"});var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <WizardTemplate />",...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,g;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(g=(u=p.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,W,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"() => <WizardTemplate isBackwardNavigationEnabled />",...(h=(W=a.parameters)==null?void 0:W.docs)==null?void 0:h.source}}};var T,z,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:'() => <WizardTemplate initialStep="step-two" />',...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const be=["Playground","TwoStepWizard","WithBackwardsNavigation","WithInitialStep"];export{i as Playground,p as TwoStepWizard,a as WithBackwardsNavigation,s as WithInitialStep,be as __namedExportsOrder,we as default};
//# sourceMappingURL=Wizard.stories-DfBh7DWu.js.map
