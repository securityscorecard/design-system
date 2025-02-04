import{j as r}from"./jsx-runtime-CfatFE5O.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{L as V,M as W}from"./react-router-dom-CPhVUpqL.js";import{r as z}from"./index-ClcD9ViR.js";import{S as E,a}from"./SemanticModal-B0ETzP9p.js";import"./index-LR-EjM-6.js";import"./index-BafkohO7.js";import"./index-DAjbAeX4.js";import{P as O}from"./Padbox-D3nB_sul.js";import{S as T}from"./space.enums-BIVz6JhH.js";import{I as D}from"./Inline.enums-Cb7IYB12.js";import{B as F}from"./Button-DTETAW_Q.js";import{S as Y}from"./index-1T5Tqafd.js";import"./v4-CQkTLCs1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./_isObject-BZZHHNGj.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./index-BF5S-yua.js";import"./Modal-474TKN0z.js";import"./useOuterCallback-CJ5emATz.js";import"./index-DxcpycWO.js";import"./index-B4kzUT7Q.js";import"./index-BznNX2vV.js";import"./Heading-Dtzp-YwQ.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./slice-a4xO8Rfj.js";import"./mergeRefs-D2M2BR1V.js";import"./index-UZVzQLwe.js";import"./CloseButton-DsGT12sN.js";import"./IconButton-BIRkG6iG.js";import"./components-Dt-mykMV.js";import"./index-BhnNbCFb.js";import"./Icon-D4Cx8ALM.js";import"./index-BLQl-HhB.js";import"./useLogger-DJ74rrw8.js";import"./index-BFbHH3Yd.js";import"./Spinner-H39-IkCC.js";import"./FloatingContext-Iczo9egI.js";import"./index-Mn546iyH.js";import"./index-fVh6sz_B.js";import"./Button-CSEXYzvx.js";import"./Cluster-Czc8yUGw.js";import"./prop-DM27i_5J.js";import"./index-B_pk6Myb.js";import"./require-router-link-BWnqzLA_.js";import"./isNull-D8kYROfs.js";import"./isNotNull-CGNDL-_A.js";import"./noop-CdhuOQYG.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";const Nr={title:"components/modals/SemanticModal",component:E,parameters:{docs:{story:{inline:!1,height:500}}},args:{actions:[{label:"Secondary",name:"Secondary",onClick:e("click-action-secondary")},{label:"Primary",name:"Primary",onClick:e("click-action-primary")}],message:"You can replace this with a local component. You can also just override the text, but keep in mind that you might lose content that way.",title:"This is a placeholder",onClose:e("close-modal")},argTypes:{variant:{description:"Semantic type of modal",control:{type:"select"},options:Object.values(a)},message:{description:"Main message text field"},onClose:{description:"Action executed on CloseButton click"},title:{description:"Message heading"},isPrimaryButtonLoading:{description:'When certain process is still running, you can set the primary button to "loading" state'},loadingText:{description:"Loading state text"},actions:{description:"An array of action items that are rendered as buttons",control:{disable:!0}},primaryButtonColor:{description:"Changes the colour of the primary button so the priamry action can match the message",control:{type:"select"},options:["primary","danger"]}}},t={render:p=>{const[l,u]=z.useState(!1);return r.jsxs(O,{paddingSize:T.xxl,children:[r.jsx(D,{justify:"center",children:r.jsx(F,{onClick:()=>u(!l),children:"Open semantic modal"})}),l&&r.jsx(E,{...p,onClose:()=>u(!1)})]})},parameters:{screenshot:{skip:!0},docs:{source:{type:"code"}}}},o={args:{variant:a.success}},s={args:{variant:a.warn}},i={args:{variant:a.error}},n={args:{variant:a.ban,primaryButtonColor:"danger"}},c={args:{message:r.jsxs(Y,{gap:"md",children:[r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in dignissim enim. Interdum et malesuada fames ac ante ipsum primis in faucibus."}),r.jsx("p",{children:"Duis sem eros, ultrices eu mi eget, blandit vestibulum mauris. Pellentesque at hendrerit orci. Aliquam vel ligula lectus. Curabitur varius sed mauris ut aliquam. Integer sed iaculis quam, eget dignissim nulla."})]})}},m={args:{actions:[{label:'"A" tag with href',name:"Secondary",onClick:e("click-action-secondary"),as:"a",href:"https://google.com"},{label:"React Router Link",name:"Primary",onClick:e("click-action-primary"),as:V,to:"/abc"}]},decorators:[p=>r.jsx(W,{children:p()})],parameters:{screenshot:{skip:!0}}};var d,g,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [isShown, setIsShown] = useState(false);
    return <Padbox paddingSize={SpaceSizes.xxl}>
        <Inline justify="center">
          <Button onClick={() => setIsShown(!isShown)}>
            Open semantic modal
          </Button>
        </Inline>
        {isShown && <SemanticModal {...args} onClose={() => setIsShown(false)} />}
      </Padbox>;
  },
  parameters: {
    screenshot: {
      skip: true
    },
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,y,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.success
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,k,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.warn
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var M,C,v;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.error
  }
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,j,w;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.ban,
    primaryButtonColor: 'danger'
  }
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,B,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: <Stack gap="md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          dignissim enim. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
        <p>
          Duis sem eros, ultrices eu mi eget, blandit vestibulum mauris.
          Pellentesque at hendrerit orci. Aliquam vel ligula lectus. Curabitur
          varius sed mauris ut aliquam. Integer sed iaculis quam, eget dignissim
          nulla.
        </p>
      </Stack>
  }
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var L,q,A;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: '"A" tag with href',
      name: 'Secondary',
      onClick: action('click-action-secondary'),
      as: 'a',
      href: 'https://google.com'
    }, {
      label: 'React Router Link',
      name: 'Primary',
      onClick: action('click-action-primary'),
      as: Link,
      to: '/abc'
    }]
  },
  decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(A=(q=m.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Qr=["Playground","Success","Warn","Error","Ban","MultiParagraphMessage","WithRouting"];export{n as Ban,i as Error,c as MultiParagraphMessage,t as Playground,o as Success,s as Warn,m as WithRouting,Qr as __namedExportsOrder,Nr as default};
//# sourceMappingURL=SemanticModal.stories-QavDrWGf.js.map
