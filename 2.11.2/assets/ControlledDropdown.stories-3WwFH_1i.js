import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-X2Iu_k3Q.js";import{C as u}from"./ControlledDropdown-DCvookw1.js";import{P as O}from"./index-CeGY6Ei3.js";import{g as f}from"./storybook-CzZzegut.js";import"./index-BGXV329Q.js";import{B as v}from"./Button-D7wMjAqv.js";import{C as b}from"./CreatableSelect-DM-3MGgl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cjy7s_Lq.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-BsP7FXMl.js";import"./index-0K9MvtJv.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-BkfyGi5e.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BVsKAY55.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./prop-CVCEMdxf.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-BQsZAX6J.js";import"./index-Ozu0POZL.js";import"./Padbox-DPWp-bzC.js";import"./index-BnuP2NC2.js";import"./Inline.enums-Bs7GfXP0.js";import"./Cluster-DiauHNp4.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-CJ5emATz.js";import"./mergeRefs-D2M2BR1V.js";import"./slice-a4xO8Rfj.js";import"./FloatingContext-Iczo9egI.js";import"./zipObj-C0uoDeoJ.js";import"./Select-B6Dk5S2v.js";import"./useSelectProps-BI1BP4J2.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-VMNEoDvM.js";import"./Checkbox-DMTFxonK.js";import"./index-BQTe8zHE.js";import"./Label-Z4PdSHGM.js";import"./ElementLabel-Ck8BqEGn.js";import"./Button-_T-PuNCu.js";import"./components-D0pVc94e.js";import"./PillRemoveButton-ClKFZ-rf.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-CB-1RHZk.js";import"./isNilOrEmpty-LYUyzqZr.js";import"./isNil-qfCNC9HL.js";import"./isNotEmpty-Uyv6-ey5.js";import"./isNonEmptyArray-CJzdD27H.js";import"./isFunction-BRhYXvH4.js";import"./pluck-DBmb9H0q.js";import"./take-S5Br6jEq.js";import"./sortBy-__X9Dmyc.js";import"./index-gVnCqFBT.js";const He={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ke=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Ke as __namedExportsOrder,He as default};
//# sourceMappingURL=ControlledDropdown.stories-3WwFH_1i.js.map
