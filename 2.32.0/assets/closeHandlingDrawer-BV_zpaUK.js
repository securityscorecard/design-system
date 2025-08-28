import{j as n}from"./jsx-runtime-BbjHj44Y.js";import{useMDXComponents as s}from"./index-Cd31CJfN.js";import{ae as a}from"./index-Bh0l0xji.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bin_s0Nz.js";import"../sb-preview/runtime.js";import"./index-CWFZYRor.js";import"./index-kifaGmES.js";import"./index-DrFu-skq.js";function t(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Guides/Close handling for Drawer"}),`
`,n.jsx(e.h1,{id:"closing-drawer-behaviour",children:"Closing Drawer behaviour"}),`
`,n.jsxs(e.p,{children:["Even though the close handling for a ",n.jsx(e.a,{href:"?path=/docs/components-drawer--playground",children:"Drawer"}),` might be implemented as a simple state change,
sometimes it might be necessary to prevent the `,n.jsx(e.a,{href:"?path=/docs/components-drawer--playground",children:"Drawer"}),` be closed until some action is finished.
(e.g. uploading a file or saving a form).`]}),`
`,n.jsx(e.h2,{id:"example-1",children:"Example 1"}),`
`,n.jsx(e.p,{children:"Here is an example of how we usually handle the closing functionality:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`export const Component = (args) => {
  const [isShown, setIsShown] = useState(false);

  return (
        {isShown && (
          <Drawer
            footer={<Footer />}
            title="Title"
            onClose={() => setIsShown(false)}
            {...args}
          >
            <Content />
          </Drawer>
        )}
  );
};
`})}),`
`,n.jsx(e.h2,{id:"example-2",children:"Example 2"}),`
`,n.jsxs(e.p,{children:["And here is an example of how to prevent a ",n.jsx(e.a,{href:"?path=/docs/components-drawer--playground",children:"Drawer"})," to be closed when there is an action running and you'll need to wait until it ends:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`export const Component = () => {
  // state used for handling the show/hide Drawer
  const [isShown, setIsShown] = useState(false);

  // state used for enforce user to not close before the action completes
  const [showForceCancel, setShowForceCancel] = useState(false);

  // replace this condition with your custom condition to wait for something
  const waitingForSomething = true;

  // onClick handler when user attempts to close the Drawer
  const handleClose = useCallback(() => {
    if (waitingForSomething) {
      // if the action is still running warn user
      setShowForceCancel(true);
    } else {
      // if not close safely
      setIsShown(false);
    }
  }, [waitingForSomething, setIsShown]);

  return (
      {isShown && (
        <Drawer
          footer={
            showForceCancel ? (
              <Stack gap="md">
                <Text size="md">
                  Your action is still in progress. You can continue waiting for
                  the upload to complete or click cancel upload and leave this
                  page.
                </Text>
                <Inline gap="md">
                  <Button isExpanded onClick={() => setShowForceCancel(false)}>
                    Wait for the action to complete
                  </Button>
                  <Button
                    color="danger"
                    isExpanded
                    onClick={() => {
                      setIsShown(false);
                    }}
                  >
                    Cancel action before it completes
                  </Button>
                </Inline>
              </Stack>
            ) : (
              <Stack justify="flex-end">
                <Inline gap="md">
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    isLoading={waitingForSomething}
                    onClick={() => {
                      // implement your action
                      setIsShown(false);
                    }}
                  >
                    Your action
                  </Button>
                </Inline>
              </Stack>
            )
          }
          onClose={handleClose}
        >
          Your Drawer content here
        </Drawer>
      )}
  );
};
`})}),`
`,n.jsx(e.h2,{id:"example-3",children:"Example 3"}),`
`,n.jsxs(e.p,{children:["Here is another example of how to prevent a ",n.jsx(e.a,{href:"?path=/docs/components-drawer--playground",children:"Drawer"})," to be closed when there is an action running and you'll need to wait until it ends:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`export const Component = () => {
  // state used for handling the show/hide Drawer
  const [isShown, setIsShown] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [displayWarning, setDisplayWarning] = useState(false);
  // onClick handler when user attempts to close the Drawer
  let click = 0;
  const handleClose = () => {
    // on first
    if (click === 0 && isProcessing) {
        setDisplayWarning(true);
        click ++;
        return;
    } else {
        setIsShown(false);
    }
  };

  return (
      {isShown && (
        <Drawer
          footer={
              <Stack justify="flex-end">
                <Inline gap="md">
                  // show warning if process is in progress
                  {setDisplayWarning && <Paragraph>Saving changes is in progress</Paragraph>}
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    isLoading={isProcessing}
                    onClick={() => {
                      // implement your action
                      setIsShown(false);
                    }}
                  >
                    Your action
                  </Button>
                </Inline>
              </Stack>
          }
          onClose={handleClose}
        >
          Your Drawer content here
        </Drawer>
      )}
  );
};
`})})]})}function g(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{g as default};
//# sourceMappingURL=closeHandlingDrawer-BV_zpaUK.js.map
