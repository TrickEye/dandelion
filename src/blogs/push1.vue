<script>
import plaintext from "../components/content/plaintext.vue";
import pic from "../components/content/pic.vue";
import pics from "../components/content/pics.vue";
export default {
  name: 'push1',
  data() {
    return {
      title: '扬帆起航 | 蒲公英乡野航迹实践队简介',
      wechatLink: 'https://mp.weixin.qq.com/s/pOjhB6nxqayYnQAw3oGeQg',
      contents: [
        {
          type: 'plaintext',
          title: null,
          content:
              "为深入学习贯彻<strong>习近平新时代中国特色社会主义思想</strong>，" +
              "全面贯彻落实<strong>党的二十大精神</strong>，" +
              "<strong>北航计算机学院蒲公英乡野航迹实践队</strong>将于暑假组织" +
              "前往<strong>山西省吕梁市中阳县</strong>，主要针对文化、教育等方面展开实地调研，" +
              "利用知识对当地产业赋能。"
        },
        {
          type: 'pic',
          title: '实践队队名队徽',
          imgSrc: 'src/assets/push/1-1.png',
          placedAt: 'top',
          content:
              "队名中的“蒲公英”寓意着希望实践队员像蒲公英一样，在风中扎根，生生不息，遍布全国各地（走遍天下300市）。<br>" +
              "“乡野”代表着广袤的农村大地和丰富多彩的乡村文化，也含有乡村振兴的意味。<br>" +
              "“航迹”则代表着队员们在行走的过程中所留下的足迹和记录，表示实践活动，也与北航本身相结合。"
        },
        {
          type: 'pics',
          title: '中阳初印象——文旅篇',
          imgSrc: [['src/assets/push/1-2.jpg', 'src/assets/push/1-3.jpg'], ['src/assets/push/1-4.jpg', 'src/assets/push/1-5.jpg']],
          placedAt: ['top', 'top'],
          content:
              ["<strong>剪纸艺术</strong><br>" +
              "中阳县是血多非物质文化遗产的发源地，其中剪纸艺术最为突出，在2006年成功入选<strong>首批国家级非物质文化遗产名录</strong>。" +
              "中阳剪纸主要分布于中阳县境内南川河流域、刘家坪地区和西山边远山区。" +
              "南川河流域的民俗剪纸风格细腻、古朴典雅，在中阳剪纸中占据主流地位。实践队希望为相关公司搭建网站平台，" +
              "在保护文化遗产的同时注入新的血液，使剪纸艺术传播更为方便。" +
              "同时，还有望衍生出“线上展览”等一系列数字产品，促进经济发展，从科技角度实现乡村振兴。",
              "<strong>旅游资源</strong><br>" +
              "中阳旅游资源独特丰富，有柏洼山风景区、上顶山风景区、车鸣峪风景区、关上战斗纪念碑、仙明洞、凤凰山生态园、东岳庙等。" +
              "同时，中阳县还有很多依托<strong>非物质文化遗产</strong>的文旅项目。在刚刚过去五一假期中，中阳县开启特色旅游节，" +
              "邀请文水左家拳、离石弹唱、吕梁民歌、临县三弦书、中阳剪纸、孝义皮影戏等非遗表演。<br>" +
              "实践队根据中阳县“<strong>剪纸之乡、逸养中阳</strong>”的发展定位，对中阳当地文旅产业进行调研，结合当地特有文化遗产，通过特色文化带动特色旅游，" +
              "从科技视角出发，为探索出一条符合当地实际的文旅发展道路提出一些建设性意见。"]
        },
        {
          type: 'pic',
          title: '中阳初印象——教育篇',
          imgSrc: 'src/assets/push/1-6.jpg',
          placedAt: 'top',
          content:
              "教育是国家发展壮大的重要支柱。百年大计，教育为本。教育是立国之本，民族兴旺的标记，" +
              "一个国家有没有发展潜力看的是教育，这个国家富不富强，看的也是教育。<br>" +
              "据了解，吕梁县是山西省中部的一个县，下辖21个乡镇，是山西省比较偏远的地区之一。" +
              "<strong>截至2021年，吕梁县共有小学23所，初中10所，高中2所，职业学校1所，幼儿园59所</strong>。县城内还有吕梁县教育局、吕梁县师范学校等教育机构。" +
              "因为地理位置偏远以及经济条件欠发达等原因，吕梁县教育资源相对匮乏，当地政府对教育的投入较少，面临着较多的困难和挑战。" +
              "其中包括教师队伍不足、校舍设施老化、教育投入不足等问题。<br>" +
              "正因如此，实践队积极响应高等院校社会化服务的号召，<strong>传承北航“红色基因”，" +
              "发扬北航学子“家国情怀，正直真诚，创新担当，实干有为”的精神特质</strong>，" +
              "设置内容丰富且具备航空航天及计算机专业特色的支教课程，在支教中展现北航学生风采，将优质教育带到当地学生身边。"
        },
        {
          type: 'plaintext',
          title: '中阳初印象——其他方面',
          content:
              "中阳县地处吕梁山脉中部，<strong>49.09%的森林覆盖率</strong>，每年森林抚育产生的大量枝丫材为黑木耳菌棒的生产提供了先天支撑，" +
              "是栽培黑木耳等食用菌的天然宝地。利用这一优势，中阳县坚持把黑木耳产业作为巩固脱贫成果、促进农民增收的支柱产业，" +
              "充分发挥自身优势，通过政策引导、企业带动、种植户参与、市场拓展等方式，推动黑木耳产业发展。<br>" +
              "本次实践希望通过<strong>深入田野的方式探索当地农业的发展质量</strong>。关注地方政府对于农业发展的布局以及对于农民的帮扶，" +
              "关注当地乡村振兴先行区的建设，关注当地特色农产品的产业现状与园区建设，如“六特两园”的建设、产业园区的规划发展，" +
              "围绕粮食安全和巩固拓展脱贫攻坚成果，关注中阳县发展木耳、核桃、生态养殖等特优农业产业，关注中阳县新产业经营模式，" +
              "通过种植、观光、采摘等多种方式，走规模化、智能化、产业化的道路，延伸产业链，提升价值链，发挥现代农业产业项目价值，" +
              "<strong>理清出一条具有中阳特色的农业农村现代化发展之路</strong>。"
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