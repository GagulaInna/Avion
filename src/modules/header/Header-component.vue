<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-logo">
          <img
            class="header-search active"
            src="../../assets/icons/Search.svg"
            alt=""
          />
          <div class="header-cart_active"></div>
          <router-link to="/">Avion</router-link>
          <div class="header-basket_user">
            <router-link to="/basket" class="nav-menu_item-link">
              <img src="../../assets/icons/Shopping--cart.svg" alt="" />
              <p>{{ cart }}</p>
            </router-link>

            <img src="../../assets/icons/User-avatar.svg" alt="" />
          </div>
        </div>
        <div class="header-nav_menu">
          <div class="line"></div>
          <nav class="nav">
            <ul class="nav-menu">
              <li class="nav-menu_item">
                <router-link to="/about" class="nav-menu_item-link">
                  About
                </router-link>
              </li>
              <li class="nav-menu_item">
                <router-link to="/products" class="nav-menu_item-link">
                  Products
                </router-link>
              </li>
              <li class="nav-menu_item">
                <router-link to="/admin" class="nav-menu_item-link">
                  Admin
                </router-link>
              </li>
              <li class="nav-menu_item">
                <router-link to="/cards-details" class="nav-menu_item-link">
                  Cards
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    addToCart() {
      fetch("http://localhost:3000/header");
    },
  },

  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/header.scss";
</style>
