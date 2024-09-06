<template>
  <v-app-bar
    elevate-on-scroll
    fixed
    app
    elevation="3"
    class="mt-md-4 mt-sm-4 mx-sm-6 mx-md-auto"
    style="
      background-color: white;
      max-width: 1024px !important;
      margin-left: auto;
      margin-right: auto;
      border-radius: 15px;
      -webkit-backdrop-filter: saturate(100%) blur(5px);
      backdrop-filter: saturate(100%) blur(10px);
    "
  >
    <v-app-bar-nav-icon
      class="d-md-none d-lg-none"
      @click="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="mr-4 px-0 google-font">
      <router-link
        to="/"
        class="text--secondary"
        style="text-decoration: none; font-size: 100%"
      >
        <v-img
          max-width="150"
          :src="require('@/assets/img/df24mbralogosmall.png')"
          alt="DevFest Mbarara"
        ></v-img>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <div class="hidden-sm-and-down google-font d-flex align-center">
      <template v-for="(page, index) in pages">
        <v-btn
          text
          :key="index"
          class="mx-0"
          color="black"
          :to="page.path"
          v-if="page.visible == 1"
          style="text-transform: none; font-size: 14px; font-weight: 500"
        >{{ page.name }}</v-btn>
      </template>
    </div> -->

    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down google-font d-flex">
      <v-btn
        color="black"
        dark
        rounded
        class="mr-2"
        :href="devfestInfo.registration.link"
        target="_blank"
        v-if="devfestInfo.registration.status == 1"
        style="text-transform: none; font-size: 14px; font-weight: 500;"
      >
        Apply to Speak
      </v-btn>
      <v-btn
        color="black"
        dark
        rounded
        href="#"
        target="_blank"
        style="text-transform: none; font-size: 14px; font-weight: 500;"
      >
        Sponsor Us
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import devfestJSON from "@/assets/data/devfests.json";
import navbarJSON from "@/assets/data/navbar.json";

export default {
  data: () => ({
    pages: navbarJSON,
    devfestInfo: devfestJSON,
  }),
  methods: {
    toggleDrawer() {
      this.$store.commit("TOGGLE_DRAWER");
    },
  },
};
</script>

<style scoped>
.v-btn {
  letter-spacing: normal;
}
</style>