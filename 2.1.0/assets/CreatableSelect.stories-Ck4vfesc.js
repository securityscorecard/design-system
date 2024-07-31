import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{C as l}from"./CreatableSelect-D23fXLUV.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import{S as j}from"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{i as A}from"./isNotNull-D2Wrs3cn.js";import"./index-BRV0Se7Z.js";import"./extends-CF3RwP-h.js";import"./Select-COyzZzGC.js";import"./space-BY85GhUc.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./unsupportedIterableToArray-CO_C7xo5.js";import"./index-DIVhMF2i.js";import"./index-C7IrpltL.js";import"./action.types-CSW_hKjS.js";import"./index-Bl_jQQ83.js";import"./Checkbox-CKFjIkBH.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Label-BXbsNi4R.js";import"./DSProvider-eD554_K8.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./index-DFvsTZbx.js";import"./Icon-DSPfH_8v.js";import"./useLogger-CziYgifR.js";import"./Button.enums-P6KVfN9D.js";import"./BaseButton-Bl-0NeNF.js";import"./require-router-link-EREg1Bbm.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-b5BYo8Sk.js";import"./prop-Cw0eZkJ_.js";import"./noop-CRTpovv1.js";import"./Button-CgUf0TwU.js";import"./PillRemoveButton-D2CC_PxY.js";import"./PillLabel-yycd7XxX.js";import"./gt-bFkVvxSK.js";import"./pick-DB5feQ9Q.js";import"./isNotNilOrEmpty-BG4ifY0O.js";import"./isNilOrEmpty-4-uKJ3Xu.js";import"./isNil-BfRYDDcR.js";import"./both-CLVeTvyf.js";import"./isNonEmptyArray-CPhLVV4V.js";import"./isNotEmpty-DmRwknIn.js";import"./isArray-B7wtxCYk.js";import"./isFunction-DKkHXutz.js";import"./pluck-CGJirjHu.js";import"./take-ZeMSspOg.js";import"./sortBy-DcYbM6i8.js";import"./Text-CQej7zPl.js";import"./flex.types-BrkCVx66.js";const _e={title:"components/forms/Select/CreatableSelect",component:l,parameters:{docs:{description:{component:`
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Pe=["Playground","SingleSelect","AsyncSelect"];export{t as AsyncSelect,e as Playground,o as SingleSelect,Pe as __namedExportsOrder,_e as default};
