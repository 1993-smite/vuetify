<template>
    <v-row justify="center">
        <label>{{getUserName}}</label><dUser></dUser>

    </v-row>
</template>

<script>

  import dUser from './dUser.vue'

export default {
  name: 'Test1',

  components: {
    dUser
  },

  computed: {
      getTestUser: function(){
        return this.$store.getters.getTestUser;
      },
      getUserName: function(){
        return this.getTestUser?.Name || "Выбрать";
      },
  },

  data: () => ({
    //
  }),

  mounted(){
    this.$store.dispatch('setPage', 'Test1');
  }
};
</script>