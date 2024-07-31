import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{C as l}from"./CreatableSelect-CN0MEXJF.js";import"./Surface-Cs7tekjF.js";import"./Padbox-BrtZqAZY.js";import{S as j}from"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{i as A}from"./isNotNull-C0-yEnlk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./extends-CF3RwP-h.js";import"./Select-CtVnGavB.js";import"./space-B9R18Mwn.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./unsupportedIterableToArray-CO_C7xo5.js";import"./index-DhoXBIRq.js";import"./index-CVyJwDg7.js";import"./action.types-BWYzzYyM.js";import"./index-BFi_qJcR.js";import"./Checkbox-BglAPnik.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Label-B8OlZEa3.js";import"./DSProvider-DzIDhM_J.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./index-DFvsTZbx.js";import"./Icon-B7DxM8PH.js";import"./useLogger-D4I9buOf.js";import"./Button.enums-b_k9EAqq.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./prop-3Huj0iT1.js";import"./noop-Bk6XfTLC.js";import"./Button-CKE-X77u.js";import"./PillRemoveButton-MEfwPxhp.js";import"./PillLabel-DJNPzf-i.js";import"./gt-CQw4D1xu.js";import"./pick-C_tN_oBI.js";import"./isNotNilOrEmpty-Drr4-pBH.js";import"./isNilOrEmpty-CUDYV7wl.js";import"./isNil-Bk-kOnIJ.js";import"./both-CuwR4I11.js";import"./isNonEmptyArray-WRg_f07P.js";import"./isNotEmpty-DVMo52u6.js";import"./isArray-C7-fa-V4.js";import"./isFunction-Wst0ouRg.js";import"./pluck-CCxX0LJC.js";import"./take-B9V3Rq9C.js";import"./sortBy-C0xwtuk4.js";import"./Text-C1sA-5dj.js";import"./flex.types-q2tZp175.js";const Pe={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
          `}}},onCreateOption:{table:{type:{summary:"(inputValue: string) => void"}}},isLoading:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isMulti:{table:{defaultValue:{summary:"false"}}},defaultIsMenuOpen:{table:{defaultValue:{summary:"false"}}}}},V=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],w=({options:r,...a})=>{const[L,T]=u.useState(r),[I,c]=u.useState(null),[M,m]=u.useState(!1),x=s=>{m(!0);const p={label:s,value:s.toLowerCase().replace(/\W/g,"")};setTimeout(()=>{T(i=>[...i??[],p]),c(i=>A(i)?[p]:[...i,p]),m(!1)},500)};return n.jsx(l,{...a,createNewLabel:"Create new option",isLoading:M,options:L,value:I,onChange:s=>c(s),onCreateOption:x})},e=w.bind({});e.args={options:V,defaultIsMenuOpen:!0,isClearable:!0,isMulti:!0,isMenuPositionRelative:!0,defaultInputValue:"d"};const o=w.bind({});o.args={...e.args,isMulti:!1};const D=r=>V.filter(a=>a.label.toLowerCase().includes(r.toLowerCase())),d=r=>new Promise(a=>{setTimeout(()=>{a(D(r))},1e3)}),t=()=>n.jsxs(j,{gap:"md",children:[n.jsx(l,{loadOptions:d,placeholder:"Single select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0}),n.jsx(l,{loadOptions:d,placeholder:"Multi select (async)",cacheOptions:!0,defaultOptions:!0,isAsync:!0,isMulti:!0})]});t.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"AsyncSelect"};var O,g,C;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const We=["Playground","SingleSelect","AsyncSelect"];export{t as AsyncSelect,e as Playground,o as SingleSelect,We as __namedExportsOrder,Pe as default};
