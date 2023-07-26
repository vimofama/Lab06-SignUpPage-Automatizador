// Importar el paquete de Firebase completo (incluyendo la inicialización)
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Cargar las variables de entorno de .env
import dotenv from 'dotenv';
dotenv.config();

// Tu web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

function loginUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Inicio de sesión exitoso
      const user = userCredential.user;
      console.log(user);
      // Manejar el inicio de sesión exitoso (por ejemplo, redirigir a una página de inicio de sesión)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // Manejar errores (por ejemplo, mostrar mensajes de error al usuario)
    });
}
