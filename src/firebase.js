
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBu5j17crIrzzQ998nFgR7k-H4hL_iF0aU",
  authDomain: "netflix-clone-5914e.firebaseapp.com",
  projectId: "netflix-clone-5914e",
  storageBucket: "netflix-clone-5914e.appspot.com",
  messagingSenderId: "217255719308",
  appId: "1:217255719308:web:3c480714429bee5c6be6a9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
      const res = await createUserWithEmailAndPassword(auth, 
        email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        })
    } catch(error){
      console.log(error);
      toast.error(error.code.split('/')[1].split('.').join(" "));
    }
}

const login = async (email,password)=>{
  try{
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('.').join(" "));

  }
}

const logout = ()=>{
  signOut(auth);
}
 

export{auth, db, login, signup, logout};