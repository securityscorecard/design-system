import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as D}from"./index-BwDkhjyp.js";import{D as m}from"./DateRangePicker-BKjq0nKw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CWyDk__5.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CZhWgpLF.js";import"./index-CVyJwDg7.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./index-DhoXBIRq.js";import"./usePopper-CU1jfDfa.js";import"./index-dWynxCtG.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./index-Bv39VcRu.js";import"./index-BdgNbBlP.js";import"./Padbox-CDFfn736.js";import"./index-Cf7gdOSN.js";import"./prop-CTu21A3U.js";import"./Inline.enums-B6aHLh-0.js";import"./Cluster-DBXy5O-6.js";import"./useLogger-CvwVUQJ2.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./IconButton-DoYGB1w0.js";import"./components-BQVXU2CE.js";import"./index-DP_jSIOV.js";import"./Icon-Rfg63q_9.js";import"./index-BsP7FXMl.js";import"./index-Dk74W0Oi.js";import"./index-gqxQzocl.js";import"./Spinner-K1HJcvQM.js";import"./noop-CdhuOQYG.js";import"./isNotNull-CGNDL-_A.js";import"./isNull-D8kYROfs.js";const De={title:"components/DateRangePicker",component:m,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>s.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},t=e=>s.jsx(m,{...e});t.parameters={chromatic:{disable:!0}};t.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};t.parameters={screenshot:{skip:!0}};const n=()=>{const[e,a]=D.useState({startDate:null,endDate:null});return s.jsx(m,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:a})},r=()=>{const[e,a]=D.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return s.jsx(m,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:a})},o=()=>{const[e,a]=D.useState({startDate:null,endDate:null});return s.jsx(m,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:a})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithDefaultValue"};o.__docgenInfo={description:"",methods:[],displayName:"WithCustomPlaceholder"};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,c,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: null,
    endDate: null
  });
  return <DateRangePicker maxDate={new Date('2021/03/28')} minDate={new Date('2021/03/01')} value={{
    startDate: dateRange?.startDate,
    endDate: dateRange?.endDate
  }} onChange={handleChangeDateRange} />;
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,R;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: new Date('2021/03/05'),
    endDate: new Date('2021/03/10')
  });
  return <DateRangePicker maxDate={new Date('2021/03/28')} minDate={new Date('2021/03/01')} value={{
    startDate: dateRange?.startDate,
    endDate: dateRange?.endDate
  }} onChange={handleChangeDateRange} />;
}`,...(R=(h=r.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var C,x,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [dateRange, handleChangeDateRange] = useState<BaseDateRange>({
    startDate: null,
    endDate: null
  });
  return <DateRangePicker maxDate={new Date('2021/03/20')} minDate={new Date('2021/03/10')} placeholder={{
    startDate: 'Custom placeholder start date',
    endDate: 'Custom placeholder end date'
  }} value={dateRange} onChange={handleChangeDateRange} />;
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const ie=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{n as Default,t as Playground,o as WithCustomPlaceholder,r as WithDefaultValue,ie as __namedExportsOrder,De as default};
//# sourceMappingURL=DateRangePicker.stories-tMwBacQY.js.map
