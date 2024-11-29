import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as b}from"./index-ClcD9ViR.js";import{a as K}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as M}from"./storybook-CzZzegut.js";import"./index-X2Iu_k3Q.js";import"./index-BQsZAX6J.js";import{S as m,a as d,b as f}from"./Step-B5MO16IM.js";import"./index-Ds_B4qJH.js";import{P as J}from"./index-BlLyJPr3.js";import{P as Q}from"./Padbox-DPWp-bzC.js";import{S as i}from"./index-BnuP2NC2.js";import{I as x}from"./Inline.enums-Bs7GfXP0.js";import{B as v}from"./Button-D7wMjAqv.js";import{d as j}from"./Heading-Dw5B582O.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./_isObject-BZZHHNGj.js";import"./space.enums-BIVz6JhH.js";import"./zipObj-C0uoDeoJ.js";import"./index-Cjy7s_Lq.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-BsP7FXMl.js";import"./index-0K9MvtJv.js";import"./constants-CHqWh-7J.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-BkfyGi5e.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BVsKAY55.js";import"./index-CeGY6Ei3.js";import"./slice-a4xO8Rfj.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./prop-CVCEMdxf.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-Ozu0POZL.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";import"./Cluster-DiauHNp4.js";import"./mergeRefs-D2M2BR1V.js";import"./useContainerQuery-Cae4Sqz1.js";import"./index-gVnCqFBT.js";const Qe={title:"components/Stepper",component:m,subcomponents:{Step:d},parameters:{docs:{description:{component:"\n```js\nimport { Stepper, Step } from '@securityscorecard/design-system';\n```\n      "}},screenshot:{viewport:{width:1820,height:720}}},argTypes:{orientation:{...M("select",f)}},decorators:[a=>e.jsx(Q,{children:a()})]},n=[{label:"Shopping Cart",summary:"Review your shopping cart"},{label:"Transport",summary:"Choose a transportation type"},{label:"Payment",summary:"Choose a payment type"},{label:"Recapitulation"},{label:"Confirmation"}],o=a=>e.jsx(m,{...a,children:n.map(({label:t,summary:s})=>e.jsx(d,{label:t,summary:s,onStepClick:K("onStepClick")},t))});o.args={activeStep:0};o.parameters={screenshot:{skip:!0}};const p=a=>e.jsx(m,{...a,children:[{label:"Done step"},{label:"Active step"},{label:"Pending step"}].map(({label:t})=>e.jsx(d,{label:t},t))});p.args={activeStep:1};const u=p.bind({});u.args=p.args;u.decorators=[a=>e.jsx("div",{style:{width:"550px"},children:a()})];const S=a=>e.jsx(m,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(d,{label:t,summary:s,children:[t," content"]},t))});S.args={...p.args,orientation:f.vertical};const g=a=>e.jsx(m,{...a,children:[{label:"Done step",summary:"Done step summary"},{label:"Active step",summary:"Active step summary"},{label:"Pending step",summary:"Pending step summary"}].map(({label:t,summary:s})=>e.jsxs(d,{label:t,summary:s,children:[t," content"]},t))});g.args={...p.args,orientation:f.vertical,areStepsExpanded:!0};const l=({activeStep:a})=>{const[t,s]=b.useState(0);return b.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(m,{activeStep:t,orientation:"vertical",children:n.map(({label:r,summary:k},h)=>e.jsx(d,{label:r,summary:k,onStepClick:y=>{s(y??0)},children:e.jsxs(i,{gap:"md",children:[e.jsx(i,{gap:"sm",children:e.jsxs(J,{children:["Content of step ",h+1," - ",r]})}),e.jsxs(x,{gap:"md",children:[e.jsx(v,{variant:"solid",onClick:()=>s(y=>y+1),children:h+1===n.length?"Finish":"Continue"}),e.jsx(v,{disabled:h===0,variant:"text",onClick:()=>s(y=>y-1),children:"Back"})]})]})},r))}),t===n.length&&e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(v,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]})]})};l.args={activeStep:0,areStepsExpanded:!0};l.parameters={screenshot:{skip:!0}};const c=({activeStep:a})=>{const[t,s]=b.useState(0);return b.useEffect(()=>{s(a??0)},[a]),e.jsxs(i,{gap:"lg",children:[e.jsx(m,{activeStep:t,children:n.map(({label:r,summary:k})=>e.jsx(d,{label:r,summary:k,onStepClick:h=>{s(h??0)}},r))}),t===n.length?e.jsxs(i,{gap:"xl",children:[e.jsx(j,{children:"All steps has been completed"}),e.jsx(x,{gap:"md",justify:"space-between",children:e.jsx(v,{variant:"outline",onClick:()=>s(0),children:"Reset"})})]}):e.jsxs(i,{gap:"xl",children:[e.jsxs(i,{gap:"md",children:[e.jsx(j,{children:n[t].label}),e.jsxs(J,{children:["Content of step ",t," - ",n[t].label]})]}),e.jsxs(x,{gap:"md",justify:"space-between",children:[e.jsx(v,{disabled:t===0,variant:"outline",onClick:()=>s(r=>r-1),children:"Previous"}),e.jsx(v,{variant:"outline",onClick:()=>s(r=>r+1),children:t+1===n.length?"Finish":"Next"})]})]})]})};c.args={activeStep:0};c.parameters={screenshot:{skip:!0}};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};p.__docgenInfo={description:"",methods:[],displayName:"StepTypes"};S.__docgenInfo={description:"",methods:[],displayName:"Vertical"};g.__docgenInfo={description:"",methods:[],displayName:"VerticalWithExpandedSteps"};l.__docgenInfo={description:"",methods:[],displayName:"VerticalExample"};c.__docgenInfo={description:"",methods:[],displayName:"HorizontalExample"};var A,C,P;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => <Stepper {...args}>
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
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ue=["Playground","StepTypes","WithHiddenLabels","Vertical","VerticalWithExpandedSteps","VerticalExample","HorizontalExample"];export{c as HorizontalExample,o as Playground,p as StepTypes,S as Vertical,l as VerticalExample,g as VerticalWithExpandedSteps,u as WithHiddenLabels,Ue as __namedExportsOrder,Qe as default};
//# sourceMappingURL=Stepper.stories-DN3qUl9t.js.map
