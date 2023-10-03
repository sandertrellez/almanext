import {useContext, useEffect} from "react";
import { ChatContext } from '@/context/chats';

const BodyChat = () => {
    
  const {chats} = useContext(ChatContext);
  console.log(chats);

    return (
        <div className="mx-2 bg-gray-500 w-3/4 p-2">
          <h1>En chat</h1>
          {
            chats? (            
                chats.map((chat) => (
                <div key={chat._id}>
                    <h2>{chat.template}</h2>
                </div>
              ))
            ):(
              <h1>No hay chat</h1>
            )             
          }
        </div>
    );
}

export default BodyChat