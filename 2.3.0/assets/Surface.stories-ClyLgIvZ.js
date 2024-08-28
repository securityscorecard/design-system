import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{S as a}from"./index-B-CeicLq.js";import"./index-xeJFfyKc.js";import{T}from"./index-DXjoAeTX.js";import{g as _}from"./Heading-N7GgeHZF.js";import{P as d}from"./Padbox-DLePQqEe.js";import{S as m}from"./index-DPJ-F9hp.js";import"./index-CTjT7uj6.js";import"./index-C1FT5pTy.js";import"./index-BRV0Se7Z.js";import"./index--b1-fK-k.js";import"./Inline-CVToOADQ.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./prop-B-t2KTqT.js";import"./Cluster-DZ_NL6w4.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";const or={title:"layout/Surface",component:a,args:{mode:"light"}},o=()=>r.jsxs(m,{gap:"sm",children:[r.jsx(_,{children:"Hello user!"}),r.jsx(T,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et."})]}),s={args:{mode:"light",background:"default",radius:"sm",elevation:0,hasBorder:!1,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})},parameters:{screenshot:{skip:!0}}},i={render:e=>r.jsxs(m,{gap:"lgPlus",children:[r.jsx(a,{...e,background:"white"}),r.jsx(a,{...e,background:"dynamic"}),r.jsx(a,{...e,background:"transparent"})]}),args:s.args,parameters:{backgrounds:{default:"grey"}}},n={render:e=>r.jsxs(m,{gap:"lgPlus",children:[r.jsx(a,{...e,radius:"none"}),r.jsx(a,{...e,radius:"sm"}),r.jsx(a,{...e,radius:"md"}),r.jsx(a,{...e,radius:"lg"})]}),args:{...s.args,background:"dynamic",hasBorder:!0}},t={render:e=>{const l=e.elevation??1;return r.jsxs(m,{gap:"lgPlus",children:[r.jsx(a,{...e,elevation:l}),r.jsx(a,{...e,elevation:l+1}),r.jsx(a,{...e,elevation:l+2})]})},args:{...s.args,background:"white",hasBorder:!0,elevation:1}},c={args:{...s.args,background:"white",hasBorder:!0}},u={render:e=>r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})})]})})]})}),args:{...s.args,background:"dynamic",mode:"light",hasBorder:!0}},g={render:e=>r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsxs(d,{paddingSize:"md",children:[r.jsx(o,{}),r.jsx(a,{...e,children:r.jsx(d,{paddingSize:"md",children:r.jsx(o,{})})})]})})]})}),args:{...s.args,background:"dynamic",mode:"dark",hasBorder:!0},parameters:{themes:{themeOverride:"Dark"}}};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var L,R,H;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const ir=["Playground","Background","BorderRadius","Elevation","Bordered","DynamicBackgroundOnLight","DynamicBackgroundOnDark"];export{i as Background,n as BorderRadius,c as Bordered,g as DynamicBackgroundOnDark,u as DynamicBackgroundOnLight,t as Elevation,s as Playground,ir as __namedExportsOrder,or as default};
//# sourceMappingURL=Surface.stories-ClyLgIvZ.js.map
