import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as H}from"./index-CTjT7uj6.js";import{a as o}from"./chunk-454WOBUV-DWuJqIWT.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import{S as T}from"./Stack-vWwwEz_d.js";import{I as L}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{T as g,a as A,b as p}from"./Tab-B5wWuDLr.js";import{g as D}from"./storybook-ByffxkSu.js";import{I as F}from"./Icon-DSPfH_8v.js";import{B as G}from"./Badge-5a5CaZPv.js";import{a as J}from"./Heading-5wHX6smU.js";import{P as K}from"./Paragraph-DLn62-bA.js";import{M as Q,R as v,S as W}from"./react-router-dom-BO_MR9e_.js";import"./v4-D8aEg3BZ.js";import"./space-BY85GhUc.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./prop-Cw0eZkJ_.js";import"./BaseTabLabel-CA2UX4fK.js";import"./subtract-C6lrP-Nx.js";import"./require-router-link-EREg1Bbm.js";import"./zipObj-C9fmdzRH.js";import"./index-DFvsTZbx.js";import"./spacing.types-C9Yu1wmA.js";import"./Text-CQej7zPl.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";const ze={title:"components/Tabs",component:g,argTypes:{variant:{...D("select",A)},margin:{control:{disable:!0}}}},d=({title:r})=>e.jsxs(T,{gap:"md",children:[e.jsx(J,{size:"h3",children:r}),e.jsx(K,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga numquam? Unde, facilis facere."})]}),s=r=>e.jsxs(g,{...r,children:[e.jsx(p,{value:"overview",onClick:o("tab-click"),children:"Overview"}),e.jsx(p,{value:"inventory",onClick:o("tab-click"),children:e.jsxs(L,{align:"center",gap:"sm",children:[e.jsx(F,{color:"primary.500",name:"sitemap",style:{fontSize:"1rem"}}),e.jsx("span",{children:"Inventory"}),e.jsx(G,{count:3,variant:"neutral"})]})}),e.jsx(p,{value:"profile",onClick:o("tab-click"),children:"Profile"})]}),a=s.bind({});a.args={selectedValue:"overview",onSelectTab:o("onSelectTab")};a.parameters={screenshot:{skip:!0}};const c=s.bind({});c.args={...a.args,variant:"underline"};const l=s.bind({});l.args={...a.args,variant:"text"};const n=s.bind({});n.args={...a.args,variant:"segmented"};const m=s.bind({});m.args={...n.args,isExpanded:!0};const t=r=>{const{selectedValue:b}=r,[u,U]=H.useState(b);return e.jsxs(T,{gap:"lg",children:[e.jsx(s,{...r,selectedValue:u,onSelectTab:U}),e.jsx("main",{children:e.jsx(d,{title:u})})]})};t.args=a.args;t.parameters={screenshot:{skip:!0}};const i=r=>e.jsx(Q,{initialEntries:["/overview"],children:e.jsxs(T,{gap:"lg",children:[e.jsx(v,{component:({match:b})=>e.jsxs(g,{...r,selectedValue:b.url,children:[e.jsx(p,{value:"/overview",onClick:u=>{o("tab-click")(u)},children:"Overview"}),e.jsx(p,{value:"/inventory",onClick:o("tab-click"),children:"Inventory"})]}),path:"*"}),e.jsxs(W,{children:[e.jsx(v,{path:"/inventory",render:()=>e.jsx(d,{title:"inventory"})}),e.jsx(v,{path:"/overview",render:()=>e.jsx(d,{title:"overview"})})]})]})});i.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"StatefulTabs"};i.__docgenInfo={description:"",methods:[],displayName:"RoutableTabs"};var k,f,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Badge count={3} variant="neutral" />
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,h,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Badge count={3} variant="neutral" />
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var I,j,w;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Badge count={3} variant="neutral" />
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,P,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Badge count={3} variant="neutral" />
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(R=(P=n.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var O,V,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Badge count={3} variant="neutral" />
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(E=(V=m.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var z,B,_;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const {
    selectedValue
  } = args;
  const [currentTab, setCurrentTab] = useState(selectedValue);
  return <Stack gap="lg">
      <TabsTemplate {...args} selectedValue={currentTab} onSelectTab={setCurrentTab} />
      <main>
        <TabPanel title={currentTab} />
      </main>
    </Stack>;
}`,...(_=(B=t.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var q,M,N;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <MemoryRouter initialEntries={['/overview']}>
      <Stack gap="lg">
        <Route component={({
        match
      }) => <Tabs {...args} selectedValue={match.url}>
              <Tab value="/overview" onClick={e => {
          action('tab-click')(e);
        }}>
                Overview
              </Tab>
              <Tab value="/inventory" onClick={action('tab-click')}>
                Inventory
              </Tab>
            </Tabs>} path="*" />

        <Switch>
          <Route path="/inventory" render={() => <TabPanel title="inventory" />} />
          <Route path="/overview" render={() => <TabPanel title="overview" />} />
        </Switch>
      </Stack>
    </MemoryRouter>;
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Be=["Playground","UnderlineTabs","TextTabs","SegmentedTabs","SegmentedExpandedTabs","StatefulTabs","RoutableTabs"];export{a as Playground,i as RoutableTabs,m as SegmentedExpandedTabs,n as SegmentedTabs,t as StatefulTabs,l as TextTabs,c as UnderlineTabs,Be as __namedExportsOrder,ze as default};
