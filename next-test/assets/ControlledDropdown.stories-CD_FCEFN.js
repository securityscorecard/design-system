import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-D4M2Wd2P.js";import{C as u}from"./ControlledDropdown-2pGse2SA.js";import{P as O}from"./index-C2fNon3Z.js";import{g as f}from"./storybook-CzZzegut.js";import"./index-CRj0zZ10.js";import{B as v}from"./Button-DzPSNQcc.js";import{C as b}from"./CreatableSelect-DUrX3wzh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DpDNf_6L.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-BLQl-HhB.js";import"./index-DAjbAeX4.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-DOUeQ7uu.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BIFF4Ira.js";import"./index-DKZQhKLO.js";import"./Spinner-C4Y4qwgQ.js";import"./index-t408_oKr.js";import"./Icon-CwDBfXxP.js";import"./index-D-VPAycD.js";import"./index-D4bv78R3.js";import"./Padbox-QeDNAg-Y.js";import"./index-CJqnHCRB.js";import"./prop-DxwKVRPv.js";import"./Inline-CJoeeTWo.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-EcHytK4z.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-CJ5emATz.js";import"./mergeRefs-D2M2BR1V.js";import"./slice-a4xO8Rfj.js";import"./FloatingContext-Iczo9egI.js";import"./zipObj-C0uoDeoJ.js";import"./Select-CB4qR96S.js";import"./useSelectProps-Bbe6VWdl.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-VMNEoDvM.js";import"./index-BMSG0TFA.js";import"./Checkbox-BsmPhLrA.js";import"./index-D_THbm3r.js";import"./Label-CKsTpMkX.js";import"./ElementLabel-CIy3SKjT.js";import"./Button-F6ZYDBEp.js";import"./components-C9ZynCTM.js";import"./PillRemoveButton-CrYU6s_g.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-41baKBd6.js";import"./isNilOrEmpty-Bab5E4y5.js";import"./isNil-qfCNC9HL.js";import"./isNotEmpty-Cz0KqVUK.js";import"./isNonEmptyArray-C4wLiQGd.js";import"./isFunction-HfV2yBmy.js";import"./pluck-CostYriq.js";import"./take-lXbzd5ht.js";import"./sortBy-__X9Dmyc.js";import"./index-fVh6sz_B.js";const Re={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Fe=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Fe as __namedExportsOrder,Re as default};
//# sourceMappingURL=ControlledDropdown.stories-CD_FCEFN.js.map
