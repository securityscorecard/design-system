import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{C as l}from"./CreatableSelect-ChEh48cv.js";import"./index-h7qFssqm.js";import{S as j}from"./index-CISbCLO7.js";import{i as D}from"./isNull-DtrhChS2.js";import"./extends-CF3RwP-h.js";import"./Select-DZp6BwNQ.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./index-DIVhMF2i.js";import"./index-C7IrpltL.js";import"./index-DuIFLBUG.js";import"./index-DT7C7tog.js";import"./Checkbox-Cs_hHU84.js";import"./index-CECIl5yl.js";import"./index-uyLpYamY.js";import"./DSProvider-OItu1eMI.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-Xvmp83uy.js";import"./Label-CbUlFnuK.js";import"./index-XqRGyOl1.js";import"./Button-D3qY9K8F.js";import"./components-CuVdvoC-.js";import"./index-CHR41AfE.js";import"./Icon-CG4jHxtF.js";import"./useLogger-BRbW6gx4.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./PillRemoveButton-D0mC8gmi.js";import"./Inline.enums-Dxp6-wcT.js";import"./pick-XwXReSlB.js";import"./isNotNilOrEmpty-BN_BASDr.js";import"./isNilOrEmpty-B_sjZgCr.js";import"./isNil-DBsJ5Qwu.js";import"./take--bNN_mdr.js";import"./Cluster-DithqAUq.js";import"./isNotEmpty-DtQp8gvm.js";import"./isNonEmptyArray-C7jxCePI.js";import"./sortBy-Bt4OVUXm.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";const Me={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
//# sourceMappingURL=CreatableSelect.stories-DaDfmUz1.js.map
