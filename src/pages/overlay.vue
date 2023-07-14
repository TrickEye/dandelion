<script>
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
            setTimeout(() => {
                dandelion.classList.remove('moveDandelionCls')
                dandelion.style.transform = 'translate(calc(-50% - 40vw), calc(-50% + 40vh))'
            }, 4000);

            // 上述动画完成后一段时间页面重定向
            

            var initialSpecCount = 5;
            var totSpecCount = 0;
            const dandelionSrc = dandelion.getAttribute('src')

            // 为overlay添加蒲公英雪花点
            const intervalId = setInterval(() => {
                if (totSpecCount < 2000) {
                    for (var i = 0; i < initialSpecCount; i++) {
                        const img1 = document.createElement('img')
                        img1.setAttribute('src', dandelionSrc)
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

            setTimeout(() => {
                    window.location.assign('/#/overview/')
                    clearInterval(intervalId)
            }, 5000)
        }
    }
}
</script>

<template>
    <div class="overlay overflow-hidden" ref="overlay">
        <img class="abs-middle" id="buaa" src="../assets/beijingWithBuaaLogo.drawio.png" alt="">
        <img class="abs-middle" id="dandelion" ref="dandelion" src="../assets/dandelion.drawio.png" alt="">
        <img class="abs-middle" id="zhongyang" src="../assets/zhongyang.drawio.png" alt="">
        <v-btn class="abs-middle" @click="moveDandelion">button</v-btn>
    </div>

</template>

<style scoped>


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
  z-index: 9999; /* 确保在页面上方 */
}

#buaa {
    transform: translate(calc(-50% + 40vw), calc(-50% - 40vh));
    width: 100px;
    height: 100px;
    z-index: 8000;
}

#dandelion {
    transform: translate(calc(-50% + 40vw), calc(-50% - 40vh));
    width: 50px;
    height: 50px;
    z-index: 9000;
}

#zhongyang {
    transform: translate(calc(-50% - 40vw), calc(-50% + 40vh));
    width: 200px;
    height: 200px;
    z-index: 8000;
}

.moveDandelionCls {
    animation: moveDandelionAnim 4s 1 forwards;
}

@keyframes moveDandelionAnim {
  from {
    transform: translate(calc(-50% + 40vw), calc(-50% - 40vh))
  }
  to {
    transform: translate(calc(-50% - 40vw), calc(-50% + 40vh))
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
    margin-left: 0px;
    margin-top: 0px;  
  }
}
</style>