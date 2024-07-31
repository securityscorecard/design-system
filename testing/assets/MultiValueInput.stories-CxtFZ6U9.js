import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as ae}from"./index-CTjT7uj6.js";import{a as i}from"./chunk-454WOBUV-DWuJqIWT.js";import{M as o}from"./MultiValueInput-D7lNkhxc.js";import{L as te}from"./Label-BXbsNi4R.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import{S as re}from"./Stack-vWwwEz_d.js";import{I as se}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{B as M}from"./Button-CgUf0TwU.js";import{B as oe}from"./Banner-BQpk2MBp.js";import{a as b}from"./Heading-5wHX6smU.js";import{S as ie}from"./Text-CQej7zPl.js";import{n as ne}from"./noop-CRTpovv1.js";import"./v4-D8aEg3BZ.js";import"./space-BY85GhUc.js";import"./index-BRV0Se7Z.js";import"./index-Bl_jQQ83.js";import"./index-C7IrpltL.js";import"./Icon-DSPfH_8v.js";import"./index-DFvsTZbx.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./Pill-Dq2X2jGR.js";import"./PillRemoveButton-D2CC_PxY.js";import"./PillLabel-yycd7XxX.js";import"./gt-bFkVvxSK.js";import"./isNonEmptyArray-CPhLVV4V.js";import"./isNotEmpty-DmRwknIn.js";import"./isArray-B7wtxCYk.js";import"./isFunction-DKkHXutz.js";import"./pluck-CGJirjHu.js";import"./prop-Cw0eZkJ_.js";import"./both-CLVeTvyf.js";import"./isEmptyArray-Ckn0nrLG.js";import"./isNonEmptyString-B_Cuyr9S.js";import"./isNotNull-D2Wrs3cn.js";import"./trim-6_CYq9V8.js";import"./take-ZeMSspOg.js";import"./flex.types-BrkCVx66.js";import"./BaseButton-Bl-0NeNF.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-b5BYo8Sk.js";import"./action.types-CSW_hKjS.js";import"./customPropTypes-Bu8yd8yn.js";import"./Button.enums-P6KVfN9D.js";import"./CloseButton-B_hKnNOh.js";import"./BaseToastBanner-jv3xUq9M.js";import"./isNotNilOrEmpty-BG4ifY0O.js";import"./isNilOrEmpty-4-uKJ3Xu.js";import"./isNil-BfRYDDcR.js";import"./useContainerQuery-DwI_GXhF.js";const Ia={component:o,title:"components/forms/MultiValueInput"},n=a=>e.jsx(o,{...a,"aria-label":"MultiValueInput"}),r=n.bind({});r.args={onValueAdd:i("OnValueAdd"),onValueRemove:i("OnValueRemove"),onValuesChange:i("OnValuesChange"),onInputChange:i("OnInputChange"),valuesDelimiter:",",onPaste:a=>(a.clipboardData||window.clipboardData).getData("text").split(";").filter(t=>t!=="3").join(";")};const c=n.bind({});c.args={...r.args,value:["john@example.com","jane@example.com"]};const d=n.bind({});d.args={...r.args,placeholder:"Share with..."};const g=n.bind({});g.args={...r.args,isFocused:!0,className:"focus-within"};const h=n.bind({});h.args={...r.args,isInvalid:!0};const I=n.bind({});I.args={...r.args,isDisabled:!0};const l=n.bind({});l.args={...r.args,isClearable:!1,value:["john@example.com","jane@example.com"]};l.title="Non-clearable";const V=a=>{const[v,t]=ae.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(te,{htmlFor:"number",children:"Numbers only"}),e.jsx(o,{...a,inputId:"emails",inputValue:"abc",isInvalid:v,pattern:"[0-9]+",value:["12"],onInputChange:s=>{t(!!s.target.validity.patternMismatch)}})]})},u=a=>e.jsxs(re,{gap:"md",children:[e.jsx(b,{size:"h3",children:"Default truncation N=16"}),e.jsx(o,{...a}),e.jsx(b,{size:"h3",children:"Custom truncation N=25"}),e.jsx(o,{...a,maxPillLabelLength:25}),e.jsx(b,{size:"h3",children:"Custom truncation N=5"}),e.jsx(o,{...a,maxPillLabelLength:5})]});u.args={...r.args,value:["123456789012345678901234567890","12345678901234567890","1234567890"]};const p=a=>e.jsx("div",{style:{width:"200px"},children:e.jsx(o,{...a})});p.args={...r.args,value:["12345678901234567890","1234567890"]};const m=a=>{const[v,t]=ae.useState([]);return e.jsxs(re,{gap:"sm",children:[e.jsxs(oe,{variant:"warn",onClose:ne,children:["Handling duplicated values is ",e.jsx(ie,{children:"up to the consumer"})," for the controlled input."]}),e.jsx(o,{...a,value:v,onValueAdd:(s,x)=>{t(x),i("valueAdd")(x)},onValueRemove:s=>{t(s),i("valueRemove")(s)},onValuesChange:s=>{t(s),i("valuesChange")(s)}}),e.jsxs(se,{gap:"md",children:[e.jsx(M,{onClick:()=>t(["controlledValue1","controlledValue2"]),children:"Add values"}),e.jsx(M,{onClick:()=>t([]),children:"Reset values"})]})]})};m.parameters={screenshot:{skip:!0}};V.__docgenInfo={description:"",methods:[],displayName:"Validation"};u.__docgenInfo={description:"",methods:[],displayName:"PillTruncation"};p.__docgenInfo={description:"",methods:[],displayName:"PillWrapping"};m.__docgenInfo={description:"",methods:[],displayName:"ControlledInput"};var j,f,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,N,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,y,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(L=(y=d.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var k,B,D;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(D=(B=g.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,R,w;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(w=(R=h.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var A,F,z;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(z=(F=I.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var O,W,T;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:'args => <MultiValueInput {...args} aria-label="MultiValueInput" />',...(T=(W=l.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var E,q,G;V.parameters={...V.parameters,docs:{...(E=V.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [isInvalid, setIsInvalid] = useState(true);
  return <>
      <Label htmlFor="number">Numbers only</Label>
      <MultiValueInput {...args} inputId="emails" inputValue="abc" isInvalid={isInvalid} pattern="[0-9]+" value={['12']} onInputChange={e => {
      setIsInvalid(!!e.target.validity.patternMismatch);
    }} />
    </>;
}`,...(G=(q=V.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`args => <Stack gap="md">
    <Heading size="h3">Default truncation N=16</Heading>
    <MultiValueInput {...args} />
    <Heading size="h3">Custom truncation N=25</Heading>
    <MultiValueInput {...args} maxPillLabelLength={25} />
    <Heading size="h3">Custom truncation N=5</Heading>
    <MultiValueInput {...args} maxPillLabelLength={5} />
  </Stack>`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`args => <div style={{
  width: '200px'
}}>
    <MultiValueInput {...args} />
  </div>`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Va=["Playground","Filled","WithPlaceholder","Focus","Invalid","Disabled","NonClearable","Validation","PillTruncation","PillWrapping","ControlledInput"];export{m as ControlledInput,I as Disabled,c as Filled,g as Focus,h as Invalid,l as NonClearable,u as PillTruncation,p as PillWrapping,r as Playground,V as Validation,d as WithPlaceholder,Va as __namedExportsOrder,Ia as default};
