import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as b}from"./index-CTjT7uj6.js";import{a as K}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as M}from"./storybook-Bms8_Zov.js";import"./index-BnOFXWSX.js";import"./index-C1kpn3a9.js";import{S as m,a as d,b as f}from"./Step-BO40cqo5.js";import"./index-LvHYR_Fi.js";import{P as J}from"./index-zphH5PEn.js";import{P as Q}from"./Padbox-DpT_ILeC.js";import{S as i}from"./index-FmXXYKzo.js";import{I as x}from"./Inline.enums-CsgpNQwN.js";import{B as v}from"./Button-D2k_mujA.js";import{H as j}from"./Heading-B8ImNJrT.js";import"./v4-CQkTLCs1.js";import"./isObject-BZZHHNGj.js";import"./space.enums-aJQ33HT_.js";import"./zipObj-C0uoDeoJ.js";import"./index-v1YtIK4i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-BsP7FXMl.js";import"./index-BkLmc-fh.js";import"./constants-CgU6e_L6.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-DZ62ouIa.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BdR6T79l.js";import"./index-ndiHb6d5.js";import"./slice-CaMqkvGm.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./prop-CgNUfcFy.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-Dc3BNA-e.js";import"./isNull-T1j7Gx-1.js";import"./isNotNull-C3X32hrc.js";import"./noop-zffMy0O7.js";import"./Cluster-BnO1HbAj.js";import"./mergeRefs-Btf8uGkc.js";import"./useContainerQuery-DfiLLmFV.js";import"./index-CUGQ8N4L.js";const Ue={title:"components/Stepper",component:m,subcomponents:{Step:d},parameters:{docs:{description:{component:"\n```js\nimport { Stepper, Step } from '@securityscorecard/design-system';\n```\n      "}},screenshot:{viewport:{width:1820,height:720}}},argTypes:{orientation:{...M("select",f)}},decorators:[a=>e.jsx(Q,{children:a()})]},n=[{label:"Shopping Cart",summary:"Review your shopping cart"},{label:"Transport",summary:"Choose a transportation type"},{label:"Payment",summary:"Choose a payment type"},{label:"Recapitulation"},{label:"Confirmation"}],o=a=>e.jsx(m,{...a,children:n.map(({label:t,summary:s})=>e.jsx(d,{label:t,summary:s,onStepClick:K("onStepClick")},t))});o.args={activeStep:0};o.parameters={screenshot:{skip:!0}};const p=a=>e.jsx(m,{...a,children:[{label:"Done step"},{label:"Active step"},{label:"Pending step"}].map(({label:t})=>e.jsx(d,{label:t},t))});p.args={activeStep:1};const u=p.bind({});u.args=p.args;u.decorators=[a=>e.jsx("div",{style:{width:"550px"},children:a()})];const S=a=>e.jsx(m,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(d,{label:t,summary:s,children:[t," content"]},t))});S.args={...p.args,orientation:f.vertical};const g=a=>e.jsx(m,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(d,{label:t,summary:s,children:[t," content"]},t))});g.args={...p.args,orientation:f.vertical,areStepsExpanded:!0};const l=({activeStep:a})=>{const[t,s]=b.useState(0);return b.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(m,{activeStep:t,orientation:"vertical",children:n.map(({label:r,summary:k},h)=>e.jsx(d,{label:r,summary:k,onStepClick:y=>{s(y??0)},children:e.jsxs(i,{gap:"md",children:[e.jsx(i,{gap:"sm",children:e.jsxs(J,{children:["Content of step ",h+1," - ",r]})}),e.jsxs(x,{gap:"md",children:[e.jsx(v,{variant:"solid",onClick:()=>s(y=>y+1),children:h+1===n.length?"Finish":"Continue"}),e.jsx(v,{disabled:h===0,variant:"text",onClick:()=>s(y=>y-1),children:"Back"})]})]})},r))}),t===n.length&&e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(v,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]})]})};l.args={activeStep:0,areStepsExpanded:!0};l.parameters={screenshot:{skip:!0}};const c=({activeStep:a})=>{const[t,s]=b.useState(0);return b.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(m,{activeStep:t,children:n.map(({label:r,summary:k})=>e.jsx(d,{label:r,summary:k,onStepClick:h=>{s(h??0)}},r))}),t===n.length?e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(v,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]}):e.jsxs(i,{gap:"xl",children:[e.jsxs(i,{gap:"md",children:[e.jsx(j,{children:n[t].label}),e.jsxs(J,{children:["Content of step ",t," - ",n[t].label]})]}),e.jsxs(x,{gap:"md",justify:"space-between",children:[e.jsx(v,{disabled:t===0,variant:"outline",onClick:()=>s(r=>r-1),children:"Previous"}),e.jsx(v,{variant:"outline",onClick:()=>s(r=>r+1),children:t+1===n.length?"Finish":"Next"})]})]})]})};c.args={activeStep:0};c.parameters={screenshot:{skip:!0}};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};p.__docgenInfo={description:"",methods:[],displayName:"StepTypes"};S.__docgenInfo={description:"",methods:[],displayName:"Vertical"};g.__docgenInfo={description:"",methods:[],displayName:"VerticalWithExpandedSteps"};l.__docgenInfo={description:"",methods:[],displayName:"VerticalExample"};c.__docgenInfo={description:"",methods:[],displayName:"HorizontalExample"};var A,C,P;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => <Stepper {...args}>
    {steps.map(({
    label,
    summary
  }) => <Step key={label} label={label} summary={summary} onStepClick={action('onStepClick')} />)}
  </Stepper>`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var E,B,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => <Stepper {...args}>
    {[{
    label: 'Done step'
  }, {
    label: 'Active step'
  }, {
    label: 'Pending step'
  }].map(({
    label
  }) => <Step key={label} label={label} />)}
  </Stepper>`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var _,H,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`args => <Stepper {...args}>
    {[{
    label: 'Done step'
  }, {
    label: 'Active step'
  }, {
    label: 'Pending step'
  }].map(({
    label
  }) => <Step key={label} label={label} />)}
  </Stepper>`,...(D=(H=u.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var w,V,N;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`args => <Stepper {...args}>
    {[{
    label: 'Done step',
    summary: 'Done step summary'
  }, {
    label: 'Active step',
    summary: 'Active step summary'
  }, {
    label: 'Pending step',
    summary: 'Pending step summary'
  }].map(({
    label,
    summary
  }) => <Step key={label} label={label} summary={summary}>
        {label} content
      </Step>)}
  </Stepper>`,...(N=(V=S.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var R,T,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Stepper {...args}>
    {[{
    label: 'Done step',
    summary: 'Done step summary'
  }, {
    label: 'Active step',
    summary: 'Active step summary'
  }, {
    label: 'Pending step',
    summary: 'Pending step summary'
  }].map(({
    label,
    summary
  }) => <Step key={label} label={label} summary={summary}>
        {label} content
      </Step>)}
  </Stepper>`,...(W=(T=g.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var F,z,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`({
  activeStep: propsActiveStep
}) => {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    setActiveStep(propsActiveStep ?? 0);
  }, [propsActiveStep]);
  return <Stack gap="lg">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({
        label,
        summary
      }, index) => <Step key={label} label={label} summary={summary} onStepClick={step => {
        setActiveStep(step ?? 0);
      }}>
            <Stack gap="md">
              <Stack gap="sm">
                <Paragraph>
                  Content of step {index + 1} - {label}
                </Paragraph>
              </Stack>
              <Inline gap="md">
                <Button variant="solid" onClick={() => setActiveStep(prev => prev + 1)}>
                  {index + 1 === steps.length ? 'Finish' : 'Continue'}
                </Button>
                <Button disabled={index === 0} variant="text" onClick={() => setActiveStep(prev => prev - 1)}>
                  Back
                </Button>
              </Inline>
            </Stack>
          </Step>)}
      </Stepper>
      {activeStep === steps.length && <Stack gap="xl">
          <H2>All steps has been completed</H2>
          <Inline gap="md" justify="space-between">
            <Button variant="outline" onClick={() => setActiveStep(0)}>
              Reset
            </Button>
          </Inline>
        </Stack>}
    </Stack>;
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,q,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`({
  activeStep: propsActiveStep
}) => {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    setActiveStep(propsActiveStep ?? 0);
  }, [propsActiveStep]);
  return <Stack gap="lg">
      <Stepper activeStep={activeStep}>
        {steps.map(({
        label,
        summary
      }) => <Step key={label} label={label} summary={summary} onStepClick={step => {
        setActiveStep(step ?? 0);
      }} />)}
      </Stepper>
      {activeStep === steps.length ? <Stack gap="xl">
          <H2>All steps has been completed</H2>
          <Inline gap="md" justify="space-between">
            <Button variant="outline" onClick={() => setActiveStep(0)}>
              Reset
            </Button>
          </Inline>
        </Stack> : <Stack gap="xl">
          <Stack gap="md">
            <H2>{steps[activeStep].label}</H2>
            <Paragraph>
              Content of step {activeStep} - {steps[activeStep].label}
            </Paragraph>
          </Stack>
          <Inline gap="md" justify="space-between">
            <Button disabled={activeStep === 0} variant="outline" onClick={() => setActiveStep(prev => prev - 1)}>
              Previous
            </Button>
            <Button variant="outline" onClick={() => setActiveStep(prev => prev + 1)}>
              {activeStep + 1 === steps.length ? 'Finish' : 'Next'}
            </Button>
          </Inline>
        </Stack>}
    </Stack>;
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Xe=["Playground","StepTypes","WithHiddenLabels","Vertical","VerticalWithExpandedSteps","VerticalExample","HorizontalExample"];export{c as HorizontalExample,o as Playground,p as StepTypes,S as Vertical,l as VerticalExample,g as VerticalWithExpandedSteps,u as WithHiddenLabels,Xe as __namedExportsOrder,Ue as default};
//# sourceMappingURL=Stepper.stories-Pe8A16q8.js.map
