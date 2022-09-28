import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'

import '@fortawesome/fontawesome-free/js/all'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSy-RzIaNaJo6qRnl-5yf0Zs1lrWcaoTQ",
    authDomain: "istak-2208e.firebaseapp.com",
    projectId: "istak-2208e",
    storageBucket: "istak-2208e.appspot.com",
    messagingSenderId: "793410231092",
    appId: "1:793410231092:web:e0721673a67e977c90e361",
    measurementId: "G-LK70WM7S2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createApp(App).use(router).mount('#app')
