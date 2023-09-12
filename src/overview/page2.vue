<script setup>
import overviewPic from '../assets/overview/zhongyangOverview/zhongyangfromsky.jpg'
</script>

<script>
import fungusPic from '../assets/overview/industry/fungus.jpg'
import steelPic from '../assets/overview/industry/steel.jpg'
import vinegarPic from '../assets/overview/industry/vinegar.jpg'
import incubationPic from '../assets/overview/industry/incubation.jpg'

export default {
    name: 'page2',
    data() {
        return {
            items: [
              {index: 0, title: '中阳黑木耳', link: '#/overview/fungus', desc: '作为中阳木耳产业的新兴龙头企业，心言生物科技有限公司在政府的强力支持下，最新建设的木耳生产线已于去年投产，该公司同时经营一亿年产量的菌棒生产以及1000栋规模的大棚种植，利用自动化的生产设备实现高效生产，同时着眼于全产业链的木耳深加工，并注重鱼菜共生的水资源循环利用。希望中阳的木耳产业在政府的扶持下，在心言公司的带领下继续茁壮成长，快速发展。', pic: fungusPic},
              {index: 1, title: '中钢', link: '#/overview/iron',  desc: '山西中阳钢铁有限公司，坐落于中阳县城北部，始建于1985年，如今已发展成为中阳的第一大企业，年产值150亿元，拥有职工上万名，集采煤、选煤、采矿、选矿、炼铁、炼钢、轧钢、发电于一体，具有庞大的产业规模。厂区内食堂、商店、宿舍等生活设施也一应俱全，具有明显的20世纪大型企业的社会化特征，突出体现了以人为本的企业特色。近年来，中钢与北航进行深度技术合作，研究出了以Q195为代表的一系列高技术钢铁产品。', pic: steelPic},
              {index: 2, title: '醋', link: '#/overview/vinegar', desc: '柏洼古井手工醋庄坐落于泊洼山脚下，董事长王先生传承家族的古法手艺，在酿醋领域已经深耕了三十多年，通过使用小麦、柏叶、松针等不同的原料，开发了松针醋、柏叶醋、高粱醋等高端保健醋、养生醋等不同的商品类型，带领柏洼手工醋走上多元化、高端化、高附加值的发展道路。', pic: vinegarPic},
              {index: 3, title: '孵化园', link: '#/overview/tech', desc: '吕梁市北航中汇科技孵化器，为北航与当地政府合作召集、培养新兴产业的基地，内含硕为思集团、华艺民俗文化发展有限公司、山西宸宇服装有限公司等新兴产业公司，分别代表了在传统重工业以外的网络技术、传统文化、轻工业，为中阳县的多元化发展与产业转型提供了道路指引，为这个曾经的贫困县带来了发展潜力与生产活力。', pic: incubationPic},
            ],


            selectedEntry: 0,
            p2: document.querySelector('#p2'),
            cards: document.querySelectorAll('.industry-list .v-card'),
            picShowcases: document.querySelectorAll('.industry .pic-showcase'),
        }
    },
    methods: {
        playEntryAnim() {
            document.querySelectorAll('#p2').forEach((col) => {
                col.classList.add('anim')
            })

            document.querySelectorAll('.industry-list .v-card').forEach((col, index) => {
                setTimeout(() => {
                    col.classList.add('card-entry-animation')
                }, 300 * index)
            })

            document.querySelectorAll('.industry .v-expansion-panels').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('anim')
                }, 300 * index)
            })

            setTimeout(() => {
                this.selectedEntry = 0;
                this.cards = document.querySelectorAll('.industry-list .v-card');
                this.cards[this.selectedEntry].classList.add('selected');
                this.picShowcases = document.querySelectorAll('.industry .pic-showcase');
                this.picShowcases[this.selectedEntry].classList.add('selected');
            }, 3000);
        },
        visible() {
            const rect = p2.getBoundingClientRect(); // I actually don't know why here `this.p2` does not work, while `p2` works, maybe because in vue, p2 can be used to refer the element#p2.
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
    <v-col cols="12" class="pa-0 ma-0 industry">
      <v-img :src="overviewPic" cover class="picture">
        <div class="industry">
          <v-container class="d-flex align-center blurred radius border-solid-for-test">
            <v-row>
              <v-col cols="12">
                <div class="pr-10 pt-6 text-light-blue">
                  <h2 class="text-end" id="p2">产业</h2>
                </div>
              </v-col>

              <v-col cols="4" class="wide-only">
                <v-container>
                  <v-row class="industry-list">
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
                    <div class="pictitle text-light-blue pa-5">{{ item.title }} <span class="float-right"> <v-btn class="font-weight-black text-h4" variant="plain" height="3em" :href="item.link">阅读</v-btn> </span></div>
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
  font-size: 3.75em;
}

.pic-showcase:hover .pictitle {
  color: white;
  font-size: 4.5em;
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

.industry-list .selected {
    transform: scale(0.90);
}

.industry-list .v-card-title {
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