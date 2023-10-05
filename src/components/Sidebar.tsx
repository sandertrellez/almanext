"use client"
import { AuthContext } from "@/context/auth";
import ItemChat from "./ItemChat";
import {useState, useEffect, useContext} from "react";
export default function Sidebar () {

    const { getCookie } = useContext(AuthContext);


    const [message, setMessage] = useState();       

    const callMessageWhatsapp = () =>{

        const headers = {
            'Authorization': 'Bearer '+getCookie("token"),
            "Content-Type": "application/json"
        }

        fetch('http://localhost:3002/message',{
            headers: headers
        }).
        then(response => response.json())
        .then((data) =>{
            setMessage(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(
        callMessageWhatsapp
        ,[]);

    return (
        <aside className="w-1/4">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
                <ul className="space-y-1">
                    {message ? (
                        message.map(({message}) => (
                            <ItemChat
                                key={message._id}
                                to={message.to}
                                text={message.text || message.template}
                            />
                        ))
                    ) : (
                        <p>No hay mensajes disponibles.</p>
                    )}
                </ul>
            </div>
        </aside>
    )
    
}