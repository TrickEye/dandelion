<script>
export default {
  name: 'pics',
  props: ['imgSrc', 'placedAt'],
}
</script>

<template>
<div>
  <v-img v-for="img in JSON.parse(imgSrc)" :src="img" height="200px"></v-img>
</div>
</template>

<style scoped>

</style>