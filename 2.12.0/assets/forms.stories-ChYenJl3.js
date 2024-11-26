import{j as e}from"./jsx-runtime-CfatFE5O.js";import"./index-CEzWZfjE.js";import"./index-7cJ2juxC.js";import{S as r}from"./index-BtznGf-c.js";import{L as i}from"./Label-BEWnm1KI.js";import"./index-DG3Tn3j3.js";import{I as p}from"./Input-B5mrWinm.js";import{E as l,N as c}from"./Message-BLPOpJfp.js";import{S as b}from"./Select-BGskjEuT.js";import{R as t}from"./Radio-CPWnPGFq.js";import{C as o}from"./Checkbox-BQGEje7a.js";import{S as u}from"./Switch-ClMGVynv.js";import{T as d}from"./TextArea-Dc7yvoFH.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useSelectProps-CnNhta0F.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./_isObject-BZZHHNGj.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BZ-MkEN1.js";import"./space.enums-FzolKu9U.js";import"./index-CajKmcpa.js";import"./Button-BfyVdgm0.js";import"./index-DxcpycWO.js";import"./components-BlntQQgH.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-DbwGX_n3.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./useLogger-CA2WAjqk.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./prop-C6y-wj7q.js";import"./index-BgMjzImo.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-D_m0G_lu.js";import"./Inline.enums-nLI0iivB.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-CzgeZFyQ.js";import"./isNilOrEmpty-DrV01zGr.js";import"./isNil-qfCNC9HL.js";import"./take-tk8GdqSR.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-wkODOmrt.js";import"./isNotEmpty-De95qR8d.js";import"./isNonEmptyArray-MQllCXeo.js";import"./sortBy-__X9Dmyc.js";import"./index-C9F-9Xmi.js";import"./MultiValueInput-YMd3-WD5.js";import"./index-K53_VLVp.js";import"./Pill-D8fkm8BA.js";import"./noop-BL97hhQA.js";import"./Padbox-CBhO8TxM.js";import"./isNonEmptyString-BwD4DoTb.js";import"./isNotNull-Bi0ik2MG.js";import"./isNull-ByzPK5V3.js";import"./trim-EFCMhnPq.js";import"./Password-IMdG436V.js";import"./index-CkV24Lry.js";import"./CreatableSelect-Vy3V9IKF.js";import"./index-CpAvg4Hc.js";import"./Range-BmnFmfa2.js";import"./SearchBar-DQokAi-O.js";import"./SegmentedToggle-C0Sh16Gf.js";import"./ElementLabel-Kzoagp5M.js";import"./IconButton-Cd40Tx_f.js";import"./index-N2e0qnpI.js";import"./index-CXhmAfct.js";import"./subtract-BJ4gNos5.js";import"./mergeRefs-BjwOtpm_.js";const ze={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-ChYenJl3.js.map
