import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import Constants from 'expo-constants';

// Firebase Configuration
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.FIREBASE_API_KEY,
  authDomain: Constants.expoConfig?.extra?.FIREBASE_DOMAIN,
  projectId: Constants.expoConfig?.extra?.FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export Android Client ID
export const androidClientId = Constants.expoConfig?.extra?.ANDROID_CLIENT_ID;
export const webClientId = Constants.expoConfig?.extra?.EXPO_CLIENT_ID;


export { app, auth, signInWithCredential, GoogleAuthProvider };
