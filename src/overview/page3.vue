<script setup>
import overviewPic from '../assets/overview/zhongyangOverview/zhongyangfromsky.jpg'
</script>

<script>
import paper from '../assets/overview/art/paper.jpg'
import building from '../assets/overview/art/building.jpg'
import noodles from '../assets/overview/art/noodles.jpg'
import countryside from '../assets/overview/art/countryside.jpg'

export default {
    name: 'page3',
    data() {
        return {
            items: [
              {index: 0, title: '非遗文化', link: 'jianzhi',desc: '作为中阳非遗文化的代表，中阳剪纸与当地传统民俗文化血肉相连。它以中阳当地民俗信仰、岁时节令、人生礼仪、神话传说为主要表现内容，多以红纸剪成，体现着喜庆、热烈的民俗气氛。中阳剪纸作为第一批国家级非遗以及世界遗产，近年来受到政府广泛重视，以传承人武小汾为代表的的中阳剪纸正在蓬勃发展并带动当地就业。中阳县的非遗项目还有中阳刺绣、九曲灯会、中阳弹唱等。', pic: paper},
              {index: 1, title: '窑洞', link: 'yaodong',desc: '在阳坡村，仍然可以见到存在已久的土窑洞。窑洞是山西省的传统民居之一，一般修在朝南的山坡上，向阳，背靠山，面朝开阔地带，少有树木遮挡，十分适宜居住生活。窑洞沉积了古老的黄土地深层文化，广大人民在劳动中创造了窑洞艺术，小小窑洞浓缩了黄土地的别样风情。在旧窑洞的不远处便是新建的现代化建筑，值得一提的是，即使是现代化的建筑，依然是傍山而建，门窗拱形。可以说，窑洞在当地人民的心里有着举足轻重的地位。', pic: building},
              {index: 2, title: '移风易俗', link: 'yfys',desc: '无论是县城还是村镇，总能见到这样的标语——“婚事新办、丧事简办、余事不办”。近年来中阳政府在持续巩固提升脱贫攻坚成果的同时，将乡村振兴与文明建设进行有效衔接，大力宣传婚事新办、丧事简办、余事不办的良好社会风气，全面促进移风易俗工作制度化、规范化、常态化，乡村社会文明程度不断提升，摒弃陈规陋习、共建文明风尚的氛围日益浓厚。', pic: countryside},
              {index: 3, title: '美食', link: 'meishi',desc: '中阳县城的大街小巷，充满了各种经营当地美食的饭馆。柏籽羊肉是山西省的名特产品之一，肉质密实，油色洁白，味含柏香，不腥不腻，因放养山林食柏籽、喝柏水而得名，产区局限在中阳侧柏山区范围内。麻豆腐是中阳县的另一道传统美食，是用豆腐皮包裹猪肉馅和各种蔬菜，再用麻油和辣椒油炸而成，口感酥脆，味道独特。莜面为当地面试的一大代表，泛指用莜面制成的各种面食，有面条状、卷筒状、短条状等多种吃法，各有风味。', pic: noodles},
            ],


            selectedEntry: 0,
            p3: document.querySelector('#p3'),
            cards: document.querySelectorAll('.culture-list .v-card'),
            picShowcases: document.querySelectorAll('.culture .pic-showcase'),
        }
    },
    methods: {
        playEntryAnim() {
            document.querySelectorAll('#p3').forEach((col) => {
                col.classList.add('anim')
            })

            document.querySelectorAll('.culture-list .v-card').forEach((col, index) => {
                setTimeout(() => {
                    col.classList.add('card-entry-animation')
                }, 300 * index)
            })

            document.querySelectorAll('.culture .v-expansion-panels').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('anim')
                }, 300 * index)
            })

            setTimeout(() => {
                this.selectedEntry = 0;
                this.cards = document.querySelectorAll('.culture-list .v-card');
                this.cards[this.selectedEntry].classList.add('selected');
                this.picShowcases = document.querySelectorAll('.culture .pic-showcase');
                this.picShowcases[this.selectedEntry].classList.add('selected');
            }, 3000);
        },
        visible() {
            const rect = p3.getBoundingClientRect(); // I actually don't know why here `this.p3` does not work, while `p3` works
            return rect.top < window.innerHeight && rect.bottom >= 0;
        },
        getBreakpoint() {
        return window.innerWidth > 1280 ? '40vh' : 'unset';
        },
        getTitleEntry() {
        return "title-entry-" + window.innerWidth > 1280 ? 'wide' : 'narrow';
        },
        switchChecked(selected) {
            console.log('switchChecked is called', selected)
            if (selected === this.selectedEntry) {
                return;
            } else {
                this.cards[this.selectedEntry].classList.remove('selected');
                this.picShowcases[this.selectedEntry].classList.remove('selected');
                this.selectedEntry = selected;
                this.cards[this.selectedEntry].classList.add('selected');
                this.picShowcases[this.selectedEntry].classList.add('selected');
            }
        }
    },
    mounted() {
        const timeout = setInterval(() => {
            if (this.visible()) {
                clearInterval(timeout);
                this.playEntryAnim();
            }
        }, 500);
    },
}
</script>

