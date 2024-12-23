import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from './../firebase/firebase.init';

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser,updateData)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth,provider)
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    const authInfo = {
        user,setUser,loading,setLoading,createUser,signIn,updateUserProfile,signInWithGoogle

    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }

    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
