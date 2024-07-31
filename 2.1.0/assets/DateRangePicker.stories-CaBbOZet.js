import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as m}from"./index-BwDkhjyp.js";import{D}from"./DateRangePicker-DV-198sQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./BaseDateRangePicker-On7sDHGq.js";import"./index-Dk74W0Oi.js";import"./space-B9R18Mwn.js";import"./SingleDatePicker-BSv1bju8.js";import"./index-CVyJwDg7.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./index-DhoXBIRq.js";import"./usePopper-CU1jfDfa.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./noop-Bk6XfTLC.js";import"./isNotNull-C0-yEnlk.js";const Y={title:"components/DateRangePicker",component:D,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>s.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},a=e=>s.jsx(D,{...e});a.parameters={chromatic:{disable:!0}};a.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};a.parameters={screenshot:{skip:!0}};const n=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return s.jsx(D,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},r=()=>{const[e,t]=m.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return s.jsx(D,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},o=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return s.jsx(D,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:t})};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithDefaultValue"};o.__docgenInfo={description:"",methods:[],displayName:"WithCustomPlaceholder"};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const Z=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{n as Default,a as Playground,o as WithCustomPlaceholder,r as WithDefaultValue,Z as __namedExportsOrder,Y as default};
