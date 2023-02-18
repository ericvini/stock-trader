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
      <v-btn flat>Finalizar o dia</v-btn>
      <v-btn flat @click="showMenu = true">Salvar e Carregar</v-btn>
      <v-menu v-model="showMenu" offset-y>
        <v-list>
          <v-list-item>
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    const showMenu = ref(false);

    function saveData() {
      // Coloque aqui o código para salvar os dados
    }

    function loadData() {
      // Coloque aqui o código para carregar os dados
    }

    return {
      showMenu,
      saveData,
      loadData,
    };
  },
};
</script>

<style scoped></style>
