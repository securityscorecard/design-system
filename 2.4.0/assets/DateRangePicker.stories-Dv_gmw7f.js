import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{D as r}from"./DateRangePicker-xjbTdUzL.js";import"./index-CRQgXgJf.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DzAsfYvZ.js";import"./index-B2hM4AYK.js";import"./index-C7IrpltL.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./index-DIVhMF2i.js";import"./usePopper-B6Vq3Q19.js";import"./index-uyLpYamY.js";import"./index-DoZinuF4.js";import"./Icon-DCTBW-fe.js";import"./index-BRV0Se7Z.js";import"./useLogger-IjsioYUQ.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./index-BfLWfhlY.js";import"./index-BawZj8GX.js";import"./Padbox-ugjOsLS7.js";import"./index-BcSnSfQB.js";import"./flex.types-BrkCVx66.js";import"./prop-CePbk9wh.js";import"./Inline-Cg9jPAAE.js";import"./Cluster-HoiIP47J.js";import"./index-4aEyDaIq.js";import"./isFunction-BtTpAfvx.js";import"./checkCircleSolid-CXNAtMl8.js";import"./noop-00w40azb.js";import"./isNotNull-DhaqNAj6.js";import"./isNull-CdyG0a3O.js";const ne={title:"components/DateRangePicker",component:r,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>n.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},a=e=>n.jsx(r,{...e});a.parameters={chromatic:{disable:!0}};a.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};a.parameters={screenshot:{skip:!0}};const o=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},s=()=>{const[e,t]=m.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:t})},D=()=>{const[e,t]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:t})};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(w=(x=D.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const re=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{o as Default,a as Playground,D as WithCustomPlaceholder,s as WithDefaultValue,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=DateRangePicker.stories-Dv_gmw7f.js.map
