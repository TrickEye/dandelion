<script>
export default {
  name: 'pics',
  props: ['title', 'content', 'imgSrc', 'placedAt'],

  computed: {
    cards() {
      if (
          this.imgSrc.length !== this.placedAt.length ||
          this.placedAt.length !== this.content.length
      ) {
        console.error("Lengths of imSrc, placeAt, and content arrays must be equal.");
        return [];
      }

      const cards = [];
      for (let i = 0; i < this.imgSrc.length; i++) {
        cards.push({
          imgSrc: this.imgSrc[i],
          placedAt: this.placedAt[i],
          content: this.content[i]
        });
      }
      return cards;
    }
  }
}
</script>

<template>

  <v-card class="pa-3 ma-3">
    <v-card-title v-if="title">{{title}}</v-card-title>

    <div v-for="(card, index) in cards" :key="index">
      <div v-if="card.placedAt === 'below'" v-html="card.content"></div>
      <div class="image-container">
        <div v-for="img in JSON.parse(JSON.stringify(card.imgSrc))">
          <v-img v-if="card.placedAt === 'below' || card.placedAt === 'top'" :src="img" height="200px"></v-img>
        </div>
      </div>

      <div v-if="card.placedAt === 'top'" v-html="card.content"></div>
    </div>
  </v-card>

</template>

<style scoped>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>