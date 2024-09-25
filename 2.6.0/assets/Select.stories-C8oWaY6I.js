import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as pa}from"./index-CTjT7uj6.js";import{a as H}from"./chunk-454WOBUV-CM0pFb8Z.js";import{S as s}from"./Select-CcGVQXlY.js";import"./index-DozTNYRt.js";import"./index-BlYXqBWM.js";import{b as ma,P as da}from"./Pill-z8JPj4-3.js";import"./index-CcmXMBOf.js";import{T as ia}from"./index-uIya-cWM.js";import"./index-ByR-Ex3O.js";import"./index-O0QocxG4.js";import{S as A}from"./index-NWhnjyl5.js";import{a as N}from"./Heading-CP5qUNRg.js";import{I as w}from"./Inline.enums-DlaUPeKw.js";import{P as ga}from"./Padbox-Suafv-Ni.js";import{L as T}from"./Label-DtIcT56G.js";import{B as ba}from"./Button-DfVLVEQy.js";import"./v4-CQkTLCs1.js";import"./extends-CF3RwP-h.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./index-DIVhMF2i.js";import"./index-C7IrpltL.js";import"./index-k3CGF2-i.js";import"./index-CbknQUej.js";import"./Checkbox-C1fT9fmL.js";import"./index-DEer-CVx.js";import"./index-CMxDd3Da.js";import"./DSProvider-B7ofGRk-.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./isFunction-ORz17Qg7.js";import"./prop-CqBAad6K.js";import"./checkCircleSolid-CXNAtMl8.js";import"./Button-BJCD1Rvj.js";import"./components-9007xTyM.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./useLogger-XTihx-r2.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./PillRemoveButton-C9oge2rz.js";import"./pick-CbvLi2E1.js";import"./isNotNilOrEmpty-DiaBY2VY.js";import"./isNilOrEmpty-4N7MeV5x.js";import"./isNil-CUap-F7z.js";import"./take-BGfUuSAC.js";import"./Cluster-CO02VLRh.js";import"./isNotEmpty-CRWDvOhW.js";import"./isNonEmptyArray-0RkcjJFH.js";import"./sortBy-CnCs5eJf.js";import"./index-B0Us5nPq.js";import"./index-D2mRoxDo.js";import"./require-router-link-CU3avibx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./tiny-invariant-CopsF_GD.js";import"./isNull-D6Q9WflV.js";import"./isNotNull-CcOpPpmr.js";import"./noop-BfmH62Vh.js";const l=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],na=[{label:"United States",value:"US"},{label:"Europe",options:[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}]},{label:"Islands",options:[{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"}]},{label:"Canada",value:"CA"}],Sa=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CY",label:"Cyprus",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CZ",label:"Czech Republic"}],i=[{value:"01",label:"123456789012345678901234567890"},{value:"02",label:"12345678901234567890"},{value:"03",label:"1234567890"},...l],Vs={title:"components/forms/Select/Select",component:s,parameters:{docs:{description:{component:"\n```js\nimport { Select } from '@securityscorecard/design-system';\nimport Pill from '../../Pill/Pill';\n```\n      "}}},argTypes:{options:{table:{type:{detail:`
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
          `}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},t=a=>e.jsx(s,{...a,"aria-label":"Select",isMenuPositionRelative:!0}),b=t.bind({});b.args={options:l,placeholder:"Select country..."};const o=t.bind({});o.args={options:l};const m=t.bind({});m.args={...o.args,defaultValue:l[1]};const S=t.bind({});S.args={...o.args,placeholder:"Select country..."};const v=t.bind({});v.args={...o.args,className:"focus"};const x=t.bind({});x.args={...o.args,isInvalid:!0};const f=t.bind({});f.args={...o.args,isDisabled:!0};const C=t.bind({});C.args={...o.args,isLoading:!0};const h=t.bind({});h.args={...m.args,isClearable:!0};const c=t.bind({});c.args={...o.args,defaultIsMenuOpen:!0};const u=t.bind({});u.args={options:na,defaultIsMenuOpen:!0,isClearable:!0};const O=t.bind({});O.args={options:Sa,defaultIsMenuOpen:!0};const n=a=>e.jsxs(A,{gap:"md",children:[e.jsx(s,{...a,isClearable:!0}),e.jsx(s,{...a,defaultInputValue:"Cu"}),e.jsx(s,{...a,defaultInputValue:"Cu",defaultValue:[l[1]],isClearable:!0}),e.jsx(s,{...a,defaultValue:[l[1],l[2]],defaultIsMenuOpen:!0})]});n.args={...u.args,isMenuPositionRelative:!0,isMulti:!0};const d=t.bind({});d.args={...c.args,defaultInputValue:"foo",isClearable:!0};const M=t.bind({});M.args={...d.args,noOptionsMessage:()=>"You know nothing, Jon Snow"};const j=t.bind({});j.args={...c.args,options:na,menuActions:[{label:"Action A",name:"Action A",onClick:H("click-action-a")},{label:"Action B",name:"Action B",onClick:H("click-action-b")}]};const P=a=>e.jsxs(A,{gap:"md",children:[e.jsx(N,{size:"h3",children:"Default truncation N=16"}),e.jsx(s,{...a}),e.jsx(N,{size:"h3",children:"Custom truncation N=25"}),e.jsx(s,{...a,maxPillLabelLength:25}),e.jsx(N,{size:"h3",children:"Custom truncation N=5"}),e.jsx(s,{...a,maxPillLabelLength:5})]});P.args={...n.args,options:i,defaultValue:[i[2],i[1],i[0]]};const L=a=>e.jsx("div",{style:{width:"200px"},children:e.jsx(s,{...a})});L.args={...n.args,color:ma.gray,options:i,defaultValue:[i[2],i[1]]};const y=a=>e.jsx("div",{children:e.jsx(s,{...a})});y.args={...n.args,options:i,defaultValue:[i[0],i[1],i[2],i[5]],isClearable:!1,isMulti:!0,maxVisibleItem:3};const V=a=>e.jsx(s,{formatOptionLabel:r=>e.jsxs(w,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",r.value,")"]}),e.jsx("span",{children:r.label})]}),...a});V.args={...n.args,defaultValue:[l[1],l[2]]};const I=a=>e.jsx(s,{formatOptionLabel:(r,W)=>W.context==="value"?e.jsxs(w,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",r.value,")"]}),e.jsx("span",{children:r.label})]}):e.jsx("span",{children:r.label}),...a});I.args={...o.args,isMenuPositionRelative:!0,isMulti:!0,defaultIsMenuOpen:!0};const va=({children:a})=>e.jsxs("div",{children:[e.jsx(ia,{children:"Custom MenuList"}),a]}),R=t.bind({});R.args={options:l,components:{MenuList:va}};const k=a=>e.jsx(s,{formatGroupLabel:r=>e.jsxs(w,{gap:"md",justify:"space-between",children:[e.jsx(ia,{isBold:!0,children:r.label}),e.jsx(da,{label:r.options.length.toString()})]}),...a});k.args={...n.args};const xa=a=>l.filter(r=>r.label.toLowerCase().includes(a.toLowerCase())),z=a=>new Promise(r=>{setTimeout(()=>{r(xa(a))},1e3)}),D=()=>e.jsxs(A,{gap:"md",children:[e.jsx(s,{loadOptions:z,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),e.jsx(s,{loadOptions:z,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});D.parameters={screenshot:{skip:!0}};const g=a=>{const[r,W]=pa.useState([l[1],l[2]]);return e.jsxs(A,{gap:"md",children:[e.jsx(s,{...a,closeMenuOnSelect:!1,value:r,menuIsOpen:!0,onChange:p=>{W(p)}}),e.jsxs(ga,{children:[e.jsx(T,{children:"Selected Values"}),e.jsx(A,{gap:"md",children:r.map(p=>e.jsxs(w,{gap:"sm",children:[e.jsx(T,{style:{width:"100px"},children:p.label}),e.jsx(ba,{variant:"text",onClick:()=>W(ca=>ca.filter(ua=>ua.value!==p.value)),children:"Remove"})]},p.value))})]})]})};g.args={...u.args,isMenuPositionRelative:!0,isMulti:!0};g.parameters={screenshot:{skip:!0}};var B,F,G;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var U,E,Y;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var Z,_,K;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(K=(_=m.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var J,q,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Q=(q=S.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,$,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var te,oe,le;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ne,ce;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ce=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ue,pe,me;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(me=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,ge,be;c.parameters={...c.parameters,docs:{...(de=c.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(be=(ge=c.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Se,ve,xe;u.parameters={...u.parameters,docs:{...(Se=u.parameters)==null?void 0:Se.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(xe=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var fe,Ce,he;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(he=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:he.source}}};var Oe,Me,je;n.parameters={...n.parameters,docs:{...(Oe=n.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <Stack gap="md">
    <Select {...args} isClearable />
    <Select {...args} defaultInputValue="Cu" />
    <Select {...args} defaultInputValue="Cu" defaultValue={[options[1]]} isClearable />
    <Select {...args} defaultValue={[options[1], options[2]]} defaultIsMenuOpen />
  </Stack>`,...(je=(Me=n.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var Pe,Le,ye;d.parameters={...d.parameters,docs:{...(Pe=d.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ye=(Le=d.parameters)==null?void 0:Le.docs)==null?void 0:ye.source}}};var Ve,Ie,Re;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Re=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var ke,De,Ae;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Ae=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var We,we,Ne;P.parameters={...P.parameters,docs:{...(We=P.parameters)==null?void 0:We.docs,source:{originalSource:`args => <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <Select {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <Select {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <Select {...args} maxPillLabelLength={5} />
  </Stack>`,...(Ne=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var He,Te,ze;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`args => <div style={{
  width: '200px'
}}>
    <Select {...args} />
  </div>`,...(ze=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Be,Fe,Ge;y.parameters={...y.parameters,docs:{...(Be=y.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <div>
    <Select {...args} />
  </div>`,...(Ge=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var Ue,Ee,Ye;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => <Select formatOptionLabel={data => <Inline align="center" gap="xs">
        <span>({data.value})</span>
        <span>{data.label}</span>
      </Inline>} {...args} />`,...(Ye=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Ye.source}}};var Ze,_e,Ke;I.parameters={...I.parameters,docs:{...(Ze=I.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => <Select formatOptionLabel={(data, meta) => {
  const renderMultiValueLabel = meta.context === 'value';
  return renderMultiValueLabel ? <Inline align="center" gap="xs">
          <span>({data.value})</span>
          <span>{data.label}</span>
        </Inline> : <span>{data.label}</span>;
}} {...args} />`,...(Ke=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var Je,qe,Qe;R.parameters={...R.parameters,docs:{...(Je=R.parameters)==null?void 0:Je.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Qe=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Qe.source}}};var Xe,$e,ea;k.parameters={...k.parameters,docs:{...(Xe=k.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => <Select formatGroupLabel={group => <Inline gap="md" justify="space-between">
        <Text isBold>{group.label}</Text>
        <Pill label={group.options.length.toString()} />
      </Inline>} {...args} />`,...(ea=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:ea.source}}};var aa,sa,ra;D.parameters={...D.parameters,docs:{...(aa=D.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <Select loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <Select loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(ra=(sa=D.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ta,oa,la;g.parameters={...g.parameters,docs:{...(ta=g.parameters)==null?void 0:ta.docs,source:{originalSource:`args => {
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
}`,...(la=(oa=g.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};const Is=["Playground","Default","WithDefaultValue","WithPlaceholder","Focus","Invalid","Disabled","Loading","Clearable","Opened","OptionsGroup","DisabledOptions","MultiSelect","NoOptionFound","CustomNoOptionFound","CustomMenuActions","PillTruncation","PillWrapping","MaxVisibleItem","CustomOptionLabel","CustomMultiValueLabel","WithCustomComponents","CustomGroupLabel","AsyncSelect","MultiSelectWithControlledValue"];export{D as AsyncSelect,h as Clearable,k as CustomGroupLabel,j as CustomMenuActions,I as CustomMultiValueLabel,M as CustomNoOptionFound,V as CustomOptionLabel,o as Default,f as Disabled,O as DisabledOptions,v as Focus,x as Invalid,C as Loading,y as MaxVisibleItem,n as MultiSelect,g as MultiSelectWithControlledValue,d as NoOptionFound,c as Opened,u as OptionsGroup,P as PillTruncation,L as PillWrapping,b as Playground,R as WithCustomComponents,m as WithDefaultValue,S as WithPlaceholder,Is as __namedExportsOrder,Vs as default};
//# sourceMappingURL=Select.stories-C8oWaY6I.js.map
