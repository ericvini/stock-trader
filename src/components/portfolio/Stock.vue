<template>
  <v-col class="pr-5" xs12 md6 lg4>
    <v-card color="green">
      <v-card-title class="healine">
        <strong
          >{{ stock.name }}<small>(Preço: {{ formattedValue}} | Qtde: {{ stock.quantity }} )</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity" :error="insufficientQuantity || !Number.isInteger(quantity)" />
        <v-btn color="blue darken-3 white--text" @click="sellStock(stock)" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">{{insufficientQuantity ? 'Insuficiente':'Vender' }}</v-btn>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { currency } from "./../../utils/currency";

export default {
  name: "Stock",
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const quantity = ref(0);
    const sellStock = (stock) => {
        const order ={
            stockId:stock.id,
            stockPrice:stock.price,
            quantity:quantity.value
        }

        store.dispatch('sellStock',order);
        quantity.value = 0;
       
    };

    return {
      quantity,
      sellStock
    };
  },

  computed: {
    insufficientQuantity(){
        return this.quantity > this.stock.quantity;
    },

    formattedValue() {
      return currency(this.stock.price);
    },
  }

};
</script>

<style scoped></style>
