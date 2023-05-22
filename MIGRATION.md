# Migration

- [From version 1.x to 2.0.0](#from-version-1x-to-200)
  - [Monospace font is not bundled](#monospace-font-is-not-bundled)
  - [Accordion and Collapsible components unified](#accordion-and-collapsible-components-unified)

## From version 1.x to 2.0.0

### Monospace font is not bundled

Design System 2.0.0 does not bundle monospace (Space Mono) font with the package anymore. We decided to remove font files from the package to save package size. We are providing guide how to install needed fonts in our Storybook Docs.

### Accordion and Collapsible components unified

Since v2.0.0 we removed the Collapsible component. We rewrote the Accordion component to accommodate the original use cases for the Collapsible component. The new Accordion component no longer uses the `items` property to render its content but rather uses `AccordionItem`, `AccordionTrigger` and `AccordionContent` compound components to compose the items. The `AccordionItem` component has the required `id` property that is needed to control the Accordion.

We also decided to revisit Accordion API. We added a new `variant` property with `inline` (default) and `regular` (original Collapsible) values and removed the `isCard` property.

To better align Accordion API with the rest of the components we decided to update some properties:

- `isCollapsedOnOpen` is renamed to a more straightforward `type` with values `single` (default) and `multiple`
- `openItems` is changed to `value` to follow the standard controlled component prop name. It takes either `string` (`type: 'single'`) or `string[]` (`type: 'multiple'`)
- `defaultValue` is added for defining open items for uncontrolled component. It takes either `string` (`type: 'single'`) or `string[]` (`type: 'multiple'`)
- `onValueChange` callback is added. This callback is called when the user clicks on the `AccordionTrigger`. As the first argument of the callback, we pass the item id.

#### v1

```jsx
<Accordion
  items={[
    {
      content: 'Content of item 1',
      id: 'item1',
      isOpen: true,
      title: 'Item 1',
    },
    {
      content: 'Content of item 2',
      id: 'item2',
      title: 'Item 2',
    },
  ]}
/>
```

#### v2

```jsx
<Accordion>
  <AccordionItem id="item1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content of item 1</AccordionContent>
  </AccordionItem>
  <AccordionItem id="item2">
    <AccordionTrigger>Item 2</AccordionTrigger>
    <AccordionContent>Content of item 2</AccordionContent>
  </AccordionItem>
</Accordion>
```
