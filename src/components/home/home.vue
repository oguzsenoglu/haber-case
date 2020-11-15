<template>
  <div>
    <div class="band">
      <div
        v-for="item in newsItems"
        :key="item.id"
        v-bind:class="{ featured: item.isFeatured }"
      >
        <router-link :to="{ name: 'detail', params: item }">
          <div class="card">
            <div
              class="img"
              v-bind:style="{
                'background-image': 'url(' + item.image + ')',
              }"
            ></div>
            <div class="text-overlay">
              <h2>{{ item.title }}</h2>
              <p>{{ item.snippet | truncate(item.isFeatured ? 300 : 130) }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Home",
  props: {},
  data() {
    return {
      newsItems: null,
    };
  },
  created() {
    fetch("http://sandbox.arabamd.com/news")
      .then((response) => response.json())
      .then((data) => (this.newsItems = data));
  },
};
</script>


<style lang="scss">
@import "../../assets/css/card.scss";

.band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}
.featured {
  grid-column: 1 / span 3;
  h2 {
    font-size: 24px !important;
  }
}
@media only screen and (max-width: 600px) {
  .band {
    grid-template-columns: 1fr;
  }
  .featured {
    grid-column: 1;
  }
}

@media only screen and (min-width: 600px) {
  .band {
    grid-template-columns: 1fr 1fr;
  }
  .featured {
    grid-column: 1 / span 2;
  }
}

@media only screen and (min-width: 992px) {
  .band {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .featured {
    grid-column: 1 / span 3;
  }
}
</style>