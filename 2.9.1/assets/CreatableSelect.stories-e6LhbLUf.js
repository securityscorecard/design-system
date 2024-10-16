import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{C as p}from"./CreatableSelect-CtMP5Pq4.js";import"./index-CtMHODJ2.js";import{S as A}from"./index-BFpmPCJD.js";import{i as R}from"./isNull-Bs93IvUT.js";import"./extends-CF3RwP-h.js";import"./useSelectProps-BUntw6ti.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-sLO49wHN.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./Checkbox-BX2kvIvK.js";import"./index-C7IrpltL.js";import"./minus-C2f59QhV.js";import"./index-CrKmLWnD.js";import"./constants-l-41uwkI.js";import"./index-CZAuE97N.js";import"./Label-BRtNJM2P.js";import"./ElementLabel-CTPKCfMW.js";import"./index-CajKmcpa.js";import"./Button-CvHd8Azw.js";import"./components-CEAZ8Niy.js";import"./index-Do5YN-r4.js";import"./Icon-D2McLPVS.js";import"./index-BRV0Se7Z.js";import"./useLogger-BUVDCBjf.js";import"./DSProvider-BD6Crr4Z.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-BpwILXOI.js";import"./Spinner-D0DPxq7I.js";import"./prop-DthtuCpe.js";import"./index-CbtSpW2v.js";import"./isFunction-ueona4bl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-COTxmups.js";import"./Inline.enums-B2crYYgS.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-BrN190Xh.js";import"./isNilOrEmpty-CQyW8KDy.js";import"./isNil-qfCNC9HL.js";import"./take-DJTZ0ekB.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-_Y3KuvTf.js";import"./isNotEmpty-DQ1_6IgO.js";import"./isNonEmptyArray-SeHl5XMj.js";import"./sortBy-__X9Dmyc.js";import"./index-BILJD4ib.js";import"./index-CXHcUZNU.js";import"./Padbox-C9-4IgMJ.js";const Pe={title:"components/forms/Select/CreatableSelect",component:p,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},M=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],m=({options:r,...a})=>{const[D,x]=c.useState(r),[k,d]=c.useState(null),[N,O]=c.useState(!1),j=n=>{O(!0);const u={label:n,value:n.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{x(i=>[...i??[],u]),d(i=>R(i)?[u]:[...i,u]),O(!1)},500)};return l.jsx(p,{...a,createNewLabel:"Create new option",isLoading:N,options:D,value:k,onChange:n=>d(n),onCreateOption:j})},e=m.bind({});e.args={options:M,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const o=m.bind({});o.args={...e.args,isMulti:!1};const W=r=>M.filter(a=>a.label.toLowerCase().includes(r.toLowerCase())),g=r=>new Promise(a=>{setTimeout(()=>{a(W(r))},1e3)}),s=()=>l.jsxs(A,{gap:"md",children:[l.jsx(p,{loadOptions:g,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),l.jsx(p,{loadOptions:g,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});s.parameters={screenshot:{skip:!0}};const t=m.bind({});t.args={...e.args};t.parameters={themes:{themeOverride:"Dark"}};var C,b,S;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
      setCreatedOptions(prevState => ([...(prevState ?? []), newOption] as GroupedOptionsType<Option> | OptionsType<Option>));
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
      setCreatedOptions(prevState => ([...(prevState ?? []), newOption] as GroupedOptionsType<Option> | OptionsType<Option>));
      setCurrentValue(prevValue => isNull(prevValue) ? [newOption] : [...prevValue, newOption]);
      setIsCreating(false);
    }, 500);
  };
  return <CreatableSelect {...args} createNewLabel="Create new option" isLoading={isCreating} options={createdOptions} value={currentValue} onChange={value => setCurrentValue(value)} onCreateOption={handleCreateOption} />;
}`,...(I=(L=t.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ee=["Playground","SingleSelect","AsyncSelect","DarkMode"];export{s as AsyncSelect,t as DarkMode,e as Playground,o as SingleSelect,Ee as __namedExportsOrder,Pe as default};
//# sourceMappingURL=CreatableSelect.stories-e6LhbLUf.js.map
