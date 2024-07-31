import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{S as r}from"./Skeleton-S2p0M2gE.js";import{S as i}from"./Surface-CvF-S7pg.js";import{P as o}from"./Padbox-CsIyVOa3.js";import{S as t}from"./Stack-vWwwEz_d.js";import{I as u}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{T as a}from"./Text-CQej7zPl.js";import{a as S}from"./Heading-5wHX6smU.js";import"./index-CTjT7uj6.js";import"./space-BY85GhUc.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./prop-Cw0eZkJ_.js";const q={title:"components/Skeleton",component:r},n=h=>e.jsx(r,{...h});n.parameters={chromatic:{disable:!0},screenshot:{skip:!0}};const s=()=>e.jsxs(t,{gap:"lg",children:[e.jsx(i,{radius:"md",hasBorder:!0,children:e.jsx(o,{paddingSize:"md",children:e.jsxs(u,{align:"center",gap:"md",children:[e.jsx(r,{height:100,variant:"circular",width:100}),e.jsxs(t,{gap:"sm",style:{width:100,flex:1},children:[e.jsx(a,{size:"h1",children:e.jsx(r,{})}),e.jsx(a,{size:"sm",children:e.jsx(r,{})}),e.jsx(a,{size:"sm",children:e.jsx(r,{})})]})]})})}),e.jsx(i,{radius:"md",hasBorder:!0,children:e.jsx(o,{paddingSize:"md",children:e.jsxs(t,{gap:"sm",children:[e.jsx(S,{size:"h1",children:e.jsx(r,{})}),Array(5).fill(null).map(()=>e.jsx(a,{size:"sm",children:e.jsx(r,{})}))]})})})]});n.__docgenInfo={description:"",methods:[],displayName:"Playground"};s.__docgenInfo={description:"",methods:[],displayName:"Default"};var d,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Skeleton {...args} />",...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,p,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const C=["Playground","Default"];export{s as Default,n as Playground,C as __namedExportsOrder,q as default};
