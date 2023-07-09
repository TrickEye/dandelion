<script>
export default {
  name: 'pushCard',
  props: ['title', 'content', 'imgSrc', 'path'],
}
</script>

<template>
<v-card min-height="200px" class="pa-3 ma-3">
  <v-card-title>{{title}}</v-card-title>
  <v-card-text>{{content}}</v-card-text>
  <v-img :src="imgSrc" height="200px"></v-img>
  <v-card-actions>
    <v-btn link :to="path">阅读</v-btn>
  </v-card-actions>
</v-card>
</template>

<style scoped>

</style>