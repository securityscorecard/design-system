import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as m}from"./index-BwDkhjyp.js";import{D as r}from"./DateRangePicker-Cp7zQmwO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DWQBsPvt.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-Bg2Nu0Ir.js";import"./index-CVyJwDg7.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./index-DhoXBIRq.js";import"./usePopper-CU1jfDfa.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./index-Dii5kbWS.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./index-D5s2qWpv.js";import"./prop-BraK_cHP.js";import"./Inline.enums-Dg90oR_c.js";import"./Cluster-hENBaGjg.js";import"./useLogger-DBrb0845.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./IconButton-DqReE266.js";import"./components-D4rQYKk1.js";import"./index-KsdgvOjZ.js";import"./Icon-CYAM9BRr.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./index-sYlzTV1h.js";import"./Spinner-CaS15r7b.js";import"./noop-HYpN8PIr.js";import"./isNotNull-DgOaR-Mp.js";import"./isNull-CY6zyd1L.js";const De={title:"components/DateRangePicker",component:r,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>n.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},t=e=>n.jsx(r,{...e});t.parameters={chromatic:{disable:!0}};t.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};t.parameters={screenshot:{skip:!0}};const o=()=>{const[e,a]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:a})},s=()=>{const[e,a]=m.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:a})},D=()=>{const[e,a]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:a})};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(w=(x=D.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const me=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{o as Default,t as Playground,D as WithCustomPlaceholder,s as WithDefaultValue,me as __namedExportsOrder,De as default};
//# sourceMappingURL=DateRangePicker.stories-CD6sRw3V.js.map
