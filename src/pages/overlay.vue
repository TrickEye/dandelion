<script setup>
import beijingPic from '../assets/temp/beijing.png'
import backgroundPic from '../assets/temp/bg.png'
import dandelionPic from '../assets/temp/dandelion.png'
import zhongYangPic from '../assets/temp/zhongyang.png'
import teamlogoPic from '../assets/temp/teamlogo.png'
</script>

<script>
import beijingPic from '../assets/temp/beijing.png'
import backgroundPic from '../assets/temp/bg.png'
import dandelionPic from '../assets/temp/dandelion.png'
import zhongYangPic from '../assets/temp/zhongyang.png'
import teamlogoPic from '../assets/temp/teamlogo.png'

export default {
    name: 'overlay',
    methods: {
        normalRand(mean, variance) {
            let u1 = 0, u2 = 0;
            while (u1 === 0) u1 = Math.random(); 
            while (u2 === 0) u2 = Math.random(); 
            const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
            return z0 * Math.sqrt(variance) + mean;
        },
        moveDandelion() {
            const dandelion = this.$refs.dandelion;

            // 设置CSS动画
            dandelion.classList.add('moveDandelionCls')
            
            // 在动画完成后将dandelion移动到zhongyang的位置
            // setTimeout(() => {
            //     dandelion.classList.remove('moveDandelionCls')
            //     dandelion.style.transform = 'translate(calc(-50% - 40vw), calc(-50% + 40vh))'
            // }, 4000);

            // 为overlay添加蒲公英雪花点
            var initialSpecCount = 5;
            var totSpecCount = 0;
            // const dandelionSrc = dandelion.getAttribute('src')

            const intervalId = setInterval(() => {
                if (totSpecCount < 2000) {
                    for (var i = 0; i < initialSpecCount; i++) {
                        const img1 = document.createElement('img')
                        img1.setAttribute('src', dandelionPic)
                        img1.classList.add('abs-middle')
                        img1.classList.add('moveDandelionSpec')

                        const size = Math.floor(Math.random() * 81) + 20;
                        img1.setAttribute('width', `${size}px`);
                        img1.setAttribute('height', `${size}px`);
                        console.log(`'height', ${size}px`)
                        
                        const base = Math.random()
                        const basex = Math.floor(base * 81) - 40
                        const basey = Math.floor(base * 101) - 50

                        const offsetx = Math.floor(this.normalRand(0, 0.2) * 81)
                        const offsety = 0
                        
                        this.$refs.overlay.appendChild(img1)
                        img1.style.transform = `translate(calc(-50% - ${basex}vw + ${offsetx}vw), calc(-50% + ${basey}vh + ${offsety}vh))`
                        console.log(`translate(calc(-50% - ${basex}vw + 80vw)), calc(-50% + ${basey}vh - 100vh))`)
                    }

                    totSpecCount += initialSpecCount;
                    initialSpecCount += 5;
                    if (initialSpecCount > 100) {
                        initialSpecCount = 50
                    }
                } else {
                    clearInterval(intervalId)
                }
            }, 200)

            // 上述动画完成后一段时间页面重定向
            setTimeout(() => {
                    window.location.assign('/#/overview/')
                    clearInterval(intervalId)
            }, 5000)
        }
    }
}
</script>

<template>
    <div class="overlay overflow-hidden align-center h-100 d-flex" ref="overlay">
        <img class="abs-middle" id="buaa" :src="beijingPic" alt="">
        <img class="abs-middle bg-transparent" id="dandelion" ref="dandelion" :src="teamlogoPic" alt="">\
        <img class="abs-middle" id="zhongyang" :src="zhongYangPic" @click="moveDandelion" alt="">
<!--        <v-btn class="abs-middle" @click="moveDandelion">button</v-btn>-->
        <v-container class="d-flex align-center">
          <v-row> <v-col class="blurred radius text-center tip" cols="12" md="8" offset-md="2" lg="6" offset-lg="3" xl="6" offset-xl="3" xxl="6" offset-xxl="3">
                蒲公英要出发了，请选择一个目的地
          </v-col> </v-row>
        </v-container>
    </div>

</template>

<style scoped>


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: v-bind('"url(" + backgroundPic + ")"');
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
  z-index: 0; /* 确保在页面上方 */
}

#buaa {
    transform: translate(calc(-50% + 30vw), calc(-50% - 20vh));
    width: 400px;
    height: 400px;
    z-index: 8000;
}

#dandelion-box {
    transform: translate(calc(-50% + 30vw), calc(-50% - 20vh));
    width: 100px;
    height: 100px;
    z-index: 8999;
    //background: #0d47a1;
}

#dandelion {
    transform: translate(calc(-50% + 30vw), calc(-50% - 20vh));
    backdrop-filter: blur(2px);
    width: 150px;
    height: 150px;
    z-index: 9000;
}

#zhongyang {
    transform: translate(calc(-50% - 25vw), calc(-50% + 20vh));
    width: 600px;
    height: 600px;
    z-index: 8000;
    transition-duration: 200ms;
}

#zhongyang:hover {
    cursor: pointer;
    transform: translate(calc(-50% - 25vw), calc(-50% + 20vh)) scale(1.1);
}

.moveDandelionCls {
    animation: moveDandelionAnim 4s 1 forwards;
}

@keyframes moveDandelionAnim {
  from {
    transform: translate(calc(-50% + 30vw), calc(-50% - 20vh))
  }
  to {
    transform: translate(calc(-50% - 25vw), calc(-50% + 20vh))
  }
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

.tip {
  opacity: 0;
  width: 0;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 500;
  animation: tip-entrance 1s cubic-bezier(0,0,0,1) 1 2s forwards;
}

@keyframes tip-entrance {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


</style>

<style>
.abs-middle {
  position: absolute;
  top: 50%;
  left: 50%;  
}

.moveDandelionSpec {
    animation: DandelionSpecEntrance 1s cubic-bezier(0,0,0,1) 1 forwards;
}

@keyframes DandelionSpecEntrance {
  from {
    opacity: 20%;
    margin-left: 50vw;
    margin-top: 30vh;
  }
  to {
    opacity: 100%;
    margin-left: 0;
    margin-top: 0;
  }
}
</style>