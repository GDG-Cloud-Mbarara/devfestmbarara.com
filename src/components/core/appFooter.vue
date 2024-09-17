<template>
  <v-footer class="ma-0" height="auto" color="#C3ECF6">
    <v-container fluid>
      <v-row justify="center" align="center" class="pt-5 px-4">
        <v-col cols="12" md="5">
          <v-img
            max-width="200"
            :src="require('@/assets/img/df24mbralogo.png')"
            alt="DevFest Mbarara"
          ></v-img><br>
          <p class="mb-4" style="font-size: 14px;">
            DevFest Mbarara is an annual conference for tech enthusiasts from novices to
            industry leaders organized by GDG Cloud Mbarara and WTM Mbarara.
            The event features sessions on various topics, including Mental
            Health, Mobile Development, Design, Web Development, Cloud Computing,
            DevOps, Machine Learning, AR/VR, and more.
          </p>
        </v-col>

        <v-col cols="12" md="3" class="text-md-right">
          <h3 class="text-h6 font-weight-bold mb-3 text-left" style="font-size: 16px;">Useful Links</h3>
          <div class="d-flex flex-column align-start" style="font-size: 14px;">
            <a href="https://policies.google.com/privacy" class="mb-2 text-decoration-line">Privacy Policy</a>
            <a href="https://developers.google.com/community-guidelines" class="mb-2 text-decoration-line">Community Guidelines</a>
            <a href="https://developers.google.com/community/gdg" class="mb-2 text-decoration-line">The GDG Program</a>
            <a href="https://www.womentechmakers.com/" class="mb-2 text-decoration-line">The WTM Program</a>
            <a href="https://gdg.community.dev/gdg-cloud-mbarara/" class="mb-2 text-decoration-line">Join the Community</a>
          </div>
        </v-col>

        <v-col cols="12" md="3" class="text-md-right">
          <h3 class="text-h6 font-weight-bold mb-3 text-left" style="font-size: 16px;">Contact Us</h3>
          <div class="d-flex flex-column align-start">
            <v-row no-gutters align="center" class="mb-2" style="font-size: 14px;">
              <v-col cols="auto">
                <v-icon left color="#1e1e1e">mdi-map-marker</v-icon>
              </v-col>
              <v-col>
                <span>TIV, Mbarara, Uganda</span>
              </v-col>
            </v-row>
            <v-row no-gutters align="center" class="mb-2" style="font-size: 14px;">
              <v-col cols="auto">
                <v-icon left color="#1e1e1e">mdi-phone</v-icon>
              </v-col>
              <v-col>
                <span>+256 784 912769</span>
              </v-col>
            </v-row>
            <v-row no-gutters align="center" class="mb-4" style="font-size: 14px;">
              <v-col cols="auto">
                <v-icon left color="#1e1e1e">mdi-email</v-icon>
              </v-col>
              <v-col>
                <span><a href="mailto:gdgcloudmbarara@gmail.com">gdgcloudmbarara@gmail.com</a></span>
              </v-col>
            </v-row>
            <p class="mb-2" style="font-size: 14px;">Follow us on:</p>
            <div class="d-flex align-center">
              <v-btn v-for="social in socialLinks" :key="social.icon" :href="social.link" target="_blank" icon class="mr-2" style="padding: 0;">
                <v-icon :color="social.color">{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-4">
        <v-col cols="12" class="text-center">
          <p class="caption" style="font-size: 14px;">2024 &copy; GDG Cloud Mbarara. All Rights Reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      socialLinks: [
        { icon: 'mdi-twitter', link: 'https://x.com/GDGCloudMbarara', color: '#1e1e1e' },
        { icon: 'mdi-instagram', link: 'https://instagram.com/GDGCloudMbarara', color: '#1e1e1e' },
        { icon: 'mdi-linkedin', link: 'https://linkedin.com/company/GDGCloudMbarara', color: '#1e1e1e' },
        { icon: 'mdi-youtube', link: 'https://youtube.com/@GDGCloudMbarara', color: '#1e1e1e' },
        { icon: 'mdi-github', link: 'https://github.com/GDG-Cloud-Mbarara', color: '#1e1e1e' }
      ]
    }
  }
};
</script>

<style scoped>
.v-footer {
  background-color: #C3ECF6 !important;
}
</style>
