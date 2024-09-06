<template>
  <v-container fluid class="my-0">
    <!-- Row 1 -->
    <v-row justify="center" align="center">
      <v-col md="12">
        <v-img
          max-height="320"
          style="border-radius: 15px"
          :src="require('@/assets/img/cover.png')"
        ></v-img>
      </v-col>
    </v-row>
    <!-- Row 1 -->

    <!-- Row 2 -->
    <v-row justify="center" align="center" class="my-md-10 my-4">
      <v-col md="6" cols="12" order-md="1" order-sm="2" class="py-md-10">
        <p
          class="google-font gdg-h1 mb-4 grey--text text--darken-4"
          style="font-size: 200%; line-height: 40px"
        >
          DevFest Mbarara 2024 by <br />
          <span style="color: #4285f4">{{ communityInfo.community_name }}</span>
        </p>
        <p class="google-font mt-3 mb-0" style="font-size: 19px">
          <v-icon>mdi-calendar-month</v-icon> {{ devfestInfo.date }}
        </p>
        <p class="google-font mt-0" style="font-size: 19px">
          <v-icon>mdi-clock-time-eight-outline</v-icon> {{ devfestInfo.time }}
        </p>
        <p
          class="google-font text--secondary"
          style="font-weight: 500; font-size: 18px"
        >
          {{ devfestInfo.desc.short }}
        </p>
        <v-btn
          dark
          depressed
          rounded
          color="black"
          :href="devfestInfo.registration.link"
          v-if="devfestInfo.registration.status == 1"
          target="_blank"
          >Apply to Speak
        </v-btn>
      </v-col>

      <v-col md="6" cols="12" order-md="2" order-sm="1" class="google-font">
  <v-container fluid class="px-0">
    <v-row justify="center" align="center">
      <v-col md="6" cols="12" class="pa-2">
        <v-img
          :src="require('@/assets/img/df23imgs/df23img1.png')"
          class="image-style 1"
        ></v-img>
      </v-col>
      <v-col md="6" cols="12" class="pa-2">
        <v-img
          :src="require('@/assets/img/df23imgs/df23img2.png')"
          class="image-style second-image"
        ></v-img>
      </v-col>
      <v-col md="6" cols="12" class="pa-2">
        <v-img
          :src="require('@/assets/img/df23imgs/df23img3.png')"
          class="image-style 3"
        ></v-img>
      </v-col>
      <v-col md="6" cols="12" class="pa-2">
        <v-img
          :src="require('@/assets/img/df23imgs/df23img4.png')"
          class="image-style fourth-image"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</v-col>

      
    </v-row>
    <!-- Row 2 -->

          <!-- Stats Section -->
    <v-col md="12" cols="12" class="text-center">
        <v-row justify="center" align="center">
          <v-col md="2" sm="4" xs="6">
            <v-icon size="50" color="#4285f4">mdi-calendar</v-icon>
            <p class="mb-0" style="font-size: 200%; font-weight: 900; color: #4285f4">1</p>
            <p>Day</p>
          </v-col>
          <v-col md="2" sm="4" xs="6">
            <v-icon size="50" color="#4285f4">mdi-chart-line</v-icon>
            <p class="mb-0" style="font-size: 200%; font-weight: 900; color: #4285f4">4</p>
            <p>Tracks</p>
          </v-col>
          <v-col md="2" sm="4" xs="6">
            <v-icon size="50" color="#4285f4">mdi-timer</v-icon>
            <p class="mb-0" style="font-size: 200%; font-weight: 900; color: #4285f4">10</p>
            <p>Sessions</p>
          </v-col>
          <v-col md="2" sm="4" xs="6">
            <v-icon size="50" color="#4285f4">mdi-school</v-icon>
            <p class="mb-0" style="font-size: 200%; font-weight: 900; color: #4285f4">12</p>
            <p>Workshops</p>
          </v-col>
          <v-col md="2" sm="4" xs="6">
            <v-icon size="50" color="#4285f4">mdi-microphone</v-icon>
            <p class="mb-0" style="font-size: 200%; font-weight: 900; color: #4285f4">25</p>
            <p>Speakers</p>
          </v-col>
          <v-col md="2" sm="4" xs="6">
            <v-icon size="50" color="#4285f4">mdi-account-group</v-icon>
            <p class="mb-0" style="font-size: 200%; font-weight: 900; color: #4285f4">500</p>
            <p>Participants</p>
          </v-col>
        </v-row>
      </v-col>

  </v-container>
</template>

<script>
import devfestJSON from "@/assets/data/devfests.json";
import communityJSON from "@/assets/data/community.json";
export default {
  name: "HeroComponent",
  data: () => ({
    loading: true,
    communityInfo: communityJSON,
    devfestInfo: devfestJSON,
  }),
  methods: {},
};
</script>

<style>
.image-style {
  border-radius: 15px;
  transform: rotate(-2deg);
  border: 5px solid transparent;
}

.image-style:nth-child(1) {
  border-color: #f4b400; /* yellow */
  transform: rotate(-5deg);
}

.image-style:nth-child(2) {
  border-color: #4285f4; /* blue */
  transform: rotate(3deg);
}

.image-style:nth-child(3) {
  border-color: #0f9d58; /* green */
  transform: rotate(-3deg);
}

.image-style:nth-child(4) {
  border-color: #db4437; /* red */
  transform: rotate(5deg);
}
</style>
