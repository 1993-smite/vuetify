<template>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Выбрать
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Выберите пользователя</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="userId"
            column
          >
            <v-radio
                v-for="(user, index) in getUsers"
                v-bind:key="index"
                v-bind:label="user.Name"
                v-bind:value="user.Id"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: 'dUser',

    props: {
        model: Object
    },

    computed: {
        getTestUser: function(){
          return this.$store.getters.getTestUser;
        },
        getUserName: function(){
          return this.getTestUser?.Name || "Выбрать";
        },
        getUsers: function(){
          return this.$store.getters.getTestUsers;
        } 
    },

    components: {
    },

    watch: {
        userId: function(value){
            let usr = this.getUsers.find(x=>x.Id == value);
            this.$store.dispatch('setTestUser', usr);
        }
    },

    data: function() {
        console.log(this);

        let initUserId = this.getTestUser?.Id || 0;

        return {
                    //
            dialog: false,
            userId: initUserId,
        };
    },

    mounted(){
        this.$store.dispatch('setPage', 'Test1');
    }
};
</script>