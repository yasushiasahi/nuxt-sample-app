import axios from 'axios'

const paths = {
  SIGN_IN: 'sign-in'
}

const http = axios.create({
  baseURL: '/api/'
})

const success = (res) => [true, res.data]

const failure = (err) => [false, err]

const get = (apiName) =>
  http
    .get(paths[apiName])
    .then(success)
    .catch(failure)

const post = (apiName, data) =>
  http
    .post(paths[apiName], data)
    .then(success)
    .catch(failure)

export default { get, post }
