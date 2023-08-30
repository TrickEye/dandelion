<script>
import plaintext from "/src/components/content/plaintext.vue";
import pic from "/src/components/content/pic.vue";
import pics from "/src/components/content/pics.vue";
export default {
  name: 'blue',
  data() {
    return {
      title: '访谈——蓝领工人',
      contents: [
        {
          type: 'pics',
          imgSrc: [['src/assets/interview/blue-1.jpg', 'src/assets/interview/blue-2.jpg',
            'src/assets/interview/blue-3.jpg', 'src/assets/interview/blue-4.jpg']],
          placedAt: ['below'],
          content:
              ["——实践队员通过走访发现，对于同样从事体力劳动的工人，待遇却不太相似。环卫工人和保安等职业的收入相对较低，每月大约只有1000余元的收入。环卫工人是每天八个小时定点上班，而保安实行换班制，每一天半休息半天，包住不包吃。但煤矿工人和货车司机收入在当地普遍偏高。中阳钢铁的煤矿工人月收入大约有6000-7000元，货车司机每年收入约为15万元。在县城中当环卫工人和保安等职位的人通常是50岁以上的中老年群众，其子女已经成家立业，这些人的收入仅需要维持其个人的日常开销，儿女也会不时进行补贴。由于物价相对较低，他们相对较低的工资在中阳县城也可以很好地维持自己的生活。收入相对较高的人群大多30出头，是家庭中的顶梁柱，通常是家里唯一的收入来源，家庭负担重，家庭的风险承受能力也相应下降。"]
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