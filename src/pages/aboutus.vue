<script setup>
import DuJinyang from '../assets/aboutus/DuJinyang.jpg'
import CuiYikai from '../assets/aboutus/CuiYikai.jpg'
</script>

<script>
import DuJinyang from '../assets/aboutus/DuJinyang.jpg'
import CuiYikai from '../assets/aboutus/CuiYikai.jpg'

  export default {
    name: '蒲公英们',
    data() {
      return {
        history: [{
          time: '2023年7月',
          destination: '山西省 中阳县',
          crew: [{
            id: 0,
            name: '高世骏',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 1,
            name: '杜金洋',
            pic: DuJinyang,
            intro: "This is Charles's Castle"
          }, {
            id: 2,
            name: '黄钰',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 3,
            name: '于洋',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 4,
            name: '柯棋严',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 5,
            name: '李南冰',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 6,
            name: '李一豪',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 7,
            name: '崔怿恺',
            pic: CuiYikai,
            intro: 'li v0 10; syscall;'
          }, {
            id: 8,
            name: '董佳荣',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 9,
            name: '何嘉怡',
            pic: 'todo',
            intro: 'todo'
          }, {
            id: 10,
            name: '尹馨平',
            pic: 'todo',
            intro: 'todo'
          }],
          show: true
        }]
      }
    }
  }
</script>

<template>
  <h1>关于我们</h1>
  <br>

  <v-card v-for="moment in history" :title="moment.time" :text="moment.destination">
    <v-card-actions>
      <v-btn @click="moment.show=!moment.show">
        {{ moment.show ? '收起' : '展开'}}
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="moment.show" class="pa-3">
        <v-row>
          <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12" v-for="person in moment.crew">
            <v-card min-height="200px" class="bg-blue-accent-1 pa-2 text-center">
              <v-avatar size="200px">
                <v-img v-if="person.pic !== 'todo'" :cover="true" :src="person.pic" size="200px"></v-img>
                <v-icon v-else size="200px">mdi-account</v-icon>
              </v-avatar>
              <v-card-title>{{ person.name }}</v-card-title>
              <v-card-text>{{ person.intro === 'todo' ? '个人简介待完善' : person.intro }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-expand-transition>

  </v-card>

</template>

<style scoped>

</style>