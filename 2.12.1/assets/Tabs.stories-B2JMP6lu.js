import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as N}from"./index-ClcD9ViR.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-DJDNSEQh.js";import{T as d,a as A,b as m}from"./index-Cb7tB1sn.js";import{g as B}from"./storybook-CBhUmier.js";import"./index-C8h7t8oK.js";import"./index-DnGPFhQW.js";import{P as D}from"./index-CXhmAfct.js";import{C as F}from"./Chip-DVqTV1tn.js";import{C as G}from"./ChipLabel-CXdDbSaw.js";import{S as g}from"./index-Cl2_DJzs.js";import{M as J,R as v,S as K}from"./react-router-dom-Cqtu-Xon.js";import{H as Q}from"./Heading-DmVkXWQm.js";import{I as W}from"./Inline.enums-B2f8ESXY.js";import{I as X}from"./Icon-Dys2AeEE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-DxcpycWO.js";import"./Cluster-kZdd8a--.js";import"./prop-C6y-wj7q.js";import"./useLogger-CA2WAjqk.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./require-router-link-tvWtIm7z.js";import"./subtract-BJ4gNos5.js";import"./zipObj-C0uoDeoJ.js";import"./index-CpAvg4Hc.js";import"./utils-DUvRoR_o.js";import"./ElementLabel-Kzoagp5M.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CajKmcpa.js";const Ae={title:"components/Tabs",component:d,argTypes:{variant:{...B("select",A)},margin:{control:{disable:!0}}}},T=({title:r})=>e.jsxs(g,{gap:"md",children:[e.jsx(Q,{size:"h3",children:r}),e.jsx(D,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga numquam? Unde, facilis facere."})]}),n=r=>e.jsxs(d,{...r,children:[e.jsx(m,{value:"overview",onClick:o("tab-click"),children:"Overview"}),e.jsx(m,{value:"inventory",onClick:o("tab-click"),children:e.jsxs(W,{align:"center",gap:"sm",children:[e.jsx(X,{color:"primary.500",name:"sitemap",style:{fontSize:"1rem"}}),e.jsx("span",{children:"Inventory"}),e.jsx(F,{color:"gray",children:e.jsx(G,{isStrong:!0,children:"3"})})]})}),e.jsx(m,{value:"profile",onClick:o("tab-click"),children:"Profile"})]}),a=n.bind({});a.args={selectedValue:"overview",onSelectTab:o("onSelectTab")};a.parameters={screenshot:{skip:!0}};const s=n.bind({});s.args={...a.args,variant:"underline"};const c=n.bind({});c.args={...a.args,variant:"text"};const i=n.bind({});i.args={...a.args,variant:"segmented"};const l=n.bind({});l.args={...i.args,isExpanded:!0};const t=r=>{const{selectedValue:u}=r,[b,H]=N.useState(u);return e.jsxs(g,{gap:"lg",children:[e.jsx(n,{...r,selectedValue:b,onSelectTab:H}),e.jsx("main",{children:e.jsx(T,{title:b})})]})};t.args=a.args;t.parameters={screenshot:{skip:!0}};const p=r=>e.jsx(J,{initialEntries:["/overview"],children:e.jsxs(g,{gap:"lg",children:[e.jsx(v,{component:({match:u})=>e.jsxs(d,{...r,selectedValue:u.url,children:[e.jsx(m,{value:"/overview",onClick:b=>{o("tab-click")(b)},children:"Overview"}),e.jsx(m,{value:"/inventory",onClick:o("tab-click"),children:"Inventory"})]}),path:"*"}),e.jsxs(K,{children:[e.jsx(v,{path:"/inventory",render:()=>e.jsx(T,{title:"inventory"})}),e.jsx(v,{path:"/overview",render:()=>e.jsx(T,{title:"overview"})})]})]})});p.parameters={screenshot:{skip:!0}};var h,k,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Chip color="gray">
          <ChipLabel isStrong>3</ChipLabel>
        </Chip>
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var y,S,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Chip color="gray">
          <ChipLabel isStrong>3</ChipLabel>
        </Chip>
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,j,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Chip color="gray">
          <ChipLabel isStrong>3</ChipLabel>
        </Chip>
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var w,P,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Chip color="gray">
          <ChipLabel isStrong>3</ChipLabel>
        </Chip>
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var R,O,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab value="overview" onClick={action('tab-click')}>
      Overview
    </Tab>
    <Tab value="inventory" onClick={action('tab-click')}>
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="sitemap" style={{
        fontSize: '1rem'
      }} />
        <span>Inventory</span>
        <Chip color="gray">
          <ChipLabel isStrong>3</ChipLabel>
        </Chip>
      </Inline>
    </Tab>
    <Tab value="profile" onClick={action('tab-click')}>
      Profile
    </Tab>
  </Tabs>`,...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var E,z,q;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(q=(z=t.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var M,U,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const Be=["Playground","UnderlineTabs","TextTabs","SegmentedTabs","SegmentedExpandedTabs","StatefulTabs","RoutableTabs"];export{a as Playground,p as RoutableTabs,l as SegmentedExpandedTabs,i as SegmentedTabs,t as StatefulTabs,c as TextTabs,s as UnderlineTabs,Be as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Tabs.stories-B2JMP6lu.js.map
