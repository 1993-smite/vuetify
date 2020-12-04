<template>

  <div>
    <v-tabs
        v-model="tab" fixed-tabs>

        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
          ripple
        >
          Диалог
        </v-tab>
        <v-tab
          ripple
        >
          Таблица
        </v-tab>
        <v-tab
          ripple
        >
          Дата тайм пикер
        </v-tab>

    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-spacer></v-spacer>
          <v-row justify="center">
            <label>{{getUserName}}</label>
          </v-row>
          <v-row justify="center">
            <dUser></dUser>
          </v-row>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-spacer></v-spacer>
          <v-row justify="center">
            <Table></Table>
          </v-row>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-spacer></v-spacer>
          <v-row justify="center">
            <DTPicker></DTPicker>
          </v-row>
        </v-card>
      </v-tab-item>

    </v-tabs-items>
  </div>

</template>

<script>

  import dUser from './tests/dUser'
  import Table from './tests/Table'
  import DTPicker from './tests/DTPicker'

export default {
  name: 'Test1',

  components: {
    dUser,
    Table,
    DTPicker
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
    tab: null,
  }),

  mounted(){
    this.$store.dispatch('setPage', 'Test1');
  }
};
</script>