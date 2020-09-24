<template>
  <div class="pl-5" style="height: 1000px">
    <v-row class="createReward d-flex align-center pa-4">
      <h4 class="mr-auto">Create Reward</h4>

      <v-btn class="ml-auto text-white primary" small>Create</v-btn>
    </v-row>

    <hr class="borderMain" />

    <v-row class="align-center">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Active </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-switch v-model="active" height="0" color="primary"></v-switch>
      </v-col>
    </v-row>

    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Title </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-text-field
          label="title"
          height="35"
          class="inputClass"
          :dense="true"
          flat
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Sub Title </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-text-field
          label="Sub title"
          height="35"
          class="inputClass"
          :dense="true"
          flat
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Description </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6" class="mt-5">
        <v-textarea
          height="80"
          :no-resize="false"
          solo
          label="description"
        ></v-textarea>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center pa-1 inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Image </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-avatar class="pa-1">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-btn small class="ml-2" v-if="changeCollection == false"
          >Search Collection</v-btn
        >
        <span v-if="changeCollection">
          <v-btn small class="ml-2">Change</v-btn>
          <v-btn small class="ml-2">Remove</v-btn>
        </span>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center pa-1 inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Action Type </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-select
          :items="actionType"
          height="35"
          flat
          class="inputClass"
          :dense="true"
          label="Please select one"
          solo
        ></v-select>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center pa-1 inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Action </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-flex>
          <h4>First Stage</h4>
          <p>First Finshed stage</p>
          <v-btn small outlined>Chnage</v-btn>
        </v-flex>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Points </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-text-field
          label="experience points"
          height="35"
          class="inputClass"
          :dense="true"
          flat
          solo
        ></v-text-field>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-row class="align-center inputDiv">
      <v-col cols="6" lg="3" xs="6" sm="6"><label>Prize </label> *</v-col>
      <v-col cols="6" lg="9" xs="6" sm="6">
        <v-switch v-model="prize" height="0" color="primary"></v-switch>
      </v-col>
    </v-row>
    <hr class="border" />
    <v-flex v-if="prize">
      <v-row class="align-center inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Prize </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-text-field
            label="Prize title"
            height="35"
            class="inputClass"
            :dense="true"
            flat
            solo
          ></v-text-field>
        </v-col>
      </v-row>

      <hr class="border" />
      <v-row class="align-center inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"
          ><label>Prize Description </label> *</v-col
        >
        <v-col cols="6" lg="9" xs="6" sm="6" class="mt-5">
          <v-textarea
            height="80"
            no-resize="false"
            solo
            label="Prize description"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewPrize: false,
      changeCollection: true,
      active: true,
      prize: false,
      actionType: ['System Event', 'Trail'],
    }
  },
}
</script>
<style lang="scss" scoped>
.borderMain {
  border: 0.3px solid #e8e8e8;
  height: 1px;
}
.border {
  border: 0.3px solid #f2f2f2;
  height: 1px;
}
.inputClass {
  height: 40px;
  border: 1px solid #dddddd;
}
.createReward {
  background-color: #ffff;
}
.inputDiv label {
  font-size: 14px;
  color: #333;
}
</style>
