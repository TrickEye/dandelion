import{_ as u,u as g,a as r,r as c,o as f,c as y,b as _,d as i,w as v,e as b,f as x}from"./index-ed5c0839.js";const $="/dandelion/assets/beijing-f354ab42.png",M="/dandelion/assets/bg-97185bee.png",w="/dandelion/assets/dandelion-f784da98.png",C="/dandelion/assets/zhongyang-596e7873.png",z="/dandelion/assets/teamlogo-5af0d4b2.png";const I={class:"overlay overflow-hidden align-center h-100 d-flex",ref:"overlay"},P=["src"],k={class:"abs-middle dandelion-x"},S=["src"],q={name:"overlay",methods:{normalRand(o,s){let t=0,a=0;for(;t===0;)t=Math.random();for(;a===0;)a=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*a)*Math.sqrt(s)+o},moveDandelion(){document.querySelector(".dandelion-x").classList.add("selected"),document.querySelector(".dandelion-y").classList.add("selected");var o=5,s=0;const t=setInterval(()=>{if(s<1e3){for(var a=0;a<o;a++){const e=document.createElement("img");e.setAttribute("src",w),e.classList.add("abs-middle"),e.classList.add("moveDandelionSpec");const n=Math.floor(Math.random()*121)+40;e.setAttribute("width",`${n}`),e.setAttribute("height",`${n}`),console.log(`'height', ${n}px`);const l=Math.random(),d=Math.floor(l*81)-40,m=Math.floor(l*101)-50,h=Math.floor(this.normalRand(0,.2)*81),p=0;this.$refs.overlay.appendChild(e),e.style.transform=`translate(calc(-50% - ${d}vw + ${h}vw), calc(-50% + ${m}vh + ${p}vh))`,console.log(`translate(calc(-50% - ${d}vw + 80vw)), calc(-50% + ${m}vh - 100vh))`)}s+=o,o+=5,o>40&&(o=25)}else clearInterval(t)},200);setTimeout(()=>{clearInterval(t),this.$router.push("overview/")},5e3)}}},B=Object.assign(q,{setup(o){return g(s=>({"3dc0046d":"url("+r(M)+")"})),(s,t)=>{const a=c("v-img"),e=c("v-col"),n=c("v-row"),l=c("v-container");return f(),y("div",I,[_("img",{class:"abs-middle",id:"buaa",src:r($),alt:""},null,8,P),_("span",k,[i(a,{class:"dandelion-y",src:r(z)},null,8,["src"])]),_("img",{class:"abs-middle",id:"zhongyang",src:r(C),onClick:t[0]||(t[0]=(...d)=>s.moveDandelion&&s.moveDandelion(...d)),alt:""},null,8,S),i(l,{class:"d-flex align-center"},{default:v(()=>[i(n,null,{default:v(()=>[i(e,{class:"blurred radius text-center tip",cols:"12",md:"8","offset-md":"2",lg:"6","offset-lg":"3",xl:"6","offset-xl":"3",xxl:"6","offset-xxl":"3"},{default:v(()=>[b(" 蒲公英要出发了，请选择一个目的地 ")]),_:1})]),_:1})]),_:1})],512)}}}),D=u(B,[["__scopeId","data-v-5efa162e"]]),L={name:"testModule",components:{overlay:D}};function V(o,s,t,a,e,n){const l=c("overlay");return f(),x(l)}const A=u(L,[["render",V]]);export{A as default};