<script>
import plaintext from "../components/content/plaintext.vue";
import pic from "../components/content/pic.vue";
import pics from "../components/content/pics.vue";
export default {
  name: 'push0',
  data() {
    return {
      title: '创建新的推送页面',
      wechatLink: '',
      contents: [
        {
          type: 'plaintext',
          title: null,
          content:
              "本文旨在给出一个模板来介绍如何在本项目中创建新的推送页面。"
        },
        {
          type: 'plaintext',
          title: 'Step 1.',
          content:
              "在 src\\blogs\\ 中创建一个新的 .vue 文件，例如 push2.vue。</br>" +
              "新文件的内容可参考此文件（<code>/src/blogs/push0.vue</code>），" +
              "不过需要更改<code>export default -> name</code>属性。"
        },
        {
          type: 'plaintext',
          title: 'Step 2.',
          content:
              "关注<code>data()</code>中的title，wechatLink, contents等属性，他们决定了页面的内容。<br><br>" +
              "title是全文标题，会被转换成h1标签。<br>" +
              "wechatLink是本文对应的微信链接（如果有的话），将会转换成文章底部的一个小栏。<br>" +
              "contents是文章的正文内容，也就是这个块的内容。"
        },
        {
          type: 'plaintext',
          title: 'Step 3. Contents',
          content:
              "Contents属性是一些元素构成的数组。每个元素具有一些属性，会被翻译为一个card。<br><br>" +
              "每个content元素需要指明type属性，目前支持的类型：plaintext和pic。<br>" +
              "plaintext是用于显示纯文本的，可以提供的属性包括title(可选), content(字符串，支持html语法)<br><br>" +
              "pic显示一张图片及其可能有的描述，可以提供的属性包括title(可选), content(可选，字符串，支持html语法), imgSrc(图片链接), placedAt(图片放置位置，top或below)<br>" +
              "要引用的img需要放置在public文件夹内，并用imgSrc指明路径。例如下面这个块：<br><br>" +
              "pics块可以显示多个照片，需要注意，pics的元素均为数组形式，imgSrc为包含多个url的数组，且要保证imSrc、placeAt、content长度相同。"
        },
        {
          type: 'pic',
          title: 'Pic template',
          imgSrc: './final_2.png',
          placedAt: 'top',
          content: ''
        },
        {
          type: 'pics',
          title: 'Pics template',
          imgSrc: [['src/assets/final_2.png'], ['src/assets/final_2.png']],
          content: ['test1', 'test2'],
          placedAt: ['top', 'below']
        },
        {
          type: 'plaintext',
          title: 'Step 4.',
          content:
              "写好这个页面之后，需要做的事情包括：在希望进入这个页面的位置准备一个入口（参考blogs.vue），在main.js引入这个页面的路由（参考main.js）<br>" +
              "使用npm run dev运行项目，并查看项目。<br><br>" +
              "声明：现在的效果肯定是很丑的，因为目前只是准备内容。美化工作会很快展开，别急。"
        }
      ]
    }
  },
  components: {
    plaintext,
    pic,
    pics
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

        <pics v-if="content.type === 'pics'"
             :content="content.content" :title="content.title" :imgSrc="content.imgSrc" :placedAt="content.placedAt"
        ></pics>
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