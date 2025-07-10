import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-DSUi_BSU.js";import{C as u}from"./ControlledDropdown-DploOwaN.js";import{P as O}from"./index-D5D9nAa6.js";import{g as f}from"./storybook-CEy1qkXR.js";import"./index-DyG7Ch5i.js";import{B as v}from"./Button-C-tYeppJ.js";import{C as b}from"./CreatableSelect-owSY_oUp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CUDnaYme.js";import"./styled-components.browser.esm-C8HMneKs.js";import"./index-DxcpycWO.js";import"./index-DRm3KUNF.js";import"./index-slDD0MBU.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./DSProvider-_CMlen06.js";import"./index-Dw8zQ6WV.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-CYrqbLrs.js";import"./react-router-dom-DiA-Bg0V.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useLogger-DUeFF7SW.js";import"./index-VHVnCIxC.js";import"./Spinner-PSPqNyRK.js";import"./index-BV_a_HQq.js";import"./Icon-D5TBsI6x.js";import"./index-Dg7OEBei.js";import"./index-CT2OIHT-.js";import"./Padbox-CTuFGL01.js";import"./index-BXECzo_T.js";import"./Inline-ErbB6jzf.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-D835thia.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./usePopper-DBEKEo6Z.js";import"./useOuterCallback--QVL0YIA.js";import"./mergeRefs-C43w_hK8.js";import"./FloatingContext-f-xOTKfR.js";import"./zipObj-BkK7rA3s.js";import"./Select-B830cDM3.js";import"./useSelectProps-BQ5w0ZeU.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-CyZxMOeP.js";import"./index-C00IeuoS.js";import"./Checkbox-C5LeaMRo.js";import"./index-D4hZfPo4.js";import"./Label-xRfieCO7.js";import"./ElementLabel-Bpp95Zvl.js";import"./Button-ZXXHu2Zy.js";import"./components-C4-LvCWm.js";import"./PillRemoveButton-DGqihXni.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-ZBT3-ioR.js";import"./isNilOrEmpty-CtzR2nc9.js";import"./isNil-D8uoaQyf.js";import"./take-CI905R3e.js";import"./isNotEmpty-Trdf2bDy.js";import"./isNonEmptyArray-CxrVz_aq.js";import"./sortBy-BJfiWH6l.js";import"./index-DFY1Tdgr.js";const _t={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],t=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(e=>!e)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:e=>i(e),onCreateOption:e=>{const p={label:e,value:e.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};t.storyName="Using With Another Component (Controlled)";t.parameters={screenshot:{skip:!0}};t.args={innerPaddingSize:"sm"};var l,a,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ft=["UsingWithAnotherComponentControlled"];export{t as UsingWithAnotherComponentControlled,Ft as __namedExportsOrder,_t as default};
//# sourceMappingURL=ControlledDropdown.stories-dfC820SY.js.map
