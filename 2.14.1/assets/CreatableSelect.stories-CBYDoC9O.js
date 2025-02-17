import{j as p}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{C as l}from"./CreatableSelect-CXn6xpYm.js";import"./index-BRIjTykA.js";import{S as A}from"./index-DkH2SPrY.js";import{i as R}from"./isNull-C_3YYFwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DSProvider-CPYqWFL_.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./_isObject-dmcfxmtS.js";import"./useSelectProps-DJrCGXcw.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CyZxMOeP.js";import"./space.enums-DGrZwzIk.js";import"./index-CKXk5Vdc.js";import"./Checkbox-D-k8bir7.js";import"./index-DxcpycWO.js";import"./minus-C2f59QhV.js";import"./index-CwwveOyd.js";import"./constants-l-41uwkI.js";import"./index-zG1Ob1bl.js";import"./Label-DV_70g_N.js";import"./ElementLabel-Kzoagp5M.js";import"./mergeRefs-C43w_hK8.js";import"./index-DRm3KUNF.js";import"./Button-DDUAhNoT.js";import"./components-Crj7JrGD.js";import"./index-CUzBbf6F.js";import"./Icon-Bh7zeEtc.js";import"./index-DbwGX_n3.js";import"./useLogger-DhLFZSdg.js";import"./index-CqkKBNL-.js";import"./Spinner-ByPeh1d6.js";import"./index-54z-fB9T.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-BA7o_vpo.js";import"./Inline--xZ0784D.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-aHZMDHGQ.js";import"./isNilOrEmpty-BgsKGZUK.js";import"./isNil-D8uoaQyf.js";import"./take-CUYYw2Vq.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-lwRIG2k3.js";import"./isNotEmpty-5cgsosWq.js";import"./isNonEmptyArray-CYK0gRfv.js";import"./sortBy-BJfiWH6l.js";import"./index-Cqf_csgT.js";import"./index-DA8sC3zT.js";import"./Padbox-BYX1bb3x.js";import"./Inline.enums-KPT5jvjq.js";const ze={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},M=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],m=({options:r,...a})=>{const[D,x]=c.useState(r),[k,d]=c.useState(null),[N,O]=c.useState(!1),j=i=>{O(!0);const u={label:i,value:i.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{x(n=>[...n??[],u]),d(n=>R(n)?[u]:[...n,u]),O(!1)},500)};return p.jsx(l,{...a,createNewLabel:"Create new option",isLoading:N,options:D,value:k,onChange:i=>d(i),onCreateOption:j})},e=m.bind({});e.args={options:M,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const o=m.bind({});o.args={...e.args,isMulti:!1};const W=r=>M.filter(a=>a.label.toLowerCase().includes(r.toLowerCase())),g=r=>new Promise(a=>{setTimeout(()=>{a(W(r))},1e3)}),s=()=>p.jsxs(A,{gap:"md",children:[p.jsx(l,{loadOptions:g,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),p.jsx(l,{loadOptions:g,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});s.parameters={screenshot:{skip:!0}};const t=m.bind({});t.args={...e.args};t.parameters={themes:{themeOverride:"Dark"}};var C,b,S;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
}`,...(I=(L=t.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const He=["Playground","SingleSelect","AsyncSelect","DarkMode"];export{s as AsyncSelect,t as DarkMode,e as Playground,o as SingleSelect,He as __namedExportsOrder,ze as default};
//# sourceMappingURL=CreatableSelect.stories-CBYDoC9O.js.map
