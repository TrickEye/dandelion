<script>
import overlay from './overlay.vue'

export default {
  name: 'testModule',
  components: {
    overlay
  }
}
</script>

<template>
    <overlay></overlay>
    <v-container>
      <h1>TITLE OF TESTMODULE</h1>

      <v-card class="bg-blue">
        <v-card-title>Hello world!</v-card-title>
        <v-card-text>
          hello!!!!
        </v-card-text>
        <v-card-actions>
          <v-icon icon="mdi-home"></v-icon>
        </v-card-actions>
      </v-card>
    </v-container>
</template>