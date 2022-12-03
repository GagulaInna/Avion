<template>
  <div class="admin">
    <div class="container">
      <form class="form">
        <label for="image">Image URL</label>
        <input type="text" id="image" v-model="cards.img" />
        <label for="title">Title</label>
        <input type="text" id="title" v-model="cards.title" />
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          v-model="cards.description"
        ></textarea>
        <button type="button" @click="addCards()">Add card</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: {
        img: "",
        title: "",
        description: "",
      },
    };
  },

  methods: {
    addCards() {
      fetch(" http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-type": "aplication/json",
        },
        body: JSON.stringify(this.cards),
      }).then((res) => console.log(res));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/admin.scss";
</style>
