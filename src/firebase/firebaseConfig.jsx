import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDVLp4BYU1LamG2SsvX6Q1AHI2E9o9yrc0',
  authDomain: 'forex-website-5a234.firebaseapp.com',
  projectId: 'forex-website-5a234',
  storageBucket: 'forex-website-5a234.appspot.com',
  messagingSenderId: '958908371942',
  appId: '1:958908371942:web:7bdaf92a26613a6561fc27',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
