<script>
import plaintext from "../components/content/plaintext.vue";
import pic from "../components/content/pic.vue";
import pics from "../components/content/pics.vue";
export default {
  name: 'push2',
  data() {
    return {
      title: '筑梦中阳 | Day.1 一键开启实践之旅',
      wechatLink: 'https://mp.weixin.qq.com/s/F9zdgAxE3Hxj6EFCGpvkNA',
      contents: [
        {
          type: 'pics',
          title: '7月2日——到达中阳站',
          imgSrc: [['src/assets/push/2-1.jpg'], ['src/assets/push/2-2.jpg', 'src/assets/push/2-3.jpg']],
          placedAt: ['top', 'top'],
          content:
              ["七月二日<strong>蒲公英实践队大部队</strong>从北京航空航天大学出发，直奔北京丰台站，乘坐高铁先到达山西省太原南站，再乘坐火车至吕梁站，" +
              "沿途通过车窗可以看到山西省境内气势恢宏的广阔山川。在这途中不断有从其他地方出发的实践队员赶来与大部队汇合，" +
              "最终11名实践队员与指导教师乘坐中巴车抵达中阳宾馆。<br>" +
              "晚餐后，所有团队成员与指导老师商讨接下来的具体任务安排，在综合考虑了多方面的因素后，最终决定实践内容主要分为<strong>宏观与微观</strong>，" +
              "宏观为参观访问当地有名的企业、文化等；微观为了解中阳县人民的生活状况以及脱贫攻坚带来的改观。以此展现我们<strong>大学生眼中对中阳县的所见所闻</strong>。",
                "会议结束后，我们在附近的广场散步，有不少人尤其是孩童在广场上踢毽子、骑自行车、坐花车、钓鱼、打气球，" +
                "广场内还有相当多的小吃摊，随后我们在最近的超市买了大量的饮用水以作储备，一天的行程结束。" ]
        },
        {
          type: 'pics',
          title: '7月3日——出发！实践队启航',
          imgSrc: [['src/assets/push/2-4.jpg'], ['src/assets/push/2-5.jpg', 'src/assets/push/2-6.jpg'],
            ['src/assets/push/2-7.jpg'], ['src/assets/push/2-8.jpg'], ['src/assets/push/2-9.jpg'],
            ['src/assets/push/2-10.jpg', 'src/assets/push/2-11.jpg'], ['src/assets/push/2-12.jpg', 'src/assets/push/2-13.jpg'],
            ['src/assets/push/2-14.jpg']],
          placedAt: ['below', 'below', 'below', 'below', 'below', 'below', 'below', 'below'],
          content:
              ["七月三日一早，我们乘坐中巴向<strong>心言木耳产业基地</strong>进发。出发前，我们在宾馆一楼合影留念，以饱满的热情，开启第一天的探索和实践。" +
              "在途中，我们经过了较长距离的山路，看到大量呈九十度的悬崖峭壁以及满山的绿树青草。",
              "我们首先参观了基地的<strong>生产车间</strong>，该基地于2021年1月开始建设厂房，并于2022年11月27日开始投产，" +
              "当前主营黑木耳，除此之外，还在研发适合本地生长的鹿角灵芝、猴头菇、羊肚菌等。",
              "厂房内含有拌料车间负责将金刚木屑与各种营养成分混合作为菌类的生长养分。装袋车间将养料封装为棒状袋子。<br>" +
              "灭菌车间先使用高温灭菌配合冷却车间为菌类提供干净舒适的生长环境。<br>" +
              "自动化注菌室将液体发酵的菌种注入菌棒中，此后49天即可进行种植，种植后15天即可长出木耳菌菇，每一菌棒一年可实现七或八产，每产净重可达1.2-1.7两。<br>" +
              "成套的自动化设备使得整体流程实现了<strong>百分之八十自动化</strong>，大大提高了生产效率，降低了生产成本；回收车间将废弃菌棒加工为新菌棒的养料实现回收利用。",
              "针对菌类种植过程中喷淋造成的水资源浪费，心言基地采用“<strong>鱼菜共生</strong>”的水资源循环利用新方案，将淋灌木耳后的废水经过简单过滤后用于鱼类养殖，" +
              "再将鱼类的排泄污水用于蔬菜种植，实现了“<strong>一水多用</strong>”，有效提升了水资源的利用率，节约了水资源。",
              "技术方面，邀请了<strong>李玉院士下属团队</strong>进行菌种相关研发，并为其建造了专门的工作室。<br>" +
              "产业链方面，该基地目前有效实现了菌菇产业的菌种培育、种植、简单加工，建设了第一批<strong>网红直播间</strong>，" +
              "并针对<strong>木耳面膜、菌火锅、木耳饮料</strong>等下游产业进行了深度调研。<br>" +
              "生产实践方面，公司园区拥有千亩大棚用于产业种植，大棚内采用智能设备来精确获取温度、湿度、二氧化碳等生长因素，" +
              "实现精准高效种植，同时园区大棚可对农户开方租用，用于农户自己进行菌类种植，以进一步<strong>巩固扶贫成果，实现民众共同富裕</strong>！",
              "下午我们来到了当地老牌企业“<strong>中钢</strong>”进行参观，首先参观了企业园区的整体沙盘，广阔的园区内煤矿、发电、钢铁等生产和生活建筑设施一应俱全，展现了其深厚的产业基础与精细化管理风格。<br>" +
              "之后我们参观了<strong>焊丝的生产车间</strong>，大量的自动化设备，打磨机，拉丝机，放线架，水洗机，电镀机等应有尽有，几乎全自动化的工业生产在特高生产效率的同时，" +
              "能够从单一的苦力工作中解放大量的生产力，转移到更具有技术性的岗位，进一步提升当地民众的劳动水平。",
              "接下来是<strong>中钢-北航转型升级技术研发中心</strong>，在这里我们参观了多个钢材、涂料等研发实验室，见识到了多种多样的化学性质检测设备，" +
              "接触了不少钢铁产业相关的研发流程与研发原理，让我第一次认识到，传统的重工业也可以实现高度的自动化，并与高级实验室相融合，" +
              "使得“传统”产业经过产业升级摇身一变成为“高大上”的产业。",
              "最后，我们参观了<strong>柏洼古井</strong>公司的醋厂，公司董事长带领我们亲眼见证了传统醋的发酵全过程。我们还有幸品尝了该公司生产的蜂蜜醋与五度的普通醋，其味道回味无穷。<br>" +
              "晚上，我们讨论了后续的采访工作内容，初步准备了可行的采访问题，希望后续工作一切顺利！"]
        },
        {
          type: 'plaintext',
          title: "今日感想(董佳荣)",
          content:
              "今天，我们主要参观了<strong>心言木耳产业基地，中钢产业研发中心，百洼古井醋厂</strong>。<br>" +
              "心言木耳基地作为中阳这个曾经的贫困县产业转型升级的代表，其当下已经实现的菌种培育以及菌菇种植，再加之正在着手实现的下游深加工，" +
              "让我看到了其未来“<strong>三产合一</strong>”带来的广阔前景。虽然其生产能力不容置疑，但该生产基地目前成立还不到一年，" +
              "同时当前的盈利是在拥有产业补助的前提下，如何在脱离产业补助之后继续实现较为明显的乡村振兴作用，仍有待时间的考验。<br>" +
              "中钢作为一个传统意义上的重工业企业，以生产钢铁为主，但其产业研发中心的众多实验室与高精尖化学器械，让我对“重工业”的认识焕然一新，" +
              "<strong>传统产业并不一定就那么“传统”，也可以和自动化、科学相结合，成为饱含科技的“新产业”</strong>。<br>" +
              "百洼古井之行让我近距离认识到了醋发酵过程中的每一步以及与之对应的浓郁气息，再加之董事长慷慨的让我们品尝产品，让我体验到了传统醋业中所蕴含的浓郁酸香。"
        }
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

      <v-card class="pa-3 ma-3">
        <v-card-title>微信原文链接<a class="float-end" :href="wechatLink" target="_blank"><v-btn flat>阅读</v-btn></a>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>