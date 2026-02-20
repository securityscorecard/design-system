import{j as t}from"./jsx-runtime-CfatFE5O.js";import{a as St}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{B as n}from"./Button-DeEyH7QG.js";import"./index-CZUI53me.js";import{L as B}from"./Link-BoqlWC2R.js";import{S as Vt}from"./index-Cg7zxyij.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./index-DxcpycWO.js";import"./components-CyIJ-QL4.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-C7jOka_P.js";import"./Icon-CT8KWDtB.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./useLogger-Cw6vPSeD.js";import"./DSProvider-DMcFOGG0.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./index-mp3yOvdM.js";import"./Padbox-CE8msXy0.js";import"./Inline-JoR1gBjx.js";import"./prop-gA1VFyoz.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-MjzvoWTP.js";import"./require-router-link-w3KLx0uE.js";import"./react-router-dom-DocNO5f0.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./index-BiGW80Qt.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";const pe={title:"components/ButtonV2/ButtonV2",component:n,args:{onClick:St("button click"),className:"button"},argTypes:{children:{control:{type:"object"},name:"children",description:"Button label",type:{name:"string | string[]",required:!0}},size:{control:{type:"radio"},options:["sm","md","lg"],name:"size",description:"Sizing variant",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},variant:{control:{type:"select"},options:["base","highlight","danger","subtle","ghost","highlight-ghost","danger-ghost"],name:"variant",description:"Visual variant of the button",table:{type:{summary:"'base' | 'highlight' | 'danger' | 'subtle' | 'ghost' | 'highlight-ghost' | 'danger-ghost'"},defaultValue:{summary:"'base'"}}},iconStart:{control:{type:"object"},name:"iconStart",description:"Definition of icon that appears before button label",table:{type:{summary:"{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }"}}},iconEnd:{control:{type:"object"},name:"iconEnd",description:"Definition of icon that appears after button label",table:{type:{summary:"{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }"}}},minWidth:{control:{type:"number"},name:"minWidth",description:"Button minimal width in px. This property is not set by default",table:{type:{summary:"number"}}},isDisabled:{control:{type:"boolean"},name:"isDisabled",description:"Disable the button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},name:"isLoading",description:"Display loading spinner and disable button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingText:{control:{type:"text"},name:"loadingText",description:"Text displayed next to spinner in loading state",table:{type:{summary:"string"},defaultValue:{summary:"'Loading'"}}},isExpanded:{control:{type:"boolean"},name:"isExpanded",description:"Expands button to full width of the parrent component",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{control:{type:"object"},name:"as",description:"Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router",table:{type:{summary:"Element"}}}},parameters:{docs:{description:{component:"A Button is a fundamental interactive element in user interfaces,\nallowing users to trigger actions or navigate through an application. It serves\nas a clear call-to-action, prompting user engagement and facilitating task\ncompletion.\n\n```js\nimport { ButtonV2 } from '@securityscorecard/design-system';\n```\n## Using as links and with external routers\n\nIn `ButtonV2`, you must now explicitly define the element to be rendered using the `as` prop. The default value for `as` is `button`, but you can now pass in `a` or a custom React component (like `Link` from react-router-dom) to render the appropriate element.\nThis increases type-safety, as the component can correctly infer the available props based on the `as` value.\n\n## Coming from original Button component?\nWe prepared a comprehensive [migration guide](?path=/docs/guides-buttonv2-migration-guide--documentation) that should cover all main differences and help you with this transition."}}}},s={args:{children:"Button",size:"md",variant:"base"},parameters:{screenshot:{skip:!0}}},e={args:{children:"Button",size:"md",variant:"base"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},r={args:{...e.args,variant:"subtle"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},o={args:{...e.args,variant:"ghost"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},i={args:{...e.args,variant:"highlight"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},c={args:{...e.args,variant:"danger"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},m={args:{...e.args,variant:"danger-ghost"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},u={args:{...e.args,size:"sm"}},d={args:{...e.args,size:"md"}},p={args:{...e.args,size:"lg"}},l={args:{...e.args,isExpanded:!0}},g={args:{...e.args,isDisabled:!0}},h={args:{...e.args,isLoading:!0}},b={args:{...e.args,minWidth:200}},v={args:{...e.args,iconStart:{name:"cog"}}},f={args:{...e.args,iconEnd:{name:"angle-down"}}},y={args:{children:"Navigate to Link",size:"md",variant:"base"},render:a=>t.jsxs(Vt,{gap:"md",style:{alignItems:"flex-start"},children:[t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t.jsx("strong",{children:"ButtonV2 as Link component"})}),t.jsx(n,{as:B,href:"/destination",...a})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t.jsx("strong",{children:"ButtonV2 as anchor tag"})}),t.jsx(n,{as:"a",href:"/destination",...a})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t.jsx("strong",{children:"Regular Link component (for comparison)"})}),t.jsx(B,{href:"/destination",children:"Regular Link Text"})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:t.jsx("strong",{children:"Regular Button"})}),t.jsx(n,{...a})]})]}),parameters:{docs:{description:{story:"ButtonV2 can be rendered as a Link component using the `as` prop. This is useful for navigation buttons that need to behave as links while maintaining button styling."}}}},x={args:{children:"Button",iconStart:{name:"cog"},iconEnd:{name:"angle-down"}},render:a=>t.jsxs(Vt,{gap:"md",children:[t.jsx(n,{className:"button",size:"sm",variant:"base",isDisabled:!0,...a}),t.jsx(n,{className:"button",size:"sm",variant:"highlight",isDisabled:!0,...a}),t.jsx(n,{className:"button",size:"sm",variant:"danger",isDisabled:!0,...a}),t.jsx(n,{className:"button",size:"sm",variant:"subtle",isDisabled:!0,...a}),t.jsx(n,{className:"button",size:"sm",variant:"ghost",isDisabled:!0,...a}),t.jsx(n,{className:"button",size:"sm",variant:"danger-ghost",isDisabled:!0,...a}),t.jsx(n,{className:"button",size:"sm",variant:"highlight-ghost",isDisabled:!0,...a})]}),tags:["!dev","!autodocs"]};var V,S,z;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'md',
    variant: 'base'
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var k,j,D;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'md',
    variant: 'base'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(D=(j=e.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var L,N,E;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'subtle'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(E=(N=r.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var I,T,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'ghost'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var R,H,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'highlight'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(W=(H=i.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var C,G,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'danger'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    },
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var A,P,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'danger-ghost'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,q,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'sm'
  }
}`,...(O=(q=u.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var F,J,K;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'md'
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'lg'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,tt;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isExpanded: true
  }
}`,...(tt=($=l.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var et,at,nt;g.parameters={...g.parameters,docs:{...(et=g.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isDisabled: true
  }
}`,...(nt=(at=g.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,rt,ot;h.parameters={...h.parameters,docs:{...(st=h.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isLoading: true
  }
}`,...(ot=(rt=h.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,ct,mt;b.parameters={...b.parameters,docs:{...(it=b.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    minWidth: 200
  }
}`,...(mt=(ct=b.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var ut,dt,pt;v.parameters={...v.parameters,docs:{...(ut=v.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    iconStart: {
      name: 'cog'
    }
  }
}`,...(pt=(dt=v.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var lt,gt,ht;f.parameters={...f.parameters,docs:{...(lt=f.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    iconEnd: {
      name: 'angle-down'
    }
  }
}`,...(ht=(gt=f.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var bt,vt,ft;y.parameters={...y.parameters,docs:{...(bt=y.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    children: 'Navigate to Link',
    size: 'md',
    variant: 'base'
  },
  render: args => <Stack gap="md" style={{
    alignItems: 'flex-start'
  }}>
      <div>
        <p style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
          <strong>ButtonV2 as Link component</strong>
        </p>
        <ButtonV2 as={Link} href="/destination" {...args} />
      </div>
      <div>
        <p style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
          <strong>ButtonV2 as anchor tag</strong>
        </p>
        <ButtonV2 as="a" href="/destination" {...args} />
      </div>
      <div>
        <p style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
          <strong>Regular Link component (for comparison)</strong>
        </p>
        <Link href="/destination">Regular Link Text</Link>
      </div>
      <div>
        <p style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
          <strong>Regular Button</strong>
        </p>
        <ButtonV2 {...args} />
      </div>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'ButtonV2 can be rendered as a Link component using the \`as\` prop. ' + 'This is useful for navigation buttons that need to behave as links while maintaining button styling.'
      }
    }
  }
}`,...(ft=(vt=y.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};var yt,xt,Bt;x.parameters={...x.parameters,docs:{...(yt=x.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    iconStart: {
      name: 'cog'
    },
    iconEnd: {
      name: 'angle-down'
    }
  },
  render: args => <Stack gap="md">
      <ButtonV2 className="button" size="sm" variant="base" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="highlight" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="danger" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="subtle" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="ghost" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="danger-ghost" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="highlight-ghost" isDisabled {...args} />
    </Stack>,
  tags: ['!dev', '!autodocs']
}`,...(Bt=(xt=x.parameters)==null?void 0:xt.docs)==null?void 0:Bt.source}}};const le=["Playground","VariantBase","VariantSubtle","VariantGhost","VariantHighlight","VariantDanger","VariantDangerGhost","SizeSmall","SizeMedium","SizeLarge","IsExpanded","IsDisabled","IsLoading","HasMinWidth","HasIconStart","HasIconEnd","AsLinkComponent","VisualTestsDisabled"];export{y as AsLinkComponent,f as HasIconEnd,v as HasIconStart,b as HasMinWidth,g as IsDisabled,l as IsExpanded,h as IsLoading,s as Playground,p as SizeLarge,d as SizeMedium,u as SizeSmall,e as VariantBase,c as VariantDanger,m as VariantDangerGhost,o as VariantGhost,i as VariantHighlight,r as VariantSubtle,x as VisualTestsDisabled,le as __namedExportsOrder,pe as default};
//# sourceMappingURL=Button.stories-yt8Gm80f.js.map
