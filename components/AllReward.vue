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
      <tbody v-if="rewardData.length == 0">
        <tr  class="record" text-center>
         <td colspan="7">There are no Reward</td>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="item in rewardData" :key="item.id" class="record">
          <td><img :src="item.media.url" width="50px" /></td>
          <td>{{ item.title }}</td>
          <td>
          <v-icon color="green" v-if="item.prize" >mdi-checkbox-marked-circle</v-icon>
          <v-icon  color="red"  v-if="!item.prize" >mdi-cancel</v-icon>
             </td>
          <td>{{ item.experience }}</td>
          <td>
             <v-icon color="green" v-if="item.active" >mdi-checkbox-marked-circle</v-icon>
          <v-icon  color="red"  v-if="!item.active" >mdi-cancel</v-icon>
             </td>
          <td>
            <v-btn>Edit</v-btn>
            <v-btn @click="deleteReward(item.id)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
 
    <v-snackbar
      class="mb-5"
      v-model="resultSnackbar"
      :right="'right'"
      color="red"
    >
      {{ message }}
    </v-snackbar>
  </v-simple-table>
</template>

<script>
import config from '~/config/config.global'

export default {
  data() {
    return {
      resultSnackbar: false,
      message: '',
      rewardData: [],
    }
  },
  created() {
    this.viewAllReward()
  },
  methods: {
    async viewAllReward() {
      const res = await this.$axios.get(config.rewardCustomer.url)
      this.rewardData = res.data;
    },
    async deleteReward(rewardID) {
      const result = await this.$axios.delete(
        config.rewardCustomer.url + '/' + rewardID
      )
      if (result.status == 204) {
        this.message = 'Delete Reward Sucessfully'
        this.resultSnackbar = true

        this.viewAllReward()
      } else {
        this.message = result.message
        this.resultSnackbar = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #dddddd;
  height: 25px;
}
.record {
  padding: 10px;
}
</style>
