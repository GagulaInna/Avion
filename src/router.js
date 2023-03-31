import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "./modules/main/Main-page.vue";
import About from "./modules/about/About-page.vue";
import Admin from "./modules/admin/Admin-page.vue";
import ProductsComponent from "./modules/main/components/products/Products-component.vue";
import CardsDetails from "./modules/cards/Cards-details.vue";
import ChairDetails from "./modules/main/components/products/Chair-details.vue";
import RusticDetails from "./modules/main/components/products/Rustic-details.vue";
import SilkyDetails from "./modules/main/components/products/Silky-details.vue";
import LampDetails from "./modules/main/components/products/Lamp-details.vue";
import Basket from "./modules/basket/Basket-details.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/admin/",
      name: "admin",
      component: Admin,
    },
    {
      path: "/products/",
      name: "products",
      component: ProductsComponent,
    },
    {
      path: "/cards-details/",
      name: "cards-details",
      component: CardsDetails,
    },
    {
      path: "/chair-details/",
      name: "chair-details",
      component: ChairDetails,
    },
    {
      path: "/rustic-details/",
      name: "rustic-details",
      component: RusticDetails,
    },
    {
      path: "/silky-details/",
      name: "silky-details",
      component: SilkyDetails,
    },
    {
      path: "/lamp-details/",
      name: "lamp-details",
      component: LampDetails,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
  ],
});
