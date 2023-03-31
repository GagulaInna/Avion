<template>
  <div class="rustic">
    <div class="container">
      <div class="rustic-wrapper">
        <img
          class="rustic-img"
          src="../../../../../src/assets/images/Rustic-vase.jpg"
          alt=""
        />
        <div class="rustic-details">
          <h2 class="rustic-title">Rustic Vase Set</h2>
          <p class="rustic-price">£155</p>
          <div class="line"></div>
          <p class="rustic-subtitle">Product description</p>
          <p class="rustic-text">
            Rustic Vase Set is beautifully pale shade of terracotta.We have
            instead a beautiful pale patina reminiscent of vintage pieces which
            have been left to weather for years in the mediterranean sun.
          </p>
          <p class="rustic-dimensions">Dimensions</p>
          <div class="rustic-dimesions_container">
            <div class="rustic-dimensions_container-wrapper">
              <div class="rustic-dimensions_details">
                <p class="rustic-dimensions_height">Height</p>
                <p>30cm</p>
              </div>
              <div class="rustic-dimensions_details">
                <p class="rustic-dimensions_height">Width</p>
                <p>35cm</p>
                <div class="rustic-dimensions_line"></div>
              </div>
              <div class="rustic-dimensions_details">
                <p class="rustic-dimensions_height">Depth</p>
                <p>-</p>
                <div class="rustic-dimensions_line"></div>
              </div>
            </div>
            <div class="rustic-quantity_container">
              <p class="rustic-dimensions_quantity">Quantity</p>
              <div class="rustic-dimensions_container-wrapper">
                <div class="rustic-quantity_wrapper-number">
                  <img
                    @click="minusToCart()"
                    class="rustic-quantity_minus"
                    src="../../../../assets/icons/-.svg"
                    alt=""
                  />
                  <p class="rustic-quantity_number">{{ cart }}</p>
                  <img
                    @click="plusToCart()"
                    class="rustic-quantity_plus"
                    src="../../../../assets/icons/+.svg"
                    alt=""
                  />
                </div>
              </div>
              <button @click="addToCart()" class="rustic-quantity_btn">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cart: 0,
  }),

  methods: {
    addToCart() {
      fetch("http://localhost:3000/header");
    },
    minusToCart() {
      fetch("http://localhost:3000/header");
      this.cart -= 1;
    },
    plusToCart() {
      fetch("http://localhost:3000/header");
      this.cart += 1;
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
@import "../../../../assets/css/rustic.scss";
</style>
