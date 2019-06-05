import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emails: [
      {
        id: 0,
        from: "Marine Carboni",
        starred: true,
        inTrash: false,
        unRead: true,
      },
      {
        id: 1,
        from: "Astor Carboni",
        starred: false,
        inTrash: false,
        unRead: true,
      },
      {
        id: 2,
        from: "Minette Faivre",
        starred: true,
        inTrash: false,
        unRead: true,
      },
      {
        id: 3,
        from: "Didi Blackos",
        starred: false,
        inTrash: false,
        unRead: true,
      },
    ]
  },
  mutations: {
    TOGGLE_STAR(state, emailId) {
      state.emails[emailId].starred = !state.emails[emailId].starred
    },
    TOGGLE_IN_TRASH(state, emailId) {
      state.emails[emailId].inTrash = !state.emails[emailId].inTrash
      state.emails[emailId].starred = false
    }
  },
  actions: {
    
  },
  getters: {
    totalEmailsNumber: state => {
      return state.emails.length
    },
    totalEmailsInboxNumber: state => {
      return state.emails.filter(email => !email.inTrash).length
    },
    totalStarredEmailsNumber: state => {
      return state.emails.filter(email => email.starred).length
    },
    totalInTrashEmailsNumber: state => {
      return state.emails.filter(email => email.inTrash).length
    },


    emailsInbox: state => {
      return state.emails.filter(email => !email.inTrash)
    },
    emailsInTrash: state => {
      return state.emails.filter(email => email.inTrash)
    },
    emailsInStarred: state => {
      return state.emails.filter(email => email.starred)
    },
  }
})
