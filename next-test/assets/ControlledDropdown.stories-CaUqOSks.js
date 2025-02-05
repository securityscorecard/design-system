import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-CWZXv4Fq.js";import{C as u}from"./ControlledDropdown-jWoxgDqN.js";import{P as O}from"./index-Bb-be-4U.js";import{g as f}from"./storybook-BYzxmUJp.js";import"./index-BTaKNji7.js";import{B as v}from"./Button-CyVqLqCG.js";import{C as b}from"./CreatableSelect-C3Kg2lg0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Du8hEI8p.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-BLQl-HhB.js";import"./index-DUaCKjdz.js";import"./constants-CHqWh-7J.js";import"./space.enums-BgYGmFKv.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-mgEeOsVG.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./isFunction-CPOop_5p.js";import"./pluck-CtHNMFGn.js";import"./prop-Cr6L5s4M.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-eqlYZtvZ.js";import"./react-router-dom-Cv8hkFnb.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-CCAiqPwH.js";import"./index-BLjwvqnm.js";import"./Spinner-JO64Fpiq.js";import"./index-BFJL67i_.js";import"./Icon-CPMGMxZp.js";import"./index-C6QYDNqb.js";import"./index-BavDiaxs.js";import"./Padbox-DtjBCBeh.js";import"./index-CE0KGU9S.js";import"./Inline-9kw33TPP.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-CHwR_-vL.js";import"./isNull-DbDg-2CV.js";import"./isNotNull-BhVAhDfp.js";import"./noop-DoDTf092.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-CJ5emATz.js";import"./mergeRefs-BFez88JG.js";import"./FloatingContext-fZ7pv7Rw.js";import"./zipObj-C0uoDeoJ.js";import"./Select-1NQg4yGG.js";import"./useSelectProps-BlmlfIH7.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-CJOPnLQw.js";import"./index-DRTzopeW.js";import"./Checkbox-s-CC8f1a.js";import"./index-D6t0Aube.js";import"./Label-CQ-PTcfo.js";import"./ElementLabel-CnVInBRH.js";import"./Button-CAJpGfaD.js";import"./components-D7PCbKyD.js";import"./PillRemoveButton-XYXJEp7X.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-Bq3-9Lnm.js";import"./isNilOrEmpty-DwX0CEvq.js";import"./isNil-qfCNC9HL.js";import"./take-CTjOx5-I.js";import"./isNotEmpty-ahJwcbfN.js";import"./isNonEmptyArray-BL-A8pSq.js";import"./sortBy-__X9Dmyc.js";import"./index-UmBe9P8-.js";const Ue={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
//# sourceMappingURL=ControlledDropdown.stories-CaUqOSks.js.map
