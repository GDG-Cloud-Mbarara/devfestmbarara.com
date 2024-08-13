<template>
  <v-container fluid class="google-font pa-4">
    <v-row justify="center" align="start">
      <v-col cols="12" md="10" lg="8">
        <h3 class="text-h5 font-weight-bold mb-4">
          Learn and Connect at
        </h3>
        <h1 class="text-h4 font-weight-bold mb-4">
          DevFest Mbarara 2024
        </h1>
        <p class="text-subtitle-1 mb-6">
          Create memories by enjoying an unparalleled experience for developers, tech
          enthusiasts, and innovators.
        </p>
        <div class="carousel-wrapper">
          <div
            class="carousel"
            :style="{ transform: `translateX(-${scrollPosition}px)` }"
            @transitionend="resetPosition"
          >
            <div
              class="carousel-item"
              v-for="(image, i) in duplicatedImages"
              :key="i"
            >
              <v-img
                :src="require(`@/assets/img/df23imgs/${image}`)"
                height="300"
                style="border-radius: 12px"
                cover
              ></v-img>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DevFestLanding',
  data: () => ({
    images: [
      'df23img1.png',
      'df23img2.png',
      'df23img3.png',
      'df23img4.png',
      'df23img5.png',
      'df23img6.png',
      'df23img7.png',
      // Add more image filenames here
    ],
    scrollPosition: 0,
    autoScroll: null,
  }),
  computed: {
    duplicatedImages() {
      return [...this.images, ...this.images];
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    clearInterval(this.autoScroll);
  },
  methods: {
    startAutoScroll() {
      const container = this.$el.querySelector('.carousel');
      const totalWidth = container.scrollWidth / 2;
      this.autoScroll = setInterval(() => {
        if (this.scrollPosition >= totalWidth) {
          this.scrollPosition = 0;
          container.style.transition = 'none'; // Disable transition to avoid jump
        } else {
          this.scrollPosition += 1;
          container.style.transition = 'transform 0.1s linear';
        }
      }, 16); // Adjust speed as needed
    },
    resetPosition() {
      const container = this.$el.querySelector('.carousel');
      if (this.scrollPosition === 0) {
        container.style.transition = 'none';
      }
    },
  },
};
</script>

<style scoped>
.google-font {
  font-family: 'Google Sans', Arial, sans-serif;
}
.carousel-wrapper {
  white-space: nowrap;
  position: relative;
  width: 100%;
  height: 300px;
}
.carousel {
  display: flex;
}
.carousel-item {
  min-width: 300px;
  margin-right: 10px;
}
</style>
