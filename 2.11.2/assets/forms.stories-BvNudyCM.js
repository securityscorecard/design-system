import{j as e}from"./jsx-runtime-CfatFE5O.js";import"./index-mXvZraRq.js";import"./index-BQsZAX6J.js";import{S as r}from"./index-BnuP2NC2.js";import{L as i}from"./Label-Z4PdSHGM.js";import"./index-BQTe8zHE.js";import{I as p}from"./Input-D3avspOK.js";import{E as l,N as c}from"./Message-DbNlu9PB.js";import{S as b}from"./Select-B6Dk5S2v.js";import{R as t}from"./Radio-C-JdxXzb.js";import{C as o}from"./Checkbox-DMTFxonK.js";import{S as u}from"./Switch-CyHIEvM_.js";import{T as d}from"./TextArea-BfDFRB0D.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useSelectProps-BI1BP4J2.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./_isObject-BZZHHNGj.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-VMNEoDvM.js";import"./space.enums-BIVz6JhH.js";import"./index-BsP7FXMl.js";import"./Button-_T-PuNCu.js";import"./index-DxcpycWO.js";import"./components-D0pVc94e.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-DbwGX_n3.js";import"./index-CeGY6Ei3.js";import"./constants-CHqWh-7J.js";import"./slice-a4xO8Rfj.js";import"./useLogger-BVsKAY55.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./prop-CVCEMdxf.js";import"./index-0K9MvtJv.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./PillRemoveButton-ClKFZ-rf.js";import"./Inline.enums-Bs7GfXP0.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-CB-1RHZk.js";import"./isNilOrEmpty-LYUyzqZr.js";import"./isNil-qfCNC9HL.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNotEmpty-Uyv6-ey5.js";import"./isNonEmptyArray-CJzdD27H.js";import"./isFunction-BRhYXvH4.js";import"./pluck-DBmb9H0q.js";import"./take-S5Br6jEq.js";import"./Cluster-DiauHNp4.js";import"./sortBy-__X9Dmyc.js";import"./index-CDdpBhob.js";import"./MultiValueInput-Bw_-QORp.js";import"./index-C6jSWOeZ.js";import"./Pill-CJpEBFcq.js";import"./noop-CdhuOQYG.js";import"./Padbox-DPWp-bzC.js";import"./isNonEmptyString-4V6tvDPw.js";import"./isNotNull-CGNDL-_A.js";import"./isNull-D8kYROfs.js";import"./trim-EFCMhnPq.js";import"./Password-DAmK41Pm.js";import"./index-BGXV329Q.js";import"./CreatableSelect-DM-3MGgl.js";import"./index-gVnCqFBT.js";import"./Range-BpVOW3rZ.js";import"./SearchBar-ePG9n6Ev.js";import"./SegmentedToggle-DKk0257d.js";import"./ElementLabel-Ck8BqEGn.js";import"./IconButton-C7WqqEmt.js";import"./index-Ozu0POZL.js";import"./index-BlLyJPr3.js";import"./subtract-BJ4gNos5.js";import"./mergeRefs-D2M2BR1V.js";const Ke={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-BvNudyCM.js.map
