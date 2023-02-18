<template>
  <v-col class="pr-5" xs12 md6 lg4>
    <v-card color="green">
      <v-card-title class="healine">
        <strong
          >{{ stock.name }}<small>(Preço: {{ stock.price }})</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
        <v-btn color="green" @click="buyStock(stock)" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Comprar</v-btn>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Stock",
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const quantity = ref(0);

    const buyStock = (stock) => {
        const order ={
            stockId:stock.id,
            stockPrice:stock.price,
            quantity:quantity.value
        }
        quantity.value = 0;
        console.log(order);
    };

    return {
      quantity,
      buyStock
    };
  },
};
</script>

<style scoped></style>
