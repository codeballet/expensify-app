import * as firebase from 'firebase/app' 
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'Microphones',
//   note: 'Lavalier type',
//   amount: 1400,
//   createdAt: 7854029378
// })

// database.ref('notes/-M3uOTGGwAGNoNtxnyvX').update({
//   body: 'Buy food'
// })

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native, Angular, Python'
// })

// const firebaseNotes = {
//   notes: {
//     fjhdgfdg: {
//       title: 'First note',
//       body: 'This is the note'
//     },
//     ijdf0943r: {
//       title: 'Second note',
//       body: 'This is the note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is the note'
// }, {
//   id: '54789dfsa',
//   title: 'Second note',
//   body: 'This is the note'
// }]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   const name = val.name
//   const title = val.job.title
//   const company = val.job.company
//   console.log(`${name} is a ${title} at ${company}`)
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(42)
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(41)
// }, 10500)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Johan Stjernholm',
//   age: 43,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Beijing',
//     country: 'China'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref('attributes').set({
//   height: 172,
//   weight: 73
// }).then(() => {
//   console.log('Added attributes')
// }).catch((e) => {
//   console.log('Adding attributes failed!', e)
// })

// database.ref('isSingle')
//   .set(null)

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Remove succeeded')
//   })
//   .catch((e) => {
//     console.log('Remove failed:', e)
//   })

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston'
// })