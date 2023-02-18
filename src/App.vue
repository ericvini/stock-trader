<template>
  <v-app>
    <Header />
    <v-container>
        <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  components:{Header}
};
</script>

<style></style>
