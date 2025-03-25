import{j as G}from"./jsx-runtime-CfatFE5O.js";import{r as Z}from"./index-ClcD9ViR.js";import{T as d}from"./TextArea-Drk1yJU7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-DCGZYvlw.js";import"./index-DAJCpEFs.js";import"./Padbox-Bcaafd_-.js";import"./index-BXr0x_2P.js";import"./prop-gA1VFyoz.js";import"./Inline-mI01sxMS.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-MjzvoWTP.js";import"./useLogger-DBZ2KDnn.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./mergeRefs-C43w_hK8.js";import"./index-CEsunubm.js";const qe={title:"components/forms/TextArea",component:d},e=p=>G.jsx(d,{"aria-label":"Text",...p}),r=e.bind({});r.parameters={screenshot:{skip:!0}};const c=e.bind({}),t=e.bind({});t.args={defaultValue:"DefaultValue text"};const s=e.bind({});s.args={maxLength:100};const o=e.bind({});o.args={placeholder:"Your comment..."};const i=e.bind({});i.args={defaultValue:"Text over 10 characters limit",maxLength:10,isInvalid:!0};const l=e.bind({});l.args={isDisabled:!0,defaultValue:"DefaultValue text"};const J="Donec sed nunc sed leo vestibulum pretium. Aenean sollicitudin velit neque. Curabitur placerat, velit sit amet lobortis condimentum, libero tortor ullamcorper quam, nec porttitor massa sem quis tellus. Sed feugiat nec libero a fermentum. Vivamus laoreet sapien convallis, interdum sapien vitae, lobortis eros. Ut interdum dui ut mauris malesuada, vitae pellentesque est fermentum. Cras quis erat est. Proin tempus a leo ut pulvinar. Nulla scelerisque tempor mollis. Etiam quis dolor non diam sollicitudin mollis eu vitae nisl. Vestibulum bibendum augue vel justo fringilla, sed ultrices libero congue. Maecenas nec erat ac ante mollis eleifend. Sed ut mattis metus. Nullam molestie, diam blandit aliquam tincidunt, magna leo auctor diam, vel eleifend risus ex vel tortor. Donec ornare pellentesque urna quis volutpat. Donec dictum, arcu id luctus tincidunt, arcu purus venenatis lorem, at imperdiet orci lacus a metus.",a=e.bind({});a.args={defaultValue:J};const u=e.bind({});u.args={minHeight:300};const m=e.bind({});m.args={...a.args,maxHeight:150};const n=p=>{const[K,Q]=Z.useState(J);return G.jsx(d,{"aria-label":"Text",...p,value:K,onChange:X=>{Q(X.target.value)}})};var g,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,h,v;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,A,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var V,q,D;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(D=(q=s.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var W,M,C;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var H,j,I;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var P,E,L;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var _,y,z;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(z=(y=a.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var F,N,k;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var O,R,U;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:'args => <TextArea aria-label="Text" {...args} />',...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var Y,w,B;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(lipsum);
  return <TextArea aria-label="Text" {...args} value={value} onChange={e => {
    setValue(e.target.value);
  }} />;
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const De=["Playground","Default","Filled","WithMaxLength","WithPlaceholder","Invalid","Disabled","Autosize","WithMinHeight","WithMaxHeight","ControlledInput"];export{a as Autosize,n as ControlledInput,c as Default,l as Disabled,t as Filled,i as Invalid,r as Playground,m as WithMaxHeight,s as WithMaxLength,u as WithMinHeight,o as WithPlaceholder,De as __namedExportsOrder,qe as default};
//# sourceMappingURL=TextArea.stories-BMdRsTp7.js.map
