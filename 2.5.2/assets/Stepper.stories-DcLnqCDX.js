import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as y}from"./index-CTjT7uj6.js";import{a as K}from"./chunk-454WOBUV-DWuJqIWT.js";import{g as M}from"./storybook-BltFH4CS.js";import"./index-Dyk1lTu2.js";import"./index-DR5XHNKF.js";import{S as o,a as l,b as A}from"./Step-fvguVhE_.js";import"./index-CzcvDuwe.js";import{P as J}from"./index-CHxAjElR.js";import{S as i}from"./index-nwGNxYyI.js";import{B as S}from"./Button-DBUI4Jbs.js";import{H as j}from"./Heading-ZGNgTxwI.js";import{P as Q}from"./Padbox-DcClumXL.js";import{I as x}from"./Inline.enums-DB1XHHNB.js";import"./v4-D8aEg3BZ.js";import"./index-DT7C7tog.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./zipObj-Cc13prBD.js";import"./index-DOqtWUVi.js";import"./index-C7IrpltL.js";import"./index-uyLpYamY.js";import"./index-CECIl5yl.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BRbW6gx4.js";import"./index-CY6BXmKt.js";import"./Spinner-B9l4ubnC.js";import"./index-DCTvgOp1.js";import"./Icon-B9Y_mYIL.js";import"./index-BbaO5Nb4.js";import"./isNull-DtrhChS2.js";import"./isNotNull-lH5ks6fm.js";import"./noop-XW1TVrX5.js";import"./Cluster-C2ONgLd-.js";import"./mergeRefs-CyslAdeM.js";import"./useContainerQuery-DqIcbuCK.js";import"./index-BIxA6EUN.js";const Je={title:"components/Stepper",component:o,subcomponents:{Step:l},parameters:{docs:{description:{component:"\n```js\nimport { Stepper, Step } from '@securityscorecard/design-system';\n```\n      "}},screenshot:{viewport:{width:1820,height:720}}},argTypes:{orientation:{...M("select",A)}},decorators:[a=>e.jsx(Q,{children:a()})]},p=[{label:"Shopping Cart",summary:"Review your shopping cart"},{label:"Transport",summary:"Choose a transportation type"},{label:"Payment",summary:"Choose a payment type"},{label:"Recapitulation"},{label:"Confirmation"}],c=a=>e.jsx(o,{...a,children:p.map(({label:t,summary:s})=>e.jsx(l,{label:t,summary:s,onStepClick:K("onStepClick")},t))});c.args={activeStep:0};c.parameters={screenshot:{skip:!0}};const n=a=>e.jsx(o,{...a,children:[{label:"Done step"},{label:"Active step"},{label:"Pending step"}].map(({label:t})=>e.jsx(l,{label:t},t))});n.args={activeStep:1};const m=n.bind({});m.args=n.args;m.decorators=[a=>e.jsx("div",{style:{width:"550px"},children:a()})];const b=a=>e.jsx(o,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(l,{label:t,summary:s,children:[t," content"]},t))});b.args={...n.args,orientation:A.vertical};const h=a=>e.jsx(o,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(l,{label:t,summary:s,children:[t," content"]},t))});h.args={...n.args,orientation:A.vertical,areStepsExpanded:!0};const d=({activeStep:a})=>{const[t,s]=y.useState(0);return y.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(o,{activeStep:t,orientation:"vertical",children:p.map(({label:r,summary:k},g)=>e.jsx(l,{label:r,summary:k,onStepClick:v=>{s(v??0)},children:e.jsxs(i,{gap:"md",children:[e.jsx(i,{gap:"sm",children:e.jsxs(J,{children:["Content of step ",g+1," - ",r]})}),e.jsxs(x,{gap:"md",children:[e.jsx(S,{variant:"solid",onClick:()=>s(v=>v+1),children:g+1===p.length?"Finish":"Continue"}),e.jsx(S,{disabled:g===0,variant:"text",onClick:()=>s(v=>v-1),children:"Back"})]})]})},r))}),t===p.length&&e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(S,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]})]})};d.args={activeStep:0,areStepsExpanded:!0};d.parameters={screenshot:{skip:!0}};const u=({activeStep:a})=>{const[t,s]=y.useState(0);return y.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(o,{activeStep:t,children:p.map(({label:r,summary:k})=>e.jsx(l,{label:r,summary:k,onStepClick:g=>{s(g??0)}},r))}),t===p.length?e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(S,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]}):e.jsxs(i,{gap:"xl",children:[e.jsxs(i,{gap:"md",children:[e.jsx(j,{children:p[t].label}),e.jsxs(J,{children:["Content of step ",t," - ",p[t].label]})]}),e.jsxs(x,{gap:"md",justify:"space-between",children:[e.jsx(S,{disabled:t===0,variant:"outline",onClick:()=>s(r=>r-1),children:"Previous"}),e.jsx(S,{variant:"outline",onClick:()=>s(r=>r+1),children:t+1===p.length?"Finish":"Next"})]})]})]})};u.args={activeStep:0};u.parameters={screenshot:{skip:!0}};var f,C,P;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Stepper {...args}>
    {steps.map(({
    label,
    summary
  }) => <Step key={label} label={label} summary={summary} onStepClick={action('onStepClick')} />)}
  </Stepper>`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var B,E,H;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => <Stepper {...args}>
    {[{
    label: 'Done step'
  }, {
    label: 'Active step'
  }, {
    label: 'Pending step'
  }].map(({
    label
  }) => <Step key={label} label={label} />)}
  </Stepper>`,...(H=(E=n.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var D,w,I;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => <Stepper {...args}>
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
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ke=["Playground","StepTypes","WithHiddenLabels","Vertical","VerticalWithExpandedSteps","VerticalExample","HorizontalExample"];export{u as HorizontalExample,c as Playground,n as StepTypes,b as Vertical,d as VerticalExample,h as VerticalWithExpandedSteps,m as WithHiddenLabels,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=Stepper.stories-DcLnqCDX.js.map
