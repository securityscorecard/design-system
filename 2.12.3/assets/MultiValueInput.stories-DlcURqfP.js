import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as ae}from"./index-ClcD9ViR.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{M as s}from"./MultiValueInput-BUp5Uxdp.js";import"./index-DG3Tn3j3.js";import"./index-83j-rV9N.js";import"./index-CRWCg23D.js";import"./index-DebXz2-Y.js";import"./index-DufMtqqe.js";import{S as te}from"./index-SvgRUxZC.js";import{L as oe}from"./Label-BEWnm1KI.js";import{S as re}from"./index-CqL4JSrw.js";import{H as x}from"./Heading-CVAvDyYN.js";import{B as se}from"./Banner-D25AZhKN.js";import{n as ie}from"./noop-BL97hhQA.js";import{I as le}from"./Inline.enums-BoodrCNm.js";import{B as j}from"./Button-DYTbzhcQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-BZ-MkEN1.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-DxcpycWO.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./index-BgMjzImo.js";import"./index-CajKmcpa.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./prop-C6y-wj7q.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-DbwGX_n3.js";import"./useLogger-CA2WAjqk.js";import"./index-DLTZVkzK.js";import"./Pill-Bs1dRCTF.js";import"./PillRemoveButton-BrXQC1i9.js";import"./isNonEmptyArray-MQllCXeo.js";import"./isNotEmpty-De95qR8d.js";import"./Padbox-CBhO8TxM.js";import"./isNonEmptyString-BwD4DoTb.js";import"./isNotNull-Bi0ik2MG.js";import"./isNull-ByzPK5V3.js";import"./trim-EFCMhnPq.js";import"./take-tk8GdqSR.js";import"./index-N2e0qnpI.js";import"./Cluster-wkODOmrt.js";import"./index-B9wsnGOm.js";import"./require-router-link-tvWtIm7z.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./ElementLabel-Kzoagp5M.js";import"./index-B1gWeAuA.js";import"./CloseButton-KHmbJHrg.js";import"./IconButton-Be4MdzEz.js";import"./components-BlntQQgH.js";import"./index-CRFGHyD4.js";import"./isNotNilOrEmpty-CzgeZFyQ.js";import"./isNilOrEmpty-DrV01zGr.js";import"./isNil-qfCNC9HL.js";import"./useContainerQuery-uyIEPHxz.js";const Pa={component:s,title:"components/forms/MultiValueInput"},l=a=>e.jsx(s,{...a,"aria-label":"MultiValueInput"}),r=l.bind({});r.args={onValueAdd:i("OnValueAdd"),onValueRemove:i("OnValueRemove"),onValuesChange:i("OnValuesChange"),onInputChange:i("OnInputChange"),valuesDelimiter:",",onPaste:a=>(a.clipboardData||window.clipboardData).getData("text").split(";").filter(t=>t!=="3").join(";")};const u=l.bind({});u.args={...r.args,value:["john@example.com","jane@example.com"]};const p=l.bind({});p.args={...r.args,placeholder:"Share with..."};const m=l.bind({});m.args={...r.args,isFocused:!0,className:"focus-within"};const c=l.bind({});c.args={...r.args,isInvalid:!0};const d=l.bind({});d.args={...r.args,isDisabled:!0,value:["john@example.com","jane@example.com"]};const n=l.bind({});n.args={...r.args,isClearable:!1,value:["john@example.com","jane@example.com"]};n.title="Non-clearable";const I=a=>{const[V,t]=ae.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{htmlFor:"number",children:"Numbers only"}),e.jsx(s,{...a,inputId:"emails",inputValue:"abc",isInvalid:V,pattern:"[0-9]+",value:["12"],onInputChange:o=>{t(!!o.target.validity.patternMismatch)}})]})},g=a=>e.jsxs(re,{gap:"md",children:[e.jsx(x,{size:"h3",children:"Default truncation N=16"}),e.jsx(s,{...a}),e.jsx(x,{size:"h3",children:"Custom truncation N=25"}),e.jsx(s,{...a,maxPillLabelLength:25}),e.jsx(x,{size:"h3",children:"Custom truncation N=5"}),e.jsx(s,{...a,maxPillLabelLength:5})]});g.args={...r.args,value:["123456789012345678901234567890","12345678901234567890","1234567890"]};const h=a=>e.jsx("div",{style:{width:"200px"},children:e.jsx(s,{...a})});h.args={...r.args,value:["12345678901234567890","1234567890"]};const v=a=>{const[V,t]=ae.useState([]);return e.jsxs(re,{gap:"sm",children:[e.jsxs(se,{variant:"warn",onClose:ie,children:["Handling duplicated values is ",e.jsx(te,{children:"up to the consumer"})," for the controlled input."]}),e.jsx(s,{...a,value:V,onValueAdd:(o,b)=>{t(b),i("valueAdd")(b)},onValueRemove:o=>{t(o),i("valueRemove")(o)},onValuesChange:o=>{t(o),i("valuesChange")(o)}}),e.jsxs(le,{gap:"md",children:[e.jsx(j,{onClick:()=>t(["controlledValue1","controlledValue2"]),children:"Add values"}),e.jsx(j,{onClick:()=>t([]),children:"Reset values"})]})]})};v.parameters={screenshot:{skip:!0}};var M,S,C;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var f,P,L;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(L=(P=u.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var N,k,B;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,D,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var w,y,A;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(A=(y=c.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var F,z,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(O=(z=d.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var _,W,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(E=(W=n.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var T,q,G;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [isInvalid, setIsInvalid] = useState(true);
  return <>
      <Label htmlFor="number">Numbers only</Label>
      <MultiValueInput {...args} inputId="emails" inputValue="abc" isInvalid={isInvalid} pattern="[0-9]+" value={['12']} onInputChange={e => {
      setIsInvalid(!!e.target.validity.patternMismatch);
    }} />
    </>;
}`,...(G=(q=I.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <MultiValueInput {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <MultiValueInput {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <MultiValueInput {...args} maxPillLabelLength={5} />
  </Stack>`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`args => <div style={{
  width: '200px'
}}>
    <MultiValueInput {...args} />
  </div>`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [values, setValues] = useState<string[] | undefined>([]);
  return <Stack gap="sm">
      <Banner variant="warn" onClose={noop}>
        Handling duplicated values is <Strong>up to the consumer</Strong> for
        the controlled input.
      </Banner>
      <MultiValueInput {...args} value={values} onValueAdd={(_, v) => {
      setValues(v);
      action('valueAdd')(v);
    }} onValueRemove={v => {
      setValues(v);
      action('valueRemove')(v);
    }} onValuesChange={v => {
      setValues(v);
      action('valuesChange')(v);
    }} />
      <Inline gap="md">
        <Button onClick={() => setValues(['controlledValue1', 'controlledValue2'])}>
          Add values
        </Button>
        <Button onClick={() => setValues([])}>Reset values</Button>
      </Inline>
    </Stack>;
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const La=["Playground","Filled","WithPlaceholder","Focus","Invalid","Disabled","NonClearable","Validation","PillTruncation","PillWrapping","ControlledInput"];export{v as ControlledInput,d as Disabled,u as Filled,m as Focus,c as Invalid,n as NonClearable,g as PillTruncation,h as PillWrapping,r as Playground,I as Validation,p as WithPlaceholder,La as __namedExportsOrder,Pa as default};
//# sourceMappingURL=MultiValueInput.stories-DlcURqfP.js.map
