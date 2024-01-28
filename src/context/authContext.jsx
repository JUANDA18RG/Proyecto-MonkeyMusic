import { auth } from "../firebase/firebase.config";
import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import PropTypes from "prop-types";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // No es necesario retornar una función de limpieza aquí

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const responseGoogle = new GoogleAuthProvider();
      await signInWithPopup(auth, responseGoogle);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const responseFacebook = new FacebookAuthProvider();
      await signInWithPopup(auth, responseFacebook);
    } catch (error) {
      console.error("Error al iniciar sesión con Facebook:", error.message);
    }
  };

  const loginWithGithub = async () => {
    try {
      const responseGithub = new GithubAuthProvider();
      await signInWithPopup(auth, responseGithub);
    } catch (error) {
      console.error("Error al iniciar sesión con Github:", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <authContext.Provider
      value={{
        loginWithGoogle,
        loginWithFacebook,
        loginWithGithub,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
