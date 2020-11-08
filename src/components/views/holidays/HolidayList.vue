<template>
    <v-card
        class="mx-auto"
        max-width="400"
        tile
    >
        <v-list-item 
            v-for='(holiday, index) in getHolidays'
            v-bind:key='index'
            v-bind:class='{ checked: holiday.Active }'
            class="holiday____item"

            two-line
            v-on:click="checkHoliday(holiday)"
            >
        <v-list-item-content>
            <v-list-item-title>{{holiday.date | getDateRus}}</v-list-item-title>
            <v-list-item-subtitle>{{holiday.name}}</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>

import dt from '@/libs/dateHelper'

console.log(dt.toRu(new Date()));

export default {
    name: 'Holidays',

    components: {
    },

    computed: {
        getHolidays: function(){
            return this.$store.getters.getHolidays;
        },
    },

    filters: {
        getDateRus: (val)=> dt.toRu(val)
    },

    data: () => ({
        //
    }),

    methods: {
        checkHoliday: function(holiday){
            this.$store.dispatch('checkHoliday', holiday);
        }
    }
}
</script>

<style scoped>
    .holiday____item{
        cursor: pointer;
    }
    .holiday____item:hover{
        background-color: #6aef9f;
    }
    .checked{
        background-color: #51e05c;
    }
</style>