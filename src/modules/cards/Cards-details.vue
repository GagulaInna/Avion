<template>
  <div class="cards">
    <div class="container">
      <div class="cards-container">
        <div class="cards-item" v-for="(item, index) in cards" :key="index">
          <img class="cards-item_img" :src="item.img" alt="" />
          <h3 class="cards-item_title">{{ item.title }}</h3>
          <p class="cards-item_descr">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: "",
    };
  },

  created() {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((json) => {
        this.cards = json;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/cards.scss";
</style>
