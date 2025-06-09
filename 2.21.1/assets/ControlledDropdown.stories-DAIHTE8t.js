import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-BNrxuglC.js";import{C as u}from"./ControlledDropdown-Bsa3juH-.js";import{P as O}from"./index-_M9_Hem9.js";import{g as f}from"./storybook-CEy1qkXR.js";import"./index-BUMsKuAy.js";import{B as v}from"./Button-xn2ZB05Z.js";import{C as b}from"./CreatableSelect-BtdOM5wt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CsKLkoSq.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-DRm3KUNF.js";import"./index-BVsc1NiC.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-BEFJOFw9.js";import"./react-router-dom-CfjGzTlJ.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useLogger-DBZ2KDnn.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./index-U7rWlclI.js";import"./Icon-Bik-9-TI.js";import"./index-DE-MQzPW.js";import"./index-mp3yOvdM.js";import"./Padbox-CE8msXy0.js";import"./index-BXr0x_2P.js";import"./Inline-Dn2eIsJg.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-MjzvoWTP.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-D92qb2E8.js";import"./mergeRefs-C43w_hK8.js";import"./FloatingContext-f-xOTKfR.js";import"./zipObj-BkK7rA3s.js";import"./Select-BdBkdv3P.js";import"./useSelectProps-BvdSz-JA.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-CyZxMOeP.js";import"./index-D-6HVrdk.js";import"./Checkbox-xfOTOUl8.js";import"./index-zG1Ob1bl.js";import"./Label-DV_70g_N.js";import"./ElementLabel-Kzoagp5M.js";import"./Button-DXrAv08R.js";import"./components-ByF3bco0.js";import"./PillRemoveButton-CAZ5QGPh.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-CTx4I37N.js";import"./isNilOrEmpty-CZt-ddG5.js";import"./isNil-D8uoaQyf.js";import"./take-BBQ9_XYD.js";import"./isNotEmpty-DRLlCpEq.js";import"./isNonEmptyArray-Do-5vzXl.js";import"./sortBy-BJfiWH6l.js";import"./index-CEsunubm.js";const Ue={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const _e=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,_e as __namedExportsOrder,Ue as default};
//# sourceMappingURL=ControlledDropdown.stories-DAIHTE8t.js.map
