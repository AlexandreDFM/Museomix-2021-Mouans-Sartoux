import{f as l,a8 as p,D as r,o as m,c as f,X as z,Y as x}from"./entry.33PI4TfE.js";const _=l({__name:"IconTw",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(c){const n=p(),t=c,u=r(()=>{var s;let e=t.name;return(s=n.nuxtIcon)!=null&&s.aliases&&n.nuxtIcon.aliases[t.name]&&(e=n.nuxtIcon.aliases[t.name]),e}),a=r(()=>{var s,o,i;if(!t.size&&typeof((s=n.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((o=n.nuxtIcon)!=null&&o.size))return;const e=t.size||((i=n.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(m(),f("span",{class:z(u.value),style:x({width:a.value,height:a.value})},null,6))}});export{_};