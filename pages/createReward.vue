<template>
  <v-row >
    <v-col class="mb-8" lg="3" xs="6" sm="6">
      <!-- Create Reward -->
     <CreateReward/>
    </v-col>
    <v-col class="mb-8" lg="5" xs="6" sm="6">
      <!-- Image Collection -->
    <ImageCollection/>
    <!-- System Event  -->
    <SystemEvent/>
    </v-col>
    <v-col class="mb-8" lg="3" xs="6" sm="6">
      <v-card flat class="banner-2 justify-center text-center" max-width="344">
        <h2>View Reward Card</h2>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CreateReward from '~/components/CreateReward';
import ImageCollection from '~/components/ImageCollection';
import SystemEvent from '~/components/SystemEvent';

export default {
  components : {
    SystemEvent,
    CreateReward,
    ImageCollection
  },
  data() {
    return {
     
    }
  },
}
</script>


