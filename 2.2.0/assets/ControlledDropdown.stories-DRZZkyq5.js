import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import{B as O}from"./Button-vDRI25at.js";import{C as u}from"./ControlledDropdown-D7eVtMr8.js";import{P as f}from"./space-1LtLrmuu.js";import{g as v}from"./storybook-BpZQCxPY.js";import"./Select-D2oYJWhQ.js";import{C as b}from"./CreatableSelect-DuZZJGpq.js";import"./BaseButton-D1TUSAxp.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./Icon-4JNizDXH.js";import"./index-DFvsTZbx.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./Surface-DpLLkhSd.js";import"./flex.types-BrkCVx66.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Mi4Xn43N.js";import"./mergeRefs-sWHjowoU.js";import"./FloatingContext-C7r7lnEb.js";import"./zipObj-DVsQulIT.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./action.types-CSW_hKjS.js";import"./index-CJIF_j5S.js";import"./Checkbox-DtOI_Iry.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Label-Bgxc31x7.js";import"./Text-DTP2ysh1.js";import"./Button.enums-DxFt5drl.js";import"./PillRemoveButton-CS7bxu8m.js";import"./PillLabel-CLRUhFaA.js";import"./pick-Dgh-9MLD.js";import"./isNotNilOrEmpty-cGK6as13.js";import"./isNilOrEmpty-MGEuPZ7r.js";import"./isNil-C1Q7XXIj.js";import"./take-Kg9EtPoO.js";import"./both-peGKknMH.js";import"./isNonEmptyArray-CGykYah7.js";import"./isNotEmpty-Dh9FcTil.js";import"./isArray-D_RvpTHQ.js";import"./sortBy-BCHo5fjk.js";const Ve={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...v("select",f)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(O,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const je=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,je as __namedExportsOrder,Ve as default};
