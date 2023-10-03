"use client"
import ItemChat from "./ItemChat";
import {useState, useEffect} from "react";
export default function Sidebar () {


    const [message, setMessage] = useState();       

    const callMessageWhatsapp = () =>{
        fetch('http://localhost:3002/message').
        then(response => response.json())
        .then((data) =>{
            setMessage(data);
            //console.log(data);
        }).catch(error => console.log(error))
    }

    useEffect(
        callMessageWhatsapp
        ,[]);

    return (
        <aside className="w-1/4">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
                <ul className="space-y-1">
                    {message ? (
                        message.map((msg) => (
                            <ItemChat
                                key={msg._id}
                                to={msg.to}
                                text={msg.template}
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