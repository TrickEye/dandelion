<script>
import plaintext from "../components/content/plaintext.vue";
import pic from "../components/content/pic.vue";
import pics from "../components/content/pics.vue";
export default {
  name: 'push3',
  data() {
    return {
      title: '筑梦中阳 | Day.2 剪中阳之影，访阳坡之兴',
      wechatLink: 'https://mp.weixin.qq.com/s/Oh0-3yWtT8oabnmzYVfRiA',
      contents: [
        {
          type: 'pics',
          title: '7月4日——雨过天晴',
          imgSrc: [['src/assets/push/3-1.png'], ['src/assets/push/3-2.png', 'src/assets/push/3-3.png'],
            ['src/assets/push/3-4.png'], ['src/assets/push/3-5.png']],
          placedAt: ['below', 'below', 'below', 'below'],
          content:
              ["<strong>北航中汇科技孵化器</strong><br>" +
              "蒲公英乡野航迹实践队首先来到了北航中汇科技孵化器，来探寻科技孵化背后的奥秘。" +
              "<strong>北航中汇科技孵化器</strong>是北京航空航天大学与中阳县共同为北航校友企业家和地方有发展潜力的技术型企业创造的优越的投资、发展环境的科技服务平台。" +
              "目前已经有10余家高新技术企业先期入驻。",
              "实践队追寻着<strong>中阳剪纸市级传承人武小汾</strong>的步伐，探索了藏在中阳剪纸背后的璀璨文化，" +
              "武老师继承其父亲<strong>“中阳剪纸文化奠基人”武一生</strong>的手艺，积极推动中阳剪纸的发展推广，为中国传统文化的传承做出了突出贡献。<br>" +
              "实践队还参观了<strong>硕为思集团、山西宸宇服装有限公司</strong>等一系列优秀产业，感受到孵化器有效推动当地经济转型升级的巨大能力和北航的品牌号召力。",
              "<strong>尚养桃园农业综合体</strong><br>" +
              "在探寻了孵化器的科技奥秘之后，实践队来到了尚养桃园休闲农业旅游综合体。" +
              "该项目以“<strong>生态殖养、药食同源、文旅融合、各业并举、稳定脱贫、村美民富</strong>”为建设理念，" +
              "建设集生态畜禽养殖、有机种植、休闲农业、农产品加工、农事体验、农耕文化、农业科研、乡村旅游为一体的有机农业产业园。",
              "在这里实践队重点参观了“<strong>柏籽羊</strong>”养殖基地，这里可以做到年出栏3000只“柏籽羊”，是当之无愧的中阳文化地标之一，" +
              "除此之外，我们还来到了山西桃园紫云牧业有限公司科技研发中心，从这里民宿的迅速发展展望未来中阳旅游业的巨大发展潜力。" +
              "该项目为周边群众提供380个就业岗位，让很多家庭住上了新房子，全面带动乡村振兴。"]
        },
        {
          type: 'pics',
          title: '聚焦基层，村内访谈',
          imgSrc: [['src/assets/push/3-6.png'], ['src/assets/push/3-7.png'],
            ['src/assets/push/3-8.jpg'], ['src/assets/push/3-9.jpg'], ['src/assets/push/3-10.jpg'],
            ['src/assets/push/3-11.jpg']],
          placedAt: ['below', 'below', 'below', 'below', 'below', 'below'],
          content:
              ["为了更好地了解当地村民的生活情况，实践队分成多个小组分头行动，对<strong>阳坡村</strong>村民进行采访，" +
                "了解他们的生活情况及背后的故事，从而更深切地感受中阳深厚的文化底蕴和乡村振兴的巨大发展成果。",
                "李一豪、黄钰、杜金阳: <strong>李奶奶</strong>是阳坡村一位普通的农民，祖辈一直都在阳坡村居住，家里的生活条件还算殷实，" +
                "特别是在扶贫工作开展之后，老伴能到养羊场上班，有固定的收入，生活质量得到很大的改善。儿孙满堂，儿女时常回家看望老人，总的来说近年来生活还算不错。",
                "何嘉怡、董佳荣: 与桃园牧业的<strong>看门大爷许海友</strong>交流后，我们了解到了这位独居老人的真实状况。“现在的日子比以前可是好太多了哩”，" +
                "他对现在的生活非常满意，“有白面馍馍吃，有固定的活儿，还有什么不满意的？”得益于党和政府的帮扶支持，他能够自给自足，也没有什么烦恼。",
                "于洋、柯棋严、李南冰: 我们小组走进了<strong>雷海云大爷</strong>的家里。到达时，雷大爷去县城里修牙了，" +
                "几乎全部的时间我们都在和<strong>李凤大娘</strong>交谈。雷大爷的家庭儿孙满堂，提到子女时大娘十分开心骄傲，" +
                "雷大爷家在阳坡村算是比较殷实的家庭，除了羊、猪、鸡等可以获得收益的牲畜之外，还有两三只小狗小猫等宠物。" +
                "大爷大娘十分热情好客，尽管沟通有些障碍，但还是很耐心地给我们讲述家里的情况。",
                "高世骏、崔怿恺、尹馨平: 我们采访了<strong>许乐乐和许安平（乐乐爷爷）</strong>。乐乐患有兔唇，父母离异，离婚后父亲外出打工，" +
                "爷爷主要照顾乐乐成长。爷爷的主要收入来源是低保与贩卖自家种植的玉米，每年约有一万元左右的收入。在开学时爷爷和乐乐一起前往县城，" +
                "照顾乐乐上学期间的日常生活，放假时二人一同回村务农，经营家中三十几亩的田地。村中条件艰苦，缺少配套资源，" +
                "上学、看病、买菜购物都要前往县城，很难满足二人的基本生活需求。但县城住房、水电费较高，爷爷和乐乐很难负担。",
                "蔡睿智、王俊凯、赵晓涵: 来到了许爷爷的家中，我们相谈甚欢，了解了一位<strong>阳坡村前任村支书</strong>的真实状况。" +
                "爷爷当了九年的村支书，现在仍作为村里的接络员。虽然爷爷不幸患病，但仍然每天坚持运动锻炼，脸上仍然洋溢着幸福的微笑。" +
                "见证阳坡村沧桑巨变，子孙满堂的他对现在的生活十分满足。"]
        },
        {
          type: 'plaintext',
          title: "今日感想(杜金阳)",
          content:
              "一把剪刀，一张红纸，不用看纸，不用瞅刀，与人聊天的工夫，一幅栩栩如生的作品便呈现在人的眼前，这就是剪纸的艺术与魅力。" +
              "而说起中阳剪纸，今天<strong>中阳剪纸传承人武小汾女士</strong>让我感受了中阳剪纸文化的巨大魅力，感受到中阳剪纸富有浓郁的山野泥土气息和原始艺术质朴的美感。<br>" +
              "而在之后我们与李奶奶的交流过程中，我深切感受到了他们的热情好客，而且他们每天积极向上的精神同样让我为之动容，杏子很甜，而<strong>阳坡村人的生活也会越来越甜</strong>。"
        },
        {
          type: 'plaintext',
          title: "今日感想(柯棋严)",
          content:
              "从出生的一刻开始，许多巨大到需要用一生来跨越的鸿沟就已经注定。之前并不是没有了解过脱贫一线的情况，" +
              "只是短时间内北京，中阳和阳坡村三者的<strong>对比过于强烈</strong>。即便是站在实现全面脱贫攻坚胜利的今天，我也很难说眼前的小康与我所臆想的小康相吻合。" +
              "站在庞大的人口基数，一个人，一个队，一个学校的力量好像都有些微小，就好像或许乐乐能够得到来自各方面的善意，" +
              "但全中国成千上万的乐乐又是否能得到同等的援手呢，站在我的角度，有些不得而知。<br>" +
              "积极层面来说，乡村振兴已经在阳坡村，中阳县乃至于全中国遍地繁花，地方企业先富带动后富的模式在这一站得到充分的验证，" +
              "桃源集团，中钢已经成了当地的支柱产业，在提供劳动岗位，园区建设等多方面发挥作用。对我自己而言，一方面验证了万里行路的必要性，" +
              "想要去做到在路上与亲临。另一方面，“怎么样都可以生活下去”确实也是一种态度，一种<strong>经历过破碎之后更坚固的重建</strong>。"
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