<script setup>
</script>

<template>
  <v-app>
    <v-app-bar
        color="indigo"
        flat
        app
        :absolute="true"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>蒲公英航迹乡野实践队</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tabs centered color="yellow">
        <v-tab link to="../overview/">县城特色</v-tab>
        <v-tab link to="../interview/">百姓访谈</v-tab>
        <v-tab link to="../us/">蒲公英们</v-tab>
        <v-tab link to="../blogs/">杂谈</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>


    </v-app-bar>


    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
