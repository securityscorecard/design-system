import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import"./index-YOnkWVzj.js";import"./index-Bv39VcRu.js";import{S as r}from"./index-Cf7gdOSN.js";import{L as i}from"./Label-CMknJ6ao.js";import"./index-B-LfxgeQ.js";import{I as p}from"./Input-DKg0Tw61.js";import{E as l,N as c}from"./Message-uhRtqgod.js";import{S as b}from"./Select-CjxBUVVk.js";import{R as a}from"./Radio-bh2ta2BY.js";import{C as o}from"./Checkbox-BUy1j-s_.js";import{S as u}from"./Switch-D5Beg4U2.js";import{T as d}from"./TextArea-D1OO1kWL.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useSelectProps-DoxLq7mJ.js";import"./extends-CF3RwP-h.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DhoXBIRq.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-BdsnPCmC.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./index-BsP7FXMl.js";import"./Button-CWF-cIJl.js";import"./index-CVyJwDg7.js";import"./components-BQVXU2CE.js";import"./index-DP_jSIOV.js";import"./Icon-Rfg63q_9.js";import"./index-Dk74W0Oi.js";import"./index-dWynxCtG.js";import"./constants-CHqWh-7J.js";import"./slice-a4xO8Rfj.js";import"./useLogger-CvwVUQJ2.js";import"./DSProvider-BQ8JssCJ.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-gqxQzocl.js";import"./Spinner-K1HJcvQM.js";import"./prop-CTu21A3U.js";import"./index-DuTw_9qX.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./PillRemoveButton-qry3U2cu.js";import"./Inline.enums-B6aHLh-0.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-D-VGOqpW.js";import"./isNilOrEmpty-C004JLXt.js";import"./isNil-qfCNC9HL.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNotEmpty-Bbhdhluu.js";import"./isNonEmptyArray-UNRSIHQD.js";import"./isFunction-d9DPmkeA.js";import"./pluck-DHBcIId7.js";import"./take-D75AvTOf.js";import"./Cluster-DBXy5O-6.js";import"./sortBy-__X9Dmyc.js";import"./index-DolS7Dwz.js";import"./MultiValueInput-BTzMbnVr.js";import"./index-Bp9iF5gu.js";import"./Pill-iZ7-fUnx.js";import"./noop-CdhuOQYG.js";import"./Padbox-CDFfn736.js";import"./isNonEmptyString-Gb7OMSoH.js";import"./isNotNull-CGNDL-_A.js";import"./isNull-D8kYROfs.js";import"./trim-EFCMhnPq.js";import"./Password-nwa8pe33.js";import"./index-UiPXLC7q.js";import"./CreatableSelect-BGvO_-Z2.js";import"./index-B9rA5P-U.js";import"./Range-DzBrh-XH.js";import"./SearchBar-Byejo0pj.js";import"./SegmentedToggle-BSkNMKdX.js";import"./ElementLabel-BG1PitjW.js";import"./IconButton-DoYGB1w0.js";import"./index-BdgNbBlP.js";import"./index-BydEblTc.js";import"./subtract-BJ4gNos5.js";import"./mergeRefs-D2M2BR1V.js";const Oe={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],t={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(a,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(a,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Ue=["Default"];export{t as Default,Ue as __namedExportsOrder,Oe as default};
//# sourceMappingURL=forms.stories-BWBjsijZ.js.map
