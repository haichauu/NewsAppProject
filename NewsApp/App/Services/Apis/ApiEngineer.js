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

const get = (url) => {
    return validateResult(fetch(url))
}

export default {
    get,
}
