<script setup>
import DuJinyang from '../assets/aboutus/DuJinyang.jpg'
import CuiYikai from '../assets/aboutus/CuiYikai.jpg'
</script>

<script>
import DuJinyang from '../assets/aboutus/DuJinyang.jpg'
import CuiYikai from '../assets/aboutus/CuiYikai.jpg'
import GaoShijun from '../assets/aboutus/GaoShijun.png'
import HuangYu from '../assets/aboutus/HuangYu.jpg'
import YuYang from '../assets/aboutus/YuYang.jpg'
import KeQiyan from '../assets/aboutus/KeQiyan.jpg'
import LiNanbin from '../assets/aboutus/LiNanbin.jpg'
import LiYihao from '../assets/aboutus/LiYihao.png'
import DongJiarong from '../assets/aboutus/DongJiarong.jpg'
import HeJiayi from '../assets/aboutus/HeJiayi.jpg'
import YinXinping from '../assets/aboutus/YinXinping.jpeg'


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
            pic: GaoShijun,
            intro: '来自北京的高世骏，喜欢打游戏'
          }, {
            id: 1,
            name: '杜金洋',
            pic: DuJinyang,
            intro: "热爱生活，元气满满的阳光小子"
          }, {
            id: 2,
            name: '黄钰',
            pic: HuangYu,
            intro: 'todo'
          }, {
            id: 3,
            name: '于洋',
            pic: YuYang,
            intro: 'hello 大家好我是蒲公英乡野航迹实践队的队员于洋。'
          }, {
            id: 4,
            name: '柯棋严',
            pic: KeQiyan,
            intro: 'todo'
          }, {
            id: 5,
            name: '李南冰',
            pic: LiNanbin,
            intro: '我是李南冰，来自天津，实践活动让我感受到了新时代中阳的发展与进步。'
          }, {
            id: 6,
            name: '李一豪',
            pic: LiYihao,
            intro: '冷酷的外表下隐藏着一颗火热的心。在熟悉的人面前，我就是一个天天傻笑的半吊子。没啥特别的爱好，但是啥也愿意尝试。'
          }, {
            id: 7,
            name: '崔怿恺',
            pic: CuiYikai,
            intro: 'li v0 10; syscall;'
          }, {
            id: 8,
            name: '董佳荣',
            pic: DongJiarong,
            intro: '老二刺猿了'
          }, {
            id: 9,
            name: '何嘉怡',
            pic: HeJiayi,
            intro: '已毕业的社恐学姐， 很荣幸参加到本次实践中🌹'
          }, {
            id: 10,
            name: '尹馨平',
            pic: YinXinping,
            intro: '早安，我是一个平平无奇的乱入队友'
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
            <v-card class="person bg-blue-accent-1 pa-2 text-center">
              <v-avatar size="200px" style="margin-top: 15px">
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
.person {
  height: 350px;
}
</style>