<template>
  <div class="silky">
    <div class="container">
      <div class="silky-wrapper">
        <img
          class="silky-img"
          src="../../../../../src/assets/images/Silky-vase.jpg"
          alt=""
        />
        <div class="silky-details">
          <h2 class="silky-title">The Silky Vase</h2>
          <p class="silky-price">£125</p>
          <div class="line"></div>
          <p class="silky-subtitle">Product description</p>
          <p class="silky-text">
            These distressed gray ceramic vases are painted by hand.Work as the
            perfect accent to your living room, bedroom, and any theme.
            <br />
            <br />
          </p>
          <p class="silky-dimensions">Dimensions</p>
          <div class="silky-dimesions_container">
            <div class="silky-dimensions_container-wrapper">
              <div class="silky-dimensions_details">
                <p class="silky-dimensions_height">Height</p>
                <p>35cm</p>
              </div>
              <div class="silky-dimensions_details">
                <p class="silky-dimensions_height">Width</p>
                <p>15cm</p>
                <div class="silky-dimensions_line"></div>
              </div>
              <div class="silky-dimensions_details">
                <p class="silky-dimensions_height">Depth</p>
                <p>-</p>
                <div class="silky-dimensions_line"></div>
              </div>
            </div>
            <div class="silky-quantity_container">
              <p class="silky-dimensions_quantity">Quantity</p>
              <div class="silky-dimensions_container-wrapper">
                <div class="silky-quantity_wrapper-number">
                  <img
                    @click="minusToCart()"
                    class="silky-quantity_minus"
                    src="../../../../assets/icons/-.svg"
                    alt=""
                  />
                  <p class="silky-quantity_number">{{ cart }}</p>
                  <img
                    @click="plusToCart()"
                    class="silky-quantity_plus"
                    src="../../../../assets/icons/+.svg"
                    alt=""
                  />
                </div>
              </div>
              <button @click="addToCart()" class="silky-quantity_btn">
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
@import "../../../../assets/css/silky.scss";
</style>
