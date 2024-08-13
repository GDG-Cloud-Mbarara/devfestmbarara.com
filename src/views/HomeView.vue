<template>
  <v-main class="pa-0 ma-0">
    <!-- Hero -->
    <heroVue class="my-md-5 my-sm-5" />
    <!-- Hero -->

    <!-- Overview -->
    <overviewVue/>
    <!-- Overview -->

    <!-- Technologies -->
    <technologiesVue class="mt-10"/>
    <!-- Technologies -->

    <!-- Sponsors -->
    <homesponsors class="mt-10"/>
    <!-- Sponsors -->

  </v-main>
</template>

<script>
import heroVue from "@/components/home/hero.vue";
import overviewVue from '@/components/home/overview.vue';
import technologiesVue from '@/components/home/technologies.vue';
import homesponsors from '@/components/home/homeSponsors.vue';

export default {
  name: "HomePage",
  components: {
    heroVue,
    overviewVue,
    technologiesVue,
    homesponsors
  },
  data: () => ({
    
  }),
};
</script>
