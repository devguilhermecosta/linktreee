import { ReactNode, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { auth } from "../services/firebaseConnection"
import { onAuthStateChanged } from "firebase/auth"


interface PrivateProps {
  children: ReactNode;
}

export default function Private({ children }: PrivateProps){
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user?.uid,
          email: user?.email,
        }

        localStorage.setItem('@reactlinks', JSON.stringify(userData));

        setLoading(false);
        setSigned(true);

      } else {
        setSigned(false);
        setLoading(false);
      }
    })

    return () => {
      unsub();
    }
  
  }, [])

  if (loading) {
    return <div></div>
  }

  if (!signed) {
    return <Navigate to="/login" />
  }

  return children
}