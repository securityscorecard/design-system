import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as pa}from"./index-BwDkhjyp.js";import{a as w}from"./chunk-454WOBUV-DWuJqIWT.js";import{S as s}from"./Select-CtVnGavB.js";import"./Surface-Cs7tekjF.js";import{P as da}from"./Padbox-BrtZqAZY.js";import{S as _}from"./Stack-B_iJg7G-.js";import{I as A}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{c as ma}from"./PillRemoveButton-MEfwPxhp.js";import{P as ga}from"./Pill-CwiyUbuD.js";import{a as W}from"./Heading-Doa2oxzU.js";import{T as ia}from"./Text-C1sA-5dj.js";import{L as T}from"./Label-B8OlZEa3.js";import{B as ba}from"./Button-CKE-X77u.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./extends-CF3RwP-h.js";import"./space-B9R18Mwn.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./unsupportedIterableToArray-CO_C7xo5.js";import"./index-DhoXBIRq.js";import"./index-CVyJwDg7.js";import"./action.types-BWYzzYyM.js";import"./index-BFi_qJcR.js";import"./Checkbox-BglAPnik.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./Button.enums-b_k9EAqq.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./prop-3Huj0iT1.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./PillLabel-DJNPzf-i.js";import"./gt-CQw4D1xu.js";import"./pick-C_tN_oBI.js";import"./isNotNilOrEmpty-Drr4-pBH.js";import"./isNilOrEmpty-CUDYV7wl.js";import"./isNil-Bk-kOnIJ.js";import"./both-CuwR4I11.js";import"./isNonEmptyArray-WRg_f07P.js";import"./isNotEmpty-DVMo52u6.js";import"./isArray-C7-fa-V4.js";import"./isFunction-Wst0ouRg.js";import"./pluck-CCxX0LJC.js";import"./take-B9V3Rq9C.js";import"./sortBy-C0xwtuk4.js";import"./flex.types-q2tZp175.js";const l=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],na=[{label:"United States",value:"US"},{label:"Europe",options:[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}]},{label:"Islands",options:[{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"}]},{label:"Canada",value:"CA"}],Sa=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CY",label:"Cyprus",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CZ",label:"Czech Republic"}],i=[{value:"01",label:"123456789012345678901234567890"},{value:"02",label:"12345678901234567890"},{value:"03",label:"1234567890"},...l],Ps={title:"components/forms/Select/Select",component:s,parameters:{docs:{description:{component:"\n```js\nimport { Select } from '@securityscorecard/design-system';\nimport Pill from '../../Pill/Pill';\n```\n      "}}},argTypes:{options:{table:{type:{detail:`
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
          `}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},t=a=>e.jsx(s,{...a,"aria-label":"Select",isMenuPositionRelative:!0}),M=t.bind({});M.args={options:l,placeholder:"Select country..."};const o=t.bind({});o.args={options:l};const m=t.bind({});m.args={...o.args,defaultValue:l[1]};const O=t.bind({});O.args={...o.args,placeholder:"Select country..."};const j=t.bind({});j.args={...o.args,className:"focus"};const y=t.bind({});y.args={...o.args,isInvalid:!0};const P=t.bind({});P.args={...o.args,isDisabled:!0};const L=t.bind({});L.args={...o.args,isLoading:!0};const I=t.bind({});I.args={...m.args,isClearable:!0};const c=t.bind({});c.args={...o.args,defaultIsMenuOpen:!0};const u=t.bind({});u.args={options:na,defaultIsMenuOpen:!0,isClearable:!0};const V=t.bind({});V.args={options:Sa,defaultIsMenuOpen:!0};const n=a=>e.jsxs(_,{gap:"md",children:[e.jsx(s,{...a,isClearable:!0}),e.jsx(s,{...a,defaultInputValue:"Cu"}),e.jsx(s,{...a,defaultInputValue:"Cu",defaultValue:[l[1]],isClearable:!0}),e.jsx(s,{...a,defaultValue:[l[1],l[2]],defaultIsMenuOpen:!0})]});n.args={...u.args,isMenuPositionRelative:!0,isMulti:!0};const g=t.bind({});g.args={...c.args,defaultInputValue:"foo",isClearable:!0};const R=t.bind({});R.args={...g.args,noOptionsMessage:()=>"You know nothing, Jon Snow"};const k=t.bind({});k.args={...c.args,options:na,menuActions:[{label:"Action A",name:"Action A",onClick:w("click-action-a")},{label:"Action B",name:"Action B",onClick:w("click-action-b")}]};const b=a=>e.jsxs(_,{gap:"md",children:[e.jsx(W,{size:"h3",children:"Default truncation N=16"}),e.jsx(s,{...a}),e.jsx(W,{size:"h3",children:"Custom truncation N=25"}),e.jsx(s,{...a,maxPillLabelLength:25}),e.jsx(W,{size:"h3",children:"Custom truncation N=5"}),e.jsx(s,{...a,maxPillLabelLength:5})]});b.args={...n.args,options:i,defaultValue:[i[2],i[1],i[0]]};const S=a=>e.jsx("div",{style:{width:"200px"},children:e.jsx(s,{...a})});S.args={...n.args,color:ma.gray,options:i,defaultValue:[i[2],i[1]]};const f=a=>e.jsx("div",{children:e.jsx(s,{...a})});f.args={...n.args,options:i,defaultValue:[i[0],i[1],i[2],i[5]],isClearable:!1,isMulti:!0,maxVisibleItem:3};const h=a=>e.jsx(s,{formatOptionLabel:r=>e.jsxs(A,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",r.value,")"]}),e.jsx("span",{children:r.label})]}),...a});h.args={...n.args,defaultValue:[l[1],l[2]]};const v=a=>e.jsx(s,{formatOptionLabel:(r,N)=>N.context==="value"?e.jsxs(A,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",r.value,")"]}),e.jsx("span",{children:r.label})]}):e.jsx("span",{children:r.label}),...a});v.args={...o.args,isMenuPositionRelative:!0,isMulti:!0,defaultIsMenuOpen:!0};const fa=({children:a})=>e.jsxs("div",{children:[e.jsx(ia,{children:"Custom MenuList"}),a]}),D=t.bind({});D.args={options:l,components:{MenuList:fa}};const C=a=>e.jsx(s,{formatGroupLabel:r=>e.jsxs(A,{gap:"md",justify:"space-between",children:[e.jsx(ia,{isBold:!0,children:r.label}),e.jsx(ga,{label:r.options.length.toString()})]}),...a});C.args={...n.args};const ha=a=>l.filter(r=>r.label.toLowerCase().includes(a.toLowerCase())),H=a=>new Promise(r=>{setTimeout(()=>{r(ha(a))},1e3)}),x=()=>e.jsxs(_,{gap:"md",children:[e.jsx(s,{loadOptions:H,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),e.jsx(s,{loadOptions:H,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});x.parameters={screenshot:{skip:!0}};const p=a=>{const[r,N]=pa.useState([l[1],l[2]]);return e.jsxs(_,{gap:"md",children:[e.jsx(s,{...a,closeMenuOnSelect:!1,value:r,menuIsOpen:!0,onChange:d=>{N(d)}}),e.jsxs(da,{children:[e.jsx(T,{children:"Selected Values"}),e.jsx(_,{gap:"md",children:r.map(d=>e.jsxs(A,{gap:"sm",children:[e.jsx(T,{style:{width:"100px"},children:d.label}),e.jsx(ba,{variant:"text",onClick:()=>N(ca=>ca.filter(ua=>ua.value!==d.value)),children:"Remove"})]},d.value))})]})]})};p.args={...u.args,isMenuPositionRelative:!0,isMulti:!0};p.parameters={screenshot:{skip:!0}};n.__docgenInfo={description:"",methods:[],displayName:"MultiSelect"};b.__docgenInfo={description:"",methods:[],displayName:"PillTruncation"};S.__docgenInfo={description:"",methods:[],displayName:"PillWrapping"};f.__docgenInfo={description:"",methods:[],displayName:"MaxVisibleItem"};h.__docgenInfo={description:"",methods:[],displayName:"CustomOptionLabel"};v.__docgenInfo={description:"",methods:[],displayName:"CustomMultiValueLabel"};C.__docgenInfo={description:"",methods:[],displayName:"CustomGroupLabel"};x.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect"};p.__docgenInfo={description:"",methods:[],displayName:"MultiSelectWithControlledValue"};var z,B,G;M.parameters={...M.parameters,docs:{...(z=M.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(G=(B=M.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var F,U,E;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(E=(U=o.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var Y,Z,K;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(K=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var J,q,Q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Q=(q=O.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,$,ee;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ee=($=j.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,re;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(re=(se=y.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var te,oe,le;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(le=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ne,ce;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ce=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ue,pe,de;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(de=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ge,be;c.parameters={...c.parameters,docs:{...(me=c.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(be=(ge=c.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Se,fe,he;u.parameters={...u.parameters,docs:{...(Se=u.parameters)==null?void 0:Se.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(he=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ve,Ce,xe;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(xe=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Me,Oe,je;n.parameters={...n.parameters,docs:{...(Me=n.parameters)==null?void 0:Me.docs,source:{originalSource:`args => <Stack gap="md">
    <Select {...args} isClearable />
    <Select {...args} defaultInputValue="Cu" />
    <Select {...args} defaultInputValue="Cu" defaultValue={[options[1]]} isClearable />
    <Select {...args} defaultValue={[options[1], options[2]]} defaultIsMenuOpen />
  </Stack>`,...(je=(Oe=n.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var ye,Pe,Le;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Le=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Ie,Ve,Re;R.parameters={...R.parameters,docs:{...(Ie=R.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Re=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var ke,De,_e;k.parameters={...k.parameters,docs:{...(ke=k.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(_e=(De=k.parameters)==null?void 0:De.docs)==null?void 0:_e.source}}};var Ne,Ae,We;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <Select {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <Select {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <Select {...args} maxPillLabelLength={5} />
  </Stack>`,...(We=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var we,Te,He;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`args => <div style={{
  width: '200px'
}}>
    <Select {...args} />
  </div>`,...(He=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:He.source}}};var ze,Be,Ge;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:`args => <div>
    <Select {...args} />
  </div>`,...(Ge=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var Fe,Ue,Ee;h.parameters={...h.parameters,docs:{...(Fe=h.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <Select formatOptionLabel={data => <Inline align="center" gap="xs">
        <span>({data.value})</span>
        <span>{data.label}</span>
      </Inline>} {...args} />`,...(Ee=(Ue=h.parameters)==null?void 0:Ue.docs)==null?void 0:Ee.source}}};var Ye,Ze,Ke;v.parameters={...v.parameters,docs:{...(Ye=v.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => <Select formatOptionLabel={(data, meta) => {
  const renderMultiValueLabel = meta.context === 'value';
  return renderMultiValueLabel ? <Inline align="center" gap="xs">
          <span>({data.value})</span>
          <span>{data.label}</span>
        </Inline> : <span>{data.label}</span>;
}} {...args} />`,...(Ke=(Ze=v.parameters)==null?void 0:Ze.docs)==null?void 0:Ke.source}}};var Je,qe,Qe;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Qe=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:Qe.source}}};var Xe,$e,ea;C.parameters={...C.parameters,docs:{...(Xe=C.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => <Select formatGroupLabel={group => <Inline gap="md" justify="space-between">
        <Text isBold>{group.label}</Text>
        <Pill label={group.options.length.toString()} />
      </Inline>} {...args} />`,...(ea=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:ea.source}}};var aa,sa,ra;x.parameters={...x.parameters,docs:{...(aa=x.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <Select loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <Select loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(ra=(sa=x.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ta,oa,la;p.parameters={...p.parameters,docs:{...(ta=p.parameters)==null?void 0:ta.docs,source:{originalSource:`args => {
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
}`,...(la=(oa=p.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};const Ls=["Playground","Default","WithDefaultValue","WithPlaceholder","Focus","Invalid","Disabled","Loading","Clearable","Opened","OptionsGroup","DisabledOptions","MultiSelect","NoOptionFound","CustomNoOptionFound","CustomMenuActions","PillTruncation","PillWrapping","MaxVisibleItem","CustomOptionLabel","CustomMultiValueLabel","WithCustomComponents","CustomGroupLabel","AsyncSelect","MultiSelectWithControlledValue"];export{x as AsyncSelect,I as Clearable,C as CustomGroupLabel,k as CustomMenuActions,v as CustomMultiValueLabel,R as CustomNoOptionFound,h as CustomOptionLabel,o as Default,P as Disabled,V as DisabledOptions,j as Focus,y as Invalid,L as Loading,f as MaxVisibleItem,n as MultiSelect,p as MultiSelectWithControlledValue,g as NoOptionFound,c as Opened,u as OptionsGroup,b as PillTruncation,S as PillWrapping,M as Playground,D as WithCustomComponents,m as WithDefaultValue,O as WithPlaceholder,Ls as __namedExportsOrder,Ps as default};
