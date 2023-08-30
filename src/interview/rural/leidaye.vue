<script>
import plaintext from "/src/components/content/plaintext.vue";
import pic from "/src/components/content/pic.vue";
import pics from "/src/components/content/pics.vue";
export default {
  name: 'leidaye',
  data() {
    return {
      title: '访谈——雷大爷',
      contents: [
        {
          type: 'pics',
          title: '中阳县阳坡村人，饲养有约140头羊',
          imgSrc: [['src/assets/interview/leidaye-1.jpg']],
          placedAt: ['below'],
          content:
              ["——雷大爷家是阳坡村比较殷实的家庭，种植玉米、饲养猪羊是家中的主要经济来源，生活条件较好。在坚持劳作的情况下，阳坡村村民可以获得不错的收入，但走出村子仍然存在困难。大爷大娘今年60岁，身体健康，通常五点钟起床种地、喂养牲畜。雷大爷家种了十几亩地的玉米，主要用作猪和羊的饲料，其余几亩地种植土豆、小米等作物。虽然家里的机械能节省一些劳动，但种植、收获仍然需要大量人工。雷大爷家里养有140余只羊，3头猪，还有几只鸡，这些畜禽大部分拿到市场上售卖，一少部分用于自己家食用。雷大爷有五个儿子，目前都在外打工，有远在南京的，也有近在太原的，孙子孙女在外上学，一年回家三四次。大爷大娘身体都比较健康，没有需要较大开销的疾病。<br>" +
              "——饲养猪、羊投入多、周期长、收益高，这也是雷大爷一家生活条件较好的原因之一。但这种模式在阳坡村并不常见，阳坡村的村民更倾向于一些能立即获得酬劳的工作，这种短视心理也导致了村民们没办法获得更高的收入。临时的工作不稳定，政府为了解决这个问题，曾向村民提供羊羔，但成效不显著，村民们并不看好这种生产方式，也有部分村民的家庭条件不适合大量农作，猪和羊没有足够的饲料，反而是一种负担。<br>" +
              "——虽然县城的医疗和教育条件更好，但这也意味着县城中更高的生活成本。所以，即便村中生活条件较好的家庭，也几乎没有可能进入县城生活。另外，村民的文化水平很低，且年龄普遍较大，很难找到合适的岗位，而且很多村民的年龄和身体条件也限制了他们在城里就业。县城的衣食住行是一笔很大的开销，一般的村民负担不起。他们选择留在村子里，尽管生活劳累辛苦一些，但不会给子女带来太大的负担。"]
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