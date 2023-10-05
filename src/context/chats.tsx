import {createContext, useState, useContext} from 'react';
import { AuthContext } from './auth';

const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [chats, setChats] = useState();//Mensajes recuperados mostrados en pantalla
    const [to, setTo] = useState();//numero del quien envió en mensaje leido
    const [text, setText] = useState();//Texto de mensaje a enviar
    
    const { getCookie } = useContext(AuthContext)

    const cargarChats = (to: string ) => {
        setTo(to);

        const headers = {
            'Authorization': 'Bearer '+getCookie("token"),
            "Content-Type": "application/json"
        }

        fetch("http://localhost:3002/message/"+to,{
            headers: headers
        })
        .then(res => res.json())
        .then(data => {
            setChats(data);
        })
        .catch(error => console.log(error))
    }

    return (
        <ChatContext.Provider
            value={{
                chats,
                to,
                text,
                setText,
                cargarChats
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider}