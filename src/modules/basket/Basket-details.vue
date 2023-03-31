<template>
  <div class="basket">
    <div class="container">
      <div class="basket-items">
        <div
          class="basket-item"
          v-for="(item, index) in getBasket"
          :key="index"
        >
          <img :src="item.image" alt="" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/basket.scss";
</style>
