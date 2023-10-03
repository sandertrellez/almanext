import {useContext, useEffect} from "react";
import { ChatContext } from '@/context/chats';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFaceLaugh,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";



const BodyChat = () => {
    
  const {cargarChats, chats, to, text, setText} = useContext(ChatContext);

  const sentMessage = async () => {
    const headers = {
      //'Authorization': 'Bearer '+this.token,
      "Content-Type": "application/json"
    }

    const dataJson = {
      "to":to,
      "text": text        
    };

    const data = JSON.stringify(dataJson)
    await fetch("http://localhost:3002/message/sendMessage",{
      method: "POST",
      headers: headers,
      body: data  ,
      redirect: 'follow'
    });
                  
    const inputDOM =document.getElementById('text');    
    inputDOM.value='';

    setText("");

    cargarChats(to);
  }

    return (
        <div className="mx-2 bg-gray-500 w-3/4 p-2 " >
          <h1 className="font-bold	">Chat con {to}</h1>
          <div className="float-none overflow-auto">          
            {
              chats? (
                  chats.map((chat) => (
                  <div key={chat._id} className="bg-gray-400 my-2 p-2 rounded-md w-4/5 float-right">
                      <h2>{chat.text ||chat.template}</h2>
                      <span className="text-xs float-right">{chat.createdAt}</span>
                  </div>
                ))
              ):(
                <h1>No hay chat</h1>
              )

            }
          </div>
          <div className="flex w-full">
            <div className=" w-1/12 text-3xl text-center	text-gray-800">
            <Button
                text={<FontAwesomeIcon icon={faFaceLaugh}/>}              
              />
            </div>

            <div className="w-10/12 ">
              <textarea name="text" id="text" rows="2" className="w-full rounded-md"
                onKeyUp={(e)=>{
                  setText(e.target.value);                  
                }}
               
                >
              </textarea>              
            </div>

            <div className=" w-1/12 text-3xl text-center	text-gray-800">
              <Button 
                text={<FontAwesomeIcon icon={faPaperPlane}/>}
                event={sentMessage}           
              />
            </div>
          </div>

        </div>
    );
}

export default BodyChat