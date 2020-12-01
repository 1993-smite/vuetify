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
          {{getUserName}}
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
                v-for="(user, index) in users"
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
    },

    components: {
    },

    watch: {
        userId: function(value){
            let usr = this.users.find(x=>x.Id == value);
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
            users : [
                {
                    Id: 1,
                    Name: "Ленин Владимир Ильич"
                },
                {
                    Id: 2,
                    Name: "Сталин Йосиф Вессарионович"
                },
                {
                    Id: 3,
                    Name: "Петр I"
                },
                {
                    Id: 4,
                    Name: "Александр I"
                },
                {
                    Id: 5,
                    Name: "Николай I"
                },
                {
                    Id: 6,
                    Name: "Невский Александр"
                },
                {
                    Id: 7,
                    Name: "Донской Дмитрий"
                },
                {
                    Id: 8,
                    Name: "Чингиз Хан"
                },
                {
                    Id: 9,
                    Name: "Наполеон"
                },
                {
                    Id: 10,
                    Name: "Цезарь"
                }
            ]
        };
    },

    mounted(){
        this.$store.dispatch('setPage', 'Test1');
    }
};
</script>