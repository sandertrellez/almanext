"use client"
import { useRouter } from 'next/navigation';
import Button from './Button';
import ItemNav from './ItemNav';
import { useContext } from 'react';
import { AuthContext } from '@/context/auth';

export default function Navbar() {
    const router = useRouter();

    const { getCookie } = useContext(AuthContext);

    if(!getCookie("token")) router.push("/login");

    const logOut = () => {
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/login');
    }

    return(        
        <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3" alt="Logo"/>
                    <span className="text-2xl font-semibold dark:text-white">Alma</span>
                </a>

                <div className="flex order-2">
                    <Button
                    text="Salir"
                    event={logOut}/>
                </div>

                <div className="">
                    <ul className="flex font-medium space-x-8">
                        <ItemNav name="home" href="/"/>
                        <ItemNav name="chats" href="/chats"/>
                        <ItemNav name="clients" href="clients"/>
                        <ItemNav name="setting" href="setting"/>
                    </ul>
                </div>
            </div>
        </nav>
    );    
}