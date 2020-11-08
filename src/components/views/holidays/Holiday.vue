<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        max-width="290"
      >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :value="computedDateFormattedMomentjs"
          clearable
          label="Дата"
          readonly
          v-bind="attrs"
          v-on="on"
          @click:clear="date = null"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="dateStr"
        @change="menu1 = false"
      ></v-date-picker>
    </v-menu>

    <v-text-field
      v-model="model.name"
      :counter="20"
      :rules="model.nameRules"
      label="Название"
      required
    ></v-text-field>

    <v-textarea
      v-model="model.description"
      label="Описание"
      required
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Holiday',

  props: {
    model: Object
  },

  computed: {
    getHoliday: function(){
      return this.$store.getters.getHoliday;
    },
    computedDateFormattedMomentjs () {
      return this.dateStr ? moment(this.dateStr).format('DD.MM.yyyy') : ''
    },
  },

  watch: {
    dateStr: function(val){
        console.log(val,moment(this.dateStr).toDate())
        this.model.date = moment(this.dateStr).toDate()
    }
  },

  data: function() {
      console.log(this.$props);
      return {
        valid: true,
        menu1: false,
        dateStr: '2020-11-10',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 20) || 'Название должно содержать не более 20 символов',
        ],

      };
    },

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
};
</script>