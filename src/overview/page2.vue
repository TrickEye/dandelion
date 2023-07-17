<script setup>
import overviewPic from '../assets/overview/zhongyangOverview/zhongyangOverview.drawio.png'
import fungusPic from '../assets/overview/industry/fungus.drawio.png'
</script>

<script>
export default {
    name: 'page2',
    data() {
        return {
            selectedEntry: 1,
            p2: document.querySelector('#p2'),
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
          <v-container>
            <v-row class="d-flex align-center blurred radius">
              <v-col cols="12">
                <div class="border-solid-for-test pr-10 pt-6">
                  <h2 class="text-end" id="p2">产业</h2>
                </div>
              </v-col>

              <v-col cols="4">
                <v-container>
                  <v-row class="industry-list border-solid-for-test">
                    <v-col cols="12">
                      <div class="">
                        <v-card class="bg-blue-accent-1 mx-auto h0w0 shrink-on-hover" link to="./overview/fungus">
                          <v-card-title>中阳黑木耳</v-card-title>
                        </v-card>
                      </div>
                    </v-col>

                    <v-col cols="12">
                      <div class="">
                        <v-card class="bg-blue-accent-1 mx-auto h0w0 shrink-on-hover">
                          <v-card-title>中钢</v-card-title>
                        </v-card>
                      </div>
                    </v-col>

                    <v-col cols="12">
                      <div class="">
                        <v-card class="bg-blue-accent-1 mx-auto h0w0 shrink-on-hover">
                          <v-card-title>柏洼古井手工醋</v-card-title>
                        </v-card>
                      </div>
                    </v-col>

                    <v-col cols="12">
                      <div class="">
                        <v-card class="bg-blue-accent-1 mx-auto h0w0 shrink-on-hover">
                          <v-card-title>孵化器</v-card-title>
                        </v-card>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="8">
                <div class="border-solid-for-test pic-showcase">
                  <v-img :src="fungusPic" cover class="align-end h-100 radius">
                    <div class="pictitle font-weight-black pa-5">中阳黑木耳</div>
                    <div class="gradient position-absolute border-solid-for-test h-100 w-100"></div>
                    <div class="picdesc border-solid-for-test px-5 pb-5">介绍内容介绍内容，您猜怎么着，我这介绍有好多好多好多，一排是别想装下了哈哈哈哈哈哈哈哈哈哈哈</div>
                  </v-img>
                </div>
              </v-col>

              
            </v-row>

          </v-container>
        </div>
      </v-img>
    </v-col>
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