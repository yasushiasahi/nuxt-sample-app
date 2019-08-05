const path = {
  CREATE_USER: 'http://icanhazip.com'
}

export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  $axios.stGET = (keyword) =>
    $axios
      .get(path[keyword])
      .then((res) => [true, res.data])
      .catch((err) => [false, err])
}
