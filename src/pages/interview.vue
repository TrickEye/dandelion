<script>
export default {
  name: 'interview',

  data() {
    return {
      urban: [
        {
          id: 0,
          title: '蓝领工人',
          desc: '蓝领工人的一些描述',
          path: '/interview/blue'
        },
        {
          id: 1,
          title: '个体经营户',
          desc: '个体经营户的一些描述',
          path: '/interview/shop'
        },
        {
          id: 2,
          title: '村支书',
          desc: '村支书的一些描述',
          path: '/interview/secretary'
        },
        {
          id: 3,
          title: '乡村振兴局',
          desc: '乡村振兴局的一些描述',
          path: '/interview/govern'
        }
      ],
      rural: [
        {
          id: 0,
          title: '雷大爷',
          desc: '雷大爷的一些描述',
          path: '/interview/leidaye'
        },
        {
          id: 1,
          title: '李大娘',
          desc: '李大娘的一些描述',
          path: '/interview/lidaniang'
        },
        {
          id: 2,
          title: '许大爷',
          desc: '许大爷的一些描述',
          path: '/interview/xuhaiyou'
        },
        {
          id: 3,
          title: '许乐乐',
          desc: '许乐乐的一些描述',
          path: '/interview/xulele'
        }
      ]
    }
  }
}
</script>

<template>
  <h1>百姓访谈</h1>
  <br>

  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text>在中阳县城内以及阳坡村，实践队成员广泛开展了走访调查，深入走访对象的生活，坐到百姓的家中，力求收集最真实，最可信的第一手资料。</v-card-text>
        <v-card-text>实践队员针对当地百姓生活状况、乡村振兴成果与乡村振兴困境进行多角度访谈。</v-card-text>
<!--        <v-card-text>-->
<!--          <v-icon size="x-large">mdi-comment-quote</v-icon> <span style="font-size: large">大叔，您最近过得咋样？</span>-->
<!--          <v-icon size="x-large">mdi-comment-quote-outline</v-icon> <span style="font-size: large">大娘，最近身体还好？</span>-->
<!--          <v-icon size="x-large">mdi-comment-quote</v-icon> <span style="font-size: large">爷爷，请问这几年村子里有什么变化？</span>-->
<!--        </v-card-text>-->
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="900px" class="bg-blue-accent-1">
        <v-card-title>县城百姓</v-card-title>
        <v-card-text>在中阳县城中，我们走访了许多在县城生活的百姓。</v-card-text>
        <v-card-text>他们有的是家住在县城的蓝领工人，开卡车、下煤矿或是做环卫工人，用自己的辛勤劳动换取酬劳</v-card-text>
        <v-card-text>有的是个体经营户，在县城的街边开一家小卖部，或是做一名餐厅经理</v-card-text>
        <v-card-text>我们还走访到一位特殊的生活在县城的百姓：阳坡村的村支书，听听她讲乡村振兴的故事</v-card-text>
        <v-card-text>我们还受邀到中阳县政府乡村振兴局，与杜副局长座谈，了解了中阳县扶贫的情况</v-card-text>
        <v-card-text>放点图图！！！！或者改上面的min-height</v-card-text>
<!--        <v-card-actions v-for="people in urban">-->
<!--          <v-btn link :to='people.path'>{{people.title}}</v-btn>-->
<!--        </v-card-actions>-->
      </v-card>
    </v-col>

    <v-col cols="12" xl="8" lg="8" md="6" sm="12" xs="12">
      <v-timeline align="start" side="end" density="compact">
        <v-timeline-item v-for="people in urban" :key="people" density="compact">
          <v-card outlined min-width="600px">
            <v-card-title><span class="d-inline-block">{{people.title}}</span></v-card-title>
            <v-card-text>{{people.desc}}</v-card-text>
            <v-card-actions>
              <v-btn link :to="people.path">阅读</v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>

    <v-divider></v-divider>

    <v-col cols="12" xl="8" lg="8" md="6" sm="12" xs="12">
      <v-timeline align="start" side="start" density="compact">
        <v-timeline-item v-for="people in rural" :key="people" density="compact">
          <v-card outlined min-width="600px">
            <v-card-title><span class="d-inline-block">{{people.title}}</span></v-card-title>
            <v-card-text>{{people.desc}}</v-card-text>
            <v-card-actions>
              <v-btn link :to="people.path">阅读</v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>

    <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="900px" class="bg-blue-accent-1">
        <v-card-title>村镇百姓</v-card-title>
        <v-card-text>在中阳县城中，我们走访了许多在县城生活的百姓。</v-card-text>
        <v-card-text>他们有的是家住在县城的蓝领工人，开卡车、下煤矿或是做环卫工人，用自己的辛勤劳动换取酬劳</v-card-text>
        <v-card-text>有的是个体经营户，在县城的街边开一家小卖部，或是做一名餐厅经理</v-card-text>
        <v-card-text>我们还走访到一位特殊的生活在县城的百姓：阳坡村的村支书，听听她讲乡村振兴的故事</v-card-text>
        <v-card-text>我们还受邀到中阳县政府乡村振兴局，与杜副局长座谈，了解了中阳县扶贫的情况</v-card-text>
        <v-card-text>放点图图！！！！或者改上面的min-height</v-card-text>
<!--        <v-card-actions v-for="people in rural">-->
<!--          <v-btn link :to='people.path'>{{ people.title }}</v-btn>-->
<!--        </v-card-actions>-->
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card outlined>
        <v-card-title>访谈收获</v-card-title>
        <v-card-actions>
          <v-btn link :to='"/interview/summary"'>阅读详细内容</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>