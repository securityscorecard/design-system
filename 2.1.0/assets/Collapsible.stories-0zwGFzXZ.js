import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as j}from"./index-BwDkhjyp.js";import{a as _}from"./chunk-454WOBUV-DWuJqIWT.js";import{C as a}from"./Collapsible-C_hkEMJD.js";import{B as I}from"./Button-CKE-X77u.js";import{S as y}from"./Snippet-CGIe9JI6.js";import"./Surface-Cs7tekjF.js";import"./Padbox-BrtZqAZY.js";import{S as P}from"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./space-B9R18Mwn.js";import"./index-CVyJwDg7.js";import"./extends-CF3RwP-h.js";import"./DSProvider-DzIDhM_J.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./index-Dk74W0Oi.js";import"./useLogger-D4I9buOf.js";import"./Text-C1sA-5dj.js";import"./BaseButton-IeCCn510.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./prop-3Huj0iT1.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./ErrorBoundary-CvEVBj3D.js";import"./Link-C_aB62BF.js";import"./BaseLink-BTj3sWKL.js";import"./flip-BqWK4A3v.js";import"./flex.types-q2tZp175.js";const ge={component:a,title:"components/Collapsible"},t=o=>r.jsx(a,{...o});t.args={title:"playground",subject:"Collapsible",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus"};t.parameters={screenshot:{skip:!0}};const e=o=>r.jsx(a,{...o});e.args={subject:"Website does not implement X-XSS-Protection Best Practices",title:"Resolve or Comment",onOpen:_("onOpen"),children:"You have 256 findings related to Website does not implement X-XSS-Protection Best Practices"};const p=o=>r.jsx(a,{...o});p.args={...e.args,defaultIsOpen:!0};const s=o=>{const[n,l]=j.useState(!0);return r.jsxs(P,{gap:"md",children:[r.jsx(a,{isOpen:n,onOpenChange:i=>l(i),...o}),r.jsx(I,{variant:"outline",onClick:()=>{l(i=>!i)},children:"Toggle"}),r.jsx(y,{children:`{
          isOpen: ${n},
        }`})]})};s.args=e.args;s.parameters={screenshot:{skip:!0}};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"DefaultCollapsible"};p.__docgenInfo={description:"",methods:[],displayName:"OpenedCollapsible"};s.__docgenInfo={description:"",methods:[],displayName:"ControlledCollapsible"};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Collapsible {...args} />",...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,C;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Collapsible {...args} />",...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,O,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Collapsible {...args} />",...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ce=["Playground","DefaultCollapsible","OpenedCollapsible","ControlledCollapsible"];export{s as ControlledCollapsible,e as DefaultCollapsible,p as OpenedCollapsible,t as Playground,Ce as __namedExportsOrder,ge as default};
