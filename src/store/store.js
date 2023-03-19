import { createStore } from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';


export default createStore({
  modules: {
    stocks,
    portfolio
  }
});