<template>
  <div class="detail" v-if="item">
    <a class="button" style="margin-bottom: 15px" @click="$router.go(-1)"
      >Geri</a
    >
    <div>
      <img v-bind:src="item.image" />
    </div>

    <div class="content">
      <h1>{{ item.title }}</h1>
      <p v-html="item.snippet"></p>
      <p v-html="item.body"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  data() {
    return {
      item: null,
    };
  },
  created() {
    fetch("http://sandbox.arabamd.com/news/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.item = data));
  },
};
</script>

<style lang="scss">
.detail {
  .content {
    text-align: left;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>