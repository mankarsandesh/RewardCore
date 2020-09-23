<template>
  <v-app id="page">
  
      <v-container  fluid class="pa-0"  >
        <v-card class="d-flex  pa-5" flat tile>
          <h2 class="mr-auto" to="/" >Reward Core</h2>
          <v-btn
            class="ml-auto primary"
            small
            to="/createReward"
            v-if="$nuxt.$route.path == '/'"
          >
            + Add Reward</v-btn
          >
          <v-btn
            class="ml-auto primary"
            small
            to="/"
            v-if="$nuxt.$route.path == '/createReward'"
          >
            View Reward</v-btn
          >
        </v-card>
        <nuxt />
      </v-container>
    
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>
