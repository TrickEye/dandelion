<script>
import plaintext from "/src/components/content/plaintext.vue";
import pic from "/src/components/content/pic.vue";
import pics from "/src/components/content/pics.vue";
export default {
  name: 'lidaniang',
  data() {
    return {
      title: '访谈——李大娘',
      contents: [
        {
          type: 'pics',
          title: '中阳县阳坡村人',
          imgSrc: [['src/assets/interview/lidaniang-1.png']],
          placedAt: ['below'],
          content:
              ["——李大娘今年60岁，老伴63岁，还有婆母健在，三人一起在村生活。李大娘的丈夫在村里的养羊扶贫产业基地工作，每个月收入3500元。夫妻俩共同养育了两女一男三个孩子，孩子们都在中阳县城组建了自己的家庭。其中一个女儿靠卖煤为生，儿子则是一名大货车司机。儿子有两个男孩，一个2岁，一个12岁。孩子们平时虽然忙于工作，但仍会时常回家，给两位老人带来一些生活用品。夫妻俩还在种植玉米、豆角、西红柿等一些农作物，主要供自家食用，能够满足一年里大部分时间对蔬菜的需求，村里采购小卖部可以肉、蛋、面粉之类的生活必需品，子女回家的时候也会捎带一些。和大多数家庭一样，孙辈们平常不回村，逢年过节时回来。<br>" +
              "——老年人身体状况通常都存在一些问题，李大娘一家也不例外。他们患有多种慢性疾病，每年的药费是一笔巨额开销，一个人每年大概花五六千元。这些费用大部分需要自己承担，无法报销。平时的常用药通常都是孩子们回来的时候从县城里捎带的，如果遇到突发情况，可能需要到县里买药或者到村里其他人家借用一些应急药物。虽然现在阳坡村家庭医生制度已经完成落地，各类医疗保障也日益完善，但由于阳坡村海拔较高，交通不够便利，农村老年人的医疗和其他生活保障仍然任重道远。"]
        },
      ]
    }
  },
  components: {
    plaintext,
    pics,
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

        <pics v-if="content.type === 'pics'"
              :content="content.content" :title="content.title" :imgSrc="content.imgSrc" :placedAt="content.placedAt"
        ></pics>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>