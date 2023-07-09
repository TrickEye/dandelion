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
          id: 1,
          title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
          content: '激昂青春！蒲公英乡野航迹实践队启航',
          imgSrc: './final_2.png',
          path: '/blogs/push1'
        },
        {
          id: 0,
          title: '创建新的推送页面',
          content: '如何在本平台中创建新的推送页面',
          path: '/blogs/push0'
        },
        {
          id: 2,
          title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
          content: '激昂青春！蒲公英乡野航迹实践队启航',
          imgSrc: './final_2.png',
          path: '/blogs/push1'
        },
        {
          id: 3,
          title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
          content: '激昂青春！蒲公英乡野航迹实践队启航',
          imgSrc: './final_2.png',
          path: '/blogs/push1'
        },
        {
          id: 4,
          title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
          content: '激昂青春！蒲公英乡野航迹实践队启航',
          imgSrc: './final_2.png',
          path: '/blogs/push1'
        },
        {
          id: 5,
          title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
          content: '激昂青春！蒲公英乡野航迹实践队启航',
          imgSrc: './final_2.png',
          path: '/blogs/push1'
        },
        {
          id: 6,
          title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
          content: '激昂青春！蒲公英乡野航迹实践队启航',
          imgSrc: './final_2.png',
          path: '/blogs/push1'
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