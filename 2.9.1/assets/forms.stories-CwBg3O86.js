import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-BYTRxsJD.js";import"./index-C1kpn3a9.js";import{S as r}from"./index-FmXXYKzo.js";import{L as i}from"./Label-DV11VlAT.js";import"./index-BIwqfUOZ.js";import{I as p}from"./Input-BZ4Nrdtq.js";import{E as l,N as c}from"./Message-BbjTuzwB.js";import{S as b}from"./Select-CFvIrKue.js";import{R as t}from"./Radio-3mxoJcYo.js";import{C as o}from"./Checkbox-C47U54k4.js";import{S as u}from"./Switch-Dmw7X2qQ.js";import{T as d}from"./TextArea-BR6gquQx.js";import"./index-CTjT7uj6.js";import"./useSelectProps-CV1kRKNC.js";import"./extends-CF3RwP-h.js";import"./unsupportedIterableToArray-CO_C7xo5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-BzjjseuL.js";import"./space.enums-aJQ33HT_.js";import"./isObject-BZZHHNGj.js";import"./index-BsP7FXMl.js";import"./Button-jQCIxIJA.js";import"./index-C7IrpltL.js";import"./components-CjIxgO6S.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-BRV0Se7Z.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./slice-CaMqkvGm.js";import"./useLogger-BdR6T79l.js";import"./DSProvider-DZ2BDZS9.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./prop-CgNUfcFy.js";import"./index-BkLmc-fh.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./PillRemoveButton-CcoG8WEs.js";import"./Inline.enums-CsgpNQwN.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-CoFWTRm3.js";import"./isNilOrEmpty-DryPRcGQ.js";import"./isNil-qfCNC9HL.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNotEmpty-CKnDLE-6.js";import"./isNonEmptyArray-DxiDb_ME.js";import"./isFunction-0s348r1S.js";import"./pluck-5zg4Xx5s.js";import"./take-DPqzbdvt.js";import"./Cluster-BnO1HbAj.js";import"./sortBy-__X9Dmyc.js";import"./index-7b4_9JcP.js";import"./MultiValueInput-Bzwje_BG.js";import"./index-_JuRKZiv.js";import"./Pill-DDsfaC4J.js";import"./noop-zffMy0O7.js";import"./Padbox-DpT_ILeC.js";import"./isNonEmptyString-D877pSZG.js";import"./isNotNull-C3X32hrc.js";import"./isNull-T1j7Gx-1.js";import"./trim-EFCMhnPq.js";import"./Password-2ANjQeZ_.js";import"./index-D1MEfHGT.js";import"./CreatableSelect-CrOX32bx.js";import"./index-CUGQ8N4L.js";import"./Range-CRh44R-_.js";import"./SearchBar-MqazqjuW.js";import"./SegmentedToggle-BsbCQAyu.js";import"./ElementLabel-Bua-ZRQK.js";import"./IconButton-CKUQpq1U.js";import"./index-Dc3BNA-e.js";import"./index-zphH5PEn.js";import"./subtract-BJ4gNos5.js";import"./mergeRefs-Btf8uGkc.js";const Ke={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-CwBg3O86.js.map
