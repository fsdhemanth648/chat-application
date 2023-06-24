import React, { useState } from 'react'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth, db, storage} from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      //create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      
      await uploadBytesResumable(storageRef, file).then(()=>{
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try{
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          }catch(err){
            console.log(err);
            setError(true);
            setLoading(false);
          }
        });
      });  
    }catch(err){
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>We Chat...</div>
        <div className='title'>Sign Up</div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Display name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <input type='file'/>
          <button disabled={loading}>Sign Up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {error && <div>Something went wrong...</div>}
        </form>
        <p>Already have an account ? <Link to="/login">Login </Link></p>
        <p style={{
          fontWeight:"bold",
        }}>Please note it is a DEESKTOP application </p>
      </div>
    </div>
  )
}

export default SignUp
