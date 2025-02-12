import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from './../firebase/firebase.init';
import axios from "axios";

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }


    const authInfo = {
        user, setUser, loading, setLoading, createUser, signIn, updateUserProfile, signInWithGoogle, logOut

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://book-nest-server-zeta.vercel.app/jwt', user, { withCredentials: true })
            }
            else {
                axios.post("https://book-nest-server-zeta.vercel.app/logOut", {}, { withCredentials: true })
            }
        })


        return () => {
            unSubscribe()
        }

    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
