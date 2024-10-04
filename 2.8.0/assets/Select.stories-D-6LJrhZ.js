import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as ba}from"./index-CTjT7uj6.js";import{a as T}from"./chunk-454WOBUV-CM0pFb8Z.js";import{S as r}from"./Select-P4GCzdBl.js";import"./index-BKmXk_rQ.js";import"./index-CFj4K2pu.js";import{b as Sa,P as va}from"./Pill-DyYZ_fkc.js";import"./index-BF1K3Tme.js";import{T as pa}from"./index-CGsDvru0.js";import"./index-CmfPCgLl.js";import"./index-CyTCg5QB.js";import{S as W}from"./index-Bdemn2ub.js";import{a as H}from"./Heading-BlT5vX7B.js";import{I as N}from"./Inline.enums-ylSCK-eY.js";import{P as xa}from"./Padbox-BddxODtE.js";import{L as z}from"./Label-CtO40Eqj.js";import{B as Ca}from"./Button-DfkqMT0E.js";import"./v4-CQkTLCs1.js";import"./useSelectProps-gATiVRJn.js";import"./extends-CF3RwP-h.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-qmyP4KEa.js";import"./index-DxUWnzkt.js";import"./Checkbox-Dw1gfh2E.js";import"./index-C7IrpltL.js";import"./index-BkSsiqLF.js";import"./index-DBr7mztH.js";import"./DSProvider-CZqUabl8.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./isFunction-CFc181nM.js";import"./prop-DvyrXmKl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./Button-D36O3cyQ.js";import"./components-CYX7eQ8t.js";import"./index-CmRxaJ3P.js";import"./Icon-Nxma5B5F.js";import"./index-BRV0Se7Z.js";import"./useLogger-DkXBJUOu.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./PillRemoveButton-DcLVDju2.js";import"./pick-xjrz1kZf.js";import"./isNotNilOrEmpty-D3uFeLpo.js";import"./isNilOrEmpty-BEPrWyzC.js";import"./isNil-Bg-_fAot.js";import"./take-ZprrsW5Z.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-Ca0XQ4y2.js";import"./isNotEmpty-QIeHuxqm.js";import"./isNonEmptyArray-FlOy_NuE.js";import"./sortBy-D4c6KnDJ.js";import"./index-DHcn_niD.js";import"./index-PEALivR3.js";import"./require-router-link-DlQZJzFx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./tiny-invariant-CopsF_GD.js";import"./isNull-CSZRs2Kd.js";import"./isNotNull-4bNLWuBe.js";import"./noop-BOAHQqnZ.js";const o=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],ma=[{label:"United States",value:"US"},{label:"Europe",options:[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}]},{label:"Islands",options:[{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"}]},{label:"Canada",value:"CA"}],fa=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CY",label:"Cyprus",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CZ",label:"Czech Republic"}],i=[{value:"01",label:"123456789012345678901234567890"},{value:"02",label:"12345678901234567890"},{value:"03",label:"1234567890"},...o],Ar={title:"components/forms/Select/Select",component:r,parameters:{docs:{description:{component:"\n```js\nimport { Select } from '@securityscorecard/design-system';\nimport Pill from '../../Pill/Pill';\n```\n      "}}},argTypes:{options:{table:{type:{detail:`
[
  {
    label: string,
    value: string,
    isDisabled?: boolean,
  }

  OR

  {
    label: string,
    options: {
      label: string,
      value: string,
      isDisabled?: boolean,
    }
  }
]
          `}}},defaultValue:{table:{type:{detail:`
{
  label: string,
  value: string,
  isDisabled?: boolean,
}

OR

[
  {
    label: string,
    value: string,
    isDisabled?: boolean,
  }
]
          `}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},t=a=>e.jsx(r,{...a,"aria-label":"Select",isMenuPositionRelative:!0}),S=t.bind({});S.args={options:o,placeholder:"Select country..."};const l=t.bind({});l.args={options:o};const m=t.bind({});m.args={...l.args,defaultValue:o[1]};const v=t.bind({});v.args={...l.args,placeholder:"Select country..."};const x=t.bind({});x.args={...l.args,className:"focus"};const C=t.bind({});C.args={...l.args,isInvalid:!0};const f=t.bind({});f.args={...l.args,isDisabled:!0};const h=t.bind({});h.args={...l.args,isLoading:!0};const M=t.bind({});M.args={...m.args,isClearable:!0};const u=t.bind({});u.args={...l.args,defaultIsMenuOpen:!0};const c=t.bind({});c.args={options:ma,defaultIsMenuOpen:!0,isClearable:!0};const O=t.bind({});O.args={options:fa,defaultIsMenuOpen:!0};const n=a=>e.jsxs(W,{gap:"md",children:[e.jsx(r,{...a,isClearable:!0}),e.jsx(r,{...a,defaultInputValue:"Cu"}),e.jsx(r,{...a,defaultInputValue:"Cu",defaultValue:[o[1]],isClearable:!0}),e.jsx(r,{...a,defaultValue:[o[1],o[2]],defaultIsMenuOpen:!0})]});n.args={...c.args,isMenuPositionRelative:!0,isMulti:!0};const d=t.bind({});d.args={...u.args,defaultInputValue:"foo",isClearable:!0};const j=t.bind({});j.args={...d.args,noOptionsMessage:()=>"You know nothing, Jon Snow"};const P=t.bind({});P.args={...u.args,options:ma,menuActions:[{label:"Action A",name:"Action A",onClick:T("click-action-a")},{label:"Action B",name:"Action B",onClick:T("click-action-b")}]};const L=a=>e.jsxs(W,{gap:"md",children:[e.jsx(H,{size:"h3",children:"Default truncation N=16"}),e.jsx(r,{...a}),e.jsx(H,{size:"h3",children:"Custom truncation N=25"}),e.jsx(r,{...a,maxPillLabelLength:25}),e.jsx(H,{size:"h3",children:"Custom truncation N=5"}),e.jsx(r,{...a,maxPillLabelLength:5})]});L.args={...n.args,options:i,defaultValue:[i[2],i[1],i[0]]};const y=a=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...a})});y.args={...n.args,color:Sa.gray,options:i,defaultValue:[i[2],i[1]]};const V=a=>e.jsx("div",{children:e.jsx(r,{...a})});V.args={...n.args,options:i,defaultValue:[i[0],i[1],i[2],i[5]],isClearable:!1,isMulti:!0,maxVisibleItem:3};const R=a=>e.jsx(r,{formatOptionLabel:s=>e.jsxs(N,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",s.value,")"]}),e.jsx("span",{children:s.label})]}),...a});R.args={...n.args,defaultValue:[o[1],o[2]]};const I=a=>e.jsx(r,{formatOptionLabel:(s,w)=>w.context==="value"?e.jsxs(N,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",s.value,")"]}),e.jsx("span",{children:s.label})]}):e.jsx("span",{children:s.label}),...a});I.args={...l.args,isMenuPositionRelative:!0,isMulti:!0,defaultIsMenuOpen:!0};const ha=({children:a})=>e.jsxs("div",{children:[e.jsx(pa,{children:"Custom MenuList"}),a]}),k=t.bind({});k.args={options:o,components:{MenuList:ha}};const D=a=>e.jsx(r,{formatGroupLabel:s=>e.jsxs(N,{gap:"md",justify:"space-between",children:[e.jsx(pa,{isBold:!0,children:s.label}),e.jsx(va,{label:s.options.length.toString()})]}),...a});D.args={...n.args};const Ma=a=>o.filter(s=>s.label.toLowerCase().includes(a.toLowerCase())),B=a=>new Promise(s=>{setTimeout(()=>{s(Ma(a))},1e3)}),A=()=>e.jsxs(W,{gap:"md",children:[e.jsx(r,{loadOptions:B,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),e.jsx(r,{loadOptions:B,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});A.parameters={screenshot:{skip:!0}};const g=a=>{const[s,w]=ba.useState([o[1],o[2]]);return e.jsxs(W,{gap:"md",children:[e.jsx(r,{...a,closeMenuOnSelect:!1,value:s,menuIsOpen:!0,onChange:p=>{w(p)}}),e.jsxs(xa,{children:[e.jsx(z,{children:"Selected Values"}),e.jsx(W,{gap:"md",children:s.map(p=>e.jsxs(N,{gap:"sm",children:[e.jsx(z,{style:{width:"100px"},children:p.label}),e.jsx(Ca,{variant:"text",onClick:()=>w(da=>da.filter(ga=>ga.value!==p.value)),children:"Remove"})]},p.value))})]})]})};g.args={...c.args,isMenuPositionRelative:!0,isMulti:!0};g.parameters={screenshot:{skip:!0}};const b=a=>e.jsx(r,{...a});b.args={...c.args,isMenuPositionRelative:!0,isMulti:!0,defaultValue:[o[4]],isClearable:!0,menuActions:[{label:"Action A",name:"Action A",onClick:T("click-action-a")}]};b.parameters={themes:{themeOverride:"Dark"}};var F,G,U;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(U=(G=S.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var E,Y,Z;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,K,J;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(J=(K=m.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var q,Q,X;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var $,ee,ae;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,le,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,ce,ue;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ue=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,de;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(de=(me=M.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,be,Se;u.parameters={...u.parameters,docs:{...(ge=u.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Se=(be=u.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var ve,xe,Ce;c.parameters={...c.parameters,docs:{...(ve=c.parameters)==null?void 0:ve.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Ce=(xe=c.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var fe,he,Me;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Me=(he=O.parameters)==null?void 0:he.docs)==null?void 0:Me.source}}};var Oe,je,Pe;n.parameters={...n.parameters,docs:{...(Oe=n.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <Stack gap="md">
    <Select {...args} isClearable />
    <Select {...args} defaultInputValue="Cu" />
    <Select {...args} defaultInputValue="Cu" defaultValue={[options[1]]} isClearable />
    <Select {...args} defaultValue={[options[1], options[2]]} defaultIsMenuOpen />
  </Stack>`,...(Pe=(je=n.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var Le,ye,Ve;d.parameters={...d.parameters,docs:{...(Le=d.parameters)==null?void 0:Le.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Ve=(ye=d.parameters)==null?void 0:ye.docs)==null?void 0:Ve.source}}};var Re,Ie,ke;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ke=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var De,Ae,We;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(We=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var we,Ne,He;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`args => <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <Select {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <Select {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <Select {...args} maxPillLabelLength={5} />
  </Stack>`,...(He=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Te,ze,Be;y.parameters={...y.parameters,docs:{...(Te=y.parameters)==null?void 0:Te.docs,source:{originalSource:`args => <div style={{
  width: '200px'
}}>
    <Select {...args} />
  </div>`,...(Be=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var Fe,Ge,Ue;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <div>
    <Select {...args} />
  </div>`,...(Ue=(Ge=V.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Ee,Ye,Ze;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => <Select formatOptionLabel={data => <Inline align="center" gap="xs">
        <span>({data.value})</span>
        <span>{data.label}</span>
      </Inline>} {...args} />`,...(Ze=(Ye=R.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var _e,Ke,Je;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`args => <Select formatOptionLabel={(data, meta) => {
  const renderMultiValueLabel = meta.context === 'value';
  return renderMultiValueLabel ? <Inline align="center" gap="xs">
          <span>({data.value})</span>
          <span>{data.label}</span>
        </Inline> : <span>{data.label}</span>;
}} {...args} />`,...(Je=(Ke=I.parameters)==null?void 0:Ke.docs)==null?void 0:Je.source}}};var qe,Qe,Xe;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Xe=(Qe=k.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var $e,ea,aa;D.parameters={...D.parameters,docs:{...($e=D.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <Select formatGroupLabel={group => <Inline gap="md" justify="space-between">
        <Text isBold>{group.label}</Text>
        <Pill label={group.options.length.toString()} />
      </Inline>} {...args} />`,...(aa=(ea=D.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ra,sa,ta;A.parameters={...A.parameters,docs:{...(ra=A.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <Select loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <Select loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(ta=(sa=A.parameters)==null?void 0:sa.docs)==null?void 0:ta.source}}};var oa,la,ia;g.parameters={...g.parameters,docs:{...(oa=g.parameters)==null?void 0:oa.docs,source:{originalSource:`args => {
  const [selectedOptions, setSelectedOptions] = useState<OptionsType<Option>>([options[1], options[2]]);
  return <Stack gap="md">
      <Select {...args} closeMenuOnSelect={false} value={selectedOptions} menuIsOpen onChange={values => {
      setSelectedOptions(values);
    }} />

      <Padbox>
        <Label>Selected Values</Label>
        <Stack gap="md">
          {selectedOptions.map(option => <Inline key={option.value} gap="sm">
              <Label style={{
            width: '100px'
          }}>{option.label}</Label>
              <Button variant="text" onClick={() => setSelectedOptions(prev => prev.filter(o => o.value !== option.value))}>
                Remove
              </Button>
            </Inline>)}
        </Stack>
      </Padbox>
    </Stack>;
}`,...(ia=(la=g.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};var na,ca,ua;b.parameters={...b.parameters,docs:{...(na=b.parameters)==null?void 0:na.docs,source:{originalSource:"args => <Select {...args} />",...(ua=(ca=b.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};const Wr=["Playground","Default","WithDefaultValue","WithPlaceholder","Focus","Invalid","Disabled","Loading","Clearable","Opened","OptionsGroup","DisabledOptions","MultiSelect","NoOptionFound","CustomNoOptionFound","CustomMenuActions","PillTruncation","PillWrapping","MaxVisibleItem","CustomOptionLabel","CustomMultiValueLabel","WithCustomComponents","CustomGroupLabel","AsyncSelect","MultiSelectWithControlledValue","DarkMode"];export{A as AsyncSelect,M as Clearable,D as CustomGroupLabel,P as CustomMenuActions,I as CustomMultiValueLabel,j as CustomNoOptionFound,R as CustomOptionLabel,b as DarkMode,l as Default,f as Disabled,O as DisabledOptions,x as Focus,C as Invalid,h as Loading,V as MaxVisibleItem,n as MultiSelect,g as MultiSelectWithControlledValue,d as NoOptionFound,u as Opened,c as OptionsGroup,L as PillTruncation,y as PillWrapping,S as Playground,k as WithCustomComponents,m as WithDefaultValue,v as WithPlaceholder,Wr as __namedExportsOrder,Ar as default};
//# sourceMappingURL=Select.stories-D-6LJrhZ.js.map
