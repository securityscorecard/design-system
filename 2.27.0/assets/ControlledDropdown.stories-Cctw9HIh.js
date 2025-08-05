import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-DhfLKZjQ.js";import{C as u}from"./ControlledDropdown-CtGHIl4R.js";import{P as O}from"./index-_M9_Hem9.js";import{g as f}from"./storybook-CEy1qkXR.js";import"./index-S3l4wvwU.js";import{B as v}from"./Button-DF1XrqU2.js";import{C as b}from"./CreatableSelect-B7HQYFE6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CpT9Aogj.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-DRm3KUNF.js";import"./index--0EcN0Mx.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./DSProvider-CHFF7_OZ.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-Ip-vyTqT.js";import"./react-router-dom-C_lcPVwC.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useLogger-9UeQIaBT.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./index-5FmQ2rGj.js";import"./Icon-DDqMC7gY.js";import"./index-By48UrtP.js";import"./index-mp3yOvdM.js";import"./Padbox-CE8msXy0.js";import"./index-Cg7zxyij.js";import"./Inline-JoR1gBjx.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-MjzvoWTP.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-D92qb2E8.js";import"./mergeRefs-C43w_hK8.js";import"./FloatingContext-f-xOTKfR.js";import"./zipObj-BkK7rA3s.js";import"./Select-BnSzvkfX.js";import"./useSelectProps-LVqM3-HU.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-CyZxMOeP.js";import"./index-D-6HVrdk.js";import"./Checkbox-xfOTOUl8.js";import"./index-zG1Ob1bl.js";import"./Label-DV_70g_N.js";import"./ElementLabel-Kzoagp5M.js";import"./Button-BzpqzwVh.js";import"./components-bxA9E4Xq.js";import"./PillRemoveButton-Bs8n7prn.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-CTx4I37N.js";import"./isNilOrEmpty-CZt-ddG5.js";import"./isNil-D8uoaQyf.js";import"./take-BBQ9_XYD.js";import"./isNotEmpty-DRLlCpEq.js";import"./isNonEmptyArray-Do-5vzXl.js";import"./sortBy-BJfiWH6l.js";import"./index-CEsunubm.js";const _t={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],t=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(e=>!e)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:e=>i(e),onCreateOption:e=>{const p={label:e,value:e.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};t.storyName="Using With Another Component (Controlled)";t.parameters={screenshot:{skip:!0}};t.args={innerPaddingSize:"sm"};var l,a,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-Cctw9HIh.js.map
