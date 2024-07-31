import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{S as o}from"./Surface-Cs7tekjF.js";import{P as s}from"./Padbox-BrtZqAZY.js";import{S as p}from"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{g as L}from"./Heading-Doa2oxzU.js";import{T as R}from"./Text-C1sA-5dj.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./space-B9R18Mwn.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./flex.types-q2tZp175.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./prop-3Huj0iT1.js";const se={title:"layout/Surface",component:o,args:{mode:"light"}},n=({mode:a})=>e.jsxs(p,{gap:"sm",children:[e.jsx(L,{style:{color:a==="light"?"#2a2a2a":"white"},children:"Hello user!"}),e.jsx(R,{style:{color:a==="light"?"#2a2a2a":"white"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et."})]}),r=a=>e.jsx(o,{...a,children:e.jsx(s,{paddingSize:"md",children:e.jsx(n,{mode:a.mode??"light"})})}),i=r.bind({});i.args={mode:"light",background:"white",radius:"sm",elevation:0,hasBorder:!1};i.parameters={screenshot:{skip:!0}};const t=a=>e.jsxs(p,{gap:"lgPlus",children:[e.jsx(r,{...a,background:"white"}),e.jsx(r,{...a,background:"dynamic"}),e.jsx(r,{...a,background:"transparent"})]});t.parameters={backgrounds:{default:"grey"}};const c=a=>e.jsxs(p,{gap:"lgPlus",children:[e.jsx(r,{...a,radius:"none"}),e.jsx(r,{...a,radius:"sm"}),e.jsx(r,{...a,radius:"md"}),e.jsx(r,{...a,radius:"lg"})]});c.args={background:"dynamic",hasBorder:!0};const m=a=>{const g=a.elevation??1;return e.jsxs(p,{gap:"lgPlus",children:[e.jsx(r,{...a,elevation:g}),e.jsx(r,{...a,elevation:g+1}),e.jsx(r,{...a,elevation:g+2})]})};m.args={background:"white",hasBorder:!0,elevation:1};const u=r.bind({});u.args={background:"white",hasBorder:!0};const l=a=>e.jsx(o,{...a,children:e.jsxs(s,{paddingSize:"md",children:[e.jsx(n,{mode:a.mode}),e.jsx(o,{...a,children:e.jsxs(s,{paddingSize:"md",children:[e.jsx(n,{mode:a.mode}),e.jsx(o,{...a,children:e.jsx(s,{paddingSize:"md",children:e.jsx(n,{mode:a.mode})})})]})})]})});l.args={background:"dynamic",mode:"light",hasBorder:!0};const d=a=>e.jsx(o,{...a,children:e.jsxs(s,{paddingSize:"md",children:[e.jsx(n,{mode:a.mode}),e.jsx(o,{...a,children:e.jsxs(s,{paddingSize:"md",children:[e.jsx(n,{mode:a.mode}),e.jsx(o,{...a,children:e.jsx(s,{paddingSize:"md",children:e.jsx(n,{mode:a.mode})})})]})})]})});d.args={background:"dynamic",mode:"dark",hasBorder:!0};d.parameters={backgrounds:{default:"black"}};t.__docgenInfo={description:"",methods:[],displayName:"Background"};c.__docgenInfo={description:"",methods:[],displayName:"BorderRadius"};m.__docgenInfo={description:"",methods:[],displayName:"Elevation"};l.__docgenInfo={description:"",methods:[],displayName:"DynamicBackgroundOnLight"};d.__docgenInfo={description:"",methods:[],displayName:"DynamicBackgroundOnDark"};var h,x,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode ?? 'light'} />
    </Padbox>
  </Surface>`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,k,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Stack gap="lgPlus">
      <Template {...args} background="white" />
      <Template {...args} background="dynamic" />
      <Template {...args} background="transparent" />
    </Stack>;
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,P,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Stack gap="lgPlus">
      <Template {...args} radius="none" />
      <Template {...args} radius="sm" />
      <Template {...args} radius="md" />
      <Template {...args} radius="lg" />
    </Stack>;
}`,...(y=(P=c.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var v,B,z;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const elevation = args.elevation ?? 1;
  return <Stack gap="lgPlus">
      <Template {...args} elevation={elevation} />
      <Template {...args} elevation={elevation + 1} />
      <Template {...args} elevation={elevation + 2} />
    </Stack>;
}`,...(z=(B=m.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var T,_,D;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode ?? 'light'} />
    </Padbox>
  </Surface>`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var C,w,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode} />
      <Surface {...args}>
        <Padbox paddingSize="md">
          <Child mode={args.mode} />
          <Surface {...args}>
            <Padbox paddingSize="md">
              <Child mode={args.mode} />
            </Padbox>
          </Surface>
        </Padbox>
      </Surface>
    </Padbox>
  </Surface>`,...(O=(w=l.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var E,I,N;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => <Surface {...args}>
    <Padbox paddingSize="md">
      <Child mode={args.mode} />
      <Surface {...args}>
        <Padbox paddingSize="md">
          <Child mode={args.mode} />
          <Surface {...args}>
            <Padbox paddingSize="md">
              <Child mode={args.mode} />
            </Padbox>
          </Surface>
        </Padbox>
      </Surface>
    </Padbox>
  </Surface>`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const ne=["Playground","Background","BorderRadius","Elevation","Bordered","DynamicBackgroundOnLight","DynamicBackgroundOnDark"];export{t as Background,c as BorderRadius,u as Bordered,d as DynamicBackgroundOnDark,l as DynamicBackgroundOnLight,m as Elevation,i as Playground,ne as __namedExportsOrder,se as default};
