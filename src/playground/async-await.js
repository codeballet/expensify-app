const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject("number must be provided")
  }, 2000)
})

const processData = async () => {
  const data = await getDataPromise(2)
  console.log(data)
}

processData().then((data) => {
  console.log('Data', data)
})