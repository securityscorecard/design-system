import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-B6eQQJJF.js";import{C as u}from"./ControlledDropdown-DUET8ZL_.js";import{P as O}from"./index-DT7C7tog.js";import{g as f}from"./storybook-BltFH4CS.js";import"./index-uPycS5WA.js";import{B as v}from"./Button-B3X-5wIP.js";import{C as b}from"./CreatableSelect-Bb6beayU.js";import"./index-Bw8SY8Pa.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-C7IrpltL.js";import"./index-uyLpYamY.js";import"./index-CECIl5yl.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BRbW6gx4.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./index-Djj9NU8F.js";import"./Icon-DXON6kdo.js";import"./index-Nbgc27zk.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";import"./index-BYvZ6SHf.js";import"./Inline.enums-CsFZc2ym.js";import"./Cluster-BEmEoxq8.js";import"./isNull-DtrhChS2.js";import"./isNotNull-lH5ks6fm.js";import"./noop-XW1TVrX5.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./mergeRefs-CyslAdeM.js";import"./FloatingContext-Bsi7uTe6.js";import"./zipObj-Cc13prBD.js";import"./Select-DuLC2Ym4.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-DuIFLBUG.js";import"./Checkbox-3u6GrbOk.js";import"./index-c2yW22LY.js";import"./Label-XTEYc6pz.js";import"./index-CL66zYYS.js";import"./Button-CLKkzqeb.js";import"./components-CfW15aca.js";import"./PillRemoveButton-ZZRHiNnC.js";import"./pick-XwXReSlB.js";import"./isNotNilOrEmpty-BN_BASDr.js";import"./isNilOrEmpty-B_sjZgCr.js";import"./isNil-DBsJ5Qwu.js";import"./take--bNN_mdr.js";import"./isNotEmpty-DtQp8gvm.js";import"./isNonEmptyArray-C7jxCePI.js";import"./sortBy-Bt4OVUXm.js";const Ie={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-D_trFAEq.js.map
