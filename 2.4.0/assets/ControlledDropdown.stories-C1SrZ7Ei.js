import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-Jlc1e3xA.js";import{C as u}from"./ControlledDropdown-BGC5q1fr.js";import{P as O}from"./index-DzAsfYvZ.js";import{g as f}from"./storybook-CcMDNGsQ.js";import"./index-C7F2KKAg.js";import{B as v}from"./Button-CsnXVoMf.js";import{C as b}from"./CreatableSelect-UWAQRm1B.js";import"./index-Cq8-NMvO.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-C7IrpltL.js";import"./index-uyLpYamY.js";import"./index-4aEyDaIq.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./isFunction-BtTpAfvx.js";import"./prop-CePbk9wh.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-CwDqj7nA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-IjsioYUQ.js";import"./index-DNjKNlmW.js";import"./Spinner-qeMxdFSS.js";import"./index-DoZinuF4.js";import"./Icon-DCTBW-fe.js";import"./index-BfLWfhlY.js";import"./index-BawZj8GX.js";import"./Padbox-ugjOsLS7.js";import"./index-BcSnSfQB.js";import"./flex.types-BrkCVx66.js";import"./Inline-Cg9jPAAE.js";import"./Cluster-HoiIP47J.js";import"./isNull-CdyG0a3O.js";import"./isNotNull-DhaqNAj6.js";import"./noop-00w40azb.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./mergeRefs-CmEt7Zz_.js";import"./FloatingContext-Bsi7uTe6.js";import"./zipObj-D_Us9sqw.js";import"./Select-Dft4zthY.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-D4FRB0l-.js";import"./Checkbox-DGFIFVbA.js";import"./index-ChaZpFJs.js";import"./Label-d36U9nyd.js";import"./index-BiHv5IcS.js";import"./Button-5uIKxvED.js";import"./components-BItAEv9I.js";import"./PillRemoveButton-B_IsOC8g.js";import"./pick-C2Plqqws.js";import"./isNotNilOrEmpty-B-_nLQ11.js";import"./isNilOrEmpty-UzWf3Ql9.js";import"./isNil-DLd5MEJk.js";import"./take-BBEzy1JF.js";import"./both-goGvyUqW.js";import"./isNonEmptyArray-DAdRooc_.js";import"./isNotEmpty-CH4q73Ls.js";import"./isArray-bAA5N6OD.js";import"./sortBy-JKqdqXP7.js";const We={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const He=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,He as __namedExportsOrder,We as default};
//# sourceMappingURL=ControlledDropdown.stories-C1SrZ7Ei.js.map
