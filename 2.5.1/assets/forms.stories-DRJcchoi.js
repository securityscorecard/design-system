import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./index-Da-c2Gga.js";import"./index-h7qFssqm.js";import{S as r}from"./index-CISbCLO7.js";import{L as i}from"./Label-CbUlFnuK.js";import"./index-Xvmp83uy.js";import{E as p,N as l}from"./Message-CEtFRc5k.js";import{S as c}from"./Select-DZp6BwNQ.js";import{R as t}from"./Radio-CgQcdb89.js";import{T as b}from"./TextArea-DAbr32KI.js";import{I as u}from"./Input-DBo7gmZx.js";import{C as o}from"./Checkbox-Cs_hHU84.js";import{S as d}from"./Switch-HW7QcR8s.js";import"./index-CTjT7uj6.js";import"./index-B3vvNXEl.js";import"./MultiValueInput-BmAw4Bvf.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DuIFLBUG.js";import"./index-DT7C7tog.js";import"./index-C7IrpltL.js";import"./index-CECIl5yl.js";import"./index-uyLpYamY.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-CHR41AfE.js";import"./Icon-CG4jHxtF.js";import"./index-BRV0Se7Z.js";import"./useLogger-BRbW6gx4.js";import"./index-BoTZd2n1.js";import"./Pill-CQHkUhJr.js";import"./PillRemoveButton-D0mC8gmi.js";import"./Inline.enums-Dxp6-wcT.js";import"./isNonEmptyArray-C7jxCePI.js";import"./isNotEmpty-DtQp8gvm.js";import"./noop-XW1TVrX5.js";import"./isNonEmptyString-DdXKNJGj.js";import"./isNotNull-lH5ks6fm.js";import"./isNull-DtrhChS2.js";import"./trim-CESW8YKz.js";import"./take--bNN_mdr.js";import"./Padbox-DcClumXL.js";import"./Password-0Vg8EA6_.js";import"./index-gEDjKwVa.js";import"./CreatableSelect-ChEh48cv.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-XqRGyOl1.js";import"./Range-CwMWMcPA.js";import"./SearchBar-CZUvBmr8.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./isNotNilOrEmpty-BN_BASDr.js";import"./isNilOrEmpty-B_sjZgCr.js";import"./isNil-DBsJ5Qwu.js";import"./index-BU33gT93.js";import"./BaseTabLabel-C0bSxzyX.js";import"./index-B2xEckfB.js";import"./subtract-UULvR2Ei.js";import"./index-BKljQjtI.js";import"./index-fDJ_58mZ.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Button-BlAc9jyq.js";import"./Button-D3qY9K8F.js";import"./components-CuVdvoC-.js";import"./IconButton-BuN5sAFu.js";import"./Cluster-DithqAUq.js";import"./index-Dzv7tIQf.js";import"./pick-XwXReSlB.js";import"./sortBy-Bt4OVUXm.js";import"./mergeRefs-CyslAdeM.js";const Ke={title:"components/forms/Example",tags:["!dev"]},h=[{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],a={render:()=>e.jsx("form",{children:e.jsxs(r,{gap:"md",children:[e.jsxs(r,{children:[e.jsx(i,{children:"Your Name"}),e.jsx(u,{type:"text",isInvalid:!0}),e.jsx(p,{children:"This field is required"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your Country"}),e.jsx(c,{options:h}),e.jsx(l,{children:"Where you currently live"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"I am"}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{label:"Human",name:"species",radioId:"human",value:"human"}),e.jsx(t,{label:"Animal",name:"species",radioId:"animal",value:"animal"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"My hobbies"}),e.jsxs(r,{gap:"xs",children:[e.jsx(o,{checkboxId:"reading",label:"Reading",name:"hobbies",value:"reading"}),e.jsx(o,{checkboxId:"sleeping",label:"Sleeping",name:"hobbies",value:"sleeping"}),e.jsx(o,{checkboxId:"programming",label:"Programming",name:"hobbies",value:"programming"}),e.jsx(o,{checkboxId:"testing",label:"Testing",name:"hobbies",value:"testing"})]})]}),e.jsxs(r,{justify:"flex-start",children:[e.jsx(i,{children:"Do you want to make your profile public?"}),e.jsx(d,{switchId:"public"})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Your message to us"}),e.jsx(b,{maxLength:140})]})]})}),parameters:{screenshot:{skip:!0}}};var n,m,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=forms.stories-DRJcchoi.js.map
