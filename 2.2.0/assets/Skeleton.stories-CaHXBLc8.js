import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{S as r}from"./Skeleton-Mij27U1S.js";import{S as i}from"./Surface-DpLLkhSd.js";import{P as o}from"./Padbox-DKEfmyAv.js";import{S as t}from"./Stack-D3Wl5zWT.js";import{I as u}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{T as n}from"./Text-DTP2ysh1.js";import{a as S}from"./Heading-C-vyOsFk.js";import"./index-CTjT7uj6.js";import"./space-1LtLrmuu.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./prop-DG2n0FAQ.js";const C={title:"components/Skeleton",component:r},s=h=>e.jsx(r,{...h});s.parameters={chromatic:{disable:!0},screenshot:{skip:!0}};const a=()=>e.jsxs(t,{gap:"lg",children:[e.jsx(i,{radius:"md",hasBorder:!0,children:e.jsx(o,{paddingSize:"md",children:e.jsxs(u,{align:"center",gap:"md",children:[e.jsx(r,{height:100,variant:"circular",width:100}),e.jsxs(t,{gap:"sm",style:{width:100,flex:1},children:[e.jsx(n,{size:"h1",children:e.jsx(r,{})}),e.jsx(n,{size:"sm",children:e.jsx(r,{})}),e.jsx(n,{size:"sm",children:e.jsx(r,{})})]})]})})}),e.jsx(i,{radius:"md",hasBorder:!0,children:e.jsx(o,{paddingSize:"md",children:e.jsxs(t,{gap:"sm",children:[e.jsx(S,{size:"h1",children:e.jsx(r,{})}),Array(5).fill(null).map(()=>e.jsx(n,{size:"sm",children:e.jsx(r,{})}))]})})})]});var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Skeleton {...args} />",...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Stack gap="lg">
      <Surface radius="md" hasBorder>
        <Padbox paddingSize="md">
          <Inline align="center" gap="md">
            <Skeleton height={100} variant="circular" width={100} />
            <Stack gap="sm" style={{
            width: 100,
            flex: 1
          }}>
              <Text size="h1">
                <Skeleton />
              </Text>
              <Text size="sm">
                <Skeleton />
              </Text>
              <Text size="sm">
                <Skeleton />
              </Text>
            </Stack>
          </Inline>
        </Padbox>
      </Surface>
      <Surface radius="md" hasBorder>
        <Padbox paddingSize="md">
          <Stack gap="sm">
            <Heading size="h1">
              <Skeleton />
            </Heading>
            {Array(5).fill(null).map(() => <Text size="sm">
                  <Skeleton />
                </Text>)}
          </Stack>
        </Padbox>
      </Surface>
    </Stack>;
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const F=["Playground","Default"];export{a as Default,s as Playground,F as __namedExportsOrder,C as default};
