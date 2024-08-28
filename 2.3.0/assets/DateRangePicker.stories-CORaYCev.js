import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{r as D}from"./index-CTjT7uj6.js";import{D as m}from"./DateRangePicker-Bj1zzAmS.js";import"./index-CW5Yy7zc.js";import"./index-BRV0Se7Z.js";import"./index-DzoB_gWM.js";import"./index-DHZ2Z4DF.js";import"./index-C7IrpltL.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./index-DIVhMF2i.js";import"./usePopper-B6Vq3Q19.js";import"./index-t-vajJ9r.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./useLogger-BNYGJgyi.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./index-CoMEwqFC.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-DZoBl2Wq.js";import"./flex.types-BrkCVx66.js";import"./prop-BgpcU4fO.js";import"./Inline-DPdVYO7t.js";import"./Cluster-DaqHgnAc.js";import"./index-beAa1auE.js";import"./checkCircleSolid-D_DFWg_A.js";import"./noop-zq4Ga5XN.js";import"./isNotNull-DFX8Jk9A.js";import"./isNull-Ddx7qw_y.js";const ae={title:"components/DateRangePicker",component:m,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>s.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},a=e=>s.jsx(m,{...e});a.parameters={chromatic:{disable:!0}};a.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};a.parameters={screenshot:{skip:!0}};const n=()=>{const[e,t]=D.useState({startDate:null,endDate:null});return s.jsx(m,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},r=()=>{const[e,t]=D.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return s.jsx(m,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},o=()=>{const[e,t]=D.useState({startDate:null,endDate:null});return s.jsx(m,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:t})};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithDefaultValue"};o.__docgenInfo={description:"",methods:[],displayName:"WithCustomPlaceholder"};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const te=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{n as Default,a as Playground,o as WithCustomPlaceholder,r as WithDefaultValue,te as __namedExportsOrder,ae as default};
//# sourceMappingURL=DateRangePicker.stories-CORaYCev.js.map
