<script>
import plaintext from "/src/components/content/plaintext.vue";
import pic from "/src/components/content/pic.vue";
import pics from "/src/components/content/pics.vue";
export default {
  name: 'shop',
  data() {
    return {
      title: '访谈——个体经营户',
      contents: [
        {
          type: 'plaintext',
          title: '超市售货员',
          content:
              ["——在客乐购超市的粮油区域旁，实践队队员们见到了44岁的张姐，她负责为购买粮油类产品的顾客进行介绍、称重、上货.在粮油区内有一些当地的特色饮食，例如熬稀饭用的黄豆片、玉米片等，是原粮加工而成。从张姐口中得知，客乐购在中阳有两家店，此处是较大的一家，由于来超市的大部分为本地人，而粮油又是必需品，因此没有淡旺季之分，只是中午顾客比较少。张姐上午8点到11点半上班，晚上从5点半到10点，有1000多元的底薪，算上绩效可以达到1600—1700元，由于客乐购为私人开办，张姐需要自己缴纳五险一金，公司会从工资里扣除50—60元用于购买保险。<br>" +
              "——张姐家是有三个孩子的五口之家，大闺女在太原读大三，最小的儿子在中阳读初中，由于不是贫困户，所以无法享受到易地搬迁政策。原本的房子离中阳县城较远，开车需要40—50分钟才能到达县城，为了方便孩子在中阳读书，张姐一家在中阳县城边租房住，每天骑摩托车进城上班。"]
        },
        {
          type: 'pics',
          title: '文具店老板',
          imgSrc: [['src/assets/interview/shop-1.jpg']],
          placedAt: ['below'],
          content:
              ["——在酒店附近的文具店里，实践队队员们采访了胡老板。胡老板今年50岁，和丈夫一起经营着这家店，小儿子在华北电力大学读研，大儿子在中阳钢铁上班，家庭生活和谐幸福。胡老板夫妇已经卖了十几年文具，每天早上8点开始营业，晚上11点关店。除了夫妻俩，她们还雇用了一个店员。除了平时面向学生销售，也会给学校和政府配送文具。在疫情期间，政府也通过减免税收帮助小店渡过难关，而现在则需要缴纳流水金额1%的税。胡老板的店在小镇开了蛮久，口碑很好。因为学生孩子在寒暑假补课，店里生意也不错，平均日零售额在700—800元，除去一年的租金4万元和水电等杂项，毛利润能达到30%。"]
        },
        {
          type: 'pics',
          title: '餐馆经理',
          imgSrc: [['src/assets/interview/shop-2.jpg']],
          placedAt: ['below'],
          content:
              ["——在上品轩餐馆，实践队队员们访谈了大堂经理刘女士，了解有关当地餐饮业、民生经济的问题。上品轩是一家位于中阳县二郎坪街的中餐馆，主营湘菜、晋菜，门店内设有6个包间与10个散台，装修较新，用餐环境较好，客单价在40—200元。刘女士今年29岁，中阳当地人，此前有过经营餐馆的经历。据刘女士介绍，中阳县当地人午餐多吃快餐，因此像上品轩这样较为正式的饭店，午餐客流较少，店内上座量在4—5桌左右，相比之下，晚餐则基本上爆满。据悉，当地餐饮行业并无相关的政策扶持，且客流量周期性不明显。据刘女士介绍，近年来中阳县的房价也呈快速上涨趋势，房价每平方米十年前约为2000元，现在约为5000元，甚至超过了附近一些地级市（如山西运城盐湖区）。当地房屋租赁价格也较高，三室一卫一厅的房源，租金约为12000元一年。刘女士月收入4000多元，目前暂无购房需求，这一方面是因为房价偏高，另一方面是娘家有三套房，可以满足需求。刘女士的丈夫是山西运城人，因此她向我们介绍了两地的区别，中阳县的房价、物价都高于运城盐湖区，目前刘女士本人也有在运城购房的打算。刘女士现育有一个4岁的儿子，在中阳县本地幼儿园就读，自己平时工作较忙，儿子平时由儿子的父亲照料。刘女士的日常工作时间分为两段，分别是10点至14点和17点至24点。店内普通服务员每月工资在3000元左右，涵盖了意外保险，但并不包含五险一金。据悉，中阳县除了中阳钢铁以外的民营企业都不为员工统一缴纳五险一金，中阳钢铁员工的收入在当地较高，女工月薪4000元左右，男工月薪7000元左右。"]
        },
        {
          type: 'pics',
          title: '瓜贩',
          imgSrc: [['src/assets/interview/shop-3.jpg']],
          placedAt: ['below'],
          content:
              ["——在马路旁，实践队队员们与卖小吊瓜的瓜贩作了简要交谈。他来自河北邯郸，开车几百公里来卖瓜，瓜都是自己种的，哪里生意好就去哪里卖，已经卖了五六年了。中阳天气凉快，生意也不错，每天能卖几百块钱，一车要卖一周左右，夜里就找个便宜旅馆住下，或者直接睡车上。有时城管也会管他们，瓜贩也知道那是城管的工作，不给城管添麻烦，城管一来就自觉地离开。"]
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