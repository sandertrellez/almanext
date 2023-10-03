import {createContext, useState} from 'react';

const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [chats, setChats] = useState();

    const cargarChats = (to: string ) => {
        fetch("http://localhost:3002/message/"+to)
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
                cargarChats
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider}