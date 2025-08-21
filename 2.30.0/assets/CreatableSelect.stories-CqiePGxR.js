import{j as p}from"./jsx-runtime-BbjHj44Y.js";import{r as c}from"./index-C6mWTJJr.js";import{C as l}from"./CreatableSelect-DWsvpZoN.js";import"./index-CABfzxjM.js";import{S as A}from"./index-C8Uj0hRh.js";import{i as R}from"./isNull-C_3YYFwP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./_isObject-dmcfxmtS.js";import"./useSelectProps-DEPWNCm1.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CWpgOoCF.js";import"./space.enums-DGrZwzIk.js";import"./index-DcGAcNY6.js";import"./Checkbox-DDahwtiO.js";import"./index-CVyJwDg7.js";import"./minus-C2f59QhV.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./index-DLon-G_T.js";import"./Label-BYbJ_V7q.js";import"./ElementLabel-B8jQdsnd.js";import"./mergeRefs-C43w_hK8.js";import"./index-DRm3KUNF.js";import"./Button-I8Y2XdcJ.js";import"./components-C9sJjMsI.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-Dk74W0Oi.js";import"./useLogger-D6HktrB1.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./index-DYWQy94d.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-d8NE9DkX.js";import"./Inline-WQsFVyS5.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-DfsHSZJ8.js";import"./isNilOrEmpty-BKOGr95H.js";import"./isNil-D8uoaQyf.js";import"./take-CZyar5cj.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./Cluster-C53_rRpf.js";import"./isNotEmpty-BuaArano.js";import"./isNonEmptyArray-BixxrS2_.js";import"./sortBy-BJfiWH6l.js";import"./index-p3Ne9M6I.js";import"./index-CRnaouss.js";import"./Padbox-CMSZZGn9.js";import"./Inline.enums-KPT5jvjq.js";const ze={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}},args:{"aria-label":"Select"}},M=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],m=({options:e,...a})=>{const[D,x]=c.useState(e),[k,d]=c.useState(null),[N,O]=c.useState(!1),j=i=>{O(!0);const u={label:i,value:i.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{x(n=>[...n??[],u]),d(n=>R(n)?[u]:[...n,u]),O(!1)},500)};return p.jsx(l,{...a,createNewLabel:"Create new option",isLoading:N,options:D,value:k,onChange:i=>d(i),onCreateOption:j})},t=m.bind({});t.args={options:M,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const o=m.bind({});o.args={...t.args,isMulti:!1};const W=e=>M.filter(a=>a.label.toLowerCase().includes(e.toLowerCase())),g=e=>new Promise(a=>{setTimeout(()=>{a(W(e))},1e3)}),s=e=>p.jsxs(A,{gap:"md",children:[p.jsx(l,{...e,loadOptions:g,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),p.jsx(l,{...e,loadOptions:g,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});s.parameters={screenshot:{skip:!0}};const r=m.bind({});r.args={...t.args};r.parameters={themes:{themeOverride:"Dark"}};var C,b,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
      setCreatedOptions(prevState => [...(prevState ?? []), newOption] as GroupedOptionsType<Option> | OptionsType<Option>);
      setCurrentValue(prevValue => isNull(prevValue) ? [newOption] : [...prevValue, newOption]);
      setIsCreating(false);
    }, 500);
  };
  return <CreatableSelect {...args} createNewLabel="Create new option" isLoading={isCreating} options={createdOptions} value={currentValue} onChange={value => setCurrentValue(value)} onCreateOption={handleCreateOption} />;
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,f,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
      setCreatedOptions(prevState => [...(prevState ?? []), newOption] as GroupedOptionsType<Option> | OptionsType<Option>);
      setCurrentValue(prevValue => isNull(prevValue) ? [newOption] : [...prevValue, newOption]);
      setIsCreating(false);
    }, 500);
  };
  return <CreatableSelect {...args} createNewLabel="Create new option" isLoading={isCreating} options={createdOptions} value={currentValue} onChange={value => setCurrentValue(value)} onCreateOption={handleCreateOption} />;
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var V,h,w;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <Stack gap="md">
      <CreatableSelect {...args} loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <CreatableSelect {...args} loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var T,L,I;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
      setCreatedOptions(prevState => [...(prevState ?? []), newOption] as GroupedOptionsType<Option> | OptionsType<Option>);
      setCurrentValue(prevValue => isNull(prevValue) ? [newOption] : [...prevValue, newOption]);
      setIsCreating(false);
    }, 500);
  };
  return <CreatableSelect {...args} createNewLabel="Create new option" isLoading={isCreating} options={createdOptions} value={currentValue} onChange={value => setCurrentValue(value)} onCreateOption={handleCreateOption} />;
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const He=["Playground","SingleSelect","AsyncSelect","DarkMode"];export{s as AsyncSelect,r as DarkMode,t as Playground,o as SingleSelect,He as __namedExportsOrder,ze as default};
//# sourceMappingURL=CreatableSelect.stories-CqiePGxR.js.map
