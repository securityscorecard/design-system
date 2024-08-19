import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{C as o}from"./Checkbox-DtOI_Iry.js";import{I as p}from"./Input-CflEDIf9.js";import{L as i}from"./Label-Bgxc31x7.js";import{E as l,N as c}from"./Message-6KzRW5US.js";import"./MultiValueInput-D_NZt4Q-.js";import"./Password-DMckXrPE.js";import{R as t}from"./Radio-DvXQpNUS.js";import{S as b}from"./Select-D2oYJWhQ.js";import"./CreatableSelect-DuZZJGpq.js";import"./Range-BxXBtghR.js";import{S as u}from"./Switch-BouC_1R9.js";import{T as d}from"./TextArea-dzhcLn8B.js";import"./SearchBar-CgCaR-wq.js";import"./SegmentedToggleItem-CNyXGxSM.js";import"./InputGroup-pSAtlOG3.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as r}from"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./space-1LtLrmuu.js";import"./index-C7IrpltL.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./index-DFvsTZbx.js";import"./Text-DTP2ysh1.js";import"./Paragraph-4LRW5eCl.js";import"./spacing.types-C9Yu1wmA.js";import"./index-CJIF_j5S.js";import"./Icon-4JNizDXH.js";import"./useLogger-Cd66DVRc.js";import"./Pill-3kaa-68-.js";import"./PillRemoveButton-CS7bxu8m.js";import"./PillLabel-CLRUhFaA.js";import"./gt-mgGmHlKl.js";import"./isNonEmptyArray-CGykYah7.js";import"./isNotEmpty-Dh9FcTil.js";import"./isArray-D_RvpTHQ.js";import"./both-peGKknMH.js";import"./isEmptyArray-9kLVyzWX.js";import"./noop-CLoMDX4X.js";import"./isNonEmptyString-zJHoJ8N4.js";import"./isNotNull-B1xFkUZ3.js";import"./trim-C2DDSsAv.js";import"./take-Kg9EtPoO.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./action.types-CSW_hKjS.js";import"./Button.enums-DxFt5drl.js";import"./BaseButton-D1TUSAxp.js";import"./require-router-link-DHB4GfDh.js";import"./Spinner-CJrCb2wC.js";import"./Button-vDRI25at.js";import"./pick-Dgh-9MLD.js";import"./isNotNilOrEmpty-cGK6as13.js";import"./isNilOrEmpty-MGEuPZ7r.js";import"./isNil-C1Q7XXIj.js";import"./sortBy-BCHo5fjk.js";import"./subtract-BgQ2JsUW.js";import"./mergeRefs-sWHjowoU.js";import"./BaseTabLabel-QgyaGmc-.js";import"./flex.types-BrkCVx66.js";const qe={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Me=["Default"];export{a as Default,Me as __namedExportsOrder,qe as default};
