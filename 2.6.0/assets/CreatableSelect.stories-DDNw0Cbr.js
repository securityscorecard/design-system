import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{C as l}from"./CreatableSelect-DyO8Vgwd.js";import"./index-DozTNYRt.js";import{S as j}from"./index-NWhnjyl5.js";import{i as D}from"./isNull-D6Q9WflV.js";import"./extends-CF3RwP-h.js";import"./Select-CcGVQXlY.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./index-DIVhMF2i.js";import"./index-C7IrpltL.js";import"./index-k3CGF2-i.js";import"./index-CbknQUej.js";import"./Checkbox-C1fT9fmL.js";import"./index-DEer-CVx.js";import"./index-CMxDd3Da.js";import"./DSProvider-B7ofGRk-.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./isFunction-ORz17Qg7.js";import"./prop-CqBAad6K.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-ByR-Ex3O.js";import"./Label-DtIcT56G.js";import"./index-uIya-cWM.js";import"./Button-BJCD1Rvj.js";import"./components-9007xTyM.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./useLogger-XTihx-r2.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./PillRemoveButton-C9oge2rz.js";import"./Inline.enums-DlaUPeKw.js";import"./pick-CbvLi2E1.js";import"./isNotNilOrEmpty-DiaBY2VY.js";import"./isNilOrEmpty-4N7MeV5x.js";import"./isNil-CUap-F7z.js";import"./take-BGfUuSAC.js";import"./Cluster-CO02VLRh.js";import"./isNotEmpty-CRWDvOhW.js";import"./isNonEmptyArray-0RkcjJFH.js";import"./sortBy-CnCs5eJf.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";const Me={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},V=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],w=({options:t,...a})=>{const[L,T]=u.useState(t),[I,c]=u.useState(null),[M,m]=u.useState(!1),x=s=>{m(!0);const p={label:s,value:s.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{T(i=>[...i??[],p]),c(i=>D(i)?[p]:[...i,p]),m(!1)},500)};return n.jsx(l,{...a,createNewLabel:"Create new option",isLoading:M,options:L,value:I,onChange:s=>c(s),onCreateOption:x})},e=w.bind({});e.args={options:V,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const r=w.bind({});r.args={...e.args,isMulti:!1};const A=t=>V.filter(a=>a.label.toLowerCase().includes(t.toLowerCase())),d=t=>new Promise(a=>{setTimeout(()=>{a(A(t))},1e3)}),o=()=>n.jsxs(j,{gap:"md",children:[n.jsx(l,{loadOptions:d,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),n.jsx(l,{loadOptions:d,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});o.parameters={screenshot:{skip:!0}};var O,C,g;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(g=(C=e.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var b,S,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,v,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <CreatableSelect loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <CreatableSelect loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const xe=["Playground","SingleSelect","AsyncSelect"];export{o as AsyncSelect,e as Playground,r as SingleSelect,xe as __namedExportsOrder,Me as default};
//# sourceMappingURL=CreatableSelect.stories-DDNw0Cbr.js.map
