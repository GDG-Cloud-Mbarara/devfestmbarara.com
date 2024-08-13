<template>
    <v-container fluid class="pa-4 d-flex align-center" style="background-color: #fef7e4; height: 100vh;">
      <v-row no-gutters>
        <!-- <v-row justify="center" align="start" class="community-section"> -->
        <v-col cols="12" md="6" lg="5" class="text-section">
          <h3 class="text-h5 mb-2">
            Join the community
          </h3>
          <h1 class="text-h4 font-weight-bold mb-4">
            Don't miss a thing. Get notified first!
          </h1>
          <v-text-field
            label="Your Name"
            outlined
            dense
            class="mb-4"
          ></v-text-field>
          <v-text-field
            label="Email Address"
            outlined
            dense
            class="mb-4"
          ></v-text-field>
          <v-btn color="black" dark>
            Submit
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <div class="d-flex flex-column align-center">
            <div class="d-flex mb-4">
              <v-img
                :src="require('@/assets/img/df23imgs/df23img1.png')"
                height="200"
                width="150"
                class="mr-3"
                style="border-radius: 12px;"
              />
              <v-img
                :src="require('@/assets/img/df23imgs/df23img2.png')"
                height="200"
                width="150"
                class="ml-3"
                style="border-radius: 12px;"
              />
            </div>
            <div class="d-flex mt-4">
              <v-img
                :src="require('@/assets/img/df23imgs/df23img3.png')"
                height="200"
                width="150"
                class="mr-3"
                style="border-radius: 12px;"
              />
              <v-img
                :src="require('@/assets/img/df23imgs/df23img4.png')"
                height="200"
                width="150"
                class="ml-3"
                style="border-radius: 12px;"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'JoinCommunity',
  };
  </script>
  
  <style scoped>
  .pl-12 {
    padding-left: 96px;
  }
  </style>