<!--<script setup>-->
<!--</script>-->

<script>
import vinegarBrief from "../assets/overview/vinegar/vinegarbrief.jpg";
export default {
  name: 'vinegar',
  data() {
    return {
      vinegarBrief: vinegarBrief,
    }
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12" xl="6" lg="8" md="10" sm="12" xs="12" class="ma-auto">
      <h1><span><a href="/#/overview"><strong>县城特色</strong></a></span> / 百洼古井，陈醋传承</h1>
      <br>

      <v-card>
        <v-card-text>山西是醋业大省。传统醋也有新前途。</v-card-text>
      </v-card>

      <v-card>
        <v-img :src="vinegarBrief"></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>