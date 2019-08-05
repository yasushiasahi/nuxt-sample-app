const state = () => ({ entryForm: { hoge: 1, fuga: 2 } })

const getters = {
  get: (state) => state.entryForm
}

const mutations = {
  setEntryForm: (state, { entryForm }) => {
    state.entryForm = entryForm
  }
}

const actions = {
  get(context) {
    console.log(context)
    return context.getters.entryForm
  },
  set: ({ commit }, { entryForm }) => {
    console.log('entryForm', entryForm)
    commit({ type: 'setEntryForm', entryForm })
  }
}

export { state, mutations, getters, actions }
