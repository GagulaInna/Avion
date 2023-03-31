<template>
  <div class="lamp">
    <div class="container">
      <div class="lamp-wrapper">
        <img
          class="lamp-img"
          src="../../../../../src/assets/images/Lucy-lamp.jpg"
          alt=""
        />
        <div class="lamp-details">
          <h2 class="lamp-title">The Lucy Lamp</h2>
          <p class="lamp-price">£399</p>
          <div class="line"></div>
          <p class="lamp-subtitle">Product description</p>
          <p class="lamp-text">
            This addition to our black and gold lighting range, luxury matt
            metal is moulded effortlessly into a flat cone-shaped pendant and
            sprayed gold on the inside for the ultimate in luxe home styling.
          </p>
          <p class="lamp-dimensions">Dimensions</p>
          <div class="lamp-dimesions_container">
            <div class="lamp-dimensions_container-wrapper">
              <div class="lamp-dimensions_details">
                <p class="lamp-dimensions_height">Height</p>
                <p>80cm</p>
              </div>
              <div class="lamp-dimensions_details">
                <p class="lamp-dimensions_height">Width</p>
                <p>40cm</p>
                <div class="lamp-dimensions_line"></div>
              </div>
              <div class="lamp-dimensions_details">
                <p class="lamp-dimensions_height">Depth</p>
                <p>-</p>
                <div class="lamp-dimensions_line"></div>
              </div>
            </div>
            <div class="lamp-quantity_container">
              <p class="lamp-dimensions_quantity">Quantitity</p>
              <div class="lamp-dimensions_container-wrapper">
                <div class="lamp-quantity_wrapper-number">
                  <img
                    @click="minusToCart()"
                    class="lamp-quantity_minus"
                    src="../../../../assets/icons/-.svg"
                    alt=""
                  />
                  <p class="lamp-quantity_number">{{ cart }}</p>
                  <img
                    @click="plusToCart()"
                    class="lamp-quantity_plus"
                    src="../../../../assets/icons/+.svg"
                    alt=""
                  />
                </div>
              </div>
              <button @click="addToCart()" class="lamp-quantity_btn">
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
@import "../../../../assets/css/lamp.scss";
</style>
