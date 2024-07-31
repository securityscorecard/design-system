import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{S as a}from"./Icon-DSPfH_8v.js";import{g as v}from"./storybook-ByffxkSu.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import{S as B}from"./Stack-vWwwEz_d.js";import{I as e}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{B as n}from"./Button-CgUf0TwU.js";import{B as F,a as P}from"./Button.enums-P6KVfN9D.js";import{S as o}from"./space-BY85GhUc.js";import"./DSProvider-eD554_K8.js";import"./theme-DztFT9GZ.js";import"./index-DFvsTZbx.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./useLogger-CziYgifR.js";import"./zipObj-C9fmdzRH.js";import"./flex.types-BrkCVx66.js";import"./prop-Cw0eZkJ_.js";import"./BaseButton-Bl-0NeNF.js";import"./require-router-link-EREg1Bbm.js";import"./react-router-dom-BO_MR9e_.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./extends-CF3RwP-h.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-b5BYo8Sk.js";import"./isNotNull-D2Wrs3cn.js";import"./noop-CRTpovv1.js";import"./index-DIVhMF2i.js";import"./colors-DAn332pn.js";const bt={title:"components/Button",component:n,argTypes:{to:{control:{disable:!0}},href:{control:{disable:!0}},as:{control:{disable:!0}},margin:{control:{disable:!0}},children:{control:{type:"text"},table:{type:{summary:"string"}}},variant:{...v("select",F)},color:{...v("select",P)},iconName:{...v("select",a),description:"(Deprecated) Use iconStart property instead"},iconType:{...v("select",{ssc:"ssc",far:"far",fab:"fab"}),description:"(Deprecated) Use iconStart property instead"},iconStart:{control:{type:"object"},table:{type:{summary:"BaseIcon",detail:`{
  name: SSCIcons | (string & {});
  type?: 'ssc' | 'far' | 'fab';
}`}}},iconEnd:{control:{type:"object"},table:{type:{summary:"BaseIcon",detail:`{
  name: SSCIcons | (string & {});
  type?: 'ssc' | 'far' | 'fab';
}`}}}},parameters:{docs:{description:{component:'Parameters "iconName" and "iconType" are deprecated. These are kept for backward compatibility. You should define the icon using\n        ```iconStart={{iconName, iconType}}``` to define the icon before text or with ```iconEnd={{iconName, iconType}}``` to place icon after text'}}}},r=G=>t.jsx(n,{...G});r.args={children:"Playground Button",variant:F.solid,color:P.primary};r.parameters={screenshot:{skip:!0}};const i=()=>t.jsxs(B,{gap:o.lg,children:[t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"primary",variant:"solid",children:"Button"}),t.jsx(n,{className:"hover",color:"primary",variant:"solid",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"primary",variant:"solid",children:"Active Button"}),t.jsx(n,{color:"primary",variant:"solid",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"success",variant:"solid",children:"Button"}),t.jsx(n,{className:"hover",color:"success",variant:"solid",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"success",variant:"solid",children:"Active Button"}),t.jsx(n,{color:"success",variant:"solid",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"danger",variant:"solid",children:"Button"}),t.jsx(n,{className:"hover",color:"danger",variant:"solid",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"danger",variant:"solid",children:"Active Button"}),t.jsx(n,{color:"danger",variant:"solid",isDisabled:!0,children:"Disabled Button"})]})]}),s=()=>t.jsxs(B,{gap:o.lg,children:[t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"primary",variant:"outline",children:"Button"}),t.jsx(n,{className:"hover",color:"primary",variant:"outline",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"primary",variant:"outline",children:"Active Button"}),t.jsx(n,{color:"primary",variant:"outline",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"success",variant:"outline",children:"Button"}),t.jsx(n,{className:"hover",color:"success",variant:"outline",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"success",variant:"outline",children:"Active Button"}),t.jsx(n,{color:"success",variant:"outline",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"danger",variant:"outline",children:"Button"}),t.jsx(n,{className:"hover",color:"danger",variant:"outline",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"danger",variant:"outline",children:"Active Button"}),t.jsx(n,{color:"danger",variant:"outline",isDisabled:!0,children:"Disabled Button"})]})]}),c=()=>t.jsxs(B,{gap:o.lg,children:[t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"primary",variant:"text",children:"Button"}),t.jsx(n,{className:"hover",color:"primary",variant:"text",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"primary",variant:"text",children:"Active Button"}),t.jsx(n,{color:"primary",variant:"text",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"secondary",variant:"text",children:"Button"}),t.jsx(n,{className:"hover",color:"secondary",variant:"text",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"secondary",variant:"text",children:"Active Button"}),t.jsx(n,{color:"secondary",variant:"text",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"success",variant:"text",children:"Button"}),t.jsx(n,{className:"hover",color:"success",variant:"text",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"success",variant:"text",children:"Active Button"}),t.jsx(n,{color:"success",variant:"text",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"danger",variant:"text",children:"Button"}),t.jsx(n,{className:"hover",color:"danger",variant:"text",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"danger",variant:"text",children:"Active Button"}),t.jsx(n,{color:"danger",variant:"text",isDisabled:!0,children:"Disabled Button"})]})]}),l=()=>t.jsxs(B,{gap:o.lg,children:[t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"primary",variant:"ghost",children:"Button"}),t.jsx(n,{className:"hover",color:"primary",variant:"ghost",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"primary",variant:"ghost",children:"Active Button"}),t.jsx(n,{color:"primary",variant:"ghost",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"secondary",variant:"ghost",children:"Button"}),t.jsx(n,{className:"hover",color:"secondary",variant:"ghost",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"secondary",variant:"ghost",children:"Active Button"}),t.jsx(n,{color:"secondary",variant:"ghost",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"success",variant:"ghost",children:"Button"}),t.jsx(n,{className:"hover",color:"success",variant:"ghost",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"success",variant:"ghost",children:"Active Button"}),t.jsx(n,{color:"success",variant:"ghost",isDisabled:!0,children:"Disabled Button"})]}),t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"danger",variant:"ghost",children:"Button"}),t.jsx(n,{className:"hover",color:"danger",variant:"ghost",children:"Hovered Button"}),t.jsx(n,{className:"active",color:"danger",variant:"ghost",children:"Active Button"}),t.jsx(n,{color:"danger",variant:"ghost",isDisabled:!0,children:"Disabled Button"})]})]}),u=()=>t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"primary",variant:"solid",isLoading:!0,children:"Button"}),t.jsx(n,{color:"primary",variant:"outline",isLoading:!0,children:"Button"}),t.jsx(n,{color:"primary",variant:"text",isLoading:!0,children:"Button"}),t.jsx(n,{color:"primary",iconStart:{name:a.wrench},variant:"solid",isLoading:!0}),t.jsx(n,{color:"primary",iconStart:{name:a.wrench},variant:"outline",isLoading:!0}),t.jsx(n,{color:"primary",iconStart:{name:a.wrench},variant:"text",isLoading:!0})]}),d=()=>t.jsxs(e,{gap:o.md,children:[t.jsx(n,{color:"primary",iconStart:{name:a.wrench},variant:"solid",children:"Button"}),t.jsx(n,{"aria-label":"Wrench solid icon button",color:"primary",iconStart:{name:a.wrench},variant:"solid"}),t.jsx(n,{color:"primary",iconEnd:{name:a.wrench,type:"ssc"},variant:"solid",children:"Button"}),t.jsx(n,{color:"primary",iconEnd:{name:a.cog,type:"ssc"},iconStart:{name:a.wrench},variant:"solid",children:"Button"}),t.jsx(n,{color:"primary",iconStart:{name:a.wrench},variant:"outline",children:"Button"}),t.jsx(n,{"aria-label":"Wrench outline icon button",color:"primary",iconStart:{name:a.wrench},variant:"outline"}),t.jsx(n,{color:"primary",iconEnd:{name:a.wrench,type:"ssc"},variant:"outline",children:"Button"}),t.jsx(n,{color:"primary",iconStart:{name:a.wrench},variant:"text",children:"Button"}),t.jsx(n,{"aria-label":"Wrench text icon button",color:"primary",iconStart:{name:a.wrench},variant:"text"}),t.jsx(n,{"aria-label":"Wrench text icon button",color:"primary",iconEnd:{name:a.wrench,type:"ssc"},variant:"text",children:"Button"}),t.jsx(n,{"aria-label":"Wrench text icon button",color:"primary",iconName:a.wrench,iconType:"ssc",variant:"text"})]}),m=()=>t.jsxs(B,{gap:o.lg,children:[t.jsx(n,{variant:"solid",isExpanded:!0,children:"Full width button"}),t.jsx(n,{variant:"outline",isExpanded:!0,children:"Full width button"}),t.jsx(n,{variant:"text",isExpanded:!0,children:"Full width button"})]});r.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"SolidButtons"};s.__docgenInfo={description:"",methods:[],displayName:"OutlineButtons"};c.__docgenInfo={description:"",methods:[],displayName:"TextButtons"};l.__docgenInfo={description:"",methods:[],displayName:"GhostButtons"};u.__docgenInfo={description:"",methods:[],displayName:"LoadingButtons"};d.__docgenInfo={description:"",methods:[],displayName:"ButtonsWithIconOverview"};m.__docgenInfo={description:"",methods:[],displayName:"ExpandedButtons"};var p,h,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Button {...args} />",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,S,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="solid">
        Button
      </Button>
      <Button className="hover" color="primary" variant="solid">
        Hovered Button
      </Button>
      <Button className="active" color="primary" variant="solid">
        Active Button
      </Button>
      <Button color="primary" variant="solid" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="success" variant="solid">
        Button
      </Button>
      <Button className="hover" color="success" variant="solid">
        Hovered Button
      </Button>
      <Button className="active" color="success" variant="solid">
        Active Button
      </Button>
      <Button color="success" variant="solid" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="solid">
        Button
      </Button>
      <Button className="hover" color="danger" variant="solid">
        Hovered Button
      </Button>
      <Button className="active" color="danger" variant="solid">
        Active Button
      </Button>
      <Button color="danger" variant="solid" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,b,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="outline">
        Button
      </Button>
      <Button className="hover" color="primary" variant="outline">
        Hovered Button
      </Button>
      <Button className="active" color="primary" variant="outline">
        Active Button
      </Button>
      <Button color="primary" variant="outline" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="success" variant="outline">
        Button
      </Button>
      <Button className="hover" color="success" variant="outline">
        Hovered Button
      </Button>
      <Button className="active" color="success" variant="outline">
        Active Button
      </Button>
      <Button color="success" variant="outline" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="outline">
        Button
      </Button>
      <Button className="hover" color="danger" variant="outline">
        Hovered Button
      </Button>
      <Button className="active" color="danger" variant="outline">
        Active Button
      </Button>
      <Button color="danger" variant="outline" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>`,...(N=(b=s.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var I,D,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="text">
        Button
      </Button>
      <Button className="hover" color="primary" variant="text">
        Hovered Button
      </Button>
      <Button className="active" color="primary" variant="text">
        Active Button
      </Button>
      <Button color="primary" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="secondary" variant="text">
        Button
      </Button>
      <Button className="hover" color="secondary" variant="text">
        Hovered Button
      </Button>
      <Button className="active" color="secondary" variant="text">
        Active Button
      </Button>
      <Button color="secondary" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="success" variant="text">
        Button
      </Button>
      <Button className="hover" color="success" variant="text">
        Hovered Button
      </Button>
      <Button className="active" color="success" variant="text">
        Active Button
      </Button>
      <Button color="success" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="text">
        Button
      </Button>
      <Button className="hover" color="danger" variant="text">
        Hovered Button
      </Button>
      <Button className="active" color="danger" variant="text">
        Active Button
      </Button>
      <Button color="danger" variant="text" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var f,A,H;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
      <Button color="primary" variant="ghost">
        Button
      </Button>
      <Button className="hover" color="primary" variant="ghost">
        Hovered Button
      </Button>
      <Button className="active" color="primary" variant="ghost">
        Active Button
      </Button>
      <Button color="primary" variant="ghost" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="secondary" variant="ghost">
        Button
      </Button>
      <Button className="hover" color="secondary" variant="ghost">
        Hovered Button
      </Button>
      <Button className="active" color="secondary" variant="ghost">
        Active Button
      </Button>
      <Button color="secondary" variant="ghost" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="success" variant="ghost">
        Button
      </Button>
      <Button className="hover" color="success" variant="ghost">
        Hovered Button
      </Button>
      <Button className="active" color="success" variant="ghost">
        Active Button
      </Button>
      <Button color="success" variant="ghost" isDisabled>
        Disabled Button
      </Button>
    </Inline>
    <Inline gap={SpaceSizes.md}>
      <Button color="danger" variant="ghost">
        Button
      </Button>
      <Button className="hover" color="danger" variant="ghost">
        Hovered Button
      </Button>
      <Button className="active" color="danger" variant="ghost">
        Active Button
      </Button>
      <Button color="danger" variant="ghost" isDisabled>
        Disabled Button
      </Button>
    </Inline>
  </Stack>`,...(H=(A=l.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var z,E,C;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Inline gap={SpaceSizes.md}>
    <Button color="primary" variant="solid" isLoading>
      Button
    </Button>

    <Button color="primary" variant="outline" isLoading>
      Button
    </Button>

    <Button color="primary" variant="text" isLoading>
      Button
    </Button>
    <Button color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="solid" isLoading />

    <Button color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="outline" isLoading />

    <Button color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="text" isLoading />
  </Inline>`,...(C=(E=u.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var _,L,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Inline gap={SpaceSizes.md}>
    <Button color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="solid">
      Button
    </Button>
    <Button aria-label="Wrench solid icon button" color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="solid" />
    <Button color="primary" iconEnd={{
    name: SSCIconNames.wrench,
    type: 'ssc'
  }} variant="solid">
      Button
    </Button>
    <Button color="primary" iconEnd={{
    name: SSCIconNames.cog,
    type: 'ssc'
  }} iconStart={{
    name: SSCIconNames.wrench
  }} variant="solid">
      Button
    </Button>

    <Button color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="outline">
      Button
    </Button>
    <Button aria-label="Wrench outline icon button" color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="outline" />
    <Button color="primary" iconEnd={{
    name: SSCIconNames.wrench,
    type: 'ssc'
  }} variant="outline">
      Button
    </Button>

    <Button color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="text">
      Button
    </Button>
    <Button aria-label="Wrench text icon button" color="primary" iconStart={{
    name: SSCIconNames.wrench
  }} variant="text" />
    <Button aria-label="Wrench text icon button" color="primary" iconEnd={{
    name: SSCIconNames.wrench,
    type: 'ssc'
  }} variant="text">
      Button
    </Button>
    <Button aria-label="Wrench text icon button" color="primary" iconName={SSCIconNames.wrench} iconType="ssc" variant="text" />
  </Inline>`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var W,T,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => <Stack gap={SpaceSizes.lg}>
    <Button variant="solid" isExpanded>
      Full width button
    </Button>
    <Button variant="outline" isExpanded>
      Full width button
    </Button>
    <Button variant="text" isExpanded>
      Full width button
    </Button>
  </Stack>`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const Nt=["Playground","SolidButtons","OutlineButtons","TextButtons","GhostButtons","LoadingButtons","ButtonsWithIconOverview","ExpandedButtons"];export{d as ButtonsWithIconOverview,m as ExpandedButtons,l as GhostButtons,u as LoadingButtons,s as OutlineButtons,r as Playground,i as SolidButtons,c as TextButtons,Nt as __namedExportsOrder,bt as default};
