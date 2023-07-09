<script>
import plaintext from "../../components/content/plaintext.vue";
import pic from "../../components/content/pic.vue";
export default {
  name: 'push1',
  data() {
    return {
      title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
      wechatLink: 'https://mp.weixin.qq.com/s/pOjhB6nxqayYnQAw3oGeQg',
      contents: [
        {
          type: 'plaintext',
          title: null,
          content:
              "为深入学习贯彻<strong>习近平新时代中国特色社会主义思想</strong>，" +
              "全面贯彻落实<strong>党的二十大精神</strong>，" +
              "<strong>北航计算机学院蒲公英乡野航迹实践队</strong>将于暑假组织" +
              "前往<strong>山西省吕梁市中阳县</strong>，主要针对文化、教育等方面展开实地调研，" +
              "利用知识对当地产业赋能。"
        },
        {
          type: 'plaintext',
          title: '文字块标题',
          content:
              "这里是文字块的测试内容。支持基本的html语法，比如<strong>加粗</strong>。<br>" +
              "在推送对应的vue组件的data中，使用<code>type=plaintext</code>来指定这是一个文字块。<br>" +
              "需要指出title，content两个属性，title可以为空。"
        },
        {
          type: 'pic',
          title: '实践队队徽',
          imgSrc: './final_2.png',
          placedAt: 'top',
          content:
              "蒲公英<br>" +
              "队名中的“蒲公英”寓意着希望实践队员像蒲公英一样，在风中扎根，生生不息，遍布全国各地（走遍天下300市）。<br>" +
              "“乡野”代表着广袤的农村大地和丰富多彩的乡村文化，也含有乡村振兴的意味。<br>" +
              "“航迹”则代表着队员们在行走的过程中所留下的足迹和记录，表示实践活动，也与北航本身相结合。"
        }
      ]
    }
  },
  components: {
    plaintext,
    pic
  },
}
</script>

<template>
<v-row>
  <v-col cols="12" xl="6" lg="8" md="10" sm="12" xs="12" class="ma-auto">
    <h1>{{title}}</h1>
    <br>

    <div v-for="content in contents">
      <plaintext v-if="content.type === 'plaintext'"
        :content="content.content" :title="content.title"
      ></plaintext>

      <pic v-if="content.type === 'pic'"
        :content="content.content" :title="content.title" :imgSrc="content.imgSrc" :placedAt="content.placedAt"
      ></pic>
    </div>

    <v-card class="pa-3 ma-3">
      <v-card-title>微信原文链接<a class="float-end" :href="wechatLink" target="_blank"><v-btn flat>阅读</v-btn></a>
      </v-card-title>
    </v-card>
  </v-col>
</v-row>
</template>

<style scoped>

</style>