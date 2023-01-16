export default {
  name: 'apiManager',

  getAllProductsFromDb: function () {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/master-thesis-backend/')
      .then(res=>res.json())
      .then(json => {
        resolve(json)
      })
    })
  },
  postMessageToDb: function (requestOptions: Object) {
    return new Promise((resolve, reject) => {
      fetch('master-thesis-backend/', requestOptions)
      .then(response => {
        console.log(response)
      })
    })
  }
}