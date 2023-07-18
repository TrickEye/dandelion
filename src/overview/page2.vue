<script setup>
import overviewPic from '../assets/overview/zhongyangOverview/zhongyangOverview.drawio.png'
import fungusPic from '../assets/overview/industry/fungus.drawio.png'
import steelPic from '../assets/overview/industry/steel.drawio.png'
import vinegarPic from '../assets/overview/industry/vinegar.drawio.png'
import incubationPic from '../assets/overview/industry/incubation.drawio.png'
</script>

<script>
import fungusPic from '../assets/overview/industry/fungus.drawio.png'
import steelPic from '../assets/overview/industry/steel.drawio.png'
import vinegarPic from '../assets/overview/industry/vinegar.drawio.png'
import incubationPic from '../assets/overview/industry/incubation.drawio.png'

export default {
    name: 'page2',
    data() {
        return {
            items: [
              {index: 0, title: '中阳黑木耳', desc: '介绍内容介绍内容，您猜怎么着，我这介绍有好多好多好多，一排是别想装下了哈哈哈哈哈哈哈哈哈哈哈', pic: fungusPic},
              {index: 1, title: '中钢', desc: '介绍内容介绍内容，您猜怎么着，我这介绍有好多好多好多，一排是别想装下了哈哈哈哈哈哈哈哈哈哈哈', pic: steelPic},
              {index: 2, title: '醋', desc: '介绍内容介绍内容，您猜怎么着，我这介绍有好多好多好多，一排是别想装下了哈哈哈哈哈哈哈哈哈哈哈', pic: vinegarPic},
              {index: 3, title: '孵化园', desc: '介绍内容介绍内容，您猜怎么着，我这介绍有好多好多好多，一排是别想装下了哈哈哈哈哈哈哈哈哈哈哈', pic: incubationPic},
            ],


            selectedEntry: 0,
            p2: document.querySelector('#p2'),
            cards: document.querySelectorAll('.industry-list .v-card'),
            picShowcases: document.querySelectorAll('.pic-showcase'),
        }
    },
    methods: {
        playEntryAnim() {
            document.querySelectorAll('h2').forEach((col) => {
                col.classList.add('anim')
            })

            document.querySelectorAll('.industry-list .v-card').forEach((col, index) => {
                setTimeout(() => {
                    col.classList.add('card-entry-animation')
                }, 300 * index)
            })

            document.querySelectorAll('.v-expansion-panels').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('anim')
                }, 300 * index)
            })

            setTimeout(() => {
                this.selectedEntry = 0;
                this.cards = document.querySelectorAll('.industry-list .v-card');
                this.cards[this.selectedEntry].classList.add('selected');
                this.picShowcases = document.querySelectorAll('.pic-showcase');
                this.picShowcases[this.selectedEntry].classList.add('selected');
            }, 3000);
        },
        visible() {
            const rect = p2.getBoundingClientRect();
            const visible = rect.top < window.innerHeight && rect.bottom >= 0;
            return visible;
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
    <v-col cols="12" class="pa-0 ma-0">
      <v-img :src="overviewPic" cover class="picture">
        <div class="border-solid-for-test">
          <v-container class="d-flex align-center blurred radius">
            <v-row>
              <v-col cols="12">
                <div class="border-solid-for-test pr-10 pt-6">
                  <h2 class="text-end" id="p2">产业</h2>
                </div>
              </v-col>

              <v-col cols="4" class="wide-only">
                <v-container>
                  <v-row class="industry-list border-solid-for-test">
                    <v-col cols="12" v-for="item in items">
                        <v-card class="bg-indigo mx-auto h0w0 shrink-on-hover d-flex align-center" :ripple="false" @click="() => switchChecked(item.index)">
                          <v-card-title class="w-100 text-center">{{ item.title }}</v-card-title>
                        </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="8" class="pa-10 wide-only">
                <div class="border-solid-for-test pic-showcase" v-for="item in items">
                  <v-img :src="item.pic" cover class="align-end h-100 radius">
                    <div class="pictitle font-weight-black pa-5">{{ item.title }}</div>
                    <div class="gradient position-absolute border-solid-for-test h-100 w-100"></div>
                    <div class="picdesc border-solid-for-test px-5 pb-5">{{ item.desc }}</div>
                  </v-img>
                </div>
              </v-col>

              <v-col cols="12" class="narrow-only">
                <v-expansion-panels :max="1" variant="popout">
                  <v-expansion-panel class="before-anim" v-for="item in items">
                    <v-expansion-panel-title>
                      {{ item.title }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-sheet class="border-solid-for-test" style="height: 40vh;">
                        <v-img :src="item.pic" cover class="align-end h-100 radius">
                          <div class="text-h2 font-weight-black pa-5">{{ item.title }}</div>
                          <div class="text-h5 border-solid-for-test px-5 pb-5">{{ item.desc }}</div>
                        </v-img>
                      </v-sheet>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>

          </v-container>
        </div>
      </v-img>
    </v-col>
</template>

<style scoped>

.picture {
  height: 100vh;
  align-items: center;
}

/* .border-solid-for-test {
  border: black 3px solid;
} */


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
  font-size: 2em;
  overflow: hidden;
}

.pic-showcase:hover .picdesc {
  color: white;
  font-size: 2em;
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