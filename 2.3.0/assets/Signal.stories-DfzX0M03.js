import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{S as n}from"./Signal-Dm2xR36l.js";import"./index-B-CeicLq.js";import{I as d}from"./Inline-CVToOADQ.js";import"./index-CTjT7uj6.js";import"./index-C7IrpltL.js";import"./index-C1FT5pTy.js";import"./checkCircleSolid-CXNAtMl8.js";import"./isNilOrEmpty-DczrYfYr.js";import"./isNil-G-meFOE3.js";import"./index-BRV0Se7Z.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./index-DPJ-F9hp.js";import"./flex.types-BrkCVx66.js";import"./prop-B-t2KTqT.js";import"./Cluster-DZ_NL6w4.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";const Y={title:"components/Signal",component:n},a=e=>i.jsx(n,{...e});a.args={variant:"severity",kind:"high",size:32};a.parameters={screenshot:{skip:!0}};const s=e=>i.jsxs(d,{gap:"sm",children:[i.jsx(n,{...e,kind:"high",variant:"severity"}),i.jsx(n,{...e,kind:"medium",variant:"severity"}),i.jsx(n,{...e,kind:"low",variant:"severity"}),i.jsx(n,{...e,kind:"none",variant:"severity"}),i.jsx(n,{...e,kind:"info",variant:"severity"}),i.jsx(n,{...e,kind:"positive",variant:"severity"})]});s.args={variant:"severity",size:32};s.argTypes={kind:{control:"select",options:["high","medium","low","none","info","positive"],table:{type:{summary:'"high"|"medium"|"low"|"none"|"info"|"positive"'}}}};const r=e=>i.jsxs(d,{gap:"sm",children:[i.jsx(n,{...e,kind:"high",variant:"breachRisk"}),i.jsx(n,{...e,kind:"medium",variant:"breachRisk"}),i.jsx(n,{...e,kind:"low",variant:"breachRisk"}),i.jsx(n,{...e,kind:"none",variant:"breachRisk"})]});r.args={variant:"breachRisk",size:32};r.argTypes={kind:{control:"select",options:["high","medium","low","none"],table:{type:{summary:'"high"|"medium"|"low"|"none"'}}}};const t=e=>i.jsxs(d,{gap:"sm",children:[i.jsx(n,{...e,kind:"critical",variant:"businessImpact"}),i.jsx(n,{...e,kind:"high",variant:"businessImpact"}),i.jsx(n,{...e,kind:"medium",variant:"businessImpact"}),i.jsx(n,{...e,kind:"low",variant:"businessImpact"}),i.jsx(n,{...e,kind:"none",variant:"businessImpact"})]});t.args={variant:"businessImpact",size:32};t.argTypes={kind:{control:"select",options:["critical","high","medium","low","none"],table:{type:{summary:'"critical"|"high"|"medium"|"low"|"none"'}}}};const o=e=>i.jsxs(d,{gap:"sm",children:[i.jsx(n,{...e,kind:"critical",variant:"incidentLikelihood"}),i.jsx(n,{...e,kind:"high",variant:"incidentLikelihood"}),i.jsx(n,{...e,kind:"medium",variant:"incidentLikelihood"}),i.jsx(n,{...e,kind:"low",variant:"incidentLikelihood"}),i.jsx(n,{...e,kind:"none",variant:"incidentLikelihood"})]});o.args={variant:"incidentLikelihood",size:32};o.argTypes={kind:{control:"select",options:["critical","high","medium","low","none"],table:{type:{summary:'"critical"|"high"|"medium"|"low"|"none"'}}}};const m=()=>i.jsxs(d,{gap:"sm",children:[i.jsx(n,{kind:"high",size:16}),i.jsx(n,{kind:"medium",size:32}),i.jsx(n,{kind:"low",size:64}),i.jsx(n,{kind:"positive",size:96}),i.jsx(n,{kind:"info",size:128})]});var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Signal {...args} />",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,k,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="high" variant="severity" />
    <Signal {...args} kind="medium" variant="severity" />
    <Signal {...args} kind="low" variant="severity" />
    <Signal {...args} kind="none" variant="severity" />
    <Signal {...args} kind="info" variant="severity" />
    <Signal {...args} kind="positive" variant="severity" />
  </Inline>`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var v,u,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="high" variant="breachRisk" />
    <Signal {...args} kind="medium" variant="breachRisk" />
    <Signal {...args} kind="low" variant="breachRisk" />
    <Signal {...args} kind="none" variant="breachRisk" />
  </Inline>`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var x,j,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="critical" variant="businessImpact" />
    <Signal {...args} kind="high" variant="businessImpact" />
    <Signal {...args} kind="medium" variant="businessImpact" />
    <Signal {...args} kind="low" variant="businessImpact" />
    <Signal {...args} kind="none" variant="businessImpact" />
  </Inline>`,...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var I,b,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="critical" variant="incidentLikelihood" />
    <Signal {...args} kind="high" variant="incidentLikelihood" />
    <Signal {...args} kind="medium" variant="incidentLikelihood" />
    <Signal {...args} kind="low" variant="incidentLikelihood" />
    <Signal {...args} kind="none" variant="incidentLikelihood" />
  </Inline>`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var z,L,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Inline gap="sm">
    <Signal kind="high" size={16} />
    <Signal kind="medium" size={32} />
    <Signal kind="low" size={64} />
    <Signal kind="positive" size={96} />
    <Signal kind="info" size={128} />
  </Inline>`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const Z=["Playground","Severity","BreachRisk","BusinessImpact","IncidentLikelihood","SizedSignals"];export{r as BreachRisk,t as BusinessImpact,o as IncidentLikelihood,a as Playground,s as Severity,m as SizedSignals,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Signal.stories-DfzX0M03.js.map
