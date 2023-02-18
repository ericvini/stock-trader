<template>
<v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" ></Stock>
</v-layout>
</template>

<script>
import Stock from './Stock.vue'
export default{
    name:"Stocks",
    components: {Stock},
    setup(){
        return {
            stocks:[
                {id: 1, name: 'Bradesco',price:100},
                {id: 2, name: 'XP',price:70},
                {id: 3, name: 'Santander',price:120},
                {id: 4, name: 'Bradesco',price:100},
                {id: 5, name: 'XP',price:70},
                {id: 6, name: 'Santander',price:120}
            ]
        }
    }


}
</script>

<style scoped>
</style>
