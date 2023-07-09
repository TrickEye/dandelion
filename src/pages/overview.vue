<script>
export default {
  name: 'overview'
}
</script>

<template>
  <h1>中阳县城特色</h1>
  <br>

  <v-row>
    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="200px" class="bg-blue-accent-1" link to="./overview/fungus">
        <v-card-title>产业</v-card-title>
      </v-card>
    </v-col>

    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="200px" class="bg-blue-accent-1">
        <v-card-title>文化特色</v-card-title>
      </v-card>
    </v-col>

    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="200px" class="bg-blue-accent-1">
        <v-card-title>自然景色</v-card-title>
      </v-card>
    </v-col>

    <v-col cols="12" xl="3" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="200px" class="bg-blue-accent-1">
        <v-card-title>历史</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>