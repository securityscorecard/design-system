import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-O0QocxG4.js";import{C as u}from"./ControlledDropdown-CFXf7GUD.js";import{P as O}from"./index-CbknQUej.js";import{g as f}from"./storybook-Crh9kOSz.js";import"./index-ORGkNbEl.js";import{B as v}from"./Button-DfVLVEQy.js";import{C as b}from"./CreatableSelect-DyO8Vgwd.js";import"./index-D2mRoxDo.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-CMxDd3Da.js";import"./index-DEer-CVx.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./isFunction-ORz17Qg7.js";import"./prop-CqBAad6K.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-CU3avibx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-XTihx-r2.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-DozTNYRt.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./index-NWhnjyl5.js";import"./Inline.enums-DlaUPeKw.js";import"./Cluster-CO02VLRh.js";import"./isNull-D6Q9WflV.js";import"./isNotNull-CcOpPpmr.js";import"./noop-BfmH62Vh.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-BTWdDzjv.js";import"./mergeRefs-rkkxDSpI.js";import"./FloatingContext-Bsi7uTe6.js";import"./zipObj-Di5u6WK6.js";import"./Select-CcGVQXlY.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-k3CGF2-i.js";import"./Checkbox-C1fT9fmL.js";import"./index-ByR-Ex3O.js";import"./Label-DtIcT56G.js";import"./index-uIya-cWM.js";import"./Button-BJCD1Rvj.js";import"./components-9007xTyM.js";import"./PillRemoveButton-C9oge2rz.js";import"./pick-CbvLi2E1.js";import"./isNotNilOrEmpty-DiaBY2VY.js";import"./isNilOrEmpty-4N7MeV5x.js";import"./isNil-CUap-F7z.js";import"./take-BGfUuSAC.js";import"./isNotEmpty-CRWDvOhW.js";import"./isNonEmptyArray-0RkcjJFH.js";import"./sortBy-CnCs5eJf.js";const Ie={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Me=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Me as __namedExportsOrder,Ie as default};
//# sourceMappingURL=ControlledDropdown.stories-Ss_4uZhm.js.map
