<script setup>
import overviewPic from '../assets/overview/zhongyangOverview/zhongyangOverview.drawio.png'
import fungusPic from '../assets/overview/industry/fungus.drawio.png'
</script>

<script>
import page2 from '../overview/page2.vue'

export default {
  name: 'overview',
  components: {
    page2
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
        <div class="border-solid-for-test">
          <v-container>
            <v-row class="d-flex align-center blurred radius">
              <v-col cols="12" lg="6" xl="6" class="border-solid-for-test">
                <div class="title border-solid-for-test">
                  <h1>中阳</h1>
                </div>
              </v-col>
              <v-col cols="12" lg="6" xl="6" class="border-solid-for-test">                
                <v-card class="ma-2 mx-auto card overflow-hidden d-flex align-center" ref="c1">
                  <div>
                    <v-card-text>中阳位于山西省吕梁市南部。然后有一些说明文字，一些说明文字，一些说明文字，一些说明文字，一些说明文字，一些说明文字，一些说明文字，一些说明文字，一些说明文字。</v-card-text>
                  </div>
                </v-card>
                
                <v-card class="ma-2 mx-auto card overflow-hidden d-flex align-center">
                  <v-card-text class="d-flex align-center border-solid-for-test">
                    <div class="border-solid-for-test number-emphasis">1441.4平方公里</div>
                    <div>截至2022年行政区域面积1441.4平方公里，辖5镇1乡89个行政村，很多字很多字很多字很多字很多字很多字很多字很多字很多字</div>
                  </v-card-text>
                </v-card>
                
                <v-card class="ma-2 mx-auto card overflow-hidden d-flex align-center">
                  <v-card-text class="d-flex align-center border-solid-for-test">
                    <div class="border-solid-for-test number-emphasis">从 2023年7月2日<br/>到 2023年7月7日</div>
                    <div>蒲公英实践队一行人来到中阳县开展社会实践</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="border-solid-for-test blurred radius mt-5 d-flex justify-center">
                <v-sheet class="bg-transparent d-flex justify-space-between" width="90%">
                  <v-btn variant="plain" link href="http://www.sxzhongyang.gov.cn/">中阳县人民政府</v-btn>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>
    </v-col>
    
    <page2/>
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

  height: v-bind(getBreakpoint());
  display: flex;
  align-items: center;
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

/* .border-solid-for-test {
  border: black 3px solid;
} */

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