import{j as o}from"./jsx-runtime-BbjHj44Y.js";import{r as n}from"./index-C6mWTJJr.js";import"./index-C2LKKbZX.js";import{C as u}from"./ControlledDropdown-nmi5yu7h.js";import{P as O}from"./index-BzkxN2vn.js";import{g as f}from"./storybook-CEy1qkXR.js";import"./index-7LSr8vKq.js";import{B as v}from"./Button-BOsYjBY0.js";import{C as b}from"./CreatableSelect-CtcyNRCP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BlcsDpij.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./index-CVyJwDg7.js";import"./index-DRm3KUNF.js";import"./index-BGhWSV4h.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./DSProvider-CTEb0Eap.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./prop-gA1VFyoz.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-Dx6wPKPd.js";import"./react-router-dom-DxT5PRwj.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useLogger-O6XA1hQU.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./index-CmE5poE7.js";import"./Icon-BGVJaxc5.js";import"./index-CbztWzgW.js";import"./index-Bfs0wQhB.js";import"./Padbox-hEmkrqba.js";import"./index-CcmHmzDo.js";import"./Inline-B7NzMb1T.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./usePopper-BmgVlhkC.js";import"./useOuterCallback-B34oUwCq.js";import"./mergeRefs-C43w_hK8.js";import"./FloatingContext-Bl8tl6Fh.js";import"./zipObj-BkK7rA3s.js";import"./Select-wCQgrkUm.js";import"./useSelectProps-CA97oxgm.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./index-CWpgOoCF.js";import"./index-DcGAcNY6.js";import"./Checkbox-DDahwtiO.js";import"./index-DLon-G_T.js";import"./Label-BYbJ_V7q.js";import"./ElementLabel-B8jQdsnd.js";import"./Button-DJ_7XBm0.js";import"./components-DsRWzzQN.js";import"./PillRemoveButton-BSuxaZDF.js";import"./pick-DLB1qMU0.js";import"./isNotNilOrEmpty-DfsHSZJ8.js";import"./isNilOrEmpty-BKOGr95H.js";import"./isNil-D8uoaQyf.js";import"./take-CZyar5cj.js";import"./isNotEmpty-BuaArano.js";import"./isNonEmptyArray-BixxrS2_.js";import"./sortBy-BJfiWH6l.js";import"./index-CP_iG0Cq.js";const _t={title:"components/Dropdown/ControlledDropdown",component:u,parameters:{docs:{description:{component:"\n```js\nimport { ControlledDropdown } from '@securityscorecard/design-system';\n```\n\nBarebone Dropdown component that takes `isOpen` props and renders pane based on it's value.\n      "}},controls:{sort:"requiredFirst"}},argTypes:{triggerEl:{control:{disable:!0}},innerPaddingType:{...f("select",O)}}},D=[{value:"Kitty",label:"Kitty"},{value:"Lilly",label:"Lilly"},{value:"Lucy",label:"Lucy"},{value:"Leo",label:"Leo"},{value:"Jack",label:"Jack"}],t=d=>{const[c,i]=n.useState(null),[C,r]=n.useState(!1),[g,w]=n.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:w,children:o.jsx(v,{iconStart:{name:"plus"},variant:"text",onClick:()=>{r(e=>!e)},children:"Add kitten"})}),o.jsx(u,{...d,ref:null,isOpen:C,triggerEl:g,onClickOut:()=>{r(!1)},children:o.jsx(b,{createNewLabel:"Buy new kitten",menuActions:[{label:"Close dropdown",name:"close-dropdown",onClick:()=>{r(!1)}}],options:D,value:c,isClearable:!0,isMenuPositionRelative:!0,isMulti:!0,menuIsOpen:!0,onChange:e=>i(e),onCreateOption:e=>{const p={label:e,value:e.toLowerCase().replace(/\W/g,"")};i(s=>s===null?[p]:[...s,p])}})})]})};t.storyName="Using With Another Component (Controlled)";t.parameters={screenshot:{skip:!0}};t.args={innerPaddingSize:"sm"};var l,a,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ft=["UsingWithAnotherComponentControlled"];export{t as UsingWithAnotherComponentControlled,Ft as __namedExportsOrder,_t as default};
//# sourceMappingURL=ControlledDropdown.stories-B4Yb7eAP.js.map
