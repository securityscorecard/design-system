import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-QkukcYvm.js";import{C as u}from"./ControlledDropdown-D2MeIdug.js";import{P as O}from"./index-D7OXBHVI.js";import{g as f}from"./storybook-CBhUmier.js";import"./index-CCVpoWro.js";import{B as v}from"./Button-EIIUAXdU.js";import{C as b}from"./CreatableSelect-BfYXjIvu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BQVCAjx2.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-CajKmcpa.js";import"./index-BgMjzImo.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-tvWtIm7z.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-CA2WAjqk.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-DJDNSEQh.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-Cl2_DJzs.js";import"./Inline.enums-B2f8ESXY.js";import"./Cluster-kZdd8a--.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-D92qb2E8.js";import"./mergeRefs-BjwOtpm_.js";import"./FloatingContext-f-xOTKfR.js";import"./zipObj-C0uoDeoJ.js";import"./Select-DRF3GWSJ.js";import"./useSelectProps-DLxfrC1I.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-BZ-MkEN1.js";import"./Checkbox-BQGEje7a.js";import"./index-DG3Tn3j3.js";import"./Label-BEWnm1KI.js";import"./ElementLabel-Kzoagp5M.js";import"./Button-BfyVdgm0.js";import"./components-BlntQQgH.js";import"./PillRemoveButton-BG6YtsQK.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-CzgeZFyQ.js";import"./isNilOrEmpty-DrV01zGr.js";import"./isNil-qfCNC9HL.js";import"./take-tk8GdqSR.js";import"./isNotEmpty-De95qR8d.js";import"./isNonEmptyArray-MQllCXeo.js";import"./sortBy-__X9Dmyc.js";import"./index-CpAvg4Hc.js";const Ne={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Re=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Re as __namedExportsOrder,Ne as default};
//# sourceMappingURL=ControlledDropdown.stories-Z3TskePX.js.map
