<script>
import pushCard from '../components/pushCard.vue'

export default {
  name: 'blogs',
  components: {
    pushCard
  },
  data() {
    return {
      pushes: [
        {
          id: 0,
          title: '实践总结',
          content: '乡村振兴，任重而道远',
          imgSrc: 'src/assets/overview/zhongyangOverview/zhongyangfromsky.jpg',
          path: '/blogs/push0'
        },
        {
          id: 1,
          title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
          content: '激昂青春！蒲公英乡野航迹实践队启航',
          imgSrc: './final_2.png',
          path: '/blogs/push1'
        },
        {
          id: 2,
          title: '筑梦中阳 | Day.1 一键开启实践之旅',
          content: '一键开启实践之旅',
          imgSrc: 'src/assets/push/2-0.jpg',
          path: '/blogs/push2'
        },
        {
          id: 3,
          title: '筑梦中阳 | Day.2 剪中阳之影，访阳坡之兴',
          content: '剪中阳之影，访阳坡之兴',
          imgSrc: 'src/assets/push/3-6.png',
          path: '/blogs/push3'
        },
        {
          id: 4,
          title: '筑梦中阳 | Day.3 探中阳发展篇章 访民生实地调研',
          content: '探中阳发展篇章 访民生实地调研',
          imgSrc: 'src/assets/push/4-6.jpg',
          path: '/blogs/push4'
        },
        {
          id: 5,
          title: '筑梦中阳 | Day.4 寻觅自然风趣 品悟红色精神',
          content: '寻觅自然风趣 品悟红色精神',
          imgSrc: 'src/assets/push/5-4.png',
          path: '/blogs/push5'
        },
      ]
    }
  }
}
</script>

<template>
  <h1>蒲公英的杂谈</h1>
  <br>

  <v-row>
    <v-col v-for="push in pushes" :key="push.id" cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <pushCard :title="push.title" :content="push.content" :imgSrc="push.imgSrc" :path="push.path"></pushCard>
    </v-col>
  </v-row>

</template>

<style scoped>
v-card-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>