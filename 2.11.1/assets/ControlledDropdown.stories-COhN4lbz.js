import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import"./index-Dr0gF0_N.js";import{C as u}from"./ControlledDropdown-CLLDXMuO.js";import{P as O}from"./index-DseqSOhp.js";import{g as f}from"./storybook-CBhUmier.js";import"./index-DTBdxqrZ.js";import{B as v}from"./Button-T7SulGoU.js";import{C as b}from"./CreatableSelect-z3Thxt1V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DHWdU5FP.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-CajKmcpa.js";import"./index-BAFidxi4.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-olwqu5YC.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BV2AIPN5.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-g6a7d4VX.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./index-DswKY91G.js";import"./Inline.enums-BAfT2b1A.js";import"./Cluster-x6SODxoc.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-CsuasNJq.js";import"./mergeRefs-BjwOtpm_.js";import"./FloatingContext-Cr2ZSxO5.js";import"./zipObj-C0uoDeoJ.js";import"./Select-8vVkLxqk.js";import"./useSelectProps-BnMS8Sdd.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-04esSdTO.js";import"./Checkbox-C4kVvMso.js";import"./index-ClIdIR2o.js";import"./Label-D8V9yQtD.js";import"./ElementLabel-CLZwawJK.js";import"./Button-CXTuE1Mx.js";import"./components-KPog_F_-.js";import"./PillRemoveButton-BXLVcWxq.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-7bsKgUin.js";import"./isNilOrEmpty-FvLncskg.js";import"./isNil-qfCNC9HL.js";import"./take-CM7vhqB7.js";import"./isNotEmpty-2CrqG7_E.js";import"./isNonEmptyArray-CJggKFx3.js";import"./sortBy-__X9Dmyc.js";import"./index-iel8gM5l.js";const Ue={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-COhN4lbz.js.map
