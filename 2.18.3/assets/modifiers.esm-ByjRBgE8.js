import"./index-ClcD9ViR.js";function f(l,e,t){const r={...l};return e.top+l.y<=t.top?r.y=t.top-e.top:e.bottom+l.y>=t.top+t.height&&(r.y=t.top+t.height-e.bottom),e.left+l.x<=t.left?r.x=t.left-e.left:e.right+l.x>=t.left+t.width&&(r.x=t.left+t.width-e.right),r}const o=l=>{let{containerNodeRect:e,draggingNodeRect:t,transform:r}=l;return!t||!e?r:f(r,t,e)},s=l=>{let{transform:e}=l;return{...e,x:0}};export{o as a,s as r};
//# sourceMappingURL=modifiers.esm-ByjRBgE8.js.map
