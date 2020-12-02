<template>
  <v-menu offset-y>
        
    <!-- item menu -->
    <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            v-if="checkExistSubElements"
            >
            {{item.text}}
        </v-btn>
        <v-btn
            color="primary"
            dark
            v-bind:to="item.link"
            v-else 
            >
            {{item.text}}
        </v-btn>
    </template>

    <!-- sub menu -->
    <v-list 
        v-if="checkExistSubElements">
        
        <v-list-item
            v-for="(btn, index) in subItems"
            :key="index"
            v-bind:to="btn.link"
            link
        >
            <v-list-item-title>
                {{ btn.text }}
            </v-list-item-title>
        </v-list-item>
    </v-list>

    </v-menu>
</template>

<script>
export default {
  name: 'MenuItem',

  props: {
      item: Object
  },

  data: () => ({
  }),

  computed: {
        checkExistSubElements: function(){
            return this.item.btns.length > 0
        },
        subItems: function(){
            return this.item.btns;
        }
  },

  methods: {

  },

  mounted(){
    console.log(this);
  }

};
</script>