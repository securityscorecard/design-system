import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-CRIkvV_Z.js";import{C as u}from"./ControlledDropdown-CJDS15aa.js";import{P as O}from"./index-C1FT5pTy.js";import{g as f}from"./storybook-ka4L4-cf.js";import"./index-CmKZkLOy.js";import{B as v}from"./Button-vvMvQQ6x.js";import{C as b}from"./CreatableSelect-Cu_8L1sm.js";import"./Button.enums-mm-W5TJM.js";import"./index-BmyUtPWu.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./index-uyLpYamY.js";import"./index-Cp1GzN7Y.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./isFunction-C9e5dGMJ.js";import"./prop-B-t2KTqT.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-CVseUTa3.js";import"./react-router-dom-C502PAO1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-_RKsn3HX.js";import"./spacing.types-C9Yu1wmA.js";import"./index-C95nPCzM.js";import"./Spinner-BvaTOgAJ.js";import"./index-Cvv1KPJl.js";import"./Icon-Ctrq9sYp.js";import"./index-B-CeicLq.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./index-DPJ-F9hp.js";import"./flex.types-BrkCVx66.js";import"./Inline-CVToOADQ.js";import"./Cluster-DZ_NL6w4.js";import"./isNull-BieT8P3B.js";import"./isNotNull-D58Nipgn.js";import"./noop-DhoWYSxJ.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-QFNlztp2.js";import"./mergeRefs-DsscGrvh.js";import"./FloatingContext-Bsi7uTe6.js";import"./zipObj-BQKsoZL3.js";import"./Select-CxiIMkc5.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./action.types-CSW_hKjS.js";import"./index-DLFrv4x6.js";import"./Checkbox-CnNZZIHv.js";import"./index-E85Ja8Vd.js";import"./Label-C-AZ-zgX.js";import"./index-DXjoAeTX.js";import"./Button-B2HZICot.js";import"./components-Tmbw27rw.js";import"./PillRemoveButton-YKsUPAtp.js";import"./PillLabel-n9U0O5_Y.js";import"./pick-DfeMrevl.js";import"./isNotNilOrEmpty-1xWht62B.js";import"./isNilOrEmpty-DczrYfYr.js";import"./isNil-G-meFOE3.js";import"./take-jeHqe6Rc.js";import"./both-CPS-HPAQ.js";import"./isNonEmptyArray-DCSLWOk2.js";import"./isNotEmpty-BaX7s3fH.js";import"./isArray-BtRvizdc.js";import"./sortBy-Dku9ZSY6.js";const Ne={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Re=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Re as __namedExportsOrder,Ne as default};
//# sourceMappingURL=ControlledDropdown.stories--p2la__P.js.map
