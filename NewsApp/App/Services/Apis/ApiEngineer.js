

const url = 'https://newsapi.org/v1/'


const validateResult = (result) => {
    return new Promise((resolve, reject) => {
      result.then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
            console.log(data, 'ALO')
            resolve(data)
        }
        const e = data.message;
        reject(e)
      })
      .catch((err) => {
        reject(err)
      })
    })

    
  }

const get = (name, params) => {
    var esc = encodeURIComponent
    var query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k])).join('&')
    const URL = url + name + '?' + query
    return validateResult(fetch(URL))
}

export default {
    get,
}
