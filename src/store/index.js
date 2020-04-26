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
  // .format('YYYY-MM-DD')
  mutations: {
    addlist(state, payload) {
        state.lists.push({ title: payload.title, 
                           part: payload.part, 
                           priority: payload.priority, 
                           company: payload.company, 
                           deadline: payload.deadline,
                           author: payload.author,
                           responsiblePorson: payload.responsiblePorson,
                           contents:[],
                          })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addContentToList(state, payload) {
      state.lists[payload.listIndex].contents.push({ body: payload.body })
    },
    removeContentFromList(state, payload) {
      state.lists[payload.listIndex].contents.splice(payload.contentIndex, 1)
    },
  },
  actions: {
    addlist(context, payload) {
        context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addContentToList(context, payload) {
      context.commit('addContentToList', payload)
    },
    removeContentFromList(context, payload) {
      context.commit('removeContentFromList', payload)
    },
  },
  getters: {
  },
})

store.subscribe((mutation, state) => {
    localStorage.setItem('todo-lists', JSON.stringify(state.lists))
})

export default store