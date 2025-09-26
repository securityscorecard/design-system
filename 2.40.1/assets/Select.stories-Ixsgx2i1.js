import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as ba}from"./index-ClcD9ViR.js";import{a as T}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as r}from"./Select--tnt7OO2.js";import"./index-KN_rxr65.js";import"./index-XYi7vicG.js";import{b as Sa,P as va}from"./Pill-BHmoIlzb.js";import"./index-CPcWvurw.js";import{T as pa}from"./index-NGm66y6o.js";import"./index-zG1Ob1bl.js";import"./index-C5UuwF74.js";import{S as W}from"./index-BJfwPkfN.js";import{H as N}from"./Heading-Dl8MdXW2.js";import{I as H}from"./Inline-BnvQG4P8.js";import{P as fa}from"./Padbox-DhupY5rO.js";import{L as z}from"./Label-DV_70g_N.js";import{B as xa}from"./Button-CZULOlNW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./useSelectProps-leRZdnNC.js";import"./DSProvider-A0BpKmNN.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./_isObject-dmcfxmtS.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CyZxMOeP.js";import"./space.enums-DGrZwzIk.js";import"./index-D-6HVrdk.js";import"./Checkbox-xfOTOUl8.js";import"./index-DxcpycWO.js";import"./minus-C2f59QhV.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./mergeRefs-C43w_hK8.js";import"./index-DRm3KUNF.js";import"./Button-56zXr8E8.js";import"./components-C4v5wf-d.js";import"./index-D4Gd5-v_.js";import"./Icon-CMhyohng.js";import"./index-DbwGX_n3.js";import"./useLogger-D_rFNWpS.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./index-BQo-AQpP.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-DgiqyIBy.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-CTx4I37N.js";import"./isNilOrEmpty-CZt-ddG5.js";import"./isNil-D8uoaQyf.js";import"./take-BBQ9_XYD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./Cluster-B_3C_5JL.js";import"./isNotEmpty-DRLlCpEq.js";import"./isNonEmptyArray-Do-5vzXl.js";import"./sortBy-BJfiWH6l.js";import"./index-DV1EfWHB.js";import"./Inline.enums-KPT5jvjq.js";import"./index-CHtjjM69.js";import"./require-router-link-B20G8iu1.js";import"./react-router-dom-Dmb3y85X.js";import"./inheritsLoose-B6jfs0L0.js";import"./tiny-invariant-CopsF_GD.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./ElementLabel-Kzoagp5M.js";const o=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],ma=[{label:"United States",value:"US"},{label:"Europe",options:[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}]},{label:"Islands",options:[{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"}]},{label:"Canada",value:"CA"}],Ca=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CY",label:"Cyprus",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CZ",label:"Czech Republic"}],i=[{value:"01",label:"123456789012345678901234567890"},{value:"02",label:"12345678901234567890"},{value:"03",label:"1234567890"},...o],Gr={title:"components/forms/Select/Select",component:r,parameters:{docs:{description:{component:"\n```js\nimport { Select } from '@securityscorecard/design-system';\nimport Pill from '../../Pill/Pill';\n```\n      "}},a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"label",enabled:!1},{id:"scrollable-region-focusable",enabled:!1}]}}},argTypes:{options:{table:{type:{detail:`
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
          `}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},t=a=>e.jsx(r,{...a,"aria-label":"Select",isMenuPositionRelative:!0}),S=t.bind({});S.args={options:o,placeholder:"Select country..."};const l=t.bind({});l.args={options:o};const m=t.bind({});m.args={...l.args,defaultValue:o[1]};const v=t.bind({});v.args={...l.args,placeholder:"Select country..."};const f=t.bind({});f.args={...l.args,className:"focus"};const x=t.bind({});x.args={...l.args,isInvalid:!0};const C=t.bind({});C.args={...l.args,isDisabled:!0,defaultValue:[o[1]],isMulti:!0};const h=t.bind({});h.args={...l.args,isLoading:!0};const M=t.bind({});M.args={...m.args,isClearable:!0};const u=t.bind({});u.args={...l.args,defaultIsMenuOpen:!0};const c=t.bind({});c.args={options:ma,defaultIsMenuOpen:!0,isClearable:!0};const O=t.bind({});O.args={options:Ca,defaultIsMenuOpen:!0};const n=a=>e.jsxs(W,{gap:"md",children:[e.jsx(r,{...a,isClearable:!0}),e.jsx(r,{...a,defaultInputValue:"Cu"}),e.jsx(r,{...a,defaultInputValue:"Cu",defaultValue:[o[1]],isClearable:!0}),e.jsx(r,{...a,defaultValue:[o[1],o[2]],defaultIsMenuOpen:!0})]});n.args={...c.args,isMenuPositionRelative:!0,isMulti:!0};const d=t.bind({});d.args={...u.args,defaultInputValue:"foo",isClearable:!0};const j=t.bind({});j.args={...d.args,noOptionsMessage:()=>"You know nothing, Jon Snow"};const P=t.bind({});P.args={...u.args,options:ma,menuActions:[{label:"Action A",name:"Action A",onClick:T("click-action-a")},{label:"Action B",name:"Action B",onClick:T("click-action-b")}]};const y=a=>e.jsxs(W,{gap:"md",children:[e.jsx(N,{size:"h3",children:"Default truncation N=16"}),e.jsx(r,{...a}),e.jsx(N,{size:"h3",children:"Custom truncation N=25"}),e.jsx(r,{...a,maxPillLabelLength:25}),e.jsx(N,{size:"h3",children:"Custom truncation N=5"}),e.jsx(r,{...a,maxPillLabelLength:5})]});y.args={...n.args,options:i,defaultValue:[i[2],i[1],i[0]]};const L=a=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...a})});L.args={...n.args,color:Sa.gray,options:i,defaultValue:[i[2],i[1]]};const V=a=>e.jsx("div",{children:e.jsx(r,{...a})});V.args={...n.args,options:i,defaultValue:[i[0],i[1],i[2],i[5]],isClearable:!1,isMulti:!0,maxVisibleItem:3};const R=a=>e.jsx(r,{formatOptionLabel:s=>e.jsxs(H,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",s.value,")"]}),e.jsx("span",{children:s.label})]}),...a});R.args={...n.args,defaultValue:[o[1],o[2]]};const I=a=>e.jsx(r,{formatOptionLabel:(s,w)=>w.context==="value"?e.jsxs(H,{align:"center",gap:"xs",children:[e.jsxs("span",{children:["(",s.value,")"]}),e.jsx("span",{children:s.label})]}):e.jsx("span",{children:s.label}),...a});I.args={...l.args,isMenuPositionRelative:!0,isMulti:!0,defaultIsMenuOpen:!0};const ha=({children:a})=>e.jsxs("div",{children:[e.jsx(pa,{children:"Custom MenuList"}),a]}),k=t.bind({});k.args={options:o,components:{MenuList:ha}};const D=a=>e.jsx(r,{formatGroupLabel:s=>e.jsxs(H,{gap:"md",justify:"space-between",children:[e.jsx(pa,{isBold:!0,children:s.label}),e.jsx(va,{label:s.options.length.toString()})]}),...a});D.args={...n.args};const Ma=a=>o.filter(s=>s.label.toLowerCase().includes(a.toLowerCase())),B=a=>new Promise(s=>{setTimeout(()=>{s(Ma(a))},1e3)}),A=()=>e.jsxs(W,{gap:"md",children:[e.jsx(r,{loadOptions:B,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),e.jsx(r,{loadOptions:B,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});A.parameters={screenshot:{skip:!0}};const g=a=>{const[s,w]=ba.useState([o[1],o[2]]);return e.jsxs(W,{gap:"md",children:[e.jsx(r,{...a,closeMenuOnSelect:!1,value:s,menuIsOpen:!0,onChange:p=>{w(p)}}),e.jsxs(fa,{children:[e.jsx(z,{children:"Selected Values"}),e.jsx(W,{gap:"md",children:s.map(p=>e.jsxs(H,{gap:"sm",children:[e.jsx(z,{style:{width:"100px"},children:p.label}),e.jsx(xa,{variant:"text",onClick:()=>w(da=>da.filter(ga=>ga.value!==p.value)),children:"Remove"})]},p.value))})]})]})};g.args={...c.args,isMenuPositionRelative:!0,isMulti:!0};g.parameters={screenshot:{skip:!0}};const b=a=>e.jsx(r,{...a});b.args={...c.args,isMenuPositionRelative:!0,isMulti:!0,defaultValue:[o[4]],isClearable:!0,menuActions:[{label:"Action A",name:"Action A",onClick:T("click-action-a")}]};b.parameters={themes:{themeOverride:"Dark"}};var F,G,U;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(U=(G=S.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var E,Y,Z;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,K,J;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(J=(K=m.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var q,Q,X;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var $,ee,ae;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(te=(se=x.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,le,ie;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,ce,ue;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ue=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,de;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(de=(me=M.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,be,Se;u.parameters={...u.parameters,docs:{...(ge=u.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Se=(be=u.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var ve,fe,xe;c.parameters={...c.parameters,docs:{...(ve=c.parameters)==null?void 0:ve.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(xe=(fe=c.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Ce,he,Me;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Me=(he=O.parameters)==null?void 0:he.docs)==null?void 0:Me.source}}};var Oe,je,Pe;n.parameters={...n.parameters,docs:{...(Oe=n.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <Stack gap="md">
    <Select {...args} isClearable />
    <Select {...args} defaultInputValue="Cu" />
    <Select {...args} defaultInputValue="Cu" defaultValue={[options[1]]} isClearable />
    <Select {...args} defaultValue={[options[1], options[2]]} defaultIsMenuOpen />
  </Stack>`,...(Pe=(je=n.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var ye,Le,Ve;d.parameters={...d.parameters,docs:{...(ye=d.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(Ve=(Le=d.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var Re,Ie,ke;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(ke=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var De,Ae,We;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`args => {
  return <Select {...args} aria-label="Select" isMenuPositionRelative />;
}`,...(We=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var we,He,Ne;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:`args => <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <Select {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <Select {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <Select {...args} maxPillLabelLength={5} />
  </Stack>`,...(Ne=(He=y.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Te,ze,Be;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`args => <div style={{
  width: '200px'
}}>
    <Select {...args} />
  </div>`,...(Be=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var Fe,Ge,Ue;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <div>
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
}`,...(ia=(la=g.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};var na,ca,ua;b.parameters={...b.parameters,docs:{...(na=b.parameters)==null?void 0:na.docs,source:{originalSource:"args => <Select {...args} />",...(ua=(ca=b.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};const Ur=["Playground","Default","WithDefaultValue","WithPlaceholder","Focus","Invalid","Disabled","Loading","Clearable","Opened","OptionsGroup","DisabledOptions","MultiSelect","NoOptionFound","CustomNoOptionFound","CustomMenuActions","PillTruncation","PillWrapping","MaxVisibleItem","CustomOptionLabel","CustomMultiValueLabel","WithCustomComponents","CustomGroupLabel","AsyncSelect","MultiSelectWithControlledValue","DarkMode"];export{A as AsyncSelect,M as Clearable,D as CustomGroupLabel,P as CustomMenuActions,I as CustomMultiValueLabel,j as CustomNoOptionFound,R as CustomOptionLabel,b as DarkMode,l as Default,C as Disabled,O as DisabledOptions,f as Focus,x as Invalid,h as Loading,V as MaxVisibleItem,n as MultiSelect,g as MultiSelectWithControlledValue,d as NoOptionFound,u as Opened,c as OptionsGroup,y as PillTruncation,L as PillWrapping,S as Playground,k as WithCustomComponents,m as WithDefaultValue,v as WithPlaceholder,Ur as __namedExportsOrder,Gr as default};
//# sourceMappingURL=Select.stories-Ixsgx2i1.js.map
