//States
const state = () => ({
  mediaCollection: [], // Media Collection
  systemEventData: [],
})

//Getters
const getters = {
  // Get Media Collection Data
  GetMediaCollectionData: (state) => state.mediaCollection,
  // Get System Event Data
  GetSystemEvent: (state) => state.systemEventData,
}

// Mutation
const mutations = {
  // Set Media Collection Data
  SET_MEDIA_COLLECTION(state, payload) {
    state.mediaCollection = payload
  },
  // Set System event Data
  SET_SYSTEM_EVENT(state, payload) {
    state.systemEventData = payload
  },
  // Clear Media Collection Data
  CLEAR_MEDIA_COLLECTION(state) {
    state.mediaCollection = ''
  },
}

// Action
const actions = {
  // Set Media Collection Data
  setMediaCollection({ commit }, payload) {
    commit('SET_MEDIA_COLLECTION', payload)
  },
  // Set Media Collection Data
  setSystemEvent({ commit }, payload) {
    commit('SET_SYSTEM_EVENT', payload)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
