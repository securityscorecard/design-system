import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as O}from"./index-ClcD9ViR.js";import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-DI7bb_pl.js";import"./index-DMg9egjD.js";import{S as d}from"./SearchBar-C_VIKsY4.js";import{S as z}from"./index-91If6lFi.js";import{I as A}from"./Inline.enums-ClW1TTRQ.js";import{B as g}from"./Button-BbBWJFEX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-DxcpycWO.js";import"./Cluster-kZdd8a--.js";import"./prop-C6y-wj7q.js";import"./useLogger-CA2WAjqk.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-z-p0qX8L.js";import"./index-CajKmcpa.js";import"./index-BgMjzImo.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-tvWtIm7z.js";import"./react-router-dom-Cqtu-Xon.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";import"./index-C9F-9Xmi.js";import"./Input-B5mrWinm.js";import"./isNonEmptyString-BwD4DoTb.js";import"./isNotEmpty-De95qR8d.js";import"./isNotNilOrEmpty-CzgeZFyQ.js";import"./isNilOrEmpty-DrV01zGr.js";import"./isNil-qfCNC9HL.js";const Ar={title:"components/forms/SearchBar",component:d,argTypes:{defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}},onChange:{control:{disable:!0}}}},a=n=>e.jsx(d,{...n}),r=a.bind({});r.args={onChange:l("onChange"),onClear:l("onClear"),onSearch:l("onSearch")};r.parameters={screenshot:{skip:!0}};const p=a.bind({}),o=a.bind({});o.args={...r.args,defaultValue:"some default search query"};const s=a.bind({});s.args={isDisabled:!0};const i=a.bind({});i.args={value:"search query",isSearching:!0};const t=a.bind({});t.args={hasDebouncedSearch:!0,debounceTime:300};t.parameters={screenshot:{skip:!0}};const m=n=>{const[_,c]=O.useState(""),w=()=>new Promise(u=>{setTimeout(()=>{u()},2e3)});return e.jsxs(z,{gap:"sm",children:[e.jsx(d,{...n,value:_,onChange:u=>{c(u.target.value)},onClear:()=>c(""),onSearch:w}),e.jsxs(A,{gap:"md",children:[e.jsx(g,{onClick:()=>c("controlledValue1"),children:"Set query"}),e.jsx(g,{onClick:()=>c(""),children:"Reset query"})]})]})};m.parameters={screenshot:{skip:!0}};var h,S,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"args => <SearchBar {...args} />",...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var B,b,f;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:"args => <SearchBar {...args} />",...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,x,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:"args => <SearchBar {...args} />",...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,q,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:"args => <SearchBar {...args} />",...(v=(q=s.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var j,I,Q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:"args => <SearchBar {...args} />",...(Q=(I=i.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var V,P,T;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:"args => <SearchBar {...args} />",...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,E,R;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const Fr=["Playground","DefaultState","WithDefaultValue","Disabled","Searching","WithDebouncedSearch","ControlledInput"];export{m as ControlledInput,p as DefaultState,s as Disabled,r as Playground,i as Searching,t as WithDebouncedSearch,o as WithDefaultValue,Fr as __namedExportsOrder,Ar as default};
//# sourceMappingURL=SearchBar.stories-Bey7FNfz.js.map
