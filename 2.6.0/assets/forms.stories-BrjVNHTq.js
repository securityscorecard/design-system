import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-G5mkvgBV.js";import"./index-DozTNYRt.js";import{S as r}from"./index-NWhnjyl5.js";import{L as i}from"./Label-DtIcT56G.js";import"./index-ByR-Ex3O.js";import{I as p}from"./Input-CzTcCcfO.js";import{E as l,N as c}from"./Message-Bz_SpVkp.js";import{S as b}from"./Select-CcGVQXlY.js";import{R as t}from"./Radio-vHQoVPm6.js";import{C as o}from"./Checkbox-C1fT9fmL.js";import{S as u}from"./Switch-BiP_4ttD.js";import{T as d}from"./TextArea-D2MwbyX_.js";import"./index-CTjT7uj6.js";import"./index-DMCYmLua.js";import"./MultiValueInput-9-z7I1u3.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-k3CGF2-i.js";import"./index-CbknQUej.js";import"./index-C7IrpltL.js";import"./index-DEer-CVx.js";import"./index-CMxDd3Da.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./isFunction-ORz17Qg7.js";import"./prop-CqBAad6K.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-BRV0Se7Z.js";import"./useLogger-XTihx-r2.js";import"./index-BlYXqBWM.js";import"./Pill-z8JPj4-3.js";import"./PillRemoveButton-C9oge2rz.js";import"./Inline.enums-DlaUPeKw.js";import"./isNonEmptyArray-0RkcjJFH.js";import"./isNotEmpty-CRWDvOhW.js";import"./noop-BfmH62Vh.js";import"./Padbox-Suafv-Ni.js";import"./isNonEmptyString-CFGtbz4A.js";import"./isNotNull-CcOpPpmr.js";import"./isNull-D6Q9WflV.js";import"./trim-BPpD-fvq.js";import"./take-BGfUuSAC.js";import"./Password-D7gLr4KL.js";import"./index-ORGkNbEl.js";import"./CreatableSelect-DyO8Vgwd.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-uIya-cWM.js";import"./Range-7uL6xNug.js";import"./SearchBar-BuIlkq5e.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./isNotNilOrEmpty-DiaBY2VY.js";import"./isNilOrEmpty-4N7MeV5x.js";import"./isNil-CUap-F7z.js";import"./index-Dg5W8r-_.js";import"./BaseTabLabel-D9XOn2WQ.js";import"./index-B0Us5nPq.js";import"./subtract-BWgkPXho.js";import"./index-O0QocxG4.js";import"./index-D2mRoxDo.js";import"./require-router-link-CU3avibx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Button-DfVLVEQy.js";import"./Button-BJCD1Rvj.js";import"./components-9007xTyM.js";import"./IconButton-CIf20D8_.js";import"./Cluster-CO02VLRh.js";import"./index-DfX17r-U.js";import"./pick-CbvLi2E1.js";import"./sortBy-CnCs5eJf.js";import"./mergeRefs-rkkxDSpI.js";const Ke={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <form>
      <Stack gap="md">
        <Stack>
          <Label>Your Name</Label>

          <Input type="text" isInvalid />

          <Error>This field is required</Error>
        </Stack>

        <Stack>
          <Label>Your Country</Label>

          <Select options={options} />

          <Note>Where you currently live</Note>
        </Stack>

        <Stack>
          <Label>I am</Label>

          <Stack gap="xs">
            <Radio label="Human" name="species" radioId="human" value="human" />

            <Radio label="Animal" name="species" radioId="animal" value="animal" />
          </Stack>
        </Stack>

        <Stack>
          <Label>My hobbies</Label>

          <Stack gap="xs">
            <Checkbox checkboxId="reading" label="Reading" name="hobbies" value="reading" />

            <Checkbox checkboxId="sleeping" label="Sleeping" name="hobbies" value="sleeping" />

            <Checkbox checkboxId="programming" label="Programming" name="hobbies" value="programming" />

            <Checkbox checkboxId="testing" label="Testing" name="hobbies" value="testing" />
          </Stack>
        </Stack>

        <Stack justify="flex-start">
          <Label>Do you want to make your profile public?</Label>

          <Switch switchId="public" />
        </Stack>

        <Stack>
          <Label>Your message to us</Label>

          <TextArea maxLength={140} />
        </Stack>
      </Stack>
    </form>,
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Oe=["Default"];export{a as Default,Oe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=forms.stories-BrjVNHTq.js.map
