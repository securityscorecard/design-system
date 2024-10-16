import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as H}from"./index-CTjT7uj6.js";import{a as n}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./index-C1kpn3a9.js";import{T,a as A,b as m}from"./index-BBQRbGW4.js";import{g as B}from"./storybook-Bms8_Zov.js";import"./index-BifjOJLR.js";import"./index-LvHYR_Fi.js";import{P as D}from"./index-zphH5PEn.js";import{C as F}from"./Chip-Md38n2VB.js";import{C as G}from"./ChipLabel-CVecv1Qi.js";import{S as g}from"./index-FmXXYKzo.js";import{M as J,R as d,S as K}from"./react-router-dom-B-6Qbk9C.js";import{a as Q}from"./Heading-B8ImNJrT.js";import{I as W}from"./Inline.enums-CsgpNQwN.js";import{I as X}from"./Icon-C0fNGvgr.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./_isObject-BZZHHNGj.js";import"./slice-CaMqkvGm.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./index-C7IrpltL.js";import"./Cluster-BnO1HbAj.js";import"./prop-CgNUfcFy.js";import"./useLogger-BdR6T79l.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./require-router-link-DZ62ouIa.js";import"./subtract-BJ4gNos5.js";import"./zipObj-C0uoDeoJ.js";import"./index-CUGQ8N4L.js";import"./utils-Cpk3pCk-.js";import"./ElementLabel-Bua-ZRQK.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BsP7FXMl.js";const De={title:"components/Tabs",component:T,argTypes:{variant:{...B("select",A)},margin:{control:{disable:!0}}}},v=({title:r})=>e.jsxs(g,{gap:"md",children:[e.jsx(Q,{size:"h3",children:r}),e.jsx(D,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga numquam? Unde, facilis facere."})]}),s=r=>e.jsxs(T,{...r,children:[e.jsx(m,{value:"overview",onClick:n("tab-click"),children:"Overview"}),e.jsx(m,{value:"inventory",onClick:n("tab-click"),children:e.jsxs(W,{align:"center",gap:"sm",children:[e.jsx(X,{color:"primary.500",name:"sitemap",style:{fontSize:"1rem"}}),e.jsx("span",{children:"Inventory"}),e.jsx(F,{color:"gray",children:e.jsx(G,{isStrong:!0,children:"3"})})]})}),e.jsx(m,{value:"profile",onClick:n("tab-click"),children:"Profile"})]}),a=s.bind({});a.args={selectedValue:"overview",onSelectTab:n("onSelectTab")};a.parameters={screenshot:{skip:!0}};const c=s.bind({});c.args={...a.args,variant:"underline"};const l=s.bind({});l.args={...a.args,variant:"text"};const t=s.bind({});t.args={...a.args,variant:"segmented"};const p=s.bind({});p.args={...t.args,isExpanded:!0};const i=r=>{const{selectedValue:u}=r,[b,U]=H.useState(u);return e.jsxs(g,{gap:"lg",children:[e.jsx(s,{...r,selectedValue:b,onSelectTab:U}),e.jsx("main",{children:e.jsx(v,{title:b})})]})};i.args=a.args;i.parameters={screenshot:{skip:!0}};const o=r=>e.jsx(J,{initialEntries:["/overview"],children:e.jsxs(g,{gap:"lg",children:[e.jsx(d,{component:({match:u})=>e.jsxs(T,{...r,selectedValue:u.url,children:[e.jsx(m,{value:"/overview",onClick:b=>{n("tab-click")(b)},children:"Overview"}),e.jsx(m,{value:"/inventory",onClick:n("tab-click"),children:"Inventory"})]}),path:"*"}),e.jsxs(K,{children:[e.jsx(d,{path:"/inventory",render:()=>e.jsx(v,{title:"inventory"})}),e.jsx(d,{path:"/overview",render:()=>e.jsx(v,{title:"overview"})})]})]})});o.parameters={screenshot:{skip:!0}};i.__docgenInfo={description:"",methods:[],displayName:"StatefulTabs"};o.__docgenInfo={description:"",methods:[],displayName:"RoutableTabs"};var h,k,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var y,S,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,I,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var w,P,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(L=(P=t.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var R,O,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Tabs {...args}>
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
  </Tabs>`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var E,z,_;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(_=(z=i.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var q,M,N;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(N=(M=o.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Fe=["Playground","UnderlineTabs","TextTabs","SegmentedTabs","SegmentedExpandedTabs","StatefulTabs","RoutableTabs"];export{a as Playground,o as RoutableTabs,p as SegmentedExpandedTabs,t as SegmentedTabs,i as StatefulTabs,l as TextTabs,c as UnderlineTabs,Fe as __namedExportsOrder,De as default};
//# sourceMappingURL=Tabs.stories-C5J6Ijqw.js.map
