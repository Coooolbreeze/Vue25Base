import model from 'model'
import notify from '../components/notification/function'
import Token from '../model/token'

export default {
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          Token.set(data)
          notify({
            content: '登录成功'
          })
          resolve()
        })
    })
  }
}
