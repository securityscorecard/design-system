import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as H}from"./index-CTjT7uj6.js";import{a as o}from"./chunk-454WOBUV-DWuJqIWT.js";import"./index-CoMEwqFC.js";import{T,a as L,b as p}from"./index-Deos_gP5.js";import{g as A}from"./storybook-7zA5Mv0p.js";import"./index-CQl3OQTU.js";import"./index-CO_qxAPi.js";import"./index-5Whqhzhi.js";import{P as D}from"./index-mAAZmqGJ.js";import{M as F,R as v,S as G}from"./react-router-dom-CJ3P1gOI.js";import{a as J}from"./Heading-B6YquQMs.js";import{I as K}from"./Icon-CHqwD8rK.js";import{B as Q}from"./Badge-PRgF55Wc.js";import{S as g}from"./index-DZoBl2Wq.js";import{I as W}from"./Inline-DPdVYO7t.js";import"./v4-D8aEg3BZ.js";import"./index-DzoB_gWM.js";import"./index-BRV0Se7Z.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-C7IrpltL.js";import"./Cluster-DaqHgnAc.js";import"./flex.types-BrkCVx66.js";import"./prop-BgpcU4fO.js";import"./useLogger-BNYGJgyi.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./BaseTabLabel-CKe4ehZr.js";import"./subtract-D5K7RSzv.js";import"./require-router-link-DIC5Nlq-.js";import"./zipObj-BKKHQJ_I.js";import"./spacing.types-C9Yu1wmA.js";import"./index-C_SwQgDv.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-t-vajJ9r.js";import"./index-beAa1auE.js";import"./checkCircleSolid-D_DFWg_A.js";const He={title:"components/Tabs",component:T,argTypes:{variant:{...A("select",L)},margin:{control:{disable:!0}}}},d=({title:r})=>e.jsxs(g,{gap:"md",children:[e.jsx(J,{size:"h3",children:r}),e.jsx(D,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga numquam? Unde, facilis facere."})]}),s=r=>e.jsxs(T,{...r,children:[e.jsx(p,{value:"overview",onClick:o("tab-click"),children:"Overview"}),e.jsx(p,{value:"inventory",onClick:o("tab-click"),children:e.jsxs(W,{align:"center",gap:"sm",children:[e.jsx(K,{color:"primary.500",name:"sitemap",style:{fontSize:"1rem"}}),e.jsx("span",{children:"Inventory"}),e.jsx(Q,{count:3,variant:"neutral"})]})}),e.jsx(p,{value:"profile",onClick:o("tab-click"),children:"Profile"})]}),a=s.bind({});a.args={selectedValue:"overview",onSelectTab:o("onSelectTab")};a.parameters={screenshot:{skip:!0}};const c=s.bind({});c.args={...a.args,variant:"underline"};const l=s.bind({});l.args={...a.args,variant:"text"};const n=s.bind({});n.args={...a.args,variant:"segmented"};const m=s.bind({});m.args={...n.args,isExpanded:!0};const t=r=>{const{selectedValue:b}=r,[u,U]=H.useState(b);return e.jsxs(g,{gap:"lg",children:[e.jsx(s,{...r,selectedValue:u,onSelectTab:U}),e.jsx("main",{children:e.jsx(d,{title:u})})]})};t.args=a.args;t.parameters={screenshot:{skip:!0}};const i=r=>e.jsx(F,{initialEntries:["/overview"],children:e.jsxs(g,{gap:"lg",children:[e.jsx(v,{component:({match:b})=>e.jsxs(T,{...r,selectedValue:b.url,children:[e.jsx(p,{value:"/overview",onClick:u=>{o("tab-click")(u)},children:"Overview"}),e.jsx(p,{value:"/inventory",onClick:o("tab-click"),children:"Inventory"})]}),path:"*"}),e.jsxs(G,{children:[e.jsx(v,{path:"/inventory",render:()=>e.jsx(d,{title:"inventory"})}),e.jsx(v,{path:"/overview",render:()=>e.jsx(d,{title:"overview"})})]})]})});i.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"StatefulTabs"};i.__docgenInfo={description:"",methods:[],displayName:"RoutableTabs"};var k,f,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => <Tabs {...args}>
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
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Le=["Playground","UnderlineTabs","TextTabs","SegmentedTabs","SegmentedExpandedTabs","StatefulTabs","RoutableTabs"];export{a as Playground,i as RoutableTabs,m as SegmentedExpandedTabs,n as SegmentedTabs,t as StatefulTabs,l as TextTabs,c as UnderlineTabs,Le as __namedExportsOrder,He as default};
//# sourceMappingURL=Tabs.stories-D9PgduvE.js.map
