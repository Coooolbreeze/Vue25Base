import axios from 'axios'
import Token from './token'
import notify from '../components/notification/function'
import loading from '../components/loading/function'

const apiConfig = require('../../app.config').api
const { baseURL } = apiConfig

const request = axios.create({
  baseURL: baseURL
})

const handleRequest = params => {
  typeof params === 'string' && (params = {url: params})
  return new Promise((resolve, reject) => {
    const close = loading()
    request({
      url: params.url,
      method: params.method || 'GET',
      headers: { token: Token.get() },
      data: params.data
    }).then(resp => {
      close()
      resolve(resp.data.data)
    }).catch(err => {
      close()
      const resp = err.response
      if (resp.status === 401) {
        Token.refresh().then(_ => {
          resolve(handleRequest(params))
        })
      } else {
        notify({
          content: resp.data.message
        })
        reject(resp)
      }
    })
  })
}

export default {
  login (username, password) {
    return handleRequest({
      url: '/login',
      method: 'POST',
      data: { username, password }
    })
  },
  getMyInfo () {
    return handleRequest('users/self')
  }
}
