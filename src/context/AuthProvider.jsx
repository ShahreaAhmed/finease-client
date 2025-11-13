// import React, { useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import {auth} from '../firebase/firebase.config';
// import { AuthContext } from './AuthContext';

// const googleProvider = new GoogleAuthProvider()

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signInUser = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const updateProfileFunc = (displayName, photoURL) => {
//     return updateProfile(auth.currentUser, {
//       displayName,
//       photoURL,
//     });
//   };

//     const signOutUser = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser)
//             setLoading(false)
//         })

//         return () => {
//             unSubscribe()
//         }
//     }, [])

//     const authInfo = {
//         createUser,
//         signInUser,
//         signInWithGoogle,
//         signOutUser,
//         updateProfileFunc,
//         user,
//         loading

//     }

//     return (
//         <AuthContext value={authInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;











import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  


  const authInfo = {
    user,
    setUser,
    createUser,
    updateUserProfile,
    signInUser,
    signInWithGoogle,
    signOutUser,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;













// import React, { useEffect, useState } from 'react';
// import { AuthContext } from './AuthContext';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import { auth } from '../firebase/firebase.config';


// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signInUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const signInWithGoogle = () =>{
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const updateUserProfile = (displayName, photoURL) => {
//             return updateProfile(auth.currentUser, {displayName, photoURL})
//     }

    // const signOutUser = () =>{
    //     setLoading(true);
    //     return signOut(auth);
    // }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             // console.log(currentUser)
//             setLoading(false);
//         })

//         return () => {
//             unsubscribe()
//         }
//     }, [])

//     const authInfo = {
//         createUser,
//         updateUserProfile,
//         signInUser,
//         signInWithGoogle,
//         signOutUser,
//         user,
//         loading
//     }
//     return (
//         <AuthContext value={authInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;