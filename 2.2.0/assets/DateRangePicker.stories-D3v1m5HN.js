import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{D as r}from"./DateRangePicker-CR8DGhpO.js";import"./BaseDateRangePicker-DYt_PHqx.js";import"./index-BRV0Se7Z.js";import"./space-1LtLrmuu.js";import"./SingleDatePicker-DIUObEQq.js";import"./index-C7IrpltL.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./index-DIVhMF2i.js";import"./usePopper-B6Vq3Q19.js";import"./Icon-4JNizDXH.js";import"./index-DFvsTZbx.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./Surface-DpLLkhSd.js";import"./flex.types-BrkCVx66.js";import"./prop-DG2n0FAQ.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./DSThemeOverride-BduN1ykm.js";import"./noop-CLoMDX4X.js";import"./isNotNull-B1xFkUZ3.js";const Y={title:"components/DateRangePicker",component:r,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>n.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},a=e=>n.jsx(r,{...e});a.parameters={chromatic:{disable:!0}};a.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};a.parameters={screenshot:{skip:!0}};const o=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},s=()=>{const[e,t]=m.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},D=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:t})};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(w=(x=D.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const Z=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{o as Default,a as Playground,D as WithCustomPlaceholder,s as WithDefaultValue,Z as __namedExportsOrder,Y as default};
