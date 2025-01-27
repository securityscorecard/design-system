import{j as s}from"./jsx-runtime-CfatFE5O.js";import{D as M}from"./Datatable-D-1nA43Z.js";import{f as o}from"./index-xJp9Kd2E.js";import"./index-j3TVFBpQ.js";import"./index-C0tcqiOb.js";import{C as m}from"./Cluster-BKESMogL.js";import{P as u}from"./Pill-BAusDNNE.js";function t(){var A="/home/runner/work/design-system/design-system/src/components/DatatableV2/mocks/data.ts",l="52f93af95d046d270d181d232cf5694d258eef15",n=window,C="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/DatatableV2/mocks/data.ts",statementMap:{0:{start:{line:2,column:0},end:{line:2,column:15}},1:{start:{line:3,column:0},end:{line:3,column:52}},2:{start:{line:4,column:19},end:{line:23,column:2}},3:{start:{line:4,column:26},end:{line:23,column:1}},4:{start:{line:24,column:28},end:{line:30,column:1}},5:{start:{line:25,column:15},end:{line:25,column:17}},6:{start:{line:26,column:2},end:{line:28,column:3}},7:{start:{line:26,column:15},end:{line:26,column:16}},8:{start:{line:27,column:4},end:{line:27,column:28}},9:{start:{line:29,column:2},end:{line:29,column:14}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:19},end:{line:4,column:20}},loc:{start:{line:4,column:26},end:{line:23,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:24,column:28},end:{line:24,column:29}},loc:{start:{line:24,column:39},end:{line:30,column:1}},line:24}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/DatatableV2/mocks/data.ts"],names:["faker","seed","setDefaultRefDate","createItem","id","string","uuid","country","location","detectionMethod","helpers","arrayElements","findingsCount","number","int","ipAddress","internet","ipv4","observationDate","date","past","years","organization","domain","domainName","name","company","score","min","max","grade","arrayElement","status","generateData","items","data","i","push"],mappings:"AAAA,SAASA,aAAa;AA8BtBA,MAAMC,KAAK,EAAE;AACbD,MAAME,kBAAkB,0BAA0B;AAElD,MAAMC,aAAaA,OAAmB;AAAA,EACpCC,IAAIJ,MAAMK,OAAOC,KAAK;AAAA,EACtBC,SAASP,MAAMQ,SAASD,QAAQ;AAAA,EAChCE,iBAAiBT,MAAMU,QAAQC,cAA+B,CAC5D,SACA,OACA,OACA,aACA,YACA,aACA,OAAO,CACR;AAAA,EACDC,eAAeZ,MAAMa,OAAOC,IAAI,GAAI;AAAA,EACpCC,WAAWf,MAAMgB,SAASC,KAAK;AAAA,EAC/BC,iBAAiBlB,MAAMmB,KAAKC,KAAK;AAAA,IAAEC,OAAO;AAAA,EAAE,CAAC;AAAA,EAC7CC,cAAc;AAAA,IACZC,QAAQvB,MAAMgB,SAASQ,WAAW;AAAA,IAClCC,MAAMzB,MAAM0B,QAAQD,KAAK;AAAA,IACzBE,OAAO3B,MAAMa,OAAOC,IAAI;AAAA,MAAEc,KAAK;AAAA,MAAIC,KAAK;AAAA,IAAI,CAAC;AAAA,IAC7CC,OAAO9B,MAAMU,QAAQqB,aAAoB,CAAC,KAAK,KAAK,KAAK,KAAK,GAAG,CAAC;AAAA,EACpE;AAAA,EACAC,QAAQhC,MAAMU,QAAQqB,aAAqB,CACzC,WACA,cACA,YACA,WACA,SAAS,CACV;AACH;AAEO,aAAME,eAAeA,CAACC,UAAgC;AAC3D,QAAMC,OAAqB,CAAE;AAE7B,WAASC,IAAI,GAAGA,IAAIF,OAAOE,KAAK,GAAG;AACjCD,SAAKE,KAAKlC,WAAW,CAAC;AAAA,EACxB;AAEA,SAAOgC;AACT;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"52f93af95d046d270d181d232cf5694d258eef15"},a=n[C]||(n[C]={});(!a[A]||a[A].hash!==l)&&(a[A]=i);var r=a[A];return t=function(){return r},r}t();t().s[0]++;o.seed(42);t().s[1]++;o.setDefaultRefDate("2023-10-16T00:00:00.000Z");t().s[2]++;const d=()=>(t().f[0]++,t().s[3]++,{id:o.string.uuid(),country:o.location.country(),detectionMethod:o.helpers.arrayElements(["WHOIS","DNS","SSL","3rd party","SSC Res.","Pub. Data","Cloud"]),findingsCount:o.number.int(2e3),ipAddress:o.internet.ipv4(),observationDate:o.date.past({years:3}),organization:{domain:o.internet.domainName(),name:o.company.name(),score:o.number.int({min:40,max:100}),grade:o.helpers.arrayElement(["A","B","C","D","F"])},status:o.helpers.arrayElement(["Claimed","Attributed","Disputed","Removed","Dynamic"])});t().s[4]++;const b=A=>{t().f[1]++;const l=(t().s[5]++,[]);t().s[6]++;for(let n=(t().s[7]++,0);n<A;n+=1)t().s[8]++,l.push(d());return t().s[9]++,l};function e(){var A="/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/Template.tsx",l="5a63f22369f01808e3be9958f88f0539c8a87911",n=window,C="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/Template.tsx",statementMap:{0:{start:{line:6,column:23},end:{line:29,column:2}},1:{start:{line:14,column:4},end:{line:17,column:9}},2:{start:{line:20,column:23},end:{line:20,column:76}},3:{start:{line:27,column:4},end:{line:27,column:150}},4:{start:{line:27,column:115},end:{line:27,column:145}},5:{start:{line:30,column:17},end:{line:30,column:70}},6:{start:{line:30,column:43},end:{line:30,column:70}},7:{start:{line:31,column:0},end:{line:43,column:2}},8:{start:{line:42,column:21},end:{line:42,column:27}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:13,column:19},end:{line:13,column:20}},loc:{start:{line:13,column:30},end:{line:18,column:3}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:20,column:14},end:{line:20,column:15}},loc:{start:{line:20,column:23},end:{line:20,column:76}},line:20},2:{name:"(anonymous_2)",decl:{start:{line:26,column:8},end:{line:26,column:9}},loc:{start:{line:26,column:19},end:{line:28,column:3}},line:26},3:{name:"(anonymous_3)",decl:{start:{line:27,column:90},end:{line:27,column:91}},loc:{start:{line:27,column:115},end:{line:27,column:145}},line:27},4:{name:"(anonymous_4)",decl:{start:{line:30,column:17},end:{line:30,column:18}},loc:{start:{line:30,column:43},end:{line:30,column:70}},line:30},5:{name:"(anonymous_5)",decl:{start:{line:42,column:12},end:{line:42,column:13}},loc:{start:{line:42,column:21},end:{line:42,column:27}},line:42}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/Template.tsx"],names:["Datatable","generateData","Pill","Cluster","columns","accessorKey","header","enableHiding","headerComponent","props","column","columnDef","accessorFn","row","organization","grade","score","id","cell","getValue","map","val","Template","args","data","enablePersistentState","initialState","pagination","pageSize","rowsPerPageOptions","getRowId"],mappings:"AAca,SAeD,KAfC;AAZb,OAAOA,eAAe;AACtB,SAAqBC,oBAAoB;AAEzC,SAASC,YAAY;AACrB,SAASC,eAAe;AAEjB,aAAMC,UAA4C,CACvD;AAAA,EAAEC,aAAa;AAAA,EAAqBC,QAAQ;AAAA,EAAQC,cAAc;AAAK,GACvE;AAAA,EACEF,aAAa;AAAA,EACbC,QAAQ;AAAA,EACRE,iBAAkBC,WAAU;AAC1B,WAAO,qBAAC,UAAK;AAAA;AAAA,MAAIA,MAAMC,OAAOC,UAAUL;AAAAA,OAAO;AAAA,EACjD;AACF,GACA;AAAA,EACEM,YAAaC,SAAQ,GAAGA,IAAIC,aAAaC,KAAK,IAAIF,IAAIC,aAAaE,KAAK;AAAA,EACxEV,QAAQ;AAAA,EACRW,IAAI;AACN,GACA;AAAA,EACEZ,aAAa;AAAA,EACbC,QAAQ;AAAA,EACRY,MAAOT,WAAU;AACf,WACE,oBAAC,WAAQ,KAAI,MACVA,gBAAMS,KAAKC,SAAwC,GAAGC,IAAKC,SAC1D,oBAAC,QAAe,OAAOA,OAAZA,IACZ,GACH;AAAA,EAEJ;AACF,CAAC;AAIH,MAAMC,WAAmBC,UAAS,oBAAC,aAAU,GAAIA,MAAQ;AACzDD,SAASC,OAAO;AAAA,EACdnB;AAAAA,EACAoB,MAAMvB,aAAa,EAAE;AAAA,EACrBwB,uBAAuB;AAAA,EACvBR,IAAI;AAAA,EACJS,cAAc;AAAA,IACZC,YAAY;AAAA,MAAEC,UAAU;AAAA,IAAE;AAAA,EAC5B;AAAA,EACAC,oBAAoB,CAAC,GAAG,IAAI,IAAI,IAAI,GAAG;AAAA,EACvCC,UAAWjB,SAAQA,IAAII;AACzB;AAEA,eAAeK;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5a63f22369f01808e3be9958f88f0539c8a87911"},a=n[C]||(n[C]={});(!a[A]||a[A].hash!==l)&&(a[A]=i);var r=a[A];return e=function(){return r},r}e();const p=(e().s[0]++,[{accessorKey:"organization.name",header:"Name",enableHiding:!0},{accessorKey:"organization.domain",header:"Domain",headerComponent:A=>(e().f[0]++,e().s[1]++,s.jsxs("span",{children:["🔗 ",A.column.columnDef.header]}))},{accessorFn:A=>(e().f[1]++,e().s[2]++,`${A.organization.grade} ${A.organization.score}`),header:"Score and grade",id:"score"},{accessorKey:"detectionMethod",header:"Detection method",cell:A=>{var l;return e().f[2]++,e().s[3]++,s.jsx(m,{gap:"xs",children:(l=A.cell.getValue())==null?void 0:l.map(n=>(e().f[3]++,e().s[4]++,s.jsx(u,{label:n},n)))})}}]);e().s[5]++;const I=A=>(e().f[4]++,e().s[6]++,s.jsx(M,{...A}));e().s[7]++;I.args={columns:p,data:b(25),enablePersistentState:!1,id:"datatable_template",initialState:{pagination:{pageSize:5}},rowsPerPageOptions:[5,10,25,50,100],getRowId:A=>(e().f[5]++,e().s[8]++,A.id)};function c(){var A="/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/argTypes.ts",l="a644d5b387d63443a3d514aac033703559112161",n=window,C="__coverage__",i={path:"/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/argTypes.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/argTypes.ts"],names:["columns","control","type","name","value","raw","accessorFn","accessorKey","header","headerComponent","cell","columnDefType","enableColumnActions","renderHeaderTooltip","required","description","table","summary","data","enablePersistentState","id","initialState","rowsPerPageOptions","getRowId","enableColumnOrdering","enableColumnPinning","enableColumnResizing","enableExpanding","enableExpandAll","enableFullScreenMode","enableHiding","enableMultiRowSelection","enableMultiSort","enableMultiRemove","enablePagination","enableRowActions","enableRowSelection","enableBatchRowSelection","enableRowsPerPage","enableSelectAll","enableSelectionToolbar","enableSorting","enableSortingRemoval","enableTopToolbar","onFullscreenModeChange","onShowColumnSettings","onActiveRowIdChange","onRowClick","renderDetailPanel","renderNoDataFallback","renderRowSelectionActions","rowActions","label","iconName","iconType","onClick","isDisabled","isDestructive","rowCount","rowSelectionMode","options","selectAllMode","state"],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a644d5b387d63443a3d514aac033703559112161"},a=n[C]||(n[C]={});(!a[A]||a[A].hash!==l)&&(a[A]=i);var r=a[A];return c=function(){return r},r}c();const f={columns:{control:{type:"object"},name:"columns",type:{name:"array",value:[{raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,name:"intersection",value:[{raw:`Omit<
  ColumnDef<D, V>,
  | 'accessorFn'
  | 'cell'
  | 'header'
  | 'aggregatedCell'
  | 'aggregationFn'
  | 'enableColumnFilter'
  | 'enableGlobalFilter'
  | 'enableGrouping'
  | 'filterFn'
  | 'footer'
  | 'getGroupingValue'
  | 'getUniqueValues'
>`,name:"other",value:"Omit"},{raw:`{
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * \`\`\`
   *
   * You can extract full name with:
   * \`\`\`
   * {
   *   header: 'Full name'
   *   accessorFn: row => \`\${row.firstName} \${row.lastName}
   *   id: 'fullname
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * \`\`\`
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'Age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * \`header\` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use \`headerComponent\` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be \`data\` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to \`display\`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - \`column\` - current column object
   *  - \`header\` - current header object
   *  - \`table\` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
}`,name:"object",value:{accessorFn:{raw:"AccessorFn<D, V>",name:"other",value:"AccessorFn"},accessorKey:{raw:"DeepKeys<D> | (string & Record<string, unknown>)",name:"union",value:[{raw:"DeepKeys<D>",name:"other",value:"DeepKeys"},{name:"other",value:"unknown"}]},header:{name:"string"},headerComponent:{raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,name:"function"},cell:{raw:`(props: {
  cell: DatatableCell<D>;
  column: DatatableColumn<D, V>;
  getValue: Getter<V>;
  renderValue: Getter<V | null>;
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,name:"function"},columnDefType:{raw:"'display' | 'data'",name:"enum",value:["display","data"]},enableColumnActions:{name:"boolean"},renderHeaderTooltip:{raw:`(props: {
  column: DatatableColumn<D, V>;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,name:"function"}}}]}],required:!0,raw:"DatatableColumnDef<D>[]"},description:"Definition of the table columns. Each column definition is REQUIRED to have `header` property\nset. If you define a column that is not used for displaing row data (e.g. have ...),\nplease provide `columnDefType: 'display'`. Setting this property will disable some unnecessary\nfunctionalities and filter out the column from column orderdering.",table:{type:{summary:"DatatableColumnDef<D>[]"}}},data:{control:{type:"object"},name:"data",type:{name:"array",value:[{name:"other",value:"D"}],required:!0,raw:"D[]"},description:"Table data that will be displayed.",table:{type:{summary:"D[]"}}},enablePersistentState:{control:{type:"boolean"},name:"enablePersistentState",type:{name:"boolean",required:!1},description:"Enables/disables storing table state into LocalStorage. This will automatically store pinned\nand hidden columns, columns order and size and sorting. This property REQUIRES 'id' prop to be\nset. The state will be stored in LS with key in format `sscds_dt_<id>`.",table:{type:{summary:"boolean"}}},id:{control:{type:"text"},name:"id",type:{name:"string",required:!0},description:"Unique table identifier. Used as id for storing table state to LocalStorage when enablePersistentState is enabled",table:{type:{summary:"string"}}},initialState:{control:{type:"object"},name:"initialState",type:{name:"other",value:"Partial",required:!1,raw:"Partial<DatatableInitialState>"},description:`Default state of the table. This is used when table is initialized and is used when state is
restored to default.`,table:{type:{summary:"Partial"}}},rowsPerPageOptions:{control:{type:"object"},name:"rowsPerPageOptions",type:{name:"array",value:[{name:"number"}],required:!1,raw:"number[]"},description:"List of options for the row count displayed on the current page.\n\ndefault: `[10, 25, 50, 100]`",table:{type:{summary:"number[]"}}},getRowId:{name:"getRowId",type:{name:"function"}},enableColumnActions:{control:{type:"boolean"},name:"enableColumnActions",description:"Enables/disables actions menu in column header with column-related actions.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableColumnOrdering:{control:{type:"boolean"},name:"enableColumnOrdering",description:`Enables/disables column ordering for the table.
Controlled in table column settings panel accessible through the column actions menu.`,type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableColumnPinning:{control:{type:"boolean"},name:"enableColumnPinning",description:`Enables/disables column pinning for the table. Controlled in the column actions menu or table
column settings panel accessible through the column actions menu.`,type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableColumnResizing:{control:{type:"boolean"},name:"enableColumnResizing",description:`Enables/disables column resizing for the table. Columns can be resized by dragging handler in
the column header.`,type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableExpanding:{control:{type:"boolean"},name:"enableExpanding",description:"Enables/disables expanding detail panel for all rows.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableExpandAll:{control:{type:"boolean"},name:"enableExpandAll",description:"Enables/disables button in the table header that expands all detail panels at once.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableFullScreenMode:{control:{type:"boolean"},name:"enableFullScreenMode",description:"Enables/disables switching between fullscreen and normal mode.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableHiding:{control:{type:"boolean"},name:"enableHiding",description:`Enables/disables column hiding for the table. Controlled in the column actions menu or table
column settings panel accessible through the column actions menu.`,type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableMultiRowSelection:{control:{type:"object"},name:"enableMultiRowSelection",description:"Enables/disables selection of multiple rows in the table. If this is `false` radio buttons will\nbe displayed instead of checkboxes and there will be no select all option in the table header.",type:{required:!1,raw:"TableOptions<D>['enableMultiRowSelection']",name:"other",value:"TableOptions['enableMultiRowSelection']"},table:{type:{summary:"TableOptions['enableMultiRowSelection']"}}},enableMultiSort:{control:{type:"boolean"},name:"enableMultiSort",description:`Enables/disables if multiple columns can be sorted at the same time. If enabled multiple columns
can be sorted while SHIFT key is hold`,type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableMultiRemove:{control:{type:"boolean"},name:"enableMultiRemove",description:"Enables/disables the ability to remove multi-sorts",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enablePagination:{control:{type:"boolean"},name:"enablePagination",description:"Enables/disables pagination for the table.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableRowActions:{control:{type:"boolean"},name:"enableRowActions",description:"Enables/disables row actions column for the table.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableRowSelection:{control:{type:"object"},name:"enableRowSelection",description:"Enables/disables row selection for the table.",type:{required:!1,raw:"TableOptions<D>['enableRowSelection']",name:"other",value:"TableOptions['enableRowSelection']"},table:{type:{summary:"TableOptions['enableRowSelection']"}}},enableBatchRowSelection:{control:{type:"boolean"},name:"enableBatchRowSelection",description:"Enables/disables batch row selection when `Shift` key is pressed.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableRowsPerPage:{control:{type:"boolean"},name:"enableRowsPerPage",description:"Enables/disables rows per page selector for the table. This property REQUIRES\n`enablePagination` to be true.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableSelectAll:{control:{type:"boolean"},name:"enableSelectAll",description:"Enables/disables checkbox in the table header that selects all rows at once.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableSelectionToolbar:{control:{type:"boolean"},name:"enableSelectionToolbar",description:"Enables/disables the selection toolbar with the batch action buttons. If this is set to `false`\nconsumers has to control the selection state on their own as the Datatable doesn't provide other\nway how to access the interal state.",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableSorting:{control:{type:"boolean"},name:"enableSorting",description:"Enables/disables table sorting",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableSortingRemoval:{control:{type:"boolean"},name:"enableSortingRemoval",description:"Enables/disables if column can be toggled to unsorted state after sorting happened before",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},enableTopToolbar:{control:{type:"boolean"},name:"enableTopToolbar",description:"Enables/disables the top toolbar with table settings buttons",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"}}},onFullscreenModeChange:{control:{type:"object"},name:"onFullscreenModeChange",description:"If provided, this function will be called with an `updaterFn` when `state.isFullscreenMode`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.isFullscreenMode` option.",type:{required:!1,raw:"Dispatch<SetStateAction<boolean>>",name:"other",value:"Dispatch"},table:{type:{summary:"Dispatch"}}},onShowColumnSettings:{control:{type:"object"},name:"onShowColumnSettings",description:"If provided, this function will be called with an `updaterFn` when `state.showColumnSetting`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.showColumnSettings` option.",type:{required:!1,raw:"Dispatch<SetStateAction<boolean>>",name:"other",value:"Dispatch"},table:{type:{summary:"Dispatch"}}},onActiveRowIdChange:{control:{type:"object"},name:"onActiveRowIdChange",description:"If provided, this function will be called with an `updaterFn` when `state.activeRowId`\nchanges. This overrides the default internal state management, so you are expected to manage\nthis state on your own. You can pass the managed state back to the table via the\n`tableOptions.state.activeRowId` option.",type:{required:!1,raw:"Dispatch<SetStateAction<string>>",name:"other",value:"Dispatch"},table:{type:{summary:"Dispatch"}}},onRowClick:{name:"onRowClick",description:"Callback that is called when user clicks anywhere in the row area. Clicking on the selection\ncheckbox, row expand button and the row actions stops event propagation and does not trigger\nthe row click callback. We are passing argmuments into the callback:\n - `row` - current row, row data are accessible through `row.original`\n - `table` - current instance of the table",type:{required:!1,raw:`(props: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => void`,name:"function"},table:{type:{summary:`(props: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => void`}}},renderDetailPanel:{name:"renderDetailPanel",description:"Provide your own implementation of row details panel. This property accepts React component\nwith properties:\n - `row` - current row, row data are accessible through `row.original`\n - `table` - current instance of the table",type:{required:!1,raw:`(props: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`,name:"function"},table:{type:{summary:`(props: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => ReactNode`}}},renderNoDataFallback:{name:"renderNoDataFallback",description:"You can provide your own implementation of the state when there are no data in the table. This\nproperty accepts React component with one property `table` which holds current instance of the\ntable.",type:{required:!1,raw:"(props: { table: DatatableInstance<D> }) => ReactNode",name:"function"},table:{type:{summary:"(props: { table: DatatableInstance<D> }) => ReactNode"}}},renderRowSelectionActions:{name:"renderRowSelectionActions",description:"You can provide your own implementation of the row actions container. This property accepts\nReact component with properties:\n - `selectedRows` - array of currently selected rows or list of row ids if manualPagination is enabled and rowSelectionMode is set to 'multi-page'\n - `totalRowCount` - count of all rows in the table\n - `table` - current instance of the table",type:{required:!1,raw:`(props: {
  selectedRows: D[] | (string | number)[];
  totalRowCount: number;
  table: DatatableInstance<D>;
}) => ReactNode`,name:"function"},table:{type:{summary:`(props: {
  selectedRows: D[] | (string | number)[];
  totalRowCount: number;
  table: DatatableInstance<D>;
}) => ReactNode`}}},rowActions:{control:{type:"object"},name:"rowActions",description:`List of actions available on the row data. Actions will be rendered as last column of the table.
If only one action is provided it will be rendered directly in the column. If multiple actions
are provided actions will be rendered in dropdown menu.`,type:{required:!1,raw:"RowAction<D>[]",name:"array",value:[{raw:`null | {
  label: RowActionCallbackUnion<Data, string>;
  iconName: RowActionCallbackUnion<Data, IconNames>;
  iconType?: RowActionCallbackUnion<Data, RegularIconTypes>;
  onClick(props: {
    row: Row<Data>;
    table: Instance<Data>;
  }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<Data, boolean>;
  isDestructive?: boolean;
}`,name:"union",value:[{name:"other",value:"null"},{raw:`{
  label: RowActionCallbackUnion<Data, string>;
  iconName: RowActionCallbackUnion<Data, IconNames>;
  iconType?: RowActionCallbackUnion<Data, RegularIconTypes>;
  onClick(props: {
    row: Row<Data>;
    table: Instance<Data>;
  }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<Data, boolean>;
  isDestructive?: boolean;
}`,name:"object",value:{label:{raw:`| Type
| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)`,name:"union",value:[{name:"string"},{name:"other",value:"unknown"}]},iconName:{raw:`| Type
| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)`,name:"union",value:[{name:"string"},{name:"other",value:"unknown"}]},iconType:{raw:`| Type
| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)`,name:"union",value:[{name:"string"},{name:"other",value:"unknown"}]},onClick:{raw:"(event: Event) => void",name:"function"},isDisabled:{raw:`| Type
| ((props: { row: Row<Data>; table: Instance<Data> }) => Type)`,name:"union",value:[{name:"string"},{name:"other",value:"unknown"}]},isDestructive:{name:"boolean"}}}]}]},table:{type:{summary:"RowAction<D>[]"}}},rowCount:{control:{type:"number"},name:"rowCount",description:`Expected number of rows in the dataset which is used for displaying pagination correctly when
pagination is not managed internally. This property is REQUIRED for the manual (managed,
server-side) pagination.`,type:{required:!1,name:"number"},table:{type:{summary:"number"}}},rowSelectionMode:{control:{type:"radio"},options:["single-page","multi-page"],name:"rowSelectionMode",description:"Available only if `manualPagination: true`.\n\ndefault: 'single-page`",type:{required:!1,raw:"'single-page' | 'multi-page'",name:"enum"},table:{type:{summary:"union"}}},selectAllMode:{control:{type:"radio"},options:["page","all"],name:"selectAllMode",description:"Switch mode for the select all checkbox in the table header. When `page` is set checkbox will\nselect all rows in the current page. When `all` is set checkbox will select all rows in the\ntable.",type:{required:!1,raw:"'page' | 'all'",name:"enum"},table:{type:{summary:"union"}}},state:{control:{type:"object"},name:"state",description:"Current state of the table. Used when you need to manage table state on your own.",type:{required:!1,raw:"Partial<DatatableState>",name:"other",value:"Partial"},table:{type:{summary:"Partial"}}}};export{I as T,f as a,p as c,b as g};
//# sourceMappingURL=argTypes-CLrsugrY.js.map
