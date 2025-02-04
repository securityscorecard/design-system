import{j as e}from"./jsx-runtime-CfatFE5O.js";import"./index-ozBTmNKU.js";import"./index-C6QYDNqb.js";import{S as r}from"./index-CE0KGU9S.js";import{L as i}from"./Label-CQ-PTcfo.js";import"./index-D6t0Aube.js";import{I as p}from"./Input-B92bjStk.js";import{E as l,N as c}from"./Message-CO0GK4fS.js";import{S as b}from"./Select-1NQg4yGG.js";import{R as a}from"./Radio-tZV6pekP.js";import{C as o}from"./Checkbox-s-CC8f1a.js";import{S as u}from"./Switch-DyZanCfX.js";import{T as d}from"./TextArea-B4Ts79Kk.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DRTzopeW.js";import"./index-DhqKvjoH.js";import"./MultiValueInput-Bg_G0CMo.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-CJOPnLQw.js";import"./space.enums-BgYGmFKv.js";import"./_isObject-BZZHHNGj.js";import"./index-DxcpycWO.js";import"./index-Bb-be-4U.js";import"./constants-CHqWh-7J.js";import"./index-DUaCKjdz.js";import"./index-BLQl-HhB.js";import"./DSProvider-mgEeOsVG.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./isFunction-CPOop_5p.js";import"./pluck-CtHNMFGn.js";import"./prop-Cr6L5s4M.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-BFJL67i_.js";import"./Icon-CPMGMxZp.js";import"./index-DbwGX_n3.js";import"./useLogger-CCAiqPwH.js";import"./index-3DES0CzE.js";import"./Pill-DduKjD2p.js";import"./PillRemoveButton-XYXJEp7X.js";import"./Inline-9kw33TPP.js";import"./isNonEmptyArray-BL-A8pSq.js";import"./isNotEmpty-ahJwcbfN.js";import"./noop-DoDTf092.js";import"./Padbox-DtjBCBeh.js";import"./isNonEmptyString-CST9-Mkq.js";import"./isNotNull-BhVAhDfp.js";import"./isNull-DbDg-2CV.js";import"./trim-EFCMhnPq.js";import"./take-CTjOx5-I.js";import"./Password-D8aABrUG.js";import"./index-BTaKNji7.js";import"./CreatableSelect-C3Kg2lg0.js";import"./useSelectProps-BlmlfIH7.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Button-CAJpGfaD.js";import"./components-D7PCbKyD.js";import"./index-BLjwvqnm.js";import"./Spinner-JO64Fpiq.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-Bq3-9Lnm.js";import"./isNilOrEmpty-DwX0CEvq.js";import"./isNil-qfCNC9HL.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-CHwR_-vL.js";import"./sortBy-__X9Dmyc.js";import"./index-UmBe9P8-.js";import"./Range-BSsW8zMu.js";import"./SearchBar-Csr8UH06.js";import"./SegmentedToggle-D7nNcqzR.js";import"./ElementLabel-CnVInBRH.js";import"./IconButton-Dy0o1yF0.js";import"./index-BavDiaxs.js";import"./Inline.enums-L64S19IZ.js";import"./Paragraph-DLmhVFXM.js";import"./mergeRefs-BFez88JG.js";import"./subtract-BJ4gNos5.js";const Oe={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],t={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(a,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(a,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-BtUpJQmJ.js.map
