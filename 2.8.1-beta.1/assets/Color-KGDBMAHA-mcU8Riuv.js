import{ar as Me,as as $,a2 as ie,a0 as Ce,w as $e,at as Oe,au as Ie}from"./index-2gdFl1C6.js";import{R as h,r as m,g as ue}from"./index-CTjT7uj6.js";import{_ as Ne,i as fe}from"./index-CgFWNHQ8.js";import"./iframe-CaCs6EeN.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DrFu-skq.js";function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function K(e){var t=m.useRef(e),n=m.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var R=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},F=function(e){return"touches"in e},V=function(e){return e&&e.ownerDocument.defaultView||self},te=function(e,t,n){var r=e.getBoundingClientRect(),o=F(t)?function(a,s){for(var l=0;l<a.length;l++)if(a[l].identifier===s)return a[l];return a[0]}(t.touches,n):t;return{left:R((o.pageX-(r.left+V(e).pageXOffset))/r.width),top:R((o.pageY-(r.top+V(e).pageYOffset))/r.height)}},ne=function(e){!F(e)&&e.preventDefault()},Q=h.memo(function(e){var t=e.onMove,n=e.onKey,r=J(e,["onMove","onKey"]),o=m.useRef(null),a=K(t),s=K(n),l=m.useRef(null),c=m.useRef(!1),i=m.useMemo(function(){var x=function(p){ne(p),(F(p)?p.touches.length>0:p.buttons>0)&&o.current?a(te(o.current,p,l.current)):M(!1)},j=function(){return M(!1)};function M(p){var b=c.current,w=V(o.current),E=p?w.addEventListener:w.removeEventListener;E(b?"touchmove":"mousemove",x),E(b?"touchend":"mouseup",j)}return[function(p){var b=p.nativeEvent,w=o.current;if(w&&(ne(b),!function(k,O){return O&&!F(k)}(b,c.current)&&w)){if(F(b)){c.current=!0;var E=b.changedTouches||[];E.length&&(l.current=E[0].identifier)}w.focus(),a(te(w,b,l.current)),M(!0)}},function(p){var b=p.which||p.keyCode;b<37||b>40||(p.preventDefault(),s({left:b===39?.05:b===37?-.05:0,top:b===40?.05:b===38?-.05:0}))},M]},[s,a]),d=i[0],f=i[1],g=i[2];return m.useEffect(function(){return g},[g]),h.createElement("div",I({},r,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:o,onKeyDown:f,tabIndex:0,role:"slider"}))}),T=function(e){return e.filter(Boolean).join(" ")},Z=function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=T(["react-colorful__pointer",e.className]);return h.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},h.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},y=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},Se={grad:.9,turn:360,rad:360/(2*Math.PI)},Re=function(e){return ge(A(e))},A=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?y(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?y(parseInt(e.substring(6,8),16)/255,2):1}},je=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Se[t]||1)},ze=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Fe({h:je(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},Fe=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},He=function(e){return Pe(de(e))},he=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:y(e.h),s:y(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:y(o/2),a:y(r,2)}},G=function(e){var t=he(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},B=function(e){var t=he(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},de=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),s=r*(1-n),l=r*(1-(t-a)*n),c=r*(1-(1-t+a)*n),i=a%6;return{r:y(255*[r,l,s,s,c,r][i]),g:y(255*[c,r,r,l,s,s][i]),b:y(255*[s,s,c,r,r,l][i]),a:y(o,2)}},Te=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?ge({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},P=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Pe=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=o<1?P(y(255*o)):"";return"#"+P(t)+P(n)+P(r)+a},ge=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),s=a-Math.min(t,n,r),l=s?a===t?(n-r)/s:a===n?2+(r-t)/s:4+(t-n)/s:0;return{h:y(60*(l<0?l+6:l)),s:y(a?s/a*100:0),v:y(a/255*100),a:o}},me=h.memo(function(e){var t=e.hue,n=e.onChange,r=T(["react-colorful__hue",e.className]);return h.createElement("div",{className:r},h.createElement(Q,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:R(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":y(t),"aria-valuemax":"360","aria-valuemin":"0"},h.createElement(Z,{className:"react-colorful__hue-pointer",left:t/360,color:G({h:t,s:100,v:100,a:1})})))}),be=h.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:G({h:t.h,s:100,v:100,a:1})};return h.createElement("div",{className:"react-colorful__saturation",style:r},h.createElement(Q,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:R(t.s+100*o.left,0,100),v:R(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+y(t.s)+"%, Brightness "+y(t.v)+"%"},h.createElement(Z,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:G(t)})))}),ve=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},pe=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Le=function(e,t){return e.toLowerCase()===t.toLowerCase()||ve(A(e),A(t))};function ye(e,t,n){var r=K(n),o=m.useState(function(){return e.toHsva(t)}),a=o[0],s=o[1],l=m.useRef({color:t,hsva:a});m.useEffect(function(){if(!e.equal(t,l.current.color)){var i=e.toHsva(t);l.current={hsva:i,color:t},s(i)}},[t,e]),m.useEffect(function(){var i;ve(a,l.current.hsva)||e.equal(i=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:i},r(i))},[a,e,r]);var c=m.useCallback(function(i){s(function(d){return Object.assign({},d,i)})},[]);return[a,c]}var qe=typeof window<"u"?m.useLayoutEffect:m.useEffect,Be=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},re=new Map,xe=function(e){qe(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!re.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,re.set(t,n);var r=Be();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},Xe=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=J(e,["className","colorModel","color","onChange"]),l=m.useRef(null);xe(l);var c=ye(n,o,a),i=c[0],d=c[1],f=T(["react-colorful",t]);return h.createElement("div",I({},s,{ref:l,className:f}),h.createElement(be,{hsva:i,onChange:d}),h.createElement(me,{hue:i.h,onChange:d,className:"react-colorful__last-control"}))},De={defaultColor:"000",toHsva:Re,fromHsva:function(e){return He({h:e.h,s:e.s,v:e.v,a:1})},equal:Le},We=function(e){return h.createElement(Xe,I({},e,{colorModel:De}))},Ke=function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+B(Object.assign({},n,{a:0}))+", "+B(Object.assign({},n,{a:1}))+")"},a=T(["react-colorful__alpha",t]),s=y(100*n.a);return h.createElement("div",{className:a},h.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),h.createElement(Q,{onMove:function(l){r({a:l.left})},onKey:function(l){r({a:R(n.a+l.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},h.createElement(Z,{className:"react-colorful__alpha-pointer",left:n.a,color:B(n)})))},we=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=J(e,["className","colorModel","color","onChange"]),l=m.useRef(null);xe(l);var c=ye(n,o,a),i=c[0],d=c[1],f=T(["react-colorful",t]);return h.createElement("div",I({},s,{ref:l,className:f}),h.createElement(be,{hsva:i,onChange:d}),h.createElement(me,{hue:i.h,onChange:d}),h.createElement(Ke,{hsva:i,onChange:d,className:"react-colorful__last-control"}))},Ve={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:ze,fromHsva:B,equal:pe},Ae=function(e){return h.createElement(we,I({},e,{colorModel:Ve}))},Ge={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Te,fromHsva:function(e){var t=de(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:pe},Ue=function(e){return h.createElement(we,I({},e,{colorModel:Ge}))},Ye={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const H=Ye,ke={};for(const e of Object.keys(H))ke[H[e]]=e;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var _e=u;for(const e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:n})}u.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),s=a-o;let l,c;a===o?l=0:t===a?l=(n-r)/s:n===a?l=2+(r-t)/s:r===a&&(l=4+(t-n)/s),l=Math.min(l*60,360),l<0&&(l+=360);const i=(o+a)/2;return a===o?c=0:i<=.5?c=s/(a+o):c=s/(2-a-o),[l,c*100,i*100]};u.rgb.hsv=function(e){let t,n,r,o,a;const s=e[0]/255,l=e[1]/255,c=e[2]/255,i=Math.max(s,l,c),d=i-Math.min(s,l,c),f=function(g){return(i-g)/6/d+1/2};return d===0?(o=0,a=0):(a=d/i,t=f(s),n=f(l),r=f(c),s===i?o=r-n:l===i?o=1/3+t-r:c===i&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,i*100]};u.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=u.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};u.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,s=(1-n-o)/(1-o)||0,l=(1-r-o)/(1-o)||0;return[a*100,s*100,l*100,o*100]};function Je(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}u.rgb.keyword=function(e){const t=ke[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(H)){const a=H[o],s=Je(e,a);s<n&&(n=s,r=o)}return r};u.keyword.rgb=function(e){return H[e]};u.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,s=t*.0193+n*.1192+r*.9505;return[o*100,a*100,s*100]};u.rgb.lab=function(e){const t=u.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,s=500*(n-r),l=200*(r-o);return[a,s,l]};u.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,s;if(n===0)return s=r*255,[s,s,s];r<.5?o=r*(1+n):o=r+n-r*n;const l=2*r-o,c=[0,0,0];for(let i=0;i<3;i++)a=t+1/3*-(i-1),a<0&&a++,a>1&&a--,6*a<1?s=l+(o-l)*6*a:2*a<1?s=o:3*a<2?s=l+(o-l)*(2/3-a)*6:s=l,c[i]=s*255;return c};u.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const s=(r+n)/2,l=r===0?2*o/(a+o):2*n/(r+n);return[t,l*100,s*100]};u.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),s=255*r*(1-n),l=255*r*(1-n*a),c=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,c,s];case 1:return[l,r,s];case 2:return[s,r,c];case 3:return[s,l,r];case 4:return[c,s,r];case 5:return[r,s,l]}};u.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,s;s=(2-n)*r;const l=(2-n)*o;return a=n*o,a/=l<=1?l:2-l,a=a||0,s/=2,[t,a*100,s*100]};u.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const s=Math.floor(6*t),l=1-r;a=6*t-s,s&1&&(a=1-a);const c=n+a*(l-n);let i,d,f;switch(s){default:case 6:case 0:i=l,d=c,f=n;break;case 1:i=c,d=l,f=n;break;case 2:i=n,d=l,f=c;break;case 3:i=n,d=c,f=l;break;case 4:i=c,d=n,f=l;break;case 5:i=l,d=n,f=c;break}return[i*255,d*255,f*255]};u.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),l=1-Math.min(1,r*(1-o)+o);return[a*255,s*255,l*255]};u.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,s;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,s=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[o*255,a*255,s*255]};u.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),s=200*(n-r);return[o,a,s]};u.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,s;a=(t+16)/116,o=n/500+a,s=a-r/200;const l=a**3,c=o**3,i=s**3;return a=l>.008856?l:(a-16/116)/7.787,o=c>.008856?c:(o-16/116)/7.787,s=i>.008856?i:(s-16/116)/7.787,o*=95.047,a*=100,s*=108.883,[o,a,s]};u.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(n*n+r*r);return[t,s,o]};u.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),s=n*Math.sin(o);return[t,a,s]};u.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?u.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(s+=60),s};u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])};u.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};u.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};u.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};u.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(l=>l+l).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,s=r&255;return[o,a,s]};u.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),s=o-a;let l,c;return s<1?l=a/(1-s):l=0,s<=0?c=0:o===t?c=(n-r)/s%6:o===n?c=2+(r-t)/s:c=4+(t-n)/s,c/=6,c%=1,[c*360,s*100,l*100]};u.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};u.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};u.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,s=a%1,l=1-s;let c=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return c=(1-n)*r,[(n*o[0]+c)*255,(n*o[1]+c)*255,(n*o[2]+c)*255]};u.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};u.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};u.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};u.gray.hsl=function(e){return[0,0,e[0]]};u.gray.hsv=u.gray.hsl;u.gray.hwb=function(e){return[0,100,e[0]]};u.gray.cmyk=function(e){return[0,0,0,e[0]]};u.gray.lab=function(e){return[e[0],0,0]};u.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const X=_e;function Qe(){const e={},t=Object.keys(X);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function Ze(e){const t=Qe(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(X[r]);for(let a=o.length,s=0;s<a;s++){const l=o[s],c=t[l];c.distance===-1&&(c.distance=t[r].distance+1,c.parent=r,n.unshift(l))}}return t}function et(e,t){return function(n){return t(e(n))}}function tt(e,t){const n=[t[e].parent,e];let r=X[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=et(X[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}var nt=function(e){const t=Ze(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const s=r[a];t[s].parent!==null&&(n[s]=tt(s,t))}return n};const U=_e,rt=nt,N={},ot=Object.keys(U);function at(e){const t=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function st(e){const t=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,s=0;s<a;s++)o[s]=Math.round(o[s]);return o};return"conversion"in e&&(t.conversion=e.conversion),t}ot.forEach(e=>{N[e]={},Object.defineProperty(N[e],"channels",{value:U[e].channels}),Object.defineProperty(N[e],"labels",{value:U[e].labels});const t=rt(e);Object.keys(t).forEach(r=>{const o=t[r];N[e][r]=st(o),N[e][r].raw=at(o)})});var lt=N;const _=ue(lt);var ct=Ne,it=function(){return ct.Date.now()},ut=it,ft=/\s/;function ht(e){for(var t=e.length;t--&&ft.test(e.charAt(t)););return t}var dt=ht,gt=dt,mt=/^\s+/;function bt(e){return e&&e.slice(0,gt(e)+1).replace(mt,"")}var vt=bt,pt=vt,oe=fe,yt=Me,ae=NaN,xt=/^[-+]0x[0-9a-f]+$/i,wt=/^0b[01]+$/i,kt=/^0o[0-7]+$/i,_t=parseInt;function Et(e){if(typeof e=="number")return e;if(yt(e))return ae;if(oe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=oe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=pt(e);var n=wt.test(e);return n||kt.test(e)?_t(e.slice(2),n?2:8):xt.test(e)?ae:+e}var Mt=Et,Ct=fe,W=ut,se=Mt,$t="Expected a function",Ot=Math.max,It=Math.min;function Nt(e,t,n){var r,o,a,s,l,c,i=0,d=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError($t);t=se(t)||0,Ct(n)&&(d=!!n.leading,f="maxWait"in n,a=f?Ot(se(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function x(v){var C=r,z=o;return r=o=void 0,i=v,s=e.apply(z,C),s}function j(v){return i=v,l=setTimeout(b,t),d?x(v):s}function M(v){var C=v-c,z=v-i,ee=t-C;return f?It(ee,a-z):ee}function p(v){var C=v-c,z=v-i;return c===void 0||C>=t||C<0||f&&z>=a}function b(){var v=W();if(p(v))return w(v);l=setTimeout(b,M(v))}function w(v){return l=void 0,g&&r?x(v):(r=o=void 0,s)}function E(){l!==void 0&&clearTimeout(l),i=0,r=c=o=l=void 0}function k(){return l===void 0?s:w(W())}function O(){var v=W(),C=p(v);if(r=arguments,o=this,c=v,C){if(l===void 0)return j(c);if(f)return clearTimeout(l),l=setTimeout(b,t),x(c)}return l===void 0&&(l=setTimeout(b,t)),s}return O.cancel=E,O.flush=k,O}var St=Nt;const Rt=ue(St);var jt=$.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),zt=$(ie)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Ft=$.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Ht=$(Ce)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Tt=$.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Pt=$.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Lt=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,le=({value:e,style:t,...n})=>{let r=`linear-gradient(${e}, ${e}), ${Lt}, linear-gradient(#fff, #fff)`;return h.createElement(Pt,{...n,style:{...t,backgroundImage:r}})},qt=$($e.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Bt=$(Oe)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),Ee=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(Ee||{}),L=Object.values(Ee),Xt=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Dt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Wt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Y=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Kt=/^\s*#?([0-9a-f]{3})\s*$/i,Vt={hex:We,rgb:Ue,hsl:Ae},q={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ce=e=>{let t=e==null?void 0:e.match(Xt);if(!t)return[0,0,0,1];let[,n,r,o,a=1]=t;return[n,r,o,a].map(Number)},S=e=>{if(!e)return;let t=!0;if(Dt.test(e)){let[s,l,c,i]=ce(e),[d,f,g]=_.rgb.hsl([s,l,c])||[0,0,0];return{valid:t,value:e,keyword:_.rgb.keyword([s,l,c]),colorSpace:"rgb",rgb:e,hsl:`hsla(${d}, ${f}%, ${g}%, ${i})`,hex:`#${_.rgb.hex([s,l,c]).toLowerCase()}`}}if(Wt.test(e)){let[s,l,c,i]=ce(e),[d,f,g]=_.hsl.rgb([s,l,c])||[0,0,0];return{valid:t,value:e,keyword:_.hsl.keyword([s,l,c]),colorSpace:"hsl",rgb:`rgba(${d}, ${f}, ${g}, ${i})`,hsl:e,hex:`#${_.hsl.hex([s,l,c]).toLowerCase()}`}}let n=e.replace("#",""),r=_.keyword.rgb(n)||_.hex.rgb(n),o=_.rgb.hsl(r),a=e;if(/[^#a-f0-9]/i.test(e)?a=n:Y.test(e)&&(a=`#${n}`),a.startsWith("#"))t=Y.test(a);else try{_.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:_.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},At=(e,t,n)=>{if(!e||!(t!=null&&t.valid))return q[n];if(n!=="hex")return(t==null?void 0:t[n])||q[n];if(!t.hex.startsWith("#"))try{return`#${_.keyword.hex(t.hex)}`}catch{return q.hex}let r=t.hex.match(Kt);if(!r)return Y.test(t.hex)?t.hex:q.hex;let[o,a,s]=r[1].split("");return`#${o}${o}${a}${a}${s}${s}`},Gt=(e,t)=>{let[n,r]=m.useState(e||""),[o,a]=m.useState(()=>S(n)),[s,l]=m.useState((o==null?void 0:o.colorSpace)||"hex");m.useEffect(()=>{let f=e||"",g=S(f);r(f),a(g),l((g==null?void 0:g.colorSpace)||"hex")},[e]);let c=m.useMemo(()=>At(n,o,s).toLowerCase(),[n,o,s]),i=m.useCallback(f=>{let g=S(f),x=(g==null?void 0:g.value)||f||"";r(x),x===""&&(a(void 0),t(void 0)),g&&(a(g),l(g.colorSpace),t(g.value))},[t]),d=m.useCallback(()=>{let f=L.indexOf(s)+1;f>=L.length&&(f=0),l(L[f]);let g=(o==null?void 0:o[L[f]])||"";r(g),t(g)},[o,s,t]);return{value:n,realValue:c,updateValue:i,color:o,colorSpace:s,cycleColorSpace:d}},D=e=>e.replace(/\s*/,"").toLowerCase(),Ut=(e,t,n)=>{let[r,o]=m.useState(t!=null&&t.valid?[t]:[]);m.useEffect(()=>{t===void 0&&o([])},[t]);let a=m.useMemo(()=>(e||[]).map(l=>typeof l=="string"?S(l):l.title?{...S(l.color),keyword:l.title}:S(l.color)).concat(r).filter(Boolean).slice(-27),[e,r]),s=m.useCallback(l=>{l!=null&&l.valid&&(a.some(c=>D(c[n])===D(l[n]))||o(c=>c.concat(l)))},[n,a]);return{presets:a,addPreset:s}},Yt=({name:e,value:t,onChange:n,onFocus:r,onBlur:o,presetColors:a,startOpen:s=!1,argType:l})=>{var E;let c=m.useCallback(Rt(n,200),[n]),{value:i,realValue:d,updateValue:f,color:g,colorSpace:x,cycleColorSpace:j}=Gt(t,c),{presets:M,addPreset:p}=Ut(a,g,x),b=Vt[x],w=!!((E=l==null?void 0:l.table)!=null&&E.readonly);return h.createElement(jt,{"aria-readonly":w},h.createElement(zt,{startOpen:s,trigger:w?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>p(g),tooltip:h.createElement(Ft,null,h.createElement(b,{color:d==="transparent"?"#000000":d,onChange:f,onFocus:r,onBlur:o}),M.length>0&&h.createElement(Tt,null,M.map((k,O)=>h.createElement(ie,{key:`${k.value}-${O}`,hasChrome:!1,tooltip:h.createElement(Ht,{note:k.keyword||k.value})},h.createElement(le,{value:k[x],active:g&&D(k[x])===D(g[x]),onClick:()=>f(k.value)})))))},h.createElement(le,{value:d,style:{margin:4}})),h.createElement(qt,{id:Ie(e),value:i,onChange:k=>f(k.target.value),onFocus:k=>k.target.select(),readOnly:w,placeholder:"Choose color..."}),i?h.createElement(Bt,{onClick:j}):null)},cn=Yt;export{Yt as ColorControl,cn as default};
//# sourceMappingURL=Color-KGDBMAHA-mcU8Riuv.js.map
