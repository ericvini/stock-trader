import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Stocks from "./components/stocks/Stocks";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/acoes", component: Stocks },
  ],
});

export default router;
