import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as y}from"./index-BwDkhjyp.js";import{a as K}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as M}from"./storybook-CBhUmier.js";import"./index-Dr0gF0_N.js";import"./index-g6a7d4VX.js";import{S as o,a as l,b as A}from"./Step-BWh7a88_.js";import"./index-C96gsHyQ.js";import{P as J}from"./index-Tm3zSpl6.js";import{P as Q}from"./Padbox-D7p1agbO.js";import{S as i}from"./index-DswKY91G.js";import{I as x}from"./Inline.enums-BAfT2b1A.js";import{B as S}from"./Button-T7SulGoU.js";import{d as j}from"./Heading-OQqo7-4O.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./_isObject-BZZHHNGj.js";import"./space.enums-FzolKu9U.js";import"./zipObj-C0uoDeoJ.js";import"./index-DHWdU5FP.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-CajKmcpa.js";import"./index-BAFidxi4.js";import"./constants-C4Oh6sKJ.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-olwqu5YC.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BV2AIPN5.js";import"./index-DseqSOhp.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-B9Ea3eoS.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";import"./Cluster-x6SODxoc.js";import"./mergeRefs-BjwOtpm_.js";import"./useContainerQuery-BBrWYpwZ.js";import"./index-iel8gM5l.js";const Ye={title:"components/Stepper",component:o,subcomponents:{Step:l},parameters:{docs:{description:{component:"\n```js\nimport { Stepper, Step } from '@securityscorecard/design-system';\n```\n      "}},screenshot:{viewport:{width:1820,height:720}}},argTypes:{orientation:{...M("select",A)}},decorators:[a=>e.jsx(Q,{children:a()})]},p=[{label:"Shopping Cart",summary:"Review your shopping cart"},{label:"Transport",summary:"Choose a transportation type"},{label:"Payment",summary:"Choose a payment type"},{label:"Recapitulation"},{label:"Confirmation"}],c=a=>e.jsx(o,{...a,children:p.map(({label:t,summary:s})=>e.jsx(l,{label:t,summary:s,onStepClick:K("onStepClick")},t))});c.args={activeStep:0};c.parameters={screenshot:{skip:!0}};const n=a=>e.jsx(o,{...a,children:[{label:"Done step"},{label:"Active step"},{label:"Pending step"}].map(({label:t})=>e.jsx(l,{label:t},t))});n.args={activeStep:1};const m=n.bind({});m.args=n.args;m.decorators=[a=>e.jsx("div",{style:{width:"550px"},children:a()})];const b=a=>e.jsx(o,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(l,{label:t,summary:s,children:[t," content"]},t))});b.args={...n.args,orientation:A.vertical};const h=a=>e.jsx(o,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(l,{label:t,summary:s,children:[t," content"]},t))});h.args={...n.args,orientation:A.vertical,areStepsExpanded:!0};const d=({activeStep:a})=>{const[t,s]=y.useState(0);return y.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(o,{activeStep:t,orientation:"vertical",children:p.map(({label:r,summary:k},g)=>e.jsx(l,{label:r,summary:k,onStepClick:v=>{s(v??0)},children:e.jsxs(i,{gap:"md",children:[e.jsx(i,{gap:"sm",children:e.jsxs(J,{children:["Content of step ",g+1," - ",r]})}),e.jsxs(x,{gap:"md",children:[e.jsx(S,{variant:"solid",onClick:()=>s(v=>v+1),children:g+1===p.length?"Finish":"Continue"}),e.jsx(S,{disabled:g===0,variant:"text",onClick:()=>s(v=>v-1),children:"Back"})]})]})},r))}),t===p.length&&e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(S,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]})]})};d.args={activeStep:0,areStepsExpanded:!0};d.parameters={screenshot:{skip:!0}};const u=({activeStep:a})=>{const[t,s]=y.useState(0);return y.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(o,{activeStep:t,children:p.map(({label:r,summary:k})=>e.jsx(l,{label:r,summary:k,onStepClick:g=>{s(g??0)}},r))}),t===p.length?e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(S,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]}):e.jsxs(i,{gap:"xl",children:[e.jsxs(i,{gap:"md",children:[e.jsx(j,{children:p[t].label}),e.jsxs(J,{children:["Content of step ",t," - ",p[t].label]})]}),e.jsxs(x,{gap:"md",justify:"space-between",children:[e.jsx(S,{disabled:t===0,variant:"outline",onClick:()=>s(r=>r-1),children:"Previous"}),e.jsx(S,{variant:"outline",onClick:()=>s(r=>r+1),children:t+1===p.length?"Finish":"Next"})]})]})]})};u.args={activeStep:0};u.parameters={screenshot:{skip:!0}};var f,C,P;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Stepper {...args}>
    {steps.map(({
    label,
    summary
  }) => <Step key={label} label={label} summary={summary} onStepClick={action('onStepClick')} />)}
  </Stepper>`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var B,E,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => <Stepper {...args}>
    {[{
    label: 'Done step'
  }, {
    label: 'Active step'
  }, {
    label: 'Pending step'
  }].map(({
    label
  }) => <Step key={label} label={label} />)}
  </Stepper>`,...(D=(E=n.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var H,w,I;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Stepper {...args}>
    {[{
    label: 'Done step'
  }, {
    label: 'Active step'
  }, {
    label: 'Pending step'
  }].map(({
    label
  }) => <Step key={label} label={label} />)}
  </Stepper>`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var R,V,F;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Stepper {...args}>
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
  </Stepper>`,...(F=(V=b.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var T,W,_;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Stepper {...args}>
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
  </Stepper>`,...(_=(W=h.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,L,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,q,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ze=["Playground","StepTypes","WithHiddenLabels","Vertical","VerticalWithExpandedSteps","VerticalExample","HorizontalExample"];export{u as HorizontalExample,c as Playground,n as StepTypes,b as Vertical,d as VerticalExample,h as VerticalWithExpandedSteps,m as WithHiddenLabels,Ze as __namedExportsOrder,Ye as default};
//# sourceMappingURL=Stepper.stories-C7uqCgnH.js.map
