<template>
  <v-app-bar app>
      <v-btn-toggle
          multiple
      >
        <v-btn v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-icon>{{item.icon}}</v-icon>
          {{item.text}}
        </v-btn>
      </v-btn-toggle>

      <v-spacer></v-spacer>

      <v-toolbar-title>{{getTitle}}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Menu',

  data: () => ({
    items: [
      {
        icon: '',
        text: 'Home',
        link: '/',
      },
      {
        icon: '',
        text: 'Test',
        link: '/test',
      },
      {
        icon: '',
        text: 'Test1',
        link: '/test1',
      },
      {
        icon: '',
        text: 'Holidays',
        link: '/holidays',
      },
    ],
  }),

  computed: {
    getTitle: function() {
      return this.$store.getters.getTitle;
    }
  }

};
</script>