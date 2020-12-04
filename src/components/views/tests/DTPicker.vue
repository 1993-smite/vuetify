<template>
    <DatetimePicker 
        dateFormat="dd.MM.yyyy"
        label="Выберите дату и время" 
        okText="Выбрать"
        clearText="Очистить"
        v-bind:datePickerProps="datePickerProps"
        v-bind:timePickerProps="timePickerProps"
        v-model="model"
    > 
      <v-icon
        slot="dateIcon"
        color="green lighten-1"
      >
        mdi-calendar-range
      </v-icon>
      <v-icon
        slot="timeIcon"
        color="green lighten-1"
      >
        mdi-calendar-clock
      </v-icon>
    </DatetimePicker>
</template>

<script>
import DatetimePicker from './DatetimePicker'

export default {
  name: 'DTPicker',

  components: {
    DatetimePicker
  },

  computed: {
    
  },

  data: () => ({
     model: new Date(),
     datePickerProps: {
       color:"green lighten-1"
     },
     timePickerProps: {
       color:"green lighten-1"
     }
  }),

  mounted(){
  }
};
</script>