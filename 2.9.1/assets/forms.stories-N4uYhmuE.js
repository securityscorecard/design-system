import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-Cg_q4G5L.js";import"./index-CtMHODJ2.js";import{S as r}from"./index-BFpmPCJD.js";import{L as i}from"./Label-BRtNJM2P.js";import"./index-CZAuE97N.js";import{I as p}from"./Input-CW0oMNc-.js";import{E as l,N as c}from"./Message-DQnLn9tq.js";import{S as b}from"./Select-BFhHTpDW.js";import{R as t}from"./Radio-pisuWOx7.js";import{C as o}from"./Checkbox-BX2kvIvK.js";import{S as u}from"./Switch-C4PzNgSB.js";import{T as d}from"./TextArea-IKyfDoXg.js";import"./index-CTjT7uj6.js";import"./useSelectProps-BUntw6ti.js";import"./extends-CF3RwP-h.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-sLO49wHN.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./index-CajKmcpa.js";import"./Button-CvHd8Azw.js";import"./index-C7IrpltL.js";import"./components-CEAZ8Niy.js";import"./index-Do5YN-r4.js";import"./Icon-D2McLPVS.js";import"./index-BRV0Se7Z.js";import"./index-CrKmLWnD.js";import"./constants-l-41uwkI.js";import"./useLogger-BUVDCBjf.js";import"./DSProvider-BD6Crr4Z.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-BpwILXOI.js";import"./Spinner-D0DPxq7I.js";import"./prop-DthtuCpe.js";import"./index-CbtSpW2v.js";import"./isFunction-ueona4bl.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-COTxmups.js";import"./Inline.enums-B2crYYgS.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-BrN190Xh.js";import"./isNilOrEmpty-CQyW8KDy.js";import"./isNil-qfCNC9HL.js";import"./take-DJTZ0ekB.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-_Y3KuvTf.js";import"./isNotEmpty-DQ1_6IgO.js";import"./isNonEmptyArray-SeHl5XMj.js";import"./sortBy-__X9Dmyc.js";import"./index-UND16g3F.js";import"./MultiValueInput-iZ2-dioE.js";import"./index-D6R3DHC6.js";import"./Pill-BDiUppEK.js";import"./noop-C6yK0wcs.js";import"./Padbox-C9-4IgMJ.js";import"./isNonEmptyString-DtV7DFTD.js";import"./isNotNull-beo8WoSn.js";import"./isNull-Bs93IvUT.js";import"./trim-EFCMhnPq.js";import"./Password-DclwadZg.js";import"./index-CS4DvOhf.js";import"./CreatableSelect-CtMP5Pq4.js";import"./index-BILJD4ib.js";import"./Range-CXk1tqmu.js";import"./SearchBar-CB0E9xPS.js";import"./SegmentedToggle-ndPjKTTM.js";import"./ElementLabel-CTPKCfMW.js";import"./IconButton-fQ2bMmdG.js";import"./index-CXHcUZNU.js";import"./index--l7ovmQ3.js";import"./subtract-BJ4gNos5.js";import"./mergeRefs-BdafcyrG.js";const _e={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const ze=["Default"];export{a as Default,ze as __namedExportsOrder,_e as default};
//# sourceMappingURL=forms.stories-N4uYhmuE.js.map
