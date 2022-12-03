<template>
  <div class="hero3">
    <div class="container hero3-container">
      <div class="hero3-wrapper">
        <div class="hero3-products">
          <div class="hero3-products_card">
            <router-link to="/chair-details" class="products_card-link">
              <img
                class="hero3-products_card-img"
                src="../../../../assets/images/Dandy-chair.jpg"
                alt=""
              />
              <h3 class="hero3-products_title">The Dandy chair</h3>
              <p class="hero-products_price">£250</p>
            </router-link>
          </div>
          <div class="hero3-products_card">
            <router-link to="/rustic-details" class="products_card-link">
              <img
                class="hero3-products_card-img"
                src="../../../../assets/images/Rustic-vase.jpg"
                alt=""
              />
              <h3 class="hero3-products_title">Rustic Vase Set</h3>
              <p class="hero-products_price">£155</p>
            </router-link>
          </div>
          <div class="hero3-products_card">
            <router-link to="/silky-details" class="products_card-link">
              <img
                class="hero3-products_card-img"
                src="../../../../assets/images/Silky-vase.jpg"
                alt=""
              />
              <h3 class="hero3-products_title">The Silky Vase</h3>
              <p class="hero-products_price">£125</p>
            </router-link>
          </div>
          <div class="hero3-products_card">
            <router-link to="/lamp-details" class="products_card-link">
              <img
                class="hero3-products_card-img"
                src="../../../../assets/images/Lucy-lamp.jpg"
                alt=""
              />
              <h3 class="hero3-products_title">The Lucy Lamp</h3>
              <p class="hero-products_price">£399</p>
            </router-link>
          </div>
        </div>
        <div class="hero3-products_btn">
          <button class="hero3-btn">View collection</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../../assets/css/products.scss";
</style>
