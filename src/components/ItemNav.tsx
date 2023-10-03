
import Link from "next/link";

const ItemNav = ({name, href}) => {
    return (
        
        <li>
            <span className="block p-0 hover:text-gray-500 text-white">
                <Link href={href}>{name}</Link>
            </span>
        </li>
    )
}


export default ItemNav;