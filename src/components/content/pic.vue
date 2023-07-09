<script>
export default {
  name: 'pic',
  props: ['title', 'content', 'imgSrc', 'placedAt'],
}
</script>

<template>
<v-card class="pa-3 ma-3">
  <v-card-title v-if="title">{{title}}</v-card-title>

  <v-card-text v-if="!placedAt">Warning! "placedAt" is not set. You shouldn't be seeing this.</v-card-text>

  <div v-if="placedAt === 'below'" v-html="content"></div>
  <v-img v-if="placedAt === 'below' || placedAt === 'top'" :src="imgSrc" height="200px"></v-img>
  <div v-if="placedAt === 'top'" v-html="content"></div>
</v-card>

</template>

<style scoped>

</style>