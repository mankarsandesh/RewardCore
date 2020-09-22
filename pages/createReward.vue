<template>
  <v-row>
    <v-col class="mb-8" lg="3" xs="6" sm="6">
      <v-row class="d-flex align-center pa-4">
        <h4 class="mr-auto">Create Reward</h4>

        <v-btn class="ml-auto" small>Create</v-btn>
      </v-row>

      <hr class="borderMain" />

      <!-- <v-row class="align-center pa-4 inputDiv">
        <v-flex cols="3" lg="5" md="1"><label>Active </label> *</v-flex>
        <v-flex>
          <v-switch v-model="active" height="20" class="inputClass"></v-switch>
        </v-flex>
      </v-row> -->

      <v-row class="align-center pa-1">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Active </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-switch v-model="active" height="20" color="orange" class="inputClass"></v-switch>
        </v-col>
      </v-row>

      <hr class="border" />
      <v-row class="align-center pa-1 inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Title </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-text-field
            label="title"
            height="40"
            class="inputClass"
            :dense="true"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="border" />
      <v-row class="align-center pa-1 inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Sub Title </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-text-field
            label="Sub title"
            height="40"
            class="inputClass"
            :dense="true"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="border" />
      <v-row class="align-center inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"
          ><label>Description </label> *</v-col
        >
        <v-col cols="6" lg="9" xs="6" sm="6" class="mt-5">
          <v-textarea
            height="60"
            no-resize=false
            solo
            name="input-5-7"
            label="description"
          ></v-textarea>
        </v-col>
      </v-row>
      <hr class="border" />
      <v-row class="align-center pa-1 inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Image </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-text-field
            label="title"
            height="40"
            class="inputClass"
            :dense="true"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="border" />
      <v-row class="align-center pa-1 inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"
          ><label>Action Type </label> *</v-col
        >
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-select
          :items="actionType"
           height="30"
          class="inputClass"
          label="Please select one"
          solo
        ></v-select>
        </v-col>
      </v-row>
      <hr class="border" />
      <v-row class="align-center pa-1 inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Points </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
          <v-text-field
            label="experience points"
            height="40"
            class="inputClass"
            :dense="true"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="border" />
       <v-row class="align-center pa-1 inputDiv">
        <v-col cols="6" lg="3" xs="6" sm="6"><label>Prize </label> *</v-col>
        <v-col cols="6" lg="9" xs="6" sm="6">
         <v-switch v-model="active" height="20" color="orange" class="inputClass"></v-switch>
        </v-col>
      </v-row>
      <hr class="border" />



      
    </v-col>
    <v-col class="mb-8 text-center" lg="5" xs="6" sm="6">
      <v-card flat class="banner-2 justify-center text-center" max-width="344">
        <h2>Show Extra Reward Info</h2>
      </v-card>
    </v-col>
    <v-col class="mb-8" lg="3" xs="6" sm="6">
      <v-card flat class="banner-2 justify-center text-center" max-width="344">
        <h2>View Reward Card</h2>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      active: true,
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
}
.inputDiv {
}
.inputDiv label {
  font-size: 14px;
  color: #333;
}
</style>
