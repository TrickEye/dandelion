<script>
export default {
  name: 'plaintext',
  props: ['title', 'content']
}
</script>

<template>
<v-card class="pa-3 ma-3">
  <v-card-title v-if="title">{{title}}</v-card-title>
  <div v-html="content"></div>
</v-card>
</template>

<style scoped>

</style>