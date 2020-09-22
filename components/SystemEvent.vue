<template>
  <v-flex class="imageCollection pa-4">
    <h3>System Event</h3>
    <v-card class="mt-2" >
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.title" class="font-weight-bold"></v-list-item-title>
              <v-list-item-title v-text="item.description"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
 items: [
        {
          title: 'First Trail',
          description: 'First Finsh Trial',
        },
        {
          title: 'First Stage',
          description: 'First Finsh Stage',
        },
       {
          title: 'First Marker',
          description: 'First Finsh Marker',
        },
        {
          title: 'Profile',
          description: 'First Finsh Profile',
        },
 ],
 model:1,

    }
  }
}
</script>
<style scoped>
.imageCollection {
  background-color: #f3f3f3;
}
</style>
