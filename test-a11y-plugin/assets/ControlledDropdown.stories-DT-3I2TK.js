import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import"./index-B5FePHhJ.js";import{C as u}from"./ControlledDropdown-DU1LAVe6.js";import{P as O}from"./index-BQWFrAEB.js";import{g as f}from"./storybook-WT-kyym6.js";import"./index-BIkVnTmm.js";import{B as v}from"./Button-C1bweFWH.js";import{C as b}from"./CreatableSelect-UVHLjvcF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cxg9E2YR.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-BsP7FXMl.js";import"./index-BC9WaV5B.js";import"./constants-CHqWh-7J.js";import"./isNotUndefined-DxARNfZG.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link--hD0WpN8.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DZJuabeR.js";import"./index-B2Sxccu3.js";import"./Spinner-h6IgF5Nn.js";import"./prop-qecTCRZr.js";import"./index-CA8igt89.js";import"./Icon-OPJ4_-kw.js";import"./index-0COcc321.js";import"./index-CKrVqi-N.js";import"./Padbox-DzmU9-lr.js";import"./index-iY2rO5S8.js";import"./Inline.enums-6YASdLRa.js";import"./Cluster-CjJ089XP.js";import"./isNull-C-cY_r9w.js";import"./isNotNull-C1OvDTe-.js";import"./noop-CdDUrocx.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-D-FgCOcm.js";import"./mergeRefs-0ij3stjc.js";import"./slice-DUYrgxkR.js";import"./FloatingContext-CQFaKq2L.js";import"./zipObj-C0uoDeoJ.js";import"./Select-pXmsiHQw.js";import"./useSelectProps-CM6p2UqT.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-DgEsxTwd.js";import"./Checkbox-xG12QLS6.js";import"./index-B-LfxgeQ.js";import"./Label-CMknJ6ao.js";import"./ElementLabel-BG1PitjW.js";import"./Button-Y7NUWBaW.js";import"./components-B6h-HAd3.js";import"./PillRemoveButton-tEWM886E.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-DhZRuYOd.js";import"./isNilOrEmpty-DInJvbXo.js";import"./isNil-qfCNC9HL.js";import"./isNotEmpty-BCifqKF6.js";import"./isNonEmptyArray-71Asn3IU.js";import"./isFunction-CImlSIc3.js";import"./pluck-D_zsPq3H.js";import"./take-gWl-S5Z6.js";import"./sortBy-__X9Dmyc.js";import"./index-B9rA5P-U.js";const Re={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [currentValue, setCurrentValue] = useState<OptionsType<Option> | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);
  return <>
      <span ref={setTriggerEl} /* HACK since Button does not forward ref */>
        <Button iconStart={{
        name: 'plus'
      }} variant="text" onClick={() => {
        setIsDropdownOpen(prev => !prev);
      }}>
          Add kitten
        </Button>
      </span>
      <ControlledDropdown {...args} ref={null} isOpen={isDropdownOpen} triggerEl={triggerEl as HTMLElement} onClickOut={() => {
      setIsDropdownOpen(false);
    }}>
        <CreatableSelect createNewLabel="Buy new kitten" menuActions={[{
        label: 'Close dropdown',
        name: 'close-dropdown',
        onClick: () => {
          setIsDropdownOpen(false);
        }
      }]} options={options} value={currentValue} isClearable isMenuPositionRelative isMulti menuIsOpen onChange={value => setCurrentValue(value)} onCreateOption={inputString => {
        const newOption = {
          label: inputString,
          value: inputString.toLowerCase().replace(/\\W/g, '')
        };
        setCurrentValue(prevValue => prevValue === null ? [newOption] : [...prevValue, newOption]);
      }} />
      </ControlledDropdown>
    </>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Fe=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Fe as __namedExportsOrder,Re as default};
//# sourceMappingURL=ControlledDropdown.stories-DT-3I2TK.js.map
