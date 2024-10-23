import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import"./index-CfzITaHV.js";import{C as u}from"./ControlledDropdown-aV29qqXd.js";import{P as O}from"./index-DIvwzgjZ.js";import{g as f}from"./storybook-D0JVylcB.js";import"./index-B1jOE2w3.js";import{B as v}from"./Button-BC4WdvK_.js";import{C as b}from"./CreatableSelect-OMfkGU5G.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BfdLNWmY.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-CajKmcpa.js";import"./index-D97QikPo.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DHFK1UxZ.js";import"./prop-BraK_cHP.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-k4I0c-EH.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DBrb0845.js";import"./index-sYlzTV1h.js";import"./Spinner-CaS15r7b.js";import"./index-KsdgvOjZ.js";import"./Icon-CYAM9BRr.js";import"./index-Dii5kbWS.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./index-D5s2qWpv.js";import"./Inline.enums-Dg90oR_c.js";import"./Cluster-hENBaGjg.js";import"./isNull-CY6zyd1L.js";import"./isNotNull-DgOaR-Mp.js";import"./noop-HYpN8PIr.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-CsuasNJq.js";import"./mergeRefs-Db6Uq7ue.js";import"./FloatingContext-Cr2ZSxO5.js";import"./zipObj-C0uoDeoJ.js";import"./Select-auNzjXsR.js";import"./useSelectProps-DtTZBgXL.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-d_WF-3il.js";import"./Checkbox-CO5yYsbB.js";import"./index-ClIdIR2o.js";import"./Label-D8V9yQtD.js";import"./ElementLabel-CLZwawJK.js";import"./Button-DyPMm7cZ.js";import"./components-D4rQYKk1.js";import"./PillRemoveButton-B0oiM2Sz.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-BlMC5YZZ.js";import"./isNilOrEmpty-kE3Ef-KC.js";import"./isNil-qfCNC9HL.js";import"./take-C14nZQk_.js";import"./isNotEmpty-CZrJ5H-_.js";import"./isNonEmptyArray-CUFiEkiN.js";import"./sortBy-__X9Dmyc.js";import"./index-iel8gM5l.js";const Re={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-BKKG_oFt.js.map
