import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{C as l}from"./CreatableSelect-DTjPuRte.js";import"./index-CoMEwqFC.js";import{i as j}from"./isNull-Ddx7qw_y.js";import{S as A}from"./index-DZoBl2Wq.js";import"./index-BRV0Se7Z.js";import"./extends-CF3RwP-h.js";import"./Select-CTJSTwH3.js";import"./index-DzoB_gWM.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DIVhMF2i.js";import"./index-C7IrpltL.js";import"./action.types-CSW_hKjS.js";import"./index-DB0nX0iQ.js";import"./Checkbox-B48TwpSs.js";import"./index-beAa1auE.js";import"./index-t-vajJ9r.js";import"./DSProvider-DOkUOQoq.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-DK3-1gLa.js";import"./Label-CkBakwI3.js";import"./index-C_SwQgDv.js";import"./Button-BMWvW0nZ.js";import"./components-imVrW6nL.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./useLogger-BNYGJgyi.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./prop-BgpcU4fO.js";import"./PillRemoveButton-CsvadIXl.js";import"./Padbox-DIe3-S_j.js";import"./Inline-DPdVYO7t.js";import"./flex.types-BrkCVx66.js";import"./PillLabel-DZn6lXVM.js";import"./pick-DnFF07PT.js";import"./isNotNilOrEmpty-C6qSabrU.js";import"./isNilOrEmpty-Cdj5d-0t.js";import"./isNil-B57hcqoE.js";import"./both-CO8nd6Bu.js";import"./isNonEmptyArray-BntwbUJK.js";import"./isNotEmpty-CKvpBaLM.js";import"./isArray-CE6Q3D6e.js";import"./isFunction-BiBuFaUE.js";import"./pluck-XHiJ2W8k.js";import"./take-N6yRxtAa.js";import"./Cluster-DaqHgnAc.js";import"./sortBy-C2nsc0Cf.js";import"./index-BUX0wYnk.js";const Ne={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},V=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],w=({options:a,...r})=>{const[L,T]=u.useState(a),[I,c]=u.useState(null),[M,m]=u.useState(!1),x=s=>{m(!0);const p={label:s,value:s.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{T(i=>[...i??[],p]),c(i=>j(i)?[p]:[...i,p]),m(!1)},500)};return n.jsx(l,{...r,createNewLabel:"Create new option",isLoading:M,options:L,value:I,onChange:s=>c(s),onCreateOption:x})},e=w.bind({});e.args={options:V,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const o=w.bind({});o.args={...e.args,isMulti:!1};const D=a=>V.filter(r=>r.label.toLowerCase().includes(a.toLowerCase())),d=a=>new Promise(r=>{setTimeout(()=>{r(D(a))},1e3)}),t=()=>n.jsxs(A,{gap:"md",children:[n.jsx(l,{loadOptions:d,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),n.jsx(l,{loadOptions:d,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});t.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect"};var O,g,C;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,S,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,v,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Stack gap="md">
      <CreatableSelect loadOptions={promiseOptions} placeholder="Single select (async)" cacheOptions defaultOptions isAsync />
      <CreatableSelect loadOptions={promiseOptions} placeholder="Multi select (async)" cacheOptions defaultOptions isAsync isMulti />
    </Stack>;
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Re=["Playground","SingleSelect","AsyncSelect"];export{t as AsyncSelect,e as Playground,o as SingleSelect,Re as __namedExportsOrder,Ne as default};
//# sourceMappingURL=CreatableSelect.stories-BiQN2eG8.js.map
