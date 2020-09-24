<template>
  <v-row  >
    <v-col class="pa-2" lg="3" xs="6" sm="6">
      <!-- Create Reward -->
      <CreateReward />
    </v-col>
    <v-col lg="6" xs="6" sm="6" class="pa-1">
      <!-- Image Collection -->
      <ImageCollection />
      <!-- System Event  -->
      <SystemEvent />
    </v-col>
    <v-col  lg="3" xs="6" sm="6" class="pa-1">
      <ViewRewardCard />
    </v-col>
  </v-row>
</template>

<script>
import CreateReward from '~/components/CreateReward'
import ImageCollection from '~/components/ImageCollection'
import SystemEvent from '~/components/SystemEvent'
import ViewRewardCard from '~/components/ViewRewardCard'

export default {
  components: {
    ViewRewardCard,
    SystemEvent,
    CreateReward,
    ImageCollection,
  },
  data() {
    return {}
  },
}
</script>