<template>
    <v-col cols="12" class="pa-0 ma-0 culture">
      <v-img :src="overviewPic" cover class="picture">
        <div class="culture">
          <v-container class="d-flex align-center blurred radius border-solid-for-test">
            <v-row>
              <v-col cols="12">
                <div class="pr-10 pt-6 text-light-blue">
                  <h2 class="text-end" id="p3">文化</h2>
                </div>
              </v-col>

              <v-col cols="4" class="wide-only">
                <v-container>
                  <v-row class="culture-list">
                    <v-col cols="12" v-for="item in items">
                        <v-card class="bg-indigo mx-auto h0w0 shrink-on-hover d-flex align-center" :ripple="false" @click="() => switchChecked(item.index)">
                          <v-card-title class="w-100 text-center">{{ item.title }}</v-card-title>
                        </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="8" class="pa-10 wide-only">
                <div class="pic-showcase" v-for="item in items">
                  <v-img :src="item.pic" cover class="align-end h-100 radius">
                    <div class="pictitle text-light-blue pa-5">{{ item.title }} <span class="float-right">
                      <router-link :to="item.link">
                        <v-btn class="font-weight-black text-h4" variant="plain" height="3em" :to="item.link">阅读</v-btn>
                      </router-link>
                    </span></div>
                    <div class="gradient position-absolute h-100 w-100"></div>
                    <div class="picdesc px-5 pb-5 text-yellow">{{ item.desc }}</div>
                  </v-img>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-row>
            <v-col cols="12" class="d-flex align-center"><v-card-text class="text-center text-yellow-darken-1">
              <v-icon>mdi-circle-outline</v-icon>
              <v-icon>mdi-circle-outline</v-icon>
              <v-icon>mdi-circle-double</v-icon>
              <v-icon>mdi-circle-outline</v-icon>
            </v-card-text></v-col>
          </v-row>
        </div>
      </v-img>
    </v-col>
</template>

<style scoped>

.picture {
  height: 100vh;
  align-items: center;
}

.border-solid-for-test {
  border: black 3px solid;
}


.h0w0 {
  width: 0;
  height: 0;
}

.card-entry-animation {
  animation: card-entry 0.8s ease-out forwards;
  animation-delay: 1s;
}

@keyframes card-entry {
  0% {
    width: 0;
    height: 0;
  }
  20% {
    height: 10vh;
  }
  50% {
    height: 10vh;
  }
  100% {
    width: 90%;
    height: 10vh;
  }
}

.shrink-on-hover {
  transition: 200ms;
}

.shrink-on-hover:hover {
  transform: scale(0.95);
}

.blurred {
  /* 透明黑色亚克力 */
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  /* 阴影 */
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

.radius {
  /* 圆角 */
  border-radius: 1rem;
}

h2 {
  opacity: 0;
  font-size: 5rem;
  font-weight: 900;
}

h2.anim {
  animation: h2entry 1s ease-in-out 1 forwards;
}

@keyframes h2entry {
  from {
    opacity: 0;
    font-size: 5rem;
  }
  to {
    opacity: 1;
    font-size: 3rem;
  }
}

.pic-showcase {
  height: 0;
  overflow: hidden;
}

.pic-showcase, .pic-showcase * {
  transition-duration: 400ms;
}

.pic-showcase.selected {
  height: 50vh;
}


.pic-showcase .gradient {
  background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0,0,0,0.5));
  opacity: 0.3;
  transition: 200ms;
}

.pic-showcase:hover .gradient {
  opacity: 1;
}

.pic-showcase .pictitle {
  color: black;
  font-size: 3.5em;
  font-weight: bold;
}

.pic-showcase .picdesc {
  color: black;
  font-size: 1.4em;
  overflow: hidden;
}

.pic-showcase:hover .picdesc {
  color: white;
  font-size: 1.4em;
  height: 100%;
}

.culture-list .selected {
    transform: scale(0.90);
}

.culture-list .v-card-title {
  font-size: 1.5em;
  font-weight: normal;
  transition-duration: 200ms;
}

.selected .v-card-title {
  font-size: 2rem;
  font-weight: bold;
}

.v-expansion-panels {
  opacity: 0;
}

.v-expansion-panels.anim {
  animation: expPanelsEntry 1s ease-in-out 1 forwards;
  animation-delay: 1s;
}

@keyframes expPanelsEntry {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>