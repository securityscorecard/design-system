import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as j}from"./index-ClcD9ViR.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{C as i}from"./index-zvpBkKEU.js";import"./index-BafkohO7.js";import"./index-LR-EjM-6.js";import{S as I}from"./index-1T5Tqafd.js";import{B as y}from"./Button-DTETAW_Q.js";import{S as P}from"./Snippet-BNwAzph5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./_isObject-BZZHHNGj.js";import"./index-BLQl-HhB.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./slice-a4xO8Rfj.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-DbwGX_n3.js";import"./useLogger-DJ74rrw8.js";import"./index-fVh6sz_B.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./Inline.enums-Cb7IYB12.js";import"./prop-DM27i_5J.js";import"./index-B_pk6Myb.js";import"./index-DAjbAeX4.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./require-router-link-BWnqzLA_.js";import"./react-router-dom-CPhVUpqL.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";import"./Cluster-Czc8yUGw.js";import"./ErrorBoundary-DgkfbTi8.js";import"./index-m5gpRUr1.js";import"./index-Z8dOtpW2.js";import"./flip-Cf__ZOUJ.js";import"./IconButton-BIRkG6iG.js";import"./components-Dt-mykMV.js";import"./Button-CSEXYzvx.js";const ke={component:i,title:"components/Collapsible"},t=o=>r.jsx(i,{...o});t.args={title:"playground",subject:"Collapsible",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus"};t.parameters={screenshot:{skip:!0}};const e=o=>r.jsx(i,{...o});e.args={subject:"Website does not implement X-XSS-Protection Best Practices",title:"Resolve or Comment",onOpen:_("onOpen"),children:"You have 256 findings related to Website does not implement X-XSS-Protection Best Practices"};const p=o=>r.jsx(i,{...o});p.args={...e.args,defaultIsOpen:!0};const s=o=>{const[n,m]=j.useState(!0);return r.jsxs(I,{gap:"md",children:[r.jsx(i,{isOpen:n,onOpenChange:a=>m(a),...o}),r.jsx(y,{variant:"outline",onClick:()=>{m(a=>!a)},children:"Toggle"}),r.jsx(P,{children:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ve=["Playground","DefaultCollapsible","OpenedCollapsible","ControlledCollapsible"];export{s as ControlledCollapsible,e as DefaultCollapsible,p as OpenedCollapsible,t as Playground,ve as __namedExportsOrder,ke as default};
//# sourceMappingURL=Collapsible.stories-C3sTaHXm.js.map
