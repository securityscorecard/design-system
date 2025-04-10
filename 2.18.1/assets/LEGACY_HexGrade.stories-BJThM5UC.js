import{j as e}from"./jsx-runtime-CfatFE5O.js";import{H as a,a as r,b as d}from"./HexGrade-CZEoZKVA.js";import{g as z}from"./storybook-CEy1qkXR.js";import"./index-D10bqr6c.js";import{D as y}from"./DSProvider-BhWV6cmb.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./zipObj-BkK7rA3s.js";import"./index-DRm3KUNF.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-_KdZNTQd.js";const ae={title:"components/HexGrade/LEGACY",component:a,argTypes:{variant:{...z("select",r)}},decorators:[G=>e.jsx(y,{config:{debugMode:!0,experimental:{legacyHexgrade:!0}},children:G()})]},n=G=>{const{isInverted:w}=G;return e.jsx("div",{style:{backgroundColor:w?"black":"transparent"},children:e.jsx(a,{...G})})};n.args={variant:r.solid,grade:"A"};n.parameters={screenshot:{skip:!0}};const s=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:r.solid}),e.jsx(a,{grade:d.unknown,variant:r.solid}),e.jsx(a,{grade:d.A,variant:r.solid}),e.jsx(a,{grade:d.B,variant:r.solid}),e.jsx(a,{grade:d.C,variant:r.solid}),e.jsx(a,{grade:d.D,variant:r.solid}),e.jsx(a,{grade:d.F,variant:r.solid}),e.jsx(a,{grade:d.nonApplicable,variant:r.solid})]});s.storyName="Solid HexGrades";s.parameters={design:{url:"https://www.figma.com/file/vnzYfrwIISRYkr2iYE5TcD/Platform-Atoms?node-id=1891%3A0"}};const t=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:r.outline}),e.jsx(a,{grade:d.unknown,variant:r.outline}),e.jsx(a,{grade:d.A,variant:r.outline}),e.jsx(a,{grade:d.B,variant:r.outline}),e.jsx(a,{grade:d.C,variant:r.outline}),e.jsx(a,{grade:d.D,variant:r.outline}),e.jsx(a,{grade:d.F,variant:r.outline}),e.jsx(a,{grade:d.nonApplicable,variant:r.outline})]});t.storyName="Outline HexGrades";const o=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:r.cs}),e.jsx(a,{grade:d.unknown,variant:r.cs}),e.jsx(a,{grade:d.A,variant:r.cs}),e.jsx(a,{grade:d.B,variant:r.cs}),e.jsx(a,{grade:d.C,variant:r.cs}),e.jsx(a,{grade:d.D,variant:r.cs}),e.jsx(a,{grade:d.F,variant:r.cs}),e.jsx(a,{grade:d.nonApplicable,variant:r.cs})]});o.storyName="CustomScorecard HexGrades";const x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{grade:d.A,size:16,variant:r.solid}),e.jsx(a,{grade:d.B,size:32,variant:r.solid}),e.jsx(a,{grade:d.C,size:64,variant:r.solid}),e.jsx(a,{grade:d.D,size:96,variant:r.solid}),e.jsx(a,{grade:d.F,size:128,variant:r.solid})]});x.storyName="Sized HexGrades";const i=()=>e.jsxs("div",{style:{backgroundColor:"black"},children:[e.jsxs("div",{children:[e.jsx(a,{grade:d.unknown,variant:r.solid,isInverted:!0}),e.jsx(a,{grade:d.A,variant:r.solid,isInverted:!0}),e.jsx(a,{grade:d.B,variant:r.solid,isInverted:!0}),e.jsx(a,{grade:d.C,variant:r.solid,isInverted:!0}),e.jsx(a,{grade:d.D,variant:r.solid,isInverted:!0}),e.jsx(a,{grade:d.F,variant:r.solid,isInverted:!0}),e.jsx(a,{grade:d.nonApplicable,variant:r.solid,isInverted:!0})]}),e.jsxs("div",{children:[e.jsx(a,{grade:d.unknown,variant:r.outline,isInverted:!0}),e.jsx(a,{grade:d.A,variant:r.outline,isInverted:!0}),e.jsx(a,{grade:d.B,variant:r.outline,isInverted:!0}),e.jsx(a,{grade:d.C,variant:r.outline,isInverted:!0}),e.jsx(a,{grade:d.D,variant:r.outline,isInverted:!0}),e.jsx(a,{grade:d.F,variant:r.outline,isInverted:!0}),e.jsx(a,{grade:d.nonApplicable,variant:r.outline,isInverted:!0})]})]});i.storyName="Inverted HexGrade";i.parameters={backgrounds:{default:"black"}};var H,l,v;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const {
    isInverted
  } = args;
  return <div style={{
    backgroundColor: isInverted ? 'black' : 'transparent'
  }}>
      <HexGrade {...args} />
    </div>;
}`,...(v=(l=n.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var g,c,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => <>
    <HexGrade variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.unknown} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.nonApplicable} variant={HexGradeVariants.solid} />
  </>`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,j;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => <>
    <HexGrade variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.unknown} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.nonApplicable} variant={HexGradeVariants.outline} />
  </>`,...(j=(m=t.parameters)==null?void 0:m.docs)==null?void 0:j.source}}};var V,I,A;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`() => <>
    <HexGrade variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.unknown} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.nonApplicable} variant={HexGradeVariants.cs} />
  </>`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var b,k,C;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`() => <>
    <HexGrade grade={HexGradeGrades.A} size={16} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.B} size={32} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.C} size={64} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.D} size={96} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.F} size={128} variant={HexGradeVariants.solid} />
  </>`,...(C=(k=x.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,F,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div style={{
  backgroundColor: 'black'
}}>
    <div>
      <HexGrade grade={HexGradeGrades.unknown} variant={HexGradeVariants.solid} isInverted />
      <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.solid} isInverted />
      <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.solid} isInverted />
      <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.solid} isInverted />
      <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.solid} isInverted />
      <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.solid} isInverted />
      <HexGrade grade={HexGradeGrades.nonApplicable} variant={HexGradeVariants.solid} isInverted />
    </div>
    <div>
      <HexGrade grade={HexGradeGrades.unknown} variant={HexGradeVariants.outline} isInverted />
      <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.outline} isInverted />
      <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.outline} isInverted />
      <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.outline} isInverted />
      <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.outline} isInverted />
      <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.outline} isInverted />
      <HexGrade grade={HexGradeGrades.nonApplicable} variant={HexGradeVariants.outline} isInverted />
    </div>
  </div>`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const re=["Playground","SolidHexGrades","OutlineHexGrades","CustomScorecardHexGrades","SizedHexGrades","InvertedHexGrades"];export{o as CustomScorecardHexGrades,i as InvertedHexGrades,t as OutlineHexGrades,n as Playground,x as SizedHexGrades,s as SolidHexGrades,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=LEGACY_HexGrade.stories-BJThM5UC.js.map
