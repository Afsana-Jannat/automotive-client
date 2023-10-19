import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // google Login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    // sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authentication = {
        googleLogin,
        createUser,
        signin
    }
   

    return (
        <AuthContext.Provider value={ authentication }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;