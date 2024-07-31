import{j as S}from"./jsx-runtime-Cw0GR0a5.js";import{c as nt,g as st,R as ot}from"./index-CTjT7uj6.js";import{a as K}from"./chunk-454WOBUV-DWuJqIWT.js";import{L as ut}from"./react-router-dom-BO_MR9e_.js";import{T as X,S as ct,a as dt,b as lt}from"./Text-CQej7zPl.js";import{T as ft}from"./Tooltip-Dgp4eCqw.js";import{p as ht,a5 as mt,K as tt}from"./space-BY85GhUc.js";import{t as $t}from"./toPairs-D7rCSHJa.js";var it={exports:{}};(function(d,m){(function(M,C){d.exports=C()})(nt,function(){var M=1e3,C=6e4,_=36e5,b="millisecond",O="second",k="minute",Y="hour",c="day",D="week",$="month",W="quarter",x="year",T="date",L="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,J=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},P=function(s,r,t){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(t)+s},F={s:P,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+P(n,2,"0")+":"+P(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,$),i=t-e<0,a=r.clone().add(n+(i?-1:1),$);return+(-(n+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:$,y:x,w:D,d:c,D:T,h:Y,m:k,s:O,ms:b,Q:W}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},v="en",y={};y[v]=U;var I="$isDayjsObject",A=function(s){return s instanceof Q||!(!s||!s[I])},B=function s(r,t,n){var e;if(!r)return v;if(typeof r=="string"){var i=r.toLowerCase();y[i]&&(e=i),t&&(y[i]=t,e=i);var a=r.split("-");if(!e&&a.length>1)return s(a[0])}else{var u=r.name;y[u]=r,e=u}return!n&&e&&(v=e),e||!n&&v},f=function(s,r){if(A(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new Q(t)},o=F;o.l=B,o.i=A,o.w=function(s,r){return f(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var Q=function(){function s(t){this.$L=B(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[I]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,i=n.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(E);if(a){var u=a[2]-1||0,l=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==L},r.isSame=function(t,n){var e=f(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return f(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<f(t)},r.$g=function(t,n,e){return o.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,i=!!o.u(n)||n,a=o.p(t),u=function(V,g){var j=o.w(e.$u?Date.UTC(e.$y,g,V):new Date(e.$y,g,V),e);return i?j:j.endOf(c)},l=function(V,g){return o.w(e.toDate()[V].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(g)),e)},h=this.$W,p=this.$M,w=this.$D,z="set"+(this.$u?"UTC":"");switch(a){case x:return i?u(1,0):u(31,11);case $:return i?u(1,p):u(0,p+1);case D:var N=this.$locale().weekStart||0,R=(h<N?h+7:h)-N;return u(i?w-R:w+(6-R),p);case c:case T:return l(z+"Hours",0);case Y:return l(z+"Minutes",1);case k:return l(z+"Seconds",2);case O:return l(z+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,i=o.p(t),a="set"+(this.$u?"UTC":""),u=(e={},e[c]=a+"Date",e[T]=a+"Date",e[$]=a+"Month",e[x]=a+"FullYear",e[Y]=a+"Hours",e[k]=a+"Minutes",e[O]=a+"Seconds",e[b]=a+"Milliseconds",e)[i],l=i===c?this.$D+(n-this.$W):n;if(i===$||i===x){var h=this.clone().set(T,1);h.$d[u](l),h.init(),this.$d=h.set(T,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](l);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[o.p(t)]()},r.add=function(t,n){var e,i=this;t=Number(t);var a=o.p(n),u=function(p){var w=f(i);return o.w(w.date(w.date()+Math.round(p*t)),i)};if(a===$)return this.set($,this.$M+t);if(a===x)return this.set(x,this.$y+t);if(a===c)return u(1);if(a===D)return u(7);var l=(e={},e[k]=C,e[Y]=_,e[O]=M,e)[a]||1,h=this.$d.getTime()+t*l;return o.w(h,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||L;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),u=this.$H,l=this.$m,h=this.$M,p=e.weekdays,w=e.months,z=e.meridiem,N=function(g,j,Z,q){return g&&(g[j]||g(n,i))||Z[j].slice(0,q)},R=function(g){return o.s(u%12||12,g,"0")},V=z||function(g,j,Z){var q=g<12?"AM":"PM";return Z?q.toLowerCase():q};return i.replace(J,function(g,j){return j||function(Z){switch(Z){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return h+1;case"MM":return o.s(h+1,2,"0");case"MMM":return N(e.monthsShort,h,w,3);case"MMMM":return N(w,h);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return N(e.weekdaysMin,n.$W,p,2);case"ddd":return N(e.weekdaysShort,n.$W,p,3);case"dddd":return p[n.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return R(1);case"hh":return R(2);case"a":return V(u,l,!0);case"A":return V(u,l,!1);case"m":return String(l);case"mm":return o.s(l,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return a}return null}(g)||a.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var i,a=this,u=o.p(n),l=f(t),h=(l.utcOffset()-this.utcOffset())*C,p=this-l,w=function(){return o.m(a,l)};switch(u){case x:i=w()/12;break;case $:i=w();break;case W:i=w()/3;break;case D:i=(p-h)/6048e5;break;case c:i=(p-h)/864e5;break;case Y:i=p/_;break;case k:i=p/C;break;case O:i=p/M;break;default:i=p}return e?i:o.a(i)},r.daysInMonth=function(){return this.endOf($).$D},r.$locale=function(){return y[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=B(t,n,!0);return i&&(e.$L=i),e},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),G=Q.prototype;return f.prototype=G,[["$ms",b],["$s",O],["$m",k],["$H",Y],["$W",c],["$M",$],["$y",x],["$D",T]].forEach(function(s){G[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),f.extend=function(s,r){return s.$i||(s(r,Q,f),s.$i=!0),f},f.locale=B,f.isDayjs=A,f.unix=function(s){return f(1e3*s)},f.en=y[v],f.Ls=y,f.p={},f})})(it);var pt=it.exports;const H=st(pt);var at={exports:{}};(function(d,m){(function(M,C){d.exports=C()})(nt,function(){return function(M,C,_){M=M||{};var b=C.prototype,O={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function k(c,D,$,W){return b.fromToBase(c,D,$,W)}_.en.relativeTime=O,b.fromToBase=function(c,D,$,W,x){for(var T,L,E,J=$.$locale().relativeTime||O,U=M.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],P=U.length,F=0;F<P;F+=1){var v=U[F];v.d&&(T=W?_(c).diff($,v.d,!0):$.diff(c,v.d,!0));var y=(M.rounding||Math.round)(Math.abs(T));if(E=T>0,y<=v.r||!v.r){y<=1&&F>0&&(v=U[F-1]);var I=J[v.l];x&&(y=x(""+y)),L=typeof I=="string"?I.replace("%d",y):I(y,D,v.l,E);break}}if(D)return L;var A=E?J.future:J.past;return typeof A=="function"?A(L):A.replace("%s",L)},b.to=function(c,D){return k(c,D,this,!0)},b.from=function(c,D){return k(c,D,this)};var Y=function(c){return c.$u?_.utc():_()};b.toNow=function(c){return this.to(Y(this),c)},b.fromNow=function(c){return this.from(Y(this),c)}}})})(at);var Mt=at.exports;const et=st(Mt),rt=ht($t,mt((d,[m,M])=>`${d}&${m}=${M}`,"")),Tt=[{Header:"IP Address",accessor:"ipAddress",width:200,cellType:"link",cellLinkComponent:"a",cellHrefComposer:(d,m)=>`?value=${d}&${rt(m)}`},{Header:"Status",headerTooltip:S.jsx(X,{children:"Show status of the asset."}),accessor:"status",width:96,Cell:ot.memo(({value:d})=>{switch(d){case"Removed":case"Dynamic":case"Claimed":case"Disputed":return S.jsx(X,{size:dt.inherit,variant:lt.secondary,children:d});default:return S.jsx(ct,{children:d})}})},{Header:"Domains",accessor:"domainsCount",width:96,cellTooltipPopupComposer:(d,m)=>S.jsxs("div",{children:[S.jsx("div",{children:d}),S.jsx("pre",{children:S.jsx("code",{children:JSON.stringify(m,null,2)})})]})},{Header:"Detection",accessor:"detectionMethod",width:160,cellType:"multiValue",cellOnClick:K("onCellValueClick (detectionMethod)")},{Header:"Source",accessor:"source",width:160,cellType:"multiValue",multiValueDisplayLimit:3},{Header:"Country",accessor:"country",width:144},{Header:"Issues",accessor:"issuesCount",width:88,cellType:"discreteLink",cellLinkComponent:"button",cellFormatter:tt,cellOnClick:K("onCellValueClick (issuesCount)")},{Header:"Findings",accessor:"findingsCount",width:88,cellType:"discreteLink",cellLinkComponent:ut,cellToComposer:(d,m)=>`?value=${d}&${rt(m)}`,cellFormatter:tt},{Header:"First observed",accessor:"observationDate",width:120,cellFormatter:d=>H(d).format("D MMMM YYYY")},{Header:"Last observed",accessor:"lastObservationDate",width:120,cellFormatter:d=>{H.extend(et);const m=H(d),M=H();return m.isSame(M,"day")?"Today":m.isAfter(M.subtract(7,"day"))?m.format("dddd"):m.from(M,!0)}},{id:"observedFor",Header:"Observed for",width:120,Cell:({row:{original:{observationDate:d,lastObservationDate:m}}})=>(H.extend(et),S.jsx(ft,{popup:S.jsxs(S.Fragment,{children:[S.jsxs("div",{children:["Observation date: ",H(d).format("D MMMM YYYY")]}),S.jsxs("div",{children:["Last observation date:"," ",H(m).format("D MMMM YYYY")]})]}),children:H(d).to(H(m),!0)}))}];export{rt as c,Tt as s};
