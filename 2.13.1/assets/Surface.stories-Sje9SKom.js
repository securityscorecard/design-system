import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as e}from"./index-BaexK_kB.js";import"./index-C0tcqiOb.js";import"./index-D6NEu5HV.js";import{T}from"./index-CpAvg4Hc.js";import{P as d}from"./Padbox-DmYWNoOJ.js";import{S as g}from"./index-DocoHESx.js";import{g as _}from"./Heading-DyxyadoA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./Inline.enums-CFrWSfFs.js";import"./index-DxcpycWO.js";import"./prop-C6y-wj7q.js";import"./Cluster-BKESMogL.js";import"./useLogger-CGEbE2mZ.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";const nr={title:"layout/Surface",component:e},o=()=>r.jsxs(g,{gap:"sm",children:[r.jsx(_,{children:"Hello user!"}),r.jsx(T,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et."})]}),s={args:{children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})},parameters:{screenshot:{skip:!0}}},n={render:a=>r.jsxs(g,{gap:"lgPlus",children:[r.jsx(e,{...a,background:"default"}),r.jsx(e,{...a,background:"dynamic"}),r.jsx(e,{...a,background:"transparent"})]}),args:s.args,parameters:{backgrounds:{default:"grey"}}},i={render:a=>r.jsxs(g,{gap:"lgPlus",children:[r.jsx(e,{...a,radius:"none"}),r.jsx(e,{...a,radius:"sm"}),r.jsx(e,{...a,radius:"md"}),r.jsx(e,{...a,radius:"lg"})]}),args:{...s.args,background:"dynamic",hasBorder:!0}},c={render:a=>r.jsxs(g,{gap:"lgPlus",children:[r.jsx(e,{...a,elevation:1}),r.jsx(e,{...a,elevation:2}),r.jsx(e,{...a,elevation:3}),r.jsx(e,{...a,elevation:4}),r.jsx(e,{...a,elevation:5})]}),args:{...s.args,hasBorder:!0}},t={args:{...s.args,hasBorder:!0}},u={render:a=>r.jsx(e,{...a,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(e,{...a,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(e,{...a,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})})]})})]})}),args:{...s.args,background:"dynamic",hasBorder:!0}},m={render:a=>r.jsx(e,{...a,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(e,{...a,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(e,{...a,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})})]})})]})}),args:{...s.args,background:"dynamic",hasBorder:!0},parameters:{themes:{themeOverride:"Dark"}}};var p,l,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <Padbox paddingSize="md">
        <Child />
      </Padbox>
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var S,h,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <Stack gap="lgPlus">
        <Surface {...args} background="default" />
        <Surface {...args} background="dynamic" />
        <Surface {...args} background="transparent" />
      </Stack>;
  },
  args: Playground.args,
  parameters: {
    backgrounds: {
      default: 'grey'
    }
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,k,P;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return <Stack gap="lgPlus">
        <Surface {...args} radius="none" />
        <Surface {...args} radius="sm" />
        <Surface {...args} radius="md" />
        <Surface {...args} radius="lg" />
      </Stack>;
  },
  args: {
    ...Playground.args,
    background: 'dynamic',
    hasBorder: true
  }
}`,...(P=(k=i.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var b,y,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return <Stack gap="lgPlus">
        <Surface {...args} elevation={1} />
        <Surface {...args} elevation={2} />
        <Surface {...args} elevation={3} />
        <Surface {...args} elevation={4} />
        <Surface {...args} elevation={5} />
      </Stack>;
  },
  args: {
    ...Playground.args,
    hasBorder: true
  }
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,z,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    hasBorder: true
  }
}`,...(D=(z=t.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var C,O,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Surface {...args}>
      <Padbox paddingSize="md">
        <Child />
        <Surface {...args}>
          <Padbox paddingSize="md">
            <Child />
            <Surface {...args}>
              <Padbox paddingSize="md">
                <Child />
              </Padbox>
            </Surface>
          </Padbox>
        </Surface>
      </Padbox>
    </Surface>,
  args: {
    ...Playground.args,
    background: 'dynamic',
    hasBorder: true
  }
}`,...(E=(O=u.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var L,R,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Surface {...args}>
      <Padbox paddingSize="md">
        <Child />
        <Surface {...args}>
          <Padbox paddingSize="md">
            <Child />
            <Surface {...args}>
              <Padbox paddingSize="md">
                <Child />
              </Padbox>
            </Surface>
          </Padbox>
        </Surface>
      </Padbox>
    </Surface>,
  args: {
    ...Playground.args,
    background: 'dynamic',
    hasBorder: true
  },
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(H=(R=m.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const ir=["Playground","Background","BorderRadius","Elevation","Bordered","DynamicBackgroundOnLight","DynamicBackgroundOnDark"];export{n as Background,i as BorderRadius,t as Bordered,m as DynamicBackgroundOnDark,u as DynamicBackgroundOnLight,c as Elevation,s as Playground,ir as __namedExportsOrder,nr as default};
//# sourceMappingURL=Surface.stories-Sje9SKom.js.map
