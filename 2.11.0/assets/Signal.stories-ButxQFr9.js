import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{S as n}from"./Signal-CIKQVHih.js";import"./index-BeaoyfpW.js";import{I as e}from"./Inline.enums-Cxnp2INc.js";import{S as _}from"./index-CHCeFjJF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CVyJwDg7.js";import"./constants-C4Oh6sKJ.js";import"./checkCircleSolid-CXNAtMl8.js";import"./isNilOrEmpty-FvLncskg.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-DseqSOhp.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./isNil-qfCNC9HL.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./Cluster-x6SODxoc.js";import"./prop-C6y-wj7q.js";import"./useLogger-BV2AIPN5.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";const ri={title:"components/Signal",component:n},s=a=>i.jsx(n,{...a});s.args={variant:"severity",kind:"high",size:32};s.parameters={screenshot:{skip:!0}};const r=a=>i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"high",variant:"severity"}),i.jsx(n,{...a,kind:"medium",variant:"severity"}),i.jsx(n,{...a,kind:"low",variant:"severity"}),i.jsx(n,{...a,kind:"none",variant:"severity"}),i.jsx(n,{...a,kind:"info",variant:"severity"}),i.jsx(n,{...a,kind:"positive",variant:"severity"})]});r.args={variant:"severity",size:32};r.argTypes={kind:{control:"select",options:["high","medium","low","none","info","positive"],table:{type:{summary:'"high"|"medium"|"low"|"none"|"info"|"positive"'}}}};const t=a=>i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"high",variant:"breachRisk"}),i.jsx(n,{...a,kind:"medium",variant:"breachRisk"}),i.jsx(n,{...a,kind:"low",variant:"breachRisk"}),i.jsx(n,{...a,kind:"none",variant:"breachRisk"})]});t.args={variant:"breachRisk",size:32};t.argTypes={kind:{control:"select",options:["high","medium","low","none"],table:{type:{summary:'"high"|"medium"|"low"|"none"'}}}};const o=a=>i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"critical",variant:"businessImpact"}),i.jsx(n,{...a,kind:"high",variant:"businessImpact"}),i.jsx(n,{...a,kind:"medium",variant:"businessImpact"}),i.jsx(n,{...a,kind:"low",variant:"businessImpact"}),i.jsx(n,{...a,kind:"none",variant:"businessImpact"})]});o.args={variant:"businessImpact",size:32};o.argTypes={kind:{control:"select",options:["critical","high","medium","low","none"],table:{type:{summary:'"critical"|"high"|"medium"|"low"|"none"'}}}};const d=a=>i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"critical",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"high",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"medium",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"low",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"none",variant:"incidentLikelihood"})]});d.args={variant:"incidentLikelihood",size:32};d.argTypes={kind:{control:"select",options:["critical","high","medium","low","none"],table:{type:{summary:'"critical"|"high"|"medium"|"low"|"none"'}}}};const c=()=>i.jsxs(e,{gap:"sm",children:[i.jsx(n,{kind:"high",size:16}),i.jsx(n,{kind:"medium",size:32}),i.jsx(n,{kind:"low",size:64}),i.jsx(n,{kind:"positive",size:96}),i.jsx(n,{kind:"info",size:128})]}),m=a=>i.jsxs(_,{gap:"md",children:[i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"high",variant:"severity"}),i.jsx(n,{...a,kind:"medium",variant:"severity"}),i.jsx(n,{...a,kind:"low",variant:"severity"}),i.jsx(n,{...a,kind:"none",variant:"severity"}),i.jsx(n,{...a,kind:"info",variant:"severity"}),i.jsx(n,{...a,kind:"positive",variant:"severity"})]}),i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"high",variant:"breachRisk"}),i.jsx(n,{...a,kind:"medium",variant:"breachRisk"}),i.jsx(n,{...a,kind:"low",variant:"breachRisk"}),i.jsx(n,{...a,kind:"none",variant:"breachRisk"})]}),i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"critical",variant:"businessImpact"}),i.jsx(n,{...a,kind:"high",variant:"businessImpact"}),i.jsx(n,{...a,kind:"medium",variant:"businessImpact"}),i.jsx(n,{...a,kind:"low",variant:"businessImpact"}),i.jsx(n,{...a,kind:"none",variant:"businessImpact"})]}),i.jsxs(e,{gap:"sm",children:[i.jsx(n,{...a,kind:"critical",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"high",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"medium",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"low",variant:"incidentLikelihood"}),i.jsx(n,{...a,kind:"none",variant:"incidentLikelihood"})]})]});m.args={size:32};m.parameters={themes:{themeOverride:"Dark"}};var l,k,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Signal {...args} />",...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var p,v,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="high" variant="severity" />
    <Signal {...args} kind="medium" variant="severity" />
    <Signal {...args} kind="low" variant="severity" />
    <Signal {...args} kind="none" variant="severity" />
    <Signal {...args} kind="info" variant="severity" />
    <Signal {...args} kind="positive" variant="severity" />
  </Inline>`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var u,S,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="high" variant="breachRisk" />
    <Signal {...args} kind="medium" variant="breachRisk" />
    <Signal {...args} kind="low" variant="breachRisk" />
    <Signal {...args} kind="none" variant="breachRisk" />
  </Inline>`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var j,I,b;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="critical" variant="businessImpact" />
    <Signal {...args} kind="high" variant="businessImpact" />
    <Signal {...args} kind="medium" variant="businessImpact" />
    <Signal {...args} kind="low" variant="businessImpact" />
    <Signal {...args} kind="none" variant="businessImpact" />
  </Inline>`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var y,w,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Inline gap="sm">
    <Signal {...args} kind="critical" variant="incidentLikelihood" />
    <Signal {...args} kind="high" variant="incidentLikelihood" />
    <Signal {...args} kind="medium" variant="incidentLikelihood" />
    <Signal {...args} kind="low" variant="incidentLikelihood" />
    <Signal {...args} kind="none" variant="incidentLikelihood" />
  </Inline>`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var R,z,f;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Inline gap="sm">
    <Signal kind="high" size={16} />
    <Signal kind="medium" size={32} />
    <Signal kind="low" size={64} />
    <Signal kind="positive" size={96} />
    <Signal kind="info" size={128} />
  </Inline>`,...(f=(z=c.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var B,T,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => <Stack gap="md">
    <Inline gap="sm">
      <Signal {...args} kind="high" variant="severity" />
      <Signal {...args} kind="medium" variant="severity" />
      <Signal {...args} kind="low" variant="severity" />
      <Signal {...args} kind="none" variant="severity" />
      <Signal {...args} kind="info" variant="severity" />
      <Signal {...args} kind="positive" variant="severity" />
    </Inline>
    <Inline gap="sm">
      <Signal {...args} kind="high" variant="breachRisk" />
      <Signal {...args} kind="medium" variant="breachRisk" />
      <Signal {...args} kind="low" variant="breachRisk" />
      <Signal {...args} kind="none" variant="breachRisk" />
    </Inline>
    <Inline gap="sm">
      <Signal {...args} kind="critical" variant="businessImpact" />
      <Signal {...args} kind="high" variant="businessImpact" />
      <Signal {...args} kind="medium" variant="businessImpact" />
      <Signal {...args} kind="low" variant="businessImpact" />
      <Signal {...args} kind="none" variant="businessImpact" />
    </Inline>
    <Inline gap="sm">
      <Signal {...args} kind="critical" variant="incidentLikelihood" />
      <Signal {...args} kind="high" variant="incidentLikelihood" />
      <Signal {...args} kind="medium" variant="incidentLikelihood" />
      <Signal {...args} kind="low" variant="incidentLikelihood" />
      <Signal {...args} kind="none" variant="incidentLikelihood" />
    </Inline>
  </Stack>`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const ti=["Playground","Severity","BreachRisk","BusinessImpact","IncidentLikelihood","SizedSignals","DarkMode"];export{t as BreachRisk,o as BusinessImpact,m as DarkMode,d as IncidentLikelihood,s as Playground,r as Severity,c as SizedSignals,ti as __namedExportsOrder,ri as default};
//# sourceMappingURL=Signal.stories-ButxQFr9.js.map
