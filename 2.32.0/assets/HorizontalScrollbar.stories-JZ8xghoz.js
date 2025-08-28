import{D as l}from"./Datatable-D7pRJqFc.js";import"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLogger-D6HktrB1.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-a7QDy69_.js";import"./SelectionToolbar-w281wMCs.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-DRm3KUNF.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./index-7bldAnOT.js";import"./index-DCKWONtv.js";import"./Padbox-BDqsTa65.js";import"./index-C8Uj0hRh.js";import"./prop-gA1VFyoz.js";import"./Inline-C4eBN8Ve.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./index-p3Ne9M6I.js";import"./Button-DdSX4fQJ.js";import"./components-C9sJjMsI.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./useSafeTranslation-RSFuNJC9.js";import"./en-US-D2DA8Sg-.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-Bi547J60.js";import"./useContainerQuery-J3pQj2z2.js";import"./Skeleton-C3OdMv_p.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-CsW7DeuJ.js";import"./index-rm5yWBuc.js";import"./Tooltip-CNtW7lHP.js";import"./FloatingContext-Bl8tl6Fh.js";import"./ElementLabel-B8jQdsnd.js";import"./index-BMe2eh5I.js";import"./ControlledDropdown-D_lOGKEk.js";import"./index-DYWQy94d.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-BmgVlhkC.js";import"./useOuterCallback-B34oUwCq.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-COC-99yA.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-DCMymTJo.js";import"./modifiers.esm-D9hq2467.js";const zr={title:"components/DatatableV2/HorizontalScrollbar",component:l,parameters:{docs:{description:{component:"Demonstrates the keyboard-accessible horizontal scrollbar functionality."}}},argTypes:{id:{control:"text"},enableRowSelection:{control:"boolean"},enableSorting:{control:"boolean"}}},m=[{accessorKey:"name",header:"Name",size:300},{accessorKey:"surname",header:"Surname",size:300},{accessorKey:"color",header:"Color",size:300},{accessorKey:"extra1",header:"Extra Column 1",size:300},{accessorKey:"extra2",header:"Extra Column 2",size:300},{accessorKey:"extra3",header:"Extra Column 3",size:300},{accessorKey:"extra4",header:"Extra Column 4",size:300},{accessorKey:"extra5",header:"Extra Column 5",size:300}],c=[{name:"John",surname:"Doe",color:"red",extra1:"data1",extra2:"data2",extra3:"data3",extra4:"data4",extra5:"data5"},{name:"Jane",surname:"Smith",color:"blue",extra1:"data6",extra2:"data7",extra3:"data8",extra4:"data9",extra5:"data10"},{name:"Bob",surname:"Johnson",color:"green",extra1:"data11",extra2:"data12",extra3:"data13",extra4:"data14",extra5:"data15"},{name:"Alice",surname:"Brown",color:"yellow",extra1:"data16",extra2:"data17",extra3:"data18",extra4:"data19",extra5:"data20"},{name:"Charlie",surname:"Wilson",color:"purple",extra1:"data21",extra2:"data22",extra3:"data23",extra4:"data24",extra5:"data25"}],r={args:{id:"horizontal-scrollbar-demo",data:c,columns:m,enableRowSelection:!1,enableSorting:!0},parameters:{docs:{description:{story:"This table has wide columns that require horizontal scrolling. Use Tab to navigate to the horizontal scrollbar, then use arrow keys to scroll left/right, Home to scroll to start, End to scroll to end, and Page Up/Down for larger scroll increments."}}}},o={args:{id:"no-horizontal-scrollbar-demo",data:[{name:"John",surname:"Doe",color:"red"},{name:"Jane",surname:"Smith",color:"blue"},{name:"Bob",surname:"Johnson",color:"green"}],columns:[{accessorKey:"name",header:"Name"},{accessorKey:"surname",header:"Surname"},{accessorKey:"color",header:"Color"}],enableRowSelection:!1,enableSorting:!0},parameters:{docs:{description:{story:"This table has narrow columns that fit within the viewport, so no horizontal scrollbar is needed."}}}};var e,a,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    id: 'horizontal-scrollbar-demo',
    data: wideData,
    columns: wideColumns,
    enableRowSelection: false,
    enableSorting: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This table has wide columns that require horizontal scrolling. Use Tab to navigate to the horizontal scrollbar, then use arrow keys to scroll left/right, Home to scroll to start, End to scroll to end, and Page Up/Down for larger scroll increments.'
      }
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'no-horizontal-scrollbar-demo',
    data: [{
      name: 'John',
      surname: 'Doe',
      color: 'red'
    }, {
      name: 'Jane',
      surname: 'Smith',
      color: 'blue'
    }, {
      name: 'Bob',
      surname: 'Johnson',
      color: 'green'
    }],
    columns: [{
      accessorKey: 'name',
      header: 'Name'
    }, {
      accessorKey: 'surname',
      header: 'Surname'
    }, {
      accessorKey: 'color',
      header: 'Color'
    }],
    enableRowSelection: false,
    enableSorting: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This table has narrow columns that fit within the viewport, so no horizontal scrollbar is needed.'
      }
    }
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const wr=["WithHorizontalScrollbar","WithoutHorizontalScrollbar"];export{r as WithHorizontalScrollbar,o as WithoutHorizontalScrollbar,wr as __namedExportsOrder,zr as default};
//# sourceMappingURL=HorizontalScrollbar.stories-JZ8xghoz.js.map
