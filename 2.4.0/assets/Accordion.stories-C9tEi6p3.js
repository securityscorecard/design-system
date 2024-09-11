import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as w}from"./index-CTjT7uj6.js";import"./index-BfLWfhlY.js";import"./index-BiSJ8lhQ.js";import"./index-Jlc1e3xA.js";import{A as u}from"./Accordion-D5wayqfS.js";import{T as N,a as P}from"./index-BiHv5IcS.js";import{P as z}from"./index-CdPlJU3q.js";import{B as d}from"./Button-CsnXVoMf.js";import{i as l}from"./useLogger-IjsioYUQ.js";import{H as _}from"./HexGrade-B6_sr-Xz.js";import{I as E}from"./Inline-Cg9jPAAE.js";import{S as v}from"./index-BcSnSfQB.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DzAsfYvZ.js";import"./index-BRV0Se7Z.js";import"./index-BawZj8GX.js";import"./Padbox-ugjOsLS7.js";import"./index-C7IrpltL.js";import"./Cluster-HoiIP47J.js";import"./flex.types-BrkCVx66.js";import"./prop-CePbk9wh.js";import"./index-Cq8-NMvO.js";import"./index-uyLpYamY.js";import"./index-4aEyDaIq.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./isFunction-BtTpAfvx.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-CwDqj7nA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-DNjKNlmW.js";import"./Spinner-qeMxdFSS.js";import"./index-DoZinuF4.js";import"./Icon-DCTBW-fe.js";import"./isNull-CdyG0a3O.js";import"./isNotNull-DhaqNAj6.js";import"./noop-00w40azb.js";import"./propEq-CaTkknlJ.js";import"./spacing.types-C9Yu1wmA.js";import"./defaultTo-GRbujBPe.js";const Pt={title:"components/Accordion",component:u,argTypes:{isCollapsedOnOpen:{control:{type:"boolean"}},openItems:{description:"Array of ids that can be changed by external state"}}},F=[{id:1,title:"Item 1",content:"Content",isOpen:!0},{id:2,title:"Item 2",content:"Content"}],c=e=>t.jsx(u,{...e}),o=c.bind({});o.args={items:F};o.parameters={screenshot:{skip:!0}};const s=c.bind({});s.args=o.args;const r=c.bind({});r.args={...o.args,isCollapsedOnOpen:!1};r.storyName="Does not collapse on open";r.parameters={screenshot:{skip:!0}};const H=()=>t.jsxs(v,{gap:"sm",children:[t.jsxs(E,{align:"center",gap:"md",children:[t.jsx(_,{grade:"A",size:24}),t.jsx(N,{size:P.lg,children:"Company Name"})]}),t.jsx(z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]}),n=c.bind({});n.args={items:[{id:0,title:t.jsx(H,{}),content:"Content",isOpen:!0}]};const i=()=>{const[e,m]=w.useState([]),p=a=>e.includes(a)?m([...e]):m([a]),D=[{id:"first",title:"Item 1",content:"Content",isOpen:!0},{id:"second",title:"Item 2",content:"Content"},{id:"third",title:"Item 3",content:"Content"}];return t.jsxs(E,{gap:"xl",children:[t.jsxs(v,{gap:"sm",justify:"flex-start",children:[t.jsxs(d,{variant:"text",onClick:()=>p("first"),children:[l("first",e)&&"->"," First section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("second"),children:[l("second",e)&&"->"," Second section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("third"),children:[l("third",e)&&"->"," Third section"]})]}),t.jsx(u,{isCollapsedOnOpen:!1,items:D,openItems:e,onChange:a=>{m(a)}})]})};i.parameters={screenshot:{skip:!0}};var g,I,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Accordion {...args} />",...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var h,C,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Accordion {...args} />",...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var O,j,k;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Accordion {...args} />",...(k=(j=r.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,S,y;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:"args => <Accordion {...args} />",...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,b,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);
  const handleOnClick = (id: string) => {
    if (!openItems.includes(id)) {
      const newItems = [id];
      return setOpenItems(newItems);
    }
    return setOpenItems([...openItems]);
  };
  const localItems = [{
    id: 'first',
    title: 'Item 1',
    content: 'Content',
    isOpen: true
  }, {
    id: 'second',
    title: 'Item 2',
    content: 'Content'
  }, {
    id: 'third',
    title: 'Item 3',
    content: 'Content'
  }];
  return <Inline gap="xl">
      <Stack gap="sm" justify="flex-start">
        <Button variant="text" onClick={() => handleOnClick('first')}>
          {includes('first', openItems) && '->'} First section
        </Button>
        <Button variant="text" onClick={() => handleOnClick('second')}>
          {includes('second', openItems) && '->'} Second section
        </Button>
        <Button variant="text" onClick={() => handleOnClick('third')}>
          {includes('third', openItems) && '->'} Third section
        </Button>
      </Stack>
      <Accordion isCollapsedOnOpen={false} items={localItems} openItems={openItems} onChange={ids => {
      setOpenItems(ids);
    }} />
    </Inline>;
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const zt=["Playground","DefaultAccordion","DoesNotCollapseOnOpen","CustomTitleElement","AcordionWithExternalManagement"];export{i as AcordionWithExternalManagement,n as CustomTitleElement,s as DefaultAccordion,r as DoesNotCollapseOnOpen,o as Playground,zt as __namedExportsOrder,Pt as default};
//# sourceMappingURL=Accordion.stories-C9tEi6p3.js.map
