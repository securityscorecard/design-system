import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{C as l}from"./CreatableSelect-z3Thxt1V.js";import"./index-g6a7d4VX.js";import{S as A}from"./index-DswKY91G.js";import{i as R}from"./isNull-ByzPK5V3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./useSelectProps-BnMS8Sdd.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DhoXBIRq.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-04esSdTO.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./Checkbox-C4kVvMso.js";import"./index-CVyJwDg7.js";import"./minus-C2f59QhV.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./index-ClIdIR2o.js";import"./Label-D8V9yQtD.js";import"./ElementLabel-CLZwawJK.js";import"./index-CajKmcpa.js";import"./Button-CXTuE1Mx.js";import"./components-KPog_F_-.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-Dk74W0Oi.js";import"./useLogger-BV2AIPN5.js";import"./DSProvider-CJQA90er.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./prop-C6y-wj7q.js";import"./index-BAFidxi4.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-BXLVcWxq.js";import"./Inline.enums-BAfT2b1A.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-7bsKgUin.js";import"./isNilOrEmpty-FvLncskg.js";import"./isNil-qfCNC9HL.js";import"./take-CM7vhqB7.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-x6SODxoc.js";import"./isNotEmpty-2CrqG7_E.js";import"./isNonEmptyArray-CJggKFx3.js";import"./sortBy-__X9Dmyc.js";import"./index-iel8gM5l.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";const Ge={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
}`,...(I=(L=t.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const _e=["Playground","SingleSelect","AsyncSelect","DarkMode"];export{s as AsyncSelect,t as DarkMode,e as Playground,o as SingleSelect,_e as __namedExportsOrder,Ge as default};
//# sourceMappingURL=CreatableSelect.stories-MV0Lu5T3.js.map
