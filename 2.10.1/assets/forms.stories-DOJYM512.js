import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import"./index-_bOizbf_.js";import"./index-CJ1jFOY0.js";import{S as r}from"./index-DswKY91G.js";import{L as i}from"./Label-D8V9yQtD.js";import"./index-ClIdIR2o.js";import{I as p}from"./Input-X7N7d1fj.js";import{E as l,N as c}from"./Message-CLmhkQeC.js";import{S as b}from"./Select-7ajy_tPY.js";import{R as t}from"./Radio-NCIZAiq8.js";import{C as o}from"./Checkbox-C4kVvMso.js";import{S as u}from"./Switch-D7TOSpC9.js";import{T as d}from"./TextArea-BTKrDSzA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useSelectProps-BaHPAzbB.js";import"./extends-CF3RwP-h.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DhoXBIRq.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-04esSdTO.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-CajKmcpa.js";import"./Button-Dg7nljpV.js";import"./index-CVyJwDg7.js";import"./components-CbPQWOa6.js";import"./index-CodEEOgp.js";import"./Icon-CCnW0-hW.js";import"./index-Dk74W0Oi.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./useLogger-CeNh0Atc.js";import"./DSProvider-DOa9IzhU.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./prop-C6y-wj7q.js";import"./index-D6mk1gl9.js";import"./isFunction-BAANUD86.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-Cp2GXDE0.js";import"./Inline.enums-BAfT2b1A.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-7bsKgUin.js";import"./isNilOrEmpty-FvLncskg.js";import"./isNil-qfCNC9HL.js";import"./take-CM7vhqB7.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-x6SODxoc.js";import"./isNotEmpty-2CrqG7_E.js";import"./isNonEmptyArray-MbpxZfxF.js";import"./sortBy-__X9Dmyc.js";import"./index-K11YQVHI.js";import"./MultiValueInput-CGV3sq8p.js";import"./index-BwQkA-7b.js";import"./Pill-CmUf-Iiu.js";import"./noop-BL97hhQA.js";import"./Padbox-D7p1agbO.js";import"./isNonEmptyString-CjPVs0zm.js";import"./isNotNull-Bi0ik2MG.js";import"./isNull-ByzPK5V3.js";import"./trim-EFCMhnPq.js";import"./Password-QadX07y-.js";import"./index-BxkapaTo.js";import"./CreatableSelect-B-LkZrHf.js";import"./index-P638_79P.js";import"./Range-I9Phb3nc.js";import"./SearchBar-BRUwHPhc.js";import"./SegmentedToggle-D7dJxxUD.js";import"./ElementLabel-CLZwawJK.js";import"./IconButton-DByWM6Xn.js";import"./index-B9Ea3eoS.js";import"./index-DV_F2C3q.js";import"./subtract-BJ4gNos5.js";import"./mergeRefs-BjwOtpm_.js";const ze={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Ke=["Default"];export{a as Default,Ke as __namedExportsOrder,ze as default};
//# sourceMappingURL=forms.stories-DOJYM512.js.map
