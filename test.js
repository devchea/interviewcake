const clickHeels = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`I want to go to ${location}`)
    if (location === 'home') {
      resolve('Home is correct, let\'s go home')
    } else {
      reject('Sorry, we can only go home')
    }
  })
}

const processRequest = (response) => {
  return new Promise((resolve, reject) => {
    console.log('Processing response')
    resolve(`Extra information + ${response}`)
  })
}

clickHeels('home')
  .then(response => {
    console.log('Response Received')
    return processRequest(response)
  })
  .then(processResponse => {
    console.log(processResponse)
  })
  .catch(err => {
    console.log(err);
  })