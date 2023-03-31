<template>
  <div class="chair">
    <div class="container">
      <div class="chair-wrapper">
        <img
          class="chair-img"
          src="../../../../../src/assets/images/Dandy-chair.jpg"
          alt=""
        />
        <div class="chair-details">
          <h2 class="chair-title">The Dandy Chair</h2>
          <p class="chair-price">£250</p>
          <div class="line"></div>
          <p class="chair-subtitle">Product description</p>
          <p class="chair-text">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <p class="chair-dimensions">Dimensions</p>
          <div class="chair-dimesions_container">
            <div class="chair-dimensions_container-wrapper">
              <div class="chair-dimensions_details">
                <p class="chair-dimensions_height">Height</p>
                <p>110cm</p>
              </div>
              <div class="chair-dimensions_details">
                <p class="chair-dimensions_height">Width</p>
                <p>75cm</p>
                <div class="chair-dimensions_line"></div>
              </div>
              <div class="chair-dimensions_details">
                <p class="chair-dimensions_height">Depth</p>
                <p>50cm</p>
                <div class="chair-dimensions_line"></div>
              </div>
            </div>
            <div class="chair-quantity_container">
              <p class="chair-dimensions_quantity">Quantity</p>
              <div class="chair-dimensions-container_wrapper">
                <div class="chair-quantity_wrapper-number">
                  <img
                    @click="minusToCart()"
                    class="chair-quantity_minus"
                    src="../../../../assets/icons/-.svg"
                    alt=""
                  />
                  <p class="chair-quantity_number">{{ cart }}</p>
                  <img
                    @click="plusToCart()"
                    class="chair-quantity_plus"
                    src="../../../../assets/icons/+.svg"
                    alt=""
                  />
                </div>
              </div>
              <button @click="addToCart()" class="chair-quantity_btn">
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
@import "../../../../assets/css/chair.scss";
</style>
