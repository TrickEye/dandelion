<script>
import plaintext from "/src/components/content/plaintext.vue";
import pic from "/src/components/content/pic.vue";
import pics from "/src/components/content/pics.vue";
export default {
  name: 'secretary',
  data() {
    return {
      title: '访谈——阳坡村支书',
      contents: [
        {
          type: 'pics',
          imgSrc: [['src/assets/interview/sect-1.jpg', 'src/assets/interview/sect-2.jpg']],
          placedAt: ['below'],
          content:
              ["——为了探索乡村振兴的具体成效，实践队成员采访了阳坡村的村支书和她的女儿，并与乐乐这位一直在阳坡村的男孩的生活进行了比较。<br>" +
                "——村支书作为阳坡村的村干部，具有丰富的管理经验和协调沟通能力。村民们遇到问题时只要找到支书，她就会尽力帮村民们解决问题。<br>" +
                "——受惠于阳坡村搬迁政策，支书一家住进了政府为村民修建的小区。小区内有将近二十栋楼，楼房有七层，没有电梯，一个单元楼每层大概三户人家。该小区是为山上的村民修建，包括阳坡村的常住居民（乐乐一家也在其内）。阳坡村位居山坡中段，其吃穿用度皆需要坐班车或者打车去县城置办。如果举村搬迁到县城，首先解决了住房问题，其次村民的就医购物等需求也都能得到保障。但即使如此，阳坡村依然有十几户常住人口。我们向支书询问了县城内该小区的生活支出。住在县城里的村民，每年支出大概在6100元，其中物业费1700元，供暖费1600元，水费400元和电费2400元。支书表示，村里的老年人去县城后可能会因为找不到工作，又要雇人看管自己的田地等诸多现实因素，无法负担县城里昂贵的生活费。留在村里不但有居住了一辈子的熟悉的宅院，还有机构单位给村子修建的食堂，可以吃到很便宜的饭菜。所以老年人会更愿意留在村里。因此，政府也对山村窑洞进行了一定的修缮和加固，给阳坡村的留驻老人安排一年一次的义诊体检，并偶尔组织村民看电影，一年三到六次不等。<br>" +
                "——在访谈中，支书也表达了对乡村振兴的后续规划和期望。支书认为，虽然目前来看，阳坡村中尚有不少户人家常住，但随着县城的经济发展，越来越多的年轻村民必定会搬到县城。支书计划将彼时的阳坡村建设成一个集风景、农作物采摘、畜牧养殖为一体的旅游村，通过宣传等手段重新带动乡村经济。<br>" +
                "——支书的女儿今年11岁，将在9月份进入小学六年级，她就读于县城中的府南小学，平时走路不到十分钟就能到学校。小妹妹成绩优异，兴趣爱好广泛，在课余时间学了美术、舞蹈、声乐和乐器演奏。本来以为如此多的课程会是一笔不小的开销，然而支书透露，小妹妹每年参加舞蹈兴趣班的学费仅有1800元，而美术班只用交300元。小学义务教育费用全免。"]
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