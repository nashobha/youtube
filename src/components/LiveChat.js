import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from 'react';
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);
  const [liveMsg, setLiveMsg] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 1000);
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20) + ` Welcome to YouTube ${randomNumber}`
      }))
    }, 1500)

    return () => {
      clearInterval(timer);
    }
  }, [])

  
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            chatMessages?.map((chat, index) =>
              <ChatMessage key={index} name={chat?.name} message={chat.message} />
            )
          }
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
          name:"Shobha",
          message:liveMsg
        }))
        setLiveMsg("");
      }}>
        <input className="px-2 w-80" type="text" value={liveMsg} onChange={(e)=>{setLiveMsg(e.target.value)}} />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
