import{_ as h,r as t,o as a,f as m,w as n,d as s,e as p,t as d,c as u,F as g,g as k,p as C,h as D,b as v}from"./index-9ca1eb03.js";const $={name:"pushCard",props:["title","content","imgSrc","path"]};function B(o,f,c,S,i,x){const l=t("v-card-title"),_=t("v-card-text"),r=t("v-img"),e=t("v-btn"),y=t("v-card-actions"),w=t("v-card");return a(),m(w,{"min-height":"200px",class:"pa-3 ma-3"},{default:n(()=>[s(l,null,{default:n(()=>[p(d(c.title),1)]),_:1}),s(_,null,{default:n(()=>[p(d(c.content),1)]),_:1}),s(r,{src:c.imgSrc,height:"200px"},null,8,["src"]),s(y,null,{default:n(()=>[s(e,{link:"",to:c.path},{default:n(()=>[p("阅读")]),_:1},8,["to"])]),_:1})]),_:1})}const I=h($,[["render",B]]);const j={name:"blogs",components:{pushCard:I},data(){return{pushes:[{id:0,title:"实践总结",content:"乡村振兴，任重而道远",imgSrc:"src/assets/overview/zhongyangOverview/zhongyangfromsky.jpg",path:"/blogs/push0"},{id:1,title:"扬帆起航 | 蒲公英乡野航迹实践队简介",content:"激昂青春！蒲公英乡野航迹实践队启航",imgSrc:"./final_2.png",path:"/blogs/push1"},{id:2,title:"筑梦中阳 | Day.1 一键开启实践之旅",content:"一键开启实践之旅",imgSrc:"src/assets/push/2-0.jpg",path:"/blogs/push2"},{id:3,title:"筑梦中阳 | Day.2 剪中阳之影，访阳坡之兴",content:"剪中阳之影，访阳坡之兴",imgSrc:"src/assets/push/3-6.png",path:"/blogs/push3"},{id:4,title:"筑梦中阳 | Day.3 探中阳发展篇章 访民生实地调研",content:"探中阳发展篇章 访民生实地调研",imgSrc:"src/assets/push/4-6.jpg",path:"/blogs/push4"},{id:5,title:"筑梦中阳 | Day.4 寻觅自然风趣 品悟红色精神",content:"寻觅自然风趣 品悟红色精神",imgSrc:"src/assets/push/5-4.png",path:"/blogs/push5"}]}}},b=o=>(C("data-v-6ab3e64b"),o=o(),D(),o),N=b(()=>v("h1",null,"蒲公英的杂谈",-1)),V=b(()=>v("br",null,null,-1));function z(o,f,c,S,i,x){const l=t("pushCard"),_=t("v-col"),r=t("v-row");return a(),u(g,null,[N,V,s(r,null,{default:n(()=>[(a(!0),u(g,null,k(i.pushes,e=>(a(),m(_,{key:e.id,cols:"12",xl:"4",lg:"4",md:"6",sm:"12",xs:"12"},{default:n(()=>[s(l,{title:e.title,content:e.content,imgSrc:e.imgSrc,path:e.path},null,8,["title","content","imgSrc","path"])]),_:2},1024))),128))]),_:1})],64)}const E=h(j,[["render",z],["__scopeId","data-v-6ab3e64b"]]);export{E as default};
