<template>
  <v-app>
    <Menu />

    <v-main>
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
};
</script>