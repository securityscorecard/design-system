import{j as n}from"./jsx-runtime-BbjHj44Y.js";import{r as m}from"./index-C6mWTJJr.js";import{D as r}from"./DateRangePicker-DV24VmNq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-KrO6VulE.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./index-TxnSaTdc.js";import"./index-CVyJwDg7.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CWFZYRor.js";import"./usePopper-BmgVlhkC.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-CbztWzgW.js";import"./index-Bfs0wQhB.js";import"./Padbox-hEmkrqba.js";import"./index-CcmHmzDo.js";import"./prop-gA1VFyoz.js";import"./Inline-B7NzMb1T.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./useLogger-O6XA1hQU.js";import"./DSProvider-CTEb0Eap.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./IconButton-D6uxzsW5.js";import"./components-DsRWzzQN.js";import"./index-CmE5poE7.js";import"./Icon-BGVJaxc5.js";import"./index-DRm3KUNF.js";import"./index-Dk74W0Oi.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./noop-CGDyLuY9.js";import"./isNotNull-CploqAht.js";import"./isNull-C_3YYFwP.js";const se={title:"components/DateRangePicker",component:r,argTypes:{minDate:{control:"date"},maxDate:{control:"date"}},decorators:[e=>n.jsx("div",{style:{paddingBottom:"300px"},children:e()})]},t=e=>n.jsx(r,{...e});t.parameters={chromatic:{disable:!0}};t.args={maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01")};t.parameters={screenshot:{skip:!0}};const o=()=>{const[e,a]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:a})},s=()=>{const[e,a]=m.useState({startDate:new Date("2021/03/05"),endDate:new Date("2021/03/10")});return n.jsx(r,{maxDate:new Date("2021/03/28"),minDate:new Date("2021/03/01"),value:{startDate:e==null?void 0:e.startDate,endDate:e==null?void 0:e.endDate},onChange:a})},D=()=>{const[e,a]=m.useState({startDate:null,endDate:null});return n.jsx(r,{maxDate:new Date("2021/03/20"),minDate:new Date("2021/03/10"),placeholder:{startDate:"Custom placeholder start date",endDate:"Custom placeholder end date"},value:e,onChange:a})};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"args => <DateRangePicker {...args} />",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(w=(x=D.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const De=["Playground","Default","WithDefaultValue","WithCustomPlaceholder"];export{o as Default,t as Playground,D as WithCustomPlaceholder,s as WithDefaultValue,De as __namedExportsOrder,se as default};
//# sourceMappingURL=DateRangePicker.stories-CLAV9iaX.js.map
