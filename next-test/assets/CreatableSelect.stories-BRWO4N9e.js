import{j as p}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{C as l}from"./CreatableSelect-DUrX3wzh.js";import"./index-D-VPAycD.js";import{S as A}from"./index-CJqnHCRB.js";import{i as R}from"./isNull-D8kYROfs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./_isObject-BZZHHNGj.js";import"./useSelectProps-Bbe6VWdl.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-VMNEoDvM.js";import"./space.enums-BIVz6JhH.js";import"./index-BMSG0TFA.js";import"./Checkbox-BsmPhLrA.js";import"./index-DxcpycWO.js";import"./minus-rUvolOxF.js";import"./index-C2fNon3Z.js";import"./constants-CHqWh-7J.js";import"./slice-a4xO8Rfj.js";import"./index-D_THbm3r.js";import"./Label-CKsTpMkX.js";import"./ElementLabel-CIy3SKjT.js";import"./mergeRefs-D2M2BR1V.js";import"./index-BLQl-HhB.js";import"./Button-F6ZYDBEp.js";import"./components-C9ZynCTM.js";import"./index-t408_oKr.js";import"./Icon-CwDBfXxP.js";import"./index-DbwGX_n3.js";import"./useLogger-BIFF4Ira.js";import"./index-DKZQhKLO.js";import"./Spinner-C4Y4qwgQ.js";import"./index-DAjbAeX4.js";import"./checkCircleSolid-D_DFWg_A.js";import"./PillRemoveButton-CrYU6s_g.js";import"./Inline-CJoeeTWo.js";import"./prop-DxwKVRPv.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-41baKBd6.js";import"./isNilOrEmpty-Bab5E4y5.js";import"./isNil-qfCNC9HL.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNotEmpty-Cz0KqVUK.js";import"./isNonEmptyArray-C4wLiQGd.js";import"./isFunction-HfV2yBmy.js";import"./pluck-CostYriq.js";import"./take-lXbzd5ht.js";import"./Cluster-EcHytK4z.js";import"./sortBy-__X9Dmyc.js";import"./index-fVh6sz_B.js";import"./index-D4bv78R3.js";import"./Padbox-QeDNAg-Y.js";import"./Inline.enums-L64S19IZ.js";const He={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},M=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],m=({options:a,...o})=>{const[D,x]=c.useState(a),[N,d]=c.useState(null),[k,O]=c.useState(!1),j=i=>{O(!0);const u={label:i,value:i.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{x(n=>[...n??[],u]),d(n=>R(n)?[u]:[...n,u]),O(!1)},500)};return p.jsx(l,{...o,createNewLabel:"Create new option",isLoading:k,options:D,value:N,onChange:i=>d(i),onCreateOption:j})},e=m.bind({});e.args={options:M,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const s=m.bind({});s.args={...e.args,isMulti:!1};const W=a=>M.filter(o=>o.label.toLowerCase().includes(a.toLowerCase())),g=a=>new Promise(o=>{setTimeout(()=>{o(W(a))},1e3)}),t=()=>p.jsxs(A,{gap:"md",children:[p.jsx(l,{loadOptions:g,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),p.jsx(l,{loadOptions:g,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});t.parameters={screenshot:{skip:!0}};const r=m.bind({});r.args={...e.args};r.parameters={themes:{themeOverride:"Dark"}};t.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect"};var C,S,b;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
}`,...(b=(S=e.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,f,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var V,h,w;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <CreatableSelect loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <CreatableSelect loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var T,L,I;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ke=["Playground","SingleSelect","AsyncSelect","DarkMode"];export{t as AsyncSelect,r as DarkMode,e as Playground,s as SingleSelect,Ke as __namedExportsOrder,He as default};
//# sourceMappingURL=CreatableSelect.stories-BRWO4N9e.js.map
