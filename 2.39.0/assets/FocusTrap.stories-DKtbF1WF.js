import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r}from"./index-ClcD9ViR.js";import{g as l}from"./storybook-CEy1qkXR.js";import"./index-B9xxIeg3.js";import{D as _}from"./index-DWtwgqyw.js";import"./index-BWSvOZ1Q.js";import"./index-CjzK29ej.js";import{T as i}from"./index-CEsunubm.js";import{F as c}from"./index-rCXHhFqP.js";import"./index-CiiIOpFy.js";import{B as t}from"./Button-B4atyZgv.js";import{I as d}from"./Inline-CzyJe68E.js";import{M as K}from"./Modal-7mER_0oy.js";import{S as a}from"./index-BeSa3Tgc.js";import{D as Y}from"./DropdownMenu-CRHjPnr3.js";import"./index-CtSHf3Pk.js";const U={title:"components/FocusTrap",component:c,argTypes:{children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}},isActive:{...l("boolean",{}),description:"Whether the focus trap is active"},onDeactivate:{control:{disable:!0},description:"Callback when focus trap is deactivated"},restoreFocus:{...l("boolean",{}),description:"Whether to restore focus to the previously focused element when deactivating"},allowEscapeKey:{...l("boolean",{}),description:"Whether to allow deactivation via Escape key"},allowClickOutside:{...l("boolean",{}),description:"Whether to allow deactivation via clicking outside"},allowTabOutside:{...l("boolean",{}),description:"Whether to allow deactivation via Tab key on the last focusable element"},className:{control:{type:"text"},description:"Additional CSS class name for the container"},as:{...l("select",{div:"div",section:"section",article:"article",main:"main"}),description:"Custom element type for the container"}},parameters:{docs:{description:{component:"FocusTrap component for constraining keyboard navigation within modals, drawers, and overlays. This component automatically manages focus trapping when active and provides accessible behavior following WCAG guidelines for modal dialogs."}}}},n=o=>{const[s,p]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>p(!0),children:"Open Focus Trap"}),e.jsx(c,{...o,isActive:s,children:e.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"white",border:"1px solid #ccc",padding:"20px",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",zIndex:1e3},children:[e.jsx(i,{children:"Focus Trap Content"}),e.jsxs(d,{gap:"md",style:{marginTop:"16px"},children:[e.jsx(t,{onClick:()=>p(!1),children:"Close"}),e.jsx(t,{variant:"outline",children:"Action"})]})]})})]})};n.args={isActive:!1,restoreFocus:!0};n.parameters={screenshot:{skip:!0}};const u=()=>{const[o,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Modal"}),o&&e.jsx(K,{size:"md",title:"Modal with Focus Trap",onClose:()=>s(!1),children:e.jsxs(a,{gap:"md",children:[e.jsx(i,{children:"This modal uses FocusTrap internally to constrain keyboard navigation. You can navigate with Tab/Shift+Tab, close with Escape, or click outside to close."}),e.jsxs(d,{gap:"md",children:[e.jsx(t,{onClick:()=>s(!1),children:"Cancel"}),e.jsx(t,{variant:"solid",onClick:()=>s(!1),children:"Confirm"})]})]})})]})},x=()=>{const[o,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Drawer"}),o&&e.jsx(_,{size:"md",title:"Drawer with Focus Trap",focusTrap:!0,onClose:()=>s(!1),children:e.jsxs(a,{gap:"md",style:{flex:1},children:[e.jsx(i,{children:"This drawer uses FocusTrap internally to constrain keyboard navigation. Focus is constrained within this drawer."}),e.jsx("div",{style:{flex:1},children:e.jsxs(a,{gap:"sm",children:[e.jsx(t,{variant:"outline",isExpanded:!0,children:"Menu Item 1"}),e.jsx(t,{variant:"outline",isExpanded:!0,children:"Menu Item 2"}),e.jsx(t,{variant:"outline",isExpanded:!0,children:"Menu Item 3"}),e.jsx("div",{children:e.jsx(Y,{actions:[{label:"More Actions",name:"moreActions",onClick:()=>console.log("More Actions clicked")}],children:e.jsx(t,{variant:"outline",children:"More Actions"})})})]})}),e.jsxs(d,{gap:"md",children:[e.jsx(t,{onClick:()=>s(!1),children:"Cancel"}),e.jsx(t,{variant:"solid",onClick:()=>s(!1),children:"Save"})]})]})})]})},m=()=>{const[o,s]=r.useState(!1),p=f=>{f.preventDefault(),f.stopPropagation(),s(!1)};return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Form"}),e.jsx(c,{as:"div",containerProps:{style:{background:"white",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",maxWidth:"600px",padding:"24px",width:"90%"}},isActive:o,children:e.jsxs(a,{gap:"md",children:[e.jsx(i,{as:"h2",id:"form-title",size:"lg",children:"User Information"}),e.jsx("form",{children:e.jsxs(a,{gap:"md",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"},type:"text"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"},type:"email"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",rows:4,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px",resize:"vertical"}})]})]})}),e.jsxs(d,{gap:"md",style:{marginTop:"16px"},children:[e.jsx(t,{onClick:p,children:"Cancel"}),e.jsx(t,{variant:"solid",onClick:p,children:"Submit"})]})]})})]})},h=()=>{const[o,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Custom Element"}),e.jsx(c,{as:"section",containerProps:{tabIndex:0,"aria-labelledby":"custom-title",style:{background:"white",border:"2px solid #007bff",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",left:"50%",padding:"20px",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",zIndex:1e3}},isActive:o,restoreFocus:!0,children:e.jsxs(a,{gap:"md",children:[e.jsx(i,{as:"h2",id:"custom-title",size:"lg",children:"Custom Section Element"}),e.jsx(i,{children:"This focus trap uses a section element instead of a div."}),e.jsxs(d,{gap:"md",children:[e.jsx(t,{onClick:()=>s(!1),children:"Close"}),e.jsx(t,{variant:"outline",children:"Action"})]})]})})]})},v=()=>{const[o,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open (No Escape)"}),e.jsx(c,{containerProps:{style:{background:"white",border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",left:"50%",padding:"20px",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",zIndex:1e3}},isActive:o,children:e.jsxs(a,{gap:"md",children:[e.jsx(i,{as:"h2",size:"lg",children:"No Escape Key"}),e.jsx(i,{children:"This focus trap doesn't allow closing with the Escape key. You must use the close button or click outside."}),e.jsx(t,{onClick:()=>s(!1),children:"Close"})]})})]})},g=()=>{const[o,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open (Tab Outside Allowed)"}),e.jsx(c,{containerProps:{style:{background:"white",border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",left:"50%",padding:"20px",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",zIndex:1e3}},isActive:o,children:e.jsxs(a,{gap:"md",children:[e.jsx(i,{as:"h2",size:"lg",children:"Tab Outside Allowed"}),e.jsx(i,{children:"This focus trap allows Tab key to escape when you reach the last focusable element. Clicking outside won't close it."}),e.jsxs(d,{gap:"md",children:[e.jsx(t,{onClick:()=>s(!1),children:"Close"}),e.jsx(t,{variant:"outline",children:"Action"})]})]})})]})};var b,k,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [isActive, setIsActive] = useState(false);
  return <div>
      <Button onClick={() => setIsActive(true)}>Open Focus Trap</Button>
      <FocusTrap {...args} isActive={isActive}>
        <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}>
          <Text>Focus Trap Content</Text>
          <Inline gap="md" style={{
          marginTop: '16px'
        }}>
            <Button onClick={() => setIsActive(false)}>Close</Button>
            <Button variant="outline">Action</Button>
          </Inline>
        </div>
      </FocusTrap>
    </div>;
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,j,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && <Modal size="md" title="Modal with Focus Trap" onClose={() => setIsOpen(false)}>
          <Stack gap="md">
            <Text>
              This modal uses FocusTrap internally to constrain keyboard
              navigation. You can navigate with Tab/Shift+Tab, close with
              Escape, or click outside to close.
            </Text>
            <Inline gap="md">
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="solid" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </Inline>
          </Stack>
        </Modal>}
    </div>;
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,I,S;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      {isOpen && <Drawer size="md" title="Drawer with Focus Trap" focusTrap onClose={() => setIsOpen(false)}>
          <Stack gap="md" style={{
        flex: 1
      }}>
            <Text>
              This drawer uses FocusTrap internally to constrain keyboard
              navigation. Focus is constrained within this drawer.
            </Text>
            <div style={{
          flex: 1
        }}>
              <Stack gap="sm">
                <Button variant="outline" isExpanded>
                  Menu Item 1
                </Button>
                <Button variant="outline" isExpanded>
                  Menu Item 2
                </Button>
                <Button variant="outline" isExpanded>
                  Menu Item 3
                </Button>
                <div>
                  <DropdownMenu actions={[{
                label: 'More Actions',
                name: 'moreActions',
                onClick: () => console.log('More Actions clicked')
              }]}>
                    <Button variant="outline">More Actions</Button>
                  </DropdownMenu>
                </div>
              </Stack>
            </div>

            <Inline gap="md">
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="solid" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </Inline>
          </Stack>
        </Drawer>}
    </div>;
}`,...(S=(I=x.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var A,B,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(false);
  };
  return <div>
      <Button onClick={() => setIsOpen(true)}>Open Form</Button>
      <FocusTrap as="div" containerProps={{
      style: {
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        padding: '24px',
        width: '90%'
      }
    }} isActive={isOpen}>
        <Stack gap="md">
          <Text as="h2" id="form-title" size="lg">
            User Information
          </Text>
          <form>
            <Stack gap="md">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} type="email" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'vertical'
              }} />
              </div>
            </Stack>
          </form>
          <Inline gap="md" style={{
          marginTop: '16px'
        }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="solid" onClick={handleClose}>
              Submit
            </Button>
          </Inline>
        </Stack>
      </FocusTrap>
    </div>;
}`,...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var F,E,M;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isActive, setIsActive] = useState(false);
  return <div>
      <Button onClick={() => setIsActive(true)}>Open Custom Element</Button>
      <FocusTrap as="section" containerProps={{
      tabIndex: 0,
      'aria-labelledby': 'custom-title',
      style: {
        background: 'white',
        border: '2px solid #007bff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        left: '50%',
        padding: '20px',
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000
      }
    }} isActive={isActive} restoreFocus>
        <Stack gap="md">
          <Text as="h2" id="custom-title" size="lg">
            Custom Section Element
          </Text>
          <Text>This focus trap uses a section element instead of a div.</Text>
          <Inline gap="md">
            <Button onClick={() => setIsActive(false)}>Close</Button>
            <Button variant="outline">Action</Button>
          </Inline>
        </Stack>
      </FocusTrap>
    </div>;
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var z,R,D;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [isActive, setIsActive] = useState(false);
  return <div>
      <Button onClick={() => setIsActive(true)}>Open (No Escape)</Button>
      <FocusTrap containerProps={{
      style: {
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        left: '50%',
        padding: '20px',
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000
      }
    }} isActive={isActive}>
        <Stack gap="md">
          <Text as="h2" size="lg">
            No Escape Key
          </Text>
          <Text>
            This focus trap doesn&apos;t allow closing with the Escape key. You
            must use the close button or click outside.
          </Text>
          <Button onClick={() => setIsActive(false)}>Close</Button>
        </Stack>
      </FocusTrap>
    </div>;
}`,...(D=(R=v.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var P,N,W;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [isActive, setIsActive] = useState(false);
  return <div>
      <Button onClick={() => setIsActive(true)}>
        Open (Tab Outside Allowed)
      </Button>
      <FocusTrap containerProps={{
      style: {
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        left: '50%',
        padding: '20px',
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000
      }
    }} isActive={isActive}>
        <Stack gap="md">
          <Text as="h2" size="lg">
            Tab Outside Allowed
          </Text>
          <Text>
            This focus trap allows Tab key to escape when you reach the last
            focusable element. Clicking outside won&apos;t close it.
          </Text>
          <Inline gap="md">
            <Button onClick={() => setIsActive(false)}>Close</Button>
            <Button variant="outline">Action</Button>
          </Inline>
        </Stack>
      </FocusTrap>
    </div>;
}`,...(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const G=["Playground","ModalExample","DrawerExample","FormExample","CustomElement","NoEscapeKey","TabOutsideAllowed"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomElement:h,DrawerExample:x,FormExample:m,ModalExample:u,NoEscapeKey:v,Playground:n,TabOutsideAllowed:g,__namedExportsOrder:G,default:U},Symbol.toStringTag,{value:"Module"}));export{re as F};
//# sourceMappingURL=FocusTrap.stories-DKtbF1WF.js.map
