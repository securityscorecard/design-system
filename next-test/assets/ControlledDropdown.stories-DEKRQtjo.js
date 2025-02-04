import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as n}from"./index-ClcD9ViR.js";import"./index-BafkohO7.js";import{C as u}from"./ControlledDropdown-DszYVnBj.js";import{P as O}from"./index-COP2hIVi.js";import{g as f}from"./storybook-CzZzegut.js";import"./index-WgbasvxA.js";import{B as v}from"./Button-DTETAW_Q.js";import{C as b}from"./CreatableSelect-SPU9Bed2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_pk6Myb.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-BLQl-HhB.js";import"./index-DAjbAeX4.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-BWnqzLA_.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DJ74rrw8.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-LR-EjM-6.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./index-1T5Tqafd.js";import"./prop-DM27i_5J.js";import"./Inline.enums-Cb7IYB12.js";import"./Cluster-Czc8yUGw.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-CJ5emATz.js";import"./mergeRefs-D2M2BR1V.js";import"./slice-a4xO8Rfj.js";import"./FloatingContext-Iczo9egI.js";import"./zipObj-C0uoDeoJ.js";import"./Select-BAaP2191.js";import"./useSelectProps-CqRda-cx.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-VMNEoDvM.js";import"./index-Q6LUquwK.js";import"./Checkbox-C3olgd19.js";import"./index-D_THbm3r.js";import"./Label-CKsTpMkX.js";import"./ElementLabel-CIy3SKjT.js";import"./Button-CSEXYzvx.js";import"./components-Dt-mykMV.js";import"./PillRemoveButton-DXAxIpoY.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-D7UMwbhS.js";import"./isNilOrEmpty-DmYx1NWM.js";import"./isNil-qfCNC9HL.js";import"./isNotEmpty-CnuUlkKI.js";import"./isNonEmptyArray-BBrpAh-q.js";import"./isFunction-DJTGGMd1.js";import"./pluck-B7TtmBCE.js";import"./take-DZ8pNzhj.js";import"./sortBy-__X9Dmyc.js";import"./index-fVh6sz_B.js";const Ke={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Re=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Re as __namedExportsOrder,Ke as default};
//# sourceMappingURL=ControlledDropdown.stories-DEKRQtjo.js.map
