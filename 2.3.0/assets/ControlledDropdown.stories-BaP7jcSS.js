import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import"./index-DRBCZw3W.js";import{C as u}from"./ControlledDropdown-CThOzJqs.js";import{P as O}from"./index-DzoB_gWM.js";import{g as f}from"./storybook-7zA5Mv0p.js";import"./index-CMwTkg9S.js";import{B as v}from"./Button-fZBZNXZ8.js";import{C as b}from"./CreatableSelect-DTjPuRte.js";import"./Button.enums-nGQnPjuG.js";import"./index-PS5U9aCu.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./index-t-vajJ9r.js";import"./index-beAa1auE.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-DIC5Nlq-.js";import"./react-router-dom-CJ3P1gOI.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-BNYGJgyi.js";import"./spacing.types-C9Yu1wmA.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./prop-BgpcU4fO.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./index-CoMEwqFC.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-DZoBl2Wq.js";import"./flex.types-BrkCVx66.js";import"./Inline-DPdVYO7t.js";import"./Cluster-DaqHgnAc.js";import"./isNull-Ddx7qw_y.js";import"./isNotNull-DFX8Jk9A.js";import"./noop-zq4Ga5XN.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-CyPC4-G8.js";import"./mergeRefs-B_qfXDGV.js";import"./FloatingContext-CyxsIqHp.js";import"./zipObj-BKKHQJ_I.js";import"./Select-CTJSTwH3.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./action.types-CSW_hKjS.js";import"./index-DB0nX0iQ.js";import"./Checkbox-B48TwpSs.js";import"./index-DK3-1gLa.js";import"./Label-CkBakwI3.js";import"./index-C_SwQgDv.js";import"./Button-BMWvW0nZ.js";import"./components-imVrW6nL.js";import"./PillRemoveButton-CsvadIXl.js";import"./PillLabel-DZn6lXVM.js";import"./pick-DnFF07PT.js";import"./isNotNilOrEmpty-C6qSabrU.js";import"./isNilOrEmpty-Cdj5d-0t.js";import"./isNil-B57hcqoE.js";import"./both-CO8nd6Bu.js";import"./isNonEmptyArray-BntwbUJK.js";import"./isNotEmpty-CKvpBaLM.js";import"./isArray-CE6Q3D6e.js";import"./isFunction-BiBuFaUE.js";import"./pluck-XHiJ2W8k.js";import"./take-N6yRxtAa.js";import"./sortBy-C2nsc0Cf.js";const He={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},h=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],e=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(t=>!t)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:h,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:t=>i(t),onCreateOption:t=>{const p={label:t,value:t.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};e.storyName="Using With Another Component (Controlled)";e.parameters={screenshot:{skip:!0}};e.args={innerPaddingSize:"sm"};e.__docgenInfo={description:"",methods:[],displayName:"UsingWithAnotherComponentControlled"};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ke=["UsingWithAnotherComponentControlled"];export{e as UsingWithAnotherComponentControlled,Ke as __namedExportsOrder,He as default};
//# sourceMappingURL=ControlledDropdown.stories-BaP7jcSS.js.map
