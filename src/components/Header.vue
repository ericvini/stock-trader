<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfólio</v-btn>
      <v-btn flat to="/acoes">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar o dia</v-btn>
      <v-btn flat @click="showMenu = true">Salvar e Carregar</v-btn>
      <v-menu v-model="showMenu" offset-y>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="registerData">Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="loadDataLocal">Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-row class="align-center">
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: {{ formattedValue }}
        </span>
      </v-row>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { currency } from "./../utils/currency";
import { ref } from "vue";
import { mapActions } from "vuex";
import axios from 'axios';
import VueAxios from 'vue-axios';

export default {
  name: "Header",
  setup() {
    const showMenu = ref(false);

    return {
      showMenu,
    };
  },

  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    formattedValue() {
      return currency(this.funds);
    },
  },

  methods: {
    ...mapActions(["randomizeStocks","loadData","saveData"]),
    endDay() {
      this.randomizeStocks();
    },

    registerData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.saveData();
      /* this.$http.put("data.json", { funds, stockPortfolio, stocks }); */
    },

    loadDataLocal(){
      this.loadData();
    }
  },
  

};


</script>

<style scoped></style>
