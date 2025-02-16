import { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';
import { signInWithCredential, GoogleAuthProvider, getAuth, User } from 'firebase/auth';
import { app, androidClientId, webClientId } from '../firebaseConfig';
const auth = getAuth(app);

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  // Google Sign-In Request
  const [, googleResponse, promptAsync] = useIdTokenAuthRequest({
    selectAccount: true,
    webClientId,
    androidClientId,
  });

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  // Handle Google Login
  useEffect(() => {
    if (googleResponse?.type === 'success') {
      const credential = GoogleAuthProvider.credential(googleResponse.params.id_token);
      signInWithCredential(auth, credential);
    }
  }, [googleResponse]);

  return (
    <>
      {user ? (
        <>
          <Text>Welcome, {user.displayName}</Text>
          <Button title="Logout" onPress={() => auth.signOut()} />
        </>
      ) : (
        <Button title="Login with Google" onPress={() => promptAsync()} />
      )}
    </>
  );
};

export default GoogleAuth;
