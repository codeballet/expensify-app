const promise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my data')
    // reject('Something went wrong')
  }, 1500)
})

// console.log('before')

// promise.then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// })

console.log('after')

const processData = async () => {
  const data = await promise()
  console.log(data)
}

processData()