<template>
  <v-col class="pr-5" xs12 md6 lg4>
    <v-card color="green">
      <v-card-title class="healine">
        <strong
          >{{ stock.name }}<small>(Preço: {{ formattedValue }})</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          type="number"
          :error="insufficientFunds || !Number.isInteger(quantity)"
          v-model.number="quantity"
        />
        <v-btn
          color="green"
          @click="buyStock(stock)"
          :disabled="
            insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)
          "
          >{{ insufficientFunds ? "Insuficiente" : "Comprar" }}</v-btn
        >
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

    const buyStock = (stock) => {
      const order = {
        stockId: stock.id,
        stockPrice: stock.price,
        quantity: quantity.value,
      };

      store.dispatch("buyStock", order);
      quantity.value = 0;
    };

    return {
      quantity,
      buyStock,
    };
  },

  computed: {
    funds() {
      return this.$store.getters.funds;
    },

    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },

    formattedValue() {
      return currency(this.stock.price);
    },
  },
};
</script>

<style scoped></style>
