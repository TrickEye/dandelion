<script>
import plaintext from "../components/content/plaintext.vue";
import pic from "../components/content/pic.vue";
import pics from "../components/content/pics.vue";
export default {
  name: 'push5',
  data() {
    return {
      title: '筑梦中阳 | Day.4 寻觅自然风趣 品悟红色精神',
      wechatLink: 'https://mp.weixin.qq.com/s/-fpSAKSE4y5W3nVpZE_L-g',
      contents: [
        {
          type: 'pics',
          title: '寻踪柏洼山',
          imgSrc: [['src/assets/push/5-1.png'], ['src/assets/push/5-2.png'],
            ['src/assets/push/5-3.png', 'src/assets/push/5-4.png'], ['src/assets/push/5-5.png'], ['src/assets/push/5-6.png']],
          placedAt: ['below', 'below', 'below', 'below', 'below'],
          content:
              ["黄山有迎客松，<strong>柏洼山</strong>则有望客松。进入山门后，就能看见遒劲的松枝迎风招展。",
                "柏洼山是<strong>道教圣地</strong>，望客松对面就是一座道庙龙泉观。进门处有两大门神，凯导在线科普门神来源：太宗李世民夜夜被噩梦困扰，" +
                "尉迟恭和秦琼则为其夜夜守门，太宗得以安眠，至此民间也兴起了“贴门神以辟邪”的传统。行至此处，已然可以登高望远，一览中阳风貌。",
                "越过龙泉观，路分两叉，左平右陡，大家决定先去探访更险峻的一侧。沿路前行，一路上有已然干涸的“<strong>验情河</strong>”，也有道教特色的<strong>八卦阵</strong>。",
                "山谷中松柏丛生，十分凉爽，但穿过小径身上会沾满蛛网，想来也是人迹罕至。继续攀升到最顶端，是山上的<strong>观音阁</strong>，也映证了这一猜想：" +
                "阁门禁闭，透过缝隙可以隐约看见其中的观音像，阁楼周围也是<strong>灰尘满布</strong>，堂前的香火零星点点，连路上的莲花灯都是太阳能发电而无需人为更换电池。",
                "之后大部队再次折返到另一条小径，相较右侧这条小径则更为宽阔幽寂。路过一块路牌，我们也了解到了柏洼山的典故：" +
                "柏洼山以松柏居多闻名，又以松柏相依为奇，满山之树成双配对，<strong>一松一柏似出同根</strong>，是千年植物生长之谜。" +
                "而松柏相拥，相依相偎的情景，独无仅有，因此也被称为<strong>情侣树</strong>。道路两侧的松柏也确如斯言，同根相依。"]
        },
        {
          type: 'pics',
          title: '参观党史馆',
          imgSrc: [['src/assets/push/5-7.jpg'], ['src/assets/push/5-8.png'],
            ['src/assets/push/5-9.png'], ['src/assets/push/5-10.png']],
          placedAt: ['below', 'below', 'below', 'below'],
          content:
              ["实践队的另一些成员则去参观了“<strong>红色初心中阳主题展</strong>”，以一百年来中阳的红色历史为切入点，加深了实践队对中阳的了解维度。" +
                "“红色初心中阳主题展”主要分为三个主题进行展示，分别为“信仰”、“信念”与“信心”展厅。",
                "“信仰”展厅聚焦于<strong>中阳县在革命解放战争与抗日战争期间的历史</strong>，突出展示了中阳县作为连接晋北与晋南要道的枢纽作用，以及中阳县苏维埃政权作为革命老区的历史意义。<br>" +
                "1931年5月，在中共山西特委的统筹和领导下，山西第一支工农革命武装成立，随后在中阳开辟了中阳县东山革命游击根据地。<br>" +
                "1936年2月下旬，清涧县党和苏维埃领导干部贺天云、黄石山等地方工作人员随军进入三交镇，组建中共中阳县工作委员会，随后成立了山西省第一个县级苏维埃政权。<br>" +
                "<strong>关上战斗</strong>是东征红军在中阳取得的一个大胜仗，极大震慑了阎锡山当局，打通了红军东征南下晋西南的通道。<br>" +
                "1946年，中阳县正式被解放，1947年2月7日，中阳县政府成立，县委领导全县人民积极恢复和发展生产，全县社会秩序井然。",
                "“信念”展厅聚焦于<strong>中阳县社会主义革命和建设时期的历史</strong>，展示了中阳县<strong>党政组织、工业发展、林业发展、农业发展、" +
                "标志工程、民生机构和文化建设<strong>的成就，中阳县党员人数持续增加；县政府建设了吕梁地区水泥厂、机器人厂等工业设施，" +
                "建设了陈家湾水库、人民大礼堂、县委大楼等标志工程，建设了学校、客运、医院等民生机构。",
                "“信心”展厅聚焦于<strong>中阳县改革开放和社会主义现代化建设新时期的历史</strong>， 改革开放以来，中阳县经济体制改革不断深化，民营经济异军突起，" +
                "工业经济突飞猛进，创造了历史发展新水平。全县逐渐形成了<strong>“采煤-洗煤-焦化”、“煤-铁-钢”、“煤-建材”三条产业链。" +
                "中钢集团、桃园腾阳集团</strong>等优秀企业迅速扩大，成为引领全县工业经济的“龙头”。进入新时代后，党领导人民守正创新，" +
                "开启了实现“两个百年”奋斗目标的新征程。中阳大地生机盎然，中阳人民立足新阶段，贯彻新理念，翻开了脱贫攻坚、转型跨越，推动高质量发展新篇章。"]
        },
        {
          type: 'pics',
          title: '团建',
          imgSrc: [['src/assets/push/5-11.png']],
          placedAt: ['below'],
          content:
              ["完成了上午的工作后，6日下午大家进行了<strong>团建</strong>，以轻松愉快的玩耍结束了我们本次实践。"]
        },
        {
          type: 'pics',
          title: '7月7日——再见中阳',
          imgSrc: [['src/assets/push/5-12.png'], ['src/assets/push/5-13.jpg'], ['src/assets/push/5-14.jpg']],
          placedAt: ['below', 'below', 'below'],
          content:
              ["今天是大家在中阳的最后一天。早上8点，大家收拾好行李，乘坐中巴前往<strong>吕梁站</strong>，之后再乘坐高铁前往各自的目的地。" +
                "路途中，经过零星分布的<strong>黄土地</strong>，再次听到<strong>炼钢机</strong>发出的滚滚轰鸣，我们也意识到是真的要说再见了。",
                "到达吕梁站后，大家在站牌下最后合了一次影，标志着这次实践之旅<strong>前期调研部分</strong>的结束。<br>" +
                "短短五天中，我们探访了中阳<strong>黑木耳</strong>生长的奥秘，见证了<strong>中钢</strong>蕴含的巨大能量，" +
                "品尝了<strong>泊洼古井</strong>神奇的“蜂蜜醋”，前往<strong>北航-中阳科技孵化器</strong>见识了粗犷但别具风味的<strong>中阳剪纸</strong>，" +
                "登了<strong>柏洼山</strong>，看了<strong>党史馆</strong>，既来到了<strong>阳坡村</strong>村民们的家中，了解他们每天的生活，" +
                "也去了<strong>县政府</strong>，和扶贫办的干部交流我们的所感所思所疑。<br>" +
                "中阳不是一个很大的县城，但中阳的人们都在<strong>很努力很认真</strong>地生活。作为大学生群体，我们往往囿于学校的象牙塔，" +
                "很难了解到外面真正的社会是怎样的。而这次实践给我们提供了一个机会，让我们这群外乡人能较为深入地走进这一片土地，" +
                "去聆听当地人的<strong>心声</strong>，这实在是一件非常荣幸的事。<br>" +
                "而之后，我们也将继续整理我们这几天以来的<strong>感想与收获</strong>，同时继续<strong>搭建网站</strong>，" +
                "传播中阳文化。实践线下之旅结束了，但后续任务尚未完成，同志们仍需努力！"]
        },
        {
          type: 'plaintext',
          title: "今日感想(高世骏)",
          content:
              "结束了为期五天的实践活动，有很多精彩的瞬间都值得记录。队员们<strong>调研参观</strong>时的认真不苟，与<strong>村民访谈</strong>时感受到的质朴热情，" +
              "队内<strong>交流总结</strong>时的深刻，做<strong>宣传推送</strong>时的忙碌，<strong>傍晚骑车</strong>时扑面而来的凉爽，" +
              "<strong>随性闲逛</strong>时的惬意......<br>" +
              "我们穿行在中阳的街道上，用脚步拥抱这座沉淀了百年的小城，听它用凉爽的空气和淳朴的民风讲述属于它的故事。" +
              "在这里，我们感受到了<strong>中阳独特的魅力</strong>。"
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