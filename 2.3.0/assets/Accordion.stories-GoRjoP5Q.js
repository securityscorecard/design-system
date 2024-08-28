import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as N}from"./index-CTjT7uj6.js";import"./index-CoMEwqFC.js";import"./index-B9vObEIs.js";import"./index-DRBCZw3W.js";import{A as u}from"./Accordion-DBJeeMJH.js";import{T as _,a as w}from"./index-C_SwQgDv.js";import{P}from"./index-mAAZmqGJ.js";import{B as d}from"./Button-fZBZNXZ8.js";import{i as l}from"./useLogger-BNYGJgyi.js";import{H as z}from"./HexGrade-womXQq0L.js";import{I as E}from"./Inline-DPdVYO7t.js";import{S as v}from"./index-DZoBl2Wq.js";import"./index-DzoB_gWM.js";import"./index-BRV0Se7Z.js";import"./index-BUX0wYnk.js";import"./Padbox-DIe3-S_j.js";import"./index-C7IrpltL.js";import"./Cluster-DaqHgnAc.js";import"./flex.types-BrkCVx66.js";import"./prop-BgpcU4fO.js";import"./Button.enums-nGQnPjuG.js";import"./index-PS5U9aCu.js";import"./index-t-vajJ9r.js";import"./index-beAa1auE.js";import"./DSProvider-DOkUOQoq.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-C3ps-iVb.js";import"./colors-2yNNI7_i.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-DIC5Nlq-.js";import"./react-router-dom-CJ3P1gOI.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./spacing.types-C9Yu1wmA.js";import"./index-klhtVnMw.js";import"./Spinner-Bmxd_xeK.js";import"./index-CQl3OQTU.js";import"./Icon-CHqwD8rK.js";import"./isNull-Ddx7qw_y.js";import"./isNotNull-DFX8Jk9A.js";import"./noop-zq4Ga5XN.js";import"./pluck-XHiJ2W8k.js";import"./propEq-C3SmQ931.js";import"./defaultTo-Bppsx8bv.js";const wt={title:"components/Accordion",component:u,argTypes:{isCollapsedOnOpen:{control:{type:"boolean"}},openItems:{description:"Array of ids that can be changed by external state"}}},M=[{id:1,title:"Item 1",content:"Content",isOpen:!0},{id:2,title:"Item 2",content:"Content"}],c=e=>t.jsx(u,{...e}),o=c.bind({});o.args={items:M};o.parameters={screenshot:{skip:!0}};const n=c.bind({});n.args=o.args;const r=c.bind({});r.args={...o.args,isCollapsedOnOpen:!1};r.storyName="Does not collapse on open";r.parameters={screenshot:{skip:!0}};const W=()=>t.jsxs(v,{gap:"sm",children:[t.jsxs(E,{align:"center",gap:"md",children:[t.jsx(z,{grade:"A",size:24}),t.jsx(_,{size:w.lg,children:"Company Name"})]}),t.jsx(P,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]}),i=c.bind({});i.args={items:[{id:0,title:t.jsx(W,{}),content:"Content",isOpen:!0}]};const s=()=>{const[e,m]=N.useState([]),p=a=>e.includes(a)?m([...e]):m([a]),D=[{id:"first",title:"Item 1",content:"Content",isOpen:!0},{id:"second",title:"Item 2",content:"Content"},{id:"third",title:"Item 3",content:"Content"}];return t.jsxs(E,{gap:"xl",children:[t.jsxs(v,{gap:"sm",justify:"flex-start",children:[t.jsxs(d,{variant:"text",onClick:()=>p("first"),children:[l("first",e)&&"->"," First section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("second"),children:[l("second",e)&&"->"," Second section"]}),t.jsxs(d,{variant:"text",onClick:()=>p("third"),children:[l("third",e)&&"->"," Third section"]})]}),t.jsx(u,{isCollapsedOnOpen:!1,items:D,openItems:e,onChange:a=>{m(a)}})]})};s.parameters={screenshot:{skip:!0}};s.__docgenInfo={description:"",methods:[],displayName:"AcordionWithExternalManagement"};var g,I,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Accordion {...args} />",...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var h,C,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Accordion {...args} />",...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var O,A,j;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Accordion {...args} />",...(j=(A=r.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var k,S,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Accordion {...args} />",...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,b,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const Pt=["Playground","DefaultAccordion","DoesNotCollapseOnOpen","CustomTitleElement","AcordionWithExternalManagement"];export{s as AcordionWithExternalManagement,i as CustomTitleElement,n as DefaultAccordion,r as DoesNotCollapseOnOpen,o as Playground,Pt as __namedExportsOrder,wt as default};
//# sourceMappingURL=Accordion.stories-GoRjoP5Q.js.map
