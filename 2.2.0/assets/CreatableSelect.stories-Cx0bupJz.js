import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{C as l}from"./CreatableSelect-DuZZJGpq.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as j}from"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{i as D}from"./isNotNull-B1xFkUZ3.js";import"./index-BRV0Se7Z.js";import"./extends-CF3RwP-h.js";import"./Select-D2oYJWhQ.js";import"./space-1LtLrmuu.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-DIVhMF2i.js";import"./index-C7IrpltL.js";import"./action.types-CSW_hKjS.js";import"./index-CJIF_j5S.js";import"./Checkbox-DtOI_Iry.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Label-Bgxc31x7.js";import"./DSProvider-IYcK3cWD.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./index-DFvsTZbx.js";import"./Text-DTP2ysh1.js";import"./Icon-4JNizDXH.js";import"./useLogger-Cd66DVRc.js";import"./Button.enums-DxFt5drl.js";import"./BaseButton-D1TUSAxp.js";import"./require-router-link-DHB4GfDh.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./noop-CLoMDX4X.js";import"./Button-vDRI25at.js";import"./PillRemoveButton-CS7bxu8m.js";import"./PillLabel-CLRUhFaA.js";import"./pick-Dgh-9MLD.js";import"./isNotNilOrEmpty-cGK6as13.js";import"./isNilOrEmpty-MGEuPZ7r.js";import"./isNil-C1Q7XXIj.js";import"./take-Kg9EtPoO.js";import"./both-peGKknMH.js";import"./isNonEmptyArray-CGykYah7.js";import"./isNotEmpty-Dh9FcTil.js";import"./isArray-D_RvpTHQ.js";import"./sortBy-BCHo5fjk.js";import"./flex.types-BrkCVx66.js";const Re={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
\`\`\`js
import { CreatableSelect } from '@securityscorecard/design-system';
\`\`\`

Capabilities of the **CreatableSelect** component are the same as [Select](design-system/alpha/components-forms-select-select--playground) component
with a couple of properties specific for the options creation.
      `}}},argTypes:{options:{table:{type:{detail:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},V=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],w=({options:t,...r})=>{const[L,T]=u.useState(t),[I,c]=u.useState(null),[M,m]=u.useState(!1),x=s=>{m(!0);const p={label:s,value:s.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{T(i=>[...i??[],p]),c(i=>D(i)?[p]:[...i,p]),m(!1)},500)};return n.jsx(l,{...r,createNewLabel:"Create new option",isLoading:M,options:L,value:I,onChange:s=>c(s),onCreateOption:x})},e=w.bind({});e.args={options:V,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const a=w.bind({});a.args={...e.args,isMulti:!1};const A=t=>V.filter(r=>r.label.toLowerCase().includes(t.toLowerCase())),d=t=>new Promise(r=>{setTimeout(()=>{r(A(t))},1e3)}),o=()=>n.jsxs(j,{gap:"md",children:[n.jsx(l,{loadOptions:d,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),n.jsx(l,{loadOptions:d,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});o.parameters={screenshot:{skip:!0}};var O,C,g;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`({
  options: originalOptions,
  ...args
}) => {
  const [createdOptions, setCreatedOptions] = useState(originalOptions);
  const [currentValue, setCurrentValue] = useState<OptionsType<Option> | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const handleCreateOption = (inputString: string) => {
    setIsCreating(true);
    const newOption: Option = {
      label: inputString,
      value: inputString.toLowerCase().replace(/\\W/g, '')
    };
    setTimeout(() => {
      setCreatedOptions(prevState => ([...(prevState ?? []), newOption] as GroupedOptionsType<Option> | OptionsType<Option>));
      setCurrentValue(prevValue => isNull(prevValue) ? [newOption] : [...prevValue, newOption]);
      setIsCreating(false);
    }, 500);
  };
  return <CreatableSelect {...args} createNewLabel="Create new option" isLoading={isCreating} options={createdOptions} value={currentValue} onChange={value => setCurrentValue(value)} onCreateOption={handleCreateOption} />;
}`,...(g=(C=e.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var b,S,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
  options: originalOptions,
  ...args
}) => {
  const [createdOptions, setCreatedOptions] = useState(originalOptions);
  const [currentValue, setCurrentValue] = useState<OptionsType<Option> | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const handleCreateOption = (inputString: string) => {
    setIsCreating(true);
    const newOption: Option = {
      label: inputString,
      value: inputString.toLowerCase().replace(/\\W/g, '')
    };
    setTimeout(() => {
      setCreatedOptions(prevState => ([...(prevState ?? []), newOption] as GroupedOptionsType<Option> | OptionsType<Option>));
      setCurrentValue(prevValue => isNull(prevValue) ? [newOption] : [...prevValue, newOption]);
      setIsCreating(false);
    }, 500);
  };
  return <CreatableSelect {...args} createNewLabel="Create new option" isLoading={isCreating} options={createdOptions} value={currentValue} onChange={value => setCurrentValue(value)} onCreateOption={handleCreateOption} />;
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,v,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <CreatableSelect loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <CreatableSelect loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const ke=["Playground","SingleSelect","AsyncSelect"];export{o as AsyncSelect,e as Playground,a as SingleSelect,ke as __namedExportsOrder,Re as default};
