import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{S as a}from"./index-BfLWfhlY.js";import"./index-D3M05C5e.js";import{T}from"./index-BiHv5IcS.js";import{g as _}from"./Heading-8_WGMOaA.js";import{P as d}from"./Padbox-ugjOsLS7.js";import{S as g}from"./index-BcSnSfQB.js";import"./index-CTjT7uj6.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DzAsfYvZ.js";import"./index-BRV0Se7Z.js";import"./index-BawZj8GX.js";import"./Inline-Cg9jPAAE.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./prop-CePbk9wh.js";import"./Cluster-HoiIP47J.js";import"./useLogger-IjsioYUQ.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";const ir={title:"layout/Surface",component:a,args:{mode:"light"}},o=()=>r.jsxs(g,{gap:"sm",children:[r.jsx(_,{children:"Hello user!"}),r.jsx(T,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et."})]}),s={args:{mode:"light",background:"default",radius:"sm",elevation:0,hasBorder:!1,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})},parameters:{screenshot:{skip:!0}}},i={render:e=>r.jsxs(g,{gap:"lgPlus",children:[r.jsx(a,{...e,background:"white"}),r.jsx(a,{...e,background:"dynamic"}),r.jsx(a,{...e,background:"transparent"})]}),args:s.args,parameters:{backgrounds:{default:"grey"}}},n={render:e=>r.jsxs(g,{gap:"lgPlus",children:[r.jsx(a,{...e,radius:"none"}),r.jsx(a,{...e,radius:"sm"}),r.jsx(a,{...e,radius:"md"}),r.jsx(a,{...e,radius:"lg"})]}),args:{...s.args,background:"dynamic",hasBorder:!0}},t={render:e=>{const l=e.elevation??1;return r.jsxs(g,{gap:"lgPlus",children:[r.jsx(a,{...e,elevation:l}),r.jsx(a,{...e,elevation:l+1}),r.jsx(a,{...e,elevation:l+2})]})},args:{...s.args,background:"white",hasBorder:!0,elevation:1}},c={args:{...s.args,background:"white",hasBorder:!0}},u={render:e=>r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})})]})})]})}),args:{...s.args,background:"dynamic",mode:"light",hasBorder:!0}},m={render:e=>r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})})]})})]})}),args:{...s.args,background:"dynamic",mode:"dark",hasBorder:!0},parameters:{themes:{themeOverride:"Dark"}}};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    background: 'default',
    radius: 'sm',
    elevation: 0,
    hasBorder: false,
    children: <Padbox paddingSize="md">
        <Child />
      </Padbox>
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,k,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <Stack gap="lgPlus">
        <Surface {...args} background="white" />
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
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var f,b,P;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(b=n.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var v,y,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const elevation = args.elevation ?? 1;
    return <Stack gap="lgPlus">
        <Surface {...args} elevation={elevation} />
        <Surface {...args} elevation={elevation + 1} />
        <Surface {...args} elevation={elevation + 2} />
      </Stack>;
  },
  args: {
    ...Playground.args,
    background: 'white',
    hasBorder: true,
    elevation: 1
  }
}`,...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var z,D,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    background: 'white',
    hasBorder: true
  }
}`,...(C=(D=c.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var O,w,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    mode: 'light',
    hasBorder: true
  }
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var L,R,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    mode: 'dark',
    hasBorder: true
  },
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(H=(R=m.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const nr=["Playground","Background","BorderRadius","Elevation","Bordered","DynamicBackgroundOnLight","DynamicBackgroundOnDark"];export{i as Background,n as BorderRadius,c as Bordered,m as DynamicBackgroundOnDark,u as DynamicBackgroundOnLight,t as Elevation,s as Playground,nr as __namedExportsOrder,ir as default};
//# sourceMappingURL=Surface.stories-CzxnfdKp.js.map
