import{c as d,h as g}from"./render.96a5a248.js";import{e as t,c,h,i,ab as f,ac as m,g as y,_ as x,U as _,V as v,a7 as C,Y as $,Z as P}from"./index.52d89dac.js";var Q=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=y(),e=i(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(i(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},g(o.default))}}),F="assets/quasar-logo-vertical.20d65235.svg";const q=_({name:"IndexPage"}),B=P("img",{alt:"Quasar logo",src:F,style:{width:"200px",height:"200px"}},null,-1);function b(n,o,s,e,l,r){return v(),C(Q,{class:"flex flex-center"},{default:$(()=>[B]),_:1})}var k=x(q,[["render",b]]);export{k as default};
