import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-5MQiJPnH.js";import"./index-DKUwlGz1.js";import{S as r}from"./index-C1DSbQpy.js";import{L as i}from"./Label-DldvHbDi.js";import"./index-r2PNc6PS.js";import{I as p}from"./Input-C1VuqpVe.js";import{E as l,N as c}from"./Message-BtH_xvWd.js";import{S as b}from"./Select-3iyzMrN2.js";import{R as a}from"./Radio-CUFpb7QZ.js";import{C as o}from"./Checkbox-CUxNaTFV.js";import{S as u}from"./Switch-BNkouqTm.js";import{T as d}from"./TextArea-B4SL0cIl.js";import"./index-CTjT7uj6.js";import"./useSelectProps-DcM-KqIN.js";import"./extends-CF3RwP-h.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DIVhMF2i.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-qmyP4KEa.js";import"./index-DxUWnzkt.js";import"./index-DBr7mztH.js";import"./Button-B0SYPtI0.js";import"./index-C7IrpltL.js";import"./components-CYX7eQ8t.js";import"./index-CmRxaJ3P.js";import"./Icon-Nxma5B5F.js";import"./index-BRV0Se7Z.js";import"./useLogger-DkXBJUOu.js";import"./DSProvider-CZqUabl8.js";import"./theme-C_MxYcvQ.js";import"./colors-BJBAFLAc.js";import"./index-DxT0DBGr.js";import"./Spinner-W0TUPOI9.js";import"./prop-DvyrXmKl.js";import"./index-BkSsiqLF.js";import"./isFunction-CFc181nM.js";import"./checkCircleSolid-CXNAtMl8.js";import"./PillRemoveButton-DmjFGYD8.js";import"./Inline.enums-CG-V8ygw.js";import"./pick-xjrz1kZf.js";import"./isNotNilOrEmpty-D3uFeLpo.js";import"./isNilOrEmpty-BEPrWyzC.js";import"./isNil-Bg-_fAot.js";import"./take-ZprrsW5Z.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Cluster-Bh3LKsFx.js";import"./isNotEmpty-QIeHuxqm.js";import"./isNonEmptyArray-FlOy_NuE.js";import"./sortBy-D4c6KnDJ.js";import"./index-MwaVmxdM.js";import"./MultiValueInput-BgQKRn0N.js";import"./index-DOwFg6Hq.js";import"./Pill-j452u0so.js";import"./noop-BOAHQqnZ.js";import"./Padbox-BddxODtE.js";import"./isNonEmptyString-D2In8YDE.js";import"./isNotNull-4bNLWuBe.js";import"./isNull-CSZRs2Kd.js";import"./trim-DKdp6uQR.js";import"./Password-CkbhfAtD.js";import"./index-cwX9iIbA.js";import"./CreatableSelect-BpJ5s5_0.js";import"./index-x37bp9TC.js";import"./Range-DKYEfg4J.js";import"./SearchBar-DGYT8gd8.js";import"./index-DUXgV-gx.js";import"./BaseTabLabel-BjDXTvqN.js";import"./index-B1HIS_mG.js";import"./subtract-DNcVioN7.js";import"./index-Dw13NsF6.js";import"./index-h1W97wzo.js";import"./require-router-link-DlQZJzFx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./tiny-invariant-CopsF_GD.js";import"./Button-Bvw_Er4f.js";import"./IconButton-DVi0OZlk.js";import"./index-Cv-mKTwf.js";import"./mergeRefs-ezcFPe0V.js";const Oe={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],t={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(p,{type:"text",isInvalid:!0}),e.jsx(l,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(b,{options:h}),e.jsx(c,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(a,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(a,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(u,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(d,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-D_71euq-.js.map
