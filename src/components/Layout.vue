<template>
  <v-app>
    <v-app-bar app>
      <Menu />
    </v-app-bar>

    <v-main class="def-padding">
      
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Layout',

  components: {
      Menu
  },

  data: () => ({
    //
  }),

  mounted(){
  }
};
</script>

<style scoped>
  .def-padding{
    padding: 70px 16px !important;
  }
</style>