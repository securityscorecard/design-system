import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{D as C}from"./Datatable-CE9AuCi0.js";import{f as a}from"./index-xJp9Kd2E.js";import"./index-CUoDZfxY.js";import"./index-BfLWfhlY.js";import{P as u}from"./Pill-XORrOTHp.js";import{C as d}from"./Cluster-HoiIP47J.js";function n(){var A="/home/runner/work/design-system/design-system/src/components/DatatableV2/mocks/data.ts",o="52f93af95d046d270d181d232cf5694d258eef15",t=window,s="__coverage__",c={path:"/home/runner/work/design-system/design-system/src/components/DatatableV2/mocks/data.ts",statementMap:{0:{start:{line:2,column:0},end:{line:2,column:15}},1:{start:{line:3,column:0},end:{line:3,column:52}},2:{start:{line:4,column:19},end:{line:23,column:2}},3:{start:{line:4,column:26},end:{line:23,column:1}},4:{start:{line:24,column:28},end:{line:30,column:1}},5:{start:{line:25,column:15},end:{line:25,column:17}},6:{start:{line:26,column:2},end:{line:28,column:3}},7:{start:{line:26,column:15},end:{line:26,column:16}},8:{start:{line:27,column:4},end:{line:27,column:28}},9:{start:{line:29,column:2},end:{line:29,column:14}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:19},end:{line:4,column:20}},loc:{start:{line:4,column:26},end:{line:23,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:24,column:28},end:{line:24,column:29}},loc:{start:{line:24,column:39},end:{line:30,column:1}},line:24}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/DatatableV2/mocks/data.ts"],names:["faker","seed","setDefaultRefDate","createItem","id","string","uuid","country","location","detectionMethod","helpers","arrayElements","findingsCount","number","int","ipAddress","internet","ipv4","observationDate","date","past","years","organization","domain","domainName","name","company","score","min","max","grade","arrayElement","status","generateData","items","data","i","push"],mappings:"AAAA,SAASA,aAAa;AA8BtBA,MAAMC,KAAK,EAAE;AACbD,MAAME,kBAAkB,0BAA0B;AAElD,MAAMC,aAAaA,OAAmB;AAAA,EACpCC,IAAIJ,MAAMK,OAAOC,KAAK;AAAA,EACtBC,SAASP,MAAMQ,SAASD,QAAQ;AAAA,EAChCE,iBAAiBT,MAAMU,QAAQC,cAA+B,CAC5D,SACA,OACA,OACA,aACA,YACA,aACA,OAAO,CACR;AAAA,EACDC,eAAeZ,MAAMa,OAAOC,IAAI,GAAI;AAAA,EACpCC,WAAWf,MAAMgB,SAASC,KAAK;AAAA,EAC/BC,iBAAiBlB,MAAMmB,KAAKC,KAAK;AAAA,IAAEC,OAAO;AAAA,EAAE,CAAC;AAAA,EAC7CC,cAAc;AAAA,IACZC,QAAQvB,MAAMgB,SAASQ,WAAW;AAAA,IAClCC,MAAMzB,MAAM0B,QAAQD,KAAK;AAAA,IACzBE,OAAO3B,MAAMa,OAAOC,IAAI;AAAA,MAAEc,KAAK;AAAA,MAAIC,KAAK;AAAA,IAAI,CAAC;AAAA,IAC7CC,OAAO9B,MAAMU,QAAQqB,aAAoB,CAAC,KAAK,KAAK,KAAK,KAAK,GAAG,CAAC;AAAA,EACpE;AAAA,EACAC,QAAQhC,MAAMU,QAAQqB,aAAqB,CACzC,WACA,cACA,YACA,WACA,SAAS,CACV;AACH;AAEO,aAAME,eAAeA,CAACC,UAAgC;AAC3D,QAAMC,OAAqB,CAAE;AAE7B,WAASC,IAAI,GAAGA,IAAIF,OAAOE,KAAK,GAAG;AACjCD,SAAKE,KAAKlC,WAAW,CAAC;AAAA,EACxB;AAEA,SAAOgC;AACT;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"52f93af95d046d270d181d232cf5694d258eef15"},l=t[s]||(t[s]={});(!l[A]||l[A].hash!==o)&&(l[A]=c);var r=l[A];return n=function(){return r},r}n();n().s[0]++;a.seed(42);n().s[1]++;a.setDefaultRefDate("2023-10-16T00:00:00.000Z");n().s[2]++;const p=()=>(n().f[0]++,n().s[3]++,{id:a.string.uuid(),country:a.location.country(),detectionMethod:a.helpers.arrayElements(["WHOIS","DNS","SSL","3rd party","SSC Res.","Pub. Data","Cloud"]),findingsCount:a.number.int(2e3),ipAddress:a.internet.ipv4(),observationDate:a.date.past({years:3}),organization:{domain:a.internet.domainName(),name:a.company.name(),score:a.number.int({min:40,max:100}),grade:a.helpers.arrayElement(["A","B","C","D","F"])},status:a.helpers.arrayElement(["Claimed","Attributed","Disputed","Removed","Dynamic"])});n().s[4]++;const E=A=>{n().f[1]++;const o=(n().s[5]++,[]);n().s[6]++;for(let t=(n().s[7]++,0);t<A;t+=1)n().s[8]++,o.push(p());return n().s[9]++,o};function e(){var A="/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/Template.tsx",o="4009db95498a2437dcc036c52b44707867f90d19",t=window,s="__coverage__",c={path:"/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/Template.tsx",statementMap:{0:{start:{line:6,column:23},end:{line:29,column:2}},1:{start:{line:14,column:4},end:{line:17,column:9}},2:{start:{line:20,column:23},end:{line:20,column:76}},3:{start:{line:27,column:4},end:{line:27,column:150}},4:{start:{line:27,column:115},end:{line:27,column:145}},5:{start:{line:30,column:17},end:{line:30,column:70}},6:{start:{line:30,column:43},end:{line:30,column:70}},7:{start:{line:31,column:0},end:{line:43,column:2}},8:{start:{line:42,column:21},end:{line:42,column:27}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:13,column:19},end:{line:13,column:20}},loc:{start:{line:13,column:30},end:{line:18,column:3}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:20,column:14},end:{line:20,column:15}},loc:{start:{line:20,column:23},end:{line:20,column:76}},line:20},2:{name:"(anonymous_2)",decl:{start:{line:26,column:8},end:{line:26,column:9}},loc:{start:{line:26,column:19},end:{line:28,column:3}},line:26},3:{name:"(anonymous_3)",decl:{start:{line:27,column:90},end:{line:27,column:91}},loc:{start:{line:27,column:115},end:{line:27,column:145}},line:27},4:{name:"(anonymous_4)",decl:{start:{line:30,column:17},end:{line:30,column:18}},loc:{start:{line:30,column:43},end:{line:30,column:70}},line:30},5:{name:"(anonymous_5)",decl:{start:{line:42,column:12},end:{line:42,column:13}},loc:{start:{line:42,column:21},end:{line:42,column:27}},line:42}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/DatatableV2/stories/Template.tsx"],names:["Datatable","generateData","Pill","Cluster","columns","accessorKey","header","enableHiding","headerComponent","props","column","columnDef","accessorFn","row","organization","grade","score","id","cell","getValue","map","val","Template","args","data","enablePersistentState","initialState","pagination","pageSize","rowsPerPageOptions","getRowId"],mappings:"AAea,SAeD,KAfC;AAZb,OAAOA,eAAe;AACtB,SAAqBC,oBAAoB;AAEzC,SAASC,YAAY;AACrB,SAASC,eAAe;AAEjB,aAAMC,UAA4C,CACvD;AAAA,EAAEC,aAAa;AAAA,EAAqBC,QAAQ;AAAA,EAAQC,cAAc;AAAK,GACvE;AAAA,EACEF,aAAa;AAAA,EACbC,QAAQ;AAAA,EACRE,iBAAkBC,WAAU;AAC1B,WAAO,qBAAC,UAAK;AAAA;AAAA,MAAIA,MAAMC,OAAOC,UAAUL;AAAAA,OAAO;AAAA,EACjD;AACF,GACA;AAAA,EACEM,YAAaC,SAAS,GAAEA,IAAIC,aAAaC,KAAM,IAAGF,IAAIC,aAAaE,KAAM;AAAA,EACzEV,QAAQ;AAAA,EACRW,IAAI;AACN,GACA;AAAA,EACEZ,aAAa;AAAA,EACbC,QAAQ;AAAA,EACRY,MAAOT,WAAU;AACf,WACE,oBAAC,WAAQ,KAAI,MACVA,gBAAMS,KAAKC,SAAwC,GAAGC,IAAKC,SAC1D,oBAAC,QAAe,OAAOA,OAAZA,IACZ,GACH;AAAA,EAEJ;AACF,CAAC;AAIH,MAAMC,WAAmBC,UAAS,oBAAC,aAAU,GAAIA,MAAQ;AACzDD,SAASC,OAAO;AAAA,EACdnB;AAAAA,EACAoB,MAAMvB,aAAa,EAAE;AAAA,EACrBwB,uBAAuB;AAAA,EACvBR,IAAI;AAAA,EACJS,cAAc;AAAA,IACZC,YAAY;AAAA,MAAEC,UAAU;AAAA,IAAE;AAAA,EAC5B;AAAA,EACAC,oBAAoB,CAAC,GAAG,IAAI,IAAI,IAAI,GAAG;AAAA,EACvCC,UAAWjB,SAAQA,IAAII;AACzB;AAEA,eAAeK;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4009db95498a2437dcc036c52b44707867f90d19"},l=t[s]||(t[s]={});(!l[A]||l[A].hash!==o)&&(l[A]=c);var r=l[A];return e=function(){return r},r}e();const g=(e().s[0]++,[{accessorKey:"organization.name",header:"Name",enableHiding:!0},{accessorKey:"organization.domain",header:"Domain",headerComponent:A=>(e().f[0]++,e().s[1]++,i.jsxs("span",{children:["🔗 ",A.column.columnDef.header]}))},{accessorFn:A=>(e().f[1]++,e().s[2]++,`${A.organization.grade} ${A.organization.score}`),header:"Score and grade",id:"score"},{accessorKey:"detectionMethod",header:"Detection method",cell:A=>{var o;return e().f[2]++,e().s[3]++,i.jsx(d,{gap:"xs",children:(o=A.cell.getValue())==null?void 0:o.map(t=>(e().f[3]++,e().s[4]++,i.jsx(u,{label:t},t)))})}}]);e().s[5]++;const m=A=>(e().f[4]++,e().s[6]++,i.jsx(C,{...A}));e().s[7]++;m.args={columns:g,data:E(25),enablePersistentState:!1,id:"datatable_template",initialState:{pagination:{pageSize:5}},rowsPerPageOptions:[5,10,25,50,100],getRowId:A=>(e().f[5]++,e().s[8]++,A.id)};const D=m;export{D as T,g as c,E as g};
//# sourceMappingURL=Template-DThkUfqA.js.map
