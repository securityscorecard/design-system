import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{I as e}from"./InputGroup-Ci-Ppccm.js";import"./Checkbox-CKFjIkBH.js";import{I as u}from"./Input-BtOZIwxI.js";import"./Label-BXbsNi4R.js";import"./Message-DUxshZZl.js";import"./MultiValueInput-D7lNkhxc.js";import{P as M}from"./Password-65KzSUZy.js";import"./Radio-YCSNiGxy.js";import{S as m}from"./Select-Dx3xIfX3.js";import"./CreatableSelect-Ciqv7Eeg.js";import"./Range-cNWnBLi8.js";import"./Switch-0dtb0Z-n.js";import"./TextArea-DbKusWUV.js";import{S as R}from"./SearchBar-Dg-JDwAb.js";import"./SegmentedToggleItem-B_FdIjKO.js";import{I as c}from"./Icon-DSPfH_8v.js";import{B as E}from"./Button-CgUf0TwU.js";import"./index-CTjT7uj6.js";import"./space-BY85GhUc.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./Surface-CvF-S7pg.js";import"./flex.types-BrkCVx66.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./prop-Cw0eZkJ_.js";import"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./index-DFvsTZbx.js";import"./Paragraph-DLn62-bA.js";import"./spacing.types-C9Yu1wmA.js";import"./Text-CQej7zPl.js";import"./index-Bl_jQQ83.js";import"./Pill-Dq2X2jGR.js";import"./PillRemoveButton-D2CC_PxY.js";import"./PillLabel-yycd7XxX.js";import"./gt-bFkVvxSK.js";import"./isNonEmptyArray-CPhLVV4V.js";import"./isNotEmpty-DmRwknIn.js";import"./isArray-B7wtxCYk.js";import"./isFunction-DKkHXutz.js";import"./pluck-CGJirjHu.js";import"./both-CLVeTvyf.js";import"./isEmptyArray-Ckn0nrLG.js";import"./noop-CRTpovv1.js";import"./isNonEmptyString-B_Cuyr9S.js";import"./isNotNull-D2Wrs3cn.js";import"./trim-6_CYq9V8.js";import"./take-ZeMSspOg.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./action.types-CSW_hKjS.js";import"./Button.enums-P6KVfN9D.js";import"./BaseButton-Bl-0NeNF.js";import"./require-router-link-EREg1Bbm.js";import"./Spinner-b5BYo8Sk.js";import"./pick-DB5feQ9Q.js";import"./isNotNilOrEmpty-BG4ifY0O.js";import"./isNilOrEmpty-4-uKJ3Xu.js";import"./isNil-BfRYDDcR.js";import"./sortBy-DcYbM6i8.js";import"./subtract-C6lrP-Nx.js";import"./mergeRefs-BUQjZHg5.js";import"./BaseTabLabel-CA2UX4fK.js";const se={title:"components/forms/InputGroup",component:e},d=[{value:"HR",label:"Croatia",isDisabled:!0},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"}],t=()=>r.jsxs(e,{hasDivider:!1,children:[r.jsx(u,{placeholder:"Search...",type:"text"},"input"),r.jsx(c,{name:"search"},"icon")]}),o=()=>r.jsxs(e,{hasDivider:!0,children:[r.jsx(u,{placeholder:"Search...",type:"text"},"input"),r.jsx(c,{name:"search"},"icon")]}),p=()=>r.jsxs(e,{stretch:"end",children:[r.jsx(c,{name:"search"},"icon"),r.jsx(m,{options:d,placeholder:"Select a country",isMulti:!0})]}),s=()=>r.jsxs(e,{stretch:"end",hasDivider:!0,children:[r.jsx(m,{options:d,placeholder:"Select a country"}),r.jsxs(e,{children:[r.jsx(u,{placeholder:"Search...",type:"text"},"input"),r.jsx(c,{name:"search"},"icon")]})]}),i=()=>r.jsxs(e,{stretch:"end",children:[r.jsx(u,{placeholder:"Type here...",type:"text"},"input"),r.jsx(E,{children:"Search"})]}),n=()=>r.jsxs(e,{stretch:"end",hasDivider:!0,children:[r.jsx(c,{name:"eye"},"icon"),r.jsx(M,{})]}),a=()=>r.jsxs(e,{stretch:"end",hasDivider:!0,children:[r.jsx(m,{options:d,placeholder:"Select a country",isMulti:!0}),r.jsx(R,{})]});t.__docgenInfo={description:"",methods:[],displayName:"DefaultInputGroup"};o.__docgenInfo={description:"",methods:[],displayName:"DividerInputGroup"};p.__docgenInfo={description:"",methods:[],displayName:"SelectInputGroup"};s.__docgenInfo={description:"",methods:[],displayName:"NestedInputGroup"};i.__docgenInfo={description:"",methods:[],displayName:"InputGroupWithButton"};n.__docgenInfo={description:"",methods:[],displayName:"InputGroupWithPassword"};a.__docgenInfo={description:"",methods:[],displayName:"InputGroupWithSearchBar"};var l,h,I;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => <InputGroup hasDivider={false}>
    <Input key="input" placeholder="Search..." type="text" />
    <Icon key="icon" name="search" />
  </InputGroup>`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var G,x,y;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`() => <InputGroup hasDivider>
    <Input key="input" placeholder="Search..." type="text" />
    <Icon key="icon" name="search" />
  </InputGroup>`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,j,f;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => <InputGroup stretch="end">
    <Icon key="icon" name="search" />
    <Select options={options} placeholder="Select a country" isMulti />
  </InputGroup>`,...(f=(j=p.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var v,D,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <InputGroup stretch="end" hasDivider>
    <Select options={options} placeholder="Select a country" />
    <InputGroup>
      <Input key="input" placeholder="Search..." type="text" />
      <Icon key="icon" name="search" />
    </InputGroup>
  </InputGroup>`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var g,B,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => <InputGroup stretch="end">
    <Input key="input" placeholder="Type here..." type="text" />
    <Button>Search</Button>
  </InputGroup>`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var N,W,b;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`() => <InputGroup stretch="end" hasDivider>
    <Icon key="icon" name="eye" />
    <Password />
  </InputGroup>`,...(b=(W=n.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var C,P,w;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => <InputGroup stretch="end" hasDivider>
    <Select options={options} placeholder="Select a country" isMulti />
    <SearchBar />
  </InputGroup>`,...(w=(P=a.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const ie=["DefaultInputGroup","DividerInputGroup","SelectInputGroup","NestedInputGroup","InputGroupWithButton","InputGroupWithPassword","InputGroupWithSearchBar"];export{t as DefaultInputGroup,o as DividerInputGroup,i as InputGroupWithButton,n as InputGroupWithPassword,a as InputGroupWithSearchBar,s as NestedInputGroup,p as SelectInputGroup,ie as __namedExportsOrder,se as default};
