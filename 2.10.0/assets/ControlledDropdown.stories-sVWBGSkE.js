import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import"./index-fZ7V6Iso.js";import{C as u}from"./ControlledDropdown-AHPuf6CF.js";import{P as O}from"./index-dWynxCtG.js";import{g as f}from"./storybook-CzZzegut.js";import"./index-UiPXLC7q.js";import{B as v}from"./Button-COCOTNlV.js";import{C as b}from"./CreatableSelect-BGvO_-Z2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-c4x7tYX3.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-BsP7FXMl.js";import"./index-DuTw_9qX.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-BMc44Xzl.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-CvwVUQJ2.js";import"./index-gqxQzocl.js";import"./Spinner-K1HJcvQM.js";import"./prop-CTu21A3U.js";import"./index-DP_jSIOV.js";import"./Icon-Rfg63q_9.js";import"./index-Bv39VcRu.js";import"./index-BdgNbBlP.js";import"./Padbox-CDFfn736.js";import"./index-Cf7gdOSN.js";import"./Inline.enums-B6aHLh-0.js";import"./Cluster-DBXy5O-6.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-D-FgCOcm.js";import"./mergeRefs-D2M2BR1V.js";import"./slice-a4xO8Rfj.js";import"./FloatingContext-CQFaKq2L.js";import"./zipObj-C0uoDeoJ.js";import"./Select-CjxBUVVk.js";import"./useSelectProps-DoxLq7mJ.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-BdsnPCmC.js";import"./Checkbox-BUy1j-s_.js";import"./index-B-LfxgeQ.js";import"./Label-CMknJ6ao.js";import"./ElementLabel-BG1PitjW.js";import"./Button-CWF-cIJl.js";import"./components-BQVXU2CE.js";import"./PillRemoveButton-qry3U2cu.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-D-VGOqpW.js";import"./isNilOrEmpty-C004JLXt.js";import"./isNil-qfCNC9HL.js";import"./isNotEmpty-Bbhdhluu.js";import"./isNonEmptyArray-UNRSIHQD.js";import"./isFunction-d9DPmkeA.js";import"./pluck-DHBcIId7.js";import"./take-D75AvTOf.js";import"./sortBy-__X9Dmyc.js";import"./index-B9rA5P-U.js";const Re={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-sVWBGSkE.js.map
