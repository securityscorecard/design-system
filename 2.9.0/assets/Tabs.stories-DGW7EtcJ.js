import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as N}from"./index-CTjT7uj6.js";import{a as o}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./index-UyBh8dRE.js";import{T as d,a as A,b as m}from"./index-DPZ9Q-1_.js";import{g as B}from"./storybook-CnYBKQjQ.js";import"./index-Do5YN-r4.js";import"./index-DyEZwTtF.js";import{P as D}from"./index--l7ovmQ3.js";import{C as F}from"./Chip-BbcE8md8.js";import{C as G}from"./ChipLabel-Dqns3ipO.js";import{S as g}from"./index-BFpmPCJD.js";import{M as J,R as v,S as K}from"./react-router-dom-B-6Qbk9C.js";import{a as Q}from"./Heading-DHBG04DN.js";import{I as W}from"./Inline.enums-B2crYYgS.js";import{I as X}from"./Icon-D2McLPVS.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-CrKmLWnD.js";import"./constants-l-41uwkI.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./index-dJwzZQsw.js";import"./Padbox-C9-4IgMJ.js";import"./index-C7IrpltL.js";import"./Cluster-_Y3KuvTf.js";import"./prop-DthtuCpe.js";import"./useLogger-BUVDCBjf.js";import"./DSProvider-BD6Crr4Z.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./require-router-link-DQ1KljjI.js";import"./subtract-BJ4gNos5.js";import"./zipObj-C0uoDeoJ.js";import"./index-BILJD4ib.js";import"./utils-DJYzM6Bc.js";import"./ElementLabel-CTPKCfMW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CajKmcpa.js";const Be={title:"components/Tabs",component:d,argTypes:{variant:{...B("select",A)},margin:{control:{disable:!0}}}},T=({title:r})=>e.jsxs(g,{gap:"md",children:[e.jsx(Q,{size:"h3",children:r}),e.jsx(D,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga numquam? Unde, facilis facere."})]}),n=r=>e.jsxs(d,{...r,children:[e.jsx(m,{value:"overview",onClick:o("tab-click"),children:"Overview"}),e.jsx(m,{value:"inventory",onClick:o("tab-click"),children:e.jsxs(W,{align:"center",gap:"sm",children:[e.jsx(X,{color:"primary.500",name:"sitemap",style:{fontSize:"1rem"}}),e.jsx("span",{children:"Inventory"}),e.jsx(F,{color:"gray",children:e.jsx(G,{isStrong:!0,children:"3"})})]})}),e.jsx(m,{value:"profile",onClick:o("tab-click"),children:"Profile"})]}),a=n.bind({});a.args={selectedValue:"overview",onSelectTab:o("onSelectTab")};a.parameters={screenshot:{skip:!0}};const s=n.bind({});s.args={...a.args,variant:"underline"};const c=n.bind({});c.args={...a.args,variant:"text"};const i=n.bind({});i.args={...a.args,variant:"segmented"};const l=n.bind({});l.args={...i.args,isExpanded:!0};const t=r=>{const{selectedValue:u}=r,[b,H]=N.useState(u);return e.jsxs(g,{gap:"lg",children:[e.jsx(n,{...r,selectedValue:b,onSelectTab:H}),e.jsx("main",{children:e.jsx(T,{title:b})})]})};t.args=a.args;t.parameters={screenshot:{skip:!0}};const p=r=>e.jsx(J,{initialEntries:["/overview"],children:e.jsxs(g,{gap:"lg",children:[e.jsx(v,{component:({match:u})=>e.jsxs(d,{...r,selectedValue:u.url,children:[e.jsx(m,{value:"/overview",onClick:b=>{o("tab-click")(b)},children:"Overview"}),e.jsx(m,{value:"/inventory",onClick:o("tab-click"),children:"Inventory"})]}),path:"*"}),e.jsxs(K,{children:[e.jsx(v,{path:"/inventory",render:()=>e.jsx(T,{title:"inventory"})}),e.jsx(v,{path:"/overview",render:()=>e.jsx(T,{title:"overview"})})]})]})});p.parameters={screenshot:{skip:!0}};var h,k,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Tabs {...args}>
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
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const De=["Playground","UnderlineTabs","TextTabs","SegmentedTabs","SegmentedExpandedTabs","StatefulTabs","RoutableTabs"];export{a as Playground,p as RoutableTabs,l as SegmentedExpandedTabs,i as SegmentedTabs,t as StatefulTabs,c as TextTabs,s as UnderlineTabs,De as __namedExportsOrder,Be as default};
//# sourceMappingURL=Tabs.stories-DGW7EtcJ.js.map
