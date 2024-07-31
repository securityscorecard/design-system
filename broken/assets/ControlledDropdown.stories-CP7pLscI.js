import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{B as O}from"./Button-CKE-X77u.js";import{C as u}from"./ControlledDropdown-Dz2bix8N.js";import{P as f}from"./space-B9R18Mwn.js";import{g as v}from"./storybook-DyKsesZd.js";import"./Select-CtVnGavB.js";import{C as b}from"./CreatableSelect-CN0MEXJF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./BaseButton-IeCCn510.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./prop-3Huj0iT1.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./usePopper-CU1jfDfa.js";import"./useOuterCallback-D_VzbQoG.js";import"./mergeRefs-CX7C4EOn.js";import"./FloatingContext-nGTlWJDF.js";import"./zipObj-D5WCOpKt.js";import"./unsupportedIterableToArray-CO_C7xo5.js";import"./action.types-BWYzzYyM.js";import"./index-BFi_qJcR.js";import"./Checkbox-BglAPnik.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Label-B8OlZEa3.js";import"./Button.enums-b_k9EAqq.js";import"./PillRemoveButton-MEfwPxhp.js";import"./PillLabel-DJNPzf-i.js";import"./gt-CQw4D1xu.js";import"./pick-C_tN_oBI.js";import"./isNotNilOrEmpty-Drr4-pBH.js";import"./isNilOrEmpty-CUDYV7wl.js";import"./isNil-Bk-kOnIJ.js";import"./both-CuwR4I11.js";import"./isNonEmptyArray-WRg_f07P.js";import"./isNotEmpty-DVMo52u6.js";import"./isArray-C7-fa-V4.js";import"./isFunction-Wst0ouRg.js";import"./pluck-CCxX0LJC.js";import"./take-B9V3Rq9C.js";import"./sortBy-C0xwtuk4.js";import"./Text-C1sA-5dj.js";const Be={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...v("select",f)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(O,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ie=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Ie as __namedExportsOrder,Be as default};
