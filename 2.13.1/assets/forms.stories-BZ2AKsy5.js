import{j as e}from"./jsx-runtime-CfatFE5O.js";import"./index-BzHg-D9O.js";import"./index-C0tcqiOb.js";import{S as r}from"./index-DocoHESx.js";import{L as i}from"./Label-BEWnm1KI.js";import"./index-DG3Tn3j3.js";import{I as p}from"./Input-tPJ_Lcbf.js";import{E as l,N as c}from"./Message-wWCu95d4.js";import{S as b}from"./Select-QVTqu2g6.js";import{R as t}from"./Radio-BFKu864A.js";import{C as o}from"./Checkbox-Cx8WyNqy.js";import{S as u}from"./Switch-YxyZKdgZ.js";import{T as d}from"./TextArea-DUU233SY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CFPDWBTe.js";import"./index-C15hmOdh.js";import"./MultiValueInput-Cq9MWJrs.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-BZ-MkEN1.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-DxcpycWO.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./index-Ccg6HrRD.js";import"./index-CeOnF3dB.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DYDjgMG1.js";import"./Icon-CHceuV7K.js";import"./index-DbwGX_n3.js";import"./useLogger-CGEbE2mZ.js";import"./index-j3TVFBpQ.js";import"./Pill-BAusDNNE.js";import"./PillRemoveButton-Cb8jjtX4.js";import"./Inline.enums-CFrWSfFs.js";import"./isNonEmptyArray-ClXnQjxY.js";import"./isNotEmpty-diCciua_.js";import"./noop-BL97hhQA.js";import"./Padbox-DmYWNoOJ.js";import"./isNonEmptyString-DPRTujz2.js";import"./isNotNull-Bi0ik2MG.js";import"./isNull-ByzPK5V3.js";import"./trim-EFCMhnPq.js";import"./take-um2ScWSZ.js";import"./Password-Dv1bfKE9.js";import"./index-Cwi2VEae.js";import"./CreatableSelect-CjqA_HmP.js";import"./useSelectProps-D-Ds3nxr.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Button-vEOnW8Bm.js";import"./components-MIUzfLU3.js";import"./index-CGIPeC-W.js";import"./Spinner-CScYiCuC.js";import"./pick-DHMZF_qQ.js";import"./isNotNilOrEmpty-YvIBDmon.js";import"./isNilOrEmpty-BaNvnuEd.js";import"./isNil-qfCNC9HL.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-BKESMogL.js";import"./sortBy-__X9Dmyc.js";import"./index-CpAvg4Hc.js";import"./Range-BbMnonMy.js";import"./SearchBar-CGUFAZQ0.js";import"./SegmentedToggle-BqnG-vcj.js";import"./ElementLabel-Kzoagp5M.js";import"./IconButton-CUW5D67R.js";import"./index-BaexK_kB.js";import"./index-DTMAbG_k.js";import"./mergeRefs-BjwOtpm_.js";import"./subtract-BJ4gNos5.js";const Ke={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-BZ2AKsy5.js.map
