import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as m}from"./index-ClcD9ViR.js";import{D as r}from"./DateRangePicker-DqLzwF1N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D5HBNoDh.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-CxLbOpYm.js";import"./index-DxcpycWO.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-_KdZNTQd.js";import"./usePopper-m9aO9_-k.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-DJDNSEQh.js";import"./index-N2e0qnpI.js";import"./Padbox-CBhO8TxM.js";import"./index-Cl2_DJzs.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-B2f8ESXY.js";import"./Cluster-kZdd8a--.js";import"./useLogger-CA2WAjqk.js";import"./DSProvider-Cqa5do1Y.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-Cd40Tx_f.js";import"./components-BlntQQgH.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-CajKmcpa.js";import"./index-DbwGX_n3.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./noop-BL97hhQA.js";import"./isNotNull-Bi0ik2MG.js";import"./isNull-ByzPK5V3.js";const oe={title:"components/DateRangePicker",component:r,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>n.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},a=e=>n.jsx(r,{...e});a.parameters={chromatic:{disable:!0}};a.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};a.parameters={screenshot:{skip:!0}};const o=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},s=()=>{const[e,t]=m.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},D=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:t})};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: null,
    endDate: null
  });
  return <DateRangePicker maxDate={new Date('2021/03/28')} minDate={new Date('2021/03/01')} value={{
    startDate: dateRange?.startDate,
    endDate: dateRange?.endDate
  }} onChange={handleChangeDateRange} />;
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,R;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: new Date('2021/03/05'),
    endDate: new Date('2021/03/10')
  });
  return <DateRangePicker maxDate={new Date('2021/03/28')} minDate={new Date('2021/03/01')} value={{
    startDate: dateRange?.startDate,
    endDate: dateRange?.endDate
  }} onChange={handleChangeDateRange} />;
}`,...(R=(h=s.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var C,x,w;D.parameters={...D.parameters,docs:{...(C=D.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: null,
    endDate: null
  });
  return <DateRangePicker maxDate={new Date('2021/03/20')} minDate={new Date('2021/03/10')} placeholder={{
    startDate: 'Custom placeholder start date',
    endDate: 'Custom placeholder end date'
  }} value={dateRange} onChange={handleChangeDateRange} />;
}`,...(w=(x=D.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const se=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{o as Default,a as Playground,D as WithCustomPlaceholder,s as WithDefaultValue,se as __namedExportsOrder,oe as default};
//# sourceMappingURL=DateRangePicker.stories-D2lo21Np.js.map
