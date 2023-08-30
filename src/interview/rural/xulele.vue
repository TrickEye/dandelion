<script>
import plaintext from "/src/components/content/plaintext.vue";
import pic from "/src/components/content/pic.vue";
import pics from "/src/components/content/pics.vue";
export default {
  name: 'xulele',
  data() {
    return {
      title: '访谈——许乐乐',
      contents: [
        {
          type: 'pics',
          title: '中阳县阳坡村人，患唇裂伴智力障碍',
          imgSrc: [['src/assets/interview/xulele-1.jpg']],
          placedAt: ['below'],
          content:
              ["——乐乐的爷爷育有两子。长子结婚后生下姐姐和乐乐，平日里都在县城打工，一年仅回村两次。后来乐乐的父母婚姻破裂。乐乐妈妈带着姐姐去外地读书。乐乐则被留在村里，由爷爷奶奶照顾。而乐乐爸爸基本不过问乐乐的养育，每个月只是给爷爷200元。奶奶去世之后，便只剩爷爷和乐乐相依为命：学期间两人住在县城，爷爷照顾乐乐的日常起居；假期间，乐乐和爷爷回阳坡村居住，一同经营家中田地。爷爷的次子也在县城工作，结婚生子后在县城定居，偶尔回家帮帮忙。乐乐患唇裂伴智力障碍，幼年在北京航空航天大学的支持下前往北京进行治疗，先后进行了5场手术，花销约为10万，如今乐乐恢复得非常好，能看出疤痕但不是很明显，平日里也能和他人进行基本的沟通。但由于术后治疗和恢复需要时间，乐乐8岁才开始上小学，2023年9月开学后上四年级。<br>" +
              "——据了解，爷爷靠低保维持基本生活，低保标准提高后，每个月爷爷可以拿到５００元左右。乐乐还有残疾证，每月有一定的残疾补助。此外，乐乐家中有三十几亩地，乐乐和爷爷两人很难独自完成全部的种植工作，因此将部分田地租给他人，留下十几亩自己耕种，每年约有一万多元的收入。乐乐家的收入在阳坡村处于中下水平，但在村委会与政策的帮扶下，二人也能勉强维持生活。<br>" +
              "——爷爷平时照顾乐乐的日常起居，空闲下来就靠刷短视频消磨时间。等乐乐放假回到家里后，除了照顾乐乐、种田卖玉米以外，有时候在家看电视。乐乐回村后经常在村中四处闲逛，由于缺少合适的玩伴，有时只能自己独自玩耍。爷爷在放假时通常每隔一两周会去县城买买菜，或者处理些其他事务。"]
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