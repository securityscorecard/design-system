import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as L}from"./index-CTjT7uj6.js";import{a as i}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./index-DKUwlGz1.js";import{T,a as N,b as p}from"./index-BpnWCt-Z.js";import{g as A}from"./storybook-llAGhm5G.js";import"./index-CmRxaJ3P.js";import"./index-DPzZbuya.js";import"./index-DlSmv1aO.js";import{P as D}from"./index-Cv-mKTwf.js";import{S as g}from"./index-C1DSbQpy.js";import{M as F,R as v,S as G}from"./react-router-dom-B-6Qbk9C.js";import{a as J}from"./Heading-Cf7gMq0j.js";import{I as K}from"./Inline.enums-CG-V8ygw.js";import{I as Q}from"./Icon-Nxma5B5F.js";import{B as W}from"./Badge-8KzrIQlE.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-DxUWnzkt.js";import"./index-B1HIS_mG.js";import"./Padbox-BddxODtE.js";import"./index-C7IrpltL.js";import"./Cluster-Bh3LKsFx.js";import"./prop-DvyrXmKl.js";import"./useLogger-DkXBJUOu.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./BaseTabLabel-BjDXTvqN.js";import"./subtract-DNcVioN7.js";import"./require-router-link-DlQZJzFx.js";import"./zipObj-B4yFvj6_.js";import"./index-x37bp9TC.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DBr7mztH.js";const Ue={title:"components/Tabs",component:T,argTypes:{variant:{...A("select",N)},margin:{control:{disable:!0}}}},d=({title:r})=>e.jsxs(g,{gap:"md",children:[e.jsx(J,{size:"h3",children:r}),e.jsx(D,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga numquam? Unde, facilis facere."})]}),o=r=>e.jsxs(T,{...r,children:[e.jsx(p,{value:"overview",onClick:i("tab-click"),children:"Overview"}),e.jsx(p,{value:"inventory",onClick:i("tab-click"),children:e.jsxs(K,{align:"center",gap:"sm",children:[e.jsx(Q,{color:"primary.500",name:"sitemap",style:{fontSize:"1rem"}}),e.jsx("span",{children:"Inventory"}),e.jsx(W,{count:3,variant:"neutral"})]})}),e.jsx(p,{value:"profile",onClick:i("tab-click"),children:"Profile"})]}),a=o.bind({});a.args={selectedValue:"overview",onSelectTab:i("onSelectTab")};a.parameters={screenshot:{skip:!0}};const s=o.bind({});s.args={...a.args,variant:"underline"};const c=o.bind({});c.args={...a.args,variant:"text"};const t=o.bind({});t.args={...a.args,variant:"segmented"};const l=o.bind({});l.args={...t.args,isExpanded:!0};const n=r=>{const{selectedValue:b}=r,[u,H]=L.useState(b);return e.jsxs(g,{gap:"lg",children:[e.jsx(o,{...r,selectedValue:u,onSelectTab:H}),e.jsx("main",{children:e.jsx(d,{title:u})})]})};n.args=a.args;n.parameters={screenshot:{skip:!0}};const m=r=>e.jsx(F,{initialEntries:["/overview"],children:e.jsxs(g,{gap:"lg",children:[e.jsx(v,{component:({match:b})=>e.jsxs(T,{...r,selectedValue:b.url,children:[e.jsx(p,{value:"/overview",onClick:u=>{i("tab-click")(u)},children:"Overview"}),e.jsx(p,{value:"/inventory",onClick:i("tab-click"),children:"Inventory"})]}),path:"*"}),e.jsxs(G,{children:[e.jsx(v,{path:"/inventory",render:()=>e.jsx(d,{title:"inventory"})}),e.jsx(v,{path:"/overview",render:()=>e.jsx(d,{title:"overview"})})]})]})});m.parameters={screenshot:{skip:!0}};var k,y,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,S,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var j,I,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,P,R;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(R=(P=t.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var O,V,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var z,B,q;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(q=(B=n.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var M,U,_;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const _e=["Playground","UnderlineTabs","TextTabs","SegmentedTabs","SegmentedExpandedTabs","StatefulTabs","RoutableTabs"];export{a as Playground,m as RoutableTabs,l as SegmentedExpandedTabs,t as SegmentedTabs,n as StatefulTabs,c as TextTabs,s as UnderlineTabs,_e as __namedExportsOrder,Ue as default};
//# sourceMappingURL=Tabs.stories-BNK0WVOy.js.map
