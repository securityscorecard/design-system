import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{S as o}from"./Spinner-b5BYo8Sk.js";import"./index-CTjT7uj6.js";import"./space-BY85GhUc.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./prop-Cw0eZkJ_.js";const v={title:"components/Spinner",component:o},r=a=>{const{dark:S}=a;return s.jsx("div",{style:{background:S?void 0:"#000",padding:"10px"},children:s.jsx(o,{...a})})};r.parameters={screenshot:{skip:!0}};const n=()=>s.jsx(o,{dark:!0}),e=()=>s.jsx("div",{style:{background:"#000",padding:"10px"},children:s.jsx(o,{})});e.parameters={backgrounds:{default:"black"}};r.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"DarkSpinner"};e.__docgenInfo={description:"",methods:[],displayName:"LightSpinner"};var d,t,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const {
    dark
  } = args;
  return <div style={{
    background: dark ? undefined : '#000',
    padding: '10px'
  }}>
      <Spinner {...args} />
    </div>;
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"() => <Spinner dark />",...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div style={{
  background: '#000',
  padding: '10px'
}}>
    <Spinner />
  </div>`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const b=["Playground","DarkSpinner","LightSpinner"];export{n as DarkSpinner,e as LightSpinner,r as Playground,b as __namedExportsOrder,v as default};
