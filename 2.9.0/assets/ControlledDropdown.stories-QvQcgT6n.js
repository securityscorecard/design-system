import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-CXM7Ka2k.js";import{C as u}from"./ControlledDropdown-D41atIZb.js";import{P as O}from"./index-CrKmLWnD.js";import{g as f}from"./storybook-CnYBKQjQ.js";import"./index-DdAuJXKc.js";import{B as v}from"./Button-DQJ9phVp.js";import{C as b}from"./CreatableSelect-D_9pxDHJ.js";import"./index-DqOLbV5v.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-CajKmcpa.js";import"./index-CbtSpW2v.js";import"./constants-l-41uwkI.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-BD6Crr4Z.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-ueona4bl.js";import"./prop-DthtuCpe.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-DQ1KljjI.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BUVDCBjf.js";import"./index-DdGAx8Lu.js";import"./Spinner-BZdjEwis.js";import"./index-Do5YN-r4.js";import"./Icon-D2McLPVS.js";import"./index-UyBh8dRE.js";import"./index-dJwzZQsw.js";import"./Padbox-C9-4IgMJ.js";import"./index-BFpmPCJD.js";import"./Inline.enums-B2crYYgS.js";import"./Cluster-_Y3KuvTf.js";import"./isNull-Bs93IvUT.js";import"./isNotNull-beo8WoSn.js";import"./noop-C6yK0wcs.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Dk3S8c2F.js";import"./mergeRefs-BdafcyrG.js";import"./FloatingContext-Bsi7uTe6.js";import"./zipObj-C0uoDeoJ.js";import"./Select-sof1w_Cn.js";import"./useSelectProps-DmRXrLAt.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-sLO49wHN.js";import"./Checkbox-BX2kvIvK.js";import"./index-CZAuE97N.js";import"./Label-BRtNJM2P.js";import"./ElementLabel-CTPKCfMW.js";import"./Button-CUz70Qo-.js";import"./components-CEAZ8Niy.js";import"./PillRemoveButton-Dt4kFbWr.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-BrN190Xh.js";import"./isNilOrEmpty-CQyW8KDy.js";import"./isNil-qfCNC9HL.js";import"./take-DJTZ0ekB.js";import"./isNotEmpty-DQ1_6IgO.js";import"./isNonEmptyArray-SeHl5XMj.js";import"./sortBy-__X9Dmyc.js";import"./index-BILJD4ib.js";const Ne={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
      <ControlledDropdown {...args} ref={null} isOpen={isDropdownOpen} triggerEl={(triggerEl as HTMLElement)} onClickOut={() => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Re=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Re as __namedExportsOrder,Ne as default};
//# sourceMappingURL=ControlledDropdown.stories-QvQcgT6n.js.map
