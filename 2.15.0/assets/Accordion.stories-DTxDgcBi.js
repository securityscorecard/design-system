import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as z}from"./index-ClcD9ViR.js";import"./index-D88lkBP-.js";import"./index-C72G0AJ3.js";import{B as N}from"./Button-DDUAhNoT.js";import{A as v}from"./Accordion-BVMockfv.js";import{T as H,a as W}from"./index-CEsunubm.js";import{P as _}from"./Paragraph-aD75l0GC.js";import{I as w}from"./Inline-DoR-Gmpw.js";import{S as B}from"./index-Bqw6gtNo.js";import{i as G}from"./useLogger-DhLFZSdg.js";import{H as L}from"./HexGrade-6-Ugz1ir.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-CwwveOyd.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-C3NFEOoi.js";import"./Padbox-DyJBw-9L.js";import"./index-DxcpycWO.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C2D5KA8h.js";import"./prop-gA1VFyoz.js";import"./components-Crj7JrGD.js";import"./index-CUzBbf6F.js";import"./Icon-Bh7zeEtc.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-CqkKBNL-.js";import"./Spinner-ByPeh1d6.js";import"./index-54z-fB9T.js";import"./DSProvider-CPYqWFL_.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./propEq-C3eOMXNr.js";import"./defaultTo-gFE_6K05.js";const we={title:"components/Accordion",component:v},p=[{id:1,title:"Item 1",content:"Content",isOpen:!0},{id:2,title:"Item 2",content:"Content"}],r={args:{items:p},parameters:{screenshot:{skip:!0}}},o={args:r.args},n={args:{items:[p[0],{...p[1],isOpen:!0}],isCollapsedOnOpen:!1},parameters:{screenshot:{skip:!0}}},R=()=>e.jsxs(B,{gap:"sm",children:[e.jsxs(w,{align:"center",gap:"md",children:[e.jsx(L,{grade:"A",size:24}),e.jsx(H,{size:W.lg,children:"Company Name"})]}),e.jsx(_,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]}),a={args:{items:[{id:0,title:e.jsx(R,{}),content:"Content",isOpen:!0}]}},i={args:{items:p,isCollapsedOnOpen:!1},render:d=>{const[s,c]=z.useState([]),M=t=>s.includes(t)?c([...s]):c([t]);return e.jsxs(w,{gap:"xl",stretch:"end",children:[e.jsx(B,{gap:"sm",justify:"flex-start",children:d.items.map(t=>e.jsxs(N,{variant:"ghost",onClick:()=>{M(t.id)},children:[G(t.id,s)&&"->"," ",t.title.toString()]}))}),e.jsx(v,{...d,openItems:s,onChange:t=>{c(t)}})]})},parameters:{screenshot:{skip:!0}}},m={args:r.args,parameters:{themes:{themeOverride:"Dark"}}};var l,u,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,I,O;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: Playground.args
}`,...(O=(I=o.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var x,f,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [items[0], {
      ...items[1],
      isOpen: true
    }],
    isCollapsedOnOpen: false
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,S,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 0,
      title: <AccordionItemTitle />,
      content: 'Content',
      isOpen: true
    }]
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,D,y;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items,
    isCollapsedOnOpen: false
  },
  render: args => {
    const [openItems, setOpenItems] = useState<AccordionItemId[]>([]);
    const handleOnClick = (id: AccordionItemId) => {
      if (!openItems.includes(id)) {
        const newItems = [id];
        return setOpenItems(newItems);
      }
      return setOpenItems([...openItems]);
    };
    return <Inline gap="xl" stretch="end">
        <Stack gap="sm" justify="flex-start">
          {args.items.map(item => <Button variant="ghost" onClick={() => {
          handleOnClick(item.id);
        }}>
              {includes(item.id, openItems) && '->'} {item.title.toString()}
            </Button>)}
        </Stack>
        <Accordion {...args} openItems={openItems} onChange={ids => {
        setOpenItems(ids);
      }} />
      </Inline>;
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var E,T,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: Playground.args,
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const Be=["Playground","DefaultAccordion","DoesNotCollapseOnOpen","CustomTitleElement","AcordionWithExternalManagement","DarkMode"];export{i as AcordionWithExternalManagement,a as CustomTitleElement,m as DarkMode,o as DefaultAccordion,n as DoesNotCollapseOnOpen,r as Playground,Be as __namedExportsOrder,we as default};
//# sourceMappingURL=Accordion.stories-DTxDgcBi.js.map
