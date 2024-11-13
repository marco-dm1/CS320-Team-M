import { useState } from "react";
import {auth,GoogleProvider} from "../../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth"

export const auth = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailSignUp = async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password);
        }catch(err){
            console.error(err);
        }
    };
    const googleSignUp = async()=>{
        try{
            await signInWithPopup(auth,GoogleProvider);
        }catch(err){
            console.error(err);
        }
    };
    const logOut = async()=>{
        try{
            await signOut(auth);
        }catch(err){
            console.error(err);
        }
    };
    return <div>
        <input 
        placeholder = "email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        placeholder = "password"
        onChange={(e)=>setPassword(e.target.value)}
        />
    </div>
}