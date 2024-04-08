import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/Firebase.config';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //create user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Login with github

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //logOut

  const logOut = () => {
    return signOut(auth);
  };

  //profileupdsate

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: { name },
      photoURL: { photo },
    });
  };

  const allInfo = {
    user,
    createUser,
    signIn,
    googleLogin,
    githubLogin,
    logOut,
    profileUpdate,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        //  setLoading(false);
      } else {
        setUser(null);

        //  setLoading(false);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
