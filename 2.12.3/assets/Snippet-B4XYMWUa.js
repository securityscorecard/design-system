import{j as m}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{q as _}from"./styled-components.browser.esm-6IU7b-y2.js";import"./index-83j-rV9N.js";import{C as O}from"./index-SvgRUxZC.js";import{E as j}from"./ErrorBoundary-CaIrNaXe.js";import{u as S}from"./useLogger-CA2WAjqk.js";import{p as k}from"./index-D7OXBHVI.js";import{I as T}from"./IconButton-Be4MdzEz.js";import{B as K}from"./Button-D1_vamon.js";import{S as P}from"./index-N2e0qnpI.js";import{P as W}from"./Padbox-CBhO8TxM.js";function f(){var e="/home/runner/work/design-system/design-system/src/components/ErrorBoundary/index.tsx",o="6a95189d86c5ab211ed98d58ddbbff79f59c3633",l=window,t="__coverage__",a={path:"/home/runner/work/design-system/design-system/src/components/ErrorBoundary/index.tsx",statementMap:{0:{start:{line:3,column:0},end:{line:9,column:50}},1:{start:{line:5,column:4},end:{line:5,column:48}},2:{start:{line:7,column:4},end:{line:7,column:1074}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/ErrorBoundary/index.tsx"],names:[],mappings:"AAAA;AACA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6a95189d86c5ab211ed98d58ddbbff79f59c3633"},r=l[t]||(l[t]={});(!r[e]||r[e].hash!==o)&&(r[e]=a);var c=r[e];return f=function(){return c},c}f();f().s[0]++;try{f().s[1]++,ErrorBoundary.displayName="ErrorBoundary",f().s[2]++,ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},justify:{defaultValue:{value:"center"},description:"",name:"justify",required:!1,type:{name:"JustifyContent"}},illustration:{defaultValue:null,description:"",name:"illustration",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},title:{defaultValue:{value:"We cannot show this information now"},description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:{value:"If the problem persists, contact support."},description:"",name:"content",required:!1,type:{name:"ReactNode"}}}}}catch{}function v(e,o){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),l.push.apply(l,t)}return l}function x(e){for(var o=1;o<arguments.length;o++){var l=arguments[o]!=null?arguments[o]:{};o%2?v(Object(l),!0).forEach(function(t){q(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):v(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}function q(e,o,l){return o=N(o),o in e?Object.defineProperty(e,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[o]=l,e}function N(e){var o=V(e,"string");return typeof o=="symbol"?o:String(o)}function V(e,o){if(typeof e!="object"||e===null)return e;var l=e[Symbol.toPrimitive];if(l!==void 0){var t=l.call(e,o||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}const D=w({});function w(e){return o.withOptions=l=>w(x(x({},e),l)),o;function o(l,...t){const a=typeof l=="string"?[l]:l.raw,{escapeSpecialCharacters:r=Array.isArray(l)}=e;let c="";for(let u=0;u<a.length;u++){let s=a[u];r&&(s=s.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\{/g,"{")),c+=s,u<t.length&&(c+=t[u])}const C=c.split(`
`);let A=null;for(const u of C){const s=u.match(/^(\s+)\S+/);if(s){const d=s[1].length;A?A=Math.min(A,d):A=d}}if(A!==null){const u=A;c=C.map(s=>s[0]===" "||s[0]==="	"?s.slice(u):s).join(`
`)}return c.trim().replace(/\\n/g,`
`)}}function i(){var e="/home/runner/work/design-system/design-system/src/hooks/useClipboard.ts",o="ca03752426d637f4bbbc814cfc1567a253a9024a",l=window,t="__coverage__",a={path:"/home/runner/work/design-system/design-system/src/hooks/useClipboard.ts",statementMap:{0:{start:{line:4,column:2},end:{line:6,column:3}},1:{start:{line:5,column:4},end:{line:5,column:47}},2:{start:{line:7,column:2},end:{line:7,column:50}},3:{start:{line:9,column:28},end:{line:28,column:1}},4:{start:{line:10,column:34},end:{line:10,column:49}},5:{start:{line:13,column:6},end:{line:13,column:31}},6:{start:{line:14,column:15},end:{line:23,column:3}},7:{start:{line:15,column:4},end:{line:22,column:7}},8:{start:{line:16,column:6},end:{line:16,column:24}},9:{start:{line:17,column:6},end:{line:19,column:15}},10:{start:{line:18,column:8},end:{line:18,column:27}},11:{start:{line:21,column:6},end:{line:21,column:16}},12:{start:{line:24,column:2},end:{line:27,column:4}}},fnMap:{0:{name:"copyTextToClipboard",decl:{start:{line:3,column:15},end:{line:3,column:34}},loc:{start:{line:3,column:41},end:{line:8,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:9,column:28},end:{line:9,column:29}},loc:{start:{line:9,column:34},end:{line:28,column:1}},line:9},2:{name:"(anonymous_2)",decl:{start:{line:14,column:15},end:{line:14,column:16}},loc:{start:{line:14,column:31},end:{line:23,column:3}},line:14},3:{name:"(anonymous_3)",decl:{start:{line:15,column:41},end:{line:15,column:42}},loc:{start:{line:15,column:47},end:{line:20,column:5}},line:15},4:{name:"(anonymous_4)",decl:{start:{line:17,column:17},end:{line:17,column:18}},loc:{start:{line:17,column:23},end:{line:19,column:7}},line:17},5:{name:"(anonymous_5)",decl:{start:{line:20,column:13},end:{line:20,column:14}},loc:{start:{line:20,column:22},end:{line:22,column:5}},line:20}},branchMap:{0:{loc:{start:{line:4,column:2},end:{line:6,column:3}},type:"if",locations:[{start:{line:4,column:2},end:{line:6,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:4}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/hooks/useClipboard.ts"],names:["useState","useLogger","copyTextToClipboard","text","navigator","clipboard","writeText","document","execCommand","useClipboard","isCopied","setIsCopied","warn","copy","textToCopy","then","setTimeout","catch","err"],mappings:"AAAA,SAASA,gBAAgB;AAEzB,SAASC,iBAAiB;AAE1B,eAAeC,oBAAoBC,MAAc;AAC/C,MAAI,eAAeC,WAAW;AAC5B,WAAOA,UAAUC,UAAUC,UAAUH,IAAI;AAAA,EAC3C;AACA,SAAOI,SAASC,YAAY,QAAQ,MAAML,IAAI;AAChD;AAEO,aAAMM,eAAeA,MAGvB;AACH,QAAM,CAACC,UAAUC,WAAW,IAAIX,SAAS,KAAK;AAC9C,QAAM;AAAA,IAAEY;AAAAA,EAAK,IAAIX,UAAU,cAAc;AAEzC,QAAMY,OAAOA,CAACC,eAAuB;AACnCZ,wBAAoBY,UAAU,EAC3BC,KAAK,MAAM;AACVJ,kBAAY,IAAI;AAChBK,iBAAW,MAAM;AACfL,oBAAY,KAAK;AAAA,MACnB,GAAG,IAAI;AAAA,IACT,CAAC,EACAM,MAAOC,SAAQ;AACdN,WAAKM,GAAG;AAAA,IACV,CAAC;AAAA,EACL;AAEA,SAAO;AAAA,IACLR;AAAAA,IACAG;AAAAA,EACF;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ca03752426d637f4bbbc814cfc1567a253a9024a"},r=l[t]||(l[t]={});(!r[e]||r[e].hash!==o)&&(r[e]=a);var c=r[e];return i=function(){return c},c}i();async function R(e){return i().f[0]++,i().s[0]++,"clipboard"in navigator?(i().b[0][0]++,i().s[1]++,navigator.clipboard.writeText(e)):(i().b[0][1]++,i().s[2]++,document.execCommand("copy",!0,e))}i().s[3]++;const U=()=>{i().f[1]++;const[e,o]=(i().s[4]++,p.useState(!1)),{warn:l}=(i().s[5]++,S("useClipboard"));i().s[6]++;const t=a=>{i().f[2]++,i().s[7]++,R(a).then(()=>{i().f[3]++,i().s[8]++,o(!0),i().s[9]++,setTimeout(()=>{i().f[4]++,i().s[10]++,o(!1)},1500)}).catch(r=>{i().f[5]++,i().s[11]++,l(r)})};return i().s[12]++,{isCopied:e,copy:t}};function n(){var e="/home/runner/work/design-system/design-system/src/components/Snippet/Snippet.tsx",o="8b7f36fc747be15a19b5fcc556eadddb80ebef1b",l=window,t="__coverage__",a={path:"/home/runner/work/design-system/design-system/src/components/Snippet/Snippet.tsx",statementMap:{0:{start:{line:13,column:22},end:{line:18,column:93}},1:{start:{line:18,column:6},end:{line:18,column:92}},2:{start:{line:19,column:23},end:{line:27,column:13}},3:{start:{line:24,column:6},end:{line:27,column:12}},4:{start:{line:28,column:16},end:{line:67,column:2}},5:{start:{line:38,column:6},end:{line:38,column:26}},6:{start:{line:39,column:18},end:{line:39,column:30}},7:{start:{line:40,column:42},end:{line:40,column:56}},8:{start:{line:41,column:38},end:{line:41,column:67}},9:{start:{line:45,column:6},end:{line:45,column:20}},10:{start:{line:46,column:27},end:{line:46,column:55}},11:{start:{line:47,column:2},end:{line:49,column:35}},12:{start:{line:48,column:4},end:{line:48,column:80}},13:{start:{line:50,column:2},end:{line:53,column:3}},14:{start:{line:51,column:4},end:{line:51,column:62}},15:{start:{line:52,column:4},end:{line:52,column:16}},16:{start:{line:54,column:22},end:{line:54,column:64}},17:{start:{line:55,column:2},end:{line:66,column:7}},18:{start:{line:61,column:269},end:{line:61,column:286}},19:{start:{line:65,column:52},end:{line:65,column:82}},20:{start:{line:65,column:76},end:{line:65,column:81}},21:{start:{line:68,column:0},end:{line:68,column:32}},22:{start:{line:70,column:0},end:{line:76,column:50}},23:{start:{line:72,column:4},end:{line:72,column:36}},24:{start:{line:74,column:4},end:{line:74,column:798}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:16,column:60},end:{line:16,column:61}},loc:{start:{line:18,column:6},end:{line:18,column:92}},line:18},1:{name:"(anonymous_1)",decl:{start:{line:22,column:28},end:{line:22,column:29}},loc:{start:{line:24,column:6},end:{line:27,column:12}},line:24},2:{name:"(anonymous_2)",decl:{start:{line:28,column:27},end:{line:28,column:28}},loc:{start:{line:35,column:11},end:{line:67,column:1}},line:35},3:{name:"(anonymous_3)",decl:{start:{line:47,column:18},end:{line:47,column:19}},loc:{start:{line:47,column:24},end:{line:49,column:3}},line:47},4:{name:"(anonymous_4)",decl:{start:{line:61,column:263},end:{line:61,column:264}},loc:{start:{line:61,column:269},end:{line:61,column:286}},line:61},5:{name:"(anonymous_5)",decl:{start:{line:65,column:46},end:{line:65,column:47}},loc:{start:{line:65,column:52},end:{line:65,column:82}},line:65},6:{name:"(anonymous_6)",decl:{start:{line:65,column:66},end:{line:65,column:67}},loc:{start:{line:65,column:76},end:{line:65,column:81}},line:65}},branchMap:{0:{loc:{start:{line:18,column:6},end:{line:18,column:92}},type:"cond-expr",locations:[{start:{line:18,column:28},end:{line:18,column:57}},{start:{line:18,column:60},end:{line:18,column:92}}],line:18},1:{loc:{start:{line:24,column:6},end:{line:27,column:12}},type:"cond-expr",locations:[{start:{line:24,column:24},end:{line:27,column:3}},{start:{line:27,column:6},end:{line:27,column:12}}],line:24},2:{loc:{start:{line:30,column:2},end:{line:30,column:16}},type:"default-arg",locations:[{start:{line:30,column:12},end:{line:30,column:16}}],line:30},3:{loc:{start:{line:31,column:2},end:{line:31,column:21}},type:"default-arg",locations:[{start:{line:31,column:17},end:{line:31,column:21}}],line:31},4:{loc:{start:{line:32,column:2},end:{line:32,column:24}},type:"default-arg",locations:[{start:{line:32,column:19},end:{line:32,column:24}}],line:32},5:{loc:{start:{line:33,column:2},end:{line:33,column:17}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:17}}],line:33},6:{loc:{start:{line:34,column:14},end:{line:34,column:41}},type:"default-arg",locations:[{start:{line:34,column:36},end:{line:34,column:41}}],line:34},7:{loc:{start:{line:50,column:2},end:{line:53,column:3}},type:"if",locations:[{start:{line:50,column:2},end:{line:53,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:50},8:{loc:{start:{line:54,column:22},end:{line:54,column:64}},type:"cond-expr",locations:[{start:{line:54,column:37},end:{line:54,column:53}},{start:{line:54,column:56},end:{line:54,column:64}}],line:54},9:{loc:{start:{line:59,column:17},end:{line:59,column:57}},type:"cond-expr",locations:[{start:{line:59,column:30},end:{line:59,column:36}},{start:{line:59,column:39},end:{line:59,column:57}}],line:59},10:{loc:{start:{line:60,column:30},end:{line:60,column:181}},type:"cond-expr",locations:[{start:{line:60,column:66},end:{line:60,column:100}},{start:{line:60,column:119},end:{line:60,column:181}}],line:60},11:{loc:{start:{line:61,column:4},end:{line:61,column:292}},type:"binary-expr",locations:[{start:{line:61,column:4},end:{line:61,column:20}},{start:{line:61,column:24},end:{line:61,column:31}},{start:{line:61,column:51},end:{line:61,column:292}}],line:61},12:{loc:{start:{line:61,column:144},end:{line:61,column:171}},type:"cond-expr",locations:[{start:{line:61,column:155},end:{line:61,column:162}},{start:{line:61,column:165},end:{line:61,column:171}}],line:61},13:{loc:{start:{line:61,column:180},end:{line:61,column:234}},type:"cond-expr",locations:[{start:{line:61,column:191},end:{line:61,column:212}},{start:{line:61,column:215},end:{line:61,column:234}}],line:61},14:{loc:{start:{line:62,column:4},end:{line:65,column:138}},type:"binary-expr",locations:[{start:{line:62,column:4},end:{line:62,column:16}},{start:{line:62,column:36},end:{line:65,column:138}}],line:62},15:{loc:{start:{line:64,column:16},end:{line:64,column:41}},type:"cond-expr",locations:[{start:{line:64,column:29},end:{line:64,column:32}},{start:{line:64,column:35},end:{line:64,column:41}}],line:64},16:{loc:{start:{line:65,column:94},end:{line:65,column:132}},type:"cond-expr",locations:[{start:{line:65,column:107},end:{line:65,column:118}},{start:{line:65,column:121},end:{line:65,column:132}}],line:65}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0,0],1:[0,0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Snippet/Snippet.tsx"],names:["children","error","copy","isCopied","useLayoutEffect","setIsExpandable","undefined","Snippet"],mappings:"AA2EM;AA3EN;AACA;AACA;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AAEA;AAAgC;AAAA;AAAA;AAG3B;AAAY;AAKjB;AAAqC;AAAA;AAAA;AAChC;AAAkB;AAEf;AAAA;AAAA;AAQR;AAYI;AACEA;AACU;AACK;AACE;AACL;AAEd;AAGA;AAAM;AAAEC;AACR;AACA;AACA;AACA;AAAM;AAAEC;AAAMC;AACd;AAEAC;AACEC;AAEA;AAGF;AACEJ;AACA;AAAO;AAGT;AAEA;AAKW;AACK;AAIZ;AAOS;AAC6C;AAWtD;AASE;AAKa;AACD;AACuBK;AAQnC;AAIR;AACAC;AAEF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8b7f36fc747be15a19b5fcc556eadddb80ebef1b"},r=l[t]||(l[t]={});(!r[e]||r[e].hash!==o)&&(r[e]=a);var c=r[e];return n=function(){return c},c}n();const E=(n().s[0]++,_.div.withConfig({displayName:"Snippet__ButtonWrapper",componentId:"sc-1053oev-0"})(["position:absolute;right:var(--sscds-space-1x);",";"],({$position:e})=>(n().f[0]++,n().s[1]++,e==="top"?(n().b[0][0]++,"top: var(--sscds-space-1x);"):(n().b[0][1]++,"bottom: var(--sscds-space-1x);")))),G=(n().s[2]++,_(W).withConfig({displayName:"Snippet__SnippetContent",componentId:"sc-1053oev-1"})(["",";overflow:auto;"],({$shouldWrapText:e})=>(n().f[1]++,n().s[3]++,e?(n().b[1][0]++,`
  white-space: break-spaces;
  word-wrap: break-word;
  `):(n().b[1][1]++,void 0)))),b=(n().s[4]++,p.forwardRef(({children:e,canCopy:o=(n().b[2][0]++,!0),shouldDedent:l=(n().b[3][0]++,!0),shouldWrapText:t=(n().b[4][0]++,!1),maxHeight:a=(n().b[5][0]++,200),isExpanded:r=(n().b[6][0]++,!1)},c)=>{n().f[2]++;const{error:C}=(n().s[5]++,S("Snippet")),A=(n().s[6]++,p.useRef(null)),[u,s]=(n().s[7]++,p.useState(!0)),[d,B]=(n().s[8]++,p.useState(r)),{copy:I,isCopied:g}=(n().s[9]++,U()),y=(n().s[10]++,typeof e=="string");if(n().s[11]++,p.useLayoutEffect(()=>{n().f[3]++,n().s[12]++,s(A.current.getBoundingClientRect().height>a)},[s,a]),n().s[13]++,y)n().b[7][1]++;else return n().b[7][0]++,n().s[14]++,C("Only string can be passed in `children` property"),n().s[15]++,null;const h=(n().s[16]++,l?(n().b[8][0]++,D(e)):(n().b[8][1]++,e));return n().s[17]++,m.jsxs(P,{ref:c,background:"dynamic",radius:"md",style:{position:"relative"},hasBorder:!0,children:[m.jsx(G,{$shouldWrapText:t,"aria-multiline":"true","aria-readonly":"true",as:"pre",paddingSize:"md",role:"textbox",style:{maxHeight:d?(n().b[9][0]++,"none"):(n().b[9][1]++,k(a))},tabIndex:0,children:y?(n().b[10][1]++,m.jsx(O,{ref:A,size:"sm",children:h})):(n().b[10][0]++,m.jsx(j,{size:"xs"}))}),(n().b[11][0]++,y&&(n().b[11][1]++,o)&&(n().b[11][2]++,m.jsx(E,{$position:"top",children:m.jsx(T,{iconName:g?(n().b[12][0]++,"check"):(n().b[12][1]++,"copy"),label:g?(n().b[13][0]++,"Copied to clipboard"):(n().b[13][1]++,"Copy to clipboard"),variant:"ghost",onClick:()=>(n().f[4]++,n().s[18]++,I(h))})}))),(n().b[14][0]++,u&&(n().b[14][1]++,m.jsx(E,{$position:"bottom",children:m.jsx(K,{iconEnd:{name:"angle-down",rotation:d?(n().b[15][0]++,180):(n().b[15][1]++,void 0)},size:"sm",variant:"ghost",onClick:()=>(n().f[5]++,n().s[19]++,B(M=>(n().f[6]++,n().s[20]++,!M))),children:d?(n().b[16][0]++,"Show less"):(n().b[16][1]++,"Show more")})})))]})}));n().s[21]++;b.displayName="Snippet";n().s[22]++;try{n().s[23]++,b.displayName="Snippet",n().s[24]++,b.__docgenInfo={description:"",displayName:"Snippet",props:{canCopy:{defaultValue:{value:"true"},description:"",name:"canCopy",required:!1,type:{name:"boolean"}},shouldDedent:{defaultValue:{value:"true"},description:"",name:"shouldDedent",required:!1,type:{name:"boolean"}},shouldWrapText:{defaultValue:{value:"false"},description:"",name:"shouldWrapText",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:{value:"200"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}}}}}catch{}export{b as S};
//# sourceMappingURL=Snippet-B4XYMWUa.js.map
