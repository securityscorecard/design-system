import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as O}from"./index-CTjT7uj6.js";import{a as l}from"./chunk-454WOBUV-DWuJqIWT.js";import"./index-h7qFssqm.js";import"./index-BKljQjtI.js";import{S as d}from"./SearchBar-CZUvBmr8.js";import{S as z}from"./index-CISbCLO7.js";import{B as g}from"./Button-BlAc9jyq.js";import{I as A}from"./Inline.enums-Dxp6-wcT.js";import"./v4-D8aEg3BZ.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DT7C7tog.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";import"./index-C7IrpltL.js";import"./Cluster-DithqAUq.js";import"./prop-BK8rocxd.js";import"./useLogger-BRbW6gx4.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./index-fDJ_58mZ.js";import"./index-uyLpYamY.js";import"./index-CECIl5yl.js";import"./isFunction-CoLsl8nV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-YRwpEbcA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-CgXEnHMf.js";import"./Spinner-tB3LDXpW.js";import"./index-CHR41AfE.js";import"./Icon-CG4jHxtF.js";import"./isNull-DtrhChS2.js";import"./isNotNull-lH5ks6fm.js";import"./noop-XW1TVrX5.js";import"./index-B3vvNXEl.js";import"./Input-DBo7gmZx.js";import"./isNonEmptyString-DdXKNJGj.js";import"./isNotEmpty-DtQp8gvm.js";import"./isNotNilOrEmpty-BN_BASDr.js";import"./isNilOrEmpty-B_sjZgCr.js";import"./isNil-DBsJ5Qwu.js";const _r={title:"components/forms/SearchBar",component:d,argTypes:{defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}},onChange:{control:{disable:!0}}}},t=p=>e.jsx(d,{...p}),r=t.bind({});r.args={onChange:l("onChange"),onClear:l("onClear"),onSearch:l("onSearch")};r.parameters={screenshot:{skip:!0}};const n=t.bind({}),o=t.bind({});o.args={...r.args,defaultValue:"some default search query"};const s=t.bind({});s.args={isDisabled:!0};const c=t.bind({});c.args={value:"search query",isSearching:!0};const a=t.bind({});a.args={hasDebouncedSearch:!0,debounceTime:300};a.parameters={screenshot:{skip:!0}};const i=p=>{const[_,m]=O.useState(""),w=()=>new Promise(u=>{setTimeout(()=>{u()},2e3)});return e.jsxs(z,{gap:"sm",children:[e.jsx(d,{...p,value:_,onChange:u=>{m(u.target.value)},onClear:()=>m(""),onSearch:w}),e.jsxs(A,{gap:"md",children:[e.jsx(g,{onClick:()=>m("controlledValue1"),children:"Set query"}),e.jsx(g,{onClick:()=>m(""),children:"Reset query"})]})]})};i.parameters={screenshot:{skip:!0}};var h,S,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"args => <SearchBar {...args} />",...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var B,b,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:"args => <SearchBar {...args} />",...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,x,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:"args => <SearchBar {...args} />",...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,q,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:"args => <SearchBar {...args} />",...(v=(q=s.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var j,I,Q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:"args => <SearchBar {...args} />",...(Q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var V,P,T;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:"args => <SearchBar {...args} />",...(T=(P=a.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,E,R;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [query, setQuery] = useState('');
  const handleSearch = (): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  return <Stack gap="sm">
      <SearchBar {...args} value={query} onChange={e => {
      setQuery(e.target.value);
    }} onClear={() => setQuery('')} onSearch={handleSearch} />
      <Inline gap="md">
        <Button onClick={() => setQuery('controlledValue1')}>Set query</Button>
        <Button onClick={() => setQuery('')}>Reset query</Button>
      </Inline>
    </Stack>;
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const wr=["Playground","DefaultState","WithDefaultValue","Disabled","Searching","WithDebouncedSearch","ControlledInput"];export{i as ControlledInput,n as DefaultState,s as Disabled,r as Playground,c as Searching,a as WithDebouncedSearch,o as WithDefaultValue,wr as __namedExportsOrder,_r as default};
//# sourceMappingURL=SearchBar.stories-CeVeJ271.js.map
