import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as ae}from"./index-CTjT7uj6.js";import{a as i}from"./chunk-454WOBUV-DWuJqIWT.js";import{M as o}from"./MultiValueInput-Dlu_NSck.js";import"./index-Dg6o9ja_.js";import"./index-DR5XHNKF.js";import"./index-Dyk1lTu2.js";import"./index-CWIhHmXc.js";import"./index-CzcvDuwe.js";import{S as te}from"./index-BIxA6EUN.js";import{L as se}from"./Label-Cl7GCMXQ.js";import{S as re}from"./index-nwGNxYyI.js";import{a as b}from"./Heading-ZGNgTxwI.js";import{B as oe}from"./Banner-DtnSRkzU.js";import{n as ie}from"./noop-XW1TVrX5.js";import{B as M}from"./Button-DBUI4Jbs.js";import{I as le}from"./Inline.enums-DB1XHHNB.js";import"./v4-D8aEg3BZ.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DuIFLBUG.js";import"./index-DT7C7tog.js";import"./index-C7IrpltL.js";import"./index-CECIl5yl.js";import"./index-uyLpYamY.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DCTvgOp1.js";import"./Icon-B9Y_mYIL.js";import"./index-BRV0Se7Z.js";import"./useLogger-BRbW6gx4.js";import"./index-D3MmMaIe.js";import"./Pill-DnpINHG-.js";import"./PillRemoveButton-BrovzdXu.js";import"./isNonEmptyArray-C7jxCePI.js";import"./isNotEmpty-DtQp8gvm.js";import"./isNonEmptyString-DdXKNJGj.js";import"./isNotNull-lH5ks6fm.js";import"./isNull-DtrhChS2.js";import"./trim-CESW8YKz.js";import"./take--bNN_mdr.js";import"./Padbox-DcClumXL.js";import"./index-BbaO5Nb4.js";import"./Cluster-C2ONgLd-.js";import"./index-DOqtWUVi.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CY6BXmKt.js";import"./Spinner-B9l4ubnC.js";import"./index-DUZS25O0.js";import"./CloseButton-g4GwbAmN.js";import"./IconButton-BfF2jWqp.js";import"./components-BojOatfK.js";import"./index-fbS_tvU0.js";import"./isNotNilOrEmpty-BN_BASDr.js";import"./isNilOrEmpty-B_sjZgCr.js";import"./isNil-DBsJ5Qwu.js";import"./useContainerQuery-DqIcbuCK.js";const Ma={component:o,title:"components/forms/MultiValueInput"},l=a=>e.jsx(o,{...a,"aria-label":"MultiValueInput"}),r=l.bind({});r.args={onValueAdd:i("OnValueAdd"),onValueRemove:i("OnValueRemove"),onValuesChange:i("OnValuesChange"),onInputChange:i("OnInputChange"),valuesDelimiter:",",onPaste:a=>(a.clipboardData||window.clipboardData).getData("text").split(";").filter(t=>t!=="3").join(";")};const u=l.bind({});u.args={...r.args,value:["john@example.com","jane@example.com"]};const p=l.bind({});p.args={...r.args,placeholder:"Share with..."};const m=l.bind({});m.args={...r.args,isFocused:!0,className:"focus-within"};const c=l.bind({});c.args={...r.args,isInvalid:!0};const d=l.bind({});d.args={...r.args,isDisabled:!0};const n=l.bind({});n.args={...r.args,isClearable:!1,value:["john@example.com","jane@example.com"]};n.title="Non-clearable";const I=a=>{const[v,t]=ae.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(se,{htmlFor:"number",children:"Numbers only"}),e.jsx(o,{...a,inputId:"emails",inputValue:"abc",isInvalid:v,pattern:"[0-9]+",value:["12"],onInputChange:s=>{t(!!s.target.validity.patternMismatch)}})]})},g=a=>e.jsxs(re,{gap:"md",children:[e.jsx(b,{size:"h3",children:"Default truncation N=16"}),e.jsx(o,{...a}),e.jsx(b,{size:"h3",children:"Custom truncation N=25"}),e.jsx(o,{...a,maxPillLabelLength:25}),e.jsx(b,{size:"h3",children:"Custom truncation N=5"}),e.jsx(o,{...a,maxPillLabelLength:5})]});g.args={...r.args,value:["123456789012345678901234567890","12345678901234567890","1234567890"]};const h=a=>e.jsx("div",{style:{width:"200px"},children:e.jsx(o,{...a})});h.args={...r.args,value:["12345678901234567890","1234567890"]};const V=a=>{const[v,t]=ae.useState([]);return e.jsxs(re,{gap:"sm",children:[e.jsxs(oe,{variant:"warn",onClose:ie,children:["Handling duplicated values is ",e.jsx(te,{children:"up to the consumer"})," for the controlled input."]}),e.jsx(o,{...a,value:v,onValueAdd:(s,x)=>{t(x),i("valueAdd")(x)},onValueRemove:s=>{t(s),i("valueRemove")(s)},onValuesChange:s=>{t(s),i("valuesChange")(s)}}),e.jsxs(le,{gap:"md",children:[e.jsx(M,{onClick:()=>t(["controlledValue1","controlledValue2"]),children:"Add values"}),e.jsx(M,{onClick:()=>t([]),children:"Reset values"})]})]})};V.parameters={screenshot:{skip:!0}};var j,S,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var f,P,L;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(L=(P=u.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var N,k,B;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var D,H,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var w,y,A;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(A=(y=c.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var F,z,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(O=(z=d.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var _,W,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(E=(W=n.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var T,q,G;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
  </div>`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(ee=($=V.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ja=["Playground","Filled","WithPlaceholder","Focus","Invalid","Disabled","NonClearable","Validation","PillTruncation","PillWrapping","ControlledInput"];export{V as ControlledInput,d as Disabled,u as Filled,m as Focus,c as Invalid,n as NonClearable,g as PillTruncation,h as PillWrapping,r as Playground,I as Validation,p as WithPlaceholder,ja as __namedExportsOrder,Ma as default};
//# sourceMappingURL=MultiValueInput.stories-Cyu29ge0.js.map
