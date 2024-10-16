import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-BnOFXWSX.js";import{C as u}from"./ControlledDropdown-CblElBmb.js";import{P as O}from"./index-ndiHb6d5.js";import{g as f}from"./storybook-Bms8_Zov.js";import"./index-D1MEfHGT.js";import{B as v}from"./Button-D2k_mujA.js";import{C as b}from"./CreatableSelect-CrOX32bx.js";import"./index-v1YtIK4i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-BsP7FXMl.js";import"./index-BkLmc-fh.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./isObject-BZZHHNGj.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-DZ62ouIa.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BdR6T79l.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./prop-CgNUfcFy.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-C1kpn3a9.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./index-FmXXYKzo.js";import"./Inline.enums-CsgpNQwN.js";import"./Cluster-BnO1HbAj.js";import"./isNull-T1j7Gx-1.js";import"./isNotNull-C3X32hrc.js";import"./noop-zffMy0O7.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-DTPxGhlC.js";import"./mergeRefs-Btf8uGkc.js";import"./slice-CaMqkvGm.js";import"./FloatingContext-C7MQzhpq.js";import"./zipObj-C0uoDeoJ.js";import"./Select-CFvIrKue.js";import"./useSelectProps-CV1kRKNC.js";import"./unsupportedIterableToArray-CO_C7xo5.js";import"./index-BzjjseuL.js";import"./Checkbox-C47U54k4.js";import"./index-BIwqfUOZ.js";import"./Label-DV11VlAT.js";import"./ElementLabel-Bua-ZRQK.js";import"./Button-jQCIxIJA.js";import"./components-CjIxgO6S.js";import"./PillRemoveButton-CcoG8WEs.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-CoFWTRm3.js";import"./isNilOrEmpty-DryPRcGQ.js";import"./isNil-qfCNC9HL.js";import"./isNotEmpty-CKnDLE-6.js";import"./isNonEmptyArray-DxiDb_ME.js";import"./isFunction-0s348r1S.js";import"./pluck-5zg4Xx5s.js";import"./take-DPqzbdvt.js";import"./sortBy-__X9Dmyc.js";import"./index-CUGQ8N4L.js";const Ke={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Re=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Re as __namedExportsOrder,Ke as default};
//# sourceMappingURL=ControlledDropdown.stories-C9F_MoRf.js.map
