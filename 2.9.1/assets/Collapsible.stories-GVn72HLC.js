import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{a as _}from"./chunk-454WOBUV-CM0pFb8Z.js";import{C as i}from"./index-_8o7Ufk1.js";import"./index-BnOFXWSX.js";import"./index-C1kpn3a9.js";import{S as I}from"./index-FmXXYKzo.js";import{B as y}from"./Button-D2k_mujA.js";import{S as P}from"./Snippet-9MtOH0iz.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./extends-CF3RwP-h.js";import"./DSProvider-DZ2BDZS9.js";import"./index-DIVhMF2i.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./isObject-BZZHHNGj.js";import"./index-BsP7FXMl.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./slice-CaMqkvGm.js";import"./index-BifjOJLR.js";import"./Icon-C0fNGvgr.js";import"./index-BRV0Se7Z.js";import"./useLogger-BdR6T79l.js";import"./index-CUGQ8N4L.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./Inline.enums-CsgpNQwN.js";import"./prop-CgNUfcFy.js";import"./index-v1YtIK4i.js";import"./index-BkLmc-fh.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-DZ62ouIa.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-B1rSuUka.js";import"./Spinner-BzbrUblZ.js";import"./isNull-T1j7Gx-1.js";import"./isNotNull-C3X32hrc.js";import"./noop-zffMy0O7.js";import"./Cluster-BnO1HbAj.js";import"./ErrorBoundary-G_xQX5l_.js";import"./index-DAwFNPLM.js";import"./index-Bc3BMMWF.js";import"./flip-Cb42DQtc.js";import"./IconButton-CKUQpq1U.js";import"./components-CjIxgO6S.js";import"./Button-jQCIxIJA.js";const ve={component:i,title:"components/Collapsible"},t=o=>r.jsx(i,{...o});t.args={title:"playground",subject:"Collapsible",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus"};t.parameters={screenshot:{skip:!0}};const e=o=>r.jsx(i,{...o});e.args={subject:"Website does not implement X-XSS-Protection Best Practices",title:"Resolve or Comment",onOpen:_("onOpen"),children:"You have 256 findings related to Website does not implement X-XSS-Protection Best Practices"};const p=o=>r.jsx(i,{...o});p.args={...e.args,defaultIsOpen:!0};const s=o=>{const[n,m]=j.useState(!0);return r.jsxs(I,{gap:"md",children:[r.jsx(i,{isOpen:n,onOpenChange:a=>m(a),...o}),r.jsx(y,{variant:"outline",onClick:()=>{m(a=>!a)},children:"Toggle"}),r.jsx(P,{children:`{
          isOpen: ${n},
        }`})]})};s.args=e.args;s.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"DefaultCollapsible"};p.__docgenInfo={description:"",methods:[],displayName:"OpenedCollapsible"};s.__docgenInfo={description:"",methods:[],displayName:"ControlledCollapsible"};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Collapsible {...args} />",...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,C;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Collapsible {...args} />",...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,O,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Collapsible {...args} />",...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Playground","DefaultCollapsible","OpenedCollapsible","ControlledCollapsible"];export{s as ControlledCollapsible,e as DefaultCollapsible,p as OpenedCollapsible,t as Playground,Be as __namedExportsOrder,ve as default};
//# sourceMappingURL=Collapsible.stories-GVn72HLC.js.map
