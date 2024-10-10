import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-Dw13NsF6.js";import{C as u}from"./ControlledDropdown-Cknb5xoz.js";import{P as O}from"./index-DxUWnzkt.js";import{g as f}from"./storybook-llAGhm5G.js";import"./index-cwX9iIbA.js";import{B as v}from"./Button-Bvw_Er4f.js";import{C as b}from"./CreatableSelect-BpJ5s5_0.js";import"./index-h1W97wzo.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-DBr7mztH.js";import"./index-BkSsiqLF.js";import"./DSProvider-CZqUabl8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./isFunction-CFc181nM.js";import"./prop-DvyrXmKl.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-DlQZJzFx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DkXBJUOu.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./index-CmRxaJ3P.js";import"./Icon-Nxma5B5F.js";import"./index-DKUwlGz1.js";import"./index-B1HIS_mG.js";import"./Padbox-BddxODtE.js";import"./index-C1DSbQpy.js";import"./Inline.enums-CG-V8ygw.js";import"./Cluster-Bh3LKsFx.js";import"./isNull-CSZRs2Kd.js";import"./isNotNull-4bNLWuBe.js";import"./noop-BOAHQqnZ.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Dk3S8c2F.js";import"./mergeRefs-ezcFPe0V.js";import"./FloatingContext-Bsi7uTe6.js";import"./zipObj-B4yFvj6_.js";import"./Select-3iyzMrN2.js";import"./useSelectProps-DcM-KqIN.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-qmyP4KEa.js";import"./Checkbox-CUxNaTFV.js";import"./index-r2PNc6PS.js";import"./Label-DldvHbDi.js";import"./index-x37bp9TC.js";import"./Button-B0SYPtI0.js";import"./components-CYX7eQ8t.js";import"./PillRemoveButton-DmjFGYD8.js";import"./pick-xjrz1kZf.js";import"./isNotNilOrEmpty-D3uFeLpo.js";import"./isNilOrEmpty-BEPrWyzC.js";import"./isNil-Bg-_fAot.js";import"./take-ZprrsW5Z.js";import"./isNotEmpty-QIeHuxqm.js";import"./isNonEmptyArray-FlOy_NuE.js";import"./sortBy-D4c6KnDJ.js";const Me={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-Bff9Bxuz.js.map
