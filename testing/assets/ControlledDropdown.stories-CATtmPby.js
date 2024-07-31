import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import{B as O}from"./Button-CgUf0TwU.js";import{C as u}from"./ControlledDropdown-Dffl62Db.js";import{P as f}from"./space-BY85GhUc.js";import{g as v}from"./storybook-ByffxkSu.js";import"./Select-Dx3xIfX3.js";import{C as b}from"./CreatableSelect-Ciqv7Eeg.js";import"./BaseButton-Bl-0NeNF.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./Icon-DSPfH_8v.js";import"./index-DFvsTZbx.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-b5BYo8Sk.js";import"./prop-Cw0eZkJ_.js";import"./Surface-CvF-S7pg.js";import"./flex.types-BrkCVx66.js";import"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import"./isNotNull-D2Wrs3cn.js";import"./noop-CRTpovv1.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Mi4Xn43N.js";import"./mergeRefs-BUQjZHg5.js";import"./FloatingContext-CTHtuARV.js";import"./zipObj-C9fmdzRH.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./action.types-CSW_hKjS.js";import"./index-Bl_jQQ83.js";import"./Checkbox-CKFjIkBH.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Label-BXbsNi4R.js";import"./Button.enums-P6KVfN9D.js";import"./PillRemoveButton-D2CC_PxY.js";import"./PillLabel-yycd7XxX.js";import"./gt-bFkVvxSK.js";import"./pick-DB5feQ9Q.js";import"./isNotNilOrEmpty-BG4ifY0O.js";import"./isNilOrEmpty-4-uKJ3Xu.js";import"./isNil-BfRYDDcR.js";import"./both-CLVeTvyf.js";import"./isNonEmptyArray-CPhLVV4V.js";import"./isNotEmpty-DmRwknIn.js";import"./isArray-B7wtxCYk.js";import"./isFunction-DKkHXutz.js";import"./pluck-CGJirjHu.js";import"./take-ZeMSspOg.js";import"./sortBy-DcYbM6i8.js";import"./Text-CQej7zPl.js";const je={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...v("select",f)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(O,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Be=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Be as __namedExportsOrder,je as default};
