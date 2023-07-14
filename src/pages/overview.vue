<script>
export default {
  name: 'overview',
  mounted() {
    const card1 = this.$refs.card1;
    const card2 = this.$refs.card2;
    const card3 = this.$refs.card3;
    const card4 = this.$refs.card4;
    
    setTimeout(() => {
      card1.classList.add('card-after')
      card1.classList.remove('card-before')
    }, 1800);

    setTimeout(() => {
      card2.classList.add('card-after')
      card2.classList.remove('card-before')
    }, 2200);

    setTimeout(() => {
      card3.classList.add('card-after')
      card3.classList.remove('card-before')
    }, 2600);

    setTimeout(() => {
      card4.classList.add('card-after')
      card4.classList.remove('card-before')
    }, 3000);
  },
}
</script>

<template>
  <h1 class="title">中阳</h1>
  <br>

  <v-row>
    <v-col cols="12">
      <!-- <img src="/src/assets/overview/zhongyangOverview/zhongyangOverview.drawio.png" class="banner"/> -->
      <v-img src="/src/assets/overview/zhongyangOverview/zhongyangOverview.drawio.png" cover class="banner">
        
      </v-img>
    </v-col>
    
    <v-col cols="12">
      <!-- <img src="/src/assets/overview/zhongyangOverview/zhongyangOverview.drawio.png" class="banner"/> -->
      <v-img src="/src/assets/overview/zhongyangOverview/zhongyangOverview.drawio.png" cover class="banner">

      </v-img>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <div ref="card1" class="card-before entry1">
        <v-card class="bg-blue-accent-1 entry1 card-after card-hover" link to="./overview/fungus">
          <v-card-title>产业</v-card-title>
        </v-card>
      </div>
    </v-col>

    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <div ref="card2" class="card-before entry2">
        <v-card class="bg-blue-accent-1 entry2 card-after card-hover">
          <v-card-title>文化特色</v-card-title>
        </v-card>
      </div>
    </v-col>

    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <div ref="card3" class="card-before entry3">
        <v-card class="bg-blue-accent-1 entry3 card-after card-hover">
          <v-card-title>自然景色</v-card-title>
        </v-card>
      </div>
    </v-col>

    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <div ref="card4" class="card-before entry4">
        <v-card class="bg-blue-accent-1 entry4 card-after card-hover">
          <v-card-title>历史</v-card-title>
        </v-card>
      </div>
    </v-col>
  </v-row>

  <div style="background-color: red; height: 100vh;">
  123321</div>
</template>

<style scoped>
.title {
  position: sticky;
  top: 0;
  z-index: 9999;
  animation: title 2s ease-in-out 0s 1 forwards;
}

.banner {
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
}

@keyframes title {
  0% {
    opacity: 0;
    font-size: 5rem;
  }
  30% {
    opacity: 1;
    font-size: 5rem
  }
  70% {
    font-size: 3.2rem
  }
  to {
    margin-left: 0;
  }
}

.card-before {
  opacity: 0;
  height: 200px;
}

.card-after {
  opacity: 1;
  height: 200px;
}

.card-hover {
  transition: 200ms;
}

.card-hover:hover {
  transform: scale(0.95);
}

.entry1 {
  animation: entry 0.8s ease-out;
  animation-delay: 1s;
}
.entry2 {
  animation: entry 0.8s ease-out;
  animation-delay: 1.4s;
}
.entry3 {
  animation: entry 0.8s ease-out;
  animation-delay: 1.8s;
}
.entry4 {
  animation: entry 0.8s ease-out;
  animation-delay: 2.2s;
}

@keyframes entry {
  0% {
    opacity: 0;
    width: 0;
    height: 0px;
  }
  20% {
    height: 100px;
  }
  50% {
    height: 160px;
  }
  80% {
    height: 190px;
  }
  100% {
    opacity: 1;
    width: 100%;
    height: 200px;
  }
}

</style>