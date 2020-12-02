<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

export default {
  name: 'Home',

  components: {
  },

  data: () => ({
    //
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),

  mounted(){
    this.$store.dispatch('setPage', 'Vuetify Application');
  }
};
</script>