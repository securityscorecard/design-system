import{j as p}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{C as l}from"./CreatableSelect-Vy3V9IKF.js";import"./index-7cJ2juxC.js";import{S as A}from"./index-BtznGf-c.js";import{i as R}from"./isNull-ByzPK5V3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./_isObject-BZZHHNGj.js";import"./useSelectProps-CnNhta0F.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BZ-MkEN1.js";import"./space.enums-FzolKu9U.js";import"./Checkbox-BQGEje7a.js";import"./index-DxcpycWO.js";import"./minus-C2f59QhV.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./index-DG3Tn3j3.js";import"./Label-BEWnm1KI.js";import"./ElementLabel-Kzoagp5M.js";import"./index-CajKmcpa.js";import"./Button-BfyVdgm0.js";import"./components-BlntQQgH.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-DbwGX_n3.js";import"./useLogger-CA2WAjqk.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./prop-C6y-wj7q.js";import"./index-BgMjzImo.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-D_m0G_lu.js";import"./Inline.enums-nLI0iivB.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-CzgeZFyQ.js";import"./isNilOrEmpty-DrV01zGr.js";import"./isNil-qfCNC9HL.js";import"./take-tk8GdqSR.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-wkODOmrt.js";import"./isNotEmpty-De95qR8d.js";import"./isNonEmptyArray-MQllCXeo.js";import"./sortBy-__X9Dmyc.js";import"./index-CpAvg4Hc.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";const Ee={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},M=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],m=({options:r,...a})=>{const[D,x]=c.useState(r),[k,d]=c.useState(null),[N,O]=c.useState(!1),j=n=>{O(!0);const u={label:n,value:n.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{x(i=>[...i??[],u]),d(i=>R(i)?[u]:[...i,u]),O(!1)},500)};return p.jsx(l,{...a,createNewLabel:"Create new option",isLoading:N,options:D,value:k,onChange:n=>d(n),onCreateOption:j})},e=m.bind({});e.args={options:M,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const o=m.bind({});o.args={...e.args,isMulti:!1};const W=r=>M.filter(a=>a.label.toLowerCase().includes(r.toLowerCase())),g=r=>new Promise(a=>{setTimeout(()=>{a(W(r))},1e3)}),s=()=>p.jsxs(A,{gap:"md",children:[p.jsx(l,{loadOptions:g,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),p.jsx(l,{loadOptions:g,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});s.parameters={screenshot:{skip:!0}};const t=m.bind({});t.args={...e.args};t.parameters={themes:{themeOverride:"Dark"}};var C,b,S;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
}`,...(S=(b=e.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,f,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var V,h,w;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <CreatableSelect loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <CreatableSelect loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var T,L,I;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
}`,...(I=(L=t.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ge=["Playground","SingleSelect","AsyncSelect","DarkMode"];export{s as AsyncSelect,t as DarkMode,e as Playground,o as SingleSelect,Ge as __namedExportsOrder,Ee as default};
//# sourceMappingURL=CreatableSelect.stories-BIXBtyM-.js.map
