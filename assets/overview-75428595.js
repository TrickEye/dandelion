import{_ as k,r as l,o as u,f as w,w as e,d as t,a as S,b as n,c as f,F as x,g as b,e as c,t as m,p as L,h as A,u as z}from"./index-9ad9f369.js";const $="/assets/zhongyangfromsky-eececc77.jpg",C="/assets/fungus-4628cd21.jpg",I="/assets/steel-bd4f1456.jpg",T="/assets/vinegar-aa1e17b1.jpg",H="/assets/incubation-3b2c9d6b.jpg";const j=s=>(L("data-v-8e9d103c"),s=s(),A(),s),N={class:"industry"},R=j(()=>n("div",{class:"pr-10 pt-6 text-light-blue"},[n("h2",{class:"text-end",id:"p2"},"产业")],-1)),F={class:"pic-showcase"},Q={class:"pictitle text-light-blue pa-5"},D={class:"float-right"},G=j(()=>n("div",{class:"gradient position-absolute h-100 w-100"},null,-1)),J={class:"picdesc px-5 pb-5 text-yellow"},K={name:"page2",data(){return{items:[{index:0,title:"中阳黑木耳",link:"fungus/",desc:"作为中阳木耳产业的新兴龙头企业，心言生物科技有限公司在政府的强力支持下，最新建设的木耳生产线已于去年投产，该公司同时经营一亿年产量的菌棒生产以及1000栋规模的大棚种植，利用自动化的生产设备实现高效生产，同时着眼于全产业链的木耳深加工，并注重鱼菜共生的水资源循环利用。希望中阳的木耳产业在政府的扶持下，在心言公司的带领下继续茁壮成长，快速发展。",pic:C},{index:1,title:"中钢",link:"iron/",desc:"山西中阳钢铁有限公司，坐落于中阳县城北部，始建于1985年，如今已发展成为中阳的第一大企业，年产值150亿元，拥有职工上万名，集采煤、选煤、采矿、选矿、炼铁、炼钢、轧钢、发电于一体，具有庞大的产业规模。厂区内食堂、商店、宿舍等生活设施也一应俱全，具有明显的20世纪大型企业的社会化特征，突出体现了以人为本的企业特色。近年来，中钢与北航进行深度技术合作，研究出了以Q195为代表的一系列高技术钢铁产品。",pic:I},{index:2,title:"醋",link:"vinegar/",desc:"柏洼古井手工醋庄坐落于泊洼山脚下，董事长王先生传承家族的古法手艺，在酿醋领域已经深耕了三十多年，通过使用小麦、柏叶、松针等不同的原料，开发了松针醋、柏叶醋、高粱醋等高端保健醋、养生醋等不同的商品类型，带领柏洼手工醋走上多元化、高端化、高附加值的发展道路。",pic:T},{index:3,title:"孵化园",link:"tech/",desc:"吕梁市北航中汇科技孵化器，为北航与当地政府合作召集、培养新兴产业的基地，内含硕为思集团、华艺民俗文化发展有限公司、山西宸宇服装有限公司等新兴产业公司，分别代表了在传统重工业以外的网络技术、传统文化、轻工业，为中阳县的多元化发展与产业转型提供了道路指引，为这个曾经的贫困县带来了发展潜力与生产活力。",pic:H}],selectedEntry:0,p2:document.querySelector("#p2"),cards:document.querySelectorAll(".industry-list .v-card"),picShowcases:document.querySelectorAll(".industry .pic-showcase")}},methods:{playEntryAnim(){document.querySelectorAll("#p2").forEach(s=>{s.classList.add("anim")}),document.querySelectorAll(".industry-list .v-card").forEach((s,i)=>{setTimeout(()=>{s.classList.add("card-entry-animation")},300*i)}),document.querySelectorAll(".industry .v-expansion-panels").forEach((s,i)=>{setTimeout(()=>{s.classList.add("anim")},300*i)}),setTimeout(()=>{this.selectedEntry=0,this.cards=document.querySelectorAll(".industry-list .v-card"),this.cards[this.selectedEntry].classList.add("selected"),this.picShowcases=document.querySelectorAll(".industry .pic-showcase"),this.picShowcases[this.selectedEntry].classList.add("selected")},3e3)},visible(){const s=p2.getBoundingClientRect();return s.top<window.innerHeight&&s.bottom>=0},getBreakpoint(){return window.innerWidth>1280?"40vh":"unset"},getTitleEntry(){return"title-entry-"+window.innerWidth>1280?"wide":"narrow"},switchChecked(s){console.log("switchChecked is called",s),s!==this.selectedEntry&&(this.cards[this.selectedEntry].classList.remove("selected"),this.picShowcases[this.selectedEntry].classList.remove("selected"),this.selectedEntry=s,this.cards[this.selectedEntry].classList.add("selected"),this.picShowcases[this.selectedEntry].classList.add("selected"))}},mounted(){const s=setInterval(()=>{this.visible()&&(clearInterval(s),this.playEntryAnim())},500)}},M=Object.assign(K,{setup(s){return(i,q)=>{const a=l("v-col"),y=l("v-card-title"),p=l("v-card"),d=l("v-row"),h=l("v-container"),v=l("v-btn"),_=l("v-img"),r=l("v-icon"),g=l("v-card-text");return u(),w(a,{cols:"12",class:"pa-0 ma-0 industry"},{default:e(()=>[t(_,{src:S($),cover:"",class:"picture"},{default:e(()=>[n("div",N,[t(h,{class:"d-flex align-center blurred radius border-solid-for-test"},{default:e(()=>[t(d,null,{default:e(()=>[t(a,{cols:"12"},{default:e(()=>[R]),_:1}),t(a,{cols:"4",class:"wide-only"},{default:e(()=>[t(h,null,{default:e(()=>[t(d,{class:"industry-list"},{default:e(()=>[(u(!0),f(x,null,b(i.items,o=>(u(),w(a,{cols:"12"},{default:e(()=>[t(p,{class:"bg-indigo mx-auto h0w0 shrink-on-hover d-flex align-center",ripple:!1,onClick:()=>i.switchChecked(o.index)},{default:e(()=>[t(y,{class:"w-100 text-center"},{default:e(()=>[c(m(o.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(a,{cols:"8",class:"pa-10 wide-only"},{default:e(()=>[(u(!0),f(x,null,b(i.items,o=>(u(),f("div",F,[t(_,{src:o.pic,cover:"",class:"align-end h-100 radius"},{default:e(()=>[n("div",Q,[c(m(o.title)+" ",1),n("span",D,[t(v,{class:"font-weight-black text-h4",variant:"plain",height:"3em",href:o.link},{default:e(()=>[c("阅读")]),_:2},1032,["href"])])]),G,n("div",J,m(o.desc),1)]),_:2},1032,["src"])]))),256))]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(a,{cols:"12",class:"d-flex align-center"},{default:e(()=>[t(g,{class:"text-center text-yellow-darken-1"},{default:e(()=>[t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-double")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["src"])]),_:1})}}}),B=k(M,[["__scopeId","data-v-8e9d103c"]]),U="/assets/paper-7967a30d.jpg",X="/assets/building-4eb9c3bd.jpg",Y="/assets/noodles-b2c37c9b.jpg",Z="/assets/countryside-5e483a75.jpg";const W=s=>(L("data-v-f48150ef"),s=s(),A(),s),ee={class:"culture"},te=W(()=>n("div",{class:"pr-10 pt-6 text-light-blue"},[n("h2",{class:"text-end",id:"p3"},"文化")],-1)),se={class:"pic-showcase"},ce={class:"pictitle text-light-blue pa-5"},le={class:"float-right"},ne=W(()=>n("div",{class:"gradient position-absolute h-100 w-100"},null,-1)),ie={class:"picdesc px-5 pb-5 text-yellow"},oe={name:"page3",data(){return{items:[{index:0,title:"非遗文化",link:"jianzhi/",desc:"作为中阳非遗文化的代表，中阳剪纸与当地传统民俗文化血肉相连。它以中阳当地民俗信仰、岁时节令、人生礼仪、神话传说为主要表现内容，多以红纸剪成，体现着喜庆、热烈的民俗气氛。中阳剪纸作为第一批国家级非遗以及世界遗产，近年来受到政府广泛重视，以传承人武小汾为代表的的中阳剪纸正在蓬勃发展并带动当地就业。中阳县的非遗项目还有中阳刺绣、九曲灯会、中阳弹唱等。",pic:U},{index:1,title:"窑洞",link:"yaodong/",desc:"在阳坡村，仍然可以见到存在已久的土窑洞。窑洞是山西省的传统民居之一，一般修在朝南的山坡上，向阳，背靠山，面朝开阔地带，少有树木遮挡，十分适宜居住生活。窑洞沉积了古老的黄土地深层文化，广大人民在劳动中创造了窑洞艺术，小小窑洞浓缩了黄土地的别样风情。在旧窑洞的不远处便是新建的现代化建筑，值得一提的是，即使是现代化的建筑，依然是傍山而建，门窗拱形。可以说，窑洞在当地人民的心里有着举足轻重的地位。",pic:X},{index:2,title:"移风易俗",link:"yfys/",desc:"无论是县城还是村镇，总能见到这样的标语——“婚事新办、丧事简办、余事不办”。近年来中阳政府在持续巩固提升脱贫攻坚成果的同时，将乡村振兴与文明建设进行有效衔接，大力宣传婚事新办、丧事简办、余事不办的良好社会风气，全面促进移风易俗工作制度化、规范化、常态化，乡村社会文明程度不断提升，摒弃陈规陋习、共建文明风尚的氛围日益浓厚。",pic:Z},{index:3,title:"美食",link:"meishi/",desc:"中阳县城的大街小巷，充满了各种经营当地美食的饭馆。柏籽羊肉是山西省的名特产品之一，肉质密实，油色洁白，味含柏香，不腥不腻，因放养山林食柏籽、喝柏水而得名，产区局限在中阳侧柏山区范围内。麻豆腐是中阳县的另一道传统美食，是用豆腐皮包裹猪肉馅和各种蔬菜，再用麻油和辣椒油炸而成，口感酥脆，味道独特。莜面为当地面试的一大代表，泛指用莜面制成的各种面食，有面条状、卷筒状、短条状等多种吃法，各有风味。",pic:Y}],selectedEntry:0,p3:document.querySelector("#p3"),cards:document.querySelectorAll(".culture-list .v-card"),picShowcases:document.querySelectorAll(".culture .pic-showcase")}},methods:{playEntryAnim(){document.querySelectorAll("#p3").forEach(s=>{s.classList.add("anim")}),document.querySelectorAll(".culture-list .v-card").forEach((s,i)=>{setTimeout(()=>{s.classList.add("card-entry-animation")},300*i)}),document.querySelectorAll(".culture .v-expansion-panels").forEach((s,i)=>{setTimeout(()=>{s.classList.add("anim")},300*i)}),setTimeout(()=>{this.selectedEntry=0,this.cards=document.querySelectorAll(".culture-list .v-card"),this.cards[this.selectedEntry].classList.add("selected"),this.picShowcases=document.querySelectorAll(".culture .pic-showcase"),this.picShowcases[this.selectedEntry].classList.add("selected")},3e3)},visible(){const s=p3.getBoundingClientRect();return s.top<window.innerHeight&&s.bottom>=0},getBreakpoint(){return window.innerWidth>1280?"40vh":"unset"},getTitleEntry(){return"title-entry-"+window.innerWidth>1280?"wide":"narrow"},switchChecked(s){console.log("switchChecked is called",s),s!==this.selectedEntry&&(this.cards[this.selectedEntry].classList.remove("selected"),this.picShowcases[this.selectedEntry].classList.remove("selected"),this.selectedEntry=s,this.cards[this.selectedEntry].classList.add("selected"),this.picShowcases[this.selectedEntry].classList.add("selected"))}},mounted(){const s=setInterval(()=>{this.visible()&&(clearInterval(s),this.playEntryAnim())},500)}},ae=Object.assign(oe,{setup(s){return(i,q)=>{const a=l("v-col"),y=l("v-card-title"),p=l("v-card"),d=l("v-row"),h=l("v-container"),v=l("v-btn"),_=l("v-img"),r=l("v-icon"),g=l("v-card-text");return u(),w(a,{cols:"12",class:"pa-0 ma-0 culture"},{default:e(()=>[t(_,{src:S($),cover:"",class:"picture"},{default:e(()=>[n("div",ee,[t(h,{class:"d-flex align-center blurred radius border-solid-for-test"},{default:e(()=>[t(d,null,{default:e(()=>[t(a,{cols:"12"},{default:e(()=>[te]),_:1}),t(a,{cols:"4",class:"wide-only"},{default:e(()=>[t(h,null,{default:e(()=>[t(d,{class:"culture-list"},{default:e(()=>[(u(!0),f(x,null,b(i.items,o=>(u(),w(a,{cols:"12"},{default:e(()=>[t(p,{class:"bg-indigo mx-auto h0w0 shrink-on-hover d-flex align-center",ripple:!1,onClick:()=>i.switchChecked(o.index)},{default:e(()=>[t(y,{class:"w-100 text-center"},{default:e(()=>[c(m(o.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(a,{cols:"8",class:"pa-10 wide-only"},{default:e(()=>[(u(!0),f(x,null,b(i.items,o=>(u(),f("div",se,[t(_,{src:o.pic,cover:"",class:"align-end h-100 radius"},{default:e(()=>[n("div",ce,[c(m(o.title)+" ",1),n("span",le,[t(v,{class:"font-weight-black text-h4",variant:"plain",height:"3em",href:o.link},{default:e(()=>[c("阅读")]),_:2},1032,["href"])])]),ne,n("div",ie,m(o.desc),1)]),_:2},1032,["src"])]))),256))]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(a,{cols:"12",class:"d-flex align-center"},{default:e(()=>[t(g,{class:"text-center text-yellow-darken-1"},{default:e(()=>[t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-double")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["src"])]),_:1})}}}),P=k(ae,[["__scopeId","data-v-f48150ef"]]);const O=s=>(L("data-v-55186be5"),s=s(),A(),s),de={class:"history"},re=O(()=>n("div",{class:"pr-10 pt-6 text-light-blue"},[n("h2",{class:"text-end",id:"p4"},"历史印记")],-1)),ue={class:"pic-showcase"},_e={class:"pictitle text-light-blue pa-5"},he={class:"float-right"},pe=O(()=>n("div",{class:"gradient position-absolute h-100 w-100"},null,-1)),ve={class:"picdesc px-5 pb-5 text-yellow"},fe={name:"page4",data(){return{items:[{index:0,title:"筚路蓝缕，革命底色",link:"todo/",desc:"作为中阳木耳产业的新兴龙头企业，心言生物科技有限公司在政府的强力支持下，最新建设的木耳生产线已于去年投产，该公司同时经营一亿年产量的菌棒生产以及1000栋规模的大棚种植，利用自动化的生产设备实现高效生产，同时着眼于全产业链的木耳深加工，并注重鱼菜共生的水资源循环利用。希望中阳的木耳产业在政府的扶持下，在心言公司的带领下继续茁壮成长，快速发展。",pic:C},{index:1,title:"稳步发展，生产复苏",link:"todo/",desc:"山西中阳钢铁有限公司，坐落于中阳县城北部，始建于1985年，如今已发展成为中阳的第一大企业，年产值150亿元，拥有职工上万名，集采煤、选煤、采矿、选矿、炼铁、炼钢、轧钢、发电于一体，具有庞大的产业规模。厂区内食堂、商店、宿舍等生活设施也一应俱全，具有明显的20世纪大型企业的社会化特征，突出体现了以人为本的企业特色。近年来，中钢与北航进行深度技术合作，研究出了以Q195为代表的一系列高技术钢铁产品。",pic:I},{index:2,title:"乡村振兴，全面脱贫",link:"todo/",desc:"柏洼古井手工醋庄坐落于泊洼山脚下，董事长王先生传承家族的古法手艺，在酿醋领域已经深耕了三十多年，通过使用小麦、柏叶、松针等不同的原料，开发了松针醋、柏叶醋、高粱醋等高端保健醋、养生醋等不同的商品类型，带领柏洼手工醋走上多元化、高端化、高附加值的发展道路。",pic:T}],selectedEntry:0,p4:document.querySelector("#p4"),cards:document.querySelectorAll(".history-list .v-card"),picShowcases:document.querySelectorAll(".history .pic-showcase")}},methods:{playEntryAnim(){document.querySelectorAll("#p4").forEach(s=>{s.classList.add("anim")}),document.querySelectorAll(".history-list .v-card").forEach((s,i)=>{setTimeout(()=>{s.classList.add("card-entry-animation")},300*i)}),document.querySelectorAll(".history .v-expansion-panels").forEach((s,i)=>{setTimeout(()=>{s.classList.add("anim")},300*i)}),setTimeout(()=>{this.selectedEntry=0,this.cards=document.querySelectorAll(".history-list .v-card"),this.cards[this.selectedEntry].classList.add("selected"),this.picShowcases=document.querySelectorAll(".history .pic-showcase"),this.picShowcases[this.selectedEntry].classList.add("selected")},3e3)},visible(){const s=p4.getBoundingClientRect();return s.top<window.innerHeight&&s.bottom>=0},getBreakpoint(){return window.innerWidth>1280?"40vh":"unset"},getTitleEntry(){return"title-entry-"+window.innerWidth>1280?"wide":"narrow"},switchChecked(s){console.log("switchChecked is called",s),s!==this.selectedEntry&&(this.cards[this.selectedEntry].classList.remove("selected"),this.picShowcases[this.selectedEntry].classList.remove("selected"),this.selectedEntry=s,this.cards[this.selectedEntry].classList.add("selected"),this.picShowcases[this.selectedEntry].classList.add("selected"))}},mounted(){const s=setInterval(()=>{this.visible()&&(clearInterval(s),this.playEntryAnim())},500)}},me=Object.assign(fe,{setup(s){return(i,q)=>{const a=l("v-col"),y=l("v-card-title"),p=l("v-card"),d=l("v-row"),h=l("v-container"),v=l("v-btn"),_=l("v-img"),r=l("v-icon"),g=l("v-card-text");return u(),w(a,{cols:"12",class:"pa-0 ma-0 history"},{default:e(()=>[t(_,{src:S($),cover:"",class:"picture"},{default:e(()=>[n("div",de,[t(h,{class:"d-flex align-center blurred radius border-solid-for-test"},{default:e(()=>[t(d,null,{default:e(()=>[t(a,{cols:"12"},{default:e(()=>[re]),_:1}),t(a,{cols:"4",class:"wide-only"},{default:e(()=>[t(h,null,{default:e(()=>[t(d,{class:"history-list"},{default:e(()=>[(u(!0),f(x,null,b(i.items,o=>(u(),w(a,{cols:"12"},{default:e(()=>[t(p,{class:"bg-indigo mx-auto h0w0 shrink-on-hover d-flex align-center",ripple:!1,onClick:()=>i.switchChecked(o.index)},{default:e(()=>[t(y,{class:"w-100 text-center"},{default:e(()=>[c(m(o.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(a,{cols:"8",class:"pa-10 wide-only"},{default:e(()=>[(u(!0),f(x,null,b(i.items,o=>(u(),f("div",ue,[t(_,{src:o.pic,cover:"",class:"align-end h-100 radius"},{default:e(()=>[n("div",_e,[c(m(o.title)+" ",1),n("span",he,[t(v,{class:"font-weight-black text-h4",variant:"plain",height:"3em",href:o.link},{default:e(()=>[c("阅读")]),_:2},1032,["href"])])]),pe,n("div",ve,m(o.desc),1)]),_:2},1032,["src"])]))),256))]),_:1})]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(a,{cols:"12",class:"d-flex align-center"},{default:e(()=>[t(g,{class:"text-center text-yellow-darken-1"},{default:e(()=>[t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(r,null,{default:e(()=>[c("mdi-circle-double")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["src"])]),_:1})}}}),V=k(me,[["__scopeId","data-v-55186be5"]]);const E=s=>(L("data-v-47c6b22a"),s=s(),A(),s),ye=E(()=>n("div",null,[n("h1",null,"中阳县")],-1)),ge=E(()=>n("strong",null,"1441.4平方公里",-1)),we=E(()=>n("strong",null,"136925人",-1)),xe=E(()=>n("strong",null,"5个镇、1个乡",-1)),be=E(()=>n("div",null,[c("由于地处山脉，中阳县境内有许多自然风光与人造景观。县城东5公里处有"),n("strong",null,"柏洼山"),c("，海拔1250米，集柏海松林、道教信仰、湖泊溶洞于一体，山中有"),n("strong",null,"龙泉关"),c("，至少有近千年历史，内存大量道教遗迹")],-1)),Ee=E(()=>n("div",null,[c("中阳县作为革命老区，是"),n("strong",null,"山西省第一个县级苏维埃政权所在地"),c("，革命思想在中阳的传播可以追溯至新民主主义革命时期。聂荣臻等曾在中阳境内进行"),n("strong",null,"关上战斗"),c("大败阎锡山，抗日时期中阳县"),n("strong",null,"牺牲救国同盟会"),c("也发挥了重大作用。")],-1)),ke={name:"overview",components:{page2:B,page3:P,page4:V},data(){return{cards:[this.$refs.c1]}},mounted(){document.querySelectorAll(".card").forEach((s,i)=>{setTimeout(()=>{s.classList.add("card-entry-animation")},1700+300*i)}),window.innerWidth<1280?document.querySelectorAll(".wide-only").forEach(s=>{console.log(s),s.classList.add("d-none")}):document.querySelectorAll(".narrow-only").forEach(s=>{console.log(s),s.classList.add("d-none")})},created(){},methods:{getBreakpoint(){return window.innerWidth>1280?"40vh":"unset"},getTitleEntry(){return"title-entry-"+window.innerWidth>1280?"wide":"narrow"}}},Se=Object.assign(ke,{setup(s){return z(i=>({"1bdee85d":i.getBreakpoint()})),(i,q)=>{const a=l("v-btn"),y=l("v-sheet"),p=l("v-col"),d=l("v-card-text"),h=l("v-card"),v=l("v-row"),_=l("v-icon"),r=l("v-container"),g=l("v-img");return u(),w(v,{class:"pic-container pa-0 ma-0"},{default:e(()=>[t(p,{cols:"12",class:"pa-0 ma-0"},{default:e(()=>[t(g,{src:S($),cover:"",class:"picture"},{default:e(()=>[n("div",null,[t(r,null,{default:e(()=>[t(v,{class:"d-flex align-center blurred radius border-solid-for-test"},{default:e(()=>[t(p,{cols:"12",lg:"6",xl:"6",class:"title text-center text-yellow"},{default:e(()=>[ye,t(y,{class:"bg-transparent text-center text-shades-white"},{default:e(()=>[t(a,{variant:"plain",link:"",href:"http://www.sxzhongyang.gov.cn/"},{default:e(()=>[c("中阳县人民政府官网")]),_:1})]),_:1})]),_:1}),t(p,{cols:"12",lg:"6",xl:"6"},{default:e(()=>[t(h,{class:"ma-2 mx-auto card overflow-hidden d-flex align-center",ref:"c1"},{default:e(()=>[n("div",null,[t(d,null,{default:e(()=>[c("中阳县位于吕梁山脉中段西麓，面积"),ge,c("，常住人口在2021年末为"),we,c("。中阳县气候属暖温带亚干旱区大陆性季风气候。截至2021年10月，中阳县辖"),xe,c("。 ")]),_:1})])]),_:1},512),t(h,{class:"ma-2 mx-auto card overflow-hidden d-flex align-center"},{default:e(()=>[t(d,{class:"d-flex align-center"},{default:e(()=>[be]),_:1})]),_:1}),t(h,{class:"ma-2 mx-auto card overflow-hidden d-flex align-center"},{default:e(()=>[t(d,{class:"d-flex align-center"},{default:e(()=>[Ee]),_:1})]),_:1})]),_:1})]),_:1}),t(v,null,{default:e(()=>[t(p,{cols:"12",class:"d-flex align-center"},{default:e(()=>[t(d,{class:"text-center text-yellow-darken-1"},{default:e(()=>[t(_,null,{default:e(()=>[c("mdi-circle-double")]),_:1}),t(_,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(_,null,{default:e(()=>[c("mdi-circle-outline")]),_:1}),t(_,null,{default:e(()=>[c("mdi-circle-outline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["src"])]),_:1}),t(B),t(P),t(V)]),_:1})}}}),Ae=k(Se,[["__scopeId","data-v-47c6b22a"]]);export{Ae as default};
