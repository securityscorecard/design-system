import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as N}from"./index-ClcD9ViR.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-By48UrtP.js";import{T as d,a as A,b as m}from"./index-DnDvNPxP.js";import{g as B}from"./storybook-CEy1qkXR.js";import"./index-5FmQ2rGj.js";import"./index-BBJ1g9mG.js";import{P as D}from"./Paragraph-DWKg1gwn.js";import{C as F}from"./Chip-zGoIFuzs.js";import{C as G}from"./ChipLabel-D5nrfaES.js";import{S as g}from"./index-Cg7zxyij.js";import{M as J,R as v,S as K}from"./react-router-dom-C_lcPVwC.js";import{H as Q}from"./Heading-Wkmas1ro.js";import{I as W}from"./Inline-JoR1gBjx.js";import{I as X}from"./Icon-DDqMC7gY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-mp3yOvdM.js";import"./Padbox-CE8msXy0.js";import"./index-DxcpycWO.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-MjzvoWTP.js";import"./prop-gA1VFyoz.js";import"./useLogger-9UeQIaBT.js";import"./DSProvider-CHFF7_OZ.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./require-router-link-Ip-vyTqT.js";import"./subtract-C44IRfUK.js";import"./zipObj-BkK7rA3s.js";import"./index-CEsunubm.js";import"./utils-DUvRoR_o.js";import"./ElementLabel-Kzoagp5M.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./index-DRm3KUNF.js";const De={title:"components/Tabs",component:d,argTypes:{variant:{...B("select",A)},margin:{control:{disable:!0}}}},T=({title:r})=>e.jsxs(g,{gap:"md",children:[e.jsx(Q,{size:"h3",children:r}),e.jsx(D,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga numquam? Unde, facilis facere."})]}),n=r=>e.jsxs(d,{...r,children:[e.jsx(m,{value:"overview",onClick:o("tab-click"),children:"Overview"}),e.jsx(m,{value:"inventory",onClick:o("tab-click"),children:e.jsxs(W,{align:"center",gap:"sm",children:[e.jsx(X,{color:"primary.500",name:"sitemap",style:{fontSize:"1rem"}}),e.jsx("span",{children:"Inventory"}),e.jsx(F,{color:"gray",children:e.jsx(G,{isStrong:!0,children:"3"})})]})}),e.jsx(m,{value:"profile",onClick:o("tab-click"),children:"Profile"})]}),a=n.bind({});a.args={selectedValue:"overview",onSelectTab:o("onSelectTab")};a.parameters={screenshot:{skip:!0}};const s=n.bind({});s.args={...a.args,variant:"underline"};const c=n.bind({});c.args={...a.args,variant:"text"};const i=n.bind({});i.args={...a.args,variant:"segmented"};const l=n.bind({});l.args={...i.args,isExpanded:!0};const t=r=>{const{selectedValue:u}=r,[b,H]=N.useState(u);return e.jsxs(g,{gap:"lg",children:[e.jsx(n,{...r,selectedValue:b,onSelectTab:H}),e.jsx("main",{children:e.jsx(T,{title:b})})]})};t.args=a.args;t.parameters={screenshot:{skip:!0}};const p=r=>e.jsx(J,{initialEntries:["/overview"],children:e.jsxs(g,{gap:"lg",children:[e.jsx(v,{component:({match:u})=>e.jsxs(d,{...r,selectedValue:u.url,children:[e.jsx(m,{value:"/overview",onClick:b=>{o("tab-click")(b)},children:"Overview"}),e.jsx(m,{value:"/inventory",onClick:o("tab-click"),children:"Inventory"})]}),path:"*"}),e.jsxs(K,{children:[e.jsx(v,{path:"/inventory",render:()=>e.jsx(T,{title:"inventory"})}),e.jsx(v,{path:"/overview",render:()=>e.jsx(T,{title:"overview"})})]})]})});p.parameters={screenshot:{skip:!0}};var h,k,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Tabs {...args}>
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
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const Fe=["Playground","UnderlineTabs","TextTabs","SegmentedTabs","SegmentedExpandedTabs","StatefulTabs","RoutableTabs"];export{a as Playground,p as RoutableTabs,l as SegmentedExpandedTabs,i as SegmentedTabs,t as StatefulTabs,c as TextTabs,s as UnderlineTabs,Fe as __namedExportsOrder,De as default};
//# sourceMappingURL=Tabs.stories-B38mt3VH.js.map
