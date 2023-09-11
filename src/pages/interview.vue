<script>
export default {
  name: 'interview',

  data() {
    return {
      urban: [
        {
          id: 0,
          title: '蓝领工人',
          path: '/interview/blue'
        },
        {
          id: 1,
          title: '个体经营户',
          path: '/interview/shop'
        },
        {
          id: 2,
          title: '村支书',
          path: '/interview/secretary'
        },
        {
          id: 3,
          title: '乡村振兴局',
          path: '/interview/govern'
        }
      ],
      rural: [
        {
          id: 0,
          title: '雷大爷',
          path: '/interview/leidaye'
        },
        {
          id: 1,
          title: '李大娘',
          path: '/interview/lidaniang'
        },
        {
          id: 2,
          title: '许大爷',
          path: '/interview/xuhaiyou'
        },
        {
          id: 3,
          title: '许乐乐',
          path: '/interview/xulele'
        }
      ]
    }
  }
}
</script>

<template>
  <h1>interview | 百姓访谈</h1>
  <br>

  <v-row>
    <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="200px" class="bg-blue-accent-1">
        <v-card-title>县城百姓</v-card-title>
        <v-card-actions v-for="people in urban">
          <v-btn link :to='people.path'>{{people.title}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="200px" class="bg-blue-accent-1">
        <v-card-title>村镇百姓</v-card-title>
        <v-card-actions v-for="people in rural">
          <v-btn link :to='people.path'>{{ people.title }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="256px" class="bg-blue-accent-1">
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