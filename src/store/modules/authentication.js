import http from '../../http'

const actions = {
  LOGIN: ({ commit }, payload) =>
    http.post('/auth/login', { ...payload })
      .then(response => commit({ type: 'LOGIN', response })),

  REGISTER: ({ commit }, payload) =>
    http.post('/auth/register', { ...payload })
      .then(response => commit({ type: 'LOGIN', response }))
}

const mutations = {

}
