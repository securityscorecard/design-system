import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-BR9gIOhu.js";import{C as u}from"./ControlledDropdown-C5gjXtka.js";import{P as O}from"./index-CUb24YOv.js";import{g as f}from"./storybook-CBhUmier.js";import"./index-CMJie7O-.js";import{B as v}from"./Button-DF9F2IpX.js";import{C as b}from"./CreatableSelect-DLzpy_Ml.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CLLXPhty.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-CeOnF3dB.js";import"./index-Ccg6HrRD.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-dCknxxr0.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-CGEbE2mZ.js";import"./index-CGIPeC-W.js";import"./Spinner-CScYiCuC.js";import"./index-DYDjgMG1.js";import"./Icon-CHceuV7K.js";import"./index-UOk5nvl2.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./index-CLVl6jk_.js";import"./Inline.enums-BdnhnZ8J.js";import"./Cluster-CGQQQZ4I.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-D92qb2E8.js";import"./mergeRefs-BjwOtpm_.js";import"./FloatingContext-f-xOTKfR.js";import"./zipObj-C0uoDeoJ.js";import"./Select-B5OeiHdg.js";import"./useSelectProps-CTAcMmwE.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-BZ-MkEN1.js";import"./index-CFPDWBTe.js";import"./Checkbox-Cx8WyNqy.js";import"./index-DG3Tn3j3.js";import"./Label-BEWnm1KI.js";import"./ElementLabel-Kzoagp5M.js";import"./Button-vEOnW8Bm.js";import"./components-MIUzfLU3.js";import"./PillRemoveButton-DgC9NddM.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-YvIBDmon.js";import"./isNilOrEmpty-BaNvnuEd.js";import"./isNil-qfCNC9HL.js";import"./take-um2ScWSZ.js";import"./isNotEmpty-diCciua_.js";import"./isNonEmptyArray-ClXnQjxY.js";import"./sortBy-__X9Dmyc.js";import"./index-CpAvg4Hc.js";const Re={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ue=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Ue as __namedExportsOrder,Re as default};
//# sourceMappingURL=ControlledDropdown.stories-CNXNHD8F.js.map
