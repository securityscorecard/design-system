import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as N}from"./index-CTjT7uj6.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import{S as E}from"./Stack-vWwwEz_d.js";import{I as v}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{H as _}from"./HexGrade-B_qHbPaN.js";import{B as d}from"./Button-CgUf0TwU.js";import{A as u}from"./Accordion-cs837dnv.js";import{T as w,a as P}from"./Text-CQej7zPl.js";import{P as z}from"./Paragraph-DLn62-bA.js";import{i as l}from"./useLogger-CziYgifR.js";import"./space-BY85GhUc.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./prop-Cw0eZkJ_.js";import"./spacing.types-C9Yu1wmA.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./index-DFvsTZbx.js";import"./defaultTo-CWH4ecPB.js";import"./BaseButton-Bl-0NeNF.js";import"./Icon-DSPfH_8v.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./Spinner-b5BYo8Sk.js";import"./isNotNull-D2Wrs3cn.js";import"./noop-CRTpovv1.js";import"./pluck-CGJirjHu.js";import"./propEq-CyrJNrjT.js";const St={title:"components/Accordion",component:u,argTypes:{isCollapsedOnOpen:{control:{type:"boolean"}},openItems:{description:"Array of ids that can be changed by external state"}}},M=[{id:1,title:"Item 1",content:"Content",isOpen:!0},{id:2,title:"Item 2",content:"Content"}],c=e=>t.jsx(u,{...e}),o=c.bind({});o.args={items:M};o.parameters={screenshot:{skip:!0}};const n=c.bind({});n.args=o.args;const s=c.bind({});s.args={...o.args,isCollapsedOnOpen:!1};s.storyName="Does not collapse on open";s.parameters={screenshot:{skip:!0}};const W=()=>t.jsxs(E,{gap:"sm",children:[t.jsxs(v,{align:"center",gap:"md",children:[t.jsx(_,{grade:"A",size:24}),t.jsx(w,{size:P.lg,children:"Company Name"})]}),t.jsx(z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]}),i=c.bind({});i.args={items:[{id:0,title:t.jsx(W,{}),content:"Content",isOpen:!0}]};const r=()=>{const[e,m]=N.useState([]),p=a=>e.includes(a)?m([...e]):m([a]),D=[{id:"first",title:"Item 1",content:"Content",isOpen:!0},{id:"second",title:"Item 2",content:"Content"},{id:"third",title:"Item 3",content:"Content"}];return t.jsxs(v,{gap:"xl",children:[t.jsxs(E,{gap:"sm",justify:"flex-start",children:[t.jsxs(d,{variant:"text",onClick:()=>p("first"),children:[l("first",e)&&"->"," First section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("second"),children:[l("second",e)&&"->"," Second section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("third"),children:[l("third",e)&&"->"," Third section"]})]}),t.jsx(u,{isCollapsedOnOpen:!1,items:D,openItems:e,onChange:a=>{m(a)}})]})};r.parameters={screenshot:{skip:!0}};r.__docgenInfo={description:"",methods:[],displayName:"AcordionWithExternalManagement"};var g,I,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Accordion {...args} />",...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var h,C,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Accordion {...args} />",...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var O,A,j;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Accordion {...args} />",...(j=(A=s.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var k,S,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Accordion {...args} />",...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,b,B;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(B=(b=r.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const yt=["Playground","DefaultAccordion","DoesNotCollapseOnOpen","CustomTitleElement","AcordionWithExternalManagement"];export{r as AcordionWithExternalManagement,i as CustomTitleElement,n as DefaultAccordion,s as DoesNotCollapseOnOpen,o as Playground,yt as __namedExportsOrder,St as default};
