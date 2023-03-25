import { createStore } from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import actions from'./actions';


export default createStore({
  actions,
  modules: {
    stocks,
    portfolio,
  }
});