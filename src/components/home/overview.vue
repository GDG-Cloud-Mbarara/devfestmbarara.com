<template>
  <v-container fluid class="google-font" >
    <v-row justify="center" align="center" class="px-2" >
      <v-col md="12" class="pa-md-10 pa-5" style="background-color: white; border-radius: 15px">
        <p
          class="google-font gdg-h1 mb-2 grey--text text--darken-4"
          style="font-size: 220%"
        >
          What to Expect
        </p>
        <p>
          DevFest Mbarara 2024 will bring together local developers to expand 
          opportunities and elevate the knowledge of the latest Google developer 
          tools and explore how to use Google technologies to generate social and 
          economic impact with carefully selected tech talks, the best industry 
          experts presenting the exciting topics, and a world-class conference 
          experience. Be a part of this unique community moment in 2024, 
          and join the DevFest movement happening over one epic weekend.
        </p>
        <v-container fluid class="px-0">
          <v-row>
            <v-col
              md="6"
              sm="6"
              cols="12"
              v-for="(item, index) in devfestInfo.what_to_expect"
              :key="index"
            >
              <div
                class="pa-md-6 pa-4"
                style="background-color: #E8F1FB;border-radius: 12px;"
              >
                <p style="font-size: 20px; font-weight: 600" class="mt-4">
                  {{ item.label }}
                </p>
                <p>{{ item.value }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import devfestJSON from "@/assets/data/devfests.json";
export default {
  name: "OverviewComponent",
  data: () => ({
    devfestInfo: devfestJSON,
  }),
};
</script>

<style>
</style>