<template>
  <v-container fluid class="google-font text-center">
    <v-row class="my-0 justify-center">
      <v-col md="8" class="text-center">
        <p
          class="google-font gdg-h1 mb-2 grey--text text--darken-4"
          style="font-size: 220%"
        >
          Our Sponsors
        </p>
        <p class="mb-0">
          Join our growing list of sponsors who are making DevFest Mbarara 2024 happen.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="d-flex justify-center align-center flex-wrap">
        <sponsorsDataVue />
      </v-col>
    </v-row>
    
    <!-- Become a Sponsor Button -->
    <v-row justify="center" class="mt-4">
      <v-btn 
        color="black" 
        dark 
        class="d-block text-center" 
        href="#" 
        target="_blank"
        style="min-width: 200px; padding: 10px 20px;"
      >
        Become a Sponsor
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import sponsorsDataVue from '../sponsors/sponsorsData.vue';
export default {
  name: "SponsorsComponets",
  components: {
    sponsorsDataVue
  },
  data: () => ({
  }),
};
</script>
