import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as j}from"./index-BwDkhjyp.js";import{a as k}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{C as i}from"./index-BlZ5JeYk.js";import"./index-rfPys7th.js";import"./index-BgZRODrj.js";import{S as v}from"./index-C7NqzKU7.js";import{B as P}from"./Button-CUDoy2Zg.js";import{S as B}from"./Snippet-D0y5wVo2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./extends-CF3RwP-h.js";import"./DSProvider-DOa9IzhU.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./_isObject-BZZHHNGj.js";import"./index-CajKmcpa.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./index-CodEEOgp.js";import"./Icon-CCnW0-hW.js";import"./index-Dk74W0Oi.js";import"./useLogger-CeNh0Atc.js";import"./index-P638_79P.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./Inline.enums-Dhd6yXoj.js";import"./prop-C6y-wj7q.js";import"./index-x46zp6JY.js";import"./index-D6mk1gl9.js";import"./isFunction-BAANUD86.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-B_ERjjJn.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./isNull-ByzPK5V3.js";import"./isNotNull-Bi0ik2MG.js";import"./noop-BL97hhQA.js";import"./Cluster-BeQ8Kfla.js";import"./ErrorBoundary-DmoNhKXA.js";import"./index-D-gWPVMU.js";import"./index-AONmr2mT.js";import"./flip-BtvP9idc.js";import"./IconButton-DByWM6Xn.js";import"./components-CbPQWOa6.js";import"./Button-Dg7nljpV.js";const yr={component:i,title:"components/Collapsible"},t=r=>e.jsx(i,{...r});t.args={title:"playground",subject:"Collapsible",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus"};t.parameters={screenshot:{skip:!0}};const o=r=>e.jsx(i,{...r});o.args={subject:"Website does not implement X-XSS-Protection Best Practices",title:"Resolve or Comment",onOpen:k("onOpen"),children:"You have 256 findings related to Website does not implement X-XSS-Protection Best Practices"};const p=r=>e.jsx(i,{...r});p.args={...o.args,defaultIsOpen:!0};const s=r=>{const[n,m]=j.useState(!0);return e.jsxs(v,{gap:"md",children:[e.jsx(i,{isOpen:n,onOpenChange:a=>m(a),...r}),e.jsx(P,{variant:"outline",onClick:()=>{m(a=>!a)},children:"Toggle"}),e.jsx(B,{children:`{
          isOpen: ${n},
        }`})]})};s.args=o.args;s.parameters={screenshot:{skip:!0}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Collapsible {...args} />",...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,g,C;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Collapsible {...args} />",...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,O,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Collapsible {...args} />",...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(true);
  return <Stack gap="md">
      <Collapsible isOpen={isOpen} onOpenChange={open => setIsOpen(open)} {...args} />

      <Button variant="outline" onClick={() => {
      setIsOpen(prev => !prev);
    }}>
        Toggle
      </Button>
      <Snippet>
        {\`{
          isOpen: \${isOpen},
        }\`}
      </Snippet>
    </Stack>;
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Dr=["Playground","DefaultCollapsible","OpenedCollapsible","ControlledCollapsible"];export{s as ControlledCollapsible,o as DefaultCollapsible,p as OpenedCollapsible,t as Playground,Dr as __namedExportsOrder,yr as default};
//# sourceMappingURL=Collapsible.stories-Cp2HLWru.js.map
