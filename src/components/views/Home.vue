<template>
    <p>
        Home
    </p>
</template>

<script>

export default {
  name: 'Home',

  components: {
  },

  data: () => ({
    //
  }),

  mounted(){
    this.$store.dispatch('setPage', 'Vuetify Application');
  }
};
</script>