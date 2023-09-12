<script setup>
import overviewPic from '../assets/overview/zhongyangOverview/zhongyangfromsky.jpg'
import overviewPic1 from '../assets/overview/zhongyangOverview/zhongyangcity.jpg'
import fungusPic from '../assets/overview/industry/fungus.drawio.png'
</script>

<script>
import page2 from '../overview/page2.vue'
import page3 from '../overview/page3.vue'
import page4 from '../overview/page4.vue'

export default {
  name: 'overview',
  components: {
    page2, page3, page4
  },
  data() {
    return {
      cards: [this.$refs.c1]
    }
  },
  mounted() {
    // animation
    document.querySelectorAll('.card').forEach((card,  index) => {
      setTimeout(() => {
        card.classList.add('card-entry-animation')
      }, 1700 + 300 * index)
    });

    // handle some components that shows wide only
    if (window.innerWidth < 1280) {
      document.querySelectorAll('.wide-only').forEach((element) => {
        console.log(element)
        element.classList.add('d-none')
      });
    } else {
      document.querySelectorAll('.narrow-only').forEach((element) => {
        console.log(element)
        element.classList.add('d-none')
      });
    }
  },
  created() {
  },
  methods: {
    getBreakpoint() {
      return window.innerWidth > 1280 ? '40vh' : 'unset';
    },
    getTitleEntry() {
      return "title-entry-" + window.innerWidth > 1280 ? 'wide' : 'narrow';
    },
  }
}
</script>

<template>
  <v-row class="pic-container pa-0 ma-0">
    <v-col cols="12" class="pa-0 ma-0">
      <v-img :src="overviewPic" cover class="picture">
        <div>
          <v-container>
            <v-row class="d-flex align-center blurred radius border-solid-for-test">
              <v-col cols="12" lg="6" xl="6" class="title text-center text-yellow">
                <div>
                  <h1>中阳县</h1>
                </div>
                <v-sheet class="bg-transparent text-center text-shades-white">
                  <v-btn variant="plain" link href="http://www.sxzhongyang.gov.cn/">中阳县人民政府官网</v-btn>
                </v-sheet>
              </v-col>
              <v-col cols="12" lg="6" xl="6">
                <v-card class="ma-2 mx-auto card overflow-hidden d-flex align-center" ref="c1">
                  <div>
                    <v-card-text>中阳县位于吕梁山脉中段西麓，面积<strong>1441.4平方公里</strong>，常住人口在2021年末为<strong>136925人</strong>。中阳县气候属暖温带亚干旱区大陆性季风气候。截至2021年10月，中阳县辖<strong>5个镇、1个乡</strong>。
                    </v-card-text>
                  </div>
                </v-card>
                
                <v-card class="ma-2 mx-auto card overflow-hidden d-flex align-center">
                  <v-card-text class="d-flex align-center">
                    <div>由于地处山脉，中阳县境内有许多自然风光与人造景观。县城东5公里处有<strong>柏洼山</strong>，海拔1250米，集柏海松林、道教信仰、湖泊溶洞于一体，山中有<strong>龙泉关</strong>，至少有近千年历史，内存大量道教遗迹</div>
                  </v-card-text>
                </v-card>
                
                <v-card class="ma-2 mx-auto card overflow-hidden d-flex align-center">
                  <v-card-text class="d-flex align-center">
                    <div>中阳县作为革命老区，是<strong>山西省第一个县级苏维埃政权所在地</strong>，革命思想在中阳的传播可以追溯至新民主主义革命时期。聂荣臻等曾在中阳境内进行<strong>关上战斗</strong>大败阎锡山，抗日时期中阳县<strong>牺牲救国同盟会</strong>也发挥了重大作用。</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="d-flex align-center"><v-card-text class="text-center text-yellow-darken-1">
                <v-icon>mdi-circle-double</v-icon>
                <v-icon>mdi-circle-outline</v-icon>
                <v-icon>mdi-circle-outline</v-icon>
                <v-icon>mdi-circle-outline</v-icon>
              </v-card-text></v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>
    </v-col>

    <page2/>

    <page3/>

    <page4/>
  </v-row>
</template>

<style scoped>
.pic-container {
  background-color: white;
  position: absolute; 
  top: 0; 
  left: 0;

  height: 100vh;
  overflow-y: scroll;

  scroll-snap-type: block mandatory;
}

.pic-container::-webkit-scrollbar {
  display: none;
}

.pic-container > .v-col {
  scroll-snap-align: start;
}

.picture {
  height: 100vh;
  align-items: center;
}

.title {
  z-index: 9999;
  animation: title-entry 2s ease-in-out 0s 1 forwards;

  height: v-bind('getBreakpoint()');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes title-entry {
  0% {
    opacity: 0;
    font-size: 3em;
  }
  20% {
    font-size: 3em;
  }
  50% {
    opacity: 1;
    font-size: 3em;
  }
  to {
    font-size: 1.5em;
  }
}

.border-solid-for-test {
  border: black 3px solid;
}

.number-emphasis {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 900;
  padding-right: 3rem;
  white-space: nowrap;
}


.card {
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
  animation: h2entry 1s ease-in-out 2s 1 forwards;
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
  height: 50vh;
  overflow: hidden;
}

.pic-showcase, .pic-showcase * {
  transition: 200ms;
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
</style>