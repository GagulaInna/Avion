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
            Rustic Vase Set is beautifully pale shade of terracotta. Gone are
            the usual orange tones and using traditional methods we have instead
            a beautiful pale patina reminiscent of vintage pieces which have
            been left to weather for years in the mediterranean sun.
          </p>
          <p class="rustic-dimensions">Dimensions</p>
          <div class="rustic-dimesions_container">
            <div class="rustic-dimensions_container-wrapper">
              <div class="rustic-dimensions_details">
                <p class="rustic-dimensions_height">Height</p>
                <p>110cm</p>
              </div>
              <div class="rustic-dimensions_details">
                <p class="rustic-dimensions_height">Width</p>
                <p>75cm</p>
                <div class="rustic-dimensions_line"></div>
              </div>
              <div class="rustic-dimensions_details">
                <p class="rustic-dimensions_height">Depth</p>
                <p>50cm</p>
                <div class="rustic-dimensions_line"></div>
              </div>
            </div>
            <div class="rustic-quantity_container">
              <p class="rustic-dimensions_quantitity">Quantitity</p>
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
                    @click="addToCart()"
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
      this.cart += 1;
    },
    minusToCart() {
      fetch("http://localhost:3000/header");
      this.cart -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/rustic.scss";
</style>
