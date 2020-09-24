<template>
  <v-simple-table class="pa-5">
    <template v-slot:default>
      <thead>
        <tr class="header">
          <th width="10%" class="text-left">Image</th>
          <th width="50%" class="text-left">Title</th>
          <th width="10%" class="text-left">Prize</th>
          <th width="10%" class="text-left">ExP</th>
          <th width="10%" class="text-left">Status</th>
          <th width="10%" class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rewardData" :key="item.reward_id" class="record">
          <td><img :src="item.media.url" width="20px" /></td>
          <td>{{ item.title }}</td>
          <td>{{ item.prize }}</td>
          <td>{{ item.experience }}</td>
          <td>{{ item.active }}</td>
          <td>
            <v-btn>Edit</v-btn>
            <v-btn>Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import config from '~/config/config.global'

export default {
  data() {
    return {
      rewardData: [],
    }
  },
  created() {
    this.viewAllReward()
  },
  methods: {
    async viewAllReward() {
      const res = await this.$axios.get(config.rewardCustomer.url)
      this.rewardData = res.data
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #dddddd;
  height: 25px; 
}
.record{
  padding: 10px;
}
</style>
