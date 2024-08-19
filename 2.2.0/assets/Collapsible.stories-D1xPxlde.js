import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{a as k}from"./chunk-454WOBUV-DWuJqIWT.js";import{C as a}from"./Collapsible-BVxZ5RHA.js";import{B as v}from"./Button-vDRI25at.js";import{S as P}from"./Snippet-CzZsnenC.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as B}from"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./v4-D8aEg3BZ.js";import"./space-1LtLrmuu.js";import"./index-C7IrpltL.js";import"./extends-CF3RwP-h.js";import"./DSProvider-IYcK3cWD.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./Icon-4JNizDXH.js";import"./index-DFvsTZbx.js";import"./index-BRV0Se7Z.js";import"./useLogger-Cd66DVRc.js";import"./Text-DTP2ysh1.js";import"./BaseButton-D1TUSAxp.js";import"./DSThemeOverride-BduN1ykm.js";import"./prop-DG2n0FAQ.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";import"./ErrorBoundary-D497cZwE.js";import"./Link-DgcOfROh.js";import"./BaseLink-D20DZbIA.js";import"./flip-CEUNNqfM.js";import"./flex.types-BrkCVx66.js";const ge={component:a,title:"components/Collapsible"},t=e=>r.jsx(a,{...e});t.args={title:"playground",subject:"Collapsible",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus"};t.parameters={screenshot:{skip:!0}};const o=e=>r.jsx(a,{...e});o.args={subject:"Website does not implement X-XSS-Protection Best Practices",title:"Resolve or Comment",onOpen:k("onOpen"),children:"You have 256 findings related to Website does not implement X-XSS-Protection Best Practices"};const p=e=>r.jsx(a,{...e});p.args={...o.args,defaultIsOpen:!0};const s=e=>{const[n,m]=j.useState(!0);return r.jsxs(B,{gap:"md",children:[r.jsx(a,{isOpen:n,onOpenChange:i=>m(i),...e}),r.jsx(v,{variant:"outline",onClick:()=>{m(i=>!i)},children:"Toggle"}),r.jsx(P,{children:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ce=["Playground","DefaultCollapsible","OpenedCollapsible","ControlledCollapsible"];export{s as ControlledCollapsible,o as DefaultCollapsible,p as OpenedCollapsible,t as Playground,Ce as __namedExportsOrder,ge as default};
