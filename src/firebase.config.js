import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYKM4IHvyCwieQnOHYqmbTNdMaJ4Y2wvs',
  authDomain: 'house-marketplace-app-b82af.firebaseapp.com',
  projectId: 'house-marketplace-app-b82af',
  storageBucket: 'house-marketplace-app-b82af.appspot.com',
  messagingSenderId: '971931000439',
  appId: '1:971931000439:web:976a224b69219045083072',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
