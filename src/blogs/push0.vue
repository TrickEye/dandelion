<script>
import plaintext from "../components/content/plaintext.vue";
import pic from "../components/content/pic.vue";
import pics from "../components/content/pics.vue";
export default {
  name: 'push0',
  data() {
    return {
      title: '结语',
      contents: [
        {
          type: 'plaintext',
          title: '乡村振兴，任重而道远',
          content:
              "——在这次社会实践活动中，我们以乡村振兴调研为主题，调研了山西省中阳县文化、教育、产业等方面，同时深入乡间，访谈了不同年龄、不同职业背景和不同家庭背景的当地居民，探寻他们的生活变化和乡村振兴成果。<br>" +
              "——我们看到了乡村振兴带来的诸多积极变化。首先，基础设施建设大幅提升了县城与乡村的交通、通信和生活条件。在道路条件优化后，中阳县发挥当地资源优势，将煤炭、钢铁等材料运往外地进行出售。这些资源企业是当地的利税大户。其次，农业现代化取得进展，农民们普遍采用现代农牧业技术和管理方法，提高了农产品产量和质量，打造心言木耳、柏籽羊等当地特色农产品品牌，配套精加工生产链，有助于实现农业的可持续发展。再者，神疙瘩村兴办摩托车赛等例子也初现乡村旅游的曙光。乡村旅游助力乡村振兴，可以为当地居民创造额外的收入和就业机会，同时也改善了乡村的自然与生活。<br>" +
              "——然而，我们也看到乡村振兴面临一些挑战。教育和医疗资源的不均衡仍然存在，阳坡村居民目前还无法享受到优质的教育和医疗服务。同时，年轻人大规模外出务工也导致乡村人口老龄化、乡村空心化等问题日益突出。解决这些问题需要政府和社会各界共同努力，需要加大对乡村教育、医疗和人才引进的支持力度。<br>" +
              "——总的来说，乡村振兴是一个复杂而长期的过程，需要全社会的参与和支持。通过这次实践调研，我们更深入地了解了乡村振兴的现状和成果，并认识到其中的困难和问题。希望我们的报告有助于引起更多人关注乡村，促进乡村振兴工作的持续推进，为乡村居民创造更好的生活条件和发展机会。<br>" +
              "——同时，我们也提出了如下建议。首先，加强乡村基础设施建设，提升交通、水电和网络等基础设施的覆盖和质量，让村民们享受更便利的交通出行服务和更优质的电信服务。其次，加大对农业科技的支持，提高农业生产效率和产品质量，打造特色农产品品牌。此外，应当加强教育和医疗资源的配置，确保乡村居民能够公平享受基本公共服务，让百姓摆脱贫穷思维模式，发挥主动性，从根本上实现乡村振兴。最后，积极推动乡村产业结构调整和创新创业，优化中阳的经济结构，实现从资源型经济为主导到科技型经济为主导的转变，缩小中阳钢铁员工与其他员工的收入差距，为年轻人提供更多就业和发展机会，避免人口大规模外出务工导致的问题。<br>" +
              "——通过这次社会实践活动，我们在理论学习之外亲身感受到了乡村振兴的动力和潜力。希望我们的报告能够对乡村振兴工作的推进和相关政策的制定有所启发，为实现全面建设社会主义现代化国家的目标贡献一份力量。"
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
    </v-col>
  </v-row>
</template>

<style scoped>

</style>