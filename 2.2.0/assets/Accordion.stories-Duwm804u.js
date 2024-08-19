import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as w}from"./index-CTjT7uj6.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as E}from"./Stack-D3Wl5zWT.js";import{I as v}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{H as N}from"./HexGrade-DJwZMWDw.js";import{B as d}from"./Button-vDRI25at.js";import{A as u}from"./Accordion-lRs2wb6O.js";import{T as P,a as z}from"./Text-DTP2ysh1.js";import{P as _}from"./Paragraph-4LRW5eCl.js";import{i as l}from"./useLogger-Cd66DVRc.js";import"./space-1LtLrmuu.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./prop-DG2n0FAQ.js";import"./spacing.types-C9Yu1wmA.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./defaultTo-C2m3wrMk.js";import"./BaseButton-D1TUSAxp.js";import"./Icon-4JNizDXH.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-CJrCb2wC.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";import"./propEq-t9RR3tDE.js";const St={title:"components/Accordion",component:u,argTypes:{isCollapsedOnOpen:{control:{type:"boolean"}},openItems:{description:"Array of ids that can be changed by external state"}}},F=[{id:1,title:"Item 1",content:"Content",isOpen:!0},{id:2,title:"Item 2",content:"Content"}],c=e=>t.jsx(u,{...e}),o=c.bind({});o.args={items:F};o.parameters={screenshot:{skip:!0}};const r=c.bind({});r.args=o.args;const s=c.bind({});s.args={...o.args,isCollapsedOnOpen:!1};s.storyName="Does not collapse on open";s.parameters={screenshot:{skip:!0}};const H=()=>t.jsxs(E,{gap:"sm",children:[t.jsxs(v,{align:"center",gap:"md",children:[t.jsx(N,{grade:"A",size:24}),t.jsx(P,{size:z.lg,children:"Company Name"})]}),t.jsx(_,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]}),n=c.bind({});n.args={items:[{id:0,title:t.jsx(H,{}),content:"Content",isOpen:!0}]};const i=()=>{const[e,m]=w.useState([]),p=a=>e.includes(a)?m([...e]):m([a]),D=[{id:"first",title:"Item 1",content:"Content",isOpen:!0},{id:"second",title:"Item 2",content:"Content"},{id:"third",title:"Item 3",content:"Content"}];return t.jsxs(v,{gap:"xl",children:[t.jsxs(E,{gap:"sm",justify:"flex-start",children:[t.jsxs(d,{variant:"text",onClick:()=>p("first"),children:[l("first",e)&&"->"," First section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("second"),children:[l("second",e)&&"->"," Second section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("third"),children:[l("third",e)&&"->"," Third section"]})]}),t.jsx(u,{isCollapsedOnOpen:!1,items:D,openItems:e,onChange:a=>{m(a)}})]})};i.parameters={screenshot:{skip:!0}};var g,I,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Accordion {...args} />",...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var h,C,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Accordion {...args} />",...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var O,j,k;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Accordion {...args} />",...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,S,y;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:"args => <Accordion {...args} />",...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,b,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const yt=["Playground","DefaultAccordion","DoesNotCollapseOnOpen","CustomTitleElement","AcordionWithExternalManagement"];export{i as AcordionWithExternalManagement,n as CustomTitleElement,r as DefaultAccordion,s as DoesNotCollapseOnOpen,o as Playground,yt as __namedExportsOrder,St as default};
