<script>
import plaintext from "../components/content/plaintext.vue";
import pic from "../components/content/pic.vue";
import pics from "../components/content/pics.vue";
export default {
  name: 'push4',
  data() {
    return {
      title: '筑梦中阳 | Day.3 探中阳发展篇章 访民生实地调研',
      wechatLink: 'https://mp.weixin.qq.com/s/R5znoLIcutuzwHEnlvwo7Q',
      contents: [
        {
          type: 'pics',
          title: '7月5日——艳阳高照',
          imgSrc: [['src/assets/push/4-1.jpg'], ['src/assets/push/4-2.jpg'],
            ['src/assets/push/4-3.jpg'], ['src/assets/push/4-4.jpg'], ['src/assets/push/4-5.jpg']],
          placedAt: ['below', 'below', 'below', 'below', 'below'],
          content:
              ["<strong>中阳县扶贫办</strong><br>" +
                "七月五日一早，实践队队员们前往<strong>中阳县扶贫办</strong>，与中阳县乡村振兴局副局长杜局长就昨日调研成果与扶贫政策等相关内容进行座谈。",
                "杜局长首先介绍了中阳县的基本情况：中阳县<strong>常住人口13.85万，共有脱贫村35个，脱贫人口7552户19400人</strong>，" +
                "截止今年5月底，全县脱贫人口人均收入达到10824.5元，收入下降人数占比由35.15%下降到0.8%。",
                "接下来，杜局长结合多个方面情况将中阳县扶贫政策娓娓道来：<strong>教育保障方面</strong>，保障脱贫家庭不失学辍学，对残疾儿童送教上门；" +
                "<strong>医疗保障方面</strong>，提高乡村医生待遇，做到脱贫人口应保尽保；<strong>住房保障方面</strong>，集中排查，整改房屋，设立多个基础设施完善的集中安置点辅助异地移民搬迁；" +
                "<strong>农村养老方面</strong>，设立孝心基金，建设养老服务设施；<strong>产业方面</strong>，大力发展木耳、核桃和生猪产业，助力脱贫户增收；" +
                "<strong>就业方面</strong>，开展“千人就业”专项政策，推动技能提升培训，发放稳岗补贴与交通补贴；<strong>金融方面</strong>，发放小额信贷，设立特色“木耳贷”，实现农业保险全覆盖；" +
                "<strong>精神文明方面</strong>，评选星级文明户、新乡贤等，改善乡村社会风气。",
                "最后，杜局长与实践队成员们进行了深入交流。队员们提出了<strong>医疗费用、洪涝灾害补贴和特色农产品收购计划</strong>等方面的问题，" +
                "杜局长都一一进行了解答。比如对于部分村民反映医疗费用高的情况，杜局长表示正常人群住院大部分费用医保可报销，" +
                "对于特殊的慢性病人群可以申报慢性病证，有特殊补贴。而对于洪涝灾害造成损失的相关情况，杜局长表示个人房屋受损会有维修与重建，对于企业也会有适当奖补。",
                "相较于昨日从村民口中获知的政策，杜局长介绍的内容更为详细、全面、系统，实践队员昨日调研中发现的问题也得到了正式解答，对于脱贫攻坚的情况有了<strong>更透彻的理解</strong>。"]
        },
        {
          type: 'pics',
          title: '没有调查就没有发言权',
          imgSrc: [['src/assets/push/4-6.jpg'], ['src/assets/push/4-7.jpg', 'src/assets/push/4-8.jpg'],
            ['src/assets/push/4-9.jpg'], ['src/assets/push/4-10.jpg'], ['src/assets/push/4-11.jpg']],
          placedAt: ['below', 'below', 'below', 'below', 'below'],
          content:
              ["毛泽东主席曾说道“<strong>没有调查就没有发言权</strong>”。调查研究是谋事之基、成事之道，是使主观与客观相符合的条件路径，" +
                "做调查研究能够使我们褪去书生气，切实感受社会的温度，感受不同阶层人民的生活。中午及下午，各个实践队员分头行动，" +
                "针对县城内<strong>村干部、学生、蓝领工人以及个体经营户</strong>四类人群进行了实地走访调研。",
                "<strong>村支书</strong><br>" +
                "在村支书家中，实践队员们了解到身体有残疾的乐乐家通过<strong>补助政策</strong>基本生活有了保障，阳坡村生活条件也有了很大的改善。" +
                "村委会对村民居住地方进行修缮加固，并让每户人家在县城小区里都有房子。通过<strong>乡村振兴政策</strong>的实施，越来越多的年轻人都从阳坡村走出来，" +
                "进城打工，而留在村里的老人越来越少，村委会为老人们修建了<strong>爱心食堂</strong>，而阳坡村远在山上就医不方便，村委会便会为老人们安排每年一次的体检。" +
                "此外，村委会把阳坡村建设成<strong>风景养殖采摘等特色的旅游村</strong>，推动了旅游业发展。总而言之，阳坡村不仅修建了安居乐业的住房，" +
                "还努力从各方面改善居民的生活水平，给村民们提供了更好的生活条件。<br>" +
                "在支书家里，实践队员们采访了村支书的女儿，一个即将升入<strong>小学六年级</strong>的小妹妹。她成绩不错，兴趣爱好也非常广泛，" +
                "会在空余时间参加<strong>美术和舞蹈的兴趣班</strong>，平时的作息时间与城市中的小学生差别不大。尽管她的家庭虽然并不算富裕，" +
                "但支书和她爸爸还是尽力为她提供了最好的条件和支持，使他仍然能够接触到多种兴趣班的机会。她努力学习，积极参与各种活动，展示了自己的才艺和潜力，<strong>追求自己的梦想</strong>。",
                "<strong>蓝领工人</strong><br>" +
                "此外，实践队员们走到街头采访了中阳县的蓝领工人们，包括<strong>路边的环卫工人、保安亭值班的保安、负责物业清洁的保洁阿姨</strong>；" +
                "也走进了几户人家，采访了<strong>煤炭工人雷叔叔和大车司机的妻子</strong>。我们发现虽然同为蓝领，但他们的收入还是存在一定的差距。" +
                "虽然煤炭工人、大车司机等职业收入较多，但这些职业的危险程度也较高。虽然这些工作形式和内容有所差别，但这些人的职业和他们的家庭现状都是相吻合的，" +
                "他们都是自食其力的人，<strong>用自己的汗水赚到血汗钱，心中坦坦荡荡</strong>。",
                "<strong>个体经营户及其员工</strong><br>" +
                "在街边的商户里，实践队员们遇到了中阳县的个体经营户及其员工，比如<strong>文具店的老板、餐厅的经理、超市里的售货员</strong>，" +
                "还在街边遇到了卖小吊瓜的<strong>瓜贩</strong>。他们有的是本地人，有的住在旁边的运城，有的从邯郸远道而来。他们身上难见商人的精明，" +
                "却折射出可贵的<strong>勤劳与朴实</strong>，他们挣的钱不算多，做一点小买卖，比不上中钢大企业的员工。" +
                "尽管有时候会抱怨，但他们都在为了自己的儿女、家人们以及自己努力地工作，认真地生活。",
                "《平凡的世界》中写过这么一段话：“<strong>尽管他们的社会地位和生活处境不同，但在人格上无疑是平等的</strong>”，" +
                "他们身上展现出来的<strong>积极向上的精神和顽强拼搏的态度</strong>，无疑是乡村振兴的重要力量。政府的政策引导和支持，加上人们的努力和奋斗，" +
                "将为乡村带来更美好的未来。人民的共同富裕之路尽管任重道远，但有朝一日一定能实现！"]
        },
        {
          type: 'plaintext',
          title: "今日感想(高世骏)",
          content:
              "不同视角下乐乐家的物质条件：在爷爷口中，家中只有<strong>十几亩</strong>田地，算上低保每年仅有<strong>一万多</strong>，仅能勉强维持日常生活，" +
              "日子过得十分艰苦。在支书口中，乐乐家有<strong>三十多亩</strong>田地，每月低保与乐乐的残疾补助有<strong>小一千块钱</strong>，" +
              "在县城中也选择花销更大的租房而非住自己的房子，家中条件没有那么艰苦。乐乐家情况在爷爷、支书口中不尽相同，我们会继续调查，尽可能反映真实情况。"
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