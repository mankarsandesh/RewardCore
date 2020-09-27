<template>
  <v-simple-table class="pa-5">
    <template v-slot:default>
      <thead>
        <tr class="header">
          <th width="5%" class="text-left">IMAGE</th>
          <th width="50%" class="text-left">TITLE</th>
          <th width="10%" class="text-left">PIRZE</th>
          <th width="10%" class="text-left">EXP</th>
          <th width="10%" class="text-left">STATUS</th>
          <th width="10%" class="text-left"></th>
        </tr>
      </thead>
      <tbody v-if="rewardData.length == 0">
        <tr class="record" text-center>
          <td colspan="7">There are no Reward</td>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="item in rewardData" :key="item.id" class="record">
          <td><img :src="item.media.url" width="50px" /></td>
          <td>{{ item.title }}</td>
          <td>
            <v-icon color="green" v-if="item.prize"
              >mdi-checkbox-marked-circle</v-icon
            >
            <v-icon color="red" v-if="!item.prize">mdi-close-circle</v-icon>
          </td>
          <td>{{ item.experience }}</td>
          <td>
            <v-icon color="green" v-if="item.active"
              >mdi-checkbox-marked-circle</v-icon
            >
            <v-icon color="red" v-if="!item.active">mdi-cancel</v-icon>
          </td>
          <td>
            <v-icon color="grey" @click="editReward(item.id)"
              >mdi-pencil</v-icon
            >
            <v-icon color="grey" @click="deleteReward(item.id)"
              >mdi-delete</v-icon
            >
          </td>
        </tr>
      </tbody>
      <v-snackbar
        class="mb-5"
        v-model="resultSnackbar"
        :right="'right'"
        :color="resultColor"
      >
        {{ message }}
      </v-snackbar>
    </template>
  </v-simple-table>
</template>

<script>
import config from '~/config/config.global'

export default {
  data() {
    return {
      resultSnackbar: false,
      resultColor: 'green',
      message: '',
      rewardData: [],
    }
  },
  created() {
    // View all Reward Data
    this.viewAllReward()
  },
  methods: {
    // View all Reward Data
    async viewAllReward() {
      try {
        const res = await this.$axios.get(config.rewardCustomer.url)
        this.rewardData = res.data
      } catch (ex) {
        console.log(ex)
      }
    },
    //Edit Reward
    async editReward(rewardID) {
      this.$router.push(`editReward/${rewardID}`)
    },
    // Delete Reward
    async deleteReward(rewardID) {
      try {
        const result = await this.$axios.delete(
          config.rewardCustomer.url + '/' + rewardID
        );        
        if (result.status == 204) {
          this.message = 'Delete Reward Sucessfully'
          this.resultColor = 'red'
          this.resultSnackbar = true
          this.viewAllReward()
        } else {
          this.message = result.message
          this.resultSnackbar = true
        }
      } catch (ex) {
        console.log(ex)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #d0dbe3;
  height: 25px;
}
.record {
  padding: 10px;
}
</style>
