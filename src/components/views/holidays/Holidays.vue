<template>
  <div>
    <v-card
      class="d-flex flex-row mb-6 justify-center"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        class="pa-2"
        outlined
        tile
      >
        <!-- list -->
        <HolidayList/>
      </v-card>
      <v-card
        class="pa-2"
        outlined
        tile
      >
        <!-- card -->
        <Holiday v-bind:model='getHoliday' />
      </v-card>
    </v-card>
  </div>
</template>

<script>

import HolidayList from './HolidayList'
import Holiday from './Holiday'

export default {
  name: 'Holidays',

  components: {
    HolidayList,
    Holiday
  },

  computed: {
    getHoliday: function(){
      return this.$store.getters.getHoliday;
    },
  },

  data: () => ({
    //
  }),

  mounted(){
    this.$store.dispatch('setPage', 'Holidays');
  }
};
</script>