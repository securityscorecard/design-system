import{j as D}from"./jsx-runtime-Nms4Y4qS.js";import{a as Z}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as aA}from"./index-BwDkhjyp.js";import{L as lA}from"./react-router-dom-DwuZB8Qo.js";import{c as rA,g as iA}from"./_commonjsHelpers-BosuxZz1.js";import{T as AA,S as uA,a as cA,b as dA}from"./index-P638_79P.js";import"./index-8mm8G_Ti.js";import{l as eA}from"./index-DseqSOhp.js";import{p as CA,r as mA}from"./space.enums-FzolKu9U.js";import{t as fA}from"./toPairs-3reRMBbj.js";import{T as hA}from"./Tooltip-BJMkqIJX.js";var sA={exports:{}};(function(a,C){(function(m,O){a.exports=O()})(rA,function(){var m=1e3,O=6e4,K=36e5,E="millisecond",S="second",U="minute",x="hour",c="day",v="week",M="month",H="quarter",b="year",w="date",T="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],A=r%100;return"["+r+(n[(A-20)%10]||n[A]||n[0])+"]"}},P=function(r,n,A){var t=String(r);return!t||t.length>=n?r:""+Array(n+1-t.length).join(A)+r},k={s:P,z:function(r){var n=-r.utcOffset(),A=Math.abs(n),t=Math.floor(A/60),e=A%60;return(n<=0?"+":"-")+P(t,2,"0")+":"+P(e,2,"0")},m:function r(n,A){if(n.date()<A.date())return-r(A,n);var t=12*(A.year()-n.year())+(A.month()-n.month()),e=n.clone().add(t,M),s=A-e<0,o=n.clone().add(t+(s?-1:1),M);return+(-(t+(A-e)/(s?e-o:o-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M,y:b,w:v,d:c,D:w,h:x,m:U,s:S,ms:E,Q:H}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},B="en",$={};$[B]=W;var L="$isDayjsObject",_=function(r){return r instanceof z||!(!r||!r[L])},J=function r(n,A,t){var e;if(!n)return B;if(typeof n=="string"){var s=n.toLowerCase();$[s]&&(e=s),A&&($[s]=A,e=s);var o=n.split("-");if(!e&&o.length>1)return r(o[0])}else{var u=n.name;$[u]=n,e=u}return!t&&e&&(B=e),e||!t&&B},f=function(r,n){if(_(r))return r.clone();var A=typeof n=="object"?n:{};return A.date=r,A.args=arguments,new z(A)},l=k;l.l=J,l.i=_,l.w=function(r,n){return f(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var z=function(){function r(A){this.$L=J(A.locale,null,!0),this.parse(A),this.$x=this.$x||A.x||{},this[L]=!0}var n=r.prototype;return n.parse=function(A){this.$d=function(t){var e=t.date,s=t.utc;if(e===null)return new Date(NaN);if(l.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(j);if(o){var u=o[2]-1||0,d=(o[7]||"0").substring(0,3);return s?new Date(Date.UTC(o[1],u,o[3]||1,o[4]||0,o[5]||0,o[6]||0,d)):new Date(o[1],u,o[3]||1,o[4]||0,o[5]||0,o[6]||0,d)}}return new Date(e)}(A),this.init()},n.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},n.$utils=function(){return l},n.isValid=function(){return this.$d.toString()!==T},n.isSame=function(A,t){var e=f(A);return this.startOf(t)<=e&&e<=this.endOf(t)},n.isAfter=function(A,t){return f(A)<this.startOf(t)},n.isBefore=function(A,t){return this.endOf(t)<f(A)},n.$g=function(A,t,e){return l.u(A)?this[t]:this.set(e,A)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(A,t){var e=this,s=!!l.u(t)||t,o=l.p(A),u=function(I,y){var G=l.w(e.$u?Date.UTC(e.$y,y,I):new Date(e.$y,y,I),e);return s?G:G.endOf(c)},d=function(I,y){return l.w(e.toDate()[I].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(y)),e)},h=this.$W,p=this.$M,g=this.$D,V="set"+(this.$u?"UTC":"");switch(o){case b:return s?u(1,0):u(31,11);case M:return s?u(1,p):u(0,p+1);case v:var Y=this.$locale().weekStart||0,N=(h<Y?h+7:h)-Y;return u(s?g-N:g+(6-N),p);case c:case w:return d(V+"Hours",0);case x:return d(V+"Minutes",1);case U:return d(V+"Seconds",2);case S:return d(V+"Milliseconds",3);default:return this.clone()}},n.endOf=function(A){return this.startOf(A,!1)},n.$set=function(A,t){var e,s=l.p(A),o="set"+(this.$u?"UTC":""),u=(e={},e[c]=o+"Date",e[w]=o+"Date",e[M]=o+"Month",e[b]=o+"FullYear",e[x]=o+"Hours",e[U]=o+"Minutes",e[S]=o+"Seconds",e[E]=o+"Milliseconds",e)[s],d=s===c?this.$D+(t-this.$W):t;if(s===M||s===b){var h=this.clone().set(w,1);h.$d[u](d),h.init(),this.$d=h.set(w,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},n.set=function(A,t){return this.clone().$set(A,t)},n.get=function(A){return this[l.p(A)]()},n.add=function(A,t){var e,s=this;A=Number(A);var o=l.p(t),u=function(p){var g=f(s);return l.w(g.date(g.date()+Math.round(p*A)),s)};if(o===M)return this.set(M,this.$M+A);if(o===b)return this.set(b,this.$y+A);if(o===c)return u(1);if(o===v)return u(7);var d=(e={},e[U]=O,e[x]=K,e[S]=m,e)[o]||1,h=this.$d.getTime()+A*d;return l.w(h,this)},n.subtract=function(A,t){return this.add(-1*A,t)},n.format=function(A){var t=this,e=this.$locale();if(!this.isValid())return e.invalidDate||T;var s=A||"YYYY-MM-DDTHH:mm:ssZ",o=l.z(this),u=this.$H,d=this.$m,h=this.$M,p=e.weekdays,g=e.months,V=e.meridiem,Y=function(y,G,R,X){return y&&(y[G]||y(t,s))||R[G].slice(0,X)},N=function(y){return l.s(u%12||12,y,"0")},I=V||function(y,G,R){var X=y<12?"AM":"PM";return R?X.toLowerCase():X};return s.replace(F,function(y,G){return G||function(R){switch(R){case"YY":return String(t.$y).slice(-2);case"YYYY":return l.s(t.$y,4,"0");case"M":return h+1;case"MM":return l.s(h+1,2,"0");case"MMM":return Y(e.monthsShort,h,g,3);case"MMMM":return Y(g,h);case"D":return t.$D;case"DD":return l.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return Y(e.weekdaysMin,t.$W,p,2);case"ddd":return Y(e.weekdaysShort,t.$W,p,3);case"dddd":return p[t.$W];case"H":return String(u);case"HH":return l.s(u,2,"0");case"h":return N(1);case"hh":return N(2);case"a":return I(u,d,!0);case"A":return I(u,d,!1);case"m":return String(d);case"mm":return l.s(d,2,"0");case"s":return String(t.$s);case"ss":return l.s(t.$s,2,"0");case"SSS":return l.s(t.$ms,3,"0");case"Z":return o}return null}(y)||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(A,t,e){var s,o=this,u=l.p(t),d=f(A),h=(d.utcOffset()-this.utcOffset())*O,p=this-d,g=function(){return l.m(o,d)};switch(u){case b:s=g()/12;break;case M:s=g();break;case H:s=g()/3;break;case v:s=(p-h)/6048e5;break;case c:s=(p-h)/864e5;break;case x:s=p/K;break;case U:s=p/O;break;case S:s=p/m;break;default:s=p}return e?s:l.a(s)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return $[this.$L]},n.locale=function(A,t){if(!A)return this.$L;var e=this.clone(),s=J(A,t,!0);return s&&(e.$L=s),e},n.clone=function(){return l.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),q=z.prototype;return f.prototype=q,[["$ms",E],["$s",S],["$m",U],["$H",x],["$W",c],["$M",M],["$y",b],["$D",w]].forEach(function(r){q[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),f.extend=function(r,n){return r.$i||(r(n,z,f),r.$i=!0),f},f.locale=J,f.isDayjs=_,f.unix=function(r){return f(1e3*r)},f.en=$[B],f.Ls=$,f.p={},f})})(sA);var MA=sA.exports;const Q=iA(MA);var oA={exports:{}};(function(a,C){(function(m,O){a.exports=O()})(rA,function(){return function(m,O,K){m=m||{};var E=O.prototype,S={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function U(c,v,M,H){return E.fromToBase(c,v,M,H)}K.en.relativeTime=S,E.fromToBase=function(c,v,M,H,b){for(var w,T,j,F=M.$locale().relativeTime||S,W=m.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],P=W.length,k=0;k<P;k+=1){var B=W[k];B.d&&(w=H?K(c).diff(M,B.d,!0):M.diff(c,B.d,!0));var $=(m.rounding||Math.round)(Math.abs(w));if(j=w>0,$<=B.r||!B.r){$<=1&&k>0&&(B=W[k-1]);var L=F[B.l];b&&($=b(""+$)),T=typeof L=="string"?L.replace("%d",$):L($,v,B.l,j);break}}if(v)return T;var _=j?F.future:F.past;return typeof _=="function"?_(T):_.replace("%s",T)},E.to=function(c,v){return U(c,v,this,!0)},E.from=function(c,v){return U(c,v,this)};var x=function(c){return c.$u?K.utc():K()};E.toNow=function(c){return this.to(x(this),c)},E.fromNow=function(c){return this.from(x(this),c)}}})})(oA);var pA=oA.exports;const nA=iA(pA);function i(){var a="/home/runner/work/design-system/design-system/src/components/_internal/BaseTable/mocks/columns.tsx",C="1f12ceef7e196169c1d18aaba51e54f53208d0bf",m=window,O="__coverage__",K={path:"/home/runner/work/design-system/design-system/src/components/_internal/BaseTable/mocks/columns.tsx",statementMap:{0:{start:{line:12,column:28},end:{line:12,column:102}},1:{start:{line:12,column:72},end:{line:12,column:96}},2:{start:{line:13,column:29},end:{line:120,column:2}},3:{start:{line:19,column:34},end:{line:19,column:70}},4:{start:{line:28,column:4},end:{line:36,column:5}},5:{start:{line:33,column:8},end:{line:33,column:120}},6:{start:{line:35,column:8},end:{line:35,column:64}},7:{start:{line:42,column:58},end:{line:45,column:6}},8:{start:{line:68,column:26},end:{line:68,column:47}},9:{start:{line:76,column:32},end:{line:76,column:68}},10:{start:{line:77,column:26},end:{line:77,column:47}},11:{start:{line:82,column:28},end:{line:82,column:62}},12:{start:{line:88,column:4},end:{line:88,column:31}},13:{start:{line:89,column:17},end:{line:89,column:29}},14:{start:{line:90,column:16},end:{line:90,column:23}},15:{start:{line:91,column:4},end:{line:91,column:48}},16:{start:{line:91,column:33},end:{line:91,column:48}},17:{start:{line:92,column:4},end:{line:92,column:73}},18:{start:{line:92,column:46},end:{line:92,column:73}},19:{start:{line:93,column:4},end:{line:93,column:32}},20:{start:{line:107,column:4},end:{line:107,column:31}},21:{start:{line:108,column:4},end:{line:118,column:83}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:49},end:{line:12,column:50}},loc:{start:{line:12,column:72},end:{line:12,column:96}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:19,column:20},end:{line:19,column:21}},loc:{start:{line:19,column:34},end:{line:19,column:70}},line:19},2:{name:"(anonymous_2)",decl:{start:{line:25,column:13},end:{line:25,column:14}},loc:{start:{line:27,column:8},end:{line:37,column:3}},line:27},3:{name:"(anonymous_3)",decl:{start:{line:42,column:28},end:{line:42,column:29}},loc:{start:{line:42,column:58},end:{line:45,column:6}},line:42},4:{name:"(anonymous_4)",decl:{start:{line:68,column:17},end:{line:68,column:18}},loc:{start:{line:68,column:26},end:{line:68,column:47}},line:68},5:{name:"(anonymous_5)",decl:{start:{line:76,column:18},end:{line:76,column:19}},loc:{start:{line:76,column:32},end:{line:76,column:68}},line:76},6:{name:"(anonymous_6)",decl:{start:{line:77,column:17},end:{line:77,column:18}},loc:{start:{line:77,column:26},end:{line:77,column:47}},line:77},7:{name:"(anonymous_7)",decl:{start:{line:82,column:17},end:{line:82,column:18}},loc:{start:{line:82,column:28},end:{line:82,column:62}},line:82},8:{name:"(anonymous_8)",decl:{start:{line:87,column:17},end:{line:87,column:18}},loc:{start:{line:87,column:28},end:{line:94,column:3}},line:87},9:{name:"(anonymous_9)",decl:{start:{line:99,column:8},end:{line:99,column:9}},loc:{start:{line:106,column:8},end:{line:119,column:3}},line:106}},branchMap:{0:{loc:{start:{line:28,column:4},end:{line:36,column:5}},type:"switch",locations:[{start:{line:29,column:6},end:{line:29,column:21}},{start:{line:30,column:6},end:{line:30,column:21}},{start:{line:31,column:6},end:{line:31,column:21}},{start:{line:32,column:6},end:{line:33,column:120}},{start:{line:34,column:6},end:{line:35,column:64}}],line:28},1:{loc:{start:{line:91,column:4},end:{line:91,column:48}},type:"if",locations:[{start:{line:91,column:4},end:{line:91,column:48}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:91},2:{loc:{start:{line:92,column:4},end:{line:92,column:73}},type:"if",locations:[{start:{line:92,column:4},end:{line:92,column:73}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:92}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},b:{0:[0,0,0,0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/_internal/BaseTable/mocks/columns.tsx"],names:["action","memo","Link","RouterLink","pipe","reduce","toPairs","dayjs","relativeTime","TextSizes","TextVariants","Tooltip","abbreviateNumber","Strong","Text","composeQuery","acc","key","value","simpleColumns","Header","accessor","width","cellType","cellLinkComponent","cellHrefComposer","val","row","headerTooltip","Cell","inherit","secondary","cellTooltipPopupComposer","JSON","stringify","cellOnClick","multiValueDisplayLimit","cellFormatter","cellToComposer","format","extend","date","now","isSame","isAfter","subtract","from","id","original","observationDate","lastObservationDate","to"],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1f12ceef7e196169c1d18aaba51e54f53208d0bf"},E=m[O]||(m[O]={});(!E[a]||E[a].hash!==C)&&(E[a]=K);var S=E[a];return i=function(){return S},S}i();const tA=(i().s[0]++,CA(fA,mA((a,[C,m])=>(i().f[0]++,i().s[1]++,`${a}&${C}=${m}`),""))),KA=(i().s[2]++,[{Header:"IP Address",accessor:"ipAddress",width:200,cellType:"link",cellLinkComponent:"a",cellHrefComposer:(a,C)=>(i().f[1]++,i().s[3]++,`?value=${a}&${tA(C)}`)},{Header:"Status",headerTooltip:D.jsx(AA,{children:"Show status of the asset."}),accessor:"status",width:96,Cell:aA.memo(({value:a})=>{switch(i().f[2]++,i().s[4]++,a){case"Removed":i().b[0][0]++;case"Dynamic":i().b[0][1]++;case"Claimed":i().b[0][2]++;case"Disputed":return i().b[0][3]++,i().s[5]++,D.jsx(AA,{size:cA.inherit,variant:dA.secondary,children:a});default:return i().b[0][4]++,i().s[6]++,D.jsx(uA,{children:a})}})},{Header:"Domains",accessor:"domainsCount",width:96,cellTooltipPopupComposer:(a,C)=>(i().f[3]++,i().s[7]++,D.jsxs("div",{children:[D.jsx("div",{children:a}),D.jsx("pre",{children:D.jsx("code",{children:JSON.stringify(C,null,2)})})]}))},{Header:"Detection",accessor:"detectionMethod",width:160,cellType:"multiValue",cellOnClick:Z("onCellValueClick (detectionMethod)")},{Header:"Source",accessor:"source",width:160,cellType:"multiValue",multiValueDisplayLimit:3},{Header:"Country",accessor:"country",width:144},{Header:"Issues",accessor:"issuesCount",width:88,cellType:"discreteLink",cellLinkComponent:"button",cellFormatter:a=>(i().f[4]++,i().s[8]++,eA(a)),cellOnClick:Z("onCellValueClick (issuesCount)")},{Header:"Findings",accessor:"findingsCount",width:88,cellType:"discreteLink",cellLinkComponent:lA,cellToComposer:(a,C)=>(i().f[5]++,i().s[9]++,`?value=${a}&${tA(C)}`),cellFormatter:a=>(i().f[6]++,i().s[10]++,eA(a))},{Header:"First observed",accessor:"observationDate",width:120,cellFormatter:a=>(i().f[7]++,i().s[11]++,Q(a).format("D MMMM YYYY"))},{Header:"Last observed",accessor:"lastObservationDate",width:120,cellFormatter:a=>{i().f[8]++,i().s[12]++,Q.extend(nA);const C=(i().s[13]++,Q(a)),m=(i().s[14]++,Q());return i().s[15]++,C.isSame(m,"day")?(i().b[1][0]++,i().s[16]++,"Today"):(i().b[1][1]++,i().s[17]++,C.isAfter(m.subtract(7,"day"))?(i().b[2][0]++,i().s[18]++,C.format("dddd")):(i().b[2][1]++,i().s[19]++,C.from(m,!0)))}},{id:"observedFor",Header:"Observed for",width:120,Cell:({row:{original:{observationDate:a,lastObservationDate:C}}})=>(i().f[9]++,i().s[20]++,Q.extend(nA),i().s[21]++,D.jsx(hA,{popup:D.jsxs(D.Fragment,{children:[D.jsxs("div",{children:["Observation date: ",Q(a).format("D MMMM YYYY")]}),D.jsxs("div",{children:["Last observation date:"," ",Q(C).format("D MMMM YYYY")]})]}),children:Q(a).to(Q(C),!0)}))}]);export{tA as c,KA as s};
//# sourceMappingURL=columns-CbXi81ap.js.map
