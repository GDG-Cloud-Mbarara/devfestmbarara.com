<template>
    <v-container class="sponsor-page" fluid>
      <v-row>
        <v-col cols="12" class="text-center mt-8">
          <v-img 
            max-width="300" 
            :src="require('@/assets/img/df24mbralogo.png')" 
            alt="DevFest Mbarara 2024"
          ></v-img>
          <h1 class="google-font display-2 my-6">Why Sponsor DevFest Mbarara 2024?</h1>
          <p class="subtitle-1">
            Your sponsorship will help keep DevFest Mbarara affordable and accessible to a wide and diverse audience.
          </p>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="google-font headline mb-4">Why should you sponsor DevFest Mbarara?</h2>
          <p class="body-1">
            Here are just some of the benefits of being a sponsor:
          </p>
          <ul>
            <li>Visibility to potential new customers and/or employees</li>
            <li>Elevating and establishing your corporate identity within the community</li>
            <li>Present your services or products to the expected 1000 attendees</li>
            <li>Enhance your company's reputation by supporting and investing in the open-source community</li>
          </ul>
        </v-col>
  
        <v-col cols="12" md="6">
          <h2 class="google-font headline mb-4">Sponsorship Packages</h2>
          <p>Sign up early to become one of our launch sponsors with extra exposure!</p>
          <v-card outlined class="my-4">
            <v-card-title class="google-font">Bronze</v-card-title>
            <v-card-subtitle>$200</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>Distribute swag</li>
                <li>On sponsors page</li>
                <li>5 Free tickets</li>
              </ul>
            </v-card-text>
          </v-card>
  
          <v-card outlined class="my-4">
            <v-card-title class="google-font">Silver</v-card-title>
            <v-card-subtitle>$500</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>Bronze package</li>
                <li>On swag shirt</li>
                <li>In website footer</li>
                <li>1 Pull-up banner</li>
                <li>1 announcement</li>
                <li>10 Free tickets</li>
              </ul>
            </v-card-text>
          </v-card>
  
          <v-card outlined class="my-4">
            <v-card-title class="google-font">Gold</v-card-title>
            <v-card-subtitle>$1,000</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>Silver package</li>
                <li>2 announcements</li>
                <li>15 Free tickets</li>
              </ul>
            </v-card-text>
          </v-card>
  
          <v-card outlined class="my-4">
            <v-card-title class="google-font">Platinum</v-card-title>
            <v-card-subtitle>$1,500</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>Gold package</li>
                <li>1 tutorial</li>
                <li>3 announcements</li>
                <li>3 Pull-up banners</li>
                <li>Joint Press Release</li>
                <li>Exhibition space</li>
                <li>10-minute spot</li>
                <li>20 Free tickets</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12">
          <h2 class="google-font headline mb-4">Expo Packages</h2>
          <v-card outlined class="my-4">
            <v-card-title class="google-font">Expo 1</v-card-title>
            <v-card-subtitle>UGX 250,000</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>Desk in expo hall</li>
                <li>Pull-up banner</li>
                <li>1 Free ticket</li>
              </ul>
            </v-card-text>
          </v-card>
  
          <v-card outlined class="my-4">
            <v-card-title class="google-font">Expo 2</v-card-title>
            <v-card-subtitle>UGX 500,000</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>Double the space of Expo 1</li>
                <li>Logo on website</li>
                <li>Workshop session about products</li>
                <li>Free participation in job fair</li>
                <li>2 Free tickets</li>
              </ul>
            </v-card-text>
          </v-card>
  
          <v-card outlined class="my-4">
            <v-card-title class="google-font">Expo 3</v-card-title>
            <v-card-subtitle>UGX 1,000,000</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>3 times the space of Expo 1</li>
                <li>Branding beyond the expo hall</li>
                <li>Logo on website</li>
                <li>Workshop session about products</li>
                <li>Free participation in job fair</li>
                <li>3 Free tickets</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" class="text-center mt-8">
          <v-btn
            color="black"
            dark
            rounded
            href="#"
            target="_blank"
            class="my-4"
          >
            View Our Prospectus
          </v-btn>
          <h3 class="google-font headline mb-4">Contact Us</h3>
          <p>Interested in sponsoring? Reach out to us via gdgcloudmbarara@gmail.com or contact us below:</p>
          <v-form>
            <v-text-field label="Your Name" outlined></v-text-field>
            <v-text-field label="Email" outlined></v-text-field>
            <v-textarea label="Message" outlined></v-textarea>
            <v-btn color="black" dark>Send Message</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      // Add any dynamic data if required
    }),
  };
  </script>
  
  <style scoped>
  .sponsor-page {
    background-color: #f9f9f9;
    padding: 20px;
  }
  
  .google-font {
    font-family: 'Google Sans', sans-serif;
  }
  </style>
  