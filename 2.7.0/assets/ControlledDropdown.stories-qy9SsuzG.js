import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-CpvTOCP5.js";import{C as u}from"./ControlledDropdown-D5P7lTfE.js";import{P as O}from"./index-DxUWnzkt.js";import{g as f}from"./storybook-llAGhm5G.js";import"./index-CV87jXZF.js";import{B as v}from"./Button-zezd41gU.js";import{C as b}from"./CreatableSelect-D-xdFYmB.js";import"./index-DX0BMr00.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-DBr7mztH.js";import"./index-BkSsiqLF.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./isFunction-CFc181nM.js";import"./prop-DvyrXmKl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-DlQZJzFx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DkXBJUOu.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./index-Bw8dvKh9.js";import"./Icon-Dgg-0yKJ.js";import"./index-BKmXk_rQ.js";import"./index-DHcn_niD.js";import"./Padbox-BddxODtE.js";import"./index-Bdemn2ub.js";import"./Inline.enums-ylSCK-eY.js";import"./Cluster-Ca0XQ4y2.js";import"./isNull-CSZRs2Kd.js";import"./isNotNull-4bNLWuBe.js";import"./noop-BOAHQqnZ.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Dk3S8c2F.js";import"./mergeRefs-ezcFPe0V.js";import"./FloatingContext-Bsi7uTe6.js";import"./zipObj-B4yFvj6_.js";import"./Select-CFwCBY5U.js";import"./useSelectProps-BUNz3Kjy.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-qmyP4KEa.js";import"./Checkbox-CS8hRNPV.js";import"./index-DU0j12q1.js";import"./Label-CVKhvLRW.js";import"./index-DUZoCKfF.js";import"./Button-DuBGIkA_.js";import"./components-DLROIErt.js";import"./PillRemoveButton-VkzxbQzP.js";import"./pick-xjrz1kZf.js";import"./isNotNilOrEmpty-D3uFeLpo.js";import"./isNilOrEmpty-BEPrWyzC.js";import"./isNil-Bg-_fAot.js";import"./take-ZprrsW5Z.js";import"./isNotEmpty-QIeHuxqm.js";import"./isNonEmptyArray-FlOy_NuE.js";import"./sortBy-D4c6KnDJ.js";const Me={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Pe=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Pe as __namedExportsOrder,Me as default};
//# sourceMappingURL=ControlledDropdown.stories-qy9SsuzG.js.map
