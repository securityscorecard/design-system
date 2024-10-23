import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import"./index-CBMg0Yss.js";import"./index-Dii5kbWS.js";import{S as r}from"./index-D5s2qWpv.js";import{L as i}from"./Label-D8V9yQtD.js";import"./index-ClIdIR2o.js";import{I as p}from"./Input-Bee3Ckqq.js";import{E as l,N as c}from"./Message-Cv_RGJbY.js";import{S as b}from"./Select-auNzjXsR.js";import{R as t}from"./Radio-OC4ovXYv.js";import{C as o}from"./Checkbox-CO5yYsbB.js";import{S as u}from"./Switch-D6Ebod_u.js";import{T as d}from"./TextArea-Bm3ER38F.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useSelectProps-DtTZBgXL.js";import"./extends-CF3RwP-h.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DhoXBIRq.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-d_WF-3il.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./index-CajKmcpa.js";import"./Button-DyPMm7cZ.js";import"./index-CVyJwDg7.js";import"./components-D4rQYKk1.js";import"./index-KsdgvOjZ.js";import"./Icon-CYAM9BRr.js";import"./index-Dk74W0Oi.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./useLogger-DBrb0845.js";import"./DSProvider-DOa9IzhU.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-sYlzTV1h.js";import"./Spinner-CaS15r7b.js";import"./prop-BraK_cHP.js";import"./index-D97QikPo.js";import"./isFunction-DHFK1UxZ.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-B0oiM2Sz.js";import"./Inline.enums-Dg90oR_c.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-BlMC5YZZ.js";import"./isNilOrEmpty-kE3Ef-KC.js";import"./isNil-qfCNC9HL.js";import"./take-C14nZQk_.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-hENBaGjg.js";import"./isNotEmpty-CZrJ5H-_.js";import"./isNonEmptyArray-CUFiEkiN.js";import"./sortBy-__X9Dmyc.js";import"./index-BVPGs6sH.js";import"./MultiValueInput-BxsmWdXl.js";import"./index-B3IS_vUE.js";import"./Pill-D-HanoWC.js";import"./noop-HYpN8PIr.js";import"./Padbox-YpISqXAr.js";import"./isNonEmptyString-Cg_K2c9L.js";import"./isNotNull-DgOaR-Mp.js";import"./isNull-CY6zyd1L.js";import"./trim-EFCMhnPq.js";import"./Password-bNaEFkr4.js";import"./index-B1jOE2w3.js";import"./CreatableSelect-OMfkGU5G.js";import"./index-iel8gM5l.js";import"./Range-BnVeayHH.js";import"./SearchBar-CDldg93Z.js";import"./SegmentedToggle-BR1sUzPQ.js";import"./ElementLabel-CLZwawJK.js";import"./IconButton-DqReE266.js";import"./index-8M-BrxK9.js";import"./index-C9awWo0S.js";import"./subtract-BJ4gNos5.js";import"./mergeRefs-Db6Uq7ue.js";const ze={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-BPAima1-.js.map
