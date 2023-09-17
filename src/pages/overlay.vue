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
      // const dandelion = this.$refs.dandelion;

      // 设置CSS动画
      // dandelion.classList.add('moveDandelionCls')
      document.querySelector('.dandelion-x').classList.add('selected')
      document.querySelector('.dandelion-y').classList.add('selected')

      // 为overlay添加蒲公英雪花点
      var initialSpecCount = 5;
      var totSpecCount = 0;
      // const dandelionSrc = dandelion.getAttribute('src')

      const intervalId = setInterval(() => {
        if (totSpecCount < 1000) {
          for (var i = 0; i < initialSpecCount; i++) {
            const img1 = document.createElement('img')
            img1.setAttribute('src', dandelionPic)
            img1.classList.add('abs-middle')
            img1.classList.add('moveDandelionSpec')

            const size = Math.floor(Math.random() * 121) + 40;
            img1.setAttribute('width', `${size}`);
            img1.setAttribute('height', `${size}`);
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
          if (initialSpecCount > 40) {
            initialSpecCount = 25
          }
        } else {
          clearInterval(intervalId)
        }
      }, 200)

      // 上述动画完成后一段时间页面重定向
      setTimeout(() => {
        // window.location.assign('overview/')
        clearInterval(intervalId)
        this.$router.push('overview/')
      }, 5000)
    }
  }
}
</script>

<template>
  <div class="overlay overflow-hidden align-center h-100 d-flex" ref="overlay">
    <img class="abs-middle" id="buaa" :src="beijingPic" alt="">
    <span class="abs-middle dandelion-x">
          <v-img class="dandelion-y" :src="teamlogoPic"></v-img>
        </span>
    <!--        <img class="abs-middle bg-transparent" id="dandelion" ref="dandelion" :src="teamlogoPic" alt="">-->
    <img class="abs-middle" id="zhongyang" :src="zhongYangPic" @click="moveDandelion" alt="">
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
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
  z-index: 10; /* 确保在页面上方，即保持此值为最大值 */
}

#buaa {
  position: absolute;
  transform: translate(calc(-50% + 30vw), calc(-50% - 20vh));
  width: 400px;
  height: 400px;
  z-index: 0;
}

#dandelion-box {
  position: absolute;
  transform: translate(calc(-50% + 30vw), calc(-50% - 20vh));
  width: 100px;
  height: 100px;
  z-index: 2;
//background: #0d47a1;
}

#dandelion {
  position: absolute;
  transform: translate(calc(-50% + 30vw), calc(-50% - 20vh));
  backdrop-filter: blur(2px);
  width: 150px;
  height: 150px;
  z-index: 3;
//filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
}

#zhongyang {
  position: absolute;
  transform: translate(calc(-50% - 25vw), calc(-50% + 20vh));
  width: 600px;
  height: 600px;
  z-index: 0;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.9));
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

.dandelion-x {
  position: absolute;
  transform: translateX(calc(-50% + 30vw)) translateY(-50%);
  z-index: 5;
  transition: transform 3s linear;
}

.dandelion-y {
  width: 150px;
  height: 150px;
  transform: translateY(-20vh);
  transition: transform 3s cubic-bezier(1,0,1,1);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
  backdrop-filter: blur(2px);
}

.dandelion-x.selected {
  transform: translateX(calc(-50% - 25vw)) translateY(-50%);
}

.dandelion-y.selected {
  transform: translateY(20vh);
}

.moveDandelionSpec {
  animation: DandelionSpecEntrance 3s cubic-bezier(.69,.2,.84,.51) 1 forwards;
}

@keyframes DandelionSpecEntrance {
  from {
    opacity: 20%;
    margin-left: 50vw;
    margin-top: 30vh;
  }
  20% {
    opacity: 100%;
  }
  to {
    opacity: 100%;
    margin-left: -100vw;
    margin-top: -60vh;
  }
}
</style>