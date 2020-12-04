<template>
  <v-data-table
    :headers="getTable.headers"
    :items="getTable.desserts"
    class="elevation-1"
    rows-per-page-items="5"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'Table',

  components: {
    
  },

  computed: {
    getTable: function(){
      return this.$store.getters.getTestDataTable;
    }
  },

  data: () => ({
      
  }),

  mounted(){
    
  }
};
</script>