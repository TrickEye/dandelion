<script>
export default {
  name: 'blogs',
  data() {
    return {
    }
  }
}
</script>

<template>
  <h1>蒲公英的杂谈</h1>
  <br>

  <v-row>
    <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <v-card height="200px" class="bg-blue-accent-1 align-center">
        <v-hover v-slot:default="{isHovering, props}">
          <v-img
              src="./final_2.png"
              v-bind="props"
          >
            <v-card-title
                class="text-center"
                :style="isHovering ? 'color: white; font-weight: bold;' : ''">扬帆起航 | 蒲公英乡野航迹实践队简介</v-card-title>
            <v-card-subtitle>激昂青春！蒲公英乡野航迹实践队启航</v-card-subtitle>
            <v-card-subtitle>2023-06-29</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn plain link to="/blogs/push1">阅读</v-btn>
            </v-card-actions>
          </v-img>
        </v-hover>
      </v-card>
    </v-col>

    <v-col cols="12" xl="4" lg="4" md="6" sm="12" xs="12">
      <v-card min-height="200px" class="bg-blue-accent-1">
        <v-card-title>村镇百姓</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
v-card-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>