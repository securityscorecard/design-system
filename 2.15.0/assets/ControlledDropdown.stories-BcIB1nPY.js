import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-CvqOkU93.js";import{C as u}from"./ControlledDropdown-DhmjLg4a.js";import{P as O}from"./index-CwwveOyd.js";import{g as f}from"./storybook-CEy1qkXR.js";import"./index-BVcOTYdU.js";import{B as v}from"./Button-mgF-9QWd.js";import{C as b}from"./CreatableSelect-BxgPqcfA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BpCVfMpw.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-DRm3KUNF.js";import"./index-54z-fB9T.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./DSProvider-CPYqWFL_.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-61hLzpmd.js";import"./react-router-dom-D8rN1sjW.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DhLFZSdg.js";import"./index-CqkKBNL-.js";import"./Spinner-ByPeh1d6.js";import"./index-CUzBbf6F.js";import"./Icon-Bh7zeEtc.js";import"./index-D88lkBP-.js";import"./index-C3NFEOoi.js";import"./Padbox-DyJBw-9L.js";import"./index-Bqw6gtNo.js";import"./Inline-DoR-Gmpw.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C2D5KA8h.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-D92qb2E8.js";import"./mergeRefs-C43w_hK8.js";import"./FloatingContext-f-xOTKfR.js";import"./zipObj-BkK7rA3s.js";import"./Select-CvH0ra1u.js";import"./useSelectProps-Dc9DlSYm.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-CyZxMOeP.js";import"./index-CKXk5Vdc.js";import"./Checkbox-D-k8bir7.js";import"./index-zG1Ob1bl.js";import"./Label-DV_70g_N.js";import"./ElementLabel-Kzoagp5M.js";import"./Button-DDUAhNoT.js";import"./components-Crj7JrGD.js";import"./PillRemoveButton-65-kpGGM.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-aHZMDHGQ.js";import"./isNilOrEmpty-BgsKGZUK.js";import"./isNil-D8uoaQyf.js";import"./take-CUYYw2Vq.js";import"./isNotEmpty-5cgsosWq.js";import"./isNonEmptyArray-CYK0gRfv.js";import"./sortBy-BJfiWH6l.js";import"./index-CEsunubm.js";const Ue={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-BcIB1nPY.js.map
