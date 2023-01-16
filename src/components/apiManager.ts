export default {
  name: 'apiManager',

  getAllProducts: function () {
    console.log('we got here')
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/master-thesis-backend')
      .then(res=>res.json())
      .then(json => {
        resolve(json)
      })
    })
  }
}