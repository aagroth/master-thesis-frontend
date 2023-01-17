export default {
  name: 'apiManager',
  // sending fetch call to backend and retreives array of products from database
  getAllProductsFromDb: function () {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/master-thesis-backend/')
      .then(res=>res.json())
      .then(json => {
        resolve(json)
      })
    })
  },
  // Posting message to backend
  postMessageToDb: function (requestOptions: Object) {
    return new Promise((resolve, reject) => {
      fetch('master-thesis-backend/', requestOptions)
      .then(response => {
        resolve(response)
        console.log(response)
      })
    })
  }
}