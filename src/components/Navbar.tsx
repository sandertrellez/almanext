import Button from './Button';
import ItemNav from './ItemNav';

export default function Navbar() {

    return(
        
        <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3" alt="Logo"/>
                    <span className="text-2xl font-semibold dark:text-white">Alma</span>
                </a>

                <div className="flex order-2">
                    <Button text="Salir"/>
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