import{P as e}from"./index-BRV0Se7Z.js";const i=e.oneOfType([e.string,e.shape({pathname:e.string,search:e.string,hash:e.string})]),n={label:e.node.isRequired,name:e.string.isRequired},o=e.exact({...n,onClick:e.func.isRequired}),s=e.exact({...n,onClick:e.func,to:i.isRequired}),t=e.exact({...n,onClick:e.func,href:e.string.isRequired}),c=e.oneOfType([o,s,t]),a=e.exact({...n,onClick:e.func,subActions:e.arrayOf(c).isRequired});export{c as A,o as H,s as R,t as a,a as b,n as c};
//# sourceMappingURL=action.types-CSW_hKjS.js.map
