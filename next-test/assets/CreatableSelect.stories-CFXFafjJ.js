import{j as p}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{C as l}from"./CreatableSelect-SPU9Bed2.js";import"./index-LR-EjM-6.js";import{S as A}from"./index-1T5Tqafd.js";import{i as R}from"./isNull-D8kYROfs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./_isObject-BZZHHNGj.js";import"./useSelectProps-CqRda-cx.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-VMNEoDvM.js";import"./space.enums-BIVz6JhH.js";import"./index-Q6LUquwK.js";import"./Checkbox-C3olgd19.js";import"./index-DxcpycWO.js";import"./minus-rUvolOxF.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./slice-a4xO8Rfj.js";import"./index-D_THbm3r.js";import"./Label-CKsTpMkX.js";import"./ElementLabel-CIy3SKjT.js";import"./mergeRefs-D2M2BR1V.js";import"./index-BLQl-HhB.js";import"./Button-CSEXYzvx.js";import"./components-Dt-mykMV.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-DbwGX_n3.js";import"./useLogger-DJ74rrw8.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./index-DAjbAeX4.js";import"./checkCircleSolid-D_DFWg_A.js";import"./PillRemoveButton-DXAxIpoY.js";import"./Inline.enums-Cb7IYB12.js";import"./prop-DM27i_5J.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-D7UMwbhS.js";import"./isNilOrEmpty-DmYx1NWM.js";import"./isNil-qfCNC9HL.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNotEmpty-CnuUlkKI.js";import"./isNonEmptyArray-BBrpAh-q.js";import"./isFunction-DJTGGMd1.js";import"./pluck-B7TtmBCE.js";import"./take-DZ8pNzhj.js";import"./Cluster-Czc8yUGw.js";import"./sortBy-__X9Dmyc.js";import"./index-fVh6sz_B.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";const ze={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},M=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],m=({options:a,...o})=>{const[D,x]=c.useState(a),[N,d]=c.useState(null),[k,O]=c.useState(!1),j=n=>{O(!0);const u={label:n,value:n.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{x(i=>[...i??[],u]),d(i=>R(i)?[u]:[...i,u]),O(!1)},500)};return p.jsx(l,{...o,createNewLabel:"Create new option",isLoading:k,options:D,value:N,onChange:n=>d(n),onCreateOption:j})},e=m.bind({});e.args={options:M,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const s=m.bind({});s.args={...e.args,isMulti:!1};const W=a=>M.filter(o=>o.label.toLowerCase().includes(a.toLowerCase())),g=a=>new Promise(o=>{setTimeout(()=>{o(W(a))},1e3)}),t=()=>p.jsxs(A,{gap:"md",children:[p.jsx(l,{loadOptions:g,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),p.jsx(l,{loadOptions:g,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});t.parameters={screenshot:{skip:!0}};const r=m.bind({});r.args={...e.args};r.parameters={themes:{themeOverride:"Dark"}};t.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect"};var C,S,b;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const He=["Playground","SingleSelect","AsyncSelect","DarkMode"];export{t as AsyncSelect,r as DarkMode,e as Playground,s as SingleSelect,He as __namedExportsOrder,ze as default};
//# sourceMappingURL=CreatableSelect.stories-CFXFafjJ.js.map
