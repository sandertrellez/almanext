import { ChatContext } from "@/context/chats"
import { useContext } from "react";

export default function ItemChat({to, text}) {
    const {cargarChats} = useContext(ChatContext);
    //console.log(chat);
    
    return (
        <li className="bg-gray-500">
            <a href="#" onClick={() =>{
                cargarChats(to);
            }} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="w-10">
                    <img src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/user-256.png" />
                </div>
                <div className="align-top w-full">
                    <div className="ml-3">
                        <span>{to}</span>
                    </div>
                    <div className="ml-3">
                        <span className=" text-xs">{text}</span>
                        <span className="float-right px-2 ml-3 text-sm rounded-full dark:bg-gray-700 dark:text-gray-300">3</span>
                    </div>
                </div>
            </a>            
        </li>
    )    
}