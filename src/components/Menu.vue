<template>
  <v-app-bar app>
      
      <MenuItem 
        v-for="(item, i) in items"
        v-bind:key="i"
        v-bind:item="item"
        />

      <v-spacer></v-spacer>

      <v-toolbar-title>{{getTitle}}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import MenuItem from './MenuItem'

function btn(text, link){
  return {
    icon: '',
    text: text,
    link: link,
    btns: []
  }
}

export default {
  name: 'Menu',

  components: {
    MenuItem
  },

  data: () => ({
    items: [
      btn('Home', '/'),
      btn('Test', '/test'),
      {
        text: "Тесты по элементам",
        btns: [
          btn('Диалог выбора', '/test1')
        ]
      },
      btn('Holidays', '/holidays'),
    ],
  }),

  computed: {
    getTitle: function() {
      return this.$store.getters.getTitle;
    }
  },

  methods: {
    checkExistSubElements: function(item){
      return item.btns.lenght > 0
    }
  }

};
</script>