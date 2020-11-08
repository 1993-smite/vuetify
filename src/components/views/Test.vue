<template>
    <p>
        Test
    </p>
</template>

<script>

export default {
  name: 'Test',

  components: {
  },

  data: () => ({
    //
  }),

  mounted(){
    this.$store.dispatch('setPage', 'Test');
  }
};
</script>