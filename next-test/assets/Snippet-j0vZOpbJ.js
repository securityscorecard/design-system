import{j as m}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{q as _}from"./styled-components.browser.esm-6IU7b-y2.js";import"./index-D7SQqnNj.js";import{C as j}from"./index-DZGjp5Sd.js";import{E as k}from"./ErrorBoundary-CmjVNTjy.js";import{u as S}from"./useLogger-CCAiqPwH.js";import{p as O}from"./index-Bb-be-4U.js";import{I as P}from"./IconButton-Dy0o1yF0.js";import{B as U}from"./Button-CAJpGfaD.js";import{S as T}from"./index-BavDiaxs.js";import{P as z}from"./Padbox-DtjBCBeh.js";function f(){var n="/Users/radekpodrazky/Projects/design-system/src/components/ErrorBoundary/index.tsx",o="8bb70608535b47c2a0cb8cc51734d8981e82022f",l=window,t="__coverage__",a={path:"/Users/radekpodrazky/Projects/design-system/src/components/ErrorBoundary/index.tsx",statementMap:{0:{start:{line:3,column:0},end:{line:9,column:50}},1:{start:{line:5,column:4},end:{line:5,column:48}},2:{start:{line:7,column:4},end:{line:7,column:1074}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/ErrorBoundary/index.tsx"],names:[],mappings:"AAAA;AACA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8bb70608535b47c2a0cb8cc51734d8981e82022f"},r=l[t]||(l[t]={});(!r[n]||r[n].hash!==o)&&(r[n]=a);var c=r[n];return f=function(){return c},c}f();f().s[0]++;try{f().s[1]++,ErrorBoundary.displayName="ErrorBoundary",f().s[2]++,ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},justify:{defaultValue:{value:"center"},description:"",name:"justify",required:!1,type:{name:"JustifyContent"}},illustration:{defaultValue:null,description:"",name:"illustration",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},title:{defaultValue:{value:"We cannot show this information now"},description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:{value:"If the problem persists, contact support."},description:"",name:"content",required:!1,type:{name:"ReactNode"}}}}}catch{}function h(n,o){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),l.push.apply(l,t)}return l}function x(n){for(var o=1;o<arguments.length;o++){var l=arguments[o]!=null?arguments[o]:{};o%2?h(Object(l),!0).forEach(function(t){K(n,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):h(Object(l)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(l,t))})}return n}function K(n,o,l){return o=q(o),o in n?Object.defineProperty(n,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[o]=l,n}function q(n){var o=W(n,"string");return typeof o=="symbol"?o:String(o)}function W(n,o){if(typeof n!="object"||n===null)return n;var l=n[Symbol.toPrimitive];if(l!==void 0){var t=l.call(n,o||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}const N=w({});function w(n){return o.withOptions=l=>w(x(x({},n),l)),o;function o(l,...t){const a=typeof l=="string"?[l]:l.raw,{escapeSpecialCharacters:r=Array.isArray(l)}=n;let c="";for(let u=0;u<a.length;u++){let s=a[u];r&&(s=s.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\{/g,"{")),c+=s,u<t.length&&(c+=t[u])}const y=c.split(`
`);let A=null;for(const u of y){const s=u.match(/^(\s+)\S+/);if(s){const d=s[1].length;A?A=Math.min(A,d):A=d}}if(A!==null){const u=A;c=y.map(s=>s[0]===" "||s[0]==="	"?s.slice(u):s).join(`
`)}return c.trim().replace(/\\n/g,`
`)}}function i(){var n="/Users/radekpodrazky/Projects/design-system/src/hooks/useClipboard.ts",o="add247b4f9959085b1a96e9fc79a8762dcf08be0",l=window,t="__coverage__",a={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/useClipboard.ts",statementMap:{0:{start:{line:4,column:2},end:{line:6,column:3}},1:{start:{line:5,column:4},end:{line:5,column:47}},2:{start:{line:7,column:2},end:{line:7,column:50}},3:{start:{line:9,column:28},end:{line:28,column:1}},4:{start:{line:10,column:34},end:{line:10,column:49}},5:{start:{line:13,column:6},end:{line:13,column:31}},6:{start:{line:14,column:15},end:{line:23,column:3}},7:{start:{line:15,column:4},end:{line:22,column:7}},8:{start:{line:16,column:6},end:{line:16,column:24}},9:{start:{line:17,column:6},end:{line:19,column:15}},10:{start:{line:18,column:8},end:{line:18,column:27}},11:{start:{line:21,column:6},end:{line:21,column:16}},12:{start:{line:24,column:2},end:{line:27,column:4}}},fnMap:{0:{name:"copyTextToClipboard",decl:{start:{line:3,column:15},end:{line:3,column:34}},loc:{start:{line:3,column:41},end:{line:8,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:9,column:28},end:{line:9,column:29}},loc:{start:{line:9,column:34},end:{line:28,column:1}},line:9},2:{name:"(anonymous_2)",decl:{start:{line:14,column:15},end:{line:14,column:16}},loc:{start:{line:14,column:31},end:{line:23,column:3}},line:14},3:{name:"(anonymous_3)",decl:{start:{line:15,column:41},end:{line:15,column:42}},loc:{start:{line:15,column:47},end:{line:20,column:5}},line:15},4:{name:"(anonymous_4)",decl:{start:{line:17,column:17},end:{line:17,column:18}},loc:{start:{line:17,column:23},end:{line:19,column:7}},line:17},5:{name:"(anonymous_5)",decl:{start:{line:20,column:13},end:{line:20,column:14}},loc:{start:{line:20,column:22},end:{line:22,column:5}},line:20}},branchMap:{0:{loc:{start:{line:4,column:2},end:{line:6,column:3}},type:"if",locations:[{start:{line:4,column:2},end:{line:6,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:4}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/useClipboard.ts"],names:["useState","useLogger","copyTextToClipboard","text","navigator","clipboard","writeText","document","execCommand","useClipboard","isCopied","setIsCopied","warn","copy","textToCopy","then","setTimeout","catch","err"],mappings:"AAAA,SAASA,gBAAgB;AAEzB,SAASC,iBAAiB;AAE1B,eAAeC,oBAAoBC,MAAc;AAC/C,MAAI,eAAeC,WAAW;AAC5B,WAAOA,UAAUC,UAAUC,UAAUH,IAAI;AAAA,EAC3C;AACA,SAAOI,SAASC,YAAY,QAAQ,MAAML,IAAI;AAChD;AAEO,aAAMM,eAAeA,MAGvB;AACH,QAAM,CAACC,UAAUC,WAAW,IAAIX,SAAS,KAAK;AAC9C,QAAM;AAAA,IAAEY;AAAAA,EAAK,IAAIX,UAAU,cAAc;AAEzC,QAAMY,OAAOA,CAACC,eAAuB;AACnCZ,wBAAoBY,UAAU,EAC3BC,KAAK,MAAM;AACVJ,kBAAY,IAAI;AAChBK,iBAAW,MAAM;AACfL,oBAAY,KAAK;AAAA,MACnB,GAAG,IAAI;AAAA,IACT,CAAC,EACAM,MAAOC,SAAQ;AACdN,WAAKM,GAAG;AAAA,IACV,CAAC;AAAA,EACL;AAEA,SAAO;AAAA,IACLR;AAAAA,IACAG;AAAAA,EACF;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"add247b4f9959085b1a96e9fc79a8762dcf08be0"},r=l[t]||(l[t]={});(!r[n]||r[n].hash!==o)&&(r[n]=a);var c=r[n];return i=function(){return c},c}i();async function V(n){return i().f[0]++,i().s[0]++,"clipboard"in navigator?(i().b[0][0]++,i().s[1]++,navigator.clipboard.writeText(n)):(i().b[0][1]++,i().s[2]++,document.execCommand("copy",!0,n))}i().s[3]++;const D=()=>{i().f[1]++;const[n,o]=(i().s[4]++,p.useState(!1)),{warn:l}=(i().s[5]++,S("useClipboard"));i().s[6]++;const t=a=>{i().f[2]++,i().s[7]++,V(a).then(()=>{i().f[3]++,i().s[8]++,o(!0),i().s[9]++,setTimeout(()=>{i().f[4]++,i().s[10]++,o(!1)},1500)}).catch(r=>{i().f[5]++,i().s[11]++,l(r)})};return i().s[12]++,{isCopied:n,copy:t}};function e(){var n="/Users/radekpodrazky/Projects/design-system/src/components/Snippet/Snippet.tsx",o="52023eeea43bce8267f6e5cb99229b5ca5c84ad9",l=window,t="__coverage__",a={path:"/Users/radekpodrazky/Projects/design-system/src/components/Snippet/Snippet.tsx",statementMap:{0:{start:{line:13,column:22},end:{line:18,column:93}},1:{start:{line:18,column:6},end:{line:18,column:92}},2:{start:{line:19,column:23},end:{line:27,column:13}},3:{start:{line:24,column:6},end:{line:27,column:12}},4:{start:{line:28,column:16},end:{line:67,column:2}},5:{start:{line:38,column:6},end:{line:38,column:26}},6:{start:{line:39,column:18},end:{line:39,column:30}},7:{start:{line:40,column:42},end:{line:40,column:56}},8:{start:{line:41,column:38},end:{line:41,column:67}},9:{start:{line:45,column:6},end:{line:45,column:20}},10:{start:{line:46,column:27},end:{line:46,column:55}},11:{start:{line:47,column:2},end:{line:49,column:35}},12:{start:{line:48,column:4},end:{line:48,column:80}},13:{start:{line:50,column:2},end:{line:53,column:3}},14:{start:{line:51,column:4},end:{line:51,column:62}},15:{start:{line:52,column:4},end:{line:52,column:16}},16:{start:{line:54,column:22},end:{line:54,column:64}},17:{start:{line:55,column:2},end:{line:66,column:7}},18:{start:{line:61,column:269},end:{line:61,column:286}},19:{start:{line:65,column:52},end:{line:65,column:82}},20:{start:{line:65,column:76},end:{line:65,column:81}},21:{start:{line:68,column:0},end:{line:68,column:32}},22:{start:{line:70,column:0},end:{line:76,column:50}},23:{start:{line:72,column:4},end:{line:72,column:36}},24:{start:{line:74,column:4},end:{line:74,column:798}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:16,column:60},end:{line:16,column:61}},loc:{start:{line:18,column:6},end:{line:18,column:92}},line:18},1:{name:"(anonymous_1)",decl:{start:{line:22,column:28},end:{line:22,column:29}},loc:{start:{line:24,column:6},end:{line:27,column:12}},line:24},2:{name:"(anonymous_2)",decl:{start:{line:28,column:27},end:{line:28,column:28}},loc:{start:{line:35,column:11},end:{line:67,column:1}},line:35},3:{name:"(anonymous_3)",decl:{start:{line:47,column:18},end:{line:47,column:19}},loc:{start:{line:47,column:24},end:{line:49,column:3}},line:47},4:{name:"(anonymous_4)",decl:{start:{line:61,column:263},end:{line:61,column:264}},loc:{start:{line:61,column:269},end:{line:61,column:286}},line:61},5:{name:"(anonymous_5)",decl:{start:{line:65,column:46},end:{line:65,column:47}},loc:{start:{line:65,column:52},end:{line:65,column:82}},line:65},6:{name:"(anonymous_6)",decl:{start:{line:65,column:66},end:{line:65,column:67}},loc:{start:{line:65,column:76},end:{line:65,column:81}},line:65}},branchMap:{0:{loc:{start:{line:18,column:6},end:{line:18,column:92}},type:"cond-expr",locations:[{start:{line:18,column:28},end:{line:18,column:57}},{start:{line:18,column:60},end:{line:18,column:92}}],line:18},1:{loc:{start:{line:24,column:6},end:{line:27,column:12}},type:"cond-expr",locations:[{start:{line:24,column:24},end:{line:27,column:3}},{start:{line:27,column:6},end:{line:27,column:12}}],line:24},2:{loc:{start:{line:30,column:2},end:{line:30,column:16}},type:"default-arg",locations:[{start:{line:30,column:12},end:{line:30,column:16}}],line:30},3:{loc:{start:{line:31,column:2},end:{line:31,column:21}},type:"default-arg",locations:[{start:{line:31,column:17},end:{line:31,column:21}}],line:31},4:{loc:{start:{line:32,column:2},end:{line:32,column:24}},type:"default-arg",locations:[{start:{line:32,column:19},end:{line:32,column:24}}],line:32},5:{loc:{start:{line:33,column:2},end:{line:33,column:17}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:17}}],line:33},6:{loc:{start:{line:34,column:14},end:{line:34,column:41}},type:"default-arg",locations:[{start:{line:34,column:36},end:{line:34,column:41}}],line:34},7:{loc:{start:{line:50,column:2},end:{line:53,column:3}},type:"if",locations:[{start:{line:50,column:2},end:{line:53,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:50},8:{loc:{start:{line:54,column:22},end:{line:54,column:64}},type:"cond-expr",locations:[{start:{line:54,column:37},end:{line:54,column:53}},{start:{line:54,column:56},end:{line:54,column:64}}],line:54},9:{loc:{start:{line:59,column:17},end:{line:59,column:57}},type:"cond-expr",locations:[{start:{line:59,column:30},end:{line:59,column:36}},{start:{line:59,column:39},end:{line:59,column:57}}],line:59},10:{loc:{start:{line:60,column:30},end:{line:60,column:181}},type:"cond-expr",locations:[{start:{line:60,column:66},end:{line:60,column:100}},{start:{line:60,column:119},end:{line:60,column:181}}],line:60},11:{loc:{start:{line:61,column:4},end:{line:61,column:292}},type:"binary-expr",locations:[{start:{line:61,column:4},end:{line:61,column:20}},{start:{line:61,column:24},end:{line:61,column:31}},{start:{line:61,column:51},end:{line:61,column:292}}],line:61},12:{loc:{start:{line:61,column:144},end:{line:61,column:171}},type:"cond-expr",locations:[{start:{line:61,column:155},end:{line:61,column:162}},{start:{line:61,column:165},end:{line:61,column:171}}],line:61},13:{loc:{start:{line:61,column:180},end:{line:61,column:234}},type:"cond-expr",locations:[{start:{line:61,column:191},end:{line:61,column:212}},{start:{line:61,column:215},end:{line:61,column:234}}],line:61},14:{loc:{start:{line:62,column:4},end:{line:65,column:138}},type:"binary-expr",locations:[{start:{line:62,column:4},end:{line:62,column:16}},{start:{line:62,column:36},end:{line:65,column:138}}],line:62},15:{loc:{start:{line:64,column:16},end:{line:64,column:41}},type:"cond-expr",locations:[{start:{line:64,column:29},end:{line:64,column:32}},{start:{line:64,column:35},end:{line:64,column:41}}],line:64},16:{loc:{start:{line:65,column:94},end:{line:65,column:132}},type:"cond-expr",locations:[{start:{line:65,column:107},end:{line:65,column:118}},{start:{line:65,column:121},end:{line:65,column:132}}],line:65}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0,0],1:[0,0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Snippet/Snippet.tsx"],names:["children","error","copy","isCopied","useLayoutEffect","setIsExpandable","undefined","Snippet"],mappings:"AA2EM;AA3EN;AACA;AACA;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AAEA;AAAgC;AAAA;AAAA;AAG3B;AAAY;AAKjB;AAAqC;AAAA;AAAA;AAChC;AAAkB;AAEf;AAAA;AAAA;AAQR;AAYI;AACEA;AACU;AACK;AACE;AACL;AAEd;AAGA;AAAM;AAAEC;AACR;AACA;AACA;AACA;AAAM;AAAEC;AAAMC;AACd;AAEAC;AACEC;AAEA;AAGF;AACEJ;AACA;AAAO;AAGT;AAEA;AAKW;AACK;AAIZ;AAOS;AAC6C;AAWtD;AASE;AAKa;AACD;AACuBK;AAQnC;AAIR;AACAC;AAEF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"52023eeea43bce8267f6e5cb99229b5ca5c84ad9"},r=l[t]||(l[t]={});(!r[n]||r[n].hash!==o)&&(r[n]=a);var c=r[n];return e=function(){return c},c}e();const E=(e().s[0]++,_.div.withConfig({displayName:"Snippet__ButtonWrapper",componentId:"sc-1053oev-0"})(["position:absolute;right:var(--sscds-space-1x);",";"],({$position:n})=>(e().f[0]++,e().s[1]++,n==="top"?(e().b[0][0]++,"top: var(--sscds-space-1x);"):(e().b[0][1]++,"bottom: var(--sscds-space-1x);")))),R=(e().s[2]++,_(z).withConfig({displayName:"Snippet__SnippetContent",componentId:"sc-1053oev-1"})(["",";overflow:auto;"],({$shouldWrapText:n})=>(e().f[1]++,e().s[3]++,n?(e().b[1][0]++,`
  white-space: break-spaces;
  word-wrap: break-word;
  `):(e().b[1][1]++,void 0)))),b=(e().s[4]++,p.forwardRef(({children:n,canCopy:o=(e().b[2][0]++,!0),shouldDedent:l=(e().b[3][0]++,!0),shouldWrapText:t=(e().b[4][0]++,!1),maxHeight:a=(e().b[5][0]++,200),isExpanded:r=(e().b[6][0]++,!1)},c)=>{e().f[2]++;const{error:y}=(e().s[5]++,S("Snippet")),A=(e().s[6]++,p.useRef(null)),[u,s]=(e().s[7]++,p.useState(!0)),[d,B]=(e().s[8]++,p.useState(r)),{copy:I,isCopied:g}=(e().s[9]++,D()),C=(e().s[10]++,typeof n=="string");if(e().s[11]++,p.useLayoutEffect(()=>{e().f[3]++,e().s[12]++,s(A.current.getBoundingClientRect().height>a)},[s,a]),e().s[13]++,C)e().b[7][1]++;else return e().b[7][0]++,e().s[14]++,y("Only string can be passed in `children` property"),e().s[15]++,null;const v=(e().s[16]++,l?(e().b[8][0]++,N(n)):(e().b[8][1]++,n));return e().s[17]++,m.jsxs(T,{ref:c,background:"dynamic",radius:"md",style:{position:"relative"},hasBorder:!0,children:[m.jsx(R,{$shouldWrapText:t,"aria-multiline":"true","aria-readonly":"true",as:"pre",paddingSize:"md",role:"textbox",style:{maxHeight:d?(e().b[9][0]++,"none"):(e().b[9][1]++,O(a))},tabIndex:0,children:C?(e().b[10][1]++,m.jsx(j,{ref:A,size:"sm",children:v})):(e().b[10][0]++,m.jsx(k,{size:"xs"}))}),(e().b[11][0]++,C&&(e().b[11][1]++,o)&&(e().b[11][2]++,m.jsx(E,{$position:"top",children:m.jsx(P,{iconName:g?(e().b[12][0]++,"check"):(e().b[12][1]++,"copy"),label:g?(e().b[13][0]++,"Copied to clipboard"):(e().b[13][1]++,"Copy to clipboard"),variant:"ghost",onClick:()=>(e().f[4]++,e().s[18]++,I(v))})}))),(e().b[14][0]++,u&&(e().b[14][1]++,m.jsx(E,{$position:"bottom",children:m.jsx(U,{iconEnd:{name:"angle-down",rotation:d?(e().b[15][0]++,180):(e().b[15][1]++,void 0)},size:"sm",variant:"ghost",onClick:()=>(e().f[5]++,e().s[19]++,B(M=>(e().f[6]++,e().s[20]++,!M))),children:d?(e().b[16][0]++,"Show less"):(e().b[16][1]++,"Show more")})})))]})}));e().s[21]++;b.displayName="Snippet";e().s[22]++;try{e().s[23]++,b.displayName="Snippet",e().s[24]++,b.__docgenInfo={description:"",displayName:"Snippet",props:{canCopy:{defaultValue:{value:"true"},description:"",name:"canCopy",required:!1,type:{name:"boolean"}},shouldDedent:{defaultValue:{value:"true"},description:"",name:"shouldDedent",required:!1,type:{name:"boolean"}},shouldWrapText:{defaultValue:{value:"false"},description:"",name:"shouldWrapText",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:{value:"200"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}}}}}catch{}export{b as S};
//# sourceMappingURL=Snippet-j0vZOpbJ.js.map
