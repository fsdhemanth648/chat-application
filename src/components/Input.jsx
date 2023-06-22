import React, { useContext, useState } from 'react'
import {MdAttachFile} from 'react-icons/md'
import {BiImageAdd} from 'react-icons/bi'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from "uuid";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [err, setErr] = useState("");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      //console.log(storageRef);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            try{
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });
            }catch(err){
              setErr(true);
            }
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className='input'>
      {err && <h5>Error in database, Try again after sometime...</h5>}
      <input type="text" 
        placeholder='Type Something...'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className='sendOptions'>
        <MdAttachFile className='largeIcon'/>
        <input type='file' style={{display: "none"}} id='file' onChange={(e) => setImg(e.target.files[0])}/>
        <label htmlFor='file'>
            <BiImageAdd className='largeIcon'/>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
