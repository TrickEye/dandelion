<script setup>
import overviewPic from '../assets/overview/zhongyangOverview/zhongyangOverview.drawio.png'
</script>

<script>

export default {
  name: 'overview',
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
      }, 1000 + 300 * index)
    });
  },
  created() {
  },
  methods: {
    getBreakpoint() {
      return window.innerWidth > 1280 ? '80vh' : '5em';
    }
  }
}
</script>

<template>
  <v-row class="pic-container pa-0 ma-0">
    <v-col cols="12" class="pa-0 ma-0">
      <v-img :src="overviewPic" cover class="picture">
        <div class="border-solid-for-test">
          <v-container>
            <v-row class="d-flex align-center">
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
          </v-container>
        </div>
      </v-img>
    </v-col>
    
    <v-col cols="12" class="pa-0 ma-0">
      <v-img :src="overviewPic" cover class="picture">
        <div class="border-solid-for-test">
          <v-container>
            <v-row>
              <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
                <div ref="card11" class="card-before entry1">
                  <v-card class="bg-blue-accent-1 entry1 card-after shrink-on-hover" link to="./overview/fungus">
                    <v-card-title>产业</v-card-title>
                  </v-card>
                </div>
              </v-col>

              <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
                <div ref="card2" class="card-before entry2">
                  <v-card class="bg-blue-accent-1 entry2 card-after shrink-on-hover">
                    <v-card-title>文化特色</v-card-title>
                  </v-card>
                </div>
              </v-col>

              <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
                <div ref="card3" class="card-before entry3">
                  <v-card class="bg-blue-accent-1 entry3 card-after shrink-on-hover">
                    <v-card-title>自然景色</v-card-title>
                  </v-card>
                </div>
              </v-col>

              <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
                <div ref="card4" class="card-before entry4">
                  <v-card class="bg-blue-accent-1 entry4 card-after shrink-on-hover">
                    <v-card-title>历史</v-card-title>
                  </v-card>
                </div>
              </v-col>
            </v-row>

          </v-container>
        </div>
      </v-img>
    </v-col>
  </v-row>
</template>

<style scoped>
.pic-container {
  background-color: white;
  position: absolute; 
  top: 0; 
  left: 0;
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
    font-size: 5rem;
  }
  20% {
    opacity: 1;
    font-size: 5rem;
  }
  50% {
    font-size: 5rem;
  }
  to {
    font-size: 3.2rem;
  }
}

.border-solid-for-test {
  /* border: black 3px solid; */
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

</style>