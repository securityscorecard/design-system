import{B as h,v as $,aa as g}from"./space-B9R18Mwn.js";import{i as p}from"./isArray-C7-fa-V4.js";import{i as y}from"./isEmptyArray-B-_3gajU.js";import{g as b}from"./gt-CQw4D1xu.js";function v(e){return Object.prototype.toString.call(e)==="[object Number]"}var m=h(function(n){return n!=null&&v(n.length)?n.length:NaN}),w=$(p);function l(e){this.message=e,this.stack=""}l.prototype=Error.prototype;function x(e){function n(a,s,i,f,r,c,d){const t=f||"ANONYMOUS",u=c||i;return s[i]===null?a?s[i]===null?new l(`The ${r} \`${u}\` is marked as required in \`${t}\` but its value is \`null\`.`):new l(`The ${r} \`${u}\` is marked as required in \`${t}\` but its value is \`undefined\`.`):null:e(s,i,t,r,u,d)}const o=n.bind(null,!1);return o.isRequired=n.bind(null,!0),o}function V(...e){return x((n,o,a,s,i,f)=>{const r=n[o],c=s||"prop",d=i||o;if(g(r))return null;if(w(r))return new l(`Invalid ${c} \`${d}\` supplied to \`${a}\`, expected an array with a maximum of ${e.length} elements`);if(y(r))return new l(`Invalid ${c} \`${d}\` supplied to \`${a}\`, expected an array with a maximum of ${e.length} elements, got empty array`);if(b(m(r),m(e)))return new l(`Invalid ${c} \`${d}\` supplied to \`${a}\`, expected an array with a maximum of ${e.length} elements, got array with ${r.length} elements`);for(let t=0;t<r.length;t+=1){const u=e[t](r,t,a,"element",`${i}[${t}]`,f);if(u)return u}return null})}export{V as t};
