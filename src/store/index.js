import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('todo-lists')

const store = new Vuex.Store({
  state: {
      lists: savedLists ? JSON.parse(savedLists): [
        {
          title: 'Backlog',
        },
        {
          title: 'Todo',
        },
        {
          title: 'Doing',
        }
      ],
  },
  mutations: {
    addlist(state, payload) {
        state.lists.push({ title: payload.title, part:payload.part, priority:payload.priority })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
  },
  actions: {
    addlist(context, payload) {
        context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
  },
  getters: {
  },
})

store.subscribe((mutation, state) => {
    localStorage.setItem('todo-lists', JSON.stringify(state.lists))
})

export default store